interface ContactEnv {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

interface ContactContext {
  request: Request;
  env: ContactEnv;
}

const json = (body: Record<string, unknown>, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });

const htmlEntities: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;',
};

const escapeHtml = (value: string): string =>
  value.replace(/[&<>'"]/g, (character) => htmlEntities[character] ?? character);

export async function onRequestPost({ request, env }: ContactContext): Promise<Response> {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > 12_000) return json({ error: '문의 내용이 너무 깁니다.' }, 413);

  let body: { email?: unknown; message?: unknown; website?: unknown };
  try {
    body = await request.json();
  } catch {
    return json({ error: '요청 형식을 확인해주세요.' }, 400);
  }

  // Honeypot: bots commonly fill hidden fields. Return success without sending.
  if (typeof body.website === 'string' && body.website.trim()) return json({ ok: true });

  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email) || email.length > 254) {
    return json({ error: '답변받을 이메일 주소를 확인해주세요.' }, 400);
  }
  if (message.length < 10 || message.length > 2_000) {
    return json({ error: '문의 내용은 10자 이상 2,000자 이하로 작성해주세요.' }, 400);
  }
  if (!env.RESEND_API_KEY) {
    return json({ error: '문의 메일 설정이 아직 완료되지 않았습니다.' }, 503);
  }

  const recipient = env.CONTACT_TO_EMAIL || 'danhana531@gmail.com';
  const sender = env.CONTACT_FROM_EMAIL || 'Dana Portfolio <onboarding@resend.dev>';
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: email,
      subject: `[Dana Portfolio] ${email}님의 새 문의`,
      text: `보낸 사람: ${email}\n\n${message}`,
      html: `<p><strong>보낸 사람</strong>: ${safeEmail}</p><hr /><p>${safeMessage}</p>`,
    }),
  });

  if (!response.ok) {
    console.error('Resend request failed', response.status, await response.text());
    return json({ error: '메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.' }, 502);
  }

  return json({ ok: true });
}

export function onRequestGet(): Response {
  return json({ error: '허용되지 않은 요청입니다.' }, 405);
}

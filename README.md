# Dana Portfolio

Son Danha의 제품 기획, AI·데이터 프로젝트, 백엔드 개발 경험을 소개하는 개인 포트폴리오입니다.

## Tech stack

- Astro 5 (static site generation)
- React 19 islands
- Tailwind CSS 4
- Framer Motion
- Cloudflare Pages

## Local development

```sh
npm install
npm run dev
```

프로덕션 빌드는 다음 명령으로 확인합니다.

```sh
npm run build
npm run preview
```

## Content and structure

- `src/data/portfolio.json`: 프로필, 프로젝트, 기술, 타임라인 콘텐츠
- `src/components/sections/`: 페이지 섹션
- `src/components/ui/`: React 기반 애니메이션 UI
- `src/styles/global.css`: DH 브랜드 팔레트와 전역 디자인 토큰
- `public/images/projects/`: 프로젝트 이미지
- `functions/api/contact.ts`: 문의 폼 메일 발송용 Cloudflare Pages Function
- `public/_routes.json`: `/api/*`만 Pages Function으로 전달하고 정적 자산 요청은 제외

## Deployment

`main` 브랜치를 Cloudflare Pages에 연결하는 정적 배포를 사용합니다.

- Build command: `npm run build`
- Output directory: `dist`
- Planned production URL: `https://sondanha.pages.dev`

### Contact form environment variables

문의 폼은 Pages Function에서 Resend API를 호출합니다. Cloudflare Pages의 Production 환경변수에 다음 값을 설정해야 실제 메일이 발송됩니다.

- `RESEND_API_KEY`: Resend API key (Secret)
- `CONTACT_TO_EMAIL`: 문의를 받을 이메일 주소
- `CONTACT_FROM_EMAIL`: Resend에서 인증된 발신 주소. 생략하면 테스트 발신 주소 사용

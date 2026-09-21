import { type ReactNode } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

interface ProjectCardProps {
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly thumbnail: string;
  readonly thumbnailPosition?: 'center' | 'top';
  readonly thumbnailFit?: 'cover' | 'contain';
  readonly tags: readonly string[];
  readonly detailUrl?: string;
  readonly liveUrl?: string;
  readonly githubUrl?: string;
  readonly secondaryUrl?: string;
  readonly secondaryLabel?: string;
  readonly isFeatured?: boolean;
}

/** Project card with LiquiGlass surface and restrained elevation interaction. */
export default function ProjectCard({
  title,
  description,
  category,
  thumbnail,
  thumbnailPosition = 'center',
  thumbnailFit = 'cover',
  tags,
  detailUrl,
  liveUrl,
  githubUrl,
  secondaryUrl,
  secondaryLabel = 'Repository',
  isFeatured = false,
}: ProjectCardProps): ReactNode {
  const isLogoCard = thumbnailFit === 'contain';

  const visual = (
    <div
      className={`relative w-full overflow-hidden bg-transparent ${
        isFeatured ? 'aspect-[16/10] lg:h-full lg:aspect-auto' : 'aspect-video'
      }`}
    >
      {/* A-Voice Chat: 실제 로고 + 글로우 */}
      {isLogoCard ? (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/images/projects/a-voice-chat-logo.png"
            alt="A-Voice Chat 로고"
            loading="eager"
            style={{
              width: '78%',
              maxWidth: 320,
              height: 'auto',
              opacity: 0.72,
              filter:
                'drop-shadow(0 2px 12px rgba(13, 27, 54, 0.2)) drop-shadow(0 0 4px rgba(255,255,255,0.5))',
            }}
          />
        </div>
      ) : thumbnail ? (
        <img
          src={thumbnail}
          alt={`${title} 프로젝트 미리보기`}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] ${
            thumbnailPosition === 'top' ? 'object-top' : 'object-center'
          }`}
          loading="lazy"
          style={{ zIndex: 1, mixBlendMode: 'multiply', opacity: 0.82 }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>
          <span className="text-4xl text-[var(--color-text-tertiary)]">
            {category === 'Product' ? '🚀' : '📚'}
          </span>
        </div>
      )}
    </div>
  );

  return (
    <LazyMotion features={domAnimation}>
      <m.a
        href={detailUrl || undefined}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4 }}
        className={`project-glass-card group relative block h-full overflow-hidden rounded-[1.5rem] transition-all duration-300 ${
          isFeatured ? 'lg:grid lg:min-h-[360px] lg:grid-cols-[0.9fr_1.1fr]' : 'flex flex-col'
        }`}
      >
        {/* Visual area — 링크 제거, m.a가 카드 전체를 감쌈 */}
        <div className={`${isFeatured ? 'lg:order-2 lg:h-full lg:min-h-0' : ''}`}>
          {visual}
        </div>

        {/* Content */}
        <div className={`relative flex flex-1 flex-col ${isFeatured ? 'justify-center p-8 sm:p-10 lg:p-12' : 'p-6'}`}>
          {!isFeatured && (
            <span className="mb-5 w-fit rounded-md bg-[var(--color-bg-secondary)] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
              {category}
            </span>
          )}
          <h3 className={`${isFeatured ? 'text-2xl sm:text-3xl' : 'text-lg'} mb-3 font-bold tracking-tight text-[var(--color-text-primary)]`}>
            {title}
          </h3>
          {description && (
            <p className={`${isFeatured ? 'max-w-md text-base' : 'text-sm'} mb-5 leading-relaxed text-[var(--color-text-secondary)]`}>
              {description}
            </p>
          )}

          {/* Tags */}
          {!isFeatured && tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-[var(--color-bg-secondary)] px-2 py-0.5 text-xs text-[var(--color-text-tertiary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Links — e.stopPropagation으로 카드 이동과 충돌 방지 */}
          <div className="mt-auto flex items-center gap-4 pt-1" onClick={(e) => e.stopPropagation()}>
            {detailUrl && (
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)]">
                자세히 보기
                <span aria-hidden="true">→</span>
              </span>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
            {secondaryUrl && (
              <a
                href={secondaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6h6v6M19 6.5 10.5 15M5 8v11h11" />
                </svg>
                {secondaryLabel}
              </a>
            )}
          </div>
        </div>
      </m.a>
    </LazyMotion>
  );
}

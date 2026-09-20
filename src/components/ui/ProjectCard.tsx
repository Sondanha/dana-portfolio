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

/** Project card with a restrained elevation interaction. */
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
  const visual = (
    <div className={`relative w-full overflow-hidden ${thumbnailFit === 'contain' ? 'bg-black' : 'bg-gradient-to-br from-[#fff3e4] via-[#fffaf3] to-[#f7ddd4]'} ${isFeatured ? 'aspect-[16/10] lg:h-full lg:aspect-auto' : 'aspect-video'}`}>
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={`${title} 프로젝트 미리보기`}
          className={`absolute inset-0 h-full w-full transition-transform duration-700 ${
            thumbnailFit === 'contain'
              ? 'object-contain group-hover:scale-[1.02]'
              : 'object-cover group-hover:scale-[1.025]'
          } ${thumbnailPosition === 'top' ? 'object-top' : 'object-center'}`}
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-4xl text-[var(--color-text-tertiary)]">
            {category === 'Product' ? '🚀' : '📚'}
          </span>
        </div>
      )}
    </div>
  );

  return (
    <LazyMotion features={domAnimation}>
      <m.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4 }}
        className={`group relative h-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-[0_10px_35px_rgba(42,39,94,0.06)] transition-all duration-300 hover:border-[var(--color-border-hover)] hover:shadow-[0_20px_50px_rgba(42,39,94,0.12)] ${
          isFeatured ? 'lg:grid lg:min-h-[360px] lg:grid-cols-[0.9fr_1.1fr]' : 'flex flex-col'
        }`}
      >
        {/* Visual area */}
        {detailUrl ? (
          <a href={detailUrl} className={`${isFeatured ? 'lg:order-2 lg:h-full lg:min-h-0' : ''} block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--color-accent)]`} aria-label={`${title} 자세히 보기`}>
            {visual}
          </a>
        ) : visual}

        {/* Content */}
        <div className={`relative flex flex-1 flex-col ${isFeatured ? 'justify-center p-8 sm:p-10 lg:p-12' : 'p-6'}`}>
          {!isFeatured && (
            <span className="mb-5 w-fit rounded-md bg-[var(--color-bg-secondary)] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
              {category}
            </span>
          )}
          <h3 className={`${isFeatured ? 'text-2xl sm:text-3xl' : 'text-lg'} mb-3 font-bold tracking-tight text-[var(--color-text-primary)]`}>{title}</h3>
          {description && (
            <p className={`${isFeatured ? 'max-w-md text-base' : 'text-sm'} mb-5 leading-relaxed text-[var(--color-text-secondary)]`}>{description}</p>
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

          {/* Links */}
          <div className="mt-auto flex items-center gap-4 pt-1">
            {detailUrl && (
              <a
                href={detailUrl}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
              >
                자세히 보기
                <span aria-hidden="true">→</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
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
      </m.article>
    </LazyMotion>
  );
}

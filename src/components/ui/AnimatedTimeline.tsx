import { type ReactNode } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

interface TimelineItemData {
  readonly id: string;
  readonly period: string;
  readonly title: string;
  readonly description: string;
  readonly type: string;
  readonly link: string;
}

interface AnimatedTimelineProps {
  readonly items: readonly TimelineItemData[];
}

const TYPE_STYLES: Record<string, { dot: string; badge: string }> = {
  achievement: {
    dot: 'bg-[var(--color-accent)]',
    badge: 'text-[var(--color-accent)] bg-[var(--color-accent-subtle)]',
  },
  education: {
    dot: 'bg-[var(--color-success)]',
    badge: 'text-[var(--color-success)] bg-[rgba(34,197,94,0.1)]',
  },
  activity: {
    dot: 'bg-[var(--color-warning)]',
    badge: 'text-[var(--color-warning)] bg-[rgba(234,179,8,0.1)]',
  },
} as const;

/** Animated timeline with staggered reveal on scroll. */
export default function AnimatedTimeline({ items }: AnimatedTimelineProps): ReactNode {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-border)] via-[var(--color-border)] to-transparent sm:left-1/2 sm:-translate-x-px" />

        <div className="space-y-8 sm:space-y-12">
          {items.map((item, index) => {
            const style = TYPE_STYLES[item.type] ?? TYPE_STYLES.activity;
            const isLeft = index % 2 === 0;

            return (
              <m.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex items-start gap-6 sm:gap-0"
              >
                {/* Desktop: alternating left/right */}
                <div
                  className={`hidden sm:flex sm:w-1/2 ${
                    isLeft ? 'sm:justify-end sm:pr-12' : 'sm:order-2 sm:pl-12'
                  }`}
                >
                  <div className="max-w-md">
                    <p className="mb-1 text-sm font-medium text-[var(--color-text-tertiary)] font-mono">
                      {item.period}
                    </p>
                    <h3 className="mb-2 text-lg font-bold text-[var(--color-text-primary)]">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-[var(--color-accent)]"
                        >
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-[var(--color-text-secondary)]">{item.description}</p>
                    )}
                    <span className={`mt-3 inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold capitalize ${style.badge}`}>
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Dot */}
                <div className="relative z-10 flex h-4 w-4 flex-shrink-0 items-center justify-center sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <m.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.08 + 0.2 }}
                    className={`h-3.5 w-3.5 rounded-full border-2 border-[var(--color-bg-primary)] ${style.dot}`}
                  />
                </div>

                {/* Desktop spacer */}
                <div className={`hidden sm:block sm:w-1/2 ${isLeft ? 'sm:order-2' : ''}`} />

                {/* Mobile: always right */}
                <div className="flex-1 sm:hidden">
                  <p className="mb-1 text-sm font-medium text-[var(--color-text-tertiary)] font-mono">
                    {item.period}
                  </p>
                  <h3 className="mb-2 text-base font-bold text-[var(--color-text-primary)]">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[var(--color-accent)]"
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-[var(--color-text-secondary)]">{item.description}</p>
                  )}
                  <span className={`mt-2 inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold capitalize ${style.badge}`}>
                    {item.type}
                  </span>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </LazyMotion>
  );
}

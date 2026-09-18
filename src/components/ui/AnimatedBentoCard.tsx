import { type ReactNode } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

interface AnimatedCardProps {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly className?: string;
}

/** Fade-in + slide-up animation wrapper for Bento Grid cards. */
export default function AnimatedBentoCard({
  children,
  delay = 0,
  className = '',
}: AnimatedCardProps): ReactNode {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{
          duration: 0.5,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

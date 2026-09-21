import { type ReactNode } from 'react';
import { LiquiGlass } from '@liqui-design/glass';
import '@liqui-design/glass/tokens.css';
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';

type LiquidActionVariant = 'accent' | 'clear';
type LiquidActionIcon = 'plus' | 'arrow' | 'external' | 'none';

interface LiquidActionLinkProps {
  readonly href: string;
  readonly label: string;
  readonly variant?: LiquidActionVariant;
  readonly icon?: LiquidActionIcon;
  readonly compact?: boolean;
  readonly fullWidth?: boolean;
  readonly external?: boolean;
}

export function LiquidActionLink({
  href,
  label,
  variant = 'clear',
  icon = 'arrow',
  compact = false,
  fullWidth = false,
  external = false,
}: LiquidActionLinkProps): ReactNode {
  const reduceMotion = useReducedMotion();
  const isAccent = variant === 'accent';

  return (
    <LazyMotion features={domAnimation}>
      <m.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`liquid-action rounded-full focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[rgba(184,95,115,0.38)] ${fullWidth ? 'is-full-width' : ''}`}
        whileHover={reduceMotion ? undefined : { scale: 1.045, y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.93, y: 1 }}
        transition={{ type: 'spring', stiffness: 420, damping: 24 }}
      >
        <LiquiGlass
          className={`liquid-action-glass ${isAccent ? 'is-accent' : ''} ${compact ? 'is-compact' : ''}`}
          contentClassName="liquid-action-content"
          radius={999}
          refraction={56}
          bezel={13}
          frost={isAccent ? 0.34 : 0.08}
          blur={0.5}
          specular={0.9}
          saturation={1.35}
          elevated
        >
          {icon === 'plus' && <span aria-hidden="true" className="liquid-action-plus">+</span>}
          <span>{label}</span>
          {icon === 'arrow' && (
            <svg aria-hidden="true" className="liquid-action-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 12h14m-5-5 5 5-5 5" />
            </svg>
          )}
          {icon === 'external' && (
            <svg aria-hidden="true" className="liquid-action-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 17 17 7M8 7h9v9" />
            </svg>
          )}
        </LiquiGlass>
      </m.a>
    </LazyMotion>
  );
}

interface LiquidContactButtonProps {
  readonly compact?: boolean;
  readonly fullWidth?: boolean;
  readonly icon?: LiquidActionIcon;
}

export function LiquidContactButton({ compact = false, fullWidth = false, icon = 'plus' }: LiquidContactButtonProps): ReactNode {
  return (
    <LiquidActionLink
      href="/contact"
      label="Contact Me"
      variant="accent"
      icon={icon}
      compact={compact}
      fullWidth={fullWidth}
    />
  );
}

export function LiquidHeroActions(): ReactNode {
  return (
    <div className="mt-9 flex flex-wrap gap-3">
      <LiquidActionLink href="#projects" label="View Projects" variant="clear" icon="plus" />
      <LiquidContactButton />
    </div>
  );
}

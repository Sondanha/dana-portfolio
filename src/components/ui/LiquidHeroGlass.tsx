import { type ReactNode } from 'react';
import { LiquiGlass } from '@liqui-design/glass';
import '@liqui-design/glass/tokens.css';
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';

type LiquidActionVariant = 'accent' | 'clear';
type LiquidActionIcon = 'plus' | 'arrow' | 'external' | 'copy' | 'mail' | 'none';

interface LiquidActionLinkProps {
  readonly href: string;
  readonly label: string;
  readonly variant?: LiquidActionVariant;
  readonly icon?: LiquidActionIcon;
  readonly compact?: boolean;
  readonly fullWidth?: boolean;
  readonly external?: boolean;
  readonly className?: string;
}

export function LiquidActionLink({
  href,
  label,
  variant = 'clear',
  icon = 'arrow',
  compact = false,
  fullWidth = false,
  external = false,
  className = '',
}: LiquidActionLinkProps): ReactNode {
  const reduceMotion = useReducedMotion();
  const isAccent = variant === 'accent';

  return (
    <LazyMotion features={domAnimation}>
      <m.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`liquid-action rounded-full focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[rgba(184,95,115,0.38)] ${fullWidth ? 'is-full-width' : ''} ${className}`}
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
          {icon === 'copy' && (
            <svg aria-hidden="true" className="liquid-action-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="8" y="8" width="11" height="11" rx="2" strokeWidth="1.8" />
              <path strokeLinecap="round" strokeWidth="1.8" d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
            </svg>
          )}
          {icon === 'mail' && (
            <svg aria-hidden="true" className="liquid-action-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )}
        </LiquiGlass>
      </m.a>
    </LazyMotion>
  );
}

interface LiquidActionButtonProps extends Omit<LiquidActionLinkProps, 'href' | 'external'> {
  readonly id?: string;
  readonly type?: 'button' | 'submit' | 'reset';
  readonly 'data-copy-email'?: boolean;
  readonly 'data-email'?: string;
}

export function LiquidActionButton({
  id,
  type = 'button',
  label,
  variant = 'clear',
  icon = 'none',
  compact = false,
  fullWidth = false,
  className = '',
  ...rest
}: LiquidActionButtonProps): ReactNode {
  const reduceMotion = useReducedMotion();
  const isAccent = variant === 'accent';

  return (
    <LazyMotion features={domAnimation}>
      <m.button
        id={id}
        type={type}
        className={`liquid-action rounded-full focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[rgba(184,95,115,0.38)] ${fullWidth ? 'is-full-width' : ''} ${className}`}
        whileHover={reduceMotion ? undefined : { scale: 1.045, y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.93, y: 1 }}
        transition={{ type: 'spring', stiffness: 420, damping: 24 }}
        {...rest}
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
          <span data-copy-email-label={rest['data-copy-email'] ? true : undefined}>{label}</span>
          {icon === 'arrow' && (
            <svg aria-hidden="true" className="liquid-action-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 12h14m-5-5 5 5-5 5" />
            </svg>
          )}
          {icon === 'external' && (
            <svg aria-hidden="true" className="liquid-action-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          )}
          {icon === 'copy' && (
            <svg aria-hidden="true" className="liquid-action-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="8" y="8" width="11" height="11" rx="2" strokeWidth="1.8" />
              <path strokeLinecap="round" strokeWidth="1.8" d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
            </svg>
          )}
          {icon === 'mail' && (
            <svg aria-hidden="true" className="liquid-action-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )}
        </LiquiGlass>
      </m.button>
    </LazyMotion>
  );
}

interface LiquidContactButtonProps {
  readonly compact?: boolean;
  readonly fullWidth?: boolean;
  readonly icon?: LiquidActionIcon;
  readonly className?: string;
  readonly label?: string;
  readonly href?: string;
}

export function LiquidContactButton({ compact = false, fullWidth = false, icon = 'plus', className = '', label = "Contact Me", href = "/contact" }: LiquidContactButtonProps): ReactNode {
  return (
    <LiquidActionLink
      href={href}
      label={label}
      variant="accent"
      icon={icon}
      compact={compact}
      fullWidth={fullWidth}
      className={className}
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

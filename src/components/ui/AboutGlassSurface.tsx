import { type ReactNode } from 'react';
import { LiquiGlass } from '@liqui-design/glass';
import '@liqui-design/glass/tokens.css';

interface AboutGlassSurfaceProps {
  readonly className?: string;
}

export default function AboutGlassSurface({ className = 'about-refraction-surface' }: AboutGlassSurfaceProps): ReactNode {
  return (
    <LiquiGlass
      className={className}
      radius={36}
      refraction={72}
      bezel={18}
      frost={0.08}
      blur={0.5}
      dispersion={0.3}
      specular={0.95}
      saturation={1.35}
      elevated
    />
  );
}

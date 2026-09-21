import { type ReactNode } from 'react';
import { LiquiGlass } from '@liqui-design/glass';
import '@liqui-design/glass/tokens.css';

export default function LiquidNavGlass(): ReactNode {
  return (
    <LiquiGlass
      className="header-refraction-surface"
      radius={36}
      refraction={165}
      bezel={30}
      frost={0.42}
      blur={2.25}
      dispersion={0.45}
      specular={1}
      saturation={1.08}
      elevated
    />
  );
}

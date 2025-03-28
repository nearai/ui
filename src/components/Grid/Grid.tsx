import type { CSSProperties, ReactNode } from 'react';

import type { AlignItems, JustifyContent } from '../../utils/theme';
import { breakpointPropToCss, type ThemeBreakpointProps, type ThemeGap } from '../../utils/theme';
import s from './Grid.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
} & ThemeBreakpointProps<{
  align?: AlignItems;
  columns?: string;
  gap?: ThemeGap;
  justify?: JustifyContent;
}>;

export const Grid = ({
  children,
  className = '',
  style,

  align,
  columns,
  gap,
  justify,
  phone,
  tablet,

  ...props
}: Props) => {
  const breakpointProps = { align, columns, gap, justify, phone, tablet };

  const variables = {
    ...breakpointPropToCss(breakpointProps, 'align', 'grid-align'),
    ...breakpointPropToCss(breakpointProps, 'columns', 'grid-columns'),
    ...breakpointPropToCss(breakpointProps, 'gap', 'grid-gap', true),
    ...breakpointPropToCss(breakpointProps, 'justify', 'grid-justify'),
  };

  return (
    <div
      className={`${s.grid} ${className}`}
      style={{
        ...style,
        ...variables,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

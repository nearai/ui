import type { CSSProperties, ReactNode } from 'react';

import type { AlignItems, JustifyContent, ThemeBreakpointProps, ThemeGap } from '../../utils/theme';
import { breakpointPropToCss } from '../../utils/theme';
import s from './Flex.module.scss';

type Props = {
  as?: 'div' | 'label' | 'span';
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
} & ThemeBreakpointProps<{
  align?: AlignItems;
  direction?: CSSProperties['flexDirection'];
  gap?: ThemeGap;
  justify?: JustifyContent;
  wrap?: CSSProperties['flexWrap'];
}>;

export const Flex = ({
  as = 'div',
  className = '',
  style,

  align,
  direction,
  gap,
  justify,
  phone,
  tablet,
  wrap,

  ...props
}: Props) => {
  const Element = as;

  const breakpointProps = {
    align,
    direction,
    gap,
    justify,
    phone,
    tablet,
    wrap,
  };

  const variables = {
    ...breakpointPropToCss(breakpointProps, 'align', 'flex-align'),
    ...breakpointPropToCss(breakpointProps, 'direction', 'flex-direction'),
    ...breakpointPropToCss(breakpointProps, 'gap', 'flex-gap', true),
    ...breakpointPropToCss(breakpointProps, 'justify', 'flex-justify'),
    ...breakpointPropToCss(breakpointProps, 'wrap', 'flex-wrap'),
  };

  return <Element className={`${s.flex} ${className}`} style={{ ...style, ...variables }} {...props} />;
};

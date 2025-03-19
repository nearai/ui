import type { ComponentProps, ComponentPropsWithRef, ReactElement } from 'react';
import { forwardRef } from 'react';

import { useNearAiUi } from '../context/NearAiUi';
import { Badge } from './Badge';
import s from './Button.module.scss';

type Fill = 'solid' | 'outline' | 'ghost';
type Size = 'x-small' | 'small' | 'default' | 'large';
type Variant = 'primary' | 'secondary' | 'affirmative' | 'destructive';

type Props = Omit<ComponentPropsWithRef<'button'>, 'size'> & {
  count?: number;
  fill?: Fill;
  href?: string;
  target?: ComponentProps<'a'>['target'];
  icon?: ReactElement;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  label: string;
  labelAlignment?: 'center' | 'left';
  loading?: boolean;
  size?: Size;
  variant?: Variant;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      className = '',
      count,
      disabled,
      fill = 'solid',
      href,
      icon,
      iconLeft,
      iconRight,
      label,
      labelAlignment,
      loading,
      size = 'default',
      type = 'button',
      variant = 'primary',
      ...forwardedProps
    },
    ref,
  ) => {
    const conditionalAttributes: Record<string, unknown> = href
      ? {
          href,
        }
      : {
          type,
          disabled: disabled ?? loading,
        };

    if (icon) {
      conditionalAttributes['aria-label'] = label;
    }

    const { Link } = useNearAiUi();
    const Element: any = href ? Link : 'button';

    return (
      <Element
        className={`${s.button} ${className}`}
        data-icon={!!icon}
        data-fill={fill}
        data-loading={loading}
        data-size={size}
        data-variant={variant}
        data-label-alignment={labelAlignment}
        ref={ref}
        {...conditionalAttributes}
        {...forwardedProps}
      >
        <span className={s.inner}>
          {icon ? (
            <span className={s.icon}>{icon}</span>
          ) : (
            <>
              {iconLeft && <span className={s.icon}>{iconLeft}</span>}
              <span className={s.label}>{label}</span>
              {typeof count === 'number' && (
                <Badge label={count.toString()} size="small" count variant="neutral-alpha" />
              )}
              {iconRight && <span className={s.icon}>{iconRight}</span>}
            </>
          )}
        </span>
      </Element>
    );
  },
);

Button.displayName = 'Button';

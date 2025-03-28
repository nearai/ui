import type { ComponentPropsWithRef, ReactElement } from 'react';
import { forwardRef } from 'react';

import s from './Badge.module.scss';

type Variant = 'neutral' | 'neutral-alpha' | 'primary' | 'warning' | 'success' | 'alert';

type Props = Omit<ComponentPropsWithRef<'span'>, 'children'> & {
  count?: boolean;
  iconLeft?: ReactElement;
  label: string;
  size?: 'small' | 'default';
  variant?: Variant;
  iconRight?: ReactElement;
};

export const Badge = forwardRef<HTMLSpanElement, Props>(
  ({ className = '', count, label, iconLeft, iconRight, size, variant = 'primary', ...props }, ref) => {
    const isButton = !!props.onClick;

    return (
      <span
        className={`${s.badge} ${className}`}
        data-count={count}
        data-size={size}
        data-variant={variant}
        role={isButton ? 'button' : undefined}
        tabIndex={(props.tabIndex ?? isButton) ? 0 : undefined}
        ref={ref}
        {...props}
      >
        {iconLeft && <span className={s.icon}>{iconLeft}</span>}
        <span className={s.label}>{label}</span>
        {iconRight && <span className={s.icon}>{iconRight}</span>}
      </span>
    );
  },
);

Badge.displayName = 'Badge';

import { CaretDown } from '@phosphor-icons/react/dist/ssr';
import * as Primitive from '@radix-ui/react-accordion';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';

import { Flex } from '../Flex';
import s from './Accordion.module.scss';

type RootProps = ComponentProps<typeof Primitive.Root> & {
  gap?: 'm' | 'l';
};
type ContentProps = ComponentProps<typeof Primitive.Content>;
type TriggerProps = ComponentProps<typeof Primitive.Trigger>;
type ItemProps = ComponentProps<typeof Primitive.Item>;

export const Root = forwardRef<HTMLDivElement, RootProps>(function AccordionRoot({ gap = 'm', ...props }, ref) {
  return <Primitive.Root className={s.root} data-gap={gap} ref={ref} {...props} />;
});

export const Item = forwardRef<HTMLDivElement, ItemProps>(function AccordionItem(props, ref) {
  return <Primitive.Item className={s.item} ref={ref} {...props} />;
});

export const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(function AccordionTrigger(
  { children, ...props },
  ref,
) {
  return (
    <Primitive.Header className={s.header}>
      <Primitive.Trigger className={s.trigger} ref={ref} {...props}>
        <Flex gap="m" align="center">
          {children}
        </Flex>
        <CaretDown weight="bold" className={s.indicator} />
      </Primitive.Trigger>
    </Primitive.Header>
  );
});

export const Content = forwardRef<HTMLDivElement, ContentProps>(function AccordionContent({ children, ...props }, ref) {
  return (
    <Primitive.Content className={s.content} ref={ref} {...props}>
      <div className={s.contentContainer}>{children}</div>
    </Primitive.Content>
  );
});

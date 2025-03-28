import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Button } from './Button';

type Props = ComponentProps<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
  } satisfies Props,
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'secondary',
  } satisfies Props,
};

export const Affirmative: Story = {
  args: {
    label: 'Button',
    variant: 'affirmative',
  } satisfies Props,
};

export const Destructive: Story = {
  args: {
    label: 'Button',
    variant: 'destructive',
  } satisfies Props,
};

export const IconLeft: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    iconLeft: <ArrowLeft />,
  } satisfies Props,
};

export const IconRight: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    iconRight: <ArrowRight />,
  } satisfies Props,
};

import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Button } from './Button';

type Props = ComponentProps<typeof Button>;

const meta: Meta<Props> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

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

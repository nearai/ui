import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { InputTextarea } from './InputTextarea';

type Props = ComponentProps<typeof InputTextarea>;

const meta: Meta<typeof InputTextarea> = {
  component: InputTextarea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputTextarea>;

export const Primary: Story = {
  args: {
    label: 'Your Message',
    name: 'yourMessage',
  } satisfies Props,
};

import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Placeholder } from './Placeholder';

type Props = ComponentProps<typeof Placeholder>;

const meta: Meta<typeof Placeholder> = {
  component: Placeholder,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Placeholder>;

export const Primary: Story = {
  args: {} satisfies Props,
};

import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { PlaceholderStack } from './Placeholder';

type Props = ComponentProps<typeof PlaceholderStack>;

const meta: Meta<typeof PlaceholderStack> = {
  component: PlaceholderStack,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PlaceholderStack>;

export const Primary: Story = {
  args: {} satisfies Props,
};

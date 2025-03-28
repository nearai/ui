import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { PlaceholderCard } from './Placeholder';

type Props = ComponentProps<typeof PlaceholderCard>;

const meta: Meta<typeof PlaceholderCard> = {
  component: PlaceholderCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PlaceholderCard>;

export const Primary: Story = {
  args: {} satisfies Props,
};

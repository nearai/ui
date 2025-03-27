import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { PlaceholderSection } from './Placeholder';

type Props = ComponentProps<typeof PlaceholderSection>;

const meta: Meta<typeof PlaceholderSection> = {
  component: PlaceholderSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PlaceholderSection>;

export const Primary: Story = {
  args: {} satisfies Props,
};

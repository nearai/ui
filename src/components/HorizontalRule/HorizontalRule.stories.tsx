import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { HR } from './HorizontalRule';

type Props = ComponentProps<typeof HR>;

const meta: Meta<typeof HR> = {
  component: HR,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HR>;

export const Primary: Story = {
  args: {} satisfies Props,
};

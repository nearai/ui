import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Text } from '../Text';
import { BreakpointDisplay } from './BreakpointDisplay';

type Props = ComponentProps<typeof BreakpointDisplay>;

const meta: Meta<typeof BreakpointDisplay> = {
  component: BreakpointDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BreakpointDisplay>;

export const Primary: Story = {
  args: {
    show: 'larger-than-phone',
  } satisfies Partial<Props>,
  render: (args) => (
    <BreakpointDisplay {...args}>
      <Text>This is arbitrary content that will only display for certain breakpoints.</Text>
    </BreakpointDisplay>
  ),
};

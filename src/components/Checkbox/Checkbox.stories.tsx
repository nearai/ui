import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Flex } from '../Flex';
import { Text } from '../Text';
import { Checkbox } from './Checkbox';

type Props = ComponentProps<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    name: 'blue',
  } satisfies Props,
  render: (args) => (
    <Flex as="label" align="center" gap="s">
      <Checkbox {...args} />
      <Text>Blue</Text>
    </Flex>
  ),
};

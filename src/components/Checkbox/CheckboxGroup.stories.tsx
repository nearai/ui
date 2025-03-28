import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Flex } from '../Flex';
import { Text } from '../Text';
import { Checkbox, CheckboxGroup } from './Checkbox';

type Props = ComponentProps<typeof CheckboxGroup>;

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'This component is mostly useful for accessibility. It semantically groups a collection of related checkboxes or radios and provides a default gap between each element.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Primary: Story = {
  args: {} satisfies Props,
  render: (args) => (
    <CheckboxGroup {...args}>
      <Text size="text-xs" weight={600}>
        Your Favorite Colors
      </Text>

      <Flex as="label" align="center" gap="s">
        <Checkbox name="red" />
        <Text>Red</Text>
      </Flex>

      <Flex as="label" align="center" gap="s">
        <Checkbox name="green" />
        <Text>Green</Text>
      </Flex>

      <Flex as="label" align="center" gap="s">
        <Checkbox name="blue" />
        <Text>Blue</Text>
      </Flex>
    </CheckboxGroup>
  ),
};

export const Radio: Story = {
  args: {} satisfies Props,
  render: (args) => (
    <CheckboxGroup {...args}>
      <Text size="text-xs" weight={600}>
        Your Favorite Color
      </Text>

      <Flex as="label" align="center" gap="s">
        <Checkbox type="radio" name="color" />
        <Text>Red</Text>
      </Flex>

      <Flex as="label" align="center" gap="s">
        <Checkbox type="radio" name="color" />
        <Text>Green</Text>
      </Flex>

      <Flex as="label" align="center" gap="s">
        <Checkbox type="radio" name="color" />
        <Text>Blue</Text>
      </Flex>
    </CheckboxGroup>
  ),
};

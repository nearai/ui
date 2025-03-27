import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Card } from '../Card';
import { Text } from '../Text';
import { Flex } from './Flex';

type Props = ComponentProps<typeof Flex>;

const meta: Meta<typeof Flex> = {
  component: Flex,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    phone: {
      control: 'object',
      description: 'Override props for screens that are "phone sized" and smaller',
    },
    tablet: {
      control: 'object',
      description: 'Override props for screens that are "tablet sized" and smaller',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
  args: {
    gap: 'm',
    align: 'center',
  } satisfies Partial<Props>,
  render: (args) => (
    <Flex {...args}>
      <Card padding="l">
        <Text size="text-3xl">Content</Text>
      </Card>
      <Card>
        <Text size="text-l">Content</Text>
      </Card>
      <Card padding="s">
        <Text size="text-xs">Content</Text>
      </Card>
    </Flex>
  ),
};

export const Breakpoints: Story = {
  args: {
    gap: 'm',
    align: 'center',
    tablet: {
      direction: 'column',
    },
    phone: {
      align: 'start',
      gap: 's',
    },
  } satisfies Partial<Props>,
  render: (args) => (
    <Flex {...args}>
      <Card padding="l">
        <Text size="text-3xl">Content</Text>
      </Card>
      <Card>
        <Text size="text-l">Content</Text>
      </Card>
      <Card padding="s">
        <Text size="text-xs">Content</Text>
      </Card>
    </Flex>
  ),
};

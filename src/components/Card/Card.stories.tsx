import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Text } from '../Text';
import { Card } from './Card';

type Props = ComponentProps<typeof Card>;

const meta: Meta<typeof Card> = {
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    gap: 's',
  } satisfies Partial<Props>,
  render: (args) => (
    <Card {...args}>
      <Text as="h3">Some Content</Text>
      <Text>Any content/components can be used within a card.</Text>
    </Card>
  ),
};

export const Link: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Add an `href` or `onClick` handler when the entire card should be clickable. Hover/focus styles will be applied.',
      },
    },
  },
  args: {
    href: '#',
    gap: 's',
  } satisfies Partial<Props>,
  render: (args) => (
    <Card {...args}>
      <Text as="h3" indicateParentClickable>
        Some Link
      </Text>
      <Text>Any content/components can be used within a card.</Text>
    </Card>
  ),
};

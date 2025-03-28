import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Card } from '../Card';
import { Container } from '../Container';
import { Text } from '../Text';

type Props = ComponentProps<typeof Container>;

const meta: Meta<typeof Container> = {
  component: Container,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Primary: Story = {
  args: {
    size: 'l',
  } satisfies Partial<Props>,
  render: (args) => (
    <Container {...args}>
      <Card>
        <Text>A container sets a max width and horizontally centers the content.</Text>
      </Card>
    </Container>
  ),
};

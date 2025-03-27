import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Text } from '../Text';
import { Card, CardList } from './Card';

type Props = ComponentProps<typeof CardList>;

const meta: Meta<typeof CardList> = {
  component: CardList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardList>;

export const Primary: Story = {
  args: {} satisfies Partial<Props>,
  render: (args) => (
    <CardList {...args}>
      <Card onClick={() => alert('Clicked card 1')}>
        <Text>Card 1</Text>
      </Card>
      <Card onClick={() => alert('Clicked card 2')}>
        <Text>Card 2</Text>
      </Card>
      <Card onClick={() => alert('Clicked card 3')}>
        <Text>Card 3</Text>
      </Card>
    </CardList>
  ),
};

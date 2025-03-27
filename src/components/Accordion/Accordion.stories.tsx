import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import { Text } from '../Text';
import { Accordion } from './';

type Props = ComponentProps<typeof Accordion.Root>;

const meta: Meta<typeof Accordion.Root> = {
  component: Accordion.Root,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion.Root>;

export const Primary: Story = {
  args: {
    type: 'multiple',
  } satisfies Props,
  render: (args) => (
    <Accordion.Root {...args}>
      <Accordion.Item value="one">
        <Accordion.Trigger>First Section</Accordion.Trigger>

        <Accordion.Content>
          <Text>Paragraph 1</Text>
          <Text>Paragraph 2</Text>
          <Text>Paragraph 3</Text>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="two">
        <Accordion.Trigger>Second Section</Accordion.Trigger>

        <Accordion.Content>
          <Text>Paragraph 1</Text>
          <Text>Paragraph 2</Text>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

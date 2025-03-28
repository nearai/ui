import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import { Button } from '../Button';
import { Text } from '../Text';
import { Dialog } from '.';

type Props = ComponentProps<typeof Dialog.Root>;

const meta: Meta<typeof Dialog.Root> = {
  component: Dialog.Root,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Dialog.Root>;

export const Primary: Story = {
  args: {} satisfies Props,
  render: (args) => (
    <Dialog.Root {...args}>
      <Dialog.Trigger asChild>
        <Button label="Open Dialog" />
      </Dialog.Trigger>

      <Dialog.Content title="My Dialog">
        <Text>Some content here.</Text>
        <Text>More content over there.</Text>
      </Dialog.Content>
    </Dialog.Root>
  ),
};

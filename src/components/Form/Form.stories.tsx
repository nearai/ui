import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Flex } from '../Flex';
import { Form } from '../Form';
import { Input } from '../Input';

type Props = ComponentProps<typeof Form>;

const meta: Meta<typeof Form> = {
  component: Form,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'This component is strictly functional and does not provide any visual styles. It acts as a thin `<form>` wrapper that provides default values for certain attributes like `noValidate` and `autoCorrect`.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Primary: Story = {
  args: {} satisfies Props,
  render: (args) => (
    <Form {...args}>
      <Flex direction="column" gap="m">
        <Input label="Name" name="name" />
        <Input label="Email" name="email" type="email" />
      </Flex>
    </Form>
  ),
};

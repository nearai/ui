import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Text } from '../Text';
import { Timestamp } from './Timestamp';

type Props = ComponentProps<typeof Timestamp>;

const meta: Meta<typeof Timestamp> = {
  component: Timestamp,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'This component uses `<NoSsr>` to prevent server side rendering of timestamps - which prevents hydration errors due to the server and client ending up with slightly different outputs. It will usually be wrapped by a `<Text>` component as well to handle styling.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Timestamp>;

export const Primary: Story = {
  args: {
    date: new Date(),
  } satisfies Props,
  render: (args) => (
    <Text>
      The current time is:{' '}
      <Text as="span" weight={600}>
        <Timestamp {...args} />
      </Text>
    </Text>
  ),
};

export const LongDate: Story = {
  args: {
    date: new Date(),
    options: {
      dateStyle: 'long',
    },
  } satisfies Props,
  render: (args) => (
    <Text color="sand-12" size="text-2xl">
      <Timestamp {...args} />
    </Text>
  ),
};

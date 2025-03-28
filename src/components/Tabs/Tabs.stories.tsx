import { Horse, Pizza } from '@phosphor-icons/react/dist/ssr';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import { SvgIcon } from '../SvgIcon';
import { Text } from '../Text';
import { Tabs } from '.';

type Props = ComponentProps<typeof Tabs.Root>;

const meta: Meta<typeof Tabs.Root> = {
  component: Tabs.Root,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs.Root>;

export const Primary: Story = {
  args: {
    defaultValue: 'one',
  } satisfies Props,
  render: (args) => (
    <Tabs.Root {...args}>
      <Tabs.List>
        <Tabs.Trigger value="one">
          <SvgIcon icon={<Horse fill="bold" />} />
          Tab One
        </Tabs.Trigger>

        <Tabs.Trigger value="two">
          <SvgIcon icon={<Pizza fill="bold" />} />
          Tab Two
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="one">
        <Text>Content one.</Text>
      </Tabs.Content>

      <Tabs.Content value="two">
        <Text>Content two.</Text>
      </Tabs.Content>
    </Tabs.Root>
  ),
};

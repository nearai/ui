import { Moon, Sun } from '@phosphor-icons/react/dist/ssr';
import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Flex } from '../Flex';
import { Switch } from './Switch';

type Props = ComponentProps<typeof Switch>;

const meta: Meta<typeof Switch> = {
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  args: {} satisfies Props,
  render: (args) => (
    <Flex as="label" align="center" gap="m">
      <Switch {...args} />
      My Switch
    </Flex>
  ),
};

export const WithIcon: Story = {
  args: {
    'aria-label': 'Dark Mode Toggle',
    iconOff: <Sun weight="bold" />,
    iconOn: <Moon weight="bold" />,
  } satisfies Props,
  render: (args) => <Switch {...args} />,
};

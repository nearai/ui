import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { NoSsr } from './NoSsr';

type Props = ComponentProps<typeof NoSsr>;

const meta: Meta<typeof NoSsr> = {
  component: NoSsr,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'This component is useful for niche, technical use cases where JSX should not be rendered server side (avoiding a hydration error).',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NoSsr>;

export const Primary: Story = {
  args: {
    children: 'This content will not be rendered server side.',
  } satisfies Props,
};

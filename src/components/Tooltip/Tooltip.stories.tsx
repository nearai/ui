import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import { Button } from '../Button';
import { Tooltip } from './Tooltip';

type Props = ComponentProps<typeof Tooltip>;

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Built with the Radix UI Tooltip primitive: https://www.radix-ui.com/primitives/docs/components/tooltip',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "If the element you're wrapping a tooltip around is a custom component that doesn't support ref forwarding, simply omit the `asChild` prop. This will result in Radix wrapping your trigger element with an unstyled `<button>` element. You'll also know you need to omit `asChild` if you see console errors when attempting to render your tooltip.",
      },
    },
  },
  args: {
    asChild: true,
    content: 'Hello there!',
  } satisfies Omit<Props, 'children'>,
  render: (args) => (
    <Tooltip {...args}>
      <Button label="Click Me" />
    </Tooltip>
  ),
};

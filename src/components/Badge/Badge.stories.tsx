import { Heart } from '@phosphor-icons/react/dist/ssr';
import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Badge } from './Badge';

type Props = ComponentProps<typeof Badge>;

const meta: Meta<typeof Badge> = {
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    label: 'My Badge',
    variant: 'primary',
  } satisfies Props,
};

export const IconLeft: Story = {
  args: {
    label: 'My Badge',
    variant: 'primary',
    iconLeft: <Heart weight="duotone" />,
  } satisfies Props,
};

export const IconRight: Story = {
  args: {
    label: 'My Badge',
    variant: 'primary',
    iconRight: <Heart weight="duotone" />,
  } satisfies Props,
};

export const Count: Story = {
  args: {
    label: '7',
    variant: 'primary',
    count: true,
  } satisfies Props,
};

export const Chip: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Badges will typically be a readonly element. However, there are times where it can make sense to make them clickable. Simply add an `onClick` handler and hover/focus styles will automatically be applied (and the borders will be fully rounded):',
      },
    },
  },
  args: {
    label: 'My Chip',
    variant: 'primary',
    onClick: () => alert('Hello world!'),
  } satisfies Props,
};

import { Horse } from '@phosphor-icons/react/dist/ssr';
import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { SvgIcon } from './SvgIcon';

type Props = ComponentProps<typeof SvgIcon>;

const meta: Meta<typeof SvgIcon> = {
  component: SvgIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SvgIcon>;

export const Primary: Story = {
  args: {
    icon: <Horse weight="duotone" />,
    color: 'cyan-10',
    size: 'xl',
  } satisfies Props,
};

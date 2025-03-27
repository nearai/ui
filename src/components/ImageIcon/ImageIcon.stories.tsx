import { User } from '@phosphor-icons/react/dist/ssr';
import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { ImageIcon } from './ImageIcon';

type Props = ComponentProps<typeof ImageIcon>;

const meta: Meta<typeof ImageIcon> = {
  component: ImageIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      type: 'string',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageIcon>;

export const Primary: Story = {
  args: {
    alt: 'Descriptive icon alt',
    src: 'https://cryptologos.cc/logos/near-protocol-near-logo.png',
    padding: true,
    size: 'l',
  } satisfies Props,
};

export const Avatar: Story = {
  args: {
    alt: 'Descriptive icon alt',
    src: 'https://t3.ftcdn.net/jpg/03/15/34/90/360_F_315349043_6ohfFyx37AFusCKZtGQtJR0jqUxhb25Y.jpg',
    padding: false,
    fallbackIcon: <User />,
    size: 'l',
  } satisfies Props,
};

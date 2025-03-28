import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import { Banner } from '.';

type Props = ComponentProps<typeof Banner>;

const meta: Meta<typeof Banner> = {
  component: Banner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Primary: Story = {
  args: {
    bannerId: crypto.randomUUID(),
    message: 'This is a really cool banner message!',
  } satisfies Props,
};

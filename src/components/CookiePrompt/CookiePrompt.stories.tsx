import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { CookiePrompt } from './';

type Props = ComponentProps<typeof CookiePrompt>;

const meta: Meta<typeof CookiePrompt> = {
  component: CookiePrompt,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CookiePrompt>;

export const Primary: Story = {
  args: {} satisfies Props,
};

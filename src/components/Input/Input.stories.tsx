import { Envelope } from '@phosphor-icons/react/dist/ssr';
import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Input } from './Input';

type Props = ComponentProps<typeof Input>;

const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    label: 'Favorite Food',
    name: 'favoriteFood',
    placeholder: 'eg: Pizza',
  } satisfies Props,
};

export const Error: Story = {
  args: {
    label: 'Favorite Food',
    name: 'favoriteFood',
    error: 'Must enter something delicious',
  } satisfies Props,
};

export const Success: Story = {
  args: {
    label: 'Favorite Food',
    name: 'favoriteFood',
    success: 'That is delicious!',
  } satisfies Props,
};

export const Assistive: Story = {
  args: {
    label: 'Favorite Food',
    name: 'favoriteFood',
    assistive: "Please don't pick anything too spicy",
  } satisfies Props,
};

export const Search: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'This will apply a default search icon on the left and fully rounded corners. The browser natively applies an input reset button when a value is entered.',
      },
    },
  },
  args: {
    name: 'searchQuery',
    type: 'search',
    placeholder: 'Search...',
  } satisfies Props,
};

export const Number: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'By default, an input will emit a `string` value. However, you can use `type="number"` or the `number` prop to emit a `number` value and configure if decimal or negative numbers are allowed.',
      },
    },
  },
  args: {
    label: 'Favorite Number',
    name: 'favoriteNumber',
    number: { allowDecimal: false, allowNegative: false },
  } satisfies Props,
};

export const IconLeft: Story = {
  args: {
    label: 'Email',
    name: 'email',
    type: 'email',
    iconLeft: <Envelope />,
  } satisfies Props,
};

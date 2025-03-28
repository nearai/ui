import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Combobox } from './Combobox';

type Props = ComponentProps<typeof Combobox>;

const meta: Meta<typeof Combobox> = {
  component: Combobox,
  title: 'components/Combobox (Select)',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Built with the Downshift \`useCombobox()\` hook: https://www.downshift-js.com/use-combobox.

The \`allowCustomInput\` prop drives how this component behaves. By defaulting to \`false\`, it will behave as a standard select dropdown - forcing the user to select a valid option. If set to \`true\`, the user can enter a custom value if they don't find a desired \`option\`.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Combobox>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'By default, this component acts a searchable select dropdown (due to `allowCustomInput` defaulting to `false`). This will force a user to select a value from the available `options`.',
      },
    },
  },
  args: {
    label: 'Favorite Food',
    name: 'favoriteFood',
    onChange: (value) => console.log(value),
    options: [
      {
        value: '1',
        label: 'Ice Cream',
      },
      {
        value: '2',
        label: 'Pasta',
      },
      {
        value: '3',
        label: 'Pizza',
      },
    ],
    value: '1',
  } satisfies Props,
};

export const CustomInput: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'If the user should be able to enter a custom value that does not match any `options`, set `allowCustomInput` to `true`.',
      },
    },
  },
  args: {
    label: 'Favorite Food',
    name: 'favoriteFood',
    allowCustomInput: true,
    onChange: (value) => console.log(value),
    options: [
      {
        value: '1',
        label: 'Ice Cream',
      },
      {
        value: '2',
        label: 'Pasta',
      },
      {
        value: '3',
        label: 'Pizza',
      },
    ],
    value: '1',
  } satisfies Props,
};

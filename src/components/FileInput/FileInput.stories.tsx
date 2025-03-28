import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { FileInput } from './FileInput';

type Props = ComponentProps<typeof FileInput>;

const meta: Meta<typeof FileInput> = {
  component: FileInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FileInput>;

export const Primary: Story = {
  args: {
    label: 'Upload Your Artwork',
    name: 'artwork',
    accept: 'image/*',
    maxFileSizeBytes: 1_000_000,
    multiple: true,
    onChange: (value) => console.log(value),
  } satisfies Props,
  render: (args) => <FileInput {...args} />,
};

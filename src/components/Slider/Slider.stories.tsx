import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps, useState } from 'react';

import { Slider } from './Slider';

type Props = ComponentProps<typeof Slider>;

const meta: Meta<typeof Slider> = {
  component: Slider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

const Demo = (props: Omit<Props, 'value' | 'onChange'>) => {
  const [value, setValue] = useState(0);

  return <Slider value={value} onChange={setValue} {...props} />;
};

export const Primary: Story = {
  args: {
    label: 'My Slider',
    name: 'mySlider',
    max: 10,
    min: 0,
    step: 0.1,
  } satisfies Omit<Props, 'value' | 'onChange'>,
  render: (args) => <Demo {...args} />,
};

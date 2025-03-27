import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Card } from '../Card';
import { Text } from '../Text';
import { Grid } from './Grid';

type Props = ComponentProps<typeof Grid>;

const meta: Meta<typeof Grid> = {
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    phone: {
      control: 'object',
      description: 'Override props for screens that are "phone sized" and smaller',
    },
    tablet: {
      control: 'object',
      description: 'Override props for screens that are "tablet sized" and smaller',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Primary: Story = {
  args: {
    gap: 'm',
    columns: '1fr 1fr 1fr',
  } satisfies Partial<Props>,
  render: (args) => (
    <Grid {...args}>
      <Card>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique neque eu rhoncus sagittis. Nulla
          venenatis rutrum justo, ut sodales libero porttitor quis. Sed eu justo enim.
        </Text>
      </Card>
      <Card>
        <Text>Lorem ipsum dolor sit amet, eu justo enim.</Text>
      </Card>
      <Card>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Card>
    </Grid>
  ),
};

export const Breakpoints: Story = {
  args: {
    gap: 'm',
    columns: '1fr 1fr 1fr',
    tablet: {
      columns: '1fr 1fr',
      gap: 's',
    },
    phone: {
      columns: '1fr',
    },
  } satisfies Partial<Props>,
  render: (args) => (
    <Grid {...args}>
      <Card>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique neque eu rhoncus sagittis. Nulla
          venenatis rutrum justo, ut sodales libero porttitor quis. Sed eu justo enim.
        </Text>
      </Card>
      <Card>
        <Text>Lorem ipsum dolor sit amet, eu justo enim.</Text>
      </Card>
      <Card>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Card>
    </Grid>
  ),
};

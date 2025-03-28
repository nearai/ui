import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Text } from './Text';

type Props = ComponentProps<typeof Text>;

const meta: Meta<typeof Text> = {
  component: Text,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

const children = 'The quick brown fox uses NEAR AI';

export const Primary: Story = {
  args: {
    children,
  } satisfies Props,
};

export const Clamped: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor vel tortor vulputate dignissim nec vitae enim. Curabitur cursus pretium libero, nec sollicitudin risus dignissim at. Sed fringilla nulla sed felis posuere condimentum. Donec eget arcu nec magna ullamcorper sagittis id sed libero.',
    clampLines: 1,
  } satisfies Props,
};

export const Link: Story = {
  args: {
    children: 'Click Me',
    href: '#',
  } satisfies Props,
};

export const SizeHeroXL: Story = {
  args: {
    children,
    size: 'text-hero-xl',
  } satisfies Props,
};

export const SizeHeroL: Story = {
  args: {
    children,
    size: 'text-hero-l',
  } satisfies Props,
};

export const SizeHeroM: Story = {
  args: {
    children,
    size: 'text-hero-m',
  } satisfies Props,
};

export const Size3XL: Story = {
  args: {
    children,
    size: 'text-3xl',
  } satisfies Props,
};

export const Size2XL: Story = {
  args: {
    children,
    size: 'text-2xl',
  } satisfies Props,
};

export const SizeXL: Story = {
  args: {
    children,
    size: 'text-xl',
  } satisfies Props,
};

export const SizeL: Story = {
  args: {
    children,
    size: 'text-l',
  } satisfies Props,
};

export const SizeBase: Story = {
  args: {
    children,
    size: 'text-base',
  } satisfies Props,
};

export const SizeS: Story = {
  args: {
    children,
    size: 'text-s',
  } satisfies Props,
};

export const SizeXS: Story = {
  args: {
    children,
    size: 'text-xs',
  } satisfies Props,
};

export const Size2XS: Story = {
  args: {
    children,
    size: 'text-2xs',
  } satisfies Props,
};

export const AsHeading1: Story = {
  args: {
    children,
    as: 'h1',
  } satisfies Props,
};

export const AsHeading2: Story = {
  args: {
    children,
    as: 'h2',
  } satisfies Props,
};

export const AsHeading3: Story = {
  args: {
    children,
    as: 'h3',
  } satisfies Props,
};

export const AsHeading4: Story = {
  args: {
    children,
    as: 'h4',
  } satisfies Props,
};

export const AsHeading5: Story = {
  args: {
    children,
    as: 'h5',
  } satisfies Props,
};

export const AsHeading6: Story = {
  args: {
    children,
    as: 'h6',
  } satisfies Props,
};

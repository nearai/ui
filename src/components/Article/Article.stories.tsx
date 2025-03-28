import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Article } from './Article';

type Props = ComponentProps<typeof Article>;

const meta: Meta<typeof Article> = {
  component: Article,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Article>;

export const Primary: Story = {
  args: {
    href: '#',
    imageUrl:
      'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg',
    title: 'An amazing article title',
    description: 'A longer, but still short description of the article',
    author: 'John Doe',
    date: new Date(),
  } satisfies Props,
};

export const WithoutImage: Story = {
  args: {
    href: '#',
    title: 'An amazing article title',
    description: 'A longer, but still short description of the article',
    author: 'John Doe',
    date: new Date(),
  } satisfies Props,
};

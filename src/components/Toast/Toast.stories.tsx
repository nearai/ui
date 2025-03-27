import { Pizza } from '@phosphor-icons/react/dist/ssr';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Flex } from '../Flex';
import { openToast } from '.';

const meta: Meta = {
  title: 'components/Toast',
  parameters: {
    layout: 'padded',
    docs: {
      canvas: {
        sourceState: 'none',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: () => (
    <Flex direction="column" gap="m" align="start">
      <Button
        label="Success Toast"
        variant="affirmative"
        size="small"
        onClick={() =>
          openToast({
            type: 'success',
            title: 'Toast Title',
            description: 'This is a great toast description.',
          })
        }
      />

      <Button
        label="Error Toast"
        variant="destructive"
        size="small"
        onClick={() =>
          openToast({
            type: 'error',
            title: 'Toast Title',
            description: 'This is a great toast description.',
          })
        }
      />

      <Button
        label="Info Toast + Action + Custom Icon"
        variant="secondary"
        size="small"
        onClick={() =>
          openToast({
            type: 'info',
            title: 'Toast Title',
            icon: Pizza,
            description: 'This is a great toast description.',
            action: () => alert('Hello world!'),
            actionText: 'Click Me',
          })
        }
      />
    </Flex>
  ),
};

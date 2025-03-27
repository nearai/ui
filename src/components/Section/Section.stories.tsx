import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Flex } from '../Flex';
import { Text } from '../Text';
import { Section } from './Section';

type Props = ComponentProps<typeof Section>;

const meta: Meta<typeof Section> = {
  component: Section,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'This component is most useful directly inside page components. They fill the entire width of the page and apply a container to give the content a default max-width and flex stack gap. When multiple `<Section>` components are at the same level, a default border will be applied to help visually separate them.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Primary: Story = {
  args: {} satisfies Props,
  render: (args) => (
    <Section {...args}>
      <Text as="h2">Some Title</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </Section>
  ),
};

export const Multiple: Story = {
  args: {} satisfies Props,
  render: (args) => (
    <>
      <Section {...args}>
        <Text as="h2">Section 1</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Section>

      <Section {...args}>
        <Text as="h2">Section 2</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Section>
    </>
  ),
};

export const GrowScreenHeight: Story = {
  parameters: {
    docs: {
      description: {
        story: `Sometimes you need a section to vertically grow to fill up the screen height. You can do that with \`grow="screen-height"\`. If you want to center your content, you can use a nested \`<Flex>\` container with \`margin: auto\`.

Note that this will only set a minimum height. If the content inside is taller than the screen space, the section will dynamically grow in height to fit the content so that nothing is chopped off.`,
      },
    },
  },
  args: {
    background: 'cyan-3',
    grow: 'screen-height',
  } satisfies Props,
  render: (args) => (
    <Section {...args}>
      <Flex direction="column" gap="m" style={{ margin: 'auto' }}>
        <Text as="h2">Some Title</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Flex>
    </Section>
  ),
};

export const GrowAvailable: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'For more niche use cases on larger screens, you can use the alternative `grow="available"` variant to conditionally fill any remaining screen height.',
      },
    },
  },
  args: {
    background: 'cyan-3',
    grow: 'available',
  } satisfies Props,
  render: (args) => (
    <Section {...args}>
      <Flex direction="column" gap="m" style={{ margin: 'auto' }}>
        <Text as="h2">Some Title</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Flex>
    </Section>
  ),
};

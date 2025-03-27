import { Horse, Pizza } from '@phosphor-icons/react/dist/ssr';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import { Button } from '../Button';
import { SvgIcon } from '../SvgIcon';
import { Text } from '../Text';
import { Dropdown } from '.';

type Props = ComponentProps<typeof Dropdown.Root>;

const meta: Meta<typeof Dropdown.Root> = {
  component: Dropdown.Root,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown.Root>;

export const Primary: Story = {
  args: {} satisfies Props,
  render: (args) => (
    <Dropdown.Root {...args}>
      <Dropdown.Trigger asChild>
        <Button label="My Dropdown" labelAlignment="left" iconRight={<Dropdown.Indicator />} />
      </Dropdown.Trigger>

      <Dropdown.Content>
        <Dropdown.Section>
          <Dropdown.SectionContent>
            <Text size="text-xs" weight={600}>
              Section One
            </Text>
          </Dropdown.SectionContent>

          <Dropdown.Item>
            <SvgIcon icon={<Horse weight="fill" />} />
            Default Icon Color
          </Dropdown.Item>

          <Dropdown.Item>
            <SvgIcon icon={<Pizza weight="fill" />} color="red-9" />
            Custom Icon Color
          </Dropdown.Item>
        </Dropdown.Section>

        <Dropdown.Section>
          <Dropdown.SectionContent>
            <Text size="text-xs" weight={600}>
              Section One
            </Text>
          </Dropdown.SectionContent>

          <Dropdown.Item>Simple Item 1</Dropdown.Item>
          <Dropdown.Item>Simple Item 2</Dropdown.Item>

          <Dropdown.Sub>
            <Dropdown.SubTrigger asChild>
              <Dropdown.Item>Sub Menu Item</Dropdown.Item>
            </Dropdown.SubTrigger>

            <Dropdown.SubContent>
              <Dropdown.Item>Sub Item A</Dropdown.Item>
              <Dropdown.Item>Sub Item B</Dropdown.Item>
            </Dropdown.SubContent>
          </Dropdown.Sub>
        </Dropdown.Section>
      </Dropdown.Content>
    </Dropdown.Root>
  ),
};

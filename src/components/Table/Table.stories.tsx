import { Pencil, Trash } from '@phosphor-icons/react/dist/ssr';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import { Badge } from '../Badge';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { Table } from '.';

type Props = ComponentProps<typeof Table.Root>;

const meta: Meta<typeof Table.Root> = {
  component: Table.Root,
  parameters: {
    layout: 'padding',
  },
};

export default meta;
type Story = StoryObj<typeof Table.Root>;

const tableRows = [
  {
    id: 1000,
    name: 'Franky Frank',
    favoriteColor: 'Orange',
    token: crypto.randomUUID(),
    address: '1234 Cool Ave, Denver, CO',
  },
  {
    id: 2000,
    name: 'Bobby Bob',
    favoriteColor: 'Blue',
    token: crypto.randomUUID(),
    address: '3456 Super Amazing St, Richmond, VA',
  },
  {
    id: 3000,
    name: 'Stevey Steve',
    favoriteColor: 'Green',
    token: crypto.randomUUID(),
    address: '65465 Some Really Long Address, Some Really Cool City, CO',
  },
];

export const Primary: Story = {
  args: {
    children: <></>,
  } satisfies Props,
  render: (args) => (
    <Table.Root {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell style={{ minWidth: '10rem' }}>Name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell style={{ minWidth: '5rem' }}>Token</Table.HeadCell>
          <Table.HeadCell style={{ minWidth: '10rem' }}>Address</Table.HeadCell>
          <Table.HeadCell style={{ width: '1px' }}></Table.HeadCell>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {tableRows.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>
              <Text size="text-s">{row.id}</Text>
            </Table.Cell>

            <Table.Cell href="#">
              <Text size="text-s" weight={600} color="sand-12">
                {row.name}
              </Text>
            </Table.Cell>

            <Table.Cell>
              <Badge label={row.favoriteColor} />
            </Table.Cell>

            <Table.Cell>
              <Text size="text-s" clampLines={1}>
                {row.token}
              </Text>
            </Table.Cell>

            <Table.Cell>
              <Text size="text-s">{row.address}</Text>
            </Table.Cell>

            <Table.Cell>
              <Flex gap="m">
                <Button label="Edit" icon={<Pencil />} size="small" />
                <Button label="Delete" icon={<Trash />} size="small" variant="destructive" />
              </Flex>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  ),
};

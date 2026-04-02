import type { Meta, StoryObj } from '@storybook/react'
import { Table, Thead, Tbody, Tr, Th, Td } from './Table'
import { Badge } from '../Badge/Badge'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Role</Th>
          <Th>Status</Th>
          <Th>Last Active</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Freddie Laker</Td>
          <Td>Owner</Td>
          <Td><Badge label="Active" variant="success" /></Td>
          <Td>2 hours ago</Td>
        </Tr>
        <Tr>
          <Td>Jacqui Kebrdle</Td>
          <Td>Core Team</Td>
          <Td><Badge label="Active" variant="success" /></Td>
          <Td>5 minutes ago</Td>
        </Tr>
        <Tr>
          <Td>New Member</Td>
          <Td>Collective Member</Td>
          <Td><Badge label="Pending" variant="warning" /></Td>
          <Td>Never</Td>
        </Tr>
      </Tbody>
    </Table>
  ),
}

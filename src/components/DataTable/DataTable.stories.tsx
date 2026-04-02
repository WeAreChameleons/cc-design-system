import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DataTable } from './DataTable'
import { Badge } from '../Badge/Badge'
import { StatusBadge } from '../StatusBadge/StatusBadge'

type Contact = {
  name: string
  company: string
  stage: string
  status: 'healthy' | 'error' | 'syncing' | 'warning' | 'inactive'
  value: string
}

const CONTACTS: Contact[] = [
  { name: 'Sarah Chen',     company: 'Acme Corp',    stage: 'proposal',    status: 'healthy', value: '$48,000' },
  { name: 'Marcus Lee',     company: 'TechFlow',     stage: 'negotiating', status: 'syncing', value: '$120,000' },
  { name: 'Priya Patel',    company: 'Globex',       stage: 'lead',        status: 'inactive', value: '–' },
  { name: 'Jordan Kim',     company: 'Initech',      stage: 'closed',      status: 'healthy', value: '$32,500' },
  { name: 'Sam Torres',     company: 'Umbrella Co',  stage: 'prospect',    status: 'warning', value: '$15,000' },
]

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof DataTable>

export const Default: Story = {
  args: {
    columns: [
      { key: 'name',    label: 'Name',    sortable: true },
      { key: 'company', label: 'Company', sortable: true },
      { key: 'stage',   label: 'Stage',   sortable: true },
      { key: 'value',   label: 'Value',   sortable: true },
    ],
    data: CONTACTS as unknown as Record<string, unknown>[],
  },
}

export const WithBadges: Story = {
  render: () => {
    const [sortKey, setSortKey] = useState('name')
    const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

    const handleSort = (key: string) => {
      if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
      else { setSortKey(key); setSortDir('asc') }
    }

    const sorted = [...CONTACTS].sort((a, b) => {
      const av = a[sortKey as keyof Contact] ?? ''
      const bv = b[sortKey as keyof Contact] ?? ''
      return sortDir === 'asc' ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av))
    })

    return (
      <DataTable
        columns={[
          { key: 'name',    label: 'Name',    sortable: true },
          { key: 'company', label: 'Company', sortable: true },
          {
            key: 'stage',
            label: 'Stage',
            sortable: true,
            render: (val) => <Badge label={String(val)} variant={String(val) as never} />,
          },
          {
            key: 'status',
            label: 'Status',
            render: (val) => <StatusBadge status={val as 'healthy'} />,
          },
          { key: 'value', label: 'Value', sortable: true },
        ]}
        data={sorted as unknown as Record<string, unknown>[]}
        sortKey={sortKey}
        sortDir={sortDir}
        onSort={handleSort}
      />
    )
  },
}

export const Empty: Story = {
  args: {
    columns: [
      { key: 'name',    label: 'Name' },
      { key: 'company', label: 'Company' },
      { key: 'stage',   label: 'Stage' },
    ],
    data: [],
  },
}

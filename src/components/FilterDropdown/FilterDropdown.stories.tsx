import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FilterDropdown } from './FilterDropdown'

const STAGE_OPTIONS = [
  { label: 'Lead', value: 'lead' },
  { label: 'Prospect', value: 'prospect' },
  { label: 'Proposal', value: 'proposal' },
  { label: 'Negotiating', value: 'negotiating' },
  { label: 'Closed', value: 'closed' },
]

const meta: Meta<typeof FilterDropdown> = {
  title: 'Components/FilterDropdown',
  component: FilterDropdown,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
  },
  args: {
    options: STAGE_OPTIONS,
    placeholder: 'Stage',
    value: '',
  },
}

export default meta
type Story = StoryObj<typeof FilterDropdown>

export const Default: Story = {}

export const ActiveFilter: Story = {
  args: { value: 'proposal', placeholder: 'Stage' },
}

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        <FilterDropdown {...args} value={value} onChange={setValue} placeholder="Stage" />
        <FilterDropdown
          options={[{ label: 'Core Team', value: 'core-team' }, { label: 'Expert', value: 'expert' }, { label: 'Vendor', value: 'vendor' }]}
          placeholder="Role"
        />
        <FilterDropdown
          options={[{ label: 'Inbound', value: 'inbound' }, { label: 'Outbound', value: 'outbound' }]}
          placeholder="Direction"
        />
      </div>
    )
  },
}

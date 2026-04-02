import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FilterBar } from './FilterBar'
import { Button } from '../Button/Button'

const meta: Meta<typeof FilterBar> = {
  title: 'Components/FilterBar',
  component: FilterBar,
  tags: ['autodocs'],
  args: {
    searchPlaceholder: 'Search contacts…',
    searchValue: '',
  },
}

export default meta
type Story = StoryObj<typeof FilterBar>

export const Default: Story = {
  args: {
    filters: [
      {
        placeholder: 'Stage',
        options: [
          { label: 'Lead', value: 'lead' },
          { label: 'Prospect', value: 'prospect' },
          { label: 'Proposal', value: 'proposal' },
          { label: 'Closed', value: 'closed' },
        ],
      },
      {
        placeholder: 'Role',
        options: [
          { label: 'Core Team', value: 'core-team' },
          { label: 'Expert', value: 'expert' },
          { label: 'Vendor', value: 'vendor' },
        ],
      },
    ],
  },
}

export const WithCTA: Story = {
  args: {
    filters: [
      {
        placeholder: 'Stage',
        options: [{ label: 'Lead', value: 'lead' }, { label: 'Prospect', value: 'prospect' }],
      },
    ],
    cta: <Button label="Add contact" variant="primary" size="sm" />,
  },
}

export const Interactive: Story = {
  render: () => {
    const [search, setSearch] = useState('')
    const [stage, setStage] = useState('')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <FilterBar
          searchPlaceholder="Search contacts…"
          searchValue={search}
          onSearchChange={setSearch}
          filters={[
            {
              placeholder: 'Stage',
              options: [
                { label: 'Lead', value: 'lead' },
                { label: 'Prospect', value: 'prospect' },
                { label: 'Proposal', value: 'proposal' },
              ],
              value: stage,
              onChange: setStage,
            },
          ]}
          cta={<Button label="Add contact" variant="primary" size="sm" />}
        />
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#8C8978' }}>
          search="{search}" stage="{stage}"
        </div>
      </div>
    )
  },
}

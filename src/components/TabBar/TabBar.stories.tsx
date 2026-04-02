import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { TabBar } from './TabBar'

const DEMO_TABS = [
  { label: 'All contacts', count: 2847 },
  { label: 'Leads', count: 312 },
  { label: 'Prospects', count: 84 },
  { label: 'Customers', count: 156 },
  { label: 'Archived' },
]

const meta: Meta<typeof TabBar> = {
  title: 'Components/TabBar',
  component: TabBar,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'compact'] },
    active: { control: { type: 'number', min: 0, max: 4 } },
  },
  args: {
    tabs: DEMO_TABS,
    active: 0,
    variant: 'default',
  },
}

export default meta
type Story = StoryObj<typeof TabBar>

export const Default: Story = {}

export const Compact: Story = {
  args: { variant: 'compact' },
}

export const WithoutCounts: Story = {
  args: {
    tabs: [
      { label: 'Overview' },
      { label: 'Activity' },
      { label: 'Files' },
      { label: 'Notes' },
    ],
    active: 0,
  },
}

export const Interactive: Story = {
  render: (args) => {
    const [active, setActive] = useState(0)
    return (
      <div>
        <TabBar {...args} active={active} onChange={setActive} />
        <div style={{ padding: '16px 0', fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#8C8978' }}>
          Active tab: <strong style={{ color: '#2F2E28' }}>{DEMO_TABS[active].label}</strong>
        </div>
      </div>
    )
  },
}

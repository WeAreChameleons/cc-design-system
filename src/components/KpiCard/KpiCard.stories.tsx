import type { Meta, StoryObj } from '@storybook/react'
import { KpiCard } from './KpiCard'

const meta: Meta<typeof KpiCard> = {
  title: 'Components/KpiCard',
  component: KpiCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'colored', 'status', 'tinted', 'alert', 'finance'],
    },
    valueColor: {
      control: 'select',
      options: ['neutral', 'orange', 'teal', 'green'],
    },
    status: {
      control: 'select',
      options: ['orange', 'teal', 'green'],
    },
    tint: {
      control: 'select',
      options: ['orange', 'teal', 'green', 'blue'],
    },
  },
  args: {
    label: 'Total Revenue',
    value: '$124,500',
    variant: 'neutral',
  },
}

export default meta
type Story = StoryObj<typeof KpiCard>

export const Default: Story = {}

export const Neutral: Story = {
  args: { label: 'Total Contacts', value: '2,847', variant: 'neutral' },
}

export const Colored: Story = {
  args: { label: 'Active Deals', value: '34', variant: 'colored', valueColor: 'orange' },
}

export const ColoredTeal: Story = {
  args: { label: 'Integrations', value: '12', variant: 'colored', valueColor: 'teal' },
}

export const ColoredGreen: Story = {
  args: { label: 'Closed Won', value: '89%', variant: 'colored', valueColor: 'green' },
}

export const Status: Story = {
  args: { label: 'Pipeline health', value: '$840K', variant: 'status', status: 'orange', subtext: 'vs $620K last month' },
}

export const Tinted: Story = {
  args: { label: 'Open Tasks', value: '47', variant: 'tinted', tint: 'orange' },
}

export const Alert: Story = {
  args: { label: 'Overdue follow-ups', value: '12', variant: 'alert', subtext: 'Needs attention' },
}

export const Finance: Story = {
  args: { label: 'Monthly recurring', value: '$48,200', variant: 'finance', capsLabel: 'MRR' },
}

export const Dashboard: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <KpiCard label="Total contacts" value="2,847" variant="neutral" />
      <KpiCard label="Active deals" value="34" variant="colored" valueColor="orange" />
      <KpiCard label="Integrations" value="12" variant="colored" valueColor="teal" />
      <KpiCard label="Closed won" value="89%" variant="colored" valueColor="green" />
      <KpiCard label="Overdue tasks" value="7" variant="alert" subtext="Needs attention" />
      <KpiCard label="Pipeline value" value="$840K" variant="status" status="orange" subtext="↑ 35% vs last month" />
    </div>
  ),
}

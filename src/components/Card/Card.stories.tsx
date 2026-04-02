import type { Meta, StoryObj } from '@storybook/react'
import { Card, StatCard } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: { children: 'A basic card with no accent border.', accent: 'none' },
}

export const BurntSiennaAccent: Story = {
  args: { children: 'Card with burnt sienna accent border.', accent: 'burnt-sienna' },
}

export const ElectricBlueAccent: Story = {
  args: { children: 'Card with electric blue accent border.', accent: 'electric-blue' },
}

export const StrawAccent: Story = {
  args: { children: 'Card with straw accent border.', accent: 'straw' },
}

export const StatCards: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 200px)', gap: '16px' }}>
      <StatCard label="Total Users" value="290" sublabel="+12 this month" accent="burnt-sienna" />
      <StatCard label="Active Syncs" value="24" sublabel="All healthy" accent="electric-blue" />
      <StatCard label="Revenue" value="$2.4M" sublabel="Q1 2026" accent="straw" />
    </div>
  ),
}

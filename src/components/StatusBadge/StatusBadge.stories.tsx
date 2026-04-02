import type { Meta, StoryObj } from '@storybook/react'
import { StatusBadge } from './StatusBadge'

const meta: Meta<typeof StatusBadge> = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['healthy', 'error', 'syncing', 'warning', 'inactive'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    label: { control: 'text' },
  },
  args: { status: 'healthy', size: 'md' },
}

export default meta
type Story = StoryObj<typeof StatusBadge>

export const Default: Story = {}

export const Healthy: Story = { args: { status: 'healthy' } }
export const Error: Story = { args: { status: 'error' } }
export const Syncing: Story = { args: { status: 'syncing' } }
export const Warning: Story = { args: { status: 'warning' } }
export const Inactive: Story = { args: { status: 'inactive' } }

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <StatusBadge status="healthy" />
      <StatusBadge status="error" />
      <StatusBadge status="syncing" />
      <StatusBadge status="warning" />
      <StatusBadge status="inactive" />
    </div>
  ),
}

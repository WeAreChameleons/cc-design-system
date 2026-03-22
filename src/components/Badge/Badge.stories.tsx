import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'accent', 'success', 'warning', 'danger', 'info'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = { args: { label: 'Default', variant: 'default' } }
export const Accent: Story = { args: { label: 'Active', variant: 'accent' } }
export const Success: Story = { args: { label: 'Approved', variant: 'success' } }
export const Warning: Story = { args: { label: 'Pending', variant: 'warning' } }
export const Danger: Story = { args: { label: 'Failed', variant: 'danger' } }
export const Info: Story = { args: { label: 'New', variant: 'info' } }

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge label="Default" variant="default" />
      <Badge label="Active" variant="accent" />
      <Badge label="Approved" variant="success" />
      <Badge label="Pending" variant="warning" />
      <Badge label="Failed" variant="danger" />
      <Badge label="New" variant="info" />
    </div>
  ),
}

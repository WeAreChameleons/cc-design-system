import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'dashed', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Primary: Story = {
  args: { variant: 'primary', label: 'Save changes' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', label: 'Cancel' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', label: 'Dismiss' },
}

export const Dashed: Story = {
  args: { variant: 'dashed', label: '+ Add item' },
}

export const Destructive: Story = {
  args: { variant: 'destructive', label: 'Delete account' },
}

export const Small: Story = {
  args: { size: 'sm', label: 'Small' },
}

export const Large: Story = {
  args: { size: 'lg', label: 'Large' },
}

export const Loading: Story = {
  args: { loading: true, label: 'Saving…' },
}

export const Disabled: Story = {
  args: { disabled: true, label: 'Unavailable' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Ghost" variant="ghost" />
      <Button label="Dashed" variant="dashed" />
      <Button label="Destructive" variant="destructive" />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button label="Small" size="sm" />
      <Button label="Medium" size="md" />
      <Button label="Large" size="lg" />
    </div>
  ),
}

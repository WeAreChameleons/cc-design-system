import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SearchBar } from './SearchBar'

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    width: { control: 'text' },
  },
  args: {
    placeholder: 'Search contacts…',
    value: '',
  },
}

export default meta
type Story = StoryObj<typeof SearchBar>

export const Default: Story = {}

export const WithValue: Story = {
  args: { value: 'Sarah Chen' },
}

export const Wide: Story = {
  args: { width: 360, placeholder: 'Search anything…' },
}

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <SearchBar {...args} value={value} onChange={setValue} />
        {value && (
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#8C8978', margin: 0 }}>
            Searching for: <strong style={{ color: '#2F2E28' }}>{value}</strong>
          </p>
        )}
      </div>
    )
  },
}

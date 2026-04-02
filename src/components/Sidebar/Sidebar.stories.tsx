import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    activeItem: {
      control: 'select',
      options: ['dashboard', 'contacts', 'deals', 'tasks', 'integrations', 'workflows', 'analytics', 'settings', 'team'],
    },
    collapsed: { control: 'boolean' },
    userName: { control: 'text' },
    userEmail: { control: 'text' },
  },
  args: {
    activeItem: 'dashboard',
    collapsed: false,
    userName: 'Alex Rivera',
    userEmail: 'alex@chameleon.co',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Default: Story = {}

export const Collapsed: Story = {
  args: { collapsed: true },
}

export const ActiveDeals: Story = {
  args: { activeItem: 'deals' },
}

export const Interactive: Story = {
  render: (args) => {
    const [active, setActive] = useState(args.activeItem ?? 'dashboard')
    const [collapsed, setCollapsed] = useState(false)
    return (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Sidebar
          {...args}
          activeItem={active}
          collapsed={collapsed}
          onItemClick={setActive}
          onToggleCollapse={() => setCollapsed(c => !c)}
        />
        <div style={{ flex: 1, padding: 32, background: '#F5F3EC', fontFamily: 'Inter, sans-serif' }}>
          <p style={{ color: '#8C8978', fontSize: 13 }}>Active: <strong style={{ color: '#2F2E28' }}>{active}</strong></p>
        </div>
      </div>
    )
  },
}

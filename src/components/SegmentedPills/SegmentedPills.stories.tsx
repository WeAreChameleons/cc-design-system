import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SegmentedPills } from './SegmentedPills'

const VIEW_OPTIONS = [
  { value: 'all', label: 'All', count: 234 },
  { value: 'active', label: 'Active', count: 89 },
  { value: 'inactive', label: 'Inactive', count: 145 },
]

const meta: Meta<typeof SegmentedPills> = {
  title: 'Components/SegmentedPills',
  component: SegmentedPills,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solidDark', 'solidOrange', 'ghost', 'tabUnderline', 'iconToggle'],
    },
    active: { control: 'text' },
  },
  args: {
    options: VIEW_OPTIONS,
    active: 'all',
    variant: 'solidDark',
  },
}

export default meta
type Story = StoryObj<typeof SegmentedPills>

export const Default: Story = {}

export const SolidDark: Story = {
  args: { variant: 'solidDark' },
}

export const SolidOrange: Story = {
  args: { variant: 'solidOrange' },
}

export const Ghost: Story = {
  args: { variant: 'ghost' },
}

export const TabUnderline: Story = {
  args: { variant: 'tabUnderline' },
}

export const IconToggle: Story = {
  args: {
    variant: 'iconToggle',
    options: [
      { value: 'list', label: '≡ List' },
      { value: 'grid', label: '⊞ Grid' },
      { value: 'kanban', label: '▦ Kanban' },
    ],
    active: 'list',
  },
}

export const Interactive: Story = {
  render: (args) => {
    const [active, setActive] = useState('all')
    return <SegmentedPills {...args} active={active} onChange={setActive} />
  },
}

export const AllVariants: Story = {
  render: () => {
    const [active, setActive] = useState('all')
    const opts = [{ value: 'all', label: 'All' }, { value: 'active', label: 'Active' }, { value: 'done', label: 'Done' }]
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {(['solidDark', 'solidOrange', 'ghost', 'iconToggle'] as const).map(v => (
          <div key={v} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#8C8978', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{v}</span>
            <SegmentedPills options={opts} active={active} onChange={setActive} variant={v} />
          </div>
        ))}
      </div>
    )
  },
}

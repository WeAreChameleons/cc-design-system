import type { Meta, StoryObj } from '@storybook/react'
import { Icon, ICON_NAMES } from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'select', options: ICON_NAMES },
    size: { control: 'number' },
  },
}
export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: { name: 'bot', size: 24 },
}

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '16px' }}>
      {ICON_NAMES.map((name) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '12px' }}>
          <Icon name={name} size={24} />
          <span style={{ fontSize: '11px', color: '#6b6b6b', fontFamily: 'Inter, sans-serif' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Icon name="star" size={16} />
      <Icon name="star" size={24} />
      <Icon name="star" size={32} />
      <Icon name="star" size={48} />
    </div>
  ),
}

export const WithColor: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <span style={{ color: '#eb633f' }}><Icon name="check" size={24} /></span>
      <span style={{ color: '#88e8f0' }}><Icon name="globe" size={24} /></span>
      <span style={{ color: '#e8eb74' }}><Icon name="star" size={24} /></span>
      <span style={{ color: '#6b6b6b' }}><Icon name="clock" size={24} /></span>
    </div>
  ),
}

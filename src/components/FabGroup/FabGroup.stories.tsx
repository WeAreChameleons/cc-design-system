import type { Meta, StoryObj } from '@storybook/react'
import { FabGroup } from './FabGroup'

const meta: Meta<typeof FabGroup> = {
  title: 'Components/FabGroup',
  component: FabGroup,
  tags: ['autodocs'],
  argTypes: {
    phoneBadge: { control: { type: 'number', min: 0, max: 99 } },
    chatBadge: { control: { type: 'number', min: 0, max: 99 } },
  },
  args: {
    phoneBadge: 0,
    chatBadge: 0,
  },
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof FabGroup>

export const Default: Story = {}

export const WithBadges: Story = {
  args: { phoneBadge: 3, chatBadge: 12 },
}

export const PhoneOnly: Story = {
  args: { phoneBadge: 1 },
}

export const InContext: Story = {
  render: () => (
    <div style={{ position: 'relative', width: 400, height: 300, background: '#F5F3EC', borderRadius: 12 }}>
      <p style={{ padding: 24, fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#8C8978' }}>
        Page content area
      </p>
      <div style={{ position: 'absolute', bottom: 16, right: 16 }}>
        <FabGroup phoneBadge={3} chatBadge={7} />
      </div>
    </div>
  ),
}

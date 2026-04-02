import type { Meta, StoryObj } from '@storybook/react'
import { StatsBar } from './StatsBar'

const meta: Meta<typeof StatsBar> = {
  title: 'Website/StatsBar',
  component: StatsBar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta

type Story = StoryObj<typeof StatsBar>

const defaultStats = [
  { value: '150+', label: 'Leaders & Experts' },
  { value: '500+', label: 'Engagements Delivered' },
  { value: '20+', label: 'Industries Served' },
  { value: '15+', label: 'Years of Experience' },
]

export const OnCream: Story = { args: { stats: defaultStats, bg: 'cream' } }
export const OnBlack: Story = { args: { stats: defaultStats, bg: 'black' } }
export const OnWhite: Story = { args: { stats: defaultStats, bg: 'white' } }

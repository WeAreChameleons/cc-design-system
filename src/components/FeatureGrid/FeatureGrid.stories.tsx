import type { Meta, StoryObj } from '@storybook/react'
import { FeatureGrid } from './FeatureGrid'

const meta: Meta<typeof FeatureGrid> = {
  title: 'Website/FeatureGrid',
  component: FeatureGrid,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta

type Story = StoryObj<typeof FeatureGrid>

export const Values: Story = {
  args: {
    eyebrow: 'What We Stand For',
    title: 'Our Values',
    items: [
      { name: 'Embedded Partnership', description: 'We embed with your team, learn your culture, and work shoulder-to-shoulder to drive real change.' },
      { name: 'Transformational Talent', description: 'Our collective is made up of executives and specialists who have done it before — battle-tested leaders.' },
      { name: 'Lasting Impact', description: 'We measure success by the outcomes we leave behind, not the hours we bill.' },
    ],
    columns: 3,
  },
}

export const Services: Story = {
  args: {
    title: 'Our Practices',
    items: [
      { name: 'Brand', description: 'Shape your identity. Forge your connection.' },
      { name: 'Marketing', description: 'Captivate. Convert. Grow.' },
      { name: 'Experience', description: 'Build loyalty at every touchpoint.' },
      { name: 'Commerce', description: 'Seamless transactions. Satisfied customers.' },
      { name: 'Sales', description: 'Optimise. Convert. Expand.' },
    ],
    columns: 3,
    bg: 'offwhite',
  },
}

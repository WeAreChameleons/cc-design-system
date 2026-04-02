import type { Meta, StoryObj } from '@storybook/react'
import { PracticeList } from './PracticeCard'

const meta: Meta<typeof PracticeList> = {
  title: 'Website/PracticeCard',
  component: PracticeList,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta

type Story = StoryObj<typeof PracticeList>

export const Default: Story = {
  render: () => (
    <div style={{ backgroundColor: '#121212', padding: '64px 32px', maxWidth: '1280px', margin: '0 auto' }}>
      <PracticeList practices={[
        { name: 'Brand', tagline: 'Shape your identity. Forge your connection.', slug: 'brand' },
        { name: 'Marketing', tagline: 'Captivate. Convert. Grow.', slug: 'marketing' },
        { name: 'Experience', tagline: 'Build loyalty at every touchpoint.', slug: 'experience' },
        { name: 'Commerce', tagline: 'Seamless transactions. Satisfied customers.', slug: 'commerce' },
        { name: 'Sales', tagline: 'Optimise. Convert. Expand.', slug: 'sales' },
      ]} />
    </div>
  ),
}

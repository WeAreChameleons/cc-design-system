import type { Meta, StoryObj } from '@storybook/react'
import { TeamCard, TeamGrid } from './TeamCard'

const meta: Meta<typeof TeamCard> = {
  title: 'Website/TeamCard',
  component: TeamCard,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof TeamCard>

export const WithoutImage: Story = {
  args: { name: 'Freddie Laker', title: 'Founder & CEO' },
}

export const Grid: StoryObj = {
  render: () => (
    <TeamGrid members={[
      { name: 'Freddie Laker', title: 'Founder & CEO' },
      { name: 'Sarah Chen', title: 'Head of Strategy' },
      { name: 'Marcus Rivera', title: 'Brand Director' },
      { name: 'Aisha Patel', title: 'Marketing Lead' },
      { name: 'James O\'Brien', title: 'Commerce Expert' },
      { name: 'Elena Volkov', title: 'Experience Designer' },
    ]} />
  ),
}

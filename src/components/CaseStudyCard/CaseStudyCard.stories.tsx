import type { Meta, StoryObj } from '@storybook/react'
import { CaseStudyCard, CaseStudyGrid } from './CaseStudyCard'

const meta: Meta<typeof CaseStudyCard> = {
  title: 'Website/CaseStudyCard',
  component: CaseStudyCard,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof CaseStudyCard>

export const Single: Story = {
  args: {
    title: 'Reimagining Digital Commerce for a Global Retailer',
    client: 'Fortune 500 Retailer',
    category: 'Commerce',
  },
}

export const Grid: StoryObj = {
  render: () => (
    <CaseStudyGrid studies={[
      { title: 'Reimagining Digital Commerce for a Global Retailer', client: 'Fortune 500 Retailer', category: 'Commerce' },
      { title: 'Building a Brand from the Ground Up', client: 'Emerging Tech Startup', category: 'Brand' },
      { title: 'Transforming the Customer Experience', client: 'Leading Financial Services', category: 'Experience' },
    ]} />
  ),
}

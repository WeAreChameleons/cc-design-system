import type { Meta, StoryObj } from '@storybook/react'
import { Section, SplitSection } from './Section'

const meta: Meta<typeof Section> = {
  title: 'Website/Section',
  component: Section,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta

type Story = StoryObj<typeof Section>

export const White: Story = {
  args: {
    bg: 'white',
    children: (
      <div>
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(18,18,18,0.4)', marginBottom: '24px' }}>
          Our Mission
        </p>
        <h2 style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '48px', fontWeight: 400, lineHeight: 1.05, maxWidth: '800px' }}>
          We bring together industry-leading experts to solve your most complex challenges.
        </h2>
      </div>
    ),
  },
}

export const Split: StoryObj = {
  render: () => (
    <SplitSection
      leftBg="cream"
      left={
        <h2 style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 'clamp(36px, 4vw, 64px)', fontWeight: 400, lineHeight: 1.1 }}>
          We don't staff agencies. We build transformation teams.
        </h2>
      }
      right={
        <div>
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(18,18,18,0.4)', marginBottom: '24px' }}>
            Our Mission
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: 'rgba(18,18,18,0.75)', lineHeight: 1.6 }}>
            Chameleon Collective is a collective of industry-leading independent consultants.
            We challenge the permanent staffing model by building on-demand teams of best-in-class
            specialists.
          </p>
        </div>
      }
    />
  ),
}

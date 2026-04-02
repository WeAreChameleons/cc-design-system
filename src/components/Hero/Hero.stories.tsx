import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './Hero'
import { ArrowCTA } from '../ArrowCTA/ArrowCTA'

const meta: Meta<typeof Hero> = {
  title: 'Website/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    bg: { control: 'select', options: ['burnt-sienna', 'cream', 'black', 'white'] },
    align: { control: 'select', options: ['left', 'center'] },
  },
}
export default meta

type Story = StoryObj<typeof Hero>

export const Homepage: Story = {
  args: {
    eyebrow: 'Chameleon Collective',
    title: 'Transform.\nLead.\nGrow.',
    bg: 'burnt-sienna',
  },
  render: (args) => (
    <Hero {...args}>
      <ArrowCTA label="Get in Touch" variant="primary" />
      <ArrowCTA label="See Our Work" variant="outline-light" />
    </Hero>
  ),
}

export const AboutPage: Story = {
  args: {
    title: 'Our\nStory',
    subtitle: 'Chameleon Collective was founded on a simple premise: great companies deserve great leaders.',
    bg: 'cream',
  },
}

export const DarkHero: Story = {
  args: {
    eyebrow: 'Services',
    title: 'What We\nDo Best',
    subtitle: 'We build transformation teams of best-in-class specialists.',
    bg: 'black',
  },
  render: (args) => (
    <Hero {...args}>
      <ArrowCTA label="Explore Services" variant="primary" />
    </Hero>
  ),
}

export const Centered: Story = {
  args: {
    eyebrow: 'The Collective',
    title: 'Meet Our\nTeam',
    subtitle: '150+ leaders and experts across every discipline.',
    bg: 'cream',
    align: 'center',
  },
}

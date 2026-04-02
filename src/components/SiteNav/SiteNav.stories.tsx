import type { Meta, StoryObj } from '@storybook/react'
import { SiteNav } from './SiteNav'

const meta: Meta<typeof SiteNav> = {
  title: 'Website/SiteNav',
  component: SiteNav,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta

type Story = StoryObj<typeof SiteNav>

export const Default: Story = { args: {} }

export const WithActiveLink: Story = {
  args: { activeHref: '/work' },
}

import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { PageHeader } from './PageHeader'
import { Button } from '../Button/Button'

const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'welcome', 'withBreadcrumb', 'withBanner', 'withEyebrow', 'twoLevel'],
    },
  },
  args: {
    title: 'Contacts',
    subtitle: 'Manage your contacts and relationships',
    variant: 'standard',
  },
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <div style={{ background: '#F5F3EC', minHeight: 200 }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof PageHeader>

export const Default: Story = {}

export const Standard: Story = {
  args: {
    title: 'Contacts',
    subtitle: '2,847 total contacts',
    variant: 'standard',
    actions: <Button label="Add contact" variant="primary" size="sm" />,
  },
}

export const Welcome: Story = {
  args: {
    title: "Here's what's happening today",
    subtitle: 'You have 3 follow-ups due and 2 deals closing this week.',
    variant: 'welcome',
    name: 'Alex',
  },
}

export const WithBreadcrumb: Story = {
  args: {
    title: 'Sarah Chen',
    subtitle: 'VP of Engineering · Acme Corp',
    variant: 'withBreadcrumb',
    breadcrumb: [
      { label: 'Contacts', href: '#' },
      { label: 'Sarah Chen' },
    ],
  },
}

export const WithBanner: Story = {
  args: {
    title: 'Integrations',
    subtitle: 'Connect your tools and automate workflows',
    variant: 'withBanner',
    bannerText: 'Salesforce sync is paused — please re-authenticate.',
    bannerLink: '#',
  },
}

export const WithEyebrow: Story = {
  args: {
    title: 'Q2 Pipeline Review',
    subtitle: 'April 2026',
    variant: 'withEyebrow',
    eyebrow: 'Analytics',
  },
}

export const WithTabs: Story = {
  render: () => {
    const [active, setActive] = useState(0)
    return (
      <PageHeader
        title="Contacts"
        subtitle="2,847 total contacts"
        variant="standard"
        tabs={[
          { label: 'All contacts', count: 2847 },
          { label: 'Leads', count: 312 },
          { label: 'Prospects', count: 84 },
          { label: 'Customers', count: 156 },
        ]}
        activeTab={active}
        onTabChange={setActive}
        actions={<Button label="Add contact" variant="primary" size="sm" />}
      />
    )
  },
}

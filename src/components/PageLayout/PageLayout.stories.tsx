import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { PageLayout } from './PageLayout'
import { PageHeader } from '../PageHeader/PageHeader'
import { KpiCard } from '../KpiCard/KpiCard'

const meta: Meta<typeof PageLayout> = {
  title: 'Components/PageLayout',
  component: PageLayout,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    phoneBadge: { control: { type: 'number', min: 0, max: 99 } },
    chatBadge: { control: { type: 'number', min: 0, max: 99 } },
  },
  args: {
    activeItem: 'dashboard',
    phoneBadge: 2,
    chatBadge: 5,
    userName: 'Alex Rivera',
    userEmail: 'alex@chameleon.co',
  },
}

export default meta
type Story = StoryObj<typeof PageLayout>

export const Default: Story = {
  render: (args) => {
    const [active, setActive] = useState(args.activeItem ?? 'dashboard')
    return (
      <PageLayout {...args} activeItem={active} onNavItemClick={setActive}>
        <PageHeader
          title="Dashboard"
          subtitle="Welcome back — here's what's happening"
          variant="standard"
        />
        <div style={{ padding: '24px', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <KpiCard label="Total contacts" value="2,847" variant="neutral" />
          <KpiCard label="Active deals" value="34" variant="colored" valueColor="orange" />
          <KpiCard label="Integrations" value="12" variant="colored" valueColor="teal" />
          <KpiCard label="Closed won" value="89%" variant="colored" valueColor="green" />
        </div>
      </PageLayout>
    )
  },
}

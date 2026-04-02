import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabList, Tab, TabPanel } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultTab="overview">
      <TabList>
        <Tab value="overview">Overview</Tab>
        <Tab value="analytics">Analytics</Tab>
        <Tab value="settings">Settings</Tab>
      </TabList>
      <TabPanel value="overview">
        Dashboard overview content goes here.
      </TabPanel>
      <TabPanel value="analytics">
        Analytics charts and data tables.
      </TabPanel>
      <TabPanel value="settings">
        Configuration and preferences.
      </TabPanel>
    </Tabs>
  ),
}

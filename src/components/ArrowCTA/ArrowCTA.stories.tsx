import type { Meta, StoryObj } from '@storybook/react'
import { ArrowCTA } from './ArrowCTA'

const meta: Meta<typeof ArrowCTA> = {
  title: 'Website/ArrowCTA',
  component: ArrowCTA,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline-light', 'outline-dark'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}
export default meta

type Story = StoryObj<typeof ArrowCTA>

export const Primary: Story = { args: { label: 'Get in Touch', variant: 'primary' } }
export const Secondary: Story = { args: { label: 'Get in Touch', variant: 'secondary' } }

export const OutlineLight: Story = {
  args: { label: 'See Our Work', variant: 'outline-light' },
  decorators: [(Story) => <div style={{ background: '#121212', padding: '32px' }}><Story /></div>],
}

export const OutlineDark: Story = {
  args: { label: 'Learn More', variant: 'outline-dark' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <ArrowCTA label="Get in Touch" variant="primary" />
        <ArrowCTA label="Get in Touch" variant="secondary" />
        <ArrowCTA label="Learn More" variant="outline-dark" />
      </div>
      <div style={{ background: '#121212', padding: '24px', display: 'flex', gap: '16px' }}>
        <ArrowCTA label="Get in Touch" variant="primary" />
        <ArrowCTA label="See Our Work" variant="outline-light" />
      </div>
    </div>
  ),
}

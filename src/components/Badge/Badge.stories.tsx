import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    showDot: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { label: 'Badge', variant: 'healthy', size: 'md', showDot: false },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {}

// ── Status ────────────────────────────────────────────────────────────────────
export const StatusHealthy: Story = { args: { label: 'Healthy', variant: 'healthy', showDot: true } }
export const StatusError: Story = { args: { label: 'Error', variant: 'error', showDot: true } }
export const StatusSyncing: Story = { args: { label: 'Syncing', variant: 'syncing', showDot: true } }
export const StatusWarning: Story = { args: { label: 'Warning', variant: 'warning', showDot: true } }
export const StatusInactive: Story = { args: { label: 'Inactive', variant: 'inactive', showDot: true } }

// ── CRM stage ─────────────────────────────────────────────────────────────────
export const CRMStage: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge label="Lead" variant="lead" />
      <Badge label="Prospect" variant="prospect" />
      <Badge label="Proposal" variant="proposal" />
      <Badge label="Negotiating" variant="negotiating" />
      <Badge label="Closed" variant="closed" />
      <Badge label="Lost" variant="lost" />
    </div>
  ),
}

// ── Role / team ───────────────────────────────────────────────────────────────
export const RoleTeam: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge label="Core Team" variant="core-team" />
      <Badge label="Expert" variant="expert" />
      <Badge label="Vendor" variant="vendor" />
      <Badge label="Owner" variant="owner" />
      <Badge label="Strategy" variant="strategy" />
      <Badge label="Design" variant="design" />
      <Badge label="Engineering" variant="engineering" />
      <Badge label="Marketing" variant="marketing" />
      <Badge label="Sales" variant="sales" />
      <Badge label="Operations" variant="operations" />
      <Badge label="Finance" variant="finance" />
      <Badge label="HR" variant="hr" />
      <Badge label="Legal" variant="legal" />
    </div>
  ),
}

// ── Direction ─────────────────────────────────────────────────────────────────
export const Direction: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Badge label="Inbound" variant="inbound" />
      <Badge label="Outbound" variant="outbound" />
      <Badge label="Bi-directional" variant="bi" />
    </div>
  ),
}

// ── Auth type ─────────────────────────────────────────────────────────────────
export const AuthType: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Badge label="No Auth" variant="no-auth" />
      <Badge label="API Key" variant="api-key" />
      <Badge label="OAuth" variant="oauth" />
    </div>
  ),
}

// ── Sizes ─────────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Badge label="Small" variant="healthy" size="sm" showDot />
      <Badge label="Medium" variant="healthy" size="md" showDot />
      <Badge label="Large" variant="healthy" size="lg" showDot />
    </div>
  ),
}

// ── Composite ─────────────────────────────────────────────────────────────────
export const InContext: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#2F2E28', width: 100 }}>Integration:</span>
        <Badge label="Healthy" variant="healthy" showDot />
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#2F2E28', width: 100 }}>Stage:</span>
        <Badge label="Proposal" variant="proposal" />
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#2F2E28', width: 100 }}>Role:</span>
        <Badge label="Core Team" variant="core-team" />
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#2F2E28', width: 100 }}>Auth:</span>
        <Badge label="OAuth" variant="oauth" />
      </div>
    </div>
  ),
}

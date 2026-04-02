import type { Meta, StoryObj } from '@storybook/react'

const SHADOWS = [
  {
    name: 'None',
    token: 'none',
    value: 'none',
    usage: 'Flat surfaces, inline elements',
  },
  {
    name: 'XS',
    token: '--shadow-xs',
    value: '0 1px 2px rgba(0,0,0,0.06)',
    usage: 'Subtle lift — inputs, badges',
  },
  {
    name: 'SM',
    token: '--shadow-sm',
    value: '0 2px 8px rgba(0,0,0,0.08)',
    usage: 'Cards, dropdowns, KPI cards',
  },
  {
    name: 'MD',
    token: '--shadow-md',
    value: '0 4px 16px rgba(0,0,0,0.12)',
    usage: 'Modals, popovers, tooltips',
  },
  {
    name: 'LG',
    token: '--shadow-lg',
    value: '0 8px 32px rgba(0,0,0,0.16)',
    usage: 'Floating panels, drawers',
  },
  {
    name: 'FAB',
    token: '--shadow-fab',
    value: '0 2px 8px rgba(0,0,0,0.18)',
    usage: 'FAB buttons (phone, chat)',
  },
]

function ShadowsDoc() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 8 }}>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-end' }}>
        {SHADOWS.filter(s => s.name !== 'None').map(({ name, value }) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            <div
              style={{
                width: 80,
                height: 80,
                background: '#fff',
                borderRadius: 10,
                boxShadow: value,
              }}
            />
            <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 600, color: '#2F2E28' }}>{name}</span>
          </div>
        ))}
      </div>

      <div>
        <h3 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#8C8978', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 12px' }}>
          Token reference
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid #D3CDB4', borderRadius: 8, overflow: 'hidden' }}>
          {SHADOWS.map(({ name, token, value, usage }, i) => (
            <div
              key={name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '10px 14px',
                background: i % 2 === 1 ? 'color-mix(in srgb, #EAE4C8 40%, transparent)' : '#fff',
                borderBottom: i < SHADOWS.length - 1 ? '1px solid #EAE4C8' : 'none',
              }}
            >
              <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#2F2E28', width: 40, flexShrink: 0 }}>{name}</span>
              <code style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#EB633F', width: 110, flexShrink: 0 }}>{token}</code>
              <code style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#8C8978', flex: 1 }}>{value}</code>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#757264', width: 220, flexShrink: 0, textAlign: 'right' }}>{usage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const meta: Meta<typeof ShadowsDoc> = {
  title: 'Design Tokens/Shadows',
  component: ShadowsDoc,
  parameters: { layout: 'padded', controls: { disable: true } },
}

export default meta
type Story = StoryObj<typeof ShadowsDoc>

export const Default: Story = { name: 'Default' }

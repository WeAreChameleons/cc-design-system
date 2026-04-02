import type { Meta, StoryObj } from '@storybook/react'

const RADIUS = [
  { token: '--radius-sm',   value: '4px',    label: 'Small' },
  { token: '--radius-md',   value: '8px',    label: 'Medium' },
  { token: '--radius-lg',   value: '12px',   label: 'Large' },
  { token: '--radius-full', value: '9999px', label: 'Full / Pill' },
]

function BorderRadiusDoc() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 8 }}>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {RADIUS.map(({ token, value, label }) => (
          <div key={token} style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
            <div
              style={{
                width: 80,
                height: 80,
                background: 'var(--cc-beige-00, #EAE4C8)',
                border: '2px solid var(--cc-beige-10, #D3CDB4)',
                borderRadius: `var(${token})`,
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 600, color: '#2F2E28', display: 'block' }}>{label}</span>
              <code style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color: '#8C8978', display: 'block', marginTop: 2 }}>{token}</code>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color: '#BBB6A0', display: 'block' }}>{value}</span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#8C8978', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 12px' }}>
          Usage guide
        </h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 13 }}>
          <thead>
            <tr style={{ background: '#EAE4C8', textAlign: 'left' }}>
              <th style={{ padding: '8px 12px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 600, color: '#2F2E28', borderBottom: '1px solid #D3CDB4' }}>Token</th>
              <th style={{ padding: '8px 12px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 600, color: '#2F2E28', borderBottom: '1px solid #D3CDB4' }}>Value</th>
              <th style={{ padding: '8px 12px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 600, color: '#2F2E28', borderBottom: '1px solid #D3CDB4' }}>Used for</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '8px 12px', color: '#EB633F', fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, borderBottom: '1px solid #EAE4C8' }}>--radius-sm</td><td style={{ padding: '8px 12px', color: '#8C8978', fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, borderBottom: '1px solid #EAE4C8' }}>4px</td><td style={{ padding: '8px 12px', color: '#757264', borderBottom: '1px solid #EAE4C8' }}>Inline badges, small chips, table cells</td></tr>
            <tr style={{ background: 'color-mix(in srgb, #EAE4C8 40%, transparent)' }}><td style={{ padding: '8px 12px', color: '#EB633F', fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, borderBottom: '1px solid #EAE4C8' }}>--radius-md</td><td style={{ padding: '8px 12px', color: '#8C8978', fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, borderBottom: '1px solid #EAE4C8' }}>8px</td><td style={{ padding: '8px 12px', color: '#757264', borderBottom: '1px solid #EAE4C8' }}>Buttons, inputs, dropdowns, modals</td></tr>
            <tr><td style={{ padding: '8px 12px', color: '#EB633F', fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, borderBottom: '1px solid #EAE4C8' }}>--radius-lg</td><td style={{ padding: '8px 12px', color: '#8C8978', fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, borderBottom: '1px solid #EAE4C8' }}>12px</td><td style={{ padding: '8px 12px', color: '#757264', borderBottom: '1px solid #EAE4C8' }}>Cards, panels, data tables</td></tr>
            <tr style={{ background: 'color-mix(in srgb, #EAE4C8 40%, transparent)' }}><td style={{ padding: '8px 12px', color: '#EB633F', fontFamily: 'IBM Plex Mono, monospace', fontSize: 12 }}>--radius-full</td><td style={{ padding: '8px 12px', color: '#8C8978', fontFamily: 'IBM Plex Mono, monospace', fontSize: 12 }}>9999px</td><td style={{ padding: '8px 12px', color: '#757264' }}>Pill badges, segmented pills, avatar</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const meta: Meta<typeof BorderRadiusDoc> = {
  title: 'Design Tokens/Border Radius',
  component: BorderRadiusDoc,
  parameters: { layout: 'padded', controls: { disable: true } },
}

export default meta
type Story = StoryObj<typeof BorderRadiusDoc>

export const Default: Story = { name: 'Default' }

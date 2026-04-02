import type { Meta, StoryObj } from '@storybook/react'

const BORDERS = [
  { label: '1px',   value: '1px',   usage: 'Card borders, table rows, dividers' },
  { label: '1.5px', value: '1.5px', usage: 'Button borders, input borders, tab underlines' },
  { label: '2px',   value: '2px',   usage: 'Active sidebar border, focus rings' },
  { label: '2.5px', value: '2.5px', usage: 'Spinner track, loading indicators' },
]

function BorderWidthsDoc() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 8 }}>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-end' }}>
        {BORDERS.map(({ label, value }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
            <div
              style={{
                width: 72,
                height: 72,
                background: 'var(--cc-page-bg, #F5F3EC)',
                border: `${value} solid var(--cc-orange-00, #EB633F)`,
                borderRadius: 8,
              }}
            />
            <code style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 13, color: '#EB633F' }}>{label}</code>
          </div>
        ))}
      </div>

      <div>
        <h3 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#8C8978', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 12px' }}>
          Usage guide
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid #D3CDB4', borderRadius: 8, overflow: 'hidden' }}>
          {BORDERS.map(({ label, value, usage }, i) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                padding: '10px 14px',
                background: i % 2 === 1 ? 'color-mix(in srgb, #EAE4C8 40%, transparent)' : '#fff',
                borderBottom: i < BORDERS.length - 1 ? '1px solid #EAE4C8' : 'none',
              }}
            >
              <code style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 13, color: '#EB633F', width: 50, flexShrink: 0 }}>{value}</code>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#757264' }}>{usage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const meta: Meta<typeof BorderWidthsDoc> = {
  title: 'Design Tokens/Border Widths',
  component: BorderWidthsDoc,
  parameters: { layout: 'padded', controls: { disable: true } },
}

export default meta
type Story = StoryObj<typeof BorderWidthsDoc>

export const Default: Story = { name: 'Default' }

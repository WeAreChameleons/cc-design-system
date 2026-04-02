import type { Meta, StoryObj } from '@storybook/react'

const BREAKPOINTS = [
  { name: 'Mobile',       token: 'sm',  value: '640px',  icon: '📱', description: 'Single column, collapsed sidebar' },
  { name: 'Tablet',       token: 'md',  value: '768px',  icon: '⬜', description: 'Two columns, icon-only sidebar' },
  { name: 'Laptop',       token: 'lg',  value: '1024px', icon: '💻', description: 'Full sidebar, standard layout' },
  { name: 'Desktop',      token: 'xl',  value: '1280px', icon: '🖥️', description: 'Wide content area, expanded panels' },
  { name: 'Wide desktop', token: '2xl', value: '1536px', icon: '🖥️', description: 'Max-width content containers' },
]

function BreakpointsDoc() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 8 }}>
      <div>
        <h3 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#8C8978', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 12px' }}>
          Breakpoint scale
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid #D3CDB4', borderRadius: 8, overflow: 'hidden' }}>
          {BREAKPOINTS.map(({ name, token, value, icon, description }, i) => (
            <div
              key={token}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                padding: '12px 16px',
                background: i % 2 === 1 ? 'color-mix(in srgb, #EAE4C8 40%, transparent)' : '#fff',
                borderBottom: i < BREAKPOINTS.length - 1 ? '1px solid #EAE4C8' : 'none',
              }}
            >
              <span style={{ fontSize: 20, width: 28, flexShrink: 0 }}>{icon}</span>
              <div style={{ width: 100, flexShrink: 0 }}>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#2F2E28', display: 'block' }}>{name}</span>
                <code style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#8C8978' }}>{token}</code>
              </div>
              <code style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 14, color: '#EB633F', width: 70, flexShrink: 0 }}>{value}</code>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#757264' }}>{description}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#8C8978', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 12px' }}>
          Visual scale
        </h3>
        <div style={{ position: 'relative', background: '#EAE4C8', borderRadius: 8, padding: '16px 16px 40px', overflow: 'hidden' }}>
          {BREAKPOINTS.map(({ token, value }) => (
            <div
              key={token}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                width: `min(${value}, 100%)`,
                borderRight: '2px dashed #EB633F',
                pointerEvents: 'none',
              }}
            />
          ))}
          <div style={{ height: 40, position: 'relative' }}>
            {BREAKPOINTS.map(({ token, value }, i) => (
              <span
                key={token}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: `min(${value}, 100%)`,
                  transform: 'translateX(-50%)',
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: 10,
                  color: '#EB633F',
                  whiteSpace: 'nowrap',
                  background: '#EAE4C8',
                  padding: '0 4px',
                }}
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const meta: Meta<typeof BreakpointsDoc> = {
  title: 'Design Tokens/Breakpoints',
  component: BreakpointsDoc,
  parameters: { layout: 'padded', controls: { disable: true } },
}

export default meta
type Story = StoryObj<typeof BreakpointsDoc>

export const Default: Story = { name: 'Default' }

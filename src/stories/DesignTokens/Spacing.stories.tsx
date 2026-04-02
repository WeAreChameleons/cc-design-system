import type { Meta, StoryObj } from '@storybook/react'

const SPACING = [
  { token: '--space-1',  rem: '0.25rem', px: '4px' },
  { token: '--space-2',  rem: '0.5rem',  px: '8px' },
  { token: '--space-3',  rem: '0.75rem', px: '12px' },
  { token: '--space-4',  rem: '1rem',    px: '16px' },
  { token: '--space-5',  rem: '1.25rem', px: '20px' },
  { token: '--space-6',  rem: '1.5rem',  px: '24px' },
  { token: '--space-8',  rem: '2rem',    px: '32px' },
  { token: '--space-10', rem: '2.5rem',  px: '40px' },
  { token: '--space-12', rem: '3rem',    px: '48px' },
  { token: '--space-16', rem: '4rem',    px: '64px' },
]

const RADIUS = [
  { token: '--radius-sm',   value: '4px' },
  { token: '--radius-md',   value: '8px' },
  { token: '--radius-lg',   value: '12px' },
  { token: '--radius-full', value: '9999px' },
]

function SpacingScale() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 8 }}>
      <div>
        <h3 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#8C8978', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 16px' }}>
          Spacing
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {SPACING.map(({ token, rem, px }) => (
            <div key={token} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 140, flexShrink: 0 }}>
                <code style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#8C8978' }}>{token}</code>
              </div>
              <div
                style={{
                  background: '#EB633F',
                  height: 20,
                  width: `var(${token})`,
                  borderRadius: 3,
                  flexShrink: 0,
                  minWidth: 4,
                }}
              />
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#BBB6A0' }}>
                {rem} / {px}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#8C8978', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 16px' }}>
          Border Radius
        </h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {RADIUS.map(({ token, value }) => (
            <div key={token} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: '#EAE4C8',
                  border: '2px solid #D3CDB4',
                  borderRadius: `var(${token})`,
                }}
              />
              <code style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color: '#8C8978' }}>{token}</code>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color: '#BBB6A0' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const meta: Meta<typeof SpacingScale> = {
  title: 'Design Tokens/Spacing',
  component: SpacingScale,
  parameters: {
    layout: 'padded',
    controls: { disable: true },
  },
}

export default meta
type Story = StoryObj<typeof SpacingScale>

export const Default: Story = {
  name: 'Default',
}

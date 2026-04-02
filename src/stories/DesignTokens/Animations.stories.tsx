import type { Meta, StoryObj } from '@storybook/react'

const TRANSITIONS = [
  { name: 'Fast',   duration: '100ms', usage: 'Micro-interactions (icon state, dot color)' },
  { name: 'Base',   duration: '150ms', usage: 'Buttons, badges, border color changes' },
  { name: 'Medium', duration: '200ms', usage: 'Sidebar collapse, modal open' },
  { name: 'Slow',   duration: '300ms', usage: 'Page transitions, large surface entries' },
]

function AnimationDoc() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 8 }}>
      <div>
        <h3 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#8C8978', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 16px' }}>
          Transition durations
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {TRANSITIONS.map(({ name, duration, usage }) => (
            <div
              key={name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                padding: '12px 16px',
                border: '1px solid #D3CDB4',
                borderRadius: 8,
                background: '#fff',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: '#EAE4C8',
                  border: '2px solid #D3CDB4',
                  borderRadius: 8,
                  cursor: 'pointer',
                  transition: `all ${duration} ease`,
                }}
                title="Hover me"
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.background = '#EB633F'
                  el.style.borderColor = '#D45939'
                  el.style.borderRadius = '20px'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.background = '#EAE4C8'
                  el.style.borderColor = '#D3CDB4'
                  el.style.borderRadius = '8px'
                }}
              />
              <div style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 600, color: '#2F2E28', width: 60 }}>{name}</span>
                <code style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 13, color: '#EB633F' }}>{duration}</code>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#8C8978' }}>{usage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#8C8978', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 12px' }}>
          Easing
        </h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#757264', margin: 0, lineHeight: 1.6 }}>
          All transitions use <code style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, background: '#EAE4C8', padding: '1px 6px', borderRadius: 4 }}>ease</code> (equivalent to <code style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, background: '#EAE4C8', padding: '1px 6px', borderRadius: 4 }}>cubic-bezier(0.25, 0.1, 0.25, 1)</code>) unless explicitly specified otherwise. Avoid linear easing for UI transitions.
        </p>
      </div>

      <div>
        <h3 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#8C8978', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 12px' }}>
          Loading spinner
        </h3>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <style>{`@keyframes demo-spin { to { transform: rotate(360deg); } }`}</style>
          <div
            style={{
              width: 24,
              height: 24,
              border: '2.5px solid #EAE4C8',
              borderTopColor: '#EB633F',
              borderRadius: '50%',
              animation: 'demo-spin 0.65s linear infinite',
            }}
          />
          <div>
            <code style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, color: '#8C8978', display: 'block' }}>0.65s linear infinite</code>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#BBB6A0' }}>Used in Button loading state</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const meta: Meta<typeof AnimationDoc> = {
  title: 'Design Tokens/Animations',
  component: AnimationDoc,
  parameters: {
    layout: 'padded',
    controls: { disable: true },
  },
}

export default meta
type Story = StoryObj<typeof AnimationDoc>

export const Default: Story = {
  name: 'Default',
}

import type { Meta, StoryObj } from '@storybook/react'
import '../tokens/tokens.css'

const SpacingPage = () => (
  <div style={{ fontFamily: 'Inter, sans-serif', maxWidth: '960px' }}>
    <h1 style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '30px', fontWeight: 700, marginBottom: '8px' }}>
      CC Spacing &amp; Radius
    </h1>
    <p style={{ fontSize: '14px', color: '#6b6b6b', marginBottom: '32px' }}>
      Spacing scale and border radius tokens.
    </p>

    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '20px', fontWeight: 600, marginBottom: '16px', borderBottom: '2px solid #121212', paddingBottom: '8px' }}>
        Spacing Scale
      </h2>
      {[
        { name: 'space-1', value: '4px' },
        { name: 'space-2', value: '8px' },
        { name: 'space-3', value: '12px' },
        { name: 'space-4', value: '16px' },
        { name: 'space-5', value: '20px' },
        { name: 'space-6', value: '24px' },
        { name: 'space-8', value: '32px' },
        { name: 'space-10', value: '40px' },
        { name: 'space-12', value: '48px' },
        { name: 'space-16', value: '64px' },
      ].map(({ name, value }) => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
          <div style={{ width: '80px', fontSize: '12px', color: '#6b6b6b', textAlign: 'right', flexShrink: 0 }}>
            {name} ({value})
          </div>
          <div style={{ width: value, height: '24px', backgroundColor: '#eb633f' }} />
        </div>
      ))}
    </section>

    <section>
      <h2 style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '20px', fontWeight: 600, marginBottom: '16px', borderBottom: '2px solid #121212', paddingBottom: '8px' }}>
        Border Radius
      </h2>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {[
          { name: 'sm', value: '4px' },
          { name: 'md', value: '8px' },
          { name: 'lg', value: '12px' },
          { name: 'full', value: '9999px' },
        ].map(({ name, value }) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: '#eae4c8',
              border: '2px solid #121212',
              borderRadius: value,
              marginBottom: '8px',
            }} />
            <div style={{ fontSize: '14px', fontWeight: 600 }}>{name}</div>
            <div style={{ fontSize: '12px', color: '#6b6b6b' }}>{value}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '12px', color: '#9a9a9a', marginTop: '16px' }}>
        Note: The CC brand uses sharp corners (border-radius: 0) by default.
        These radius tokens are available for cases where rounding is intentionally applied.
      </p>
    </section>
  </div>
)

const meta: Meta = {
  title: 'Tokens/Spacing & Radius',
  component: SpacingPage,
}
export default meta

type Story = StoryObj
export const AllSpacing: Story = {}

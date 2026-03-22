import type { Meta, StoryObj } from '@storybook/react'
import '../tokens/tokens.css'

const TypographyPage = () => (
  <div style={{ fontFamily: 'Inter, sans-serif', maxWidth: '960px' }}>
    <h1 style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '30px', fontWeight: 700, marginBottom: '8px' }}>
      CC Typography
    </h1>
    <p style={{ fontSize: '14px', color: '#6b6b6b', marginBottom: '32px' }}>
      Font families, size scale, and weight system.
    </p>

    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '20px', fontWeight: 600, marginBottom: '16px', borderBottom: '2px solid #121212', paddingBottom: '8px' }}>
        Font Families
      </h2>
      <div style={{ marginBottom: '24px' }}>
        <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '24px', fontWeight: 600 }}>
          IBM Plex Sans — Display Font
        </div>
        <div style={{ fontSize: '12px', color: '#6b6b6b', marginTop: '4px' }}>
          --font-display · Used for headings, titles, stat values
        </div>
      </div>
      <div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '24px', fontWeight: 400 }}>
          Inter — Body Font
        </div>
        <div style={{ fontSize: '12px', color: '#6b6b6b', marginTop: '4px' }}>
          --font-sans · Used for body text, labels, UI elements
        </div>
      </div>
    </section>

    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '20px', fontWeight: 600, marginBottom: '16px', borderBottom: '2px solid #121212', paddingBottom: '8px' }}>
        Size Scale
      </h2>
      {[
        { name: 'xs', size: '12px' },
        { name: 'sm', size: '14px' },
        { name: 'base', size: '16px' },
        { name: 'lg', size: '18px' },
        { name: 'xl', size: '20px' },
        { name: '2xl', size: '24px' },
        { name: '3xl', size: '30px' },
        { name: '4xl', size: '36px' },
      ].map(({ name, size }) => (
        <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '12px' }}>
          <div style={{ width: '60px', fontSize: '12px', color: '#6b6b6b', textAlign: 'right', flexShrink: 0 }}>
            {name} ({size})
          </div>
          <div style={{ fontSize: size, fontFamily: 'Inter, sans-serif' }}>
            The quick brown fox jumps over the lazy dog
          </div>
        </div>
      ))}
    </section>

    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '20px', fontWeight: 600, marginBottom: '16px', borderBottom: '2px solid #121212', paddingBottom: '8px' }}>
        Weights
      </h2>
      {[
        { name: 'regular', weight: 400 },
        { name: 'medium', weight: 500 },
        { name: 'semibold', weight: 600 },
        { name: 'bold', weight: 700 },
      ].map(({ name, weight }) => (
        <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '12px' }}>
          <div style={{ width: '100px', fontSize: '12px', color: '#6b6b6b', textAlign: 'right', flexShrink: 0 }}>
            {name} ({weight})
          </div>
          <div style={{ fontSize: '20px', fontWeight: weight, fontFamily: 'Inter, sans-serif' }}>
            Chameleon Collective
          </div>
        </div>
      ))}
    </section>

    <section>
      <h2 style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '20px', fontWeight: 600, marginBottom: '16px', borderBottom: '2px solid #121212', paddingBottom: '8px' }}>
        Line Heights
      </h2>
      {[
        { name: 'tight', value: 1.2 },
        { name: 'normal', value: 1.4 },
        { name: 'relaxed', value: 1.6 },
      ].map(({ name, value }) => (
        <div key={name} style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '12px', color: '#6b6b6b', marginBottom: '4px' }}>
            {name} ({value})
          </div>
          <div style={{ fontSize: '16px', lineHeight: value, fontFamily: 'Inter, sans-serif', maxWidth: '400px', padding: '8px', backgroundColor: '#faf8f2', border: '1px solid #e5e5e5' }}>
            We are Chameleon Collective, a modern consulting collective that brings together world-class experts to solve complex business challenges.
          </div>
        </div>
      ))}
    </section>
  </div>
)

const meta: Meta = {
  title: 'Tokens/Typography',
  component: TypographyPage,
}
export default meta

type Story = StoryObj
export const AllTypography: Story = {}

import type { Meta, StoryObj } from '@storybook/react'
import '../tokens/tokens.css'

const ColorSwatch = ({ name, value, alias }: { name: string; value: string; alias?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
    <div
      style={{
        width: '48px',
        height: '48px',
        backgroundColor: value,
        border: '1px solid #e5e5e5',
        flexShrink: 0,
      }}
    />
    <div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600 }}>{name}</div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#6b6b6b' }}>
        {value}{alias ? ` → ${alias}` : ''}
      </div>
    </div>
  </div>
)

const ColorGroup = ({ title, colors }: { title: string; colors: { name: string; value: string; alias?: string }[] }) => (
  <div style={{ marginBottom: '32px' }}>
    <h3 style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '18px', fontWeight: 600, marginBottom: '16px', borderBottom: '2px solid #121212', paddingBottom: '8px' }}>
      {title}
    </h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '8px' }}>
      {colors.map((c) => <ColorSwatch key={c.name} {...c} />)}
    </div>
  </div>
)

const ColorsPage = () => (
  <div style={{ fontFamily: 'Inter, sans-serif', maxWidth: '960px' }}>
    <h1 style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '30px', fontWeight: 700, marginBottom: '8px' }}>
      CC Color System
    </h1>
    <p style={{ fontSize: '14px', color: '#6b6b6b', marginBottom: '32px' }}>
      Chameleon Collective brand colors, tints, and semantic tokens.
    </p>

    <ColorGroup title="Core Palette" colors={[
      { name: 'cc-black', value: '#121212' },
      { name: 'cc-white', value: '#ffffff' },
      { name: 'cc-parchment', value: '#eae4c8', alias: 'Beige' },
      { name: 'cc-burnt-sienna', value: '#eb633f', alias: 'Primary Brand' },
      { name: 'cc-straw', value: '#e8eb74', alias: 'Secondary Accent' },
      { name: 'cc-electric-blue', value: '#88e8f0', alias: 'Secondary Accent' },
    ]} />

    <ColorGroup title="Parchment Tints" colors={[
      { name: 'cc-parchment-20', value: '#faf8f2', alias: 'Lightest' },
      { name: 'cc-parchment-40', value: '#f5f1e5' },
      { name: 'cc-parchment-60', value: '#f0ead8' },
      { name: 'cc-parchment-80', value: '#eae4c8', alias: 'Full' },
    ]} />

    <ColorGroup title="Burnt Sienna Tints" colors={[
      { name: 'cc-burnt-sienna-20', value: '#fdf0ec', alias: 'Lightest' },
      { name: 'cc-burnt-sienna-40', value: '#f9d0c5' },
      { name: 'cc-burnt-sienna-60', value: '#f4a88e' },
      { name: 'cc-burnt-sienna-80', value: '#ef7a5a', alias: 'Near-full' },
    ]} />

    <ColorGroup title="Straw Tints" colors={[
      { name: 'cc-straw-20', value: '#fdfee8', alias: 'Lightest' },
      { name: 'cc-straw-40', value: '#f8fac0' },
      { name: 'cc-straw-60', value: '#f1f498' },
      { name: 'cc-straw-80', value: '#ecef7e', alias: 'Near-full' },
    ]} />

    <ColorGroup title="Electric Blue Tints" colors={[
      { name: 'cc-electric-blue-20', value: '#eafcfe', alias: 'Lightest' },
      { name: 'cc-electric-blue-40', value: '#c7f5fa' },
      { name: 'cc-electric-blue-60', value: '#a3eef6' },
      { name: 'cc-electric-blue-80', value: '#9dedf4', alias: 'Near-full' },
    ]} />

    <ColorGroup title="Burnt Sienna Shades (Dark)" colors={[
      { name: 'orange-00', value: '#eb633f', alias: 'Base' },
      { name: 'orange-10', value: '#d45939', alias: 'Rust' },
      { name: 'orange-20', value: '#bc4f32' },
      { name: 'orange-40', value: '#8d3b26' },
      { name: 'orange-60', value: '#5e2819' },
      { name: 'orange-70', value: '#471e13', alias: 'Darkest' },
    ]} />

    <ColorGroup title="Grey" colors={[
      { name: 'cc-grey', value: '#6b6b6b', alias: 'Mid grey' },
      { name: 'cc-grey-light', value: '#9a9a9a', alias: 'Light grey' },
    ]} />

    <ColorGroup title="Aliases" colors={[
      { name: 'cc-cream', value: '#eae4c8', alias: '= cc-parchment' },
      { name: 'cc-rust', value: '#d45939', alias: 'Darker orange' },
      { name: 'cc-offwhite', value: '#f8f7f3', alias: 'Subtle warm white' },
      { name: 'cc-orange', value: '#eb633f', alias: '= cc-burnt-sienna' },
    ]} />

    <ColorGroup title="Semantic (Admin Dashboard)" colors={[
      { name: 'cc-text-primary', value: '#121212' },
      { name: 'cc-text-secondary', value: '#6b6b6b' },
      { name: 'cc-text-muted', value: '#9a9a9a' },
      { name: 'cc-border', value: '#e5e5e5' },
      { name: 'cc-border-light', value: '#f0f0f0' },
      { name: 'cc-surface', value: '#ffffff' },
      { name: 'cc-surface-hover', value: '#faf8f2' },
    ]} />
  </div>
)

const meta: Meta = {
  title: 'Tokens/Colors',
  component: ColorsPage,
}
export default meta

type Story = StoryObj
export const AllColors: Story = {}

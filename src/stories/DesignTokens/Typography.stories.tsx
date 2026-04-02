import type { Meta, StoryObj } from '@storybook/react'

const styles = {
  wrap: { display: 'flex', flexDirection: 'column' as const, gap: 32, padding: 8 },
  row: { display: 'flex', alignItems: 'baseline', gap: 24, borderBottom: '1px solid #EAE4C8', paddingBottom: 20 },
  meta: { width: 180, flexShrink: 0 as const },
  label: { fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#8C8978', display: 'block' as const },
  spec:  { fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color: '#BBB6A0', display: 'block' as const, marginTop: 2 },
}

interface SampleProps {
  tag?: keyof JSX.IntrinsicElements
  label: string
  spec: string
  style: React.CSSProperties
  text?: string
}

function TypeSample({ tag: Tag = 'span', label, spec, style, text }: SampleProps) {
  return (
    <div style={styles.row}>
      <div style={styles.meta}>
        <span style={styles.label}>{label}</span>
        <span style={styles.spec}>{spec}</span>
      </div>
      <Tag style={{ margin: 0, ...style }}>
        {text ?? label}
      </Tag>
    </div>
  )
}

function TypographyScale() {
  return (
    <div style={styles.wrap}>
      <TypeSample
        tag="h1"
        label="H1 Heading"
        spec="IBM Plex Sans Regular 57px"
        style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 57, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.01em', color: '#121212' }}
        text="The quick brown fox"
      />
      <TypeSample
        tag="h2"
        label="H2 Heading"
        spec="IBM Plex Sans Regular 50px"
        style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 50, fontWeight: 400, lineHeight: 1.1, color: '#121212' }}
        text="The quick brown fox"
      />
      <TypeSample
        tag="h3"
        label="H3 Heading"
        spec="IBM Plex Sans Medium 47px"
        style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 47, fontWeight: 500, lineHeight: '50px', color: '#121212' }}
        text="The quick brown fox"
      />
      <TypeSample
        tag="h4"
        label="H4 Heading"
        spec="IBM Plex Sans Medium 40px"
        style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 40, fontWeight: 500, lineHeight: 1.3, color: '#121212' }}
        text="The quick brown fox"
      />
      <TypeSample
        tag="h5"
        label="H5 Heading"
        spec="IBM Plex Sans Medium 32px"
        style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 32, fontWeight: 500, lineHeight: 1.2, color: '#121212' }}
        text="The quick brown fox"
      />
      <TypeSample
        label="Hero Body"
        spec="IBM Plex Sans Regular 32px"
        style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 32, fontWeight: 400, lineHeight: 1.6, letterSpacing: '-0.01em', color: '#282828' }}
        text="IBM Plex Sans body copy for hero sections and large callouts."
      />
      <TypeSample
        label="Body 1"
        spec="Inter Regular 22px"
        style={{ fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 400, lineHeight: 1.6, color: '#282828' }}
        text="Inter body copy for primary reading text."
      />
      <TypeSample
        label="Body 2"
        spec="Inter Regular 18px"
        style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 400, lineHeight: 1.6, color: '#282828' }}
        text="Inter body copy for secondary reading text."
      />
      <TypeSample
        label="CTA 1"
        spec="IBM Plex Sans SemiBold 14px"
        style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 600, lineHeight: 1.5, color: '#EB633F' }}
        text="Call to action / button label"
      />
      <TypeSample
        label="Small Copy"
        spec="Inter Regular 16px"
        style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: '#757264' }}
        text="Footer and small body copy in Inter."
      />
      <TypeSample
        label="Label / Form"
        spec="Inter Regular 20px"
        style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, fontWeight: 400, lineHeight: '33px', color: '#282828' }}
        text="Form label text"
      />
    </div>
  )
}

const meta: Meta<typeof TypographyScale> = {
  title: 'Design Tokens/Typography',
  component: TypographyScale,
  parameters: {
    layout: 'padded',
    controls: { disable: true },
  },
}

export default meta
type Story = StoryObj<typeof TypographyScale>

export const TypeScale: Story = {
  name: 'Type scale',
}

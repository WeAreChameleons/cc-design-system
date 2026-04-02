import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display',
        'section',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'hero-body',
        'body1',
        'body2',
        'cta1',
        'small-copy',
        'label-form',
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Display: Story = {
  args: { variant: 'display', children: 'Display' },
}

export const Section: Story = {
  args: { variant: 'section', children: 'Section' },
}

export const H1: Story = {
  args: { variant: 'h1', children: 'Heading 1' },
}

export const H2: Story = {
  args: { variant: 'h2', children: 'Heading 2' },
}

export const H3: Story = {
  args: { variant: 'h3', children: 'Heading 3' },
}

export const H4: Story = {
  args: { variant: 'h4', children: 'Heading 4' },
}

export const H5: Story = {
  args: { variant: 'h5', children: 'Heading 5' },
}

export const HeroBody: Story = {
  args: {
    variant: 'hero-body',
    children:
      'We are a collective of marketing experts and creatives who help ambitious brands grow.',
  },
}

export const Body1: Story = {
  args: {
    variant: 'body1',
    children:
      'We are a collective of marketing experts and creatives who help ambitious brands grow.',
  },
}

export const Body2: Story = {
  args: {
    variant: 'body2',
    children:
      'We are a collective of marketing experts and creatives who help ambitious brands grow.',
  },
}

export const CTA1: Story = {
  args: { variant: 'cta1', children: 'Get started today' },
}

export const SmallCopy: Story = {
  args: { variant: 'small-copy', children: 'Footer small copy text' },
}

export const LabelForm: Story = {
  args: { variant: 'label-form', children: 'Email address' },
}

/** All variants at a glance */
export const TypeScale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      {[
        { variant: 'display' as const, label: 'Special/Display' },
        { variant: 'section' as const, label: 'Special/Section' },
        { variant: 'h1' as const, label: 'Heading/H1' },
        { variant: 'h2' as const, label: 'Heading/H2' },
        { variant: 'h3' as const, label: 'Heading/H3' },
        { variant: 'h4' as const, label: 'Heading/H4' },
        { variant: 'h5' as const, label: 'Heading/H5' },
        { variant: 'hero-body' as const, label: 'Body/Hero Body' },
        { variant: 'body1' as const, label: 'Body/Body 1' },
        { variant: 'body2' as const, label: 'Body/Body 2' },
        { variant: 'cta1' as const, label: 'CTA/CTA 1' },
        { variant: 'small-copy' as const, label: 'Footer/Small Copy' },
        { variant: 'label-form' as const, label: 'Footer/Label Form' },
      ].map(({ variant, label }) => (
        <div key={variant} style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#888', minWidth: '140px' }}>
            {label}
          </span>
          <Text variant={variant}>{variant}</Text>
        </div>
      ))}
    </div>
  ),
}

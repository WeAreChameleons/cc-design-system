import './Text.css'

export type TextVariant =
  | 'display'
  | 'section'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'hero-body'
  | 'body1'
  | 'body2'
  | 'cta1'
  | 'small-copy'
  | 'label-form'

const defaultTags: Record<TextVariant, keyof JSX.IntrinsicElements> = {
  display: 'h1',
  section: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  'hero-body': 'p',
  body1: 'p',
  body2: 'p',
  cta1: 'span',
  'small-copy': 'p',
  'label-form': 'label',
}

export interface TextProps {
  /** Typography variant from the CC type scale */
  variant: TextVariant
  /** Text content */
  children: React.ReactNode
  /** Override the default HTML element */
  as?: keyof JSX.IntrinsicElements
  /** Additional class names */
  className?: string
}

export function Text({ variant, children, as, className }: TextProps) {
  const Tag = (as ?? defaultTags[variant]) as keyof JSX.IntrinsicElements
  return (
    <Tag className={`cc-text cc-text--${variant}${className ? ` ${className}` : ''}`}>
      {children}
    </Tag>
  )
}

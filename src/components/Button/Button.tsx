import './Button.css'

export interface ButtonProps {
  /** Button label */
  label: string
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'dashed' | 'destructive'
  /** Size */
  size?: 'sm' | 'md' | 'lg'
  /** Disabled state */
  disabled?: boolean
  /** Loading state — shows spinner, disables interaction */
  loading?: boolean
  /** Optional icon element rendered before the label */
  icon?: React.ReactNode
  /** Click handler */
  onClick?: () => void
}

export function Button({
  label,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`cc-btn cc-btn--${variant} cc-btn--${size}${loading ? ' cc-btn--loading' : ''}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && (
        <span className="cc-btn__spinner" aria-hidden="true" />
      )}
      {!loading && icon && (
        <span className="cc-btn__icon">{icon}</span>
      )}
      <span className="cc-btn__label">{label}</span>
    </button>
  )
}

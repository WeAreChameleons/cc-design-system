import './Button.css'

export interface ButtonProps {
  /** Button label */
  label: string
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost'
  /** Size */
  size?: 'sm' | 'md' | 'lg'
  /** Disabled state */
  disabled?: boolean
  /** Click handler */
  onClick?: () => void
}

export function Button({
  label,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`cc-btn cc-btn--${variant} cc-btn--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

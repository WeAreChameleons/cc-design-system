import './Badge.css'

export interface BadgeProps {
  label: string
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'danger' | 'info'
}

export const Badge = ({ label, variant = 'default' }: BadgeProps) => (
  <span className={`cc-badge cc-badge--${variant}`}>{label}</span>
)

import './ArrowCTA.css'

export interface ArrowCTAProps {
  label: string
  variant?: 'primary' | 'secondary' | 'outline-light' | 'outline-dark'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
}

function ArrowIcon({ width = 14, color = 'currentColor' }: { width?: number; color?: string }) {
  const height = Math.round(width * 0.57)
  return (
    <svg width={width} height={height} viewBox="0 0 14 8" fill="none" className="cc-arrow-icon">
      <path d="M1 4h12M9 1l4 3-4 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const ArrowCTA = ({ label, variant = 'primary', size = 'md', onClick }: ArrowCTAProps) => (
  <button className={`cc-arrow-cta cc-arrow-cta--${variant} cc-arrow-cta--${size}`} onClick={onClick}>
    {label}
    <ArrowIcon color={variant === 'outline-light' ? '#fff' : 'currentColor'} />
  </button>
)

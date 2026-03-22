import './Card.css'

export interface CardProps {
  children: React.ReactNode
  accent?: 'burnt-sienna' | 'electric-blue' | 'straw' | 'rust' | 'none'
  className?: string
}

export const Card = ({ children, accent = 'none', className = '' }: CardProps) => (
  <div className={`cc-card ${accent !== 'none' ? `cc-card--accent-${accent}` : ''} ${className}`}>
    {children}
  </div>
)

export interface StatCardProps {
  label: string
  value: string | number
  sublabel?: string
  accent?: CardProps['accent']
}

export const StatCard = ({ label, value, sublabel, accent = 'burnt-sienna' }: StatCardProps) => (
  <Card accent={accent}>
    <div className="cc-stat-card__label">{label}</div>
    <div className="cc-stat-card__value">{value}</div>
    {sublabel && <div className="cc-stat-card__sublabel">{sublabel}</div>}
  </Card>
)

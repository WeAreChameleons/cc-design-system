import './KpiCard.css'

export type KpiVariant = 'neutral' | 'colored' | 'status' | 'tinted' | 'alert' | 'finance'
export type KpiValueColor = 'neutral' | 'orange' | 'teal' | 'green'
export type KpiTint = 'orange' | 'teal' | 'green' | 'blue'

export interface KpiCardProps {
  /** Card label (shown above the value) */
  label: string
  /** Primary numeric or text value */
  value: string | number
  /** Visual variant */
  variant?: KpiVariant
  /** Value color — used with `colored` variant */
  valueColor?: KpiValueColor
  /** Status dot color — used with `status` variant */
  status?: 'orange' | 'teal' | 'green'
  /** Tint color — used with `tinted` variant */
  tint?: KpiTint
  /** Secondary text below the value */
  subtext?: string
  /** All-caps label above the main label (finance variant) */
  capsLabel?: string
}

export function KpiCard({
  label,
  value,
  variant = 'neutral',
  valueColor = 'neutral',
  status,
  tint,
  subtext,
  capsLabel,
}: KpiCardProps) {
  const colorClass = variant === 'colored' ? ` cc-kpi__value--${valueColor}` : ''
  const tintClass  = variant === 'tinted' && tint ? ` cc-kpi--tinted-${tint}` : ''

  return (
    <div className={`cc-kpi cc-kpi--${variant}${tintClass}`}>
      {capsLabel && (
        <span className="cc-kpi__caps-label">{capsLabel}</span>
      )}
      <span className="cc-kpi__label">{label}</span>
      <div className="cc-kpi__value-row">
        {variant === 'status' && status && (
          <span className={`cc-kpi__dot cc-kpi__dot--${status}`} aria-hidden="true" />
        )}
        <span className={`cc-kpi__value${colorClass}`}>{value}</span>
      </div>
      {subtext && <span className="cc-kpi__subtext">{subtext}</span>}
    </div>
  )
}

import './SegmentedPills.css'

export interface PillOption {
  value: string
  label: string
  count?: number
  icon?: React.ReactNode
}

export type SegmentedPillsVariant =
  | 'solidDark'
  | 'solidOrange'
  | 'ghost'
  | 'tabUnderline'
  | 'iconToggle'

export interface SegmentedPillsProps {
  /** Available options */
  options: PillOption[]
  /** Currently active value */
  active?: string
  /** Change handler */
  onChange?: (value: string) => void
  /** Visual variant */
  variant?: SegmentedPillsVariant
}

export function SegmentedPills({
  options,
  active,
  onChange,
  variant = 'solidDark',
}: SegmentedPillsProps) {
  return (
    <div className={`cc-pills cc-pills--${variant}`} role="group">
      {options.map(opt => (
        <button
          key={opt.value}
          className={`cc-pills__pill${opt.value === active ? ' cc-pills__pill--active' : ''}`}
          onClick={() => onChange?.(opt.value)}
          aria-pressed={opt.value === active}
        >
          {opt.icon && <span className="cc-pills__icon">{opt.icon}</span>}
          {opt.label}
          {opt.count != null && (
            <span className="cc-pills__count">{opt.count}</span>
          )}
        </button>
      ))}
    </div>
  )
}

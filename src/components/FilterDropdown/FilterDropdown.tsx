import './FilterDropdown.css'

export interface FilterOption {
  label: string
  value: string
}

export interface FilterDropdownProps {
  /** All available options */
  options: FilterOption[]
  /** Currently selected value */
  value?: string
  /** Change handler */
  onChange?: (value: string) => void
  /** Placeholder label when nothing is selected */
  placeholder?: string
}

export function FilterDropdown({
  options,
  value = '',
  onChange,
  placeholder = 'Filter…',
}: FilterDropdownProps) {
  const isActive = Boolean(value)
  const selectedLabel = options.find(o => o.value === value)?.label

  return (
    <div className={`cc-filter-drop${isActive ? ' cc-filter-drop--active' : ''}`}>
      <select
        className="cc-filter-drop__select"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        aria-label={placeholder}
      >
        <option value="">{placeholder}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <span className="cc-filter-drop__label">
        {selectedLabel ?? placeholder}
      </span>
      <span className="cc-filter-drop__arrow" aria-hidden="true">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  )
}

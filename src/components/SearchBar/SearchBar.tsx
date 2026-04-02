import './SearchBar.css'

export interface SearchBarProps {
  /** Placeholder text */
  placeholder?: string
  /** Current value */
  value?: string
  /** Change handler */
  onChange?: (value: string) => void
  /** Width override */
  width?: string | number
}

export function SearchBar({
  placeholder = 'Search…',
  value = '',
  onChange,
  width,
}: SearchBarProps) {
  return (
    <div className="cc-search" style={width ? { width } : undefined}>
      <span className="cc-search__icon" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9.5 9.5L12.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
      <input
        type="text"
        className="cc-search__input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        aria-label={placeholder}
      />
      {value && (
        <button
          className="cc-search__clear"
          onClick={() => onChange?.('')}
          aria-label="Clear search"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  )
}

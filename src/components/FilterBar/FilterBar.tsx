import './FilterBar.css'
import { SearchBar } from '../SearchBar/SearchBar'
import { FilterDropdown } from '../FilterDropdown/FilterDropdown'
import type { FilterOption } from '../FilterDropdown/FilterDropdown'

export interface FilterBarFilter {
  placeholder: string
  options: FilterOption[]
  value?: string
  onChange?: (value: string) => void
}

export interface FilterBarProps {
  /** Search field placeholder */
  searchPlaceholder?: string
  /** Search value */
  searchValue?: string
  /** Search change handler */
  onSearchChange?: (value: string) => void
  /** Filter dropdown configurations */
  filters?: FilterBarFilter[]
  /** Optional CTA button element */
  cta?: React.ReactNode
}

export function FilterBar({
  searchPlaceholder = 'Search…',
  searchValue = '',
  onSearchChange,
  filters = [],
  cta,
}: FilterBarProps) {
  return (
    <div className="cc-filter-bar">
      <SearchBar
        placeholder={searchPlaceholder}
        value={searchValue}
        onChange={onSearchChange}
      />
      {filters.map((filter, i) => (
        <FilterDropdown
          key={i}
          options={filter.options}
          value={filter.value}
          onChange={filter.onChange}
          placeholder={filter.placeholder}
        />
      ))}
      {cta && <div className="cc-filter-bar__cta">{cta}</div>}
    </div>
  )
}

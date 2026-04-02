import './TabBar.css'

export interface TabItem {
  label: string
  count?: number
}

export interface TabBarProps {
  /** Tab definitions */
  tabs: TabItem[]
  /** Index of the active tab */
  active?: number
  /** Called with the new tab index */
  onChange?: (index: number) => void
  /** Visual variant */
  variant?: 'default' | 'compact'
}

export function TabBar({ tabs, active = 0, onChange, variant = 'default' }: TabBarProps) {
  return (
    <div className={`cc-tabbar cc-tabbar--${variant}`} role="tablist">
      {tabs.map((tab, i) => (
        <button
          key={`${tab.label}-${i}`}
          role="tab"
          aria-selected={i === active}
          className={`cc-tabbar__tab${i === active ? ' cc-tabbar__tab--active' : ''}`}
          onClick={() => onChange?.(i)}
        >
          {tab.label}
          {tab.count != null && (
            <span className="cc-tabbar__count">{tab.count}</span>
          )}
        </button>
      ))}
    </div>
  )
}

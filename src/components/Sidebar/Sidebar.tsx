import './Sidebar.css'

export interface SidebarNavItem {
  id: string
  label: string
  icon?: string
  group?: string
}

export interface SidebarProps {
  /** Currently active nav item id */
  activeItem?: string
  /** Whether the sidebar is collapsed to icon-only mode */
  collapsed?: boolean
  /** Called when a nav item is clicked */
  onItemClick?: (id: string) => void
  /** Called when the collapse toggle is clicked */
  onToggleCollapse?: () => void
  /** Logged-in user's name */
  userName?: string
  /** Logged-in user's email */
  userEmail?: string
}

const NAV_ITEMS: SidebarNavItem[] = [
  // CRM section
  { id: 'dashboard',     label: 'Dashboard',     icon: '▦', group: 'CRM' },
  { id: 'contacts',      label: 'Contacts',       icon: '◎', group: 'CRM' },
  { id: 'deals',         label: 'Deals',          icon: '◈', group: 'CRM' },
  { id: 'tasks',         label: 'Tasks',          icon: '☑', group: 'CRM' },
  // Integrations section
  { id: 'integrations',  label: 'Integrations',   icon: '⊞', group: 'Platform' },
  { id: 'workflows',     label: 'Workflows',      icon: '↻', group: 'Platform' },
  { id: 'analytics',     label: 'Analytics',      icon: '▲', group: 'Platform' },
  // Settings
  { id: 'settings',      label: 'Settings',       icon: '⚙', group: 'Settings' },
  { id: 'team',          label: 'Team',           icon: '◷', group: 'Settings' },
]

export function Sidebar({
  activeItem = 'dashboard',
  collapsed = false,
  onItemClick,
  onToggleCollapse,
  userName = 'Alex Rivera',
  userEmail = 'alex@chameleon.co',
}: SidebarProps) {
  const groups = Array.from(new Set(NAV_ITEMS.map(i => i.group)))

  return (
    <nav className={`cc-sidebar${collapsed ? ' cc-sidebar--collapsed' : ''}`} aria-label="Main navigation">
      {/* Logo */}
      <div className="cc-sidebar__logo">
        <span className="cc-sidebar__logo-mark">CC</span>
        {!collapsed && <span className="cc-sidebar__logo-wordmark">Chameleon</span>}
        <button
          className="cc-sidebar__toggle"
          onClick={onToggleCollapse}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? '›' : '‹'}
        </button>
      </div>

      {/* Nav groups */}
      <div className="cc-sidebar__nav">
        {groups.map(group => (
          <div key={group} className="cc-sidebar__group">
            {!collapsed && (
              <span className="cc-sidebar__group-label">{group}</span>
            )}
            {NAV_ITEMS.filter(i => i.group === group).map(item => (
              <button
                key={item.id}
                className={`cc-sidebar__item${item.id === activeItem ? ' cc-sidebar__item--active' : ''}`}
                onClick={() => onItemClick?.(item.id)}
                aria-current={item.id === activeItem ? 'page' : undefined}
              >
                <span className="cc-sidebar__item-icon" aria-hidden="true">{item.icon}</span>
                {!collapsed && (
                  <span className="cc-sidebar__item-label">{item.label}</span>
                )}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* User footer */}
      <div className="cc-sidebar__footer">
        <div className="cc-sidebar__avatar" aria-label={userName}>
          {userName.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>
        {!collapsed && (
          <div className="cc-sidebar__user-info">
            <span className="cc-sidebar__user-name">{userName}</span>
            <span className="cc-sidebar__user-email">{userEmail}</span>
          </div>
        )}
      </div>
    </nav>
  )
}

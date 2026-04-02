import './PageLayout.css'
import { Sidebar } from '../Sidebar/Sidebar'
import { FabGroup } from '../FabGroup/FabGroup'
import { useState } from 'react'

export interface PageLayoutProps {
  /** Currently active nav item */
  activeItem?: string
  /** Called when a sidebar nav item is clicked */
  onNavItemClick?: (id: string) => void
  /** Phone FAB badge count */
  phoneBadge?: number
  /** Chat FAB badge count */
  chatBadge?: number
  /** Phone FAB callback */
  onPhone?: () => void
  /** Chat FAB callback */
  onChat?: () => void
  /** Logged-in user name */
  userName?: string
  /** Logged-in user email */
  userEmail?: string
  /** Main content */
  children?: React.ReactNode
}

/** Full app shell: sidebar + scrollable content area + FABs in bottom-right. */
export function PageLayout({
  activeItem,
  onNavItemClick,
  phoneBadge,
  chatBadge,
  onPhone,
  onChat,
  userName,
  userEmail,
  children,
}: PageLayoutProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="cc-layout">
      <Sidebar
        activeItem={activeItem}
        collapsed={collapsed}
        onItemClick={onNavItemClick}
        onToggleCollapse={() => setCollapsed(c => !c)}
        userName={userName}
        userEmail={userEmail}
      />
      <main className="cc-layout__main">
        <div className="cc-layout__content">
          {children}
        </div>
        <div className="cc-layout__fabs" aria-label="Floating actions">
          <FabGroup
            phoneBadge={phoneBadge}
            chatBadge={chatBadge}
            onPhone={onPhone}
            onChat={onChat}
          />
        </div>
      </main>
    </div>
  )
}

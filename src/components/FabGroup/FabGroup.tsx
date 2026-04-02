import './FabGroup.css'

export interface FabGroupProps {
  /** Notification count for phone FAB */
  phoneBadge?: number
  /** Notification count for chat FAB */
  chatBadge?: number
  /** Phone FAB click handler */
  onPhone?: () => void
  /** Chat FAB click handler */
  onChat?: () => void
}

export function FabGroup({ phoneBadge, chatBadge, onPhone, onChat }: FabGroupProps) {
  return (
    <div className="cc-fab-group" aria-label="Quick actions">
      {/* Phone / call FAB */}
      <button
        className="cc-fab cc-fab--phone"
        onClick={onPhone}
        aria-label="Call"
        title="Call"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M4.5 3A1.5 1.5 0 003 4.5v.75C3 13.06 9.44 19.5 17.75 19.5h.75A1.5 1.5 0 0020 18v-2.5a1.5 1.5 0 00-1.5-1.5h-2.121a1.5 1.5 0 00-1.061.44l-.878.878a10.94 10.94 0 01-4.657-4.657l.878-.878A1.5 1.5 0 0011.1 8.5V6A1.5 1.5 0 009.6 4.5H7A3 3 0 004.5 3z"
            fill="currentColor"
          />
        </svg>
        {phoneBadge != null && phoneBadge > 0 && (
          <span className="cc-fab__badge">{phoneBadge > 99 ? '99+' : phoneBadge}</span>
        )}
      </button>

      {/* Chat FAB */}
      <button
        className="cc-fab cc-fab--chat"
        onClick={onChat}
        aria-label="Chat"
        title="Chat"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6l-4 3V5z"
            fill="currentColor"
          />
        </svg>
        {chatBadge != null && chatBadge > 0 && (
          <span className="cc-fab__badge">{chatBadge > 99 ? '99+' : chatBadge}</span>
        )}
      </button>
    </div>
  )
}

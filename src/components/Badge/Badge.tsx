import './Badge.css'

// ── Status variants ───────────────────────────────────────────────────────────
export type BadgeStatusVariant = 'healthy' | 'error' | 'syncing' | 'warning' | 'inactive'

// ── CRM stage variants ────────────────────────────────────────────────────────
export type BadgeCRMVariant =
  | 'lead' | 'prospect' | 'proposal'
  | 'negotiating' | 'closed' | 'lost'

// ── Role / team variants ──────────────────────────────────────────────────────
export type BadgeRoleVariant =
  | 'core-team' | 'expert' | 'vendor' | 'owner'
  | 'strategy' | 'design' | 'engineering' | 'marketing'
  | 'sales' | 'operations' | 'finance' | 'hr' | 'legal'

// ── Direction variants ────────────────────────────────────────────────────────
export type BadgeDirectionVariant = 'inbound' | 'outbound' | 'bi'

// ── Auth type variants ────────────────────────────────────────────────────────
export type BadgeAuthVariant = 'no-auth' | 'api-key' | 'oauth'

// ── Outreach variants ─────────────────────────────────────────────────────────
export type BadgeOutreachVariant = 'email' | 'call' | 'meeting' | 'message'

export type BadgeVariant =
  | BadgeStatusVariant
  | BadgeCRMVariant
  | BadgeRoleVariant
  | BadgeDirectionVariant
  | BadgeAuthVariant
  | BadgeOutreachVariant

export interface BadgeProps {
  /** Text label */
  label: string
  /** Visual variant */
  variant?: BadgeVariant
  /** Size */
  size?: 'sm' | 'md' | 'lg'
  /** Show a colored dot before the label */
  showDot?: boolean
}

export function Badge({ label, variant = 'healthy', size = 'md', showDot = false }: BadgeProps) {
  return (
    <span className={`cc-badge cc-badge--${variant} cc-badge--${size}`}>
      {showDot && <span className="cc-badge__dot" aria-hidden="true" />}
      {label}
    </span>
  )
}

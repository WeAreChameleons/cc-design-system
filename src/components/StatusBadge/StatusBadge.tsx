import { Badge } from '../Badge/Badge'
import type { BadgeStatusVariant } from '../Badge/Badge'

export interface StatusBadgeProps {
  /** Status value */
  status: BadgeStatusVariant
  /** Optional custom label — defaults to capitalised status name */
  label?: string
  /** Size */
  size?: 'sm' | 'md' | 'lg'
}

const defaultLabels: Record<BadgeStatusVariant, string> = {
  healthy:  'Healthy',
  error:    'Error',
  syncing:  'Syncing',
  warning:  'Warning',
  inactive: 'Inactive',
}

/** Thin wrapper around Badge for status-specific usage. Always shows a dot. */
export function StatusBadge({ status, label, size = 'md' }: StatusBadgeProps) {
  return (
    <Badge
      label={label ?? defaultLabels[status]}
      variant={status}
      size={size}
      showDot
    />
  )
}

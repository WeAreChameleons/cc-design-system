import './PageHeader.css'
import { TabBar } from '../TabBar/TabBar'
import type { TabItem } from '../TabBar/TabBar'

export type PageHeaderVariant =
  | 'standard'
  | 'welcome'
  | 'withBreadcrumb'
  | 'withBanner'
  | 'withEyebrow'
  | 'twoLevel'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface PageHeaderProps {
  /** Page title */
  title: string
  /** Subtitle / description */
  subtitle?: string
  /** Visual variant */
  variant?: PageHeaderVariant
  /** First name for welcome greeting */
  name?: string
  /** Breadcrumb trail */
  breadcrumb?: BreadcrumbItem[]
  /** Banner text for alerts or announcements */
  bannerText?: string
  /** Optional CTA link in the banner */
  bannerLink?: string
  /** Small eyebrow label above the title */
  eyebrow?: string
  /** Tabs to render below the header */
  tabs?: TabItem[]
  /** Active tab index */
  activeTab?: number
  /** Tab change callback */
  onTabChange?: (index: number) => void
  /** Section subtitle (twoLevel variant) */
  sectionSubtitle?: string
  /** Right-side action elements */
  actions?: React.ReactNode
}

export function PageHeader({
  title,
  subtitle,
  variant = 'standard',
  name,
  breadcrumb,
  bannerText,
  bannerLink,
  eyebrow,
  tabs,
  activeTab = 0,
  onTabChange,
  sectionSubtitle,
  actions,
}: PageHeaderProps) {
  return (
    <header className={`cc-page-header cc-page-header--${variant}`}>
      {/* Banner */}
      {variant === 'withBanner' && bannerText && (
        <div className="cc-page-header__banner">
          <span>{bannerText}</span>
          {bannerLink && (
            <a href={bannerLink} className="cc-page-header__banner-link">
              Learn more →
            </a>
          )}
        </div>
      )}

      <div className="cc-page-header__inner">
        {/* Breadcrumb */}
        {(variant === 'withBreadcrumb' || variant === 'twoLevel') && breadcrumb && (
          <nav className="cc-page-header__breadcrumb" aria-label="Breadcrumb">
            {breadcrumb.map((crumb, i) => (
              <span key={i}>
                {i > 0 && <span className="cc-page-header__crumb-sep">/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="cc-page-header__crumb-link">{crumb.label}</a>
                ) : (
                  <span className="cc-page-header__crumb-current">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Eyebrow */}
        {(variant === 'withEyebrow' || variant === 'twoLevel') && eyebrow && (
          <span className="cc-page-header__eyebrow">{eyebrow}</span>
        )}

        <div className="cc-page-header__title-row">
          <div>
            {/* Welcome greeting */}
            {variant === 'welcome' && name && (
              <p className="cc-page-header__welcome">Good morning, {name} 👋</p>
            )}
            <h1 className="cc-page-header__title">{title}</h1>
            {subtitle && <p className="cc-page-header__subtitle">{subtitle}</p>}
            {sectionSubtitle && variant === 'twoLevel' && (
              <p className="cc-page-header__section-subtitle">{sectionSubtitle}</p>
            )}
          </div>
          {actions && (
            <div className="cc-page-header__actions">{actions}</div>
          )}
        </div>

        {/* Tabs */}
        {tabs && tabs.length > 0 && (
          <div className="cc-page-header__tabs">
            <TabBar tabs={tabs} active={activeTab} onChange={onTabChange} />
          </div>
        )}
      </div>
    </header>
  )
}

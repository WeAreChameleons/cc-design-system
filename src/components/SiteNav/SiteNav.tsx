import { useState } from 'react'
import './SiteNav.css'

const defaultLinks = [
  { href: '/work', label: 'Work' },
  { href: '/team', label: 'Team' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Insights' },
  { href: '/about', label: 'About' },
]

export interface SiteNavProps {
  links?: { href: string; label: string }[]
  ctaLabel?: string
  ctaHref?: string
  activeHref?: string
}

export const SiteNav = ({
  links = defaultLinks,
  ctaLabel = 'Get in Touch',
  activeHref,
}: SiteNavProps) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="cc-site-nav">
      <div className="cc-site-nav__inner">
        <a href="/" className="cc-site-nav__logo">Chameleon Collective</a>

        <nav className="cc-site-nav__links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`cc-site-nav__link ${activeHref === link.href ? 'cc-site-nav__link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="cc-site-nav__actions">
          <a href="/contact" className="cc-site-nav__cta">{ctaLabel}</a>
          <button
            className="cc-site-nav__hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`cc-site-nav__bar ${open ? 'cc-site-nav__bar--open-1' : ''}`} />
            <span className={`cc-site-nav__bar ${open ? 'cc-site-nav__bar--open-2' : ''}`} />
            <span className={`cc-site-nav__bar ${open ? 'cc-site-nav__bar--open-3' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="cc-site-nav__mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="cc-site-nav__mobile-link">{link.label}</a>
          ))}
          <a href="/contact" className="cc-site-nav__cta cc-site-nav__cta--mobile">{ctaLabel}</a>
        </div>
      )}
    </header>
  )
}

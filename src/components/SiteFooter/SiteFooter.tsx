import './SiteFooter.css'

export interface FooterColumn {
  label: string
  items: { href: string; label: string; external?: boolean }[]
}

const defaultColumns: FooterColumn[] = [
  {
    label: 'Work',
    items: [
      { href: '/work', label: 'Case Studies' },
      { href: '/skill', label: 'Skills' },
      { href: '/industry', label: 'Industries' },
    ],
  },
  {
    label: 'Company',
    items: [
      { href: '/about', label: 'Our Story' },
      { href: '/team', label: 'The Team' },
      { href: '/approach', label: 'Our Approach' },
    ],
  },
  {
    label: 'Services',
    items: [
      { href: '/services/brand', label: 'Brand' },
      { href: '/services/marketing', label: 'Marketing' },
      { href: '/services/experience', label: 'Experience' },
      { href: '/services/commerce', label: 'Commerce' },
      { href: '/services/sales', label: 'Sales' },
    ],
  },
  {
    label: 'Insights',
    items: [{ href: '/blog', label: 'From the Collective' }],
  },
  {
    label: 'Connect',
    items: [
      { href: '/contact', label: 'Get in Touch' },
      { href: 'https://www.linkedin.com/company/chameleon-collective/', label: 'LinkedIn', external: true },
    ],
  },
]

export interface SiteFooterProps {
  columns?: FooterColumn[]
  newsletterTitle?: string
  newsletterSubtitle?: string
}

export const SiteFooter = ({
  columns = defaultColumns,
  newsletterTitle = 'Insights in Your Inbox',
  newsletterSubtitle = 'Perspectives from our collective of industry experts.',
}: SiteFooterProps) => (
  <footer className="cc-site-footer">
    {/* Newsletter */}
    <div className="cc-site-footer__newsletter">
      <div className="cc-site-footer__newsletter-inner">
        <div className="cc-site-footer__newsletter-text">
          <h2 className="cc-site-footer__newsletter-title">{newsletterTitle}</h2>
          <p className="cc-site-footer__newsletter-subtitle">{newsletterSubtitle}</p>
        </div>
        <form className="cc-site-footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" className="cc-site-footer__newsletter-input" />
          <button type="submit" className="cc-site-footer__newsletter-btn">Sign Up</button>
        </form>
      </div>
    </div>

    {/* Link columns */}
    <div className="cc-site-footer__links">
      <div className="cc-site-footer__links-inner">
        {columns.map((col) => (
          <div key={col.label} className="cc-site-footer__column">
            <p className="cc-site-footer__column-label">{col.label}</p>
            <ul className="cc-site-footer__column-list">
              {col.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="cc-site-footer__link"
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Copyright */}
    <div className="cc-site-footer__copyright">
      <div className="cc-site-footer__copyright-inner">
        <p>&copy; {new Date().getFullYear()} Chameleon Collective. All rights reserved.</p>
        <a href="/privacy" className="cc-site-footer__link">Privacy Policy</a>
      </div>
    </div>
  </footer>
)

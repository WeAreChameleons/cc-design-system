import './FeatureGrid.css'

export interface FeatureItem {
  name: string
  description: string
}

export interface FeatureGridProps {
  eyebrow?: string
  title?: string
  items: FeatureItem[]
  columns?: 2 | 3 | 4
  bg?: 'white' | 'cream' | 'offwhite'
}

export const FeatureGrid = ({ eyebrow, title, items, columns = 3, bg = 'white' }: FeatureGridProps) => (
  <section className={`cc-feature-grid cc-feature-grid--${bg}`}>
    <div className="cc-feature-grid__inner">
      {eyebrow && <p className="cc-feature-grid__eyebrow">{eyebrow}</p>}
      {title && <h2 className="cc-feature-grid__title">{title}</h2>}
      <div className={`cc-feature-grid__grid cc-feature-grid__grid--cols-${columns}`}>
        {items.map((item, i) => (
          <div key={i} className="cc-feature-grid__item">
            <h3 className="cc-feature-grid__item-name">{item.name}</h3>
            <p className="cc-feature-grid__item-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

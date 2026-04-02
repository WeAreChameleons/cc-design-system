import './PracticeCard.css'

export interface PracticeCardProps {
  name: string
  tagline: string
  slug?: string
  number?: string
}

export const PracticeCard = ({ name, tagline, slug, number }: PracticeCardProps) => (
  <a href={slug ? `/services/${slug}` : '#'} className="cc-practice-card">
    {number && <span className="cc-practice-card__number">{number}</span>}
    <h3 className="cc-practice-card__name">{name}</h3>
    <p className="cc-practice-card__tagline">{tagline}</p>
    <span className="cc-practice-card__arrow">→</span>
  </a>
)

export interface PracticeListProps {
  practices: PracticeCardProps[]
}

export const PracticeList = ({ practices }: PracticeListProps) => (
  <div className="cc-practice-list">
    {practices.map((p, i) => (
      <PracticeCard key={i} {...p} number={String(i + 1).padStart(2, '0')} />
    ))}
  </div>
)

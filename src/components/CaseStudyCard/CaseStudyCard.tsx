import './CaseStudyCard.css'

export interface CaseStudyCardProps {
  title: string
  client: string
  category?: string
  imageUrl?: string
  slug?: string
}

export const CaseStudyCard = ({ title, client, category, imageUrl, slug }: CaseStudyCardProps) => (
  <a href={slug ? `/work/${slug}` : '#'} className="cc-case-study-card">
    <div className="cc-case-study-card__image">
      {imageUrl ? (
        <img src={imageUrl} alt={title} />
      ) : (
        <div className="cc-case-study-card__placeholder" />
      )}
    </div>
    <div className="cc-case-study-card__body">
      {category && <div className="cc-case-study-card__category">{category}</div>}
      <h3 className="cc-case-study-card__title">{title}</h3>
      <div className="cc-case-study-card__client">{client}</div>
    </div>
  </a>
)

export interface CaseStudyGridProps {
  studies: CaseStudyCardProps[]
}

export const CaseStudyGrid = ({ studies }: CaseStudyGridProps) => (
  <div className="cc-case-study-grid">
    {studies.map((s, i) => <CaseStudyCard key={i} {...s} />)}
  </div>
)

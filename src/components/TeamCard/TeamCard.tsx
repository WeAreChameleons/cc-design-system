import './TeamCard.css'

export interface TeamCardProps {
  name: string
  title: string
  imageUrl?: string
  slug?: string
}

export const TeamCard = ({ name, title, imageUrl, slug }: TeamCardProps) => (
  <a href={slug ? `/team/${slug}` : '#'} className="cc-team-card">
    <div className="cc-team-card__image">
      {imageUrl ? (
        <img src={imageUrl} alt={name} />
      ) : (
        <div className="cc-team-card__placeholder">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
      )}
    </div>
    <div className="cc-team-card__info">
      <div className="cc-team-card__name">{name}</div>
      <div className="cc-team-card__title">{title}</div>
    </div>
  </a>
)

export interface TeamGridProps {
  members: TeamCardProps[]
}

export const TeamGrid = ({ members }: TeamGridProps) => (
  <div className="cc-team-grid">
    {members.map((m, i) => <TeamCard key={i} {...m} />)}
  </div>
)

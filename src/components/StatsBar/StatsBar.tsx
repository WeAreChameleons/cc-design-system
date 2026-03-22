import './StatsBar.css'

export interface StatItem {
  value: string
  label: string
}

export interface StatsBarProps {
  stats: StatItem[]
  bg?: 'cream' | 'white' | 'black'
}

export const StatsBar = ({ stats, bg = 'cream' }: StatsBarProps) => (
  <section className={`cc-stats-bar cc-stats-bar--${bg}`}>
    <div className="cc-stats-bar__inner">
      {stats.map((stat, i) => (
        <div key={i} className="cc-stats-bar__item">
          <div className="cc-stats-bar__value">{stat.value}</div>
          <div className="cc-stats-bar__label">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
)

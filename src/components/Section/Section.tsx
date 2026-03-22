import './Section.css'

export interface SectionProps {
  bg?: 'white' | 'cream' | 'black' | 'offwhite'
  children: React.ReactNode
  className?: string
}

/** Full-width section wrapper with max-width inner container */
export const Section = ({ bg = 'white', children, className = '' }: SectionProps) => (
  <section className={`cc-section cc-section--${bg} ${className}`}>
    <div className="cc-section__inner">{children}</div>
  </section>
)

export interface SplitSectionProps {
  bg?: 'white' | 'cream' | 'black' | 'offwhite'
  left: React.ReactNode
  right: React.ReactNode
  /** Left side background color (for asymmetric splits) */
  leftBg?: 'cream' | 'white' | 'black' | 'burnt-sienna'
}

/** Two-column split layout (used for mission statements, intro text) */
export const SplitSection = ({ bg = 'white', left, right, leftBg }: SplitSectionProps) => (
  <section className={`cc-section cc-section--${bg}`}>
    <div className="cc-split">
      <div className={`cc-split__left ${leftBg ? `cc-split__left--${leftBg}` : ''}`}>{left}</div>
      <div className="cc-split__right">{right}</div>
    </div>
  </section>
)

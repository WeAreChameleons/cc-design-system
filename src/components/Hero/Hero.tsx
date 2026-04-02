import './Hero.css'

export interface HeroProps {
  /** Eyebrow text above the title */
  eyebrow?: string
  /** Main headline — supports line breaks with \n */
  title: string
  /** Optional subtitle paragraph below the title */
  subtitle?: string
  /** Background color variant */
  bg?: 'burnt-sienna' | 'cream' | 'black' | 'white'
  /** Content alignment */
  align?: 'left' | 'center'
  children?: React.ReactNode
}

export const Hero = ({
  eyebrow,
  title,
  subtitle,
  bg = 'burnt-sienna',
  align = 'left',
  children,
}: HeroProps) => (
  <section className={`cc-hero cc-hero--bg-${bg} cc-hero--${align}`}>
    <div className="cc-hero__inner">
      {eyebrow && <p className="cc-hero__eyebrow">{eyebrow}</p>}
      <h1 className="cc-hero__title">
        {title.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i < title.split('\n').length - 1 && <br />}
          </span>
        ))}
      </h1>
      {subtitle && <p className="cc-hero__subtitle">{subtitle}</p>}
      {children && <div className="cc-hero__actions">{children}</div>}
    </div>
  </section>
)

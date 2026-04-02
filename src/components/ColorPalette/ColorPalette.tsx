import './ColorPalette.css'
import { palette } from '../../tokens/palette'

interface SwatchProps {
  name: string
  hex: string
  token: string
  dark?: boolean
}

function Swatch({ name, hex, token, dark = false }: SwatchProps) {
  return (
    <div className="cc-swatch">
      <div
        className="cc-swatch__color"
        style={{ background: hex }}
        title={hex}
      />
      <div className={`cc-swatch__info${dark ? ' cc-swatch__info--dark' : ''}`}>
        <span className="cc-swatch__name">{name}</span>
        <code className="cc-swatch__hex">{hex}</code>
        <code className="cc-swatch__token">--cc-{token}</code>
      </div>
    </div>
  )
}

interface SwatchGroupProps {
  title: string
  children: React.ReactNode
}

function SwatchGroup({ title, children }: SwatchGroupProps) {
  return (
    <div className="cc-palette-group">
      <h3 className="cc-palette-group__title">{title}</h3>
      <div className="cc-palette-group__swatches">{children}</div>
    </div>
  )
}

/** Renders the full CC color palette. Used in Design Tokens / Colors story. */
export function ColorPalette() {
  return (
    <div className="cc-palette">
      <SwatchGroup title="Neutral">
        <Swatch name="Black"  hex={palette.black}   token="black"  dark />
        <Swatch name="Dark"   hex={palette.dark}    token="dark"   dark />
        <Swatch name="White"  hex={palette.white}   token="white"  />
        <Swatch name="Page"   hex={palette.pageBg}  token="page-bg" />
      </SwatchGroup>

      <SwatchGroup title="Primary Beige">
        {(Object.entries(palette.beige) as [string, string][]).map(([step, hex]) => (
          <Swatch key={step} name={`Beige/${step}`} hex={hex} token={`beige-${step}`} dark={step === '70'} />
        ))}
      </SwatchGroup>

      <SwatchGroup title="Primary Orange">
        {(Object.entries(palette.orange) as [string, string][]).map(([step, hex]) => (
          <Swatch key={step} name={`Orange/${step}`} hex={hex} token={`orange-${step}`} dark={['40','60','70'].includes(step)} />
        ))}
      </SwatchGroup>

      <SwatchGroup title="Secondary Green">
        {(Object.entries(palette.green) as [string, string][]).map(([step, hex]) => (
          <Swatch key={step} name={`Green/${step}`} hex={hex} token={`green-${step}`} dark={step === '70'} />
        ))}
      </SwatchGroup>

      <SwatchGroup title="Secondary Teal">
        {(Object.entries(palette.teal) as [string, string][]).map(([step, hex]) => (
          <Swatch key={step} name={`Teal/${step}`} hex={hex} token={`teal-${step}`} dark={['60','70'].includes(step)} />
        ))}
      </SwatchGroup>
    </div>
  )
}

# Chameleon Collective Design System — Agent Guide

## What this repo is
The CC design system — all reusable UI components, design tokens, and Storybook
stories for the Chameleon Collective platform. Every future UI task for CC should
reference this repo first.

## Live references
- Storybook: https://chameleon-design-system.vercel.app
- Figma source: https://figma.com/design/7PRLgjZYdkjkFOYfK3gfAU/CC---Website-Design
- Screenshots node: 6199-226 (53 app screens across 5 sections)
- Color palette node: 6168-5661
- Type scale node: 6168-5521

## Design system rules — ALWAYS follow these
1. ALL colors must come from src/tokens/tokens.css — never hardcode hex values
2. Heading / display / CTA text: IBM Plex Sans (fontDisplay)
3. Body / caption / form text: Inter (fontBody)
4. Primary brand color: --cc-orange-00 (#EB633F)
5. Page background: --cc-page-bg (#F5F3EC)
6. Sidebar background: --cc-beige-70 (#2F2E28)
7. Active / interactive states always use --cc-orange-00
8. Never use a color not in the CC palette for UI elements

## CC color palette (quick reference)
Beige:  00 #EAE4C8  10 #D3CDB4  20 #BBB6A0  40 #8C8978  60 #757264  70 #2F2E28
Orange: 00 #EB633F  10 #D45939  20 #BC4F32  40 #8D3B26  60 #5E2819  70 #471E13
Green:  00 #E8EB74  40 #7A8A2A  70 #2E2F17
Teal:   00 #5DEFF0  60 #365D60  70 #2A474A

## Component index
src/components/Badge/Badge.tsx
src/components/Button/Button.tsx
src/components/ColorPalette/ColorPalette.tsx
src/components/DataTable/DataTable.tsx
src/components/FabGroup/FabGroup.tsx
src/components/FilterBar/FilterBar.tsx
src/components/FilterDropdown/FilterDropdown.tsx
src/components/KpiCard/KpiCard.tsx
src/components/PageHeader/PageHeader.tsx
src/components/PageLayout/PageLayout.tsx
src/components/SearchBar/SearchBar.tsx
src/components/SegmentedPills/SegmentedPills.tsx
src/components/Sidebar/Sidebar.tsx
src/components/StatusBadge/StatusBadge.tsx
src/components/TabBar/TabBar.tsx
src/components/Text/Text.tsx

## When building new components
1. Check Storybook first — component may already exist
2. Use tokens from src/tokens/tokens.css only (--cc-* or --color-primary-* names)
3. Add .stories.tsx alongside every component
4. Follow IBM Plex Sans / Inter font pairing
5. Run `npm run storybook` before pushing

## When reskinning existing app screens
- Reference the 53 screenshots in Figma node 6199-226
- All screens have been reskinned — see individual component files for token mapping
- The app uses React + TypeScript

## Badge variant guide
Status:    healthy=Green/00+Green/70  error=#FDECEA+#8B1A1A  syncing=Beige/00+Orange/40
CRM stage: lead=Beige/00+Beige/60  prospect=Green/00@40%+Green/70
           proposal=Orange/00@10%+Orange/40  negotiating=Orange/20@10%+Orange/60
           closed=Green/00+Green/70  lost=Beige/20+Beige/70
Role:      core-team=Orange/00@10%+Orange/40  expert=Beige/00+Beige/60
           vendor=Beige/20+Beige/70  owner=Beige/70+Beige/00

## KPI card variant guide
neutral: white card, dark value
colored: white card, semantic colored value (orange/teal/green)
status:  white card, 10px colored dot + value
tinted:  colored bg card (blue/teal/green/orange tint)
alert:   Orange/00 @8% bg, Orange/10 label+value
finance: white card, caps label (IBM Plex Sans 10px), 22px value

## Storybook title conventions
- "Design Tokens/Colors"   — token documentation
- "Design Tokens/Typography"
- "Design Tokens/Spacing"
- "Design Tokens/Animations"
- "Components/Badge"       — component stories
- Story names in sentence case: "Default", "Status healthy", "CRM stage"

## TypeScript token access (JS/TS)
Import from src/tokens/palette.ts for programmatic access:
```ts
import { palette, semantic, fonts } from '../../tokens/palette'
```

## Dev commands
- `npm run storybook`       — start dev server on port 6006
- `npm run build-storybook` — build static Storybook for deployment

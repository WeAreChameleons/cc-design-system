/**
 * CC Design System — Palette (TypeScript)
 *
 * JS/TS access to all design tokens. Use these in components
 * that need programmatic access to token values.
 * For CSS usage, import tokens.css and use CSS custom properties.
 */

export const palette = {
  // ── Neutral ──────────────────────────────────────────────────────────────
  black: '#121212',
  dark:  '#282828',
  white: '#FFFFFF',

  // ── Primary Beige ────────────────────────────────────────────────────────
  beige: {
    '00': '#EAE4C8',
    '10': '#D3CDB4',
    '20': '#BBB6A0',
    '40': '#8C8978',
    '60': '#757264',
    '70': '#2F2E28',
  },

  // ── Primary Orange ───────────────────────────────────────────────────────
  orange: {
    '00': '#EB633F',
    '10': '#D45939',
    '20': '#BC4F32',
    '40': '#8D3B26',
    '60': '#5E2819',
    '70': '#471E13',
  },

  // ── Secondary Green ──────────────────────────────────────────────────────
  green: {
    '00': '#E8EB74',
    '40': '#7A8A2A',
    '70': '#2E2F17',
  },

  // ── Secondary Teal ───────────────────────────────────────────────────────
  teal: {
    '00': '#5DEFF0',
    '60': '#365D60',
    '70': '#2A474A',
  },

  // ── Page ─────────────────────────────────────────────────────────────────
  pageBg: '#F5F3EC',
} as const

// Flat convenience exports
export const {
  black, dark, white, beige, orange, green, teal, pageBg,
} = palette

// ── Typography ───────────────────────────────────────────────────────────────
export const fonts = {
  display: "'IBM Plex Sans', sans-serif",
  body:    "'Inter', sans-serif",
  mono:    "'IBM Plex Mono', monospace",
} as const

export const fontWeights = {
  regular:  400,
  medium:   500,
  semibold: 600,
} as const

// ── Semantic ─────────────────────────────────────────────────────────────────
export const semantic = {
  brandPrimary:       orange['00'],
  brandPrimaryHover:  orange['10'],
  brandPrimaryActive: orange['20'],

  sidebarBg:          beige['70'],
  sidebarActiveText:  orange['00'],
  sidebarItemText:    beige['10'],
  sidebarLabel:       beige['40'],

  btnPrimaryBg:       orange['00'],
  btnPrimaryHover:    orange['10'],
  btnPrimaryActive:   orange['20'],
  btnPrimaryText:     white,
  btnSecondaryBg:     white,
  btnSecondaryBorder: beige['20'],
  btnSecondaryText:   dark,
  btnGhostText:       beige['60'],

  tabActiveText:      orange['00'],
  tabInactiveText:    beige['40'],

  kpiCardBg:          white,
  kpiCardBorder:      beige['10'],
  kpiLabelColor:      beige['40'],
  kpiValueNeutral:    dark,
  kpiValueOrange:     orange['00'],
  kpiValueTeal:       teal['60'],
  kpiValueGreen:      green['40'],

  tableHeaderBg:      beige['00'],
  tableHeaderText:    beige['70'],
  tableSortActive:    orange['00'],
  tableLink:          orange['10'],

  fabPhoneBg:         teal['60'],
  fabPhoneHover:      teal['70'],
  fabChatBg:          orange['00'],
  fabChatHover:       orange['10'],
  fabBadgeBg:         green['00'],
  fabBadgeText:       green['70'],
} as const

export type PaletteColor = typeof palette
export type SemanticToken = keyof typeof semantic

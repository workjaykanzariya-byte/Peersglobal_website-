export type DesignId = 'd1' | 'd2' | 'd3' | 'd4' | 'd5'

export type DesignDirection = {
  id: DesignId
  index: number
  name: string
  tagline: string
  description: string
  /** swatches shown in the switcher, hex from the brand kit */
  swatches: string[]
}

export const DESIGN_DIRECTIONS: DesignDirection[] = [
  {
    id: 'd1',
    index: 1,
    name: 'Enterprise (Microsoft Standard)',
    tagline: 'Brand gradient, structured, executive',
    description:
      'A precise white canvas with a disciplined Microsoft-style grid, high-contrast typography, and official Brand Gradient (#1D4ED8 to #E11D48) doing the heavy lifting.',
    swatches: ['#1D4ED8', '#E11D48', '#0F172A', '#FFFFFF'],
  },
  {
    id: 'd2',
    name: 'Editorial',
    index: 2,
    tagline: 'Magazine rhythm, red rules',
    description:
      'Warm off-white paper, clean display type set tight, numbered sections and Brand Crimson hairlines. Built for dense, authoritative storytelling.',
    swatches: ['#FBFAF7', '#14151A', '#E11D48', '#1D4ED8'],
  },
  {
    id: 'd3',
    index: 3,
    name: 'Premium Dark',
    tagline: 'Navy and gold, invitation-only',
    description:
      'Deep navy with subtle brand glow accents used sparingly. Signals a private, high-trust room — strongest for Circle Founder and Investor narratives.',
    swatches: ['#070D1B', '#D4AF37', '#1D4ED8', '#FFFFFF'],
  },
  {
    id: 'd4',
    index: 4,
    name: 'Bold',
    tagline: 'Big type, blue slabs, crimson action',
    description:
      'Oversized headlines, full-bleed Brand Blue slabs and pill CTAs in Brand Gradient. The most conversion-forward of the five.',
    swatches: ['#1D4ED8', '#E11D48', '#FFFFFF', '#0A0A0B'],
  },
  {
    id: 'd5',
    index: 5,
    name: 'Soft',
    tagline: 'Tinted, rounded, human',
    description:
      'Light Grey and tinted blue surfaces, generous rounding and soft elevation. The warmest, most community-first of the five.',
    swatches: ['#E8EFFD', '#1D4ED8', '#E11D48', '#16233D'],
  },
]

export const DEFAULT_DESIGN: DesignId = 'd1'
export const DESIGN_STORAGE_KEY = 'pg-design-direction'

export function getDirection(id: DesignId) {
  return DESIGN_DIRECTIONS.find((d) => d.id === id) ?? DESIGN_DIRECTIONS[0]
}

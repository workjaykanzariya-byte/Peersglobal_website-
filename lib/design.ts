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
    name: 'Institutional',
    tagline: 'Blue-led, structured, credible',
    description:
      'A precise white canvas with a disciplined grid, near-square corners and Brand Blue doing the heavy lifting. Reads like a leadership institution, not a startup.',
    swatches: ['#1E4ED8', '#FFFFFF', '#0B1B3A', '#E53935'],
  },
  {
    id: 'd2',
    name: 'Editorial',
    index: 2,
    tagline: 'Magazine rhythm, red rules',
    description:
      'Warm off-white paper, Montserrat display type set tight, numbered sections and Brand Red hairlines. Built for dense, authoritative storytelling.',
    swatches: ['#FBFAF7', '#14151A', '#E53935', '#1E4ED8'],
  },
  {
    id: 'd3',
    index: 3,
    name: 'Premium Dark',
    tagline: 'Navy and gold, invitation-only',
    description:
      'Deep navy with the optional Gold accent used sparingly. Signals a private, high-trust room — strongest for Circle Founder and Investor narratives.',
    swatches: ['#070D1B', '#D4AF37', '#3B82F6', '#FFFFFF'],
  },
  {
    id: 'd4',
    index: 4,
    name: 'Bold',
    tagline: 'Big type, blue slabs, red action',
    description:
      'Oversized headlines, full-bleed Brand Blue slabs and pill CTAs in Brand Red. The most conversion-forward of the five.',
    swatches: ['#1E4ED8', '#E53935', '#FFFFFF', '#0A0A0B'],
  },
  {
    id: 'd5',
    index: 5,
    name: 'Soft',
    tagline: 'Tinted, rounded, human',
    description:
      'Light Grey and tinted blue surfaces, generous rounding and soft elevation. The warmest, most community-first of the five.',
    swatches: ['#E8EFFD', '#1E4ED8', '#3B82F6', '#16233D'],
  },
]

export const DEFAULT_DESIGN: DesignId = 'd1'
export const DESIGN_STORAGE_KEY = 'pg-design-direction'

export function getDirection(id: DesignId) {
  return DESIGN_DIRECTIONS.find((d) => d.id === id) ?? DESIGN_DIRECTIONS[0]
}

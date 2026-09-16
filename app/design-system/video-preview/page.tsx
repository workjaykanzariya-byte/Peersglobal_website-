'use client'

/**
 * INTERNAL REVIEW ONLY — not linked in nav, not a real page.
 * Demonstrates the Phase 0 video-first component system using existing
 * placeholder assets so it can be reviewed before Phase 1/2 build it
 * into real pages. Safe to delete once approved.
 */

import { useState } from 'react'
import { Cta } from '@/components/site/ui'
import { HubVideoHero } from '@/components/media/hub-video-hero'
import { VideoGrid } from '@/components/media/video-grid'
import { CategoryTabs } from '@/components/media/category-tabs'
import type { VideoItem } from '@/components/media/types'

const DEMO_ITEMS: VideoItem[] = [
  {
    id: '1',
    title: 'From Solo Founder to 40-Crore Revenue — A Circle Story',
    thumbnail: '/images/story-hero.jpg',
    source: { kind: 'file', src: '/videos/journey-bg.mp4' },
    duration: '4:12',
    category: 'Circle Story',
    meta: 'Ahmedabad Circle · Manufacturing',
  },
  {
    id: '2',
    title: 'Inside a Live LSR Meeting: What Actually Happens',
    thumbnail: '/images/outcomes-peers-group.png',
    source: { kind: 'file', src: '/videos/leadership-hero-bg.mp4' },
    duration: '6:48',
    category: 'Circle Highlights',
    meta: 'Mumbai Circle',
  },
  {
    id: '3',
    title: 'The One Million Goal — Founder Keynote',
    thumbnail: '/images/mission-2030.jpg',
    source: { kind: 'youtube', id: 'dQw4w9WgXcQ' },
    duration: '11:20',
    category: 'Keynote',
    meta: 'Annual Conclave 2026',
  },
  {
    id: '4',
    title: 'Building Trust Before Business: A Chair\'s Perspective',
    thumbnail: '/images/circle-founder-hero.jpg',
    source: { kind: 'file', src: '/videos/stories-hero-bg.mp4' },
    duration: '3:05',
    category: 'Circle Story',
    meta: 'Delhi NCR Circle',
  },
]

const CATEGORIES = ['All', 'Circle Story', 'Circle Highlights', 'Keynote']

export default function VideoPreviewPage() {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? DEMO_ITEMS : DEMO_ITEMS.filter((i) => i.category === category)

  return (
    <>
      <HubVideoHero
        eyebrow="Design Review — Phase 0"
        title="The video-first component system"
        lede="VideoHero, VideoCard, VideoModal, VideoGrid and CategoryTabs — the pieces every video hub (Video Stories, Media Library, Podcasts, Circle Highlights) will be built from."
        videoSrc="/videos/hero-bg.mp4"
        poster="/images/story-hero.jpg"
      >
        <Cta href="#grid" variant="gold" size="md">See the grid + player</Cta>
      </HubVideoHero>

      <section id="grid" className="section shell flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="display text-2xl md:text-3xl text-[var(--ink)]">Video grid</h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            Hover a card: film-corner marks draw in and the play control opens like an aperture — the
            one recurring interaction across every video surface on the site. Click any card to open the
            lightbox (mp4 file or YouTube/Vimeo embed, same component either way).
          </p>
          <CategoryTabs categories={CATEGORIES} active={category} onChange={setCategory} />
        </div>
        <VideoGrid items={filtered} />
      </section>
    </>
  )
}

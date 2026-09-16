'use client'

import { useMemo, useState } from 'react'
import { HubVideoHero } from '@/components/media/hub-video-hero'
import { CategoryTabs } from '@/components/media/category-tabs'
import { ViewToggle, type ViewMode } from '@/components/media/view-toggle'
import { VideoGrid } from '@/components/media/video-grid'
import { VideoListRow } from '@/components/media/video-list-row'
import { VideoModal } from '@/components/media/video-modal'
import { VIDEO_STORIES, VIDEO_STORY_CATEGORIES } from '@/lib/data/video-stories'
import type { VideoItem } from '@/components/media/types'

export default function VideoStoriesPage() {
  const [category, setCategory] = useState<string>('All')
  const [view, setView] = useState<ViewMode>('grid')
  const [active, setActive] = useState<VideoItem | null>(null)

  const filtered = useMemo(
    () => (category === 'All' ? VIDEO_STORIES : VIDEO_STORIES.filter((v) => v.category === category)),
    [category],
  )

  return (
    <>
      <HubVideoHero
        eyebrow="Video Stories"
        title="Every Circle story, told by the promoter who lived it"
        lede="Founders, chairs, and next-gen promoters, on camera — the same outcomes you can read in Stories & Insights, unscripted."
        videoSrc="/videos/stories-hero-bg.mp4"
        poster="/images/story-hero.jpg"
      />

      <section className="section shell flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <CategoryTabs categories={[...VIDEO_STORY_CATEGORIES]} active={category} onChange={setCategory} />
          <ViewToggle mode={view} onChange={setView} />
        </div>

        {view === 'grid' ? (
          <VideoGrid items={filtered} />
        ) : (
          <div className="flex flex-col">
            {filtered.length === 0 ? (
              <p className="py-16 text-center text-sm text-muted-foreground">No stories in this category yet.</p>
            ) : (
              filtered.map((item) => <VideoListRow key={item.id} item={item} onPlay={setActive} />)
            )}
          </div>
        )}
      </section>

      <VideoModal item={active} onClose={() => setActive(null)} />
    </>
  )
}

'use client'

import { useMemo, useState } from 'react'
import { HubVideoHero } from '@/components/media/hub-video-hero'
import { CategoryTabs } from '@/components/media/category-tabs'
import { VideoGrid } from '@/components/media/video-grid'
import { MEDIA_LIBRARY, MEDIA_LIBRARY_CATEGORIES } from '@/lib/data/media-library'

export default function MediaLibraryPage() {
  const [category, setCategory] = useState<string>('All')

  const filtered = useMemo(
    () => (category === 'All' ? MEDIA_LIBRARY : MEDIA_LIBRARY.filter((v) => v.category === category)),
    [category],
  )

  return (
    <>
      <HubVideoHero
        eyebrow="Media Library"
        title="Every campaign, conclave, and event recording, in one place"
        lede="Initiative videos, conclave sessions, event recordings, and brand assets — centralised and categorised so nothing lives only on someone's phone."
        videoSrc="/videos/hero-bg.mp4"
        poster="/images/mission-2030.jpg"
      />

      <section className="section shell flex flex-col gap-8">
        <CategoryTabs categories={[...MEDIA_LIBRARY_CATEGORIES]} active={category} onChange={setCategory} />
        <VideoGrid items={filtered} />
      </section>
    </>
  )
}

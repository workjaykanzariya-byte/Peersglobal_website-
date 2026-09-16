'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { VideoCard } from './video-card'
import { VideoModal } from './video-modal'
import type { VideoItem } from './types'

/**
 * Drop-in grid for any video hub: pass items, get a responsive grid with
 * the shared card interaction and a single managed lightbox. This is the
 * one component Video Stories, Media Library, Podcasts (video episodes),
 * and Circle Highlights should all render through.
 */
export function VideoGrid({
  items,
  size = 'md',
  columns = 4,
  preview = true,
  className,
  emptyLabel = 'No videos in this category yet.',
}: {
  items: VideoItem[]
  size?: 'sm' | 'md' | 'lg'
  columns?: 3 | 4
  preview?: boolean
  className?: string
  emptyLabel?: string
}) {
  const [active, setActive] = useState<VideoItem | null>(null)

  if (items.length === 0) {
    return <p className="py-16 text-center text-sm text-muted-foreground">{emptyLabel}</p>
  }

  return (
    <>
      <div
        className={cn(
          'grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3',
          columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3',
          className,
        )}
      >
        {items.map((item) => (
          <VideoCard key={item.id} item={item} size={size} preview={preview} onPlay={setActive} />
        ))}
      </div>
      <VideoModal item={active} onClose={() => setActive(null)} />
    </>
  )
}

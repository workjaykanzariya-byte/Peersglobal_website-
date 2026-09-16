'use client'

import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import type { VideoItem } from './types'

/**
 * Editorial list view: oversized title text, no thumbnail visible at
 * rest. On hover, a small preview frame plays the clip beside the title
 * (desktop) and a thin gold rule marks the active row. Mirrors the
 * "list" mode pattern from cinematic videographer portfolios — useful
 * for hubs with longer or more editorial titles (Video Stories) where a
 * dense thumbnail grid undersells the content.
 */
export function VideoListRow({ item, onPlay }: { item: VideoItem; onPlay: (item: VideoItem) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovering, setHovering] = useState(false)
  const canPreview = item.source.kind === 'file'

  const start = () => {
    if (!canPreview) return
    if (typeof window !== 'undefined' && window.matchMedia?.('(hover: none), (prefers-reduced-motion: reduce)').matches) return
    setHovering(true)
    requestAnimationFrame(() => videoRef.current?.play().catch(() => {}))
  }
  const stop = () => {
    videoRef.current?.pause()
    setHovering(false)
  }

  return (
    <button
      type="button"
      onClick={() => onPlay(item)}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      className="group relative flex w-full items-center justify-between gap-6 border-b border-[var(--border)] py-6 text-left transition-colors hover:border-[var(--gold)]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)] md:py-8"
    >
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-[var(--gold)] transition-transform duration-300 ease-out group-hover:scale-y-100"
      />
      <span className="flex min-w-0 flex-col gap-1.5 pl-4">
        {item.category ? (
          <span className="eyebrow text-[var(--gold)]">{item.category}</span>
        ) : null}
        <span className="display text-pretty text-xl leading-tight text-[var(--ink)] transition-colors group-hover:text-primary md:text-2xl lg:text-3xl">
          {item.title}
        </span>
        {item.meta ? <span className="text-sm text-muted-foreground">{item.meta}</span> : null}
      </span>

      <span className="relative hidden h-20 w-32 shrink-0 overflow-hidden bg-[#0b1b3a] sm:block md:h-24 md:w-40" style={{ borderRadius: 'var(--radius-md)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.thumbnail}
          alt=""
          className={cn('absolute inset-0 size-full object-cover transition-opacity duration-300', hovering && 'opacity-0')}
        />
        {canPreview ? (
          <video
            ref={videoRef}
            src={item.source.kind === 'file' ? item.source.src : undefined}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden
            className={cn('absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300', hovering && 'opacity-100')}
          />
        ) : null}
        {item.duration ? (
          <span className="absolute bottom-1.5 right-1.5 rounded-sm bg-black/70 px-1 py-0.5 text-[10px] font-medium tabular-nums text-white">
            {item.duration}
          </span>
        ) : null}
      </span>
    </button>
  )
}

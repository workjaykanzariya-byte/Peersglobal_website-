'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { VideoItem } from './types'

/**
 * Signature interaction, two layers:
 *  1. Hover preview — for file-based videos, the poster swaps for the
 *     actual clip playing muted/looped on hover (desktop only, respects
 *     prefers-reduced-motion). This is what makes a grid feel alive
 *     instead of a wall of frozen thumbnails.
 *  2. Film-frame corners + aperture play control — the recurring motif
 *     across every video surface on the site (Video Stories, Media
 *     Library, Podcasts, Circle Highlights, Testimonials).
 */
export function VideoCard({
  item,
  onPlay,
  size = 'md',
  preview = true,
  className,
}: {
  item: VideoItem
  onPlay: (item: VideoItem) => void
  size?: 'sm' | 'md' | 'lg'
  /** enable hover-to-preview-play for file sources (default on) */
  preview?: boolean
  className?: string
}) {
  const aspect = size === 'lg' ? 'aspect-video' : size === 'sm' ? 'aspect-[4/5]' : 'aspect-[3/4]'
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPreviewing, setIsPreviewing] = useState(false)
  const canPreview = preview && item.source.kind === 'file'

  const startPreview = () => {
    if (!canPreview) return
    if (typeof window !== 'undefined' && window.matchMedia?.('(hover: none), (prefers-reduced-motion: reduce)').matches) return
    setIsPreviewing(true)
    requestAnimationFrame(() => videoRef.current?.play().catch(() => {}))
  }
  const stopPreview = () => {
    if (!canPreview) return
    videoRef.current?.pause()
    setIsPreviewing(false)
  }

  return (
    <button
      type="button"
      onClick={() => onPlay(item)}
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
      onFocus={startPreview}
      onBlur={stopPreview}
      className={cn(
        'group relative flex flex-col text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]',
        className,
      )}
    >
      <span className={cn('relative w-full overflow-hidden bg-[#0b1b3a]', aspect)} style={{ borderRadius: 'var(--radius-lg)' }}>
        <Image
          src={item.thumbnail}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 90vw"
          className={cn(
            'object-cover transition-[transform,opacity] duration-700 ease-out group-hover:scale-[1.06]',
            isPreviewing && 'opacity-0',
          )}
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
            className={cn(
              'absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500',
              isPreviewing && 'opacity-100',
            )}
          />
        ) : null}
        <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

        {/* film-frame corner marks */}
        {(['tl', 'tr', 'bl', 'br'] as const).map((corner) => (
          <span
            key={corner}
            aria-hidden
            className={cn(
              'pointer-events-none absolute size-5 border-[var(--gold)] opacity-0 transition-all duration-300 ease-out group-hover:opacity-100',
              corner === 'tl' && 'left-3 top-3 border-l-2 border-t-2 -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0',
              corner === 'tr' && 'right-3 top-3 border-r-2 border-t-2 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0',
              corner === 'bl' && 'left-3 bottom-3 border-l-2 border-b-2 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0',
              corner === 'br' && 'right-3 bottom-3 border-r-2 border-b-2 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0',
            )}
          />
        ))}

        {/* aperture play control — fades out once the hover preview takes over */}
        <span className={cn('absolute inset-0 flex items-center justify-center transition-opacity duration-300', isPreviewing && 'opacity-0')}>
          <span className="absolute size-16 rounded-full border border-white/40 opacity-0 scale-75 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100" />
          <span className="absolute size-16 rounded-full border border-[var(--gold)]/0 opacity-0 scale-50 transition-all duration-500 ease-out delay-75 group-hover:border-[var(--gold)]/70 group-hover:opacity-100 group-hover:scale-[1.3]" />
          <span className="relative flex size-12 items-center justify-center rounded-full bg-white text-[#0b1b3a] shadow-lg transition-transform duration-300 ease-out group-hover:scale-110">
            <Play className="size-4 translate-x-0.5 fill-current" />
          </span>
        </span>

        {item.duration ? (
          <span className="absolute bottom-2.5 right-2.5 rounded-sm bg-black/70 px-1.5 py-0.5 text-[11px] font-medium tabular-nums text-white">
            {item.duration}
          </span>
        ) : null}

        {item.category ? (
          <span className="absolute left-2.5 top-2.5 rounded-sm bg-[var(--gold)]/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#1a1405]">
            {item.category}
          </span>
        ) : null}
      </span>

      <span className="mt-3 flex flex-col gap-0.5">
        <span className="display text-[0.95rem] leading-snug text-[var(--ink)] line-clamp-2">{item.title}</span>
        {item.meta ? <span className="text-xs text-muted-foreground">{item.meta}</span> : null}
      </span>
    </button>
  )
}

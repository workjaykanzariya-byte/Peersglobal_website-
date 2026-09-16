'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import type { VideoItem } from './types'
import { embedUrl } from './types'

export function VideoModal({ item, onClose }: { item: VideoItem | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!item) return
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [item, onClose])

  if (!item) return null
  const embed = embedUrl(item.source)

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4 py-8 animate-[fadeIn_.15s_ease-out]"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] md:right-8 md:top-8"
      >
        <X className="size-5" />
      </button>

      <div
        className="w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full overflow-hidden bg-black shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] ring-1 ring-[var(--gold)]/25">
          {embed ? (
            <iframe
              src={embed}
              title={item.title}
              className="size-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : item.source.kind === 'file' ? (
            <video
              src={item.source.src}
              poster={item.thumbnail}
              controls
              autoPlay
              playsInline
              className="size-full object-contain"
            />
          ) : null}
        </div>
        <div className="mt-4 flex flex-col gap-1 px-1">
          {item.category ? (
            <span className="eyebrow text-[var(--gold)]">{item.category}</span>
          ) : null}
          <h3 className="display text-xl text-white md:text-2xl">{item.title}</h3>
          {item.meta ? <p className="text-sm text-white/60">{item.meta}</p> : null}
        </div>
      </div>
    </div>
  )
}

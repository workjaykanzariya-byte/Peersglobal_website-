/**
 * Shared types for the video-first media system (Phase 0).
 * Every hub — Video Stories, Media Library, Podcasts, Circle Highlights,
 * Video Testimonials — should describe its content with this shape so it
 * can reuse VideoCard / VideoGrid / VideoModal / HubVideoHero as-is.
 */

export type MediaSource =
  | { kind: 'file'; src: string }
  | { kind: 'youtube'; id: string }
  | { kind: 'vimeo'; id: string }

export type VideoItem = {
  id: string
  title: string
  /** Thumbnail / poster image shown in the grid before playback */
  thumbnail: string
  /** How the video is actually played once opened */
  source: MediaSource
  /** e.g. "6:42" — omit for live or unknown-length content */
  duration?: string
  /** e.g. "Circle Story", "Keynote", "Episode 12" — shown as a gold tag */
  category?: string
  /** e.g. "Rohan Mehta, Circle Chair · Ahmedabad" */
  meta?: string
  /** Optional longer description, used on detail views */
  description?: string
}

export function embedUrl(source: MediaSource): string | null {
  if (source.kind === 'youtube') return `https://www.youtube-nocookie.com/embed/${source.id}?autoplay=1&rel=0`
  if (source.kind === 'vimeo') return `https://player.vimeo.com/video/${source.id}?autoplay=1`
  return null
}

import type { ReactNode } from 'react'
import { Eyebrow } from '@/components/site/ui'

/**
 * Hub-level video hero, used to open every video-first section page
 * (Video Stories, Media Library, Podcasts, Circle Highlights, Gallery).
 * Not the full-screen homepage moment — a quieter, shorter cinematic
 * band (60vh) so it reads as "section opener" rather than re-doing the
 * homepage's first-impression sequence.
 *
 * Respects prefers-reduced-motion by hiding the video and falling back
 * to the poster frame via CSS only (no JS check needed).
 */
export function HubVideoHero({
  eyebrow,
  title,
  lede,
  videoSrc,
  poster,
  children,
}: {
  eyebrow: string
  title: ReactNode
  lede?: string
  videoSrc: string
  poster: string
  children?: ReactNode
}) {
  return (
    <header className="relative flex min-h-[60vh] w-full items-end overflow-hidden bg-[#0b1b3a] text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className="motion-reduce:hidden absolute inset-0 size-full object-cover opacity-70"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {/* reduced-motion / no-video fallback */}
      <img
        src={poster}
        alt=""
        aria-hidden
        className="hidden motion-reduce:block absolute inset-0 size-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3a] via-[#0b1b3a]/50 to-[#0b1b3a]/10" />

      <div className="shell relative z-10 flex flex-col gap-5 py-14">
        <Eyebrow tone="gold">{eyebrow}</Eyebrow>
        <h1 className="display max-w-3xl text-balance text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold tracking-tight leading-snug">{title}</h1>
        {lede ? <p className="max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">{lede}</p> : null}
        {children ? <div className="mt-1 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </header>
  )
}

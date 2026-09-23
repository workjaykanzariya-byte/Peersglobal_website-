'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import { SITE } from '@/lib/data/site'

export function HomeHero() {
  const [videoUrl, setVideoUrl] = React.useState('/videos/homepage-hero-bg.mp4')
  const [ytEmbedUrl, setYtEmbedUrl] = React.useState<string | null>(null)

  React.useEffect(() => {
    const loadConfiguredVideo = () => {
      try {
        const saved = localStorage.getItem('peers_admin_page_media')
        if (saved) {
          const list = JSON.parse(saved)
          if (Array.isArray(list)) {
            const match = list.find(
              (item: any) =>
                (item.pageSlug === '/' || item.pageName === 'Home Page') &&
                item.sectionName === 'Hero Background Header' &&
                item.isActive !== false &&
                item.mediaUrl
            )
            if (match) {
              const url = match.mediaUrl.trim()
              const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
              const ytMatch = url.match(regExp)
              if (ytMatch && ytMatch[2].length === 11) {
                setYtEmbedUrl(
                  `https://www.youtube.com/embed/${ytMatch[2]}?autoplay=1&mute=1&loop=1&playlist=${ytMatch[2]}&controls=0&showinfo=0&rel=0&modestbranding=1`
                )
                setVideoUrl('')
              } else {
                setYtEmbedUrl(null)
                setVideoUrl(url)
              }
              return
            }
          }
        }
      } catch (e) {
        // fallback
      }
      setYtEmbedUrl(null)
      setVideoUrl('/videos/homepage-hero-bg.mp4')
    }

    loadConfiguredVideo()
    window.addEventListener('storage', loadConfiguredVideo)
    window.addEventListener('peers_media_updated', loadConfiguredVideo)
    return () => {
      window.removeEventListener('storage', loadConfiguredVideo)
      window.removeEventListener('peers_media_updated', loadConfiguredVideo)
    }
  }, [])

  return (
    <section className="relative min-h-[92vh] sm:min-h-[95vh] flex items-center justify-start overflow-hidden bg-[#070D18] text-white border-b border-white/10">

      {/* Full-Bleed Cinematic Background Video */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {ytEmbedUrl ? (
          <iframe
            src={ytEmbedUrl}
            title="Hero Background Video"
            className="size-full object-cover object-center opacity-85 pointer-events-none scale-125 border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        ) : (
          <video
            key={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="size-full object-cover object-center opacity-85"
          >
            <source src={videoUrl} type="video/mp4" />
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
        )}

        {/* Ambient Dark Gradient Overlays for High Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070D18] via-[#070D18]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#070D18]/70 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Stage (Mindvalley Clean Left-Aligned Structure) */}
      <div className="shell relative z-10 py-16 sm:py-24 lg:py-32 flex flex-col justify-center">
        <div className="max-w-3xl flex flex-col items-start text-left">

          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-5">
            <span className="h-[2px] w-6 bg-[#0078D4] rounded-full" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              World&apos;s First Community of Collaboration
            </span>
          </div>

          {/* Original Headline in Microsoft Segoe UI */}
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-[4.25rem] font-semibold text-white leading-[1.12] tracking-tight drop-shadow-md">
            Build Your Business.
            <br />
            Build Your Relationships.
            <br />
            Build Your Circle.
          </h1>

          {/* Original Subline */}
          <p className="mt-5 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            Peers Global is the world&apos;s first community of collaboration — a leadership
            organisation of entrepreneurs who grow by helping each other grow.
          </p>

          {/* Original Supporting Quote */}
          <p className="mt-3 text-sm sm:text-base italic text-slate-300 font-normal">
            &ldquo;{SITE.promise}&rdquo;
          </p>

          {/* Original CTA Action Buttons in Microsoft 4px Design */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-colors shadow-lg active:scale-[0.98]"
            >
              <span>Join Peers Global</span>
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="https://unity.peersglobal.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-md px-6 py-3.5 text-sm sm:text-base font-semibold text-white transition-colors shadow-md active:scale-[0.98]"
            >
              <Download className="size-4 text-slate-200" />
              <span>Download Unity App</span>
            </Link>

            <Link
              href="/circles/find"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm sm:text-base font-semibold text-white/90 hover:text-white underline-offset-4 hover:underline transition-colors"
            >
              <span>Find Your Circle →</span>
            </Link>
          </div>

        </div>
      </div>

    </section>
  )
}



'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowDown, ArrowRight, Download } from 'lucide-react'
import { SITE } from '@/lib/data/site'

export function HomeHero() {
  const [videoUrl, setVideoUrl] = React.useState('/videos/hero-background.mp4')
  const [ytEmbedUrl, setYtEmbedUrl] = React.useState<string | null>(null)

  React.useEffect(() => {
    const loadConfiguredVideo = () => {
      try {
        const saved = localStorage.getItem('peers_admin_page_media')
        if (saved) {
          const list = JSON.parse(saved)
          if (Array.isArray(list)) {
            const match = list.find((item: any) =>
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
                setYtEmbedUrl(`https://www.youtube.com/embed/${ytMatch[2]}?autoplay=1&mute=1&loop=1&playlist=${ytMatch[2]}&controls=0&showinfo=0&rel=0&modestbranding=1`)
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
      setVideoUrl('/videos/hero-background.mp4')
    }

    loadConfiguredVideo()
    window.addEventListener('storage', loadConfiguredVideo)
    window.addEventListener('peers_media_updated', loadConfiguredVideo)
    return () => {
      window.removeEventListener('storage', loadConfiguredVideo)
      window.removeEventListener('peers_media_updated', loadConfiguredVideo)
    }
  }, [])

  const scrollToExplore = () => {
    const nextSection = document.getElementById('who-we-are') || document.getElementById('circles')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollBy({ top: 600, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#050B17] text-white border-b border-white/10">
      {/* Cinematic Full-Bleed 4K Earth Background Video */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {ytEmbedUrl ? (
          <iframe
            src={ytEmbedUrl}
            title="Hero Background Video"
            className="size-full object-cover object-center opacity-85 sm:opacity-90 pointer-events-none scale-125 border-0"
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
            className="size-full object-cover object-center opacity-85 sm:opacity-90"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}

        {/* Targeted Atmospheric Gradients: keeps Earth & city lights radiant while text stays crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B17]/85 via-[#050B17]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#050B17] via-[#050B17]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050B17] via-[#050B17]/60 to-transparent pointer-events-none" />
      </div>

      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-10 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-1/3 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]"
      />

      <div className="shell relative z-10 pt-8 sm:pt-10 lg:pt-12 pb-8 flex flex-col justify-between">
        {/* Main Grid: Left copy, Right card */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Eyebrow with leading gradient bar */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full shadow-[0_0_8px_rgba(225,29,72,0.6)]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-200">
                World&apos;s First Community of Collaboration
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-[3.65rem] font-bold tracking-tight text-white leading-[1.15] drop-shadow-md">
              Build Your Business.
              <br />
              <span className="bg-gradient-to-r from-[#3B82F6] via-[#EC4899] to-[#E11D48] bg-clip-text text-transparent font-extrabold">
                Build Your Relationships.
              </span>
              <br />
              Build Your Circle.
            </h1>

            {/* Subline */}
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-200 font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Peers Global is the world&apos;s first community of collaboration — a leadership
              organisation of entrepreneurs who grow by helping each other grow.
            </p>

            {/* Supporting quote */}
            <p className="max-w-xl text-sm sm:text-base italic text-slate-300/90 font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              &ldquo;{SITE.promise}&rdquo;
            </p>

            {/* CTA buttons */}
            <div className="mt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/membership"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-7 py-3.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(29,78,216,0.4)] transition-all duration-300 hover:from-[#1E40AF] hover:to-[#BE123C] hover:shadow-[0_8px_25px_rgba(225,29,72,0.5)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10">Join Peers Global</span>
                <ArrowRight className="relative z-10 size-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              </Link>

              {/* Download Unity App with Brand Gradient Trim */}
              <div className="relative group/unity-btn">
                <Link
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/30 bg-white/[0.1] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-white/[0.2] hover:shadow-[0_0_24px_rgba(29,78,216,0.35)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download className="size-4 text-slate-200 transition-colors group-hover:text-white" />
                  <span className="tracking-wide">Download Unity App</span>
                  
                  {/* Shimmer Light Reflection Sweep on Hover */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                </Link>
              </div>

              <Link
                href="/circles/find"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-white/90 transition-colors hover:text-white underline-offset-4 hover:underline"
              >
                Find Your Circle →
              </Link>
            </div>
          </div>

          {/* Right Column: Directly playing video card (no cover image, no play button) */}
          <div className="relative">
            {/* Ambient glow behind card */}
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-tr from-[#1D4ED8]/25 via-transparent to-[#E11D48]/25 blur-xl opacity-75 pointer-events-none" />

            {/* Outer card frame */}
            <div className="relative rounded-[24px] border border-white/20 bg-gradient-to-b from-white/[0.15] via-white/[0.05] to-transparent p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-md">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[18px] bg-black">
                {/* Directly playing video with infinite loop, autoplay, muted, playsInline */}
                <video
                  src="/videos/homepage-hero-bg.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover"
                />

                {/* Subtle dark vignette overlay for depth and badge readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Top-Left Pill: REAL PEOPLE. REAL COLLABORATION. */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/80 px-3.5 py-1.5 backdrop-blur-md shadow-lg">
                  <span className="size-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] shadow-[0_0_8px_#E11D48]" />
                  <span className="text-[10.5px] font-bold tracking-[0.16em] uppercase text-white/95">
                    Real People. Real Collaboration.
                  </span>
                </div>

                {/* Top-Right Pill Box: IDEAS, PEOPLE, OPPORTUNITIES, IMPACT */}
                <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-1 rounded-xl border border-white/15 bg-slate-950/80 p-2.5 backdrop-blur-md shadow-xl">
                  {['Ideas', 'People', 'Opportunities', 'Impact'].map((item) => (
                    <span
                      key={item}
                      className="text-[9.5px] font-bold tracking-[0.2em] uppercase text-white/80 transition-colors hover:text-[#E11D48]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Bottom-Right Subtitle */}
                <div
                  className="pointer-events-none absolute bottom-4 right-5 z-20 text-xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                >
                  Stronger Together
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Scroll to Explore + Stats Grid */}
        <div className="mt-8 lg:mt-10 pt-6 border-t border-white/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          {/* Scroll To Explore indicator */}
          <button
            type="button"
            onClick={scrollToExplore}
            className="group inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors self-start"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-white/60 group-hover:bg-white/10">
              <ArrowDown className="size-3.5 text-white/70 group-hover:text-white transition-transform group-hover:translate-y-0.5" />
            </span>
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase">
              Scroll to explore
            </span>
          </button>

          {/* 4 Stats */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-12 flex-1 lg:max-w-3xl lg:justify-end">
            {/* Stat 1 */}
            <div className="flex flex-col gap-0.5 border-l border-white/15 pl-4 sm:border-l-0 sm:pl-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                1M+
              </span>
              <span className="text-xs font-semibold text-white/90">
                Entrepreneurs to Impact
              </span>
              <span className="text-[11px] text-slate-400">
                By 2030
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-0.5 border-l border-white/15 pl-4">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                18
              </span>
              <span className="text-xs font-semibold text-white/90">
                Industry &amp; Goal Circles
              </span>
              <span className="text-[11px] text-slate-400">
                Category-exclusive
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-0.5 border-l border-white/15 pl-4">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                11+
              </span>
              <span className="text-xs font-semibold text-white/90">
                Cities
              </span>
              <span className="text-[11px] text-slate-400">
                Across India
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col gap-0.5 border-l border-white/15 pl-4">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                100+
              </span>
              <span className="text-xs font-semibold text-white/90">
                Events &amp; Initiatives
              </span>
              <span className="text-[11px] text-slate-400">
                Every Year
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

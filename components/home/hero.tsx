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

      <div className="shell relative z-10 pt-6 sm:pt-8 lg:pt-10 pb-8 flex flex-col justify-between">
        {/* Main Grid: Left copy, Right card */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Eyebrow with leading cyan bar */}
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-6 bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400">
                World&apos;s First Community of Collaboration
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.65rem] font-normal tracking-tight text-white leading-[1.18] drop-shadow-md">
              Build Your Business.
              <br />
              <span className="italic bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent">
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
            <p className="max-w-xl text-sm sm:text-base italic text-slate-300 font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              &ldquo;{SITE.promise}&rdquo;
            </p>

            {/* CTA buttons */}
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <Link
                href="/membership"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-slate-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Join Peers Global</span>
                <ArrowRight className="size-4 text-slate-900 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              </Link>

              {/* Download Unity App with Peers Global Logo Color Matching (Red-Blue Glow & Gradient Hover) */}
              <div className="relative group/unity-btn">
                {/* Ambient Logo Colors Glow (Peers Red -> Peers Sky -> Royal Blue) */}
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#E53935] via-[#3B82F6] to-[#1E4ED8] opacity-0 blur-md transition-all duration-500 group-hover/unity-btn:opacity-80 group-hover/unity-btn:blur-lg" />
                
                <Link
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/25 bg-white/[0.08] px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#E53935]/25 hover:via-[#3B82F6]/30 hover:to-[#1E4ED8]/35 hover:shadow-[0_0_24px_rgba(0,98,210,0.4),0_0_16px_rgba(229,57,53,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download className="size-4 text-slate-200 transition-colors group-hover:text-white" />
                  <span className="font-semibold tracking-wide">Download Unity App</span>
                  
                  {/* Shimmer Light Reflection Sweep on Hover */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                </Link>
              </div>

              <Link
                href="/circles/find"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white underline-offset-4 hover:underline"
              >
                Find Your Circle →
              </Link>
            </div>
          </div>

          {/* Right Column: Directly playing video card (no cover image, no play button) */}
          <div className="relative">
            {/* Ambient glow behind card */}
            <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-tr from-cyan-500/20 via-transparent to-blue-600/20 blur-xl opacity-70 pointer-events-none" />

            {/* Outer card frame */}
            <div className="relative rounded-[28px] border border-white/15 bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(56,189,248,0.12)] backdrop-blur-sm">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[22px] bg-black">
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
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                {/* Top-Left Pill: REAL PEOPLE. REAL COLLABORATION. */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2.5 rounded-full border border-white/20 bg-slate-950/75 px-3.5 py-1.5 backdrop-blur-md shadow-lg">
                  <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                  <span className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-white/90">
                    Real People. Real Collaboration.
                  </span>
                </div>

                {/* Top-Right Pill Box: IDEAS, PEOPLE, OPPORTUNITIES, IMPACT */}
                <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-1 rounded-xl border border-white/15 bg-slate-950/75 p-3 backdrop-blur-md shadow-xl">
                  {['Ideas', 'People', 'Opportunities', 'Impact'].map((item) => (
                    <span
                      key={item}
                      className="text-[9.5px] font-bold tracking-[0.2em] uppercase text-white/80 transition-colors hover:text-cyan-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Bottom-Right Script text: Stronger Together */}
                <div
                  className="pointer-events-none absolute bottom-4 right-6 z-20 text-2xl sm:text-3xl text-white font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  style={{ fontFamily: 'var(--font-script)' }}
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

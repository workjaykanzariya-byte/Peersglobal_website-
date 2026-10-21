'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  fetchPodcastEpisodes,
  fetchFeaturedEpisodes,
  extractYoutubeVideoId,
  type ApiPodcastEpisode,
} from '@/lib/api/web-content'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mic,
  Play,
  X,
  Volume2,
  ExternalLink,
  CheckCircle2,
  RotateCcw,
} from 'lucide-react'

// ─── Featured Episodes Type ────────────────────────────────────────────────
type Episode = ApiPodcastEpisode

export function PodcastMediaClient() {
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [viewMode, setViewMode] = useState<'coverflow' | 'grid'>('coverflow')
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [nominateOpen, setNominateOpen] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  // Fetch dynamic episodes from Unity backend on mount
  const loadEpisodes = async () => {
    setIsLoading(true)
    try {
      let apiData = await fetchPodcastEpisodes({ limit: 48 })
      if (!apiData || apiData.length === 0) {
        apiData = await fetchFeaturedEpisodes(48)
      }
      setEpisodes(apiData || [])
      setActiveIndex(0)
    } catch (err) {
      console.warn('Failed to load dynamic podcast episodes:', err)
      setEpisodes([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadEpisodes()
  }, [])

  const handlePrev = () => {
    if (episodes.length <= 1) return
    setActiveIndex((prev) => (prev - 1 + episodes.length) % episodes.length)
  }

  const handleNext = () => {
    if (episodes.length <= 1) return
    setActiveIndex((prev) => (prev + 1) % episodes.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null || episodes.length <= 1) return
    const touchEnd = e.changedTouches[0].clientX
    const distance = touchStart - touchEnd
    if (distance > 45) {
      handleNext()
    } else if (distance < -45) {
      handlePrev()
    }
    setTouchStart(null)
  }

  // Keyboard navigation for coverflow
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedEpisode !== null) return
      if (episodes.length <= 1) return
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [episodes.length, selectedEpisode])

  // Calculate 3D coverflow styling for each podcast card relative to activeIndex
  const getCardStyle = (index: number): React.CSSProperties => {
    if (episodes.length === 1) {
      return {
        transform: 'translateX(0%) scale(1.05) translateZ(0)',
        zIndex: 30,
        opacity: 1,
        visibility: 'visible',
        filter: 'drop-shadow(0 25px 40px rgba(15, 23, 42, 0.35))',
      }
    }

    const N = episodes.length
    let diff = index - activeIndex

    // Wrap circular offset into [-N/2, N/2]
    while (diff > N / 2) diff -= N
    while (diff < -N / 2) diff += N

    if (diff === 0) {
      // Center focused card (largest, elevated, sharp)
      return {
        transform: 'translateX(0%) scale(1.08)',
        zIndex: 30,
        opacity: 1,
        visibility: 'visible',
        filter: 'drop-shadow(0 25px 45px rgba(15, 23, 42, 0.4))',
        cursor: 'pointer',
      }
    }

    if (diff === 1) {
      // Right immediate card
      return {
        transform: 'translateX(58%) scale(0.88)',
        zIndex: 20,
        opacity: 0.88,
        visibility: 'visible',
        filter: 'brightness(0.9) drop-shadow(0 15px 30px rgba(15, 23, 42, 0.25))',
        cursor: 'pointer',
      }
    }

    if (diff === -1) {
      // Left immediate card
      return {
        transform: 'translateX(-58%) scale(0.88)',
        zIndex: 20,
        opacity: 0.88,
        visibility: 'visible',
        filter: 'brightness(0.9) drop-shadow(0 15px 30px rgba(15, 23, 42, 0.25))',
        cursor: 'pointer',
      }
    }

    if (diff === 2) {
      // Right outer card
      return {
        transform: 'translateX(105%) scale(0.74)',
        zIndex: 10,
        opacity: 0.65,
        visibility: 'visible',
        filter: 'brightness(0.78) drop-shadow(0 10px 20px rgba(15, 23, 42, 0.2))',
        cursor: 'pointer',
      }
    }

    if (diff === -2) {
      // Left outer card
      return {
        transform: 'translateX(-105%) scale(0.74)',
        zIndex: 10,
        opacity: 0.65,
        visibility: 'visible',
        filter: 'brightness(0.78) drop-shadow(0 10px 20px rgba(15, 23, 42, 0.2))',
        cursor: 'pointer',
      }
    }

    // Completely off-screen
    return {
      transform: diff > 0 ? 'translateX(160%) scale(0.6)' : 'translateX(-160%) scale(0.6)',
      zIndex: 0,
      opacity: 0,
      visibility: 'hidden',
      pointerEvents: 'none',
    }
  }

  // Nomination Form State
  const [nomineeName, setNomineeName] = useState('')
  const [nomineeBusiness, setNomineeBusiness] = useState('')
  const [nomineeStory, setNomineeStory] = useState('')
  const [nominationSent, setNominationSent] = useState(false)

  const handleNominateSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setNominationSent(true)
    setTimeout(() => {
      setNominationSent(false)
      setNominateOpen(false)
      setNomineeName('')
      setNomineeBusiness('')
      setNomineeStory('')
    }, 2500)
  }

  const activeEpisode = episodes[activeIndex]

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Global Gradient Definition for Brand Icons */}
      <svg width="0" height="0" className="absolute pointer-events-none" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
        </defs>
      </svg>

      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3.5 text-slate-400" />
          <Link href="/stories" className="hover:text-slate-900 transition-colors">
            Community Life
          </Link>
          <ChevronRight className="size-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Podcast &amp; Media</span>
        </div>
      </div>

      {/* ─── PODCAST SHOWCASE (GALLERY-STYLE 3D COVERFLOW SECTION) ─── */}
      <section id="channels" className="pt-10 sm:pt-14 pb-16 sm:pb-20 lg:pb-24 bg-white border-b border-slate-200/80 scroll-mt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header matching gallery reference */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                FEATURED EPISODES
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Latest from our channels
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
              A living visual and audio record of{' '}
              <span className="font-semibold bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] bg-clip-text text-transparent">
                conversations, conclaves, and entrepreneurial milestones
              </span>.
            </p>

            {/* Controls Bar: Unique Gradient View Mode Toggle & Refresh */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
              {episodes.length > 1 && (
                <div className="relative p-[1.5px] rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/15 transition-all">
                  <div className="p-1 rounded-full bg-slate-100 flex items-center gap-1 text-xs font-semibold">
                    <button
                      onClick={() => setViewMode('coverflow')}
                      className={`px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center ${
                        viewMode === 'coverflow'
                          ? 'bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white shadow-sm font-bold'
                          : 'text-black hover:bg-white/80 font-bold'
                      }`}
                    >
                      <span style={{ color: viewMode === 'coverflow' ? '#ffffff' : '#000000' }}>3D Showcase</span>
                    </button>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center ${
                        viewMode === 'grid'
                          ? 'bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white shadow-sm font-bold'
                          : 'text-black hover:bg-white/80 font-bold'
                      }`}
                    >
                      <span style={{ color: viewMode === 'grid' ? '#ffffff' : '#000000' }}>Grid Gallery</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Refresh Button with Matching Gradient Luxury Style */}
              <button
                onClick={loadEpisodes}
                disabled={isLoading}
                title="Refresh from Admin Panel"
                className="relative p-[1.5px] rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-rose-900/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
              >
                <div className="px-4 py-1.5 rounded-full bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] transition-all duration-300 flex items-center justify-center text-xs font-bold uppercase tracking-wider">
                  <span className="text-black font-extrabold group-hover:text-white transition-colors duration-300">
                    {isLoading ? 'Updating...' : 'Refresh'}
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Content States */}
          {isLoading ? (
            <div className="py-28 text-center space-y-3">
              <div className="size-10 rounded-full border-2 border-blue-600 border-t-transparent animate-spin mx-auto" />
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Loading podcast episodes...
              </p>
            </div>
          ) : episodes.length === 0 ? (
            <div className="text-center py-20 px-6 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-4 max-w-xl mx-auto my-4">
              <div className="size-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center mx-auto text-blue-600 shadow-xs">
                <Mic className="size-7" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  No Podcast Episodes Published Yet
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-md mx-auto">
                  Episodes, podcasts, and video broadcasts uploaded from the admin panel will appear here automatically in this 3D visual showcase.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  onClick={loadEpisodes}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <RotateCcw className="size-3.5" />
                  <span>Refresh Episodes</span>
                </button>
              </div>
            </div>
          ) : viewMode === 'coverflow' ? (
            /* ─── 3D COVERFLOW PERSPECTIVE STAGE ─── */
            <div className="space-y-8 select-none">
              <div
                className="relative w-full h-[420px] sm:h-[480px] md:h-[540px] flex items-center justify-center overflow-visible"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {episodes.map((ep, idx) => {
                  const style = getCardStyle(idx)
                  const isCenter = idx === activeIndex

                  return (
                    <div
                      key={ep.id || idx}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (isCenter) {
                          setSelectedEpisode(ep)
                          setIsPlaying(true)
                        } else {
                          setActiveIndex(idx)
                        }
                      }}
                      className="absolute inset-0 m-auto w-[270px] sm:w-[320px] md:w-[370px] lg:w-[400px] h-[380px] sm:h-[440px] md:h-[500px] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-slate-900 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group shadow-2xl"
                      style={style}
                    >
                      {/* Full Click Hit-Area for Side Cards */}
                      {!isCenter && (
                        <button
                          type="button"
                          aria-label={`Show episode ${idx + 1}`}
                          onClick={(e) => {
                            e.stopPropagation()
                            setActiveIndex(idx)
                          }}
                          className="absolute inset-0 z-30 size-full bg-transparent border-0 cursor-pointer p-0 focus:outline-none"
                        />
                      )}

                      {/* Episode Image */}
                      {ep.image ? (
                        <img
                          src={ep.image}
                          alt={ep.title || 'Podcast Episode'}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                          loading="lazy"
                        />
                      ) : (
                        <div className="size-full flex items-center justify-center bg-slate-900 text-slate-600">
                          <Mic className="size-16 opacity-30 text-blue-400" />
                        </div>
                      )}

                      {/* Vignette Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/30 pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] shadow-md">
                          {ep.tag}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/80 text-white backdrop-blur-md border border-white/15">
                          {ep.duration}
                        </span>
                      </div>

                      {/* Center Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="size-16 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] p-[2px] shadow-2xl group-hover:scale-110 transition-transform duration-300">
                          <div className="size-full rounded-full bg-slate-950/80 backdrop-blur-md flex items-center justify-center text-white">
                            <Play className="size-6 fill-current ml-1 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Info Overlay on Card */}
                      <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white z-10 pointer-events-none space-y-1.5">
                        <h4 className="text-base sm:text-lg font-bold line-clamp-2 leading-snug drop-shadow-md">
                          {ep.title}
                        </h4>
                        {ep.guest?.name && (
                          <p className="text-xs text-slate-300 line-clamp-1 drop-shadow-sm font-medium">
                            {ep.guest.name} {ep.guest.title ? `· ${ep.guest.title}` : ''}
                          </p>
                        )}
                      </div>

                      {/* Center Card Click Indicator Hover Effect */}
                      {isCenter && (
                        <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform">
                            <Play className="size-3.5 fill-current text-blue-600" />
                            <span>Play Episode</span>
                          </span>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Active Episode Details & Counter */}
              {activeEpisode && (
                <div className="text-center max-w-xl mx-auto px-4 space-y-1.5">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {activeEpisode.title}
                  </h3>
                  {activeEpisode.subtitle && (
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
                      {activeEpisode.subtitle}
                    </p>
                  )}
                  {episodes.length > 1 && (
                    <p className="text-xs text-slate-500 font-mono pt-1">
                      {activeIndex + 1} of {episodes.length}
                    </p>
                  )}
                </div>
              )}

              {/* Navigation Arrows: Styled with Logo Gradient */}
              {episodes.length > 1 && (
                <div className="flex items-center justify-center gap-4 pt-3">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Episode"
                    className="size-12 sm:size-14 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-rose-600/35 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
                  >
                    <ChevronLeft className="size-6 sm:size-7 text-white stroke-[2.5] group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Episode"
                    className="size-12 sm:size-14 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-rose-600/35 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
                  >
                    <ChevronRight className="size-6 sm:size-7 text-white stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              )}

              {/* Thumbnail Strip */}
              {episodes.length > 1 && (
                <div className="pt-4 flex items-center justify-center gap-2 overflow-x-auto max-w-2xl mx-auto py-2 px-4 no-scrollbar">
                  {episodes.map((ep, idx) => (
                    <button
                      key={ep.id || idx}
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Jump to episode ${idx + 1}`}
                      className={`relative size-12 sm:size-14 rounded-2xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        idx === activeIndex
                          ? 'border-blue-600 ring-2 ring-blue-500/30 scale-105'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      {ep.image ? (
                        <img
                          src={ep.image}
                          alt={ep.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="size-full bg-slate-900 flex items-center justify-center">
                          <Mic className="size-5 text-slate-400" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* ─── GRID VIEW ALTERNATIVE ─── */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {episodes.map((ep) => (
                <div
                  key={ep.id}
                  onClick={() => {
                    setSelectedEpisode(ep)
                    setIsPlaying(true)
                  }}
                  className="group/card relative rounded-3xl p-[1px] bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] transition-all duration-300 shadow-2xs hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                >
                  <div className="rounded-[23px] bg-white overflow-hidden h-full flex flex-col justify-between group">
                    <div>
                      {/* Video Still with Play Overlay & Duration */}
                      <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                        {ep.image ? (
                          <img
                            src={ep.image}
                            alt={ep.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="size-full flex items-center justify-center bg-slate-900 text-slate-600">
                            <Mic className="size-10 opacity-30 text-blue-400" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20" />

                        {/* Topic Badge on Top Left */}
                        <div className="absolute top-3.5 left-3.5 max-w-[170px]">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-2.5 py-1 rounded-full shadow-md line-clamp-1">
                            {ep.tag}
                          </span>
                        </div>

                        {/* Duration Badge on Top Right */}
                        <span className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/75 text-white backdrop-blur-md border border-white/10">
                          {ep.duration}
                        </span>

                        {/* Big Center Play Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="size-12 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:text-white transition-all">
                            <Play className="size-5 fill-current ml-0.5" />
                          </div>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 space-y-2">
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2">
                          {ep.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-light line-clamp-2">
                          {ep.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Guest Footer */}
                    <div className="p-5 pt-0 border-t border-slate-100 flex items-center gap-3 mt-3">
                      <div className="relative size-9 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0 flex items-center justify-center text-xs font-bold text-blue-600">
                        {ep.guest.avatar ? (
                          <img
                            src={ep.guest.avatar}
                            alt={ep.guest.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <span>{ep.guest.name ? ep.guest.name.charAt(0) : 'P'}</span>
                        )}
                      </div>
                      <div className="leading-tight">
                        <span className="text-xs font-bold text-slate-900 block group-hover:text-blue-700 transition-colors">
                          {ep.guest.name}
                        </span>
                        <span className="text-[10px] text-slate-500 block truncate max-w-[170px]">
                          {ep.guest.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ─── SECTION 5: MEDIA ENQUIRIES & NOMINATE A PEER ─── */}
      <section className="py-16 sm:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Left Card: Media Enquiries */}
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div>
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                    MEDIA &amp; EDITORIAL ENQUIRIES
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  Want to feature a story or interview?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  For press coverage, keynote interviews, joint podcasts, or media collaborations, get in touch directly with our editorial desk.
                </p>
              </div>

              <div>
                <GalaxyButton
                  href="/contact"
                  variant="transparent-light"
                  size="sm"
                >
                  Contact Editorial Team
                </GalaxyButton>
              </div>
            </div>

            {/* Right Card: Nominate a Peer */}
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div>
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                    NOMINATE AN ENTREPRENEUR
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  Entrepreneurs worth hearing from
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  If you know a Peer with a remarkable turnaround, breakthrough collaboration, or leadership story, let our producers know.
                </p>
              </div>

              <div>
                <GalaxyButton
                  onClick={() => setNominateOpen(true)}
                  variant="primary"
                  size="sm"
                >
                  Nominate a Peer Story
                </GalaxyButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 6: SIGNATURE LUXURY CLOSING HERO BANNER ─── */}
      <section
        id="download-unity"
        className="relative py-20 lg:py-28 text-white overflow-hidden border-t border-slate-800"
        style={{
          background: 'linear-gradient(135deg, rgb(6, 17, 44) 0%, rgb(19, 7, 31) 50%, rgb(38, 5, 19) 100%)',
        }}
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* SVG Orbital Geometric Lines Background */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-25 overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 600 600" fill="none" className="w-full h-full text-white/30" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 450 A 420 420 0 0 1 550 50" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 120 520 A 500 500 0 0 1 600 120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <path d="M 220 580 A 460 460 0 0 1 580 220" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="280" y1="220" x2="380" y2="120" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="280" cy="220" r="4.5" fill="#7DD3FC" />
            <circle cx="280" cy="220" r="10" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col items-start space-y-5">

              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                  AMPLIFY YOUR VOICE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                Build Your Business. Build Your Relationships. Build Your Circle.
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                <p>
                  Access our national distribution network, Vyapaar Jagat media channels, and peer podcast broadcasts to share your story with entrepreneurs who understand the climb.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
                  <p className="text-sky-200 font-medium text-xs sm:text-sm">
                    • 120+ Episodes · 5 Publishing Channels · 1M+ Community Reach.
                  </p>
                  <p className="text-white font-bold text-xs sm:text-sm">Join the authentic conversation today.</p>
                
</div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <GalaxyButton
                  href="/membership"
                  variant="default"
                  size="lg"
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                >
                  Apply for Membership
                </GalaxyButton>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ─── MODAL: EPISODE MEDIA PLAYER ─── */}
      {selectedEpisode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setSelectedEpisode(null)}
              className="absolute top-4 right-4 z-10 size-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="size-5" />
            </button>

            {/* Media Player Header */}
            {selectedEpisode.youtubeVideoId ? (
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedEpisode.youtubeVideoId}?autoplay=1&rel=0`}
                  title={selectedEpisode.title}
                  className="size-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative h-60 sm:h-72 w-full bg-slate-950">
                {selectedEpisode.image ? (
                  <Image
                    src={selectedEpisode.image}
                    alt={selectedEpisode.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="size-full flex items-center justify-center bg-slate-900 text-slate-600">
                    <Mic className="size-16 opacity-30 text-blue-400" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-600 text-white uppercase tracking-wider inline-block mb-1.5">
                    {selectedEpisode.tag} · {selectedEpisode.duration}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                    {selectedEpisode.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {selectedEpisode.subtitle}
                  </p>
                </div>
              </div>
            )}

            {/* Audio Control Bar Simulation (Shown for audio episodes) */}
            {!selectedEpisode.youtubeVideoId && (
              <div className="bg-slate-900 p-4 px-6 text-white flex items-center gap-4 border-b border-slate-800">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="size-10 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white flex items-center justify-center shrink-0 transition-transform hover:scale-105 cursor-pointer"
                >
                  <Play className={`size-4 fill-current ${isPlaying ? 'opacity-80' : ''}`} />
                </button>

                <div className="flex-1">
                  <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] w-1/3 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                    <span>14:20</span>
                    <span>{selectedEpisode.duration}</span>
                  </div>
                </div>

                <Volume2 className="size-4 text-slate-400" />
              </div>
            )}

            {/* Show Notes & Guest Info */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="relative size-11 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0 flex items-center justify-center text-sm font-bold text-blue-600">
                  {selectedEpisode.guest.avatar ? (
                    <Image
                      src={selectedEpisode.guest.avatar}
                      alt={selectedEpisode.guest.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span>{selectedEpisode.guest.name ? selectedEpisode.guest.name.charAt(0) : 'P'}</span>
                  )}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {selectedEpisode.guest.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {selectedEpisode.guest.title}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Discussion Points
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-light">
                  {selectedEpisode.showNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Streaming Platform CTAs */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={selectedEpisode.spotifyUrl || 'https://open.spotify.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Listen on Spotify</span>
                    <ExternalLink className="size-3" />
                  </a>
                  <a
                    href={
                      selectedEpisode.youtubeUrl ||
                      (selectedEpisode.youtubeVideoId
                        ? `https://www.youtube.com/watch?v=${selectedEpisode.youtubeVideoId}`
                        : 'https://youtube.com')
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="size-3" />
                  </a>
                </div>

                <button
                  onClick={() => setSelectedEpisode(null)}
                  className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Close Player
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── MODAL: NOMINATE A PEER ─── */}
      {nominateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-7 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setNominateOpen(false)}
              className="absolute top-4 right-4 z-10 size-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="size-4" />
            </button>

            <div className="mb-6 space-y-1">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                NOMINATE AN ENTREPRENEUR
              </span>
              <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                Tell us who we should feature
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Nominate a founder or business leader whose story deserves wider visibility.
              </p>
            </div>

            {nominationSent ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="size-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900">
                  Nomination Received!
                </h4>
                <p className="text-xs text-slate-600 font-light">
                  Thank you. Our editorial team will review and get in touch with the Circle Director.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNominateSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-800 block mb-1">
                    Entrepreneur Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={nomineeName}
                    onChange={(e) => setNomineeName(e.target.value)}
                    placeholder="e.g. Anand Patel"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-800 block mb-1">
                    Business / Enterprise <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={nomineeBusiness}
                    onChange={(e) => setNomineeBusiness(e.target.value)}
                    placeholder="e.g. Sahyog Plastics, Ahmedabad"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-800 block mb-1">
                    What makes their story remarkable? <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={nomineeStory}
                    onChange={(e) => setNomineeStory(e.target.value)}
                    placeholder="Briefly describe what they built or overcame..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md hover:shadow-lg"
                  >
                    Submit Nomination
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

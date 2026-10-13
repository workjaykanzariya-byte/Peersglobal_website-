'use client'

import React, { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '@/app/sections.css'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  Search,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronRight as ChevronBreadcrumb,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  Share2,
  Check,
} from 'lucide-react'
import {
  SuccessStory as VideoStory,
  FALLBACK_STORIES,
  fetchSuccessStories,
  buildYoutubeEmbedUrl,
} from '@/lib/api/success-stories'

// Clean YouTube video title helper
function cleanVideoTitle(raw: string): string {
  if (!raw) return ''
  return raw
    .replace(/#\w+/g, '') // remove hashtags like #peersglobal #education
    .replace(/\(\s*@\w+\s*\)/g, '') // remove (@handle)
    .replace(/@\w+/g, '') // remove remaining @handle
    .replace(/\(\s*\)/g, '') // remove empty ()
    .replace(/\s+/g, ' ')
    .replace(/[-–—:]\s*$/, '') // remove trailing colon or dash
    .trim()
}

// Fallback video title when YouTube oEmbed or custom title is not yet available
function getFallbackVideoTitle(story: VideoStory): string {
  if (
    story.storyTitle &&
    story.storyTitle.trim() !== '' &&
    story.storyTitle !== 'Collaborative Growth Journey' &&
    story.storyTitle !== 'Success Story' &&
    story.storyTitle !== 'Founder Success Story'
  ) {
    return story.storyTitle
  }

  if (story.personName && story.personName.trim() !== '' && story.personName !== 'Success Story') {
    if (story.company && story.company !== 'Peers Global Circle' && story.company !== 'Peers Global Member Company') {
      return `${story.personName} (${story.company}) — Peer Collaboration Story`
    }
    return `${story.personName} — Peer Collaboration Story`
  }

  return 'Founder Breakthrough & Collaboration Journey'
}

export function SuccessStoryClient() {
  const [videoStories, setVideoStories] = useState<VideoStory[]>(FALLBACK_STORIES)
  const [loadingVideos, setLoadingVideos] = useState(true)
  const [selectedVideo, setSelectedVideo] = useState<VideoStory | null>(null)
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [copied, setCopied] = useState(false)
  const [videoTitles, setVideoTitles] = useState<Record<string, string>>({})
  const [visibleCount, setVisibleCount] = useState<number>(9)

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  // Load all dynamic video stories from backend API
  useEffect(() => {
    let isMounted = true
    async function loadData() {
      try {
        const data = await fetchSuccessStories(0)
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setVideoStories(data)
        }
      } catch (err) {
        console.warn('Using fallback success stories:', err)
      } finally {
        if (isMounted) setLoadingVideos(false)
      }
    }
    loadData()
    return () => {
      isMounted = false
    }
  }, [])

  // Fetch real YouTube video titles from YouTube oEmbed and cache them
  useEffect(() => {
    if (typeof window === 'undefined') return

    // 1. Read existing cache from localStorage
    let cached: Record<string, string> = {}
    try {
      const stored = localStorage.getItem('peers_yt_titles_v3')
      if (stored) cached = JSON.parse(stored)
    } catch {}

    if (Object.keys(cached).length > 0) {
      setVideoTitles(cached)
    }

    // 2. Identify videos that need title fetching
    const pending = videoStories.filter((s) => {
      const vid = s.youtubeVideoId
      if (!vid || vid.length !== 11) return false
      // If already in cache, skip
      if (cached[vid]) return false
      // If storyTitle already has an explicit custom story title (e.g. fallback stories), skip
      if (
        s.storyTitle &&
        s.storyTitle !== 'Collaborative Growth Journey' &&
        s.storyTitle !== 'Success Story' &&
        !s.storyTitle.includes('— Peer Collaboration Story')
      ) {
        return false
      }
      return true
    })

    if (pending.length === 0) return

    let isMounted = true
    const updated = { ...cached }

    // Fetch titles in concurrency-limited batches of 4
    async function fetchTitles() {
      for (let i = 0; i < pending.length; i += 4) {
        if (!isMounted) break
        const batch = pending.slice(i, i + 4)
        await Promise.all(
          batch.map(async (story) => {
            const vid = story.youtubeVideoId!
            try {
              const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${vid}&format=json`)
              if (res.ok) {
                const data = await res.json()
                if (data?.title) {
                  const cleaned = cleanVideoTitle(data.title)
                  if (cleaned) {
                    updated[vid] = cleaned
                  }
                }
              }
            } catch {
              // fallback remains active
            }
          })
        )
        if (isMounted) {
          setVideoTitles({ ...updated })
          try {
            localStorage.setItem('peers_yt_titles_v3', JSON.stringify(updated))
          } catch {}
        }
      }
    }

    fetchTitles()

    return () => {
      isMounted = false
    }
  }, [videoStories])

  // Resolve the best video title for display
  const resolveVideoTitle = (story: VideoStory): string => {
    if (story.youtubeVideoId && videoTitles[story.youtubeVideoId]) {
      return videoTitles[story.youtubeVideoId]
    }
    return getFallbackVideoTitle(story)
  }

  // Keyboard navigation for video player modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedVideo) return
      if (e.key === 'Escape') {
        setSelectedVideo(null)
      } else if (e.key === 'ArrowRight') {
        handleNextVideo()
      } else if (e.key === 'ArrowLeft') {
        handlePrevVideo()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedVideo, videoStories, activeVideoIndex])

  const handleOpenVideo = (story: VideoStory, index: number) => {
    setSelectedVideo(story)
    setActiveVideoIndex(index)
  }

  const handleNextVideo = () => {
    if (!videoStories.length) return
    const nextIdx = (activeVideoIndex + 1) % videoStories.length
    setActiveVideoIndex(nextIdx)
    setSelectedVideo(videoStories[nextIdx])
  }

  const handlePrevVideo = () => {
    if (!videoStories.length) return
    const prevIdx = (activeVideoIndex - 1 + videoStories.length) % videoStories.length
    setActiveVideoIndex(prevIdx)
    setSelectedVideo(videoStories[prevIdx])
  }

  // Filtered Video Stories based on search
  const filteredVideoStories = useMemo(() => {
    return videoStories.filter((s) => {
      const q = searchQuery.toLowerCase().trim()
      if (!q) return true
      const dynamicTitle = s.youtubeVideoId && videoTitles[s.youtubeVideoId] ? videoTitles[s.youtubeVideoId] : ''
      return (
        s.personName.toLowerCase().includes(q) ||
        (s.company && s.company.toLowerCase().includes(q)) ||
        (s.storyTitle && s.storyTitle.toLowerCase().includes(q)) ||
        (dynamicTitle && dynamicTitle.toLowerCase().includes(q)) ||
        (s.quote && s.quote.toLowerCase().includes(q))
      )
    })
  }, [videoStories, searchQuery, videoTitles])

  // Reset pagination to 9 whenever search query changes
  useEffect(() => {
    setVisibleCount(9)
  }, [searchQuery])

  // Slice stories according to visibleCount (starts with 9)
  const visibleStories = useMemo(() => {
    return filteredVideoStories.slice(0, visibleCount)
  }, [filteredVideoStories, visibleCount])

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-900 font-sans selection:bg-rose-100 selection:text-[#E11D48]">
      
      {/* ── Global SVG Gradient Defs for Icons & Borders ── */}
      <svg width="0" height="0" className="absolute pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <linearGradient id="storyBrandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
        </defs>
      </svg>

      {/* ── Breadcrumbs ── */}
      <div className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <ChevronBreadcrumb className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/stories" className="hover:text-[#1D4ED8] transition-colors">
              Community Life
            </Link>
            <ChevronBreadcrumb className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Success Stories</span>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Verified Case Studies
            </span>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-16 sm:pt-24 pb-16 sm:pb-20">
        {/* Subtle Ambient Background Gradients */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-rose-100/50 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Proof Over Promise • Verified Outcomes</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight max-w-4xl mx-auto leading-[1.12]">
            Real Founders. Real Scale.{' '}
            <span className="brand-gradient-text">Real Success Stories.</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Every story here represents verified outcomes between real entrepreneurs. Discover how confidential peer trust, 
            strategic alliances, and boardroom hot seats unlock multi-crore partnerships and lifelong growth.
          </p>

          {/* 4 Core Hero Stats */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold brand-gradient-text">₹120+ Cr</div>
              <div className="text-xs text-slate-500 font-medium">Collaborative Business Value</div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold brand-gradient-text">10,000+</div>
              <div className="text-xs text-slate-500 font-medium">Verified Active Founders</div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold brand-gradient-text">200+ Cities</div>
              <div className="text-xs text-slate-500 font-medium">Across India &amp; 25+ Global Hubs</div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold brand-gradient-text">100%</div>
              <div className="text-xs text-slate-500 font-medium">Zero-Pitch Non-Transactional Trust</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Search & Filter Controls ── */}
      <section className="sticky top-[49px] z-20 bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Counter Label */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-[#EFF6FF] text-[#1D4ED8] border border-[#1D4ED8]/20">
                <Play className="w-3 h-3 fill-current" />
                {visibleCount < filteredVideoStories.length
                  ? `Showing ${Math.min(visibleCount, filteredVideoStories.length)} of ${filteredVideoStories.length} Videos`
                  : `${filteredVideoStories.length} Video Case Studies`}
              </span>
              {searchQuery && (
                <span className="text-xs text-slate-500 font-medium">
                  matching &ldquo;<span className="text-slate-900 font-semibold">{searchQuery}</span>&rdquo;
                </span>
              )}
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search founder, company, quote..."
                className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 focus:border-[#1D4ED8] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Area ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">

        {/* ── VIDEO CASE STUDIES WALL ── */}
        <section id="video-stories" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider brand-gradient-text">
                Direct from the Boardroom
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1">
                Video Success Stories &amp; Case Studies
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Hear enterprise founders share how circle relationships unlocked new markets, JV contracts, and capital syndicates.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 shrink-0">
              Showing {Math.min(visibleCount, filteredVideoStories.length)} of {filteredVideoStories.length} Videos
            </span>
          </div>

          {filteredVideoStories.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200/80 space-y-3">
              <Play className="w-8 h-8 text-slate-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-900">No video case studies found</h3>
              <p className="text-xs text-slate-500">Try searching for a different founder name or company.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {visibleStories.map((video, idx) => {
                  const videoTitle = resolveVideoTitle(video)
                  const founderName = video.personName && video.personName !== 'Success Story' ? video.personName : 'Founder Member'

                  return (
                    <div
                      key={video.id}
                      onClick={() => handleOpenVideo(video, idx)}
                      className="group bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-1"
                    >
                      {/* Video Thumbnail with Hover Overlay */}
                      <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                        <Image
                          src={video.coverImageUrl || video.youtubeThumbnailUrl || `https://img.youtube.com/vi/${video.youtubeVideoId}/hqdefault.jpg`}
                          alt={videoTitle || founderName}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Video Category/Tag Pill */}
                        <div className="absolute top-3 left-3">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
                            Video Story
                          </span>
                        </div>
                      </div>

                      {/* Content Details */}
                      <div className="p-5 flex flex-col justify-between space-y-4 flex-1">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-semibold text-slate-500 truncate max-w-[180px]">
                              {video.company || 'Peers Global Circle'}
                            </span>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 shrink-0">
                              Video Story
                            </span>
                          </div>

                          {/* Video Title - Primary Heading */}
                          <h3
                            className="text-base sm:text-[17px] font-serif font-bold text-slate-950 group-hover:text-[#1D4ED8] transition-colors leading-snug line-clamp-2"
                            title={videoTitle}
                          >
                            {videoTitle}
                          </h3>

                          {video.quote ? (
                            <p className="text-xs text-slate-600 line-clamp-2 italic leading-relaxed pt-0.5">
                              “{video.quote}”
                            </p>
                          ) : (
                            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                              Verified breakthrough and peer collaboration story.
                            </p>
                          )}
                        </div>

                        {/* Author Bar */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                          <div>
                            <div className="font-bold text-slate-900 text-xs truncate max-w-[145px]">
                              {founderName}
                            </div>
                            <div className="text-[10.5px] text-slate-500 truncate max-w-[145px]">
                              {video.designation || video.company || 'Founder & CEO'}
                            </div>
                          </div>

                          <span className="text-xs font-bold text-[#1D4ED8] group-hover:translate-x-0.5 transition-transform flex items-center gap-1 shrink-0">
                            Watch Video <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Load More Videos Button */}
              {visibleCount < filteredVideoStories.length && (
                <div className="pt-10 flex flex-col items-center justify-center space-y-3">
                  <GalaxyButton
                    onClick={() => setVisibleCount((prev) => prev + 9)}
                    size="lg"
                    icon={false}
                  >
                    Load More Videos
                  </GalaxyButton>
                  <p className="text-xs text-slate-500 font-medium">
                    Showing {Math.min(visibleCount, filteredVideoStories.length)} of {filteredVideoStories.length} video case studies
                  </p>
                </div>
              )}

              {filteredVideoStories.length > 9 && visibleCount >= filteredVideoStories.length && (
                <div className="pt-8 text-center text-xs font-semibold text-slate-400">
                  ✦ All {filteredVideoStories.length} Video Stories Loaded ✦
                </div>
              )}
            </>
          )}
        </section>

      </div>

      {/* ── VIDEO PLAYER MODAL (IMAGE 2 DESIGN SYSTEM) ── */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-3 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-white rounded-3xl sm:rounded-[32px] border border-slate-200/90 shadow-[0_25px_70px_rgba(15,23,42,0.25)] overflow-hidden my-auto max-h-[94vh] flex flex-col"
          >
            {/* Top Rainbow Accent Stripe (Matching Image 2) */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#1D4ED8] via-[#7C3AED] to-[#E11D48] shrink-0" />

            {/* Top Navigation Bar: ← View All Stories & Actions */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-3 sm:py-3.5 border-b border-slate-100 bg-white/95 backdrop-blur-sm shrink-0">
              <button
                onClick={() => setSelectedVideo(null)}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors group"
              >
                <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-0.5 transition-transform" />
                <span>View All Stories</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-950 border border-slate-200/90 hover:bg-slate-50 transition-colors shadow-2xs"
                  title="Share this Story"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-slate-500" />
                      <span>Share Story</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-1 pl-1">
                  <button
                    onClick={handlePrevVideo}
                    title="Previous Story (Left Arrow)"
                    className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors shadow-2xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextVideo}
                    title="Next Story (Right Arrow)"
                    className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors shadow-2xs"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    title="Close (Esc)"
                    className="w-8 h-8 rounded-full border border-slate-200 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 text-slate-700 flex items-center justify-center transition-colors ml-1 shadow-2xs"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Scrollable Body Content */}
            <div className="overflow-y-auto px-5 sm:px-8 py-5 sm:py-6 space-y-6">

              {/* Centered Golden/Amber Official Badge (Exact match to Image 2: ✦ OFFICIAL NOMINEE • 2026) */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase bg-[#FFFBEB] text-[#B45309] border border-[#FDE68A] shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>OFFICIAL VERIFIED STORY • 2026</span>
                </div>
              </div>

              {/* Founder Header Row: Circular Avatar + Details */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left pt-1">
                {/* Circular Avatar with Glowing Ring */}
                <div className="relative size-20 sm:size-24 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-lg ring-2 ring-blue-100 bg-slate-100">
                  <Image
                    src={
                      selectedVideo.coverImageUrl ||
                      selectedVideo.youtubeThumbnailUrl ||
                      `https://img.youtube.com/vi/${selectedVideo.youtubeVideoId}/hqdefault.jpg`
                    }
                    alt={selectedVideo.personName}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>

                {/* Name, Company, Category, Bio */}
                <div className="space-y-1 flex-1">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 tracking-tight leading-snug">
                    {selectedVideo.personName && selectedVideo.personName !== 'Success Story'
                      ? selectedVideo.personName
                      : (selectedVideo.company || 'Founder Member')}
                  </h2>
                  
                  <div className="text-sm sm:text-base font-medium text-slate-600">
                    {selectedVideo.company ? selectedVideo.company : 'Peers Global Member Company'}
                    {selectedVideo.designation ? ` • ${selectedVideo.designation}` : ''}
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-[#E11D48] pt-0.5">
                    {selectedVideo.company ? `${selectedVideo.company.toUpperCase()} CIRCLE` : 'GUJARAT & NATIONAL EXECUTIVE CIRCLE'}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl italic pt-1">
                    &ldquo;{selectedVideo.quote || 'Connecting with peers across the globe transformed our strategic roadmap, boardroom perspective, and business outcomes.'}&rdquo;
                  </p>
                </div>
              </div>

              {/* Dedicated Video Title Section Above Player */}
              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60 inline-flex items-center gap-1.5">
                    <Play className="w-2.5 h-2.5 fill-current" />
                    Video Case Study
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[11px] text-slate-500 font-medium">Watch Full Story</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 leading-snug">
                  {resolveVideoTitle(selectedVideo)}
                </h3>
              </div>

              {/* Embedded Video Player */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-md border border-slate-200">
                <iframe
                  src={buildYoutubeEmbedUrl(selectedVideo.youtubeVideoId || selectedVideo.youtubeUrl)}
                  title={resolveVideoTitle(selectedVideo)}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Bottom Action Area (Matching "✦ CAST YOUR VOTE / Your endorsement matters" in Image 2) */}
              <div className="pt-2 pb-2 text-center space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-[#1D4ED8] border border-blue-200/80 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  <span>EXPERIENCE PEERS GLOBAL</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 tracking-tight">
                  Your breakthrough matters
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
                  One confidential conversation can unlock lifelong scale • Non-Transactional Peer Covenant
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <GalaxyButton href="/apply">
                    Apply for Circle Membership
                  </GalaxyButton>
                  <Link
                    href="/circle-meeting-experience"
                    className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 transition-all shadow-2xs"
                  >
                    Learn About Circle Meetings
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

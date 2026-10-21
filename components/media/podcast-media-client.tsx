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
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [nominateOpen, setNominateOpen] = useState(false)

  // Fetch dynamic episodes from Unity backend on mount
  const loadEpisodes = async () => {
    setIsLoading(true)
    try {
      const apiData = await fetchFeaturedEpisodes(12)
      setEpisodes(apiData || [])
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

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
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



      {/* ─── SECTION 4: LISTEN AND WATCH (FEATURED EPISODES) ─── */}
      <section id="channels" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                  FEATURED EPISODES
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                Latest from our channels
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Click any episode to stream audio, review discussion notes, or watch full video recordings.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={loadEpisodes}
                disabled={isLoading}
                title="Refresh from Admin Panel"
                className="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer group"
              >
                <RotateCcw className={`size-3.5 text-slate-500 group-hover:text-[#1D4ED8] transition-colors ${isLoading ? 'animate-spin text-blue-600' : ''}`} />
                <span className="group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {isLoading ? 'Updating...' : 'Refresh'}
                </span>
              </button>
              <a
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>View All on Unity</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Episode Content: Loading / Empty / Grid */}
          {isLoading ? (
            <div className="text-center py-20 px-4 space-y-4">
              <div className="size-10 rounded-full border-2 border-blue-600 border-t-transparent animate-spin mx-auto" />
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Loading episodes &amp; broadcasts...
              </p>
            </div>
          ) : episodes.length === 0 ? (
            <div className="text-center py-20 px-6 bg-[#FAFBFD] rounded-3xl border border-slate-200/90 shadow-2xs space-y-4 max-w-xl mx-auto my-4">
              <div className="size-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center mx-auto text-blue-600 shadow-xs">
                <Mic className="size-7" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  No Podcast Episodes Published Yet
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-md mx-auto">
                  Episodes, podcasts, and video broadcasts uploaded from the admin panel will appear here automatically.
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
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                          <Image
                            src={ep.image}
                            alt={ep.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                          <Image
                            src={ep.guest.avatar}
                            alt={ep.guest.name}
                            fill
                            className="object-cover"
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
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                >
                  DOWNLOAD UNITY APP
                </GalaxyButton>

                <GalaxyButton
                  href="/membership"
                  variant="transparent"
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

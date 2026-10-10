'use client'

import React, { useRef, useState, useEffect } from 'react'
import { BookOpen, Share2, Users } from 'lucide-react'
import { GlowCard } from '@/components/ui/glow-card'

export function WhatIsSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true
      videoRef.current.muted = true
    }
  }, [])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  return (
    <section className="fd-what-is-mindvalley" id="fd-what-is-mindvalley">
      <div className="fd-what-is-mindvalley__inner">
        <div className="fd-what-is-mindvalley__intro">
          {/* Eyebrow & Titles */}
          <div className="fd-what-is-mindvalley__titles">
            <p className="fd-what-is-mindvalley__eyebrow brand-gradient-text" data-fd-rise="0">
              WHAT IS PEERS GLOBAL?
            </p>

            <div className="fd-what-is-mindvalley__copy">
              <h2 className="fd-what-is-mindvalley__headline" data-fd-rise="80">
                <span>More than a network.</span>{' '}
                <span>A way of growing together.</span>
              </h2>
              <div className="space-y-3 max-w-3xl mx-auto">
                <p className="fd-what-is-mindvalley__paragraph" data-fd-rise="160">
                  PEERS GLOBAL is built around a simple belief: Entrepreneurs grow differently when they stop building in isolation. It brings entrepreneurs into structured relationships where business experience, knowledge, introductions, problem-solving, support and contribution can move between people.
                </p>
                <p className="text-sm sm:text-base text-slate-600 font-medium" data-fd-rise="200">
                  The structure is designed around three dimensions of entrepreneurial growth:
                </p>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars (LSR) Cards with Glow Effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl pt-4 text-left mx-auto">
            {/* Pillar 1 - Learning */}
            <GlowCard className="w-full">
              <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4 h-full">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-indigo-500/10 border border-blue-500/25 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300">
                    <BookOpen className="w-6 h-6 text-[#1D4ED8]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[#0062D2] uppercase">Pillar 01</span>
                    <h3 className="text-lg font-bold text-[#0f131a] tracking-tight group-hover:text-blue-700 transition-colors">
                      L — Learning
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                    Learning from people who have actually lived the experience. Practical wisdom over pure theory.
                  </p>
                </div>
              </div>
            </GlowCard>

            {/* Pillar 2 - Sharing */}
            <GlowCard className="w-full">
              <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4 h-full">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/15 to-pink-500/10 border border-rose-500/25 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-rose-500/40 transition-all duration-300">
                    <Share2 className="w-6 h-6 text-[#E11D48]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[#E11D48] uppercase">Pillar 02</span>
                    <h3 className="text-lg font-bold text-[#0f131a] tracking-tight group-hover:text-rose-600 transition-colors">
                      S — Sharing
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                    Sharing knowledge, relationships, opportunities and experience without friction or competition.
                  </p>
                </div>
              </div>
            </GlowCard>

            {/* Pillar 3 - Relationships */}
            <GlowCard className="w-full">
              <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4 h-full">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/15 to-purple-500/10 border border-indigo-500/25 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-indigo-500/40 transition-all duration-300">
                    <Users className="w-6 h-6 text-[#6366F1]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[#6366F1] uppercase">Pillar 03</span>
                    <h3 className="text-lg font-bold text-[#0f131a] tracking-tight group-hover:text-indigo-600 transition-colors">
                      R — Relationships
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                    Building trusted relationships that become stronger over time. Partners in business, friends in life.
                  </p>
                </div>
              </div>
            </GlowCard>
          </div>

          {/* Closing Highlight */}
          <div className="text-center mt-2 max-w-xl mx-auto" data-fd-rise="400">
            <p className="text-base sm:text-lg font-serif italic text-slate-800 font-medium">
              &ldquo;LSR is not a theory to read about. It is something to experience.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Cinematic Showcase Video Player */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="relative aspect-[16/9] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200/80 cursor-pointer group select-none"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src="/videos/peersglobal.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover block"
            onEnded={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/videos/peersglobal.mp4" type="video/mp4" />
            <source src="/videos/leadership-hero-bg.mp4" type="video/mp4" />
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>








        </div>
      </div>
    </section>
  )
}

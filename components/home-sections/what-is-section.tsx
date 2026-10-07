'use client'

import React, { useRef, useState, useEffect } from 'react'

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

          {/* 3 Core Pillars (LSR) matching layout */}
          <div className="fd-what-is-mindvalley__stats !gap-8 md:!gap-12 lg:!gap-16">
            {/* Pillar 1 - Learning */}
            <div className="fd-what-is-mindvalley__stat max-w-[340px] text-center" data-fd-rise="240">
              <h3 className="fd-what-is-mindvalley__stat-value !text-2xl sm:!text-[28px] !leading-tight font-bold">
                L — Learning
              </h3>
              <p className="fd-what-is-mindvalley__stat-label !text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                Learning from people who have actually lived the experience.
              </p>
            </div>

            {/* Pillar 2 - Sharing */}
            <div className="fd-what-is-mindvalley__stat max-w-[340px] text-center" data-fd-rise="300">
              <h3 className="fd-what-is-mindvalley__stat-value !text-2xl sm:!text-[28px] !leading-tight font-bold">
                S — Sharing
              </h3>
              <p className="fd-what-is-mindvalley__stat-label !text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                Sharing knowledge, relationships, opportunities and experience.
              </p>
            </div>

            {/* Pillar 3 - Relationships */}
            <div className="fd-what-is-mindvalley__stat max-w-[340px] text-center" data-fd-rise="360">
              <h3 className="fd-what-is-mindvalley__stat-value !text-2xl sm:!text-[28px] !leading-tight font-bold">
                R — Relationships
              </h3>
              <p className="fd-what-is-mindvalley__stat-label !text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                Building trusted relationships that become stronger over time.
              </p>
            </div>
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

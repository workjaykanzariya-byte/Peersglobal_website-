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

          {/* Top Left Unmute / Mute Pill */}
          <button
            type="button"
            onClick={toggleMute}
            className="absolute top-4 left-4 md:top-6 md:left-6 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md text-white text-xs md:text-sm font-semibold transition-all border border-white/20 shadow-lg"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
                <span>Unmute</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
                <span>Mute</span>
              </>
            )}
          </button>

          {/* Center Play/Pause Floating Circle Badge */}
          <div
            className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
              isPlaying ? 'opacity-0 group-hover:opacity-100 bg-black/10' : 'opacity-100 bg-black/25'
            }`}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white text-[#0f131a] flex items-center justify-center shadow-2xl backdrop-blur-md transform transition-transform group-hover:scale-105">
              {isPlaying ? (
                <svg className="w-6 h-6 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-7 h-7 md:w-9 md:h-9 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
          </div>




        </div>
      </div>
    </section>
  )
}

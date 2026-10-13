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

          {/* 3 Core Pillars (LSR - Learning, Sales, Resources) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-12 max-w-5xl mx-auto w-full items-start pt-2">
            {/* Pillar 1 - Learning */}
            <div className="flex flex-col items-center text-center group" data-fd-rise="240">
              <div className="w-full max-w-[280px] sm:max-w-[320px] h-14 sm:h-16 px-6 rounded-2xl sm:rounded-[22px] bg-gradient-to-r from-[#FFF176] via-[#FFD6A5] to-[#FFA6DE] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center border border-white/70 select-none">
                <h3 className="text-2xl sm:text-[28px] font-black tracking-tight text-slate-900 leading-none">
                  Learning
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-700 mt-4 font-normal leading-relaxed max-w-[280px]">
                Growth through knowledge, mentorship, and shared experiences.
              </p>
            </div>

            {/* Pillar 2 - Sales */}
            <div className="flex flex-col items-center text-center group" data-fd-rise="300">
              <div className="w-full max-w-[280px] sm:max-w-[320px] h-14 sm:h-16 px-6 rounded-2xl sm:rounded-[22px] bg-gradient-to-r from-[#00BCD4] via-[#00BFA5] to-[#FFD54F] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center border border-white/70 select-none">
                <h3 className="text-2xl sm:text-[28px] font-black tracking-tight text-slate-900 leading-none">
                  Sales
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-700 mt-4 font-normal leading-relaxed max-w-[280px]">
                Real business through referrals, networking, and collaborations.
              </p>
            </div>

            {/* Pillar 3 - Resources */}
            <div className="flex flex-col items-center text-center group" data-fd-rise="360">
              <div className="w-full max-w-[280px] sm:max-w-[320px] h-14 sm:h-16 px-6 rounded-2xl sm:rounded-[22px] bg-gradient-to-r from-[#B9F6CA] via-[#B2EBF2] to-[#90CAF9] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center border border-white/70 select-none">
                <h3 className="text-2xl sm:text-[28px] font-black tracking-tight text-slate-900 leading-none">
                  Resources
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-700 mt-4 font-normal leading-relaxed max-w-[280px]">
                Tools, media, and platforms to support and scale your business.
              </p>
            </div>
          </div>

          {/* Our Core Belief */}
          <div className="text-center mt-6 sm:mt-8 max-w-2xl mx-auto space-y-2" data-fd-rise="400">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Our Core Belief
            </h4>
            <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
              We believe with confidence that any business can grow - when it focuses on Learning, Sales, and Resources.
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

'use client'

import React, { useRef, useState } from 'react'

export function WhatIsSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

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
              WHAT PEERS GLOBAL IS
            </p>

            <div className="fd-what-is-mindvalley__copy">
              <h2 className="fd-what-is-mindvalley__headline" data-fd-rise="80">
                <span>A leadership organisation,</span>{' '}
                <span>not a networking group.</span>
              </h2>
              <p className="fd-what-is-mindvalley__paragraph" data-fd-rise="160">
                Built on the LSR Growth Model — Learning, Sales and Resources — with a mission to enhance the lives of one million entrepreneurs.
              </p>
            </div>
          </div>

          {/* 3 Core Pillars matching Mindvalley stats layout */}
          <div className="fd-what-is-mindvalley__stats !gap-8 md:!gap-12 lg:!gap-16">
            {/* Pillar 1 */}
            <div className="fd-what-is-mindvalley__stat max-w-[340px] text-center" data-fd-rise="240">
              <h3 className="fd-what-is-mindvalley__stat-value !text-2xl sm:!text-[28px] !leading-tight font-bold">
                Your Circle. Your Inner Board.
              </h3>
              <p className="fd-what-is-mindvalley__stat-label !text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                20–40 curated entrepreneurs. Category exclusivity, so there is no competition inside the room.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="fd-what-is-mindvalley__stat max-w-[340px] text-center" data-fd-rise="300">
              <h3 className="fd-what-is-mindvalley__stat-value !text-2xl sm:!text-[28px] !leading-tight font-bold">
                1 Action = 1 Life Impacted.
              </h3>
              <p className="fd-what-is-mindvalley__stat-label !text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                Most communities measure activity. We measure impact.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="fd-what-is-mindvalley__stat max-w-[340px] text-center" data-fd-rise="360">
              <h3 className="fd-what-is-mindvalley__stat-value !text-2xl sm:!text-[28px] !leading-tight font-bold">
                Partners in Business. Friends in Life.
              </h3>
              <p className="fd-what-is-mindvalley__stat-label !text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                Two Family Meetups a year. A Confidential Forum. Relationships measured in decades.
              </p>
            </div>
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
            defaultMuted
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

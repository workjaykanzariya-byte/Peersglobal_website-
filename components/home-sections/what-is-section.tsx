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

      {/* Cinematic Showcase Video Player matching Mindvalley design */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="relative aspect-[16/9] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-black border border-slate-200/80 cursor-pointer group"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src="/videos/peers-global-earth-loop.mp4"
            poster="/images/conclave.png"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover block"
          />

          {/* Play/Pause Button Overlay on Hover */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              isPlaying ? 'opacity-0 group-hover:opacity-100 bg-black/20' : 'opacity-100 bg-black/35'
            }`}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 text-[#0f131a] flex items-center justify-center shadow-2xl backdrop-blur-md transform transition-transform group-hover:scale-105">
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

          {/* Unmute / Mute Toggle Pill */}
          <button
            type="button"
            onClick={toggleMute}
            className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs md:text-sm font-medium transition-colors border border-white/10"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
                <span>Unmute</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
                <span>Mute</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

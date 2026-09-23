'use client'

import React, { useRef, useState } from 'react'

export function TrustedWorldwideSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

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

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white font-sans text-center">
      <div className="max-w-[800px] mx-auto mb-10 flex flex-col items-center gap-4">
        <p className="text-xs md:text-sm font-semibold tracking-widest text-[#6B7280] uppercase">
          TRUSTED WORLDWIDE
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#0F131A] leading-tight tracking-tight">
          Recognized worldwide as the gold standard in transformation
        </h2>
        <p className="text-base md:text-lg text-[#4B5563] leading-relaxed max-w-[720px]">
          From leading media platforms like CNN, CBS to influential voices like Jay Shetty and
          Impact Theory, Mindvalley is recognized worldwide for empowering people to transform their
          mind, body, and soul—unlocking their fullest potential and leading extraordinary lives.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div
          className="relative w-full aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-black cursor-pointer group"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src="https://assets.mindvalley.com/api/v1/assets/e248f794-93c1-453e-b72f-b4e30006647d.mp4"
            poster="https://a.storyblok.com/f/312081/10cb9e594e/s6_video_arena.jpg"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Unmute / Mute Pill Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              toggleMute()
            }}
            className="absolute top-5 left-5 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white text-xs md:text-sm font-medium transition-colors"
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

          {/* Subtitle text in bottom-center */}
          <div className="absolute inset-x-0 bottom-16 md:bottom-20 z-10 text-center pointer-events-none px-4">
            <p className="text-white text-base md:text-xl font-semibold drop-shadow-lg tracking-wide">
              in the fields of meditation,
            </p>
          </div>

          {/* Floating Lower-Left Trainer Badge */}
          <div className="absolute bottom-5 left-5 z-20 flex items-center gap-3.5 p-2 pr-5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-left shadow-xl">
            <img
              src="https://a.storyblok.com/f/312081/c1ff1ebd27/prog_the-art-of-manifesting.webp/m/264x0/filters:format(webp):quality(80)"
              alt="The Art of Manifesting"
              className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <p className="text-white text-xs md:text-sm font-semibold leading-tight">
                Regan Hillyer
              </p>
              <p className="text-[#D1D5DB] text-[10px] md:text-xs leading-tight mt-0.5">
                The Art of Manifesting
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

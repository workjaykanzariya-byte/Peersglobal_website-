'use client'

import React, { useRef, useState } from 'react'

export function QuestSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

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
    <section className="fd-world-class-quest">
      <div className="fd-world-class-quest__bg" aria-hidden="true" />
      <div className="fd-world-class-quest__inner">
        <div className="fd-world-class-quest__titles">
          <p className="fd-world-class-quest__eyebrow" data-fd-rise="0">
            110+ WORLD-CLASS QUESTS
          </p>
          <h2 className="fd-world-class-quest__headline" data-fd-rise="80">
            Every Mentor Designs a Quest
          </h2>
          <p className="fd-world-class-quest__body" data-fd-rise="160">
            A Quest is a multi-day program that upgrades your mind in under 20 minutes a day.
            One short lesson, one small action, every single day. It’s why Mindvalley Quests
            have some of the highest completion rates in the industry.
          </p>
        </div>
      </div>

      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto 80px' }}>
        <div
          className="fd-world-class-quest__player-wrapper group cursor-pointer relative"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src="https://assets.mindvalley.com/api/v1/assets/94ea9adc-b946-4a46-9bb8-33059e1daa03.mp4"
            poster="https://a.storyblok.com/f/312081/1920x1080/32d2a4a457/poster_world-class-quest-v2.webp"
            className="w-full h-full object-cover block"
            playsInline
            onEnded={() => setIsPlaying(false)}
          />

          {/* Play/Pause Button Overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              isPlaying ? 'opacity-0 hover:opacity-100 bg-black/20' : 'opacity-100 bg-black/25'
            }`}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 text-[#0f131a] flex items-center justify-center shadow-2xl backdrop-blur-md transform transition-transform group-hover:scale-105">
              {isPlaying ? (
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-9 h-9 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
          </div>

          {/* Sound / Mute Toggle Button */}
          {isPlaying && (
            <button
              type="button"
              onClick={toggleMute}
              className="absolute bottom-5 right-5 w-11 h-11 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-md hover:bg-black/80 transition-colors z-10"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

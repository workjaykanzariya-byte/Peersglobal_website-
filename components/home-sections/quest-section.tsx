'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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
    <section className="fd-what-is-mindvalley !py-20 md:!py-28 !px-6 md:!px-12" id="lsr-section">
      <div className="fd-what-is-mindvalley__inner !mb-12">
        <div className="fd-what-is-mindvalley__intro !gap-8">
          {/* Eyebrow & Titles following the exact 'What Peers Global Is' font styling */}
          <div className="fd-what-is-mindvalley__titles !gap-5">
            <p className="fd-what-is-mindvalley__eyebrow brand-gradient-text" data-fd-rise="0">
              THE LEADERSHIP PATHWAY
            </p>

            <div className="fd-what-is-mindvalley__copy !w-full !max-w-[880px] !gap-4">
              <h2 className="fd-what-is-mindvalley__headline" data-fd-rise="80">
                <span>You can come here to grow.</span>{' '}
                <span>You can also grow into someone who helps others grow.</span>
              </h2>
              <div className="space-y-2 max-w-3xl mx-auto">
                <p className="fd-what-is-mindvalley__paragraph !text-base sm:!text-[18px] !leading-relaxed" data-fd-rise="160">
                  PEERS GLOBAL creates pathways for entrepreneurs who want to contribute beyond their own business.
                </p>
                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed" data-fd-rise="200">
                  From participating in a Circle to taking responsibility for one, leadership can develop through service, contribution and experience. Leadership is not simply a bigger title — it is a greater responsibility for the people around you.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars: Service, Contribution, Experience */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl mx-auto mt-2 text-center">
            {/* Service */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-white/80 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-500/15 border border-amber-500/30 text-amber-600 font-bold flex items-center justify-center text-xl shadow-sm mx-auto mb-4">
                  S
                </div>
                <span className="text-[11px] uppercase tracking-widest text-amber-600 font-semibold block mb-1">Pillar One</span>
                <h3 className="fd-what-is-mindvalley__stat-value !text-3xl sm:!text-[32px] !leading-tight font-bold mb-3">
                  Service
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] font-normal leading-relaxed">
                  From participating in a Circle to taking responsibility for one, leadership begins with selfless service to fellow entrepreneurs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-amber-600 font-medium">
                <span>Lead By Serving</span>
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              </div>
            </div>

            {/* Contribution */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-white/80 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-indigo-500/15 border border-blue-500/30 text-blue-600 font-bold flex items-center justify-center text-xl shadow-sm mx-auto mb-4">
                  C
                </div>
                <span className="text-[11px] uppercase tracking-widest text-blue-600 font-semibold block mb-1">Pillar Two</span>
                <h3 className="fd-what-is-mindvalley__stat-value !text-3xl sm:!text-[32px] !leading-tight font-bold mb-3">
                  Contribution
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] font-normal leading-relaxed">
                  Creating pathways for entrepreneurs who want to contribute beyond their own business, turning collective momentum into shared success.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-medium">
                <span>Elevate The Room</span>
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-white/80 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/15 to-pink-500/15 border border-rose-500/30 text-rose-600 font-bold flex items-center justify-center text-xl shadow-sm mx-auto mb-4">
                  E
                </div>
                <span className="text-[11px] uppercase tracking-widest text-rose-600 font-semibold block mb-1">Pillar Three</span>
                <h3 className="fd-what-is-mindvalley__stat-value !text-3xl sm:!text-[32px] !leading-tight font-bold mb-3">
                  Experience
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] font-normal leading-relaxed">
                  Leadership is not simply a bigger title. It is a greater responsibility for the people around you, honed through real experience.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-rose-600 font-medium">
                <span>Greater Responsibility</span>
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              </div>
            </div>
          </div>

          {/* Anchor statement & CTA Button matching design standards */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 pb-2 border-t border-slate-200/80 w-full max-w-5xl mx-auto mt-4">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Closing line</p>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-[#0F131A] italic tracking-wide">
                &ldquo;The question is not only: &lsquo;How far can I go?&rsquo; It is also: &lsquo;How many people can move forward because I chose to lead?&rsquo;&rdquo;
              </p>
            </div>
            <Link
              href="/leadership"
              className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:from-[#1E40AF] hover:to-[#BE123C] text-white px-8 py-3.5 text-base font-semibold shadow-lg shadow-blue-600/25 hover:shadow-red-500/25 hover:scale-105 transition-all text-center group"
            >
              <span>EXPLORE LEADERSHIP</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Cinematic Showcase Video Player matching 'What Peers Global Is' */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="relative aspect-[16/9] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-black border border-slate-200/80 cursor-pointer group"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src="/videos/leadership-hero-bg.mp4"
            poster="/images/lsr-city-sunrise.jpg"
            className="w-full h-full object-cover block"
            playsInline
            onEnded={() => setIsPlaying(false)}
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

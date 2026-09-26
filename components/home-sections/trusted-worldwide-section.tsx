'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function TrustedWorldwideSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
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
    <section className="fd-what-is-mindvalley !bg-white !py-20 md:!py-24 !px-6 md:!px-12" id="who-we-are">
      <div className="fd-what-is-mindvalley__inner !mb-12">
        <div className="fd-what-is-mindvalley__intro !gap-8">
          {/* Eyebrow & Titles matching standard Mindvalley typography */}
          <div className="fd-what-is-mindvalley__titles !gap-6">
            <p className="fd-what-is-mindvalley__eyebrow brand-gradient-text">
              WHO WE ARE
            </p>

            <div className="fd-what-is-mindvalley__copy !w-full !max-w-[840px] !gap-5">
              <h2 className="fd-what-is-mindvalley__headline">
                <span>A global community of entrepreneurs</span>{' '}
                <span>who choose to grow together.</span>
              </h2>

              <p className="fd-what-is-mindvalley__paragraph !text-base sm:!text-[18px] !leading-relaxed">
                Peers Global brings together entrepreneurs and business leaders from across industries, cities and countries into one connected community.
              </p>

              <p className="fd-what-is-mindvalley__paragraph !text-base sm:!text-[18px] !leading-relaxed">
                We call our members Peers. A Peer is an entrepreneur who believes in building trusted relationships, contributing to others, and growing together. Peers meet in Trusted Circles, collaborate through the Unity App, learn from one another, create opportunities for one another, and carry the community forward through leadership.
              </p>

              <p className="fd-what-is-mindvalley__paragraph !text-base sm:!text-[18px] !leading-relaxed font-semibold italic text-[#0F131A] pt-1">
                &ldquo;Everything here is built on one belief: entrepreneurs should not have to build alone.&rdquo;
              </p>

              {/* CTA Button with signature brand gradient */}
              <div className="pt-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:from-[#1E40AF] hover:to-[#BE123C] text-white px-8 py-3.5 text-base font-semibold shadow-lg shadow-blue-600/25 hover:shadow-red-500/25 hover:scale-105 transition-all group"
                >
                  <span>Explore Peers Global</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Media Showcase */}
      <div className="max-w-[1200px] mx-auto">
        <div
          className="relative w-full aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-black cursor-pointer group border border-slate-200/80"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src="/videos/leadership-hero-bg.mp4"
            poster="/images/who-we-are-boardroom.jpg"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
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

          {/* Unmute / Mute Pill Button */}
          <button
            type="button"
            onClick={toggleMute}
            className="absolute top-5 left-5 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs md:text-sm font-medium transition-colors border border-white/10"
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

          {/* Subtitle text in bottom-center */}
          <div className="absolute inset-x-0 bottom-6 md:bottom-8 z-10 text-center pointer-events-none px-4">
            <p className="text-white text-sm sm:text-base md:text-lg font-medium drop-shadow-lg tracking-wide bg-black/40 backdrop-blur-sm inline-block px-5 py-2 rounded-full border border-white/10">
              Partners in Business. Friends in Life.
            </p>
          </div>

          {/* Floating Lower-Left Badge */}
          <div className="absolute bottom-5 left-5 z-20 flex items-center gap-3 p-2.5 pr-5 rounded-2xl bg-black/65 backdrop-blur-md border border-white/15 text-left shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 p-1 shrink-0">
              <Image
                src="/images/logo-icon-only.png"
                alt="Peers Global Emblem"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-white text-xs md:text-sm font-semibold leading-tight">
                Peers Global Conclave
              </p>
              <p className="text-[#D1D5DB] text-[10px] md:text-xs leading-tight mt-0.5">
                Where Founders Become Partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  ArrowRight,
  Users,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Building2,
  Globe2,
} from 'lucide-react'

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
        <div className="fd-what-is-mindvalley__intro !gap-8 flex flex-col items-center text-center">
          {/* Eyebrow & Titles matching standard Mindvalley typography */}
          <div className="fd-what-is-mindvalley__titles !gap-6 flex flex-col items-center">
            <p className="fd-what-is-mindvalley__eyebrow brand-gradient-text">
              THE TRUTH EVERY ENTREPRENEUR KNOWS
            </p>

            <div className="fd-what-is-mindvalley__copy !w-full !max-w-[840px] !gap-5 flex flex-col items-center text-center">
              <h2 className="fd-what-is-mindvalley__headline text-center">
                <span>Building a business can be exciting.</span>{' '}
                <span>Building one alone can be exhausting.</span>
              </h2>
            </div>
          </div>

          {/* Subheading / Copy */}
          <p className="text-base sm:text-lg md:text-xl text-cool-grey-600 max-w-3xl leading-relaxed font-normal text-center mx-auto">
            Peers Global brings together founders and business leaders from across industries, cities, and countries into one connected, high-trust ecosystem.
          </p>

          {/* 3 Core Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl pt-4 text-left mx-auto">
            
            {/* Card 1: The Inner Board */}
            <div className="animated-glow-card group" tabIndex={0} role="article">
              <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="cardGradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="50%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                </defs>
                <path
                  className="animated-border-path"
                  d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                />
              </svg>
              <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-indigo-500/10 border border-blue-500/25 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="iconGradUsers" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="url(#iconGradUsers)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="9" cy="7" r="4" stroke="url(#iconGradUsers)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="url(#iconGradUsers)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#iconGradUsers)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f131a] tracking-tight group-hover:text-blue-700 transition-colors">
                    The Inner Board
                  </h3>
                  <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                    Curated Circle tables with category exclusivity, providing confidential peer advisory without competition.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Give First Principle */}
            <div className="animated-glow-card group" tabIndex={0} role="article">
              <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="cardGradientStroke2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="50%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                </defs>
                <path
                  className="animated-border-path animated-border-path-2"
                  d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                />
              </svg>
              <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/15 to-pink-500/10 border border-rose-500/25 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-rose-500/40 transition-all duration-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="iconGradHeart" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#E11D48" />
                          <stop offset="100%" stopColor="#1D4ED8" />
                        </linearGradient>
                      </defs>
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" stroke="url(#iconGradHeart)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9" stroke="url(#iconGradHeart)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="m14 15 2 2" stroke="url(#iconGradHeart)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f131a] tracking-tight group-hover:text-rose-600 transition-colors">
                    Give First Principle
                  </h3>
                  <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                    Growth driven by authentic contribution, verified introductions, and collaborative joint outcomes.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Connected Ecosystem */}
            <div className="animated-glow-card group" tabIndex={0} role="article">
              <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="cardGradientStroke3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="50%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                </defs>
                <path
                  className="animated-border-path animated-border-path-3"
                  d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                />
              </svg>
              <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/15 to-purple-500/10 border border-indigo-500/25 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-indigo-500/40 transition-all duration-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="iconGradGlobe" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <circle cx="12" cy="12" r="10" stroke="url(#iconGradGlobe)" strokeWidth="2" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" stroke="url(#iconGradGlobe)" strokeWidth="2" />
                      <path d="M2 12h20" stroke="url(#iconGradGlobe)" strokeWidth="2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f131a] tracking-tight group-hover:text-indigo-700 transition-colors">
                    Connected Ecosystem
                  </h3>
                  <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                    Continuous engagement via the Unity App, regional retreats, conclaves, and lifelong friendships.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Inspirational Philosophy Quote */}
          <div className="pt-2">
            <p className="text-base sm:text-lg italic font-medium text-slate-800 bg-blue-50/60 border border-blue-100/80 px-6 py-3 rounded-full inline-block">
              &ldquo;Everything here is built on one belief: entrepreneurs should not have to build alone.&rdquo;
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <GalaxyButton
              href="/about"
              size="lg"
            >
              Explore Peers Global
            </GalaxyButton>
          </div>
        </div>
      </div>
    </section>
  )
}

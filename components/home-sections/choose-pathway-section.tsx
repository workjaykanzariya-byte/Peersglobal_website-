'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { GalaxyButton } from '@/components/ui/galaxy-button'

interface JourneyStep {
  step: string
  title: string
  description: string
  image: string
  link: string
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: '01',
    title: 'Looking for business connections?',
    description: 'Find entrepreneurs who understand what you are building and turn relationships into action.',
    image: '/images/unity-creatives/Post 2.png',
    link: '/circles/find',
  },
  {
    step: '02',
    title: 'Want to learn & contribute?',
    description: 'Move beyond theory. Learn from lived experience and share what you know with fellow peers.',
    image: '/images/section_image/circle-meeting.png',
    link: '/circles/find',
  },
  {
    step: '03',
    title: 'Looking for your next collaboration?',
    description: 'Create meaningful partnerships, mutual introductions and joint opportunities without friction.',
    image: '/images/who-we-are-friends.jpg',
    link: '/circles/find',
  },
  {
    step: '04',
    title: 'A room where you don’t explain from the start',
    description: 'You may have a different stage, story or goals — but you never have to arrive as someone else.',
    image: '/images/who-we-are-impact.jpg',
    link: '/circles/find',
  },
  {
    step: '05',
    title: 'Come as the entrepreneur you are',
    description: 'Discover what becomes possible with the right people around you. You were never meant to build alone.',
    image: '/images/leadership-climbers-hero.jpg',
    link: '/circles/find',
  },
]

export function ChoosePathwaySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [activeStep, setActiveStep] = useState<number>(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleMotionChange)

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener('change', handleMotionChange)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="the-journey"
      className="w-full text-white py-24 px-6 md:px-12 relative overflow-hidden font-sans"
      style={{
        background: 'linear-gradient(90deg, rgb(6, 17, 44) 0%, rgb(19, 7, 31) 50%, rgb(38, 5, 19) 100%)',
        fontFamily: "'Google Sans Flex', sans-serif",
      }}
      aria-label="The Journey"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#2e0854]/40 via-[#3b0764]/30 to-[#4c0519]/25 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(67,16,102,0.25),transparent)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="max-w-[840px] mx-auto text-center mb-16 flex flex-col items-center gap-4 relative z-10">
        <p
          className="text-sm md:text-base font-semibold tracking-wider uppercase brand-gradient-text"
          style={{ letterSpacing: '0.46px' }}
        >
          THE THRESHOLD
        </p>
        <h2
          className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight"
          style={{ letterSpacing: '0.15px' }}
        >
          You were never meant to build alone.
        </h2>
        <div className="space-y-2 max-w-2xl mx-auto text-slate-300 text-sm md:text-base leading-relaxed">
          <p>
            You may be at a different stage. You may have a different story. You may have different goals.
          </p>
          <p className="text-white/90 font-medium">
            You do not have to arrive as someone else. Come as the entrepreneur you are. And discover what may become possible with the right people around you.
          </p>
        </div>
      </div>

      {/* 5 Journey Steps List */}
      <div className="max-w-[920px] mx-auto flex flex-col gap-4 mb-16 relative z-10">
        {JOURNEY_STEPS.map((item, index) => {
          const isActive = activeStep === index

          return (
            <Link
              key={item.step}
              href={item.link}
              onMouseEnter={() => setActiveStep(index)}
              style={{
                background: 'linear-gradient(180deg, #f8f9fe 0%, #dde9fd 100%)',
              }}
              className={`group flex items-center justify-between p-4 md:p-5 rounded-2xl border transition-all duration-300 text-decoration-none shadow-md ${
                isActive
                  ? 'border-blue-500 shadow-xl shadow-black/25 scale-[1.015] ring-2 ring-blue-500/30'
                  : 'border-white/80 hover:border-white hover:shadow-lg'
              }`}
            >
              <div className="flex items-center gap-4 md:gap-6 min-w-0">
                {/* Step badge */}
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-bold text-sm md:text-base shrink-0 transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-md shadow-blue-600/30'
                      : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                  }`}
                >
                  {item.step}
                </div>

                {/* Thumbnail */}
                <div className="w-16 h-12 md:w-24 md:h-16 rounded-xl overflow-hidden shrink-0 relative border border-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-bold tracking-wider text-blue-600">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 mt-0.5 group-hover:text-slate-900 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action indicator */}
              <div className="flex items-center gap-3 shrink-0 ml-4">
                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${isActive
                      ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] border-transparent text-white shadow-md'
                      : 'border-slate-200 bg-slate-50 text-slate-500 group-hover:bg-slate-100 group-hover:text-slate-800'
                  }`}
                >
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Bottom CTA Block */}
      <div className="max-w-[820px] mx-auto text-center flex flex-col items-center gap-6 relative z-10">
        <p className="text-base md:text-xl font-medium text-white/90 italic tracking-wide">
          &ldquo;You were never meant to build alone.&rdquo;
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <GalaxyButton
            href="/circles/find"
            size="lg"
            aria-label="Find Your Circle"
          >
            FIND YOUR CIRCLE
          </GalaxyButton>
          <GalaxyButton
            href="/why-peers-global"
            variant="transparent"
            size="lg"
            aria-label="Explore Peers Global"
          >
            EXPLORE PEERS GLOBAL
          </GalaxyButton>
          <Link
            href="/unity"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm md:text-base font-semibold text-cyan-300 hover:text-cyan-200 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 transition-all shadow-sm cursor-pointer"
            aria-label="Download Unity"
          >
            <span>DOWNLOAD UNITY →</span>
          </Link>
        </div>
      </div>

      {/* Dynamic Sticky Bottom Bar - Sleek Floating Glass Pill */}
      <div
        className={`fixed bottom-3 sm:bottom-6 left-3 right-3 sm:left-1/2 sm:-translate-x-1/2 sm:w-auto sm:max-w-[960px] z-40 bg-[#090D1A]/95 border border-white/15 backdrop-blur-xl rounded-2xl sm:rounded-full py-2.5 px-3.5 sm:py-3 sm:px-6 shadow-[0_10px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(29,78,216,0.25)] transition-all duration-300 ${
          isVisible && !isDismissed
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          <div className="text-left min-w-0 flex-1">
            <p className="text-[13px] sm:text-sm font-semibold text-white tracking-tight truncate sm:whitespace-normal">
              You were never meant to build alone.
            </p>
            <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-1 sm:line-clamp-none mt-0.5">
              Come as the entrepreneur you are. Discover what is possible with the right people around you.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <GalaxyButton
              href="/circles/find"
              size="sm"
              aria-label="Find Your Circle"
              className="text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 whitespace-nowrap shrink-0 font-bold tracking-wider"
            >
              FIND YOUR CIRCLE
            </GalaxyButton>

            <button
              type="button"
              onClick={() => setIsDismissed(true)}
              aria-label="Dismiss banner"
              className="size-7 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            >
              <X className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

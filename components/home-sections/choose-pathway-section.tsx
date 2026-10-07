'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

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
    image: '/images/unity-hero-phones.jpg',
    link: '/circles/find',
  },
  {
    step: '02',
    title: 'Want to learn & contribute?',
    description: 'Move beyond theory. Learn from lived experience and share what you know with fellow peers.',
    image: '/images/circle-meeting.png',
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
      className="w-full bg-[#061320] text-white py-24 px-6 md:px-12 relative overflow-hidden font-sans"
      style={{ fontFamily: "'Google Sans Flex', sans-serif" }}
      aria-label="The Journey"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/10 to-rose-600/10 blur-[120px] rounded-full pointer-events-none"
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
              className={`group flex items-center justify-between p-4 md:p-5 rounded-2xl border transition-all duration-300 text-decoration-none ${
                isActive
                  ? 'bg-white/[0.08] border-blue-500/60 shadow-lg shadow-blue-900/25 scale-[1.01]'
                  : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
              }`}
            >
              <div className="flex items-center gap-4 md:gap-6 min-w-0">
                {/* Step badge */}
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-bold text-sm md:text-base shrink-0 transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-md shadow-blue-600/40'
                      : 'bg-white/10 text-white/80 group-hover:bg-white/15'
                  }`}
                >
                  {item.step}
                </div>

                {/* Thumbnail */}
                <div className="w-16 h-12 md:w-24 md:h-16 rounded-xl overflow-hidden shrink-0 relative border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-medium tracking-wider text-[#38BDF8]">
                      Stage {index + 1}
                    </span>
                  </div>
                  <h3 className="text-base md:text-xl font-semibold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#9CA3AF] mt-0.5 group-hover:text-white/80 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action indicator */}
              <div className="flex items-center gap-3 shrink-0 ml-4">
                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] border-transparent text-white shadow-md'
                      : 'border-white/20 text-white/50 group-hover:border-white/40 group-hover:text-white'
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
          <Link
            href="/circles/find"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm md:text-base font-semibold text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            style={{
              backgroundImage: 'linear-gradient(135deg, #1D4ED8 0%, #E11D48 100%)',
              boxShadow: '0 4px 16px rgba(29, 78, 216, 0.4), 0 2px 8px rgba(225, 29, 72, 0.3)',
            }}
            aria-label="Find Your Circle"
          >
            <span>FIND YOUR CIRCLE →</span>
          </Link>
          <Link
            href="/why-peers-global"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm md:text-base font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all shadow-sm cursor-pointer"
            aria-label="Explore Peers Global"
          >
            <span>EXPLORE PEERS GLOBAL →</span>
          </Link>
          <Link
            href="/unity"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm md:text-base font-semibold text-cyan-300 hover:text-cyan-200 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 transition-all shadow-sm cursor-pointer"
            aria-label="Download Unity"
          >
            <span>DOWNLOAD UNITY →</span>
          </Link>
        </div>
      </div>

      {/* Dynamic Sticky Bottom Bar - Appears smoothly when section is active */}
      <div
        className={`fixed bottom-0 inset-x-0 z-50 bg-[#081827]/95 border-t border-white/10 backdrop-blur-xl py-3 md:py-4 px-6 md:px-12 shadow-2xl transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-[1000px] mx-auto flex items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm md:text-base font-semibold text-white">
              You were never meant to build alone.
            </p>
            <p className="text-xs text-[#9CA3AF]">
              Come as the entrepreneur you are. Discover what is possible with the right people around you.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/circles/find"
              className="px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold text-white transition-all shadow-md hover:scale-105 shrink-0"
              style={{
                backgroundImage: 'linear-gradient(135deg, #1D4ED8 0%, #E11D48 100%)',
                boxShadow: '0 4px 14px rgba(29, 78, 216, 0.35)',
              }}
              aria-label="Find Your Circle"
            >
              FIND YOUR CIRCLE →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import Link from 'next/link'

const ROW_1_IMAGES = [
  { src: '/images/leadership-circle-founder.jpg', alt: 'Circle Founder' },
  { src: '/images/section_image/circle-meeting.png', alt: 'Circle Meeting' },
  { src: '/images/peers-avatars/amit-desai.jpg', alt: 'Amit Desai' },
  { src: '/images/who-we-are-friends.jpg', alt: 'Peers Community' },
  { src: '/images/industry-director-speaker.jpg', alt: 'Industry Director' },
  { src: '/images/peers-avatars/neha-kothari.jpg', alt: 'Neha Kothari' },
  { src: '/images/executive-director-hero.jpg', alt: 'Executive Director' },
  { src: '/images/peers-avatars/rajesh-shah.jpg', alt: 'Rajesh Shah' },
  { src: '/images/section_image/conclave.png', alt: 'Peers Conclave' },
  { src: '/images/leadership-climbers-hero.jpg', alt: 'Leaders Climbing' },
]

const ROW_2_IMAGES = [
  { src: '/images/peers-avatars/priya-desai.jpg', alt: 'Priya Desai' },
  { src: '/images/circle-founder-hero.jpg', alt: 'Circle Founder Host' },
  { src: '/images/peers-avatars/anand-sharma.jpg', alt: 'Anand Sharma' },
  { src: '/images/who-we-are-impact.jpg', alt: 'Peer Impact' },
  { src: '/images/peers-avatars/fatima-khan.jpg', alt: 'Fatima Khan' },
  { src: '/images/hot-seat.png', alt: 'Hot Seat Session' },
  { src: '/images/peers-avatars/vikram-patel.jpg', alt: 'Vikram Patel' },
  { src: '/images/leadership-entrepreneurs-meeting.jpg', alt: 'Entrepreneurs Meeting' },
  { src: '/images/peers-avatars/pradeep-joshi.jpg', alt: 'Pradeep Joshi' },
  { src: '/images/section_image/circle-director-hero.jpg', alt: 'Circle Director' },
]

const ROW_3_IMAGES = [
  { src: '/images/who-we-are-inner-board.jpg', alt: 'Advisory Board' },
  { src: '/images/story-amit-sandeep.jpg', alt: 'Peer Collaboration Story' },
  { src: '/images/story-jignesh-rohit.jpg', alt: 'Peer Partnership Story' },
  { src: '/images/story-neha-simran.jpg', alt: 'Entrepreneurs Story' },
  { src: '/images/story-priya-karan.jpg', alt: 'Collaboration Story' },
  { src: '/images/give-first-card.jpg', alt: 'Give First Culture' },
  { src: '/images/who-we-are-boardroom.jpg', alt: 'Boardroom Session' },
  { src: '/images/section_image/executive-director-conclave.jpg', alt: 'Executive Director Conclave' },
  { src: '/images/section_image/circle-roundtable-topdown.jpg', alt: 'Roundtable Meeting' },
  { src: '/images/membership-mountain-closing.jpg', alt: 'Summit Milestone' },
]

export function MeditationsSection() {
  return (
    <section className="fd-med-menu !py-20 md:!py-28" id="fd-med-menu" aria-label="The 1 Million Mission">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-6 mb-14">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#E11D48]">
            THE 1 MILLION MISSION
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F131A] leading-[1.18] max-w-3xl">
          One entrepreneur can change more than a business.
        </h2>

        {/* Core Subtitle / Philosophy */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
          An entrepreneur creates employment, solves problems, supports families, and inspires the next generation to begin.
        </p>

        {/* 3 Structured Benefit / Impact Cards with Signature Animated Gradient Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left mt-4">
          {/* Card 1: Multiplier Effect */}
          <div className="animated-glow-card group" tabIndex={0} role="article">
            <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="medCardGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#E11D48" />
                </linearGradient>
              </defs>
              <path
                className="animated-border-path"
                d="M 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 L 0.8 6 Q 0.8 0.8 6 0.8 Z"
              />
            </svg>
            <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-base border border-blue-200/80 shadow-xs group-hover:scale-110 transition-transform duration-300">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                  Multiplier Effect
                </h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  When one person’s growth creates the possibility for another person’s growth, impact compounds across industries and cities.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: 1M Entrepreneurs */}
          <div className="animated-glow-card group" tabIndex={0} role="article">
            <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="medCardGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#E11D48" />
                </linearGradient>
              </defs>
              <path
                className="animated-border-path animated-border-path-2"
                d="M 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 L 0.8 6 Q 0.8 0.8 6 0.8 Z"
              />
            </svg>
            <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 font-bold flex items-center justify-center text-base border border-rose-200/80 shadow-xs group-hover:scale-110 transition-transform duration-300">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-rose-600 transition-colors">
                  1M Entrepreneurs
                </h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  PEERS GLOBAL’s stated mission is to impact 1 million entrepreneurs by 2030 through governed Circles and real collaboration.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: 1 Action = 1 Life */}
          <div className="animated-glow-card group" tabIndex={0} role="article">
            <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="medCardGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#E11D48" />
                </linearGradient>
              </defs>
              <path
                className="animated-border-path animated-border-path-3"
                d="M 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 L 0.8 6 Q 0.8 0.8 6 0.8 Z"
              />
            </svg>
            <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 font-bold flex items-center justify-center text-base border border-indigo-200/80 shadow-xs group-hover:scale-110 transition-transform duration-300">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-indigo-700 transition-colors">
                  1 Action = 1 Life
                </h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  Every introduction made, every perspective shared, and every seat taken at a Circle changes a founder’s journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Link
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            style={{
              backgroundImage: 'linear-gradient(135deg, #1D4ED8 0%, #E11D48 100%)',
              boxShadow: '0 4px 16px rgba(29, 78, 216, 0.4), 0 2px 8px rgba(225, 29, 72, 0.3)',
            }}
            href="/leadership"
            aria-label="Explore Leadership"
          >
            <span>Explore Leadership</span>
          </Link>

          <Link
            className="animated-glow-btn group inline-flex p-[1.5px] rounded-full transition-all"
            href="/start-a-circle"
            aria-label="Start a Circle"
            tabIndex={0}
          >
            <svg className="animated-btn-border-svg" viewBox="0 0 100 48" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="btnGradientStrokeMed" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#E11D48" />
                </linearGradient>
              </defs>
              <rect
                className="animated-btn-border-path"
                stroke="url('#btnGradientStrokeMed')"
                x="1"
                y="1"
                width="98"
                height="46"
                rx="23"
              />
            </svg>
            <div className="px-7 py-3.5 rounded-full bg-white/90 border border-[#1D4ED8]/30 group-hover:border-transparent group-hover:bg-[#1D4ED8]/10 transition-all flex items-center gap-2 text-[#1D4ED8] text-sm sm:text-base font-semibold shadow-xs">
              <span>Start a Circle</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="fd-med-menu__rows">
        {/* Row 1 */}
        <div className="fd-med-menu__row">
          {[0, 1, 2, 3].map((copyIndex) => (
            <div
              key={`r1-strip-${copyIndex}`}
              className="fd-med-menu__strip"
              aria-hidden={copyIndex > 0 ? 'true' : undefined}
            >
              {ROW_1_IMAGES.map((img, i) => (
                <img
                  key={`r1-${copyIndex}-${i}`}
                  src={img.src}
                  alt={copyIndex === 0 ? img.alt : ''}
                  width="126"
                  height="126"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Row 2 (reverse) */}
        <div className="fd-med-menu__row fd-med-menu__row--rev">
          {[0, 1, 2, 3].map((copyIndex) => (
            <div
              key={`r2-strip-${copyIndex}`}
              className="fd-med-menu__strip"
              aria-hidden={copyIndex > 0 ? 'true' : undefined}
            >
              {ROW_2_IMAGES.map((img, i) => (
                <img
                  key={`r2-${copyIndex}-${i}`}
                  src={img.src}
                  alt={copyIndex === 0 ? img.alt : ''}
                  width="126"
                  height="126"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Row 3 (alternate speed) */}
        <div className="fd-med-menu__row fd-med-menu__row--alt">
          {[0, 1, 2, 3].map((copyIndex) => (
            <div
              key={`r3-strip-${copyIndex}`}
              className="fd-med-menu__strip"
              aria-hidden={copyIndex > 0 ? 'true' : undefined}
            >
              {ROW_3_IMAGES.map((img, i) => (
                <img
                  key={`r3-${copyIndex}-${i}`}
                  src={img.src}
                  alt={copyIndex === 0 ? img.alt : ''}
                  width="126"
                  height="126"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

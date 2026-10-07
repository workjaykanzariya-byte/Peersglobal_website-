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
    <section className="fd-med-menu" id="fd-med-menu" aria-label="The 1 Million Mission">
      <div className="fd-med-menu__inner">
        <p className="fd-med-menu__eyebrow brand-gradient-text" data-fd-rise="0">
          THE 1 MILLION MISSION
        </p>
        <h2 className="fd-med-menu__headline" data-fd-rise="80">
          One entrepreneur can change more than a business.
        </h2>
        <p className="fd-med-menu__body" data-fd-rise="160">
          An entrepreneur can create employment. Solve a problem. Build a product. Teach another person. Support a family. Create an opportunity. Help another entrepreneur grow. Impact a community. And sometimes inspire another person to begin.
        </p>
        <p className="fd-med-menu__subbody" data-fd-rise="200">
          PEERS GLOBAL&apos;s stated mission is to impact 1 million entrepreneurs by 2030. But the number is not the whole story. The real question is: What happens when one person&apos;s growth creates the possibility for another person&apos;s growth? Then another. And another.
        </p>

        {/* Badges / Counters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6" data-fd-rise="220">
          <div className="bg-slate-100/80 border border-slate-200/80 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm">
            1M+ Entrepreneurs to Impact by 2030
          </div>
          <div className="bg-slate-100/80 border border-slate-200/80 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm">
            1 Action = 1 Life Impacted
          </div>
        </div>

        <div className="fd-med-menu__cta" data-fd-rise="240">
          <Link className="fd-med-menu__btn" href="/leadership" aria-label="Explore Leadership">
            Explore Leadership
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
            <div className="px-6 py-3.5 rounded-full bg-transparent border border-[#1D4ED8]/30 group-hover:border-transparent group-hover:bg-[#1D4ED8]/15 transition-all flex items-center gap-2 text-[#1D4ED8] text-sm font-semibold">
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

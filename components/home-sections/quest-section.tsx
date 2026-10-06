'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface LsrPillar {
  letter: string
  pillarNumber: string
  title: string
  description: string
  tag: string
  // Color configuration
  activeBg: string
  activeText: string
  accentColor: string
  iconBgInactive: string
  iconBorderInactive: string
  iconTextInactive: string
}

const PILLARS: LsrPillar[] = [
  {
    letter: 'L',
    pillarNumber: 'Pillar One',
    title: 'Learn',
    description:
      'Masterclasses, playbooks, mentorship, and practical knowledge from entrepreneurs who have already built what you are building.',
    tag: 'Practitioner-Led Knowledge',
    activeBg: 'bg-gradient-to-br from-[#F59E0B] via-[#EA580C] to-[#D97706]',
    activeText: 'brand-gradient-text',
    accentColor: 'bg-amber-500',
    iconBgInactive: 'bg-gradient-to-br from-amber-500/20 via-orange-500/15 to-amber-500/10',
    iconBorderInactive: 'border-amber-500/35',
    iconTextInactive: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600',
  },
  {
    letter: 'S',
    pillarNumber: 'Pillar Two',
    title: 'Sales',
    description:
      'Referrals, introductions, customer connections and market access — real business from people who understand your business.',
    tag: 'High-Trust Pipelines',
    activeBg: 'bg-gradient-to-br from-[#1D4ED8] via-[#3B82F6] to-[#1E40AF]',
    activeText: 'brand-gradient-text',
    accentColor: 'bg-blue-500',
    iconBgInactive: 'bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-blue-500/10',
    iconBorderInactive: 'border-blue-500/35',
    iconTextInactive: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600',
  },
  {
    letter: 'R',
    pillarNumber: 'Pillar Three',
    title: 'Resources',
    description:
      'Talent, capital, partners, suppliers, technology and expertise, available through the community whenever you need them.',
    tag: 'Collective Infrastructure',
    activeBg: 'bg-gradient-to-br from-[#E11D48] via-[#F43F5E] to-[#BE123C]',
    activeText: 'brand-gradient-text',
    accentColor: 'bg-rose-500',
    iconBgInactive: 'bg-gradient-to-br from-rose-500/20 via-pink-500/15 to-rose-500/10',
    iconBorderInactive: 'border-rose-500/35',
    iconTextInactive: 'text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600',
  },
]

export function QuestSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="fd-what-is-mindvalley !py-20 md:!py-28 !px-6 md:!px-12" id="lsr-section">
      <div className="fd-what-is-mindvalley__inner !mb-12">
        <div className="fd-what-is-mindvalley__intro !gap-8">
          {/* Eyebrow & Titles following the exact 'What Peers Global Is' font styling */}
          <div className="fd-what-is-mindvalley__titles !gap-5">
            <p className="fd-what-is-mindvalley__eyebrow brand-gradient-text" data-fd-rise="0">
              LEARN, SALES, RESOURCES
            </p>

            <div className="fd-what-is-mindvalley__copy !w-full !max-w-[880px] !gap-4">
              <h2 className="fd-what-is-mindvalley__headline" data-fd-rise="80">
                <span>LSR — the three things</span>{' '}
                <span>every business runs on.</span>
              </h2>
              <p className="fd-what-is-mindvalley__paragraph !text-base sm:!text-[18px] !leading-relaxed" data-fd-rise="160">
                Masterclasses, referrals, capital, and expertise — all of it built on relationships.
              </p>
            </div>
          </div>

          {/* 3 Core Pillars Accordion Panels */}
          <div
            className="w-full max-w-5xl mx-auto mt-2 flex flex-col min-[820px]:flex-row gap-[14px] min-[820px]:h-[400px]"
            role="region"
            aria-label="LSR Core Pillars Accordion"
          >
            {PILLARS.map((p, idx) => {
              const isActive = active === idx

              return (
                <div
                  key={p.title}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isActive}
                  aria-label={`${p.title} pillar panel`}
                  onMouseEnter={() => setActive(idx)}
                  onClick={() => setActive(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActive(idx)
                    }
                  }}
                  className={`relative overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4ED8] transition-all select-none duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                    isActive
                      ? `${p.activeBg} text-white shadow-2xl shadow-blue-900/15 min-[820px]:flex-[2.6] min-h-[340px] min-[820px]:min-h-0 border border-transparent`
                      : `bg-white/85 backdrop-blur-md text-slate-800 shadow-lg shadow-blue-900/5 hover:shadow-xl hover:bg-white/95 border border-white/80 min-[820px]:flex-1 min-h-[96px] min-[820px]:min-h-0`
                  }`}
                  style={{
                    minWidth: 0,
                  }}
                >
                  {/* Top Bar: Icon + (Mobile/Collapsed Horizontal Title) */}
                  <div className="flex items-center justify-between w-full shrink-0">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl font-bold transition-all duration-400 shrink-0 shadow-sm ${
                        isActive
                          ? `bg-white shadow-lg`
                          : `${p.iconBgInactive} border ${p.iconBorderInactive}`
                      }`}
                    >
                      <span className={isActive ? p.activeText : p.iconTextInactive}>
                        {p.letter}
                      </span>
                    </div>

                    {/* Small screen horizontal label when collapsed */}
                    {!isActive && (
                      <span className="min-[820px]:hidden text-xl font-bold text-[#0F131A] tracking-tight">
                        {p.title}
                      </span>
                    )}
                  </div>

                  {/* Desktop Inactive State: Vertical Title at Bottom Left */}
                  <div
                    aria-hidden={isActive}
                    className={`hidden min-[820px]:block absolute bottom-6 left-6 pointer-events-none transition-opacity duration-300 ${
                      isActive ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    <p
                      className="text-[28px] font-bold text-[#0F131A] tracking-tight whitespace-nowrap"
                      style={{
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                      }}
                    >
                      {p.title}
                    </p>
                  </div>

                  {/* Active Expanded Content Block with Min-Width to Prevent Text Reflow */}
                  <div
                    className={`mt-auto pt-4 min-[820px]:min-w-[300px] flex flex-col justify-end transition-all duration-500 ease-out ${
                      isActive
                        ? 'opacity-100 translate-y-0 delay-150 pointer-events-auto'
                        : 'opacity-0 translate-y-4 pointer-events-none absolute min-[820px]:static'
                    }`}
                  >
                    <span className="text-[11px] uppercase tracking-widest text-white/90 font-semibold block mb-1">
                      {p.pillarNumber}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight text-white mb-2 tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-white/95 text-xs sm:text-sm font-normal leading-relaxed mb-4">
                      {p.description}
                    </p>

                    <div className="pt-3 border-t border-white/35 flex items-center justify-between text-xs text-white font-medium">
                      <span>{p.tag}</span>
                      <span className="w-2 h-2 rounded-full bg-white shadow-xs"></span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Anchor statement & CTA Button matching design standards */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 pb-2 border-t border-slate-200/80 w-full max-w-5xl mx-auto mt-4">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-[#0F131A] italic tracking-wide text-center sm:text-left">
              &ldquo;Learn. Sales. Resources. All of it built on relationships.&rdquo;
            </p>
            <Link
              href="/membership"
              className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:from-[#1E40AF] hover:to-[#BE123C] text-white px-8 py-3.5 text-base font-semibold shadow-lg shadow-blue-600/25 hover:shadow-red-500/25 hover:scale-105 transition-all text-center group"
            >
              <span>See What Membership Includes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


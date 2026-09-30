'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function QuestSection() {
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

          {/* 3 Core Pillars: Learn, Sales, Resources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl mx-auto mt-2 text-center">
            {/* Learn */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-white/80 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-500/15 border border-amber-500/30 text-amber-600 font-bold flex items-center justify-center text-xl shadow-sm mx-auto mb-4">
                  L
                </div>
                <span className="text-[11px] uppercase tracking-widest text-amber-600 font-semibold block mb-1">Pillar One</span>
                <h3 className="fd-what-is-mindvalley__stat-value !text-3xl sm:!text-[32px] !leading-tight font-bold mb-3">
                  Learn
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] font-normal leading-relaxed">
                  Masterclasses, playbooks, mentorship, and practical knowledge from entrepreneurs who have already built what you are building.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-amber-600 font-medium">
                <span>Practitioner-Led Knowledge</span>
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              </div>
            </div>

            {/* Sales */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-white/80 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-indigo-500/15 border border-blue-500/30 text-blue-600 font-bold flex items-center justify-center text-xl shadow-sm mx-auto mb-4">
                  S
                </div>
                <span className="text-[11px] uppercase tracking-widest text-blue-600 font-semibold block mb-1">Pillar Two</span>
                <h3 className="fd-what-is-mindvalley__stat-value !text-3xl sm:!text-[32px] !leading-tight font-bold mb-3">
                  Sales
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] font-normal leading-relaxed">
                  Referrals, introductions, customer connections and market access — real business from people who understand your business.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-medium">
                <span>High-Trust Pipelines</span>
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-white/80 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/15 to-pink-500/15 border border-rose-500/30 text-rose-600 font-bold flex items-center justify-center text-xl shadow-sm mx-auto mb-4">
                  R
                </div>
                <span className="text-[11px] uppercase tracking-widest text-rose-600 font-semibold block mb-1">Pillar Three</span>
                <h3 className="fd-what-is-mindvalley__stat-value !text-3xl sm:!text-[32px] !leading-tight font-bold mb-3">
                  Resources
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] font-normal leading-relaxed">
                  Talent, capital, partners, suppliers, technology and expertise, available through the community whenever you need them.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-rose-600 font-medium">
                <span>Collective Infrastructure</span>
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              </div>
            </div>
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

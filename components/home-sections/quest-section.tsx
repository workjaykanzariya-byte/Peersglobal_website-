'use client'

import React from 'react'
import { GalaxyButton } from '@/components/ui/galaxy-button'

export function QuestSection() {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-12 bg-gradient-to-b from-white via-slate-50/60 to-white overflow-hidden" id="leadership-pathway">
      {/* Subtle Ambient Background Gradients */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-500/8 via-indigo-500/5 to-rose-500/8 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow */}
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest brand-gradient-text mb-4">
          THE LEADERSHIP PATHWAY
        </p>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-tight mb-8">
          <span className="block">You can come here to grow.</span>
          <span className="block mt-1 sm:mt-2 text-slate-900">
            You can also grow into someone who helps others grow.
          </span>
        </h2>

        {/* Editorial Narrative Paragraphs */}
        <div className="space-y-5 max-w-3xl mb-12">
          <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed">
            PEERS GLOBAL creates pathways for entrepreneurs who want to contribute beyond their own business.
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From participating in a Circle to taking responsibility for one, leadership can develop through service, contribution and experience.
          </p>
        </div>

        {/* Core Principle Callout */}
        <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-2xl p-7 sm:p-9 border border-slate-200/80 shadow-lg shadow-blue-950/5 mb-14 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/10">
          <p className="text-sm sm:text-base text-slate-500 font-medium mb-2">
            Leadership is not simply a bigger title.
          </p>
          <p className="text-xl sm:text-2xl md:text-[26px] font-serif font-bold text-slate-950 leading-snug tracking-tight">
            It is a greater responsibility for the people around you.
          </p>
        </div>

        {/* Closing Line Card */}
        <div className="w-full max-w-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-slate-950/20 mb-12 relative overflow-hidden">
          {/* Subtle cosmic glow accents */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-blue-500/20 rounded-full blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-rose-500/15 rounded-full blur-2xl" />

          <div className="relative z-10 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block">
                The question is not only:
              </span>
              <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-slate-200 font-medium">
                “How far can I go?”
              </p>
            </div>

            <div className="w-12 h-px bg-white/20 mx-auto" />

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-blue-300/80 font-semibold block">
                It is also:
              </span>
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-rose-300">
                “How many people can move forward because I chose to lead?”
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div>
          <GalaxyButton
            href="/leadership"
            size="lg"
            className="text-xs sm:text-sm font-semibold tracking-wider"
          >
            EXPLORE LEADERSHIP
          </GalaxyButton>
        </div>
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Layers,
  HeartHandshake,
} from 'lucide-react'

export function LifeImpactScoreClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2]">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>The Currency</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Life Impact Score</span>
        </div>
      </div>

      {/* ─── 1. HERO (Signature Master Card Architecture Matching Home Page) ─── */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] p-6 sm:p-10 lg:p-14 flex items-center">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            
            {/* Subtle Geometric Orbital Line Art */}
            <div className="absolute -right-20 -top-20 pointer-events-none w-[460px] h-[460px] opacity-[0.04] overflow-hidden">
              <svg viewBox="0 0 600 600" fill="none" className="w-full h-full text-slate-900" xmlns="http://www.w3.org/2000/svg">
                <circle cx="300" cy="300" r="260" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                <circle cx="300" cy="300" r="180" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="300" cy="300" r="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-7">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/70 text-xs font-bold uppercase tracking-wider text-[#0062D2] shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#0062D2]" />
                  <span>Verified Relational Currency</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-3">
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-950 tracking-tight leading-[1.08]">
                    Life Impact Score
                  </h1>
                  <p className="font-serif text-xl sm:text-2xl text-slate-700 italic leading-relaxed">
                    The record of what you have given.
                  </p>
                </div>

                {/* Subtitle / Description */}
                <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                  Logged as it happens. Confirmed by the person you helped.
                </p>

                {/* Feature Chips / Pillar Mini Indicators */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  <div className="px-3 py-2 rounded-xl bg-slate-50/90 border border-slate-200/70 text-[11px] font-semibold text-slate-700 flex items-center gap-1.5 shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0062D2] shrink-0" />
                    <span className="truncate">Immutable</span>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-slate-50/90 border border-slate-200/70 text-[11px] font-semibold text-slate-700 flex items-center gap-1.5 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">Peer Confirmed</span>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-slate-50/90 border border-slate-200/70 text-[11px] font-semibold text-slate-700 flex items-center gap-1.5 shadow-2xs">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="truncate">Live Score</span>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-slate-50/90 border border-slate-200/70 text-[11px] font-semibold text-slate-700 flex items-center gap-1.5 shadow-2xs">
                    <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="truncate">Coin Rewards</span>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    href="/unity"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[#1E4ED8] hover:bg-blue-700 text-white px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider shadow-[0_4px_14px_rgba(30,78,216,0.3)] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/how-to-earn-impact"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/90 hover:bg-white px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-slate-700 transition-all hover:border-slate-300 active:scale-[0.98] uppercase shadow-2xs"
                  >
                    <span>How to Earn Score</span>
                    <ChevronRight className="size-4 text-slate-400" />
                  </Link>
                </div>
              </div>

              {/* Right Phone Visual with 2,850 Life Impact Score (Preserved & Elevated) */}
              <div className="lg:col-span-5 relative flex justify-center items-center py-4">
                {/* Outer Glow Halo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-transparent rounded-[50px] blur-2xl pointer-events-none" />

                {/* Phone Device Frame */}
                <div className="relative w-72 sm:w-80 rounded-[44px] p-3.5 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-[3px] border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35)] ring-1 ring-white/10">
                  {/* Speaker Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                    <div className="w-8 h-1 bg-slate-800 rounded-full" />
                    <div className="w-2 h-2 rounded-full bg-slate-900 ml-2" />
                  </div>

                  {/* Phone screen content */}
                  <div className="rounded-[34px] bg-[#060D1D] text-white p-6 pt-8 space-y-6 overflow-hidden relative border border-white/5">
                    {/* Header bar */}
                    <div className="flex justify-between items-center text-xs text-slate-400 pt-1">
                      <span className="font-semibold tracking-wide text-slate-300">Peers Unity</span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-mono">Live</span>
                      </div>
                    </div>

                    {/* Central Score Display */}
                    <div className="text-center py-4 space-y-1.5 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] p-4">
                      <span className="text-[11px] uppercase tracking-widest font-mono text-sky-300 font-semibold">
                        Life Impact Score
                      </span>
                      <div className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight drop-shadow-sm">
                        2,850
                      </div>
                      <div className="inline-flex items-center gap-1 text-xs text-emerald-400 font-medium bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        <span>+150 this month</span>
                        <span>•</span>
                        <span>Top 5% Peer</span>
                      </div>
                    </div>

                    {/* Metric Cards */}
                    <div className="space-y-2.5 pt-1 text-xs">
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between items-center transition-colors hover:bg-white/[0.07]">
                        <span className="text-slate-300">Recent Confirmation</span>
                        <span className="font-mono text-sky-300 font-bold bg-sky-950/50 px-2 py-0.5 rounded border border-sky-400/20">+100 pts</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between items-center transition-colors hover:bg-white/[0.07]">
                        <span className="text-slate-300">Peer Standing</span>
                        <span className="text-amber-300 font-semibold bg-amber-950/50 px-2.5 py-0.5 rounded border border-amber-400/20">Catalyst</span>
                      </div>
                    </div>
                  </div>

                  {/* Calligraphy floating badge */}
                  <div className="absolute -bottom-4 -right-4 sm:-right-6 font-serif italic text-[#1E4ED8] text-xs sm:text-sm bg-white px-4 py-2 rounded-full border border-slate-200/90 shadow-lg hidden sm:flex items-center gap-1.5 z-20">
                    <span>Give. Support. Create Impact.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What It Is ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            The Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-950 font-bold">
            What it is
          </h2>
          <div className="prose prose-lg text-slate-600 leading-relaxed font-normal space-y-5">
            <p className="text-lg sm:text-xl font-serif text-slate-800">
              Every time you help another entrepreneur in this community, it can be recorded.
            </p>
            <p>
              An introduction that opened a door. A referral that converted. Knowledge that saved someone eighteen months. A vendor you had already tested. An hour with a Peer going through a difficult month.
            </p>
            <p className="text-xl font-serif font-bold text-slate-950">
              Each one is logged in the Unity App, confirmed by the Peer who received it, and added to your Life Impact Score.
            </p>
            <p>
              Over a year it becomes a complete record of what you contributed — not what you claimed, not what you intended, but what other entrepreneurs confirmed you did for them.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Why We Measure It vs What It Is Not ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Why we measure it */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="text-2xl font-serif text-slate-950 font-bold">
                Why we measure it
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900">Because contribution that goes unseen slowly stops happening.</strong> Not because people become selfish. Because effort without acknowledgement quietly fades, and a room where nobody notices who gives eventually becomes a room where fewer people do.
                </p>
                <p>
                  <strong className="text-slate-900">And because a community outgrows memory.</strong> In a room of thirty, everyone knows who gives. Across thousands of entrepreneurs in many cities, nobody would — unless it is recorded.
                </p>
                <div className="p-4 rounded-2xl bg-[#EFF6FF] border border-[#0062D2]/20 text-xs font-semibold text-[#0062D2]">
                  The score exists so that generosity remains visible at scale.
                </div>
              </div>
            </div>

            {/* What it is not */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="text-2xl font-serif text-slate-950 font-bold">
                What it is not
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">It is not a leaderboard</strong>
                    Peers are not ranked against each other, and nobody is publicly compared.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">It is not attendance</strong>
                    Showing up is the entry fee. Contribution is what counts.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">It is not permanent</strong>
                    Your score reflects an active, contributing member. It ends when membership does.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">It cannot be bought</strong>
                    No subscription level, no payment and no seniority produces a single point.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What It Becomes ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-950 font-bold">
              What it becomes
            </h2>
            <p className="text-sm text-slate-600">
              Your Life Impact Score is the foundation of everything else in the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-200 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950">
                Peer Standing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The recognition and access you hold across the national community. Higher standing unlocks broader network reach.
              </p>
              <Link
                href="/peer-standing"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:text-[#0052B4] pt-2"
              >
                Understand Peer Standing <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950">
                Peers Coin
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rewards you can redeem in the Marketplace for growth masterclasses, tools and summit passes.
              </p>
              <Link
                href="/peers-coin"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:text-[#0052B4] pt-2"
              >
                See Peers Coin <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950">
                Leadership Eligibility
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every role here follows contribution. From Committee Chair to Circle Director, your score proves your commitment.
              </p>
              <Link
                href="/circle-roles"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:text-[#0052B4] pt-2"
              >
                See Leadership Roles <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Where You See It (Unity App) ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-[#EFF6FF] border border-[#0062D2]/20 flex items-center justify-center text-[#0062D2] mx-auto">
            <Smartphone className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
            Where you see it
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            In the Unity App. Live, updating as contributions are confirmed, visible to you and the community.
          </p>
          <div className="pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] hover:shadow-[0_6px_18px_rgba(0,98,210,0.35)] transition-all active:scale-95"
            >
              <span>Download Unity App</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Closing Brand Gradient Banner ─── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white py-20 md:py-28">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Build Your Business. Build Your Relationships. Build Your Circle.
          </h2>
          <p className="font-serif italic text-white/90 text-base sm:text-lg">
            People. Progress. Together.
          </p>

          <div className="pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#1D4ED8] text-xs sm:text-sm font-bold shadow-lg transition-all uppercase tracking-wider hover:bg-slate-100 hover:scale-105 active:scale-95"
            >
              <span>Download Unity App</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

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
          <ChevronRight className="size-3.5 text-slate-400" />
          <span>The Currency</span>
          <ChevronRight className="size-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Life Impact Score</span>
        </div>
      </div>

      {/* ─── 1. HERO ─── */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-5 sm:pt-6 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Master Card Hero Box */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white via-white/95 to-slate-50 border border-slate-200/90 shadow-lg min-h-[480px] lg:min-h-[520px] p-6 sm:p-10 lg:p-12 flex items-center">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                {/* Eyebrow */}
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                    VERIFIED RELATIONAL CURRENCY
                  </span>
                </div>

                {/* Main Heading */}
                <div className="space-y-2.5">
                  <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-tight">
                    Life Impact Score
                  </h1>
                  <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
                    The record of what you have given.
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-xl">
                  Logged as it happens. Confirmed by the person you helped. Every contribution builds your immutable record of service.
                </p>

                {/* Feature Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  <div className="p-3 rounded-2xl bg-white border border-slate-200/90 text-xs font-semibold text-slate-800 flex items-center gap-2 shadow-2xs hover:border-slate-300 transition-all">
                    <ShieldCheck className="size-4 text-[#0062D2] shrink-0" />
                    <span className="truncate">Immutable</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-slate-200/90 text-xs font-semibold text-slate-800 flex items-center gap-2 shadow-2xs hover:border-slate-300 transition-all">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                    <span className="truncate">Peer Confirmed</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-slate-200/90 text-xs font-semibold text-slate-800 flex items-center gap-2 shadow-2xs hover:border-slate-300 transition-all">
                    <TrendingUp className="size-4 text-blue-600 shrink-0" />
                    <span className="truncate">Live Score</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-slate-200/90 text-xs font-semibold text-slate-800 flex items-center gap-2 shadow-2xs hover:border-slate-300 transition-all">
                    <Award className="size-4 text-amber-600 shrink-0" />
                    <span className="truncate">Coin Rewards</span>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider shadow-md hover:shadow-lg transition-all uppercase"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <Link
                    href="/peer-standing"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-slate-700 transition-all uppercase shadow-2xs"
                  >
                    <span>See Peer Standing</span>
                    <ChevronRight className="size-4 text-slate-400" />
                  </Link>
                </div>
              </div>

              {/* Right Phone Visual */}
              <div className="lg:col-span-5 relative flex justify-center items-center py-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-transparent rounded-[50px] blur-2xl pointer-events-none" />

                {/* Phone Frame */}
                <div className="relative w-64 sm:w-72 rounded-[40px] p-3 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-[3px] border-slate-700/80 shadow-2xl ring-1 ring-white/10">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-18 h-3.5 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                    <div className="w-7 h-1 bg-slate-800 rounded-full" />
                    <div className="size-1.5 rounded-full bg-slate-900 ml-1.5" />
                  </div>

                  <div className="rounded-[30px] bg-[#060D1D] text-white p-5 pt-7 space-y-4 overflow-hidden relative border border-white/5">
                    <div className="flex justify-between items-center text-xs text-slate-400 pt-0.5">
                      <span className="font-semibold tracking-wide text-slate-300 text-[11px]">Peers Unity</span>
                      <div className="flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[9px] text-emerald-400 uppercase tracking-widest font-mono">Live</span>
                      </div>
                    </div>

                    <div className="text-center py-3 space-y-1 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] p-3">
                      <span className="text-[10px] uppercase tracking-widest font-mono text-sky-300 font-semibold">
                        Life Impact Score
                      </span>
                      <div className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight drop-shadow-sm">
                        2,850
                      </div>
                      <div className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        <span>+150 this month</span>
                        <span>•</span>
                        <span>Top 5% Peer</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-0.5 text-xs">
                      <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between items-center transition-colors hover:bg-white/[0.07]">
                        <span className="text-slate-300 text-[11px]">Recent Confirmation</span>
                        <span className="font-mono text-sky-300 font-bold bg-sky-950/50 px-2 py-0.5 rounded border border-sky-400/20 text-[11px]">+100 pts</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between items-center transition-colors hover:bg-white/[0.07]">
                        <span className="text-slate-300 text-[11px]">Peer Standing</span>
                        <span className="text-amber-300 font-semibold bg-amber-950/50 px-2 py-0.5 rounded border border-amber-400/20 text-[11px]">Catalyst</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-3 -right-3 sm:-right-4 text-[#1D4ED8] text-[11px] sm:text-xs font-semibold bg-white px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-lg hidden sm:flex items-center gap-1.5 z-20">
                    <span>Give. Support. Impact.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Summary Bar */}
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 items-center">
            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">100%</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Peer Verified</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 shadow-2xs">
                <TrendingUp className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">Live</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Realtime Updates</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Users className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">45+ Cities</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Global Standing</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Award className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">5 Tiers</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Merit Growth</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 2. WHAT IT IS ─── */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  THE FOUNDATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
                What it is
              </h2>

              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
                Every time you help another entrepreneur in this community, it can be recorded.
              </p>

              <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-blue-100 shadow-2xs space-y-2">
                <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  Each contribution is logged in the Unity App, confirmed by the Peer who received it, and added to your Life Impact Score.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Over a year it becomes a complete record of what you contributed — not what you claimed or intended, but what other entrepreneurs confirmed you did for them.
                </p>
              </div>

              {/* 4 Feature Value Pillars */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-200 hover:shadow-xs transition-all flex items-start gap-3">
                  <div className="size-9 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="size-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Peer Confirmed</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Only verified by the peer you helped</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-200 hover:shadow-xs transition-all flex items-start gap-3">
                  <div className="size-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="size-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Live & Dynamic</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Updates in real-time on your profile</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-200 hover:shadow-xs transition-all flex items-start gap-3">
                  <div className="size-9 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="size-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Social Capital</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Unlocks national community standing</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-200 hover:shadow-xs transition-all flex items-start gap-3">
                  <div className="size-9 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="size-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Merit Based</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Cannot be bought with any money</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Card Column */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#030B1C] border border-slate-800 p-7 sm:p-8 text-white shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                      WHAT GETS RECORDED
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    Live Activity
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-semibold">Introductions & Referrals</strong>
                      <span className="text-slate-300 text-xs font-light">An introduction that opened a door or converted to a client.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-semibold">Knowledge & Guidance</strong>
                      <span className="text-slate-300 text-xs font-light">Strategic mentorship that saved someone 18 months of trial and error.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-semibold">Vetted Resources</strong>
                      <span className="text-slate-300 text-xs font-light">A supplier, team member, or partner you have already tested and trust.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-semibold">Founder Support</strong>
                      <span className="text-slate-300 text-xs font-light">An hour spent with a Peer founder navigating a critical decision.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-slate-400 font-light italic">
                    All contributions are confirmed by the receiving peer before impacting score.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. WHY WE MEASURE IT vs WHAT IT IS NOT ─── */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                CORE PRINCIPLES & GOVERNANCE
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              Why We Measure It vs What It Is Not
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Preserving authentic generosity and mutual support through transparent, uncompromised verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Why we measure it */}
            <div className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-white to-blue-50/20 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shadow-2xs">
                    <ShieldCheck className="size-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0062D2] border border-blue-100 text-[11px] font-bold uppercase tracking-wider">
                    Purpose & Scale
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Why we measure it
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Making selfless contribution visible across growing cities.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70">
                    <p>
                      <strong className="text-slate-900 font-semibold block mb-1">Because contribution that goes unseen slowly stops happening.</strong>
                      Effort without acknowledgement quietly fades, and a room where nobody notices who gives eventually becomes a room where fewer people do.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70">
                    <p>
                      <strong className="text-slate-900 font-semibold block mb-1">And because a community outgrows memory.</strong>
                      In a room of thirty, everyone knows who gives. Across thousands of entrepreneurs in many cities, nobody would — unless it is recorded.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-blue-50 text-xs font-semibold text-[#0062D2] border border-blue-200/60 flex items-center gap-2.5">
                  <Sparkles className="size-4 shrink-0 text-[#0062D2]" />
                  <span>The score exists so that generosity remains visible at scale.</span>
                </div>
              </div>
            </div>

            {/* What it is not */}
            <div className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-white to-rose-50/20 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-rose-200 hover:-translate-y-1.5 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center shadow-2xs">
                    <XCircle className="size-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-100 text-[11px] font-bold uppercase tracking-wider">
                    Boundaries & Integrity
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    What it is not
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Strict guardrails protecting authentic peer respect.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-light">
                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
                    <XCircle className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">It is not a leaderboard</strong>
                      <span className="text-slate-600 text-xs font-light">Peers are not ranked against each other, and nobody is publicly compared.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
                    <XCircle className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">It is not attendance</strong>
                      <span className="text-slate-600 text-xs font-light">Showing up is the entry fee. Genuine contribution is what counts.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
                    <XCircle className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">It is not permanent</strong>
                      <span className="text-slate-600 text-xs font-light">Your score reflects active contribution. It ends when membership ends.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
                    <XCircle className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">It cannot be bought</strong>
                      <span className="text-slate-600 text-xs font-light">No subscription tier, payment, or seniority produces a single point.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 flex items-center gap-2.5">
                  <ShieldCheck className="size-4 shrink-0 text-emerald-600" />
                  <span>Pure meritocracy based entirely on peer verification.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. WHAT IT BECOMES ─── */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                ECOSYSTEM IMPACT
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              What it becomes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Your Life Impact Score is the foundation of everything else in the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            <div className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300">
              <div className="space-y-4">
                <div className="size-11 rounded-2xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center">
                  <Award className="size-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Peer Standing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  The recognition and access you hold across the national community. Higher standing unlocks broader network reach.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/peer-standing"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:text-[#1D4ED8]"
                >
                  <span>Understand Peer Standing</span>
                  <ChevronRight className="size-3.5" />
                </Link>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300">
              <div className="space-y-4">
                <div className="size-11 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
                  <TrendingUp className="size-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Peers Coin
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Rewards you can redeem in the Marketplace for growth masterclasses, tools, and summit passes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/peers-coin"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:text-[#1D4ED8]"
                >
                  <span>See Peers Coin</span>
                  <ChevronRight className="size-3.5" />
                </Link>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300">
              <div className="space-y-4">
                <div className="size-11 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center">
                  <Users className="size-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Leadership Eligibility
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Every role here follows contribution. From Committee Chair to Circle Director, your score proves your commitment.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/leadership/leadership-ladder"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:text-[#1D4ED8]"
                >
                  <span>See Leadership Roles</span>
                  <ChevronRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. CLOSING HERO BANNER ─── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.18),transparent_50%),radial-gradient(circle_at_82%_12%,rgba(99,102,241,0.15),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-sky-400 to-rose-400 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                  MEASURE WHAT MATTERS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                Build Your Business. Build Your Relationships. Build Your Circle.
              </h2>

              <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed max-w-2xl">
                The record of what you have given remains forever. Logged in the Unity App, confirmed by the peers you helped.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-105 uppercase tracking-wider group"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/peer-standing"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all"
                >
                  <span>Explore Peer Standing</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-xl sm:text-2xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Every Introduction.
              </p>
              <p
                className="text-xl sm:text-2xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Every Referral.
              </p>
              <p
                className="text-xl sm:text-2xl text-white leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Every Hour of Support.
              </p>
              <p
                className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Recorded & Confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


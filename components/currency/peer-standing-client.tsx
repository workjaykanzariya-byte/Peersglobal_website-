'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Award,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users,
  CheckCircle2,
  XCircle,
  Star,
  Zap,
  Crown,
  Compass,
} from 'lucide-react'

const STANDING_LEVELS = [
  {
    name: 'Explorer',
    badge: Compass,
    color: 'text-slate-600 bg-slate-100 border-slate-200',
    desc: 'Getting started in the community. Learning the rhythm of contribution.',
  },
  {
    name: 'Contributor',
    badge: Sparkles,
    color: 'text-[#0062D2] bg-blue-50 border-blue-200',
    desc: 'Active giver. Regularly logging verified referrals and peer support.',
  },
  {
    name: 'Catalyst',
    badge: Zap,
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    desc: 'Creating meaningful impact. Saving peers months and millions through collaboration.',
  },
  {
    name: 'Leader',
    badge: Award,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    desc: 'High, consistent contribution. Holding committee seats and mentoring peers.',
  },
  {
    name: 'Legend',
    badge: Crown,
    color: 'text-purple-600 bg-purple-50 border-purple-200',
    desc: 'Exceptional, long-term impact. Conferred by national leadership for systemic empowerment.',
  },
]

export function PeerStandingClient() {
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
          <span className="text-slate-900 font-semibold">Peer Standing</span>
        </div>
      </div>

      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Ambient Video Background & Overlay */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>COMMUNITY RECOGNITION</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  Peer{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Standing
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                  What the community recognises you for.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xl">
                Earned through what you gave. Conferred by the people you gave it to. A universal measure of credibility, trust, and mutual commitment across the ecosystem.
              </p>

              {/* Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-2 shadow-2xs hover:bg-white/15 transition-all">
                  <Crown className="size-4 text-purple-400 shrink-0" />
                  <span className="truncate">5 Merit Tiers</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-2 shadow-2xs hover:bg-white/15 transition-all">
                  <ShieldCheck className="size-4 text-sky-400 shrink-0" />
                  <span className="truncate">100% Peer Vetted</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-2 shadow-2xs hover:bg-white/15 transition-all">
                  <TrendingUp className="size-4 text-emerald-400 shrink-0" />
                  <span className="truncate">Score Driven</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-2 shadow-2xs hover:bg-white/15 transition-all">
                  <Award className="size-4 text-amber-400 shrink-0" />
                  <span className="truncate">Systemic Voice</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider shadow-md hover:shadow-lg transition-all uppercase"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/life-impact-score"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white transition-all uppercase shadow-2xs backdrop-blur-sm"
                >
                  <span>Life Impact Score</span>
                  <ChevronRight className="size-4 text-slate-300" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Phone / Standing Visual Card */}
            <div className="lg:col-span-5 relative flex justify-center items-center py-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-blue-500/20 to-transparent rounded-[50px] blur-2xl pointer-events-none" />

              {/* Phone Frame */}
              <div className="relative w-64 sm:w-72 rounded-[40px] p-3 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-[3px] border-slate-700/80 shadow-2xl ring-1 ring-white/10">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-18 h-3.5 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                  <div className="w-7 h-1 bg-slate-800 rounded-full" />
                  <div className="size-1.5 rounded-full bg-slate-900 ml-1.5" />
                </div>

                <div className="rounded-[30px] bg-[#060D1D] text-white p-5 pt-7 space-y-4 overflow-hidden relative border border-white/5">
                  {/* Ambient Earth Video Background in card */}
                  <div className="absolute inset-0 opacity-25 pointer-events-none overflow-hidden">
                    <video
                      src="/videos/peers-global-earth-loop.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative z-10 flex justify-between items-center text-xs text-slate-400 pt-0.5">
                    <span className="font-semibold tracking-wide text-slate-300 text-[11px]">Peers Standing</span>
                    <div className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-[9px] text-amber-400 uppercase tracking-widest font-mono">Conferred</span>
                    </div>
                  </div>

                  {/* Tier Level Display */}
                  <div className="relative z-10 text-center py-3.5 space-y-1.5 rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent border border-white/[0.08] p-3">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[10px] font-bold uppercase tracking-widest">
                      <Crown className="size-3" />
                      <span>Tier 04 / 05</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-sm flex items-center justify-center gap-2">
                      <span>Leader</span>
                      <Award className="size-5 text-emerald-400" />
                    </div>
                    <div className="text-[11px] text-slate-300 font-light">
                      Verified by 48 Peers across 6 Cities
                    </div>
                  </div>

                  {/* Standing Metrics */}
                  <div className="relative z-10 space-y-2 pt-0.5 text-xs">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between items-center transition-colors hover:bg-white/[0.07]">
                      <span className="text-slate-300 text-[11px]">Life Impact Score</span>
                      <span className="font-mono text-sky-300 font-bold bg-sky-950/50 px-2 py-0.5 rounded border border-sky-400/20 text-[11px]">2,850 pts</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between items-center transition-colors hover:bg-white/[0.07]">
                      <span className="text-slate-300 text-[11px]">Community Weight</span>
                      <span className="text-emerald-300 font-semibold bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-400/20 text-[11px]">National Seat</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-3 -right-3 sm:-right-4 text-[#1D4ED8] text-[11px] sm:text-xs font-semibold bg-white px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-lg hidden sm:flex items-center gap-1.5 z-20">
                  <Sparkles className="size-3.5 text-amber-500" />
                  <span>Respect Earned. Not Given.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating 4-stat Bar */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 items-center">
            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Crown className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">5 Tiers</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Advancement Path</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">100%</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Peer Vetted</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 shadow-2xs">
                <TrendingUp className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">Dynamic</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Activity Bound</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Award className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">Global</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Network Weight</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. THE CLOSEST THING TO WEALTH ─── */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  THE TRUE MEASURE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
                The closest thing to wealth in this community
              </h2>

              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
                Money buys a subscription. It buys a seat, an app, and the right to be in the room. It buys nothing else.
              </p>

              <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-blue-100 shadow-2xs space-y-2">
                <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  Standing — whether Peers open doors for you, whether your ask carries weight, whether you can lead — comes from a different currency entirely.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  It is earned by giving, and only other Peers can award it through verified mutual impact and peer recognition.
                </p>
              </div>

              {/* 4 Value Pillars */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-200 hover:shadow-xs transition-all flex items-start gap-3">
                  <div className="size-9 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="size-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Uncompromised Trust</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Built through verified reciprocity</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-200 hover:shadow-xs transition-all flex items-start gap-3">
                  <div className="size-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="size-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Meritocratic Standing</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Independent of capital or company size</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-200 hover:shadow-xs transition-all flex items-start gap-3">
                  <div className="size-9 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="size-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Leadership Candicacy</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Requirement for Circle & ED roles</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-200 hover:shadow-xs transition-all flex items-start gap-3">
                  <div className="size-9 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="size-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">National Reach</h4>
                    <p className="text-xs text-slate-500 mt-0.5">High standing peers connect across cities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Card Column */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#030B1C] border border-slate-800 p-7 sm:p-8 text-white shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                      HOW STANDING OPERATES
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    5 Progression Tiers
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-sky-400 mt-0.5">01</span>
                    <div>
                      <strong className="block text-white font-semibold">Every Action Earns Credit</strong>
                      <span className="text-slate-300 text-xs font-light">Referrals, masterclasses, and time invested increment your record.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-emerald-400 mt-0.5">02</span>
                    <div>
                      <strong className="block text-white font-semibold">Peer Verification</strong>
                      <span className="text-slate-300 text-xs font-light">Points are only awarded when the recipient verifies the value received.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-purple-400 mt-0.5">03</span>
                    <div>
                      <strong className="block text-white font-semibold">Global Reputation Badge</strong>
                      <span className="text-slate-300 text-xs font-light">Your badge is recognized across 45+ cities and 250+ Circles worldwide.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-slate-400 font-light italic">
                    &ldquo;Respect in this community cannot be bought — it can only be built.&rdquo;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. STANDING LEVELS (5 TIERS) ─── */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                ADVANCEMENT TIERS
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              Standing Levels
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              As you contribute, your Peer Standing grows. From your first referral to lifelong legacy impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
            {STANDING_LEVELS.map((tier, idx) => {
              const Icon = tier.badge
              return (
                <div
                  key={tier.name}
                  className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 cursor-default text-center"
                >
                  <div className="space-y-4 flex flex-col items-center">
                    <div className="size-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2] group-hover:scale-110 transition-transform">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                        Tier 0{idx + 1}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        {tier.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                        {tier.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100">
                    <span className="inline-block text-[11px] font-semibold text-[#0062D2]">
                      Earned by Impact
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. WHAT STANDING CHANGES vs WHAT IT IS NOT ─── */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* What standing changes */}
            <div className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300">
              <div className="space-y-4">
                <div className="size-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  What standing changes
                </h2>
                <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 font-light">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Recognition across the community</strong>
                      Peers across Circles and cities see you are someone who gives. That reputation opens doors before you ask.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Access to leadership opportunities</strong>
                      Every leadership role follows contribution. Standing is what makes a Peer a candidate.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Priority consideration for initiatives</strong>
                      Special conclaves, overseas delegations and high-level working committees prioritize top-standing peers.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Greater visibility within Circles &amp; beyond</strong>
                      Brand showcase priority and featured editorial coverage across VyapaarJagat.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-[#0062D2]">
                  Trust accelerates every conversation you enter.
                </div>
              </div>
            </div>

            {/* What standing is not */}
            <div className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300">
              <div className="space-y-4">
                <div className="size-11 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                  <XCircle className="size-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  What standing is not
                </h2>
                <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 font-light">
                  <div className="flex items-start gap-3">
                    <XCircle className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">It is not a hierarchy of importance</strong>
                      Peers are not ordered against each other or treated as second-class.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">It is not based on your business size</strong>
                      A micro-entrepreneur with huge generosity outranks a ₹100 Cr tycoon who only takes.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">It cannot be bought</strong>
                      No sponsorship, donation, or tier purchase produces standing.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">It is not permanent</strong>
                      Standing reflects an active contributing member. It ends when membership does.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-700">
                  &ldquo;Standing is not given. It is earned, one contribution at a time.&rdquo;
                </div>
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
                  PEER REPUTATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                The most valuable thing you can build here is a reputation for giving.
              </h2>

              <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed max-w-2xl">
                Elevate your standing by supporting fellow founders, sharing verified connections, and stewarding your Circle.
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
                  href="/life-impact-score"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all"
                >
                  <span>See Life Impact Score</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-xl sm:text-2xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Honor Earned.
              </p>
              <p
                className="text-xl sm:text-2xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Doors Opened.
              </p>
              <p
                className="text-xl sm:text-2xl text-white leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Trust Bestowed.
              </p>
              <p
                className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Conferred by Peers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


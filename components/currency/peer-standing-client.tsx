'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#1D4ED8]">
      {/* Global Shared SVG Gradient Definition for Brand Icons & Card Borders */}
      <svg className="absolute size-0 overflow-hidden pointer-events-none" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="brandIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
          <linearGradient id="brandIconGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#FB7185" />
          </linearGradient>
          <linearGradient id="cardGradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
        </defs>
      </svg>

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
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#FB7185] animate-pulse" />
                <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent font-bold">COMMUNITY RECOGNITION</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  Peer{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185]">
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
                  <Crown className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8] shrink-0" />
                  <span className="truncate">5 Merit Tiers</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-2 shadow-2xs hover:bg-white/15 transition-all">
                  <ShieldCheck className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8] shrink-0" />
                  <span className="truncate">100% Peer Vetted</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-2 shadow-2xs hover:bg-white/15 transition-all">
                  <TrendingUp className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8] shrink-0" />
                  <span className="truncate">Score Driven</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-2 shadow-2xs hover:bg-white/15 transition-all">
                  <Award className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8] shrink-0" />
                  <span className="truncate">Systemic Voice</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="default"
                  className="font-bold uppercase tracking-wider"
                >
                  Download Unity App
                </GalaxyButton>
                <GalaxyButton
                  href="/life-impact-score"
                  variant="transparent"
                  size="default"
                  className="font-bold uppercase tracking-wider"
                >
                  Life Impact Score
                </GalaxyButton>
              </div>
            </div>

            {/* Right Interactive Phone / Standing Visual Card */}
            <div className="lg:col-span-5 relative flex justify-center items-center py-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-rose-500/20 rounded-[50px] blur-2xl pointer-events-none" />

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
                      <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[9px] text-emerald-400 uppercase tracking-widest font-mono">Conferred</span>
                    </div>
                  </div>

                  {/* Tier Level Display */}
                  <div className="relative z-10 text-center py-3.5 space-y-1.5 rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent border border-white/[0.08] p-3">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
                      <Crown className="size-3 stroke-[url(#brandIconGradDark)] text-[#38BDF8]" />
                      <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">Tier 04 / 05</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-sm flex items-center justify-center gap-2">
                      <span>Leader</span>
                      <Award className="size-5 stroke-[url(#brandIconGradDark)] text-[#38BDF8]" />
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

                <div className="absolute -bottom-3 -right-3 sm:-right-4 text-xs font-bold bg-white px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-lg hidden sm:flex items-center gap-1.5 z-20">
                  <Sparkles className="size-3.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  <span className="bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent">Respect Earned. Not Given.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating 4-stat Bar */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 items-center">
            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="size-10 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <Crown className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent leading-tight">5 Tiers</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Advancement Path</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="size-10 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <ShieldCheck className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent leading-tight">100%</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Peer Vetted</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="size-10 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <TrendingUp className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent leading-tight">Dynamic</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Activity Bound</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="size-10 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <Award className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent leading-tight">Global</div>
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
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent">
                  THE TRUE MEASURE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
                The closest thing to wealth <span className="brand-gradient-text">in this community</span>
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
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-200 hover:shadow-xs transition-all flex items-start gap-3 group">
                  <div className="size-9 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-2xs">
                    <ShieldCheck className="size-4.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] transition-all">Uncompromised Trust</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Built through verified reciprocity</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-200 hover:shadow-xs transition-all flex items-start gap-3 group">
                  <div className="size-9 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-2xs">
                    <CheckCircle2 className="size-4.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] transition-all">Meritocratic Standing</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Independent of capital or company size</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-200 hover:shadow-xs transition-all flex items-start gap-3 group">
                  <div className="size-9 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-2xs">
                    <Users className="size-4.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] transition-all">Leadership Candicacy</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Requirement for Circle & ED roles</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-200 hover:shadow-xs transition-all flex items-start gap-3 group">
                  <div className="size-9 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-2xs">
                    <Award className="size-4.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] transition-all">National Reach</h4>
                    <p className="text-xs text-slate-500 mt-0.5">High standing peers connect across cities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Card Column */}
            <div className="lg:col-span-5">
              <div
                style={{
                  background: 'linear-gradient(135deg, rgb(6, 17, 44) 0%, rgb(19, 7, 31) 50%, rgb(38, 5, 19) 100%)',
                }}
                className="rounded-3xl border border-white/10 p-7 sm:p-8 text-white shadow-xl space-y-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8]" />
                    <span className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                      HOW STANDING OPERATES
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-white bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-2.5 py-0.5 rounded-full shadow-2xs">
                    5 Progression Tiers
                  </span>
                </div>

                <div className="relative z-10 space-y-3 text-xs sm:text-sm">
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

                <div className="relative z-10 pt-2 text-center">
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
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent">
                ADVANCEMENT TIERS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              Standing <span className="brand-gradient-text">Levels</span>
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
                  className="animated-glow-card group !rounded-3xl"
                >
                  <svg className="animated-border-svg" aria-hidden="true">
                    <rect
                      x="1"
                      y="1"
                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"
                      rx="24"
                      ry="24"
                      className="animated-border-path"
                    />
                  </svg>
                  <div className="relative flex flex-col justify-between p-6 sm:p-7 !rounded-[22px] bg-white border border-slate-200/90 shadow-2xs h-full cursor-default text-center">
                    <div className="space-y-4 flex flex-col items-center">
                      <div className="size-12 rounded-2xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                        <Icon className="size-6 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                          Tier 0{idx + 1}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] transition-all">
                          {tier.name}
                        </h3>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                          {tier.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-3 border-t border-slate-100">
                      <span className="inline-block text-[11px] font-semibold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent">
                        Earned by Impact
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. WHAT STANDING CHANGES vs WHAT IT IS NOT ─── */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent">
                COMMUNITY IMPACT & BOUNDARIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              What Standing Changes vs <span className="brand-gradient-text">What It Is Not</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Clear principles on how peer standing operates and the strict guardrails that preserve community meritocracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* What standing changes */}
            <div className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs h-full">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shadow-2xs">
                    <CheckCircle2 className="size-6 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-[11px] font-bold uppercase tracking-wider shadow-2xs">
                    Opportunities & Trust
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    What standing changes
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Unlocking natural reciprocity and leadership voice across the network.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-light">
                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
                    <CheckCircle2 className="size-4 stroke-[url(#brandIconGrad)] text-[#1D4ED8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Recognition across the community</strong>
                      <span className="text-slate-600 text-xs font-light">Peers across Circles and cities see you are someone who gives. That reputation opens doors before you ask.</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
                    <CheckCircle2 className="size-4 stroke-[url(#brandIconGrad)] text-[#1D4ED8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Access to leadership opportunities</strong>
                      <span className="text-slate-600 text-xs font-light">Every leadership role follows contribution. Standing is what makes a Peer a candidate.</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
                    <CheckCircle2 className="size-4 stroke-[url(#brandIconGrad)] text-[#1D4ED8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Priority consideration for initiatives</strong>
                      <span className="text-slate-600 text-xs font-light">Special conclaves, overseas delegations and high-level working committees prioritize top-standing peers.</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
                    <CheckCircle2 className="size-4 stroke-[url(#brandIconGrad)] text-[#1D4ED8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Greater visibility within Circles &amp; beyond</strong>
                      <span className="text-slate-600 text-xs font-light">Brand showcase priority and featured editorial coverage across VyapaarJagat.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 flex items-center gap-2.5">
                  <Sparkles className="size-4 shrink-0 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  <span className="text-xs font-semibold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent">Trust accelerates every conversation you enter.</span>
                </div>
              </div>
            </div>

            {/* What standing is not */}
            <div className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs h-full">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shadow-2xs">
                    <XCircle className="size-6 stroke-[url(#brandIconGrad)] text-[#E11D48]" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-bold uppercase tracking-wider shadow-2xs">
                    Boundaries & Integrity
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    What standing is not
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Strict guardrails protecting authentic peer respect.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-light">
                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
                    <XCircle className="size-4 stroke-[url(#brandIconGrad)] text-[#E11D48] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">It is not a hierarchy of importance</strong>
                      <span className="text-slate-600 text-xs font-light">Peers are not ordered against each other or treated as second-class.</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
                    <XCircle className="size-4 stroke-[url(#brandIconGrad)] text-[#E11D48] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">It is not based on your business size</strong>
                      <span className="text-slate-600 text-xs font-light">A micro-entrepreneur with huge generosity outranks a ₹100 Cr tycoon who only takes.</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
                    <XCircle className="size-4 stroke-[url(#brandIconGrad)] text-[#E11D48] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">It cannot be bought</strong>
                      <span className="text-slate-600 text-xs font-light">No sponsorship, donation, or tier purchase produces standing.</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
                    <XCircle className="size-4 stroke-[url(#brandIconGrad)] text-[#E11D48] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">It is not permanent</strong>
                      <span className="text-slate-600 text-xs font-light">Standing reflects an active contributing member. It ends when membership does.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 flex items-center gap-2.5">
                  <ShieldCheck className="size-4 shrink-0 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  <span>Standing is not given. It is earned, one contribution at a time.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. CLOSING HERO BANNER ─── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-20 lg:py-28 border-t border-slate-800">
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
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                  PEER REPUTATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                The most valuable thing you can build here is a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185]">
                  reputation for giving.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed max-w-2xl">
                Elevate your standing by supporting fellow founders, sharing verified connections, and stewarding your Circle.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="default"
                  className="font-bold uppercase tracking-wider"
                >
                  Download Unity App
                </GalaxyButton>
                <GalaxyButton
                  href="/life-impact-score"
                  variant="transparent"
                  size="default"
                  className="font-bold uppercase tracking-wider"
                >
                  See Life Impact Score
                </GalaxyButton>
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
                className="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] font-bold leading-tight"
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



'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#1D4ED8]">
      {/* Global Shared SVG Gradient Definition for Brand Icons */}
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
          <span className="text-slate-900 font-semibold">Life Impact Score</span>
        </div>
      </div>

      {/* ─── 1. HERO ─── */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <div className="max-w-3xl space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#FB7185] animate-pulse" />
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent font-bold">VERIFIED RELATIONAL CURRENCY</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                Life Impact{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185]">
                  Score
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                The record of what you have given.
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xl">
              Logged as it happens. Confirmed by the person you helped. Every contribution builds your immutable record of service.
            </p>

            {/* Feature Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-2 shadow-2xs hover:bg-white/15 transition-all">
                <ShieldCheck className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8] shrink-0" />
                <span className="truncate">Immutable</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-2 shadow-2xs hover:bg-white/15 transition-all">
                <CheckCircle2 className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8] shrink-0" />
                <span className="truncate">Peer Confirmed</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-2 shadow-2xs hover:bg-white/15 transition-all">
                <TrendingUp className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8] shrink-0" />
                <span className="truncate">Live Score</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-2 shadow-2xs hover:bg-white/15 transition-all">
                <Award className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8] shrink-0" />
                <span className="truncate">Coin Rewards</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
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
                href="/peer-standing"
                variant="transparent"
                size="default"
                className="font-bold uppercase tracking-wider"
              >
                See Peer Standing
              </GalaxyButton>
            </div>
          </div>

          {/* Stats Summary Bar */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 items-stretch">
            <div className="h-full rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 shadow-2xs hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="size-10 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <ShieldCheck className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent leading-tight">100%</div>
                <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide sm:tracking-wider leading-snug text-slate-500">Peer Verified</div>
              </div>
            </div>

            <div className="h-full rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 shadow-2xs hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="size-10 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <TrendingUp className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent leading-tight">Live</div>
                <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide sm:tracking-wider leading-snug text-slate-500">Realtime Updates</div>
              </div>
            </div>

            <div className="h-full rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 shadow-2xs hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="size-10 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <Users className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent leading-tight">45+ Cities</div>
                <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide sm:tracking-wider leading-snug text-slate-500">Global Standing</div>
              </div>
            </div>

            <div className="h-full rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 shadow-2xs hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="size-10 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <Award className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent leading-tight">5 Tiers</div>
                <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide sm:tracking-wider leading-snug text-slate-500">Merit Growth</div>
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
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent">
                  THE FOUNDATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
                What it <span className="brand-gradient-text">is</span>
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
                <div className="group relative rounded-2xl p-[1px] bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="p-4 rounded-[15px] bg-white group-hover:bg-[#FAFBFD] transition-colors flex items-start gap-3 h-full">
                    <div className="size-9 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-2xs">
                      <ShieldCheck className="size-4.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] transition-all">Peer Confirmed</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Only verified by the peer you helped</p>
                    </div>
                  </div>
                </div>

                <div className="group relative rounded-2xl p-[1px] bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="p-4 rounded-[15px] bg-white group-hover:bg-[#FAFBFD] transition-colors flex items-start gap-3 h-full">
                    <div className="size-9 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-2xs">
                      <TrendingUp className="size-4.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] transition-all">Live & Dynamic</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Updates in real-time on your profile</p>
                    </div>
                  </div>
                </div>

                <div className="group relative rounded-2xl p-[1px] bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="p-4 rounded-[15px] bg-white group-hover:bg-[#FAFBFD] transition-colors flex items-start gap-3 h-full">
                    <div className="size-9 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-2xs">
                      <Users className="size-4.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] transition-all">Social Capital</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Unlocks national community standing</p>
                    </div>
                  </div>
                </div>

                <div className="group relative rounded-2xl p-[1px] bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="p-4 rounded-[15px] bg-white group-hover:bg-[#FAFBFD] transition-colors flex items-start gap-3 h-full">
                    <div className="size-9 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-2xs">
                      <Award className="size-4.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] transition-all">Merit Based</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Cannot be bought with any money</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Card Column */}
            <div className="lg:col-span-5">
              <div className="group/rightCard relative rounded-3xl p-[1px] bg-slate-200/90 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] transition-all duration-300 shadow-xl">
                <div
                  style={{
                    background: 'linear-gradient(135deg, rgb(6, 17, 44) 0%, rgb(19, 7, 31) 50%, rgb(38, 5, 19) 100%)',
                  }}
                  className="rounded-[23px] p-7 sm:p-8 text-white space-y-6 relative overflow-hidden h-full"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8]" />
                      <span className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                        WHAT GETS RECORDED
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-white bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-2.5 py-0.5 rounded-full shadow-2xs">
                      Live Activity
                    </span>
                  </div>

                  <div className="relative z-10 space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 hover:bg-white/10 transition-colors">
                      <CheckCircle2 className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white font-semibold">Introductions & Referrals</strong>
                        <span className="text-slate-300 text-xs font-light">An introduction that opened a door or converted to a client.</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 hover:bg-white/10 transition-colors">
                      <CheckCircle2 className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white font-semibold">Knowledge & Guidance</strong>
                        <span className="text-slate-300 text-xs font-light">Strategic mentorship that saved someone 18 months of trial and error.</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 hover:bg-white/10 transition-colors">
                      <CheckCircle2 className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white font-semibold">Vetted Resources</strong>
                        <span className="text-slate-300 text-xs font-light">A supplier, team member, or partner you have already tested and trust.</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 hover:bg-white/10 transition-colors">
                      <CheckCircle2 className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white font-semibold">Founder Support</strong>
                        <span className="text-slate-300 text-xs font-light">An hour spent with a Peer founder navigating a critical decision.</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-2 text-center">
                    <span className="text-[11px] text-slate-400 font-light italic">
                      All contributions are confirmed by the receiving peer before impacting score.
                    </span>
                  </div>
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
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent">
                CORE PRINCIPLES & GOVERNANCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              Why We Measure It vs <span className="brand-gradient-text">What It Is Not</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Preserving authentic generosity and mutual support through transparent, uncompromised verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Why we measure it */}
            <div className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs h-full">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shadow-2xs">
                    <ShieldCheck className="size-6 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-[11px] font-bold uppercase tracking-wider shadow-2xs">
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
                  <div className="group/item relative rounded-2xl p-[1px] bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer">
                    <div className="p-4 rounded-[15px] bg-[#FAFBFD] group-hover/item:bg-white transition-colors">
                      <p>
                        <strong className="text-slate-900 font-semibold block mb-1 group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-[#1D4ED8] group-hover/item:via-[#6366F1] group-hover/item:to-[#E11D48] transition-all">Because contribution that goes unseen slowly stops happening.</strong>
                        Effort without acknowledgement quietly fades, and a room where nobody notices who gives eventually becomes a room where fewer people do.
                      </p>
                    </div>
                  </div>

                  <div className="group/item relative rounded-2xl p-[1px] bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer">
                    <div className="p-4 rounded-[15px] bg-[#FAFBFD] group-hover/item:bg-white transition-colors">
                      <p>
                        <strong className="text-slate-900 font-semibold block mb-1 group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-[#1D4ED8] group-hover/item:via-[#6366F1] group-hover/item:to-[#E11D48] transition-all">And because a community outgrows memory.</strong>
                        In a room of thirty, everyone knows who gives. Across thousands of entrepreneurs in many cities, nobody would — unless it is recorded.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 flex items-center gap-2.5">
                  <Sparkles className="size-4 shrink-0 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  <span className="text-xs font-semibold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent">The score exists so that generosity remains visible at scale.</span>
                </div>
              </div>
            </div>

            {/* What it is not */}
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
                    What it is not
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Strict guardrails protecting authentic peer respect.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-light">
                  <div className="group/item relative rounded-2xl p-[1px] bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer">
                    <div className="p-3.5 rounded-[15px] bg-[#FAFBFD] group-hover/item:bg-white flex items-start gap-3 transition-colors">
                      <XCircle className="size-4 stroke-[url(#brandIconGrad)] text-[#E11D48] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-[#1D4ED8] group-hover/item:via-[#6366F1] group-hover/item:to-[#E11D48] transition-all">It is not a leaderboard</strong>
                        <span className="text-slate-600 text-xs font-light">Peers are not ranked against each other, and nobody is publicly compared.</span>
                      </div>
                    </div>
                  </div>

                  <div className="group/item relative rounded-2xl p-[1px] bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer">
                    <div className="p-3.5 rounded-[15px] bg-[#FAFBFD] group-hover/item:bg-white flex items-start gap-3 transition-colors">
                      <XCircle className="size-4 stroke-[url(#brandIconGrad)] text-[#E11D48] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-[#1D4ED8] group-hover/item:via-[#6366F1] group-hover/item:to-[#E11D48] transition-all">It is not attendance</strong>
                        <span className="text-slate-600 text-xs font-light">Showing up is the entry fee. Genuine contribution is what counts.</span>
                      </div>
                    </div>
                  </div>

                  <div className="group/item relative rounded-2xl p-[1px] bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer">
                    <div className="p-3.5 rounded-[15px] bg-[#FAFBFD] group-hover/item:bg-white flex items-start gap-3 transition-colors">
                      <XCircle className="size-4 stroke-[url(#brandIconGrad)] text-[#E11D48] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-[#1D4ED8] group-hover/item:via-[#6366F1] group-hover/item:to-[#E11D48] transition-all">It is not permanent</strong>
                        <span className="text-slate-600 text-xs font-light">Your score reflects active contribution. It ends when membership ends.</span>
                      </div>
                    </div>
                  </div>

                  <div className="group/item relative rounded-2xl p-[1px] bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer">
                    <div className="p-3.5 rounded-[15px] bg-[#FAFBFD] group-hover/item:bg-white flex items-start gap-3 transition-colors">
                      <XCircle className="size-4 stroke-[url(#brandIconGrad)] text-[#E11D48] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-[#1D4ED8] group-hover/item:via-[#6366F1] group-hover/item:to-[#E11D48] transition-all">It cannot be bought</strong>
                        <span className="text-slate-600 text-xs font-light">No subscription tier, payment, or seniority produces a single point.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 flex items-center gap-2.5">
                  <ShieldCheck className="size-4 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
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
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent">
                ECOSYSTEM IMPACT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              What it <span className="brand-gradient-text">becomes</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Your Life Impact Score is the foundation of everything else in the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            <div className="group relative rounded-3xl p-[1px] bg-slate-200/90 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] transition-all duration-300 shadow-2xs hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="relative flex flex-col justify-between p-7 sm:p-8 rounded-[23px] bg-white group-hover:bg-[#FAFBFD] transition-colors h-full">
                <div className="space-y-4">
                  <div className="size-11 rounded-2xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                    <Award className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] transition-all">
                    Peer Standing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    The recognition and access you hold across the national community. Higher standing unlocks broader network reach.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/peer-standing"
                    className="inline-flex items-center gap-1 text-xs font-bold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                  >
                    <span>Understand Peer Standing</span>
                    <ChevronRight className="size-3.5 text-[#E11D48]" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl p-[1px] bg-slate-200/90 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] transition-all duration-300 shadow-2xs hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="relative flex flex-col justify-between p-7 sm:p-8 rounded-[23px] bg-white group-hover:bg-[#FAFBFD] transition-colors h-full">
                <div className="space-y-4">
                  <div className="size-11 rounded-2xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                    <TrendingUp className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] transition-all">
                    Peers Coin
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    Rewards you can redeem in the Marketplace for growth masterclasses, tools, and summit passes.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/peers-coin"
                    className="inline-flex items-center gap-1 text-xs font-bold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                  >
                    <span>See Peers Coin</span>
                    <ChevronRight className="size-3.5 text-[#E11D48]" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl p-[1px] bg-slate-200/90 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] transition-all duration-300 shadow-2xs hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="relative flex flex-col justify-between p-7 sm:p-8 rounded-[23px] bg-white group-hover:bg-[#FAFBFD] transition-colors h-full">
                <div className="space-y-4">
                  <div className="size-11 rounded-2xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                    <Users className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] transition-all">
                    Leadership Eligibility
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    Every role here follows contribution. From Committee Chair to Circle Director, your score proves your commitment.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/leadership/leadership-ladder"
                    className="inline-flex items-center gap-1 text-xs font-bold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                  >
                    <span>See Leadership Roles</span>
                    <ChevronRight className="size-3.5 text-[#E11D48]" />
                  </Link>
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
          <div className="max-w-3xl flex flex-col items-start space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                  MEASURE WHAT MATTERS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                Build Your Business.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185]">
                  Build Your Relationships.
                </span>{' '}
                Build Your Circle.
              </h2>

              <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed max-w-2xl">
                The record of what you have given remains forever. Logged in the Unity App, confirmed by the peers you helped.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <GalaxyButton
                  href="/peer-standing"
                  variant="primary"
                  size="default"
                  className="font-bold uppercase tracking-wider"
                >
                  Explore Peer Standing
                </GalaxyButton>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}



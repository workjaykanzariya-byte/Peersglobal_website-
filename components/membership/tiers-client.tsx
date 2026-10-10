'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  ArrowRight,
  ChevronRight,
  Smartphone,
  Users,
  Building2,
  Globe2,
  Target,
  ShieldCheck,
  Crown,
  Diamond,
  CheckCircle2,
  XCircle,
  Quote,
  Sparkles,
  BookOpen,
  TrendingUp,
  Award,
  HelpCircle,
  Clock,
  Check,
  UserCheck,
  Calendar,
  Layers,
  FileText,
  Info,
} from 'lucide-react'

// ─── Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Entrepreneurs',
  },
  {
    icon: Building2,
    value: '45+',
    label: 'Cities',
  },
  {
    icon: Globe2,
    value: '25+',
    label: 'Countries',
  },
  {
    icon: Target,
    value: '1M',
    label: 'Lives to Impact',
  },
]

// ─── What You Invest Table ────────────────────────────────────────────────
const INVEST_ROWS = [
  {
    item: 'Membership Fee',
    cost: '₹18,000 per year',
    detail: 'Unity App, community platform, member directory, recognition system and your Circle seat',
  },
  {
    item: 'Circle Experience Fee',
    cost: '₹15,000 – ₹22,000 per year',
    detail: 'Varying by Circle and city — paid in advance for 12 monthly meetings, covering venue and refreshments',
  },
  {
    item: 'Typical all-in',
    cost: '₹33,000 – ₹40,000 per year',
    detail: 'Plus GST',
    highlight: true,
  },
  {
    item: 'Time',
    cost: '5–10 hours per month',
    detail: 'One focused meeting plus collaboration follow-ups',
  },
]

// ─── What You Receive Table ───────────────────────────────────────────────
const RECEIVE_ROWS = [
  { benefit: '12 Monthly Circle Meetings', value: '₹60,000+' },
  { benefit: '2–4 Mega Networking Events', value: '₹30,000+' },
  { benefit: '2 Leadership Retreats', value: '₹50,000+' },
  { benefit: '2 Family Meetups', value: 'Priceless' },
  { benefit: '1 Annual Awards & Recognition Ceremony', value: '₹25,000+' },
  { benefit: '2 Leadership Transition Events', value: '₹30,000+' },
  { benefit: '1 Industry Magazine Edition', value: '₹15,000+' },
  { benefit: 'Unlimited Collaborations', value: 'High' },
  { benefit: 'Year-Round Media & PR', value: 'High' },
]

export function TiersClient() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans">

      {/* =================================================================
          SECTION 1: HERO — Executive Split with Master Full Page Dark Video Banner
          ================================================================= */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Full Bleed Hero Video Background */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            poster="/images/membership-hero-peers.jpg"
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <Link href="/membership" className="hover:text-white transition-colors">Membership</Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-white font-semibold">Membership &amp; Investment</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Hero Content */}
            <div className="lg:col-span-12 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>MEMBERSHIP &amp; INVESTMENT</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  Your Annual Investment in{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    High-Trust Growth
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Full transparency. Here is exactly what membership costs — in money and in time — so your decision is a complete one.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="default"
                  className="font-semibold"
                >
                  Download Unity App
                </GalaxyButton>
                <GalaxyButton
                  href="/membership/criteria"
                  variant="transparent"
                  size="default"
                  className="font-medium"
                >
                  Apply for Membership
                </GalaxyButton>
              </div>
            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="group rounded-2xl bg-white/10 border border-white/15 p-4 sm:p-5 flex items-center gap-3.5 shadow-lg backdrop-blur-md hover:bg-white/15 hover:border-white/25 transition-all duration-300"
                >
                  <div className="size-11 sm:size-12 rounded-xl bg-blue-500/20 border border-blue-400/30 text-sky-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="size-5 sm:size-6" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-sky-300 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 2: HOW MEMBERSHIP WORKS — Two Commitments + Steps
          ================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-left max-w-3xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                How Membership Works
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight leading-tight">
              Two commitments, taken in your own time.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Box: 2 Main Commitments (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-2xs">
              <div className="space-y-5">
                {/* Commitment 1 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2] flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-[#0062D2]" /> Step 1: Platform Subscription
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                      Foundation
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    Your Peers Global subscription gives you the platform.
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-light">
                    The Unity App, the community, the Peer directory, the recognition system, and the ability to connect with entrepreneurs across cities and countries.
                  </p>
                </div>

                {/* Commitment 2 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2] flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-rose-500" /> Step 2: Circle Experience
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                      When Ready
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    A Circle is a separate, intentional step.
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-light">
                    When you are ready for a room, you request a Circle, it is approved by the Circle Director and the Membership Experience Committee, and you pay that Circle's Experience Fee. Twelve meetings a year, roundtables, masterclasses and a seat where your business category is held by you alone.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <p className="text-xs text-slate-700 italic font-light">
                  Many Peers join the platform first, spend months in the community, and request a Circle when the right room is available.
                </p>
                <GalaxyButton
                  href="/circles"
                  size="sm"
                  className="shrink-0 uppercase tracking-wider font-bold"
                >
                  Explore Circles
                </GalaxyButton>
              </div>
            </div>

            {/* Right Column: Quote + 3-Step Pathway (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              {/* Quote Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#061226] via-[#0A1A38] to-[#040D1E] text-white border border-slate-800 shadow-lg relative overflow-hidden space-y-3">
                <div className="absolute top-0 right-0 size-40 rounded-full bg-blue-600/15 blur-2xl pointer-events-none" />
                <div className="size-9 rounded-xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/15">
                  <Quote className="size-4.5" />
                </div>
                <blockquote className="text-base sm:text-lg font-semibold text-white leading-snug">
                  “The best investment an entrepreneur can make is in the people around their journey.”
                </blockquote>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-300/80">
                  PEERS GLOBAL CODE
                </div>
              </div>

              {/* 3 Steps Progression */}
              <div className="space-y-2.5">
                {[
                  { num: '01', title: 'Join the Community', desc: 'Access the Unity platform and verified network immediately', icon: Users, color: 'text-blue-600 bg-blue-50 border-blue-100' },
                  { num: '02', title: 'Request a Circle', desc: 'Apply for category exclusivity when you are ready', icon: Clock, color: 'text-purple-600 bg-purple-50 border-purple-100' },
                  { num: '03', title: 'Take Your Seat', desc: 'Engage in a room of peers that accelerates your growth', icon: UserCheck, color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
                ].map((s) => {
                  const SIcon = s.icon
                  return (
                    <div
                      key={s.num}
                      className="p-3.5 sm:p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 hover:border-slate-300 transition-all flex items-center justify-between gap-3 shadow-2xs group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`size-9 rounded-xl flex items-center justify-center border shrink-0 ${s.color}`}>
                          <SIcon className="size-4.5" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors leading-tight">
                            {s.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 font-light mt-0.5">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 bg-white border border-slate-200/60 px-2 py-0.5 rounded-md shrink-0">
                        {s.num}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 3: MEMBERSHIP OPTIONS — Peer vs Charter Peer vs Freedom
          ================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Membership Options
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight leading-tight">
              Two memberships. One community.
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-light">
              Choose the tier aligned with your business stage, operational scale, and growth ambition.
            </p>
          </div>

          {/* 3 Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Card 1: Peer Membership (4 cols) */}
            <div className="lg:col-span-4 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 group">
              <div>
                <div className="size-11 rounded-2xl bg-blue-50 border border-blue-100 text-[#0062D2] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Users className="size-5.5" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                  Peer Membership
                </h3>
                <div className="text-2xl sm:text-3xl font-bold text-[#0062D2] mb-1.5 font-mono">
                  ₹18,000 <span className="text-xs font-sans text-slate-500 font-normal">per year</span>
                </div>
                <p className="text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-6">
                  FOR ENTREPRENEURS BUILDING AND GROWING THEIR BUSINESS.
                </p>

                <ul className="space-y-3 text-xs sm:text-[13px] text-slate-700 mb-8 font-light">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900 font-semibold">Access to Unity App</strong> and community platform</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900 font-semibold">Peer directory and connections</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900 font-semibold">Recognition system and Peers Coin</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900 font-semibold">Marketplace access</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900 font-semibold">Event eligibility</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900 font-semibold">Request a Circle when ready</strong> (separate fee)</span>
                  </li>
                </ul>
              </div>

              <div>
                <GalaxyButton
                  href="/membership/criteria"
                  size="default"
                  className="w-full uppercase tracking-wider font-bold"
                >
                  Apply for Membership
                </GalaxyButton>
              </div>
            </div>

            {/* Card 2: Charter Peer (Navy Dark with Ribbon - 5 cols) */}
            <div className="lg:col-span-5 rounded-3xl bg-[#081226] text-white border border-slate-800 p-6 sm:p-9 flex flex-col justify-between shadow-xl relative overflow-hidden group">
              {/* Most Popular Ribbon */}
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] font-bold uppercase tracking-wider shadow-md">
                  MOST POPULAR
                </span>
              </div>

              <div>
                <div className="size-11 rounded-2xl bg-amber-400/20 border border-amber-400/40 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Crown className="size-5.5" />
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                  Charter Peer
                </h3>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-300 mb-1.5 font-mono">
                  ₹1,00,000 <span className="text-xs font-sans text-slate-400 font-normal">per year</span>
                </div>
                <p className="text-[11px] uppercase font-bold tracking-wider text-slate-400 mb-6">
                  FOR ENTREPRENEURS BUILDING ACROSS CITIES, INDUSTRIES AND BORDERS.
                </p>

                <ul className="space-y-3 text-xs sm:text-[13px] text-slate-200 mb-8 font-light">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white font-semibold">Everything in Peer Membership</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white font-semibold">Open access to every Peer</strong> (view full profiles and contact details directly)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white font-semibold">Twelve cross-region meetings a year</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white font-semibold">The Charter Circle</strong> (national and international scale)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white font-semibold">First priority on leadership opportunities</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white font-semibold">First priority on media and stages</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white font-semibold">Charter-only gatherings and special sessions</strong></span>
                  </li>
                </ul>
              </div>

              <div>
                <GalaxyButton
                  href="/membership/criteria"
                  variant="transparent-light"
                  size="default"
                  className="w-full uppercase tracking-wider font-bold"
                >
                  Apply for Charter Membership
                </GalaxyButton>
                <p className="text-[10px] text-slate-400 text-center mt-3 italic">
                  First priority is a priority of approach, not a guarantee.
                </p>
              </div>
            </div>

            {/* Card 3: Freedom to go further (3 cols) */}
            <div className="lg:col-span-3 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 group">
              <div>
                <div className="size-11 rounded-2xl bg-blue-50 border border-blue-100 text-[#0062D2] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Diamond className="size-5.5" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  Freedom to go further.
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-6">
                  Charter Peers get greater access, broader exposure and priority opportunities across the entire ecosystem.
                </p>

                <div className="h-px w-full bg-slate-200/80 mb-6" />

                <div className="text-slate-800 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  <p className="text-xl sm:text-2xl text-slate-700">Designed in Bharat.</p>
                  <p className="text-2xl sm:text-3xl text-[#0062D2] font-bold mt-1">Built for the World.</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-[11px] text-slate-500 font-medium">
                  Global collaboration across 25+ countries.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 4: WHAT YOU INVEST — Transparent Breakdown
          ================================================================= */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0062D2]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0062D2]">
                What You Invest
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Transparent breakdown
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Every rupee and hour required to participate fully. No hidden renewal clauses or unexpected fees.
            </p>
          </div>

          {/* Investment Breakdown Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {INVEST_ROWS.map((row, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                  row.highlight
                    ? 'bg-gradient-to-b from-blue-50/80 to-white border-blue-200 shadow-xs ring-1 ring-blue-500/10'
                    : 'bg-white border-slate-200/90 shadow-2xs hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Step 0{idx + 1}
                    </span>
                    {row.highlight && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow-xs">
                        All-in Total
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {row.item}
                  </h3>

                  <div className="py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-100 font-mono text-base sm:text-lg font-bold text-[#0062D2] mb-4">
                    {row.cost}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {row.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                  <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                  <span>100% transparent pricing</span>
                </div>
              </div>
            ))}
          </div>

          {/* Note Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-3 text-xs sm:text-sm text-slate-600 shadow-2xs">
            <Info className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
            <p>
              <strong className="font-semibold text-slate-900">Please Note:</strong> Circle Experience Fees vary by Circle and city depending on the meeting venue standards. The exact amount is confirmed transparently when your Circle seat request is approved.
            </p>
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 5: WHAT YOU RECEIVE — ₹2,00,000+ Estimated Value
          ================================================================= */}
      <section className="py-14 sm:py-18 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                What You Receive
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              ₹2,00,000+ estimated annual value
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Every member receives tangible executive access, curated retreats, events, and brand positioning before closing a single business deal.
            </p>
          </div>

          {/* Deliverables Grid + Grand Total Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left 8 Cols: Value Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RECEIVE_ROWS.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                      <Sparkles className="size-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {row.benefit}
                    </span>
                  </div>
                  <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shrink-0 ml-3">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Right 4 Cols: Grand Summary Card */}
            <div className="lg:col-span-4 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 text-white p-7 sm:p-8 shadow-xl flex flex-col justify-between min-h-[380px] border border-slate-800">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
                  <Award className="size-3.5" />
                  Value Multiplier
                </div>

                <p className="text-xs sm:text-sm text-slate-400 font-light mb-1">
                  Guaranteed Delivered Value
                </p>
                <div className="text-3xl sm:text-4xl font-bold text-white font-mono tracking-tight mb-4">
                  ₹2,00,000+
                </div>

                <div className="h-px w-full bg-slate-800 my-4" />

                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  You receive roughly <strong className="text-amber-300 font-semibold">6x to 7x return</strong> in direct event and leadership infrastructure for an investment of ~₹33,000–₹40,000 all-in.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <Link
                  href="/membership"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all group uppercase tracking-wider"
                >
                  <span>Claim Your Seat</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-[11px] text-slate-400 text-center mt-3 font-light">
                  Direct peer vetting • No sales pitches
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 6: WHAT NO SUBSCRIPTION BUYS & FEES AND TERMS
          ================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Left Box: What no subscription buys */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-9 shadow-2xs space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600">
                  Our Code
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                What no subscription buys
              </h3>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 font-light">
                <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/60 border border-slate-100">
                  <div className="size-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="size-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-semibold">Peer Standing cannot be purchased.</strong> It comes from contribution confirmed by the entrepreneurs you helped.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/60 border border-slate-100">
                  <div className="size-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="size-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-semibold">Peers Coin cannot be purchased.</strong> Every coin was earned by helping another entrepreneur.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/60 border border-slate-100">
                  <div className="size-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="size-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-semibold">Leadership cannot be purchased.</strong> Every role is open to every Peer and follows contribution alone.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/60 border border-slate-100">
                  <div className="size-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="size-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-semibold">Event access is never complimentary.</strong> Every event carries a fee, for Charter Peers and Peers alike.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/60 border border-slate-100">
                  <div className="size-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="size-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-semibold">Respect inside a room cannot be purchased.</strong> A Peer who gives generously carries more weight in any Circle than a Charter Peer who does not.
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Box: Fees and terms */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-9 shadow-2xs space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  Terms &amp; Conditions
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                Fees and terms
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-light">
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-semibold">Peers Global subscription:</strong> ₹18,000 per year, exclusive of tax</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-semibold">Charter Peer subscription:</strong> ₹1,00,000 per year, exclusive of tax</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-semibold">Circle Experience Fee:</strong> Varies by Circle and city, payable on approval</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-semibold">Joining fee:</strong> None</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-semibold">Tax:</strong> GST in India, local equivalents elsewhere</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-semibold">Refunds:</strong> All fees are non-refundable</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-semibold">Upgrading to Charter:</strong> Subscribe at any time</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/terms"
                  className="text-xs font-bold text-[#0062D2] hover:text-[#0052B4] inline-flex items-center gap-1.5 uppercase tracking-wider"
                >
                  <span>Read Full Membership Terms</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 7: THE LSR GROWTH MODEL + READY TO BEGIN? CTA
          ================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left: The LSR Growth Model (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-2xs">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    The LSR Growth Model
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                  Learning, sales &amp; resources in harmony
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2 group hover:border-blue-300 transition-all">
                    <div className="size-9 rounded-xl bg-blue-50 border border-blue-100/60 text-[#0062D2] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <BookOpen className="size-4.5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors">Learning</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      Masterclasses, playbooks and experiential wisdom.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2 group hover:border-emerald-300 transition-all">
                    <div className="size-9 rounded-xl bg-emerald-50 border border-emerald-100/60 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <TrendingUp className="size-4.5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Sales</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      Referrals, warm introductions and trusted market access.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2 group hover:border-rose-300 transition-all">
                    <div className="size-9 rounded-xl bg-rose-50 border border-rose-100/60 text-rose-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Users className="size-4.5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-rose-700 transition-colors">Resources</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      Talent, capital, partners, suppliers and expertise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-slate-700 flex items-center gap-2">
                <span className="text-[#0062D2] font-bold text-sm">✦</span>
                <p>
                  <strong className="text-slate-900 font-semibold">Held together by relationships:</strong> A mission to enhance the lives of one million entrepreneurs.
                </p>
              </div>
            </div>

            {/* Right: Ready to begin? (5 cols) */}
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#061226] via-[#0A1A38] to-[#040D1E] text-white p-7 sm:p-9 shadow-xl border border-slate-800 relative overflow-hidden flex flex-col justify-between space-y-6">
              {/* Subtle top ambient glow */}
              <div className="absolute -top-10 -right-10 size-48 rounded-full bg-blue-600/20 blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
                    Get Started
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                  Ready to begin?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Join a community of entrepreneurs who give, grow and build enduring relationships together.
                </p>
              </div>

              <div className="relative z-10 flex flex-col gap-3">
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="default"
                  className="w-full uppercase tracking-wider font-bold"
                >
                  Download Unity App
                </GalaxyButton>
                <GalaxyButton
                  href="/membership/criteria"
                  variant="transparent"
                  size="default"
                  className="w-full uppercase tracking-wider font-bold"
                >
                  Apply for Membership
                </GalaxyButton>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
          SECTION 1: HERO — Executive Split with Fade Mask & Script
          ================================================================= */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-16 lg:pb-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <Link href="/membership" className="hover:text-slate-900 transition-colors">Membership</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-[#0062D2] font-semibold">Membership & Investment</span>
          </div>

          {/* Hero Banner Box */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] flex items-center">

            {/* Fade Visual (Right 60%) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
              }}
            >
              <video
                src="/videos/stories-hero-bg.mp4"
                poster="/images/membership-hero-peers.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center scale-105"
              />
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

              {/* Cursive Script Overlay - Top Right */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 z-20 text-right drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Better People
                </p>
                <p className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Bigger Opportunities.
                </p>
              </div>

              {/* Cursive Script Overlay - Bottom Right */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Invest in People.
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Build What Matters.
                </p>
              </div>
            </div>

            {/* Left Content (Z-10) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    MEMBERSHIP & INVESTMENT
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  Your Annual Investment
                </h1>

                <p className="text-xl sm:text-2xl text-slate-800 font-medium leading-snug mb-3 font-serif italic">
                  Full transparency.
                </p>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8">
                  Here is exactly what membership costs — in money and in time — so your decision is a complete one.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4" />
                  </a>
                  <Link
                    href="/membership/criteria"
                    className="rounded-full border border-slate-300 hover:border-[#0062D2] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0062D2] px-7 py-3.5 text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Apply for Membership</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>

              </div>
            </div>

          </div>

          {/* Floating Stats Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="size-11 sm:size-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Icon className="size-5 sm:size-6 text-[#0062D2]" />
                  </div>
                  <div>
                    <div className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
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
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Narrative (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  HOW MEMBERSHIP WORKS
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-tight mb-5">
                Two commitments, taken in your own time.
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                <strong className="text-slate-900 font-semibold">Your Peers Global subscription gives you the platform.</strong> <br />
                The Unity App, the community, the Peer directory, the recognition system, and the ability to connect with entrepreneurs across cities and countries.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                <strong className="text-slate-900 font-semibold">A Circle is a separate step.</strong> <br />
                When you are ready for a room, you request a Circle, it is approved by the Circle Director and the Membership Experience Committee, and you pay that Circle's Experience Fee. Twelve meetings a year, roundtables, masterclasses and a seat where your business category is held by you alone.
              </p>

              <p className="text-xs sm:text-sm text-slate-500 italic mb-6">
                Many Peers join the platform first, spend months in the community, and request a Circle when the right room is available.
              </p>

              <div>
                <Link
                  href="/circles"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-bold shadow-md shadow-blue-600/20 transition-all inline-flex items-center gap-2"
                >
                  <span>See How Circles Work</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Center Quote Card (4 cols) */}
            <div className="lg:col-span-4 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-blue-50/50 border border-slate-200/90 p-8 shadow-sm">
              <div className="size-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-5 shadow-sm">
                <Quote className="size-6" />
              </div>

              <blockquote className="font-serif text-2xl text-slate-900 leading-snug mb-6 font-normal">
                “The best investment an entrepreneur can make is in the people around their journey.”
              </blockquote>

              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                PEERS GLOBAL —
              </div>
            </div>

            {/* Right 3-Step Progression (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="rounded-2xl bg-[#FAFBFD] border border-slate-200/90 p-4 sm:p-5 flex items-center gap-4 shadow-2xs">
                <div className="size-11 rounded-xl bg-blue-50 border border-blue-100 text-[#0062D2] flex items-center justify-center shrink-0">
                  <Users className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Join the community
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Access the platform immediately
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#FAFBFD] border border-slate-200/90 p-4 sm:p-5 flex items-center gap-4 shadow-2xs">
                <div className="size-11 rounded-xl bg-blue-50 border border-blue-100 text-[#0062D2] flex items-center justify-center shrink-0">
                  <Clock className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Request a Circle
                  </div>
                  <div className="text-[11px] text-slate-500">
                    When you’re ready
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#FAFBFD] border border-slate-200/90 p-4 sm:p-5 flex items-center gap-4 shadow-2xs">
                <div className="size-11 rounded-xl bg-blue-50 border border-blue-100 text-[#0062D2] flex items-center justify-center shrink-0">
                  <UserCheck className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Take your seat
                  </div>
                  <div className="text-[11px] text-slate-500">
                    In a room that accelerates your growth
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 3: MEMBERSHIP OPTIONS — Peer vs Charter Peer vs Freedom
          ================================================================= */}
      <section className="py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                MEMBERSHIP OPTIONS
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-4">
              Two memberships. One community.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Choose the tier aligned with your business stage, operational scale, and growth ambition.
            </p>
          </div>

          {/* 3 Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Card 1: Peer Membership (4 cols) */}
            <div className="lg:col-span-4 rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="size-12 rounded-2xl bg-blue-50 border border-blue-100 text-[#0062D2] flex items-center justify-center mb-5">
                  <Users className="size-6" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">
                  Peer Membership
                </h3>
                <div className="font-serif text-3xl font-bold text-[#0062D2] mb-2">
                  ₹18,000 <span className="text-xs font-sans text-slate-500 font-normal">per year</span>
                </div>
                <p className="text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-6">
                  FOR ENTREPRENEURS BUILDING AND GROWING THEIR BUSINESS.
                </p>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 mb-8">
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
                <Link
                  href="/membership/criteria"
                  className="w-full rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-6 py-3.5 text-xs sm:text-sm font-bold shadow-md shadow-blue-600/20 transition-all text-center inline-flex items-center justify-center gap-2"
                >
                  <span>Apply for Membership</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Charter Peer (Navy Dark with Ribbon - 5 cols) */}
            <div className="lg:col-span-5 rounded-3xl bg-[#081226] text-white border border-slate-800 p-7 sm:p-9 flex flex-col justify-between shadow-xl relative overflow-hidden">
              {/* Most Popular Ribbon */}
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] font-bold uppercase tracking-wider shadow-md">
                  MOST POPULAR
                </span>
              </div>

              <div>
                <div className="size-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 text-amber-400 flex items-center justify-center mb-5">
                  <Crown className="size-6" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                  Charter Peer
                </h3>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-amber-300 mb-2">
                  ₹1,00,000 <span className="text-xs font-sans text-slate-400 font-normal">per year</span>
                </div>
                <p className="text-[11px] uppercase font-bold tracking-wider text-slate-400 mb-6">
                  FOR ENTREPRENEURS BUILDING ACROSS CITIES, INDUSTRIES AND BORDERS.
                </p>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200 mb-8">
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
                <Link
                  href="/membership/criteria"
                  className="w-full rounded-full bg-white hover:bg-slate-100 text-[#081226] px-6 py-3.5 text-xs sm:text-sm font-bold shadow-lg transition-all text-center inline-flex items-center justify-center gap-2"
                >
                  <span>Apply for Charter Membership</span>
                  <ArrowRight className="size-4" />
                </Link>
                <p className="text-[10px] text-slate-400 text-center mt-3 italic">
                  First priority is a priority of approach, not a guarantee.
                </p>
              </div>
            </div>

            {/* Card 3: Freedom to go further (3 cols) */}
            <div className="lg:col-span-3 rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="size-12 rounded-2xl bg-blue-50 border border-blue-100 text-[#0062D2] flex items-center justify-center mb-5">
                  <Diamond className="size-6" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                  Freedom to go further.
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Charter Peers get greater access, broader exposure and priority opportunities across the entire ecosystem.
                </p>

                <div className="h-px w-full bg-slate-200 mb-6" />

                <div className="text-slate-800 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  <p className="text-2xl sm:text-3xl text-slate-700">Designed in Bharat.</p>
                  <p className="text-3xl sm:text-4xl text-[#0062D2] font-bold mt-1">Built for the World.</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-[11px] text-slate-500">
                  Global collaboration across 25+ countries.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 4: WHAT YOU INVEST vs WHAT YOU RECEIVE (Two Tables)
          ================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Table: WHAT YOU INVEST (6 Cols) */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  WHAT YOU INVEST
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                Transparent breakdown
              </h3>

              <div className="rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-slate-200/80">
                    {INVEST_ROWS.map((row, idx) => (
                      <tr
                        key={idx}
                        className={row.highlight ? 'bg-blue-50/70 font-semibold' : 'bg-white'}
                      >
                        <td className="p-4 sm:p-5 font-bold text-slate-900 align-top w-1/3">
                          {row.item}
                        </td>
                        <td className="p-4 sm:p-5 font-semibold text-[#0062D2] align-top whitespace-nowrap">
                          {row.cost}
                        </td>
                        <td className="p-4 sm:p-5 text-slate-600 align-top text-xs">
                          {row.detail}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-slate-500 mt-4 italic leading-relaxed">
                Circle Experience Fees vary by Circle and city. The exact amount is confirmed when your Circle request is approved.
              </p>
            </div>

            {/* Right Table: WHAT YOU RECEIVE (6 Cols) */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  WHAT YOU RECEIVE
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                ₹2,00,000+ estimated annual value
              </h3>

              <div className="rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#FAFBFD] border-b border-slate-200">
                    <tr>
                      <th className="p-3.5 sm:p-4 font-bold text-slate-700">Benefit</th>
                      <th className="p-3.5 sm:p-4 font-bold text-slate-700 text-right">Estimated value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {RECEIVE_ROWS.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-3 sm:p-3.5 text-slate-800">{row.benefit}</td>
                        <td className="p-3 sm:p-3.5 text-slate-900 font-semibold text-right">{row.value}</td>
                      </tr>
                    ))}
                    <tr className="bg-amber-50/80 font-bold border-t-2 border-amber-200">
                      <td className="p-4 text-slate-950 font-serif text-sm sm:text-base">
                        Total annual value
                      </td>
                      <td className="p-4 text-right font-serif text-base sm:text-lg text-slate-950">
                        ₹2,00,000+
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-slate-500 mt-4 italic leading-relaxed">
                ₹2,00,000+ in annual value for roughly ₹33,000–₹40,000 all-in — before a single business deal.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 5: WHAT NO SUBSCRIPTION BUYS & FEES AND TERMS
          ================================================================= */}
      <section className="py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Left Box: What no subscription buys */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-0.5 w-6 bg-rose-500" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-rose-600">
                  OUR CODE
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">
                What no subscription buys
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="size-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Peer Standing cannot be purchased.</strong> It comes from contribution confirmed by the entrepreneurs you helped.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="size-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Peers Coin cannot be purchased.</strong> Every coin was earned by helping another entrepreneur.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="size-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Leadership cannot be purchased.</strong> Every role is open to every Peer and follows contribution alone.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="size-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Event access is never complimentary.</strong> Every event carries a fee, for Charter Peers and Peers alike.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="size-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Respect inside a room cannot be purchased.</strong> A Peer who gives generously carries more weight in any Circle than a Charter Peer who does not.
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Box: Fees and terms */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  TERMS & CONDITIONS
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">
                Fees and terms
              </h3>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 mb-6">
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Peers Global subscription:</strong> ₹18,000 per year, exclusive of tax</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Charter Peer subscription:</strong> ₹1,00,000 per year, exclusive of tax</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Circle Experience Fee:</strong> Varies by Circle and city, payable on approval</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Joining fee:</strong> None</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Tax:</strong> GST in India, local equivalents elsewhere</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Refunds:</strong> All fees are non-refundable</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Upgrading to Charter:</strong> Subscribe at any time</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/terms"
                  className="text-xs font-bold text-[#0062D2] hover:text-[#0052B4] inline-flex items-center gap-1.5"
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
          SECTION 6: THE LSR GROWTH MODEL + READY TO BEGIN? CTA
          ================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left: The LSR Growth Model (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  THE LSR GROWTH MODEL
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-3">
                    <BookOpen className="size-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Learning</h4>
                  <p className="text-xs text-slate-500 leading-snug">
                    Masterclasses, playbooks and mentorship.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="size-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                    <TrendingUp className="size-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Sales</h4>
                  <p className="text-xs text-slate-500 leading-snug">
                    Referrals, introductions and market access.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-3">
                    <Users className="size-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Resources</h4>
                  <p className="text-xs text-slate-500 leading-snug">
                    Talent, capital, partners, suppliers and expertise.
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 font-medium">
                <strong className="text-slate-900">Held together by relationships.</strong> A mission to enhance the lives of one million entrepreneurs.
              </p>
            </div>

            {/* Right: Ready to begin? (5 cols) */}
            <div className="lg:col-span-5 rounded-3xl bg-[#081226] text-white p-8 sm:p-10 shadow-lg relative overflow-hidden">
              {/* Background Looping Video Layer */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover object-center"
                >
                  <source src="/videos/leadership-hero-bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#081226] via-[#081226]/60 to-transparent" />
              </div>

              <div className="relative z-10">
                <h3 className="font-serif text-3xl font-bold text-white mb-3">
                  Ready to begin?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                  Join a community of entrepreneurs who give, grow and build together.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-6 py-3.5 text-xs sm:text-sm font-bold shadow-md shadow-blue-600/25 transition-all text-center inline-flex items-center justify-center gap-2"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4" />
                  </a>
                  <Link
                    href="/membership/criteria"
                    className="w-full sm:w-auto flex-1 rounded-full border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 text-xs sm:text-sm font-semibold transition-all text-center inline-flex items-center justify-center gap-2"
                  >
                    <span>Apply for Membership</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

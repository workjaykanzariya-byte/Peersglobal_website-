'use client'

import React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  Smartphone,
  Check,
  ShieldCheck,
  UserCheck,
  Calendar,
  Clock,
  Sparkles,
  Lock,
  Layers,
  Heart,
  Users2,
  Award,
  Sprout,
  Building2,
  Globe2,
  MapPin,
  TrendingUp,
  MessageSquare,
  Ear,
  Brain,
  Quote,
  HeartHandshake,
  Share2,
  Target,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react'

// ─── What Leadership Here Develops (8 Capabilities) ────────────────────────
const WHAT_LEADERSHIP_DEVELOPS = [
  { text: 'Bring entrepreneurs together around a common purpose', icon: HeartHandshake, color: 'text-blue-600 bg-blue-50 border-blue-200/70', accentColor: '#0062D2' },
  { text: 'Create trust between people who may not know one another', icon: ShieldCheck, color: 'text-emerald-600 bg-emerald-50 border-emerald-200/70', accentColor: '#059669' },
  { text: 'Facilitate conversations rather than dominate them', icon: MessageSquare, color: 'text-indigo-600 bg-indigo-50 border-indigo-200/70', accentColor: '#4F46E5' },
  { text: 'Recognise and celebrate contribution', icon: Award, color: 'text-amber-600 bg-amber-50 border-amber-200/70', accentColor: '#D97706' },
  { text: 'Develop and mentor other leaders', icon: Users2, color: 'text-purple-600 bg-purple-50 border-purple-200/70', accentColor: '#7C3AED' },
  { text: 'Build communities around deep relationships', icon: Heart, color: 'text-rose-600 bg-rose-50 border-rose-200/70', accentColor: '#E11D48' },
  { text: 'Represent something larger than yourself', icon: Globe2, color: 'text-cyan-600 bg-cyan-50 border-cyan-200/70', accentColor: '#0891B2' },
  { text: 'Think beyond one Circle, one city or one industry', icon: Sparkles, color: 'text-teal-600 bg-teal-50 border-teal-200/70', accentColor: '#0D9488' },
]

// ─── The Leadership Pathway (6 Stages) ────────────────────────────────────
const LEADERSHIP_PATHWAY = [
  {
    num: '01',
    stage: 'Stage 01',
    title: 'Begin With Contribution',
    desc: 'Leadership begins with participation. You become part of the community, understand its culture, build relationships and discover where your experience can be useful to others.',
    tag: 'Foundation',
    color: 'text-blue-600 bg-blue-50 border-blue-200/70',
    accentColor: '#0062D2',
  },
  {
    num: '02',
    stage: 'Stage 02',
    title: 'The Powerhouse',
    desc: 'Fourteen entrepreneurs hold the Circle together through distributed responsibility, committees and project leadership. You are no longer simply attending—you are helping the Circle work.',
    tag: 'Circle Committee',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200/70',
    accentColor: '#4F46E5',
  },
  {
    num: '03',
    stage: 'Stage 03',
    title: 'Circle Director',
    desc: 'The Circle Director runs the Circle month after month. The role is not simply to manage meetings: it is to grow the Circle—and everyone in it.',
    tag: 'Monthly Leadership',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200/70',
    accentColor: '#059669',
  },
  {
    num: '04',
    stage: 'Stage 04',
    title: 'Industry Director',
    desc: 'An Industry Director takes responsibility for the sector ecosystem within a city, creating a point of leadership, visibility and mentorship around that industry.',
    tag: 'City Sector Owner',
    color: 'text-amber-600 bg-amber-50 border-amber-200/70',
    accentColor: '#D97706',
  },
  {
    num: '05',
    stage: 'Stage 05',
    title: 'Executive Director',
    desc: 'The Executive Director carries responsibility across a wider geography: Area → District → State → Country as the community expands.',
    tag: 'Regional Builder',
    color: 'text-purple-600 bg-purple-50 border-purple-200/70',
    accentColor: '#7C3AED',
  },
  {
    num: '06',
    stage: 'Stage 06',
    title: 'Global Leadership',
    desc: 'Connecting people, developing leaders and strengthening the wider PEERS GLOBAL ecosystem. Lead by serving. Grow by contributing. Influence by earning trust.',
    tag: 'Ecosystem Steward',
    color: 'text-rose-600 bg-rose-50 border-rose-200/70',
    accentColor: '#E11D48',
  },
]

// ─── The Roles System ─────────────────────────────────────────────────────
const ROLES = [
  {
    title: 'POWERHOUSE',
    badge: 'Circle Committee Team',
    desc: 'The leadership team of a Circle. Fourteen entrepreneurs hold the Circle together through its committees and project responsibilities. This is where many entrepreneurs first experience leadership inside PEERS GLOBAL.',
    icon: Users2,
    color: 'text-blue-600 bg-blue-50 border-blue-200/70',
    accentColor: '#0062D2',
    hoverBorder: 'hover:border-blue-400',
  },
  {
    title: 'CIRCLE DIRECTOR',
    badge: 'Runs the Room Month on Month',
    desc: 'Runs the Circle, month on month. The Director leads the leaders who lead the Circle and is responsible for helping the Circle—and everyone in it—grow.',
    icon: UserCheck,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200/70',
    accentColor: '#4F46E5',
    hoverBorder: 'hover:border-indigo-400',
  },
  {
    title: 'CIRCLE FOUNDER',
    badge: 'Launches New Rooms',
    desc: 'Launches new Circles. The Founder creates the room where a Circle can begin, convenes the industry and helps establish its leadership from Day 1.',
    icon: Sprout,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200/70',
    accentColor: '#059669',
    hoverBorder: 'hover:border-emerald-400',
  },
  {
    title: 'INDUSTRY DIRECTOR',
    badge: 'City Sector Owner',
    desc: 'The sector ecosystem owner for the city. Carries city-level responsibility for an industry and develops a wider ecosystem of relationships, mentorship and leadership around it.',
    icon: Building2,
    color: 'text-amber-600 bg-amber-50 border-amber-200/70',
    accentColor: '#D97706',
    hoverBorder: 'hover:border-amber-400',
  },
  {
    title: 'EXECUTIVE DIRECTOR',
    badge: 'Regional Territory Builder',
    desc: 'The regional ecosystem builder. Executive Directors operate across four levels as the community grows: Area → District → State → Country.',
    icon: MapPin,
    color: 'text-purple-600 bg-purple-50 border-purple-200/70',
    accentColor: '#7C3AED',
    hoverBorder: 'hover:border-purple-400',
  },
]

// ─── What It Will Cost You ───────────────────────────────────────────────
const WHAT_IT_COSTS = [
  'Time and focused attention',
  'Thorough preparation and presence',
  'Consistency month after month',
  'Patience with human timing and relationship growth',
  'The willingness to listen when you would rather speak',
  'The willingness to help when there is no immediate return',
  'The willingness to carry responsibility when nobody else has stepped forward',
]

// ─── The Influence You Build Here ─────────────────────────────────────────
const INFLUENCE_POINTS = [
  { text: 'Someone trusts you enough to ask for help.', icon: HeartHandshake, color: 'text-blue-600 bg-blue-50 border-blue-200/70' },
  { text: 'Someone finds the right connection because you introduced them.', icon: Share2, color: 'text-indigo-600 bg-indigo-50 border-indigo-200/70' },
  { text: 'A new entrepreneur finds confidence because you made room for them.', icon: Sparkles, color: 'text-emerald-600 bg-emerald-50 border-emerald-200/70' },
  { text: 'A Circle becomes stronger because you stayed committed.', icon: ShieldCheck, color: 'text-amber-600 bg-amber-50 border-amber-200/70' },
  { text: 'Another leader grows because you gave them responsibility.', icon: Award, color: 'text-purple-600 bg-purple-50 border-purple-200/70' },
  { text: 'A city develops because entrepreneurs begin working together.', icon: Globe2, color: 'text-rose-600 bg-rose-50 border-rose-200/70' },
]

export function LeadershipLadderClient() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans antialiased">

      {/* ─── Breadcrumb ────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Leadership</span>
          </nav>
        </div>
      </div>

      {/* =========================================================================
          SECTION 1: HERO — LEADERSHIP (Signature Fade Video Banner)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-16 lg:pb-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Banner Box */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white via-white/95 to-slate-50 border border-slate-200/90 shadow-lg min-h-[480px] lg:min-h-[520px] flex items-center">

            {/* Fade Visual (Right 60%) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
              }}
            >
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/leadership-mountain-hero.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center scale-105"
              />
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

              {/* Script Overlay - Top Right */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Lead by Serving.
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight font-medium mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Grow by Contributing.
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Influence without Authority.
                </p>
              </div>

              {/* Pill Overlay - Bottom Right */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-right">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">LEADERSHIP PATHWAY</p>
                  <p className="text-xs font-bold tracking-wider text-white">EARNED THROUGH TRUST</p>
                </div>
              </div>
            </div>

            {/* Left Hero Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start space-y-5">
                
                {/* Eyebrow */}
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                    LEADERSHIP AT PEERS GLOBAL
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.15]">
                  Leading the leaders.
                </h1>

                {/* Description */}
                <div className="space-y-3 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  <p>
                    Leadership at PEERS GLOBAL is not about having a title. It is about taking responsibility for people, for relationships, for Circles—and eventually for the wider ecosystem.
                  </p>
                  <p className="font-semibold text-slate-900">
                    Entrepreneurs enter leadership here not because they need authority, but because they want to create <span className="text-[#0062D2]">influence without authority</span>.
                  </p>
                </div>

                {/* Sub-callout */}
                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-slate-700 flex items-center gap-2">
                  <span className="text-[#0062D2] font-bold text-sm">✦</span>
                  <p>
                    <strong className="text-slate-900 font-semibold">The Core Question:</strong> How much more can you make possible for others?
                  </p>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/leadership/apply"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:opacity-95 transition-all uppercase tracking-wider group"
                  >
                    <span>Apply to Lead</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-2xs"
                  >
                    <Smartphone className="size-4 text-[#0062D2]" />
                    <span>Download Unity App</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* 4-Item Floating Stats Bar */}
          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { val: '6 Stages', label: 'Leadership Ladder', sub: 'From member to ecosystem steward' },
              { val: '14 Leaders', label: 'Per Circle Powerhouse', sub: 'Distributed project leadership' },
              { val: '100% Governed', label: 'Zero Commercial Politics', sub: 'Elected & merit-based tenure' },
              { val: 'Influence', label: 'Without Authority', sub: 'Earned through deep trust & service' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="font-serif text-lg sm:text-xl font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                  {stat.val}
                </div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">{stat.label}</div>
                <div className="text-[11px] text-slate-500 font-normal">{stat.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHAT LEADERSHIP HERE DEVELOPS (8 Executive Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                DEVELOPMENT &amp; GROWTH
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-slate-900">
              What Leadership Here Develops
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Leadership inside PEERS GLOBAL gives an entrepreneur the opportunity to develop beyond their own business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {WHAT_LEADERSHIP_DEVELOPS.map((point, idx) => {
              const Icon = point.icon
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-2xl hover:border-blue-400/80 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white hover:to-slate-50/50 transition-all duration-300 cursor-default overflow-hidden"
                >
                  {/* Subtle top glow highlight on hover */}
                  <div
                    className="absolute top-0 inset-x-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, ${point.accentColor} 50%, transparent 100%)`,
                    }}
                  />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className={`size-11 rounded-2xl border flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-2xs ${point.color}`}>
                        <Icon className="size-5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-50 border border-slate-200/80 text-slate-600 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-[#0062D2] transition-colors shadow-2xs">
                        0{idx + 1}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#0062D2] transition-colors duration-300 leading-snug">
                      {point.text}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 group-hover:border-slate-200/90 flex items-center justify-between text-[11px] text-slate-400 font-medium relative z-10 transition-colors">
                    <span>Capability 0{idx + 1}</span>
                    <span className="text-[#0062D2] opacity-0 group-hover:opacity-100 transition-opacity font-semibold">Mastered &rarr;</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/80 border border-blue-200/60 shadow-2xs flex items-center justify-center text-center text-xs sm:text-sm font-medium text-slate-800">
            <span>
              Your business remains your primary responsibility. <strong className="text-slate-900 font-bold">Your leadership becomes your opportunity to contribute beyond it.</strong>
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE LEADERSHIP PATHWAY (SIX STAGES)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                THE SIX STAGES
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-slate-900">
              The Leadership Pathway
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              It is not designed as a race toward a higher position. It is a progression in the scale of responsibility you are willing to carry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {LEADERSHIP_PATHWAY.map((stage) => (
              <div
                key={stage.num}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-2xl hover:border-blue-400/80 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white hover:to-slate-50/50 transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Subtle top glow highlight on hover */}
                <div
                  className="absolute top-0 inset-x-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${stage.accentColor} 50%, transparent 100%)`,
                  }}
                />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="size-11 rounded-2xl bg-blue-50 border border-blue-200/70 text-[#0062D2] font-mono font-bold text-xs flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-2xs">
                      {stage.num}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-50 border border-slate-200/80 text-slate-600 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-[#0062D2] transition-colors shadow-2xs">
                      {stage.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors duration-300 leading-snug">
                      {stage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 font-light leading-relaxed mt-2.5 transition-colors">
                      {stage.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-slate-200/90 flex items-center justify-between text-[11px] text-slate-500 font-medium relative z-10 transition-colors">
                  <span className="text-slate-400 font-mono group-hover:text-slate-600 transition-colors">Stage 0{stage.num} of 06</span>
                  <span className="inline-flex items-center gap-1 text-[#0062D2] opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 font-semibold">
                    Explore Stage &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 text-center space-y-1.5 max-w-3xl mx-auto shadow-2xs">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
              LEADERSHIP FOLLOWS CONTRIBUTION
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-900">
              Lead by serving. Grow by contributing. Influence by earning trust.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOW A CIRCLE IS ACTUALLY LED & THE ROLES
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Part A: How a Circle is Actually Led (Founder vs Director) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="group p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 space-y-5">
              <div className="size-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/70 flex items-center justify-center font-bold shadow-2xs group-hover:scale-105 transition-transform">
                <Sprout className="size-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                The Circle Founder
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                The Founder brings a new Circle into existence. The Founder convenes the industry, creates the initial room, invites leaders and helps establish the Circle from Day 1.
              </p>
              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs font-bold text-emerald-800">
                ✦ Responsible for creating the possibility.
              </div>
            </div>

            <div className="group p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 space-y-5">
              <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] border border-blue-200/70 flex items-center justify-center font-bold shadow-2xs group-hover:scale-105 transition-transform">
                <UserCheck className="size-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors">
                The Circle Director
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                The Director runs the Circle, month on month. The Director develops the leadership team, maintains the rhythm of the Circle and helps the entrepreneurs inside it grow.
              </p>
              <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs font-bold text-[#0062D2]">
                ✦ Responsible for growing the Circle.
              </div>
            </div>
          </div>

          {/* Part B: The 5 Core Roles in the System */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="flex items-center justify-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  THE SYSTEM OF RESPONSIBILITY
                </span>
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">
                The Roles
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {ROLES.map((role, idx) => {
                const Icon = role.icon
                return (
                  <div
                    key={idx}
                    className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-2xl ${role.hoverBorder} hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white hover:to-slate-50/50 transition-all duration-300 cursor-default overflow-hidden`}
                  >
                    {/* Subtle top glow highlight on hover */}
                    <div
                      className="absolute top-0 inset-x-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `linear-gradient(90deg, transparent 0%, ${role.accentColor} 50%, transparent 100%)`,
                      }}
                    />

                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className={`size-12 rounded-2xl border flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-2xs ${role.color}`}>
                          <Icon className="size-5.5" />
                        </div>
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-50 border border-slate-200/80 text-slate-600 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-[#0062D2] transition-colors shadow-2xs">
                          {role.badge}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors leading-snug">
                          {role.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 font-light leading-relaxed mt-2.5 transition-colors">
                          {role.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-slate-200/90 flex items-center justify-between text-[11px] text-slate-500 font-medium relative z-10 transition-colors">
                      <span className="text-slate-400 font-mono">Role 0{idx + 1} of 05</span>
                      <span className="inline-flex items-center gap-1 text-[#0062D2] opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 font-semibold">
                        Role Profile &rarr;
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHAT EVERY LEADER SHARES & WHAT IT WILL COST YOU (Asymmetric 7:5 Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left: What Every Leader Shares (Dark Mesh Card) */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#061226] via-[#0A1A38] to-[#040D1E] text-white shadow-xl border border-slate-800 hover:shadow-2xl hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 size-64 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-3">
                    <span className="h-[2px] w-4 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
                      SHARED PRINCIPLES
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    What Every Leader Shares
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mt-2">
                    A leader does not become important because others report to them. A leader becomes valuable because others become stronger around them.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {[
                    'People come before positions.',
                    'Contribution comes before recognition.',
                    'Trust comes before influence.',
                    'Leadership is service.',
                  ].map((tenet, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.06] border border-white/10 text-xs sm:text-sm text-slate-200 font-medium flex items-center gap-2.5 hover:bg-white/[0.09] transition-colors">
                      <span className="text-sky-400 font-bold">✦</span>
                      <span>{tenet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-white/10 relative z-10 text-xs font-semibold text-amber-300 italic">
                Moral authority earned through contribution.
              </div>
            </div>

            {/* Right: What It Will Cost You */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                      HONEST REALITY
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                    What It Will Cost You
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2">
                    Leadership requires something real from you:
                  </p>
                </div>

                <div className="space-y-2">
                  {WHAT_IT_COSTS.map((cost, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700">
                      <span className="size-1.5 rounded-full bg-[#0062D2] shrink-0" />
                      <span>{cost}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 italic">
                Leadership is not an additional badge you wear. It is responsibility you accept.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: THE INFLUENCE YOU BUILD HERE
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                THE ENDURING RETURN
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-slate-900">
              The Influence You Build Here
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              The most meaningful influence is rarely announced. It is experienced.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {INFLUENCE_POINTS.map((inf, idx) => {
              const Icon = inf.icon
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 hover:bg-white transition-all duration-300 cursor-default"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`size-11 rounded-2xl border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-2xs ${inf.color}`}>
                        <Icon className="size-5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white border border-slate-200/80 text-slate-600 group-hover:border-blue-200 group-hover:text-[#0062D2] transition-colors shadow-2xs">
                        Influence 0{idx + 1}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#0062D2] transition-colors duration-300 leading-snug">
                      {inf.text}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span>Impact Outcome</span>
                    <span className="text-[#0062D2] opacity-0 group-hover:opacity-100 transition-opacity font-semibold">Realized &rarr;</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="p-6 rounded-2xl bg-[#EFF6FF] border border-blue-200 text-center text-xs sm:text-sm font-semibold text-slate-800 max-w-2xl mx-auto shadow-2xs">
            Not influence over people. <strong className="text-[#0062D2] font-bold">Influence through people.</strong>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CLOSING MANIFESTO BANNER (Exact Homepage Dark Mesh Styling)
          ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-20 lg:py-24 text-white border-t border-slate-800">
        {/* Deep celestial radial gradients & luminous brand aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(29,78,216,0.18),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(99,102,241,0.15),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl"
        />

        {/* Subtle geometric orbital line art */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-30"
        >
          <svg
            viewBox="0 0 760 520"
            fill="none"
            className="h-full w-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-300/30"
            />
            <path
              d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5 8"
              className="text-sky-200/25"
            />
            <path
              d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-200/20"
            />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                  LEADERSHIP IS A JOURNEY
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold leading-[1.18] tracking-tight text-white">
                Lead by serving. Grow by contributing. Build through trust.
              </h2>

              <p className="text-base sm:text-lg font-light text-slate-200 max-w-2xl leading-relaxed">
                Member → Contributor → Circle Leader → Ecosystem Builder → Community Leader. Leave people stronger than you found them.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/leadership/apply"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Apply to Lead</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/40 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:border-white active:scale-[0.98] uppercase cursor-pointer"
                >
                  <Smartphone className="size-4" />
                  <span>Download Unity App</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-md"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Lead by <br />
                Serving <br />
                <span className="text-[#7DD3FC]">Others</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

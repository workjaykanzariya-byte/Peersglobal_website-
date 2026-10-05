'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Smartphone,
  Users,
  MapPin,
  Target,
  CheckCircle2,
  XCircle,
  Star,
  TrendingUp,
  Layers,
  Shield,
  Clock,
  Lightbulb,
  Building2,
  Globe,
  Award,
  HeartHandshake,
  ChevronLeft,
  Sparkles,
  PhoneCall,
  Compass,
  Repeat,
  Share2,
  Lock,
  MessageSquare,
  Check,
  X,
  Flame,
} from 'lucide-react'

// ─── The Six Stages Data ──────────────────────────────────────────────────
const SIX_STAGES = [
  {
    step: '01',
    title: 'The Beginning',
    desc: 'One entrepreneur decides to bring the right people together.',
    tag: 'Initiation',
  },
  {
    step: '02',
    title: 'The First Conversations',
    desc: 'Initial entrepreneurs are identified and conversations begin.',
    tag: 'Discovery',
  },
  {
    step: '03',
    title: 'The First Circle',
    desc: 'The first members come together with a shared purpose and structure.',
    tag: 'Foundation',
  },
  {
    step: '04',
    title: 'Building the Rhythm',
    desc: 'Meetings, relationships, contribution and collaboration begin to develop.',
    tag: 'Momentum',
  },
  {
    step: '05',
    title: 'Growing the Circle',
    desc: 'More relevant entrepreneurs are introduced while protecting the quality of the Circle.',
    tag: 'Quality Scale',
  },
  {
    step: '06',
    title: 'Becoming a Community',
    desc: 'The Circle develops its own relationships, contribution culture and collaborative momentum.',
    tag: 'Ecosystem',
  },
]

// ─── What We Provide ──────────────────────────────────────────────────────
const WHAT_WE_PROVIDE = [
  {
    icon: Layers,
    title: 'The Structure & Framework',
    desc: 'Proven Circle model, 4-part agenda, category exclusivity seat system and operational standards.',
  },
  {
    icon: Smartphone,
    title: 'The Unity Digital Ecosystem',
    desc: 'Digital environment connecting members, tracking Life Impact Scores, and enabling continuous collaboration.',
  },
  {
    icon: Lightbulb,
    title: 'The Philosophy & Operating Code',
    desc: 'Established ethos: Circles, not crowds. Trust, not transactions. Peers, not gurus.',
  },
  {
    icon: HeartHandshake,
    title: 'Founder Guidance & Support',
    desc: 'Support from Regional Executive Directors and experienced Circle Founders who have walked the path.',
  },
  {
    icon: Globe,
    title: 'Global Ecosystem Access',
    desc: 'Local rooms connect into city, district, state, country, and global opportunities.',
  },
]

// ─── What You Bring ───────────────────────────────────────────────────────
const WHAT_YOU_BRING = [
  {
    icon: Target,
    title: 'Conviction',
    desc: 'You believe the Circle should exist.',
  },
  {
    icon: Users,
    title: 'Relationships',
    desc: 'You know people who could benefit from—and contribute to—the room.',
  },
  {
    icon: Shield,
    title: 'Responsibility',
    desc: 'You are prepared to take ownership of the beginning.',
  },
  {
    icon: Lightbulb,
    title: 'Curiosity',
    desc: 'You are willing to listen before deciding what the Circle should become.',
  },
  {
    icon: HeartHandshake,
    title: 'Generosity',
    desc: 'You understand that community becomes stronger when people give before asking.',
  },
  {
    icon: Clock,
    title: 'Patience',
    desc: 'Relationships take time. A meaningful Circle cannot be manufactured overnight.',
  },
  {
    icon: Award,
    title: 'Leadership',
    desc: 'Not leadership over people. Leadership for people.',
  },
]

// ─── Who Should Start a Circle ────────────────────────────────────────────
const WHO_SHOULD_START = [
  'Has relationships across their industry or community',
  'Is respected by people around them',
  'Enjoys bringing people together',
  'Believes in collaboration beyond transactions',
  'Wants to create something that outlives a single meeting',
  'Is willing to give time and responsibility to a community',
  'Sees leadership as service rather than status',
]

// ─── FAQs ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'Do I need to be a Peer already?',
    a: 'Not necessarily. Many Founders join Peers Global specifically to build a Circle. What matters is standing in your city or industry and the ability to bring the right entrepreneurs together.',
  },
  {
    q: 'How many Peers do I need on Day 1?',
    a: 'Circle starts from Day 1 with the first member. Even if three people are there, it is still a Circle. Structure, rhythm and purpose start from Day 1.',
  },
  {
    q: 'How long does it take from application to first meeting?',
    a: 'That depends mostly on how quickly you can bring the founding group together. Some Founders launch in weeks, others take a few months to compose the room properly. The careful ones build stronger Circles.',
  },
  {
    q: 'Can I start a Circle in an industry that already exists elsewhere?',
    a: 'Yes. An Industry Circle in one city is entirely separate from the same industry in another.',
  },
  {
    q: 'What if I want to start a Circle for a purpose that does not exist yet?',
    a: 'That is exactly how new Purpose Circles begin. If enough entrepreneurs share the ambition, it is worth building.',
  },
  {
    q: 'Can I found a Circle alongside running my business?',
    a: 'Yes — every Circle Founder is a working business owner. The role is designed around that reality.',
  },
  {
    q: 'What happens after the first year?',
    a: 'As the Circle grows, responsibility becomes shared. Powerhouses take responsibility, and the Circle develops its own self-sustaining momentum.',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: "Starting a Circle in my city has been the most meaningful thing I've done as an entrepreneur. The impact goes far beyond business.",
    name: 'Ami Shah',
    role: 'Circle Founder, Ahmedabad',
  },
  {
    quote: 'When I built the founding group, I was building my most important business relationships. Three years on, they are still the people I call first.',
    name: 'Ravi Menon',
    role: 'Circle Founder, Kochi',
  },
]

export function StartCircleClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [testimonialIdx, setTestimonialIdx] = useState(0)

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans">

      {/* =================================================================
          SECTION 1: HERO — Signature Fade Video Background
          ================================================================= */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <Link href="/circles" className="hover:text-slate-900 transition-colors">Circles</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-[#0062D2] font-semibold">Start a Circle</span>
          </div>

          {/* Hero Banner */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[500px] lg:min-h-[560px] flex items-center">

            {/* Fade Video */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
            >
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/circles-hero-new.jpg"
                autoPlay loop muted playsInline
                className="size-full object-cover object-center"
              />
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Script overlay */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>Not a Crowd.</p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>A Trusted Room.</p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>Starts Day 1.</p>
              </div>

              {/* Glass pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">CIRCLE FOUNDERS</p>
                  <p className="text-xs font-bold tracking-wider text-white">BRINGING THE RIGHT PEOPLE TOGETHER</p>
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">

                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">FOUND A CIRCLE</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  Start a Circle
                </h1>
                
                <p className="text-xl sm:text-2xl text-slate-800 font-bold leading-snug mb-3">
                  Circle starts from Day 1 — first member.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-lg">
                  Even if three people are there, it is still a Circle. Structure starts from Day 1. It begins when one entrepreneur decides that the right people should have a room to meet, learn, share, collaborate and grow together.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Link
                    href="/circles/find"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Apply to Found a Circle</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank" rel="noopener noreferrer"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white/90 text-slate-800 px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105 shadow-2xs inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Smartphone className="size-4" />
                    <span>Download Unity App</span>
                  </a>
                </div>

                {/* Stat Band */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg">
                  {[
                    { icon: Sparkles, value: 'Day 1', label: 'Structure Begins' },
                    { icon: Users, value: '20–40', label: 'Curated Peers' },
                    { icon: MapPin, value: '45+', label: 'Active Cities' },
                  ].map((s) => {
                    const Icon = s.icon
                    return (
                      <div key={s.label} className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                        <div className="size-9 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                          <Icon className="size-4" />
                        </div>
                        <div>
                          <div className="font-bold text-base sm:text-lg text-[#0F172A] leading-none">{s.value}</div>
                          <div className="text-[10px] text-slate-500 font-medium mt-1 leading-tight">{s.label}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 2: WHERE A CIRCLE BEGINS (NOT WITH A NUMBER. WITH A PERSON)
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

            {/* Left Column: Narrative & Context triggers */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">THE BEGINNING</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight mb-4">
                  A Circle does not begin when a room is full.
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                  It begins when one entrepreneur decides that the right people should have a room to meet, learn, share, collaborate and grow together.
                </p>

                {/* 3 Origin Trigger Cards */}
                <div className="space-y-3 mb-6">
                  {[
                    {
                      icon: Building2,
                      title: 'Industry Representation',
                      desc: 'Maybe your industry is not yet represented in your city, and needs a dedicated peer space.',
                    },
                    {
                      icon: Compass,
                      title: 'Shared Purpose',
                      desc: 'Maybe your purpose is shared by ambitious entrepreneurs who simply haven’t found one another.',
                    },
                    {
                      icon: HeartHandshake,
                      title: 'Collaborative Growth',
                      desc: 'Maybe you have built something solid—and now want to create a space where others build alongside you.',
                    },
                  ].map((trigger, i) => {
                    const Icon = trigger.icon
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-blue-50/30 hover:border-blue-200/80 transition-all group"
                      >
                        <div className="size-10 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-blue-300">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 mb-0.5">{trigger.title}</p>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{trigger.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Bottom Insight Pill */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-indigo-50/90 border border-blue-100 flex items-center justify-between gap-4">
                <p className="text-sm sm:text-base font-bold text-slate-900">
                  That is where a Circle begins. <span className="text-blue-600">Not with a number. With a person.</span>
                </p>
                <div className="size-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <ArrowRight className="size-4" />
                </div>
              </div>
            </div>

            {/* Right Column: Day 1 Principles Executive Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="h-full rounded-3xl bg-[#FAFBFD] border border-slate-200/90 p-7 sm:p-9 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-[#0062D2] text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="size-3.5" />
                      Day 1 Framework
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">Founding Phase</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-3">
                    You Do Not Wait for a Full Room
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    A common assumption is that a Circle starts only after dozens join. The Peers Global approach is different:
                  </p>

                  {/* Step Progression */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-white border border-slate-200/80 mb-5 text-center">
                    <div className="p-2 rounded-xl bg-blue-50/50">
                      <div className="text-xs font-bold text-blue-600">1st</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">The Founder</div>
                    </div>
                    <div className="p-2 rounded-xl bg-blue-50/50">
                      <div className="text-xs font-bold text-blue-600">2nd</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">First Peer</div>
                    </div>
                    <div className="p-2 rounded-xl bg-blue-50/50">
                      <div className="text-xs font-bold text-blue-600">3rd</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">Core Triad</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    The structure, rhythm, and purpose are established on Day 1. Even with three people, it is already an active Circle.
                  </p>

                  {/* Defined Checklist */}
                  <div className="space-y-2 pt-4 border-t border-slate-200/80">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      A Circle is defined by:
                    </div>
                    {[
                      'A shared industry or purpose context',
                      'A clear, governed monthly agenda',
                      'A fixed commitment to meet consistently',
                      'A culture of contribution before asking',
                      'A structured framework for lasting relationships',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="size-3.5 text-blue-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer note */}
                <div className="pt-5 mt-5 border-t border-slate-200/80">
                  <p className="text-xs font-bold text-slate-800 italic">
                    "The room grows. The culture grows with it."
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 3: THE SIX STAGES TABLE / GRID
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">THE JOURNEY</span>
          </div>
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight mb-3">
              The Six Stages
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Starting a Circle is a progressive roadmap. Each stage has a defined milestone—bringing the founding room closer to a permanent high-trust community.
            </p>
          </div>

          {/* 6 Stage Executive Roadmap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {SIX_STAGES.map((s, idx) => {
              const stageColors = [
                { badge: 'bg-blue-50 text-blue-700 border-blue-200', numBg: 'bg-blue-600 text-white', accent: 'border-l-blue-600' },
                { badge: 'bg-sky-50 text-sky-700 border-sky-200', numBg: 'bg-sky-600 text-white', accent: 'border-l-sky-600' },
                { badge: 'bg-indigo-50 text-indigo-700 border-indigo-200', numBg: 'bg-indigo-600 text-white', accent: 'border-l-indigo-600' },
                { badge: 'bg-amber-50 text-amber-700 border-amber-200', numBg: 'bg-amber-600 text-white', accent: 'border-l-amber-600' },
                { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', numBg: 'bg-emerald-600 text-white', accent: 'border-l-emerald-600' },
                { badge: 'bg-rose-50 text-rose-700 border-rose-200', numBg: 'bg-rose-600 text-white', accent: 'border-l-rose-600' },
              ][idx] || { badge: 'bg-slate-100 text-slate-700 border-slate-200', numBg: 'bg-slate-800 text-white', accent: 'border-l-blue-600' }

              return (
                <div
                  key={s.step}
                  className={`group p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden border-l-[5px] ${stageColors.accent}`}
                >
                  <div>
                    {/* Top Step Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <span className={`size-8 rounded-xl ${stageColors.numBg} flex items-center justify-center font-bold text-xs shadow-xs`}>
                          {s.step}
                        </span>
                        <span className="text-xs font-bold text-slate-400 tracking-wider">
                          STAGE {idx + 1}
                        </span>
                      </div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${stageColors.badge}`}>
                        {s.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  {/* Progress Milestone Line */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-slate-500">Milestone {idx + 1} of 6</span>
                    <div className="flex items-center gap-1">
                      {[...Array(6)].map((_, dotIdx) => (
                        <span
                          key={dotIdx}
                          className={`size-1.5 rounded-full ${
                            dotIdx <= idx ? 'bg-blue-600' : 'bg-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Objective Banner */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#040F24] via-slate-900 to-[#0B1B38] text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg border border-slate-800">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="size-11 rounded-2xl bg-white/10 text-sky-400 flex items-center justify-center shrink-0">
                <Target className="size-6" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-white">
                  The objective is not simply to fill seats.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  The objective is to curate and build the right room from Day 1.
                </p>
              </div>
            </div>

            <Link
              href="/circles/find"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:opacity-95 transition-opacity shrink-0 inline-flex items-center gap-2"
            >
              <span>Found a Circle</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 4: YOUR FIRST MONTH (RELATIONSHIPS FIRST)
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">FIRST 30 DAYS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight">
                Your First Month
              </h2>

              <p className="text-base sm:text-lg font-bold text-[#0062D2]">
                Start with the people you already know.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                You do not need a database of hundreds of entrepreneurs. You need to begin with relationships.
              </p>

              <div className="p-6 rounded-3xl bg-[#F0F7FF] border border-[#DCEBFE] space-y-3">
                <h4 className="font-serif text-lg font-bold text-slate-900">
                  The 15 → 5 Method
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Think of <strong>15 names</strong> — people whose businesses, experience, ambition or character could add meaning to the Circle. Then ask yourself:
                </p>
                <div className="p-3.5 rounded-2xl bg-white border border-blue-200 text-xs sm:text-sm font-semibold text-[#0062D2]">
                  &ldquo;Who are the five people I should speak to first?&rdquo;
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Call your top five. Not to sell them a membership. Not to convince them to join something they do not understand. Simply tell them what you are trying to build. Explain the Circle. Listen to their response. Understand who else they believe should be part of the conversation.
              </p>

              <p className="text-xs sm:text-sm font-semibold text-slate-800 italic">
                One meaningful conversation can lead to another. And another. That is how a community begins.
              </p>
            </div>

            {/* Right Card Graphic (5 cols) */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#040F24] text-white shadow-xl relative overflow-hidden space-y-6">
                <div className="absolute -right-12 -top-12 size-48 rounded-full bg-blue-600/20 blur-2xl pointer-events-none" />
                
                <div className="relative z-10 space-y-4">
                  <div className="size-12 rounded-2xl bg-white/10 text-sky-300 flex items-center justify-center">
                    <PhoneCall className="size-6" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white leading-snug">
                    Meaningful Conversations, Not Sales Pitches
                  </h3>

                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="size-4 text-emerald-400 shrink-0" />
                      <span>15 curated respected names</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="size-4 text-emerald-400 shrink-0" />
                      <span>5 primary exploratory calls</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="size-4 text-emerald-400 shrink-0" />
                      <span>Listen deeply to their ambition</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="size-4 text-emerald-400 shrink-0" />
                      <span>Establish the founding room</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href="/circles/find"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider shadow-md hover:opacity-95 transition-opacity"
                    >
                      <span>Begin Your Circle</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 5: WHAT WE PROVIDE + WHAT YOU BRING (Side-by-Side)
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* What We Provide */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">WHAT WE PROVIDE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-3">
                You do not build alone.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Peers Global provides the framework through which your Circle can take shape: structure, community model and operating principles.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-blue-200 mb-6 text-xs font-bold text-[#0062D2] space-y-1">
                <div>• Circles, not crowds.</div>
                <div>• Trust, not transactions.</div>
                <div>• Peers, not gurus.</div>
              </div>

              <div className="space-y-3">
                {WHAT_WE_PROVIDE.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 hover:shadow-sm transition-shadow">
                      <div className="size-9 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0F172A]">{item.title}</p>
                        <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* What You Bring */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">WHAT YOU BRING</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-3">
                The willingness to begin.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                A Circle Founder brings something that no framework can provide: leadership for people, relationships, and the initiative to create a room.
              </p>

              <div className="space-y-3">
                {WHAT_YOU_BRING.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE] hover:shadow-sm transition-shadow">
                      <div className="size-9 rounded-full bg-white text-[#0062D2] flex items-center justify-center shrink-0 shadow-2xs">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0F172A]">{item.title}</p>
                        <p className="text-xs text-slate-600 leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 6: NOT ABOUT BUILDING YOUR PERSONAL NETWORK
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#061226] via-[#0A1832] to-[#040C1A] text-white relative overflow-hidden shadow-2xl border border-slate-800">
            {/* Ambient blur accents */}
            <div className="absolute top-0 right-0 size-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 size-80 rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-5xl">
              
              {/* Top Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
                <span className="h-[2px] w-4 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-sky-300">
                  CRITICAL DISTINCTION
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-tight leading-tight mb-4 max-w-3xl">
                Starting a Circle Is Not About Building Your Personal Network
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-8">
                This distinction matters. A Circle Founder is not creating a private prospecting list. You are creating a trusted room in which independent entrepreneurs can become lifelong Peers.
              </p>

              {/* Comparison Cards: Transactional vs Powerhouse */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                
                {/* Left: Transactional Mindset */}
                <div className="p-6 sm:p-7 rounded-2xl bg-rose-950/20 border border-rose-500/25 backdrop-blur-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                        Instead of Asking:
                      </span>
                      <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        Transactional View
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-white/[0.04] border border-white/5">
                        <p className="text-xs text-rose-300 font-semibold mb-1">Old Question 1</p>
                        <p className="text-sm sm:text-base font-medium text-slate-200">
                          "How many people can I bring to my circle?"
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.04] border border-white/5">
                        <p className="text-xs text-rose-300 font-semibold mb-1">Old Question 2</p>
                        <p className="text-sm sm:text-base font-medium text-slate-200">
                          "What can this Circle do for my business right now?"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Powerhouse Leadership */}
                <div className="p-6 sm:p-7 rounded-2xl bg-blue-950/40 border border-blue-400/40 backdrop-blur-sm flex flex-col justify-between shadow-lg shadow-blue-950/50">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                        The Powerhouse Questions:
                      </span>
                      <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/40">
                        Peers Principle
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-blue-600/15 border border-blue-400/30">
                        <p className="text-xs text-sky-300 font-semibold mb-1">Foundational Question</p>
                        <p className="text-sm sm:text-base font-bold text-white">
                          "Who genuinely belongs in this room?"
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-blue-600/15 border border-blue-400/30">
                        <p className="text-xs text-sky-300 font-semibold mb-1">Impact Question</p>
                        <p className="text-sm sm:text-base font-bold text-white">
                          "What could this Circle make possible for everyone in it?"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Insight Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
                <p className="text-xs sm:text-sm text-sky-200 font-medium">
                  ✦ <span className="font-semibold text-white">That mindset shift</span> is the true beginning of Powerhouse leadership.
                </p>
                <span className="text-xs text-slate-400 font-medium tracking-wide">
                  Peers Global Founder Standard
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 7: THE CIRCLE BELONGS TO ITS PEOPLE & AFTER LAUNCH RHYTHM
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* The Circle Belongs to Its People */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">SHARED OWNERSHIP</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                The Circle Belongs to Its People
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You may initiate the Circle. But you do not own the people in it. As the Circle grows, responsibility becomes shared:
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-medium text-slate-800 pt-2">
                <div className="p-3 rounded-xl bg-[#F0F7FF] border border-[#DCEBFE]">• Members contribute ideas</div>
                <div className="p-3 rounded-xl bg-[#F0F7FF] border border-[#DCEBFE]">• Peers build relationships</div>
                <div className="p-3 rounded-xl bg-[#F0F7FF] border border-[#DCEBFE]">• Powerhouses take responsibility</div>
                <div className="p-3 rounded-xl bg-[#F0F7FF] border border-[#DCEBFE]">• Collaborations emerge</div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
                The Circle develops its own identity. Your role is not to remain the centre of everything—your role is to help create something strong enough that everyone can contribute to it.
              </p>
            </div>

            {/* After Launch Flow */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">POST-LAUNCH</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                After Launch
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The first meeting is not the finish line. It is the beginning. After launch, the Circle develops its rhythm:
              </p>

              {/* Rhythm pills */}
              <div className="flex flex-wrap gap-2 pt-1 pb-1">
                {['Meet', 'Learn', 'Share', 'Connect', 'Collaborate', 'Recognise', 'Repeat'].map((r, i) => (
                  <span key={r} className="px-3 py-1 rounded-full bg-[#EFF6FF] text-[#0062D2] text-xs font-bold">
                    {r} {i < 6 ? '→' : '↺'}
                  </span>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over time, people begin knowing one another, understanding businesses, and noticing opportunities without being asked.
              </p>

              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                The Circle starts working even when nobody is trying to make it work. That is when a group begins becoming a community.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 8: WHO SHOULD START A CIRCLE? & FIRST IN YOUR CITY
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Who Should Start (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">PROFILE OF A FOUNDER</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                Who Should Start a Circle?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                This opportunity may be meaningful for an entrepreneur who:
              </p>

              <div className="space-y-2.5 mb-6">
                {WHO_SHOULD_START.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-200">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm font-semibold text-[#0062D2]">
                You do not need to be the loudest person in the room. You need to be willing to create the room.
              </div>
            </div>

            {/* The First Circle in Your City (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 space-y-4">
                <div className="size-10 rounded-2xl bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center font-bold">
                  <MapPin className="size-5" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 leading-tight">
                  The First Circle in Your City
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Perhaps there is no Circle for your industry. Perhaps there is no Circle for your purpose. Perhaps there is no Circle in your city at all.
                </p>

                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  That does not necessarily mean there is no need. It may mean someone has not started the conversation yet.
                </p>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-900">
                  Maybe that someone could be you.
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  You do not need to know everything before you begin. You need to be willing to take the first responsible step.
                </p>
              </div>

              {/* Testimonial mini-card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm mt-6">
                <p className="font-serif text-xs sm:text-sm text-[#0F172A] leading-relaxed italic mb-3">
                  &ldquo;{TESTIMONIALS[testimonialIdx].quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#0F172A]">{TESTIMONIALS[testimonialIdx].name}</p>
                    <p className="text-[11px] text-slate-500">{TESTIMONIALS[testimonialIdx].role}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setTestimonialIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                      className="size-7 rounded-full border border-slate-200 flex items-center justify-center hover:border-[#0062D2] hover:text-[#0062D2] transition-all cursor-pointer"
                    >
                      <ChevronLeft className="size-3.5" />
                    </button>
                    <button
                      onClick={() => setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length)}
                      className="size-7 rounded-full border border-slate-200 flex items-center justify-center hover:border-[#0062D2] hover:text-[#0062D2] transition-all cursor-pointer"
                    >
                      <ChevronRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 9: A CIRCLE BEGINS WITH ONE DECISION & FAQS
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Manifesto */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">ONE DECISION</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight">
                A Circle Begins With One Decision
              </h2>
              <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <div>• Every established Circle was once an idea.</div>
                <div>• Every community was once a conversation.</div>
                <div>• Every room was once empty.</div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                And every meaningful beginning required someone to say: <br />
                <span className="text-[#0062D2] text-base font-bold">&ldquo;Let&apos;s bring the right people together.&rdquo;</span>
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Maybe your Circle begins with that decision.
              </p>
              <div className="pt-2">
                <Link
                  href="/circles/find"
                  className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-7 py-3 text-xs sm:text-sm font-semibold shadow-md inline-flex items-center gap-2"
                >
                  <span>Apply to Found a Circle</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right FAQs */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">COMMON QUESTIONS</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                Frequently Asked Questions
              </h3>

              <div className="space-y-2.5">
                {FAQS.map((faq, i) => {
                  const isOpen = openFaq === i
                  return (
                    <div key={i} className={`rounded-2xl border transition-all ${isOpen ? 'border-[#DCEBFE] bg-[#F0F7FF]' : 'border-slate-200 bg-white'}`}>
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-4 cursor-pointer"
                      >
                        <span className={`text-xs sm:text-sm font-semibold leading-snug ${isOpen ? 'text-[#0062D2]' : 'text-[#0F172A]'}`}>{faq.q}</span>
                        <ChevronDown className={`size-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0062D2]' : 'text-slate-400'}`} />
                      </button>
                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 10: CLOSING CTA BANNER
          ================================================================= */}
      <section className="relative isolate overflow-hidden bg-[#040F24] py-16 sm:py-20 lg:py-24 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  START SOMETHING THAT OTHERS CAN BELONG TO
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.18] tracking-tight text-white">
                <span className="brand-gradient-text">You were never meant to build alone.</span>
              </h2>

              <p className="text-base sm:text-lg font-medium text-slate-200 max-w-xl">
                And perhaps the next Circle should not have to begin without you.
              </p>

              <div className="text-xs text-sky-300 tracking-wider font-semibold">
                The room does not need to be full on Day 1. It needs to be right.
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/circles/find"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Apply to Found a Circle</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/50 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:border-white active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Download Unity App</span>
                </a>
              </div>

              <div className="pt-2 text-xs text-slate-400">
                Start with one entrepreneur. Build with trust. Grow through contribution. Create a Circle.
              </div>
            </div>

            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-sm"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Create <br />
                The <br />
                <span className="text-[#7DD3FC]">Room</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}


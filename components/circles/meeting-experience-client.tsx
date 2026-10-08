'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Clock,
  Heart,
  Presentation,
  GraduationCap,
  Users,
  Smartphone,
  MapPin,
  Star,
  CheckCircle2,
  Shield,
  PhoneOff,
  EyeOff,
  MessageSquareOff,
  UserX,
  ChevronLeft,
  Quote,
  Sparkles,
  ShieldAlert,
  CalendarCheck,
} from 'lucide-react'

// ─── Four Agenda Segments ──────────────────────────────────────────────────
const SEGMENTS = [
  {
    num: '01',
    numColor: 'text-rose-500',
    numBg: 'bg-rose-50',
    borderColor: 'border-rose-200',
    accentColor: '#E11D48',
    title: 'Gratitude & Life Impact Round',
    tagline: 'Every Peer declares their impact.',
    time: '~30 minutes',
    quote: '"This month I impacted 12 lives."',
    body: 'The meeting opens with what people gave, not with what they want. Each Peer states the impact they created since the last meeting — the referrals given, the introductions made, the knowledge shared, the entrepreneurs they stood beside. Contributions are logged and confirmed in the Unity App, and this is the moment the room hears them out loud.',
    why: 'It sets the tone for everything that follows. Before any Peer asks for anything, the room has already heard an hour of giving. Asking becomes natural because generosity is already in the air. Contribution is made visible. Giving that goes unseen slowly stops happening. Here, it is the first thing anyone hears.',
    ctaText: 'Understand Life Impact',
    ctaHref: '/the-currency',
    imgLabel: 'Give · Recognise · Inspire',
    signal: 'Giving comes before asking here',
  },
  {
    num: '02',
    numColor: 'text-blue-600',
    numBg: 'bg-blue-50',
    borderColor: 'border-blue-200',
    accentColor: '#2563EB',
    title: 'Brand Showcase',
    tagline: 'Four minutes to present.',
    time: '~60 minutes',
    quote: 'Structured for collaboration, not applause.',
    body: 'One Peer takes the floor to present their business properly — what they do, who they serve, what they are building, and specifically what they need from the room. Four minutes, structured deliberately. This is not a pitch and the room is not an audience. The format is built so that by the end, every Peer present knows exactly how to help.',
    why: 'Most business rooms let people describe themselves vaguely and then wonder why nothing happens. A structured showcase converts "this is my business" into "this is what I need and here is who can give it to me." Peers leave this segment with actions, not impressions.',
    ctaText: 'See Presentation Format',
    ctaHref: '/circles',
    imgLabel: 'Build · Connect · Grow',
    signal: 'Your business gets real attention, not a thirty-second introduction',
  },
  {
    num: '03',
    numColor: 'text-amber-500',
    numBg: 'bg-amber-50',
    borderColor: 'border-amber-200',
    accentColor: '#F59E0B',
    title: 'Impact Mentor Masterclass',
    tagline: 'One expert. One subject.',
    time: '~20 minutes',
    quote: 'Twenty minutes of applicable insight.',
    body: 'A senior Peer or invited expert teaches one thing properly. Not a motivational talk. Not a general overview. One subject, taught by someone who has done it, with enough depth that a Peer can act on it the same week. Topics come from what the Circle actually needs — a market entry, a compliance change, a hiring system, a pricing model, a funding route, a technology shift.',
    why: 'Long enough to teach something real. Short enough that it stays practical. Nobody in this room has time for theory. Every masterclass is delivered by a Peer or a mentor from within the community. The knowledge stays inside the ecosystem, and the person teaching it earns Life Impact.',
    ctaText: 'View Upcoming Topics',
    ctaHref: '/circles/find',
    imgLabel: 'Learn · Apply · Grow',
    signal: 'You leave every meeting having learned something usable',
  },
  {
    num: '04',
    numColor: 'text-violet-600',
    numBg: 'bg-violet-50',
    borderColor: 'border-violet-200',
    accentColor: '#7C3AED',
    title: 'Collaboration Roundtables',
    tagline: 'Where referrals, deals and partnerships are born every month.',
    time: '~60 minutes',
    quote: 'The working part of the meeting.',
    body: 'Peers break into focused roundtables and get into actual collaboration — referrals given, introductions made, requirements matched, partnerships explored, problems solved together. This is where the ten Ways of Collaboration happen in practice. A Peer needing market access finds someone who already operates there. A Peer needing a vendor gets three tested recommendations.',
    why: 'Everything before it was preparation. The impact round established generosity. The showcase told the room what someone needs. The masterclass gave everyone something new. The roundtables are where all of it converts into commitments. Peers leave with named actions, scheduled one-to-ones, and introductions already promised.',
    ctaText: 'Explore the 10 Ways',
    ctaHref: '/10-ways-of-collaboration',
    imgLabel: 'Collaborate · Build · Win',
    signal: 'This room produces outcomes, not conversations',
  },
]

// ─── What you walk away with ───────────────────────────────────────────────
const WALK_AWAY = [
  { icon: Users, label: 'Real introductions', desc: 'To buyers, partners and opportunities' },
  { icon: GraduationCap, label: 'Practical knowledge', desc: 'You can use immediately' },
  { icon: Heart, label: 'Stronger relationships', desc: 'With the same Peers, every month' },
  { icon: Star, label: 'Visible impact', desc: 'For what you give to others' },
  { icon: MapPin, label: 'A bigger network', desc: 'Across your city, country and the world' },
  { icon: ArrowRight, label: 'A clear next step', desc: 'After every meeting' },
]

// ─── Rules ─────────────────────────────────────────────────────────────────
const RULES = [
  { icon: MessageSquareOff, rule: 'No selling from the floor.', detail: 'The Brand Showcase is the only presentation in the meeting, and it belongs to one Peer at a time.' },
  { icon: PhoneOff, rule: 'No phones.', detail: 'For the full duration. Attention is the minimum contribution.' },
  { icon: Shield, rule: 'No breaking confidence.', detail: 'What is said in the room stays in the room, without exception.' },
  { icon: EyeOff, rule: 'No dominating the room.', detail: 'Every Peer gets the same time. Nobody gets more because their business is larger.' },
  { icon: UserX, rule: 'No pitching guests.', detail: 'A guest is there to observe, not to be surrounded.' },
]

// ─── FAQs ──────────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'How long is a Circle meeting?', a: 'Long enough for all four segments to run properly, and short enough that busy business owners attend consistently. Your Circle Director will confirm the exact timing.' },
  { q: 'How often does a Circle meet?', a: 'On a fixed monthly rhythm, so Peers can plan around it well in advance.' },
  { q: 'What if I have nothing to declare in the Impact Round?', a: 'Say so honestly. Some months you give more, some months less. Over a year it balances, and the room knows the difference between an honest quiet month and someone who never gives.' },
  { q: 'Does every Peer get a Brand Showcase?', a: 'Yes, on rotation, so every Peer gets the room\'s full attention on a scheduled basis.' },
  { q: 'Can I deliver a Masterclass?', a: 'Yes. Teaching something you know well is one of the highest forms of contribution here, and it earns Life Impact.' },
  { q: 'Are meetings online or in person?', a: 'Both formats exist across the community. Your Circle Director will confirm the format for your Circle.' },
  { q: 'Can I bring a guest?', a: 'Yes. Bringing the right entrepreneur into your Circle is itself a contribution.' },
]

// ─── Testimonials ──────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: 'The format is brilliant. I come for the people, the insights and the collaborations. Every meeting leaves me energised and with real actions.',
    name: 'Radhika Mehta',
    role: 'Founder, DesignScape',
    circle: 'Mumbai Circle',
  },
  {
    quote: 'I have been in dozens of networking groups. None of them had anything close to the structure of a Peers Circle meeting. This one actually works.',
    name: 'Sanjay Kapoor',
    role: 'Director, KapoorTech',
    circle: 'Delhi Circle',
  },
  {
    quote: 'The Impact Round changed how I think about business relationships. I now actively look for ways to give all month, not just during the meeting.',
    name: 'Priya Joshi',
    role: 'CEO, NurtureGrow',
    circle: 'Bangalore Circle',
  },
]

export function MeetingExperienceClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [activeSegment, setActiveSegment] = useState<number | null>(null)

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans">

      {/* =================================================================
          SECTION 1: HERO — MASTER FULL PAGE DARK VIDEO BANNER
          ================================================================= */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Full Bleed Hero Video Background */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            poster="/images/circles-hero-new.jpg"
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
            <Link href="/circles" className="hover:text-white transition-colors">Circles</Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-white font-semibold">The Circle Meeting Experience</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Hero Content */}
            <div className="lg:col-span-12 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>THE CIRCLE MEETING EXPERIENCE</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  Inside a Circle Meeting —{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    The Four-Part Agenda
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Four parts. One purpose. Every Circle, every city, every month. Here is the exact agenda so you know what to expect before you walk into the room.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                >
                  Download Unity App
                </GalaxyButton>
                <GalaxyButton
                  href="/circles/find"
                  variant="transparent"
                  size="md"
                >
                  Visit as a Guest
                </GalaxyButton>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg pt-6 border-t border-white/15">
                {[
                  { value: '500+', label: 'Circles Worldwide' },
                  { value: '45+', label: 'Cities' },
                  { value: '40–50', label: 'Peers per Circle' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
                    <div>
                      <div className="font-bold text-base sm:text-xl text-white leading-none">{s.value}</div>
                      <div className="text-[10px] text-slate-300 font-medium mt-1 leading-tight">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 2: WHY THE AGENDA NEVER CHANGES
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

            {/* Left Column: Narrative & Key Principles */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">BUILT FOR OUTCOMES</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight mb-5">
                  Why the agenda never changes
                </h2>

                <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100/90 mb-6">
                  <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    Put twelve entrepreneurs in a room without structure and you get a pleasant conversation that produces nothing.
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-blue-600 mt-2">
                    The agenda is what turns goodwill into real business outcomes.
                  </p>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  <p>
                    Every Circle meeting follows the exact same four segments, in the same order, in every city and country. A Peer who has attended a meeting in one city immediately recognizes what is happening in another.
                  </p>
                  <p>
                    That consistency is deliberate. Nobody has to wonder when it is their turn, how to ask for something, or whether their contribution will be noticed.
                  </p>
                </div>
              </div>

              {/* 3 Pillars strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-100">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-xs font-bold text-slate-900 mb-0.5">Equal Space</p>
                  <p className="text-[11px] text-slate-500 leading-snug">Every business gets identical floor time.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-xs font-bold text-slate-900 mb-0.5">Predictability</p>
                  <p className="text-[11px] text-slate-500 leading-snug">Zero guesswork on turns, asks, or timing.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-xs font-bold text-slate-900 mb-0.5">Global Cadence</p>
                  <p className="text-[11px] text-slate-500 leading-snug">Identical flow in every city worldwide.</p>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Illuminated Quote Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="h-full relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0B1528] via-slate-900 to-[#0F1E36] text-white shadow-xl flex flex-col justify-between overflow-hidden border border-slate-800">
                {/* Glow & Backdrop circles */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-600/15 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="size-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-blue-400 mb-6 shadow-inner">
                    <Quote className="size-6 -scale-x-100" />
                  </div>

                  <p className="text-xl sm:text-2xl font-semibold text-slate-100 leading-relaxed mb-6">
                    "Structure creates freedom. The agenda gives us the space to do what actually matters."
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-300">The Peers Principle</p>
                    <p className="text-xs text-slate-400">Consistency across 500+ Circles</p>
                  </div>
                  <Link
                    href="/the-idea"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-all"
                  >
                    <span>Read The Idea</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 3: THE FOUR-PART AGENDA
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">THE FOUR-PART AGENDA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight mb-4">
              A meeting designed for real value
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every month, every city follows this exact sequential structure. Click on any segment to inspect its depth and purpose.
            </p>
          </div>

          {/* 4-Step Pipeline Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {SEGMENTS.map((seg, i) => {
              const isSelected = activeSegment === i
              return (
                <div
                  key={seg.num}
                  onClick={() => setActiveSegment(isSelected ? null : i)}
                  className={`group relative flex flex-col rounded-3xl bg-white border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isSelected
                      ? 'border-blue-500 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500/20'
                      : 'border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  {/* Top Status Header */}
                  <div className={`p-6 pb-5 ${seg.numBg} border-b ${seg.borderColor}/40 relative`}>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="inline-flex items-center justify-center size-9 rounded-xl font-bold text-sm text-white shadow-sm"
                        style={{ backgroundColor: seg.accentColor }}
                      >
                        {seg.num}
                      </span>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 border border-slate-200/60 text-xs font-semibold text-slate-700 shadow-2xs">
                        <Clock className="size-3 text-slate-500" />
                        {seg.time}
                      </div>
                    </div>

                    <p className="text-base font-bold text-slate-900 leading-snug">
                      {seg.title}
                    </p>
                    <p className="text-xs font-semibold mt-1" style={{ color: seg.accentColor }}>
                      {seg.tagline}
                    </p>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {seg.body.slice(0, 140)}...
                    </p>

                    {/* Signal Pill */}
                    <div className="pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Core Signal
                      </div>
                      <p className="text-xs font-medium text-slate-800 leading-tight">
                        {seg.signal}
                      </p>
                    </div>

                    {/* Expand Detail Drawer */}
                    {isSelected && (
                      <div className="pt-3 border-t border-slate-100 space-y-3 animate-in fade-in duration-200 text-left">
                        {seg.quote && (
                          <div className={`p-3 rounded-xl ${seg.numBg} ${seg.borderColor} border`}>
                            <p className="text-xs font-bold leading-snug" style={{ color: seg.accentColor }}>
                              {seg.quote}
                            </p>
                          </div>
                        )}
                        <p className="text-xs text-slate-600 leading-relaxed">{seg.body}</p>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Why it matters</p>
                          <p className="text-xs text-slate-600 leading-relaxed">{seg.why}</p>
                        </div>
                      </div>
                    )}

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500 group-hover:text-blue-600 transition-colors">
                        {isSelected ? 'Collapse details' : 'View breakdown'}
                      </span>
                      <div
                        className="size-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-all"
                      >
                        <ChevronRight className={`size-3.5 transition-transform duration-200 ${isSelected ? 'rotate-90' : ''}`} />
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

          {/* Quick Summary Strip */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="size-2 rounded-full bg-blue-600" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                At a Glance: The Four Agenda Signals
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SEGMENTS.map((seg) => (
                <div key={seg.num} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="size-2 rounded-full" style={{ backgroundColor: seg.accentColor }} />
                    <span className="text-xs font-bold text-slate-900">{seg.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    "{seg.signal}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 4: WHAT HAPPENS BETWEEN MEETINGS
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">SAME STRUCTURE, BIGGER POSSIBILITIES</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-4">
                What you walk away with
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-10">
                The meeting creates the commitments. The month delivers them.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {WALK_AWAY.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex flex-col items-start p-4 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                      <div className="size-9 rounded-full bg-white text-[#0062D2] flex items-center justify-center mb-3 shadow-2xs">
                        <Icon className="size-4" />
                      </div>
                      <p className="text-sm font-bold text-[#0F172A] mb-0.5">{item.label}</p>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right: Between meetings */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">BETWEEN MEETINGS</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                The Circle works all month.
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: 'Peer-to-Peer meetings.',
                    body: 'Two Peers meet one to one, outside the Circle, to properly understand each other\'s business. Most real collaboration begins here.',
                  },
                  {
                    title: 'The Unity App.',
                    body: 'Contributions are logged and confirmed. One-to-ones are booked. Requirements are shared across Circles and cities.',
                  },
                  {
                    title: 'Follow-through.',
                    body: 'An introduction promised at a roundtable becomes a call the following week. A referral becomes a client. And it all gets declared at the next Gratitude & Life Impact Round.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="size-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <div>
                      <p className="text-sm font-bold text-[#0F172A] mb-1">{item.title}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/unity"
                  className="rounded-full border border-[#0062D2] text-[#0062D2] hover:bg-[#0062D2] hover:text-white px-6 py-3 text-sm font-semibold transition-all inline-flex items-center gap-2"
                >
                  See How Unity Works
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 5: TESTIMONIAL CAROUSEL
          ================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 via-[#0B1528] to-slate-950 text-white relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-600/15 to-rose-600/15 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center">
            
            {/* Top eyebrow pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-8">
              <Sparkles className="size-3.5 text-blue-400" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-200">
                PEER VOICES & EXPERIENCES
              </span>
            </div>

            {/* Testimonial Card */}
            <div className="w-full bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
              <Quote className="size-12 text-blue-400/25 absolute top-6 left-6 -scale-x-100 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <p className="text-xl sm:text-2xl lg:text-[28px] font-medium text-slate-100 leading-relaxed max-w-3xl mb-8">
                  "{TESTIMONIALS[testimonialIdx].quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="size-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/20">
                    {TESTIMONIALS[testimonialIdx].name[0]}
                  </div>
                  <div className="text-left">
                    <p className="text-base font-bold text-white tracking-tight">{TESTIMONIALS[testimonialIdx].name}</p>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium">
                      {TESTIMONIALS[testimonialIdx].role} <span className="text-blue-400">·</span> {TESTIMONIALS[testimonialIdx].circle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialIdx(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === testimonialIdx ? 'bg-gradient-to-r from-blue-400 to-indigo-400 w-8' : 'bg-white/20 hover:bg-white/40 w-2'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setTestimonialIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                    className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/15 hover:border-white/25 transition-all shadow-sm"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    onClick={() => setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length)}
                    className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/15 hover:border-white/25 transition-all shadow-sm"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 6: WHAT GUESTS EXPERIENCE + RULES
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

            {/* Left Card: Guests Experience */}
            <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">FOR FIRST-TIME VISITORS</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight leading-tight mb-3">
                  What guests experience
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  If you visit a Circle, here is exactly what will happen throughout your attendance.
                </p>

                <div className="grid grid-cols-1 gap-3 mb-6">
                  {[
                    { icon: '👋', title: 'Welcomed by name', text: 'Someone will greet you before the meeting starts and introduce you to Peers so you never stand alone.' },
                    { icon: '🎤', title: 'Introduced to the room', text: 'A brief, warm recognition during the opening segment to welcome you to the community.' },
                    { icon: '👁️', title: 'Watch the full agenda', text: 'Experience all four segments firsthand to see exactly how the room operates and collaborates.' },
                    { icon: '🗣️', title: 'Brief collaboration turn', text: 'Opportunity to share who you are and introduce your work during the collaboration round.' },
                    { icon: '🤝', title: 'No high-pressure selling', text: 'Nobody will pitch or pressure you. You are there to observe the dynamic and culture.' },
                    { icon: '📞', title: 'Single courtesy follow-up', text: 'A Circle Director will call once afterwards simply to hear your genuine feedback.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all">
                      <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">{item.title}</p>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs sm:text-sm text-slate-500 italic mb-4">
                  "Most entrepreneurs visit, take a week to reflect, and then apply. That is exactly how it should work."
                </p>
                <Link
                  href="/circles/find"
                  className="rounded-xl bg-[#0062D2] hover:bg-[#0052B4] text-white px-6 py-3 text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm shadow-blue-500/20"
                >
                  <CalendarCheck className="size-4" />
                  Visit a Circle as Guest
                  <ArrowRight className="size-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Right Card: Code of the Room / Rules */}
            <div className="lg:col-span-6 bg-white rounded-3xl border border-rose-200/80 p-6 sm:p-9 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-rose-600">THE CODE OF THE ROOM</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight leading-tight mb-3">
                  What is not allowed
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  The agenda only produces massive business outcomes because strict boundaries are enforced.
                </p>

                <div className="grid grid-cols-1 gap-3.5 mb-6">
                  {RULES.map((rule) => {
                    const Icon = rule.icon
                    return (
                      <div key={rule.rule} className="flex items-start gap-4 p-4 rounded-2xl bg-rose-50/60 border border-rose-100/80 hover:bg-rose-50 transition-all">
                        <div className="size-10 rounded-xl bg-white border border-rose-200 text-rose-600 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 mb-1">{rule.rule}</p>
                          <p className="text-xs text-slate-600 leading-relaxed">{rule.detail}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-rose-100">
                <Link
                  href="/culture-and-code"
                  className="rounded-xl border border-rose-300 text-rose-600 hover:bg-rose-50 px-6 py-3 text-sm font-semibold transition-all inline-flex items-center gap-2"
                >
                  <ShieldAlert className="size-4" />
                  Read Full Culture & Code
                  <ArrowRight className="size-4 ml-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 7: FAQ
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">COMMON QUESTIONS</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-4">
                Frequently asked questions
              </h2>
              <p className="text-base text-slate-500 leading-relaxed mb-6">
                Everything you need to know before you walk in.
              </p>
              <div className="pt-2">
                <GalaxyButton
                  href="/circles/find"
                  variant="transparent-light"
                  size="md"
                >
                  Ask a Circle Director
                </GalaxyButton>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-2">
                {FAQS.map((faq, i) => {
                  const isOpen = openFaq === i
                  return (
                    <div
                      key={i}
                      className={`rounded-2xl border transition-all ${isOpen ? 'border-[#DCEBFE] bg-[#F0F7FF]' : 'border-slate-200 bg-white'}`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between p-5 text-left gap-4 cursor-pointer"
                      >
                        <span className={`text-sm font-semibold leading-snug ${isOpen ? 'text-[#0062D2]' : 'text-[#0F172A]'}`}>{faq.q}</span>
                        <ChevronDown className={`size-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0062D2]' : 'text-slate-400'}`} />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
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
          SECTION 8: CLOSING CTA SECTION
          ================================================================= */}
      <ClosingCtaSection
        eyebrow="YOUR NEXT MEETING"
        title="Experience it for yourself."
        subtitle="Join as a guest, meet the Peers and see the agenda in action. Or download the Unity App and start exploring today."
        description="Four segments. The same people. Every month. Build Your Business. Build Your Relationships. Build Your Circle."
        primaryButtonText="Download Unity App"
        primaryButtonHref="https://unity.peersglobal.com"
        secondaryButtonText="Visit as a Guest"
        secondaryButtonHref="/circles/find"
        secondaryButtonIcon={<ChevronRight className="size-4" />}
      />

    </div>
  )
}

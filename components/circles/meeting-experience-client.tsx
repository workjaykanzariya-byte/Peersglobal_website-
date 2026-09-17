'use client'

import React, { useState } from 'react'
import Link from 'next/link'
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
          SECTION 1: HERO — Fade Video Background
          ================================================================= */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <Link href="/circles" className="hover:text-slate-900 transition-colors">Circles</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-[#0062D2] font-semibold">The Circle Meeting Experience</span>
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
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>Real People</p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>Real Conversations</p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>Real Impact</p>
              </div>

              {/* Glass pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">BETTER BUSINESSES</p>
                  <p className="text-xs font-bold tracking-wider text-white">STRONGER RELATIONSHIPS · BRIGHTER LIVES</p>
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-6 bg-[#0062D2]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">THE CIRCLE MEETING EXPERIENCE</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[64px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  Inside a Circle Meeting
                </h1>
                <p className="text-xl sm:text-2xl text-slate-800 font-bold leading-snug mb-3">
                  Four parts. One purpose. Every Circle, every city, every month.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-lg">
                  Here is the exact agenda, so you know what to expect before you walk in.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank" rel="noopener noreferrer"
                    className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <Smartphone className="size-4" />
                    Download Unity App
                  </a>
                  <Link
                    href="/circles/find"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white/90 text-slate-800 px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105 shadow-2xs"
                  >
                    Visit as a Guest
                  </Link>
                </div>

                {/* Stat Band */}
                <div className="grid grid-cols-3 gap-3 w-full max-w-lg">
                  {[
                    { value: '500+', label: 'Circles Worldwide' },
                    { value: '45+', label: 'Cities' },
                    { value: '40–50', label: 'Peers per Circle' },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                      <div>
                        <div className="font-bold text-base sm:text-xl text-[#0F172A] leading-none">{s.value}</div>
                        <div className="text-[10px] text-slate-500 font-medium mt-1 leading-tight">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 2: WHY THE AGENDA NEVER CHANGES
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-left mb-2">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— BUILT FOR OUTCOMES —</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                Why the agenda never changes
              </h2>

              <p className="text-base sm:text-lg font-semibold text-[#0F172A] leading-relaxed mb-4">
                Put twelve entrepreneurs in a room without structure and you get a pleasant conversation that produces nothing.
              </p>
              <p className="text-base sm:text-lg text-[#0062D2] font-bold leading-relaxed mb-6">
                The agenda is what turns goodwill into outcomes.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Every Circle meeting follows the same four segments, in the same order, in every city and every country. A Peer who has attended a meeting in one city recognises immediately what is happening in another.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                That consistency is deliberate. Nobody has to wonder when it is their turn, how to ask for something, or whether their contribution will be noticed. The agenda holds the room so the people in it can focus on each other.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-[#F0F7FF] border border-[#DCEBFE] shadow-sm overflow-hidden">
                <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-32 h-32 rounded-full border border-dashed border-[#0062D2]/20 pointer-events-none" />
                <div className="relative z-10">
                  <span className="font-serif text-5xl sm:text-6xl text-[#0062D2] leading-none block mb-2">"</span>
                  <p className="font-serif text-xl sm:text-2xl text-[#0F172A] font-bold leading-snug mb-4">
                    Structure creates freedom. The agenda gives us the space to do what matters.
                  </p>
                  <Link
                    href="/the-idea"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#0052B4] tracking-wider uppercase"
                  >
                    <span>PEERS GLOBAL</span>
                    <span className="h-px w-8 bg-[#0062D2]" />
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
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-left mb-2">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— THE FOUR-PART AGENDA —</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-12">
            A meeting designed for real value
          </h2>

          {/* Progress bar with numbered steps */}
          <div className="flex items-center gap-0 mb-12 overflow-x-auto pb-2">
            {SEGMENTS.map((seg, i) => (
              <React.Fragment key={seg.num}>
                <button
                  onClick={() => setActiveSegment(activeSegment === i ? null : i)}
                  className={`flex flex-col items-center shrink-0 cursor-pointer group`}
                >
                  <div
                    className={`size-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all ${
                      activeSegment === i
                        ? 'border-current bg-current text-white scale-110'
                        : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300'
                    }`}
                    style={activeSegment === i ? { borderColor: seg.accentColor, backgroundColor: seg.accentColor } : {}}
                  >
                    {seg.num}
                  </div>
                </button>
                {i < SEGMENTS.length - 1 && (
                  <div className="flex-1 h-px border-t-2 border-dashed border-slate-200 mx-2" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 4-Column Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEGMENTS.map((seg, i) => (
              <div
                key={seg.num}
                className={`flex flex-col rounded-3xl border overflow-hidden transition-all cursor-pointer hover:shadow-lg ${
                  activeSegment === i ? `border-2 shadow-xl` : 'border-slate-200 bg-white shadow-2xs'
                }`}
                style={activeSegment === i ? { borderColor: seg.accentColor } : {}}
                onClick={() => setActiveSegment(activeSegment === i ? null : i)}
              >
                {/* Image area */}
                <div className={`relative h-36 ${seg.numBg} flex items-center justify-center overflow-hidden`}>
                  <div className="text-center select-none">
                    <p className="font-serif text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'var(--font-script)', color: seg.accentColor }}>
                      {seg.imgLabel.split(' · ').map((word, wi) => (
                        <span key={wi} className="block leading-tight text-2xl">{word}</span>
                      ))}
                    </p>
                  </div>
                  {/* Segment number badge */}
                  <div
                    className="absolute top-3 left-3 size-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: seg.accentColor }}
                  >
                    {seg.num}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-2">
                    <Clock className="size-3.5" />
                    {seg.time}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#0F172A] leading-snug mb-2">{seg.title}</h3>

                  <p className="text-xs font-bold mb-2" style={{ color: seg.accentColor }}>{seg.tagline}</p>

                  <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">{seg.body.slice(0, 160)}…</p>

                  {/* Expanded detail */}
                  {activeSegment === i && (
                    <div className="mb-4 space-y-3 animate-in fade-in duration-200">
                      {seg.quote && (
                        <div className={`p-3 rounded-xl ${seg.numBg} ${seg.borderColor} border`}>
                          <p className="font-serif text-base font-bold leading-snug" style={{ color: seg.accentColor }}>
                            {seg.quote}
                          </p>
                        </div>
                      )}
                      <p className="text-xs text-slate-600 leading-relaxed">{seg.body}</p>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Why it comes first</p>
                        <p className="text-xs text-slate-600 leading-relaxed">{seg.why}</p>
                      </div>
                    </div>
                  )}

                  <Link
                    href={seg.ctaHref}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-bold inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
                    style={{ color: seg.accentColor }}
                  >
                    {seg.ctaText}
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Signal table */}
          <div className="mt-12 rounded-2xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-2 bg-slate-50 border-b border-slate-200 px-6 py-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Segment</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">What it signals</span>
            </div>
            {SEGMENTS.map((seg) => (
              <div key={seg.num} className="grid grid-cols-2 border-b border-slate-100 last:border-0 px-6 py-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full shrink-0" style={{ backgroundColor: seg.accentColor }} />
                  <span className="text-sm font-semibold text-[#0F172A]">{seg.title}</span>
                </div>
                <span className="text-sm text-slate-600">{seg.signal}</span>
              </div>
            ))}
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
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— SAME STRUCTURE, BIGGER POSSIBILITIES —</span>
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
              <div className="text-left mb-2">
                <span className="text-emerald-600 text-xs font-bold tracking-[0.25em] uppercase">— BETWEEN MEETINGS —</span>
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
      <section className="py-12 sm:py-16 bg-[#F0F7FF] border-b border-[#DCEBFE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full">
              <div className="p-8 sm:p-12">
                <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#0F172A] leading-relaxed mb-6 italic">
                  "{TESTIMONIALS[testimonialIdx].quote}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="size-10 rounded-full bg-[#0062D2] text-white flex items-center justify-center font-bold text-sm">
                    {TESTIMONIALS[testimonialIdx].name[0]}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-[#0F172A]">{TESTIMONIALS[testimonialIdx].name}</p>
                    <p className="text-xs text-slate-500">{TESTIMONIALS[testimonialIdx].role} · {TESTIMONIALS[testimonialIdx].circle}</p>
                  </div>
                </div>
              </div>

              {/* Dots + arrows */}
              <div className="flex items-center justify-center gap-4 mt-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`size-2 rounded-full transition-all ${i === testimonialIdx ? 'bg-[#0062D2] w-6' : 'bg-slate-300'}`}
                  />
                ))}
                <button
                  onClick={() => setTestimonialIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="ml-2 size-8 rounded-full border border-slate-300 flex items-center justify-center hover:border-[#0062D2] hover:text-[#0062D2] transition-all"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  onClick={() => setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length)}
                  className="size-8 rounded-full border border-slate-300 flex items-center justify-center hover:border-[#0062D2] hover:text-[#0062D2] transition-all"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 6: WHAT GUESTS EXPERIENCE + RULES
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Guests */}
            <div className="lg:col-span-6">
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— FOR FIRST-TIME VISITORS —</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                What guests experience
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                If you visit a Circle, here is exactly what will happen.
              </p>

              <div className="space-y-3">
                {[
                  { icon: '👋', text: 'You will be welcomed by name. Someone will meet you, introduce you to Peers before the meeting starts, and make sure you are never standing alone.' },
                  { icon: '🎤', text: 'You will be introduced to the room. Briefly and warmly, during the opening.' },
                  { icon: '👁️', text: 'You will watch the full agenda. All four segments. You will see exactly how the room works and who would be around you.' },
                  { icon: '🗣️', text: 'You will be asked to present. Introduce yourself during the collaboration round.' },
                  { icon: '🤝', text: 'You will not be sold to. Nobody will pressure you, and nobody will ask you to decide anything on the day.' },
                  { icon: '📞', text: 'You will be contacted once afterwards. A Circle Director will call to hear what you thought. Once.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAFBFD] border border-slate-100">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <p className="text-sm text-slate-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-slate-500 italic mt-6 leading-relaxed">
                Most entrepreneurs visit, take a week to think, and then apply. That is exactly how it should work.
              </p>

              <div className="mt-6">
                <Link
                  href="/circles/find"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-6 py-3 text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
                >
                  Visit a Circle
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Rules */}
            <div className="lg:col-span-6">
              <div className="text-left mb-2">
                <span className="text-rose-600 text-xs font-bold tracking-[0.25em] uppercase">— THE CODE OF THE ROOM —</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                What is not allowed
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                The agenda only works if certain things never happen inside it.
              </p>

              <div className="space-y-3">
                {RULES.map((rule) => {
                  const Icon = rule.icon
                  return (
                    <div key={rule.rule} className="flex items-start gap-4 p-5 rounded-2xl bg-rose-50 border border-rose-100">
                      <div className="size-9 rounded-full bg-white text-rose-500 flex items-center justify-center shrink-0 shadow-2xs">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0F172A] mb-0.5">{rule.rule}</p>
                        <p className="text-xs text-slate-600 leading-relaxed">{rule.detail}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6">
                <Link
                  href="/culture-and-code"
                  className="rounded-full border border-rose-300 text-rose-600 hover:bg-rose-50 px-6 py-3 text-sm font-semibold transition-all inline-flex items-center gap-2"
                >
                  Read the Peers Code
                  <ArrowRight className="size-4" />
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
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— COMMON QUESTIONS —</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-4">
                Frequently asked questions
              </h2>
              <p className="text-base text-slate-500 leading-relaxed mb-6">
                Everything you need to know before you walk in.
              </p>
              <Link
                href="/circles/find"
                className="rounded-full border border-slate-300 hover:border-[#0062D2] text-slate-700 hover:text-[#0062D2] px-6 py-3 text-sm font-semibold transition-all inline-flex items-center gap-2"
              >
                Ask a Circle Director
                <ArrowRight className="size-4" />
              </Link>
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
          SECTION 8: CLOSING DARK BANNER
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-white/30" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">YOUR NEXT MEETING</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight mb-6">
                Experience it for yourself.
              </h2>

              <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-3">
                Join as a guest, meet the Peers and see the agenda in action. Or download the Unity App and start exploring today.
              </p>
              <p className="text-sm text-white/40 mb-2">
                Four segments. The same people. Every month.
              </p>
              <p className="text-sm text-white/50 mb-8">
                Build Your Business. Build Your Relationships. Build Your Circle.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank" rel="noopener noreferrer"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-4 text-sm font-bold shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <Smartphone className="size-4" />
                  Download Unity App
                </a>
                <Link
                  href="/circles/find"
                  className="rounded-full border border-white/30 hover:border-white/60 text-white px-8 py-4 text-sm font-semibold transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  Visit as a Guest
                  <ChevronRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-end justify-center">
              <div className="text-right select-none pointer-events-none" style={{ fontFamily: 'var(--font-script)' }}>
                <p className="text-3xl sm:text-4xl text-white/30 leading-tight">Same</p>
                <p className="text-3xl sm:text-4xl text-white/50 leading-tight">People</p>
                <p className="text-4xl sm:text-5xl text-amber-300/80 leading-tight mt-1">Bigger</p>
                <p className="text-4xl sm:text-5xl text-amber-300 leading-tight">Possibilities</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

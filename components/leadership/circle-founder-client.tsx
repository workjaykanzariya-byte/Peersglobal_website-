'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Users,
  Building2,
  Globe2,
  Target,
  Sparkles,
  Quote,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Calendar,
  Award,
  BookOpen,
  Heart,
  TrendingUp,
  Briefcase,
  Layers,
  Megaphone,
  Clock,
  Compass,
  UserCheck,
  Eye,
  Flag,
  Share2,
  MessageSquare,
  Search,
} from 'lucide-react'
import { usePageMedia } from '@/lib/hooks/use-page-media'

// ─── Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  { icon: Users, value: '10,000+', label: 'Entrepreneurs' },
  { icon: Building2, value: '45+', label: 'Cities' },
  { icon: Globe2, value: '25+', label: 'Countries' },
  { icon: Target, value: '1M', label: 'Lives to Impact' },
]

// ─── Six Stages of Building a Circle ──────────────────────────────────────
const SIX_STAGES = [
  {
    stage: '01',
    title: 'The Beginning',
    desc: 'One entrepreneur decides to bring people together.',
  },
  {
    stage: '02',
    title: 'The First Conversations',
    desc: 'The Founder begins conversations with entrepreneurs who may belong.',
  },
  {
    stage: '03',
    title: 'The First Circle',
    desc: 'The first group comes together and experiences the Circle.',
  },
  {
    stage: '04',
    title: 'Building the Rhythm',
    desc: 'Meetings, relationships and contribution begin becoming consistent.',
  },
  {
    stage: '05',
    title: 'Growing the Circle',
    desc: 'More relevant entrepreneurs are brought into the community.',
  },
  {
    stage: '06',
    title: 'Becoming a Community',
    desc: 'The Circle develops its own rhythm, relationships and culture.',
  },
]

// ─── What The Role Carries (5 Dimensions) ─────────────────────────────────
const ROLE_CARRIES = [
  {
    number: '01',
    title: 'CONVENE THE INDUSTRY',
    headline: 'Bring together relevant entrepreneurs who can create meaningful conversations and relationships.',
    desc: 'The objective is not simply to fill seats. It is to bring the right people into the room.',
    icon: Users,
  },
  {
    number: '02',
    title: 'HOST THE PLATFORM',
    headline: 'Create the environment in which the first Circle can meet, connect and begin building trust.',
    desc: 'The Founder helps turn an idea into an actual experience.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'INVITE THE LEADERS',
    headline: 'Identify entrepreneurs who can contribute beyond their own participation and encourage them to step into leadership.',
    desc: 'A Circle should not depend forever on one person. The Founder begins something that others can eventually help lead.',
    icon: Award,
  },
  {
    number: '04',
    title: 'MEDIA & VISIBILITY',
    headline: 'Help create visibility for the Circle and the entrepreneurs within it.',
    desc: 'Stories deserve to be seen. Contributions deserve to be recognised. And the community should have opportunities to represent what it is building.',
    icon: Megaphone,
  },
  {
    number: '05',
    title: 'REPRESENT THE COMMUNITY',
    headline: 'Carry the Circle\'s identity beyond the meeting room.',
    desc: 'Represent PEERS GLOBAL with the same respect, responsibility and spirit with which the Circle was created.',
    icon: Globe2,
  },
]

// ─── What a Founder Does ──────────────────────────────────────────────────
const WHAT_FOUNDER_DOES = [
  'see the opportunity',
  'begin the conversation',
  'introduce entrepreneurs to the idea',
  'create the first gathering',
  'encourage participation',
  'build early relationships',
  'invite people who can contribute',
  'identify emerging leaders',
  'help establish the Circle\'s rhythm',
  'represent the Circle as it begins its journey',
]

// ─── Who This Is For ──────────────────────────────────────────────────────
const WHO_THIS_IS_FOR = [
  'well connected within their industry',
  'natural conveners',
  'trusted by other entrepreneurs',
  'comfortable starting something new',
  'willing to make introductions',
  'able to create conversations',
  'interested in building a lasting community',
]

// ─── What PEERS GLOBAL Provides & What You Bring ─────────────────────────
const WHAT_PEERS_GLOBAL_PROVIDES = [
  {
    title: 'Community Structure & Framework',
    desc: 'The complete governance model, four-part agenda, seat allocation system, and operational standards so you never build from scratch.',
  },
  {
    title: 'Language & Philosophy',
    desc: 'The trusted vocabulary, core principles, and established ethos of contribution over transaction.',
  },
  {
    title: 'Unity Digital Ecosystem',
    desc: 'The official Unity App for seamless member onboarding, attendance tracking, and cross-Circle networking from Day 1.',
  },
  {
    title: 'Regional & Leadership Guidance',
    desc: 'Direct mentorship from experienced Executive Directors and existing Founders to support every milestone of your launch.',
  },
]

const WHAT_YOU_BRING_POINTS = [
  {
    title: 'Local Understanding & Market Insight',
    desc: 'You understand your city and know the entrepreneurs who are building meaningful businesses in your sector.',
  },
  {
    title: 'Trust & Relationships',
    desc: 'The personal credibility that brings the first accomplished founders to the table.',
  },
  {
    title: 'Initiative & The Willingness to Begin',
    desc: 'Taking the courageous first step before the room exists and finding the people for whom the Circle genuinely matters.',
  },
]

// ─── How to Become Checklist ──────────────────────────────────────────────
const HOW_TO_BECOME_POINTS = [
  'the city',
  'the industry or purpose',
  'the entrepreneurs you could bring together',
  'the reason this Circle should exist',
  'the relationships you already have',
  'the contribution you could make',
]

// ─── Frequently Asked Questions ──────────────────────────────────────────
const FAQ = [
  {
    q: 'Does a Circle need to be full before it begins?',
    a: 'No. Circle starts from Day 1. The first entrepreneur is already the beginning of the Circle.',
  },
  {
    q: 'Do I need a large personal network?',
    a: 'Not necessarily. What matters is the willingness and ability to begin bringing relevant entrepreneurs together.',
  },
  {
    q: 'Is the Founder the permanent leader of the Circle?',
    a: 'Not necessarily. The Founder begins the Circle. As the community develops, leadership can become distributed through the Powerhouse and Circle leadership structure.',
  },
  {
    q: 'What is the biggest responsibility of a Founder?',
    a: 'To create the conditions for the right entrepreneurs to meet, build relationships and begin contributing to one another.',
  },
  {
    q: 'What happens after the Circle is established?',
    a: 'The Circle develops its rhythm, leadership and community. The Founder becomes part of a larger story: one that is no longer about starting a Circle, but about helping that Circle become a meaningful community.',
  },
]

export function CircleFounderClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const { getMedia } = usePageMedia('leadership')
  const heroMedia = getMedia({
    sectionName: 'Circle Founder',
    subModuleName: 'CIRCLE FOUNDER HERO',
    subModuleId: 'sub-leadership-circle-founder',
    fallbackUrl: '/videos/hero-background.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Circle Founder Role, Economics & Impact',
  })

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFBFD] text-slate-900">
      {/* ─── 1. HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-5 sm:pt-6 pb-3 sm:pb-4 border-b border-slate-200/80 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-5">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <Link href="/leadership" className="hover:text-[#0062D2] transition-colors">
              Leadership
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="text-slate-800 font-semibold">Circle Founder</span>
          </nav>

          {/* Hero Banner Box */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] flex items-center">
            {/* Fade Video Visual (Right 60%) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none"
              style={{
                maskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
              }}
            >
              {heroMedia.isYouTube && heroMedia.embedUrl ? (
                <iframe
                  src={`${heroMedia.embedUrl}&mute=1&loop=1`}
                  title={heroMedia.title}
                  className="w-full h-full border-0 object-cover pointer-events-none scale-125"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              ) : (
                <video
                  key={heroMedia.mediaUrl}
                  src={heroMedia.mediaUrl || '/videos/hero-background.mp4'}
                  poster="/images/leadership-circle-founder.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center scale-105"
                />
              )}
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

              {/* Cursive Script Overlay */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 z-20 text-right drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Start With One
                </p>
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight mt-0.5 font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Build With Trust.
                </p>
                <p
                  className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Create A Circle.
                </p>
              </div>
            </div>

            {/* Left Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
                  <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                  <span className="brand-gradient-text">CIRCLE FOUNDER</span>
                  <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.08] mb-4">
                  Circle Founder
                </h1>

                <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug mb-3">
                  Launches new Circles.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                  Every Circle begins because someone decides to bring the right people together. A Circle does not begin with a room full of entrepreneurs. It begins with one entrepreneur who sees an opportunity: <strong className="text-slate-900 font-semibold">“There should be a Circle here.”</strong> A Circle Founder takes the first step — not by building a personal network, but by creating the possibility of a community.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-8 py-3.5 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4" />
                  </a>
                  <Link
                    href="/start-a-circle"
                    className="rounded-full border border-slate-300 hover:border-[#0062D2] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0062D2] px-8 py-3.5 text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Apply to Found a Circle</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="mt-4 sm:mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200/90 p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="size-12 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 leading-none">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 2. THE ROOM NOBODY HAS BUILT ───────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="brand-gradient-text">THE VISION</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-5">
                The room nobody has built
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-light">
                Every city has entrepreneurs who could learn from one another. Every industry has experiences that deserve to be shared. Every growing business owner reaches moments where the right conversation, introduction or relationship could change what becomes possible.
              </p>

              <div className="p-6 rounded-2xl bg-[#FAFBFD] border-l-4 border-[#0062D2] border-y border-r border-slate-200/80 mb-6">
                <p className="text-lg font-serif font-bold text-slate-950 mb-1">
                  But sometimes that Circle does not exist yet. That is where the Founder comes in.
                </p>
                <p className="text-sm text-slate-600 font-light mt-2">
                  The Founder sees the room before the room exists. And then begins building it.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 w-full">
                <div className="p-5 rounded-2xl bg-[#F4F8FE] border border-blue-100 flex items-start gap-3.5">
                  <div className="size-10 rounded-xl bg-blue-100 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                    <Compass className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-slate-900">See The Opportunity</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light mt-0.5">
                      Identify the missing ecosystem in your city or industry where accomplished founders can connect.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="size-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-slate-900">Create The Possibility</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light mt-0.5">
                      Turn an empty space into a vibrant home for collaboration, peer learning, and shared growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 aspect-[4/3]">
                <Image
                  src="/images/leadership-circle-founder.jpg"
                  alt="Circle Founder bringing entrepreneurs together"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right select-none pointer-events-none drop-shadow-md">
                  <p className="text-xs text-white/90 font-medium tracking-wider uppercase">
                    Stage 01
                  </p>
                  <p
                    className="text-lg text-amber-300 font-bold leading-tight"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Build The Room
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. CIRCLE STARTS FROM DAY 1 & SIX STAGES TABLE ──────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">THE GROWTH SEQUENCE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-4">
              Circle starts from Day 1
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed mb-3">
              You do not wait until everything is perfect. You do not need a full room before you call it a Circle.
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              The Circle starts from Day 1. It starts with the first entrepreneur. Then the first conversation. Then the first meeting. Then the first relationship. Then the rhythm begins.
            </p>
          </div>

          {/* 6 Stages Table / Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIX_STAGES.map((item) => (
              <div
                key={item.stage}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#0062D2]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      Stage {item.stage}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-center max-w-3xl mx-auto">
            <p className="text-sm font-serif font-bold text-slate-900">
              The Founder starts the journey. The community eventually carries it forward.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 4. WHAT THE ROLE CARRIES (5 DIMENSIONS - DARK THEME) ─────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D] py-20 sm:py-24 lg:py-28 text-white border-b border-slate-800/80">
        <div aria-hidden className="pointer-events-none absolute top-1/4 left-10 size-[320px] rounded-full bg-blue-600/12 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute bottom-10 right-10 size-[380px] rounded-full bg-cyan-500/8 blur-[140px]" />
        <div aria-hidden className="pointer-events-none absolute top-10 right-1/3 size-[250px] rounded-full bg-indigo-600/8 blur-[100px]" />

        <svg viewBox="0 0 1400 600" className="absolute inset-0 size-full pointer-events-none opacity-20" preserveAspectRatio="none">
          <g fill="#38BDF8">
            <circle cx="80" cy="60" r="1.5" /><circle cx="200" cy="130" r="1" /><circle cx="340" cy="45" r="2" />
            <circle cx="500" cy="100" r="1.2" /><circle cx="680" cy="35" r="1.5" /><circle cx="850" cy="110" r="1" />
            <circle cx="1020" cy="60" r="2" /><circle cx="1180" cy="160" r="1.2" /><circle cx="1340" cy="80" r="1.5" />
            <circle cx="150" cy="500" r="1.2" /><circle cx="400" cy="540" r="1.8" /><circle cx="640" cy="560" r="1" />
            <circle cx="900" cy="520" r="1.5" /><circle cx="1100" cy="550" r="1" /><circle cx="70" cy="320" r="1" />
            <circle cx="310" cy="270" r="1.8" /><circle cx="760" cy="300" r="1.2" /><circle cx="1260" cy="360" r="1" />
          </g>
          <g stroke="#38BDF8" strokeWidth="0.5" opacity="0.35" fill="none">
            <line x1="80" y1="60" x2="200" y2="130" /><line x1="200" y1="130" x2="340" y2="45" />
            <line x1="500" y1="100" x2="680" y2="35" /><line x1="850" y1="110" x2="1020" y2="60" />
            <line x1="1020" y1="60" x2="1180" y2="160" />
          </g>
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3.5">
              <span className="w-5 h-px bg-cyan-400" />
              FIVE DIMENSIONS OF RESPONSIBILITY
              <span className="w-5 h-px bg-cyan-400" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              What the role carries
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Being a Circle Founder means carrying responsibility for the beginning. The role includes five important dimensions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROLE_CARRIES.map((dim, idx) => {
              const Icon = dim.icon
              return (
                <div
                  key={dim.number}
                  className={`p-7 rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] shadow-[0_20px_50px_rgba(11,21,40,0.35)] hover:border-cyan-500/50 hover:shadow-[0_25px_60px_rgba(56,189,248,0.12)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                    idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.06] via-transparent to-black/30" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-cyan-400 border border-cyan-500/30 px-2.5 py-1 rounded-full bg-cyan-500/10">
                        {dim.number}
                      </span>
                      <div className="size-11 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all shadow-inner">
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white mb-2 tracking-wide">
                      {dim.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cyan-200/90 font-medium mb-2 leading-snug">
                      {dim.headline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {dim.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 5. LEADING THE LEADERS ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="brand-gradient-text">DISTRIBUTED LEADERSHIP</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-5">
                Leading the leaders
              </h2>
              <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed mb-4">
                A Founder starts the Circle. That does not mean the Founder must remain the centre of everything.
              </p>
              <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed mb-6">
                The strongest communities gradually develop shared responsibility. As the Circle grows, leadership can move seamlessly through four evolutionary stages:
              </p>

              {/* Step sequence */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold text-[#0062D2] uppercase">Step 1</span>
                  <h4 className="font-serif text-base font-bold text-slate-900 mt-1">One Founder</h4>
                  <p className="text-xs text-slate-600 font-light mt-0.5">Sees the vision and starts the room.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold text-[#0062D2] uppercase">Step 2</span>
                  <h4 className="font-serif text-base font-bold text-slate-900 mt-1">A Powerhouse</h4>
                  <p className="text-xs text-slate-600 font-light mt-0.5">Active committees take functional ownership.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold text-[#0062D2] uppercase">Step 3</span>
                  <h4 className="font-serif text-base font-bold text-slate-900 mt-1">Circle Director & Team</h4>
                  <p className="text-xs text-slate-600 font-light mt-0.5">Holds month-on-month operational rhythm.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold text-[#0062D2] uppercase">Step 4</span>
                  <h4 className="font-serif text-base font-bold text-slate-900 mt-1">Self-Sustaining Community</h4>
                  <p className="text-xs text-slate-600 font-light mt-0.5">Thrives and outgrows any individual effort.</p>
                </div>
              </div>
            </div>

            {/* Right Quote Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#FAFBFD] to-[#F1F5F9] border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-5">
                    <Quote className="size-6" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-2">
                    THE FOUNDER&apos;S LEGACY
                  </h3>
                  <blockquote className="font-serif text-xl sm:text-2xl font-bold text-slate-950 leading-snug tracking-tight mb-4">
                    “You are not simply building a group. You are helping build something that can outgrow your individual effort.”
                  </blockquote>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    That is an important part of the Founder&apos;s journey — creating an institution that continues to elevate entrepreneurs year after year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. WHAT A FOUNDER DOES & WHO THIS IS FOR ────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left: What a Founder Does */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-1">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="brand-gradient-text">THE INITIATOR</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                What a Founder does
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                The Founder is often the first person to step up and make things happen across the Circle journey:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {WHAT_FOUNDER_DOES.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-start gap-2.5 shadow-sm">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-800 font-medium leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100">
                <p className="text-xs uppercase font-bold text-[#0062D2] tracking-wider mb-1">
                  UNDERNEATH IT ALL
                </p>
                <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-serif font-bold">
                  Bring the right people together and help them discover what they can build together.
                </p>
              </div>
            </div>

            {/* Right: Who This Is For */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-1">
                  FOUNDER PROFILE
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mb-3">
                  Who this is for
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-5">
                  Circle Founders are entrepreneurs who see beyond their own business. They may be:
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {WHO_THIS_IS_FOR.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-slate-200">
                  <p className="text-xs text-slate-600 font-medium">
                    You do not have to know everyone. You need to be willing to begin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. WHAT PEERS GLOBAL PROVIDES & WHAT YOU BRING ─────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* What PEERS GLOBAL provides */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-2">
                  THE FOUNDATION
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mb-4">
                  What PEERS GLOBAL provides
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                  You do not have to build the Circle framework from scratch. PEERS GLOBAL provides the community structure, language and framework within which the Circle can develop.
                </p>

                <div className="space-y-4">
                  {WHAT_PEERS_GLOBAL_PROVIDES.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif text-base font-bold text-slate-950">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 text-xs font-semibold text-slate-700">
                The structure is provided. The community is built together.
              </div>
            </div>

            {/* What You Bring */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-2">
                  THE CATALYST
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mb-4">
                  What you bring
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                  You bring something no framework can manufacture: <strong className="font-semibold text-slate-900">Trust</strong>.
                </p>

                <div className="space-y-4">
                  {WHAT_YOU_BRING_POINTS.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif text-base font-bold text-slate-950">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-600 font-medium">
                Your role is not to persuade everyone. It is to find the people for whom the Circle could genuinely matter.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. HOW TO BECOME A CIRCLE FOUNDER ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">THE FIRST STEP</span>
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-4">
              How to become a Circle Founder
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              The starting point is simple. Ask yourself: <br />
              <span className="font-serif font-bold text-slate-900 text-lg sm:text-xl">“If this Circle does not exist today, am I willing to help create it?”</span>
            </p>
          </div>

          <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-slate-950 mb-4 text-center sm:text-left">
              Then identify:
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {HOW_TO_BECOME_POINTS.map((pt, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="size-7 rounded-full bg-blue-100 text-[#0062D2] text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-800 capitalize">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-center">
              <p className="text-sm text-slate-800 font-light">
                From there, begin the conversation with PEERS GLOBAL. Every Circle that exists today was once only an idea. Someone had to take the first step.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/start-a-circle"
                className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-8 py-3.5 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Begin the Conversation</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. FREQUENTLY ASKED QUESTIONS ──────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">FREQUENTLY ASKED QUESTIONS</span>
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#FAFBFD] border border-slate-200/90 overflow-hidden shadow-sm transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-slate-950 hover:text-[#0062D2] transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`size-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0062D2]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed font-light border-t border-slate-200/80">
                      {item.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 10. START WITH ONE ENTREPRENEUR (CLOSING HERO BANNER) ──────── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/15 blur-3xl"
        />

        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35">
          <svg
            viewBox="0 0 760 520"
            fill="none"
            className="h-full w-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520" stroke="currentColor" strokeWidth="1" className="text-blue-300/30" />
            <path d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" className="text-sky-200/25" />
            <path d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520" stroke="currentColor" strokeWidth="1" className="text-blue-200/20" />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-sky-200 mb-3">
                <span className="w-5 h-px bg-sky-200" />
                START WITH ONE ENTREPRENEUR
                <span className="w-5 h-px bg-sky-200" />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
                You only have to begin.
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light mb-3 max-w-2xl">
                You do not have to build the whole Circle today. Find the first entrepreneur. Start the first conversation. Create the first connection. Then let contribution, trust and relationships build what comes next.
              </p>

              <div className="space-y-1 mb-8">
                <p className="text-sm font-semibold text-sky-200">Start with one entrepreneur.</p>
                <p className="text-sm font-semibold text-sky-200">Build with trust.</p>
                <p className="text-sm font-semibold text-sky-200">Grow through contribution.</p>
                <p className="text-lg font-serif font-bold text-amber-300">Create a Circle.</p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/start-a-circle"
                  className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-8 py-3.5 text-sm font-semibold shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Apply to Found a Circle</span>
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 hover:border-white bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 text-sm font-semibold backdrop-blur-md transition-all inline-flex items-center gap-2"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg">
              <p
                className="text-2xl sm:text-3xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Start With One.
              </p>
              <p
                className="text-2xl sm:text-3xl text-white/80 leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Build With Trust.
              </p>
              <p
                className="text-2xl sm:text-3xl text-white leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Grow Through Contribution.
              </p>
              <p
                className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Create A Circle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

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
  Smartphone,
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
    fallbackUrl: '/videos/homepage-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Circle Founder Role, Economics & Impact',
  })

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans antialiased">
      {/* =========================================================================
          SECTION 1: HERO — CIRCLE FOUNDER (Master Dark Video Banner)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Full Bleed Hero Video Background */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          {heroMedia.isYouTube && heroMedia.embedUrl ? (
            <iframe
              src={`${heroMedia.embedUrl}&mute=1&loop=1`}
              title={heroMedia.title}
              className="size-full border-0 object-cover pointer-events-none scale-125 opacity-40"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : (
            <video
              key={heroMedia.mediaUrl}
              src={heroMedia.mediaUrl || '/videos/homepage-hero-bg.mp4'}
              poster="/images/leadership-circle-founder.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="size-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3 text-slate-500" />
            <Link href="/leadership" className="hover:text-white transition-colors">
              Leadership
            </Link>
            <ChevronRight className="size-3 text-slate-500" />
            <span className="text-white font-semibold">Circle Founder</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Hero Content */}
            <div className="lg:col-span-12 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>CIRCLE FOUNDER</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  Circle{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Founder
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Launches new Circles.
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Every Circle begins because someone decides to bring the right people together. A Circle does not begin with a room full of entrepreneurs. It begins with one entrepreneur who sees an opportunity: <strong className="text-white font-semibold">“There should be a Circle here.”</strong> A Circle Founder takes the first step — not by building a personal network, but by creating the possibility of a community.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/start-a-circle"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:opacity-95 transition-all uppercase tracking-wider group"
                >
                  <span>Apply to Found a Circle</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-2xs backdrop-blur-sm"
                >
                  <Smartphone className="size-4 text-sky-400" />
                  <span>Download Unity App</span>
                </a>
              </div>
            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200/90 p-5 flex items-center gap-4 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="size-12 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900 leading-none">
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

      {/* =========================================================================
          SECTION 2: THE ROOM NOBODY HAS BUILT
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  THE VISION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-900 leading-tight">
                The room nobody has built
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Every city has entrepreneurs who could learn from one another. Every industry has experiences that deserve to be shared. Every growing business owner reaches moments where the right conversation, introduction or relationship could change what becomes possible.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-2xs space-y-2">
                <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  But sometimes that Circle does not exist yet. That is where the Founder comes in.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  The Founder sees the room before the room exists — and takes the initiative to build it.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex items-start gap-3.5 group">
                  <div className="size-11 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Compass className="size-5.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">See The Opportunity</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1">
                      Identify the missing ecosystem in your city or industry where accomplished founders can connect.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex items-start gap-3.5 group">
                  <div className="size-11 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="size-5.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Create The Possibility</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1">
                      Turn an empty space into a vibrant home for collaboration, peer learning, and shared growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-[4/3] group">
                <Image
                  src="/images/leadership-circle-founder.jpg"
                  alt="Circle Founder bringing entrepreneurs together"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right select-none pointer-events-none drop-shadow-md">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 border border-white/20 text-[10px] font-bold text-white tracking-widest uppercase backdrop-blur-md">
                    <span className="size-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                    STAGE 01
                  </span>
                  <p
                    className="text-lg sm:text-xl text-amber-300 font-bold leading-tight mt-1.5"
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

      {/* =========================================================================
          SECTION 3: CIRCLE STARTS FROM DAY 1 (Six Stages Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                THE GROWTH SEQUENCE
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Circle starts from Day 1
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              You do not wait until everything is perfect. You do not need a full room before you call it a Circle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {SIX_STAGES.map((item) => (
              <div
                key={item.stage}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 cursor-default"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="size-11 rounded-2xl bg-blue-50 border border-blue-200/70 text-[#0062D2] font-mono font-bold text-xs flex items-center justify-center shadow-2xs">
                      {item.stage}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-50 border border-slate-200/80 text-slate-600 shadow-2xs">
                      Stage {item.stage}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2.5">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span className="text-slate-400 font-mono">Stage 0{item.stage} of 06</span>
                  <span className="inline-flex items-center gap-1 text-slate-700 font-semibold">
                    Milestone &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/80 border border-blue-200/60 shadow-2xs flex items-center justify-center text-center text-xs sm:text-sm font-medium text-slate-800">
            <span>
              The Founder starts the journey. <strong className="text-slate-900 font-bold">The community eventually carries it forward.</strong>
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHAT THE ROLE CARRIES (5 Dimensions)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                FIVE DIMENSIONS OF RESPONSIBILITY
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-slate-900">
              What the role carries
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Being a Circle Founder means carrying responsibility for the beginning. The role includes five important dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {ROLE_CARRIES.map((dim, idx) => {
              const Icon = dim.icon
              return (
                <div
                  key={dim.number}
                  className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 cursor-default ${
                    idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="size-12 rounded-2xl border border-blue-200/70 bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 shadow-2xs">
                        <Icon className="size-5.5" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-50 border border-slate-200/80 text-slate-600 shadow-2xs">
                        Dimension {dim.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {dim.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed mt-1.5">
                        {dim.headline}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2">
                        {dim.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="text-slate-400 font-mono">Pillar 0{idx + 1} of 05</span>
                    <span className="inline-flex items-center gap-1 text-slate-700 font-semibold">
                      Role Dimension &rarr;
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: LEADING THE LEADERS (Evolutionary Steps & Legacy Quote)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Evolutionary Steps */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                    DISTRIBUTED LEADERSHIP
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                  Leading the leaders
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  A Founder starts the Circle. That does not mean the Founder must remain the centre of everything. The strongest communities gradually develop shared responsibility through four evolutionary stages:
                </p>

                <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80">
                    <span className="text-xs font-bold text-[#0062D2] font-mono">Stage 01</span>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">One Founder</h4>
                    <p className="text-xs text-slate-600 font-light mt-0.5">Sees the vision and convenes the initial room.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80">
                    <span className="text-xs font-bold text-[#0062D2] font-mono">Stage 02</span>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">A Powerhouse</h4>
                    <p className="text-xs text-slate-600 font-light mt-0.5">14 active committees take functional ownership.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80">
                    <span className="text-xs font-bold text-[#0062D2] font-mono">Stage 03</span>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">Circle Director &amp; Team</h4>
                    <p className="text-xs text-slate-600 font-light mt-0.5">Holds month-on-month operational rhythm.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80">
                    <span className="text-xs font-bold text-[#0062D2] font-mono">Stage 04</span>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">Self-Sustaining Community</h4>
                    <p className="text-xs text-slate-600 font-light mt-0.5">Thrives and outgrows any individual effort.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#0062D2] italic">
                ✦ &ldquo;True leadership builds what can outgrow the leader.&rdquo;
              </div>
            </div>

            {/* Right Column: The Founder's Legacy Card */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#061226] via-[#0A1A38] to-[#040D1E] text-white shadow-xl border border-slate-800 hover:shadow-2xl hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 size-64 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

              <div className="space-y-5 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                  <span className="h-[2px] w-4 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
                    THE FOUNDER&apos;S LEGACY
                  </span>
                </div>

                <div className="size-11 rounded-2xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/10">
                  <Quote className="size-5" />
                </div>

                <blockquote className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">
                  “You are not simply building a group. You are helping build something that can outgrow your individual effort.”
                </blockquote>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  That is an important part of the Founder&apos;s journey — creating an institution that continues to elevate entrepreneurs year after year.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 relative z-10 text-xs text-slate-400 italic">
                Creating possibility for generations of builders.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHAT A FOUNDER DOES & WHO THIS IS FOR (Asymmetric Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: What a Founder Does */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  THE INITIATOR
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                What a Founder does
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                The Founder is often the first person to step up and make things happen across the Circle journey:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-1">
                {WHAT_FOUNDER_DOES.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/20 hover:shadow-2xs transition-all flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-800 font-medium capitalize">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 shadow-2xs space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                  UNDERNEATH IT ALL
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  Bring the right people together and help them discover what they can build together.
                </p>
              </div>
            </div>

            {/* Right: Who This Is For */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                    FOUNDER PROFILE
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Who this is for
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    Circle Founders are entrepreneurs who see beyond their own business:
                  </p>
                </div>

                <div className="space-y-3">
                  {WHO_THIS_IS_FOR.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800 capitalize">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                  ✦ You do not have to know everyone. You need to be willing to begin.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: WHAT PEERS GLOBAL PROVIDES & WHAT YOU BRING (2-Column Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left: What PEERS GLOBAL provides */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                  THE FOUNDATION
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                  What PEERS GLOBAL provides
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  You do not have to build the Circle framework from scratch. PEERS GLOBAL provides the community structure, language and framework within which the Circle can develop.
                </p>

                <div className="space-y-3 pt-2">
                  {WHAT_PEERS_GLOBAL_PROVIDES.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                      <CheckCircle2 className="size-4.5 text-[#0062D2] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5 font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                The structure is provided. The community is built together.
              </div>
            </div>

            {/* Right: What You Bring */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                  THE CATALYST
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                  What you bring
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  You bring something no framework can manufacture: <strong className="font-semibold text-slate-900">Trust</strong>.
                </p>

                <div className="space-y-3 pt-2">
                  {WHAT_YOU_BRING_POINTS.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                      <CheckCircle2 className="size-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5 font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-600 font-medium">
                Your role is not to persuade everyone. It is to find the people for whom the Circle could genuinely matter.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: HOW TO BECOME A CIRCLE FOUNDER
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                THE FIRST STEP
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              How to become a Circle Founder
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              The starting point is simple: <strong className="text-slate-900 font-semibold">“If this Circle does not exist today, am I willing to help create it?”</strong>
            </p>
          </div>

          {/* 6 Dimension Identification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_TO_BECOME_POINTS.map((pt, idx) => {
              const titles = [
                'The City',
                'The Industry or Purpose',
                'The Entrepreneurs',
                'The Reason',
                'The Relationships',
                'The Contribution',
              ]
              const descriptions = [
                'Identify where the geographical ecosystem and local business community will thrive.',
                'Define whether this is a category-exclusive sector or a shared growth milestone.',
                'Envision the first group of non-competing founders who can learn and grow together.',
                'Clarify why this room must exist and what meaningful problems it will solve.',
                'Leverage the personal trust, connections, and goodwill you have already built.',
                'Decide how your active presence and facilitation will spark collective momentum.',
              ]
              const icons = [Building2, Target, Users, Sparkles, Heart, Compass]
              const Icon = icons[idx] || Compass

              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 cursor-default"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="size-12 rounded-2xl bg-blue-50 border border-blue-200/70 text-[#0062D2] flex items-center justify-center shrink-0 shadow-2xs">
                        <Icon className="size-5.5" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-50 border border-slate-200/80 text-slate-600 shadow-2xs">
                        Step 0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {titles[idx]}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2">
                        {descriptions[idx]}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="text-slate-400 font-mono">Dimension 0{idx + 1} of 06</span>
                    <span className="inline-flex items-center gap-1 text-slate-700 font-semibold">
                      Evaluate &rarr;
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Action Callout & Launch CTA */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-white via-[#FAFBFD] to-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="max-w-2xl space-y-2">
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                Ready to begin the conversation with PEERS GLOBAL?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Every Circle that exists today was once only an idea in someone’s mind. Take the first step and let&apos;s build the room together.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/start-a-circle"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:opacity-95 transition-all uppercase tracking-wider group"
              >
                <span>Begin the Conversation</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {FAQ.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-2xs hover:border-blue-200 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-slate-900 hover:text-[#0062D2] transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`size-4.5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0062D2]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-light border-t border-slate-200/70">
                      {item.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: CLOSING MANIFESTO BANNER (Exact Homepage Celestial Mesh Styling)
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
                  START WITH ONE ENTREPRENEUR
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold leading-[1.18] tracking-tight text-white">
                You only have to begin.
              </h2>

              <p className="text-base sm:text-lg font-light text-slate-200 max-w-2xl leading-relaxed">
                You do not have to build the whole Circle today. Find the first entrepreneur. Start the first conversation. Create the first connection. Then let contribution, trust and relationships build what comes next.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/start-a-circle"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Apply to Found a Circle</span>
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
                Start With One. <br />
                Build With Trust. <br />
                <span className="text-[#7DD3FC]">Create A Circle.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

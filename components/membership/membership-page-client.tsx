'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  Users2,
  TrendingUp,
  Clock,
  ArrowRight,
  HelpCircle,
  Plus,
  Minus,
  ChevronRight,
  Handshake,
  Award,
  BookOpen,
  Share2,
  Heart,
  Globe,
  Layers,
  Smartphone,
  HeartHandshake,
  Check,
  Building,
  Target,
  UserCheck,
} from 'lucide-react'

// ─── Eight Reasons Data ───────────────────────────────────────────────────
const EIGHT_REASONS = [
  {
    num: '01',
    title: 'End Entrepreneurial Isolation',
    desc: 'Building a business can be surprisingly lonely. There are decisions you cannot discuss with employees, questions you cannot always take home, and challenges difficult to explain to people who have never carried the responsibility of a business. A Circle gives you a room where other entrepreneurs understand the journey.',
    highlight: 'Someone understands.',
    icon: Users2,
    color: 'border-blue-200 bg-blue-50 text-[#0062D2]',
  },
  {
    num: '02',
    title: 'Grow Through Trust',
    desc: 'Business relationships become more meaningful when built over time: You meet, listen, learn, help, and keep showing up. Trust develops gradually—and with trust, conversations become deeper, introductions warmer, and collaboration natural.',
    highlight: 'Relationships are the foundation on which meaningful business grows.',
    icon: Handshake,
    color: 'border-purple-200 bg-purple-50 text-purple-700',
  },
  {
    num: '03',
    title: 'Learn From Real Experience',
    desc: 'There is knowledge in books and classrooms. And there is knowledge that comes from having built, failed, adapted, recovered and continued. You do not have to learn every lesson the hard way.',
    highlight: 'Another entrepreneur’s experience can save you years.',
    icon: BookOpen,
    color: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  },
  {
    num: '04',
    title: 'Build a Lifelong Support System',
    desc: 'Your business, responsibilities, and ambitions will change. A Circle becomes more than a monthly gathering—it becomes a support system of people who celebrate with you, challenge you, introduce you, listen, and stand beside you.',
    highlight: 'Relationships that grow through different chapters of life and business.',
    icon: HeartHandshake,
    color: 'border-amber-200 bg-amber-50 text-amber-700',
  },
  {
    num: '05',
    title: 'Become a Better Leader',
    desc: 'Leadership is learning to listen, understand, communicate, take responsibility, develop other people, and create environments where others contribute. Inside PEERS GLOBAL, leadership follows contribution.',
    highlight: 'Leadership is not a position above people. It is responsibility for people.',
    icon: Award,
    color: 'border-rose-200 bg-rose-50 text-rose-700',
  },
  {
    num: '06',
    title: 'Create Real Impact',
    desc: 'Success becomes more meaningful when it creates value beyond your business: 1 Action = 1 Life Impacted. One intro opens a door; one conversation changes a decision; one piece of experience prevents an expensive mistake.',
    highlight: 'The objective is not to count activity. It is to recognise contribution.',
    icon: Sparkles,
    color: 'border-cyan-200 bg-cyan-50 text-cyan-700',
  },
  {
    num: '07',
    title: 'Access Resources You Cannot Build Alone',
    desc: 'No entrepreneur can build every capability internally. A strong community expands your available resources because trusted relationships make it easier to find knowledge, specialists, and perspectives.',
    highlight: 'Expanding capabilities through trusted connections.',
    icon: Layers,
    color: 'border-indigo-200 bg-indigo-50 text-indigo-700',
  },
  {
    num: '08',
    title: 'Get National and Global Reach',
    desc: 'A local Circle can be the beginning, but not the boundary. As relationships develop across Circles, cities, regions and countries, an entrepreneur’s world becomes larger without becoming less personal.',
    highlight: 'Local relationships can create global possibilities.',
    icon: Globe,
    color: 'border-teal-200 bg-teal-50 text-teal-700',
  },
]

// ─── Value System (Six Beliefs) ───────────────────────────────────────────
const SIX_BELIEFS = [
  {
    num: '01',
    title: 'People Before Transactions',
    desc: 'A person is never merely a lead, prospect, customer or opportunity. Every entrepreneur deserves to be treated as a person first.',
    icon: Users2,
    color: 'border-blue-200 bg-blue-50 text-[#0062D2]',
  },
  {
    num: '02',
    title: 'Give Before You Ask',
    desc: 'Contribution creates the conditions for trust. The question is not only "What can I get?" It is also "How can I help?"',
    icon: Heart,
    color: 'border-rose-200 bg-rose-50 text-rose-700',
  },
  {
    num: '03',
    title: 'Relationships Before Business',
    desc: 'Business may emerge from a relationship. But the relationship should never be treated merely as a route to business.',
    icon: Handshake,
    color: 'border-purple-200 bg-purple-50 text-purple-700',
  },
  {
    num: '04',
    title: 'Experience Is Meant to Be Shared',
    desc: 'What you have learned can become someone else’s shortcut. Your experience becomes more valuable when it helps another entrepreneur move forward.',
    icon: BookOpen,
    color: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  },
  {
    num: '05',
    title: 'Leadership Is Service',
    desc: 'The strongest leaders are not necessarily the people who speak the most. They are the people who take responsibility when something needs to be done.',
    icon: Award,
    color: 'border-amber-200 bg-amber-50 text-amber-700',
  },
  {
    num: '06',
    title: 'Impact Is Bigger Than Individual Success',
    desc: 'A business creates value. A relationship creates value. A community multiplies that value. When one helps another, impact travels far beyond the original action.',
    icon: Sparkles,
    color: 'border-cyan-200 bg-cyan-50 text-cyan-700',
  },
]

// ─── What We Ask of You ───────────────────────────────────────────────────
const WHAT_WE_ASK = [
  { action: 'Show up', desc: 'Be present at meetings and roundtables.', icon: UserCheck, color: 'border-blue-200 bg-blue-50 text-[#0062D2]' },
  { action: 'Listen', desc: 'Understand before responding.', icon: HelpCircle, color: 'border-purple-200 bg-purple-50 text-purple-700' },
  { action: 'Share', desc: 'Offer your experience and perspective.', icon: Share2, color: 'border-emerald-200 bg-emerald-50 text-emerald-700' },
  { action: 'Give', desc: 'Look for ways to help another Peer.', icon: Heart, color: 'border-rose-200 bg-rose-50 text-rose-700' },
  { action: 'Connect', desc: 'Introduce people when there is genuine value.', icon: Users2, color: 'border-cyan-200 bg-cyan-50 text-cyan-700' },
  { action: 'Respect', desc: 'Protect confidentiality and relationships.', icon: ShieldCheck, color: 'border-amber-200 bg-amber-50 text-amber-700' },
  { action: 'Contribute', desc: 'Take responsibility when you can make something better.', icon: Target, color: 'border-indigo-200 bg-indigo-50 text-indigo-700' },
  { action: 'Recognise', desc: 'Notice and celebrate the people who help others.', icon: Award, color: 'border-teal-200 bg-teal-50 text-teal-700' },
]

export function MembershipPageClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#EFF6FF] selection:text-[#1D4ED8] font-sans antialiased">
      {/* Hidden global SVG gradient definitions for icons across the page */}
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="brandIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
          <linearGradient id="brandStatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#FB7185" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* =========================================================================
          SECTION 1: HERO (WHY JOIN PEERS GLOBAL — MASTER DARK VIDEO BANNER)
          ========================================================================= */}
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
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-white font-semibold">Membership</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Hero Content */}
            <div className="lg:col-span-12 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>WHY JOIN PEERS GLOBAL</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  Because your next breakthrough will not come from{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185]">
                    working harder alone
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Entrepreneurs carry the decisions, responsibility, and uncertainty. PEERS GLOBAL begins with a different belief: You were never meant to build alone.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="/circles/find"
                  size="default"
                  className="font-semibold"
                >
                  Find Your Circle
                </GalaxyButton>

                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="transparent"
                  size="default"
                  icon={<Smartphone className="size-4 text-sky-400" />}
                  className="font-medium"
                >
                  Download Unity App
                </GalaxyButton>
              </div>

              {/* Stat Pill Band */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full pt-6 border-t border-white/15">
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Users2 className="w-3.5 h-3.5 stroke-[url(#brandStatGrad)] text-sky-300" />
                    <span className="text-lg font-bold bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">45+</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">Active Cities</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 stroke-[url(#brandStatGrad)] text-rose-300" />
                    <span className="text-lg font-bold bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">100%</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">Verified Founders</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Sparkles className="w-3.5 h-3.5 stroke-[url(#brandStatGrad)] text-amber-300" />
                    <span className="text-lg font-bold bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">1M+</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">Lives Impact Mission</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EIGHT REASONS ENTREPRENEURS JOIN
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-left max-w-3xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                The 8 Reasons
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-slate-900 leading-snug">
              Eight reasons entrepreneurs join
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Why business founders and executives choose to build enduring relationships within PEERS GLOBAL.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {EIGHT_REASONS.map((r, idx) => {
              const Icon = r.icon
              return (
                <div
                  key={r.num}
                  className="animated-glow-card group !rounded-2xl cursor-pointer"
                  tabIndex={0}
                  role="article"
                >
                  <svg className="animated-border-svg !rounded-2xl" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id={`reasonGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="50%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path
                      className="animated-border-path"
                      style={{ stroke: `url(#reasonGrad-${idx})` }}
                      d="M 1.2 6 Q 1.2 1.2 6 1.2 L 94 1.2 Q 98.8 1.2 98.8 6 L 98.8 94 Q 98.8 98.8 94 98.8 L 6 98.8 Q 1.2 98.8 1.2 94 Z"
                    />
                  </svg>
                  <div className="relative p-6 !rounded-[calc(1rem-1.5px)] bg-white h-full shadow-2xs flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Header: Icon + Number badge */}
                      <div className="flex items-center justify-between">
                        <div className="size-10 rounded-xl flex items-center justify-center bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                          <Icon className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-500 bg-slate-50 border border-slate-200/70 px-2.5 py-1 rounded-md">
                          {r.num}
                        </span>
                      </div>

                      {/* Title & Desc */}
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-[17px] font-bold text-slate-900 leading-snug group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          {r.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-light">
                          {r.desc}
                        </p>
                      </div>
                    </div>

                    {/* Highlight pill / footer */}
                    <div className="pt-4 mt-4 border-t border-slate-100/90">
                      <div className="text-[11px] sm:text-xs font-medium text-slate-700 bg-slate-50/80 rounded-lg p-2.5 border border-slate-100 leading-relaxed flex items-start gap-1.5">
                        <span className="text-[#1D4ED8] font-bold mt-0.5">✦</span>
                        <span>{r.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE LSR GROWTH MODEL
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                The Core Engine
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-slate-900 leading-snug">
              The LSR Growth Model
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              PEERS GLOBAL is built around three connected experiences that feed one another in a continuous cycle of growth:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Learning */}
            <div className="animated-glow-card group !rounded-3xl cursor-pointer" tabIndex={0} role="article">
              <svg className="animated-border-svg !rounded-3xl" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="lsrLearnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="50%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                </defs>
                <path
                  className="animated-border-path"
                  style={{ stroke: 'url(#lsrLearnGrad)' }}
                  d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                />
              </svg>
              <div className="relative p-7 sm:p-8 !rounded-[calc(1.5rem-1.5px)] bg-[#FAFBFD] h-full shadow-2xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="size-12 rounded-2xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center font-bold text-lg shadow-2xs group-hover:scale-105 transition-transform">
                    <BookOpen className="size-6 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    Learning
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    Learn from people who have built, tested, failed, adapted and succeeded. Not theory alone. Real experience.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/80 text-xs font-bold brand-gradient-text flex items-center gap-1.5">
                  <span>✦</span> Experiential Wisdom
                </div>
              </div>
            </div>

            {/* Sharing */}
            <div className="animated-glow-card group !rounded-3xl cursor-pointer" tabIndex={0} role="article">
              <svg className="animated-border-svg !rounded-3xl" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="lsrShareGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="50%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                </defs>
                <path
                  className="animated-border-path"
                  style={{ stroke: 'url(#lsrShareGrad)' }}
                  d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                />
              </svg>
              <div className="relative p-7 sm:p-8 !rounded-[calc(1.5rem-1.5px)] bg-[#FAFBFD] h-full shadow-2xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="size-12 rounded-2xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center font-bold text-lg shadow-2xs group-hover:scale-105 transition-transform">
                    <Share2 className="size-6 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    Sharing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    Share what you know. Share what you have learned. Share the problem you are trying to solve. Share the opportunity you see.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/80 text-xs font-bold brand-gradient-text flex items-center gap-1.5">
                  <span>✦</span> Generous Contribution
                </div>
              </div>
            </div>

            {/* Relationships */}
            <div className="animated-glow-card group !rounded-3xl cursor-pointer" tabIndex={0} role="article">
              <svg className="animated-border-svg !rounded-3xl" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="lsrRelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="50%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                </defs>
                <path
                  className="animated-border-path"
                  style={{ stroke: 'url(#lsrRelGrad)' }}
                  d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                />
              </svg>
              <div className="relative p-7 sm:p-8 !rounded-[calc(1.5rem-1.5px)] bg-[#FAFBFD] h-full shadow-2xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="size-12 rounded-2xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center font-bold text-lg shadow-2xs group-hover:scale-105 transition-transform">
                    <HeartHandshake className="size-6 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    Relationships
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    Because learning and sharing become more valuable when they happen between people who genuinely trust one another.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/80 text-xs font-bold brand-gradient-text flex items-center gap-1.5">
                  <span>✦</span> Enduring Trust
                </div>
              </div>
            </div>
          </div>

          {/* LSR Cycle Banner */}
          <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 text-center space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider brand-gradient-text">
              Learning → Sharing → Relationships → Learning
            </div>
            <p className="text-sm font-semibold text-slate-800">
              Relationships create better conversations. Better conversations create better learning. Better learning creates better contribution.
            </p>
            <p className="text-xs text-slate-500 font-medium">
              LSR is not a programme. It is a way of growing.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE VALUE SYSTEM (SIX BELIEFS)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-left max-w-3xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                The Value System
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-slate-900 leading-snug">
              Six beliefs that guide this community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {SIX_BELIEFS.map((b, idx) => {
              const Icon = b.icon
              return (
                <div
                  key={b.num}
                  className="animated-glow-card group !rounded-2xl cursor-pointer"
                  tabIndex={0}
                  role="article"
                >
                  <svg className="animated-border-svg !rounded-2xl" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id={`beliefGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="50%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path
                      className="animated-border-path"
                      style={{ stroke: `url(#beliefGrad-${idx})` }}
                      d="M 1.2 6 Q 1.2 1.2 6 1.2 L 94 1.2 Q 98.8 1.2 98.8 6 L 98.8 94 Q 98.8 98.8 94 98.8 L 6 98.8 Q 1.2 98.8 1.2 94 Z"
                    />
                  </svg>
                  <div className="relative p-6 sm:p-7 !rounded-[calc(1rem-1.5px)] bg-white h-full shadow-2xs flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="size-10 rounded-xl flex items-center justify-center bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 shadow-xs group-hover:scale-105 transition-transform">
                          <Icon className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md">
                          {b.num}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-base sm:text-[17px] font-bold text-slate-900 leading-snug group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          {b.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-light">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: MEMBERSHIP IS INDIVIDUAL. NEVER CORPORATE.
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative p-8 sm:p-12 lg:p-14 rounded-3xl bg-[linear-gradient(90deg,rgb(6,17,44)_0%,rgb(19,7,31)_50%,rgb(38,5,19)_100%)] text-white overflow-hidden shadow-2xl border border-slate-800/90">
            {/* Ambient background glows */}
            <div className="absolute -right-20 -top-20 size-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 size-96 rounded-full bg-rose-600/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading, intro, and quote */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                    Individual Relationship
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  Membership is individual. <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185]">
                    Never corporate.
                  </span>
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  PEERS GLOBAL is built around the entrepreneur as an individual. A business may have many employees. A company may have many partners. But the relationship with the community belongs to the individual Peer.
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <p className="text-xs sm:text-[13px] text-sky-200 font-medium italic leading-relaxed">
                    “It is not simply a corporate subscription. It is an individual relationship with a community.”
                  </p>
                </div>
              </div>

              {/* Right Column: 4 Pillars of Individual Relationship */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Personal Recognition',
                    desc: 'Your Circle knows you personally, not just your company label.',
                    icon: Users2,
                  },
                  {
                    title: 'Lifelong Growth',
                    desc: 'Your relationships develop with you across chapters of life and business.',
                    icon: Sparkles,
                  },
                  {
                    title: 'Direct Contribution',
                    desc: 'Your contribution and impact are recognised through you directly.',
                    icon: Award,
                  },
                  {
                    title: 'Personal Ownership',
                    desc: 'Your journey, learnings, and standing belong to you forever.',
                    icon: ShieldCheck,
                  },
                ].map((item, idx) => {
                  const ItemIcon = item.icon
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 space-y-2.5 backdrop-blur-xs group"
                    >
                      <div className="size-9 rounded-xl flex items-center justify-center bg-white/10 border border-white/15 group-hover:scale-105 transition-transform duration-300">
                        <ItemIcon className="size-4.5 stroke-[url(#brandStatGrad)] text-sky-300" />
                      </div>
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHAT WE ASK OF YOU & WHAT YOU MAY DISCOVER HERE
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Part A: What We Ask of You */}
          <div className="space-y-6">
            <div className="text-left max-w-3xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  Community Code
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight leading-snug">
                What we ask of you
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                A meaningful community cannot be built by passive participation. We ask you to:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {WHAT_WE_ASK.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.action}
                    className="group relative p-[1.5px] rounded-2xl bg-slate-200/90 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:via-[#6366F1] hover:to-[#E11D48] shadow-2xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    <div className="relative w-full h-full bg-white rounded-[14.5px] p-5 flex flex-col justify-between space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-100 text-slate-500 border border-slate-200/60">
                          0{idx + 1}
                        </span>
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 shadow-2xs transition-transform duration-300 group-hover:scale-105">
                          <Icon className="w-4 h-4 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all leading-tight">
                          {item.action}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed font-light mt-1.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="p-4 sm:p-4.5 rounded-2xl bg-[linear-gradient(90deg,rgb(6,17,44)_0%,rgb(19,7,31)_50%,rgb(38,5,19)_100%)] text-white border border-white/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/20 shrink-0">
                  <ShieldCheck className="w-4.5 h-4.5 stroke-[url(#brandStatGrad)]" />
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-white font-semibold">Treat every Peer with respect.</strong> Because the community you experience is shaped by the community you help create.
                </p>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent shrink-0 font-bold">
                Core Standard
              </span>
            </div>
          </div>

          {/* Part B: What You May Discover Here */}
          <div className="pt-10 border-t border-slate-200/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              
              {/* Left: Transformation Cards */}
              <div className="lg:col-span-7 space-y-5 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                      The Transformation
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                    What you may discover here
                  </h3>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      come: 'You may come looking for business.',
                      discover: 'You may discover relationships.',
                      icon: Handshake,
                    },
                    {
                      come: 'You may come looking for introductions.',
                      discover: 'You may discover people you can trust.',
                      icon: Users2,
                    },
                    {
                      come: 'You may come looking for answers.',
                      discover: 'You may discover better questions.',
                      icon: BookOpen,
                    },
                    {
                      come: 'You may come looking for growth.',
                      discover: 'You may discover that helping someone else grow changes your own journey.',
                      icon: Sparkles,
                    },
                  ].map((t, idx) => {
                    const TIcon = t.icon
                    return (
                      <div
                        key={idx}
                        className="p-4 sm:p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex items-start gap-3.5 group"
                      >
                        <div className="size-9 rounded-xl flex items-center justify-center bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                          <TIcon className="size-4.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                        </div>
                        <div className="space-y-1 text-xs sm:text-[13px] leading-relaxed">
                          <p className="text-slate-500 font-light">
                            {t.come}
                          </p>
                          <p className="text-slate-900 font-bold group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                            {t.discover}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100 flex items-center gap-2 shadow-2xs">
                  <span className="brand-gradient-text font-bold text-sm">✦</span>
                  <p className="text-xs sm:text-[13px] font-semibold text-slate-800">
                    That is the difference between joining a network and becoming part of a community.
                  </p>
                </div>
              </div>

              {/* Right: Your Journey Begins with a Conversation */}
              <div className="lg:col-span-5 p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-white to-slate-50/90 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 brand-gradient-text text-[11px] font-bold tracking-wider uppercase">
                    <span>✦ Get Started</span>
                  </div>

                  <h4 className="text-2xl sm:text-[26px] font-bold text-slate-900 tracking-tight leading-snug">
                    Your journey begins with a conversation
                  </h4>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    You do not need to have everything figured out before you begin. You can start by exploring: understand the idea, discover the Circles, meet the people, ask questions, and see whether the culture feels right for you.
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-3 relative z-10">
                  <GalaxyButton
                    href="/circles/find"
                    size="default"
                    className="w-full uppercase tracking-wider font-bold"
                  >
                    Explore Circles &amp; Chapters
                  </GalaxyButton>

                  <GalaxyButton
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="transparent-light"
                    size="default"
                    icon={<Smartphone className="size-4 text-[#1D4ED8]" />}
                    className="w-full uppercase tracking-wider font-bold"
                  >
                    Start with Unity App
                  </GalaxyButton>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CLOSING MANIFESTO BANNER
          ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-[#030712] py-16 sm:py-20 lg:py-24 text-white border-t border-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.98)_0%,rgba(10,4,20,0.96)_50%,rgba(20,2,10,0.98)_100%)] pointer-events-none" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(29,78,216,0.18),transparent_50%),radial-gradient(circle_at_85%_50%,rgba(225,29,72,0.14),transparent_50%)]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                  You Were Never Meant To Build Alone
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold leading-[1.18] tracking-tight text-white">
                What could I help make possible for someone else?
              </h2>

              <p className="text-sm sm:text-base font-light text-slate-300 max-w-xl leading-relaxed">
                Because that is where membership begins to become something more: A relationship. A Circle. A community. A contribution. A possibility.
              </p>

              <div className="text-xs text-sky-300 tracking-wider font-semibold">
                Welcome to PEERS GLOBAL.
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <GalaxyButton
                  href="/circles/find"
                  size="default"
                  className="uppercase tracking-wider font-bold"
                >
                  Find Your Circle
                </GalaxyButton>

                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  variant="transparent"
                  size="default"
                  className="uppercase tracking-wider font-bold"
                >
                  Download Unity App
                </GalaxyButton>
              </div>
            </div>

            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-sm"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Peer is <br />
                What You <br />
                <span className="text-[#7DD3FC]">Become</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

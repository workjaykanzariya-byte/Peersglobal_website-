'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Smartphone,
  Users,
  MapPin,
  Globe2,
  Building2,
  Sparkles,
  Heart,
  BarChart3,
  ShieldCheck,
  Scale,
  Lock,
  Leaf,
  ChevronLeft,
  Briefcase,
  BookOpen,
  GraduationCap,
  TrendingUp,
  Award,
  Share2,
  Layers,
  HelpCircle,
  CheckCircle2,
  FileText,
  UserCheck,
  Target,
  Clock,
  Sparkle,
  Plus,
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

// ─── Value System (6 Beliefs) ─────────────────────────────────────────────
const VALUE_SYSTEM = [
  {
    icon: Heart,
    color: '#EF4444',
    bg: '#FEF2F2',
    border: '#FECACA',
    title: 'We give before we ask.',
    desc: 'Contribution comes first, always, without calculating the return.',
  },
  {
    icon: BarChart3,
    color: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    title: 'We measure what we give.',
    desc: 'A Peer is judged by the entrepreneurs they helped, never by revenue, size or title.',
  },
  {
    icon: ShieldCheck,
    color: '#10B981',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    title: 'We tell the truth to each other.',
    desc: 'Including when it is uncomfortable. A Peer who only agrees with you is of no use to your business.',
  },
  {
    icon: Users,
    color: '#6366F1',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    title: 'We treat every entrepreneur as an equal.',
    desc: 'No gurus, no hierarchy of businesses, nobody above anyone else in the room.',
  },
  {
    icon: Lock,
    color: '#0284C7',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    title: 'We protect what is shared with us.',
    desc: 'What is said in a Circle stays in the Circle.',
  },
  {
    icon: Leaf,
    color: '#059669',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    title: 'We build for the long term.',
    desc: 'Relationships here are measured in decades. Peers are Partners in Business and Friends in Life.',
  },
]

// ─── Eight Reasons ────────────────────────────────────────────────────────
const EIGHT_REASONS = [
  {
    num: '01',
    icon: Users,
    color: '#F97316',
    bg: '#FFF7ED',
    border: '#FFEDD5',
    title: 'End entrepreneurial isolation',
    desc: 'Join a tribe of committed entrepreneurs who understand your journey. You will never feel alone in business again.',
    detail:
      'The decision made at eleven at night with nobody to call. The mistake one honest conversation would have prevented. The win nobody around you understood the cost of.',
  },
  {
    num: '02',
    icon: TrendingUp,
    color: '#10B981',
    bg: '#ECFDF5',
    border: '#D1FAE5',
    title: 'Grow your business through trust',
    desc: 'Category exclusivity in each Circle means no competition inside. Warm referrals and real business deals happen naturally.',
    detail:
      'Warm referrals, trusted introductions and real business deals happen naturally, because everyone in the room can afford to help you.',
  },
  {
    num: '03',
    icon: BookOpen,
    color: '#2563EB',
    bg: '#EFF6FF',
    border: '#DBEAFE',
    title: 'Learn from real experience',
    desc: 'Monthly masterclasses, peer-to-peer learning and structured interactions with industry experts who share what actually works — not theory.',
    detail: 'One expert, one subject, twenty minutes of applicable insight, in every meeting.',
  },
  {
    num: '04',
    icon: Heart,
    color: '#8B5CF6',
    bg: '#F5F3FF',
    border: '#EDE9FE',
    title: 'Build a lifelong support system',
    desc: 'Peers are Partners in Business and Friends in Life. Two Family Meetups a year and a Confidential Forum where you can speak freely.',
    detail:
      'Two Family Meetups a year. A Confidential Forum where you can say the thing you cannot say anywhere else. Relationships measured in decades.',
  },
  {
    num: '05',
    icon: Award,
    color: '#F43F5E',
    bg: '#FFF1F2',
    border: '#FFE4E6',
    title: 'Become a better leader',
    desc: 'Leadership development is embedded in everything — from mentoring to committee roles. You grow as a person, not just a business owner.',
    detail:
      'Powerhouse, Circle Director, Circle Founder, Industry Director, Executive Director. A clear path from member to ecosystem owner.',
  },
  {
    num: '06',
    icon: Sparkles,
    color: '#F59E0B',
    bg: '#FFFBEB',
    border: '#FEF3C7',
    title: 'Create real impact',
    desc: 'Through the Life Impact System, every action you take — every referral, connection and guidance — counts as one life impacted.',
    detail: 'Tracked in real time on the Unity App. Recognised publicly. Part of 1M+ entrepreneurs to impact by 2030.',
  },
  {
    num: '07',
    icon: Layers,
    color: '#0D9488',
    bg: '#F0FDFA',
    border: '#CCFBF1',
    title: 'Access resources you cannot build alone',
    desc: 'Partners, tools, vendors, media visibility, branding through VyapaarJagat.com, mentorship and capital access — all through one ecosystem.',
    detail: 'Partners, tools, vendors, media visibility, branding, mentorship and capital access all unified.',
  },
  {
    num: '08',
    icon: Globe2,
    color: '#E11D48',
    bg: '#FFF1F2',
    border: '#FFE4E6',
    title: 'Get national and global reach',
    desc: 'Cross-Circle and cross-city collaborations connect you with entrepreneurs across industries and geographies through the Unity App.',
    detail: 'Designed in Bharat. Built for the World.',
  },
]

// ─── How to join steps ────────────────────────────────────────────────────
const JOIN_STEPS = [
  'Download the Unity App',
  'Explore the community',
  'Subscribe',
  'Attend a Circle meeting',
  'Request your Circle',
  'Take your seat',
]

export function WhyJoinClient() {
  const [activeReasonIndex, setActiveReasonIndex] = useState(0)

  const handlePrevReason = () => {
    setActiveReasonIndex((prev) => (prev === 0 ? EIGHT_REASONS.length - 1 : prev - 1))
  }

  const handleNextReason = () => {
    setActiveReasonIndex((prev) => (prev === EIGHT_REASONS.length - 1 ? 0 : prev + 1))
  }

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
            <span className="text-[#0062D2] font-semibold">Why Join</span>
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
              <Image
                src="/images/membership-hero-peers.jpg"
                alt="Peers Global Entrepreneurs Collaborating in Office"
                fill
                priority
                className="object-cover object-center scale-105"
              />
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

              {/* Cursive Script Overlay */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 z-20 text-right drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Better People
                </p>
                <p className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Bigger Opportunities.
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
                    MORE THAN A MEMBERSHIP
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  Why You Must Join <br className="hidden sm:inline" />
                  Peers Global
                </h1>

                <p className="text-xl sm:text-2xl text-slate-800 font-medium leading-snug mb-3 font-serif italic">
                  Because the right people around you change everything.
                </p>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8">
                  Membership is what you buy. <span className="font-semibold text-slate-900">Peer is what you become.</span>
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
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center">
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

            {/* 5th Highlight Pill */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 rounded-2xl bg-[#0B1528] text-white p-4 sm:p-5 flex items-center gap-3 shadow-md">
              <div className="size-10 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="size-5 text-sky-400" />
              </div>
              <div className="text-xs font-semibold text-slate-200 leading-snug">
                A Global Community of Entrepreneurs Built on Trust
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 2: WHAT YOU ARE JOINING — Two-Part Split
          ================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Column: Narrative */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  WHAT YOU ARE JOINING
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-6">
                A global community of entrepreneurs
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                You are joining a community of entrepreneurs and business leaders across cities, industries and countries.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                Your subscription gives you the platform that community runs on — the{' '}
                <strong className="text-slate-900 font-semibold">Unity App</strong>, the Peer directory, the ability to connect with any entrepreneur in the network, the recognition system that records what you give, and the Marketplace where it is rewarded.
              </p>

              <div className="rounded-xl bg-slate-50 border-l-4 border-[#0062D2] p-4 sm:p-5 mb-5">
                <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                  Then, when you are ready, you join a <strong className="text-[#0062D2]">Circle</strong>.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  A specific room, with specific entrepreneurs, meeting monthly, where your business category is held by you alone. Circles are a separate step with their own approval and their own fee, and many Peers spend months in the community before requesting one.
                </p>
              </div>

              <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#0062D2]">
                Two commitments, taken in your own time.
              </p>
            </div>

            {/* Right Column: Two-Part Split Card (Light Subscription + Dark Circle) */}
            <div className="lg:col-span-6 relative flex flex-col sm:flex-row items-stretch gap-4 sm:gap-3">

              {/* Card 1: Subscription / Platform (Light Treatment) */}
              <div className="flex-1 rounded-3xl bg-gradient-to-br from-blue-50/70 via-white to-slate-50/90 border border-blue-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden">
                <div>
                  <div className="size-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-5 shadow-md shadow-blue-500/20">
                    <Smartphone className="size-6" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    Unity Platform
                  </h3>
                  <p className="text-xs text-slate-500 mb-5">
                    Your global subscription foundation
                  </p>

                  {/* Feature Pills */}
                  <div className="space-y-2.5">
                    {[
                      { icon: Smartphone, label: 'Unity App' },
                      { icon: Users, label: 'Peer Directory' },
                      { icon: Award, label: 'Recognition System' },
                      { icon: Briefcase, label: 'Marketplace' },
                    ].map((item, idx) => {
                      const ItemIcon = item.icon
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-800 shadow-2xs"
                        >
                          <ItemIcon className="size-4 text-[#0062D2] shrink-0" />
                          <span>{item.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80">
                  <p className="text-xs font-medium text-slate-500 italic">
                    The platform to connect, contribute and grow.
                  </p>
                </div>
              </div>

              {/* Plus Badge in between (Desktop / Mobile) */}
              <div className="sm:self-center flex items-center justify-center -my-2 sm:my-0 sm:-mx-4 z-20">
                <div className="size-10 rounded-full bg-[#0062D2] text-white flex items-center justify-center font-bold text-lg shadow-lg border-2 border-white">
                  <Plus className="size-5" />
                </div>
              </div>

              {/* Card 2: Circle (Deep Navy Treatment) */}
              <div className="flex-1 rounded-3xl bg-[#081226] text-white border border-slate-800 p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 size-48 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

                <div>
                  <div className="size-12 rounded-2xl bg-blue-500/20 border border-blue-400/30 text-sky-400 flex items-center justify-center mb-5">
                    <Users className="size-6" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                    Circles
                  </h3>
                  <p className="text-xs text-sky-300/80 mb-5">
                    Category-exclusive Inner Board
                  </p>

                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>A specific governed room with 20–30 peers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>Monthly structured four-part agenda</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>Zero internal competition (Category exclusivity)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>Separate application & Circle Experience Fee</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <p className="text-xs font-medium text-sky-300 italic">
                    A specific room. Real relationships. Real collaboration. When you are ready.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 3: THE VALUE SYSTEM — 6 Core Beliefs
          ================================================================= */}
      <section className="py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE VALUE SYSTEM
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-4">
              Beliefs that guide a stronger community
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Before the app, the directory and the Circles, there is a set of beliefs every Peer here shares.
            </p>
          </div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {VALUE_SYSTEM.map((val, idx) => {
              const Icon = val.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div
                      className="size-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: val.bg, border: `1px solid ${val.border}` }}
                    >
                      <Icon className="size-5" style={{ color: val.color }} />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 leading-snug">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Center CTA */}
          <div className="text-center">
            <Link
              href="/culture-and-code"
              className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-8 py-3.5 text-sm font-bold shadow-md shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Read the Peers Code</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 4: EIGHT REASONS — Carousel / Grid
          ================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header with Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  EIGHT REASONS
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
                A membership that changes how you work, grow and live
              </h2>
            </div>

            {/* Left / Right Carousel arrows */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handlePrevReason}
                className="size-11 rounded-full border border-slate-300 hover:border-[#0062D2] hover:bg-blue-50 text-slate-600 hover:text-[#0062D2] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Previous reason"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={handleNextReason}
                className="size-11 rounded-full border border-slate-300 hover:border-[#0062D2] hover:bg-blue-50 text-slate-600 hover:text-[#0062D2] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Next reason"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          {/* 8 Cards Grid (4 columns x 2 rows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EIGHT_REASONS.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                >
                  <div>
                    {/* Top Row: Number badge + Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg border"
                        style={{
                          backgroundColor: item.bg,
                          borderColor: item.border,
                          color: item.color,
                        }}
                      >
                        {item.num}
                      </span>
                      <div
                        className="size-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: item.bg, border: `1px solid ${item.border}` }}
                      >
                        <Icon className="size-5" style={{ color: item.color }} />
                      </div>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      {item.desc}
                    </p>
                  </div>

                  <p className="text-[11px] text-slate-400 pt-3 border-t border-slate-100 italic">
                    {item.detail}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 5: THE LSR GROWTH MODEL — Split Card Layout
          ================================================================= */}
      <section className="py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Column: Dark Card (7 Cols) */}
            <div className="lg:col-span-7 rounded-3xl bg-[#091325] text-white border border-slate-800 p-8 sm:p-12 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 size-72 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-2 text-sky-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  <Sparkles className="size-4 text-sky-400" />
                  <span>THE FOUNDATIONAL FRAMEWORK</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight mb-4">
                  The LSR Growth Model
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-10 max-w-xl">
                  Peers Global is a leadership organisation, not a networking group, built on three things every business runs on. One ecosystem that brings them together.
                </p>

                {/* 3 Pillars (L, S, R) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">

                  {/* L - Learning */}
                  <div className="flex flex-col items-start p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="size-12 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center mb-3 shadow-md shadow-blue-500/30">
                      L
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">Learning</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Masterclasses, playbooks, mentorship and knowledge from people who built it.
                    </p>
                  </div>

                  {/* S - Sales */}
                  <div className="flex flex-col items-start p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="size-12 rounded-full bg-emerald-600 text-white font-bold text-lg flex items-center justify-center mb-3 shadow-md shadow-emerald-500/30">
                      S
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">Sales</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Referrals, introductions, customer connections and market access.
                    </p>
                  </div>

                  {/* R - Resources */}
                  <div className="flex flex-col items-start p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="size-12 rounded-full bg-amber-500 text-white font-bold text-lg flex items-center justify-center mb-3 shadow-md shadow-amber-500/30">
                      R
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">Resources</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Talent, capital, partners, suppliers, technology and expertise.
                    </p>
                  </div>

                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-xs sm:text-sm text-slate-400 italic">
                  Held together by relationships, and by a mission to enhance the lives of one million entrepreneurs.
                </p>
              </div>
            </div>

            {/* Right Column: Visual Sunrise Skyline (5 Cols) */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden relative min-h-[420px] shadow-lg border border-slate-200">
              <Image
                src="/images/lsr-city-sunrise.jpg"
                alt="Entrepreneur viewing city skyline sunrise"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Script Overlay */}
              <div className="absolute top-8 right-8 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Stronger Entrepreneurs
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 leading-tight mt-0.5 font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  A Brighter Tomorrow.
                </p>
              </div>

              {/* Bottom Metrics */}
              <div className="absolute bottom-6 inset-x-6 z-10 grid grid-cols-3 gap-2 text-center text-white bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                <div>
                  <div className="font-serif text-xl sm:text-2xl font-bold text-white">1M</div>
                  <div className="text-[10px] sm:text-xs text-slate-300 font-medium">Lives to Impact</div>
                </div>
                <div className="border-x border-white/15">
                  <div className="font-serif text-xl sm:text-2xl font-bold text-amber-300">∞</div >
                  <div className="text-[10px] sm:text-xs text-slate-300 font-medium">Opportunities</div>
                </div>
                <div>
                  <div className="font-serif text-xl sm:text-2xl font-bold text-sky-400">Global</div>
                  <div className="text-[10px] sm:text-xs text-slate-300 font-medium">Community</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 6: 3-COLUMN REASSURANCE & ONBOARDING STRIP
          ================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

            {/* Column 1: Membership is individual, never corporate */}
            <div className="rounded-3xl bg-[#FAFBFD] border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="size-12 rounded-2xl bg-blue-50 border border-blue-100 text-[#0062D2] flex items-center justify-center mb-6">
                  <UserCheck className="size-6" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 leading-tight">
                  Membership is individual, never corporate
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Your membership belongs to you, not to your company. It follows the person, not the letterhead.
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Peers Global exists to grow entrepreneurs, not to list companies. The relationships you build are yours. The trust you earn is yours. Contribution is recorded against you personally, and the standing you build is your own.
                </p>

                <p className="text-sm text-slate-900 font-semibold leading-relaxed">
                  A business does not learn, contribute or lead. A person does.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <p className="text-xs text-slate-500 italic">
                  This is not a membership you renew. It is a relationship you invest in.
                </p>
              </div>
            </div>

            {/* Column 2: What we ask of you */}
            <div className="rounded-3xl bg-[#FAFBFD] border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="size-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <ShieldCheck className="size-6" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 leading-tight">
                  What we ask of you
                </h3>

                <ul className="space-y-3.5 mb-6 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">You give first.</strong> Contribution before any ask.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">You show up.</strong> Consistently, on the rhythm your Circle sets.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">You tell the truth.</strong> Including when it is uncomfortable.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">You protect the room.</strong> What is shared in a Circle stays there.
                    </span>
                  </li>
                </ul>

                <p className="text-xs text-slate-500 italic mb-6">
                  Entrepreneurs who cannot commit to these four things do not last here.
                </p>
              </div>

              <div>
                <Link
                  href="/who-belongs-here"
                  className="w-full rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#0062D2] px-6 py-3 text-sm font-bold transition-all text-center inline-flex items-center justify-center gap-2"
                >
                  <span>See Who Belongs Here</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Column 3: How to join */}
            <div className="rounded-3xl bg-[#FAFBFD] border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="size-12 rounded-2xl bg-blue-50 border border-blue-100 text-[#0062D2] flex items-center justify-center mb-6">
                  <Target className="size-6" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 leading-tight">
                  How to join
                </h3>

                <div className="space-y-3 mb-6">
                  {JOIN_STEPS.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="size-7 rounded-full bg-blue-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-sm font-medium text-slate-800">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-6 py-3.5 text-sm font-bold shadow-md shadow-blue-600/20 transition-all text-center inline-flex items-center justify-center gap-2"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 7: CLOSING HERO BANNER — Mountain Sunrise Panorama
          ================================================================= */}
      <section className="relative overflow-hidden bg-[#070F1E] text-white py-24 sm:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/membership-mountain-closing.jpg"
            alt="Entrepreneur on mountain summit"
            fill
            className="object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070F1E] via-[#070F1E]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-transparent to-[#070F1E]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Copy */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-3 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="h-0.5 w-6 bg-sky-400" />
                <span>YOUR NEXT CHAPTER</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight mb-4">
                Your next breakthrough will not come from working harder alone.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed mb-8">
                Build Your Business. Build Your Relationships. Build Your Circle.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-4 text-sm font-bold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/membership/criteria"
                  className="rounded-full border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-sm font-semibold transition-all inline-flex items-center gap-2"
                >
                  <UserCheck className="size-4" />
                  <span>Apply for Membership</span>
                </Link>
              </div>
            </div>

            {/* Right Cursive Script Callout */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="text-left lg:text-right select-none pointer-events-none" style={{ fontFamily: 'var(--font-script)' }}>
                <p className="text-3xl sm:text-4xl text-white/50 leading-tight">People,</p>
                <p className="text-3xl sm:text-4xl text-white/70 leading-tight">Partnerships,</p>
                <p className="text-3xl sm:text-4xl text-white/90 leading-tight">Possibilities.</p>
                <p className="text-4xl sm:text-5xl text-amber-300 font-medium leading-tight mt-1">
                  A Brighter Tomorrow.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

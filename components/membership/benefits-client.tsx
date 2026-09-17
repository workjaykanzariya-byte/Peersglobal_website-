'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Smartphone,
  Users,
  Calendar,
  Layers,
  Award,
  BookOpen,
  GraduationCap,
  Megaphone,
  Heart,
  TrendingUp,
  Globe,
  Radio,
  FileText,
  Share2,
  CheckCircle2,
  Quote,
  Sparkles,
  Download,
  Infinity as InfinityIcon,
  RefreshCw,
  Trophy,
  Compass,
  Building2,
  Target,
  UserCheck,
  ShieldCheck,
  Star,
} from 'lucide-react'

// ─── Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Calendar,
    value: '12',
    label: 'Monthly Meetings',
  },
  {
    icon: Layers,
    value: '60+',
    label: 'Roundtables',
  },
  {
    icon: Users,
    value: '200+',
    label: 'Entrepreneurs',
  },
  {
    icon: Globe,
    value: 'Global',
    label: 'Community',
  },
]

// ─── Annual Circle Calendar (9 events) ────────────────────────────────────
const CALENDAR_EVENTS = [
  {
    icon: Calendar,
    metric: '12',
    title: 'Monthly Circle Meetings',
    desc: 'Your consistent growth rhythm',
  },
  {
    icon: Users,
    metric: '2–4',
    title: 'Mega Networking Events',
    desc: 'Expand beyond your Circle',
  },
  {
    icon: Compass,
    metric: '2',
    title: 'Leadership Retreats',
    desc: 'Sharpen vision and thinking',
  },
  {
    icon: Heart,
    metric: '2',
    title: 'Family Meetups',
    desc: 'Friends in Life, not just Partners',
  },
  {
    icon: Trophy,
    metric: '1',
    title: 'Annual Awards Ceremony',
    desc: 'Celebrate the community',
  },
  {
    icon: RefreshCw,
    metric: '2',
    title: 'Leadership Transition Events',
    desc: 'Renewal and continuity',
  },
  {
    icon: BookOpen,
    metric: '1',
    title: 'Industry Magazine Edition',
    desc: 'Your industry, in print',
  },
  {
    icon: InfinityIcon,
    metric: 'Unlimited',
    title: 'Collaborations',
    desc: 'Through the Unity App',
  },
  {
    icon: Megaphone,
    metric: 'Year-Round',
    title: 'Media & PR',
    desc: 'Continuous visibility',
  },
]

// ─── At A Glance 12 Items ─────────────────────────────────────────────────
const AT_A_GLANCE_ITEMS = [
  { num: '01', text: 'Twelve monthly business growth meetings' },
  { num: '02', text: '60+ structured collaboration roundtables' },
  { num: '03', text: '150+ new introductions a year' },
  { num: '04', text: 'Expert learning sessions and masterclasses' },
  { num: '05', text: 'VyapaarJagat.com and media opportunities' },
  { num: '06', text: 'Family meetups and leadership retreats' },
  { num: '07', text: 'Confidential forum and MindMeld meetups' },
  { num: '08', text: 'Join multiple Circles across cities and countries' },
  { num: '09', text: 'Unity App and digital ecosystem' },
  { num: '10', text: 'Leadership roles and recognition' },
  { num: '11', text: 'Year-round community support' },
  { num: '12', text: 'Be part of 1M+ entrepreneurs to impact by 2030' },
]

export function BenefitsClient() {
  const [downloadSuccess, setDownloadSuccess] = useState(false)

  const handleDownload = () => {
    setDownloadSuccess(true)
    setTimeout(() => setDownloadSuccess(false), 3500)
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
            <span className="text-[#0062D2] font-semibold">What You Get</span>
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
                alt="Peers Global Executive Board Collaboration"
                fill
                priority
                className="object-cover object-center scale-105"
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
                <p className="text-xl sm:text-2xl text-white/90 leading-tight font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  A Stronger Entrepreneurial Tomorrow.
                </p>
              </div>
            </div>

            {/* Left Content (Z-10) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-6 bg-[#0062D2]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                    MEMBERSHIP BENEFITS
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  What You Get
                </h1>

                <p className="text-xl sm:text-2xl text-slate-800 font-medium leading-snug mb-3 font-serif italic">
                  Everything included in your annual membership.
                </p>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8">
                  A Circle of the right people, and <span className="font-semibold text-slate-900">ten things built around it.</span>
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2"
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
          SECTION 2: THE CIRCLE COMES FIRST — Circular Table + Quote
          ================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Column: Narrative */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-0.5 w-6 bg-[#0062D2]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  THE CIRCLE COMES FIRST
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-6">
                You get a seat. <br />
                Everything else builds on it.
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                Before any of the ten inclusions below, you get a seat. A specific room, with specific entrepreneurs, meeting on a fixed rhythm, where your business category is held by you alone. Everything on this page exists to support what happens in that room.
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

            {/* Right Column: Circular Table Photo + Floating Quote Card */}
            <div className="lg:col-span-6 relative flex flex-col sm:flex-row items-center gap-6">

              {/* Circular Table Photo */}
              <div className="relative size-64 sm:size-72 rounded-full overflow-hidden border-4 border-blue-100 shadow-xl shrink-0">
                <Image
                  src="/images/circle-roundtable-topdown.jpg"
                  alt="Peers seated around circular roundtable in boardroom"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Quote Card */}
              <div className="flex-1 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-blue-50/50 border border-slate-200/90 p-6 sm:p-7 shadow-sm">
                <div className="size-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm">
                  <Quote className="size-5" />
                </div>

                <blockquote className="font-serif text-xl sm:text-2xl text-slate-900 leading-snug mb-4 font-normal">
                  “The right room <br />
                  <span className="text-[#0062D2] font-medium italic">changes everything.”</span>
                </blockquote>

                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  PEERS GLOBAL —
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 3: YOUR ANNUAL CIRCLE CALENDAR
          ================================================================= */}
      <section className="py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-0.5 w-6 bg-[#0062D2]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                YOUR ANNUAL CIRCLE CALENDAR
              </span>
              <span className="h-0.5 w-6 bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-4">
              A year of connection, learning and growth.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A governed cadence of executive meetings, deep roundtables, leadership summits and community traditions.
            </p>
          </div>

          {/* 9 Calendar Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3.5">
            {CALENDAR_EVENTS.map((event, idx) => {
              const Icon = event.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 p-4 flex flex-col items-center text-center shadow-2xs hover:shadow-md transition-all group hover:-translate-y-1"
                >
                  <div className="size-11 rounded-xl bg-blue-50 border border-blue-100 text-[#0062D2] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="size-5" />
                  </div>
                  <div className="font-serif text-lg sm:text-xl font-bold text-slate-900 leading-tight mb-1">
                    {event.metric}
                  </div>
                  <div className="text-xs font-bold text-slate-800 leading-snug mb-1">
                    {event.title}
                  </div>
                  <div className="text-[10px] text-slate-500 leading-tight">
                    {event.desc}
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 4: CORE INCLUSIONS GRID (4 Top Cards + 3 Bottom Cards)
          ================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Row: 4 Columns (Business Growth, Learning, Visibility, Community) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

            {/* 1. Business Growth (Green) */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow">
              <div>
                <div className="size-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                  <TrendingUp className="size-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
                  Business growth
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>12 Business Growth Events</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>60+ Collaboration Roundtables</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Trusted referrals & partnerships</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>150+ new introductions a year</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Cross-Circle opportunities</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/circle-meeting-experience"
                  className="text-xs font-bold text-[#0062D2] hover:text-[#0052B4] inline-flex items-center gap-1.5"
                >
                  <span>See Business Growth</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. Learning (Blue) */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow">
              <div>
                <div className="size-12 rounded-2xl bg-blue-50 border border-blue-100 text-[#0062D2] flex items-center justify-center mb-5">
                  <GraduationCap className="size-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
                  Learning
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span>Expert Learning Sessions</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span>Monthly masterclasses</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span>Peer-to-peer learning</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span>Monthly Circle Mini-Conferences</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span>Industry panels & case studies</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/circle-meeting-experience"
                  className="text-xs font-bold text-[#0062D2] hover:text-[#0052B4] inline-flex items-center gap-1.5"
                >
                  <span>Explore Learning</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* 3. Visibility and media (Amber) */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow">
              <div>
                <div className="size-12 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center mb-5">
                  <Megaphone className="size-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
                  Visibility and media
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>VyapaarJagat.com coverage</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Print magazine feature (40 stories)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Podcast opportunities (40 episodes)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Coffee Table Book feature</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Peers Candid Talks</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Digital PR and social media</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/unity"
                  className="text-xs font-bold text-[#0062D2] hover:text-[#0052B4] inline-flex items-center gap-1.5"
                >
                  <span>Get Media Visibility</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* 4. Community and belonging (Purple) */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow">
              <div>
                <div className="size-12 rounded-2xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center mb-5">
                  <Users className="size-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
                  Community and belonging
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Trusted Peers Circle (20–40 members)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>200+ entrepreneurs across community</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Confidential Forum</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>MindMeld city meetups</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Leaders Retreats & Family Meetups</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Pinning Ceremony & Certificate</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/who-belongs-here"
                  className="text-xs font-bold text-[#0062D2] hover:text-[#0052B4] inline-flex items-center gap-1.5"
                >
                  <span>Experience Community</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom Row: 3 Columns (Recognition, Local to Global, The LSR Growth Model double-width) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Card 5: Recognition and leadership (Rose - 3 Cols) */}
            <div className="lg:col-span-3 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow">
              <div>
                <div className="size-12 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center mb-5">
                  <Star className="size-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
                  Recognition and leadership
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Life Impact System</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Milestone badges and rankings</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Success stories and awards</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Leadership roles and opportunities</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Speaker, mentor and committee roles</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Regular recognition</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/the-currency"
                  className="text-xs font-bold text-[#0062D2] hover:text-[#0052B4] inline-flex items-center gap-1.5"
                >
                  <span>See Recognition</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 6: Local to global (Emerald - 3 Cols) */}
            <div className="lg:col-span-3 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow">
              <div>
                <div className="size-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                  <Globe className="size-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
                  Local to global
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Join multiple Circles</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Cross-Circle and cross-city access</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>City, state, national and international Circles</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Peers Global Unity App</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/the-territory"
                  className="text-xs font-bold text-[#0062D2] hover:text-[#0052B4] inline-flex items-center gap-1.5"
                >
                  <span>Explore the Network</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 7: The LSR Growth Model (Blue Tinted - 6 Cols) */}
            <div className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-slate-50 border border-blue-100 p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-3">
                  <Sparkles className="size-4 text-[#0062D2]" />
                  <span>THE LSR GROWTH MODEL</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                  The LSR Growth Model
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Everything here is built on three things every business runs on.
                </p>

                {/* 3 Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="size-9 rounded-xl bg-blue-100 text-[#0062D2] flex items-center justify-center mb-2 font-bold text-sm">
                      <BookOpen className="size-4" />
                    </div>
                    <div className="text-sm font-bold text-slate-900 mb-1">Learning</div>
                    <div className="text-[11px] text-slate-500 leading-snug">
                      Masterclasses, playbooks, mentorship and practical knowledge.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="size-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2 font-bold text-sm">
                      <TrendingUp className="size-4" />
                    </div>
                    <div className="text-sm font-bold text-slate-900 mb-1">Sales</div>
                    <div className="text-[11px] text-slate-500 leading-snug">
                      Referrals, introductions, customer connections and market access.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="size-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-2 font-bold text-sm">
                      <Users className="size-4" />
                    </div>
                    <div className="text-sm font-bold text-slate-900 mb-1">Resources</div>
                    <div className="text-[11px] text-slate-500 leading-snug">
                      Talent, capital, partners, suppliers, technology and expertise.
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic">
                  Held together by relationships, and by a mission to enhance the lives of one million entrepreneurs.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-blue-100">
                <Link
                  href="/membership"
                  className="text-xs font-bold text-[#0062D2] hover:text-[#0052B4] inline-flex items-center gap-1.5"
                >
                  <span>Learn More About LSR</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 5: EVERYTHING INCLUDED, AT A GLANCE (12 numbered items)
          ================================================================= */}
      <section className="py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-0.5 w-6 bg-[#0062D2]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  ONE MEMBERSHIP. A WORLD OF OPPORTUNITY
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
                Everything included, at a glance
              </h2>
            </div>

            {/* Download Benefits Button */}
            <div>
              <button
                onClick={handleDownload}
                className="rounded-full bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#0062D2] text-slate-800 hover:text-[#0062D2] px-6 py-3 text-xs sm:text-sm font-bold transition-all shadow-sm inline-flex items-center gap-2"
              >
                <Download className="size-4 text-[#0062D2]" />
                <span>{downloadSuccess ? 'Brochure Link Sent!' : 'Download Full Benefits List'}</span>
              </button>
            </div>
          </div>

          {/* 12 Numbered Cards Grid (3 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AT_A_GLANCE_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 p-5 flex items-center gap-4 shadow-2xs hover:shadow-sm transition-shadow group"
              >
                <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] font-mono text-sm font-bold flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-[#0062D2] group-hover:text-white transition-colors">
                  {item.num}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {item.text}
                </div>
              </div>
            ))}
          </div>

          {/* Reciprocity Card */}
          <div className="mt-12 rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm max-w-4xl mx-auto text-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              What you get out depends on what you put in
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Everything on this page is available to every Peer from day one. How much of it turns into real business depends entirely on how much you give. The Peers who take the most from this community are, without exception, the ones who give the most to it.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#0062D2] tracking-wide uppercase">
              That is not a philosophy. It is what the record shows.
            </p>
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 6: CLOSING HERO BANNER — Mountain Sunrise Panorama
          ================================================================= */}
      <section className="relative overflow-hidden bg-[#070F1E] text-white py-24 sm:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/membership-mountain-closing.jpg"
            alt="Entrepreneur on mountain summit at sunrise"
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
                A stronger you. <br className="hidden sm:inline" />
                A stronger tomorrow.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed mb-8">
                Download the Unity App or apply for membership to begin your journey.
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
                <p className="text-3xl sm:text-4xl text-white/50 leading-tight">Build,</p>
                <p className="text-3xl sm:text-4xl text-white/70 leading-tight">Connect,</p>
                <p className="text-3xl sm:text-4xl text-white/90 leading-tight">Collaborate,</p>
                <p className="text-4xl sm:text-5xl text-amber-300 font-medium leading-tight mt-1">
                  Create Impact.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

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
  TrendingUp,
  Shield,
  ShieldCheck,
  Lock,
  Clock,
  Flag,
  Heart,
  Ban,
  Megaphone,
  MessageSquare,
  Calendar,
  Sparkles,
  ShoppingBag,
  HelpCircle,
  ChevronDown,
  UserPlus,
  Compass,
  CheckCircle2,
  PlusCircle,
  Quote,
} from 'lucide-react'

// ─── Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Entrepreneurs',
  },
  {
    icon: Globe2,
    value: '100+',
    label: 'Cities',
  },
  {
    icon: Building2,
    value: '25+',
    label: 'Countries',
  },
  {
    icon: TrendingUp,
    value: '1M+',
    label: 'Lives to Impact',
  },
]

// ─── 4 Built For Entrepreneurs Pillars (Section 2) ────────────────────────
const BUILT_FOR_ENTREPRENEURS = [
  {
    icon: Megaphone,
    title: 'There is no advertising.',
    desc: 'Nobody is paying to appear in your feed.',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    icon: Ban,
    title: 'There is no algorithm.',
    desc: 'You see what your community is doing.',
    color: 'text-purple-600 bg-purple-50 border-purple-200',
  },
  {
    icon: Users,
    title: 'There are no strangers.',
    desc: 'Every profile belongs to a business owner who joined to contribute.',
    color: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  {
    icon: Heart,
    title: 'A feed worth reading.',
    desc: 'The people in it are worth knowing.',
    color: 'text-rose-600 bg-rose-50 border-rose-200',
  },
]

// ─── 11 What Unity Does Cards + 1 Quote Card ──────────────────────────────
const WHAT_UNITY_DOES = [
  {
    title: 'The Timeline',
    desc: 'Asks, wins, knowledge, events and more from your community.',
    linkText: 'See the Timeline',
    linkHref: '#timeline',
    icon: Clock,
    color: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  {
    title: 'The Peers',
    desc: 'Search by industry, city, capability or Circle.',
    linkText: 'See the Peer Directory',
    linkHref: '/circles/find',
    icon: Users,
    color: 'text-purple-600 bg-purple-50 border-purple-200',
  },
  {
    title: 'Connections & Followers',
    desc: 'Connect, follow and reach Peers across the community.',
    linkText: 'See Connections',
    linkHref: '/who-belongs-here',
    icon: UserPlus,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    title: 'Messaging & Circle Chat',
    desc: 'Direct messaging, Circle chats, and committee chats.',
    linkText: 'See Messaging',
    linkHref: '/circle-meeting-experience',
    icon: MessageSquare,
    color: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    title: 'One-to-One Booking',
    desc: 'Book conversations with any Peer you are connected to.',
    linkText: 'See Booking',
    linkHref: '/10-ways-of-collaboration',
    icon: Calendar,
    color: 'text-rose-600 bg-rose-50 border-rose-200',
  },
  {
    title: 'Contribution Logging',
    desc: 'Log what you gave. The Peer who received it confirms.',
    linkText: 'See Contribution',
    linkHref: '/culture-and-code',
    icon: TrendingUp,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
  },
  {
    title: 'Impact Tracking',
    desc: '1 Action = 1 Life Impacted. Badges, rankings and your live Impact Score.',
    linkText: 'Understand Impact',
    linkHref: '/culture-and-code',
    icon: Sparkles,
    color: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    title: 'The Marketplace',
    desc: 'Redeem your Peers Coin. Everything is earned by helping another entrepreneur.',
    linkText: 'Visit the Marketplace',
    linkHref: '/membership/benefits',
    icon: ShoppingBag,
    color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
  },
  {
    title: 'Events',
    desc: 'Circle meetings, masterclasses, conclaves and more. Browse, register and pay.',
    linkText: 'See Events',
    linkHref: '/events',
    icon: Calendar,
    color: 'text-purple-600 bg-purple-50 border-purple-200',
  },
  {
    title: 'Your Circle',
    desc: 'Meeting dates, agendas, attendance and your room’s collective impact.',
    linkText: 'Open Your Circle',
    linkHref: '/circles',
    icon: Users,
    color: 'text-teal-600 bg-teal-50 border-teal-200',
  },
  {
    title: 'Request a Circle',
    desc: 'When you find the room you want, request it here.',
    linkText: 'Request a Circle',
    linkHref: '/start-a-circle',
    icon: PlusCircle,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: 'Is the app free?',
    answer:
      'Yes, Unity is free to download and explore on iOS and Android. A Peers Global membership unlocks full interactive directory access, private direct messaging, and Circle participation.',
  },
  {
    question: 'Can I explore before subscribing?',
    answer:
      'Yes. You can download the Unity App, explore public community feeds, see upcoming events, and review Circles across cities before committing.',
  },
  {
    question: 'Is my information visible to everyone?',
    answer:
      'No. Your profile is private by default. Full contact details and direct booking become visible to a Peer only once a mutual connection is accepted.',
  },
  {
    question: 'Is there advertising in the app?',
    answer:
      'No. There is no advertising anywhere in Unity, and nobody can pay to boost or promote themselves into your feed.',
  },
  {
    question: 'Can I message any Peer?',
    answer:
      'You can message any Peer you are mutually connected with. Charter Peers have priority capability to message any Peer across the global community directly.',
  },
  {
    question: 'Is it available outside India?',
    answer:
      'Yes. Unity is a global application serving entrepreneurs across India, the Middle East, Southeast Asia, North America, and Europe.',
  },
  {
    question: 'Which devices does it support?',
    answer:
      'Unity is fully native and optimised for both Apple iOS (iPhone/iPad) and Google Android devices.',
  },
]

export function UnityPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* ─── SECTION 1: HERO (WITH PHONE MOCKUPS & EDGE FADE) ────────────── */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 z-10">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2] bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/60">
                  UNITY APP —
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.1]">
                Unity
              </h1>

              {/* Subline */}
              <p className="text-2xl sm:text-3xl font-serif text-slate-800 font-medium leading-snug">
                A global community of entrepreneurs, in your pocket.
              </p>

              {/* Supporting line */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                No advertising. No strangers. No algorithm deciding what you
                see.
              </p>

              {/* App Store & Google Play Download Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-black text-white hover:bg-slate-900 transition-all shadow-md hover:shadow-lg group"
                >
                  {/* Apple Icon */}
                  <svg
                    className="w-7 h-7 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.05-.51 2.68-1.26z" />
                  </svg>
                  <div className="text-left leading-none">
                    <span className="text-[10px] text-slate-300 block mb-0.5">
                      Download on the
                    </span>
                    <span className="text-base font-semibold tracking-tight text-white block">
                      App Store
                    </span>
                  </div>
                </a>

                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-black text-white hover:bg-slate-900 transition-all shadow-md hover:shadow-lg group"
                >
                  {/* Google Play Icon */}
                  <svg
                    className="w-6 h-6 fill-current text-white"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3.609 1.814L13.793 12 3.61 22.186A1.85 1.85 0 0 1 3 20.875V3.125c0-.495.213-.968.609-1.311zm11.605 11.607l2.259 2.259-11.45 6.505 9.191-8.764zm0-2.842L6.023 1.815l11.45 6.505-2.259 2.259zm1.42 1.421l3.52-2.001c1.077-.612 1.077-1.611 0-2.223l-3.52-2.001-2.128 2.128 2.128 2.097z" />
                  </svg>
                  <div className="text-left leading-none">
                    <span className="text-[10px] text-slate-300 block mb-0.5">
                      GET IT ON
                    </span>
                    <span className="text-base font-semibold tracking-tight text-white block">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Hero Visual with Phone Mockups & Cursive Overlay */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[530px] rounded-3xl overflow-hidden shadow-2xl bg-slate-950">
                <Image
                  src="/images/unity-hero-phones.jpg"
                  alt="Peers Global Unity Mobile Application Interface Mockups"
                  fill
                  className="object-contain object-center p-2"
                  priority
                />

                {/* Soft gradient horizontal fade on the left edge */}
                <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none z-10" />

                {/* Ambient edge shading */}
                <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/20 to-transparent pointer-events-none z-10" />

                {/* Cursive overlay text on right */}
                <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 text-right z-20 max-w-[200px]">
                  <p
                    className="text-2xl sm:text-3xl font-light italic leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Real
                    <br />
                    Entrepreneurs.
                    <br />
                    Real Conversations.
                    <br />
                    Real Impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Metric Stats Bar */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-200/50 border border-slate-200/90">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {STATS.map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className={`flex items-center gap-4 ${
                        i !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold font-serif text-slate-950 tracking-tight">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-600 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: A COMMUNITY, NOT A PLATFORM FULL OF STRANGERS ───── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — A COMMUNITY, NOT A PLATFORM FULL OF STRANGERS —
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-tight mt-2">
                  Built for entrepreneurs.
                  <br />
                  Not for attention.
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-3">
                  Every person in this app owns or leads a business. Every one
                  of them has agreed to the same Code you have.
                </p>
              </div>

              {/* 4 Pillars in a 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {BUILT_FOR_ENTREPRENEURS.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all shadow-sm"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${item.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif font-bold text-slate-900 text-base leading-snug mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Image with Cursive Script Overlay */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-[340px] sm:h-[420px] group">
                <Image
                  src="/images/entrepreneur-thinking.jpg"
                  alt="Entrepreneur in business suit engaging on smartphone app"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Cursive overlay on right */}
                <div className="absolute top-8 left-8 text-left text-white z-10 max-w-[260px]">
                  <p
                    className="text-2xl sm:text-3xl font-light italic leading-tight text-white drop-shadow-md"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Ideas.
                    <br />
                    Collaborations.
                    <br />
                    Friendships.
                    <br />
                    A Stronger Tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: WHAT UNITY DOES (11 CARDS + 1 QUOTE CARD = 12 GRID) ─ */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — WHAT UNITY DOES —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-2">
              Everything built for real collaboration.
            </h2>
          </div>

          {/* 12 Cards Grid (11 features + 1 quote card) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {WHAT_UNITY_DOES.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border transition-transform duration-300 group-hover:scale-110 ${item.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-slate-900 text-sm leading-snug mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      href={item.linkHref}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0062D2] hover:text-[#0052B4] transition-colors"
                    >
                      <span>{item.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )
            })}

            {/* 12th Card: Frosted Quote Card */}
            <div className="bg-gradient-to-br from-blue-50/90 to-sky-50/50 rounded-2xl p-5 border border-blue-200/70 shadow-sm flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-[#0062D2] mb-3 opacity-80" />
                <p className="text-sm font-serif italic text-slate-900 leading-snug">
                  “More than an app. A community that shows up.”
                </p>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#0062D2] pt-4">
                PEERS GLOBAL
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: FOUR HIGHLIGHT BOXES (2X2 GRID) ──────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1: Your profile is private by default */}
            <div className="bg-[#F8FAFC] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-950 mb-2">
                  Your profile is private by default
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Nothing on your profile is public, and nothing is visible
                  outside the community. Your full details become visible to a
                  Peer once you connect with them. You control what the
                  community sees, and no data leaves it.
                </p>
              </div>
            </div>

            {/* Box 2: Why the app matters more than the meeting */}
            <div className="bg-[#F8FAFC] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-950 mb-2">
                  Why the app matters more than the meeting
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A Circle meets twelve times a year. That is roughly
                  twenty-four hours. Unity is the other 8,736. It is where an
                  Ask gets answered on a Tuesday and where real collaboration
                  continues every day.
                </p>
              </div>
            </div>

            {/* Box 3: One community, every country */}
            <div className="bg-[#F8FAFC] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-950 mb-2">
                  One community, every country
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                  Unity connects Peers across cities and borders from day one. A
                  manufacturer in Gujarat and a distributor in Dubai. A founder
                  in Ahmedabad and someone who has already entered the market
                  they are heading toward.
                </p>
                <span className="text-xs font-bold text-[#0062D2]">
                  Designed in Bharat. Built for the world.
                </span>
              </div>
            </div>

            {/* Box 4: Start here */}
            <div className="bg-[#F8FAFC] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <Flag className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  Start here
                </h3>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center pt-2">
                {[
                  { step: '1', name: 'Download', sub: 'iOS & Android' },
                  { step: '2', name: 'Explore', sub: 'No commitment' },
                  { step: '3', name: 'Subscribe', sub: 'Full access' },
                  { step: '4', name: 'Attend', sub: 'Join events' },
                  { step: '5', name: 'Request', sub: 'Your Circle' },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="p-2 rounded-xl bg-white border border-slate-200/80 shadow-xs"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#0062D2] text-white font-bold text-[11px] flex items-center justify-center mx-auto mb-1">
                      {s.step}
                    </span>
                    <span className="text-[11px] font-bold text-slate-900 block leading-tight">
                      {s.name}
                    </span>
                    <span className="text-[9px] text-slate-500 block leading-tight mt-0.5">
                      {s.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: TWO-COLUMN SECTION (COMMON QUESTIONS & NOT READY YET) ─ */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Common Questions FAQ Accordion */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#0062D2]" />
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                  Common questions —
                </h2>
              </div>

              <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-2xl px-6 shadow-sm border border-slate-200">
                {FAQS.map((faq, index) => {
                  const isOpen = openFaq === index
                  return (
                    <div key={faq.question} className="py-4">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none"
                      >
                        <span className="text-sm sm:text-base font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {faq.question}
                        </span>
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-blue-50 text-blue-600'
                              : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                          }`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </span>
                      </button>

                      {isOpen && (
                        <div className="pt-2 pb-1 text-xs sm:text-sm text-slate-600 leading-relaxed pr-6">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Column: Not Ready Yet Box */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/unity-hero-phones.jpg"
                    alt="Unity App Preview"
                    fill
                    className="object-cover object-left"
                  />
                </div>

                <div className="sm:col-span-7 space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-slate-950">
                    Not ready yet
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Download it anyway. Look at the community, read the feed, see
                    the Circles. No pressure, and no expiry on deciding.
                  </p>

                  <div className="space-y-2 pt-1">
                    <a
                      href="https://apps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-slate-900 transition-all text-xs font-semibold w-full justify-center"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.05-.51 2.68-1.26z" />
                      </svg>
                      <span>Download on the App Store</span>
                    </a>

                    <a
                      href="https://play.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-slate-900 transition-all text-xs font-semibold w-full justify-center"
                    >
                      <svg
                        className="w-4 h-4 fill-current text-white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3.609 1.814L13.793 12 3.61 22.186A1.85 1.85 0 0 1 3 20.875V3.125c0-.495.213-.968.609-1.311zm11.605 11.607l2.259 2.259-11.45 6.505 9.191-8.764zm0-2.842L6.023 1.815l11.45 6.505-2.259 2.259zm1.42 1.421l3.52-2.001c1.077-.612 1.077-1.611 0-2.223l-3.52-2.001-2.128 2.128 2.128 2.097z" />
                      </svg>
                      <span>GET IT ON Google Play</span>
                    </a>
                  </div>

                  <p
                    className="text-lg font-light italic text-blue-700 pt-2"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    See the Possibilities.
                    <br />
                    Join When You’re Ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: CLOSING DARK MOUNTAIN BANNER ─────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-slate-950 text-white overflow-hidden">
        {/* Background Image: Mountain Climber */}
        <div className="absolute inset-0 opacity-45 mix-blend-luminosity">
          <Image
            src="/images/membership-mountain-closing.jpg"
            alt="Climber looking at sunrise from mountain peak"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-8 space-y-5">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                The community you want to belong to has to be built by someone.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Build Your Business. Build Your Relationships. Build Your Circle.
              </p>

            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-slate-200 drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                A Stronger
                <br />
                Tomorrow.
                <br />
                Together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

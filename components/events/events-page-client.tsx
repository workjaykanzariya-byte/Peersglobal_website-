'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Calendar,
  Building2,
  Globe2,
  TrendingUp,
  Users,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Clock,
  MapPin,
  Sparkles,
  Ticket,
  FileText,
  Bell,
  Smartphone,
  Award,
  Search,
  Filter,
  ExternalLink,
} from 'lucide-react'

// ─── Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Calendar,
    value: '200+',
    label: 'Events Every Year',
  },
  {
    icon: Users,
    value: '25+',
    label: 'Cities',
  },
  {
    icon: Building2,
    value: '10+',
    label: 'Industries',
  },
  {
    icon: Globe2,
    value: '1',
    label: 'Global Community',
  },
]

// ─── 5 Badges in Everything Runs Through the App ──────────────────────────
const APP_BADGES = [
  { icon: Calendar, label: 'Browse Events' },
  { icon: Ticket, label: 'Register & Pay' },
  { icon: FileText, label: 'Get Event Details' },
  { icon: Bell, label: 'Receive Updates' },
  { icon: Users, label: 'Attend & Engage' },
]

// ─── 10 Event Types ───────────────────────────────────────────────────────
const EVENT_TYPES = [
  {
    title: 'Monthly Circle Meetings',
    desc: 'Your consistent growth rhythm. Twelve a year, the same Peers, the same four-part agenda. Also run as Circle Mini-Conferences.',
    linkText: 'See the Meeting Agenda',
    linkHref: '/circle-meeting-experience',
    image: '/images/circle-roundtable-topdown.jpg',
    tag: 'Monthly Rhythm',
  },
  {
    title: 'Impact Mentor Masterclasses',
    desc: 'One expert. One subject. Applicable insight from someone who has built the thing they are teaching.',
    subnote: 'Who attends: Peers, and team members registered as visitors.',
    image: '/images/conclave.png',
    tag: 'Masterclass',
  },
  {
    title: 'Mega Networking Events',
    desc: 'Two to four a year. Large gatherings bringing together Peers from across Circles, cities and industries.',
    linkText: 'View Upcoming Events',
    linkHref: '#calendar',
    image: '/images/philosophy-networking.jpg',
    tag: 'Cross-Circle',
  },
  {
    title: 'MindMeld Cross-Circle City Meetups',
    desc: 'Entrepreneurs from multiple industries, in one room. Powerful cross-industry collaborations that no single Circle could produce.',
    image: '/images/industry-panel-leaders.jpg',
    tag: 'City Meetup',
  },
  {
    title: 'Leadership Retreats',
    desc: 'Two a year. State-level and national retreats for Circle Directors, Founders and leadership — for deeper bonds, real learning, and time away from the day-to-day.',
    image: '/images/who-we-are-mountain.jpg',
    tag: 'Leadership',
  },
  {
    title: 'Family Meetups',
    desc: 'Two a year. Friends in Life, not just Partners in Business. Relationships that last decades.',
    image: '/images/who-we-are-impact.jpg',
    tag: 'Community & Family',
  },
  {
    title: 'Annual Awards & Recognition',
    desc: 'The year’s highest contributors, the collaborations that produced the most, the Circles that changed the most lives.',
    linkText: 'See Awards & Recognition',
    linkHref: '/awards',
    image: '/images/founder-new.png',
    tag: 'Celebration',
  },
  {
    title: 'Leadership Transition Events',
    desc: 'Two a year. Where leadership hands over — with the standard intact. An institution that plans its succession outlives any individual in it.',
    image: '/images/industry-cross-city-handshake.jpg',
    tag: 'Governance',
  },
  {
    title: 'Regional Conclaves & Summits',
    desc: 'Territory-wide gatherings hosted by Executive Directors, and the annual community summit. Multiple cities, senior speakers, and collaboration at scale.',
    image: '/images/executive-director-conclave.jpg',
    tag: 'Summits',
  },
  {
    title: 'Charter Gatherings',
    desc: 'Retreats and special sessions for Charter Peers — entrepreneurs building at national and international scale.',
    subnote: 'Who attends: Charter Peers.',
    image: '/images/who-we-are-boardroom.jpg',
    tag: 'Charter Exclusive',
  },
]

// ─── Upcoming Calendar Events ─────────────────────────────────────────────
const UPCOMING_EVENTS = [
  {
    id: 1,
    title: 'Business Conclave 2026: Building for Bharat',
    type: 'Regional Summit',
    city: 'Ahmedabad',
    date: 'Sat, 12 Oct 2026',
    time: '10:00 AM – 4:00 PM',
    venue: 'Grand Hyatt, Ahmedabad & Live on Unity',
    guestAllowed: true,
    fee: '₹1,500 (Free for Charter Peers)',
    speakers: 'Dr. Pravin Parmar & Industry Directors',
  },
  {
    id: 2,
    title: 'Impact Mentor Masterclass: Scaling to ₹100 Cr ARR',
    type: 'Masterclass',
    city: 'Mumbai',
    date: 'Thu, 24 Oct 2026',
    time: '5:00 PM – 7:30 PM',
    venue: 'BKC Executive Club, Mumbai',
    guestAllowed: true,
    fee: '₹750 (Included for Active Peers)',
    speakers: 'Suresh Iyer (Charter Peer)',
  },
  {
    id: 3,
    title: 'MindMeld: Cross-Industry Collaboration Roundtable',
    type: 'MindMeld Meetup',
    city: 'Bengaluru',
    date: 'Fri, 08 Nov 2026',
    time: '4:00 PM – 7:00 PM',
    venue: 'The Leela Palace, Bengaluru',
    guestAllowed: false,
    fee: '₹500 (Peers Only)',
    speakers: 'Circle Directors & Founders',
  },
  {
    id: 4,
    title: 'National Leadership Retreat 2026',
    type: 'Leadership Retreat',
    city: 'Goa',
    date: '20–22 Nov 2026',
    time: '3-Day Immersive',
    venue: 'Taj Exotica Resort, Goa',
    guestAllowed: false,
    fee: 'All-inclusive for Executive Board',
    speakers: 'Peers Global Advisory Council',
  },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: 'How do I find events near me?',
    answer:
      'Open the Unity App and browse by city. The interactive calendar shows everything scheduled across all active Circles and regions.',
  },
  {
    question: 'Can I attend if I am not a member?',
    answer:
      'Yes, for designated guest sessions. Circle meetings and Impact Mentor Masterclasses accept guests and visitors. Simply register through the Unity App.',
  },
  {
    question: 'Are events free for members?',
    answer:
      'Monthly Circle meetings are covered by your Circle Experience Fee. Larger regional conclaves, retreats, and annual summits carry specific venue and hospitality fees clearly shown before booking.',
  },
  {
    question: 'Can I bring my team?',
    answer:
      'Yes. If a masterclass or session theme would benefit your leadership or technical team, they can attend as registered visitors on payment of the nominal visitor fee.',
  },
  {
    question: 'Can I host or sponsor an event?',
    answer:
      'Speak to your Circle Director or Executive Director. Community-first sponsorships and showcase sessions are curated with high editorial standards.',
  },
  {
    question: 'Are events online or in person?',
    answer:
      'Both formats run regularly. Monthly Circle meetings and regional conclaves are primarily in person, while specialized masterclasses and national briefings are streamed live in the Unity App.',
  },
  {
    question: 'Can I attend events outside my own Circle?',
    answer:
      'Yes. Charter Peers enjoy cross-regional access to attend Circle meetings across any city worldwide, up to twelve times annually.',
  },
]

export function EventsPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [selectedCity, setSelectedCity] = useState<string>('All')

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const cities = ['All', 'Ahmedabad', 'Mumbai', 'Bengaluru', 'Goa']

  const filteredCalendar =
    selectedCity === 'All'
      ? UPCOMING_EVENTS
      : UPCOMING_EVENTS.filter((e) => e.city === selectedCity)

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* ─── Breadcrumb ──────────────────────────────────────────────────── */}
      <div className="border-b border-slate-200/80 bg-white/70 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-600">Community Life</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">
              Events & Summits
            </span>
          </nav>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (WITH AUDITORIUM SPEAKER & EDGE FADE) ────────── */}
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 z-10">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2] bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/60">
                  — COMMUNITY LIFE —
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.1]">
                Events
              </h1>

              {/* Subline */}
              <p className="text-2xl sm:text-3xl font-serif text-slate-800 font-medium leading-snug">
                This is where the community meets in person.
              </p>

              {/* Supporting line */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Circle meetings, masterclasses, conclaves and summits — across
                cities, all year.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0062D2] text-white font-medium text-sm shadow-md hover:bg-[#0052B4] hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#calendar"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-800 font-medium text-sm border border-slate-300 shadow-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
                >
                  <span>Browse Events</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Hero Visual with Seamless Edge Fade */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/executive-director-conclave.jpg"
                  alt="Business summit speaker addressing audience at Peers Global event"
                  fill
                  className="object-cover object-top"
                  priority
                />

                {/* Soft horizontal gradient fade on the left edge blending into page background */}
                <div className="absolute inset-y-0 left-0 w-28 sm:w-40 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none z-10" />

                {/* Ambient Top & Bottom Gradients */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/20 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none z-10" />

                {/* Stage Backdrop Brand Overlay on Top Right */}
                <div className="absolute top-6 right-6 bg-slate-950/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 text-right z-20 max-w-[220px]">
                  <div className="flex items-center justify-end gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                      PeersGlobal
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-200 leading-tight">
                    Ideas. Connections.
                  </p>
                  <p className="text-xs font-semibold text-slate-200 leading-tight">
                    Collaborations.
                  </p>
                  <p className="text-[11px] font-bold text-sky-400 leading-tight mt-0.5">
                    A Stronger Tomorrow.
                  </p>
                </div>

                {/* Cursive overlay text on bottom right */}
                <div className="absolute bottom-6 right-6 text-right z-20 max-w-[240px]">
                  <p
                    className="text-xl sm:text-2xl font-light italic leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    More People.
                    <br />
                    Real Conversations.
                    <br />
                    Greater Impact.
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

      {/* ─── SECTION 2: EVERYTHING RUNS THROUGH THE APP ─────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — EVERYTHING RUNS THROUGH THE APP —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-tight mt-1">
              Discover, register and be part of it.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mt-2">
              Every Peers Global event is listed, booked and managed in the
              Unity App. Browse what is happening in your city and across the
              community, see the agenda and the speakers, register, and receive
              everything you need before the day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Box: How a guest attends */}
            <div className="lg:col-span-5 bg-[#F8FAFC] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shadow-xs">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  This is also how a guest attends their first meeting.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Download the app, find a Circle meeting near you, and register
                  to experience the boardroom collaboration first-hand.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0062D2] text-white font-medium text-xs shadow-md hover:bg-[#0052B4] transition-all"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Center / Right: Phone Mockups + 5 Vertical Badges */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Phone Mockups Card */}
              <div className="sm:col-span-7 relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-950 shadow-md">
                <Image
                  src="/images/unity-hero-phones.jpg"
                  alt="Unity App Event Booking Interface Mockups"
                  fill
                  className="object-contain object-center p-2"
                />
              </div>

              {/* 5 Action Badges */}
              <div className="sm:col-span-5 space-y-2.5">
                {APP_BADGES.map((badge) => {
                  const Icon = badge.icon
                  return (
                    <div
                      key={badge.label}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-300 transition-all shadow-xs"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800">
                        {badge.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: WHAT WE RUN (10 EVENT TYPES) ─────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — WHAT WE RUN —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
              Events for every stage of your journey.
            </h2>
          </div>

          {/* 10 Event Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {EVENT_TYPES.map((ev) => (
              <div
                key={ev.title}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-36 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={ev.image}
                      alt={ev.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                      {ev.tag}
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="font-serif font-bold text-slate-900 text-sm leading-snug">
                      {ev.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ev.desc}
                    </p>
                    {ev.subnote && (
                      <p className="text-[11px] font-medium text-[#0062D2] italic pt-1">
                        {ev.subnote}
                      </p>
                    )}
                  </div>
                </div>

                {ev.linkHref && (
                  <div className="p-4 pt-0">
                    <Link
                      href={ev.linkHref}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0062D2] hover:text-[#0052B4] transition-colors"
                    >
                      <span>{ev.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIVE EVENTS CALENDAR PREVIEW ────────────────────────────────── */}
      <section
        id="calendar"
        className="py-16 sm:py-20 bg-white border-y border-slate-200/80 scroll-mt-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                — CALENDAR PREVIEW —
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1">
                Upcoming Community Gatherings
              </h2>
            </div>

            {/* City Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {cities.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCity(c)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedCity === c
                      ? 'bg-[#0062D2] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCalendar.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-slate-50/90 border border-slate-200 hover:border-blue-300 hover:bg-white transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0062D2] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                      {item.type}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.city}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-slate-900 text-base mb-2">
                    {item.title}
                  </h3>

                  <div className="space-y-1 text-xs text-slate-600 mb-4">
                    <p className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <strong>Date:</strong> {item.date} • {item.time}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <strong>Venue:</strong> {item.venue}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Ticket className="w-3.5 h-3.5 text-slate-400" />
                      <strong>Access:</strong> {item.fee}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    {item.guestAllowed
                      ? 'Open to Registered Guests'
                      : '🔒 Peers Only'}
                  </span>
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0062D2] hover:text-[#0052B4]"
                  >
                    <span>Register in Unity</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: THREE-COLUMN SECTION ─────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Column 1: How Events Work */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — HOW EVENTS WORK —
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-950 leading-tight">
                  Simple. Clear. Open to the right people.
                </h3>

                <div className="space-y-3.5 pt-2 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700 leading-relaxed">
                      <strong>Every event carries a fee.</strong> Fees vary by
                      event and are shown in the app before you register.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700 leading-relaxed">
                      <strong>You register in the app.</strong> Browse, select,
                      pay and receive your confirmation in one place.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700 leading-relaxed">
                      <strong>Guests are welcome at many events.</strong> Circle
                      meetings and masterclasses are open to entrepreneurs
                      seeing the community for the first time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="#calendar"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0062D2] font-semibold text-xs border border-blue-300 shadow-xs hover:bg-blue-50 transition-all"
                >
                  <span>See the Full Calendar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Column 2: Bringing Your Team */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — BRINGING YOUR TEAM —
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-950 leading-tight">
                  Learning your team can use.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If a masterclass or a meeting theme would benefit your team,
                  they can attend as registered visitors.
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm">
                  <span className="text-xs font-bold text-slate-900 block">
                    Your team gets:
                  </span>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Access to the same learning
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      A view of the community you are part of
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Connections that support your business
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 italic pt-6 border-t border-slate-100">
                This is one of the most immediate benefits of membership, and
                one your team will value.
              </p>
            </div>

            {/* Column 3: Common Questions FAQ */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                — COMMON QUESTIONS —
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-950 mt-1 mb-4">
                Frequently asked questions
              </h3>

              <div className="divide-y divide-slate-200">
                {FAQS.map((faq, index) => {
                  const isOpen = openFaq === index
                  return (
                    <div key={faq.question} className="py-3">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between gap-3 text-left group focus:outline-none"
                      >
                        <span className="text-xs sm:text-sm font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${
                            isOpen ? 'rotate-180 text-blue-600' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="pt-2 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                          {faq.answer}
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

      {/* ─── SECTION 5: CLOSING HERO BANNER — Royal Blue Theme (Preserving Exact Structure) ─── */}
      <section className="relative py-20 sm:py-28 bg-[#0062D2] text-white overflow-hidden">
        {/* Subtle Geometric Orbital Line Art */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-35 overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 600 600"
            fill="none"
            className="w-full h-full text-white/30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 50 450 A 420 420 0 0 1 550 50" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 120 520 A 500 500 0 0 1 600 120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <path d="M 220 580 A 460 460 0 0 1 580 220" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="280" y1="220" x2="380" y2="120" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="280" cy="220" r="4.5" fill="#7DD3FC" />
            <circle cx="280" cy="220" r="10" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-200">
                — BE PART OF SOMETHING LARGER —
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                Build Your Business. Build Your Relationships.
                <br />
                Build Your Circle.
              </h2>

            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right select-none pointer-events-none">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Ideas.
                <br />
                People.
                <br />
                Communities.
                <br />
                A Brighter Tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

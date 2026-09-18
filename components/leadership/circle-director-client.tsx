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

// ─── Developing the Leaders (Section 3) ───────────────────────────────────
const LEADING_LEADERS_CARDS = [
  {
    icon: Users,
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200/80',
    title: 'You mentor the Chairs',
    desc: 'They come to you before decisions and after mistakes. You teach them how to hold a standard, how to run a committee, how to handle a difficult Peer. Several will go on to become Directors and Founders themselves.',
  },
  {
    icon: Layers,
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-200/80',
    title: 'You develop the Powerhouse',
    desc: 'Every committee member is a leader in formation. A Director who invests in them builds a Circle that eventually runs without needing them.',
  },
  {
    icon: Heart,
    color: 'text-purple-700',
    bg: 'bg-purple-50',
    border: 'border-purple-200/80',
    title: 'You guide the Peers',
    desc: 'The new Peer who has not yet found their footing. The established one whose contribution has quietened. The entrepreneur going through a difficult year who has stopped coming.',
  },
]

// ─── 7 Responsibilities & 7 Role Carries (Section 4) ──────────────────────
const RESPONSIBILITIES = [
  {
    icon: ShieldCheck,
    color: 'text-emerald-600',
    title: 'The culture',
    desc: 'The Peers Code is upheld in that Circle by its Director.',
  },
  {
    icon: UserCheck,
    color: 'text-blue-600',
    title: 'The standard',
    desc: 'Every meeting follows the Peers Global format.',
  },
  {
    icon: Users,
    color: 'text-purple-600',
    title: 'The Chairs and the committees',
    desc: 'Appointing them, mentoring them, and keeping them active.',
  },
  {
    icon: TrendingUp,
    color: 'text-emerald-600',
    title: 'The impact',
    desc: 'Watching the Gratitude & Life Impact Round and ensuring real outcomes.',
  },
  {
    icon: Calendar,
    color: 'text-pink-600',
    title: 'The events',
    desc: 'Circle meetings, masterclasses, guest sessions and regional gatherings.',
  },
  {
    icon: Heart,
    color: 'text-amber-600',
    title: 'The health of the room',
    desc: 'Attendance, energy, contribution, seats filled and relationships forming.',
  },
  {
    icon: Target,
    color: 'text-teal-600',
    title: 'The growth',
    desc: 'Seats filled with entrepreneurs who strengthen it, and the room’s reputation rising.',
  },
]

const ROLE_CARRIES = [
  {
    icon: Users,
    color: 'text-amber-600',
    title: 'You chair the room',
    desc: 'Twelve meetings a year, each attended by established business owners.',
  },
  {
    icon: Award,
    color: 'text-purple-600',
    title: 'You decide who stands in front of it',
    desc: 'You programme the Impact Mentor Masterclass and invite industry leaders.',
  },
  {
    icon: Heart,
    color: 'text-pink-600',
    title: 'You host the guests',
    desc: 'Industry leaders, prospective Peers, media and senior entrepreneurs.',
  },
  {
    icon: Megaphone,
    color: 'text-amber-600',
    title: 'You carry visibility',
    desc: 'Your Circle’s meetings, collaborations and impact are showcased.',
  },
  {
    icon: Globe2,
    color: 'text-emerald-600',
    title: 'You influence beyond the Circle',
    desc: 'You represent your Circle in city, regional and national conversations.',
  },
  {
    icon: Users,
    color: 'text-blue-600',
    title: 'You develop future leaders',
    desc: 'Many committee members go on to Founders and Directors.',
  },
  {
    icon: Briefcase,
    color: 'text-amber-700',
    title: 'You build a legacy',
    desc: 'A healthy Circle continues long after you step back.',
  },
]

// ─── Who You Become & Who This Is For ────────────────────────────────────
const WHO_YOU_BECOME_POINTS = [
  {
    title: 'The ability to develop other leaders',
    desc: 'Mentoring three Chairs and a committee of entrepreneurs is leadership training money cannot buy. You will take it straight back into your own company.',
  },
  {
    title: 'The capacity for a difficult conversation',
    desc: 'Told directly, kindly, and in a way that preserves relationships. Most business owners avoid this their entire careers.',
  },
  {
    title: 'Real listening',
    desc: 'You lead thirty entrepreneurs by understanding what each of them needs, often before they say it.',
  },
  {
    title: 'Judgement about people',
    desc: 'Who fits, who is drifting, who is ready to lead. This one skill will serve your own hiring for the rest of your career.',
  },
  {
    title: 'Presence',
    desc: 'The ability to hold a room without dominating it.',
  },
]

const WHO_THIS_IS_FOR = [
  'You get satisfaction from watching other people grow',
  'You have led people before and want to lead where authority does not apply',
  'You can hold a standard among entrepreneurs who outrank you commercially',
  'You are consistent — the same person in month nine as in month one',
  'You notice when someone has gone quiet',
  'You want standing in your market that comes from service',
]

// ─── Community Provides & You Bring ──────────────────────────────────────
const COMMUNITY_PROVIDES = [
  { title: 'Director induction', desc: 'Running the four-part agenda, holding the standard, mentoring Chairs, integrating new Peers, and growing a Circle.' },
  { title: 'The systems', desc: 'The Unity App, attendance, contribution tracking and member management from Day 1.' },
  { title: 'Regional support', desc: 'A Regional Executive Director alongside you, and access to Directors across the community.' },
  { title: 'The platform and brand', desc: 'You lead under Peers Global, with its structure, credibility and national reach.' },
  { title: 'Media and visibility', desc: 'Coverage of your Circle across the Peers Global media ecosystem.' },
]

const WHAT_YOU_BRING = [
  { title: 'Consistency', desc: 'Every month, including the months when it is inconvenient.' },
  { title: 'Standards', desc: 'Held even when the person who needs correcting is someone you like.' },
  { title: 'Generosity with your time', desc: 'The Chairs and the Peers will need your presence and counsel.' },
  { title: 'Attention', desc: 'To the room as a whole, and to each person in it.' },
]

// ─── How to Become a Circle Director ─────────────────────────────────────
const HOW_TO_BECOME = [
  { step: '1', title: 'Become a Peer', desc: 'Peers Global membership is required.' },
  { step: '2', title: 'Contribute Consistently', desc: 'Directors come from within. Your record in the room makes you a candidate.' },
  { step: '3', title: 'Serve as a Chair', desc: 'Most Directors led a Powerhouse committee first.' },
  { step: '4', title: 'Express Interest', desc: 'Speak to your Circle Founder or Regional Executive Director.' },
  { step: '5', title: 'Complete Director Induction', desc: 'Format mastery and room facilitation training.' },
  { step: '6', title: 'Take the Chair', desc: 'Lead the room and mentor the next cohort.' },
]

// ─── Common Questions (FAQ) ──────────────────────────────────────────────
const FAQ = [
  {
    q: 'Do I need to be a Peer already?',
    a: 'Yes. Peers Global membership is required, and Directors are almost always drawn from within the Circle they go on to lead.',
  },
  {
    q: 'Can I be Director of a Circle I did not found?',
    a: 'Yes. This is the standard route. The Founder builds and launches the room; a Director takes on its month-on-month running and growth.',
  },
  {
    q: 'Do I need to have served on the Powerhouse first?',
    a: 'It is the usual path and the best preparation, though exceptional candidates with extensive executive experience may be considered directly.',
  },
  {
    q: 'Can a Founder also be the Director?',
    a: 'Yes, particularly during the launch and early phases. Most Founders hand the chair to a Director once the Circle is established so they can focus on wider governance or founding new Circles.',
  },
  {
    q: 'How much time does the role take?',
    a: 'The monthly meeting, preparation, and time with your Chairs and Peers between meetings. The commitment is consistency rather than volume, and it is discussed openly before any role is offered.',
  },
  {
    q: 'Can I direct a Circle while running my business?',
    a: 'Yes. Every Director is a working business owner. The governance format is designed specifically for active founders.',
  },
  {
    q: 'How long is the term?',
    a: 'The standard term is 12 months, renewable once. A defined term makes the commitment clear and makes leadership succession normal and healthy.',
  },
]

export function CircleDirectorClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFBFD] text-slate-900">
      {/* ─── 1. HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pb-24 border-b border-slate-200/80 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <Link href="/leadership" className="hover:text-[#0062D2] transition-colors">
              Leadership
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="text-slate-800 font-semibold">Circle Director</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
                <span className="w-5 h-px bg-[#0062D2]" />
                LEADERSHIP
                <span className="w-5 h-px bg-[#0062D2]" />
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.08] mb-4">
                Circle Director
              </h1>

              <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug mb-3">
                You grow the Circle, and everyone in it.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                A Circle Director carries the culture of a room, mentors its Chairs and its Peers, and is responsible for the lives that room changes.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/contact?intent=leadership"
                  className="rounded-full border border-slate-300 hover:border-[#0062D2] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0062D2] px-8 py-3.5 text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Apply to Lead</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right Hero Visual with Director Chairing Room */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src="/images/circle-director-hero.jpg"
                  alt="Circle Director chairing an executive leadership meeting with Chairs and Peers"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/15" />

                {/* Top right wall text */}
                <div className="absolute top-5 right-5 text-right select-none pointer-events-none drop-shadow-md">
                  <p
                    className="text-base sm:text-lg text-white font-medium leading-tight"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Better
                  </p>
                  <p
                    className="text-lg sm:text-xl text-white font-medium leading-tight"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    People
                  </p>
                  <p
                    className="text-xl sm:text-2xl text-amber-300 font-bold leading-tight"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Bigger Opportunities.
                  </p>
                </div>

                {/* Bottom right cursive script */}
                <div className="absolute bottom-5 right-5 text-right select-none pointer-events-none drop-shadow-md">
                  <p
                    className="text-xl sm:text-2xl text-white font-medium leading-tight"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    A Stronger Circle.
                  </p>
                  <p
                    className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight mt-0.5"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    A Brighter Tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
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

      {/* ─── 2. THE BIGGER PICTURE ──────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
                <span className="w-5 h-px bg-[#0062D2]" />
                THE BIGGER PICTURE
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-5">
                The Circle grows around its Director
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-light">
                A Circle Founder brings a room into existence. A Circle Director raises it.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-light">
                The Director is responsible for what that Circle becomes — its culture, its discipline, its energy, and the number of entrepreneurs whose businesses change because of it. Every Peer in the room, every Chair on every committee, and every guest who walks through the door encounters the Circle the Director has shaped.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-2xl bg-[#F4F8FE] border border-blue-100 flex items-start gap-3">
                  <div className="size-10 rounded-xl bg-blue-100 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="size-5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-serif font-bold">
                    Where a Circle is generous, disciplined and productive, its Director built it that way.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    This is the most rewarding position in the community, because it is the one where you can see what you built, in the room, every month.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Image with Subtle Script */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 aspect-[4/3]">
                <Image
                  src="/images/leadership-entrepreneurs-meeting.jpg"
                  alt="Circle Director facilitating collaboration"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right select-none pointer-events-none drop-shadow-md">
                  <p className="text-xs text-white/90 font-medium tracking-wider uppercase">
                    Ideas · Connections
                  </p>
                  <p
                    className="text-lg text-amber-300 font-bold leading-tight"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Collaboration & Impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. YOU LEAD THE LEADERS WHO LEAD THE CIRCLE ────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
              <span className="w-5 h-px bg-[#0062D2]" />
              YOU LEAD THE LEADERS
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-3">
              You lead the leaders who lead the Circle
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-light">
              A Circle is not run by one person. It is run by its Chairs and its committees, and the Director develops all of them. Three committees. Three Chairs. One Director behind them.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 3 Cards */}
            <div className="lg:col-span-8 grid md:grid-cols-3 gap-6">
              {LEADING_LEADERS_CARDS.map((card, idx) => {
                const Icon = card.icon
                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-3xl bg-white border ${card.border} shadow-sm flex flex-col justify-between`}
                  >
                    <div>
                      <div className={`size-12 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-4`}>
                        <Icon className="size-6" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-slate-950 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Highlight Quote Card */}
            <div className="lg:col-span-4">
              <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50/50 to-blue-50/40 border border-emerald-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="size-12 rounded-full bg-blue-100 text-[#0062D2] flex items-center justify-center mb-5">
                    <Quote className="size-6" />
                  </div>
                  <blockquote className="font-serif text-xl sm:text-2xl font-bold text-slate-950 leading-snug tracking-tight mb-4">
                    “Nothing in business gives you this. You develop leaders you did not hire, who owe you nothing, and who will carry what you taught them into rooms you will never sit in.”
                  </blockquote>
                </div>
                <div className="text-xs font-bold tracking-widest text-[#0062D2] uppercase pt-4 border-t border-emerald-200/60">
                  PEERS GLOBAL
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. RESPONSIBILITIES & WHAT THE ROLE CARRIES (2-COLUMN) ──────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Responsibilities */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-2">
                  WHAT YOU ARE RESPONSIBLE FOR
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mb-6">
                  A Circle Director owns seven things
                </h3>

                <div className="space-y-4">
                  {RESPONSIBILITIES.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex items-start gap-3.5">
                        <div className={`size-8 rounded-lg bg-white border border-slate-200/80 ${item.color} flex items-center justify-center shrink-0 mt-0.5 shadow-sm`}>
                          <Icon className="size-4" />
                        </div>
                        <div>
                          <h4 className="font-serif text-sm font-bold text-slate-950">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-600 mt-0.5 font-light">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link
                  href="/circle-meeting-experience"
                  className="rounded-full border border-slate-300 hover:border-[#0062D2] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0062D2] px-6 py-2.5 text-xs font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
                >
                  <span>See the Meeting Agenda</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: What the role carries */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-2">
                  WHAT THE ROLE CARRIES
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mb-6">
                  More responsibility. A bigger you.
                </h3>

                <div className="space-y-4">
                  {ROLE_CARRIES.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex items-start gap-3.5">
                        <div className={`size-8 rounded-lg bg-white border border-slate-200/80 ${item.color} flex items-center justify-center shrink-0 mt-0.5 shadow-sm`}>
                          <Icon className="size-4" />
                        </div>
                        <div>
                          <h4 className="font-serif text-sm font-bold text-slate-950">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-600 mt-0.5 font-light">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 font-medium">
                The highest leverage leadership appointment in a city.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. WHO YOU BECOME & WHO THIS IS FOR ────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left: Who you become */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-1">
                <span className="w-5 h-px bg-[#0062D2]" />
                PERSONAL TRANSFORMATION
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                Who you become
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                Every entrepreneur in your Circle runs their own company. None of them has to follow you. They have their own success and their own alternatives. You hold no authority over any of them. If you want that room disciplined, generous and consistent, you earn it through how you behave in front of them.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                That is the difference between management and influence. In your own company people follow because of your position. Here, they follow because of who you are.
              </p>

              <div className="space-y-3 pt-2">
                {WHO_YOU_BECOME_POINTS.map((pt, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-slate-950">
                        {pt.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-light">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Who this role is for & is not for */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-slate-950 mb-4">
                  This role is for you if:
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {WHO_THIS_IS_FOR.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-7 rounded-3xl bg-rose-50/50 border border-rose-200 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-rose-950 mb-2">
                  This is NOT for you if:
                </h3>
                <p className="text-xs sm:text-sm text-rose-900 leading-relaxed font-light">
                  You want the position more than the responsibility. A Circle recognises the difference within a single quarter, and your influence dissolves before it begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. WHAT THE COMMUNITY PROVIDES & WHAT YOU BRING ────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Community provides */}
            <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-slate-950 mb-6">
                What the community provides
              </h3>
              <div className="space-y-4">
                {COMMUNITY_PROVIDES.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-base font-bold text-slate-950">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What you bring */}
            <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-slate-950 mb-6">
                What you bring
              </h3>
              <div className="space-y-4">
                {WHAT_YOU_BRING.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-base font-bold text-slate-950">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. HOW TO BECOME A CIRCLE DIRECTOR (6 STEPS) ───────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
              <span className="w-5 h-px bg-[#0062D2]" />
              THE SUCCESSION PATH
              <span className="w-5 h-px bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
              How to become a Circle Director
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 font-light">
              Directors come from within. Your contribution in the room is what builds your candidacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {HOW_TO_BECOME.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="size-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center mb-3">
                    {item.step}
                  </div>
                  <h4 className="font-serif text-base font-bold text-slate-950 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact?intent=leadership"
              className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Apply to Lead</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 8. COMMON QUESTIONS (FAQ) ─────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
              <span className="w-5 h-px bg-[#0062D2]" />
              FAQ
              <span className="w-5 h-px bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Common questions
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

      {/* ─── 9. CLOSING DARK MOUNTAIN BANNER ───────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0A1120] text-white py-20 lg:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/membership-mountain-closing.jpg"
            alt="Entrepreneur standing on mountain ridge at dawn"
            fill
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1120]/95 via-[#0A1120]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-400 mb-3">
                <span className="w-5 h-px bg-blue-400" />
                READY TO LEAD?
                <span className="w-5 h-px bg-blue-400" />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
                Take the next step.
              </h2>

              <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light mb-8 max-w-2xl">
                Download the Unity App or apply to lead a Circle and create a lasting impact.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/contact?intent=leadership"
                  className="rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 text-sm font-semibold backdrop-blur-md transition-all inline-flex items-center gap-2"
                >
                  <span>Apply to Lead</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg">
              <p
                className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Leaders
              </p>
              <p
                className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Build People.
              </p>
              <p
                className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                People Build
              </p>
              <p
                className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                A Brighter Tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

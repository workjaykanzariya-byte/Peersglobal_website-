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
import { usePageMedia } from '@/lib/hooks/use-page-media'

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

  const { getMedia } = usePageMedia('leadership')
  const heroMedia = getMedia({
    sectionName: 'Circle Director',
    subModuleName: 'CIRCLE DIRECTOR HERO',
    subModuleId: 'sub-leadership-circle-director',
    fallbackUrl: '/videos/stories-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Circle Director Leadership & Meeting Stewardship',
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
            <span className="text-slate-800 font-semibold">Circle Director</span>
          </nav>

          {/* Hero Banner Box (Unified rounded card matching Why Join layout) */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] flex items-center">

            {/* Fade Video Visual (Right 60%) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
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
                  src={heroMedia.mediaUrl || '/videos/stories-hero-bg.mp4'}
                  poster="/images/circle-director-hero.jpg"
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
                  Better People
                </p>
                <p
                  className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Bigger Opportunities.
                </p>
                <p
                  className="text-xl sm:text-2xl text-white/90 leading-tight mt-1 font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  A Stronger Circle.
                </p>
              </div>
            </div>

            {/* Left Content (Z-10) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">
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

      {/* ─── 2. THE BIGGER PICTURE ──────────────────────────────────────── */}
      <section className="pt-6 sm:pt-8 pb-10 sm:pb-12 bg-white border-b border-slate-200/80">
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

      {/* ─── 3. YOU LEAD THE LEADERS WHO LEAD THE CIRCLE (HOMEPAGE DARK CONSTELLATION THEME) ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D] py-20 sm:py-24 lg:py-28 text-white border-b border-slate-800/80">
        {/* Background Glow & Atmospheric Orbs */}
        <div aria-hidden className="pointer-events-none absolute top-1/4 left-10 size-[320px] rounded-full bg-blue-600/12 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute bottom-10 right-10 size-[380px] rounded-full bg-cyan-500/8 blur-[140px]" />
        <div aria-hidden className="pointer-events-none absolute top-10 right-1/3 size-[250px] rounded-full bg-indigo-600/8 blur-[100px]" />

        {/* Constellation Star Particle Overlay */}
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

        {/* Orbit rings decorative */}
        <div className="pointer-events-none absolute -bottom-24 -left-20 size-[380px] opacity-20">
          <svg viewBox="0 0 400 400" className="size-full stroke-cyan-400/30 fill-none">
            <circle cx="100" cy="300" r="260" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="100" cy="300" r="210" strokeWidth="1" />
            <circle cx="100" cy="300" r="160" strokeWidth="1" />
            <circle cx="100" cy="90" r="3.5" fill="#38bdf8" className="animate-pulse" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3.5">
              <span className="w-5 h-px bg-cyan-400" />
              YOU LEAD THE LEADERS
              <span className="w-5 h-px bg-cyan-400" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-3">
              You lead the leaders who lead the Circle
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light">
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
                    className="p-6 sm:p-7 rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] shadow-[0_20px_50px_rgba(11,21,40,0.35)] hover:border-cyan-500/50 hover:shadow-[0_25px_60px_rgba(56,189,248,0.12)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Subtle glass reflection */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.06] via-transparent to-black/30" />

                    <div className="relative z-10">
                      <div className="size-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all shadow-inner">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Highlight Quote Card */}
            <div className="lg:col-span-4">
              <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-[#0e2246] via-[#0d1c38] to-[#091428] border border-cyan-500/30 shadow-[0_20px_50px_rgba(11,21,40,0.4)] flex flex-col justify-between relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/[0.08] via-transparent to-transparent" />
                <div className="relative z-10">
                  <div className="size-12 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 flex items-center justify-center mb-5">
                    <Quote className="size-6" />
                  </div>
                  <blockquote className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight mb-4">
                    “Nothing in business gives you this. You develop leaders you did not hire, who owe you nothing, and who will carry what you taught them into rooms you will never sit in.”
                  </blockquote>
                </div>
                <div className="relative z-10 text-xs font-bold tracking-widest text-cyan-400 uppercase pt-4 border-t border-slate-700/60">
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

      {/* ─── 9. CLOSING HERO BANNER — Royal Blue Theme (Preserving Exact Structure) ─── */}
      <section className="relative overflow-hidden bg-[#0062D2] text-white py-20 lg:py-28">
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
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-sky-200 mb-3">
                <span className="w-5 h-px bg-sky-200" />
                READY TO LEAD?
                <span className="w-5 h-px bg-sky-200" />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
                Take the next step.
              </h2>

              <p className="text-base sm:text-xl text-white/90 leading-relaxed font-light mb-8 max-w-2xl">
                Download the Unity App or apply to lead a Circle and create a lasting impact.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white hover:bg-blue-50 text-[#0062D2] px-8 py-3.5 text-sm font-semibold shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/contact?intent=leadership"
                  className="rounded-full border border-white/40 hover:border-white bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 text-sm font-semibold backdrop-blur-md transition-all inline-flex items-center gap-2"
                >
                  <span>Apply to Lead</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg">
              <p
                className="text-2xl sm:text-3xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Leaders
              </p>
              <p
                className="text-2xl sm:text-3xl text-white/80 leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Build People.
              </p>
              <p
                className="text-2xl sm:text-3xl text-white leading-tight font-medium mt-1"
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

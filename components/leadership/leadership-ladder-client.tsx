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
  MessageSquare,
  Ear,
  Brain,
  UserCheck,
  TrendingUp,
  Sprout,
  MapPin,
  Flag,
  Award,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Briefcase,
  Layers,
  ChevronDown,
  X,
  Quote,
  Compass,
  Zap,
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

// ─── What Leadership Actually Develops (6 Cards) ─────────────────────────
const WHAT_LEADERSHIP_DEVELOPS = [
  {
    icon: Users,
    title: 'Influence without authority',
    desc: 'The rarest leadership skill, and the only one that transfers everywhere.',
    detail:
      'Leading a room of thirty business owners who owe you nothing is the purest test of influence. Learn it here, and you take it back into your own company, your family, and every room you enter.',
  },
  {
    icon: MessageSquare,
    title: 'The capacity for difficult conversations',
    desc: 'Speak openly and kindly, without damaging relationships.',
    detail:
      'Telling a respected entrepreneur that their behaviour is affecting the room. Doing it kindly, directly, and in a way that keeps the relationship. Most business owners avoid this their entire careers.',
  },
  {
    icon: Ear,
    title: 'Real listening',
    desc: 'Understand what people need, often before they say it.',
    detail:
      'You cannot lead a room of thirty entrepreneurs by talking. You lead by listening with intent, discerning what each Peer needs, and creating an environment where truth surfaces easily.',
  },
  {
    icon: Brain,
    title: 'Patience with people',
    desc: 'A Circle grows at the speed of its slowest relationship.',
    detail:
      'Learning to work with human timing rather than forcing deadlines changes how you lead your own executive team. Trust cannot be accelerated through urgency.',
  },
  {
    icon: UserCheck,
    title: 'Judgement about people',
    desc: 'Choose who belongs, and have the strength to say no.',
    detail:
      'Curating a room demands discernment and courage. Learning when to say no to someone who wants in preserves the room and sharpens your instincts for hiring in your own enterprise.',
  },
  {
    icon: TrendingUp,
    title: 'A standing you did not have before',
    desc: 'The reputation that follows someone who built something for others.',
    detail:
      'Not a superficial title. The enduring respect and moral authority that follows an entrepreneur who built something for their peers and asked for nothing first.',
  },
]

// ─── The 5 Roles (Matching the Visual Cards) ─────────────────────────────
const LEADERSHIP_ROLES = [
  {
    id: 'circle-founder',
    title: 'Circle Founder',
    subtitle: 'You build the room that does not exist yet.',
    icon: Sprout,
    iconColor: '#10B981',
    iconBg: '#ECFDF5',
    image: '/images/leadership-circle-founder.jpg',
    summary:
      'Define the purpose, bring the founding Peers, set the culture and carry the first year.',
    whoYouBecome: 'The person who built something for others.',
    hardestPart: 'The first three meetings.',
    href: '/start-a-circle',
    ctaText: 'Read the Role',
    fullBio:
      'Somewhere in your city are twenty entrepreneurs who would change each other’s businesses if they were ever in the same room. A Founder convenes them. Structure starts from Day 1 — first member. The official launch at 40+ members is a celebration, not the beginning.',
  },
  {
    id: 'circle-director',
    title: 'Circle Director',
    subtitle: 'You hold the standard.',
    icon: Users,
    iconColor: '#0062D2',
    iconBg: '#EFF6FF',
    image: '/images/who-belongs-hero.jpg',
    summary:
      'The rhythm, agenda, quality of participation and the difficult conversations.',
    whoYouBecome: 'The person a room relies on.',
    hardestPart: 'Telling a respected entrepreneur they are affecting the room.',
    href: '/leadership/circle-director',
    ctaText: 'Read the Role',
    fullBio:
      'Runs the Circle month on month. Chairs the meetings, mentors the three Committee Chairs (Business Growth, Membership Experience, Events & Impact) and nine Leaders. When a Circle is healthy, a Director is doing quiet, consistent work behind it.',
  },
  {
    id: 'industry-director',
    title: 'Industry Director',
    subtitle: 'You build across Circles.',
    icon: Building2,
    iconColor: '#059669',
    iconBg: '#ECFDF5',
    image: '/images/member-faq-hero.jpg',
    summary:
      'Strengthen Circles, connect entrepreneurs, and represent your industry nationally.',
    whoYouBecome: 'The connector. The bridge. The advocate.',
    hardestPart: 'Balancing support and scrutiny.',
    href: '/leadership/industry-director',
    ctaText: 'Read the Role',
    fullBio:
      'Sector ecosystem owner for the city. Holds one industry across every Circle in your city, connecting entrepreneurs in the same sector who would never otherwise meet. Carries city-level authority, national visibility, and an ecosystem mentorship role.',
  },
  {
    id: 'regional-executive-director',
    title: 'Regional Executive Director',
    subtitle: 'You grow the community in a region.',
    icon: MapPin,
    iconColor: '#2563EB',
    iconBg: '#EFF6FF',
    image: '/images/lsr-city-sunrise.jpg',
    summary:
      'Launch new Circles, support Directors and build a thriving regional ecosystem.',
    whoYouBecome: 'The builder of ecosystems.',
    hardestPart: 'Sustaining momentum across cities.',
    href: '/leadership/executive-director',
    ctaText: 'Read the Role',
    fullBio:
      'Regional ecosystem builder carrying a territory. Four levels of stewardship: Area Executive Director, District Executive Director, State Executive Director, and Country Executive Director. You stop measuring a good month by your own business, and start measuring it by the health of the entire territory.',
  },
  {
    id: 'global-leadership',
    title: 'Global Leadership',
    subtitle: 'You take this community to the world.',
    icon: Globe2,
    iconColor: '#0284C7',
    iconBg: '#F0F9FF',
    image: '/images/navbar-earth-bg.jpg',
    summary:
      'Shape strategy, represent Peers Global globally, and build international partnerships.',
    whoYouBecome: 'A global ambassador for entrepreneurs.',
    hardestPart: 'Keeping it grounded in what matters — people.',
    href: '/contact?intent=leadership',
    ctaText: 'Explore Global Leadership',
    fullBio:
      'Global Advisors and international stewards who counsel the community itself. Senior entrepreneurs bringing decades of wisdom to where Peers Global expands and what it must never compromise.',
  },
]

// ─── The Leadership Pathway (01 to 06) ──────────────────────────────────
const LEADERSHIP_PATHWAY = [
  {
    num: '01',
    title: 'Member',
    desc: 'Where every journey begins. Sit in a Circle, give first, and earn trust.',
  },
  {
    num: '02',
    title: 'Powerhouse',
    desc: 'The leadership team executor. Serving on one of three committees (Business Growth, Membership Experience, Events & Impact) and learning to lead inside the room.',
  },
  {
    num: '03',
    title: 'Circle Director',
    desc: 'Runs the Circle month on month. Holds the culture, mentors the Chairs, and grows the room.',
  },
  {
    num: '04',
    title: 'Circle Founder',
    desc: 'Launches new Circles. Convenes entrepreneurs where no room existed and carries it through launch.',
  },
  {
    num: '05',
    title: 'Industry Director',
    desc: 'Sector ecosystem owner for the city. Holds one industry across every Circle in it.',
  },
  {
    num: '06',
    title: 'Executive Director',
    desc: 'Regional ecosystem builder. Carries an Area, District, State or Country territory.',
  },
]

// ─── What It Will Cost You ───────────────────────────────────────────────
const COSTS = [
  {
    title: 'Real, recurring time',
    desc: 'Every month, including the months when it is inconvenient. Leadership cannot be scheduled around convenience.',
  },
  {
    title: 'Difficult conversations',
    desc: 'With Peers you respect and like, addressing behaviour or attendance that needs to change for the good of the room.',
  },
  {
    title: 'Consistency when nobody is watching',
    desc: 'The quiet behind-the-scenes work that holds a Circle together is mostly invisible. It is noticed only when it stops.',
  },
  {
    title: 'Patience',
    desc: 'A Circle takes a full year to find its true rhythm. Some months you will do everything right and see little apparent movement.',
  },
]

// ─── How To Begin (5 Steps) ──────────────────────────────────────────────
const HOW_TO_BEGIN = [
  {
    step: '1',
    title: 'Become a Peer',
    desc: 'Download the Unity App and subscribe to the community platform.',
  },
  {
    step: '2',
    title: 'Join a Circle',
    desc: 'Take your seat in a local Circle, show up consistently, and start giving.',
  },
  {
    step: '3',
    title: 'Join a Committee',
    desc: 'The Powerhouse is where leadership begins. Take a functional role.',
  },
  {
    step: '4',
    title: 'Express Interest',
    desc: 'Speak openly with your Circle Director or Regional Executive Director.',
  },
  {
    step: '5',
    title: 'Have the Conversation',
    desc: 'An honest discussion about the commitment, time, and fit for your current business stage.',
  },
]

export function LeadershipLadderClient() {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false)
  const [activeRoleModal, setActiveRoleModal] = useState<any | null>(null)

  const { getMedia } = usePageMedia('leadership')
  const heroMedia = getMedia({
    sectionName: 'The Leadership Ladder',
    subModuleName: 'LEADERSHIP PATHWAY',
    subModuleId: 'sub-leadership-pathway',
    fallbackUrl: '/videos/leadership-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'The Leadership Ladder & Governance Structure',
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
            <span className="text-slate-800 font-semibold">Leadership</span>
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
                  src={heroMedia.mediaUrl || '/videos/leadership-hero-bg.mp4'}
                  poster="/images/leadership-climbers-hero.jpg"
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
                  Leaders Build People.
                </p>
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight mt-0.5 font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  People Build
                </p>
                <p
                  className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  A Brighter Tomorrow.
                </p>
              </div>
            </div>

            {/* Left Content (Z-10) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
                  <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                  <span className="brand-gradient-text">THE LEADERSHIP LADDER</span>
                  <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                </div>

                {/* Main Heading */}
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.08] mb-4">
                  Leadership
                </h1>

                {/* Subline */}
                <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug mb-3">
                  Influence is not given. It is built, one act of service at a time.
                </p>

                {/* Supporting line */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                  Every leadership role at Peers Global is held by a working business owner, and every one of them is earned.
                </p>

                {/* Dual CTAs */}
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
                  className="rounded-2xl bg-white border border-slate-200/90 p-5 flex items-center gap-4 shadow-sm hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group/stat"
                >
                  <div className="size-12 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 group-hover/stat:scale-110 transition-transform duration-300">
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

      {/* ─── 2. WHY ENTREPRENEURS TAKE THESE ROLES ────────────────────────── */}
      <section className="pt-6 sm:pt-8 pb-10 sm:pb-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="brand-gradient-text">WHY ENTREPRENEURS TAKE THESE ROLES</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-5">
                It changes who you become.
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-light">
                Not for a title. Nobody outside this community will be impressed by one.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-light">
                They take these roles because something changes in a person who becomes responsible for others. Leadership here builds patience, better listening, stronger judgement and the ability to hold difficult conversations. You become the kind of person other people follow.
              </p>

              <button
                onClick={() => setIsStoryModalOpen(true)}
                className="mt-3 rounded-full border border-slate-300 hover:border-[#0062D2] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0062D2] px-7 py-3 text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
              >
                <span>Read the Full Story</span>
                <ArrowRight className="size-4" />
              </button>
            </div>

            {/* Right Quote Card + Executive Image */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200/90 bg-[#F9FBFE] p-6 sm:p-8 shadow-sm relative overflow-hidden flex flex-col sm:flex-row gap-6 items-center">
                {/* Quote details */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="size-10 rounded-full bg-blue-100/70 text-[#0062D2] flex items-center justify-center mb-4">
                    <Quote className="size-5" />
                  </div>
                  <blockquote className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 leading-snug tracking-tight mb-4">
                    “True leadership is not a position. It is a contribution.”
                  </blockquote>
                  <div className="text-xs font-bold tracking-widest brand-gradient-text uppercase">
                    PEERS GLOBAL —
                  </div>
                </div>

                {/* Photo of leaders */}
                <div className="relative w-full sm:w-64 h-72 rounded-2xl overflow-hidden shadow-md shrink-0 border border-slate-200/60">
                  <Image
                    src="/images/leadership-entrepreneurs-meeting.jpg"
                    alt="Indian business entrepreneurs in discussion"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 text-right select-none pointer-events-none drop-shadow-md">
                    <p
                      className="text-lg text-white font-medium leading-tight"
                      style={{ fontFamily: 'var(--font-script)' }}
                    >
                      Better People,
                    </p>
                    <p
                      className="text-xl text-amber-300 font-bold leading-tight"
                      style={{ fontFamily: 'var(--font-script)' }}
                    >
                      Bigger Opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. WHAT LEADERSHIP HERE ACTUALLY DEVELOPS (6 CARDS) ───────── */}
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
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3.5">
              <span className="w-5 h-px bg-cyan-400" />
              WHAT LEADERSHIP HERE ACTUALLY DEVELOPS
              <span className="w-5 h-px bg-cyan-400" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Six permanent capabilities.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-3 font-light">
              Skills you build by serving people who owe you nothing — that you take back to your own company for life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_LEADERSHIP_DEVELOPS.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] p-7 sm:p-8 text-white shadow-[0_20px_50px_rgba(11,21,40,0.35)] hover:border-cyan-500/50 hover:shadow-[0_25px_60px_rgba(56,189,248,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden"
                >
                  {/* Subtle glass reflection */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.06] via-transparent to-black/30" />

                  <div className="size-14 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all shadow-inner">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. LEADERSHIP FOLLOWS CONTRIBUTION ────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="brand-gradient-text">LEADERSHIP FOLLOWS CONTRIBUTION</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-4">
                Earn it. Live it. Lead it.
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light">
                Nobody arrives here as a Director. Every leadership role is held by someone who first sat in a Circle as a Peer, gave consistently, and earned the trust of the entrepreneurs around them. Leadership cannot be purchased at any membership level. Charter Peers are approached first when a role opens, but the role itself is earned through contribution — recorded in your Life Impact Score and confirmed by the Peers you helped.
              </p>
            </div>

            {/* Right Badge Callout */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="rounded-3xl border border-slate-200 bg-[#F4F8FE] p-7 text-center max-w-sm flex flex-col items-center shadow-sm">
                <div className="size-14 rounded-2xl bg-blue-100 text-[#0062D2] flex items-center justify-center mb-4">
                  <Flag className="size-7" />
                </div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-slate-950 leading-snug">
                  The Peers who give the most are the Peers who lead.
                </div>
                <div className="mt-3 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  Earned Authority · Zero Entitlement
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. THE LEADERSHIP ROLES (5 CARDS MATCHING REFERENCE) ──────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">THE LEADERSHIP ROLES</span>
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
              Held by working business owners.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 font-light">
              Each one asks something different of you, and each one changes you differently.
            </p>
          </div>

          {/* 5-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {LEADERSHIP_ROLES.map((role) => {
              const Icon = role.icon
              return (
                <div
                  key={role.id}
                  className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,98,210,0.12)] hover:border-blue-300 hover:-translate-y-2 transition-all duration-300 flex flex-col group"
                >
                  {/* Card Header with Icon */}
                  <div className="p-5 pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="size-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: role.iconBg, color: role.iconColor }}
                      >
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-slate-950 leading-tight">
                          {role.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1 font-medium">
                      {role.subtitle}
                    </p>
                  </div>

                  {/* Thumbnail Image */}
                  <div className="relative w-full h-36 bg-slate-100 overflow-hidden">
                    <Image
                      src={role.image}
                      alt={role.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {role.summary}
                      </p>

                      {/* Who you become */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                        <span className="font-bold text-slate-900 block mb-0.5">
                          Who you become:
                        </span>
                        <span className="text-slate-600 leading-normal">
                          {role.whoYouBecome}
                        </span>
                      </div>

                      {/* The hardest part */}
                      <div className="text-[11px] text-slate-500 leading-normal">
                        <span className="font-semibold text-slate-700">The hardest part: </span>
                        {role.hardestPart}
                      </div>
                    </div>

                    {/* CTA Link */}
                    <div className="pt-4 mt-2 border-t border-slate-100">
                      <Link
                        href={role.href}
                        className="text-xs font-bold text-[#0062D2] hover:text-[#0052B4] inline-flex items-center gap-1 group/link"
                      >
                        <span>{role.ctaText}</span>
                        <ArrowRight className="size-3 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 6. THE LEADERSHIP PATHWAY & ARCHITECTURE ──────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: The Leadership Pathway (01 to 06) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
                <span className="w-5 h-px bg-[#0062D2]" />
                THE LEADERSHIP PATHWAY
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-tight mb-3">
                A clear path from member to ecosystem owner.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-8 font-light">
                Leadership is a journey of increasing contribution, tested and confirmed at every step.
              </p>

              {/* Pathway Rungs */}
              <div className="space-y-4">
                {LEADERSHIP_PATHWAY.map((item) => (
                  <div
                    key={item.num}
                    className="p-4 sm:p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4 group/path"
                  >
                    <div className="size-10 rounded-xl bg-blue-100/70 text-[#0062D2] font-mono text-sm font-bold flex items-center justify-center shrink-0 group-hover/path:scale-110 group-hover/path:bg-blue-200/70 transition-all duration-300">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-slate-950">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: How a Circle is Actually Led & What Every Leader Shares */}
            <div className="lg:col-span-5 space-y-8">
              {/* How a Circle is led */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white shadow-xl">
                <div className="text-xs font-bold tracking-widest text-amber-300 uppercase mb-2">
                  THE OPERATIONAL SEQUENCE
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  How a Circle is actually led
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  The pathway is an individual’s journey. Inside any single Circle, the sequence works differently:
                </p>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex gap-3">
                    <span className="size-5 rounded-full bg-blue-500/30 text-blue-300 font-bold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <p>
                      <strong className="text-white">Circle Founder comes first.</strong> They convene the room, bring the founding entrepreneurs, set the standard and carry it to launch.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="size-5 rounded-full bg-blue-500/30 text-blue-300 font-bold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <p>
                      <strong className="text-white">Circle Director takes over after launch.</strong> They run it month on month — the culture, the rhythm, the Chairs, and the growth.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700/80 text-xs text-slate-400">
                  Both roles continue. The Founder remains the Founder; the Director holds the day-to-day. Most entrepreneurs serve as Powerhouse, direct a Circle, and only then go on to found new ones.
                </div>
              </div>

              {/* What Every Leader Shares */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200">
                <h4 className="font-serif text-lg font-bold text-slate-950 mb-3">
                  What every leader shares
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>They give more than they take.</strong> Every leader was a contributor long before they held a title.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>They hold the standard when it is uncomfortable.</strong> Anyone can enforce rules when it is easy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>They build things that outlast them.</strong> A Founder’s objective is a Circle that no longer depends on them.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>They run their own business.</strong> Nobody leads full-time here; every role is built for working founders.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. WHAT IT WILL COST YOU ───────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">HONEST REALITY</span>
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              What it will cost you
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-light">
              This is not a badge of status. Anyone considering a role primarily for recognition should not take one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COSTS.map((cost, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-amber-200 hover:-translate-y-1 transition-all duration-300 flex flex-col group/cost"
              >
                <div className="size-8 rounded-lg bg-amber-50 text-amber-600 font-bold text-xs flex items-center justify-center mb-3 group-hover/cost:scale-110 group-hover/cost:bg-amber-100 transition-all duration-300">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-base font-bold text-slate-950 mb-2">
                  {cost.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cost.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500 font-medium max-w-xl mx-auto">
            Every candidate discusses the real commitment openly before any role is offered.
          </div>
        </div>
      </section>

      {/* ─── 8. THE INFLUENCE YOU BUILD HERE (DEEP REFLECTIVE BLOCK) ─────── */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F6F9FD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            <span className="brand-gradient-text">THE ENDURING RETURN</span>
            <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-6">
            The influence you build here
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-light text-left sm:text-center">
            <p>
              Influence is the ability to move people who have no obligation to follow you.
            </p>
            <p>
              You cannot buy it. You cannot be given it. It accumulates slowly, through consistency, through service, and through people watching how you behave when there is nothing in it for you.
            </p>
            <p className="font-medium text-slate-950">
              A leadership role at Peers Global is a place to build it deliberately.
            </p>
            <p className="text-slate-800">
              And when you have built it here — among entrepreneurs who owe you nothing and chose to follow anyway — you carry it into every room you enter for the rest of your life.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 9. HOW TO BEGIN (5 STEPS) ──────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">THE SEQUENCE</span>
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
              How to begin
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              Many leaders were approached rather than applying. Contribution is visible here, and people notice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {HOW_TO_BEGIN.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group/step"
              >
                <div>
                  <div className="size-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center mb-3 group-hover/step:scale-110 group-hover/step:bg-blue-700 transition-all duration-300">
                    {item.step}
                  </div>
                  <h4 className="font-serif text-base font-bold text-slate-950 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?intent=leadership"
              className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-8 py-3.5 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Apply to Lead</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/start-a-circle"
              className="rounded-full border border-slate-300 hover:border-[#0062D2] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0062D2] px-8 py-3.5 text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <span>Start a Circle</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 10. CLOSING HERO BANNER ─── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-20 lg:py-28">
        {/* Deep celestial radial gradients & luminous aura */}
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

        {/* Subtle Geometric Orbital Line Art */}
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
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-sky-200 mb-3">
                <span className="w-5 h-px bg-sky-200" />
                YOUR LEADERSHIP JOURNEY
                <span className="w-5 h-px bg-sky-200" />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
                A stronger you. A stronger tomorrow.
              </h2>

              <p className="text-base sm:text-xl text-white/90 leading-relaxed font-light mb-8 max-w-2xl">
                Download the Unity App or apply to lead and take your next step.
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

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg">
              <p
                className="text-2xl sm:text-3xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Build
              </p>
              <p
                className="text-2xl sm:text-3xl text-white/80 leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Connect
              </p>
              <p
                className="text-2xl sm:text-3xl text-white leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Collaborate
              </p>
              <p
                className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Create Impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FULL STORY MODAL (INTERACTIVE) ────────────────────────────── */}
      {isStoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-left">
            <button
              onClick={() => setIsStoryModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>

            <div className="text-xs font-bold uppercase tracking-widest brand-gradient-text mb-2">
              WHY ENTREPRENEURS TAKE THESE ROLES
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mb-4">
              Leading the Leaders
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-light">
              <p>
                Not for a title. Nobody outside this community will be impressed by one.
              </p>
              <p>
                They take them because something changes in a person who becomes responsible for others.
              </p>
              <p>
                You run a business. You lead people who report to you, who depend on you, who follow because of the position you hold. That is management, and you are probably good at it.
              </p>
              <p className="font-medium text-slate-900">
                Leading a room of accomplished entrepreneurs is a different thing entirely.
              </p>
              <p>
                Nobody in that room has to listen to you. They have their own businesses, their own success, their own opinions. You hold no authority over them. If you want them to follow a standard, show up consistently, or change how they behave, you have to earn it every single month.
              </p>
              <p className="font-medium text-[#0062D2]">
                That is influence. And it can only be built one way — by serving people who owe you nothing.
              </p>
              <p>
                The entrepreneurs who take these roles come out different at the other end. More patient. Better at listening. Harder to rattle. Capable of holding a difficult conversation without damaging a relationship.
              </p>
              <p className="font-semibold text-slate-950">
                They become the kind of person other people follow.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setIsStoryModalOpen(false)}
                className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 text-xs font-semibold"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

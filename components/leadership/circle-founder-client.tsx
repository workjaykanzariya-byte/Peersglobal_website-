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
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  BookOpen,
  Award,
  Layers,
  Calendar,
  Compass,
  Briefcase,
  Share2,
  Mic,
  Newspaper,
  Shield,
  TrendingUp,
} from 'lucide-react'
import { usePageMedia } from '@/lib/hooks/use-page-media'

const STATS = [
  { icon: Users, value: '10,000+', label: 'Entrepreneurs' },
  { icon: Building2, value: '45+', label: 'Cities' },
  { icon: Globe2, value: '25+', label: 'Countries' },
  { icon: Target, value: '1M', label: 'Lives to Impact' },
]

const STAGES = [
  { stage: '1', members: '1–5', title: 'Foundation', desc: 'Structure starts from Day 1. Run the LSR four-part format with your first members.' },
  { stage: '2', members: '6–15', title: 'Early Momentum', desc: 'Visitors, referral velocity, and the first verified collaboration success stories.' },
  { stage: '3', members: '16–25', title: 'Leadership Team Formed', desc: 'The Powerhouse forms. Three committees take ownership of growth, experience, and impact.' },
  { stage: '4', members: '26–40', title: 'Pre-Launch Phase', desc: 'Mini-conference meeting format, regional visibility, and preparation for official launch.' },
  { stage: '5', members: '40+', title: 'Official Launch', desc: 'Celebration milestone. Major event, media coverage through VyapaarJagat, and awards.' },
  { stage: '6', members: '40–50', title: 'Stabilisation', desc: 'Category depth, retention, Director handover, and enduring community culture.' },
]

const ROLE_CARRIES = [
  {
    icon: Users,
    title: 'You convene the industry',
    desc: 'Every month, a room of established entrepreneurs assembles because you called it. Twelve occasions a year on which the people who matter in your sector are in one place, at your invitation.',
  },
  {
    icon: Compass,
    title: 'You host the platform',
    desc: 'The Circle meeting is your event. You shape its focus, set its tone, and decide who stands in front of it.',
  },
  {
    icon: Award,
    title: 'You invite the leaders',
    desc: 'Senior industry figures, respected entrepreneurs and subject experts, invited as guests and speakers. That invitation comes from a position of hosting rather than asking.',
  },
  {
    icon: Newspaper,
    title: 'You carry media and visibility',
    desc: 'Coverage through VyapaarJagat.com, features across the Peers Global media ecosystem, and your Circle’s own magazine and Coffee Table Book.',
  },
  {
    icon: Globe2,
    title: 'You represent the community',
    desc: 'At regional and national gatherings, across your city, and throughout your industry sector as a recognized ecosystem convenor.',
  },
]

const WHAT_FOUNDER_DOES = [
  { title: 'Defines the Circle', desc: 'The industry or purpose, the standard, and the character of the room.' },
  { title: 'Convenes the founding members', desc: 'Complementary businesses, category exclusivity, entrepreneurs who give first.' },
  { title: 'Runs the format from Day 1', desc: 'Fixed day, fixed time, the four-part agenda, from the very first meeting.' },
  { title: 'Builds the leadership team', desc: 'By Stage 3, the Powerhouse is formed and the Circle no longer depends on you alone.' },
  { title: 'Carries it to launch', desc: 'Stage 5, at 40+ members, with media, awards and industry positioning.' },
  { title: 'Hands over the running', desc: 'A Circle Director takes the month-on-month after launch. You remain the Founder.' },
]

const WHO_THIS_IS_FOR = [
  'You have built something already — a business, a team, a reputation',
  'Entrepreneurs in your city or industry already come to you for introductions',
  'You can list fifteen serious business owners who would take your call',
  'You can hold a standard among people who outrank you commercially',
  'You finish what you begin',
]

const WHAT_COMMUNITY_PROVIDES = [
  { title: 'The structure', desc: 'The complete Circle model, the four-part agenda, the seat system, roles and standards.' },
  { title: 'The Circle Founder Playbook', desc: 'The full build guide, plus a 30-day quick-start covering exactly what to do in your first month.' },
  { title: 'The systems', desc: 'The Unity App, member management, contribution tracking and the Peer directory from Day 1.' },
  { title: 'Founder induction', desc: 'How to convene the founding group, run the agenda, and handle what every new Circle encounters.' },
  { title: 'Regional support', desc: 'An Executive Director alongside you, and access to Founders who have already done it.' },
  { title: 'The platform and brand', desc: 'You convene under Peers Global, with its credibility and national reach.' },
  { title: 'Media and visibility', desc: 'Coverage through VyapaarJagat.com and the wider media ecosystem.' },
]

const WHAT_YOU_BRING = [
  { title: 'Standing in your market', desc: 'Your credibility is what brings the founding entrepreneurs in.' },
  { title: 'Leadership', desc: 'Someone holds the standard, and in the first months that is you.' },
  { title: 'Consistency', desc: 'Every month, from Day 1 without exception.' },
  { title: 'Judgement', desc: 'About who belongs in the room you are building, and who does not.' },
]

const HOW_TO_BECOME = [
  { step: '1', title: 'Become a Peer', desc: 'Peers Global membership is required.' },
  { step: '2', title: 'Apply', desc: 'Your business, your city or industry, and the Circle you intend to build.' },
  { step: '3', title: 'Meet an Executive Director', desc: 'An honest conversation about the opportunity and the role.' },
  { step: '4', title: 'Complete Founder Induction', desc: 'Including the 30-day quick-start guide.' },
  { step: '5', title: 'Hold Your First Meeting', desc: 'With your first members. Structure from Day 1.' },
  { step: '6', title: 'Build Through Stages', desc: 'To official launch celebration at 40+.' },
]

const FAQ = [
  {
    q: 'Do I need to be a Peer already?',
    a: 'Yes. Peers Global membership is required.',
  },
  {
    q: 'How many entrepreneurs do I need to start?',
    a: 'Your first meeting can be five people. A Circle starts on Day 1 with your first member. Structure begins immediately. Official launch happens at 40+, and it is a celebration rather than a beginning.',
  },
  {
    q: 'How long from application to first meeting?',
    a: 'Between five days and two months, depending on how quickly you convene your first founding members.',
  },
  {
    q: 'How long to official launch?',
    a: 'Roughly two to four months for a Founder working consistently. Some take longer, and take stronger Circles to launch for it.',
  },
  {
    q: 'Can I found a Circle while running my business?',
    a: 'Yes. Every Circle Founder is a working business owner. The role is designed around active founders.',
  },
  {
    q: 'Can I start a Circle in an industry that exists elsewhere?',
    a: 'Yes. An Industry Circle in one city is entirely separate from the same industry in another.',
  },
  {
    q: 'What happens after launch?',
    a: 'A Circle Director takes on the month-on-month running while you continue as Founder. Many Founders go on to build a second Circle or move into wider regional leadership.',
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
                  Build the Room.
                </p>
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight mt-0.5 font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Convene the Leaders.
                </p>
                <p
                  className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Shape the Market.
                </p>
              </div>
            </div>

            {/* Left Content (Z-10) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
                  <span className="w-5 h-px bg-[#0062D2]" />
                  FLAGSHIP ROLE
                  <span className="w-5 h-px bg-[#0062D2]" />
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.08] mb-4">
                  Circle Founder
                </h1>

                <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug mb-3">
                  Leading the leaders.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                  Every entrepreneur in your Circle is already a leader in their own right. Convening them, and holding their respect, is a different order of leadership entirely.
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

      {/* ─── 2. THE MOST SIGNIFICANT ROLE ──────────────────────────────── */}
      <section className="pt-6 sm:pt-8 pb-10 sm:pb-12 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left sm:text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
            <span className="w-5 h-px bg-[#0062D2]" />
            CONVENE, DO NOT JOIN
            <span className="w-5 h-px bg-[#0062D2]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-6">
            The most significant role in this community
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-light text-left">
            <p>
              A Circle Founder does not join a room. They create one.
            </p>
            <p>
              You bring together the entrepreneurs of an industry or a city — accomplished business owners who did not know each other, who now meet every month because you convened them. You set the standard they operate by. You decide who belongs. You host the platform where their businesses grow.
            </p>
            <p className="font-medium text-slate-950">
              This is the role from which everything at Peers Global begins. No Circle exists without a Founder. No city has a community until someone builds the first room in it.
            </p>
            <p>
              It is also the most visible position an entrepreneur can hold in their own market.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 3. THE ROOM NOBODY HAS BUILT & DAY 1 PRINCIPLE ────────────── */}
      <section className="py-16 lg:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* The room nobody has built */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-2">
                  THE OPPORTUNITY
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mb-4">
                  The room nobody has built
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light mb-4">
                  Somewhere in your city there are twenty entrepreneurs who would change each other’s businesses if they were ever in the same room.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                  They are not. They pass each other at events, exchange cards, and go back to solving the same problems separately. The ecosystem exists. The room does not.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 font-serif text-base font-bold text-slate-950">
                A Circle Founder is the person who builds it.
              </div>
            </div>

            {/* Circle starts from Day 1 */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0062D2] to-[#004A9E] text-white shadow-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-2">
                  CORE PRINCIPLE
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                  Circle starts from Day 1
                </h3>
                <blockquote className="font-serif text-lg sm:text-xl font-medium leading-snug mb-4 text-blue-50 italic">
                  “Circle doesn’t start at 25 members. Circle starts from Day 1 — first member. Even if three people are there, it is still a Circle. Structure starts from Day 1.”
                </blockquote>
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                  You do not wait until you have a full room to begin. You run the format from your first meeting with your first members, and the room grows around a standard that was there from the beginning.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-blue-400/40 text-xs font-semibold text-amber-300 uppercase tracking-wider">
                The official launch is a celebration, not the start.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. THE SIX STAGES OF CIRCLE GROWTH ─────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
              <span className="w-5 h-px bg-[#0062D2]" />
              THE GROWTH SEQUENCE
              <span className="w-5 h-px bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
              Six stages from first member to launch.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 font-light">
              Structure begins immediately. Official launch happens at 40+ as a celebration of the community already built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STAGES.map((s) => (
              <div
                key={s.stage}
                className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm hover:border-blue-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="size-8 rounded-full bg-blue-100 text-[#0062D2] text-xs font-bold flex items-center justify-center font-mono">
                      0{s.stage}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      {s.members} Members
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-950 mb-1">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. WHAT THE ROLE CARRIES (HOMEPAGE DARK CONSTELLATION THEME) ─── */}
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
              AUTHORITY & REACH
              <span className="w-5 h-px bg-cyan-400" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              What the role carries
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-3 font-light">
              Not through advertising, but as the convenor of something that matters in your market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROLE_CARRIES.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] p-7 sm:p-8 text-white shadow-[0_20px_50px_rgba(11,21,40,0.35)] hover:border-cyan-500/50 hover:shadow-[0_25px_60px_rgba(56,189,248,0.12)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle glass reflection */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.06] via-transparent to-black/30" />

                  <div className="relative z-10">
                    <div className="size-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all shadow-inner">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 6. WHAT A CIRCLE FOUNDER DOES & WHO THIS IS FOR ───────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: What a Circle Founder does */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-1">
                <span className="w-5 h-px bg-[#0062D2]" />
                OPERATIONAL EXECUTION
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                What a Circle Founder does
              </h2>

              <div className="space-y-4 pt-2">
                {WHAT_FOUNDER_DOES.map((act, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex items-start gap-3">
                    <span className="size-6 rounded-full bg-blue-100 text-[#0062D2] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-serif text-base font-bold text-slate-950">
                        {act.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                        {act.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Who this role is for & is not for */}
            <div className="lg:col-span-5 space-y-6">
              {/* Who this is for */}
              <div className="p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-slate-950 mb-3">
                  This role is for you if:
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {WHO_THIS_IS_FOR.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who this is not for */}
              <div className="p-7 rounded-3xl bg-rose-50/50 border border-rose-200 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-rose-950 mb-2">
                  This is NOT for you if:
                </h3>
                <p className="text-xs sm:text-sm text-rose-900 leading-relaxed font-light">
                  You are looking for a title, a customer list, or a channel to sell into. A Circle led by someone selling to it does not survive its first year, and the room recognises it long before the Founder does.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. WHAT THE COMMUNITY PROVIDES & WHAT YOU BRING ────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* What community provides */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-slate-950 mb-6">
                What the community provides
              </h3>
              <div className="space-y-4">
                {WHAT_COMMUNITY_PROVIDES.map((item, idx) => (
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
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
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

      {/* ─── 8. HOW TO BECOME A CIRCLE FOUNDER (6 STEPS) ────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
              <span className="w-5 h-px bg-[#0062D2]" />
              THE PIPELINE
              <span className="w-5 h-px bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
              How to become a Circle Founder
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 font-light">
              From application to your first meeting, supported by experienced Founders and regional Executive Directors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {HOW_TO_BECOME.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex flex-col justify-between"
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
              href="/start-a-circle"
              className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Apply to Found a Circle</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 9. COMMON QUESTIONS (FAQ) ─────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
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
                  className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm transition-colors"
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
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed font-light border-t border-slate-100">
                      {item.a}
                    </div>
                  )}
                </div>
              )
            })}
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
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-sky-200 mb-3">
                <span className="w-5 h-px bg-sky-200" />
                BUILD YOUR CIRCLE
                <span className="w-5 h-px bg-sky-200" />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
                There is a room your city needs and does not have.
              </h2>

              <p className="text-base sm:text-xl text-white/90 leading-relaxed font-light mb-8 max-w-2xl">
                You already know who should be in it.
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
                  href="/start-a-circle"
                  className="rounded-full border border-white/40 hover:border-white bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 text-sm font-semibold backdrop-blur-md transition-all inline-flex items-center gap-2"
                >
                  <span>Apply to Found a Circle</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg">
              <p
                className="text-2xl sm:text-3xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Build Your Business.
              </p>
              <p
                className="text-2xl sm:text-3xl text-white/80 leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Build Your Relationships.
              </p>
              <p
                className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Build Your Circle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

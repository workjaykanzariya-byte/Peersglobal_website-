import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/sections.css'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  ArrowRight,
  Users,
  User,
  UserPlus,
  Shield,
  Megaphone,
  Star,
  Check,
  Heart,
  Lock,
  MessageSquare,
  HandMetal,
  Building2,
  Award,
  Globe,
  Compass,
  ChevronRight,
  Layers,
  Sparkles,
} from 'lucide-react'

export const metadata: Metadata = {
  title: "The Citizens | The People Who Build Peers Global",
  description:
    "A community is not built by an organisation. It is built by the people inside it. Explore the five roles that carry Peers Global forward and the leadership pathway from Peer to leader.",
  keywords: [
    'The Citizens',
    'Peers Global Citizens',
    'Peers Global Leadership',
    'Peer',
    'Circle Founder',
    'Circle Director',
    'Industry Director',
    'Ambassador',
    'Global Advisor',
  ],
}

// 7 Stages in "The path from Peer to leader"
const LEADERSHIP_PATHWAY = [
  {
    number: '01',
    role: 'Peer',
    desc: 'Their Circle, their relationships, their contribution.',
    numBg: 'bg-[#0066FF] text-white',
    badgeColor: 'bg-blue-50 text-[#0066FF] border-blue-200/80',
    cornerWave: 'from-blue-200/50 via-blue-50/30 to-transparent',
    icon: User,
  },
  {
    number: '02',
    role: 'Circle Founder',
    desc: 'A new room, built where none existed.',
    numBg: 'bg-[#9333EA] text-white',
    badgeColor: 'bg-purple-50 text-[#9333EA] border-purple-200/80',
    cornerWave: 'from-purple-200/50 via-purple-50/30 to-transparent',
    icon: Users,
  },
  {
    number: '03',
    role: 'Circle Director',
    desc: 'The rhythm and standard of a Circle.',
    numBg: 'bg-[#00B894] text-white',
    badgeColor: 'bg-emerald-50 text-[#00B894] border-emerald-200/80',
    cornerWave: 'from-emerald-200/50 via-emerald-50/30 to-transparent',
    icon: Award,
  },
  {
    number: '04',
    role: 'Industry Director',
    desc: 'An industry across the whole community.',
    numBg: 'bg-[#F59E0B] text-white',
    badgeColor: 'bg-amber-50 text-[#F59E0B] border-amber-200/80',
    cornerWave: 'from-amber-200/50 via-amber-50/30 to-transparent',
    icon: Building2,
  },
  {
    number: '05',
    role: 'Regional Executive Director',
    desc: 'A territory of cities and Circles.',
    numBg: 'bg-[#6366F1] text-white',
    badgeColor: 'bg-indigo-50 text-[#6366F1] border-indigo-200/80',
    cornerWave: 'from-indigo-200/50 via-indigo-50/30 to-transparent',
    icon: Layers,
  },
  {
    number: '06',
    role: 'Ambassador',
    desc: 'The reputation of Peers Global outside it.',
    numBg: 'bg-[#EF4444] text-white',
    badgeColor: 'bg-rose-50 text-[#EF4444] border-rose-200/80',
    cornerWave: 'from-rose-200/50 via-rose-50/30 to-transparent',
    icon: Megaphone,
  },
  {
    number: '07',
    role: 'Global Advisor',
    desc: 'The long-term direction of the community.',
    numBg: 'bg-[#0EA5E9] text-white',
    badgeColor: 'bg-sky-50 text-[#0EA5E9] border-sky-200/80',
    cornerWave: 'from-sky-200/50 via-sky-50/30 to-transparent',
    icon: Compass,
  },
]

// 5 Core Standards
const SHARED_STANDARDS = [
  {
    title: 'Give first.',
    desc: 'Contribution comes before any ask. Always.',
    icon: HandMetal,
  },
  {
    title: 'Show up.',
    desc: 'Presence is the foundation of trust, and trust is the foundation of everything else.',
    icon: Users,
  },
  {
    title: 'Tell the truth.',
    desc: 'Including when it is uncomfortable, and especially to a Peer who needs to hear it.',
    icon: MessageSquare,
  },
  {
    title: 'Protect the room.',
    desc: 'What is shared inside a Circle stays inside it.',
    icon: Lock,
  },
  {
    title: 'Carry the culture.',
    desc: 'Every Peer is responsible for the experience of every other Peer.',
    icon: Heart,
  },
]

export default function TheCitizensPage() {
  return (
    <div className="min-h-screen bg-[#030B1C] text-slate-900 selection:bg-blue-600 selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO (Master Full Page Dark Video Banner)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-14 sm:pb-20 border-b border-slate-800">
        {/* Full Bleed Hero Video Background */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            poster="/images/circles-hero-new.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-slate-400">Our World</span>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-white font-semibold">The Citizens</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[440px] lg:min-h-[480px]">
            {/* Left Content */}
            <div className="lg:col-span-8 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>THE PEOPLE WHO BUILD PEERS GLOBAL</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white font-serif">
                  The{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Citizens.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  A community is not built by an organisation. It is built by the people inside it. Every role at Peers Global is held by an entrepreneur.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="/membership"
                  size="default"
                  className="font-semibold"
                >
                  Become a Peer
                </GalaxyButton>

                <GalaxyButton
                  href="/leadership"
                  variant="transparent"
                  size="default"
                  className="font-medium"
                >
                  Explore Leadership
                </GalaxyButton>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg pt-6 border-t border-white/15">
                {[
                  { icon: Users, value: '10,000+', label: 'Active Citizens' },
                  { icon: Award, value: '7 Stages', label: 'Leadership Pathway' },
                  { icon: Globe, value: '100%', label: 'Entrepreneur-Led' },
                ].map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.label} className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
                      <div className="size-9 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sky-300 shrink-0">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <div className="font-bold text-base sm:text-lg text-white leading-none">{s.value}</div>
                        <div className="text-[10px] text-slate-300 font-medium mt-1 leading-tight">{s.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Cursive Script Highlights */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-2xl sm:text-3xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Real People
              </p>
              <p
                className="text-3xl sm:text-4xl text-white leading-tight font-bold"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Real Business
              </p>
              <p
                className="text-3xl sm:text-4xl text-sky-400 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                A Stronger Tomorrow
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2: "BUILT BY ENTREPRENEURS, FOR ENTREPRENEURS"
          Clean White Contrast Section
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent text-xs font-bold tracking-[0.25em] uppercase mb-4">
            <span>BUILT BY ENTREPRENEURS, FOR ENTREPRENEURS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mt-2">

            {/* Left 7 cols: Headline and Narrative */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-8">
                Built by entrepreneurs, <br />
                for entrepreneurs
              </h2>

              <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed font-light">
                <p>
                  There is no head office issuing instructions to this community. Every Circle that exists was started by an entrepreneur who decided to start it. Every city grew because someone chose to build it. Every standard is held by people who run their own businesses and understand exactly what is at stake for the person sitting across from them.
                </p>
                <p>
                  That is deliberate. An entrepreneur listens to another entrepreneur differently. There is no explaining required, no translation, no polite nodding from someone who has never carried the same weight.
                </p>
                <p className="font-medium text-slate-800">
                  Five roles carry Peers Global forward. Each one is earned, not purchased. Each one is held by someone who chose to give more than they take.
                </p>
              </div>
            </div>

            {/* Right 5 cols: Typographic Manifesto Callout with Left Accent Bar */}
            <div className="lg:col-span-5 flex lg:justify-end lg:pt-14">
              <div className="border-l-4 border-[#0062D2] pl-6 sm:pl-8 py-2 max-w-md">
                <p className="text-xl sm:text-2xl font-bold tracking-[0.12em] text-[#0062D2] uppercase leading-[1.35] font-sans">
                  ENTREPRENEURS <br />
                  BUILD PEOPLE. <br />
                  PEOPLE BUILD <br />
                  COMMUNITIES.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: THE 5 ROLES CARDS GRID
          Matches exact card layouts (01 to 05)
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top 3 Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">

            {/* CARD 01: THE PEER */}
            <div className="relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              {/* Big Watermark Number with Brand Gradient */}
              <div className="absolute top-4 right-6 text-6xl sm:text-7xl font-extrabold font-sans select-none pointer-events-none text-transparent bg-clip-text bg-gradient-to-br from-[#1D4ED8]/25 to-[#E11D48]/20 transition-all group-hover:from-[#1D4ED8]/40 group-hover:to-[#E11D48]/35">
                01
              </div>

              <div>
                {/* Clean Gradient Icon without Border */}
                <div className="size-13 rounded-2xl bg-gradient-to-br from-blue-500/10 to-rose-500/10 mb-6 flex items-center justify-center">
                  <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="iconGrad01" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="url(#iconGrad01)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9" cy="7" r="4" stroke="url(#iconGrad01)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="url(#iconGrad01)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#iconGrad01)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1">
                  THE PEER
                </h3>
                <div className="text-sm font-semibold text-[#0062D2] mb-4">
                  The heart of everything
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">
                  Everything at Peers Global begins with the Peer. A Peer is an entrepreneur or business leader who believes in building trusted relationships, contributing to others, and growing together.
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 text-sm text-slate-700 mb-8">
                  {[
                    'Belongs to a Trusted Circle',
                    'Gives before asking',
                    'Shares what they know',
                    'Makes the introduction',
                    'Tells the truth',
                    'Celebrates other Peers',
                    'Carries the culture',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="size-1.5 rounded-full bg-[#0062D2] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-serif italic text-sm text-slate-800 font-medium mb-6 pt-4 border-t border-slate-100">
                  &ldquo;Peers are Partners in Business and Friends in Life.&rdquo;
                </p>

                <Link
                  href="/membership"
                  className="w-full rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white py-3 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Become a Peer</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* CARD 02: THE CIRCLE FOUNDER */}
            <div className="relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              {/* Big Watermark Number with Brand Gradient */}
              <div className="absolute top-4 right-6 text-6xl sm:text-7xl font-extrabold font-sans select-none pointer-events-none text-transparent bg-clip-text bg-gradient-to-br from-[#1D4ED8]/25 to-[#E11D48]/20 transition-all group-hover:from-[#1D4ED8]/40 group-hover:to-[#E11D48]/35">
                02
              </div>

              <div>
                {/* Clean Gradient Icon without Border */}
                <div className="size-13 rounded-2xl bg-gradient-to-br from-blue-500/10 to-rose-500/10 mb-6 flex items-center justify-center">
                  <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="iconGrad02" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="url(#iconGrad02)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9" cy="7" r="4" stroke="url(#iconGrad02)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="19" y1="8" x2="19" y2="14" stroke="url(#iconGrad02)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="22" y1="11" x2="16" y2="11" stroke="url(#iconGrad02)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1">
                  THE CIRCLE FOUNDER
                </h3>
                <div className="text-sm font-semibold text-[#0062D2] mb-4">
                  The entrepreneur who builds the room
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">
                  Every Circle exists because one person decided to create it. A Circle Founder saw that the right room did not exist in their city or industry, and chose to build it rather than wait for someone else.
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 text-sm text-slate-700 mb-6">
                  {[
                    'Starts a Circle where none existed',
                    'Brings the first group together',
                    'Sets the culture from day one',
                    'Composes the Circle deliberately',
                    'Carries the Peers Global standard',
                    'Builds something that outlasts them',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="size-1.5 rounded-full bg-[#0062D2] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-slate-500 leading-relaxed mb-6 pt-3 border-t border-slate-100">
                  We provide the structure, systems, training, technology and support. You provide the leadership and the first group of the right people.
                </p>
              </div>

              <div>
                <Link
                  href="/leadership"
                  className="w-full rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white py-3 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Start a Circle</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* CARD 03: THE DIRECTORS */}
            <div className="relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              {/* Big Watermark Number with Brand Gradient */}
              <div className="absolute top-4 right-6 text-6xl sm:text-7xl font-extrabold font-sans select-none pointer-events-none text-transparent bg-clip-text bg-gradient-to-br from-[#1D4ED8]/25 to-[#E11D48]/20 transition-all group-hover:from-[#1D4ED8]/40 group-hover:to-[#E11D48]/35">
                03
              </div>

              <div>
                {/* Clean Gradient Icon without Border */}
                <div className="size-13 rounded-2xl bg-gradient-to-br from-blue-500/10 to-rose-500/10 mb-6 flex items-center justify-center">
                  <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="iconGrad03" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="url(#iconGrad03)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1">
                  THE DIRECTORS
                </h3>
                <div className="text-sm font-semibold text-[#0062D2] mb-4">
                  The entrepreneurs who hold the standard
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">
                  Directors carry the community. They protect its culture, hold its rhythm, and make sure the promise on this website is the experience a Peer actually has.
                </p>

                {/* Sub-Roles Nested List */}
                <div className="space-y-4 mb-8">

                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="size-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Circle Director</div>
                      <div className="text-xs text-slate-500 leading-normal">
                        Runs the life of a Circle, holds meeting rhythm, and supports every Peer.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="size-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Industry Director</div>
                      <div className="text-xs text-slate-500 leading-normal">
                        Holds one industry across the community, connects Peers and opens opportunities.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Layers className="size-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Regional Executive Director</div>
                      <div className="text-xs text-slate-500 leading-normal">
                        Carries a territory, supports Circles and cities, and maintains consistency.
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div>
                <Link
                  href="/leadership"
                  className="w-full rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white py-3 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Leadership Roles</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom 2 Cards Row: AMBASSADORS & ADVISORS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

            {/* CARD 04: THE AMBASSADORS (5 cols) */}
            <div className="lg:col-span-5 relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              {/* Big Watermark Number with Brand Gradient */}
              <div className="absolute top-4 right-6 text-6xl sm:text-7xl font-extrabold font-sans select-none pointer-events-none text-transparent bg-clip-text bg-gradient-to-br from-[#1D4ED8]/25 to-[#E11D48]/20 transition-all group-hover:from-[#1D4ED8]/40 group-hover:to-[#E11D48]/35">
                04
              </div>

              <div>
                {/* Clean Gradient Icon without Border */}
                <div className="size-13 rounded-2xl bg-gradient-to-br from-blue-500/10 to-rose-500/10 mb-6 flex items-center justify-center">
                  <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="iconGrad04" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path d="m3 11 18-5v12L3 14v-3z" stroke="url(#iconGrad04)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" stroke="url(#iconGrad04)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1">
                  THE AMBASSADORS
                </h3>
                <div className="text-sm font-semibold text-[#0062D2] mb-4">
                  The entrepreneurs who open doors
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">
                  Ambassadors carry Peers Global outward. They represent the community, introduce the right entrepreneurs, and bring in people who will strengthen it.
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 text-sm text-slate-700 mb-8">
                  {[
                    'Represents Peers Global',
                    'Introduces the right entrepreneurs',
                    'Connects with organisations and partners',
                    'Carries the culture outward',
                    'Grows the community by relationship',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="size-1.5 rounded-full bg-[#0062D2] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href="/leadership"
                  className="w-full rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white py-3 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Become an Ambassador</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* CARD 05: THE ADVISORS (7 cols) */}
            <div className="lg:col-span-7 relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              {/* Big Watermark Number with Brand Gradient */}
              <div className="absolute top-4 right-6 text-6xl sm:text-7xl font-extrabold font-sans select-none pointer-events-none text-transparent bg-clip-text bg-gradient-to-br from-[#1D4ED8]/25 to-[#E11D48]/20 transition-all group-hover:from-[#1D4ED8]/40 group-hover:to-[#E11D48]/35">
                05
              </div>

              <div>
                {/* Clean Gradient Icon without Border */}
                <div className="size-13 rounded-2xl bg-gradient-to-br from-blue-500/10 to-rose-500/10 mb-6 flex items-center justify-center">
                  <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="iconGrad05" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="url(#iconGrad05)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1">
                  THE ADVISORS
                </h3>
                <div className="text-sm font-semibold text-[#0062D2] mb-4">
                  The entrepreneurs who guide the whole
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">
                  Global Advisers are senior entrepreneurs and business leaders who counsel the community. They do not run a Circle. They guide direction and bring decades of experience to the decisions that shape where Peers Global goes next.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-8">
                  {/* Bullets (7 cols) */}
                  <div className="md:col-span-8">
                    <ul className="space-y-2.5 text-sm text-slate-700">
                      {[
                        'Perspective on long-term direction',
                        'Guidance to Directors and Founders',
                        'Experience from global markets and industries',
                        'Mentorship to Peers building something significant',
                        'A steady hand on culture',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="size-1.5 rounded-full bg-[#0062D2] mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Callout Quote (4 cols) */}
                  <div className="md:col-span-4 border-l-2 border-[#0062D2] pl-4 py-1">
                    <p className="text-sm font-semibold text-slate-800 leading-snug">
                      Experience today. <br />
                      <span className="text-[#0062D2]">A stronger tomorrow.</span>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  href="/leadership"
                  className="w-full sm:w-auto inline-flex rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all items-center justify-center gap-2"
                >
                  <span>Meet Our Advisors</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* =========================================================================
          SECTION 4: "THE PATH FROM PEER TO LEADER" (PROGRESSION PIPELINE)
          Matches exact horizontal 7 stages with connector arrows
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#FAFCFF] text-slate-900 border-t border-slate-200/80 overflow-hidden">
        {/* Decorative Top-Left & Bottom-Right Soft Fluid Waves */}
        <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-sky-200/40 via-blue-100/20 to-transparent rounded-full blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tl from-indigo-200/40 via-purple-100/20 to-transparent rounded-full blur-3xl" />

        {/* Decorative Dotted Matrix Grids */}
        <div aria-hidden className="pointer-events-none absolute top-12 right-8 hidden lg:grid grid-cols-4 gap-1.5 opacity-40 select-none">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="size-1 rounded-full bg-sky-400" />
          ))}
        </div>
        <div aria-hidden className="pointer-events-none absolute bottom-12 left-8 hidden lg:grid grid-cols-4 gap-1.5 opacity-40 select-none">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="size-1 rounded-full bg-sky-400" />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent text-xs font-bold tracking-[0.25em] uppercase mb-4">
            <span>FROM CONTRIBUTION TO LEADERSHIP</span>
          </div>

          {/* Title in Editorial Serif */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-slate-900 tracking-tight leading-[1.18] mb-4">
            The path from Peer to leader
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-14">
            Nobody arrives here as a Director. Every leadership role is held by someone who first sat in a Circle as a Peer, contributed consistently, and earned the trust of the people around them.
          </p>

          {/* 7-Stage Pipeline Progression Cards with Exact Signature Animated Border Effect */}
          <div className="relative mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3.5 lg:gap-3 items-stretch">
              {LEADERSHIP_PATHWAY.map((item, idx) => {
                return (
                  <div key={idx} className="relative flex items-stretch">

                    {/* Signature Animated Glow Card Structure */}
                    <div className="animated-glow-card group w-full" tabIndex={0} role="article">
                      {/* SVG Animated Tracing Border */}
                      <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <defs>
                          <linearGradient id={`citizenCardGrad${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1D4ED8" />
                            <stop offset="50%" stopColor="#6366F1" />
                            <stop offset="100%" stopColor="#E11D48" />
                          </linearGradient>
                        </defs>
                        <path
                          className="animated-border-path"
                          style={{ stroke: `url(#citizenCardGrad${idx})` }}
                          d="M 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 L 0.8 6 Q 0.8 0.8 6 0.8 Z"
                        />
                      </svg>

                      {/* Card Content Interior */}
                      <div className="p-4 sm:p-5 flex flex-col items-center text-center">
                        {/* Centered Step Number with Brand Linear Gradient */}
                        <div className="self-center relative z-10 mb-2.5">
                          <span className="text-xs font-black tracking-widest bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200 inline-block">
                            {item.number}
                          </span>
                        </div>

                        {/* Center Clean Gradient Icon Squircle */}
                        <div className="relative z-10 size-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-rose-500/10 flex items-center justify-center mb-3.5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-blue-500/15">
                          <svg className="size-5.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id={`pathGrad${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1D4ED8" />
                                <stop offset="100%" stopColor="#E11D48" />
                              </linearGradient>
                            </defs>
                            {idx === 0 && (
                              <>
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="7" r="4" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </>
                            )}
                            {idx === 1 && (
                              <>
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="9" cy="7" r="4" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="19" y1="8" x2="19" y2="14" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="22" y1="11" x2="16" y2="11" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </>
                            )}
                            {idx === 2 && (
                              <>
                                <circle cx="12" cy="8" r="6" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </>
                            )}
                            {idx === 3 && (
                              <>
                                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 6h4" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 10h4" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 14h4" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 18h4" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </>
                            )}
                            {idx === 4 && (
                              <>
                                <polygon points="12 2 2 7 12 12 22 7 12 2" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <polyline points="2 17 12 22 22 17" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <polyline points="2 12 12 17 22 12" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </>
                            )}
                            {idx === 5 && (
                              <>
                                <path d="m3 11 18-5v12L3 14v-3z" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </>
                            )}
                            {idx === 6 && (
                              <>
                                <circle cx="12" cy="12" r="10" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" stroke={`url(#pathGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </>
                            )}
                          </svg>
                        </div>

                        {/* Role Title with Hover Gradient Accent */}
                        <h4 className="relative z-10 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200 mb-1.5 leading-snug">
                          {item.role}
                        </h4>

                        {/* Role Description */}
                        <p className="relative z-10 text-[11px] text-slate-500 font-normal leading-relaxed mt-auto pt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Quote Box with Large Peach Quote Mark */}
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            {/* Peach Quotation Mark */}
            <div className="text-5xl text-orange-300 font-serif leading-none select-none mb-2.5 opacity-90">
              &ldquo;
            </div>

            <p className="font-serif italic text-sm sm:text-base text-slate-700 leading-relaxed mb-8 max-w-xl">
              &ldquo;Leadership here follows contribution. <br />
              <span className="font-medium text-slate-900">
                The Peers who give the most are the Peers who lead. It is the only ladder we have, and it is open to everyone who joins.
              </span>&rdquo;
            </p>

            {/* Blue Pill CTA Button */}
            <GalaxyButton
              href="/leadership"
              size="default"
              className="font-semibold"
            >
              Explore the Leadership Path
            </GalaxyButton>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5: "WHAT EVERY CITIZEN SHARES" (OUR SHARED STANDARD)
          Matches exact 5 cards
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent text-xs font-bold tracking-[0.25em] uppercase mb-4">
            <span>OUR SHARED STANDARD</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-3">
            What every citizen shares
          </h2>

          <div className="text-sm font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent uppercase tracking-wider mb-3">
            Different roles. One standard.
          </div>

          <p className="text-sm text-slate-600 max-w-xl mx-auto font-light mb-14">
            Whatever a person holds in this community, the same things are expected of them.
          </p>

          {/* 5 Cards Row with Signature Animated Border Tracing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
            {SHARED_STANDARDS.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="relative flex items-stretch">
                  <div
                    className="animated-glow-card group w-full"
                    tabIndex={0}
                    role="article"
                  >
                    {/* SVG Animated Tracing Border */}
                    <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                      <defs>
                        <linearGradient id={`standardCardGrad${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="50%" stopColor="#6366F1" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <path
                        className="animated-border-path"
                        style={{ stroke: `url(#standardCardGrad${idx})` }}
                        d="M 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 L 0.8 6 Q 0.8 0.8 6 0.8 Z"
                      />
                    </svg>

                    {/* Card Content Interior */}
                    <div className="p-6 flex flex-col items-center text-center">
                      <div className="size-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-rose-500/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-blue-500/15 transition-all duration-300">
                        <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id={`standardIconGrad${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#1D4ED8" />
                              <stop offset="100%" stopColor="#E11D48" />
                            </linearGradient>
                          </defs>
                          {idx === 0 && (
                            /* Give first (Hand / Contribution) */
                            <>
                              <path d="M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.5" stroke={`url(#standardIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M14 11V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v3" stroke={`url(#standardIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M10 10.5V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8.5" stroke={`url(#standardIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M6 11.5a2 2 0 0 0-2 2v1a7 7 0 0 0 7 7h3a7 7 0 0 0 7-7v-3.5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2" stroke={`url(#standardIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                          )}
                          {idx === 1 && (
                            /* Show up (Users / Presence) */
                            <>
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke={`url(#standardIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="9" cy="7" r="4" stroke={`url(#standardIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke={`url(#standardIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke={`url(#standardIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                          )}
                          {idx === 2 && (
                            /* Tell the truth (Message / Authentic dialogue) */
                            <>
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke={`url(#standardIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <line x1="9" y1="10" x2="15" y2="10" stroke={`url(#standardIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                          )}
                          {idx === 3 && (
                            /* Protect the room (Lock / Confidentiality) */
                            <>
                              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke={`url(#standardIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke={`url(#standardIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                          )}
                          {idx === 4 && (
                            /* Carry the culture (Heart / Responsibility) */
                            <>
                              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" stroke={`url(#standardIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                          )}
                        </svg>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-500 font-normal leading-relaxed mt-auto pt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6: CLOSING HERO ("A COMMUNITY IS ONLY AS STRONG...")
          ========================================================================= */}
      <ClosingCtaSection
        eyebrow="THE CITIZENS"
        title={
          <>
            A community is only as strong{' '}
            <span className="block sm:inline">as the people who choose to carry it.</span>
          </>
        }
        subtitle="Build Your Business. Build Your Relationships. Build Your Circle."
        description="Peers Global — World's First Community of Collaboration. Peers are Partners in Business and Friends in Life."
        primaryButtonText="BECOME A PEER"
        primaryButtonHref="/membership"
        secondaryButtonText="START A CIRCLE"
        secondaryButtonHref="/leadership"
      />

    </div>
  )
}

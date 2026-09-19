import type { Metadata } from 'next'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
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
          SECTION 1: HERO ("THE PEOPLE WHO BUILD PEERS GLOBAL" & "THE CITIZENS")
          With Cinematic Earth Background Video
          ========================================================================= */}
      <section className="relative min-h-[88vh] lg:min-h-[92vh] overflow-hidden bg-[#030B1C] text-white flex flex-col justify-between pt-6 sm:pt-10 pb-16">

        {/* Background Looping Earth Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="size-full object-cover object-center filter brightness-[0.78] contrast-[1.1]"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          {/* Seamless atmospheric gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030B1C]/90 via-[#030B1C]/55 to-[#030B1C]/35 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030B1C] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#030B1C] via-[#030B1C]/70 to-transparent pointer-events-none" />
        </div>

        {/* Ambient atmospheric lighting glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-1/4 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-10 left-10 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]"
        />

        {/* Top Breadcrumb & Tagline */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="size-3.5 text-slate-400" />
              <span className="text-sky-400 font-semibold">The Citizens</span>
            </div>

            <div className="text-right hidden sm:block">
              <span className="text-[11px] font-bold tracking-[0.2em] text-slate-300 uppercase block">
                REAL PEOPLE • REAL BUSINESS • A STRONGER TOMORROW
              </span>
            </div>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-10 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-5">
                <span className="w-6 h-[1.5px] bg-sky-400" />
                <span>THE PEOPLE WHO BUILD PEERS GLOBAL</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.08] mb-6">
                The Citizens
              </h1>

              {/* Subtitle Quotes */}
              <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-slate-200 font-normal leading-relaxed mb-4 max-w-2xl">
                A community is not built by an organisation. <br className="hidden sm:inline" />
                <span className="text-white">It is built by the people inside it.</span>
              </p>

              {/* Descriptor */}
              <p className="text-sm sm:text-base text-slate-300 font-light mb-8 max-w-xl">
                Every role at Peers Global is held by an entrepreneur.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/membership"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <span>Become a Peer</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/leadership"
                  className="rounded-full border border-white/25 hover:border-white/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-7 py-3.5 text-sm font-medium transition-all"
                >
                  Explore Leadership
                </Link>
              </div>
            </div>

            {/* Right Column: Subtle Artistic Motto Card */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-md border border-white/15 shadow-2xl max-w-sm">
                <div className="font-serif italic text-2xl sm:text-3xl text-sky-200/90 font-light leading-snug mb-3">
                  &ldquo;Peers Build A Brighter Tomorrow&rdquo;
                </div>
                <div className="text-xs tracking-wider uppercase text-slate-300 font-medium">
                  Peers Global Citizens
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar Indicator */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>World&apos;s First Community of Collaboration</span>
            <span className="hidden sm:inline italic font-serif text-slate-300">
              &ldquo;Peers are Partners in Business and Friends in Life.&rdquo;
            </span>
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
          <div className="inline-flex items-center gap-3 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
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
              {/* Big Watermark Number */}
              <div className="absolute top-4 right-6 text-6xl sm:text-7xl font-extrabold text-slate-100 font-sans select-none pointer-events-none transition-colors group-hover:text-blue-50">
                01
              </div>

              <div>
                {/* Icon Badge */}
                <div className="size-13 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-6 shadow-sm border border-blue-100/60">
                  <Users className="size-6" />
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
              {/* Big Watermark Number */}
              <div className="absolute top-4 right-6 text-6xl sm:text-7xl font-extrabold text-slate-100 font-sans select-none pointer-events-none transition-colors group-hover:text-blue-50">
                02
              </div>

              <div>
                {/* Icon Badge */}
                <div className="size-13 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 shadow-sm border border-indigo-100/60">
                  <UserPlus className="size-6" />
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
              {/* Big Watermark Number */}
              <div className="absolute top-4 right-6 text-6xl sm:text-7xl font-extrabold text-slate-100 font-sans select-none pointer-events-none transition-colors group-hover:text-blue-50">
                03
              </div>

              <div>
                {/* Icon Badge */}
                <div className="size-13 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 shadow-sm border border-sky-100/60">
                  <Shield className="size-6" />
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
              {/* Big Watermark Number */}
              <div className="absolute top-4 right-6 text-6xl sm:text-7xl font-extrabold text-slate-100 font-sans select-none pointer-events-none transition-colors group-hover:text-blue-50">
                04
              </div>

              <div>
                {/* Icon Badge */}
                <div className="size-13 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 shadow-sm border border-rose-100/60">
                  <Megaphone className="size-6" />
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
              {/* Big Watermark Number */}
              <div className="absolute top-4 right-6 text-6xl sm:text-7xl font-extrabold text-slate-100 font-sans select-none pointer-events-none transition-colors group-hover:text-blue-50">
                05
              </div>

              <div>
                {/* Icon Badge */}
                <div className="size-13 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 shadow-sm border border-amber-100/60">
                  <Star className="size-6" />
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
          <div className="inline-flex items-center gap-3 text-[#0066FF] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            <span className="w-6 h-[1.5px] bg-[#0066FF]" />
            <span>FROM CONTRIBUTION TO LEADERSHIP</span>
            <span className="w-6 h-[1.5px] bg-[#0066FF]" />
          </div>

          {/* Title in Editorial Serif */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-slate-900 tracking-tight leading-[1.18] mb-4">
            The path from Peer to leader
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-14">
            Nobody arrives here as a Director. Every leadership role is held by someone who first sat in a Circle as a Peer, contributed consistently, and earned the trust of the people around them.
          </p>

          {/* 7-Stage Pipeline Progression Cards */}
          <div className="relative mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 lg:gap-2.5 items-stretch">
              {LEADERSHIP_PATHWAY.map((item, idx) => {
                const IconComp = item.icon
                return (
                  <div key={idx} className="relative flex items-stretch">

                    {/* Node Card */}
                    <div className="group relative w-full bg-white rounded-2xl p-4 sm:p-4.5 border border-slate-200/90 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 flex flex-col items-center text-center overflow-hidden">

                      {/* Top-Right Soft Wave Gradient */}
                      <div
                        className={`pointer-events-none absolute -top-8 -right-8 size-28 rounded-full bg-gradient-to-bl ${item.cornerWave} blur-lg`}
                      />

                      {/* Top-Left Step Number Badge */}
                      <div className="self-start relative z-10 mb-2">
                        <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-tight shadow-2xs ${item.numBg}`}>
                          {item.number}
                        </span>
                      </div>

                      {/* Center Icon Circle */}
                      <div className={`relative z-10 size-13 rounded-full flex items-center justify-center mb-3 shadow-2xs border transition-transform duration-300 group-hover:scale-105 ${item.badgeColor}`}>
                        <IconComp className="size-5.5" />
                      </div>

                      {/* Role Title */}
                      <h4 className="relative z-10 text-xs sm:text-[13px] font-bold text-slate-900 mb-1 leading-snug">
                        {item.role}
                      </h4>

                      {/* Role Description */}
                      <p className="relative z-10 text-[11px] text-slate-500 font-normal leading-relaxed mt-auto pt-1">
                        {item.desc}
                      </p>
                    </div>

                    {/* Arrow Connector for Desktop */}
                    {idx < LEADERSHIP_PATHWAY.length - 1 && (
                      <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-slate-300 pointer-events-none">
                        <ChevronRight className="size-4 text-slate-400" />
                      </div>
                    )}
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
            <Link
              href="/leadership"
              className="inline-flex rounded-full bg-[#0066FF] hover:bg-[#0052D0] text-white px-8 py-3.5 text-sm font-semibold shadow-[0_8px_20px_rgba(0,102,255,0.28)] transition-all hover:scale-[1.03] active:scale-[0.98] items-center gap-2"
            >
              <span>Explore the Leadership Path</span>
              <ArrowRight className="size-4" />
            </Link>
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
          <div className="inline-flex items-center gap-3 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            <span>OUR SHARED STANDARD</span>
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-3">
            What every citizen shares
          </h2>

          <div className="text-sm font-bold text-[#0062D2] uppercase tracking-wider mb-3">
            Different roles. One standard.
          </div>

          <p className="text-sm text-slate-600 max-w-xl mx-auto font-light mb-14">
            Whatever a person holds in this community, the same things are expected of them.
          </p>

          {/* 5 Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
            {SHARED_STANDARDS.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <IconComp className="size-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
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

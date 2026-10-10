'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
  HelpCircle,
  Lightbulb,
  MessageSquare,
  Shield,
  Scale,
  Smartphone,
  HeartHandshake,
} from 'lucide-react'
import { usePageMedia } from '@/lib/hooks/use-page-media'

// ─── Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  { icon: Users, value: '10,000+', label: 'Entrepreneurs' },
  { icon: Award, value: '30+ Yrs', label: 'Senior Experience' },
  { icon: Building2, value: '45+', label: 'Cities' },
  { icon: Target, value: '1M', label: 'Lives to Impact' },
]

// ─── How Experience Is Learned ────────────────────────────────────────────
const EXPERIENCE_LEARNING_POINTS = [
  'Decisions that worked',
  'Decisions that did not',
  'Opportunities they recognised',
  'Opportunities they missed',
  'People they trusted',
  'Relationships they built',
  'Challenges they overcame',
  'Businesses they transformed',
  'Moments when they had to begin again',
]

// ─── What The Board Brings (5 Dimensions) ─────────────────────────────────
const WHAT_THE_BOARD_BRINGS = [
  {
    title: 'EXPERIENCE',
    subtitle: 'Decades of Real Execution',
    desc: 'Years of building, leading, deciding, adapting and learning.',
    icon: Compass,
    color: 'text-blue-600 bg-blue-50 border-blue-200/70',
    accentColor: '#0062D2',
    hoverBorder: 'hover:border-blue-400',
  },
  {
    title: 'PERSPECTIVE',
    subtitle: 'Seeing the Bigger Horizon',
    desc: 'The ability to look beyond the immediate situation and consider the wider picture.',
    icon: Eye,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200/70',
    accentColor: '#4F46E5',
    hoverBorder: 'hover:border-indigo-400',
  },
  {
    title: 'QUESTIONS',
    subtitle: 'Clarity Before Direction',
    desc: 'Sometimes the most valuable advice begins with a better question.',
    icon: HelpCircle,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200/70',
    accentColor: '#059669',
    hoverBorder: 'hover:border-emerald-400',
  },
  {
    title: 'WISDOM',
    subtitle: 'Reframing Challenges',
    desc: 'Not every problem requires an answer from someone else. Sometimes it requires seeing the problem differently.',
    icon: Sparkles,
    color: 'text-amber-600 bg-amber-50 border-amber-200/70',
    accentColor: '#D97706',
    hoverBorder: 'hover:border-amber-400',
  },
  {
    title: 'CONTEXT',
    subtitle: 'Distinguishing Patterns',
    desc: 'Experience helps distinguish what is genuinely new from what has been encountered before in another form.',
    icon: BookOpen,
    color: 'text-purple-600 bg-purple-50 border-purple-200/70',
    accentColor: '#7C3AED',
    hoverBorder: 'hover:border-purple-400',
  },
]

// ─── Approved Advisor Profiles ───────────────────────────────────────────
const ADVISORS = [
  {
    name: 'Dilip Patel',
    business: 'Omkar Industrial Infrastructure',
    city: 'Ahmedabad',
    focus: 'Institutional governance, capital allocation, and long-term land & asset expansion.',
    experience: '34 years building heavy industrial estates and manufacturing infrastructure.',
    image: '/images/peers-avatars/avatar_man_one.jpg',
    tag: 'Infrastructure & Governance',
    accentColor: '#0062D2',
    borderHover: 'hover:border-blue-400',
  },
  {
    name: 'Kavita Sundaram',
    business: 'Sundaram Financial & Advisory Group',
    city: 'Mumbai',
    focus: 'Cross-border compliances, IPO readiness, and audit committees.',
    experience: '28 years veteran merchant banker and board member across NSE-listed enterprises.',
    image: '/images/peers-avatars/avatar_woman_one.jpg',
    tag: 'Capital & IPO Advisory',
    accentColor: '#4F46E5',
    borderHover: 'hover:border-indigo-400',
  },
  {
    name: 'Sudhir Rangaswamy',
    business: 'Zenith Global Technologies',
    city: 'Bengaluru',
    focus: 'High-trust digital ecosystems, IP governance, and ethical enterprise automation.',
    experience: '30 years in enterprise systems, having scaled 3 technology firms from inception to international exits.',
    image: '/images/peers-avatars/avatar_corp_four.jpg',
    tag: 'Enterprise Scale & Tech',
    accentColor: '#059669',
    borderHover: 'hover:border-emerald-400',
  },
]

// ─── Frequently Asked Questions ──────────────────────────────────────────
const FAQ = [
  {
    q: 'What is the Peers Board of Advisory?',
    a: 'It is a group of senior entrepreneurs whose experience is available to the wider PEERS GLOBAL community.',
  },
  {
    q: 'Does the Board make decisions for Peers?',
    a: 'No. The Board provides experience and perspective. The entrepreneur remains responsible for their own decisions.',
  },
  {
    q: 'How does a Peer connect with the Board?',
    a: 'Every Circle has a Peers Board of Advisory Leader who connects Peers to the Board.',
  },
  {
    q: 'Can every Circle access the Board?',
    a: 'Yes. Every Circle has a Peers Board of Advisory Leader who connects Peers directly to the Board of Advisory.',
  },
  {
    q: 'Who are the advisors?',
    a: 'The Board comprises senior entrepreneurs with multi-decade leadership experience across industries, with profiles published as members are formally identified.',
  },
  {
    q: 'Is the Board only for business problems?',
    a: 'The source does not prescribe a narrow subject list. Its central purpose is to make the experience of senior entrepreneurs available to the community.',
  },
]

export function AdvisoryBoardClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const { getMedia } = usePageMedia('leadership')
  const heroMedia = getMedia({
    sectionName: 'The Peers Board of Advisory',
    subModuleName: 'BOARD OF ADVISORY HERO',
    subModuleId: 'sub-leadership-advisory-board',
    fallbackUrl: '/videos/homepage-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'The Peers Board of Advisory Senior Leadership',
  })

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans antialiased">
      {/* =========================================================================
          SECTION 1: HERO — THE PEERS BOARD OF ADVISORY (Master Dark Video Banner)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Full Bleed Hero Video Background */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          {heroMedia.isYouTube && heroMedia.embedUrl ? (
            <iframe
              src={`${heroMedia.embedUrl}&mute=1&loop=1`}
              title={heroMedia.title}
              className="size-full border-0 object-cover pointer-events-none scale-125 opacity-40"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : (
            <video
              key={heroMedia.mediaUrl}
              src={heroMedia.mediaUrl || '/videos/homepage-hero-bg.mp4'}
              poster="/images/who-we-are-boardroom.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="size-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3 text-slate-500" />
            <Link href="/leadership" className="hover:text-white transition-colors">
              Leadership
            </Link>
            <ChevronRight className="size-3 text-slate-500" />
            <span className="text-white font-semibold">The Peers Board of Advisory</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Hero Content */}
            <div className="lg:col-span-12 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>BOARD OF ADVISORY</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  The Peers Board of{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Advisory
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Senior entrepreneurs whose experience is available to the whole community.
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Every entrepreneur reaches moments where experience matters more than information. A difficult decision. A new direction. A complex relationship. That is the purpose of the Board of Advisory—experienced voices who can help another entrepreneur see from a different perspective.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <GalaxyButton
                  href="#advisors-section"
                  variant="primary"
                  size="md"
                >
                  Meet the Advisors
                </GalaxyButton>

                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="transparent"
                  size="md"
                >
                  Download Unity App
                </GalaxyButton>
              </div>
            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200/90 p-5 flex items-center gap-4 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="size-12 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900 leading-none">
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

      {/* =========================================================================
          SECTION 2: EXPERIENCE SHOULD NOT STAY WITH THE PERSON WHO EARNED IT
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  THE POWER OF SHARED WISDOM
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Experience should not stay with the person who earned it
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Entrepreneurs spend years learning things that cannot be taught in a classroom. They learn through real tests of character, strategy, and endurance:
              </p>

              <div className="grid sm:grid-cols-3 gap-3">
                {EXPERIENCE_LEARNING_POINTS.map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-2xs transition-all duration-200 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-800 font-medium leading-snug">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 shadow-2xs space-y-1">
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  That experience has value. And a community becomes stronger when experience is shared rather than kept within one person&apos;s journey.
                </p>
                <p className="text-xs text-slate-600 font-light">
                  The Board of Advisory creates a bridge between experience and the entrepreneurs who may benefit from it.
                </p>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 aspect-[4/3] group">
                <Image
                  src="/images/who-we-are-boardroom.jpg"
                  alt="Senior advisors sharing experience in boardroom"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right select-none pointer-events-none drop-shadow-md">
                  <p className="text-[10px] text-white/90 font-bold tracking-widest uppercase">
                    PERSPECTIVE
                  </p>
                  <p
                    className="text-lg text-amber-300 font-bold leading-tight"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Bridge to Possibility
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ACCESS TO EXPERIENCE & CIRCLE CONNECTION (2-COLUMN)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left: The Community Has Access */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                    ACCESSIBLE PERSPECTIVE
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                  The community has access to experience
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  The Board is not designed to replace the entrepreneur&apos;s own judgement. It exists to make experienced perspective available when questions arise:
                </p>

                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5 font-medium">
                    <span className="size-2 rounded-full bg-[#0062D2] shrink-0" />
                    <span>A Peer may have a complex strategic question</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5 font-medium">
                    <span className="size-2 rounded-full bg-[#0062D2] shrink-0" />
                    <span>A Circle may encounter a new industry challenge</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5 font-medium">
                    <span className="size-2 rounded-full bg-[#0062D2] shrink-0" />
                    <span>A leader may need an objective third-party perspective</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5 font-medium">
                    <span className="size-2 rounded-full bg-[#0062D2] shrink-0" />
                    <span>A situation may benefit from someone who has navigated it before</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 italic">
                The decision and responsibility still belong to the entrepreneur. You simply never have to think alone.
              </div>
            </div>

            {/* Right: Every Circle Has a Connection */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                    LOCAL CONNECTION
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                  Every Circle has a connection to the Board
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Every Circle has a designated <strong className="text-slate-900 font-semibold">Peers Board of Advisory Leader</strong>. This person creates the vital bridge between the Circle and the senior advisory council.
                </p>

                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-1.5">
                  <p className="text-xs sm:text-sm font-bold text-slate-900">
                    The principle is simple: Experience should be reachable.
                  </p>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    A Circle should know where to turn when a question would benefit from a senior perspective. The Board of Advisory Leader helps make that relationship seamless.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-600 font-medium">
                  ✦ Through regular touchpoints, masterclasses, and dedicated sessions, senior wisdom flows directly into the room.
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-[#0062D2] font-semibold">
                Direct conduit between the inner board and global advisors.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHAT THE BOARD BRINGS (5 Dimensions - 5 Interactive Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                THE FIVE DIMENSIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-slate-900">
              What the Board brings
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              The Board brings something that cannot simply be downloaded from the internet or read in a book.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {WHAT_THE_BOARD_BRINGS.map((dim, idx) => {
              const Icon = dim.icon
              return (
                <div
                  key={dim.title}
                  className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 cursor-default ${
                    idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`size-12 rounded-2xl border flex items-center justify-center shrink-0 shadow-2xs ${dim.color}`}>
                        <Icon className="size-5.5" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-50 border border-slate-200/80 text-slate-600 shadow-2xs">
                        {dim.subtitle}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {dim.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2.5">
                        {dim.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="text-slate-400 font-mono">Dimension 0{idx + 1} of 05</span>
                    <span className="inline-flex items-center gap-1 text-slate-700 font-semibold">
                      Advisory Pillar &rarr;
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHO YOU BECOME & THE ADVISORY MINDSET (Balanced Layout)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
            
            {/* Left Card: Who you become around experience */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                      CONVERSATIONAL ELEVATION
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                    Who you become around experience
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2.5">
                    Being around experienced entrepreneurs changes the quality of conversation. You learn to listen differently. You begin to ask better questions:
                  </p>
                </div>

                <div className="space-y-3.5">
                  <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/70 hover:border-blue-200 hover:bg-blue-50/20 transition-all flex items-start gap-3.5">
                    <div className="size-6 rounded-full bg-blue-100/70 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      1
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        Comfort with candour
                      </p>
                      <p className="text-xs text-slate-600 font-light mt-0.5">
                        You become comfortable saying: <strong className="text-[#0062D2] font-semibold">“I don&apos;t know.”</strong>
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/70 hover:border-blue-200 hover:bg-blue-50/20 transition-all flex items-start gap-3.5">
                    <div className="size-6 rounded-full bg-blue-100/70 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      2
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        Deliberation before velocity
                      </p>
                      <p className="text-xs text-slate-600 font-light mt-0.5">
                        You become more willing to consider another perspective before rushing to decide.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/70 hover:border-blue-200 hover:bg-blue-50/20 transition-all flex items-start gap-3.5">
                    <div className="size-6 rounded-full bg-blue-100/70 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      3
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        Pass the legacy forward
                      </p>
                      <p className="text-xs text-slate-600 font-light mt-0.5">
                        Experience is not admired from a distance—it is learned and passed forward.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#0062D2] font-semibold italic">
                <span>✦ &ldquo;Elevated peers create elevated perspectives.&rdquo;</span>
              </div>
            </div>

            {/* Right Card: The Advisory Mindset & Decision Framework */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#061226] via-[#0A1A38] to-[#040D1E] text-white shadow-xl border border-slate-800 hover:shadow-2xl hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 size-72 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-3">
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
                      DECISION FRAMEWORK
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    The Advisory Mindset
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mt-2.5">
                    The Board is built around a simple principle: <strong className="text-white font-semibold">Experience is meant to be shared.</strong> The experienced voice makes every critical decision more informed.
                  </p>
                </div>

                {/* Vertical Process Pathway */}
                <div className="grid grid-cols-5 gap-2 pt-2">
                  {[
                    { step: '01', label: 'Listen', color: 'border-blue-500/30 bg-blue-500/15 text-sky-200' },
                    { step: '02', label: 'Consider', color: 'border-blue-500/30 bg-blue-500/15 text-sky-200' },
                    { step: '03', label: 'Question', color: 'border-blue-500/30 bg-blue-500/15 text-sky-200' },
                    { step: '04', label: 'Decide', color: 'border-blue-500/30 bg-blue-500/15 text-sky-200' },
                    { step: '05', label: 'Act', color: 'border-rose-500/40 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-md' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-2xl border ${item.color} flex flex-col items-center justify-center text-center backdrop-blur-xs transition-transform hover:scale-105`}
                    >
                      <span className="text-[10px] font-mono text-white/60 mb-0.5">{item.step}</span>
                      <span className="text-xs font-bold">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 text-xs text-slate-300 font-light leading-relaxed">
                  <span className="text-sky-300 font-bold mr-1.5">✦ Principle:</span>
                  The advisor questions and opens horizons; the entrepreneur evaluates and executes with full ownership.
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 relative z-10 text-xs text-slate-400 italic">
                The entrepreneur remains completely responsible for the final decision.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FROM EXPERIENCE TO POSSIBILITY
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                PATTERN RECOGNITION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-slate-900">
              From experience to possibility
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-7 max-w-5xl mx-auto">
            <div className="group p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 hover:bg-white transition-all duration-300 flex flex-col justify-between space-y-4">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-slate-400">PROBLEM VS PATTERN</span>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                A young entrepreneur may see a problem.
              </p>
              <p className="text-base font-bold text-[#0062D2] leading-snug">
                An experienced entrepreneur recognises a pattern.
              </p>
            </div>

            <div className="group p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 hover:bg-white transition-all duration-300 flex flex-col justify-between space-y-4">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-slate-400">OBSTACLE VS ROUTE</span>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                A business owner may see an obstacle.
              </p>
              <p className="text-base font-bold text-[#0062D2] leading-snug">
                Someone who faced it before sees another route.
              </p>
            </div>

            <div className="group p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 hover:bg-white transition-all duration-300 flex flex-col justify-between space-y-4">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-slate-400">ONE VS MULTIPLE</span>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                A leader may see one possibility.
              </p>
              <p className="text-base font-bold text-[#0062D2] leading-snug">
                Another perspective may reveal three.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/80 border border-blue-200/60 shadow-2xs text-center max-w-2xl mx-auto text-xs sm:text-sm font-medium text-slate-800">
            <span>
              This is where the value of the Board lies: <strong className="text-slate-900 font-bold">Not in having all the answers, but in helping the community see more possibilities.</strong>
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: WHO BELONGS ON THE BOARD (THE COUNCIL SECTION)
          ========================================================================= */}
      <section id="advisors-section" className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                THE ADVISORY COUNCIL
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Who belongs on the Board
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Senior entrepreneurs whose experience is available to the whole community. Their journey matters. Their experience matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ADVISORS.map((advisor, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="relative h-72 sm:h-80 w-full bg-slate-950 overflow-hidden">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                    
                    {/* Floating city chip */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-black/40 backdrop-blur-md text-white/90 border border-white/20 shadow-xs">
                        {advisor.city}
                      </span>
                    </div>

                    {/* Bottom floating badge on image */}
                    <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                        {advisor.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide mt-1">
                        {advisor.business}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="space-y-2">
                      <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#0062D2] px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 shadow-2xs">
                        {advisor.tag}
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                        {advisor.focus}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 text-xs text-slate-600 leading-relaxed font-light">
                      <strong className="text-slate-900 font-semibold">Background: </strong>
                      {advisor.experience}
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-2 flex items-center justify-between text-xs text-slate-500 font-medium border-t border-slate-100">
                  <span className="text-slate-400 font-mono">Senior Advisor 0{idx + 1}</span>
                  <span className="inline-flex items-center gap-1.5 text-slate-700 font-semibold">
                    <span>Advisory Voice</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 text-center max-w-2xl mx-auto shadow-2xs">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
              For the entrepreneur seeking perspective:
            </h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Come prepared. Ask honestly. Listen carefully. Consider thoughtfully. And then make your own decision. That is how experience becomes useful.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {FAQ.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#FAFBFD] border border-slate-200/90 overflow-hidden shadow-2xs hover:border-blue-200 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-slate-900 hover:text-[#0062D2] transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`size-4.5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0062D2]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-light border-t border-slate-200/70">
                      {item.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CLOSING MANIFESTO BANNER (Exact Homepage Celestial Mesh Styling)
          ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-20 lg:py-24 text-white border-t border-slate-800">
        {/* Deep celestial radial gradients & luminous brand aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(29,78,216,0.18),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(99,102,241,0.15),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl"
        />

        {/* Subtle geometric orbital line art */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-30"
        >
          <svg
            viewBox="0 0 760 520"
            fill="none"
            className="h-full w-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-300/30"
            />
            <path
              d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5 8"
              className="text-sky-200/25"
            />
            <path
              d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-200/20"
            />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                  LEGACY THROUGH CONTRIBUTION
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold leading-[1.18] tracking-tight text-white">
                Experience becomes legacy when it is shared.
              </h2>

              <p className="text-base sm:text-lg font-light text-slate-200 max-w-2xl leading-relaxed">
                Every successful entrepreneur carries knowledge that took years to acquire. It can remain within one business, or it can become useful to someone else.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <GalaxyButton
                  href="/membership"
                  variant="primary"
                  size="md"
                >
                  Explore Membership
                </GalaxyButton>

                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  variant="transparent"
                  size="md"
                >
                  Download Unity App
                </GalaxyButton>
              </div>
            </div>

            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-md"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Experience <br />
                Earned. <br />
                <span className="text-[#7DD3FC]">Perspective Shared</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

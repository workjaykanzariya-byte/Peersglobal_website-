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
  HelpCircle,
  Lightbulb,
  MessageSquare,
  Shield,
  Scale,
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
  },
  {
    title: 'PERSPECTIVE',
    subtitle: 'Seeing the Bigger Horizon',
    desc: 'The ability to look beyond the immediate situation and consider the wider picture.',
    icon: Eye,
  },
  {
    title: 'QUESTIONS',
    subtitle: 'Clarity Before Direction',
    desc: 'Sometimes the most valuable advice begins with a better question.',
    icon: HelpCircle,
  },
  {
    title: 'WISDOM',
    subtitle: 'Reframing Challenges',
    desc: 'Not every problem requires an answer from someone else. Sometimes it requires seeing the problem differently.',
    icon: Sparkles,
  },
  {
    title: 'CONTEXT',
    subtitle: 'Distinguishing Patterns',
    desc: 'Experience helps distinguish what is genuinely new from what has been encountered before in another form.',
    icon: BookOpen,
  },
]

// ─── Approved Advisor Profiles Placeholder Structure ──────────────────────
const ADVISORS = [
  {
    name: 'Dilip Patel',
    business: 'Omkar Industrial Infrastructure',
    city: 'Ahmedabad',
    focus: 'Institutional governance, capital allocation, and long-term land & asset expansion.',
    experience: '34 years building heavy industrial estates and manufacturing infrastructure.',
    image: '/images/circle-founder-hero.jpg',
  },
  {
    name: 'Kavita Sundaram',
    business: 'Sundaram Financial & Advisory Group',
    city: 'Mumbai',
    focus: 'Cross-border compliances, IPO readiness, and audit committees.',
    experience: '28 years veteran merchant banker and board member across NSE-listed enterprises.',
    image: '/images/circle-director-hero.jpg',
  },
  {
    name: 'Sudhir Rangaswamy',
    business: 'Zenith Global Technologies',
    city: 'Bengaluru',
    focus: 'High-trust digital ecosystems, IP governance, and ethical enterprise automation.',
    experience: '30 years in enterprise systems, having scaled 3 technology firms from inception to international exits.',
    image: '/images/executive-director-hero.jpg',
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
    fallbackUrl: '/videos/leadership-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'The Peers Board of Advisory Senior Leadership',
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
            <span className="text-slate-800 font-semibold">The Peers Board of Advisory</span>
          </nav>

          {/* Hero Banner Box */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] flex items-center">
            {/* Fade Video Visual (Right 60%) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none"
              style={{
                maskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
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
                  poster="/images/who-we-are-boardroom.jpg"
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
                  Experience
                </p>
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight mt-0.5 font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Beyond Information.
                </p>
                <p
                  className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Legacy Shared.
                </p>
              </div>
            </div>

            {/* Left Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
                  <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                  <span className="brand-gradient-text">BOARD OF ADVISORY</span>
                  <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.08] mb-4">
                  The Peers Board of Advisory
                </h1>

                <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug mb-3">
                  Senior entrepreneurs whose experience is available to the whole community.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                  Every entrepreneur reaches moments where experience matters more than information. A difficult decision. A new direction. A complex relationship. A question that cannot be answered by a search engine. That is the purpose of the Peers Board of Advisory. Not as distant experts or people who tell others what to do, but as experienced voices who can help another entrepreneur see a situation from a different perspective.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#advisors-section"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-8 py-3.5 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>Meet the Advisors</span>
                    <ArrowRight className="size-4" />
                  </a>
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-300 hover:border-[#0062D2] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0062D2] px-8 py-3.5 text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4" />
                  </a>
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

      {/* ─── 2. EXPERIENCE SHOULD NOT STAY WITH THE PERSON WHO EARNED IT ─── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="brand-gradient-text">THE POWER OF SHARED WISDOM</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-5">
                Experience should not stay with the person who earned it
              </h2>
              <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed mb-6">
                Entrepreneurs spend years learning things that cannot be taught in a classroom. They learn through real tests of character, strategy, and endurance:
              </p>

              <div className="grid sm:grid-cols-3 gap-2.5 mb-6">
                {EXPERIENCE_LEARNING_POINTS.map((pt, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#FAFBFD] border border-slate-200 flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-800 font-medium leading-snug">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100">
                <p className="text-sm sm:text-base font-serif font-bold text-slate-900">
                  That experience has value. And a community becomes stronger when experience is shared rather than kept within one person&apos;s journey.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-light mt-1.5">
                  The Board of Advisory creates a bridge between experience and the entrepreneurs who may benefit from it.
                </p>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 aspect-[4/3]">
                <Image
                  src="/images/who-we-are-boardroom.jpg"
                  alt="Senior advisors sharing experience in boardroom"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right select-none pointer-events-none drop-shadow-md">
                  <p className="text-xs text-white/90 font-medium tracking-wider uppercase">
                    Perspective
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

      {/* ─── 3. ACCESS TO EXPERIENCE & CIRCLE CONNECTION (2-COLUMN) ──────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Left: The Community Has Access */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-2">
                  ACCESSIBLE PERSPECTIVE
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mb-4">
                  The community has access to experience
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4">
                  The Board is not designed to replace the entrepreneur&apos;s own judgement. It exists to make experienced perspective available when questions arise:
                </p>

                <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                    <span className="size-2 rounded-full bg-[#0062D2]" />
                    <span>A Peer may have a complex question</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                    <span className="size-2 rounded-full bg-[#0062D2]" />
                    <span>A Circle may encounter a new challenge</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                    <span className="size-2 rounded-full bg-[#0062D2]" />
                    <span>A leader may need another perspective</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                    <span className="size-2 rounded-full bg-[#0062D2]" />
                    <span>A situation may benefit from someone who has seen it before</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  The decision still belongs to the entrepreneur. The responsibility still belongs to the person making the decision. But they do not necessarily have to think through every difficult question alone.
                </p>
              </div>
            </div>

            {/* Right: Every Circle Has a Connection */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-2">
                  LOCAL CONNECTION
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mb-4">
                  Every Circle has a connection to the Board
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4">
                  Every Circle has a designated <strong>Peers Board of Advisory Leader</strong>. This person creates the vital bridge between the Circle and the Board of Advisory.
                </p>

                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 mb-6">
                  <p className="text-base font-serif font-bold text-slate-950 mb-1">
                    The principle is simple: Experience should be reachable.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-light mt-1">
                    A Circle should know where to turn when a question would benefit from a senior perspective. The Board of Advisory Leader helps make that relationship possible.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-xs text-slate-600 font-medium">
                    Through regular touchpoints, masterclasses, and dedicated sessions, senior wisdom flows directly into the room.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. WHAT THE BOARD BRINGS (5 DIMENSIONS - DARK CONSTELLATION) ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D] py-20 sm:py-24 lg:py-28 text-white border-b border-slate-800/80">
        <div aria-hidden className="pointer-events-none absolute top-1/4 left-10 size-[320px] rounded-full bg-blue-600/12 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute bottom-10 right-10 size-[380px] rounded-full bg-cyan-500/8 blur-[140px]" />
        <div aria-hidden className="pointer-events-none absolute top-10 right-1/3 size-[250px] rounded-full bg-indigo-600/8 blur-[100px]" />

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3.5">
              <span className="w-5 h-px bg-cyan-400" />
              THE FIVE DIMENSIONS
              <span className="w-5 h-px bg-cyan-400" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              What the Board brings
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              The Board brings something that cannot simply be downloaded from the internet or read in a book.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_THE_BOARD_BRINGS.map((dim, idx) => {
              const Icon = dim.icon
              return (
                <div
                  key={dim.title}
                  className={`p-7 rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] shadow-[0_20px_50px_rgba(11,21,40,0.35)] hover:border-cyan-500/50 hover:shadow-[0_25px_60px_rgba(56,189,248,0.12)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                    idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.06] via-transparent to-black/30" />

                  <div className="relative z-10">
                    <div className="size-11 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all shadow-inner">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-1 tracking-wide">
                      {dim.title}
                    </h3>
                    <p className="text-xs text-cyan-300 font-semibold mb-3">
                      {dim.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {dim.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 5. WHO YOU BECOME & THE ADVISORY MINDSET ────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left: Who you become around experience */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-1">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="brand-gradient-text">CONVERSATIONAL ELEVATION</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                Who you become around experience
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                Being around experienced entrepreneurs changes the quality of conversation. You learn to listen differently. You begin to ask better questions.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-800 font-medium">
                    You become more comfortable saying: <span className="text-[#0062D2] font-bold">“I don&apos;t know.”</span>
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-800 font-medium">
                    You become more willing to consider another perspective before rushing to decide.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-800 font-medium">
                    You understand that experience is not something to admire from a distance—it is something to learn from, and eventually, pass forward.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: The Advisory Mindset & 5 Step Loop */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-1">
                    DECISION FRAMEWORK
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-950 mb-3">
                    The Advisory Mindset
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4">
                    The Board is built around a simple principle: <strong>Experience is meant to be shared.</strong> The experienced voice simply helps make the decision more informed.
                  </p>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 mb-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-900">
                      <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#0062D2]">Listen</span>
                      <span>→</span>
                      <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#0062D2]">Consider</span>
                      <span>→</span>
                      <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#0062D2]">Question</span>
                      <span>→</span>
                      <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#0062D2]">Decide</span>
                      <span>→</span>
                      <span className="px-2.5 py-1 rounded-lg bg-[#0062D2] text-white">Act</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 font-light">
                    The entrepreneur remains responsible for the decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. FROM EXPERIENCE TO POSSIBILITY ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-2">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">PATTERN RECOGNITION</span>
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              From experience to possibility
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <p className="text-xs uppercase font-bold text-slate-400 mb-2">A PROBLEM VS PATTERN</p>
              <p className="text-sm text-slate-700 leading-relaxed font-light mb-3">
                A young entrepreneur may see a problem.
              </p>
              <p className="text-base font-serif font-bold text-[#0062D2]">
                An experienced entrepreneur recognises a pattern.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <p className="text-xs uppercase font-bold text-slate-400 mb-2">OBSTACLE VS ROUTE</p>
              <p className="text-sm text-slate-700 leading-relaxed font-light mb-3">
                A business owner may see an obstacle.
              </p>
              <p className="text-base font-serif font-bold text-[#0062D2]">
                Someone who faced it before sees another route.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <p className="text-xs uppercase font-bold text-slate-400 mb-2">ONE VS THREE POSSIBILITIES</p>
              <p className="text-sm text-slate-700 leading-relaxed font-light mb-3">
                A leader may see one possibility.
              </p>
              <p className="text-base font-serif font-bold text-[#0062D2]">
                Another perspective may reveal three.
              </p>
            </div>
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-center max-w-2xl mx-auto">
            <p className="text-sm font-serif font-bold text-slate-900">
              This is where the value of the Board lies: Not in having all the answers, but in helping the community see more possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 7. WHO BELONGS ON THE BOARD (THE COUNCIL SECTION) ───────────── */}
      <section id="advisors-section" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">THE ADVISORY COUNCIL</span>
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
              Who belongs on the Board
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 font-light">
              Senior entrepreneurs whose experience is available to the whole community. Their journey matters. Their experience matters. And the reason they are willing to make that experience available to others matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ADVISORS.map((advisor, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <h3 className="text-2xl font-serif font-bold tracking-tight text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        {advisor.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-cyan-200 font-medium tracking-wide mt-1 drop-shadow-sm">
                        {advisor.business} · {advisor.city}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="space-y-2">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#0062D2] px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200/60">
                        ADVISORY FOCUS
                      </span>
                      <p className="text-sm sm:text-[15px] font-medium text-slate-800 leading-relaxed">
                        {advisor.focus}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100/80 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <strong className="text-slate-950 font-bold">Background: </strong>
                      {advisor.experience}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto">
            <h4 className="font-serif text-base font-bold text-slate-950 mb-1">
              For the entrepreneur seeking perspective:
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Come prepared. Ask honestly. Listen carefully. Consider thoughtfully. And then make your own decision. That is how experience becomes useful.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 8. FREQUENTLY ASKED QUESTIONS ──────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">FREQUENTLY ASKED QUESTIONS</span>
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Frequently asked questions
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

      {/* ─── 9. EXPERIENCE BECOMES LEGACY WHEN IT IS SHARED (CLOSING HERO) ─ */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-20 lg:py-28">
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
                LEGACY THROUGH CONTRIBUTION
                <span className="w-5 h-px bg-sky-200" />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
                Experience becomes legacy when it is shared.
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light mb-3 max-w-2xl">
                Every successful entrepreneur carries knowledge that took years to acquire. It can remain within one business, or it can become useful to someone else.
              </p>

              <p className="text-base sm:text-lg text-amber-300 font-medium leading-relaxed mb-8 max-w-2xl">
                Because the strongest communities do not only connect people who are building today. They connect today&apos;s entrepreneurs with the experience of those who have already travelled further.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/membership"
                  className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-8 py-3.5 text-sm font-semibold shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Explore Membership</span>
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 hover:border-white bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 text-sm font-semibold backdrop-blur-md transition-all inline-flex items-center gap-2"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg">
              <p
                className="text-2xl sm:text-3xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Experience Earned.
              </p>
              <p
                className="text-2xl sm:text-3xl text-white/80 leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Perspective Shared.
              </p>
              <p
                className="text-2xl sm:text-3xl text-white leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                A Community
              </p>
              <p
                className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Strengthened Together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  ArrowRight,
  Users,
  Compass,
  Zap,
  HeartHandshake,
  Sparkles,
  BookOpen,
  Smartphone,
  Share2,
  Lock,
  Layers,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Award,
  Handshake,
  Lightbulb,
  Building2,
  Send,
  Eye,
  Heart,
  Hammer,
  Shield,
  ShieldCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Language | Words We Live By — Peers Global',
  description:
    'Every community that lasts builds a language of its own. Explore the core lexicon, principles, and shared vocabulary that define the PEERS GLOBAL community of collaboration.',
  keywords: [
    'The Language',
    'PEERS GLOBAL Lexicon',
    'Words We Live By',
    'Peer vs Member',
    'Inner Board',
    'Give-First Mindset',
    'Life Impactor',
    'LSR Model',
    'Unity App',
    '10 Forms of Collaboration',
  ],
}

// 10 Forms of Collaboration Data
const TEN_FORMS_OF_COLLABORATION = [
  {
    id: 1,
    form: 'Business Referral',
    meaning: 'Connecting the right opportunity to the right Peer',
    icon: Send,
    tag: 'Opportunity',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    id: 2,
    form: 'Mentorship',
    meaning: 'Sharing experience to help another entrepreneur navigate a challenge',
    icon: BookOpen,
    tag: 'Guidance',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    id: 3,
    form: 'Joint Venture',
    meaning: 'Building something together that neither could build as effectively alone',
    icon: Handshake,
    tag: 'Synergy',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    id: 4,
    form: 'Knowledge Sharing',
    meaning: 'Making expertise available to others',
    icon: Lightbulb,
    tag: 'Wisdom',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    id: 5,
    form: 'Problem Solving',
    meaning: 'Bringing experience and perspective to a real business challenge',
    icon: Sparkles,
    tag: 'Solutions',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    id: 6,
    form: 'Vendor Connect',
    meaning: 'Helping a Peer discover a relevant supplier or service provider',
    icon: Building2,
    tag: 'Network',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
  {
    id: 7,
    form: 'Funding Access',
    meaning: 'Connecting entrepreneurs with relevant funding relationships or opportunities',
    icon: TrendingUp,
    tag: 'Capital',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    id: 8,
    form: 'Visibility & PR',
    meaning: 'Helping a Peer gain appropriate visibility for their work',
    icon: Eye,
    tag: 'Reach',
    color: 'text-fuchsia-600',
    bg: 'bg-fuchsia-50',
  },
  {
    id: 9,
    form: 'Emotional Support',
    meaning: 'Being present when entrepreneurship becomes personally difficult',
    icon: Heart,
    tag: 'Resilience',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    id: 10,
    form: 'Execution Support',
    meaning: 'Helping turn an idea or requirement into action',
    icon: Hammer,
    tag: 'Action',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
]

// Complete Reference Table Data
const REFERENCE_TABLE_DATA = [
  {
    word: 'Peer',
    badge: 'RELATIONSHIP',
    meaning: 'A relationship built through trust, contribution and shared entrepreneurial experience.',
  },
  {
    word: 'Member',
    badge: 'STATUS',
    meaning: 'The formal membership status within PEERS GLOBAL.',
  },
  {
    word: 'Circle',
    badge: 'COMMUNITY',
    meaning: 'A structured community of entrepreneurs acting as an Inner Board.',
  },
  {
    word: 'Powerhouse',
    badge: 'LEADERSHIP',
    meaning: 'A Peer who takes responsibility for actively contributing to the community.',
  },
  {
    word: 'Give-First',
    badge: 'MINDSET',
    meaning: 'Beginning relationships with a willingness to contribute value upfront.',
  },
  {
    word: 'Life Impactor',
    badge: 'CONTRIBUTION',
    meaning: 'A person whose action creates a lasting positive difference for another.',
  },
  {
    word: 'LSR',
    badge: 'CORE MODEL',
    meaning: 'Learning, Sharing and Relationships — the core operating rhythm of PEERS GLOBAL.',
  },
  {
    word: 'Unity',
    badge: 'DIGITAL HOME',
    meaning: 'The digital community platform connecting Peers beyond physical meetings.',
  },
  {
    word: 'MindMeld',
    badge: 'CONVERGENCE',
    meaning: 'A cross-community environment for exchanging multi-industry perspectives.',
  },
  {
    word: 'Confidential Forum',
    badge: 'TRUSTED SPACE',
    meaning: 'A trusted space for sensitive, discreet entrepreneurial conversations.',
  },
  {
    word: '10 Forms of Collaboration',
    badge: 'FRAMEWORK',
    meaning: 'The principal ways Peers create measurable value for one another.',
  },
]

export default function TheLanguagePage() {
  return (
    <div className="min-h-screen bg-white text-[#0f131a] selection:bg-[#1D4ED8] selection:text-white font-sans">

      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'DefinedTermSet',
            name: 'The PEERS GLOBAL Language',
            description:
              'The core lexicon and philosophy of PEERS GLOBAL: Peer, Circle, Powerhouse, Give-First, Life Impactor, LSR, Unity, MindMeld, Confidential Forum, and the 10 Forms of Collaboration.',
            hasDefinedTerm: REFERENCE_TABLE_DATA.map((item) => ({
              '@type': 'DefinedTerm',
              name: item.word,
              description: item.meaning,
              inDefinedTermSet: 'https://peersglobal.com/the-language',
            })),
          }),
        }}
      />

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
          {/* SVG Definitions for Icons */}
          <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="heroLangStatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="50%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#FB7185" />
              </linearGradient>
            </defs>
          </svg>

          {/* Top Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-slate-400">Our World</span>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-white font-semibold">The Language</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[440px] lg:min-h-[480px]">
            {/* Left Content */}
            <div className="lg:col-span-8 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>THE LEXICON &amp; VOCABULARY</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white font-serif">
                  The{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Language.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Every community that lasts builds a language of its own. A shared vocabulary that creates trust, clarity, and enduring collaboration.
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
                  href="#terms"
                  variant="transparent"
                  size="default"
                  className="font-medium"
                >
                  Explore 10 Core Words
                </GalaxyButton>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg pt-6 border-t border-white/15">
                {[
                  { icon: BookOpen, value: '10 Words', label: 'Living Lexicon' },
                  { icon: Handshake, value: '10 Forms', label: 'Collaboration Modes' },
                  { icon: HeartHandshake, value: '1 Voice', label: 'Shared Culture' },
                ].map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.label} className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
                      <div className="size-9 rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-rose-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                        <Icon className="size-4 stroke-[url(#heroLangStatGrad)]" />
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
                People
              </p>
              <p
                className="text-3xl sm:text-4xl text-white leading-tight font-bold"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Create
              </p>
              <p
                className="text-3xl sm:text-4xl font-bold leading-tight brand-gradient-text"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Enduring Impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PROLOGUE / MORE THAN VOCABULARY
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-cool-grey-250 bg-gradient-to-br from-[#FAFBFD] via-white to-blue-50/30 p-8 sm:p-12 lg:p-14 shadow-sm space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    MORE THAN VOCABULARY
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f131a] tracking-tight leading-[1.15]">
                  <span>Our language exists not to make us sound different,</span>{' '}
                  <span className="brand-gradient-text block sm:inline">but to express something different.</span>
                </h2>

                <p className="text-cool-grey-600 text-base sm:text-lg leading-relaxed font-normal">
                  These words describe the culture we are building together. They give behavioral shape to what we believe and how we treat one another across every room.
                </p>
              </div>

              {/* Right Column: 4 Principle Pills */}
              <div className="lg:col-span-5 space-y-3">
                <div className="p-4 rounded-2xl bg-white border border-cool-grey-250 shadow-2xs flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-cool-grey-600">When we say <strong className="text-slate-900 font-bold">Peer</strong></span>
                  <span className="text-xs font-bold brand-gradient-text">We mean more than a member</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-cool-grey-250 shadow-2xs flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-cool-grey-600">When we say <strong className="text-slate-900 font-bold">Circle</strong></span>
                  <span className="text-xs font-bold text-indigo-600">We mean more than a meeting</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-cool-grey-250 shadow-2xs flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-cool-grey-600">When we say <strong className="text-slate-900 font-bold">Give-First</strong></span>
                  <span className="text-xs font-bold text-rose-600">We mean more than generosity</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-cool-grey-250 shadow-2xs flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-cool-grey-600">When we say <strong className="text-slate-900 font-bold">Life Impactor</strong></span>
                  <span className="text-xs font-bold text-emerald-600">We mean collective impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE 10 CORE WORDS (01 to 10)
          ========================================================================= */}
      <section id="terms" className="relative py-20 sm:py-28 bg-[#FAFBFD] border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE 10 DEFINING CONCEPTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0f131a] tracking-tight leading-[1.14]">
              <span>The Ten Words of</span>{' '}
              <span className="brand-gradient-text block sm:inline">PEERS GLOBAL</span>
            </h2>

            <p className="text-base sm:text-lg text-cool-grey-600 font-normal leading-relaxed">
              Each word represents a pillar of how we relate, collaborate, and build enduring value together.
            </p>
          </div>

          <div className="space-y-8">

            {/* 01 — PEER */}
            <div className="rounded-[32px] border border-cool-grey-250 bg-white p-8 sm:p-12 shadow-xs hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2.5">
                    <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="langGrad01" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1D4ED8" />
                            <stop offset="100%" stopColor="#E11D48" />
                          </linearGradient>
                        </defs>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="url(#langGrad01)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="9" cy="7" r="4" stroke="url(#langGrad01)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="url(#langGrad01)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#langGrad01)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      01 — PEER
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    A Peer is not simply someone who belongs.
                  </h3>
                </div>
                <div className="shrink-0 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-200/80 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-rose-50/80 self-start shadow-2xs">
                  <span className="brand-gradient-text">Relationship Over Status</span>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-cool-grey-600 leading-relaxed text-base sm:text-lg font-normal">
                <p>
                  A Member has a status. <strong className="text-slate-900 font-bold">A Peer has a relationship.</strong> That distinction matters.
                </p>
                <p>
                  You become a Member by joining PEERS GLOBAL. You become a Peer through the relationships you build, the trust you develop, the experience you share and the contribution you make.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 py-2 text-xs sm:text-sm font-medium text-slate-800">
                  <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-[#1D4ED8] shrink-0" />
                    <span>Introduce you to someone you need to know</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-[#1D4ED8] shrink-0" />
                    <span>Challenge your thinking constructively</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-[#1D4ED8] shrink-0" />
                    <span>Share hard-won lessons openly</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-[#1D4ED8] shrink-0" />
                    <span>Open previously closed doors</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-[#1D4ED8] shrink-0" />
                    <span>Listen when business becomes difficult</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-[#1D4ED8] shrink-0" />
                    <span>Celebrate when something goes right</span>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-[#FAFBFD] to-rose-50/90 border border-slate-200/90 shadow-2xs">
                  <p className="text-base sm:text-lg font-bold brand-gradient-text text-center">
                    &ldquo;Membership is what you buy. Peer is what you become.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* 02 — CIRCLE */}
            <div className="rounded-[32px] border border-cool-grey-250 bg-white p-8 sm:p-12 shadow-xs hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2.5">
                    <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="langGrad02" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1D4ED8" />
                            <stop offset="100%" stopColor="#E11D48" />
                          </linearGradient>
                        </defs>
                        <circle cx="12" cy="12" r="10" stroke="url(#langGrad02)" strokeWidth="2" />
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" stroke="url(#langGrad02)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      02 — CIRCLE
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    Your Circle. Your Inner Board.
                  </h3>
                </div>
                <div className="shrink-0 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-200/80 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-rose-50/80 self-start shadow-2xs">
                  <span className="brand-gradient-text">The Inner Board</span>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-cool-grey-600 leading-relaxed text-base sm:text-lg font-normal">
                <p>
                  A Circle is where the idea of PEERS GLOBAL becomes personal. It is a structured community of entrepreneurs who meet regularly, build relationships and create opportunities for one another.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 py-2 text-xs sm:text-sm font-medium text-slate-800">
                  <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#1D4ED8]" />
                    <span>Experience you can draw upon</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#1D4ED8]" />
                    <span>Peers you can ask and help</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#1D4ED8]" />
                    <span>Fresh perspectives on your business</span>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-[#FAFBFD] to-rose-50/90 border border-slate-200/90 shadow-2xs">
                  <p className="text-base sm:text-lg font-bold brand-gradient-text text-center">
                    &ldquo;Circles create the environment. Relationships create the value.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* 03 — POWERHOUSE */}
            <div className="rounded-[32px] border border-cool-grey-250 bg-white p-8 sm:p-12 shadow-xs hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2.5">
                    <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="langGrad03" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1D4ED8" />
                            <stop offset="100%" stopColor="#E11D48" />
                          </linearGradient>
                        </defs>
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="url(#langGrad03)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      03 — POWERHOUSE
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    Contribution needs people who are willing to step forward.
                  </h3>
                </div>
                <div className="shrink-0 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-200/80 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-rose-50/80 self-start shadow-2xs">
                  <span className="brand-gradient-text">Contribution in Action</span>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-cool-grey-600 leading-relaxed text-base sm:text-lg font-normal">
                <p>
                  A Powerhouse is a Peer who takes responsibility for helping the community move forward. It represents contribution in action.
                </p>
                <p>
                  Leadership inside PEERS GLOBAL is not a position of distance—it is a responsibility to serve the people around you.
                </p>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs font-semibold text-slate-900 text-sm sm:text-base">
                  The strongest communities are strengthened by people who ask: <span className="brand-gradient-text font-bold">&ldquo;What can I contribute?&rdquo;</span>
                </div>
              </div>
            </div>

            {/* 04 — GIVE-FIRST */}
            <div className="rounded-[32px] border border-cool-grey-250 bg-white p-8 sm:p-12 shadow-xs hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2.5">
                    <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="langGrad04" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1D4ED8" />
                            <stop offset="100%" stopColor="#E11D48" />
                          </linearGradient>
                        </defs>
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" stroke="url(#langGrad04)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" stroke="url(#langGrad04)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="m18 15-2-2" stroke="url(#langGrad04)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="m15 18-2-2" stroke="url(#langGrad04)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      04 — GIVE-FIRST
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    Before asking what the community can do for you, ask what you can do for someone in it.
                  </h3>
                </div>
                <div className="shrink-0 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-200/80 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-rose-50/80 self-start shadow-2xs">
                  <span className="brand-gradient-text">Mindset of Abundance</span>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-cool-grey-600 leading-relaxed text-base sm:text-lg font-normal">
                <p>
                  Give-First means beginning with a mindset of contribution rather than extraction. A small act of contribution creates a relationship. A relationship creates trust. Trust creates collaboration. And collaboration creates impact.
                </p>
                <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-[#FAFBFD] to-rose-50/90 border border-slate-200/90 shadow-2xs">
                  <p className="text-sm sm:text-base font-bold text-slate-900 text-center">
                    Give first. Build trust. Create value. Let relationships grow. That is how a community compounds.
                  </p>
                </div>
              </div>
            </div>

            {/* 05 — LIFE IMPACTOR */}
            <div className="rounded-[32px] border border-cool-grey-250 bg-white p-8 sm:p-12 shadow-xs hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2.5">
                    <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="langGrad05" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1D4ED8" />
                            <stop offset="100%" stopColor="#E11D48" />
                          </linearGradient>
                        </defs>
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" stroke="url(#langGrad05)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      05 — LIFE IMPACTOR
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    Success becomes more meaningful when it changes something for someone else.
                  </h3>
                </div>
                <div className="shrink-0 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-200/80 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-rose-50/80 self-start shadow-2xs">
                  <span className="brand-gradient-text">1 Action = 1 Life Impacted</span>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-cool-grey-600 leading-relaxed text-base sm:text-lg font-normal">
                <p>
                  A Life Impactor is a Peer whose actions create a positive difference in another person&apos;s journey. Every genuine contribution matters: introductions, teaching, mentoring, and solving real challenges.
                </p>
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-bold text-sm sm:text-base shadow-md">
                  <Sparkles className="size-4" />
                  <span>1 Action = 1 Life Impacted</span>
                </div>
              </div>
            </div>

            {/* 06 — LSR */}
            <div className="rounded-[32px] border border-cool-grey-250 bg-white p-8 sm:p-12 shadow-xs hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2.5">
                    <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="langGrad06" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1D4ED8" />
                            <stop offset="100%" stopColor="#E11D48" />
                          </linearGradient>
                        </defs>
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" stroke="url(#langGrad06)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6h10" stroke="url(#langGrad06)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 10h10" stroke="url(#langGrad06)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      06 — LSR
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    Learning. Sharing. Relationships.
                  </h3>
                </div>
                <div className="shrink-0 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-200/80 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-rose-50/80 self-start shadow-2xs">
                  <span className="brand-gradient-text">The Core Model</span>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-cool-grey-250 space-y-2 shadow-2xs">
                  <h4 className="text-base font-bold text-[#0f131a]">LEARNING</h4>
                  <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                    Entrepreneurs never stop learning. Insight comes from mistakes, mentors, and hard-earned experiences.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-cool-grey-250 space-y-2 shadow-2xs">
                  <h4 className="text-base font-bold text-[#0f131a]">SHARING</h4>
                  <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                    Knowledge becomes more valuable when it moves, turning individual experience into collective strength.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-cool-grey-250 space-y-2 shadow-2xs">
                  <h4 className="text-base font-bold text-[#0f131a]">RELATIONSHIPS</h4>
                  <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                    Business is built by people. Trust takes time, and meaningful collaboration begins with genuine relationships.
                  </p>
                </div>
              </div>
            </div>

            {/* 07 — UNITY */}
            <div className="rounded-[32px] border border-cool-grey-250 bg-white p-8 sm:p-12 shadow-xs hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2.5">
                    <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="langGrad07" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1D4ED8" />
                            <stop offset="100%" stopColor="#E11D48" />
                          </linearGradient>
                        </defs>
                        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" stroke="url(#langGrad07)" strokeWidth="2" />
                        <path d="M12 18h.01" stroke="url(#langGrad07)" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      07 — UNITY
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    The community does not disappear when the meeting ends.
                  </h3>
                </div>
                <div className="shrink-0 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-200/80 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-rose-50/80 self-start shadow-2xs">
                  <span className="brand-gradient-text">The Digital Home</span>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-cool-grey-600 leading-relaxed text-base sm:text-lg font-normal">
                <p>
                  Unity is the digital home of PEERS GLOBAL, connecting your Circle, conversations, collaborations, events, and impact 24/7.
                </p>
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#040F24] via-[#0A1A3F] to-[#040F24] border border-blue-500/20 text-white shadow-md space-y-1.5 relative overflow-hidden">
                  <div className="text-base sm:text-lg font-bold brand-gradient-text tracking-tight">
                    The meeting is an event. The relationship is the experience.
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal">
                    Unity keeps the community connected and responsive between physical gatherings.
                  </p>
                </div>
              </div>
            </div>

            {/* 08 — MINDMELD */}
            <div className="rounded-[32px] border border-cool-grey-250 bg-white p-8 sm:p-12 shadow-xs hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2.5">
                    <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="langGrad08" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1D4ED8" />
                            <stop offset="100%" stopColor="#E11D48" />
                          </linearGradient>
                        </defs>
                        <circle cx="18" cy="5" r="3" stroke="url(#langGrad08)" strokeWidth="2" />
                        <circle cx="6" cy="12" r="3" stroke="url(#langGrad08)" strokeWidth="2" />
                        <circle cx="18" cy="19" r="3" stroke="url(#langGrad08)" strokeWidth="2" />
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" stroke="url(#langGrad08)" strokeWidth="2" />
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" stroke="url(#langGrad08)" strokeWidth="2" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      08 — MINDMELD
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    When different entrepreneurs sit together, new possibilities emerge.
                  </h3>
                </div>
                <div className="shrink-0 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-200/80 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-rose-50/80 self-start shadow-2xs">
                  <span className="brand-gradient-text">Cross-Industry Convergence</span>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-cool-grey-600 leading-relaxed text-base sm:text-lg font-normal">
                <p>
                  A MindMeld brings entrepreneurs together beyond individual Circles to encounter unexpected insights, cross-industry perspectives, and breakthrough ideas.
                </p>
              </div>
            </div>

            {/* 09 — CONFIDENTIAL FORUM */}
            <div className="rounded-[32px] border border-cool-grey-250 bg-white p-8 sm:p-12 shadow-xs hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2.5">
                    <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="langGrad09" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1D4ED8" />
                            <stop offset="100%" stopColor="#E11D48" />
                          </linearGradient>
                        </defs>
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" stroke="url(#langGrad09)" strokeWidth="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="url(#langGrad09)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      09 — CONFIDENTIAL FORUM
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    Some conversations need trust before they need answers.
                  </h3>
                </div>
                <div className="shrink-0 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-200/80 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-rose-50/80 self-start shadow-2xs">
                  <span className="brand-gradient-text">Safe &amp; Discreet Space</span>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-cool-grey-600 leading-relaxed text-base sm:text-lg font-normal">
                <p>
                  The Confidential Forum exists for sensitive entrepreneurial decisions that require discretion, safety, and mature peer counsel.
                </p>
              </div>
            </div>

            {/* 10 — THE 10 FORMS OF COLLABORATION */}
            <div className="rounded-[32px] border border-cool-grey-250 bg-white p-8 sm:p-12 shadow-xs hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2.5">
                    <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="langGrad10" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1D4ED8" />
                            <stop offset="100%" stopColor="#E11D48" />
                          </linearGradient>
                        </defs>
                        <polygon points="12 2 2 7 12 12 22 7 12 2" stroke="url(#langGrad10)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="2 17 12 22 22 17" stroke="url(#langGrad10)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="2 12 12 17 22 12" stroke="url(#langGrad10)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      10 — THE 10 FORMS OF COLLABORATION
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    Collaboration can take many forms.
                  </h3>
                </div>
                <div className="shrink-0 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-200/80 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-rose-50/80 self-start shadow-2xs">
                  <span className="brand-gradient-text">Beyond Referrals</span>
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <p className="text-cool-grey-600 text-base sm:text-lg font-normal leading-relaxed">
                  Collaboration happens wherever one entrepreneur&apos;s capability, relationship, or resource helps another move forward.
                </p>

                {/* 10 Forms Dynamic Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {TEN_FORMS_OF_COLLABORATION.map((item, formIdx) => {
                    const IconComponent = item.icon
                    return (
                      <div
                        key={item.id}
                        className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300/80 transition-all flex flex-col justify-between space-y-3 group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="size-11 rounded-2xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-2xs">
                            <svg className="size-5.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <defs>
                                <linearGradient id={`formIconGrad${formIdx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#1D4ED8" />
                                  <stop offset="100%" stopColor="#E11D48" />
                                </linearGradient>
                              </defs>
                              {formIdx === 0 && (
                                /* Business Referral / Send */
                                <path d="m22 2-7 20-4-9-9-4Z" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              )}
                              {formIdx === 1 && (
                                /* Mentorship / BookOpen */
                                <>
                                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </>
                              )}
                              {formIdx === 2 && (
                                /* Joint Venture / Handshake */
                                <>
                                  <path d="m11 17 2 2a1 1 0 0 0 1.42 0l4.24-4.24a1 1 0 0 0 0-1.42l-5.66-5.66a1 1 0 0 0-1.42 0L8 11.34" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="m18 14 2.5-2.5a2.12 2.12 0 0 0 0-3v0a2.12 2.12 0 0 0-3 0L15 11" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="m14 18 2.5-2.5" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="m6 13.34-2.5-2.5a2.12 2.12 0 0 1 0-3v0a2.12 2.12 0 0 1 3 0L9 10.34" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </>
                              )}
                              {formIdx === 3 && (
                                /* Knowledge Sharing / Lightbulb */
                                <>
                                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M9 18h6" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M10 22h4" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </>
                              )}
                              {formIdx === 4 && (
                                /* Problem Solving / Sparkles */
                                <>
                                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </>
                              )}
                              {formIdx === 5 && (
                                /* Vendor Connect / Building2 */
                                <>
                                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M10 6h4" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M10 10h4" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M10 14h4" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M10 18h4" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </>
                              )}
                              {formIdx === 6 && (
                                /* Funding Access / TrendingUp */
                                <>
                                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <polyline points="16 7 22 7 22 13" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </>
                              )}
                              {formIdx === 7 && (
                                /* Visibility & PR / Eye */
                                <>
                                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <circle cx="12" cy="12" r="3" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </>
                              )}
                              {formIdx === 8 && (
                                /* Emotional Support / Heart */
                                <>
                                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </>
                              )}
                              {formIdx === 9 && (
                                /* Execution Support / Hammer */
                                <>
                                  <path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M17.64 15 22 10.64" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="m20.91 3.26-6.36 6.36" stroke={`url(#formIconGrad${formIdx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </>
                              )}
                            </svg>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            0{item.id}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
                            {item.form}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                            {item.meaning}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE PEERS GLOBAL REFERENCE TABLE
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                QUICK LEXICON GUIDE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0f131a] tracking-tight leading-[1.14]">
              <span>The PEERS GLOBAL</span>{' '}
              <span className="brand-gradient-text block sm:inline">Reference Table</span>
            </h2>

            <p className="text-cool-grey-600 text-base sm:text-lg font-normal leading-relaxed">
              A comprehensive summary of the terminology that shapes our daily interactions.
            </p>
          </div>

          <div className="rounded-[32px] border border-cool-grey-250 bg-[#FAFBFD] p-6 sm:p-10 shadow-sm overflow-x-auto">
            <table className="min-w-full text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-cool-grey-250 text-slate-900 font-bold uppercase tracking-wider text-xs">
                  <th className="py-4 pr-6 w-1/4">WORD</th>
                  <th className="py-4 pr-6 w-1/4">CATEGORY</th>
                  <th className="py-4">WHAT IT MEANS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cool-grey-200 text-slate-700">
                {REFERENCE_TABLE_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white transition-colors">
                    <td className="py-4 pr-6 font-bold text-slate-900 align-middle">
                      {row.word}
                    </td>
                    <td className="py-4 pr-6 align-middle">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-blue-200/80 bg-gradient-to-r from-blue-50/90 via-indigo-50/60 to-rose-50/80 shadow-2xs">
                        <span className="brand-gradient-text">{row.badge}</span>
                      </span>
                    </td>
                    <td className="py-4 leading-relaxed text-cool-grey-600 align-middle font-normal text-xs sm:text-sm">
                      {row.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PHILOSOPHY & LIVING THE WORDS
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#FAFBFD] border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Why Words Matter - 2-Column Showcase */}
          <div className="rounded-[32px] border border-cool-grey-250 bg-gradient-to-br from-[#FAFBFD] via-white to-blue-50/30 p-8 sm:p-12 lg:p-14 shadow-sm space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THE POWER OF LANGUAGE
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f131a] tracking-tight leading-[1.15]">
                  <span>Why Words</span>{' '}
                  <span className="brand-gradient-text block sm:inline">Matter</span>
                </h3>

                <div className="space-y-4 text-cool-grey-600 text-base sm:text-lg leading-relaxed font-normal">
                  <p>
                    Words shape behaviour. If we call someone a customer, we think of transactions. If we call someone a lead, we think of conversion. If we call someone a member, we recognise formal belonging.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold">But when we call someone a Peer, everything changes.</strong> The word suggests relationship, respect, reciprocity, and human equality.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border border-cool-grey-250/90 shadow-md space-y-4">
                <div className="size-12 rounded-xl bg-gradient-to-br from-blue-600 to-rose-600 text-white flex items-center justify-center shadow-sm">
                  <ShieldCheck className="size-6" />
                </div>
                <h4 className="text-lg font-bold text-[#0f131a]">
                  Behavior Follows Language
                </h4>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  The language guides the behaviour. And the behaviour makes the language real.
                </p>
                <div className="pt-2 border-t border-slate-100 text-xs font-bold text-blue-600">
                  Relationship • Respect • Reciprocity
                </div>
              </div>
            </div>
          </div>

          {/* Living The Words Split Section */}
          <div className="rounded-[32px] border border-cool-grey-250 bg-white p-8 sm:p-12 lg:p-14 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading & Cultural Context */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    LIVING THE WORDS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#0f131a] tracking-tight leading-[1.18]">
                  A Language Becomes Culture When People Live It
                </h3>

                <p className="text-sm sm:text-base text-cool-grey-600 leading-relaxed font-normal">
                  Values are only as real as the everyday actions of the community. In Peers Global, each word in our vocabulary represents a living practice.
                </p>

                <div className="pt-4 border-t border-cool-grey-200/80 flex items-center gap-3 text-xs font-semibold text-slate-500">
                  <span className="size-2 rounded-full bg-[#1D4ED8]" />
                  <span>Practiced daily across all global Circles</span>
                </div>
              </div>

              {/* Right Column: 2-Column Split of Living Words Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-cool-grey-200/90 shadow-2xs hover:shadow-md hover:border-blue-200 transition-all space-y-1.5 group">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-900 font-bold text-sm block group-hover:text-[#1D4ED8] transition-colors">Give-First</strong>
                    <span className="size-2 rounded-full bg-blue-500/40" />
                  </div>
                  <p className="text-xs sm:text-[13px] text-cool-grey-600 leading-relaxed">Becomes real when someone helps without being asked.</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-cool-grey-200/90 shadow-2xs hover:shadow-md hover:border-indigo-200 transition-all space-y-1.5 group">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-900 font-bold text-sm block group-hover:text-indigo-600 transition-colors">Peer</strong>
                    <span className="size-2 rounded-full bg-indigo-500/40" />
                  </div>
                  <p className="text-xs sm:text-[13px] text-cool-grey-600 leading-relaxed">Becomes real when trust is earned and protected.</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-cool-grey-200/90 shadow-2xs hover:shadow-md hover:border-emerald-200 transition-all space-y-1.5 group">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-900 font-bold text-sm block group-hover:text-emerald-600 transition-colors">Circle</strong>
                    <span className="size-2 rounded-full bg-emerald-500/40" />
                  </div>
                  <p className="text-xs sm:text-[13px] text-cool-grey-600 leading-relaxed">Becomes real when people show up for one another.</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-cool-grey-200/90 shadow-2xs hover:shadow-md hover:border-amber-200 transition-all space-y-1.5 group">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-900 font-bold text-sm block group-hover:text-amber-600 transition-colors">Confidential Forum</strong>
                    <span className="size-2 rounded-full bg-amber-500/40" />
                  </div>
                  <p className="text-xs sm:text-[13px] text-cool-grey-600 leading-relaxed">Becomes real when sensitive matters remain safe.</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-cool-grey-200/90 shadow-2xs hover:shadow-md hover:border-rose-200 transition-all space-y-1.5 group">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-900 font-bold text-sm block group-hover:text-rose-600 transition-colors">Life Impactor</strong>
                    <span className="size-2 rounded-full bg-rose-500/40" />
                  </div>
                  <p className="text-xs sm:text-[13px] text-cool-grey-600 leading-relaxed">Becomes real when action changes someone&apos;s journey.</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-cool-grey-200/90 shadow-2xs hover:shadow-md hover:border-cyan-200 transition-all space-y-1.5 group">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-900 font-bold text-sm block group-hover:text-cyan-600 transition-colors">Unity</strong>
                    <span className="size-2 rounded-full bg-cyan-500/40" />
                  </div>
                  <p className="text-xs sm:text-[13px] text-cool-grey-600 leading-relaxed">Becomes real when connection continues 24/7.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Cosmic Banner: Language in One Line */}
          <div className="relative overflow-hidden rounded-[32px] border border-cool-grey-250 bg-gradient-to-br from-slate-900 via-[#0B1528] to-[#040812] p-8 sm:p-12 lg:p-14 text-white shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold tracking-widest uppercase text-amber-300">
                THE PEERS GLOBAL LANGUAGE IN ONE LINE
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                <span>Circles, not crowds. Trust, not transactions.</span>{' '}
                <span className="brand-gradient-text block sm:inline">Peers, not gurus.</span>
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Because the ambition is not simply to create a larger network. It is to create a community in which entrepreneurs learn from one another, contribute to one another, collaborate with one another—and grow without having to build alone.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CLOSING / MISSION SECTION
          ========================================================================= */}
      <ClosingCtaSection
        eyebrow="PEERS ARE PARTNERS IN BUSINESS AND FRIENDS IN LIFE"
        title="Designed in Bharat. Built for the World."
        subtitle="Learn the language. Live the culture. Build without being alone."
        description="PEERS GLOBAL is the World's First Community of Collaboration. Discover Circles, build lasting trust, and achieve impact at scale."
        primaryButtonText="BECOME A PEER"
        primaryButtonHref="/membership"
        secondaryButtonText="EXPLORE CIRCLES"
        secondaryButtonHref="/circles"
      />

    </div>
  )
}


import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
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
                <Link
                  href="/membership"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:opacity-95 transition-all duration-300 group cursor-pointer"
                >
                  <span>Become a Peer</span>
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href="#terms"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-sm transition-all duration-300"
                >
                  <span>Explore 10 Core Words</span>
                </a>
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
                People
              </p>
              <p
                className="text-3xl sm:text-4xl text-white leading-tight font-bold"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Create
              </p>
              <p
                className="text-3xl sm:text-4xl text-sky-400 font-bold leading-tight"
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
                  <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
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
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE 10 DEFINING CONCEPTS
              </span>
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
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
                  <div className="inline-flex items-center gap-2">
                    <span className="size-8 rounded-lg bg-blue-50 text-[#1D4ED8] flex items-center justify-center">
                      <Users className="size-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      01 — PEER
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    A Peer is not simply someone who belongs.
                  </h3>
                </div>
                <div className="shrink-0 bg-blue-50 text-[#1D4ED8] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-100 self-start">
                  Relationship Over Status
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
                  <div className="inline-flex items-center gap-2">
                    <span className="size-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                      <Compass className="size-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      02 — CIRCLE
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    Your Circle. Your Inner Board.
                  </h3>
                </div>
                <div className="shrink-0 bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-teal-100 self-start">
                  The Inner Board
                </div>
              </div>

              <div className="mt-6 space-y-4 text-cool-grey-600 leading-relaxed text-base sm:text-lg font-normal">
                <p>
                  A Circle is where the idea of PEERS GLOBAL becomes personal. It is a structured community of entrepreneurs who meet regularly, build relationships and create opportunities for one another.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 py-2 text-xs sm:text-sm font-medium text-slate-800">
                  <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-teal-500" />
                    <span>Experience you can draw upon</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-teal-500" />
                    <span>Peers you can ask and help</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-teal-500" />
                    <span>Fresh perspectives on your business</span>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-teal-50/80 border border-teal-200/80 shadow-2xs">
                  <p className="text-base sm:text-lg font-bold text-teal-900 text-center">
                    &ldquo;Circles create the environment. Relationships create the value.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* 03 — POWERHOUSE */}
            <div className="rounded-[32px] border border-cool-grey-250 bg-white p-8 sm:p-12 shadow-xs hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="size-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Zap className="size-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      03 — POWERHOUSE
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    Contribution needs people who are willing to step forward.
                  </h3>
                </div>
                <div className="shrink-0 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-indigo-100 self-start">
                  Contribution in Action
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
                  <div className="inline-flex items-center gap-2">
                    <span className="size-8 rounded-lg bg-rose-50 text-[#E11D48] flex items-center justify-center">
                      <HeartHandshake className="size-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      04 — GIVE-FIRST
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    Before asking what the community can do for you, ask what you can do for someone in it.
                  </h3>
                </div>
                <div className="shrink-0 bg-rose-50 text-[#E11D48] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-rose-100 self-start">
                  Mindset of Abundance
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
                  <div className="inline-flex items-center gap-2">
                    <span className="size-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Sparkles className="size-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      05 — LIFE IMPACTOR
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    Success becomes more meaningful when it changes something for someone else.
                  </h3>
                </div>
                <div className="shrink-0 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-emerald-100 self-start">
                  1 Action = 1 Life Impacted
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
                  <div className="inline-flex items-center gap-2">
                    <span className="size-8 rounded-lg bg-blue-50 text-[#1D4ED8] flex items-center justify-center">
                      <BookOpen className="size-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      06 — LSR
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    Learning. Sharing. Relationships.
                  </h3>
                </div>
                <div className="shrink-0 bg-blue-50 text-[#1D4ED8] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-100 self-start">
                  The Core Model
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
                  <div className="inline-flex items-center gap-2">
                    <span className="size-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                      <Smartphone className="size-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      07 — UNITY
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    The community does not disappear when the meeting ends.
                  </h3>
                </div>
                <div className="shrink-0 bg-sky-50 text-sky-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-sky-100 self-start">
                  The Digital Home
                </div>
              </div>

              <div className="mt-6 space-y-4 text-cool-grey-600 leading-relaxed text-base sm:text-lg font-normal">
                <p>
                  Unity is the digital home of PEERS GLOBAL, connecting your Circle, conversations, collaborations, events, and impact 24/7.
                </p>
                <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white shadow-md space-y-1">
                  <div className="text-base sm:text-lg font-bold text-sky-300">
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
                  <div className="inline-flex items-center gap-2">
                    <span className="size-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                      <Share2 className="size-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      08 — MINDMELD
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    When different entrepreneurs sit together, new possibilities emerge.
                  </h3>
                </div>
                <div className="shrink-0 bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-purple-100 self-start">
                  Cross-Industry Convergence
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
                  <div className="inline-flex items-center gap-2">
                    <span className="size-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                      <Lock className="size-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      09 — CONFIDENTIAL FORUM
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    Some conversations need trust before they need answers.
                  </h3>
                </div>
                <div className="shrink-0 bg-rose-50 text-rose-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-rose-100 self-start">
                  Safe &amp; Discreet Space
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
                  <div className="inline-flex items-center gap-2">
                    <span className="size-8 rounded-lg bg-blue-50 text-[#1D4ED8] flex items-center justify-center">
                      <Layers className="size-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      10 — THE 10 FORMS OF COLLABORATION
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f131a] tracking-tight">
                    Collaboration can take many forms.
                  </h3>
                </div>
                <div className="shrink-0 bg-blue-50 text-[#1D4ED8] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-100 self-start">
                  Beyond Referrals
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <p className="text-cool-grey-600 text-base sm:text-lg font-normal leading-relaxed">
                  Collaboration happens wherever one entrepreneur&apos;s capability, relationship, or resource helps another move forward.
                </p>

                {/* 10 Forms Dynamic Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {TEN_FORMS_OF_COLLABORATION.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <div
                        key={item.id}
                        className="p-5 rounded-2xl bg-[#FAFBFD] border border-cool-grey-200/90 shadow-2xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between space-y-3 group"
                      >
                        <div className="flex items-center justify-between">
                          <div className={`size-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs`}>
                            <IconComponent className="size-5" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            0{item.id}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#0f131a] group-hover:text-blue-600 transition-colors">
                            {item.form}
                          </h4>
                          <p className="text-xs text-cool-grey-600 leading-relaxed font-normal pt-1">
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
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                QUICK LEXICON GUIDE
              </span>
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
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
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#1D4ED8] border border-blue-100">
                        {row.badge}
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
                  <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
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
                  <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
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


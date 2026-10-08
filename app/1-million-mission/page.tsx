import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import {
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Users,
  Compass,
  Layers,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
  Building2,
  Globe,
  Share2,
  Quote,
  Target,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'The 1 Million Mission | Become a Life Impactor — Peers Global',
  description:
    '1M+ entrepreneurs to impact by 2030. 1 Action = 1 Life Impacted. Discover how individual contribution compounds into a global movement of entrepreneurs helping entrepreneurs.',
  keywords: [
    '1 Million Mission',
    'Life Impactor',
    '1 Action = 1 Life Impacted',
    'Entrepreneurs Helping Entrepreneurs',
    '1M Entrepreneurs Impact 2030',
    'PEERS GLOBAL Impact Architecture',
  ],
}

// 8 Forms of Action from prompt
const ACTION_EXAMPLES = [
  'Share knowledge and insights.',
  'Make a key introduction.',
  'Mentor another entrepreneur.',
  'Help solve a business problem.',
  'Open a business opportunity.',
  'Support someone through a difficult decision.',
  'Take responsibility for a community initiative.',
  'Connect the right two people at the right time.',
]

// Architecture Flow
const ARCHITECTURE_FLOW = [
  { step: '01', title: 'Entrepreneurs', desc: 'Entrepreneurs meet with mutual respect and shared ambitions.' },
  { step: '02', title: 'Relationships', desc: 'Trust develops through regular interaction and authentic sharing.' },
  { step: '03', title: 'Collaboration', desc: 'Working together through 10 distinct forms of mutual value.' },
  { step: '04', title: 'Contribution', desc: 'Giving first without calculating immediate returns.' },
  { step: '05', title: 'Impact', desc: 'A life is positively changed and the cycle compounds.' },
]

// Live/Mission Architecture Stats
const MISSION_STATS = [
  { value: '1M+', label: 'Entrepreneurs to Impact by 2030', sub: 'Target Goal' },
  { value: '1 Action', label: '1 Life Impacted', sub: 'Impact Principle' },
  { value: '18', label: 'Industry & Goal Circles', sub: 'The Structured Ecosystem' },
  { value: '10', label: 'Forms of Collaboration', sub: 'Beyond Business Referrals' },
]

// How You Can Create Impact List
const HOW_TO_IMPACT = [
  'Share something you have learned.',
  'Make an introduction.',
  'Offer your experience.',
  'Ask someone what they need.',
  'Help solve a problem.',
  'Invite the right entrepreneur into the right room.',
  'Teach what you know.',
  'Learn from someone who has walked the road before you.',
  'Recognise another person\'s contribution.',
  'And when you can help, help.',
]

export default function OneMillionMissionPage() {
  const missionSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'The 1 Million Mission | PEERS GLOBAL',
    description:
      'The 1 Million Mission of PEERS GLOBAL aims to impact 1M+ entrepreneurs by 2030 based on the principle 1 Action = 1 Life Impacted.',
    publisher: {
      '@type': 'Organization',
      name: 'PEERS GLOBAL',
      url: 'https://peersglobal.com',
    },
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0062D2] selection:text-white">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(missionSchema) }}
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
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-slate-400">Our World</span>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-white font-semibold">1 Million Mission</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[440px] lg:min-h-[480px]">
            <div className="lg:col-span-8 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>THE 1 MILLION MISSION · 2030 GOAL</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white font-serif">
                  Become a{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Life Impactor.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  1M+ entrepreneurs to impact by 2030. One million is a big number, but it begins with one person: <strong className="text-sky-300 font-bold">1 Action = 1 Life Impacted</strong>.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/membership"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:opacity-95 transition-all duration-300 group cursor-pointer"
                >
                  <span>Become a Life Impactor</span>
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-sm transition-all duration-300"
                >
                  <span>Download the Unity App</span>
                </a>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg pt-6 border-t border-white/15">
                {[
                  { icon: Target, value: '1M+', label: 'Target by 2030' },
                  { icon: Sparkles, value: '1 Action', label: '1 Life Impacted' },
                  { icon: Users, value: '18 Circles', label: 'Structured Community' },
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
                One Action
              </p>
              <p
                className="text-3xl sm:text-4xl text-white leading-tight font-bold"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                One Life Impacted
              </p>
              <p
                className="text-3xl sm:text-4xl text-sky-400 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                A Global Movement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE NUMBER THAT MATTERS & WHY ONE MILLION?
          ========================================================================= */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAFBFD] to-white text-slate-900 border-b border-slate-200/80 overflow-hidden">
        {/* Subtle glowing brand gradient background mesh */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_15%,rgba(29,78,216,0.03),transparent_60%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_80%_85%,rgba(225,29,72,0.03),transparent_60%)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* The Number That Matters */}
          <div className="space-y-8">
            <div className="max-w-4xl space-y-3">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase">
                <span className="brand-gradient-text">THE NUMBER THAT MATTERS</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.12]">
                <span className="text-slate-950 block">One million is a big number.</span>
                <span className="brand-gradient-text block mt-1.5 font-bold">
                  It begins with one person.
                </span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                The mission is not measured in abstract totals — it lives in the tangible transformation of individual journeys.
              </p>
            </div>

            {/* Rich Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {[
                {
                  num: '01',
                  icon: Sparkles,
                  title: 'A Timely Introduction',
                  desc: 'One entrepreneur who receives a trusted introduction at the exact right moment.'
                },
                {
                  num: '02',
                  icon: Lightbulb,
                  title: 'A Pivotal Insight',
                  desc: 'One entrepreneur who learns a hard-won lesson that changes a critical business decision.'
                },
                {
                  num: '03',
                  icon: Users,
                  title: 'Shared Experience',
                  desc: 'One entrepreneur who finds a fellow founder willing to openly share their real experience.'
                },
                {
                  num: '04',
                  icon: HeartHandshake,
                  title: 'Clarity in Uncertainty',
                  desc: 'One entrepreneur who receives patient guidance when the answer is not obvious.'
                },
                {
                  num: '05',
                  icon: Globe,
                  title: 'Never Building Alone',
                  desc: 'One entrepreneur who discovers that they do not have to carry the entire weight alone.',
                  spanFull: true
                }
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-400 shadow-xs hover:shadow-lg transition-all flex items-start gap-4 group hover:-translate-y-0.5 ${
                      item.spanFull ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 flex items-center justify-center text-[#1D4ED8] group-hover:scale-110 transition-transform shrink-0 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-serif font-bold text-slate-950 group-hover:text-[#1D4ED8] transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-xs font-mono font-bold brand-gradient-text bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 px-2 py-0.5 rounded-md">
                          {item.num}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Quote Banner */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50/90 via-white to-rose-50/60 border border-slate-200 text-center shadow-xs">
              <p className="text-base sm:text-xl font-serif text-slate-950 leading-relaxed">
                “That is why our mission is not simply about reaching a number. It is about creating{' '}
                <strong className="brand-gradient-text font-bold">one million meaningful possibilities</strong>{' '}
                through entrepreneurs helping entrepreneurs.”
              </p>
            </div>
          </div>

          {/* Why One Million? - Split Executive Layout */}
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 sm:p-12 lg:p-14 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1D4ED8] via-[#8B5CF6] to-[#E11D48]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading & Core Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase">
                  <span className="brand-gradient-text">WHY ONE MILLION?</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-950 leading-[1.16] tracking-tight">
                  When an entrepreneur grows, the impact rarely stops with that entrepreneur.
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  India is home to millions of entrepreneurs and small and medium businesses. Behind those businesses are people carrying responsibility for employees, families, customers, communities, and their own dreams.
                </p>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/80 via-[#FAFBFD] to-rose-50/50 border border-slate-200 text-slate-900 text-xs sm:text-sm font-medium flex items-center gap-3">
                  <span className="size-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] shrink-0" />
                  <span>
                    The mission is not simply to build a large community. It is to build a culture in which <strong className="brand-gradient-text font-bold">contribution compounds endlessly.</strong>
                  </span>
                </div>
              </div>

              {/* Right Column: 5 Multiplier Ripple Cards */}
              <div className="lg:col-span-6 space-y-3">
                {[
                  { text: 'A new employee gets a life-changing opportunity.', tag: 'Employment', color: 'text-[#1D4ED8]', bg: 'bg-blue-50', border: 'hover:border-blue-200' },
                  { text: 'A supplier or MSME partner gains sustainable business.', tag: 'Supply Chain', color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'hover:border-indigo-200' },
                  { text: 'A founder family achieves enduring financial security.', tag: 'Family Security', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'hover:border-emerald-200' },
                  { text: 'A customer receives a higher-quality honest solution.', tag: 'Customer Value', color: 'text-amber-600', bg: 'bg-amber-50', border: 'hover:border-amber-200' },
                  { text: 'Another aspiring founder finds the courage to begin.', tag: 'Inspiration', color: 'text-[#E11D48]', bg: 'bg-rose-50', border: 'hover:border-rose-200' }
                ].map((ripple, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 hover:border-slate-400 flex items-center justify-between gap-3 shadow-2xs hover:shadow-md transition-all group ${ripple.border}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`size-8 rounded-xl ${ripple.bg} ${ripple.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform font-bold text-xs`}>
                        <CheckCircle2 className="size-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-900 group-hover:text-slate-950 transition-colors">
                        {ripple.text}
                      </span>
                    </div>
                    <span className="text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 shrink-0 shadow-2xs">
                      {ripple.tag}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ONE ACTION. ONE LIFE. (THE IMPACT SYSTEM)
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FAFBFD] via-white to-[#FAFBFD] text-slate-900 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_20%_30%,rgba(29,78,216,0.03),transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase">
              <span className="brand-gradient-text">THE IMPACT PRINCIPLE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-[1.15]">
              One Action. One Life.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our Impact System is deliberately simple: <strong className="brand-gradient-text">1 Action = 1 Life Impacted</strong>. We do not ask whether one action is bigger than another. We recognise the fact that someone chose to contribute.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACTION_EXAMPLES.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-slate-400 transition-all flex flex-col justify-between space-y-5 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold brand-gradient-text">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="size-10 rounded-xl bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 text-[#1D4ED8] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                    <Sparkles className="size-5" />
                  </div>
                </div>
                <p className="text-base font-semibold text-slate-950 group-hover:text-[#1D4ED8] transition-colors leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-800 bg-[#050C1A] p-8 sm:p-12 text-white text-center max-w-4xl mx-auto space-y-3 relative overflow-hidden shadow-xl">
            <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-blue-600/20 blur-3xl" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              THE HUMAN VALUE BEHIND IT
            </p>
            <p className="font-serif text-2xl sm:text-3xl text-white leading-relaxed">
              The form of contribution may change. The human value behind it does not. Someone helped someone else move forward. That is worth recognising.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOW THE MISSION IS BUILT & IMPACT MULTIPLIES
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-[#FAFBFD] to-white text-slate-900 border-b border-slate-200/80 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Architecture flow */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase">
                <span className="brand-gradient-text">THE ARCHITECTURE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
                How the Mission Is Built
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                A mission of one million cannot be achieved by one person. The architecture grows through people:
              </p>
              <div className="p-3.5 bg-gradient-to-r from-blue-50/80 via-white to-rose-50/50 border border-slate-200 rounded-2xl text-slate-950 font-semibold text-xs sm:text-sm inline-block shadow-2xs">
                Entrepreneurs → Relationships → Collaboration → Contribution → Impact
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {ARCHITECTURE_FLOW.map((item) => (
                <div key={item.step} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-400 transition-all space-y-2.5 group hover:-translate-y-1">
                  <span className="text-xs font-mono font-bold brand-gradient-text block bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 px-2 py-0.5 rounded-md w-fit">
                    STEP {item.step}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-slate-950 group-hover:text-[#1D4ED8] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Multiplies */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 space-y-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase">
              <span className="brand-gradient-text">COMPOUNDING CONTRIBUTION</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
              Impact Multiplies
            </h3>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                Imagine one entrepreneur helping another. Then imagine the second entrepreneur helping someone else. Then another Peer sharing an experience that prevents a costly mistake. Another making an introduction. Another mentoring a first-generation entrepreneur. Another opening a door that would otherwise have remained closed.
              </p>
              <p className="font-semibold text-slate-950">
                The impact begins to move. That is the idea behind the mission.
              </p>
              <p>
                We do not need every person to do everything. We need every person to do something meaningful. Because contribution becomes powerful when it is repeated. And when contribution becomes part of culture, impact becomes something a community creates together.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FROM MEMBER TO LIFE IMPACTOR & WHERE WE ARE STATS
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FAFBFD] via-white to-[#FAFBFD] text-slate-900 border-b border-slate-200/80 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase">
                <span className="brand-gradient-text">TRANSFORMATION</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 leading-tight">
                From Member to Life Impactor
              </h2>

              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Membership gives you a place in the community. Being a Peer gives you relationships within it. But becoming a <strong className="brand-gradient-text">Life Impactor</strong> means something more.
                </p>
                <p>
                  It means recognising that your experience, knowledge, relationships, time and willingness to help can become valuable to someone else.
                </p>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 text-sm sm:text-base text-slate-800">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                    <span>You do not have to be the most successful person in the room.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                    <span>You do not have to have every answer.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                    <span>You do not have to wait until you have reached the top.</span>
                  </div>
                  <div className="font-bold brand-gradient-text pt-2 block">
                    You can create impact from wherever you are today.
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Sometimes your greatest contribution may be something you consider small. For someone else, it may arrive at exactly the right moment.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-lg space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase">
                  <span className="brand-gradient-text">WHERE WE ARE</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-950">
                  Visible &amp; Measurable Architecture
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {MISSION_STATS.map((stat, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/50 to-rose-50/40 border border-slate-200/80 space-y-1 text-center">
                      <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                        {stat.value}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider brand-gradient-text">
                        {stat.label}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {stat.sub}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 italic text-center">
                  Behind every number is a human story. The number tells us how far we have travelled; the story tells us why the journey matters.
                </p>
              </div>
            </div>
          </div>

          {/* Your Part in It */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase">
                <span className="brand-gradient-text">YOUR PART IN IT</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                You do not need to change the world alone. You can begin with one person.
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-slate-700 text-sm sm:text-base">
              {HOW_TO_IMPACT.map((action, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-gradient-to-r from-[#FAFBFD] to-white border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-all">
                  <CheckCircle2 className="size-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <span className="text-slate-900 font-medium">{action}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-950 font-bold text-base sm:text-lg">
              That is how a mission becomes a movement.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHAT DOES IT MEAN & ONE MILLION IS NOT DESTINATION
          ========================================================================= */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAFBFD] to-white text-slate-900 border-b border-slate-200/80 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* What does it mean to be a Life Impactor? */}
          <div className="space-y-6">
            <div className="max-w-3xl space-y-2.5">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase">
                <span className="brand-gradient-text">THE PURPOSE</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-semibold text-slate-900 tracking-tight leading-tight">
                What Does It Mean to Be a Life Impactor?
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                It means understanding that entrepreneurship is not only about what you build for yourself. It is also about what becomes possible for others because you were there.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
              {[
                {
                  title: 'Your Knowledge',
                  desc: 'May become someone else’s clarity and strategic breakthrough.',
                  icon: Lightbulb,
                  tag: 'Clarity'
                },
                {
                  title: 'Your Introduction',
                  desc: 'May become someone else’s lifelong partnership or enterprise opportunity.',
                  icon: HeartHandshake,
                  tag: 'Opportunity'
                },
                {
                  title: 'Your Experience',
                  desc: 'May save someone else from repeating a costly or painful mistake.',
                  icon: Compass,
                  tag: 'Wisdom'
                },
                {
                  title: 'Your Encouragement',
                  desc: 'May give an isolated founder the resilience to keep building.',
                  icon: Sparkles,
                  tag: 'Resilience'
                },
                {
                  title: 'Your Collaboration',
                  desc: 'May create bilateral synergy that neither could ever build alone.',
                  icon: Layers,
                  tag: 'Co-Creation'
                },
                {
                  title: 'Your Leadership',
                  desc: 'May inspire another entrepreneur to discover and step into their own.',
                  icon: Users,
                  tag: 'Leadership'
                }
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all flex items-start gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#1D4ED8] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 border border-blue-100/60 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-[#1D4ED8] transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-[10.5px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/50 border border-slate-200 text-center shadow-xs">
              <p className="brand-gradient-text font-serif italic text-2xl sm:text-3xl font-bold">
                That is true impact.
              </p>
            </div>
          </div>

          {/* One Million is not the destination & The mission belongs to all of us */}
          <div className="rounded-3xl border border-slate-800 bg-[#050C1A] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden space-y-6">
            <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-600/20 blur-[90px]" />
            
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase">
                <span>ONE MILLION IS NOT THE DESTINATION</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white">
                The number matters. But the number is not the heart of the mission.
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                The heart is the person behind the number. One million entrepreneurs means one million opportunities to create meaningful impact. And if even one action can positively change one person&apos;s journey, then every Peer has the ability to contribute to the mission.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-sky-300 text-base font-serif italic">
                Not someday. Not after becoming successful. Now.
              </div>
            </div>
          </div>

          {/* The Mission Belongs to All of Us */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase">
                <span className="brand-gradient-text">THE COLLECTIVE PLEDGE</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-slate-950">
                The Mission Belongs to All of Us
              </h3>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                PEERS GLOBAL may have created the mission. But no one person can complete it alone. The mission belongs to every entrepreneur who believes:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3.5 text-sm sm:text-base text-slate-900 font-medium">
              {[
                'I can learn from others with humility.',
                'I can share what I know without keeping score.',
                'I can build relationships based on trust.',
                'I can collaborate instead of competing.',
                'I can contribute something meaningful.',
                'I can impact another life.'
              ].map((pledge, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-gradient-to-r from-[#FAFBFD] to-white border border-slate-200/90 flex items-center gap-3 shadow-2xs hover:border-slate-300 transition-all">
                  <div className="size-6 rounded-full bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 flex items-center justify-center text-[#1D4ED8] shrink-0">
                    <CheckCircle2 className="size-3.5 text-[#1D4ED8]" />
                  </div>
                  <span>{pledge}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-950 font-bold text-base sm:text-lg pt-2 border-t border-slate-100">
              Together, those individual actions become something much larger than any one entrepreneur.
            </p>
          </div>

          {/* Become a Life Impactor Call */}
          <div className="relative rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50/60 via-white to-rose-50/50 p-8 sm:p-14 shadow-sm space-y-6 text-center overflow-hidden">
            <div className="absolute -top-24 -left-24 size-60 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 size-60 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase">
              <span className="brand-gradient-text">JOIN THE MOVEMENT</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-[1.12]">
              Your action can be someone&apos;s{' '}
              <span className="bg-gradient-to-r from-[#1D4ED8] via-[#8B5CF6] to-[#E11D48] bg-clip-text text-transparent">
                turning point.
              </span>
            </h3>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Somewhere in this community, there is an entrepreneur who needs exactly what you already know. And somewhere ahead of you, there is another entrepreneur whose experience can change your own journey.
            </p>

            <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 max-w-xl mx-auto backdrop-blur-xs shadow-2xs">
              <p className="text-slate-950 font-serif italic text-base sm:text-lg">
                Entrepreneurs helping entrepreneurs. Learning. Sharing. Relationships. One action at a time.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:opacity-95 shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
              >
                <span>Become a Life Impactor</span>
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all shadow-2xs"
              >
                <span>Download the Unity App</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CLOSING / MISSION SECTION
          ========================================================================= */}
      <ClosingCtaSection
        eyebrow="1M+ ENTREPRENEURS TO IMPACT BY 2030"
        title="Designed in Bharat. Built for the World."
        subtitle="Circles, not crowds. Trust, not transactions. Peers, not gurus."
        description="PEERS GLOBAL is the World's First Community of Collaboration. Peers are Partners in Business and Friends in Life."
        primaryButtonText="BECOME A LIFE IMPACTOR"
        primaryButtonHref="/membership"
        secondaryButtonText="EXPLORE CIRCLES"
        secondaryButtonHref="/circles"
      />

    </div>
  )
}

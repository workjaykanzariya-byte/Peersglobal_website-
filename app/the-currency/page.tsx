import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  TrendingUp,
  Award,
  Trophy,
  Users,
  Eye,
  Coins,
  ShieldCheck,
  Building2,
  Globe,
  Radio,
  Compass,
  Star,
  Check,
  CheckCircle2,
  ShoppingBag,
  GraduationCap,
  Shirt,
  Sparkles,
  ChevronRight,
  Quote,
  Flame,
  Target,
  HeartHandshake,
  FileText,
} from 'lucide-react'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'

export const metadata: Metadata = {
  title: "The Currency | The Impact System — Peers Global",
  description:
    "Most communities measure activity. We measure impact. 1 Action = 1 Life Impacted. Explore how the Peers Global impact system, Peer Standing, and Peers Coin create real accountability and tangible rewards.",
  keywords: [
    'The Currency',
    'The Impact System',
    'Peers Global Currency',
    'Peers Coin',
    'Life Impact Score',
    'Peer Standing',
    'Unity App',
  ],
}

// 4 Simple Steps in "How it works"
const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'You give.',
    desc: 'Through any of the Ten Ways of Collaboration.',
    icon: HeartHandshake,
    iconColor: 'bg-blue-50 text-[#0062D2]',
  },
  {
    step: '02',
    title: 'It is logged.',
    desc: 'In the Unity App, in two taps.',
    icon: FileText,
    iconColor: 'bg-purple-50 text-purple-600',
  },
  {
    step: '03',
    title: 'The Peer confirms it.',
    desc: 'The person you helped verifies what happened.',
    icon: Users,
    iconColor: 'bg-emerald-50 text-emerald-600',
  },
  {
    step: '04',
    title: 'It counts.',
    desc: 'One action. One life impacted.',
    icon: Star,
    iconColor: 'bg-amber-50 text-amber-600',
  },
]

// 4 Impact Display Touchpoints
const WHERE_YOU_SEE_IT = [
  {
    icon: TrendingUp,
    title: 'Your Impact Score',
    desc: 'Your total lives impacted, live in the Unity App.',
    badgeBg: 'bg-blue-50 text-[#0062D2]',
  },
  {
    icon: Award,
    title: 'Milestone badges',
    desc: 'Recognition as your contribution reaches each level.',
    badgeBg: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: Trophy,
    title: 'National rankings',
    desc: 'Where you stand across the whole community.',
    badgeBg: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Users,
    title: 'The Gratitude & Life Impact Round',
    desc: 'Every Circle meeting opens with each Peer declaring their impact: "This month I impacted 22 lives."',
    badgeBg: 'bg-emerald-50 text-emerald-600',
  },
]

// What it unlocks (4 pillars)
const WHAT_IT_UNLOCKS = [
  {
    icon: Eye,
    title: 'Peer Standing',
    desc: 'How you are seen and what you can reach across the community.',
  },
  {
    icon: Coins,
    title: 'Peers Coin',
    desc: 'Earned alongside every confirmed action, redeemable in the Peers Global Marketplace.',
  },
  {
    icon: Users,
    title: 'Leadership eligibility',
    desc: 'Every role here follows contribution.',
  },
  {
    icon: Trophy,
    title: 'Recognition and awards',
    desc: 'At Circle, city, regional and national level.',
  },
]

// 5 Dimensions of Peer Standing
const PEER_STANDING_DIMENSIONS = [
  {
    icon: Building2,
    label: 'How you are seen',
    desc: 'A reputation that opens doors.',
  },
  {
    icon: Globe,
    label: 'What you can reach',
    desc: 'Access to wider networks.',
  },
  {
    icon: Radio,
    label: 'How your ask lands',
    desc: 'The community responds.',
  },
  {
    icon: Compass,
    label: 'Where you can lead',
    desc: 'Leadership opportunities.',
  },
  {
    icon: Star,
    label: 'How you are celebrated',
    desc: 'Recognised in meetings, app and events.',
  },
]

// Ways to earn Peers Coin
const PEERS_COIN_ACTIONS = [
  'Make introductions',
  'Refer business',
  'Share knowledge',
  'Mentor an entrepreneur',
  'Contribute resources',
  'Participate in your Circle',
  'Bring value to the community',
]

export default function TheCurrencyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white">
      
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
            <span className="text-white font-semibold">The Currency</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[440px] lg:min-h-[480px]">
            {/* Left Content */}
            <div className="lg:col-span-8 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>THE IMPACT SYSTEM · 1 ACTION = 1 LIFE</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white font-serif">
                  The{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Currency.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Most communities measure activity. We measure impact. Every introduction, referral, or guided decision is tracked live on the Unity App as 1 Life Impacted.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/unity"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:opacity-95 transition-all duration-300 group cursor-pointer"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/stories"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-sm transition-all duration-300"
                >
                  <span>Watch Our Story</span>
                </Link>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg pt-6 border-t border-white/15">
                {[
                  { icon: Target, value: '1M+', label: 'Entrepreneurs to Impact' },
                  { icon: Sparkles, value: '1 Action', label: '1 Life Impacted' },
                  { icon: ShieldCheck, value: '100%', label: 'Peer-Verified' },
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
                Ideas · Opportunities
              </p>
              <p
                className="text-3xl sm:text-4xl text-sky-400 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Measurable Impact
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2: "OUR BELIEF"
          Clean White Contrast Section
          ========================================================================= */}
      <section className="relative py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.22em] uppercase mb-4">
            <span className="brand-gradient-text">OUR BELIEF</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mt-2">
            
            {/* Left 7 cols: Narrative */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-6">
                Success is not just <br />
                what you earn.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
                Every community runs on something. This one runs on contribution. Not tenure. Not how much you paid. Not how often you speak. What you have actually given to other entrepreneurs.
              </p>
            </div>

            {/* Right 5 cols: Large Quote */}
            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="border-l-4 border-[#0062D2] pl-6 sm:pl-8 py-2">
                <Quote className="size-8 text-[#0062D2] mb-3 opacity-75" />
                <p className="font-serif italic text-xl sm:text-2xl text-slate-900 font-normal leading-snug">
                  &ldquo;Success is not just what you earn. <br />
                  <span className="font-medium text-[#0062D2]">It is how many lives you impact.&rdquo;</span>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: "ONE ACTION, ONE LIFE." & "HOW IT WORKS"
          Exact Match Redesign to Reference Design
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#FAFBFD] text-slate-900 border-b border-slate-200/80 overflow-hidden">
        
        {/* Soft Ambient Background Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 right-0 h-[500px] w-[500px] rounded-full bg-blue-100/35 blur-[130px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: One action, one life. + 3 Features + CTA (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase mb-4">
                <span className="brand-gradient-text">SIMPLE. FAIR. MEANINGFUL.</span>
              </div>

              {/* Title: One action, one life. */}
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 tracking-tight leading-[1.08] mb-6">
                One action, <br />
                <span className="font-serif italic font-bold brand-gradient-text">one life.</span>
              </h2>

              {/* Body Paragraphs */}
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-xl">
                <p>
                  Every referral given. Every collaboration created. Every person guided. Every introduction made.{' '}
                  <strong className="text-slate-900 font-semibold">
                    Each one counts as one life impacted.
                  </strong>
                </p>
                <p>
                  No weighting. No complicated scoring. A referral that changes a business and an hour given to someone who needed it both count as one, because both changed something for a person.
                </p>
                <p>
                  Tracked in real time on the Unity App, through milestone badges and national rankings.
                </p>
              </div>

              {/* 3 Metric Feature Badges */}
              <div className="grid grid-cols-3 gap-4 mb-8 w-full max-w-xl">
                {/* 1. Real People */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="size-12 rounded-full bg-[#EBF3FC] text-[#0062D2] flex items-center justify-center mb-2.5 shadow-xs border border-blue-100/70">
                    <Users className="size-5" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    Real People
                  </div>
                  <div className="text-[11px] text-slate-500 font-light mt-0.5">
                    Making a real difference.
                  </div>
                </div>

                {/* 2. Measurable Impact */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="size-12 rounded-full bg-[#F3E8FF] text-[#8B5CF6] flex items-center justify-center mb-2.5 shadow-xs border border-purple-100/70">
                    <Target className="size-5" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    Measurable Impact
                  </div>
                  <div className="text-[11px] text-slate-500 font-light mt-0.5">
                    Every action counts.
                  </div>
                </div>

                {/* 3. Stronger Entrepreneurs */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="size-12 rounded-full bg-[#E6F8F0] text-[#10B981] flex items-center justify-center mb-2.5 shadow-xs border border-emerald-100/70">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="3.5" y="13" width="3.5" height="8" rx="1.75" />
                      <rect x="10.25" y="8" width="3.5" height="13" rx="1.75" />
                      <rect x="17" y="3" width="3.5" height="18" rx="1.75" />
                    </svg>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    Stronger Entrepreneurs
                  </div>
                  <div className="text-[11px] text-slate-500 font-light mt-0.5">
                    A brighter tomorrow.
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/10-ways-of-collaboration"
                className="inline-flex rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 items-center gap-2"
              >
                <span>See the 10 Ways</span>
                <ArrowRight className="size-4" />
              </Link>

            </div>

            {/* Right Column: "How it works" Card (6 cols) */}
            <div className="lg:col-span-6 relative">

              {/* Main Card Container */}
              <div className="relative z-10 bg-white rounded-3xl sm:rounded-[32px] p-7 sm:p-10 border border-slate-200/90 shadow-[0_15px_45px_rgba(15,23,42,0.06)]">
                
                {/* Script Callout Top Right */}
                <div className="absolute top-6 sm:top-8 right-6 sm:right-9 text-right pointer-events-none select-none">
                  <div
                    className="text-2xl sm:text-3xl text-[#0062D2] font-semibold leading-[0.95]"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    People <br />
                    Create <br />
                    Impact
                  </div>
                  <svg className="w-20 h-3 text-[#0062D2] mt-0.5 -rotate-2 ml-auto" viewBox="0 0 100 20" fill="none">
                    <path d="M5 14 Q 50 3 95 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Eyebrow */}
                <div className="flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase mb-2">
                  <span className="brand-gradient-text">FOUR SIMPLE STEPS</span>
                </div>

                {/* Headline */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
                  How it works
                </h3>

                {/* 4 Steps List with vertical connecting bar */}
                <div className="relative space-y-6 mb-8">
                  {/* Subtle connecting vertical line behind step numbers */}
                  <div className="absolute left-[18px] top-4 bottom-4 w-px bg-blue-100 -z-0" />

                  {HOW_IT_WORKS_STEPS.map((stepItem, idx) => {
                    const IconComp = stepItem.icon
                    return (
                      <div key={idx} className="relative z-10 flex items-start gap-4">
                        {/* Number Badge */}
                        <span className="size-9 rounded-xl bg-[#EBF3FC] text-[#0062D2] font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs border border-blue-100/80 mt-0.5">
                          {stepItem.step}
                        </span>

                        {/* Icon Circle */}
                        <div className={`size-9 rounded-full flex items-center justify-center shrink-0 shadow-2xs ${stepItem.iconColor} mt-0.5`}>
                          <IconComp className="size-4.5" />
                        </div>

                        {/* Text */}
                        <div>
                          <h4 className="text-base font-bold text-slate-900 mb-0.5">
                            {stepItem.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                            {stepItem.desc}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Integrity Shield Box */}
                <div className="bg-[#F4F8FD] rounded-2xl p-4 sm:p-5 border border-[#DCE8F7] flex items-start gap-4 mb-6">
                  <ShieldCheck className="size-6 text-[#0062D2] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-slate-900 mb-1">
                      You cannot award yourself impact.
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed font-light">
                      Every entry is confirmed by the person you helped, which means your record is what other entrepreneurs say you did for them.
                    </div>
                  </div>
                </div>

                {/* Bottom Quote Row with Divider */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <Users className="size-6 text-[#0062D2] shrink-0" />
                  <div className="w-px h-8 bg-slate-200/80 shrink-0" />
                  <p className="font-serif italic text-xs sm:text-sm text-slate-700 leading-snug font-light">
                    &ldquo;A stronger community is built by what we give, not what we take.&rdquo;
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4: "WHERE YOU SEE IT"
          Cards Grid + Dark Highlight Card
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase mb-3">
            <span className="brand-gradient-text">VISIBLE. RECOGNISED. REAL.</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-12">
            Where you see it
          </h2>

          {/* Cards Row: 4 Feature Cards + 1 Dark Callout Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
            {WHERE_YOU_SEE_IT.map((card, idx) => {
              const IconComp = card.icon
              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className={`size-12 rounded-xl flex items-center justify-center mb-5 ${card.badgeBg}`}>
                      <IconComp className="size-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              )
            })}

            {/* 5th Card: Dark Navy Callout Promo Card */}
            <div className="bg-[#030B1C] text-white rounded-2xl p-6 border border-slate-800 shadow-lg flex flex-col justify-between">
              <div>
                <p className="font-serif italic text-lg sm:text-xl font-light text-slate-200 leading-snug mb-4">
                  Small actions. <br />
                  Big change. <br />
                  <span className="text-sky-300 font-normal">Real people.</span>
                </p>
                <div className="w-8 h-[1.5px] bg-sky-400 mb-4" />
              </div>
              <div className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                A MORE CONNECTED TOMORROW
              </div>
            </div>
          </div>

          {/* Meeting Agenda Button */}
          <div className="text-left">
            <Link
              href="/circles"
              className="inline-flex rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all items-center gap-2"
            >
              <span>See the Meeting Agenda</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5: "WHAT IT UNLOCKS" (MORE THAN A NUMBER)
          4 Horizontal Columns
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.22em] uppercase mb-4">
            <span className="brand-gradient-text">MORE THAN A NUMBER</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-14">
            What it unlocks
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHAT_IT_UNLOCKS.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col items-center text-center"
                >
                  <div className="size-13 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-5 shadow-xs border border-blue-100/60">
                    <IconComp className="size-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6: "PEER STANDING" & "PEERS COIN"
          2 Major Deep Dive Columns
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: PEER STANDING (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase mb-2">
                  <span className="brand-gradient-text">PEER STANDING</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mb-4">
                  What the community recognises you for
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-8">
                  Peer Standing is what your contribution earns you inside the community. It is not a badge purchased with a membership fee. It is recognition, conferred by the Peers around you, based on what you have actually given.
                </p>

                {/* 5 Dimensions List */}
                <div className="space-y-4 mb-8">
                  {PEER_STANDING_DIMENSIONS.map((dim, idx) => {
                    const IconComp = dim.icon
                    return (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50/80 border border-slate-100"
                      >
                        <div className="size-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                          <IconComp className="size-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">
                            {dim.label}
                          </div>
                          <div className="text-xs text-slate-600 font-light mt-0.5">
                            {dim.desc}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Quote at Bottom */}
              <div className="border-l-2 border-[#0062D2] pl-4 py-2 mt-4 bg-blue-50/30 rounded-r-xl">
                <p className="font-serif italic text-sm text-slate-800 leading-relaxed font-light">
                  &ldquo;Standing is earned slowly, and it is worth more for that reason. It is the closest thing this community has to real wealth.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Column: PEERS COIN (6 cols) */}
            <div className="lg:col-span-6 bg-[#F8FAFC] rounded-2xl p-7 sm:p-9 border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase mb-2">
                <span className="brand-gradient-text">PEERS COIN</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mb-4">
                The community gives back to those who give
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-6">
                When you contribute to another entrepreneur, you earn Life Impact Score and you earn Peers Coin along with it. One records what you gave. The other lets you use it.
              </p>

              {/* Gold Coin Graphic & List */}
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 bg-white p-5 rounded-xl border border-slate-200/60">
                {/* Gold Coin Badge */}
                <div className="relative size-24 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 p-1 shadow-lg shadow-amber-500/20 shrink-0 flex items-center justify-center">
                  <div className="size-full rounded-full border-2 border-dashed border-amber-600/40 flex flex-col items-center justify-center text-amber-900 font-bold">
                    <Coins className="size-8 text-amber-900 mb-0.5" />
                    <span className="text-[10px] tracking-wider uppercase">PEERS</span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-slate-700 w-full">
                  {PEERS_COIN_ACTIONS.map((action, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Marketplace Callout Box */}
              <div className="bg-white rounded-xl p-5 border border-slate-200/70 mb-6">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Use your coins in the Peers Global Marketplace:
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-5">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex flex-col items-center">
                    <GraduationCap className="size-5 text-[#0062D2] mb-1" />
                    <span className="text-[11px] font-medium text-slate-700">Courses & Skills</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex flex-col items-center">
                    <Shirt className="size-5 text-[#0062D2] mb-1" />
                    <span className="text-[11px] font-medium text-slate-700">Merchandise</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex flex-col items-center">
                    <Sparkles className="size-5 text-[#0062D2] mb-1" />
                    <span className="text-[11px] font-medium text-slate-700">Events & Experiences</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex flex-col items-center">
                    <ShoppingBag className="size-5 text-[#0062D2] mb-1" />
                    <span className="text-[11px] font-medium text-slate-700">Business Resources</span>
                  </div>
                </div>

                <Link
                  href="/membership"
                  className="w-full rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white py-3 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore the Peers Marketplace</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7: "WHY PEERS COIN EXISTS", "WHAT NO SUBSCRIPTION BUYS", "WHY WE MEASURE IT"
          3-Column Philosophy Cards
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Why Peers Coin exists */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Why Peers Coin exists
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed mb-4">
                  Because generosity should never be a one-way street. Peers Coin closes the loop — you help, the community recognises you, and returns something tangible.
                </p>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Coins cannot be purchased. Every coin is earned by helping another entrepreneur.
                </p>
              </div>
            </div>

            {/* Card 2: What no subscription buys */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  What no subscription buys
                </h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  {[
                    'Impact cannot be purchased.',
                    'Peers Coin cannot be purchased.',
                    'Leadership cannot be purchased.',
                    'Respect cannot be purchased.',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <div className="size-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="size-3" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3: Why we measure it */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Why we measure it
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Because contribution that goes unseen slowly stops happening. And because a community outgrows memory. In a room of forty, everyone knows who gives. Across thousands of entrepreneurs, nobody would — unless it is recorded.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 8: "OUR MISSION" (BECOME A LIFE IMPACTOR)
          Master Homepage Closing Standard
          ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-18 sm:py-24 border-t border-slate-900">
        
        {/* Deep celestial radial gradients & luminous brand aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(29,78,216,0.18),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(99,102,241,0.15),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl"
        />

        {/* Subtle geometric orbital line art */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35"
        >
          <svg viewBox="0 0 760 520" fill="none" className="h-full w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520" stroke="currentColor" strokeWidth="1" className="text-blue-300/30" />
            <path d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" className="text-sky-200/25" />
            <path d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520" stroke="currentColor" strokeWidth="1" className="text-blue-200/20" />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column (8 cols): Mission Headline & CTAs */}
            <div className="lg:col-span-8 space-y-5">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  OUR MISSION
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.12]">
                Become a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                  Life Impactor.
                </span>
              </h2>

              <p className="text-xl sm:text-2xl text-white/95 font-medium">
                1M+ entrepreneurs to impact by 2030.
              </p>

              <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl leading-relaxed">
                Every action you take inside your Circle adds to the global count of lives impacted. 1 Action = 1 Life Impacted.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/1-million-mission"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wider shadow-[0_4px_20px_rgba(225,29,72,0.35)] hover:from-[#1E40AF] hover:to-[#BE123C] hover:shadow-[0_8px_28px_rgba(225,29,72,0.50)] transition-all uppercase active:scale-95"
                >
                  <span>See the 1 Million Mission</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider transition-all uppercase backdrop-blur-sm"
                >
                  <span>Download Unity App</span>
                </Link>
              </div>
            </div>

            {/* Right Column (4 cols): Floating Calligraphy Script Highlights */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-2xl sm:text-3xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                More People
              </p>
              <p
                className="text-3xl sm:text-4xl text-white leading-tight font-bold"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Brighter Businesses
              </p>
              <p
                className="text-3xl sm:text-4xl text-sky-400 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                A Better Tomorrow
              </p>
            </div>

          </div>
        </div>

      </section>

    </div>
  )
}

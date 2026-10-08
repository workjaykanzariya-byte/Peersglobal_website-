import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
                <GalaxyButton
                  href="/unity"
                  size="default"
                  className="font-semibold"
                >
                  Download Unity App
                </GalaxyButton>

                <GalaxyButton
                  href="/stories"
                  variant="transparent"
                  size="default"
                  className="font-medium"
                >
                  Watch Our Story
                </GalaxyButton>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg pt-6 border-t border-white/15">
                {[
                  { value: '1M+', label: 'Entrepreneurs to Impact', id: 'heroStat1' },
                  { value: '1 Action', label: '1 Life Impacted', id: 'heroStat2' },
                  { value: '100%', label: 'Peer-Verified', id: 'heroStat3' },
                ].map((s, idx) => {
                  return (
                    <div key={s.label} className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm group hover:border-white/30 hover:bg-white/15 transition-all">
                      <div className="size-9 rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-rose-500/20 border border-blue-400/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                        <svg className="size-4.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id={`heroIconGrad${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#38BDF8" />
                              <stop offset="50%" stopColor="#818CF8" />
                              <stop offset="100%" stopColor="#FB7185" />
                            </linearGradient>
                          </defs>
                          {idx === 0 && (
                            /* Target / 1M+ */
                            <>
                              <circle cx="12" cy="12" r="10" stroke={`url(#heroIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="12" cy="12" r="6" stroke={`url(#heroIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="12" cy="12" r="2" fill={`url(#heroIconGrad${idx})`} stroke={`url(#heroIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                          )}
                          {idx === 1 && (
                            /* Sparkles / 1 Action */
                            <>
                              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" stroke={`url(#heroIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="19" cy="5" r="1.5" fill={`url(#heroIconGrad${idx})`} stroke={`url(#heroIconGrad${idx})`} strokeWidth="1" />
                            </>
                          )}
                          {idx === 2 && (
                            /* ShieldCheck / 100% */
                            <>
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={`url(#heroIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="m9 12 2 2 4-4" stroke={`url(#heroIconGrad${idx})`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                          )}
                        </svg>
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
                className="text-2xl sm:text-3xl text-white/90 leading-tight font-medium"
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
                className="text-3xl sm:text-4xl font-bold leading-tight bg-gradient-to-r from-sky-400 via-indigo-300 to-rose-400 bg-clip-text text-transparent"
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
              <div className="border-l-4 border-[#1D4ED8] pl-6 sm:pl-8 py-2">
                <Quote className="size-8 text-[#1D4ED8] mb-3 opacity-75" />
                <p className="font-serif italic text-xl sm:text-2xl text-slate-900 font-normal leading-snug">
                  &ldquo;Success is not just what you earn. <br />
                  <span className="font-bold brand-gradient-text">It is how many lives you impact.&rdquo;</span>
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
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                  <div className="size-12 rounded-2xl bg-gradient-to-br from-blue-500/15 to-rose-500/15 border border-blue-500/20 flex items-center justify-center mb-2.5 shadow-2xs group-hover:scale-110 transition-transform duration-200">
                    <svg className="size-5.5" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="metricGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="url(#metricGrad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="9" cy="7" r="4" stroke="url(#metricGrad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="url(#metricGrad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#metricGrad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200 leading-tight">
                    Real People
                  </div>
                  <div className="text-[11px] text-slate-500 font-light mt-0.5">
                    Making a real difference.
                  </div>
                </div>

                {/* 2. Measurable Impact */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                  <div className="size-12 rounded-2xl bg-gradient-to-br from-blue-500/15 to-rose-500/15 border border-blue-500/20 flex items-center justify-center mb-2.5 shadow-2xs group-hover:scale-110 transition-transform duration-200">
                    <svg className="size-5.5" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="metricGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <circle cx="12" cy="12" r="10" stroke="url(#metricGrad2)" strokeWidth="2" />
                      <circle cx="12" cy="12" r="6" stroke="url(#metricGrad2)" strokeWidth="2" />
                      <circle cx="12" cy="12" r="2" fill="url(#metricGrad2)" stroke="url(#metricGrad2)" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200 leading-tight">
                    Measurable Impact
                  </div>
                  <div className="text-[11px] text-slate-500 font-light mt-0.5">
                    Every action counts.
                  </div>
                </div>

                {/* 3. Stronger Entrepreneurs */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                  <div className="size-12 rounded-2xl bg-gradient-to-br from-blue-500/15 to-rose-500/15 border border-blue-500/20 flex items-center justify-center mb-2.5 shadow-2xs group-hover:scale-110 transition-transform duration-200">
                    <svg className="size-5.5" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="metricGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <path d="M3 20h18" stroke="url(#metricGrad3)" strokeWidth="2" strokeLinecap="round" />
                      <rect x="5" y="12" width="3" height="8" rx="1" stroke="url(#metricGrad3)" strokeWidth="1.75" fill="url(#metricGrad3)" fillOpacity="0.15" />
                      <rect x="10.5" y="8" width="3" height="12" rx="1" stroke="url(#metricGrad3)" strokeWidth="1.75" fill="url(#metricGrad3)" fillOpacity="0.25" />
                      <rect x="16" y="4" width="3" height="16" rx="1" stroke="url(#metricGrad3)" strokeWidth="1.75" fill="url(#metricGrad3)" fillOpacity="0.35" />
                      <path d="m4 11 6-5 4 3 6-6" stroke="url(#metricGrad3)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 3h4v4" stroke="url(#metricGrad3)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200 leading-tight">
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
                      <div key={idx} className="relative z-10 flex items-start gap-4 group">
                        {/* Gradient Number */}
                        <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500/10 to-rose-500/10 border border-blue-500/15 flex items-center justify-center shrink-0 shadow-2xs mt-0.5 group-hover:scale-110 transition-transform duration-200">
                          <span className="font-black text-xs tracking-wider bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent">
                            {stepItem.step}
                          </span>
                        </div>

                        {/* Gradient Icon Squircle */}
                        <div className="size-9 rounded-full bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/20 flex items-center justify-center shrink-0 shadow-2xs mt-0.5 group-hover:scale-110 transition-transform duration-200">
                          <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id={`stepIconGrad${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1D4ED8" />
                                <stop offset="100%" stopColor="#E11D48" />
                              </linearGradient>
                            </defs>
                            {idx === 0 && (
                              /* HeartHandshake */
                              <>
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" stroke={`url(#stepIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" stroke={`url(#stepIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="m18 15-2-2" stroke={`url(#stepIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="m15 18-2-2" stroke={`url(#stepIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </>
                            )}
                            {idx === 1 && (
                              /* FileText */
                              <>
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" stroke={`url(#stepIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" stroke={`url(#stepIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 9H8" stroke={`url(#stepIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 13H8" stroke={`url(#stepIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 17H8" stroke={`url(#stepIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </>
                            )}
                            {idx === 2 && (
                              /* Users */
                              <>
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke={`url(#stepIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="9" cy="7" r="4" stroke={`url(#stepIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke={`url(#stepIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke={`url(#stepIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </>
                            )}
                            {idx === 3 && (
                              /* Star */
                              <>
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke={`url(#stepIconGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </>
                            )}
                          </svg>
                        </div>

                        {/* Text */}
                        <div>
                          <h4 className="text-base font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200 mb-0.5">
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
                <div className="bg-[#F4F8FD] rounded-2xl p-4 sm:p-5 border border-[#DCE8F7] flex items-start gap-4 mb-6 group">
                  <div className="size-8 rounded-xl bg-gradient-to-br from-blue-500/15 to-rose-500/15 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="url(#shieldGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="m9 12 2 2 4-4" stroke="url(#shieldGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
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
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 group">
                  <div className="size-8 rounded-xl bg-gradient-to-br from-blue-500/15 to-rose-500/15 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="quoteUsersGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="url(#quoteUsersGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="9" cy="7" r="4" stroke="url(#quoteUsersGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="url(#quoteUsersGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#quoteUsersGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
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
              const borderAnimClass = idx === 0 ? '' : `animated-border-path-${(idx % 3) + 1}`
              return (
                <div
                  key={idx}
                  className="animated-glow-card group w-full"
                  tabIndex={0}
                  role="article"
                >
                  <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id={`whereCardGrad${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="50%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path
                      className={`animated-border-path ${borderAnimClass}`}
                      style={{ stroke: `url(#whereCardGrad${idx})` }}
                      d="M 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 L 0.8 6 Q 0.8 0.8 6 0.8 Z"
                    />
                  </svg>
                  <div className="p-6 flex flex-col justify-between h-full bg-[#F8FAFC]">
                    <div>
                      <div className="size-12 rounded-2xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                        <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id={`whereGrad${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#1D4ED8" />
                              <stop offset="100%" stopColor="#E11D48" />
                            </linearGradient>
                          </defs>
                          {idx === 0 && (
                            /* TrendingUp */
                            <>
                              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke={`url(#whereGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <polyline points="16 7 22 7 22 13" stroke={`url(#whereGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                          )}
                          {idx === 1 && (
                            /* Award / Milestone badges */
                            <>
                              <circle cx="12" cy="8" r="6" stroke={`url(#whereGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" stroke={`url(#whereGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                          )}
                          {idx === 2 && (
                            /* Trophy / National rankings */
                            <>
                              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" stroke={`url(#whereGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke={`url(#whereGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M4 22h16" stroke={`url(#whereGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34" stroke={`url(#whereGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M6 2h12v7a6 6 0 0 1-12 0V2z" stroke={`url(#whereGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                          )}
                          {idx === 3 && (
                            /* Users / Gratitude round */
                            <>
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke={`url(#whereGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="9" cy="7" r="4" stroke={`url(#whereGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke={`url(#whereGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke={`url(#whereGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                          )}
                        </svg>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* 5th Card: Gradient Callout Promo Card with Animated Glow Border */}
            <div className="animated-glow-card group w-full !bg-gradient-to-br !from-[#1D4ED8] !via-[#6366F1] !to-[#E11D48]" tabIndex={0} role="article">
              <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="whereCardGradPromo" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#FDE047" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>
                <path
                  className="animated-border-path animated-border-path-2"
                  style={{ stroke: 'url(#whereCardGradPromo)' }}
                  d="M 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 L 0.8 6 Q 0.8 0.8 6 0.8 Z"
                />
              </svg>
              <div className="relative overflow-hidden p-6 text-white shadow-xl flex flex-col justify-between h-full !bg-gradient-to-br !from-[#0D1630] !via-[#1E1B4B] !to-[#4C0519] rounded-[calc(1rem-1.5px)]">
                {/* Subtle ambient glowing blobs */}
                <div className="absolute -top-10 -right-10 size-40 rounded-full bg-gradient-to-br from-[#1D4ED8]/40 to-[#E11D48]/40 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 size-32 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-2xl pointer-events-none" />
                
                <div className="relative z-10">
                  <p className="font-serif italic text-lg sm:text-xl font-light text-white leading-snug mb-4 drop-shadow-xs">
                    Small actions. <br />
                    Big change. <br />
                    <span className="bg-gradient-to-r from-sky-300 via-pink-200 to-rose-300 bg-clip-text text-transparent font-medium">Real people.</span>
                  </p>
                </div>
                <div className="relative z-10 text-[11px] font-bold tracking-[0.2em] text-sky-200/90 uppercase drop-shadow-xs">
                  A MORE CONNECTED TOMORROW
                </div>
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
              const borderAnimClass = idx === 0 ? '' : `animated-border-path-${(idx % 3) + 1}`
              return (
                <div
                  key={idx}
                  className="animated-glow-card group w-full"
                  tabIndex={0}
                  role="article"
                >
                  <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id={`unlockCardGrad${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="50%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path
                      className={`animated-border-path ${borderAnimClass}`}
                      style={{ stroke: `url(#unlockCardGrad${idx})` }}
                      d="M 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 L 0.8 6 Q 0.8 0.8 6 0.8 Z"
                    />
                  </svg>
                  <div className="p-7 flex flex-col items-center text-center justify-between h-full bg-white">
                    <div className="flex flex-col items-center">
                      <div className="size-13 rounded-2xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/20 flex items-center justify-center mb-5 shadow-2xs group-hover:scale-110 transition-transform duration-200">
                        <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id={`unlockGrad${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#1D4ED8" />
                              <stop offset="100%" stopColor="#E11D48" />
                            </linearGradient>
                          </defs>
                          {idx === 0 && (
                            /* Eye / Peer Standing */
                            <>
                              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" stroke={`url(#unlockGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="12" cy="12" r="3" stroke={`url(#unlockGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                          )}
                          {idx === 1 && (
                            /* Coins / Peers Coin */
                            <>
                              <circle cx="8" cy="8" r="6" stroke={`url(#unlockGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M18.09 10.37A6 6 0 1 1 10.34 18" stroke={`url(#unlockGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M7 6h2v4H7" stroke={`url(#unlockGrad${idx})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                          )}
                          {idx === 2 && (
                            /* Users / Leadership eligibility */
                            <>
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke={`url(#unlockGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="9" cy="7" r="4" stroke={`url(#unlockGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke={`url(#unlockGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke={`url(#unlockGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                          )}
                          {idx === 3 && (
                            /* Trophy / Recognition and awards */
                            <>
                              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" stroke={`url(#unlockGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke={`url(#unlockGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M4 22h16" stroke={`url(#unlockGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34" stroke={`url(#unlockGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M6 2h12v7a6 6 0 0 1-12 0V2z" stroke={`url(#unlockGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                          )}
                        </svg>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
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
                    return (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-blue-200/80 hover:bg-white transition-all group"
                      >
                        <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500/15 to-rose-500/15 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200 shadow-2xs">
                          <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id={`dimGrad${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1D4ED8" />
                                <stop offset="100%" stopColor="#E11D48" />
                              </linearGradient>
                            </defs>
                            {idx === 0 && (
                              /* Building2 / How you are seen */
                              <>
                                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" stroke={`url(#dimGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" stroke={`url(#dimGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" stroke={`url(#dimGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 6h4" stroke={`url(#dimGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 10h4" stroke={`url(#dimGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 14h4" stroke={`url(#dimGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 18h4" stroke={`url(#dimGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </>
                            )}
                            {idx === 1 && (
                              /* Globe / What you can reach */
                              <>
                                <circle cx="12" cy="12" r="10" stroke={`url(#dimGrad${idx})`} strokeWidth="2" />
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" stroke={`url(#dimGrad${idx})`} strokeWidth="2" />
                                <path d="M2 12h20" stroke={`url(#dimGrad${idx})`} strokeWidth="2" />
                              </>
                            )}
                            {idx === 2 && (
                              /* Radio / How your ask lands */
                              <>
                                <circle cx="12" cy="12" r="2" stroke={`url(#dimGrad${idx})`} strokeWidth="2" />
                                <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" stroke={`url(#dimGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </>
                            )}
                            {idx === 3 && (
                              /* Compass / Where you can lead */
                              <>
                                <circle cx="12" cy="12" r="10" stroke={`url(#dimGrad${idx})`} strokeWidth="2" />
                                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" stroke={`url(#dimGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </>
                            )}
                            {idx === 4 && (
                              /* Star / How you are celebrated */
                              <>
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke={`url(#dimGrad${idx})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </>
                            )}
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
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
              <div className="border-l-2 border-[#1D4ED8] pl-4 py-2 mt-4 bg-gradient-to-r from-blue-50/60 to-rose-50/20 rounded-r-xl">
                <p className="font-serif italic text-sm text-slate-800 leading-relaxed font-light">
                  &ldquo;Standing is earned slowly, and it is worth more for that reason. <span className="brand-gradient-text font-medium">It is the closest thing this community has to real wealth.</span>&rdquo;
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
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                {/* 3D Golden Genie Coin Badge */}
                <div className="relative size-28 shrink-0 flex items-center justify-center group/coin">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/30 to-yellow-400/20 blur-md group-hover/coin:blur-lg transition-all" />
                  
                  {/* Exact Uploaded 3D Golden Genie Coin Image */}
                  <img
                    src="/api/peers-genie-coin"
                    alt="Peers Gold Coin"
                    width={112}
                    height={112}
                    className="relative size-full rounded-full object-contain drop-shadow-[0_10px_22px_rgba(217,119,6,0.38)] group-hover/coin:scale-108 group-hover/coin:rotate-3 transition-transform duration-300 select-none"
                  />
                </div>

                {/* Bullets */}
                <div className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-slate-700 w-full">
                  {PEERS_COIN_ACTIONS.map((action, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 group/act">
                      <div className="size-5 rounded-full bg-gradient-to-br from-blue-500/15 to-rose-500/15 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover/act:scale-110 transition-transform duration-200">
                        <svg className="size-3" viewBox="0 0 24 24" fill="none">
                          <defs>
                            <linearGradient id={`coinCheckGrad${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#1D4ED8" />
                              <stop offset="50%" stopColor="#8B5CF6" />
                              <stop offset="100%" stopColor="#E11D48" />
                            </linearGradient>
                          </defs>
                          <path d="M20 6 9 17l-5-5" stroke={`url(#coinCheckGrad${idx})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="font-medium text-slate-800">{action}</span>
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
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center group hover:bg-white hover:border-blue-200/70 transition-all">
                    <div className="size-8 rounded-lg bg-gradient-to-br from-blue-500/15 to-rose-500/15 border border-blue-500/20 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                      <svg className="size-4.5" viewBox="0 0 24 24" fill="none">
                        <defs>
                          <linearGradient id="mktGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1D4ED8" />
                            <stop offset="100%" stopColor="#E11D48" />
                          </linearGradient>
                        </defs>
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="url(#mktGrad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="url(#mktGrad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-medium text-slate-700">Courses &amp; Skills</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center group hover:bg-white hover:border-blue-200/70 transition-all">
                    <div className="size-8 rounded-lg bg-gradient-to-br from-blue-500/15 to-rose-500/15 border border-blue-500/20 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                      <svg className="size-4.5" viewBox="0 0 24 24" fill="none">
                        <defs>
                          <linearGradient id="mktGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1D4ED8" />
                            <stop offset="100%" stopColor="#E11D48" />
                          </linearGradient>
                        </defs>
                        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" stroke="url(#mktGrad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-medium text-slate-700">Merchandise</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center group hover:bg-white hover:border-blue-200/70 transition-all">
                    <div className="size-8 rounded-lg bg-gradient-to-br from-blue-500/15 to-rose-500/15 border border-blue-500/20 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                      <svg className="size-4.5" viewBox="0 0 24 24" fill="none">
                        <defs>
                          <linearGradient id="mktGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1D4ED8" />
                            <stop offset="100%" stopColor="#E11D48" />
                          </linearGradient>
                        </defs>
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" stroke="url(#mktGrad3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-medium text-slate-700">Events &amp; Experiences</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center group hover:bg-white hover:border-blue-200/70 transition-all">
                    <div className="size-8 rounded-lg bg-gradient-to-br from-blue-500/15 to-rose-500/15 border border-blue-500/20 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                      <svg className="size-4.5" viewBox="0 0 24 24" fill="none">
                        <defs>
                          <linearGradient id="mktGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1D4ED8" />
                            <stop offset="100%" stopColor="#E11D48" />
                          </linearGradient>
                        </defs>
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" stroke="url(#mktGrad4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 6h18" stroke="url(#mktGrad4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 10a4 4 0 0 1-8 0" stroke="url(#mktGrad4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
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
            <div className="animated-glow-card group" tabIndex={0} role="article">
              <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="cardGradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="50%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                </defs>
                <path
                  className="animated-border-path"
                  d="M 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 L 0.8 6 Q 0.8 0.8 6 0.8 Z"
                />
              </svg>
              <div className="p-7 sm:p-8 flex flex-col justify-between h-full bg-white">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200 mb-4">
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
            </div>

            {/* Card 2: What no subscription buys */}
            <div className="animated-glow-card group" tabIndex={0} role="article">
              <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="cardGradientStroke2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="50%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                </defs>
                <path
                  className="animated-border-path animated-border-path-2"
                  d="M 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 L 0.8 6 Q 0.8 0.8 6 0.8 Z"
                />
              </svg>
              <div className="p-7 sm:p-8 flex flex-col justify-between h-full bg-white">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-5 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
                    What no subscription buys
                  </h3>
                  <ul className="space-y-3.5 text-sm text-slate-700">
                    {[
                      'Impact cannot be purchased.',
                      'Peers Coin cannot be purchased.',
                      'Leadership cannot be purchased.',
                      'Respect cannot be purchased.',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 group/item">
                        <div className="size-6 rounded-full bg-gradient-to-br from-blue-500/15 to-rose-500/15 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                          <svg className="size-3.5" viewBox="0 0 24 24" fill="none">
                            <defs>
                              <linearGradient id={`buyGrad${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1D4ED8" />
                                <stop offset="100%" stopColor="#E11D48" />
                              </linearGradient>
                            </defs>
                            <path d="M20 6 9 17l-5-5" stroke={`url(#buyGrad${idx})`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="font-medium text-slate-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: Why we measure it */}
            <div className="animated-glow-card group" tabIndex={0} role="article">
              <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="cardGradientStroke3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="50%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                </defs>
                <path
                  className="animated-border-path animated-border-path-3"
                  d="M 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 L 0.8 6 Q 0.8 0.8 6 0.8 Z"
                />
              </svg>
              <div className="p-7 sm:p-8 flex flex-col justify-between h-full bg-white">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200 mb-4">
                    Why we measure it
                  </h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    Because contribution that goes unseen slowly stops happening. And because a community outgrows memory. In a room of forty, everyone knows who gives. Across thousands of entrepreneurs, nobody would — unless it is recorded.
                  </p>
                </div>
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
                <GalaxyButton
                  href="/1-million-mission"
                  size="default"
                  className="uppercase tracking-wider font-bold"
                >
                  See the 1 Million Mission
                </GalaxyButton>
                <GalaxyButton
                  href="/unity"
                  variant="transparent"
                  size="default"
                  className="uppercase tracking-wider font-bold"
                >
                  Download Unity App
                </GalaxyButton>
              </div>
            </div>

            {/* Right Column (4 cols): Floating Calligraphy Script Highlights */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-2xl sm:text-3xl text-white/90 leading-tight font-medium"
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
                className="text-3xl sm:text-4xl font-bold leading-tight bg-gradient-to-r from-sky-400 via-indigo-300 to-rose-400 bg-clip-text text-transparent"
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

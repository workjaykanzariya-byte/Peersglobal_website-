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
          SECTION 1: HERO ("THE CURRENCY" & "THE IMPACT SYSTEM")
          Fade Video Hero Card (Exact Match to Homepage WhoWeAre signature style)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-14 sm:pb-20 border-b border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-[#0062D2] font-semibold">The Currency</span>
          </div>

          {/* Top Hero Banner with Smooth Left-Fading Video */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[500px] lg:min-h-[560px] flex items-center">
            
            {/* Media Background Layer (Right ~60% fading into white on the left) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
            >
              {/* Active Video */}
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/who-we-are-boardroom.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover object-center"
              />

              {/* Seamless gradient overlays for the signature misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  People
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Ideas
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Opportunities
                </p>
                <p className="text-2xl sm:text-3xl text-white font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Impact
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    A STRONGER
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    MORE CONNECTED WORLD
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area (Overlaid on the crisp white side) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl lg:max-w-2xl flex flex-col items-start">
                
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-0.5 w-6 bg-[#1E4ED8]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E4ED8]">
                    THE CURRENCY
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-5">
                  The Impact System: where entrepreneurs choose to{' '}
                  <span className="font-serif italic text-[#1E4ED8]">grow together.</span>
                </h1>

                {/* Subtitle / Narrative */}
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-6 max-w-lg">
                  Most communities measure activity. We measure impact. Every referral given, introduction made, or business guided counts as 1 Life Impacted — tracked live on the Unity App.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Link
                    href="/unity"
                    className="rounded-full bg-[#1E4ED8] hover:bg-[#1b44be] text-white px-8 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4" />
                  </Link>

                  <Link
                    href="/stories"
                    className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/90 backdrop-blur-sm px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 shadow-xs transition-all hover:bg-slate-50 hover:border-slate-300"
                  >
                    <div className="size-6 rounded-full bg-blue-50 text-[#1E4ED8] flex items-center justify-center">
                      <span className="text-xs">▶</span>
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] uppercase text-slate-400 font-semibold block leading-none">WATCH</span>
                      <span className="text-xs font-bold text-slate-900 leading-tight">Our Story</span>
                    </div>
                  </Link>
                </div>

                {/* Bottom 3 Metrics Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 w-full max-w-lg">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">1M+</div>
                    <div className="text-[11px] sm:text-xs text-slate-500 font-light mt-0.5">Entrepreneurs to Impact<br />By 2030</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#1E4ED8]">1 Action</div>
                    <div className="text-[11px] sm:text-xs text-slate-500 font-light mt-0.5">= 1 Life Impacted<br />Unweighted</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</div>
                    <div className="text-[11px] sm:text-xs text-slate-500 font-light mt-0.5">Peer-Verified<br />Every Time</div>
                  </div>
                </div>

              </div>
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
          <div className="inline-flex items-center gap-3 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            <span>OUR BELIEF</span>
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
              <div className="flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>SIMPLE. FAIR. MEANINGFUL.</span>
              </div>

              {/* Title: One action, one life. */}
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 tracking-tight leading-[1.08] mb-6">
                One action, <br />
                <span className="font-serif italic font-bold text-[#0062D2]">one life.</span>
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

            {/* Right Column: "How it works" Card + Outer Callout Arc (6 cols) */}
            <div className="lg:col-span-6 relative">
              
              {/* Outer Decorative Arc & Gradient Glow */}
              <div className="hidden xl:block absolute -right-24 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
                {/* Soft gradient half-circle */}
                <div className="w-56 h-80 rounded-r-full bg-gradient-to-r from-transparent via-blue-50/70 to-blue-100/40 blur-xl absolute -left-12 -top-10" />
                
                {/* SVG dashed curved arc with dot and text */}
                <svg className="w-48 h-72 overflow-visible" viewBox="0 0 160 260" fill="none">
                  {/* Dashed circular arc */}
                  <path
                    d="M 10 10 A 130 130 0 0 1 10 250"
                    stroke="#0062D2"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    strokeOpacity="0.45"
                  />
                  {/* Glowing Apex Dot */}
                  <circle cx="56" cy="100" r="4.5" fill="#0062D2" />
                  <circle cx="56" cy="100" r="8" fill="#0062D2" fillOpacity="0.2" />
                </svg>

                {/* Vertical Text Label */}
                <div className="absolute left-16 top-[115px] text-[9px] font-bold tracking-[0.22em] text-[#0062D2] uppercase leading-snug">
                  SMALL <br />
                  ACTIONS <br />
                  BIG CHANGE
                </div>
              </div>

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
                <div className="flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  <span>FOUR SIMPLE STEPS</span>
                  <span className="w-6 h-[1.5px] bg-[#0062D2]" />
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
          <div className="text-xs font-bold tracking-[0.2em] text-[#0062D2] uppercase mb-3">
            VISIBLE. RECOGNISED. REAL.
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
          
          <div className="inline-flex items-center gap-3 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            <span>MORE THAN A NUMBER</span>
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
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
                <div className="text-xs font-bold tracking-[0.2em] text-[#0062D2] uppercase mb-2">
                  PEER STANDING
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
              <div className="text-xs font-bold tracking-[0.2em] text-[#0062D2] uppercase mb-2">
                PEERS COIN —
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
          With Cinematic Looping Earth Background Video (as requested)
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#030B1C] text-white border-t border-slate-900">
        
        {/* Background Looping Earth Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="size-full object-cover object-center filter brightness-[0.75] contrast-[1.1]"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          {/* Subtle multi-stop gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030B1C] via-[#030B1C]/50 to-[#030B1C] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(3,11,28,0.2)_0%,rgba(3,11,28,0.8)_100%)] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (8 cols): Mission Headline & CTAs */}
            <div className="lg:col-span-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-6 h-[1.5px] bg-sky-400" />
                <span>OUR MISSION</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.15] mb-4">
                Become a Life Impactor
              </h2>

              <p className="text-xl sm:text-2xl text-sky-300 font-semibold mb-4">
                1M+ entrepreneurs to impact by 2030.
              </p>

              <p className="text-sm sm:text-base text-slate-300 font-light mb-8 max-w-xl">
                Every action you take inside your Circle adds to the global count of lives impacted.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/membership"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <span>See the 1 Million Mission</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/unity"
                  className="rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-7 py-3.5 text-sm font-medium transition-all"
                >
                  Download Unity App
                </Link>
              </div>
            </div>

            {/* Right Column (4 cols): Artistic Script Card */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-md border border-white/15 shadow-2xl max-w-sm">
                <div className="font-serif italic text-2xl sm:text-3xl text-sky-200 font-light leading-snug space-y-1">
                  <div>More People.</div>
                  <div>Brighter Businesses.</div>
                  <div className="text-white font-normal">A Better Tomorrow.</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>


      {/* =========================================================================
          SECTION 9: FINAL CALL (CLOSING CTA - EXACT SAME AS HOMEPAGE)
          ========================================================================= */}
      <ClosingCtaSection />

    </div>
  )
}

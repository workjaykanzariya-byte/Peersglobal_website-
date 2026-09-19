import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import {
  ArrowRight,
  Quote,
  Users,
  Send,
  Lightbulb,
  UserCheck,
  Building2,
  Handshake,
  Package,
  Globe,
  TrendingUp,
  Award,
  Shield,
  HeartHandshake,
  Smartphone,
  Layers,
  Sparkles,
  Trophy,
  Coins,
  Compass,
  ChevronRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Language | Words We Live By — Peers Global',
  description:
    'Every community that lasts builds a language of its own. Explore the core lexicon, principles, and shared vocabulary that define the Peers Global community of collaboration.',
  keywords: [
    'The Language',
    'Peers Global Lexicon',
    'Words We Live By',
    'The Peer',
    'The Circle',
    'Give-First',
    'Unity App',
    '10 Ways of Collaboration',
  ],
}

// 10 Ways of Collaboration Data
const TEN_WAYS_DATA = [
  {
    num: '01',
    title: 'Introduction',
    desc: 'You open a door that you personally hold.',
    icon: Users,
  },
  {
    num: '02',
    title: 'Referral',
    desc: 'You send business to a Peer.',
    icon: Send,
  },
  {
    num: '03',
    title: 'Knowledge',
    desc: 'You share what you have learned.',
    icon: Lightbulb,
  },
  {
    num: '04',
    title: 'Mentorship',
    desc: "You invest in another entrepreneur's growth.",
    icon: UserCheck,
  },
  {
    num: '05',
    title: 'Customer Connection',
    desc: 'You connect to buyers.',
    icon: Building2,
  },
  {
    num: '06',
    title: 'Partnership',
    desc: 'You build together.',
    icon: Handshake,
  },
  {
    num: '07',
    title: 'Resources',
    desc: 'You lend what you have.',
    icon: Package,
  },
  {
    num: '08',
    title: 'Market Access',
    desc: 'You open new geographies.',
    icon: Globe,
  },
  {
    num: '09',
    title: 'Investor Connection',
    desc: 'You connect to capital.',
    icon: TrendingUp,
  },
  {
    num: '10',
    title: 'Industry Expertise',
    desc: 'You share specialist knowledge.',
    icon: Award,
  },
]

// Lexicon Words Data
const LEXICON_WORDS = [
  {
    title: 'Peer',
    desc: 'You equal who builds with you',
    icon: Shield,
    color: 'bg-blue-50 text-[#0062D2] border-blue-100',
  },
  {
    title: 'Circle',
    desc: 'The room where trust is built',
    icon: Compass,
    color: 'bg-teal-50 text-teal-600 border-teal-100',
  },
  {
    title: 'Give-First',
    desc: 'Contribution before any ask',
    icon: HeartHandshake,
    color: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    title: 'Unity',
    desc: 'The community, every day',
    icon: Smartphone,
    color: 'bg-sky-50 text-sky-600 border-sky-100',
  },
  {
    title: '10 Ways of Collaboration',
    desc: 'How value moves between Peers',
    icon: Layers,
    color: 'bg-purple-50 text-purple-600 border-purple-100',
  },
  {
    title: 'Life Impact Score',
    desc: 'A record of what you have given',
    icon: Sparkles,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    title: 'Peer Standing',
    desc: 'Recognition earned through contribution',
    icon: Trophy,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },
  {
    title: 'Peers Coin',
    desc: 'Rewards you earn by giving',
    icon: Coins,
    color: 'bg-orange-50 text-orange-600 border-orange-100',
  },
  {
    title: '1 Million Mission',
    desc: 'One million lives impacted',
    icon: Globe,
    color: 'bg-blue-50 text-[#0062D2] border-blue-100',
  },
]

export default function TheLanguagePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO ("THE LANGUAGE")
          Dark Executive Cinematic Banner matching reference screenshot
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#050C1A] text-white pt-8 pb-16 sm:pb-24 border-b border-slate-800">
        
        {/* Subtle Ambient Radial Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-10 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[130px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium tracking-wide mb-8 sm:mb-12">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-sky-400 font-semibold">The Language</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-6 h-[1.5px] bg-sky-400" />
                <span>THE LANGUAGE</span>
                <span className="w-6 h-[1.5px] bg-sky-400" />
              </div>

              {/* Title */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[64px] font-normal text-white tracking-tight leading-[1.08] mb-5">
                The Language
              </h1>

              {/* Lead Paragraph */}
              <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-3 max-w-xl">
                Every community that lasts builds a language of its own.
              </p>

              {/* Sub-lead Paragraph */}
              <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
                These are the words Peers live by — and what each of them actually means here.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/membership"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Become a Peer</span>
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="/circles"
                  className="rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105"
                >
                  Find Your Circle
                </Link>
              </div>

            </div>

            {/* Right Media (6 cols): Open Notebook & Coffee Mug Scene */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] aspect-[16/11] sm:aspect-[16/10] group">
                
                {/* Desk Photograph */}
                <Image
                  src="/images/language-hero-desk.jpg"
                  alt="Peers Global notebook and desk"
                  fill
                  priority
                  className="object-cover object-center brightness-[0.88] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Script Typography Overlaid on the Open Notebook Pages */}
                <div className="absolute top-[32%] left-[28%] sm:left-[30%] -translate-y-1/2 pointer-events-none select-none text-center sm:text-left">
                  <div
                    className="text-slate-800 text-lg sm:text-2xl font-bold leading-tight drop-shadow-xs"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    <div>People</div>
                    <div className="mt-0.5">Ideas</div>
                    <div className="mt-0.5">Opportunities</div>
                    <div className="mt-0.5 text-[#0062D2]">Impact</div>
                  </div>
                </div>

                {/* Script Typography on bottom right near mug: People Create Impact */}
                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 pointer-events-none select-none text-right">
                  <div
                    className="text-white/95 text-xl sm:text-2xl font-bold leading-tight drop-shadow-lg"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    People <br />
                    Create <br />
                    Impact
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 2: "WHY WORDS MATTER HERE" (OUR COMMON GROUND)
          Pure White Section with Quote Card
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        
        {/* Subtle Watermark World Map Graphics in Background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-[0.035] pointer-events-none overflow-hidden select-none">
          <svg viewBox="0 0 1000 600" fill="currentColor" className="w-full h-full text-slate-900">
            <circle cx="200" cy="200" r="140" />
            <circle cx="500" cy="250" r="180" />
            <circle cx="800" cy="300" r="160" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left 7 cols: Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                <span>OUR COMMON GROUND</span>
              </div>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-6">
                Why words matter here
              </h2>

              {/* Narrative Paragraphs */}
              <div className="space-y-4 text-slate-600 font-light text-sm sm:text-base leading-relaxed max-w-2xl">
                <p className="text-base sm:text-lg text-slate-700 font-normal">
                  A shared language does something that rules never can.
                </p>
                <p>
                  When a hundred entrepreneurs in twelve cities use the same words to describe the same things, they behave the same way without anyone instructing them.
                </p>
                <p>
                  These words are not branding. Each one describes something that genuinely happens here, every week, in real rooms between real people.
                </p>
                <p>
                  Learn these five and you understand how this community works.
                </p>
              </div>

            </div>

            {/* Right 5 cols: Quote Card */}
            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="bg-[#FAFBFD] rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.03)] max-w-md w-full relative">
                
                {/* Large Blue Quote Mark */}
                <Quote className="size-9 text-[#0062D2] mb-5 opacity-80" />

                {/* Quote Text */}
                <p className="font-serif italic text-2xl sm:text-[26px] text-slate-800 font-normal leading-snug mb-6">
                  &ldquo;Same words. <br />
                  Same understanding. <br />
                  <span className="text-[#0062D2] font-normal">A stronger community</span> <br />
                  everywhere.&rdquo;
                </p>

                {/* Attribution */}
                <div className="pt-5 border-t border-slate-200/70 text-xs font-bold tracking-[0.25em] text-slate-400 uppercase">
                  PEERS GLOBAL
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: THE 4 CORE WORD ROWS (PHOTO ON LEFT, CONTENT ON RIGHT)
          Exact Match to Reference Screenshot
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#FAFBFD] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          
          {/* ─────────────────────────────────────────────────────────────
              ROW 1: THE PEER
              ───────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Video Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] shadow-md border border-slate-200 group bg-slate-950">
                <video
                  src="/videos/homepage-hero-bg.mp4"
                  poster="/images/who-we-are-friends.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                
                {/* Cursive Script Overlay Bottom Right */}
                <div className="absolute bottom-5 right-6 text-right pointer-events-none select-none z-10">
                  <p
                    className="text-white text-xl sm:text-2xl font-normal drop-shadow-md leading-tight"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Partners in Business <br />
                    and Friends in Life.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content Block (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-3">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>THE PEER</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-snug mb-4">
                An equal who chooses to build with you
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-4">
                A Peer is an entrepreneur or business leader who believes in building trusted relationships, contributing to others, and growing together.
              </p>

              {/* Bold punchline */}
              <p className="text-sm sm:text-base font-semibold text-slate-900 mb-6">
                Peers are Partners in Business and Friends in Life.
              </p>

              {/* CTA Button */}
              <Link
                href="/membership"
                className="inline-flex rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3 text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 items-center gap-2"
              >
                <span>Become a Peer</span>
                <ArrowRight className="size-4" />
              </Link>

            </div>

          </div>


          {/* ─────────────────────────────────────────────────────────────
              ROW 2: THE CIRCLE
              ───────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Video Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] shadow-md border border-slate-200 group bg-slate-950">
                <video
                  src="/videos/leadership-hero-bg.mp4"
                  poster="/images/who-we-are-boardroom.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                
                {/* Cursive Script Overlay Bottom Right */}
                <div className="absolute bottom-5 right-6 text-right pointer-events-none select-none z-10">
                  <p
                    className="text-white text-xl sm:text-2xl font-normal drop-shadow-md leading-tight"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    The right people. <br />
                    In the right room.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content Block (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-3">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>THE CIRCLE</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-snug mb-4">
                The room where trust is built
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-4">
                A Circle brings together the right entrepreneurs around a common industry, interest, location or opportunity. Small enough for trust. Diverse enough for real value. No head of the table. No back row.
              </p>

              {/* Bold punchline */}
              <p className="text-sm sm:text-base font-semibold text-slate-900 mb-6">
                We put the right people in the room.
              </p>

              {/* CTA Button */}
              <Link
                href="/circles"
                className="inline-flex rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3 text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 items-center gap-2"
              >
                <span>Find Your Circle</span>
                <ArrowRight className="size-4" />
              </Link>

            </div>

          </div>


          {/* ─────────────────────────────────────────────────────────────
              ROW 3: GIVE-FIRST
              ───────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Video Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] shadow-md border border-slate-200 group bg-slate-950">
                <video
                  src="/videos/stories-hero-bg.mp4"
                  poster="/images/give-first-card.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                
                {/* Cursive Script Overlay Bottom Right */}
                <div className="absolute bottom-5 right-6 text-right pointer-events-none select-none z-10">
                  <p
                    className="text-white text-xl sm:text-2xl font-normal drop-shadow-md leading-tight"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Give first. <br />
                    Everything else follows.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content Block (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-3">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>GIVE-FIRST</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-snug mb-4">
                Contribution before any ask
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                You contribute before you ask. Always. You make the introduction, share what you know, and help another entrepreneur without first calculating what it might return. This is how trust is manufactured.
              </p>

            </div>

          </div>


          {/* ─────────────────────────────────────────────────────────────
              ROW 4: UNITY
              ───────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Visual Card: Dark Phone Mockup with Video Motion Background (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-[#0A1224] p-6 sm:p-8 shadow-md border border-slate-800 flex items-center justify-between group">
                
                {/* Looping Ambient Motion Video in Background */}
                <video
                  src="/videos/hero-background.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 size-full object-cover object-center filter brightness-[0.3] contrast-[1.25] pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1224]/90 via-[#0A1224]/65 to-[#0A1224]/90 pointer-events-none" />

                {/* Script Callout Left */}
                <div className="pointer-events-none select-none z-10">
                  <p
                    className="text-white text-xl sm:text-2xl font-normal drop-shadow-md leading-tight"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    The community. <br />
                    Every day.
                  </p>
                </div>

                {/* Centered Phone Screen Mockup */}
                <div className="relative w-36 sm:w-44 h-48 sm:h-56 z-10 shrink-0">
                  <Image
                    src="/images/unity-app-phone.png"
                    alt="Unity App interface"
                    fill
                    className="object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
                  />
                </div>

                {/* Feature Checklist Right */}
                <div className="space-y-2.5 z-10 text-right sm:text-left">
                  {['Connect', 'Collaborate', 'Log Impact', 'Find Opportunities', 'Stay Connected'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium justify-end sm:justify-start">
                      <span className="size-1.5 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Ambient glow */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

              </div>
            </div>

            {/* Right Content Block (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-3">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>UNITY</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-snug mb-4">
                The community, every day
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-6">
                Unity is the digital home of Peers Global. A Circle meets for a few hours a month; Unity is the rest of the year. It is where Peers find each other, book conversations, log contributions and keep collaborating between meetings.
              </p>

              {/* CTA Button */}
              <a
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3 text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 items-center gap-2"
              >
                <span>Download Unity App</span>
                <ArrowRight className="size-4" />
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4: "HOW VALUE ACTUALLY MOVES BETWEEN PEERS"
          (THE 10 WAYS OF COLLABORATION)
          Exact match to 10 cards grid in reference screenshot
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#EEF5FC] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Header Area */}
          <div className="text-center max-w-3xl mx-auto mb-14 relative">
            
            {/* Top-Right Script Callout */}
            <div className="hidden lg:block absolute -right-44 -top-4 pointer-events-none select-none text-right">
              <p
                className="text-[#0062D2] text-2xl font-bold leading-tight drop-shadow-xs -rotate-3"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                More Ways. <br />
                Greater Possibilities.
              </p>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>THE 10 WAYS OF COLLABORATION</span>
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-4">
              How value actually moves between Peers
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Collaboration at Peers Global is a defined practice. These are the ten forms it takes.
            </p>

          </div>

          {/* 10 Cards Grid (5 columns on desktop, 2 rows) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mb-12">
            {TEN_WAYS_DATA.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col items-center text-center group"
                >
                  {/* Icon in Blue */}
                  <div className="size-11 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <IconComp className="size-5" />
                  </div>

                  {/* Number */}
                  <span className="text-[11px] font-bold text-slate-400 tracking-wider mb-1">
                    {item.num}
                  </span>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[12px] text-slate-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Explore Collaboration CTA Button */}
          <div className="flex justify-center">
            <Link
              href="/10-ways-of-collaboration"
              className="inline-flex rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 items-center gap-2"
            >
              <span>Explore Collaboration</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5: "THE WORDS WE LIVE BY" (OUR LEXICON)
          Pure White Section with 9 Lexicon Terms Grid
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>OUR LEXICON</span>
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-3">
              The words we live by
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Different words. One standard. A shared language that makes the community work.
            </p>

          </div>

          {/* 9 Lexicon Cards (Adaptive Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-4.5 mb-14">
            {LEXICON_WORDS.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4.5 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 transition-all flex items-center gap-3.5 group"
                >
                  <div className={`size-10 rounded-xl flex items-center justify-center shrink-0 border ${item.color} group-hover:scale-105 transition-transform`}>
                    <IconComp className="size-4.5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 leading-tight mb-0.5 truncate">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-light leading-snug line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Quote & Button */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-serif italic text-base sm:text-lg text-slate-700 font-normal leading-relaxed mb-8">
              &ldquo;Circles, not crowds. Trust, not transactions. Peers, not gurus.&rdquo;
            </p>

            <Link
              href="/lexicon"
              className="inline-flex rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 items-center gap-2"
            >
              <span>See the Full Lexicon</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6: CLOSING / MISSION SECTION
          ========================================================================= */}
      <ClosingCtaSection
        eyebrow="THE LANGUAGE BUILDS THE FUTURE"
        title="Learn the language, and you already understand the community."
        subtitle="Build Your Business. Build Your Relationships. Build Your Circle."
        description="Peers Global — World's First Community of Collaboration. Peers are Partners in Business and Friends in Life."
        primaryButtonText="BECOME A PEER"
        primaryButtonHref="/membership"
        secondaryButtonText="FIND YOUR CIRCLE"
        secondaryButtonHref="/circles"
      />

    </div>
  )
}

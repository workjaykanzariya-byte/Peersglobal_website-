import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  HeartHandshake,
  Users2,
  Sparkles,
  ShieldCheck,
  Compass,
  Building2,
  Smartphone,
  CheckCircle2,
  Layers,
  Award,
  BookOpen,
  TrendingUp,
  Quote,
  Lightbulb,
} from 'lucide-react'
import { Cta, Eyebrow } from '@/components/site/ui'

export const metadata: Metadata = {
  title: "The Idea Behind Peers Global | World's First Community of Collaboration",
  description:
    'Why Peers Global exists. The loneliness entrepreneurs never talk about, and the belief that no one should have to build alone.',
  keywords: [
    'community of collaboration',
    'Peers Global',
    'the idea',
    'entrepreneurship',
    'MSME India',
    'Dr Pravin Parmar',
    'business networking',
    'inner board',
  ],
}

export default function TheIdeaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* =========================================================================
          1. HERO SECTION (EXACT MATCH TO REFERENCE IMAGE)
          ========================================================================= */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50/50 via-white to-white pt-16 pb-16 sm:pt-24 sm:pb-20">
        {/* Soft background radial glows */}
        <div className="absolute top-1/4 -left-20 size-80 rounded-full bg-blue-50/60 blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 size-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

        {/* Decorative background arc on far left */}
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 size-72 rounded-full border border-blue-100/60 pointer-events-none hidden lg:block" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex items-center justify-between gap-6">
          
          {/* Left Decorative Vertical Strip */}
          <div className="hidden lg:flex items-center gap-3 border-l-2 border-slate-200/80 pl-3 py-1 shrink-0">
            <div className="flex flex-col text-[10px] font-bold tracking-[0.22em] text-slate-400 uppercase leading-relaxed text-left">
              <span>PEOPLE</span>
              <span>PURPOSE</span>
              <span>PROGRESS</span>
            </div>
          </div>

          {/* Center Main Hero Content */}
          <div className="flex-1 max-w-3xl mx-auto flex flex-col items-center text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50/90 border border-blue-200/70 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0062D2] mb-5 shadow-xs">
              <span className="size-1.5 rounded-full bg-[#0062D2]" />
              PILLAR: THE IDEA
            </div>

            {/* H1 with opening quote mark */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.25rem] font-normal tracking-tight text-slate-900 mb-4 leading-[1.1]">
              &ldquo;The Idea
            </h1>

            {/* Subline with blue script accent */}
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-slate-800 leading-snug max-w-2xl mb-3 font-normal">
              Entrepreneurs should not have to{' '}
              <em
                className="not-italic text-[#0062D2]"
                style={{ fontFamily: 'var(--font-script, cursive)', fontStyle: 'italic' }}
              >
                build alone.
              </em>
            </p>

            {/* Supporting line */}
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mb-8 leading-relaxed font-light">
              Everything Peers Global is today comes from that one sentence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3.5 justify-center items-center">
              <Link
                href="/membership"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#0062D2] hover:bg-blue-700 text-white px-6 py-3 text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                <span>Join Peers Global</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/circles"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-[0.98]"
              >
                <span>Find Your Circle</span>
              </Link>
            </div>
          </div>

          {/* Right Floating Script Text & Vertical Strip */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 shrink-0">
            {/* "Ideas Build Communities" handwritten calligraphic accent */}
            <div className="flex flex-col items-start select-none -rotate-6 text-[#0062D2] leading-[1.15]">
              <span
                className="text-3xl sm:text-4xl text-[#0062D2]"
                style={{ fontFamily: 'var(--font-script, cursive)' }}
              >
                Ideas
              </span>
              <span
                className="text-3xl sm:text-4xl text-[#0062D2] ml-4"
                style={{ fontFamily: 'var(--font-script, cursive)' }}
              >
                Build
              </span>
              <span
                className="text-3xl sm:text-4xl text-[#0062D2] ml-8"
                style={{ fontFamily: 'var(--font-script, cursive)' }}
              >
                Communities
              </span>
              {/* Swoosh underline flourish */}
              <svg className="w-28 h-5 text-[#0062D2] ml-9 mt-0.5" viewBox="0 0 100 20" fill="none">
                <path
                  d="M5 6 C 35 15, 65 14, 95 8 M 85 4 C 90 7, 95 8, 92 14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Right Decorative Vertical Strip */}
            <div className="hidden lg:flex items-center gap-3 border-l-2 border-slate-200/80 pl-3 py-1">
              <div className="flex flex-col text-[10px] font-bold tracking-[0.22em] text-slate-400 uppercase leading-relaxed text-left">
                <span>A BRIGHTER</span>
                <span>TOMORROW</span>
                <span>TOGETHER</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. THE PROBLEM NOBODY TALKS ABOUT (EXACT MATCH TO REFERENCE IMAGE)
          ========================================================================= */}
      <section className="section py-16 sm:py-24 border-b border-slate-200/80 bg-white relative overflow-hidden">
        {/* Subtle background decorative circle on far right */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 size-96 rounded-full border border-blue-100/50 pointer-events-none hidden xl:block" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid gap-10 lg:grid-cols-12 xl:grid-cols-[auto_1fr_1fr_auto] items-start">
            
            {/* ──────── COLUMN 1: Visual Image Card with Overlays ──────── */}
            <div className="lg:col-span-4 xl:col-span-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[340px]">
                {/* Ambient glow behind image */}
                <div className="absolute -inset-4 bg-blue-100/60 rounded-full blur-2xl -z-10" />

                {/* Main contemplative entrepreneur portrait with arched/pill curvature */}
                <div className="relative aspect-[4/5] w-full rounded-[2.75rem] overflow-hidden shadow-2xl border border-slate-100">
                  <Image
                    src="/images/entrepreneur-thinking.jpg"
                    alt="Pensive entrepreneur reflecting on business decisions"
                    fill
                    sizes="(min-width: 1024px) 340px, 90vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Glass Card (Top Left): Real People, Real Conversations */}
                <div className="absolute -left-3 sm:-left-6 top-8 sm:top-10 z-20 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 p-4 shadow-xl max-w-[170px]">
                  <div className="size-7 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center mb-2.5">
                    <Users2 className="size-4" />
                  </div>
                  <p className="text-[11px] font-medium text-slate-700 leading-snug">
                    Real People.<br />
                    Real Conversations.<br />
                    Real Opportunities.
                  </p>
                  <span className="block h-[1.5px] w-4 bg-slate-300 mt-2.5" />
                </div>

                {/* Floating Dark Card (Bottom Left): Better Entrepreneurs Together */}
                <div className="absolute -left-3 sm:-left-6 bottom-6 sm:bottom-8 z-20 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 p-3 shadow-2xl w-[165px]">
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-2.5 border border-white/10">
                    <Image
                      src="/images/circle-meeting.png"
                      alt="Better Entrepreneurs Together"
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[11px] font-bold text-white leading-tight">
                    Better<br />
                    Entrepreneurs<br />
                    Together
                  </p>
                  <span className="block h-[1.5px] w-4 bg-white/40 mt-1.5" />
                </div>
              </div>
            </div>

            {/* ──────── COLUMN 2: Narrative Storyline ──────── */}
            <div className="lg:col-span-4 xl:col-span-1 flex flex-col gap-4">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-6 bg-[#0062D2]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                  The Silent Reality
                </span>
              </div>

              {/* Title with script accent on 'talks about.' */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-[1.12] text-slate-950">
                The problem nobody{' '}
                <span
                  className="block text-[#0062D2]"
                  style={{ fontFamily: 'var(--font-script, cursive)' }}
                >
                  talks about.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-light mt-1">
                Ask an entrepreneur how business is going and you will almost always get the same answer:
              </p>

              {/* Quote banner "Business is good." */}
              <div className="rounded-xl bg-blue-50/70 border border-blue-100/80 px-4 py-3 flex items-center gap-2.5 my-1">
                <span className="font-serif text-2xl text-[#0062D2] leading-none select-none font-bold">
                  &ldquo;
                </span>
                <span className="font-serif italic text-base sm:text-lg font-medium text-slate-900">
                  Business is good.&rdquo;
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                <p>
                  They will say it to their parents. To their friends. To the people at the wedding. Sometimes to their own husband or wife. And often it is not true.
                </p>

                <p className="font-bold text-slate-900 text-xs sm:text-sm">
                  This is the part of entrepreneurship that never appears in the interviews.
                </p>

                <p>
                  An entrepreneur is surrounded by people all day and understood by almost none of them. The team cannot be told that this month is uncertain, because telling them would signal the very thing you are protecting. The family sees the office and the travel and the phone that never stops ringing, and they assume everything is fine.
                </p>

                <p className="font-serif italic text-sm sm:text-base text-slate-900 font-medium pt-1">
                  So you stop explaining.
                </p>
              </div>
            </div>

            {/* ──────── COLUMN 3: Dark Reflection Card + Light CTA Banner ──────── */}
            <div className="lg:col-span-4 xl:col-span-1 flex flex-col gap-4">
              
              {/* Midnight Card: A Founder's Reflection */}
              <div className="rounded-2xl border border-blue-900/40 bg-gradient-to-b from-[#091E42] via-[#05142E] to-[#040E20] p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl text-blue-400 leading-none select-none font-bold">
                      &ldquo;
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                      A Founder&apos;s Reflection
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                    You make the biggest decisions of your life at eleven at night with nobody to call. You make mistakes that one honest conversation would have prevented, and you make them in silence, and you pay for them for years. A win you waited three years for arrives, and there is no one in the room who understands what it cost.
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-blue-900/60">
                  <p className="text-xs font-semibold text-[#38BDF8] leading-snug">
                    Entrepreneurs are surrounded by people, but rarely understood.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed font-light">
                    They do not need more motivation. They need belonging, trust, and peers who understand the weight they are carrying.
                  </p>
                </div>
              </div>

              {/* Elevated Card: Why Peers Global Exists */}
              <div className="rounded-2xl border border-blue-100 bg-white p-4 sm:p-5 flex items-center justify-between gap-3 shadow-xs hover:shadow-md transition-all">
                <div className="flex items-center gap-3.5">
                  <div className="size-10 rounded-full bg-[#0062D2] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Lightbulb className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
                      Why Peers Global Exists
                    </span>
                    <span className="text-xs text-slate-500 font-light mt-0.5">
                      This is the silent reason behind many ideas. It is also the reason Peers Global exists.
                    </span>
                  </div>
                </div>
                <Link
                  href="/membership"
                  aria-label="Why Peers Global Exists"
                  className="size-9 rounded-full border border-slate-200 flex items-center justify-center text-[#0062D2] hover:bg-blue-50 transition-colors shrink-0"
                >
                  <ArrowRight className="size-4" />
                </Link>
              </div>

            </div>

            {/* ──────── FAR RIGHT: Vertical Decorative Strip ──────── */}
            <div className="hidden xl:flex items-center gap-3 border-l-2 border-slate-200/80 pl-3 py-1 shrink-0 self-center">
              <div className="flex flex-col text-[10px] font-bold tracking-[0.22em] text-slate-400 uppercase leading-relaxed text-left">
                <span>SAME</span>
                <span>JOURNEY</span>
                <span>BIGGER</span>
                <span>POSSIBILITIES</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHERE THIS IDEA CAME FROM (FOUNDER'S JOURNEY)
          ========================================================================= */}
      <section className="section py-20 sm:py-28 border-b border-slate-200/80 bg-slate-50/60">
        <div className="shell max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-[1.5px] w-6 bg-[#0062D2]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                Origin Story
              </span>
              <span className="h-[1.5px] w-6 bg-[#0062D2]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-950 tracking-tight leading-tight">
              Where this idea came from
            </h2>
            
            <p className="font-serif italic text-lg sm:text-xl text-[#0062D2] mt-2 font-normal">
              In the words of our Founder, Dr. Pravin Parmar.
            </p>
          </div>

          {/* Founder Bio Card Banner */}
          <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="relative size-28 sm:size-32 rounded-full overflow-hidden border-3 border-blue-100 shadow-md shrink-0">
              <Image
                src="/images/founder-new.png"
                alt="Dr. Pravin Parmar — Founder, Peers Global"
                fill
                sizes="128px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="flex flex-col text-center md:text-left gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                Architect of the LSR Model &amp; Founder
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-950">
                Dr. Pravin Parmar
              </h3>
              <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
                From a small village in Botad to mentoring 10,000+ MSME promoters across India, building VyapaarJagat, and architecting the World&apos;s First Community of Collaboration.
              </p>
            </div>
          </div>

          {/* 6 Chronological Milestone Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            {/* 1. Botad Farmer Family */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-200 transition-all">
              <div className="flex flex-col gap-3">
                <span className="size-8 rounded-lg bg-blue-50 text-[#0062D2] text-xs font-bold flex items-center justify-center">
                  01
                </span>
                <h4 className="font-serif text-lg font-semibold text-slate-900">
                  Dignity without money
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  I come from a very poor farmer family in Botad. But I do not come from a weak mindset. That difference has shaped everything. When a season failed, nobody was left to face it alone. People carried each other. It took me thirty years to realise how rare it is everywhere else.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Roots in Botad
              </div>
            </div>

            {/* 2. Deciding My Own Ceiling */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-200 transition-all">
              <div className="flex flex-col gap-3">
                <span className="size-8 rounded-lg bg-blue-50 text-[#0062D2] text-xs font-bold flex items-center justify-center">
                  02
                </span>
                <h4 className="font-serif text-lg font-semibold text-slate-900">
                  Excuses die quietly
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  I could not speak English. From a government school, when I decided I needed to learn, the principal told me no. Standing up that day was about deciding that my background would not decide my ceiling. I paid my own fees by teaching. When you pay your own fees, excuses die quietly.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Self-Reliance
              </div>
            </div>

            {/* 3. The Ego of Failure */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-200 transition-all">
              <div className="flex flex-col gap-3">
                <span className="size-8 rounded-lg bg-blue-50 text-[#0062D2] text-xs font-bold flex items-center justify-center">
                  03
                </span>
                <h4 className="font-serif text-lg font-semibold text-slate-900">
                  Honesty about failure
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Later I built my own company. Right product, but early. Stopping it was painful and clear: failure is not when a business ends. Failure is dragging something that no longer belongs in your future because your ego cannot let it go.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                First Venture
              </div>
            </div>

            {/* 4. The Hospital Corridor */}
            <div className="flex flex-col justify-between rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/70 to-white p-6 sm:p-7 shadow-xs hover:shadow-md transition-all">
              <div className="flex flex-col gap-3">
                <span className="size-8 rounded-lg bg-[#0062D2] text-white text-xs font-bold flex items-center justify-center">
                  04
                </span>
                <h4 className="font-serif text-lg font-semibold text-slate-900">
                  Who you can call
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  A family crisis put me in a hospital corridor, stripping every illusion. Skills mean very little without the right people around you. What matters in those moments is who you can call. Entrepreneurs do not fail only because of business problems. They fail because they fight alone.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-blue-100 text-[11px] font-semibold text-[#0062D2] uppercase tracking-wider">
                The Awakening
              </div>
            </div>

            {/* 5. Giving MSMEs a Voice */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-200 transition-all">
              <div className="flex flex-col gap-3">
                <span className="size-8 rounded-lg bg-blue-50 text-[#0062D2] text-xs font-bold flex items-center justify-center">
                  05
                </span>
                <h4 className="font-serif text-lg font-semibold text-slate-900">
                  Making MSMEs visible
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Media only talked about venture funding while MSMEs — the businesses that build families, cities and jobs — remained invisible. That taught me every honest business story deserves respect and visibility. Even if a business shuts down, its story should never die.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                VyapaarJagat Media
              </div>
            </div>

            {/* 6. Community Transforms */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-200 transition-all">
              <div className="flex flex-col gap-3">
                <span className="size-8 rounded-lg bg-blue-50 text-[#0062D2] text-xs font-bold flex items-center justify-center">
                  06
                </span>
                <h4 className="font-serif text-lg font-semibold text-slate-900">
                  Circles, not crowds
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Events end. Media informs. Only community transforms. Entrepreneurs do not need more speakers. They need a space where they can be real without being judged. Circles, not crowds. Trust, not transactions. Peers, not gurus.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Genesis of Peers Global
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHAT WE BELIEVE (THE 4-SENTENCE SEQUENCE)
          ========================================================================= */}
      <section className="section py-20 sm:py-28 border-b border-slate-200/80 bg-white">
        <div className="shell max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-[1.5px] w-6 bg-[#0062D2]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                The Core Philosophy
              </span>
              <span className="h-[1.5px] w-6 bg-[#0062D2]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-950 tracking-tight leading-tight">
              What we believe
            </h2>
            
            <p className="text-base text-slate-500 mt-3 font-light">
              Peers Global rests on four sentences.
            </p>
          </div>

          {/* 4-Sentence Sequential Stack */}
          <div className="relative flex flex-col gap-4 max-w-3xl mx-auto mb-14">
            
            {/* Step 4 (Top of ladder) */}
            <div className="group relative flex items-center gap-5 rounded-2xl border border-blue-200 bg-blue-50/80 p-5 sm:p-6 shadow-xs transition-all hover:shadow-md">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#0062D2] text-white font-bold text-sm shrink-0">
                4
              </span>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0062D2]">Outcome</span>
                <span className="font-serif text-xl sm:text-2xl font-semibold text-slate-900">
                  Business grows through relationships.
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative flex items-center gap-5 rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs transition-all hover:shadow-md">
              <span className="flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 font-bold text-sm shrink-0">
                3
              </span>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Foundation</span>
                <span className="font-serif text-xl sm:text-2xl font-semibold text-slate-900">
                  Relationships grow through trust.
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative flex items-center gap-5 rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs transition-all hover:shadow-md">
              <span className="flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 font-bold text-sm shrink-0">
                2
              </span>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Catalyst</span>
                <span className="font-serif text-xl sm:text-2xl font-semibold text-slate-900">
                  Trust grows through contribution.
                </span>
              </div>
            </div>

            {/* Step 1 (Base of ladder) */}
            <div className="group relative flex items-center gap-5 rounded-2xl border border-amber-200 bg-amber-50/50 p-5 sm:p-6 shadow-xs transition-all hover:shadow-md">
              <span className="flex size-10 items-center justify-center rounded-xl bg-amber-600 text-white font-bold text-sm shrink-0">
                1
              </span>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">Starting Point</span>
                <span className="font-serif text-xl sm:text-2xl font-semibold text-slate-900">
                  And contribution creates impact.
                </span>
              </div>
            </div>
          </div>

          {/* Bottom-Up Readout Callout */}
          <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 text-center flex flex-col items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              Read them from the bottom up
            </span>
            <p className="font-serif text-lg sm:text-xl font-medium text-slate-900">
              Give first. Build trust. Deepen the relationship. Grow the business.
            </p>
            <p className="text-sm text-slate-500 max-w-xl font-light leading-relaxed">
              Everything in this community exists to make that sequence happen reliably, for thousands of entrepreneurs, again and again.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. PEERS ARE PARTNERS IN BUSINESS AND FRIENDS IN LIFE
          ========================================================================= */}
      <section className="section py-20 sm:py-28 border-b border-slate-200/80 bg-slate-50/40">
        <div className="shell max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left Column: Visual & Definition */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/images/who-we-are-friends.jpg"
                  alt="Peers are Partners in Business and Friends in Life"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    The Bond
                  </span>
                  <p className="font-serif text-lg font-medium mt-1.5">
                    Standing beside you. Not above, not across.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-2">
                  What &quot;Peer&quot; Means
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  We call the people in this community <strong className="font-semibold text-slate-900">Peers</strong>. The word describes a relationship, not a status. A Peer stands beside you. Not above you as an authority. Not across from you as a vendor. Beside you, as someone who has felt the same pressure and made the same difficult calls.
                </p>
              </div>
            </div>

            {/* Right Column: Three Proofs of Partnership */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-2.5">
                <span className="h-[1.5px] w-6 bg-[#0062D2]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                  The Relationship
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-normal leading-tight text-slate-950">
                Peers are Partners in Business and Friends in Life.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-light">
                For an entrepreneur, life and business are not two neatly partitioned lives. When one is under pressure, the other feels it immediately.
              </p>

              {/* 3 Pillars */}
              <div className="space-y-4 pt-2">
                <div className="rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 flex items-start gap-4 shadow-xs">
                  <div className="size-9 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Six months later</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-light leading-relaxed">
                      It means the Peer who introduces you to a client also asks how it went six months later.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 flex items-start gap-4 shadow-xs">
                  <div className="size-9 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">At the daughter&apos;s wedding</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-light leading-relaxed">
                      It means the person who helped you enter a new market is the one who shows up at your daughter&apos;s wedding.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 flex items-start gap-4 shadow-xs">
                  <div className="size-9 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">United growth</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-light leading-relaxed">
                      It means the business relationship and the human relationship grow together, because for entrepreneurs they were never really separate.
                    </p>
                  </div>
                </div>
              </div>

              {/* Closing summary */}
              <p className="font-serif italic text-lg sm:text-xl text-slate-800 pt-3">
                &ldquo;Peers arrive looking for business. They stay for the friendships. And the business follows, because that is how business has always worked between people who trust each other.&rdquo;
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. WHAT WE ARE BUILDING (ARCHITECTURE & LSR MODEL)
          ========================================================================= */}
      <section className="section py-20 sm:py-28 border-b border-slate-200/80 bg-white">
        <div className="shell max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-[1.5px] w-6 bg-[#0062D2]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                Our Architecture
              </span>
              <span className="h-[1.5px] w-6 bg-[#0062D2]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-950 tracking-tight leading-tight">
              What we are building
            </h2>
            
            <p className="font-serif italic text-xl sm:text-2xl text-[#0062D2] mt-2 font-normal">
              Not a networking group. A leadership organisation.
            </p>

            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-light max-w-2xl">
              Peers Global is the World&apos;s First Community of Collaboration, built on the LSR Growth Model — Learning, Sales and Resources — with a mission to enhance the lives of one million entrepreneurs.
            </p>
          </div>

          {/* Bento Architecture Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Card 1: Your Inner Board */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-4">
                  <Users2 className="size-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-2">
                  Your Inner Board
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  Eighteen industry and goal-specific Circles. A peer board of 30 to 50 vetted entrepreneurs who challenge your blind spots and celebrate your milestones.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0062D2] mt-5 block">
                18 Industry &amp; City Circles →
              </span>
            </div>

            {/* Card 2: 10 Forms of Collaboration */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-4">
                  <Layers className="size-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-2">
                  10 Forms of Collaboration
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  Moving beyond basic referral exchange into joint ventures, shared capacity, collective procurement, overseas delegations, and knowledge teardowns.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0062D2] mt-5 block">
                Beyond Conventional Networking →
              </span>
            </div>

            {/* Card 3: One Action = One Life */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-4">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-2">
                  One Action = One Life
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  A transparent recognition system where one action equals one life impacted. Celebrating contribution, active participation, and real MSME empowerment.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0062D2] mt-5 block">
                Impact-Driven Ledger →
              </span>
            </div>

            {/* Card 4: Leadership Pathway */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-4">
                  <Award className="size-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-2">
                  Leadership Pathway
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  From member to ecosystem owner: Leadership Team (LT), Circle Director (CD), Circle Founder (CF), Industry Director (ID), and Regional Executive Director (RED).
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0062D2] mt-5 block">
                5-Stage Progression Ladder →
              </span>
            </div>

            {/* Card 5: LSR Growth Model */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-4">
                  <TrendingUp className="size-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-2">
                  LSR Growth Model
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  Learning from real operators, Sales through high-trust relationships, and Resources pooled together for collective scale and bargaining power.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0062D2] mt-5 block">
                Learn · Share · Refer →
              </span>
            </div>

            {/* Card 6: Everyday Unity Platform */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-4">
                  <Smartphone className="size-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-2">
                  Unity App Platform
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  The Unity App running every day in between meetings — digital referrals, verified member directory, 1-to-1 matchmaking, and meeting registrations.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0062D2] mt-5 block">
                Available on iOS &amp; Android →
              </span>
            </div>

          </div>

          {/* Center CTA Button */}
          <div className="flex justify-center mt-12">
            <Link
              href="/circles"
              className="inline-flex items-center gap-2.5 rounded-lg bg-[#0062D2] hover:bg-blue-700 text-white px-8 py-4 text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span>Explore Our World</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. THE 1 MILLION MISSION
          ========================================================================= */}
      <section className="section py-20 sm:py-28 border-b border-slate-200/80 bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 size-96 rounded-full bg-[#0062D2]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="shell max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/40 border border-blue-400/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-5">
              Mission 2030
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight">
              The 1 Million Mission
            </h2>

            <p className="display text-2xl sm:text-3xl text-amber-300 font-semibold mt-3">
              1M+ entrepreneurs to impact by 2030.
            </p>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mt-4 font-light leading-relaxed">
              Impact is not money. Impact is confidence, visibility and support.
            </p>
          </div>

          {/* 3 Impact Triggers */}
          <div className="grid gap-6 sm:grid-cols-3 mb-14">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xs">
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block mb-2">
                Phase 01
              </span>
              <p className="font-serif text-lg text-white font-medium">
                If one entrepreneur feels less alone.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xs">
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block mb-2">
                Phase 02
              </span>
              <p className="font-serif text-lg text-white font-medium">
                If one business finds clarity.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xs">
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block mb-2">
                Phase 03
              </span>
              <p className="font-serif text-lg text-white font-medium">
                If one founder finds the right peer.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <span className="font-serif italic text-2xl sm:text-3xl text-blue-200">
              Impact has begun.
            </span>
          </div>

          {/* Founder Quote Banner */}
          <div className="rounded-2xl border border-white/15 bg-gradient-to-r from-blue-950/60 via-slate-900 to-blue-950/60 p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-2xl">
            <Quote className="size-8 text-blue-400/60 mx-auto mb-4" />
            <p className="font-serif italic text-xl sm:text-2xl text-white font-normal leading-relaxed">
              &ldquo;Success is not just what you earn. It is how many lives you impact.&rdquo;
            </p>
            <p className="text-xs font-semibold tracking-[0.2em] text-blue-300 uppercase mt-4">
              — Dr. Pravin Parmar, Founder
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <Link
              href="/why-peers-global"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 hover:border-white text-white px-7 py-3 text-xs sm:text-sm font-semibold transition-all hover:bg-white/10 active:scale-[0.98]"
            >
              <span>See the 1 Million Mission</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. CLOSING SECTION (MATCHING ROYAL BLUE DESIGN)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#0062D2] py-20 sm:py-28 text-white">
        {/* Geometric orbital line art */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-35 overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 600 600"
            fill="none"
            className="w-full h-full text-white/30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50 450 A 420 420 0 0 1 550 50"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M 120 520 A 500 500 0 0 1 600 120"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.6"
            />
            <path
              d="M 220 580 A 460 460 0 0 1 580 220"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.5"
            />
            <circle cx="280" cy="220" r="4.5" fill="#7DD3FC" />
            <circle cx="280" cy="220" r="10" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="shell relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Eyebrow with horizontal dash */}
          <div className="flex items-center gap-2.5 mb-5">
            <span className="h-[1.5px] w-6 bg-white/70" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              The Core Conviction
            </span>
            <span className="h-[1.5px] w-6 bg-white/70" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] tracking-tight text-white mb-4">
            The right circle can change your life faster than the right idea.
          </h2>

          <p className="font-serif italic text-2xl sm:text-3xl text-[#7DD3FC] mb-3">
            You were never meant to build alone.
          </p>

          <p className="text-base sm:text-lg font-medium text-white/95 mb-10">
            Build Your Business. Build Your Relationships. Build Your Circle.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link
              href="/membership"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-white px-8 py-4 text-xs sm:text-sm font-bold tracking-wider text-[#0062D2] shadow-md transition-all duration-200 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase"
            >
              <span>JOIN PEERS GLOBAL</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/circles"
              className="inline-flex items-center gap-2.5 rounded-lg border border-white/50 px-8 py-4 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:border-white active:scale-[0.98] uppercase"
            >
              <span>FIND YOUR CIRCLE</span>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-1 text-xs text-white/75 pt-6 border-t border-white/20 w-full max-w-lg">
            <p className="font-semibold text-white">
              Peers Global — World&apos;s First Community of Collaboration
            </p>
            <p>Peers are Partners in Business and Friends in Life.</p>
          </div>
        </div>
      </section>

    </div>
  )
}

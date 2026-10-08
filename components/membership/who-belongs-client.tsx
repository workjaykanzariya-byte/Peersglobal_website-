'use client'

import React from 'react'
import Link from 'next/link'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  ArrowRight,
  ChevronRight,
  Smartphone,
  Users,
  Building2,
  Globe2,
  Target,
  ShieldCheck,
  Heart,
  HeartHandshake,
  Handshake,
  Share2,
  TrendingUp,
  MessageSquare,
  Sparkles,
  Star,
  CheckCircle2,
  XCircle,
  Plus,
  Minus,
  Quote,
  Check,
  UserCheck,
  Award,
  Clock,
  HelpCircle,
} from 'lucide-react'

// ─── What We Look For Items ───────────────────────────────────────────────
const WHAT_WE_LOOK_FOR = [
  { text: 'Respect other entrepreneurs and their journeys', icon: Heart, color: 'text-rose-600 bg-rose-50 border-rose-200/60' },
  { text: 'Believe relationships take time to build', icon: Clock, color: 'text-blue-600 bg-blue-50 border-blue-200/60' },
  { text: 'Are willing to give before asking', icon: HeartHandshake, color: 'text-emerald-600 bg-emerald-50 border-emerald-200/60' },
  { text: 'Share experience generously', icon: Share2, color: 'text-purple-600 bg-purple-50 border-purple-200/60' },
  { text: 'Value confidentiality', icon: ShieldCheck, color: 'text-amber-600 bg-amber-50 border-amber-200/60' },
  { text: 'Listen as much as they speak', icon: HelpCircle, color: 'text-cyan-600 bg-cyan-50 border-cyan-200/60' },
  { text: 'See collaboration as more than exchanging referrals', icon: Sparkles, color: 'text-indigo-600 bg-indigo-50 border-indigo-200/60' },
  { text: 'Take responsibility when they can contribute', icon: Target, color: 'text-teal-600 bg-teal-50 border-teal-200/60' },
  { text: 'Want to grow personally as well as professionally', icon: TrendingUp, color: 'text-blue-600 bg-blue-50 border-blue-200/60' },
  { text: 'Understand that a strong community is created by its people', icon: Users, color: 'text-rose-600 bg-rose-50 border-rose-200/60' },
]

// ─── You Belong Here If (6 Pillars) ───────────────────────────────────────
const YOU_BELONG_HERE_IF = [
  {
    num: '01',
    title: 'You Want Relationships, Not Just Contacts',
    desc: 'You are looking for people you can know over time—not another list of names in your phone. You understand that trust develops through repeated interaction.',
    highlight: 'Deep trust over shallow networks.',
    icon: Users,
    color: 'border-blue-200 bg-blue-50 text-[#0062D2]',
  },
  {
    num: '02',
    title: 'You Are Willing to Give',
    desc: 'You have knowledge, experience, introductions, perspective or simply the willingness to help. And you are comfortable asking “How can I help?” before asking “What can you get me?”',
    highlight: 'Give before you ask.',
    icon: HeartHandshake,
    color: 'border-rose-200 bg-rose-50 text-rose-700',
  },
  {
    num: '03',
    title: 'You Want to Learn From Other Entrepreneurs',
    desc: 'You know that no matter how experienced you become, someone else may have seen something you have not. You are curious. You listen. You remain open to learning.',
    highlight: 'Curiosity and experiential wisdom.',
    icon: Sparkles,
    color: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  },
  {
    num: '04',
    title: 'You Respect Confidentiality',
    desc: 'Entrepreneurs need places where they can speak honestly. That requires trust. And trust requires responsibility. What a Peer shares in confidence is treated with the respect that confidence deserves.',
    highlight: 'Uncompromising psychological safety.',
    icon: ShieldCheck,
    color: 'border-amber-200 bg-amber-50 text-amber-700',
  },
  {
    num: '05',
    title: 'You Want to Contribute to the Room',
    desc: 'You do not want to sit quietly waiting for opportunities to arrive. You want to participate: Share. Connect. Recognise. Solve. Support. Build.',
    highlight: 'Active contribution creates leadership.',
    icon: Award,
    color: 'border-purple-200 bg-purple-50 text-purple-700',
  },
  {
    num: '06',
    title: 'You See Growth as a Shared Journey',
    desc: 'You believe that another entrepreneur’s success does not diminish yours. You can celebrate another person’s progress, learn from their experience, and contribute without needing to own the outcome.',
    highlight: 'Multiplied success through community.',
    icon: TrendingUp,
    color: 'border-cyan-200 bg-cyan-50 text-cyan-700',
  },
]

// ─── Not For You If & Do Not Require ──────────────────────────────────────
const NOT_FOR_YOU_IF = [
  {
    title: 'You are looking only for immediate business leads.',
    desc: 'Relationships here are not treated as transactions.',
  },
  {
    title: 'You expect the community to generate results without your participation.',
    desc: 'A community cannot contribute for you.',
  },
  {
    title: 'You are uncomfortable helping people without an immediate return.',
    desc: 'Give-First is part of the culture.',
  },
  {
    title: 'You see every relationship primarily as a sales opportunity.',
    desc: 'People are not prospects waiting to be converted.',
  },
  {
    title: 'You are unwilling to respect confidentiality, boundaries or the community’s standards.',
    desc: 'Trust is not optional.',
  },
]

const WHAT_WE_DO_NOT_REQUIRE = [
  'Have the biggest business in the room',
  'Be a famous entrepreneur',
  'Have a perfect business story',
  'Know everyone',
  'Be an extrovert',
  'Be an experienced networker',
  'Have all the answers',
  'Arrive with a large sales pipeline',
]

// ─── Decline Application Factors ──────────────────────────────────────────
const DECLINE_FACTORS = [
  'Alignment with the culture',
  'Willingness to contribute',
  'Respect for confidentiality',
  'Appropriate Circle fit',
  'Existing category or Circle structure',
  'The overall experience of the community',
]

export function WhoBelongsClient() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans antialiased">

      {/* =========================================================================
          SECTION 1: HERO — WHO BELONGS HERE (Master Full Page Dark Video Banner)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Full Bleed Hero Video Background */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            poster="/images/membership-hero-peers.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link href="/membership" className="hover:text-white transition-colors">
              Membership
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-white font-semibold">Who Belongs Here</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Hero Content */}
            <div className="lg:col-span-12 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>WHO BELONGS HERE</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  This community is built for a{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    particular kind of entrepreneur
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  PEERS GLOBAL is not trying to be everything to everyone. It is built for founders who give first, show up consistently, and think in decades.
                </p>
              </div>

              {/* Sub-content */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                <p>
                  Meaningful communities need something more than numbers: they need shared values, active participation, and entrepreneurs who understand that a relationship is more important than a transaction.
                </p>
                
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm text-slate-200 text-xs sm:text-[13px] leading-relaxed">
                  <p className="font-semibold text-white">
                    So before you ask: <span className="text-sky-300 font-bold">&ldquo;What will I get here?&rdquo;</span>
                  </p>
                  <p className="text-slate-300 mt-0.5 font-normal">
                    There is another question worth asking: <span className="text-rose-300 font-semibold">&ldquo;What kind of Peer will I be?&rdquo;</span>
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="/circles/find"
                  size="default"
                  className="font-semibold"
                >
                  Explore PEERS GLOBAL
                </GalaxyButton>

                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="transparent"
                  size="default"
                  icon={<Smartphone className="size-4 text-sky-400" />}
                  className="font-medium"
                >
                  Download Unity App
                </GalaxyButton>
              </div>

              {/* Stat Pill Band */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full pt-6 border-t border-white/15">
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 text-sky-300 mb-0.5">
                    <Users className="w-3.5 h-3.5" />
                    <span className="text-lg font-bold text-white">45+</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">Active Cities</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 text-rose-300 mb-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span className="text-lg font-bold text-white">100%</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">Verified Peers</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 text-amber-300 mb-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-lg font-bold text-white">1M+</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">Lives to Impact</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1 Sub-Card: The Essence of Community */}
          <div className="mt-8 relative p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#061226] via-[#0A1A38] to-[#040D1E] text-white shadow-xl border border-slate-800 overflow-hidden">
            <div className="absolute top-0 right-0 size-72 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                  <span className="h-[2px] w-4 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
                    The Essence of Community
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white tracking-tight leading-snug">
                  The Person Matters More Than the Profile
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Your company name does not tell us everything about you. Neither does your designation, turnover, or follower count. Behind every business is a person carrying a journey: a beginning, a set of choices, some successes, some disappointments, some lessons, and something still being built.
                </p>
              </div>

              <div className="lg:col-span-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <p className="text-xs text-sky-300 font-mono uppercase tracking-wider mb-1">Our Core Commitment</p>
                <p className="text-sm sm:text-base font-semibold text-amber-300 italic leading-snug">
                  &ldquo;That is the person we want the community to meet.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHAT WE LOOK FOR
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-left max-w-3xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Character &amp; Commitment
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-slate-900 leading-snug">
              What we look for
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              We look for entrepreneurs who are serious about building businesses and relationships. People who:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WHAT_WE_LOOK_FOR.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between space-y-3 group"
                >
                  <div className={`size-9 rounded-xl flex items-center justify-center border ${item.color} group-hover:scale-105 transition-transform duration-300 shadow-2xs`}>
                    <Icon className="size-4.5" />
                  </div>
                  <p className="text-xs sm:text-[13px] font-semibold text-slate-800 group-hover:text-[#0062D2] transition-colors leading-snug">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center justify-between flex-col sm:flex-row gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <span className="text-[#0062D2] font-bold text-base">✦</span>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                You do not have to arrive with all the answers. <span className="text-slate-900 font-bold">You do need to arrive with the willingness to participate.</span>
              </p>
            </div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0062D2] shrink-0">
              Active Participation
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE FIFTEEN NAMES TEST
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#061226] via-[#0A1A38] to-[#040D1E] text-white relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute top-0 right-0 size-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                <span className="h-[2px] w-4 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
                  The Culture Test
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                The Fifteen Names Test
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Here is a simple way to understand whether this community may be right for you:
              </p>

              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.06] border border-white/10 text-slate-200 space-y-1.5 backdrop-blur-xs">
                <p className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-sky-400">✦</span> Think of 15 entrepreneurs you know.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Not fifteen prospects. Not fifteen people you could sell to. Fifteen people whose experience, character, relationships or ambition you genuinely respect.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 sm:p-6 rounded-2xl bg-blue-950/40 border border-blue-500/20 space-y-2 backdrop-blur-xs">
                  <span className="text-[11px] font-mono font-bold text-sky-300 uppercase tracking-wider">Question 01</span>
                  <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                    How many of those 15 would I be willing to introduce to the other people in my Circle?
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-blue-950/40 border border-blue-500/20 space-y-2 backdrop-blur-xs">
                  <span className="text-[11px] font-mono font-bold text-sky-300 uppercase tracking-wider">Question 02</span>
                  <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                    How many of those 15 would I be willing to help—even if there were no immediate business benefit to me?
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-white/10">
                <p className="text-xs sm:text-sm text-slate-300 font-light">
                  If those questions feel natural to you, you may already understand the spirit of PEERS GLOBAL.
                </p>
                <p className="text-sm sm:text-base text-amber-300 font-semibold italic">
                  &ldquo;Because community is not built by collecting contacts. It is built by caring about people.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: YOU BELONG HERE IF (01 - 06)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-left max-w-3xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Alignment
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-slate-900 leading-snug">
              You belong here if...
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {YOU_BELONG_HERE_IF.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.num}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0062D2]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
                >
                  {/* Subtle top glow highlight on hover */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#0062D2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="space-y-4 relative z-10">
                    {/* Header: Icon + Number Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`size-11 rounded-xl flex items-center justify-center border shadow-2xs group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 ${item.color}`}>
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500 bg-slate-50 border border-slate-200/70 group-hover:bg-[#EFF6FF] group-hover:text-[#0062D2] group-hover:border-blue-200 px-2.5 py-1 rounded-md transition-colors">
                        {item.num}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-[17px] font-bold text-slate-900 leading-snug group-hover:text-[#0062D2] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Takeaway / Highlight Pill */}
                  <div className="pt-4 mt-4 border-t border-slate-100/90 relative z-10">
                    <div className="text-[11px] sm:text-xs font-medium text-slate-700 bg-slate-50/80 group-hover:bg-blue-50/70 group-hover:text-slate-900 group-hover:border-blue-100/80 rounded-lg p-2.5 border border-slate-100 leading-relaxed flex items-start gap-1.5 transition-colors">
                      <span className="text-[#0062D2] font-bold mt-0.5 group-hover:scale-125 transition-transform">✦</span>
                      <span>{item.highlight}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CONTRAST — NOT FOR YOU IF vs WHAT WE DO NOT REQUIRE
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left: This Is Probably Not For You If... */}
            <div className="rounded-3xl bg-[#FFF8F8] border border-rose-200/90 p-7 sm:p-9 flex flex-col justify-between shadow-2xs">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-6 bg-rose-500 rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600">
                    Honest Non-Fit
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 leading-tight">
                    This is probably not for you if...
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    There is equal value in being honest about non-fit. PEERS GLOBAL may not be the right environment if:
                  </p>
                </div>

                <div className="space-y-3.5">
                  {NOT_FOR_YOU_IF.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-rose-100/80 shadow-2xs">
                      <div className="size-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                        <XCircle className="size-4" />
                      </div>
                      <div className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                        <strong className="text-slate-900 font-bold block sm:inline mr-1">
                          {item.title}
                        </strong>
                        <span className="text-slate-600 font-light">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-rose-200 text-xs text-rose-700 font-medium italic mt-6">
                This is not a judgement on you or your business. It simply means that fit matters.
              </div>
            </div>

            {/* Right: What We Do Not Require */}
            <div className="rounded-3xl bg-[#F4FBF7] border border-emerald-200/90 p-7 sm:p-9 flex flex-col justify-between shadow-2xs">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-6 bg-emerald-600 rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                    Open To Authenticity
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 leading-tight">
                    What we do not require
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    You do not need to perform success. You need to be willing to participate honestly. You do not need to:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {WHAT_WE_DO_NOT_REQUIRE.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white border border-emerald-100/90 shadow-2xs flex items-center gap-2.5">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                      <span className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-emerald-200 text-xs text-emerald-800 font-bold mt-6">
                ✦ No pretension. Just honest, real founders building together.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WE MAY DECLINE APPLICATIONS & YOU DO NOT HAVE TO BE CERTAIN
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: We May Decline Applications */}
            <div className="lg:col-span-7 space-y-5 p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Community Protection
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                  We may decline applications
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  A community has a responsibility to protect the experience of the people already inside it. That means not every application will necessarily be accepted. A decision may depend on factors such as:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                  {DECLINE_FACTORS.map((factor, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-[#0062D2]" />
                      <span className="font-semibold text-slate-800">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-light">
                <p>
                  If an application is declined, that does not mean the entrepreneur is unsuccessful or unworthy. It means the community is protecting its purpose.
                </p>
                <p className="font-semibold text-slate-900">
                  Good communities know that who they say “not yet” to matters as much as who they welcome.
                </p>
              </div>
            </div>

            {/* Right: You Do Not Have to Be Certain */}
            <div className="lg:col-span-5 space-y-6 p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#061226] via-[#0A1A38] to-[#040D1E] text-white shadow-xl border border-slate-800 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                  <span className="h-[2px] w-4 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
                    Start by Exploring
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  You do not have to be certain
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  <p>
                    Perhaps you recognise yourself in some of these ideas—but not all. That is okay.
                  </p>
                  <p>
                    Perhaps you are wondering whether a Circle will feel right for you, or want to understand the culture before making a commitment.
                  </p>
                  <p className="text-white font-medium">
                    You do not have to manufacture certainty. Explore. Ask questions. Meet people. Understand the experience. Then decide.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <GalaxyButton
                  href="/circles/find"
                  size="default"
                  className="w-full uppercase tracking-wider font-bold"
                >
                  Explore Circles
                </GalaxyButton>
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="transparent"
                  size="default"
                  icon={<Smartphone className="size-4 text-sky-300" />}
                  className="w-full uppercase tracking-wider font-bold"
                >
                  Download Unity App
                </GalaxyButton>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: WHAT KIND OF ROOM DO YOU WANT TO BE PART OF?
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                The Choice
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-slate-900 leading-snug">
              What kind of room do you want to be part of?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {[
              {
                num: '01',
                tag: 'Mindset',
                avoid: 'A room where people are constantly selling to one another.',
                choose: 'A room where people know one another well enough to help when help is needed.',
                icon: Handshake,
                color: 'text-blue-600 bg-blue-50 border-blue-200/80',
              },
              {
                num: '02',
                tag: 'Culture',
                avoid: 'A room where everyone asks first without giving.',
                choose: 'A room where people generously contribute and give before they ask.',
                icon: HeartHandshake,
                color: 'text-emerald-600 bg-emerald-50 border-emerald-200/80',
              },
              {
                num: '03',
                tag: 'Depth',
                avoid: 'A casual directory full of passive contacts.',
                choose: 'A trusted Circle full of enduring, high-conviction relationships.',
                icon: Sparkles,
                color: 'text-rose-600 bg-rose-50 border-rose-200/80',
              },
            ].map((card) => {
              const CardIcon = card.icon
              return (
                <div
                  key={card.num}
                  className="group relative p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between space-y-5"
                >
                  {/* Top Bar: Icon + Number & Tag */}
                  <div className="flex items-center justify-between">
                    <div className={`size-10 rounded-2xl flex items-center justify-center border shadow-2xs group-hover:scale-105 transition-transform duration-300 ${card.color}`}>
                      <CardIcon className="size-5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md">
                        {card.tag}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                        {card.num}
                      </span>
                    </div>
                  </div>

                  {/* Contrast Stack */}
                  <div className="space-y-3.5 flex-1 flex flex-col justify-center">
                    {/* The Old / Avoid State */}
                    <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/60 text-xs text-slate-500 line-through leading-relaxed flex items-start gap-2">
                      <span className="text-slate-400 shrink-0 mt-0.5">✕</span>
                      <span>{card.avoid}</span>
                    </div>

                    {/* The Peer Choice / Target State */}
                    <div className="p-3.5 rounded-xl bg-[#EFF6FF] border border-blue-200/70 text-xs sm:text-[13px] font-bold text-slate-900 leading-relaxed flex items-start gap-2 shadow-2xs group-hover:border-blue-400/80 transition-colors">
                      <span className="text-[#0062D2] shrink-0 mt-0.5">✦</span>
                      <span>{card.choose}</span>
                    </div>
                  </div>

                  {/* Card Footer Accent */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-500">
                    <span>The PEERS Standard</span>
                    <span className="text-[#0062D2] font-semibold group-hover:translate-x-0.5 transition-transform">Selected →</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#061226] via-[#0A1A38] to-[#040D1E] text-white border border-slate-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/15 shrink-0">
                <Sparkles className="size-4" />
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                The answer tells you more about <strong className="text-white font-semibold">PEERS GLOBAL</strong> than any feature list ever could.
              </p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-sky-300/80 shrink-0">
              Community Essence
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CLOSING MANIFESTO BANNER
          ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-[#040F24] py-14 sm:py-18 lg:py-22 text-white border-t border-slate-800">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  You Do Not Have To Fit Everywhere
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold leading-tight tracking-tight text-white">
                The right community does not make you feel like a prospect. It makes you feel like a person who belongs.
              </h2>

              <p className="text-xs sm:text-sm font-light text-slate-200 max-w-2xl leading-relaxed">
                You only need to find the room where you can be yourself, contribute meaningfully, and grow with people who respect the journey.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <GalaxyButton
                  href="/circles/find"
                  size="default"
                  className="uppercase tracking-wider font-bold"
                >
                  Explore PEERS GLOBAL
                </GalaxyButton>

                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  variant="transparent"
                  size="default"
                  className="uppercase tracking-wider font-bold"
                >
                  Download Unity App
                </GalaxyButton>
              </div>
            </div>

            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-sm"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                A Person <br />
                Who <br />
                <span className="text-[#7DD3FC]">Belongs</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

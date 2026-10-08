'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  ArrowRight,
  ChevronRight,
  Smartphone,
  Check,
  ShieldCheck,
  UserCheck,
  Calendar,
  Clock,
  Sparkles,
  Lock,
  Layers,
  Heart,
  Users2,
  HelpCircle,
  Plus,
  Minus,
  CheckCircle2,
  FileText,
  ExternalLink,
  Download,
  CreditCard,
  Share2,
  HeartHandshake,
} from 'lucide-react'

// ─── Six Steps: How to Join ───────────────────────────────────────────────
const HOW_TO_JOIN_STEPS = [
  {
    num: '01',
    title: 'DOWNLOAD UNITY',
    desc: 'Download the Unity App and create your profile. This is where your journey into the PEERS GLOBAL community begins.',
  },
  {
    num: '02',
    title: 'TELL US ABOUT YOURSELF',
    desc: 'Introduce yourself, your business and what you are building. You are not being reduced to a form—we are simply beginning to understand where you may fit within the community.',
  },
  {
    num: '03',
    title: 'EXPLORE YOUR PLACE',
    desc: 'Explore PEERS GLOBAL and the Circle structure. Understand the difference between the wider community and your Circle (your Inner Board).',
  },
  {
    num: '04',
    title: 'BEGIN THE MEMBERSHIP PROCESS',
    desc: 'Complete the membership process through the Unity App. Your membership is individual; the platform subscription and Circle fee are separate.',
  },
  {
    num: '05',
    title: 'FIND YOUR CIRCLE',
    desc: 'Once your PEERS GLOBAL membership is in place, your Circle journey begins separately with your primary Industry Circle.',
  },
  {
    num: '06',
    title: 'BECOME A PEER',
    desc: 'Membership gives you entry. Participation creates familiarity. Contribution creates relationships—becoming your Inner Board.',
  },
]

// ─── Before You Subscribe Checklist (6 Key Pillars) ───────────────────────
const BEFORE_YOU_SUBSCRIBE = [
  {
    num: '01',
    title: 'Membership is Individual',
    desc: 'PEERS GLOBAL membership belongs to the individual entrepreneur, not to a company. Two partners from the same business may join individually.',
    icon: UserCheck,
    tag: 'Individual Relationship',
    color: 'text-blue-600 bg-blue-50 border-blue-200/70',
    hoverBorder: 'hover:border-blue-400',
    accentColor: '#0062D2',
    pillHover: 'group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200',
  },
  {
    num: '02',
    title: 'Two Separate Fees',
    desc: 'There is a PEERS GLOBAL platform subscription (₹18,000 / yr) and a Circle fee (separate, depending on the specific Circle venue).',
    icon: CreditCard,
    tag: 'Transparent Breakdown',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200/70',
    hoverBorder: 'hover:border-indigo-400',
    accentColor: '#4F46E5',
    pillHover: 'group-hover:bg-indigo-50 group-hover:text-indigo-700 group-hover:border-indigo-200',
  },
  {
    num: '03',
    title: 'No Joining Fee',
    desc: 'There is no additional joining fee or hidden initial entry penalty beyond the transparent annual subscriptions.',
    icon: CheckCircle2,
    tag: 'Zero Entry Barrier',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200/70',
    hoverBorder: 'hover:border-emerald-400',
    accentColor: '#059669',
    pillHover: 'group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-200',
  },
  {
    num: '04',
    title: 'Membership is Non-Refundable',
    desc: 'Subscriptions are non-refundable. Please review the applicable membership terms and covenants before subscribing.',
    icon: ShieldCheck,
    tag: 'Charter Policy',
    color: 'text-amber-600 bg-amber-50 border-amber-200/70',
    hoverBorder: 'hover:border-amber-400',
    accentColor: '#D97706',
    pillHover: 'group-hover:bg-amber-50 group-hover:text-amber-700 group-hover:border-amber-200',
  },
  {
    num: '05',
    title: 'GST is Extra',
    desc: 'GST is extra wherever applicable in accordance with prevailing statutory laws. Full tax invoices are issued immediately.',
    icon: FileText,
    tag: 'Statutory Compliance',
    color: 'text-purple-600 bg-purple-50 border-purple-200/70',
    hoverBorder: 'hover:border-purple-400',
    accentColor: '#7C3AED',
    pillHover: 'group-hover:bg-purple-50 group-hover:text-purple-700 group-hover:border-purple-200',
  },
  {
    num: '06',
    title: 'Time Matters Too',
    desc: 'Expect approximately 5–10 hours per month for meaningful participation across Circle meetings, conversations, and contribution.',
    icon: Clock,
    tag: 'Active Presence',
    color: 'text-rose-600 bg-rose-50 border-rose-200/70',
    hoverBorder: 'hover:border-rose-400',
    accentColor: '#E11D48',
    pillHover: 'group-hover:bg-rose-50 group-hover:text-rose-700 group-hover:border-rose-200',
  },
]

export function ApplyPageClient() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans antialiased">


      {/* =========================================================================
          SECTION 1: HERO — JOIN PEERS GLOBAL (Master Dark Video Banner)
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
            <span className="text-white font-semibold">Join Peers Global</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Hero Content */}
            <div className="lg:col-span-12 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>JOIN PEERS GLOBAL</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  Everything begins in the{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Unity App
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Experience the community of verified collaboration.
                </p>
              </div>

              {/* Description */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                <p>
                  You have read the story. You have explored the Circles. You have understood the investment, the process, and what membership asks of you.
                </p>
                <p className="font-semibold text-slate-200">
                  Now there is only one simple question: <span className="text-sky-300">Would you like to experience the community for yourself?</span>
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:opacity-95 transition-all uppercase tracking-wider group"
                >
                  <Smartphone className="size-4" />
                  <span>Download on App Store</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-2xs backdrop-blur-sm"
                >
                  <Smartphone className="size-4 text-sky-400" />
                  <span>Get it on Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: HOW TO JOIN (SIX STEPS)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                HOW TO JOIN
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Six steps. One simple beginning.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              We have made the onboarding process structured, transparent, and built around mutual alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {HOW_TO_JOIN_STEPS.map((step) => (
              <div
                key={step.num}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-2xl hover:border-blue-400/80 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white hover:to-blue-50/20 transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Top glow accent on hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#0062D2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="size-11 rounded-2xl bg-blue-50 border border-blue-200/70 text-[#0062D2] font-mono font-bold text-xs flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-2xs">
                      {step.num}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-50 border border-slate-200/80 text-slate-600 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-[#0062D2] transition-colors shadow-2xs">
                      STEP 0{step.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors duration-300 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 font-light leading-relaxed mt-2.5 transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-slate-200/90 flex items-center justify-between text-[11px] text-slate-500 font-medium relative z-10 transition-colors">
                  <span className="text-slate-400 group-hover:text-slate-600 transition-colors">Phase 0{step.num} of 06</span>
                  <span className="inline-flex items-center gap-1 text-[#0062D2] opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 font-semibold">
                    Explore Details &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHAT YOU GET ON DAY ONE
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#061226] via-[#0A1A38] to-[#040D1E] text-white relative overflow-hidden shadow-xl border border-slate-800">
            <div className="absolute top-0 right-0 size-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                <span className="h-[2px] w-4 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
                  Immediate Onboarding
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                What You Get on Day One
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Becoming a Peer is not simply the moment a subscription is activated. It is the beginning of your relationship with the community.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1.5 hover:bg-white/[0.07] transition-all">
                  <h4 className="text-xs font-bold text-sky-300 uppercase tracking-wider">Learning</h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">Access masterclasses, real founder playbooks, and peer discussions.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1.5 hover:bg-white/[0.07] transition-all">
                  <h4 className="text-xs font-bold text-sky-300 uppercase tracking-wider">Sharing</h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">Offer your expertise, contribute insights, and support other entrepreneurs.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1.5 hover:bg-white/[0.07] transition-all">
                  <h4 className="text-xs font-bold text-sky-300 uppercase tracking-wider">Relationships</h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">Connect with founders across industries, cities, and countries in Unity.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs sm:text-[13px] text-sky-200 italic leading-relaxed">
                The meeting may come later. <strong className="text-white not-italic font-semibold">The relationship begins now.</strong>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: BEFORE YOU SUBSCRIBE (Executive Transparency Matrix)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                TRANSPARENCY IS RESPECT
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Before You Subscribe
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              We believe transparency is part of respect. Clear expectations create strong, enduring partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {BEFORE_YOU_SUBSCRIBE.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-2xl ${item.hoverBorder} hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white hover:to-slate-50/50 transition-all duration-300 cursor-default overflow-hidden`}
                >
                  {/* Subtle top glow highlight on hover matching category accent */}
                  <div
                    className="absolute top-0 inset-x-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, ${item.accentColor} 50%, transparent 100%)`,
                    }}
                  />

                  <div className="space-y-4 relative z-10">
                    {/* Header with Icon and Tag Pill */}
                    <div className="flex items-center justify-between">
                      <div className={`size-12 rounded-2xl border flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-2xs ${item.color}`}>
                        <Icon className="size-5.5" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-50 border border-slate-200/80 text-slate-600 ${item.pillHover} transition-all duration-300 shadow-2xs`}>
                        {item.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors duration-300 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 font-light leading-relaxed mt-2.5 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Tag with hover indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-slate-200/90 flex items-center justify-between text-[11px] text-slate-500 font-medium relative z-10 transition-colors">
                    <span className="text-slate-400 font-mono group-hover:text-slate-600 transition-colors">
                      Tenet {item.num} of 06
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#0062D2] opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 font-semibold">
                      Clear Covenant &rarr;
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Reassurance Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/80 border border-blue-200/60 shadow-2xs flex items-center justify-center text-center text-xs sm:text-sm font-medium text-slate-800">
            <span>
              <strong className="text-slate-900 font-bold uppercase tracking-wider text-xs block sm:inline mr-2 text-[#0062D2]">Mutual Commitment:</strong>
              No surprises, no hidden renewals, and no transaction fees. A community built on genuine mutual respect.
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHAT HAPPENS AFTER YOU JOIN & NOT READY YET?
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left: What happens after you join? (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      GROWTH AT YOUR PACE
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                    What Happens After You Join?
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2">
                    You do not have to become everything on your first day. Growth within PEERS GLOBAL unfolds naturally:
                  </p>
                </div>

                {/* Interactive progression steps */}
                <div className="space-y-2.5">
                  {[
                    { step: '01', text: 'Start by meeting people across open discussions and local gatherings.', icon: Users2, color: 'text-blue-600 bg-blue-50 border-blue-200/60' },
                    { step: '02', text: 'Listen, observe, and learn from experienced founders.', icon: Sparkles, color: 'text-indigo-600 bg-indigo-50 border-indigo-200/60' },
                    { step: '03', text: 'Share what you know and contribute real perspectives.', icon: Share2, color: 'text-purple-600 bg-purple-50 border-purple-200/60' },
                    { step: '04', text: 'Ask when you need help, and offer help when you can.', icon: HeartHandshake, color: 'text-emerald-600 bg-emerald-50 border-emerald-200/60' },
                    { step: '05', text: 'Discover your Circle and become part of your Inner Board.', icon: ShieldCheck, color: 'text-rose-600 bg-rose-50 border-rose-200/60' },
                  ].map((item, idx) => {
                    const StepIcon = item.icon
                    return (
                      <div
                        key={idx}
                        className="group/item flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-2xs transition-all duration-200"
                      >
                        <div className={`size-9 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform duration-200 ${item.color}`}>
                          <StepIcon className="size-4" />
                        </div>
                        <span className="text-xs sm:text-[13.5px] font-medium text-slate-800 leading-snug">
                          {item.text}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-semibold text-[#0062D2] italic">
                  &ldquo;You arrive as an entrepreneur. You grow as a Peer.&rdquo;
                </span>
                <span className="text-slate-400 text-xs hidden sm:inline">Organic Evolution</span>
              </div>
            </div>

            {/* Right: Not Ready Yet? & Still Have Questions? (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#061226] via-[#0A1A38] to-[#040D1E] text-white shadow-xl border border-slate-800 hover:shadow-2xl hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 size-64 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-3">
                    <span className="h-[2px] w-4 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
                      No Artificial Urgency
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Not Ready Yet?
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mt-2">
                    You do not have to join today. There is no value in joining a community before you are ready to participate in it. Take your time to understand the ecosystem.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-xs space-y-2 hover:bg-white/[0.09] transition-colors">
                  <div className="flex items-center gap-2 text-sky-300">
                    <HelpCircle className="size-4 shrink-0" />
                    <h4 className="text-xs font-bold uppercase tracking-wider">Still Have Questions?</h4>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Review our detailed member handbook on Circle structures, meeting frequencies, guest policies, and leadership.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 relative z-10 flex flex-col gap-3">
                <Link
                  href="/membership/faq"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Read Member FAQ</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CLOSING MANIFESTO BANNER (Exact Homepage Dark Mesh Styling)
          ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-[#040F24] py-16 sm:py-20 lg:py-24 text-white border-t border-slate-800">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  BEGIN WITH UNITY
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold leading-[1.18] tracking-tight text-white">
                Your next relationship may begin with one simple download.
              </h2>

              <p className="text-base sm:text-lg font-light text-slate-200 max-w-2xl leading-relaxed">
                Download the Unity App to explore the ecosystem, meet the people, and start building your Inner Board.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <GalaxyButton
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noreferrer"
                  size="default"
                  icon={<Smartphone className="size-4" />}
                  className="uppercase tracking-wider font-bold"
                >
                  Download on App Store
                </GalaxyButton>

                <GalaxyButton
                  href="https://play.google.com"
                  target="_blank"
                  rel="noreferrer"
                  variant="transparent"
                  size="default"
                  icon={<Smartphone className="size-4" />}
                  className="uppercase tracking-wider font-bold"
                >
                  Get it on Google Play
                </GalaxyButton>
              </div>
            </div>

            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-md"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Experience <br />
                The <br />
                <span className="text-[#7DD3FC]">Community</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

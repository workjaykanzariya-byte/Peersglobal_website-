'use client'

import React from 'react'
import Link from 'next/link'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import { GlowCard } from '@/components/ui/glow-card'
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Smartphone,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  Handshake,
  Layers,
  HeartHandshake,
  Scale,
  Bell,
  Check,
  Lock,
  Target,
  FileCheck2,
  BadgeCheck,
} from 'lucide-react'

const VALUE_POINTS = [
  { name: 'Business Referral', points: '100 pts', way: 'Way 01', icon: Handshake, desc: 'Qualified introduction leading to revenue opportunity' },
  { name: 'Mentorship', points: '150 pts', way: 'Way 02', icon: Award, desc: 'Dedicated guidance on strategic or leadership dilemma' },
  { name: 'Joint Venture', points: '150 pts', way: 'Way 03', icon: Layers, desc: 'Formal collaborative partnership or consortium' },
  { name: 'Funding Access', points: '150 pts', way: 'Way 04', icon: TrendingUp, desc: 'Investor connect or non-dilutive capital pathway' },
  { name: 'Execution Support', points: '100 pts', way: 'Way 05', icon: Target, desc: 'Hands-on operational, supply or implementation backing' },
  { name: 'Visibility & PR', points: '100 pts', way: 'Way 06', icon: Sparkles, desc: 'Media coverage, stage access or market exposure' },
  { name: 'Problem Solving', points: '75 pts', way: 'Way 07', icon: Scale, desc: 'Unblocking a specific regulatory, tax, or technical issue' },
  { name: 'Vendor Connect', points: '75 pts', way: 'Way 08', icon: Users, desc: 'Vetted supplier, contractor or service recommendation' },
  { name: 'Knowledge Sharing', points: '50 pts', way: 'Way 09', icon: FileCheck2, desc: 'Playbook, template, benchmark or market intel' },
  { name: 'Emotional Support', points: '50 pts', way: 'Way 10', icon: HeartHandshake, desc: 'Confidential founder sounding board during crisis' },
]

export function ImpactConfirmationClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#1D4ED8]">
      {/* Global Shared SVG Gradient Definition for Brand Icons */}
      <svg className="absolute size-0 overflow-hidden pointer-events-none" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="brandIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
          <linearGradient id="brandIconGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#FB7185" />
          </linearGradient>
          <linearGradient id="cardGradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
        </defs>
      </svg>

      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3.5 text-slate-400" />
          <Link href="/the-currency" className="hover:text-slate-900 transition-colors">
            The Currency
          </Link>
          <ChevronRight className="size-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">How Impact Is Confirmed</span>
        </div>
      </div>

      {/* ─── 1. HERO SECTION (HOMEPAGE MATCHING COSMIC CANVAS) ─── */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-8 sm:pt-12 pb-16 sm:pb-20 border-b border-slate-800">
        {/* Ambient Video Background & Overlay */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.80)_45%,rgba(4,15,36,0.60)_100%)]" />
        </div>

        {/* Ambient background glowing orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 left-1/3 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl flex flex-col items-start space-y-6">
            
            {/* Eyebrow with cyan leading bar */}
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-7 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full shadow-[0_0_10px_#38bdf8]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                BILATERAL INTEGRITY ENGINE
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-bold tracking-tight text-white leading-[1.12]">
              How Peers Confirm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185]">
                Impact
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed max-w-3xl">
              You cannot award yourself impact. Every contribution is verified and confirmed by the entrepreneur who received it.
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
              When a contribution is logged in the Unity App, the receiving Peer is notified to confirm, amend or decline. Until they do, it counts for nothing. That single rule makes our entire record real.
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-3xl pt-1">
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-2 shadow-2xs hover:bg-white/15 transition-all">
                <ShieldCheck className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8] shrink-0" />
                <span className="truncate">Peer Verified</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-2 shadow-2xs hover:bg-white/15 transition-all">
                <Lock className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8] shrink-0" />
                <span className="truncate">Zero Self-Award</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-2 shadow-2xs hover:bg-white/15 transition-all">
                <FileCheck2 className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8] shrink-0" />
                <span className="truncate">Mutual Audit</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-2 shadow-2xs hover:bg-white/15 transition-all">
                <BadgeCheck className="size-4 stroke-[url(#brandIconGradDark)] text-[#38BDF8] shrink-0" />
                <span className="truncate">Immutable</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <GalaxyButton
                href="/download"
                variant="primary"
                size="default"
                className="font-bold uppercase tracking-wider"
              >
                Download Unity App
              </GalaxyButton>
              <GalaxyButton
                href="/life-impact-score"
                variant="transparent"
                size="default"
                className="font-medium uppercase tracking-wider"
              >
                Explore Impact Score
              </GalaxyButton>
            </div>

          </div>

          {/* 4 Metrics Strip Below Hero */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 items-stretch">
            <div className="h-full rounded-2xl bg-white border border-slate-200/90 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="size-10 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <ShieldCheck className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent leading-tight">Bilateral</div>
                <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500">2-Party Consensus</div>
              </div>
            </div>

            <div className="h-full rounded-2xl bg-white border border-slate-200/90 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="size-10 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <Lock className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent leading-tight">Zero</div>
                <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500">Unchecked Claims</div>
              </div>
            </div>

            <div className="h-full rounded-2xl bg-white border border-slate-200/90 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="size-10 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <TrendingUp className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent leading-tight">Real-Time</div>
                <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500">Live Unity Sync</div>
              </div>
            </div>

            <div className="h-full rounded-2xl bg-white border border-slate-200/90 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="size-10 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <Award className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent leading-tight">10 Ways</div>
                <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500">Standard Calibration</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 2. THE RULE THAT MAKES THE RECORD REAL ─── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent">
                  INTEGRITY FIRST
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
                The rule that makes the{' '}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent">
                  record real
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
                Anyone can claim they helped someone. Here, the person you helped has to agree.
              </p>

              <div className="p-6 rounded-3xl bg-[#FAFBFD] border border-blue-100 shadow-2xs space-y-3">
                <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  When a contribution is logged in the Unity App, the receiving Peer is notified immediately. Until they confirm it, it counts for nothing.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  That single step is the difference between a self-promotional claim and an authenticated history of leadership. It protects the integrity of every number published across the network.
                </p>
              </div>

              {/* 3 Core Trust Safeguards */}
              <div className="grid sm:grid-cols-3 gap-3.5 pt-1">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-2 hover:border-indigo-200 hover:shadow-xs transition-all">
                  <div className="size-8 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0">
                    <Users className="size-4 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">Same Room Accountability</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">You sit with your peers every month.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-2 hover:border-indigo-200 hover:shadow-xs transition-all">
                  <div className="size-8 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="size-4 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">Declining is Normal</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Amending or declining has zero penalty.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-2 hover:border-indigo-200 hover:shadow-xs transition-all">
                  <div className="size-8 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0">
                    <Scale className="size-4 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">Director Oversight</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Circle Directors monitor irregular patterns.</p>
                </div>
              </div>
            </div>

            {/* Right Comparison Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white to-[#FAFBFD] p-7 sm:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    COMPARISON
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    THE PEERS STANDARD
                  </span>
                </div>

                {/* Peers Standard Item */}
                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wide">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                    <span>Peers Global Bilateral Record</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1.5 pl-6 list-disc">
                    <li>Confirmed by the receiving entrepreneur</li>
                    <li>Zero unverified self-attestations</li>
                    <li>Immature or failed connects can be declined freely</li>
                    <li>Powers official Standing levels and Summit Awards</li>
                  </ul>
                </div>

                {/* Typical Networking Item */}
                <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-200/70 space-y-2">
                  <div className="flex items-center gap-2 text-rose-800 text-xs font-bold uppercase tracking-wide">
                    <XCircle className="size-4 text-rose-500 shrink-0" />
                    <span>Conventional Business Networks</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 pl-6 list-disc">
                    <li>Self-declared slips and inflated numbers</li>
                    <li>No requirement for the recipient to verify</li>
                    <li>Vanity points rewarded for attendance over genuine value</li>
                    <li>Distrusted records that erode peer confidence</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-950 font-medium text-center">
                  &ldquo;A record only matters when the people inside it can trust every entry.&rdquo;
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. HOW IT WORKS — THE 4-STAGE BILATERAL LOOP ─── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold tracking-wider text-blue-700 uppercase">
              <span>VERIFICATION LIFECYCLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              The 4-stage confirmation{' '}
              <span className="bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent">
                loop
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Inside the Unity App, confirming a contribution is effortless, private, and mathematically accountable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                badge: 'LOGGING',
                title: 'A contribution is logged',
                desc: 'Either Peer selects one of the 10 Ways of Collaboration inside the Unity App, attaching specific context and notes.',
                icon: Smartphone,
              },
              {
                step: '02',
                badge: 'NOTIFICATION',
                title: 'Receiving Peer notified',
                desc: 'A prompt bilateral push notification is immediately delivered to the receiving Peer with transparent details.',
                icon: Bell,
              },
              {
                step: '03',
                badge: 'HONEST REVIEW',
                title: 'Confirm, decline or amend',
                desc: 'The receiving Peer reviews privately. They can confirm in one tap, amend the description, or decline with zero awkwardness.',
                icon: CheckCircle2,
              },
              {
                step: '04',
                badge: 'IMMUTABLE CREDIT',
                title: 'On confirmation, it counts',
                desc: 'Instantly credited toward your Life Impact Score, Peer Standing level, and rewardable Peers Coin wallet.',
                icon: Award,
              },
            ].map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3"
              >
                <span className="w-8 h-8 rounded-full bg-[#0062D2] text-white text-xs font-bold flex items-center justify-center">
                  {st.step}
                </span>
                <h3 className="font-serif font-bold text-lg text-slate-950 leading-snug">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Why It Holds & What This Makes Possible ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Why it holds */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="text-2xl font-serif text-slate-950 font-bold">
                Why it holds
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                  <strong className="block text-slate-900 font-bold mb-1">
                    Both people are in the same room
                  </strong>
                  A Peer who inflates a contribution is asking someone they will see next month to endorse something untrue. Almost nobody does that.
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                  <strong className="block text-slate-900 font-bold mb-1">
                    Declining is normal
                  </strong>
                  Sometimes an introduction did not lead anywhere. Amending or declining carries zero penalty and zero awkwardness.
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                  <strong className="block text-slate-900 font-bold mb-1">
                    Directors can see the pattern
                  </strong>
                  A Peer whose contributions are frequently declined has a private conversation with their Circle Director.
                </div>
              </div>
            </div>

            {/* Right Card: What This Makes Possible (Cosmic Luxury Card) */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgb(6, 17, 44) 0%, rgb(19, 7, 31) 50%, rgb(38, 5, 19) 100%)',
              }}
              className="lg:col-span-6 p-8 sm:p-10 rounded-3xl border border-white/10 text-white shadow-xl space-y-6 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-rose-500/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-6 bg-gradient-to-r from-[#38BDF8] to-[#FB7185] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                    OUTCOMES OF TRUST
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  What this makes possible
                </h2>
                <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">Verified Recognition</strong>
                      Every award and standing named at the Summit is backed by confirmations from real people.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">Honest Reporting</strong>
                      When Peers Global publishes lives impacted, that number is built from confirmed data rather than estimates.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">Trust in the Room</strong>
                      Nobody wonders whether the Peer beside them is inflating their record.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#EFF6FF] border border-[#0062D2]/20 text-xs font-serif italic text-[#0062D2] text-center">
                &ldquo;Impact is not measured by intention, but by what it creates for others.&rdquo;
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 5. STANDARD IMPACT VALUES BREAKDOWN (10 FORMS) ─── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold tracking-wider text-blue-700 uppercase">
              <span>STANDARDIZED IMPACT LEDGER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              Standard impact values for{' '}
              <span className="bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent">
                confirmed contributions
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Every verified action awards calibrated points reflecting time, strategic weight, and founder value.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {VALUE_POINTS.map((vp) => (
              <div
                key={vp.name}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center space-y-2"
              >
                <div className="text-xs font-serif font-bold text-slate-900">
                  {vp.name}
                </div>
                <div className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold border inline-block ${vp.color}`}>
                  {vp.points}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Footnote on Calibration */}
          <div className="max-w-2xl mx-auto text-center p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed shadow-2xs">
            <span className="font-bold text-slate-800">Calibrated by Governance:</span> Point values are maintained by the Advisory Board to reflect genuine entrepreneurial service rather than transactional volume.
          </div>

        </div>
      </section>

      {/* ─── 6. FINAL HOME-THEMED CALL TO ACTION ─── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-20 md:py-28">
        {/* Deep celestial radial gradients & luminous aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/15 blur-3xl"
        />

        {/* Subtle geometric orbital line art */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35">
          <svg viewBox="0 0 760 520" fill="none" className="h-full w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520" stroke="currentColor" strokeWidth="1" className="text-blue-300/30" />
            <path d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" className="text-sky-200/25" />
            <path d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520" stroke="currentColor" strokeWidth="1" className="text-blue-200/20" />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2.5">
              <span className="h-[1.5px] w-6 bg-white/70" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                BE THE ENTREPRENEUR WHO GIVES
              </span>
              <span className="h-[1.5px] w-6 bg-white/70" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Build Your Business. Build Your Relationships. <br />
              <span className="italic text-cyan-200">Build Your Circle.</span>
            </h2>

            <p className="max-w-2xl mx-auto text-white/90 text-sm sm:text-base leading-relaxed">
              Every verified contribution stays on your record forever. Join the Unity App and start building your immutable legacy of leadership today.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <GalaxyButton
              href="/download"
              variant="primary"
              size="md"
            >
              Download Unity App
            </GalaxyButton>
            <GalaxyButton
              href="/life-impact-score"
              variant="transparent"
              size="md"
            >
              Explore Life Impact Score
            </GalaxyButton>
            <GalaxyButton
              href="/peer-standing"
              variant="transparent"
              size="md"
            >
              See Peer Standing
            </GalaxyButton>
          </div>
        </div>
      </section>

    </div>
  )
}

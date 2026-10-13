'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  ShieldCheck,
  ChevronRight,
  FileCheck,
  CreditCard,
  Ban,
  Clock,
  Users,
  Building,
  ArrowRight,
  Sparkles,
  Smartphone,
  Lock,
  Award,
  CheckCircle2,
  HelpCircle,
  Plus,
  Minus,
  AlertCircle,
  FileText,
} from 'lucide-react'

// ─── 6 Core Governance Pillars ─────────────────────────────────────────────
const GOVERNANCE_PILLARS = [
  {
    num: '01',
    title: 'Individual Founder Seat',
    desc: 'Membership is granted to the individual entrepreneur. Companies do not hold seats; leaders do.',
    icon: Users,
    color: 'text-blue-600 bg-blue-50 border-blue-200/60',
  },
  {
    num: '02',
    title: 'Category Exclusivity',
    desc: 'Each Circle strictly preserves one founder per business classification. Zero internal competition.',
    icon: Lock,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200/60',
  },
  {
    num: '03',
    title: 'Give-First Protocol',
    desc: 'Peer standing and leadership progression follow active contribution, referral integrity, and mutual support.',
    icon: Sparkles,
    color: 'text-amber-600 bg-amber-50 border-amber-200/60',
  },
  {
    num: '04',
    title: 'Strict Confidentiality',
    desc: 'Discussions within Circle meetings and Inner Boards are sacred and held in strict commercial trust.',
    icon: ShieldCheck,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200/60',
  },
  {
    num: '05',
    title: 'Attendance Commitment',
    desc: 'Consistent presence across 12 monthly Circle sessions ensures accountability and authentic depth.',
    icon: Clock,
    color: 'text-purple-600 bg-purple-50 border-purple-200/60',
  },
  {
    num: '06',
    title: 'Non-Transferability',
    desc: 'Seats belong permanently to the vetted founder and cannot be sub-licensed or reallocated.',
    icon: Award,
    color: 'text-rose-600 bg-rose-50 border-rose-200/60',
  },
]

// ─── Structured Covenant Articles ──────────────────────────────────────────
const TERMS_ARTICLES = [
  {
    id: 'eligibility',
    num: '01',
    category: 'ADMISSION & STANDARDS',
    heading: 'Membership Eligibility & Screening Protocol',
    icon: FileCheck,
    summary: 'Who qualifies for membership and how applications are vetted.',
    points: [
      'Membership in PEERS GLOBAL is open exclusively to founders, managing directors, enterprise partners, and authorized promoters of verified commercial enterprises.',
      'All prospective members undergo admission screening by the Circle Director and the Membership Experience Committee. Category suitability, ethical standing, and commercial reputation are rigorously vetted.',
      'Admission into the PEERS GLOBAL platform and acceptance into a specific Circle seat are two distinct steps to ensure precise alignment for both the applicant and the room.',
    ],
  },
  {
    id: 'exclusivity',
    num: '02',
    category: 'CATEGORY PROTECTION',
    heading: 'Seat Category Exclusivity & Commercial Boundaries',
    icon: Lock,
    summary: 'Protection of your market classification inside your Circle.',
    points: [
      'Each Circle reserves exactly one seat per business category. Members are admitted under an approved primary business classification.',
      'A member may not solicit business or position themselves in another active Peer’s reserved category within their home Circle.',
      'Secondary business lines or diversified holdings do not override the reserved seat rights of existing fellow Peers in the same room.',
    ],
  },
  {
    id: 'fees',
    num: '03',
    category: 'FINANCIAL STRUCTURE',
    heading: 'Subscription Fees, Invoicing & Renewal Integrity',
    icon: CreditCard,
    summary: 'Platform subscription, Circle fees, and renewal transparency.',
    points: [
      'Annual platform subscription (₹18,000 / year + GST) grants global directory access, the Unity App ecosystem, cross-chapter conclaves, and universal platform privileges.',
      'Circle subscriptions are independent and cover local venue, monthly operational hospitality, and dedicated Circle governance.',
      'All membership fees are non-refundable and payable annually in advance. Renewal is subject to attendance compliance, verified contribution records, and ongoing adherence to community ethics.',
    ],
  },
  {
    id: 'attendance',
    num: '04',
    category: 'COMMITMENT & PRESENCE',
    heading: 'Attendance Mandate & Professional Representation',
    icon: Clock,
    summary: 'The commitment required to maintain deep trust and momentum.',
    points: [
      'Active participation is foundational. Members are expected to personally attend the 12 scheduled monthly Circle meetings each year.',
      'Missing more than two sessions without prior committee leave or failing to send an authorized executive deputy leads to immediate review and potential category forfeiture.',
      'Family Meetups and Conclaves provide extended community connection but do not substitute for monthly Circle engagement.',
    ],
  },
  {
    id: 'conduct',
    num: '05',
    category: 'COMMUNITY ETHICS',
    heading: 'Confidentiality, Conduct & Category Revocation',
    icon: ShieldCheck,
    summary: 'Protecting the safety, confidentiality, and integrity of the room.',
    points: [
      'All commercial insights, strategic hurdles, and vulnerable founder discussions shared within Circle meetings are strictly confidential.',
      'PEERS GLOBAL reserves the right to suspend or revoke membership for non-payment, breach of confidentiality, hard-selling, or actions injurious to the harmony of the community.',
      'Upon termination, access to the Unity App member directory, exclusive conclaves, and local Circle seats ceases immediately without refund.',
    ],
  },
  {
    id: 'ownership',
    num: '06',
    category: 'INDIVIDUAL RELATIONSHIP',
    heading: 'Individual Seat Ownership & Non-Transferability',
    icon: Users,
    summary: 'Personal ownership of your seat and relationships across life chapters.',
    points: [
      'Membership seats are issued specifically to the approved founder as an individual. Seats cannot be sub-licensed, reassigned, or transferred to unvetted third parties.',
      'If a founder transitions companies, their personal membership standing and historical relationships remain intact within PEERS GLOBAL.',
      'Two partners from the same enterprise may hold individual memberships, provided separate category seats and Circle guidelines are adhered to.',
    ],
  },
]

export function MembershipTermsClient() {
  const [openArticle, setOpenArticle] = useState<number | null>(0)

  const toggleArticle = (idx: number) => {
    setOpenArticle(openArticle === idx ? null : idx)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans antialiased">
      

      {/* SVG Linear Gradient Definitions for Icons */}
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="brandIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
          <linearGradient id="brandStatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#FB7185" />
          </linearGradient>
        </defs>
      </svg>

      {/* =========================================================================
          SECTION 1: HERO — MEMBERSHIP TERMS & COVENANT (Master Dark Video Banner)
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
            <span className="text-white font-semibold">Membership Terms</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Hero Content */}
            <div className="lg:col-span-12 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent font-bold">
                  MEMBER COVENANT
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  Membership Terms &amp;{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185]">
                    Community Charter
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Clear rights. Protected exclusivity. Enduring trust.
                </p>
              </div>

              {/* Description */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                <p>
                  Peers Global is not an open networking group. It is a governed, category-exclusive community of business promoters, founders, and directors.
                </p>
                <p className="font-semibold text-slate-200">
                  Every member agrees to a mutual covenant of trust, confidentiality, attendance, and non-predatory interaction.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <GalaxyButton
                  href="#covenant"
                  size="default"
                  className="font-bold uppercase tracking-wider"
                >
                  Review the 8 Covenants
                </GalaxyButton>

                <GalaxyButton
                  href="/membership"
                  variant="transparent"
                  size="default"
                  className="font-bold uppercase tracking-wider"
                >
                  Membership Overview
                </GalaxyButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: 6 GOVERNANCE PILLARS (Executive Card Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE FOUNDATIONAL COMPACT
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              The Six Tenets of Membership Protection
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Every term in our charter is designed to protect your investment of time, safeguard your market exclusivity, and cultivate genuine collaborative trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {GOVERNANCE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div
                  key={idx}
                  className="group relative p-[1.5px] rounded-[28px] bg-slate-200/90 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:via-[#6366F1] hover:to-[#E11D48] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div className="relative w-full h-full bg-white rounded-[26.5px] p-7 sm:p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="size-12 rounded-2xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/20 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300">
                          <Icon className="size-6 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                        </div>
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] text-white shadow-2xs">
                          TENET 0{pillar.num}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all leading-snug">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span className="text-slate-400">Guaranteed Covenant</span>
                      <span className="inline-flex items-center gap-1 brand-gradient-text opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                        Protected Seat &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FULL CHARTER ARTICLES (Executive 2-Column Matrix)
          ========================================================================= */}
      <section id="covenant" className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/80">
            <div className="max-w-2xl space-y-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  FORMAL ARTICLES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Complete Membership Agreement &amp; Covenants
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Detailed terms governing seat reservations, attendance thresholds, financial commitments, and ethical standards across all chapters.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 text-xs font-mono text-[#1D4ED8] font-bold shadow-2xs shrink-0">
              <FileText className="size-4 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
              <span>Version 2.4 · Effective 2026</span>
            </div>
          </div>

          {/* 2-Column Articles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {TERMS_ARTICLES.map((article, idx) => {
              const Icon = article.icon
              return (
                <div
                  key={article.id}
                  className="group relative p-[1.5px] rounded-[28px] bg-slate-200/90 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:via-[#6366F1] hover:to-[#E11D48] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative w-full h-full bg-white rounded-[26.5px] p-7 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100 min-h-[64px]">
                        <div className="flex items-center gap-3">
                          <div className="size-11 rounded-2xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/20 shadow-2xs flex items-center justify-center shrink-0">
                            <Icon className="size-5.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                              ARTICLE {article.num} • {article.category}
                            </span>
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all leading-snug">
                              {article.heading}
                            </h3>
                          </div>
                        </div>

                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] text-white shadow-2xs shrink-0 mt-0.5">
                          Binding
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm font-medium text-slate-700 bg-[#FAFBFD] p-3.5 rounded-2xl border border-slate-200/80">
                        {article.summary}
                      </p>

                      {/* Clauses / Points List */}
                      <div className="space-y-2.5 pt-2">
                        {article.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-light">
                            <span className="size-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] mt-2 shrink-0" />
                            <p>{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Tag */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                      <span>Binding Covenants</span>
                      <span className="brand-gradient-text font-bold">Enforced by Board</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Reassurance Callout */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="size-11 rounded-2xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 shadow-2xs text-[#1D4ED8] flex items-center justify-center shrink-0">
                <AlertCircle className="size-5.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">Questions Regarding Specific Terms?</h4>
                <p className="text-xs text-slate-600 font-light mt-0.5">
                  Our Membership Experience Committee is available to clarify category boundaries and attendance covenants.
                </p>
              </div>
            </div>

            <GalaxyButton
              href="/contact"
              variant="transparent"
              size="small"
              className="font-bold uppercase tracking-wider !text-slate-800 !border-slate-300 hover:!bg-slate-50 shrink-0"
            >
              Contact Committee
            </GalaxyButton>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CLOSING MANIFESTO BANNER (Signature Dark Brand Gradient)
          ========================================================================= */}
      <section className="relative isolate overflow-hidden !bg-[linear-gradient(135deg,rgb(6,17,44)_0%,rgb(19,7,31)_50%,rgb(38,5,19)_100%)] py-16 sm:py-20 lg:py-24 text-white border-t border-white/10">
        <div className="absolute -top-24 -left-24 size-96 rounded-full bg-gradient-to-br from-[#38BDF8]/20 via-[#818CF8]/20 to-[#FB7185]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 size-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent font-bold">
                  BUILT ON INTEGRITY
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold leading-[1.18] tracking-tight text-white">
                Great communities are not built on loose promises. They are built on clear covenants.
              </h2>

              <p className="text-base sm:text-lg font-light text-slate-200 max-w-2xl leading-relaxed">
                When every entrepreneur in the room respects the same standards, trusts the same confidentiality, and shows up with the same commitment, extraordinary collaboration becomes possible.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <GalaxyButton
                  href="/circles/find"
                  size="default"
                  className="uppercase tracking-wider font-bold"
                >
                  Find Your Circle
                </GalaxyButton>

                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  variant="transparent"
                  size="default"
                  icon={<Smartphone className="size-4" />}
                  className="uppercase tracking-wider font-bold"
                >
                  Download Unity App
                </GalaxyButton>
              </div>
            </div>

            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-md"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Honor &amp; <br />
                Mutual <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] font-semibold">Integrity</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

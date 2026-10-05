'use client'

import React, { useState } from 'react'
import Link from 'next/link'
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
      
      {/* ─── Breadcrumb ────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/membership" className="hover:text-[#0062D2] transition-colors">
              Membership
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Membership Terms</span>
          </nav>
        </div>
      </div>

      {/* =========================================================================
          SECTION 1: HERO — MEMBERSHIP TERMS & COVENANT (Signature Fade Video Banner)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-16 lg:pb-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Banner Box */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white via-white/95 to-slate-50 border border-slate-200/90 shadow-lg min-h-[480px] lg:min-h-[520px] flex items-center">

            {/* Fade Visual (Right 60%) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
              }}
            >
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/membership-hero-peers.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center scale-105"
              />
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

              {/* Script Overlay - Top Right */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Clear Rights.
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight font-medium mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Protected Exclusivity.
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Enduring Trust.
                </p>
              </div>

              {/* Pill Overlay - Bottom Right */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-right">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">GOVERNANCE &amp; COVENANT</p>
                  <p className="text-xs font-bold tracking-wider text-white">THE PEERS GLOBAL CHARTER</p>
                </div>
              </div>
            </div>

            {/* Left Hero Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start space-y-5">
                
                {/* Eyebrow */}
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    MEMBER COVENANT
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.15]">
                  Membership Terms &amp; Community Charter
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Rights, category protections, attendance obligations, and formal covenants governing membership in PEERS GLOBAL Circles.
                </p>

                {/* Sub-quote callout */}
                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-slate-700 flex items-center gap-2">
                  <span className="text-[#0062D2] font-bold text-sm">✦</span>
                  <p>
                    <strong className="text-slate-900 font-semibold">Legal Jurisdiction:</strong> Peers Global Business Media Private Limited · Ahmedabad, Gujarat
                  </p>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/membership/criteria"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:opacity-95 transition-all uppercase tracking-wider group cursor-pointer"
                  >
                    <span>View Joining Criteria</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-2xs"
                  >
                    <Smartphone className="size-4" />
                    <span>Download Unity App</span>
                  </a>
                </div>

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
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE FOUNDATIONAL COMPACT
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
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
                  className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 hover:bg-white transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`size-12 rounded-2xl border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 ${pillar.color}`}>
                        <Icon className="size-5.5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white border border-slate-200/80 text-slate-600 group-hover:border-blue-200 group-hover:text-[#0062D2] transition-colors">
                        TENET 0{pillar.num}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="text-slate-400">Guaranteed Covenant</span>
                    <span className="inline-flex items-center gap-1 text-[#0062D2] opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                      Protected Seat &rarr;
                    </span>
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
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/80">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
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

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-600 shadow-2xs shrink-0">
              <FileText className="size-4 text-[#0062D2]" />
              <span>Version 2.4 · Effective 2026</span>
            </div>
          </div>

          {/* 2-Column Articles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {TERMS_ARTICLES.map((article, idx) => {
              const Icon = article.icon
              const isOpen = openArticle === idx
              return (
                <div
                  key={article.id}
                  className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-xl bg-blue-50 border border-blue-100 text-[#0062D2] flex items-center justify-center shrink-0">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                            ARTICLE {article.num} • {article.category}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                            {article.heading}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      {article.summary}
                    </p>

                    {/* Clauses / Points List */}
                    <div className="space-y-2.5 pt-2">
                      {article.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-light">
                          <span className="size-1.5 rounded-full bg-[#0062D2] mt-2 shrink-0" />
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Tag */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span>Binding Covenants</span>
                    <span className="text-[#0062D2] font-semibold">Enforced by Board</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Reassurance Callout */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/80 border border-blue-200/60 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="size-10 rounded-xl bg-[#0062D2] text-white flex items-center justify-center shrink-0">
                <AlertCircle className="size-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Questions Regarding Specific Terms?</h4>
                <p className="text-xs text-slate-600 font-light mt-0.5">
                  Our Membership Experience Committee is available to clarify category boundaries and attendance covenants.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-2xs shrink-0"
            >
              Contact Committee
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CLOSING MANIFESTO BANNER (Exact Homepage Dark Mesh Styling)
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
                <Link
                  href="/circles/find"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Find Your Circle</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/40 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:border-white active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Download Unity App</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-md"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Honor &amp; <br />
                Mutual <br />
                <span className="text-[#7DD3FC]">Integrity</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

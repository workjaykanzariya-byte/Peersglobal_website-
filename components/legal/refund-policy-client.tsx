'use client'

import React from 'react'
import Link from 'next/link'
import {
  RotateCcw,
  ChevronRight,
  AlertCircle,
  CreditCard,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

const REFUND_SECTIONS = [
  {
    num: '01',
    heading: 'Annual Membership Fees',
    tag: 'Category Exclusivity',
    icon: RotateCcw,
    body: [
      'Circle seats operate on strict category exclusivity. When a founder is admitted into a Circle, that business category is immediately locked and denied to other applicants across the chapter.',
      'Consequently, all annual membership fees are non-refundable once an application has been formally approved and processed. Voluntarily stepping down, missing meetings, or resigning from a Circle does not entitle a member to a prorated or full refund.',
    ],
  },
  {
    num: '02',
    heading: 'Conclaves, Summits & Event Passes',
    tag: 'Hospitality & Venue Lock',
    icon: Calendar,
    body: [
      'Registrations for MindMeld conclaves, regional retreats, and the Annual Awards & Recognition Ceremony are non-refundable due to venue commitments and advance hospitality reservations.',
      'If you are unable to attend an event for emergency reasons, you may nominate a senior executive or co-founder from your enterprise to attend in your place by notifying event operations at least 48 hours prior to the event.',
    ],
  },
  {
    num: '03',
    heading: 'Duplicate or Accidental Payments',
    tag: '100% Direct Source Reversal',
    icon: CreditCard,
    body: [
      'In the rare event of a technical glitch where a payment is processed multiple times or an unauthorized deduction occurs, the excess payment will be refunded in full.',
      'Please report duplicate transactions within 7 business days to accounts@peersglobal.com along with transaction references. Verified refunds will be initiated to the original payment source within 7-10 working days.',
    ],
  },
]

export function RefundPolicyClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100 selection:text-[#E11D48]">
      {/* ── Breadcrumb Navigation ── */}
      <div className="border-b border-slate-200/70 bg-white/90 backdrop-blur-md sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/peers-code" className="hover:text-[#1D4ED8] transition-colors">
              Governance
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold brand-gradient-text">Refund Policy</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
              <RotateCcw className="w-3.5 h-3.5 text-amber-600" />
              <span>Seat Commitment Policy</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Master Full Bleed Dark Hero Section ── */}
      <section className="relative min-h-[560px] sm:min-h-[620px] bg-[#040F24] text-white flex items-center overflow-hidden border-b border-slate-800">
        {/* Background video layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/section_image/circles-hero-new.jpg"
            className="w-full h-full object-cover object-center opacity-40 scale-105"
          >
            <source src="/videos/homepage-hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Gradients to blend smoothly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040F24] via-[#040F24]/85 to-transparent sm:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040F24] via-transparent to-[#040F24]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[440px] lg:min-h-[480px]">
            {/* Left Content */}
            <div className="lg:col-span-8 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>FINANCIAL &amp; SEAT COMMITMENT POLICY</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white font-serif">
                  Refund &amp; Seat{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Commitment Policy.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Clear guidelines on category exclusivity, event passes, and duplicate transaction protection.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light">
                When a seat is confirmed, that business category is locked across the chapter and denied to all other applicants to protect room value and collaboration integrity.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#policy-details"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:opacity-95 transition-all duration-300 group cursor-pointer"
                >
                  <span>Read Full Policy</span>
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <Link
                  href="/membership"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-sm transition-all duration-300"
                >
                  <span>Become a Peer</span>
                </Link>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-xl pt-6 border-t border-white/15">
                {[
                  { icon: RotateCcw, value: 'Locked Seat', label: 'Category Exclusivity' },
                  { icon: Calendar, value: '48h Notice', label: 'Event Proxy Transfer' },
                  { icon: CreditCard, value: '100% Refund', label: 'Duplicate Protection' },
                ].map((s) => {
                  const Icon = s.icon
                  return (
                    <div
                      key={s.label}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 backdrop-blur-md transition-all"
                    >
                      <div className="size-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sky-300 shrink-0 shadow-xs">
                        <Icon className="size-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-sm sm:text-base text-white tracking-tight leading-tight whitespace-nowrap">
                          {s.value}
                        </div>
                        <div className="text-[11px] text-slate-300 font-medium mt-0.5 leading-snug truncate">
                          {s.label}
                        </div>
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
                Category Exclusivity
              </p>
              <p
                className="text-3xl sm:text-4xl text-white leading-tight font-bold"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Zero Ambiguity
              </p>
              <p
                className="text-3xl sm:text-4xl text-sky-400 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Constitutional Clarity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Policy Sections (Modern 3-Column Card Matrix + Resolution Framework) ── */}
      <section id="policy-details" className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold uppercase tracking-wider brand-gradient-text">
              <span>Statutory Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
              Constitutional Clauses &amp; Protection
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every chapter circle operates on strict category exclusivity and fiduciary clarity. Explore the policies governing seats, events, and transactional security below.
            </p>
          </div>

          {/* 3-Column Grid of Policy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {REFUND_SECTIONS.map((sec) => {
              const IconComponent = sec.icon
              const isNonRefundable = sec.num === '01'
              const isTransferable = sec.num === '02'
              const isFullRefund = sec.num === '03'

              return (
                <div
                  id={`refund-${sec.num}`}
                  key={sec.heading}
                  className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="space-y-6">
                    {/* Card Header & Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-50 via-sky-50 to-rose-50 border border-blue-100/80 flex items-center justify-center text-[#1D4ED8] group-hover:scale-105 transition-transform shadow-2xs">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-tight border ${
                        isNonRefundable
                          ? 'bg-rose-50 text-rose-700 border-rose-200/80'
                          : isTransferable
                          ? 'bg-amber-50 text-amber-700 border-amber-200/80'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200/80'
                      }`}>
                        {isNonRefundable ? 'Non-Refundable' : isTransferable ? 'Transferable (48h)' : '100% Reversal'}
                      </span>
                    </div>

                    {/* Titles */}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold brand-gradient-text">
                          SECTION {sec.num}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400">
                          • {sec.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-slate-950 tracking-tight mt-1">
                        {sec.heading}
                      </h3>
                    </div>

                    {/* Body Paragraphs */}
                    <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {sec.body.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Feature Pill */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="text-[11px] text-slate-700 leading-relaxed font-medium">
                        {isNonRefundable && <span>Category locked for 12 months across chapter upon formal approval.</span>}
                        {isTransferable && <span>Send senior executive proxy by notifying operations 48h prior.</span>}
                        {isFullRefund && <span>Direct source refund initiated within 7-10 working days of ticket submission.</span>}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 4-Step Resolution Workflow Diagram Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider brand-gradient-text">
                  Standard Operating Protocol
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 mt-1">
                  How Refund &amp; Reconciliation Requests Are Processed
                </h3>
              </div>
              <span className="self-start sm:self-auto px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-[#1D4ED8] border border-blue-100">
                SLA: 7-10 Business Days
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', title: 'Submit Notice', desc: 'Email accounts@peersglobal.com with bank transaction reference.' },
                { step: '02', title: 'Gateway Verification', desc: 'Accounts Secretariat validates transaction logs with payment gateway.' },
                { step: '03', title: 'Constitutional Check', desc: 'Confirmation of duplicate status or event proxy eligibility.' },
                { step: '04', title: 'Direct Reversal', desc: '100% amount credited back to originating source instrument.' },
              ].map((st) => (
                <div key={st.step} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-1.5">
                  <div className="text-xs font-mono font-bold text-[#1D4ED8]">STEP {st.step}</div>
                  <div className="text-sm font-bold text-slate-900">{st.title}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Accounts Support Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/80 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1">
              <h3 className="text-xl font-serif font-bold text-slate-950">Experiencing a billing anomaly or duplicate transaction?</h3>
              <p className="text-sm text-slate-600">Connect with the Accounts and Billing Secretariat for priority resolution.</p>
            </div>
            <Link
              href="mailto:accounts@peersglobal.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-md shrink-0"
            >
              <span>Contact Accounts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ── Executive Governance Ribbon (Redesigned Compact Layout) ── */}
      <section className="relative py-14 sm:py-18 bg-[#040F24] text-white overflow-hidden border-t border-slate-800">
        {/* Subtle luminous ambient glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(0,98,210,0.2),transparent_50%),radial-gradient(circle_at_85%_50%,rgba(225,29,72,0.15),transparent_50%),linear-gradient(115deg,#020817_0%,#071a3d_50%,#040f24_100%)]"
        />

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-4 -translate-y-1/2 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Col (5 cols): Statement & Authority */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/90">
                  Financial Transparency
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-white tracking-tight leading-[1.2]">
                Clear terms. <br />
                <span className="italic text-amber-300 font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Uncompromising transparency.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-md">
                All transactions, category commitments, and seat guarantees operate under strict constitutional governance across Bharat.
              </p>

              <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Statutory Accounts Secretariat • Ahmedabad</span>
              </div>
            </div>

            {/* Right Col (7 cols): Horizontal Compact Governance Navigation Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {[
                {
                  code: 'CHARTER 01',
                  title: 'Terms of Use',
                  desc: 'Statutory platform agreements & rights',
                  href: '/terms-of-use',
                  tag: 'Statutory'
                },
                {
                  code: 'CHARTER 02',
                  title: 'Privacy Policy',
                  desc: 'DPDP Act 2023 compliance & data rights',
                  href: '/privacy-policy',
                  tag: 'DPDP 2023'
                },
                {
                  code: 'CHARTER 03',
                  title: 'Grievance Redressal',
                  desc: 'Designated legal & grievance officer',
                  href: '/grievance',
                  tag: 'Officer Desk'
                }
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group relative p-4 sm:p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between space-y-3 backdrop-blur-md hover:-translate-y-0.5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-amber-300/90 px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10">
                      {item.tag}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover:text-amber-300 group-hover:translate-x-1 transition-all" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/[0.08] text-[10px] font-mono text-slate-400 group-hover:text-white transition-colors">
                    {item.code} →
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}


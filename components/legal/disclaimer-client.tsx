'use client'

import React from 'react'
import Link from 'next/link'
import {
  ShieldAlert,
  ChevronRight,
  FileText,
  AlertTriangle,
  Scale,
  Users,
  Coins,
  Calendar,
  Building,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Award,
  Sparkles,
  Shield,
  Layers,
  BookOpen,
} from 'lucide-react'

const DISCLAIMER_SECTIONS = [
  {
    number: '01',
    id: 'general-information',
    title: 'General Information Only',
    tag: 'Advisory Boundary',
    icon: BookOpen,
    body: [
      'Content on this website, in the Unity App, and during general masterclasses is provided solely for general educational and informational purposes.',
      'It does not constitute professional, financial, legal, tax, investment, or bespoke business advice. Members must obtain independent professional advice tailored to their specific enterprise circumstances before acting on any insight.',
    ],
  },
  {
    number: '02',
    id: 'no-guarantee',
    title: 'No Guarantee of Commercial Outcome',
    tag: 'Outcome Realism',
    icon: Sparkles,
    body: [
      'Peers Global provides access to a structured community, a platform, and proven models for peer collaboration. We do not guarantee business volume, revenue, referrals, introductions, partnerships, venture funding, media coverage, speaking opportunities, or leadership appointments.',
      'Any case studies, member stories, milestone figures, or testimonials published represent historical experiences of individual founders and do not guarantee identical outcomes for other members.',
    ],
  },
  {
    number: '03',
    id: 'member-dealings',
    title: 'Member-to-Member Dealings & Due Diligence',
    tag: 'Independent Liability',
    icon: Users,
    body: [
      'Peers Global is not a party to, nor an intermediary in, any commercial contract, purchase order, equity investment, or business dealing executed between members.',
      'We do not verify, endorse, or warrant any member’s solvency, creditworthiness, professional credentials, regulatory standing, capability, or quality of deliverables. Members bear exclusive responsibility for conducting their own due diligence.',
    ],
  },
  {
    number: '04',
    id: 'member-content',
    title: 'Member-Contributed Content & Playbooks',
    tag: 'Personal Views',
    icon: FileText,
    body: [
      'Stories, recommendations, reviews, playbooks, masterclasses, and forum posts contributed by members represent the personal perspectives of the author, not of Peers Global Business Media Private Limited.',
      'We do not independently verify factual claims, commercial data, or technical accuracy contained in member-contributed materials.',
    ],
  },
  {
    number: '05',
    id: 'third-parties',
    title: 'Third-Party Products, Services & Integrations',
    tag: 'External Vendor Risk',
    icon: Layers,
    body: [
      'Products, software tools, vendor discounts, and third-party services featured in the Marketplace, Watchlists, or partner directories are provided by independent third parties.',
      'Peers Global does not control, operate, or warrant third-party vendors. Your commercial engagements with any external vendor are undertaken entirely at your own discretion.',
    ],
  },
  {
    number: '06',
    id: 'recognition-system',
    title: 'Recognition System & Peers Coin Mechanism',
    tag: 'Non-Monetary Ledger',
    icon: Coins,
    body: [
      'Impact Scores, Standing Badges, and Peers Coins are non-monetary community gamification and recognition mechanisms.',
      'They possess no cash value, cannot be redeemed for fiat currency or financial consideration, cannot be traded on open markets, and cannot be transferred outside the platform ecosystem. Allocation and redemption rules remain at our sole administrative discretion.',
    ],
  },
  {
    number: '07',
    id: 'events-programmes',
    title: 'Events, Summits & Conclave Schedules',
    tag: 'Operational Flexibility',
    icon: Calendar,
    body: [
      'Programme agendas, guest speaker lineups, workshop formats, venue locations, and timings are subject to change without prior notice due to scheduling exigencies or safety conditions.',
      'In the event of unforeseen venue restrictions, sessions may be transitioned to digital formats. Event passes and conclave registrations remain strictly non-refundable.',
    ],
  },
  {
    number: '08',
    id: 'circle-membership',
    title: 'Circle Membership & Seat Discretion',
    tag: 'MEC Approval Standard',
    icon: Shield,
    body: [
      'Circle membership is subject to formal verification and approval by the Circle Director and the Membership Experience Committee (MEC).',
      'Seat availability within specific business categories is not guaranteed and remains subject to periodic review, active attendance standards, and category conflict mediation.',
    ],
  },
  {
    number: '09',
    id: 'leadership-appointments',
    title: 'Leadership Appointments & Governance Roles',
    tag: 'Institutional Discretion',
    icon: Award,
    body: [
      'Territory, Circle, and Regional leadership appointments are made at the sole discretion of Peers Global executive governance and advisory boards.',
      'Appointment, reappointment, tenure length, and committee assignments are non-permanent and carry no vested employment, equity, or agency rights.',
    ],
  },
  {
    number: '10',
    id: 'impact-figures',
    title: 'Community Impact Figures & Ledger Totals',
    tag: 'Self-Reported Logging',
    icon: Scale,
    body: [
      'Ecosystem impact statistics, collaborative milestone figures, and introduction counts displayed on the platform are aggregated from voluntary ledger entries submitted and mutually verified by active members.',
      'While we implement validation protocols, figures are indicative of ecosystem activity and do not constitute audited financial accounts.',
    ],
  },
  {
    number: '11',
    id: 'modifications',
    title: 'Policy Modifications & Statutory Updates',
    tag: 'Periodic Revision',
    icon: AlertTriangle,
    body: [
      'We reserve the unilateral right to amend, update, or revise this Disclaimer and all associated governance charters at any time without individual prior notice.',
      'The current effective revision is always published at this URL with the corresponding revision timestamp. Continued platform participation constitutes acceptance of revised terms.',
    ],
  },
]

export function DisclaimerClient() {
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
            <span className="font-bold brand-gradient-text">Legal Disclaimer</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
              <span>Statutory Legal Notice</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Signature Hero Section ── */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Hero Banner with Smooth Left-Fading Media/Video Backdrop */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white via-white/95 to-slate-50 border border-slate-200/90 shadow-lg min-h-[480px] lg:min-h-[520px] flex items-center">
            
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Media Background Layer (Right ~60% fading into white on the left) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
            >
              <img
                src="/images/section_image/circle-meeting.png"
                alt="Peers Global Legal Disclosures"
                className="size-full object-cover object-center opacity-85"
              />

              {/* Seamless gradient overlays for misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  Clear Boundaries
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  No Unrealistic Claims
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Honest Enterprise
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none hidden sm:block">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    STATUTORY DISCLOSURES
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    GENERAL ADVISORY ONLY
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl lg:max-w-2xl flex flex-col items-start text-left">
                
                {/* Eyebrow with brand gradient bar */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    LEGAL NOTICE &amp; DISCLOSURES
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-slate-950 tracking-tight leading-[1.12] mb-4">
                  Official Legal <br />
                  <span className="italic bg-gradient-to-r from-[#1D4ED8] via-[#8B5CF6] to-[#E11D48] bg-clip-text text-transparent font-medium">
                    Disclaimer.
                  </span>
                </h1>

                {/* Subtitle & Descriptions */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6 max-w-lg">
                  Please read these legal boundaries and terms carefully before using the Peers Global platform, website, mobile applications, or participating in Circles.
                </p>

                {/* Featured Highlight Quote Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-rose-50/50 border border-blue-100/80 mb-6 max-w-lg">
                  <p className="font-serif italic text-slate-900 text-sm sm:text-base font-medium">
                    “Peers Global is a community of collaboration. We provide the ecosystem and governance; members build their own enterprise outcomes.”
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 font-mono text-[11px] shadow-2xs">
                    Last Updated: September 2026
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1D4ED8] border border-blue-100 font-mono text-[11px]">
                    Peers Global Business Media Pvt Ltd
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* 4-Item Floating Stats Bar */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { val: '11 Articles', label: 'Statutory Disclosures', sub: 'Comprehensive legal scope', tag: 'Charter Scope' },
              { val: 'Non-Financial', label: 'Recognition Ledger', sub: 'No cash or investment value', tag: 'Peers Coin' },
              { val: 'Independent', label: 'Member Dealings', sub: 'Direct B2B due diligence', tag: 'Liability Split' },
              { val: 'Gujarat Law', label: 'Jurisdiction', sub: 'Subject to Indian courts', tag: 'Statutory Base' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white border border-slate-200/90 p-5 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold px-2 py-0.5 rounded-md bg-slate-50 border border-slate-100">
                    {stat.tag}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="font-serif text-2xl font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                  {stat.val}
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">{stat.label}</div>
                <div className="text-xs text-slate-500 font-normal mt-0.5 leading-relaxed">{stat.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Disclaimer Policy Clauses (Rich 2-Column Card Grid Layout) ── */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                STATUTORY DISCLOSURES &amp; BOUNDARIES
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              11 Legal Boundaries &amp; Operational Disclosures
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Transparent covenants defining member liability limits, non-monetary recognition tools, and ecosystem governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {DISCLAIMER_SECTIONS.map((section, idx) => {
              const IconComponent = section.icon
              const gradients = [
                'from-blue-600 to-indigo-600',
                'from-indigo-600 to-purple-600',
                'from-purple-600 to-rose-600',
                'from-rose-600 to-pink-600',
                'from-blue-600 to-cyan-600',
                'from-amber-600 to-orange-600',
                'from-emerald-600 to-teal-600',
                'from-indigo-600 to-blue-600',
                'from-rose-600 to-amber-600',
                'from-purple-600 to-indigo-600',
                'from-slate-700 to-slate-900',
              ]
              const grad = gradients[idx % gradients.length]

              return (
                <article
                  key={section.id}
                  id={section.id}
                  className="group relative p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between space-y-5 overflow-hidden"
                >
                  {/* Top Accent Gradient Bar */}
                  <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${grad} opacity-75 group-hover:opacity-100 transition-opacity`} />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-slate-50 to-blue-50/70 border border-slate-200/80 flex items-center justify-center text-[#1D4ED8] group-hover:scale-105 transition-transform shadow-2xs">
                        <IconComponent className="w-5 h-5 text-[#1D4ED8]" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/70">
                          {section.tag}
                        </span>
                        <span className="text-xs font-mono font-bold bg-blue-50 text-[#1D4ED8] px-2.5 py-1 rounded-full border border-blue-100">
                          Art. {section.number}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 tracking-tight group-hover:text-[#1D4ED8] transition-colors">
                        {section.title}
                      </h3>
                    </div>

                    <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {section.body.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Peers Global Governance Charter</span>
                    <span className="group-hover:text-[#1D4ED8] transition-colors">Clause {section.number} →</span>
                  </div>
                </article>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── Executive Governance Ribbon (Compact Closing Layout) ── */}
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
                <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/90">
                  Institutional Governance &amp; Integrity
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-white tracking-tight leading-[1.2]">
                Honest boundaries. <br />
                <span className="italic text-amber-300 font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Empowering ethical enterprise growth.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-md">
                PEERS GLOBAL operates with unyielding compliance standards and transparent statutory frameworks across Bharat.
              </p>

              <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Statutory Compliance Secretariat • Ahmedabad HQ</span>
              </div>
            </div>

            {/* Right Col (7 cols): Horizontal Compact Governance Navigation Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {[
                {
                  code: 'CHARTER 01',
                  title: 'Terms of Use',
                  desc: 'Binding platform covenants & member rules',
                  href: '/terms-of-use',
                  tag: 'Enterprise Terms'
                },
                {
                  code: 'CHARTER 02',
                  title: 'Privacy Policy',
                  desc: 'DPDP Act 2023 compliance & data rights',
                  href: '/privacy-policy',
                  tag: 'Data Rights'
                },
                {
                  code: 'CHARTER 03',
                  title: 'Grievance Redressal',
                  desc: 'IT Act statutory officer & SLA timelines',
                  href: '/grievance',
                  tag: 'Statutory Desk'
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


'use client'

import React from 'react'
import Link from 'next/link'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  FileText,
  ChevronRight,
  ShieldCheck,
  Scale,
  Building,
  AlertCircle,
  HelpCircle,
  ArrowRight,
} from 'lucide-react'

const TERMS_SECTIONS = [
  {
    num: '01',
    heading: 'Acceptance of Terms',
    icon: FileText,
    tag: 'Binding Agreement',
    body: [
      'By accessing or using the website peersglobal.com, associated web portals, and the Unity App mobile application (collectively, the "Platform"), operated by Peers Global Business Media Private Limited ("Peers Global", "we", "us", or "our"), you agree to be bound by these Terms of Use.',
      'If you do not agree to these terms, you must not access or use the Platform or attend any Peers Global Circle meetings.',
    ],
  },
  {
    num: '02',
    heading: 'Eligibility and Account Registration',
    icon: ShieldCheck,
    tag: 'Founder Credentials',
    body: [
      'To access community features and the Unity App, you must be a registered business owner, partner, director, or designated enterprise executive.',
      'You are responsible for safeguarding your login credentials and are solely liable for all activities that occur under your verified account.',
    ],
  },
  {
    num: '03',
    heading: 'Intellectual Property Rights',
    icon: Building,
    tag: 'Proprietary IP',
    body: [
      'All materials on this Platform, including the LSR Growth Model, 10 Forms of Collaboration, proprietary lexicon, software architecture, branding, graphics, and video content are the exclusive intellectual property of Peers Global Business Media Private Limited.',
      'You are granted a limited, revocable, non-transferable license to access community content solely for your personal enterprise development.',
    ],
  },
  {
    num: '04',
    heading: 'Acceptable Platform Use',
    icon: AlertCircle,
    tag: 'Ecosystem Conduct',
    body: [
      'You agree not to harvest member contact data, scrape platform directories, post defamatory or infringing content, or use automated systems without express prior written consent.',
      'Violation of acceptable use guidelines may result in immediate account suspension, forfeiture of community standing, and legal recourse.',
    ],
  },
  {
    num: '05',
    heading: 'Limitation of Liability',
    icon: Scale,
    tag: 'Commercial Boundaries',
    body: [
      'To the fullest extent permitted by applicable Indian law, Peers Global shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from member-to-member contracts, commercial transactions, or business ventures.',
      'Our aggregate liability for any direct claims arising under these terms shall not exceed the membership fee paid by you in the preceding 12 months.',
    ],
  },
  {
    num: '06',
    heading: 'Governing Law & Jurisdiction',
    icon: HelpCircle,
    tag: 'Legal Venue',
    body: [
      'These Terms shall be governed by and construed in accordance with the laws of India.',
      'Any disputes or legal actions arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts located at Ahmedabad, Gujarat, India.',
    ],
  },
]

export function TermsOfUseClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100 selection:text-[#E11D48]">
      {/* Global Brand Gradient Definition for Icons */}
      <svg width="0" height="0" className="absolute pointer-events-none" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="termsBrandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
        </defs>
      </svg>

      {/* ── Breadcrumb Navigation ── */}
      <div className="border-b border-slate-200/70 bg-white/90 backdrop-blur-md sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm crumb-bar">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/peers-code" className="hover:text-[#1D4ED8] transition-colors">
              Governance
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold brand-gradient-text">Terms of Use</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-50/80 to-rose-50/80 border border-slate-200">
              <Scale className="w-3.5 h-3.5 [stroke:url(#termsBrandGrad)]" />
              <span className="brand-gradient-text font-bold">Statutory Governance</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Signature Hero Section (Home & Circles Master Design Layout) ── */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-0 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Home-style looping video backdrop with dark scrim */}
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          src="/videos/homepage-hero-bg.mp4"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)]"
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[480px] lg:min-h-[540px] flex items-center py-14 sm:py-20">
            <div className="max-w-3xl flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  LEGAL AGREEMENT &amp; GOVERNANCE
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold text-white tracking-tight leading-[1.14] mb-4">
                Platform Terms{' '}
                <span className="brand-gradient-text">
                  of Use.
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed mb-5 max-w-2xl">
                Governing rules for accessing the Peers Global platform, website, mobile ecosystem, and digital collaboration tools.
              </p>

              <p className="text-sm sm:text-base text-white/95 font-medium italic border-l-2 border-[#E11D48] pl-3 py-0.5 mb-6 max-w-xl">
                Our covenants protect genuine founders and ensure an unpolluted space for non-zero-sum collaboration.
              </p>

              <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 font-mono text-[11px] backdrop-blur-sm">
                  CIN: U22219GJ2022PTC137646
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 font-mono text-[11px] backdrop-blur-sm">
                  Ahmedabad, Gujarat Jurisdiction
                </span>
              </div>
            </div>
          </div>

          {/* 4-Item Floating Stats Bar */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { val: 'CIN Verified', label: 'Registered Enterprise', sub: 'Peers Global Business Media Pvt Ltd', tag: 'Statutory Body' },
              { val: 'IP Protected', label: 'Proprietary IP', sub: 'LSR Model & Lexicon Trademarks', tag: 'Protected Assets' },
              { val: 'Jurisdiction', label: 'Ahmedabad Courts', sub: 'Governed under the laws of India', tag: 'Legal Forum' },
              { val: 'Zero Scraping', label: 'Strict Directory Rule', sub: 'Zero data extraction permitted', tag: 'Anti-Harvesting' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white border border-slate-200/90 p-5 shadow-xs hover:shadow-lg hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider brand-gradient-text font-semibold px-2 py-0.5 rounded-md bg-gradient-to-r from-blue-50/80 to-rose-50/80 border border-slate-200">
                    {stat.tag}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                </div>
                <div className="font-serif text-2xl font-bold brand-gradient-text">
                  {stat.val}
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">{stat.label}</div>
                <div className="text-xs text-slate-500 font-normal mt-0.5 leading-relaxed">{stat.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Terms Sections with Sticky Navigation ── */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Sticky Table of Contents & Corporate Info */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              
              {/* Table of Contents Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <FileText className="w-4 h-4 [stroke:url(#termsBrandGrad)]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Terms Index
                  </span>
                </div>
                
                <nav className="space-y-1">
                  {TERMS_SECTIONS.map((sec) => (
                    <a
                      key={sec.num}
                      href={`#terms-${sec.num}`}
                      className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-all text-xs font-semibold text-slate-700 hover:text-[#1D4ED8]"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[11px] text-slate-400 group-hover:text-[#1D4ED8]">
                          {sec.num}.
                        </span>
                        <span className="truncate max-w-[190px] sm:max-w-none group-hover:text-[#1D4ED8]">{sec.heading}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Corporate Identity Box */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 [stroke:url(#termsBrandGrad)]" />
                  <span className="text-xs font-mono font-bold uppercase brand-gradient-text">
                    Corporate Entity
                  </span>
                </div>
                <div className="space-y-2 text-xs font-mono text-slate-700 pt-2 border-t border-slate-100">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">CIN:</span>
                    <span className="text-slate-900 font-bold">U22219GJ2022PTC137646</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">GSTIN:</span>
                    <span className="text-slate-900 font-bold">24AANCP4546L1ZY</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Legal Desk:</span>
                    <span className="brand-gradient-text font-bold">legal@peersglobal.com</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Terms Clauses Cards */}
            <div className="lg:col-span-8 space-y-6">
              {TERMS_SECTIONS.map((sec) => {
                const IconComponent = sec.icon
                return (
                  <div
                    id={`terms-${sec.num}`}
                    key={sec.heading}
                    className="brand-gradient-border-card group p-7 sm:p-9 rounded-3xl shadow-xs space-y-4 scroll-mt-24 cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-50 to-rose-50 border border-blue-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:shadow-md transition-all">
                          <IconComponent className="w-5 h-5 [stroke:url(#termsBrandGrad)]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold brand-gradient-text">
                              SECTION {sec.num}
                            </span>
                            <span className="text-[11px] font-semibold text-slate-500">
                              {sec.tag}
                            </span>
                          </div>
                          <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-950 tracking-tight mt-0.5 brand-gradient-hover-text transition-colors">
                            {sec.heading}
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm text-slate-600 group-hover:text-slate-700 leading-relaxed font-normal transition-colors">
                      {sec.body.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                )
              })}

              {/* Legal Support Banner */}
              <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/80 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
                <div>
                  <h3 className="text-lg font-serif font-bold text-slate-950">Have questions regarding platform covenants?</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">Connect with the Peers Global Corporate Legal Secretariat.</p>
                </div>
                <GalaxyButton
                  href="mailto:legal@peersglobal.com"
                  variant="primary"
                  size="sm"
                  className="shrink-0"
                >
                  Contact Legal Desk
                </GalaxyButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Signature Celestial Master Closing Banner ── */}
      <section className="relative py-14 sm:py-18 bg-[#040F24] text-white overflow-hidden border-t border-slate-800">
        {/* Deep celestial radial gradients & luminous aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(0,98,210,0.25),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(225,29,72,0.18),transparent_50%),linear-gradient(115deg,#020817_0%,#071a3d_50%,#040f24_100%)]"
        />

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* SVG Orbital Geometric Lines Background */}
        <div className="absolute -right-16 -top-16 bottom-0 pointer-events-none w-[360px] sm:w-[480px] lg:w-[620px] opacity-25 overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 600 600" fill="none" className="w-full h-full text-white/40" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 450 A 420 420 0 0 1 550 50" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 120 520 A 500 500 0 0 1 600 120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <path d="M 220 580 A 460 460 0 0 1 580 220" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="280" y1="220" x2="380" y2="120" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="280" cy="220" r="3" fill="#38BDF8" />
            <circle cx="380" cy="120" r="4" fill="#FB7185" />
            <circle cx="450" cy="190" r="2.5" fill="#FBBF24" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading, Ethos & Punchline */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-3.5">
              <div className="inline-flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  STATUTORY GOVERNANCE &amp; TRUST
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Responsible conduct. Protected boundaries. <br className="hidden sm:inline" />
                <span className="italic brand-gradient-text font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Guaranteed by statutory covenant.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
                PEERS GLOBAL operates under unyielding compliance standards and structured agreements across Bharat.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {[
                  { title: 'Privacy Policy', href: '/privacy-policy' },
                  { title: 'Community Guidelines', href: '/community-guidelines' },
                  { title: 'Grievance Redressal', href: '/grievance' }
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    <span>{item.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column: Action Buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end lg:items-end w-full">
              <GalaxyButton
                href="mailto:legal@peersglobal.com"
                variant="primary"
                size="md"
                className="w-full sm:w-auto lg:w-full max-w-xs uppercase tracking-wider font-bold"
              >
                Contact Legal Secretariat
              </GalaxyButton>

              <GalaxyButton
                href="/membership"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto lg:w-full max-w-xs uppercase tracking-wider font-bold"
              >
                Explore Membership Terms
              </GalaxyButton>

              <div className="flex gap-2.5 w-full max-w-xs">
                <Link
                  href="/contact"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.10] text-slate-200 hover:text-white font-semibold text-[11px] uppercase tracking-wider transition-all border border-white/10 text-center"
                >
                  Contact Desk
                </Link>
                <Link
                  href="/grievance"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.10] text-slate-200 hover:text-white font-semibold text-[11px] uppercase tracking-wider transition-all border border-white/10 text-center"
                >
                  Grievance Desk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


'use client'

import React from 'react'
import Link from 'next/link'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  ShieldCheck,
  ChevronRight,
  FileCheck,
  Users,
  Lock,
  Calendar,
  AlertCircle,
  MessageSquare,
  Ban,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react'

const GUIDELINES = [
  {
    num: '01',
    title: 'No Hard Pitching or Direct Solicitation',
    tag: 'Anti-Commercialization',
    desc: 'Circle meetings and community forums are never sales stages. You may not broadcast unsolicited sales brochures, bulk WhatsApp messages, or cold pitch fellow members. Collaboration grows from genuine value and mutual need.',
    icon: Ban,
  },
  {
    num: '02',
    title: 'Category Exclusivity & Fair Representation',
    tag: 'Seat Integrity',
    desc: 'Each seat represents a single business category in a Circle. Members must strictly represent their approved primary line of business and refrain from encroaching on categories allocated to fellow Peers.',
    icon: ShieldCheck,
  },
  {
    num: '03',
    title: 'Meeting Attendance & Punctuality',
    tag: 'Commitment Standard',
    desc: 'Trust requires regular presence. Members must attend monthly Circle meetings. Missing three consecutive sessions without formal leave approved by the Membership Experience Committee leads to seat review.',
    icon: Calendar,
  },
  {
    num: '04',
    title: 'Absolute Meeting Confidentiality',
    tag: 'Chatham House Protocol',
    desc: 'Information regarding business challenges, balance sheets, founder disputes, or proprietary vendor connections shared in Circle sessions must remain strictly confidential.',
    icon: Lock,
  },
  {
    num: '05',
    title: 'Verified Impact Logging',
    tag: 'Mutual Confirmation',
    desc: 'All collaborations, introductions, and mentorship actions logged in the Unity App must be truthful and confirmed by the counterparty. Falsifying impact metrics is grounds for immediate termination.',
    icon: FileCheck,
  },
  {
    num: '06',
    title: 'Civil Discourse & Dispute Resolution',
    tag: 'MEC Mediation',
    desc: 'Any commercial disagreement between members must be addressed professionally. If needed, members may seek mediation through their Circle Director and the Peers Board of Advisory.',
    icon: Users,
  },
]

export function CommunityGuidelinesClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100 selection:text-[#E11D48]">
      {/* ── Global SVG Gradient Definition ── */}
      <svg width="0" height="0" className="absolute pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <linearGradient id="guideBrandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
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
            <span className="font-bold brand-gradient-text">Community Guidelines</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 [stroke:url(#guideBrandGrad)]" />
              <span className="brand-gradient-text">Sanctity of Rooms</span>
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
            poster="/images/section_image/circle-meeting.png"
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
                <span className="brand-gradient-text font-bold">CONDUCT &amp; PARTICIPATION STANDARDS</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white font-serif">
                  Community{' '}
                  <span className="brand-gradient-text">
                    Guidelines.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Standards for healthy rooms, protected categories, and authentic contribution across all Circles.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light">
                A room where everyone tries to sell is a room where nobody listens. We protect the listening, ensure category integrity, and maintain sacred confidentiality across all Circles and the Unity App.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="#guidelines-index"
                  variant="primary"
                  size="md"
                >
                  Read Guidelines
                </GalaxyButton>

                <GalaxyButton
                  href="/membership"
                  variant="secondary"
                  size="md"
                >
                  Become a Peer
                </GalaxyButton>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-xl pt-6 border-t border-white/15">
                {[
                  { icon: Ban, value: 'Zero Pitching', label: 'Protected Gatherings' },
                  { icon: ShieldCheck, value: '1 Category', label: 'Exclusive Seat Policy' },
                  { icon: Lock, value: '100% Secret', label: 'Strict Confidentiality' },
                ].map((s) => {
                  const Icon = s.icon
                  return (
                    <div
                      key={s.label}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 backdrop-blur-md transition-all"
                    >
                      <div className="size-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 shadow-xs">
                        <Icon className="size-5 [stroke:url(#guideBrandGrad)]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-sm sm:text-base brand-gradient-text tracking-tight leading-tight whitespace-nowrap">
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
                Protected Rooms
              </p>
              <p
                className="text-3xl sm:text-4xl text-white leading-tight font-bold"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Mutual Respect
              </p>
              <p
                className="text-3xl sm:text-4xl brand-gradient-text font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Uncompromising Standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guidelines Sections with Sticky Navigation ── */}
      <section id="guidelines-index" className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Sticky Table of Contents & Reporting Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              
              {/* Table of Contents Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <FileCheck className="w-4 h-4 [stroke:url(#guideBrandGrad)]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Guidelines Index
                  </span>
                </div>
                
                <nav className="space-y-1">
                  {GUIDELINES.map((item) => (
                    <a
                      key={item.num}
                      href={`#rule-${item.num}`}
                      className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-all text-xs font-semibold text-slate-700 hover:text-[#1D4ED8]"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[11px] text-slate-400 group-hover:text-[#1D4ED8]">
                          {item.num}.
                        </span>
                        <span className="truncate max-w-[190px] sm:max-w-none group-hover:text-[#1D4ED8]">{item.title}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Confidential Reporting Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-50/70 to-rose-50/40 border border-blue-100/80 shadow-2xs space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 [stroke:url(#guideBrandGrad)]" />
                  <span className="text-xs font-mono font-bold uppercase brand-gradient-text">
                    Confidential Ethics Line
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Notice an aggressive sales pitch or confidentiality violation? Report directly to the Membership Experience Committee.
                </p>
                <div className="pt-2">
                  <GalaxyButton
                    href="mailto:grievance@peersglobal.com"
                    variant="primary"
                    size="sm"
                    className="w-full justify-center"
                  >
                    grievance@peersglobal.com
                  </GalaxyButton>
                </div>
              </div>

            </div>

            {/* Right Column: Guidelines Cards */}
            <div className="lg:col-span-8 space-y-6">
              {GUIDELINES.map((item) => {
                const IconComponent = item.icon
                return (
                  <div
                    id={`rule-${item.num}`}
                    key={item.title}
                    className="brand-gradient-border-card group p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 space-y-4 scroll-mt-24"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <IconComponent className="w-4 h-4 [stroke:url(#guideBrandGrad)]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold brand-gradient-text">
                              PRINCIPLE {item.num}
                            </span>
                            <span className="text-[11px] font-semibold text-slate-400">
                              • {item.tag}
                            </span>
                          </div>
                          <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-950 brand-gradient-hover-text tracking-tight mt-0.5">
                            {item.title}
                          </h2>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                )
              })}

              {/* Ethics Support Banner */}
              <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/80 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
                <div>
                  <h3 className="text-lg font-serif font-bold text-slate-950">Reporting a Breach or Room Concern?</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Circle Directors and the Advisory Council maintain strict whistleblower privacy.</p>
                </div>
                <GalaxyButton
                  href="mailto:grievance@peersglobal.com"
                  variant="primary"
                  size="sm"
                  className="shrink-0"
                >
                  Submit Report
                </GalaxyButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Signature Celestial Master Closing Banner ── */}
      <section className="relative py-16 sm:py-24 bg-[#040F24] text-white overflow-hidden border-t border-slate-800">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Headings & Governance Links */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  HEALTHY ROOMS &amp; AUTHENTIC CULTURE
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Vetted founders. Protected rooms. <br className="hidden sm:inline" />
                <span className="italic brand-gradient-text font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Where collaboration flourishes.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
                PEERS GLOBAL — Building enduring business relationships and category integrity across Bharat.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {[
                  { title: 'The Peers Code', href: '/peers-code' },
                  { title: 'Terms of Use', href: '/terms-of-use' },
                  { title: 'Grievance Redressal', href: '/grievance' }
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column: Action Buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end lg:items-end w-full">
              <GalaxyButton
                href="mailto:grievance@peersglobal.com"
                variant="primary"
                size="md"
                className="w-full sm:w-auto lg:w-full max-w-xs uppercase tracking-wider font-bold"
              >
                Submit Code Grievance
              </GalaxyButton>

              <GalaxyButton
                href="/membership"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto lg:w-full max-w-xs uppercase tracking-wider font-bold"
              >
                Apply for Membership
              </GalaxyButton>

              <div className="flex gap-2.5 w-full max-w-xs">
                <Link
                  href="/contact"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.10] text-slate-200 hover:text-white font-semibold text-[11px] uppercase tracking-wider transition-all border border-white/10 text-center"
                >
                  Contact Desk
                </Link>
                <Link
                  href="/privacy-policy"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.10] text-slate-200 hover:text-white font-semibold text-[11px] uppercase tracking-wider transition-all border border-white/10 text-center"
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


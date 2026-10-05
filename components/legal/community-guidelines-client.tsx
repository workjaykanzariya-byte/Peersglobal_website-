'use client'

import React from 'react'
import Link from 'next/link'
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
            <span className="font-bold brand-gradient-text">Community Guidelines</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#1D4ED8] border border-blue-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Sanctity of Rooms</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Signature Hero Section (Home & Circles Master Design Layout) ── */}
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
                alt="Peers Global Community Guidelines"
                className="size-full object-cover object-center opacity-85"
              />

              {/* Seamless gradient overlays for misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  Protected Rooms
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Mutual Respect
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Uncompromising Standards
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none hidden sm:block">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    ETHICAL ARCHITECTURE
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    ZERO HARD-PITCH ZONE
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
                    CONDUCT &amp; PARTICIPATION STANDARDS
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-slate-950 tracking-tight leading-[1.12] mb-4">
                  Community <br />
                  <span className="italic bg-gradient-to-r from-[#1D4ED8] via-[#8B5CF6] to-[#E11D48] bg-clip-text text-transparent font-medium">
                    Guidelines.
                  </span>
                </h1>

                {/* Subtitle & Descriptions */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6 max-w-lg">
                  Standards for healthy rooms, protected categories, respectful interaction, and authentic contribution across all Circles and the Unity App.
                </p>

                {/* Featured Highlight Quote Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-rose-50/50 border border-blue-100/80 mb-6 max-w-lg">
                  <p className="font-serif italic text-slate-900 text-sm sm:text-base font-medium">
                    “A room where everyone tries to sell is a room where nobody listens. We protect the listening.”
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 font-mono text-[11px] shadow-2xs">
                    Governed by MEC &amp; Circle Directors
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1D4ED8] border border-blue-100 font-mono text-[11px]">
                    Strict Non-Solicitation Covenant
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* 4-Item Floating Stats Bar */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { val: 'Zero Pitching', label: 'Protected Gatherings', sub: 'Collaboration over cold sales', tag: 'Safe Rooms' },
              { val: '1 Category', label: 'Exclusive Seat Policy', sub: 'Zero internal room conflicts', tag: 'No Encroachment' },
              { val: '100% Secret', label: 'Strict Confidentiality', sub: 'What is shared stays in room', tag: 'Chatham House' },
              { val: 'Active MEC', label: 'Peer Review Board', sub: 'Fair dispute mediation', tag: 'Governance' },
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

      {/* ── Guidelines Sections with Sticky Navigation ── */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Sticky Table of Contents & Reporting Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              
              {/* Table of Contents Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <FileCheck className="w-4 h-4 text-[#1D4ED8]" />
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
                        <span className="truncate max-w-[190px] sm:max-w-none">{item.title}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Confidential Reporting Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-50/70 to-rose-50/40 border border-blue-100/80 shadow-2xs space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-mono font-bold uppercase text-slate-900">
                    Confidential Ethics Line
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Notice an aggressive sales pitch or confidentiality violation? Report directly to the Membership Experience Committee.
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:grievance@peersglobal.com"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold transition-all shadow-2xs"
                  >
                    <span>grievance@peersglobal.com</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
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
                    className="group p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 space-y-4 scroll-mt-24"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-50 to-rose-50 border border-blue-100/80 flex items-center justify-center text-[#1D4ED8] shrink-0 group-hover:scale-105 transition-transform">
                          <IconComponent className="w-4 h-4" />
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
                          <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-950 tracking-tight mt-0.5">
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
                <Link
                  href="mailto:grievance@peersglobal.com"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-md shrink-0"
                >
                  <span>Submit Report</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2.5">
              <span className="h-[1.5px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/90">
                Healthy Rooms &amp; Authentic Culture
              </span>
              <span className="h-[1.5px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-bold text-white tracking-tight leading-[1.18]">
              Vetted founders. Protected rooms. <br className="hidden sm:inline" />
              <span className="italic text-amber-300 font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                Where collaboration flourishes.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-mono tracking-wider pt-2">
              PEERS GLOBAL — Building enduring business relationships across Bharat.
            </p>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-2">
            {[
              {
                title: 'The Peers Code',
                desc: 'The foundational philosophy & 10 pillars',
                href: '/peers-code'
              },
              {
                title: 'Terms of Use',
                desc: 'Statutory platform agreements & rights',
                href: '/terms-of-use'
              },
              {
                title: 'Grievance Redressal',
                desc: 'Designated legal & grievance officer',
                href: '/grievance'
              }
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group p-5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/30 transition-all duration-300 text-left backdrop-blur-md flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-300/90 font-semibold">
                      Charter 0{idx + 1}
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-amber-300 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-sm font-bold text-white mt-2 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


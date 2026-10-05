'use client'

import React from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  ChevronRight,
  HeartHandshake,
  Clock,
  MessageSquare,
  Lock,
  Users,
  Sparkles,
  ArrowRight,
  Scale,
} from 'lucide-react'

const COMMITMENTS = [
  {
    num: '01',
    title: 'Give First',
    tag: 'Contribution Ethos',
    desc: 'Contribution comes before any ask. We help before we are asked, and without calculating the return. An introduction, a piece of hard-won knowledge, an honest assessment — given freely to the room.',
    quote: '“We help before we are asked, without calculating return.”',
    icon: HeartHandshake,
    gradient: 'from-blue-600 to-indigo-600',
    borderLight: 'border-blue-100 hover:border-blue-300'
  },
  {
    num: '02',
    title: 'Show Up',
    tag: 'Consistency Standard',
    desc: 'Trust is built by the same people meeting the same people, consistently, over time. Empty chairs do not collaborate. You honour the room by being in it every month.',
    quote: '“Empty chairs do not collaborate. You honour the room by presence.”',
    icon: Clock,
    gradient: 'from-indigo-600 to-purple-600',
    borderLight: 'border-indigo-100 hover:border-indigo-300'
  },
  {
    num: '03',
    title: 'Tell the Truth',
    tag: 'Radical Candor',
    desc: 'Especially when it is uncomfortable. A Peer who only agrees with you is of no use to your business. We offer candid, respectful, and actionable truth in every interaction.',
    quote: '“A Peer who only agrees with you is of no use to your business.”',
    icon: MessageSquare,
    gradient: 'from-purple-600 to-rose-600',
    borderLight: 'border-purple-100 hover:border-purple-300'
  },
  {
    num: '04',
    title: 'Protect the Room',
    tag: 'Confidentiality Oath',
    desc: 'What is shared inside a Circle stays inside it. Commercial vulnerabilities, financial realities, and private struggles disclosed in confidence must remain confidential forever.',
    quote: '“Disclosed in confidence, protected forever.”',
    icon: Lock,
    gradient: 'from-rose-600 to-pink-600',
    borderLight: 'border-rose-100 hover:border-rose-300'
  },
  {
    num: '05',
    title: 'Respect Every Peer',
    tag: 'Universal Dignity',
    desc: 'Regardless of the size of their business, the length of their membership, or the language they speak. The founder doing ₹2 Cr turnover receives the exact same dignity as the founder doing ₹200 Cr.',
    quote: '“The ₹2 Cr founder receives the exact same dignity as the ₹200 Cr founder.”',
    icon: Users,
    gradient: 'from-amber-600 to-orange-600',
    borderLight: 'border-amber-100 hover:border-amber-300'
  },
  {
    num: '06',
    title: 'Carry the Culture',
    tag: 'Ecosystem Custodianship',
    desc: 'Every Peer is responsible for the experience of every other Peer. Culture is not maintained by rules alone — it is maintained by how we welcome newcomers, listen to seniors, and handle disagreements.',
    quote: '“Culture is maintained by how we welcome, listen, and disagree.”',
    icon: Sparkles,
    gradient: 'from-emerald-600 to-teal-600',
    borderLight: 'border-emerald-100 hover:border-emerald-300'
  },
]

export function PeersCodeClient() {
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
            <span className="font-bold brand-gradient-text">The Peers Code</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-[#E11D48] border border-rose-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Constitutional Covenant</span>
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
                src="/images/section_image/executive-director-conclave.jpg"
                alt="Peers Global Constitutional Covenant"
                className="size-full object-cover object-center opacity-85"
              />

              {/* Seamless gradient overlays for misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  Give First
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Tell The Truth
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Carry The Culture
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none hidden sm:block">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    CONSTITUTIONAL OATH
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    SIX CORE COMMITMENTS
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
                    CONSTITUTIONAL COVENANT
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-slate-950 tracking-tight leading-[1.12] mb-4">
                  The Peers <br />
                  <span className="italic bg-gradient-to-r from-[#1D4ED8] via-[#8B5CF6] to-[#E11D48] bg-clip-text text-transparent font-medium">
                    Code of Honour.
                  </span>
                </h1>

                {/* Subtitle & Descriptions */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6 max-w-lg">
                  Six commitments. Every Peer makes them. Every leader upholds them. The non-negotiable bedrock of our community.
                </p>

                {/* Featured Highlight Quote Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-rose-50/50 border border-blue-100/80 mb-6 max-w-lg">
                  <p className="font-serif italic text-slate-900 text-sm sm:text-base font-medium">
                    “Culture is not maintained by rules alone — it is maintained by how we welcome, listen, and handle disagreements.”
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 font-mono text-[11px] shadow-2xs">
                    Binding on All Inducted Peers
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1D4ED8] border border-blue-100 font-mono text-[11px]">
                    Enforced by National Council
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* 4-Item Floating Stats Bar */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { val: '6 Commitments', label: 'Constitutional Pillars', sub: 'Non-negotiable member oaths', tag: 'Core Oaths' },
              { val: 'Give First', label: 'Contribution Ethos', sub: 'Help before calculating return', tag: 'Non-Transactional' },
              { val: 'Equal Voice', label: 'Turnover Agnostic', sub: '₹2 Cr and ₹200 Cr have equal dignity', tag: 'Equal Dignity' },
              { val: '100% Binding', label: 'Membership Status', sub: 'Condition of active standing', tag: 'Governance Law' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white border border-slate-200/90 p-5 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold px-2 py-0.5 rounded-md bg-slate-50 border border-slate-100">
                    {stat.tag}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
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

      {/* ── Six Commitments Sections with Sticky Navigation ── */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Sticky Table of Contents & Constitutional Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              
              {/* Table of Contents Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <Sparkles className="w-4 h-4 text-[#E11D48]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Code of Honour Index
                  </span>
                </div>
                
                <nav className="space-y-1">
                  {COMMITMENTS.map((item) => (
                    <a
                      key={item.num}
                      href={`#code-${item.num}`}
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

              {/* Constitutional Enforceability Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-50/70 to-rose-50/40 border border-blue-100/80 shadow-2xs space-y-4">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#1D4ED8]" />
                  <span className="text-xs font-mono font-bold uppercase text-slate-900">
                    Statutory Standing
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The Peers Code is a mandatory covenant. Chronic absence, transactional selling, or breach of trust results in category revocation.
                </p>
                <div className="pt-2 flex flex-col gap-2 text-xs font-bold text-[#1D4ED8]">
                  <Link href="/terms-of-use" className="hover:text-[#E11D48] transition-colors inline-flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
                    <span>Terms of Use</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="/community-guidelines" className="hover:text-[#E11D48] transition-colors inline-flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
                    <span>Community Guidelines</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

            {/* Right Column: Commitments Grid Cards */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {COMMITMENTS.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <div
                      id={`code-${item.num}`}
                      key={item.title}
                      className={`group relative p-6 sm:p-7 rounded-3xl bg-white border ${item.borderLight} shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 overflow-hidden scroll-mt-24`}
                    >
                      {/* Top Gradient Accent Bar */}
                      <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${item.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />

                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-slate-50 to-blue-50/60 border border-slate-200/80 flex items-center justify-center text-[#1D4ED8] group-hover:scale-105 transition-transform">
                            <IconComponent className="w-5 h-5 text-[#1D4ED8]" />
                          </div>
                          <span className="text-xs font-mono font-bold bg-slate-100/90 text-slate-700 px-3 py-1 rounded-full border border-slate-200/80">
                            Oath {item.num}
                          </span>
                        </div>

                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            {item.tag}
                          </div>
                          <h2 className="text-xl font-serif font-bold text-slate-950 tracking-tight mt-0.5 group-hover:text-[#1D4ED8] transition-colors">
                            {item.title}
                          </h2>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>

                      {/* Highlight Quote Box */}
                      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50/50 via-slate-50/50 to-rose-50/40 border border-slate-100 text-xs italic font-serif text-slate-800 leading-relaxed">
                        {item.quote}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Membership Affirmation Banner */}
              <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/80 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
                <div>
                  <h3 className="text-lg font-serif font-bold text-slate-950">Ready to uphold the Code of Honour?</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Join the verified peer collaboration network of visionary founders across Bharat.</p>
                </div>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-md shrink-0"
                >
                  <span>Explore Membership</span>
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
                Constitutional Covenant
              </span>
              <span className="h-[1.5px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-bold text-white tracking-tight leading-[1.18]">
              Give first. Tell the truth. <br className="hidden sm:inline" />
              <span className="italic text-amber-300 font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                Carry the culture together.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-mono tracking-wider pt-2">
              PEERS GLOBAL — Designed in Bharat. Built for the World.
            </p>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-2">
            {[
              {
                title: 'Community Guidelines',
                desc: 'Sanctity of rooms & non-solicitation rules',
                href: '/community-guidelines'
              },
              {
                title: 'Terms of Use',
                desc: 'Statutory platform agreements & rights',
                href: '/terms-of-use'
              },
              {
                title: 'Explore Membership',
                desc: 'Category eligibility & Circle placement',
                href: '/membership'
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


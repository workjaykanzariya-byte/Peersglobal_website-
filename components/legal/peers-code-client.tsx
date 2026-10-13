'use client'

import React from 'react'
import Link from 'next/link'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
  ArrowUpRight,
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
  },
  {
    num: '02',
    title: 'Show Up',
    tag: 'Consistency Standard',
    desc: 'Trust is built by the same people meeting the same people, consistently, over time. Empty chairs do not collaborate. You honour the room by being in it every month.',
    quote: '“Empty chairs do not collaborate. You honour the room by presence.”',
    icon: Clock,
  },
  {
    num: '03',
    title: 'Tell the Truth',
    tag: 'Radical Candor',
    desc: 'Especially when it is uncomfortable. A Peer who only agrees with you is of no use to your business. We offer candid, respectful, and actionable truth in every interaction.',
    quote: '“A Peer who only agrees with you is of no use to your business.”',
    icon: MessageSquare,
  },
  {
    num: '04',
    title: 'Protect the Room',
    tag: 'Confidentiality Oath',
    desc: 'What is shared inside a Circle stays inside it. Commercial vulnerabilities, financial realities, and private struggles disclosed in confidence must remain confidential forever.',
    quote: '“Disclosed in confidence, protected forever.”',
    icon: Lock,
  },
  {
    num: '05',
    title: 'Respect Every Peer',
    tag: 'Universal Dignity',
    desc: 'Regardless of the size of their business, the length of their membership, or the language they speak. The founder doing ₹2 Cr turnover receives the exact same dignity as the founder doing ₹200 Cr.',
    quote: '“The ₹2 Cr founder receives the exact same dignity as the ₹200 Cr founder.”',
    icon: Users,
  },
  {
    num: '06',
    title: 'Carry the Culture',
    tag: 'Ecosystem Custodianship',
    desc: 'Every Peer is responsible for the experience of every other Peer. Culture is not maintained by rules alone — it is maintained by how we welcome newcomers, listen to seniors, and handle disagreements.',
    quote: '“Culture is maintained by how we welcome, listen, and disagree.”',
    icon: Sparkles,
  },
]

export function PeersCodeClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100 selection:text-[#E11D48]">
      {/* ── Global SVG Gradient Definition ── */}
      <svg width="0" height="0" className="absolute pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <linearGradient id="codeBrandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
          <linearGradient id="cardGradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
          <linearGradient id="cardGradientStroke2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
          <linearGradient id="cardGradientStroke3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#F43F5E" />
          </linearGradient>
          <linearGradient id="brandCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
        </defs>
      </svg>

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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 [stroke:url(#codeBrandGrad)]" />
              <span className="brand-gradient-text">Constitutional Covenant</span>
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
            poster="/images/section_image/executive-director-conclave.jpg"
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
                <span className="brand-gradient-text font-bold">CONSTITUTIONAL COVENANT</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white font-serif">
                  The Peers{' '}
                  <span className="brand-gradient-text">
                    Code of Honour.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Six commitments. Every Peer makes them. Every leader upholds them.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light">
                Culture is not maintained by rules alone — it is maintained by how we welcome, listen, and handle disagreements with unyielding dignity across all business sizes.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="#code-index"
                  variant="primary"
                  size="md"
                >
                  Read The 6 Commitments
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
                  { icon: HeartHandshake, value: 'Give First', label: 'Contribution Ethos' },
                  { icon: Clock, value: 'Show Up', label: 'Presence Standard' },
                  { icon: Scale, value: 'Equal Voice', label: 'Turnover Agnostic' },
                ].map((s) => {
                  const Icon = s.icon
                  return (
                    <div
                      key={s.label}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 backdrop-blur-md transition-all"
                    >
                      <div className="size-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 shadow-xs">
                        <Icon className="size-5 [stroke:url(#codeBrandGrad)]" />
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
                Give First
              </p>
              <p
                className="text-3xl sm:text-4xl text-white leading-tight font-bold"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Tell The Truth
              </p>
              <p
                className="text-3xl sm:text-4xl brand-gradient-text font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Carry The Culture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Six Commitments (Immersive 3-Column Card Grid Matrix) ── */}
      <section id="code-index" className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Heading & Context */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                THE CONSTITUTIONAL COVENANT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
              The 6 Oaths of Peer Collaboration
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every founder makes these commitments. They are the non-negotiable bedrock that preserves trust, psychological safety, and reciprocal growth across all chapter circles.
            </p>
          </div>

          {/* 3-Column Grid of 6 Oaths */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {COMMITMENTS.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <div
                  id={`code-${item.num}`}
                  key={item.title}
                  className="animated-glow-card group !rounded-3xl cursor-pointer shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                  tabIndex={0}
                  role="article"
                >
                  <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id={`codeCardGrad-${idx}`} x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path
                      className="animated-border-path"
                      style={{ stroke: `url(#codeCardGrad-${idx})` }}
                      d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                    />
                  </svg>

                  <div className="p-7 sm:p-8 rounded-3xl bg-white flex flex-col justify-between space-y-6 h-full w-full">
                    <div className="space-y-4">
                      {/* Header: Icon & Oath Pill */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                          <IconComponent className="w-6 h-6 [stroke:url(#codeBrandGrad)]" />
                        </div>
                        <span className="text-xs font-mono font-bold brand-gradient-text px-3.5 py-1 rounded-full border border-slate-200/80 bg-white shadow-2xs">
                          OATH {item.num}
                        </span>
                      </div>

                      {/* Title & Tag */}
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          {item.tag}
                        </div>
                        <h3 className="text-xl font-serif font-bold text-slate-950 tracking-tight mt-1 brand-gradient-hover-text transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    {/* Highlight Quote Box */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/40 via-slate-50/50 to-rose-50/30 border border-slate-100 text-xs italic font-serif text-slate-800 leading-relaxed">
                        {item.quote}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Statutory Enforcement Banner & Charters */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5 [stroke:url(#codeBrandGrad)]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-950">Statutory Covenant &amp; Governance Standing</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">The Peers Code is a binding covenant. Chronic absence, pitching, or breach of trust results in category revocation.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/terms-of-use"
                className="group p-5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="block text-[11px] font-mono font-bold tracking-wider brand-gradient-text uppercase leading-none">
                    CHARTER 01
                  </span>
                  <span className="block text-sm font-bold text-slate-900 brand-gradient-hover-text leading-tight mt-0.5">
                    Terms of Use
                  </span>
                </div>
                <div className="size-8 rounded-xl bg-white border border-slate-200/60 group-hover:border-slate-300 flex items-center justify-center shrink-0 shadow-2xs transition-colors">
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>

              <Link
                href="/community-guidelines"
                className="group p-5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="block text-[11px] font-mono font-bold tracking-wider brand-gradient-text uppercase leading-none">
                    CHARTER 02
                  </span>
                  <span className="block text-sm font-bold text-slate-900 brand-gradient-hover-text leading-tight mt-0.5">
                    Community Guidelines
                  </span>
                </div>
                <div className="size-8 rounded-xl bg-white border border-slate-200/60 group-hover:border-slate-300 flex items-center justify-center shrink-0 shadow-2xs transition-colors">
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>

              <Link
                href="/refund-policy"
                className="group p-5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="block text-[11px] font-mono font-bold tracking-wider brand-gradient-text uppercase leading-none">
                    CHARTER 03
                  </span>
                  <span className="block text-sm font-bold text-slate-900 brand-gradient-hover-text leading-tight mt-0.5">
                    Seat Commitment &amp; Refund
                  </span>
                </div>
                <div className="size-8 rounded-xl bg-white border border-slate-200/60 group-hover:border-slate-300 flex items-center justify-center shrink-0 shadow-2xs transition-colors">
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            </div>
          </div>

          {/* Membership Affirmation Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/80 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1">
              <h3 className="text-xl font-serif font-bold text-slate-950">Ready to uphold the Code of Honour?</h3>
              <p className="text-sm text-slate-600">Join the verified peer collaboration network of visionary founders across Bharat.</p>
            </div>
            <GalaxyButton
              href="/membership"
              variant="primary"
              size="md"
              className="shrink-0"
            >
              Explore Membership
            </GalaxyButton>
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
                  CONSTITUTIONAL COVENANT
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Give first. Tell the truth. <br className="hidden sm:inline" />
                <span className="italic brand-gradient-text font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Carry the culture together.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
                PEERS GLOBAL — Designed in Bharat. Built for the World.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {[
                  { title: 'Community Guidelines', href: '/community-guidelines' },
                  { title: 'Terms of Use', href: '/terms-of-use' },
                  { title: 'Explore Membership', href: '/membership' }
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
                href="/membership"
                variant="primary"
                size="md"
                className="w-full sm:w-auto lg:w-full max-w-xs uppercase tracking-wider font-bold"
              >
                Apply for Membership
              </GalaxyButton>

              <GalaxyButton
                href="/community-guidelines"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto lg:w-full max-w-xs uppercase tracking-wider font-bold"
              >
                View Community Guidelines
              </GalaxyButton>

              <div className="flex gap-2.5 w-full max-w-xs">
                <Link
                  href="/contact"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.10] text-slate-200 hover:text-white font-semibold text-[11px] uppercase tracking-wider transition-all border border-white/10 text-center"
                >
                  Contact Desk
                </Link>
                <Link
                  href="/terms-of-use"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.10] text-slate-200 hover:text-white font-semibold text-[11px] uppercase tracking-wider transition-all border border-white/10 text-center"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


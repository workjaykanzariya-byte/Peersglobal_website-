'use client'

import React from 'react'
import Link from 'next/link'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  Scale,
  ChevronRight,
  ShieldCheck,
  Mail,
  MapPin,
  Clock,
  Phone,
  Building,
  FileCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'

export function GrievanceClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100 selection:text-[#E11D48]">
      {/* ── Global SVG Gradient Definition ── */}
      <svg width="0" height="0" className="absolute pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <linearGradient id="grievanceBrandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
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
            <span className="font-bold brand-gradient-text">Grievance Redressal</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 [stroke:url(#grievanceBrandGrad)]" />
              <span className="brand-gradient-text">IT Act 2000 Statutory Cell</span>
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
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-white backdrop-blur-md uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-rose-300 font-bold">
                  STATUTORY COMPLIANCE &amp; REDRESSAL
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white font-serif">
                  Grievance{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400 font-bold">
                    Redressal Cell.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-100 leading-snug">
                  Statutory framework in accordance with Information Technology Act, 2000 &amp; Rules 2021.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal">
                Every grievance is treated with executive seriousness, confidentiality, and statutory resolution timelines by our designated compliance cell in Ahmedabad.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="mailto:grievance@peersglobal.com"
                  variant="primary"
                  size="md"
                >
                  Submit Grievance
                </GalaxyButton>

                <GalaxyButton
                  href="mailto:grievance@peersglobal.com"
                  variant="secondary"
                  size="md"
                >
                  Email Officer Directly
                </GalaxyButton>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-xl pt-6 border-t border-white/20">
                {[
                  { icon: Clock, value: '24 Hours', label: 'Acknowledgment SLA' },
                  { icon: ShieldCheck, value: '15 Days', label: 'Statutory Resolution' },
                  { icon: Scale, value: '100% Secret', label: 'Protected Whistleblower' },
                ].map((s) => {
                  const Icon = s.icon
                  return (
                    <div
                      key={s.label}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.12] hover:bg-white/[0.18] border border-white/20 backdrop-blur-md transition-all"
                    >
                      <div className="size-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0 shadow-xs">
                        <Icon className="size-5 text-sky-300" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-sm sm:text-base text-white tracking-tight leading-tight whitespace-nowrap">
                          {s.value}
                        </div>
                        <div className="text-xs text-slate-200 font-medium mt-0.5 leading-snug truncate">
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
                className="text-2xl sm:text-3xl text-white/90 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Statutory Redressal
              </p>
              <p
                className="text-3xl sm:text-4xl text-white leading-tight font-bold"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Transparent Process
              </p>
              <p
                className="text-3xl sm:text-4xl text-sky-400 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Timebound SLA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Grievance Redressal Core Section ── */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Top 2-Column: Designated Officer Card + Mandate & Scope */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Col (5 cols): Designated Grievance Officer Card */}
            <div className="brand-gradient-border-card lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold brand-gradient-text uppercase tracking-wider">
                    Statutory Officer
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200/80 text-[11px] font-semibold text-slate-800 flex items-center gap-1.5 shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 [stroke:url(#grievanceBrandGrad)]" />
                    <span className="brand-gradient-text font-bold">IT Rules 2021</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-950">
                    Mr. Nilesh Trivedi
                  </h3>
                  <p className="text-xs font-bold brand-gradient-text mt-0.5 uppercase tracking-wide">
                    Head of Compliance &amp; Grievance Redressal
                  </p>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs font-mono text-slate-700">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Corporate:</span>
                    <span className="text-slate-900 font-bold text-right">Peers Global Business Media Pvt Ltd</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">CIN:</span>
                    <span className="text-slate-900 font-bold">U22219GJ2022PTC137646</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Headquarters:</span>
                    <span className="text-slate-900 font-medium">Ahmedabad, Gujarat, India</span>
                  </div>
                  <div className="py-1">
                    <span className="text-slate-500 block mb-1">Official Address:</span>
                    <span className="text-slate-800 font-sans text-xs leading-relaxed block">
                      Titanium Square, Thaltej Cross Roads, SG Highway, Ahmedabad 380054
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <GalaxyButton
                  href="mailto:grievance@peersglobal.com"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                >
                  grievance@peersglobal.com
                </GalaxyButton>
              </div>
            </div>

            {/* Right Col (7 cols): Scope & Jurisdiction */}
            <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Jurisdiction &amp; Redressal Scope
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                  What can be escalated to the Grievance Cell?
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  The Grievance Redressal Officer handles formal statutory complaints that require impartial review outside ordinary chapter channels:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    { label: 'Platform & Content Violations', desc: 'Defamation, trademark infringements, or intellectual property misuse' },
                    { label: 'Category & Ethical Disputes', desc: 'Circle seat overlaps, unauthorized solicitation, or code breaches' },
                    { label: 'Data Protection & DPDP Rights', desc: 'Personal data access, correction, or deletion requests' },
                    { label: 'Anti-Harassment & Integrity', desc: 'Conduct violating member safety or professional dignity' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                        <CheckCircle2 className="w-3.5 h-3.5 [stroke:url(#grievanceBrandGrad)] shrink-0" />
                        <span className="brand-gradient-hover-text">{item.label}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/80 border border-slate-200/90 text-xs text-slate-600 font-medium">
                <strong className="brand-gradient-text font-bold">Whistleblower Protection:</strong> All complaints are processed under strict executive confidentiality. Counter-reprisals of any kind result in immediate membership termination.
              </div>
            </div>

          </div>

          {/* SLA Timelines Steps Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Timebound Redressal Protocol
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 mt-1">
                  How your complaint is resolved
                </h3>
              </div>
              <span className="text-xs font-mono font-bold brand-gradient-text px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs shrink-0 self-start sm:self-center">
                Rule 3(2) Compliant
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  step: '01',
                  time: 'Within 24 Hours',
                  title: 'Formal Acknowledgment',
                  desc: 'Every complaint sent to grievance@peersglobal.com receives a verified ticket number and initial intake confirmation within 24 hours.',
                },
                {
                  step: '02',
                  time: 'Days 2 — 10',
                  title: 'Impartial Investigation',
                  desc: 'The Compliance Desk collects facts, reviews correspondence or logs, and gathers statements from involved parties confidentially.',
                },
                {
                  step: '03',
                  time: 'Within 15 Days',
                  title: 'Written Resolution & Action',
                  desc: 'A formal written determination is issued to the complainant detailing findings, corrective actions, or category mediation outcomes.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="animated-glow-card group !rounded-2xl shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <svg className="animated-border-svg !rounded-2xl" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id={`slaCardGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path
                      className={`animated-border-path ${idx % 3 === 1 ? 'animated-border-path-2' : idx % 3 === 2 ? 'animated-border-path-3' : ''}`}
                      style={{ stroke: `url(#slaCardGrad-${idx})` }}
                      d="M 12,0 H 88 Q 100,0 100,12 V 88 Q 100,100 88,100 H 12 Q 0,100 0,88 V 12 Q 0,0 12,0 Z"
                    />
                  </svg>

                  <div className="p-6 rounded-2xl bg-white space-y-3 flex flex-col justify-between h-full w-full">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-slate-200 bg-white shadow-2xs brand-gradient-text">
                          Stage {item.step}
                        </span>
                        <span className="text-xs font-bold text-slate-500">
                          {item.time}
                        </span>
                      </div>
                      <h4 className="text-base font-serif font-bold text-slate-950 brand-gradient-hover-text">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
                  FAIR RESOLUTION &amp; TRUST
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Objective mediation. <br className="hidden sm:inline" />
                <span className="italic brand-gradient-text font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Protecting every member’s dignity.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
                PEERS GLOBAL operates under strict statutory standards ensuring fair representation and unpolluted peer spaces across Bharat.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {[
                  { title: 'The Peers Code', href: '/peers-code' },
                  { title: 'Community Guidelines', href: '/community-guidelines' },
                  { title: 'Privacy Policy', href: '/privacy-policy' }
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
                File Formal Grievance
              </GalaxyButton>

              <GalaxyButton
                href="/peers-code"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto lg:w-full max-w-xs uppercase tracking-wider font-bold"
              >
                Review Peers Code
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


'use client'

import React from 'react'
import Link from 'next/link'
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
  CheckCircle2,
} from 'lucide-react'

export function GrievanceClient() {
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
            <span className="font-bold brand-gradient-text">Grievance Redressal</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>IT Act 2000 Statutory Cell</span>
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
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>STATUTORY COMPLIANCE &amp; REDRESSAL</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white font-serif">
                  Grievance{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Redressal Cell.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Statutory framework in accordance with Information Technology Act, 2000 &amp; Rules 2021.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light">
                Every grievance is treated with executive seriousness, confidentiality, and statutory resolution timelines by our designated compliance cell in Ahmedabad.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#grievance-form"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:opacity-95 transition-all duration-300 group cursor-pointer"
                >
                  <span>Submit Grievance</span>
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="mailto:grievance@peersglobal.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-sm transition-all duration-300"
                >
                  <span>Email Officer Directly</span>
                </a>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-xl pt-6 border-t border-white/15">
                {[
                  { icon: Clock, value: '24 Hours', label: 'Acknowledgment SLA' },
                  { icon: ShieldCheck, value: '15 Days', label: 'Statutory Resolution' },
                  { icon: Scale, value: '100% Secret', label: 'Protected Whistleblower' },
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
            <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold brand-gradient-text uppercase tracking-wider">
                    Statutory Officer
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    IT Rules 2021
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-950">
                    Mr. Nilesh Trivedi
                  </h3>
                  <p className="text-xs font-semibold text-[#1D4ED8] mt-0.5 uppercase tracking-wide">
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
                <a
                  href="mailto:grievance@peersglobal.com"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:from-[#1E40AF] hover:to-[#BE123C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  <span>grievance@peersglobal.com</span>
                </a>
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
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                        <span>{item.label}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-slate-600 font-medium">
                <strong className="text-slate-900 font-semibold">Whistleblower Protection:</strong> All complaints are processed under strict executive confidentiality. Counter-reprisals of any kind result in immediate membership termination.
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
              <span className="text-xs font-mono text-slate-500 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 shrink-0 self-start sm:self-center">
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
                  color: 'from-blue-600 to-indigo-600',
                  badge: 'bg-blue-50 text-[#1D4ED8] border-blue-100'
                },
                {
                  step: '02',
                  time: 'Days 2 — 10',
                  title: 'Impartial Investigation',
                  desc: 'The Compliance Desk collects facts, reviews correspondence or logs, and gathers statements from involved parties confidentially.',
                  color: 'from-indigo-600 to-purple-600',
                  badge: 'bg-purple-50 text-purple-700 border-purple-100'
                },
                {
                  step: '03',
                  time: 'Within 15 Days',
                  title: 'Written Resolution & Action',
                  desc: 'A formal written determination is issued to the complainant detailing findings, corrective actions, or category mediation outcomes.',
                  color: 'from-purple-600 to-rose-600',
                  badge: 'bg-rose-50 text-[#E11D48] border-rose-100'
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${item.badge}`}>
                        Stage {item.step}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        {item.time}
                      </span>
                    </div>
                    <h4 className="text-base font-serif font-bold text-slate-950">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/90">
                  Fair Resolution &amp; Trust
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-white tracking-tight leading-[1.2]">
                Objective mediation. <br />
                <span className="italic text-amber-300 font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Protecting every member’s dignity.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-md">
                PEERS GLOBAL operates under strict statutory standards ensuring fair representation and unpolluted peer spaces across Bharat.
              </p>

              <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Office of Grievance Redressal • Ahmedabad</span>
              </div>
            </div>

            {/* Right Col (7 cols): Horizontal Compact Governance Navigation Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {[
                {
                  code: 'CHARTER 01',
                  title: 'The Peers Code',
                  desc: 'Core philosophy & 10 pillars of conduct',
                  href: '/peers-code',
                  tag: 'Philosophy'
                },
                {
                  code: 'CHARTER 02',
                  title: 'Community Guidelines',
                  desc: 'Sanctity of rooms & anti-pitching covenant',
                  href: '/community-guidelines',
                  tag: 'Room Sanctity'
                },
                {
                  code: 'CHARTER 03',
                  title: 'Privacy Policy',
                  desc: 'DPDP Act 2023 compliance & data rights',
                  href: '/privacy-policy',
                  tag: 'Data Charter'
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


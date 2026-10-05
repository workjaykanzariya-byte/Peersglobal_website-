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
                alt="Peers Global Grievance Secretariat"
                className="size-full object-cover object-center opacity-85"
              />

              {/* Seamless gradient overlays for misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  Statutory Redressal
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Transparent Process
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Timebound SLA
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none hidden sm:block">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    STATUTORY REDRESSAL CELL
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    IT ACT 2000 / RULES 2021
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
                    STATUTORY COMPLIANCE &amp; REDRESSAL
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-slate-950 tracking-tight leading-[1.12] mb-4">
                  Grievance <br />
                  <span className="italic bg-gradient-to-r from-[#1D4ED8] via-[#8B5CF6] to-[#E11D48] bg-clip-text text-transparent font-medium">
                    Redressal Cell.
                  </span>
                </h1>

                {/* Subtitle & Descriptions */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6 max-w-lg">
                  In accordance with the Information Technology Act, 2000 and the Intermediary Guidelines and Digital Media Ethics Code Rules, 2021.
                </p>

                {/* Featured Highlight Quote Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-rose-50/50 border border-blue-100/80 mb-6 max-w-lg">
                  <p className="font-serif italic text-slate-900 text-sm sm:text-base font-medium">
                    “Every grievance is treated with executive seriousness, confidentiality, and statutory resolution timelines.”
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 font-mono text-[11px] shadow-2xs">
                    Designated Compliance Desk
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1D4ED8] border border-blue-100 font-mono text-[11px]">
                    Ahmedabad Secretariat
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* 4-Item Floating Stats Bar */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { val: '24 Hours', label: 'Formal Acknowledgment', sub: 'Instant ticket logging & dispatch', tag: 'Stage 1 SLA' },
              { val: '15 Days', label: 'Statutory Resolution', sub: 'Written investigative finding', tag: 'Stage 2 SLA' },
              { val: '100% Secret', label: 'Protected Mediation', sub: 'Strict executive confidentiality', tag: 'Whistleblower Safe' },
              { val: 'Appeals Desk', label: 'Board of Advisory', sub: 'Secondary institutional escalation', tag: 'Council Review' },
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
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
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
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
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
                <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
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


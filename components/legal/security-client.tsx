'use client'

import React from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  ChevronRight,
  Lock,
  Key,
  Server,
  EyeOff,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Database,
  Cpu,
  Fingerprint,
  FileCode,
  Mail,
  ExternalLink,
  Shield,
  Layers,
} from 'lucide-react'

const SECURITY_PILLARS = [
  {
    num: '01',
    title: 'Encryption in Transit',
    tag: 'TLS 1.3 & HSTS',
    desc: 'All network sessions between web browsers, Unity App mobile clients, and edge endpoints are enforced over TLS 1.3 protocols with strict HSTS preload security.',
    icon: Lock,
    gradient: 'from-blue-600 to-indigo-600',
    badge: 'bg-blue-50 text-[#1D4ED8] border-blue-100',
    specs: [
      'TLS 1.3 forced across all domains and APIs',
      'Perfect Forward Secrecy (PFS) cipher suites',
      'Strict HTTP Strict Transport Security (HSTS)',
      'Automated SSL certificate rollover via Let’s Encrypt',
    ],
  },
  {
    num: '02',
    title: 'Encryption at Rest',
    tag: 'AES-256 Storage',
    desc: 'Member profile records, verified financial turnover data, contact books, and system logs are encrypted using enterprise AES-256 block ciphers with automated KMS key rotation.',
    icon: Key,
    gradient: 'from-purple-600 to-rose-600',
    badge: 'bg-rose-50 text-[#E11D48] border-rose-100',
    specs: [
      'AES-256 cryptographic database level encryption',
      'Envelope encryption via Cloud Key Management',
      'Salted argon2id hashing for all authentication tokens',
      'Isolated encrypted backup snapshots with 30-day retention',
    ],
  },
  {
    num: '03',
    title: 'Indian Data Residency',
    tag: 'Tier-IV Bharat Cloud',
    desc: 'All primary relational databases, operational storage buckets, and cached assets reside strictly within ISO 27001-certified Indian data center regions.',
    icon: Server,
    gradient: 'from-emerald-600 to-teal-600',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    specs: [
      'Geographical isolation within Indian sovereign borders',
      'ISO 27001, SOC 2 Type II certified cloud facilities',
      'Full compliance with DPDP Act 2023 residency mandates',
      'Multi-zone high availability failover in Mumbai & Hyderabad',
    ],
  },
  {
    num: '04',
    title: 'Role-Based Access Control (RBAC)',
    tag: 'Least Privilege',
    desc: 'Zero-trust administrative access with mandatory hardware-bound Multi-Factor Authentication (MFA), ephemeral session tokens, and strict audit trails.',
    icon: Fingerprint,
    gradient: 'from-amber-600 to-orange-600',
    badge: 'bg-amber-50 text-amber-700 border-amber-100',
    specs: [
      'Least-privilege operational model for all personnel',
      'Hardware token / TOTP mandatory for infrastructure admins',
      'Immutable access logs audited on a weekly basis',
      'Automated session revocation upon credential mutation',
    ],
  },
]

const COMPLIANCE_STANDARDS = [
  {
    title: 'DPDP Act 2023',
    subtitle: 'Indian Statutory Standard',
    desc: 'Explicit consent workflows, granular data rights, and swift statutory grievance redressal mechanisms.',
    icon: ShieldCheck,
  },
  {
    title: 'IT Act 2000 & Rules 2021',
    subtitle: 'Intermediary Compliance',
    desc: 'Designated Resident Grievance Officer and time-bound response framework under Rule 3(2).',
    icon: FileCode,
  },
  {
    title: 'Chatham House Protocol',
    subtitle: 'Circle Sanctity Standard',
    desc: 'Contractual peer non-disclosure agreements guarding internal commercial balance sheets and discussion notes.',
    icon: EyeOff,
  },
  {
    title: 'Penetration Audits',
    subtitle: 'Continuous Vulnerability Checks',
    desc: 'Quarterly gray-box security reviews, third-party penetration assessments, and automated daily CVE scanning.',
    icon: Layers,
  },
]

export function SecurityClient() {
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
            <span className="font-bold brand-gradient-text">Security &amp; Data Protection</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>TLS 1.3 &amp; AES-256 Cloud Infrastructure</span>
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
            poster="/images/section_image/circle-roundtable-topdown.jpg"
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
                <span>INFRASTRUCTURE &amp; TRUST ARCHITECTURE</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white font-serif">
                  Security &amp; Data{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Protection.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Enterprise-grade cryptography, sovereign Indian data residency, and zero-trust access architecture.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light">
                How we protect founder credentials, commercial ledgers, and communication privacy across the Peers Global digital infrastructure.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#security-pillars"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:opacity-95 transition-all duration-300 group cursor-pointer"
                >
                  <span>Explore Security Pillars</span>
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="#compliance-standards"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-sm transition-all duration-300"
                >
                  <span>Compliance Standards</span>
                </a>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-xl pt-6 border-t border-white/15">
                {[
                  { icon: Lock, value: 'TLS 1.3', label: 'Transit Encryption' },
                  { icon: Key, value: 'AES-256', label: 'Storage Encryption' },
                  { icon: Server, value: 'Tier-IV Bharat', label: 'Indian Data Residency' },
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
                Encryption At Rest
              </p>
              <p
                className="text-3xl sm:text-4xl text-white leading-tight font-bold"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Indian Residency
              </p>
              <p
                className="text-3xl sm:text-4xl text-sky-400 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Zero Breach Standard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Core Technical Pillars Grid ── */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                DEFENSE-IN-DEPTH ARCHITECTURE
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Four Pillars of Platform Integrity
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Every interaction on Peers Global is governed by zero-trust architecture, hardened cryptographic layers, and continuous monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SECURITY_PILLARS.map((pillar, idx) => {
              const IconComponent = pillar.icon
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-9 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100/80 text-[#1D4ED8] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono font-bold text-slate-400 block">
                            PILLAR {pillar.num}
                          </span>
                          <h3 className="text-xl font-serif font-bold text-slate-950">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>
                      <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border ${pillar.badge} shrink-0 hidden sm:inline-block`}>
                        {pillar.tag}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <p className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-400">
                        Technical Safeguards
                      </p>
                      <ul className="space-y-1.5">
                        {pillar.specs.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Compliance & Standards 4-Grid */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Governance &amp; Audits
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 mt-1">
                  Statutory Alignments &amp; Security Protocol
                </h3>
              </div>
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full shrink-0 self-start sm:self-center">
                Continuous Compliance
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {COMPLIANCE_STANDARDS.map((std, idx) => {
                const IconComponent = std.icon
                return (
                  <div key={idx} className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 space-y-2 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-[#1D4ED8] flex items-center justify-center shadow-2xs">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-950">{std.title}</h4>
                      <p className="text-[11px] font-mono text-slate-400 font-semibold">{std.subtitle}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{std.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Vulnerability Disclosure Action Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-50/70 via-white to-rose-50/70 border border-blue-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>Responsible Disclosure Desk</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                Found a vulnerability or security bug?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                We take platform security very seriously. If you have discovered an issue in our web or mobile application, report it immediately to our security response team.
              </p>
            </div>
            <a
              href="mailto:security@peersglobal.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0"
            >
              <Mail className="w-4 h-4 text-amber-300" />
              <span>security@peersglobal.com</span>
            </a>
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
                  Infrastructure Trust &amp; Privacy
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-white tracking-tight leading-[1.2]">
                Military-grade safeguards. <br />
                <span className="italic text-amber-300 font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Protecting founders around the clock.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-md">
                PEERS GLOBAL operates under strict DPDP Act 2023 and ISO 27001 data residency principles across Bharat.
              </p>

              <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Security Engineering Desk • Ahmedabad HQ</span>
              </div>
            </div>

            {/* Right Col (7 cols): Horizontal Compact Governance Navigation Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {[
                {
                  code: 'CHARTER 01',
                  title: 'Privacy Policy',
                  desc: 'DPDP Act 2023 data processing charter',
                  href: '/privacy-policy',
                  tag: 'Data Rights'
                },
                {
                  code: 'CHARTER 02',
                  title: 'Terms of Use',
                  desc: 'Platform covenants & enterprise terms',
                  href: '/terms-of-use',
                  tag: 'Terms'
                },
                {
                  code: 'CHARTER 03',
                  title: 'Grievance Redressal',
                  desc: 'IT Act statutory officer & SLA timelines',
                  href: '/grievance',
                  tag: 'Statutory Cell'
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



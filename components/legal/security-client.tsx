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
                src="/images/section_image/circle-roundtable-topdown.jpg"
                alt="Peers Global Security and Data Protection"
                className="size-full object-cover object-center opacity-85"
              />

              {/* Seamless gradient overlays for misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  Encryption At Rest
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Indian Residency
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Zero Breach Standard
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none hidden sm:block">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    INFRASTRUCTURE TRUST
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    TIER-IV DATA CENTERS
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
                    INFRASTRUCTURE &amp; TRUST ARCHITECTURE
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-slate-950 tracking-tight leading-[1.12] mb-4">
                  Security &amp; Data <br />
                  <span className="italic bg-gradient-to-r from-[#1D4ED8] via-[#8B5CF6] to-[#E11D48] bg-clip-text text-transparent font-medium">
                    Protection.
                  </span>
                </h1>

                {/* Subtitle & Descriptions */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6 max-w-lg">
                  How we protect founder credentials, commercial ledgers, and communication privacy across the Peers Global digital infrastructure.
                </p>

                {/* Featured Highlight Quote Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-rose-50/50 border border-blue-100/80 mb-6 max-w-lg">
                  <p className="font-serif italic text-slate-900 text-sm sm:text-base font-medium">
                    “All member records and transaction ledgers are isolated, strictly encrypted, and stored within Indian sovereign borders.”
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 font-mono text-[11px] shadow-2xs">
                    ISO 27001 Data Centers
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1D4ED8] border border-blue-100 font-mono text-[11px]">
                    Continuous Vulnerability Auditing
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* 4-Item Floating Stats Bar */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { val: 'TLS 1.3', label: 'In-Transit Encryption', sub: 'Forced SSL & HSTS headers', tag: 'Transport Layer' },
              { val: 'AES-256', label: 'At-Rest Security', sub: 'Encrypted databases & tokens', tag: 'Data Storage' },
              { val: 'Tier-IV Bharat', label: 'Data Residency', sub: 'Hosted in Indian cloud regions', tag: 'Sovereignty' },
              { val: 'Bug Bounty', label: 'Responsible Disclosure', sub: 'Direct security engineering desk', tag: 'Vulnerability SLA' },
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



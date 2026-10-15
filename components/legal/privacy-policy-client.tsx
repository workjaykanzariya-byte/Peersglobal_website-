'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  Lock,
  ChevronRight,
  ShieldCheck,
  Eye,
  Database,
  UserCheck,
  FileText,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Server,
  Download,
  Share2,
  Bell,
  RefreshCw,
  Mail,
  Smartphone,
  Check,
  ArrowUpRight,
} from 'lucide-react'

const PRIVACY_SECTIONS = [
  {
    num: '01',
    heading: 'Information We Collect',
    icon: Database,
    tag: 'Collection Scope',
    color: 'from-blue-500 to-sky-500',
    pastelBg: 'bg-blue-50',
    pastelBorder: 'border-blue-100',
    iconColor: 'text-[#1D4ED8]',
    body: [
      'We collect verified identity data (full legal name, primary email address, direct telephone number, photograph), corporate credentials (company legal name, GSTIN, CIN, turnover tier, industry vertical), and community contribution records (introductions facilitated, masterclasses presented, playbooks authored).',
      'Technical information such as hardware device identifiers, operating system build, IP addresses, access timestamp logs, and Unity App interaction metrics are collected strictly to maintain network integrity and prevent unauthorized directory scraping.',
    ],
  },
  {
    num: '02',
    heading: 'Purpose & Use of Member Data',
    icon: Eye,
    tag: 'Ecosystem Use',
    color: 'from-sky-500 to-indigo-500',
    pastelBg: 'bg-sky-50',
    pastelBorder: 'border-sky-100',
    iconColor: 'text-sky-600',
    body: [
      'Your verified business profile is presented exclusively within the encrypted Unity App Peer Directory, enabling vetted founders and enterprise leaders to search, connect, and collaborate with you directly.',
      'We NEVER sell, lease, monetize, or broker member data to external advertisers, telemarketers, or commercial list brokers. All data remains strictly bounded within the Peers Global leadership ecosystem.',
    ],
  },
  {
    num: '03',
    heading: 'Compliance with DPDP Act, 2023',
    icon: ShieldCheck,
    tag: 'Statutory Compliance',
    color: 'from-emerald-500 to-teal-500',
    pastelBg: 'bg-emerald-50',
    pastelBorder: 'border-emerald-100',
    iconColor: 'text-emerald-600',
    body: [
      'In strict accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act) of the Republic of India, data is processed solely under verifiable consent for legitimate community enablement and collaboration purposes.',
      'Members retain statutory rights under Section 11 of the DPDP Act: the right to access summaries of personal data processed, request correction or erasure, designate a nominee in the event of incapacity, and file grievances with our Data Protection Officer.',
    ],
  },
  {
    num: '04',
    heading: 'Data Security & Storage Standards',
    icon: Lock,
    tag: 'AES-256 & ISO 27001',
    color: 'from-purple-500 to-pink-500',
    pastelBg: 'bg-purple-50',
    pastelBorder: 'border-purple-100',
    iconColor: 'text-purple-600',
    body: [
      'All member communication and directory indexes are encrypted in transit via TLS 1.3 protocol and encrypted at rest utilizing enterprise AES-256 encryption.',
      'Our dedicated server clusters and database repositories are hosted in Tier-IV, ISO/IEC 27001 certified sovereign cloud facilities situated within the territorial jurisdiction of the Republic of India.',
    ],
  },
  {
    num: '05',
    heading: 'Data Retention & Account Erasure',
    icon: RefreshCw,
    tag: 'Lifecycle Governance',
    color: 'from-amber-500 to-orange-500',
    pastelBg: 'bg-amber-50',
    pastelBorder: 'border-amber-100',
    iconColor: 'text-amber-600',
    body: [
      'Personal data is actively retained for the duration of your active fellowship and Circle tenure. Upon voluntary resignation or membership conclusion, active directory profiles are de-indexed within 48 hours.',
      'Statutory financial ledgers, tax compliance records, and audited transaction documentation are archived in sealed immutable vaults for the mandatory duration stipulated by the Ministry of Corporate Affairs and Indian tax statutes.',
    ],
  },
  {
    num: '06',
    heading: 'Unity App Permissions & Telemetry',
    icon: Smartphone,
    tag: 'Device & Mobile Sandbox',
    color: 'from-rose-500 to-red-500',
    pastelBg: 'bg-rose-50',
    pastelBorder: 'border-rose-100',
    iconColor: 'text-[#E11D48]',
    body: [
      'The Unity App requests runtime permissions exclusively when user-initiated: Camera and Gallery (for profile pictures and Circle presentation uploads), Push Notifications (for direct peer introductions and Circle alerts), and Biometrics (for FaceID / Fingerprint session lock).',
      'The Unity App does NOT access your background geolocation, address book contacts, external browser history, or microphone without explicit per-instance user activation.',
    ],
  },
  {
    num: '07',
    heading: 'Designated Grievance & Data Protection Officer',
    icon: UserCheck,
    tag: 'Direct Oversight Desk',
    color: 'from-blue-600 to-rose-600',
    pastelBg: 'bg-gradient-to-tr from-blue-50 to-rose-50',
    pastelBorder: 'border-blue-200',
    iconColor: 'text-[#1D4ED8]',
    body: [
      'In compliance with Section 12 of the DPDP Act 2023, Peers Global has designated a dedicated Grievance Officer and Data Protection Officer for prompt statutory resolution of all privacy matters.',
      'Official Secretariat Contact:\nData Protection Officer, Peers Global Business Media Private Limited\nEmail: privacy@peersglobal.com\nCorporate Office: Ahmedabad, Gujarat, India\nStatutory Turnaround Time: Direct resolution within 48 business hours.',
    ],
  },
]

export function PrivacyPolicyClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100 selection:text-[#E11D48]">
      {/* Global Brand Gradient Definition for Icons */}
      <svg width="0" height="0" className="absolute pointer-events-none" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="privacyBrandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
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
            <span className="font-bold brand-gradient-text">Privacy Policy</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-50/80 to-rose-50/80 border border-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 [stroke:url(#privacyBrandGrad)]" />
              <span className="brand-gradient-text">DPDP Act 2023 Compliant</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Signature Hero Section (Home & Circles Master Design Layout) ── */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-0 pb-12 sm:pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Home-style full-bleed hero with video backdrop */}
          <div className="min-h-[520px] lg:min-h-[580px] flex items-center">

            {/* Media Background Layer (Right ~60% fading into white on the left) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
            >
              {/* Active Video Background matching Home & Circles page */}
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/circles-hero-new.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover object-center"
              />

              {/* Dark scrim matching the home hero */}
              <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)] pointer-events-none" />
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl lg:max-w-2xl flex flex-col items-start text-left">

                {/* Eyebrow with brand gradient bar removed */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    DATA PROTECTION &amp; SOVEREIGNTY
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold text-white tracking-tight leading-[1.14] mb-4">
                  Privacy &amp; Data <br />
                  <span className="brand-gradient-text">
                    Protection Charter.
                  </span>
                </h1>

                {/* Subtitle & Descriptions */}
                <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed mb-6 max-w-2xl">
                  How Peers Global collects, encrypts, and safeguards member personal and enterprise credentials under statutory compliance with the DPDP Act 2023.
                </p>

                {/* Featured Highlight Quote Card */}
                <div className="border-l-2 border-[#E11D48] pl-3 py-0.5 mb-8 max-w-xl">
                  <p className="italic text-white/95 text-sm sm:text-base font-medium">
                    &ldquo;We never sell, rent, or broker member data to third-party advertisers. Founder trust is our primary bedrock.&rdquo;
                  </p>
                  <p className="text-xs text-slate-300 mt-1 font-medium">
                    Hosted in ISO 27001 sovereign data centers within the Republic of India.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
                  <GalaxyButton
                    href="#clauses"
                    variant="primary"
                    size="md"
                  >
                    Read Policy Clauses
                  </GalaxyButton>

                  <GalaxyButton
                    href="#unity-app-privacy"
                    variant="secondary"
                    size="md"
                    icon={false}
                  >
                    Unity App Security
                  </GalaxyButton>

                  <GalaxyButton
                    href="mailto:privacy@peersglobal.com"
                    variant="secondary"
                    size="md"
                    icon={false}
                  >
                    Contact DPO
                  </GalaxyButton>
                </div>

                {/* Quick Info Bar */}
                <div className="flex items-center gap-6 text-xs text-slate-300 pt-2 border-t border-white/15 w-full max-w-lg">
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 [stroke:url(#privacyBrandGrad)]" />
                    <span>Last Revised: September 2026</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-4 h-4 [stroke:url(#privacyBrandGrad)]" />
                    <span>Ahmedabad Jurisdiction</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* 4-Item Floating Stats Bar */}
          <div className="relative z-10 mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { val: 'DPDP 2023', label: 'Statutory Compliance', sub: 'Consent-based data framework' },
              { val: 'AES-256', label: 'Enterprise Encryption', sub: 'Encrypted in transit & at rest' },
              { val: 'Zero Ads', label: 'No Data Brokering', sub: 'Strictly internal ecosystem' },
              { val: '48h DPO', label: 'Statutory Redressal', sub: 'Dedicated Grievance Officer' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="font-serif text-lg sm:text-xl font-bold brand-gradient-text">
                  {stat.val}
                </div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">{stat.label}</div>
                <div className="text-[11px] text-slate-500 font-normal">{stat.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ALREADY A PEER? / UNITY APP PRIVACY & PERMISSIONS ── */}
      <section id="unity-app-privacy" className="py-14 sm:py-18 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-xl border border-slate-800">
            {/* Subtle radial ambient glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/15">
                  <Smartphone className="w-3.5 h-3.5 [stroke:url(#privacyBrandGrad)]" />
                  <span className="brand-gradient-text font-bold uppercase">MOBILE DATA PRIVACY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  Unity App Member Directory <span className="brand-gradient-text">Privacy</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
                  Your profile and contact coordinates are visible <span className="brand-gradient-text font-bold">only to verified fellow members</span> within the authenticated Unity App. You can toggle direct message permissions, adjust phone number visibility, or manage directory indexing instantly in your profile settings.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 [stroke:url(#privacyBrandGrad)] shrink-0" />
                    <span>Biometric App Lock</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 [stroke:url(#privacyBrandGrad)] shrink-0" />
                    <span>Granular Privacy Toggles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 [stroke:url(#privacyBrandGrad)] shrink-0" />
                    <span>One-Tap Data Export</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  size="md"
                >
                  Download Unity App
                </GalaxyButton>
                <GalaxyButton
                  href="/membership"
                  variant="secondary"
                  size="md"
                >
                  Explore Membership
                </GalaxyButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Policy Sections with Sticky Index & Interactive Navigation ── */}
      <section id="clauses" className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="flex items-center justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                COMPLETE LEGAL ARTICLES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
              Statutory Privacy &amp; <span className="brand-gradient-text">Data Provisions</span>
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              Clear, transparent clauses structured with zero obfuscation or hidden dark patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left Column: Sticky Table of Contents & Quick Contacts */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">

              {/* Table of Contents Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <FileText className="w-4 h-4 [stroke:url(#privacyBrandGrad)]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Charter Navigation
                  </span>
                </div>

                <nav className="space-y-1">
                  {PRIVACY_SECTIONS.map((sec) => {
                    return (
                      <a
                        key={sec.num}
                        href={`#clause-${sec.num}`}
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
                    )
                  })}
                </nav>
              </div>

              {/* DPO Quick Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-50/70 to-rose-50/40 border border-blue-100/80 shadow-2xs space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 [stroke:url(#privacyBrandGrad)]" />
                  <span className="text-xs font-mono font-bold uppercase brand-gradient-text">
                    Direct Grievance Channel
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Have inquiries regarding DPDP Act 2023 provisions or your directory visibility?
                </p>
                <div className="pt-2">
                  <GalaxyButton
                    href="mailto:privacy@peersglobal.com"
                    variant="primary"
                    size="sm"
                    className="w-full justify-center"
                  >
                    privacy@peersglobal.com
                  </GalaxyButton>
                </div>
              </div>

              {/* Legal Jurisdiction Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Server className="w-4 h-4 [stroke:url(#privacyBrandGrad)]" />
                  <span className="brand-gradient-text font-bold">Sovereign Data Storage</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                  All databases and backups are hosted in ISO/IEC 27001 certified data centers within Ahmedabad and Mumbai, Bharat.
                </p>
              </div>

            </div>

            {/* Right Column: Structured Clause Cards */}
            <div className="lg:col-span-8 space-y-6">
              {PRIVACY_SECTIONS.map((sec) => {
                const IconComponent = sec.icon
                return (
                  <div
                    id={`clause-${sec.num}`}
                    key={sec.heading}
                    className="brand-gradient-border-card group p-7 sm:p-9 rounded-3xl shadow-xs space-y-4 scroll-mt-24 cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-50 to-rose-50 border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                          <IconComponent className="w-5 h-5 [stroke:url(#privacyBrandGrad)] transition-transform duration-300" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold brand-gradient-text">
                              CLAUSE {sec.num}
                            </span>
                            <span className="text-[11px] font-semibold text-slate-500">
                              {sec.tag}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-950 tracking-tight mt-0.5 brand-gradient-hover-text transition-colors duration-300">
                            {sec.heading}
                          </h3>
                        </div>
                      </div>

                      <div className="shrink-0 hidden sm:block">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-gradient-to-r from-blue-50/80 to-rose-50/80 px-2.5 py-1 rounded-full border border-slate-200 group-hover:border-blue-300 transition-colors">
                          <Check className="w-3 h-3 [stroke:url(#privacyBrandGrad)]" />
                          <span className="brand-gradient-text font-bold">Active Policy</span>
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm text-slate-600 group-hover:text-slate-700 leading-relaxed whitespace-pre-line font-normal transition-colors">
                      {sec.body.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                )
              })}

              {/* Quick Support Banner */}
              <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/80 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
                <div>
                  <h3 className="text-lg font-serif font-bold text-slate-950">Need clarification on your personal data?</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">Reach out directly to our Data Protection Officer and Compliance Secretariat.</p>
                </div>
                <GalaxyButton
                  href="mailto:privacy@peersglobal.com"
                  variant="primary"
                  size="sm"
                  className="shrink-0"
                >
                  Contact DPO Desk
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
                Protected data. Transparent governance. <br className="hidden sm:inline" />
                <span className="italic brand-gradient-text font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Built on enduring founder trust.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
                PEERS GLOBAL operates under strict DPDP Act 2023 statutory compliance and ISO 27001 sovereign infrastructure across Bharat.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {[
                  { title: 'Terms of Use', href: '/terms-of-use' },
                  { title: 'Community Guidelines', href: '/community-guidelines' },
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
                href="mailto:privacy@peersglobal.com"
                variant="primary"
                size="md"
                className="w-full sm:w-auto lg:w-full max-w-xs uppercase tracking-wider font-bold"
              >
                Contact Data Protection Officer
              </GalaxyButton>

              <GalaxyButton
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto lg:w-full max-w-xs uppercase tracking-wider font-bold"
              >
                Open Unity App Security
              </GalaxyButton>

              <div className="flex gap-2.5 w-full max-w-xs">
                <Link
                  href="/contact"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.10] text-slate-200 hover:text-white font-semibold text-[11px] uppercase tracking-wider transition-all border border-white/10 text-center"
                >
                  Contact Desk
                </Link>
                <Link
                  href="/membership"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.10] text-slate-200 hover:text-white font-semibold text-[11px] uppercase tracking-wider transition-all border border-white/10 text-center"
                >
                  Membership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

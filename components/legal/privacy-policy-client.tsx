'use client'

import React from 'react'
import Link from 'next/link'
import {
  Lock,
  ChevronRight,
  ShieldCheck,
  Eye,
  Database,
  UserCheck,
  FileText,
  ArrowRight,
} from 'lucide-react'

const PRIVACY_SECTIONS = [
  {
    heading: '1. Information We Collect',
    body: [
      'We collect personal identity data (name, email, phone number, photograph), business details (company name, GSTIN, CIN, turnover tier, industry category), and community contribution records (introductions made, masterclasses taught, playbooks published).',
      'Technical information such as device identifiers, IP addresses, log files, and app interaction data are collected to ensure platform security and optimize app performance.',
    ],
  },
  {
    heading: '2. Purpose and Use of Data',
    body: [
      'Your verified business profile is displayed within the Unity App Peer Directory to enable vetted entrepreneurs to search, connect, and collaborate with you.',
      'We never sell, rent, or lease member data to external advertisers, telemarketers, or commercial brokers. Data is strictly utilized for community enablement and communication.',
    ],
  },
  {
    heading: '3. Compliance with DPDP Act, 2023',
    body: [
      'In full accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act) of India, we process data only with explicit consent and for lawful community facilitation purposes.',
      'Members maintain the statutory right to review, update, correct, or request deletion of their personal information from active digital indexes upon membership termination.',
    ],
  },
  {
    heading: '4. Data Security and Retention',
    body: [
      'All member data is encrypted in transit using TLS 1.3 and at rest using AES-256 standards. Our database infrastructure is hosted in ISO 27001-certified data centers within the Republic of India.',
      'Data is retained for the active duration of your membership plus statutory accounting and compliance retention periods mandated by Indian law.',
    ],
  },
  {
    heading: '5. Grievance & Data Protection Officer',
    body: [
      'For questions regarding privacy practices or data access requests, contact our designated Grievance Officer:',
      'Name: Data Protection Officer, Peers Global Business Media Private Limited\nEmail: privacy@peersglobal.com\nOffice: Ahmedabad, Gujarat, India.',
    ],
  },
]

export function PrivacyPolicyClient() {
  return (
    <div className="homepage-sections-root min-h-screen bg-white text-[#0f131a] antialiased">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Privacy Policy</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 border-b border-slate-200/80 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
              DATA PROTECTION &amp; PRIVACY
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f131a] leading-tight">
            <span>Privacy</span> <span className="brand-gradient-text">Policy</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            How Peers Global collects, safeguards, and respects member personal and commercial data in full compliance with Indian privacy laws.
          </p>

          <div className="text-xs font-mono text-slate-500 pt-2 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200/90 font-semibold text-slate-700 shadow-2xs">
              Compliant with DPDP Act, 2023
            </span>
            <span>Last Revised: September 2026</span>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 md:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {PRIVACY_SECTIONS.map((sec) => (
            <div
              key={sec.heading}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:shadow-md transition-all"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f131a] tracking-tight">
                {sec.heading}
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed whitespace-pre-line font-normal">
                {sec.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Quick Support Banner */}
          <div className="p-7 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/80 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-[#0f131a]">Need clarification on your data?</h3>
              <p className="text-xs text-slate-600 mt-0.5">Reach out directly to our Data Protection &amp; Compliance desk.</p>
            </div>
            <Link
              href="mailto:privacy@peersglobal.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-md shrink-0"
            >
              Contact DPO
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


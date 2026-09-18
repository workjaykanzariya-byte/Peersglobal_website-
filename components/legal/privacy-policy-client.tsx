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
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] antialiased">
      {/* Breadcrumb */}
      <div className="border-b border-[#EADFC7]/60 bg-[#FAF6EE]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-neutral-600">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Privacy Policy</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-14 border-b border-[#EADFC7]/60 overflow-hidden bg-[#FAF7F0]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E8] border border-[#E8DFC9] text-xs font-bold uppercase tracking-wider text-[#8C6422]">
            <Lock className="w-3.5 h-3.5 text-[#8C6422]" />
            DATA PROTECTION
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#162039] tracking-tight leading-tight font-bold">
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
            How Peers Global collects, safeguards, and respects member personal and commercial data in full compliance with Indian privacy laws.
          </p>

          <div className="text-xs font-mono text-neutral-500 pt-1">
            Last Revised: September 2026 · Compliant with DPDP Act, 2023
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-14 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {PRIVACY_SECTIONS.map((sec) => (
            <div
              key={sec.heading}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-3"
            >
              <h2 className="text-lg sm:text-xl font-serif font-bold text-[#142038]">
                {sec.heading}
              </h2>
              <div className="space-y-2 text-xs sm:text-sm text-neutral-700 leading-relaxed whitespace-pre-line">
                {sec.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

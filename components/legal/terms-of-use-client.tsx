'use client'

import React from 'react'
import Link from 'next/link'
import {
  FileText,
  ChevronRight,
  ShieldCheck,
  Scale,
  Building,
  AlertCircle,
  HelpCircle,
  ArrowRight,
} from 'lucide-react'

const TERMS_SECTIONS = [
  {
    heading: '1. Acceptance of Terms',
    body: [
      'By accessing or using the website peersglobal.com, associated web portals, and the Unity App mobile application (collectively, the "Platform"), operated by Peers Global Business Media Private Limited ("Peers Global", "we", "us", or "our"), you agree to be bound by these Terms of Use.',
      'If you do not agree to these terms, you must not access or use the Platform or attend any Peers Global Circle meetings.',
    ],
  },
  {
    heading: '2. Eligibility and Account Registration',
    body: [
      'To access community features and the Unity App, you must be a registered business owner, partner, director, or designated enterprise executive.',
      'You are responsible for safeguarding your login credentials and are solely liable for all activities that occur under your verified account.',
    ],
  },
  {
    heading: '3. Intellectual Property Rights',
    body: [
      'All materials on this Platform, including the LSR Growth Model, 10 Forms of Collaboration, proprietary lexicon, software architecture, branding, graphics, and video content are the exclusive intellectual property of Peers Global Business Media Private Limited.',
      'You are granted a limited, revocable, non-transferable license to access community content solely for your personal enterprise development.',
    ],
  },
  {
    heading: '4. Acceptable Platform Use',
    body: [
      'You agree not to harvest member contact data, scrape platform directories, post defamatory or infringing content, or use automated systems without express prior written consent.',
      'Violation of acceptable use guidelines may result in immediate account suspension, forfeiture of community standing, and legal recourse.',
    ],
  },
  {
    heading: '5. Limitation of Liability',
    body: [
      'To the fullest extent permitted by applicable Indian law, Peers Global shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from member-to-member contracts, commercial transactions, or business ventures.',
      'Our aggregate liability for any direct claims arising under these terms shall not exceed the membership fee paid by you in the preceding 12 months.',
    ],
  },
  {
    heading: '6. Governing Law & Jurisdiction',
    body: [
      'These Terms shall be governed by and construed in accordance with the laws of India.',
      'Any disputes or legal actions arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts located at Ahmedabad, Gujarat, India.',
    ],
  },
]

export function TermsOfUseClient() {
  return (
    <div className="homepage-sections-root min-h-screen bg-white text-[#0f131a] antialiased">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Terms of Use</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 border-b border-slate-200/80 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
              LEGAL AGREEMENT &amp; GOVERNANCE
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f131a] leading-tight">
            <span>Terms of</span> <span className="brand-gradient-text">Use</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            Governing rules for accessing the Peers Global platform, website, mobile product, and digital collaboration tools.
          </p>

          <div className="text-xs font-mono text-slate-500 pt-2 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200/90 font-semibold text-slate-700 shadow-2xs">
              CIN: U22219GJ2022PTC137646
            </span>
            <span>Effective: September 2026 · Ahmedabad, Gujarat</span>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {TERMS_SECTIONS.map((sec) => (
            <div
              key={sec.heading}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:shadow-md transition-all"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f131a] tracking-tight">
                {sec.heading}
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed font-normal">
                {sec.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Statutory Information Box */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 text-xs sm:text-sm text-slate-700">
            <h3 className="font-bold text-[#0f131a] text-base">
              Corporate &amp; Contact Details
            </h3>
            <p className="leading-relaxed text-slate-600">
              <strong className="text-slate-900">Entity:</strong> Peers Global Business Media Private Limited
              <br />
              <strong className="text-slate-900">CIN:</strong> U22219GJ2022PTC137646 | <strong className="text-slate-900">GST:</strong> 24AANCP4546L1ZY
              <br />
              <strong className="text-slate-900">Registered Office:</strong> Ahmedabad, Gujarat 380015, India.
              <br />
              <strong className="text-slate-900">Contact Email:</strong> legal@peersglobal.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


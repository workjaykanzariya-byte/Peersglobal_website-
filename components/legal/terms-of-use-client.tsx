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
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] antialiased">
      {/* Breadcrumb */}
      <div className="border-b border-[#EADFC7]/60 bg-[#FAF6EE]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-neutral-600">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Terms of Use</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-14 border-b border-[#EADFC7]/60 overflow-hidden bg-[#FAF7F0]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E8] border border-[#E8DFC9] text-xs font-bold uppercase tracking-wider text-[#8C6422]">
            <Scale className="w-3.5 h-3.5 text-[#8C6422]" />
            LEGAL AGREEMENT
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#162039] tracking-tight leading-tight font-bold">
            Terms of Use
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
            Governing rules for accessing the Peers Global platform, website, mobile product, and digital collaboration tools.
          </p>

          <div className="text-xs font-mono text-neutral-500 pt-1">
            Effective Date: September 2026 · CIN: U22219GJ2022PTC137646 · Ahmedabad, Gujarat
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-14 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {TERMS_SECTIONS.map((sec) => (
            <div
              key={sec.heading}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-3"
            >
              <h2 className="text-lg sm:text-xl font-serif font-bold text-[#142038]">
                {sec.heading}
              </h2>
              <div className="space-y-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {sec.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Statutory Information Box */}
          <div className="p-6 rounded-2xl bg-[#FAF4E8] border border-[#E8DFC9] space-y-2 text-xs text-neutral-700">
            <h3 className="font-serif font-bold text-[#142038] text-sm">
              Corporate &amp; Contact Details
            </h3>
            <p>
              <strong>Entity:</strong> Peers Global Business Media Private Limited
              <br />
              <strong>CIN:</strong> U22219GJ2022PTC137646 | <strong>GST:</strong> 24AANCP4546L1ZY
              <br />
              <strong>Registered Office:</strong> Ahmedabad, Gujarat 380015, India.
              <br />
              <strong>Contact Email:</strong> legal@peersglobal.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import React from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  ChevronRight,
  FileCheck,
  CreditCard,
  Ban,
  Clock,
  Users,
  Building,
  ArrowRight,
} from 'lucide-react'

const MEMBERSHIP_CLAUSES = [
  {
    heading: '1. Membership Eligibility & Screening',
    body: [
      'Membership in Peers Global Circles is open exclusively to founders, managing directors, enterprise partners, and authorized promoters of verified commercial enterprises.',
      'All prospective members undergo admission screening by the Circle Director and the Membership Experience Committee. Category suitability and commercial reputation are rigorously vetted.',
    ],
  },
  {
    heading: '2. Seat Category Exclusivity',
    body: [
      'Each Circle reserves one seat per business category. Members are admitted under an approved primary business classification.',
      'A member may not solicit business or position themselves in another active Peer’s reserved category within the Circle.',
    ],
  },
  {
    heading: '3. Fees, Invoicing & Renewal',
    body: [
      'Annual membership fees grant participation in monthly Circle sessions, regional conclaves, digital directory visibility, and Unity App features.',
      'Membership fees are payable annually in advance. Renewal is subject to attendance compliance, verified giving records, and ongoing adherence to the Peers Code.',
    ],
  },
  {
    heading: '4. Attendance & Representation Mandate',
    body: [
      'Active participation is foundational. Members are expected to personally attend the 12 scheduled monthly Circle meetings each year.',
      'Missing more than two sessions without prior committee leave or failing to send an authorized executive deputy leads to immediate category forfeiture.',
    ],
  },
  {
    heading: '5. Termination & Category Revocation',
    body: [
      'Peers Global reserves the right to suspend or revoke membership for non-payment, chronic absenteeism, breach of confidentiality, or actions injurious to the harmony of the community.',
      'Upon termination, access to the Unity App member directory and local Circle seats ceases immediately.',
    ],
  },
]

export function MembershipTermsClient() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-[#1A1A1A] antialiased">
      {/* Breadcrumb */}
      <div className="border-b border-[#EADFC7]/60 bg-[#FAF6EE]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-neutral-600">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <Link href="/membership" className="hover:text-neutral-900 transition-colors">
            Membership
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Membership Terms</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-14 border-b border-[#EADFC7]/60 overflow-hidden bg-[#FAF7F0]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E8] border border-[#E8DFC9] text-xs font-bold uppercase tracking-wider text-[#8C6422]">
            <FileCheck className="w-3.5 h-3.5 text-[#8C6422]" />
            MEMBER COVENANT
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#162039] tracking-tight leading-tight font-bold">
            Membership Terms
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
            Rights, category protections, attendance obligations, and community standards governing membership in Peers Global.
          </p>

          <div className="text-xs font-mono text-neutral-500 pt-1">
            Peers Global Business Media Private Limited · Ahmedabad, Gujarat
          </div>
        </div>
      </section>

      {/* Clauses */}
      <section className="py-14 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {MEMBERSHIP_CLAUSES.map((clause) => (
            <div
              key={clause.heading}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-3"
            >
              <h2 className="text-lg sm:text-xl font-serif font-bold text-[#142038]">
                {clause.heading}
              </h2>
              <div className="space-y-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {clause.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="p-6 rounded-2xl bg-[#FAF4E8] border border-[#E8DFC9] space-y-3 text-xs sm:text-sm text-neutral-700">
            <h3 className="font-serif font-bold text-[#142038] text-base">
              Non-Transferability
            </h3>
            <p className="leading-relaxed">
              Membership seats are issued specifically to the approved founder and their nominated commercial entity. Seats cannot be sub-licensed, reassigned, or transferred to unvetted third parties.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

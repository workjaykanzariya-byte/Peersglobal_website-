'use client'

import React from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  ChevronRight,
  FileCheck,
  Users,
  Lock,
  Calendar,
  AlertCircle,
  MessageSquare,
  Ban,
  ArrowRight,
} from 'lucide-react'

const GUIDELINES = [
  {
    title: '1. No Hard Pitching or Direct Solicitation',
    desc: 'Circle meetings and community forums are never sales stages. You may not broadcast unsolicited sales brochures, bulk WhatsApp messages, or cold pitch fellow members. Collaboration grows from genuine value and mutual need.',
    icon: Ban,
  },
  {
    title: '2. Category Exclusivity & Fair Representation',
    desc: 'Each seat represents a single business category in a Circle. Members must strictly represent their approved primary line of business and refrain from encroaching on categories allocated to fellow Peers.',
    icon: ShieldCheck,
  },
  {
    title: '3. Meeting Attendance & Punctuality',
    desc: 'Trust requires regular presence. Members must attend monthly Circle meetings. Missing three consecutive sessions without formal leave approved by the Membership Experience Committee leads to seat review.',
    icon: Calendar,
  },
  {
    title: '4. Absolute Meeting Confidentiality',
    desc: 'Information regarding business challenges, balance sheets, founder disputes, or proprietary vendor connections shared in Circle sessions must remain strictly confidential.',
    icon: Lock,
  },
  {
    title: '5. Verified Impact Logging',
    desc: 'All collaborations, introductions, and mentorship actions logged in the Unity App must be truthful and confirmed by the counterparty. Falsifying impact metrics is grounds for immediate termination.',
    icon: FileCheck,
  },
  {
    title: '6. Civil Discourse & Dispute Resolution',
    desc: 'Any commercial disagreement between members must be addressed professionally. If needed, members may seek mediation through their Circle Director and the Peers Board of Advisory.',
    icon: Users,
  },
]

export function CommunityGuidelinesClient() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-[#1A1A1A] antialiased">
      {/* Breadcrumb */}
      <div className="border-b border-[#EADFC7]/60 bg-[#FAF6EE]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-neutral-600">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <Link href="/peers-code" className="hover:text-neutral-900 transition-colors">
            Governance
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Community Guidelines</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-14 border-b border-[#EADFC7]/60 overflow-hidden bg-[#FAF7F0]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E8] border border-[#E8DFC9] text-xs font-bold uppercase tracking-wider text-[#8C6422]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8C6422]" />
            CONDUCT &amp; PARTICIPATION
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#162039] tracking-tight leading-tight font-bold">
            Community Guidelines
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl font-normal">
            Standards for healthy rooms, protected categories, respectful interaction, and authentic contribution across all Circles and the Unity App.
          </p>

          <div className="text-xs font-mono text-neutral-500">
            Enforced by the Membership Experience Committee &amp; Circle Directors
          </div>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section className="py-14 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GUIDELINES.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D6EFD] flex items-center justify-center border border-blue-100">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#142038]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF4E8] border border-[#E8DFC9] space-y-2 text-xs sm:text-sm text-neutral-700">
            <h4 className="font-serif font-bold text-[#142038] text-base">
              Reporting a Violation
            </h4>
            <p className="leading-relaxed">
              If a member experiences inappropriate solicitation, confidentiality breach, or conduct violating the Peers Code, report the matter privately to your Circle Director or write to <strong className="text-neutral-900">grievance@peersglobal.com</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

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
    <div className="homepage-sections-root min-h-screen bg-white text-[#0f131a] antialiased">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/peers-code" className="hover:text-slate-900 transition-colors">
            Governance
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Community Guidelines</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 border-b border-slate-200/80 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
              CONDUCT &amp; PARTICIPATION STANDARDS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f131a] leading-tight">
            <span>Community</span> <span className="brand-gradient-text">Guidelines</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            Standards for healthy rooms, protected categories, respectful interaction, and authentic contribution across all Circles and the Unity App.
          </p>

          <div className="text-xs font-mono text-slate-500 pt-2">
            Enforced by the Membership Experience Committee &amp; Circle Directors
          </div>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section className="py-16 md:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GUIDELINES.map((item, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-[#1D4ED8] flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f131a] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2 text-sm text-slate-700">
            <h4 className="font-bold text-[#0f131a] text-base">
              Reporting a Violation
            </h4>
            <p className="leading-relaxed text-slate-600">
              If a member experiences inappropriate solicitation, confidentiality breach, or conduct violating the Peers Code, report the matter privately to your Circle Director or write to <strong className="text-slate-900 font-semibold">grievance@peersglobal.com</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


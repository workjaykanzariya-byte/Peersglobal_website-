'use client'

import React from 'react'
import Link from 'next/link'
import {
  ShieldAlert,
  ChevronRight,
  FileText,
  AlertTriangle,
  Scale,
  Users,
  Coins,
  Calendar,
  Building,
  CheckCircle2,
} from 'lucide-react'

const DISCLAIMER_SECTIONS = [
  {
    number: '01',
    title: 'General information only',
    body: 'Content on this website and in the Unity App is general information. It does not constitute professional, financial, legal, tax, investment or business advice. Obtain independent professional advice before acting on anything.',
  },
  {
    number: '02',
    title: 'No guarantee of outcome',
    body: 'Peers Global provides access to a community, a platform and a structure for collaboration. We do not guarantee business, revenue, referrals, introductions, partnerships, funding, media coverage, speaking opportunities, leadership appointment, or any commercial outcome. Any figures, stories, testimonials or examples published are historic accounts of individual experience and are not a representation of what any member will receive.',
  },
  {
    number: '03',
    title: 'Member-to-member dealings',
    body: 'Peers Global is not a party to any dealing between members. We do not verify, endorse or warrant any member’s business, credentials, financial standing, capability or the quality of their work. We accept no liability for any loss, dispute or claim arising from any dealing between members. Members are strictly responsible for their own due diligence.',
  },
  {
    number: '04',
    title: 'Member content',
    body: 'Stories, recommendations, reviews, playbooks and posts contributed by members represent the personal view of the individual, not of Peers Global. We do not verify claims made in member-contributed content.',
  },
  {
    number: '05',
    title: 'Third parties',
    body: 'Products, services and tools featured in the Marketplace, the Watchlist and member recommendations are provided by independent third parties. We do not control, verify or warrant them. Your dealings with any third party are entirely at your own risk.',
  },
  {
    number: '06',
    title: 'Recognition system',
    body: 'Impact Score, Peer Standing and Peers Coin are community recognition mechanisms. They hold no monetary value, cannot be exchanged for fiat currency or financial consideration, and cannot be transferred. Earning rates, redemption values and availability are determined by Peers Global and may change at any time.',
  },
  {
    number: '07',
    title: 'Events and programmes',
    body: 'Programme schedules, speakers, format, venue and timing are subject to change. Events may be rescheduled or moved online based on administrative or safety conditions. Event registration fees are strictly non-refundable.',
  },
  {
    number: '08',
    title: 'Circle membership',
    body: 'Circle membership is subject to approval by the Circle Director and the Membership Experience Committee. Category availability is not guaranteed and is subject to verification and periodic review.',
  },
  {
    number: '09',
    title: 'Leadership appointments',
    body: 'Leadership appointments are made at the sole decision of Peers Global and its appointed territory leadership. Appointment, reappointment, tenure and duration of any role are not guaranteed.',
  },
  {
    number: '10',
    title: 'Impact figures',
    body: 'Impact figures and metric totals are compiled from actions logged and verified by active members within the Unity App ledger.',
  },
  {
    number: '11',
    title: 'Modifications & Changes',
    body: 'We reserve the right to amend this disclaimer and associated community policies at any time. The current revised version is always published here with the date of modification.',
  },
]

export function DisclaimerClient() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-[#1A1A1A] antialiased">
      {/* ─── Breadcrumb ─── */}
      <div className="border-b border-[#EADFC7]/60 bg-[#FAF6EE]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-neutral-600">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Disclaimer</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-14 border-b border-[#EADFC7]/60 overflow-hidden bg-[#FAF7F0]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E8] border border-[#E8DFC9] text-xs font-bold uppercase tracking-wider text-[#8C6422]">
            <ShieldAlert className="w-3.5 h-3.5 text-[#8C6422]" />
            LEGAL NOTICE &amp; DISCLOSURES
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#162039] tracking-tight leading-tight font-bold">
            Disclaimer
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
            Please read these terms and legal boundaries carefully before using the Peers Global platform, website, mobile applications, or participating in Circle meetings.
          </p>

          <div className="text-xs font-mono text-neutral-500 pt-1">
            Last Updated: September 2026 · Peers Global Business Media Private Limited
          </div>
        </div>
      </section>

      {/* ─── 11 Disclaimer Articles ─── */}
      <section className="py-14 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {DISCLAIMER_SECTIONS.map((section) => (
            <div
              key={section.number}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-2.5"
            >
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-md bg-[#FAF4E8] border border-[#E8DFC9] text-xs font-mono font-bold text-[#8C6422]">
                  {section.number}
                </span>
                <h2 className="text-lg sm:text-xl font-serif font-bold text-[#142038]">
                  {section.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed pl-0 sm:pl-9">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Associated Governance Links ─── */}
      <section className="py-12 bg-[#FAF7F0]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs uppercase tracking-wider text-neutral-500 font-bold">
            Related Legal &amp; Governance Documents
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-[#0D6EFD]">
            <Link href="/terms-of-use" className="hover:underline">
              Terms of Use
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/membership-terms" className="hover:underline">
              Membership Terms
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/community-guidelines" className="hover:underline">
              Community Guidelines
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  RotateCcw,
  Sparkles,
  Users2,
  FileSearch,
  TrendingUp,
  Clock,
  ArrowRight,
  HelpCircle,
  Plus,
  Minus,
  ChevronRight,
  Handshake,
  Award,
} from 'lucide-react'

interface FAQItem {
  q: string
  a: string
}

const FAQS: FAQItem[] = [
  {
    q: 'Do I need Global Membership before a Circle seat?',
    a: 'Yes. Global Membership is the base layer of the network and is a prerequisite for any Circle seat. The two fees are separate and both are annual.',
  },
  {
    q: 'What does category exclusivity actually mean?',
    a: 'One member per business category per city cohort. If a Circle already holds a commercial-interiors contractor in Ahmedabad, a second one is waitlisted or routed to an adjacent Circle. This rule is what makes structured referrals inside the room possible.',
  },
  {
    q: 'What happens if my application is not accepted?',
    a: 'If your category is currently full or your stage does not match the specific circle cohort, your application is either placed on priority waitlist or recommended for an alternative circle or membership tier. Any circle seat deposit is 100% refunded immediately.',
  },
  {
    q: 'Can I move between Circles?',
    a: 'Yes. If you expand to another city or wish to transition to an industry-specific circle, you can request a transfer subject to category vacancy in the destination room.',
  },
  {
    q: 'Is the fee refundable?',
    a: 'Yes. We provide a 100% refund guarantee if your seat application is not approved during the 3-step governance review.',
  },
  {
    q: 'How much time does Circle Membership really take?',
    a: 'Circle meetings take place bi-weekly for 90 to 120 minutes. Beyond meetings, members spend 1-2 hours monthly giving referrals, attending 1-on-1 peer sessions, or engaging through the Unity App.',
  },
]

export function MembershipPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0) // First FAQ open by default

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* ─── Top Breadcrumb Navigation ────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Membership</span>
          </nav>
        </div>
      </div>

      {/* ─── 1. HERO SECTION (Matching Homepage & Screenshot) ─────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFCFF] via-[#FFFFFF] to-[#F8FAFC] border-b border-slate-200/80 pt-10 sm:pt-14 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow with brand gradient */}
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  MEMBERSHIP
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-serif font-bold text-[#0B192C] tracking-tight leading-[1.12]">
                Everything that comes with being part of this{' '}
                <span className="text-[#D97706]">community.</span>
              </h1>

              {/* Subtitle / Description */}
              <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Explore the community before you commit. Choose from Explorer (Free for 90 Days), Global Membership, or claim a governed seat with category exclusivity as a Circle Member.
              </p>

              {/* 3 Value Pillars Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {/* Pillar 1 */}
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-11 h-11 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 border border-[#FDE68A] shadow-2xs">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900 leading-tight">
                      Transparent
                    </h4>
                    <p className="text-[15px] text-slate-500 leading-tight">Governance</p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-11 h-11 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 border border-[#FDE68A] shadow-2xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900 leading-tight">
                      Category
                    </h4>
                    <p className="text-[15px] text-slate-500 leading-tight">Exclusivity</p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-11 h-11 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 border border-[#FDE68A] shadow-2xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900 leading-tight">
                      100% Refund
                    </h4>
                    <p className="text-[15px] text-slate-500 leading-tight">Guarantee</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Column with Floating Quote Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 group">
                <Image
                  src="/images/membership-hero-peers.jpg"
                  alt="Peers Global Entrepreneurs in Community Meeting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

                {/* Floating Quote Card matching Screenshot */}
                <div className="absolute bottom-5 right-5 left-5 sm:left-auto sm:max-w-[280px] bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200/90 shadow-2xl text-center space-y-2">
                  <span className="text-[#D97706] text-3xl font-serif font-bold block leading-none">
                    “
                  </span>
                  <p className="text-[15px] font-serif font-bold text-slate-900 leading-snug">
                    A community where entrepreneurs open doors for each other.
                  </p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    — Peers Global
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. THE 3-STEP GOVERNANCE PROCESS ─────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3.5">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] text-xs font-bold uppercase tracking-wider shadow-2xs">
              THE 3-STEP GOVERNANCE PROCESS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B192C] tracking-tight">
              How We Screen Every Application
            </h2>

            <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed">
              Three rigorous screening checkpoints to guarantee room quality, stage alignment, and category exclusivity in your city cohort.
            </p>
          </div>

          {/* 3 Governance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Audit Step 1 */}
            <div className="bg-white rounded-3xl p-7 lg:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between space-y-6 group">
              <div className="space-y-5">
                {/* Top Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-full bg-[#0062D2] text-white font-bold text-base flex items-center justify-center shadow-sm">
                    01
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0062D2] border border-blue-100 text-xs font-bold uppercase tracking-wider">
                    AUDIT STEP 1
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs group-hover:scale-105 transition-transform">
                    <FileSearch className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0B192C]">
                    Category Availability
                  </h3>
                </div>

                {/* Body Text */}
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  We audit whether your specific business category seat is open in your target city cohort. If already claimed, we discuss waitlisting or an adjacent room.
                </p>
              </div>

              {/* Bottom Guarantee Check */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[15px] font-bold text-emerald-700">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                <span>Guarantees Zero Competition</span>
              </div>
            </div>

            {/* Card 2: Room Fit Step 2 */}
            <div className="bg-white rounded-3xl p-7 lg:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between space-y-6 group">
              <div className="space-y-5">
                {/* Top Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-full bg-[#0062D2] text-white font-bold text-base flex items-center justify-center shadow-sm">
                    02
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0062D2] border border-blue-100 text-xs font-bold uppercase tracking-wider">
                    ROOM FIT STEP 2
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs group-hover:scale-105 transition-transform">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0B192C]">
                    Business Stage Fit
                  </h3>
                </div>

                {/* Body Text */}
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  Evaluates whether your operational scale matches the room. Circles group business owners at similar milestones (scaling, growth, or enterprise) for maximum strategic value.
                </p>
              </div>

              {/* Bottom Guarantee Check */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[15px] font-bold text-emerald-700">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                <span>Peer-Level Maturity Match</span>
              </div>
            </div>

            {/* Card 3: Founder Review Step 3 */}
            <div className="bg-white rounded-3xl p-7 lg:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between space-y-6 group">
              <div className="space-y-5">
                {/* Top Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-full bg-[#D97706] text-white font-bold text-base flex items-center justify-center shadow-sm">
                    03
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] text-xs font-bold uppercase tracking-wider">
                    FOUNDER REVIEW STEP 3
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 border border-[#FDE68A] shadow-2xs group-hover:scale-105 transition-transform">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0B192C]">
                    Contribution Intent
                  </h3>
                </div>

                {/* Body Text */}
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  A 1-to-1 interview with the Circle Founder to confirm that you are joining to give referrals and actively contribute to the peer community.
                </p>
              </div>

              {/* Bottom Guarantee Check */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[15px] font-bold text-emerald-700">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                <span>Induction & Seat Allocation</span>
              </div>
            </div>
          </div>

          {/* Bottom Fast-Track Decision Banner */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-slate-950">
                  7-Day Fast-Track Decision Guarantee
                </h4>
                <p className="text-[15px] text-slate-500">
                  Applications reviewed and resolved within 7 business days.
                </p>
              </div>
            </div>

            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0062D2] hover:bg-[#0052CC] text-white text-[15px] font-bold shadow-md hover:shadow-lg transition-all active:scale-98 shrink-0"
            >
              <span>Apply for Seat Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 3. MEMBERSHIP FAQ SECTION ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-[#D97706]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D97706] block">
                  QUESTIONS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B192C] tracking-tight leading-tight">
                Membership FAQ
              </h2>

              <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed">
                Clear answers to help you choose the right path into the community.
              </p>

              {/* Still have a question card */}
              <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xs mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900">
                      Still have a question?
                    </h4>
                    <p className="text-[15px] text-slate-500">
                      We are here to help you.
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-[15px] font-bold shadow-2xs transition-all cursor-pointer"
                >
                  <span>Contact Membership Team</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </Link>
              </div>
            </div>

            {/* Right Accordions Column */}
            <div className="lg:col-span-7 space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx
                return (
                  <div
                    key={idx}
                    className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200 bg-white shadow-2xs hover:border-blue-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50/70 transition-colors cursor-pointer"
                    >
                      <span className="text-[15px] sm:text-base font-serif font-bold text-slate-950 pr-4 leading-snug">
                        {faq.q}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-[15px] text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. BOTTOM COMMUNITY BANNER (Matching Homepage & Screenshot) ── */}
      <section className="bg-[#0B192C] text-white py-14 sm:py-18 relative overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Be Part of What’s Next
            </h2>
            <p className="text-[15px] text-slate-300 max-w-xl">
              Join a global community of entrepreneurs who give, grow and build together.
            </p>
          </div>

          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0062D2] hover:bg-[#0052CC] text-white font-bold text-[15px] shadow-lg hover:shadow-xl transition-all active:scale-98 shrink-0"
          >
            <span>Start Your Membership Journey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

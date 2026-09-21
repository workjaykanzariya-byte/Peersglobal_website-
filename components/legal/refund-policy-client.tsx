'use client'

import React from 'react'
import Link from 'next/link'
import {
  RotateCcw,
  ChevronRight,
  AlertCircle,
  CreditCard,
  Calendar,
  CheckCircle2,
} from 'lucide-react'

export function RefundPolicyClient() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-[#1A1A1A] antialiased">
      {/* Breadcrumb */}
      <div className="border-b border-[#EADFC7]/60 bg-[#FAF6EE]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-neutral-600">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Refund &amp; Cancellation Policy</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-14 border-b border-[#EADFC7]/60 overflow-hidden bg-[#FAF7F0]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E8] border border-[#E8DFC9] text-xs font-bold uppercase tracking-wider text-[#8C6422]">
            <RotateCcw className="w-3.5 h-3.5 text-[#8C6422]" />
            FINANCIAL POLICY
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#162039] tracking-tight leading-tight font-bold">
            Refund &amp; Cancellation Policy
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
            Clear guidelines on Circle seat commitments, event registrations, and transaction handling.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#142038]">
              1. Annual Membership Fees
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
              <p>
                Circle seats operate on strict category exclusivity. When a founder is admitted into a Circle, that business category is immediately locked and denied to other applicants across the territory.
              </p>
              <p>
                Consequently, <strong>all annual membership fees are non-refundable once an application has been formally approved and processed</strong>. Voluntarily stepping down, missing meetings, or resigning from a Circle does not entitle a member to a prorated or full refund.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#142038]">
              2. Conclaves, Summits &amp; Event Passes
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
              <p>
                Registrations for MindMeld conclaves, regional retreats, and the Annual Awards &amp; Recognition Ceremony are non-refundable due to venue commitments and advance hospitality reservations.
              </p>
              <p>
                If you are unable to attend an event for emergency reasons, you may nominate a senior executive or co-founder from your enterprise to attend in your place by notifying event operations at least 48 hours prior to the event.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#142038]">
              3. Duplicate or Accidental Payments
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
              <p>
                In the rare event of a technical glitch where a payment is processed multiple times or an unauthorized deduction occurs, the excess payment will be refunded in full.
              </p>
              <p>
                Please report duplicate transactions within 7 business days to <strong>accounts@peersglobal.com</strong> along with transaction references. Verified refunds will be initiated to the original payment source within 7-10 working days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

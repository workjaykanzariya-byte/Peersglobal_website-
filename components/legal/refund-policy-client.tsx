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
  ArrowRight,
} from 'lucide-react'

export function RefundPolicyClient() {
  return (
    <div className="homepage-sections-root min-h-screen bg-white text-[#0f131a] antialiased">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Refund &amp; Cancellation Policy</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 border-b border-slate-200/80 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
              FINANCIAL &amp; SEAT COMMITMENT POLICY
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f131a] leading-tight">
            <span>Refund &amp; Cancellation</span> <span className="brand-gradient-text">Policy</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            Clear guidelines on Circle seat commitments, event registrations, and transaction handling.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:shadow-md transition-all">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f131a] tracking-tight">
              1. Annual Membership Fees
            </h2>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                Circle seats operate on strict category exclusivity. When a founder is admitted into a Circle, that business category is immediately locked and denied to other applicants across the territory.
              </p>
              <p>
                Consequently, <strong className="text-slate-900 font-semibold">all annual membership fees are non-refundable once an application has been formally approved and processed</strong>. Voluntarily stepping down, missing meetings, or resigning from a Circle does not entitle a member to a prorated or full refund.
              </p>
            </div>
          </div>

          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:shadow-md transition-all">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f131a] tracking-tight">
              2. Conclaves, Summits &amp; Event Passes
            </h2>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                Registrations for MindMeld conclaves, regional retreats, and the Annual Awards &amp; Recognition Ceremony are non-refundable due to venue commitments and advance hospitality reservations.
              </p>
              <p>
                If you are unable to attend an event for emergency reasons, you may nominate a senior executive or co-founder from your enterprise to attend in your place by notifying event operations at least 48 hours prior to the event.
              </p>
            </div>
          </div>

          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:shadow-md transition-all">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f131a] tracking-tight">
              3. Duplicate or Accidental Payments
            </h2>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                In the rare event of a technical glitch where a payment is processed multiple times or an unauthorized deduction occurs, the excess payment will be refunded in full.
              </p>
              <p>
                Please report duplicate transactions within 7 business days to <strong className="text-slate-900 font-semibold">accounts@peersglobal.com</strong> along with transaction references. Verified refunds will be initiated to the original payment source within 7-10 working days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


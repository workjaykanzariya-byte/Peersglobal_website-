import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Check, HelpCircle, UserCheck, TrendingUp, Compass, Clock, Award } from 'lucide-react'
import { Card, Cta, Eyebrow, SectionHead, Tag } from '@/components/site/ui'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import { COMPARE_ROWS, MEMBERSHIP_FAQS, TIERS } from '@/lib/data/membership'
import { SITE } from '@/lib/data/site'

export const metadata: Metadata = {
  title: 'Membership Pathways | Peers Global',
  description:
    'Three ways into Peers Global: Explorer (free), Global Membership (₹24,000/yr), and Circle Membership (₹96,000/yr). Transparent pricing, category exclusivity, real accountability.',
}

export default function MembershipPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* 1. World-Class Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1b3a] via-[#122347] to-background text-white pt-20 pb-20 border-b border-[var(--border)]">
        <div className="absolute -top-32 -left-32 size-[500px] rounded-full bg-primary/25 blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 right-0 size-[400px] rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />

        <div className="shell relative z-10 flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold tracking-wider uppercase shadow-md">
            <Sparkles className="size-3.5 text-[#D4AF37]" />
            TRANSPARENT GOVERNED PATHWAYS
          </div>

          <h1 className="display text-3xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight leading-snug">
            Everything that comes with being <br />
            <span className="bg-gradient-to-r from-white via-blue-100 to-[#D4AF37] bg-clip-text text-transparent">
              part of this community.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
            Explore the community before you commit. Choose from Explorer (Free for 90 Days), Global Membership, or claim a governed seat with category exclusivity as a Circle Member.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-medium text-white/70 border-t border-white/10 w-full max-w-xl">
            <span className="flex items-center gap-2 text-white font-semibold">
              <CheckCircle2 className="size-4 text-emerald-400" /> Zero Hidden Fees
            </span>
            <span className="flex items-center gap-2 text-white font-semibold">
              <CheckCircle2 className="size-4 text-[#D4AF37]" /> Category Exclusivity
            </span>
            <span className="flex items-center gap-2 text-white font-semibold">
              <CheckCircle2 className="size-4 text-blue-400" /> 100% Refund Guarantee
            </span>
          </div>
        </div>
      </section>

      {/* 4. WORLD-CLASS STEP-BY-STEP SCREENING PROCESS (Apple / Linear Stepper Style) */}
      <section className="section py-24 border-b border-[var(--border)] bg-background">
        <div className="shell flex flex-col gap-16">
          <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-[#0b1b3a] bg-[#D4AF37] shadow-md">
              <ShieldCheck className="size-4" />
              THE 3-STEP GOVERNANCE PROCESS
            </span>
            <h2 className="display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--ink)] tracking-tight leading-snug">
              How We Screen Every Application
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              Three rigorous screening checkpoints to guarantee room quality, stage alignment, and category exclusivity in your city cohort.
            </p>
          </div>

          {/* Stepper Timeline Progress Track */}
          <div className="grid gap-8 md:grid-cols-3 relative">
            {/* Step 1 */}
            <div className="relative flex flex-col gap-6 p-8 rounded-3xl border border-[var(--border)] bg-card shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-white font-semibold text-lg shadow-md group-hover:scale-110 transition-transform">
                  01
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 uppercase">
                  Audit Step 1
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="display text-xl font-semibold text-[var(--ink)] group-hover:text-primary transition-colors flex items-center gap-2">
                  <Compass className="size-5 text-primary" />
                  Category Availability
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We audit whether your specific business category seat is open in your target city cohort. If already claimed, we discuss waitlisting or an adjacent room.
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-[var(--border)] flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="size-4 shrink-0" />
                Guarantees Zero Competition
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col gap-6 p-8 rounded-3xl border border-[var(--border)] bg-card shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-600 text-white font-semibold text-lg shadow-md group-hover:scale-110 transition-transform">
                  02
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold text-blue-600 bg-blue-500/10 border border-blue-500/20 uppercase">
                  Room Fit Step 2
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="display text-xl font-semibold text-[var(--ink)] group-hover:text-blue-600 transition-colors flex items-center gap-2">
                  <TrendingUp className="size-5 text-blue-600" />
                  Business Stage Fit
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Evaluates whether your operational scale matches the room. Circles group business owners at similar milestones (scaling, growth, or enterprise) for maximum strategic value.
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-[var(--border)] flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400">
                <CheckCircle2 className="size-4 shrink-0" />
                Peer-Level Maturity Match
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col gap-6 p-8 rounded-3xl border-2 border-[#D4AF37]/50 bg-gradient-to-b from-[#D4AF37]/10 via-card to-card shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-[#D4AF37] text-[#0b1b3a] font-semibold text-lg shadow-md group-hover:scale-110 transition-transform">
                  03
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold text-[#0b1b3a] dark:text-[#D4AF37] bg-[#D4AF37]/20 uppercase">
                  Founder Review Step 3
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="display text-xl font-semibold text-[var(--ink)] group-hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                  <UserCheck className="size-5 text-[#D4AF37]" />
                  Contribution Intent
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  A 1-to-1 interview with the Circle Founder to confirm that you are joining to give referrals and actively contribute to the peer community.
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-[#D4AF37]/30 flex items-center gap-2 text-xs font-extrabold text-[#D4AF37]">
                <CheckCircle2 className="size-4 shrink-0 text-[#D4AF37]" />
                Induction & Seat Allocation
              </div>
            </div>
          </div>

          {/* 7-Day Guarantee Banner */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl border border-[var(--border)] bg-muted/40 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600 font-bold shrink-0">
                <Clock className="size-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-foreground">7-Day Fast-Track Decision Guarantee</span>
                <span className="text-xs text-muted-foreground">Applications reviewed and resolved within 7 business days</span>
              </div>
            </div>

            <Link
              href="/contact?intent=membership"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-primary text-white font-bold hover:bg-blue-600 active:scale-95 transition-all shadow-lg shadow-blue-600/25 shrink-0"
            >
              Apply for Seat Review
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="section py-20 border-b border-[var(--border)] bg-muted/40">
        <div className="shell flex flex-col gap-10">
          <SectionHead eyebrow="Questions" title="Membership FAQ" />
          <ul className="mx-auto w-full max-w-3xl flex flex-col gap-0 divide-y divide-[var(--border)]">
            {MEMBERSHIP_FAQS.map((faq) => (
              <li key={faq.q} className="py-5">
                <p className="font-bold text-foreground mb-1 text-base">{faq.q}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Cta href="/faqs" variant="quiet">All FAQs →</Cta>
          </div>
        </div>
      </section>

      {/* 6. Closing CTA */}
      <ClosingCtaSection
        eyebrow={SITE.closing}
        title="Start as an Explorer. No fee, no commitment."
        subtitle=""
        description=""
        primaryButtonText="Request a guest seat"
        primaryButtonHref="/contact?intent=explorer"
        secondaryButtonText="Apply for Circle seat"
        secondaryButtonHref="/contact?intent=circle"
      />
    </div>
  )
}

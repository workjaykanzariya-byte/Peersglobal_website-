import type { Metadata } from 'next'
import { HelpCircle } from 'lucide-react'
import { Cta } from '@/components/site/ui'
import { FaqAccordion } from '@/components/site/faq-accordion'
import { FAQS } from '@/lib/data/faqs'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Peers Global',
  description:
    'Frequently asked questions about Peers Global — Membership, Circles, Leadership, Unity App, Events, and Payments & Refunds.',
}

export default function FaqsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* High-Contrast Luxury Hero Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1b3a] via-[#122347] to-[#0b1b3a] text-white pt-16 pb-16 border-b border-[var(--border)] shadow-xl">
        <div className="absolute -top-24 -left-24 size-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 size-80 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />

        <div className="shell relative z-10 flex flex-col gap-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-[#0b1b3a] bg-[#D4AF37] self-start shadow-md">
            <HelpCircle className="size-3.5" />
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h1 className="display text-3xl sm:text-4xl lg:text-5xl text-white font-semibold leading-snug tracking-tight drop-shadow-sm">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-medium">
            Structured answers covering our membership pathways, Circle governance, leadership roles, Unity App platform, and events. If your question is not listed here, please contact our support team.
          </p>
        </div>
      </section>

      {/* Main FAQ Accordion Section */}
      <section className="section py-16 border-b border-[var(--border)]">
        <div className="shell">
          <FaqAccordion groups={FAQS} />
        </div>
      </section>

      {/* Contact Support Footer */}
      <section className="section-sm py-10 border-b border-[var(--border)] bg-muted/40">
        <div className="shell flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-foreground">Still have an unanswered question?</span>
            <span className="text-xs text-muted-foreground">Our executive team responds directly to all member enquiries within 2 working days.</span>
          </div>
          <Cta href="/contact" variant="primary" className="font-bold rounded-xl shadow-md">
            Contact Support →
          </Cta>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, XCircle, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react'
import { Cta, Eyebrow, SectionHead } from '@/components/site/ui'
import { LsrSection } from '@/components/home/sections'
import { SITE } from '@/lib/data/site'

export const metadata: Metadata = {
  title: 'Why Peers Global | Collaboration Over Networking',
  description:
    'Networking gives you contacts. Collaboration gives you outcomes. Why traditional business networking runs out, and how trusted circles work differently.',
}

export default function WhyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1b3a] via-[#122347] to-[#0b1b3a] text-white pt-20 pb-20 border-b border-[var(--border)]">
        <div className="absolute -top-24 -left-24 size-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 size-80 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />

        <div className="shell relative z-10 flex flex-col gap-6 max-w-4xl mx-auto text-center">
          <Eyebrow tone="gold">COLLABORATION OVER NETWORKING</Eyebrow>
          <h1 className="display text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-snug">
            Collaboration is not a soft skill.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-400">
              It is a growth strategy.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
            Most entrepreneurs are told to build a network. Very few are shown how to build a circle. The difference decides how fast you grow.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Cta href="/circles" variant="gold" size="lg">Find Your Circle</Cta>
            <Cta href="/events" variant="onDark" size="lg">Visit a Meeting as a Guest</Cta>
          </div>
        </div>
      </section>

      {/* 2. Why Networking Stops Working (The Treadmill) */}
      <section className="section py-16 border-b border-[var(--border)]">
        <div className="shell grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-6">
            <SectionHead
              eyebrow="The Treadmill Problem"
              title="Why networking stops working"
              lede="Networking is not useless. It is incomplete, and it has an expiry date almost nobody names."
            />
            <div className="flex flex-col gap-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Here is how it ends. You join a group. In the first year you meet everyone in it. You collect introductions, pass a few referrals, get a few back. By the second year the room is familiar. By the third, you have met every person there and exhausted what they can offer. Nothing went wrong. You simply finished.
              </p>
              <p>
                So you leave, join another group, and start again. That is the treadmill most business owners are on, and it is why so many conclude that networking does not work. It worked. It just ran out.
              </p>
            </div>
          </div>

          <div className="surface p-8 border border-[var(--border)] bg-card rounded-3xl shadow-sm flex flex-col gap-6">
            <h3 className="display text-xl font-bold text-foreground">What Collaboration Adds</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Collaboration does not run out, because it is not one thing. The same person who referred you a customer in year one can become your joint venture partner in year three, your distributor in year five, and the person who tells you the truth about your succession plan in year eight.
            </p>
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-foreground text-sm font-medium">
              “We are not trying to introduce you to more people. We are trying to put you in a room with the right forty, and keep you there long enough for something real to happen.”
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why This Matters More in India (MSME Samadhaan Stats) */}
      <section className="section py-16 bg-muted/30 border-b border-[var(--border)]">
        <div className="shell flex flex-col gap-10 max-w-4xl mx-auto">
          <SectionHead
            eyebrow="Market Context"
            title="Why this matters more in India"
            lede="There is a practical reason trust networks carry unusual weight in this market."
            align="center"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="surface p-6 border border-[var(--border)] bg-card rounded-2xl flex flex-col gap-3">
              <div className="flex items-center gap-2 text-red-500 font-mono font-bold text-xs uppercase">
                <AlertTriangle className="size-4" /> Market Risk Realities
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When you sell to a new customer, you risk whether they will pay. When you buy from a new supplier, you risk whether they will deliver. Where legal enforcement is slow, contracts carry that risk. Where it is slow, you carry it.
              </p>
            </div>

            <div className="surface p-6 border border-amber-500/30 bg-amber-500/5 rounded-2xl flex flex-col gap-3">
              <div className="flex items-center gap-2 text-amber-600 font-mono font-bold text-xs uppercase">
                <ShieldCheck className="size-4" /> Government Data Proof
              </div>
              <p className="text-sm text-foreground font-semibold">
                India&apos;s MSME Samadhaan portal had received 2,56,892 applications involving claims worth ₹55,244 crore up to June 2026. Around 58,000 had been resolved.
              </p>
              <p className="text-xs text-muted-foreground">
                Choosing partners through trusted relationships is the most efficient risk management available to a small business in this market. Peers Global exists to make that deliberate instead of accidental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Conditions Collaboration Needs */}
      <section className="section py-16 border-b border-[var(--border)]">
        <div className="shell flex flex-col gap-12">
          <SectionHead
            eyebrow="The Framework"
            title="The three conditions collaboration needs"
            lede="Collaboration is easy to admire and difficult to produce. It needs three things, and it fails whenever any one is missing."
            align="center"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'The same people, repeatedly',
                desc: 'Trust is a function of time and exposure. It cannot be manufactured at a single event, however good the event is.',
              },
              {
                title: 'No competitors in the room',
                desc: 'If the person across the table wants your customer, you will not tell them the truth. One seat per business category, always.',
              },
              {
                title: 'Someone accountable',
                desc: 'Left alone, a room of business owners will have a pleasant conversation and go home. Every circle has a Director whose job is to make sure introductions actually get made.',
              },
            ].map((item, idx) => (
              <div key={idx} className="surface p-8 border border-[var(--border)] bg-card rounded-3xl flex flex-col gap-4">
                <span className="text-xs font-mono font-bold text-primary uppercase">Condition 0{idx + 1}</span>
                <h3 className="display text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How Peers Global is Different */}
      <section className="section py-16 bg-muted/40 border-b border-[var(--border)]">
        <div className="shell flex flex-col gap-12">
          <SectionHead
            eyebrow="Our Differences"
            title="How Peers Global is different"
            align="center"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Ten ways to collaborate', desc: 'Referral networks give you one. We define ten, and every circle is built to deliver all of them.' },
              { title: 'Industry circles', desc: 'Eighteen circles by industry and by goal, so the room already understands your constraints.' },
              { title: 'Our own media platform', desc: 'Member stories published on VyapaarJagat. No other community in this category can give you public credibility.' },
              { title: 'A technology layer', desc: 'Unity keeps the circle working between meetings, so commitments do not get forgotten.' },
              { title: 'Measured in lives', desc: 'We count lives impacted, not logos on a page. Contribution is the status currency here.' },
              { title: 'Priced for real businesses', desc: '₹18,000 a year. Deliberately within reach of the business owners we were built for.' },
            ].map((diff, idx) => (
              <div key={idx} className="surface p-6 border border-[var(--border)] bg-card rounded-2xl flex flex-col gap-3">
                <h4 className="display text-base font-bold text-foreground">{diff.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. What We Do NOT Do */}
      <section className="section py-16 border-b border-[var(--border)]">
        <div className="shell flex flex-col gap-8 max-w-3xl mx-auto">
          <SectionHead
            eyebrow="Our Boundaries"
            title="What we do not do"
            align="center"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'We do not sell leads. Referrals come from members who choose to give them, not from a database.',
              'We do not run open networking events as the product. Events are how you meet us. Circles are where the value is.',
              'We do not admit two businesses from the same category into one circle, however much either of them wants to join.',
              'We do not measure ourselves by member count. A community of ten thousand people who do not help each other is not a community.',
            ].map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                <XCircle className="size-5 text-red-500 shrink-0 mt-0.5" />
                <p className="text-xs text-foreground font-medium leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="section py-16 bg-muted/20 border-b border-[var(--border)]">
        <div className="shell flex flex-col gap-10 max-w-3xl mx-auto">
          <SectionHead
            eyebrow="Questions & Answers"
            title="Frequently Asked Questions"
            align="center"
          />

          <div className="flex flex-col gap-6">
            {[
              {
                q: 'Is this a networking group?',
                a: 'No. Networking groups optimise for introductions. We optimise for outcomes — referrals, joint ventures, mentorship, hiring, media, cross-border access and four other modes.',
              },
              {
                q: 'How is this different from a chamber of commerce?',
                a: 'A chamber convenes and advocates. Nobody in it has a fixed group who knows your business. A circle is the same room every month, and it knows you.',
              },
              {
                q: 'Do I have to give referrals to receive them?',
                a: 'You do not have to. But the members who give most consistently receive most, and it is not close.',
              },
              {
                q: 'How much time does this take?',
                a: 'One circle meeting on a fixed monthly rhythm, plus whatever you choose to do between meetings.',
              },
              {
                q: 'Can I see it before I join?',
                a: 'Yes, and we would prefer it. Visit a circle meeting as a guest. No cost, no pitch at the end.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="surface p-6 border border-[var(--border)] bg-card rounded-2xl flex flex-col gap-2">
                <h4 className="text-base font-bold text-foreground flex items-center gap-2">
                  <HelpCircle className="size-4 text-primary shrink-0" /> {faq.q}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="section-sm bg-[#0b1b3a] text-white">
        <div className="shell flex flex-col items-center gap-6 text-center max-w-2xl mx-auto">
          <h2 className="display text-3xl font-extrabold">
            Collaboration rises steadily and keeps rising.
          </h2>
          <p className="text-sm text-white/80">
            Find your industry circle or visit a meeting as a guest to see how the room operates.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Cta href="/circles" variant="gold" size="lg">Find Your Circle</Cta>
            <Cta href="/events" variant="onDark" size="lg">Visit a Meeting as a Guest</Cta>
          </div>
        </div>
      </section>
    </div>
  )
}

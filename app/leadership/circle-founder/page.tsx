import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { Card, Cta, Eyebrow, SectionHead } from '@/components/site/ui'

export const metadata: Metadata = {
  title: 'Become a Circle Founder',
  description:
    'Build and own a governed peer Circle in your city. Revenue share, governance authority, and a leadership pipeline that starts the day you launch. The flagship leadership role at Peers Global.',
}

const WHAT_YOU_OWN = [
  'Curate and approve the Circle membership roster — one category, one member',
  'Chair or delegate the monthly 150-minute LSR meeting',
  'Own the Circle health score: attendance, referral velocity, renewal',
  'Appoint a Circle Director and build a Leadership Team',
  'Represent the Circle at national conclaves and regional meetings',
  'Set the culture and the standard — what the room tolerates, what it celebrates',
]

const WHAT_YOU_EARN = [
  { label: 'Revenue share', value: 'A percentage of annual Circle Membership fees, disclosed at application stage' },
  { label: 'Circle Director appointment', value: 'Authority to appoint and manage your Circle Director' },
  { label: 'Industry Director track', value: 'Priority pathway to ID appointment after 24 months in good standing' },
  { label: 'Regional conclave access', value: 'Complimentary tickets to all Peers Global flagship events' },
  { label: 'Network authority', value: 'Recognised as the category authority in your city-sector combination' },
]

const WHAT_IT_TAKES = [
  '12+ months as a Circle Member in good standing (no open governance flags)',
  'Attendance above 85% in the previous four quarters',
  'Pass a two-stage leadership assessment (written + panel interview)',
  'Identify a city-sector combination where a new Circle is feasible',
  'Commit to the launch checklist — 90 days from approval to first meeting',
]

const FAQ = [
  {
    q: 'How many Circle Founders are there?',
    a: 'Currently 19 active Circle Founders — one per Circle. New Founder seats open when Peers Global approves a new city-sector combination or when an existing Circle Founder transitions to an Industry Director role.',
  },
  {
    q: 'Do I run the meeting myself?',
    a: 'You chair it, or you appoint a Circle Director who chairs it under your governance. The Circle Founder is responsible for what happens in the room — not required to be the one holding the agenda.',
  },
  {
    q: 'What is the revenue share?',
    a: 'Revenue share details are disclosed during the application process, not on the public page, because they vary by Circle size, city, and tenure. The model is renewals-based — you earn from members staying, not just members joining.',
  },
  {
    q: 'What happens if my Circle does not perform?',
    a: 'A Circle health score review is triggered if attendance drops below 70% for two consecutive quarters or if referral velocity falls below two written referrals per member per quarter. A Regional Executive Director initiates a recovery plan. Circles that do not recover within two quarters are restructured.',
  },
  {
    q: 'Can I apply if I am not yet a Circle Member?',
    a: 'No. Circle Membership (12+ months in good standing) is a prerequisite. If you are not yet a member, start with an Explorer guest seat and apply for Circle Membership first.',
  },
]

export default function CircleFounderFlagshipPage() {
  return (
    <div className="flex flex-col">
      {/* Hero — video background */}
      <section className="relative overflow-hidden text-white py-24 lg:py-32">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 size-full object-cover z-0"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] z-10" />

        <div className="shell relative z-20 max-w-3xl text-center flex flex-col items-center">
          <div className="flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 px-4 py-1.5 backdrop-blur-md">
              <span className="size-2 rounded-full bg-[#D4AF37]" aria-hidden />
              <span className="text-xs font-medium text-[#D4AF37]">Flagship Leadership Role</span>
            </div>
            <h1 className="display text-4xl text-white sm:text-5xl lg:text-6xl tracking-tight">
              Become a<br />
              <span className="text-[#D4AF37]">Circle Founder</span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-200 max-w-xl font-light text-center">
              Build and own a governed peer Circle in your city. Curate a room of 20–30 non-competing operators, run the LSR model, and earn a revenue share from every membership renewal — not just the launch.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Cta href="/contact?intent=circle-founder" variant="gold" size="lg">
                Apply for Circle Founder
              </Cta>
              <Cta href="/contact?intent=leadership" variant="onDark" size="lg">
                Ask a question first
              </Cta>
            </div>
          </div>
        </div>
      </section>

      {/* What you own */}
      <section className="section border-b border-[var(--border)]">
        <div className="shell flex flex-col gap-10">
          <SectionHead
            eyebrow="Ownership"
            title="What you own as a Circle Founder"
            lede="This is not a facilitator role. You build the room, set the culture, and are accountable for what comes out of it."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {WHAT_YOU_OWN.map((item) => (
              <li key={item} className="flex items-start gap-3 surface p-5">
                <CheckCircle2 aria-hidden className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What you earn */}
      <section className="section border-b border-[var(--border)] bg-muted">
        <div className="shell flex flex-col gap-10">
          <SectionHead
            eyebrow="Economics"
            title="What you earn"
            lede="The model is renewals-based. You earn from members staying, not just members joining."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_YOU_EARN.map((item) => (
              <Card as="li" key={item.label} className="flex flex-col gap-3 p-6">
                <p className="eyebrow text-[#D4AF37]">{item.label}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.value}</p>
              </Card>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground">
            Revenue share percentages are disclosed at the application stage, not on the public page. Contact us to start the conversation.
          </p>
        </div>
      </section>

      {/* What it takes */}
      <section className="section border-b border-[var(--border)]">
        <div className="shell flex flex-col gap-10">
          <SectionHead
            eyebrow="Eligibility"
            title="What it takes to be approved"
          />
          <ul className="mx-auto max-w-2xl flex flex-col gap-4">
            {WHAT_IT_TAKES.map((item, i) => (
              <li key={item} className="flex items-start gap-4">
                <span
                  className="flex size-8 shrink-0 items-center justify-center text-xs font-bold text-primary-foreground"
                  style={{ background: 'var(--primary)', borderRadius: 'var(--btn-radius)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-foreground">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Launch timeline */}
      <section className="section border-b border-[var(--border)] bg-muted">
        <div className="shell flex flex-col gap-10">
          <SectionHead eyebrow="The launch process" title="90 days from approval to first meeting" />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { week: 'Week 1–2', title: 'Application & assessment', body: 'Written application reviewed. Panel interview with a Regional Executive Director.' },
              { week: 'Week 3–4', title: 'City-sector approval', body: 'Feasibility check, category map for your city, and formal appointment letter.' },
              { week: 'Week 5–10', title: 'Roster build', body: 'Identify 20 founding members. Each passes the standard category-exclusivity screen.' },
              { week: 'Week 11–12', title: 'First meeting', body: 'Launch meeting facilitated by Peers Global central team. Handover to Circle Founder.' },
            ].map((s) => (
              <Card as="li" key={s.week} className="flex flex-col gap-3 p-6">
                <p className="eyebrow text-primary">{s.week}</p>
                <h3 className="display text-lg">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Card>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-b border-[var(--border)]">
        <div className="shell flex flex-col gap-8">
          <SectionHead eyebrow="Questions" title="Circle Founder FAQ" />
          <ul className="mx-auto w-full max-w-3xl divide-y divide-[var(--border)]">
            {FAQ.map((f) => (
              <li key={f.q} className="py-5">
                <p className="font-medium text-foreground mb-2">{f.q}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: '#D4AF37' }}>
        <div className="shell flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-[#0b1b3a]/60">Saath Chalein.</p>
            <h2 className="display mt-1 text-2xl text-[#0b1b3a] md:text-3xl">
              Ready to build a room that changes businesses?
            </h2>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Cta href="/contact?intent=circle-founder" size="lg" style={{ background: '#0b1b3a', color: '#fff', borderRadius: 'var(--btn-radius)' }}>
              Apply for Circle Founder
            </Cta>
          </div>
        </div>
      </section>
    </div>
  )
}

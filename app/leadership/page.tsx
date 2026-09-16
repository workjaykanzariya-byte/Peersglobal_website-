import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Shield, Users, Briefcase, Award } from 'lucide-react'
import { Cta, Eyebrow, SectionHead } from '@/components/site/ui'
import { SITE } from '@/lib/data/site'

export const metadata: Metadata = {
  title: 'Leadership Opportunities | Peers Global',
  description:
    'Every leader in Peers Global runs a business of their own. Explore our operator-led leadership pipeline from Leadership Team to Circle Founder and Executive Director.',
}

export default function LeadershipPage() {
  const rolesTable = [
    { role: 'Member', action: 'Participates, contributes, collaborates.' },
    { role: 'Leadership Team', action: 'Functional roles inside a circle — recognition, showcase, learning, onboarding.' },
    { role: 'Circle Director', action: 'Runs one circle. Accountable for meeting quality, attendance and renewals.' },
    { role: 'Circle Founder', action: 'Starts a new circle and builds it to viable size (25–50 members).' },
    { role: 'Industry Director', action: 'Develops every circle in one industry across a territory.' },
    { role: 'Executive Director', action: 'Builds the Peers Global ecosystem across a city, region or country.' },
    { role: 'Country Head', action: 'Leads national and international development.' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1b3a] via-[#122347] to-[#0b1b3a] text-white pt-20 pb-20 border-b border-[var(--border)]">
        <div className="absolute -top-24 -left-24 size-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 size-80 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />

        <div className="shell relative z-10 flex flex-col gap-6 max-w-4xl mx-auto text-center">
          <Eyebrow tone="gold">OPERATOR-LED GOVERNANCE</Eyebrow>
          <h1 className="display text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-snug">
            Every leader in Peers Global runs a business of their own.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-400">
              Nobody here is staff.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
            Leadership at Peers Global is built by operators, for operators. If you are the person who naturally connects others, this is a role, not a personality trait.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Cta href="/contact?intent=leadership" variant="gold" size="lg">Explore Circle Leadership</Cta>
            <Cta href="/contact?intent=franchise" variant="onDark" size="lg">Franchise & Territory Options</Cta>
          </div>
        </div>
      </section>

      {/* 2. How Members Lead (Table of 7 Roles) */}
      <section className="section py-16 border-b border-[var(--border)]">
        <div className="shell flex flex-col gap-10 max-w-4xl mx-auto">
          <SectionHead
            eyebrow="The Leadership Pipeline"
            title="How members lead"
            lede="Seven defined roles across the ecosystem, each with clear ownership and published governance."
            align="center"
          />

          <div className="surface border border-[var(--border)] bg-card rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-muted/50 font-mono text-xs text-muted-foreground uppercase">
                    <th className="p-4 sm:p-5">Leadership Role</th>
                    <th className="p-4 sm:p-5">What They Do</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {rolesTable.map((r, idx) => (
                    <tr key={idx} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-foreground shrink-0">{r.role}</td>
                      <td className="p-4 sm:p-5 text-muted-foreground">{r.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep Dive into Leadership Rungs */}
      <section className="section py-16 bg-muted/30 border-b border-[var(--border)]">
        <div className="shell flex flex-col gap-12 max-w-4xl mx-auto">
          <SectionHead
            eyebrow="Core Leadership Paths"
            title="Ownership, governance, and real accountability"
            align="center"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="surface p-8 border border-[var(--border)] bg-card rounded-3xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Users className="size-5" />
                </div>
                <h3 className="display text-xl font-bold text-foreground">Circle Director (CD)</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Runs one circle. Accountable for meeting quality, attendance, and membership renewals. Holds the 150-minute meeting format strictly to time and oversees room governance.
              </p>
            </div>

            <div className="surface p-8 border border-amber-500/30 bg-card rounded-3xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Briefcase className="size-5" />
                </div>
                <h3 className="display text-xl font-bold text-foreground">Circle Founder (CF)</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Starts a new circle in a city and builds it to a viable size of 25–50 non-competing entrepreneurs. Leads category seat allocation and cohort induction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="section-sm bg-[#0b1b3a] text-white">
        <div className="shell flex flex-col items-center gap-6 text-center max-w-2xl mx-auto">
          <h2 className="display text-3xl font-extrabold">
            Ready to lead your industry in your city?
          </h2>
          <p className="text-sm text-white/80">
            Talk to our team about taking a functional leadership role or founding a new Circle.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Cta href="/contact?intent=leadership" variant="gold" size="lg">Apply for Leadership</Cta>
            <Cta href="/leadership/circle-founder" variant="onDark" size="lg">Become a Circle Founder</Cta>
          </div>
        </div>
      </section>
    </div>
  )
}

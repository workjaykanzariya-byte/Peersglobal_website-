import type { Metadata } from 'next'
import Image from 'next/image'
import { Cta, Eyebrow, SectionHead } from '@/components/site/ui'
import { ShieldCheck, Award, Sparkles, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dr. Pravin Parmar — Founder',
  description:
    'Dr. Pravin Parmar is the founder of Peers Global and VyapaarJagat — community architect, media entrepreneur, and mentor to 10,000+ MSME leaders.',
}

const ACHIEVEMENTS = [
  { year: '2018', title: 'Founded VyapaarJagat', desc: "Built India's largest Hinglish business media platform — 1M+ SME entrepreneur subscribers." },
  { year: '2021', title: 'Developed the LSR Model', desc: 'Created the Learn-Share-Refer meeting framework that powers every Peers Global Circle worldwide.' },
  { year: '2022', title: 'Launched Peers Global', desc: 'Incorporated Peers Global Business Media Pvt Ltd and ran the first 5 governed Circles across Gujarat.' },
  { year: '2023', title: 'Built Unity Platform', desc: 'Led development of the Unity platform — governance, directory, referral ledger, and 1-to-1 pairing in one place.' },
  { year: '2026', title: 'Mission 2030 Announced', desc: '50 Circles, 25 cities, 10,000 members — with a leadership pipeline producing Circle Founders from within.' },
]

const CREDENTIALS = [
  'PhD in Business Management',
  'Mentor to 10,000+ MSME leaders',
  'Founder, VyapaarJagat Media',
  'Community architect & keynote speaker',
  'CREDAI Gujarat & BNI India alumnus',
  'Featured in Economic Times, YourStory, Entrepreneur India',
]

const STATS = [
  { value: '19', label: 'Circles' },
  { value: '11', label: 'Cities' },
  { value: '2,400+', label: 'Members' },
  { value: '₹412 Cr', label: 'Referred Value' },
]

export default function FounderPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      
      {/* Hero Section — Clean Centered Layout using Site Typography */}
      <section className="section border-b border-[var(--border)] bg-muted/40">
        <div className="shell flex flex-col items-center text-center max-w-4xl">
          
          <Eyebrow tone="gold">Founder &amp; Managing Director</Eyebrow>

          {/* Circular Portrait */}
          <div className="my-8">
            <div className="relative size-48 sm:size-56 rounded-full overflow-hidden border-2 border-[var(--border)] shadow-xl mx-auto">
              <Image
                src="/images/founder-new.png"
                alt="Dr. Pravin Parmar — Founder &amp; Managing Director, Peers Global"
                fill
                sizes="224px"
                className="object-cover object-top"
                priority
                unoptimized
              />
            </div>
          </div>

          <h1 className="display text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight mb-4">
            Dr. Pravin Parmar
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Community Architect, Media Entrepreneur &amp; Pioneer of LSR Governance
          </p>
          
          <div className="max-w-2xl mx-auto space-y-4 text-base text-muted-foreground leading-relaxed mb-10 text-center">
            <p>
              Dr. Pravin Parmar is a celebrated community architect, media entrepreneur, and the visionary founder of VyapaarJagat and Peers Global. Over the past decade, he has mentored more than <strong className="text-foreground font-semibold">10,000 MSME leaders</strong> across India, with a singular conviction: that the right room, with the right structure, changes businesses permanently.
            </p>
            <p>
              After building VyapaarJagat into India&rsquo;s largest Hinglish business media platform, Dr. Parmar noticed that entrepreneurs craved more than content — they needed accountability, governed peer rooms, and structured referral systems. That insight became the Learn-Share-Refer model and eventually Peers Global.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Cta href="/membership" variant="gold" size="lg">
              Join Dr. Parmar&apos;s Network
            </Cta>
            <Cta href="/why-peers-global" variant="outline" size="lg">
              Learn About Our Values
            </Cta>
          </div>
        </div>
      </section>

      {/* Credentials Pill List */}
      <section className="section-sm border-b border-[var(--border)]">
        <div className="shell max-w-4xl">
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred}
                className="flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-full border border-[var(--border)] bg-card text-foreground shadow-sm"
              >
                <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                <span>{cred}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Quote */}
      <section className="section bg-card border-b border-[var(--border)] text-center">
        <div className="shell max-w-3xl">
          <blockquote className="display text-2xl sm:text-3xl lg:text-4xl text-foreground leading-snug mb-6">
            &ldquo;Peers are Partners in Business &amp; Friends in Life. We do not transact; we collaborate under a model of strict written accountability.&rdquo;
          </blockquote>
          <div className="eyebrow text-muted-foreground">
            <span className="text-primary font-semibold">Dr. Pravin Parmar</span> — Founder, Peers Global
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="section-sm border-b border-[var(--border)] bg-muted/20">
        <div className="shell max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
            {STATS.map((s) => (
              <div key={s.label} className="pt-4 md:pt-0">
                <div className="display text-4xl sm:text-5xl font-bold text-foreground">{s.value}</div>
                <div className="eyebrow text-muted-foreground mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones List */}
      <section className="section border-b border-[var(--border)]">
        <div className="shell max-w-3xl">
          <SectionHead
            eyebrow="Track Record"
            title="Key Milestones"
            align="center"
            className="mb-12"
          />

          <div className="divide-y divide-[var(--border)]">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.year} className="py-8 text-center max-w-2xl mx-auto">
                <div className="eyebrow text-primary mb-2">
                  {a.year}
                </div>
                <h3 className="display text-2xl text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section bg-panel text-panel-foreground text-center">
        <div className="shell max-w-xl flex flex-col items-center">
          <Eyebrow tone="gold">Saath Chalein</Eyebrow>
          <h2 className="display text-3xl sm:text-4xl text-white my-4">
            Ready to join Dr. Parmar&apos;s network?
          </h2>
          <p className="text-sm text-[color:var(--panel-muted)] leading-relaxed font-light mb-8">
            Gain category exclusivity inside India&rsquo;s most disciplined peer circles. Share experiences, acquire structured leadership skills, and drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Cta href="/membership" variant="gold" size="lg">
              Apply for Membership
            </Cta>
            <Cta href="/contact?intent=explorer" variant="onDark" size="lg">
              Request a Guest Seat
            </Cta>
          </div>
        </div>
      </section>

    </div>
  )
}

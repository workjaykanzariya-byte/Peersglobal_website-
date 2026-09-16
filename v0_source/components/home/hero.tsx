import Image from 'next/image'
import { ArrowRight, CircleCheck } from 'lucide-react'
import { Cta, Eyebrow } from '@/components/site/ui'
import { UPCOMING_EVENTS } from '@/lib/data/events'
import { SITE, TRUST_STATS } from '@/lib/data/site'

const proofPoints = [
  'One category seat per member, per city cohort',
  'A fixed 150-minute agenda — Learn, Share, Refer',
  'Referrals logged as written commitments, not verbal intros',
]

export function HomeHero() {
  const next = UPCOMING_EVENTS[0]

  return (
    <section className="relative overflow-hidden border-b border-[var(--hero-border)] bg-hero text-hero-foreground">
      <div aria-hidden className="grid-canvas absolute inset-0 opacity-[0.35]" />
      <div className="shell relative section">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Eyebrow tone="gold" className="text-[color:var(--rule-color)]">
              {SITE.tagline}
            </Eyebrow>

            <h1 className="display text-balance text-4xl sm:text-5xl lg:text-[3.75rem]">
              A leadership organisation for Indian business owners.{' '}
              <span className="text-primary">Not a networking group.</span>
            </h1>

            <p className="max-w-xl text-pretty text-lg leading-relaxed text-[color:var(--hero-muted)]">
              Peers Global runs 19 governed Circles across 11 cities. You hold a category seat, you
              are accountable to a written charter, and the room tells you the true version of your
              problem.
            </p>

            <ul className="flex flex-col gap-2.5">
              {proofPoints.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[0.95rem]">
                  <CircleCheck
                    aria-hidden
                    className="mt-0.5 size-[18px] shrink-0"
                    style={{ color: 'var(--rule-color)' }}
                  />
                  <span className="text-[color:var(--hero-muted)]">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-2 flex flex-wrap gap-3">
              <Cta href="/membership" size="lg">
                Apply for membership
                <ArrowRight aria-hidden className="size-4" />
              </Cta>
              <Cta href="/circles" variant="outline" size="lg">
                Explore the 19 Circles
              </Cta>
            </div>

            {next ? (
              <p className="text-sm text-[color:var(--hero-muted)]">
                Next open event —{' '}
                <a href={`/events/${next.slug}`} className="font-medium text-primary underline-offset-4 hover:underline">
                  {next.title}
                </a>{' '}
                · {next.date} · {next.city}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-5">
            <div
              className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--hero-border)]"
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              <Image
                src="/images/circle-meeting.png"
                alt="Members of a Peers Global Circle seated around a table during a structured monthly meeting"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[var(--hero-border)] pt-6 sm:grid-cols-4 lg:grid-cols-2">
              {TRUST_STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <dt className="order-2 text-[0.8rem] font-medium">{s.label}</dt>
                  <dd className="display order-1 text-2xl text-primary lg:text-3xl">{s.value}</dd>
                  <dd className="order-3 text-[0.7rem] text-[color:var(--hero-muted)]">{s.note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

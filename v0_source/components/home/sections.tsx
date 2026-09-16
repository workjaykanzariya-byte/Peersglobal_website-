import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CalendarDays, MapPin, Users } from 'lucide-react'
import { Card, Cta, Eyebrow, SectionHead, Stat, Tag } from '@/components/site/ui'
import { INDUSTRY_CIRCLES, PURPOSE_CIRCLES } from '@/lib/data/circles'
import { LSR, WHY_CONTRAST } from '@/lib/data/content'
import { UPCOMING_EVENTS } from '@/lib/data/events'
import { ROLES } from '@/lib/data/leadership'
import { TIERS } from '@/lib/data/membership'
import { JOURNEY, OUTCOME_STATS, SITE } from '@/lib/data/site'
import { FEATURED_STORIES } from '@/lib/data/stories'

/* ------------------------------------------------------------------ LSR */

export function LsrSection() {
  return (
    <section className="section border-b border-[var(--border)]">
      <div className="shell flex flex-col gap-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHead
            eyebrow="The method"
            title="150 minutes, held to the minute, every month"
            lede="Every Circle meeting runs the same three-act agenda. It is fixed on purpose — a room without an agenda becomes a lunch club inside eighteen months."
          />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Cta href="/why-peers-global" variant="outline">
              How the model works
            </Cta>
            <Cta href="/events">Sit in on a meeting</Cta>
          </div>
        </div>

        <ol className="grid gap-5 md:grid-cols-3">
          {LSR.map((item) => (
            <Card as="li" key={item.letter} className="flex flex-col gap-4 p-7">
              <div className="flex items-baseline justify-between">
                <span className="display text-5xl text-primary">{item.letter}</span>
                <Tag tone="neutral">{item.minutes}</Tag>
              </div>
              <h3 className="display text-xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Card>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- Contrast */

export function ContrastSection() {
  return (
    <section className="section-sm border-b border-[var(--border)] bg-muted">
      <div className="shell flex flex-col gap-10">
        <SectionHead
          eyebrow="The difference"
          title="What a governed Circle is, and is not"
          align="center"
        />
        <ul className="mx-auto grid w-full max-w-4xl gap-3">
          {WHY_CONTRAST.map((row) => (
            <li
              key={row.us}
              className="grid items-center gap-3 bg-background p-4 sm:grid-cols-[1fr_auto_1fr] sm:p-5"
              style={{ borderRadius: 'var(--radius-md)' }}
            >
              <span className="text-sm text-muted-foreground line-through decoration-brand-red/50">
                {row.them}
              </span>
              <ArrowRight aria-hidden className="hidden size-4 text-primary sm:block" />
              <span className="text-sm font-medium text-foreground">{row.us}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- Circles */

export function CirclesSection() {
  return (
    <section className="section border-b border-[var(--border)]">
      <div className="shell flex flex-col gap-10">
        <SectionHead
          eyebrow="19 Circles"
          title="Ten industry rooms. Nine built around a purpose."
          lede="Industry Circles put non-competing operators from one sector in the same room. Purpose-led Circles cut across sectors around a shared moment — scaling, succession, a first raise."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Eyebrow>Industry Circles</Eyebrow>
            <ul className="flex flex-col divide-y divide-[var(--border)]">
              {INDUSTRY_CIRCLES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/circles/${c.slug}`}
                    className="group flex items-center justify-between gap-4 py-3.5"
                  >
                    <span className="flex flex-col gap-0.5">
                      <span className="text-[0.95rem] font-medium transition-colors group-hover:text-primary">
                        {c.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {c.members} members · {c.cities.slice(0, 2).join(', ')}
                        {c.cities.length > 2 ? ` +${c.cities.length - 2}` : ''}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-3">
                      {c.seatsOpen > 0 ? (
                        <Tag tone="blue">{c.seatsOpen} seats open</Tag>
                      ) : (
                        <Tag tone="neutral">Waitlist</Tag>
                      )}
                      <ArrowUpRight
                        aria-hidden
                        className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <Eyebrow tone="red">Purpose-led Circles</Eyebrow>
            <ul className="flex flex-col divide-y divide-[var(--border)]">
              {PURPOSE_CIRCLES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/circles/${c.slug}`}
                    className="group flex items-center justify-between gap-4 py-3.5"
                  >
                    <span className="flex flex-col gap-0.5">
                      <span className="text-[0.95rem] font-medium transition-colors group-hover:text-primary">
                        {c.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {c.members} members · {c.cities.slice(0, 2).join(', ')}
                        {c.cities.length > 2 ? ` +${c.cities.length - 2}` : ''}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-3">
                      {c.seatsOpen > 0 ? (
                        <Tag tone="red">{c.seatsOpen} seats open</Tag>
                      ) : (
                        <Tag tone="neutral">Waitlist</Tag>
                      )}
                      <ArrowUpRight
                        aria-hidden
                        className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <Cta href="/circles" variant="outline">
            Compare all 19 Circles
            <ArrowRight aria-hidden className="size-4" />
          </Cta>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- Outcomes */

export function OutcomesSection() {
  return (
    <section className="section bg-panel text-panel-foreground">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHead
            eyebrow="Outcomes"
            tone="onDark"
            title="What the rooms actually produce"
            lede="Member-reported, dated, and never rounded up. Peers Global does not audit member financials and does not publish a number it cannot point to a source for."
          />
          <dl className="grid gap-8 sm:grid-cols-2">
            {OUTCOME_STATS.map((s) => (
              <Stat key={s.label} tone="onDark" value={s.value} label={s.label} note={s.note} />
            ))}
          </dl>
          <p className="text-xs text-white/40">{SITE.statsAsOf}</p>
        </div>

        <div
          className="relative min-h-72 overflow-hidden border border-[var(--panel-border)]"
          style={{ borderRadius: 'var(--radius-lg)' }}
        >
          <Image
            src="/images/hot-seat.png"
            alt="A member presenting a live business constraint to peers during a Circle hot seat"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- Stories */

export function StoriesSection() {
  return (
    <section className="section border-b border-[var(--border)]">
      <div className="shell flex flex-col gap-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHead
            eyebrow="Member stories"
            title="Named members. Located businesses. One number each."
            lede="Every story carries a source line. If we cannot tell you where the figure came from, it does not go on the page."
          />
          <Cta href="/stories" variant="outline">
            All stories
          </Cta>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {FEATURED_STORIES.map((s) => (
            <Card as="li" key={s.slug} className="flex flex-col gap-4 p-7">
              <span className="display text-3xl text-primary">{s.metric.value}</span>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {s.metric.label}
              </span>
              <p className="text-[0.95rem] leading-relaxed text-foreground">
                &ldquo;{s.pull}&rdquo;
              </p>
              <div className="mt-auto flex flex-col gap-1 border-t border-[var(--border)] pt-4">
                <span className="text-sm font-medium">{s.name}</span>
                <span className="text-xs text-muted-foreground">
                  {s.company} · {s.city}
                </span>
                <Link
                  href={`/stories/${s.slug}`}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-primary"
                >
                  Read the full story
                  <ArrowRight aria-hidden className="size-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- Journey */

export function JourneySection() {
  return (
    <section className="section border-b border-[var(--border)] bg-muted">
      <div className="shell flex flex-col gap-10">
        <SectionHead
          eyebrow="How you join"
          title="Explore, apply, belong"
          lede="Nobody is asked to commit before they have sat in a room. Explorer access is free and covers up to two open Circle meetings."
        />
        <ol className="grid gap-5 md:grid-cols-3">
          {JOURNEY.map((step) => (
            <Card as="li" key={step.step} className="flex flex-col gap-4 p-7">
              <div className="flex items-center gap-3">
                <span
                  className="flex size-10 items-center justify-center bg-primary text-sm font-semibold text-primary-foreground"
                  style={{ borderRadius: 'var(--btn-radius)' }}
                >
                  {step.step}
                </span>
                <h3 className="display text-xl">{step.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              <Link
                href={step.cta.href}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                {step.cta.label}
                <ArrowRight aria-hidden className="size-3.5" />
              </Link>
            </Card>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ Membership */

export function MembershipSection() {
  return (
    <section className="section border-b border-[var(--border)]">
      <div className="shell flex flex-col gap-10">
        <SectionHead
          eyebrow="Membership"
          title="Three ways in. One of them is free."
          lede="Global Membership is the base layer of the network. Circle Membership adds a governed seat with category exclusivity in your city cohort."
        />
        <ul className="grid gap-5 lg:grid-cols-3">
          {TIERS.map((t) => (
            <Card
              as="li"
              key={t.id}
              className={
                t.featured
                  ? 'flex flex-col gap-5 p-7 ring-2 ring-[color:var(--primary)] ring-offset-0'
                  : 'flex flex-col gap-5 p-7'
              }
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="display text-xl">{t.name}</h3>
                  <p className="text-xs text-muted-foreground">{t.positioning}</p>
                </div>
                {t.featured ? <Tag tone="blue">Most committed</Tag> : null}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="display text-3xl text-primary">{t.price}</span>
                <span className="text-xs text-muted-foreground">{t.priceNote}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.summary}</p>
              <ul className="flex flex-col gap-2 border-t border-[var(--border)] pt-4">
                {t.includes.slice(0, 4).map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span aria-hidden className="rule mt-2 size-1.5 shrink-0 rounded-full" />
                    {i}
                  </li>
                ))}
              </ul>
              <Cta
                href={t.cta.href}
                variant={t.featured ? 'primary' : 'outline'}
                className="mt-auto"
              >
                {t.cta.label}
              </Cta>
            </Card>
          ))}
        </ul>
        <div>
          <Cta href="/membership#compare" variant="quiet">
            Compare all three side by side
          </Cta>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ Leadership */

export function LeadershipSection() {
  return (
    <section className="section border-b border-[var(--border)]">
      <div className="shell flex flex-col gap-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHead
            eyebrow="Leadership pipeline"
            title="Five rungs, each with written ownership and economics"
            lede="Leadership at Peers Global is a job description, not an honorary title. Every rung publishes what you own, what you need, and what you earn."
          />
          <Cta href="/leadership/circle-founder" variant="red">
            Become a Circle Founder
          </Cta>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ROLES.map((r) => (
            <Card as="li" key={r.slug} className="flex flex-col gap-3 p-6">
              <div className="flex items-center gap-2">
                <span className="eyebrow text-primary">{r.code}</span>
                <span aria-hidden className="rule h-px flex-1 opacity-40" />
                <span className="text-xs text-muted-foreground">Stage {r.stage}</span>
              </div>
              <h3 className="display text-[1.05rem]">{r.name}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{r.tagline}</p>
              <div className="mt-auto flex flex-col gap-2 pt-2">
                <span className="text-[0.7rem] font-medium text-muted-foreground">
                  {r.seatsOpen}
                </span>
                <Link
                  href={`/leadership/${r.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary"
                >
                  Role detail
                  <ArrowRight aria-hidden className="size-3" />
                </Link>
              </div>
            </Card>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- Events */

export function EventsSection() {
  const events = UPCOMING_EVENTS.slice(0, 4)
  const priority = events.find((e) => e.priority) ?? events[0]
  const rest = events.filter((e) => e.slug !== priority?.slug).slice(0, 3)

  return (
    <section className="section border-b border-[var(--border)] bg-muted">
      <div className="shell flex flex-col gap-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHead
            eyebrow="Calendar"
            title="Where you can meet the network next"
            lede="Conclaves, city mixers and open Circle meetings. Explorers are welcome at everything marked open."
          />
          <Cta href="/events" variant="outline">
            Full calendar
          </Cta>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {priority ? (
            <Card className="flex flex-col overflow-hidden">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/conclave.png"
                  alt={`Delegates at ${priority.title}`}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag tone="red">Priority event</Tag>
                  <Tag tone="neutral">{priority.kind}</Tag>
                </div>
                <h3 className="display text-2xl">{priority.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{priority.summary}</p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-1.5">
                    <CalendarDays aria-hidden className="size-3.5" />
                    {priority.date}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <MapPin aria-hidden className="size-3.5" />
                    {priority.venue}, {priority.city}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Users aria-hidden className="size-3.5" />
                    {priority.attending} of {priority.capacity} confirmed
                  </li>
                </ul>
                <Cta href={`/events/${priority.slug}`} className="mt-1 self-start">
                  Event detail and agenda
                </Cta>
              </div>
            </Card>
          ) : null}

          <ul className="flex flex-col gap-4">
            {rest.map((e) => (
              <Card as="li" key={e.slug} className="flex flex-col gap-3 p-6">
                <div className="flex items-center justify-between gap-3">
                  <Tag tone="blue">{e.kind}</Tag>
                  <span className="text-xs text-muted-foreground">{e.date}</span>
                </div>
                <Link href={`/events/${e.slug}`} className="display text-lg hover:text-primary">
                  {e.title}
                </Link>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {e.venue}, {e.city} · {e.time}
                </p>
                <p className="text-xs text-muted-foreground">{e.price}</p>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- Unity */

export function UnitySection() {
  return (
    <section className="section border-b border-[var(--border)]">
      <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHead
          eyebrow="Unity"
          title="If it did not happen in Unity, it did not happen"
          lede="Unity is the platform of record for the whole network — directory, referral ledger, meeting logs, 1-to-1 pairing and vendor scorecards. Governance runs on data, not memory."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { k: 'Referral ledger', v: 'Written commitments with a name, a date and a status' },
            { k: 'Meeting logs', v: 'Attendance and hot-seat outputs for every Circle meeting' },
            { k: 'Directory', v: '2,400+ members, permissioned contact' },
            { k: 'Scorecards', v: 'Member-rated vendors, contributed after real engagements' },
          ].map((f) => (
            <Card key={f.k} className="flex flex-col gap-2 p-6">
              <span className="text-sm font-semibold">{f.k}</span>
              <span className="text-xs leading-relaxed text-muted-foreground">{f.v}</span>
            </Card>
          ))}
          <div className="sm:col-span-2">
            <Cta href="/unity" variant="outline">
              Inside the Unity platform
            </Cta>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- Final CTA */

export function ClosingSection() {
  return (
    <section className="section-sm bg-primary text-primary-foreground">
      <div className="shell flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-2xl flex-col gap-3">
          <p className="eyebrow text-white/70">{SITE.closing}</p>
          <h2 className="display text-balance text-3xl md:text-4xl">
            Sit in on one meeting before you decide anything.
          </h2>
          <p className="text-[0.95rem] leading-relaxed text-white/80">
            Explorer access is free, covers up to two open Circle meetings, and comes with an
            introduction to the Circle Founder.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Cta href="/contact?intent=explorer" variant="gold" size="lg">
            Request a guest seat
          </Cta>
          <Cta href="/membership" variant="onDark" size="lg">
            Membership pathways
          </Cta>
        </div>
      </div>
    </section>
  )
}

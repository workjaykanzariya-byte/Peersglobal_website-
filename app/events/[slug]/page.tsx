import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CalendarDays, MapPin, Users } from 'lucide-react'
import { Card, Cta, Eyebrow, SectionHead, Tag } from '@/components/site/ui'
import { EVENTS, getEvent } from '@/lib/data/events'

export async function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const e = getEvent(slug)
  if (!e) return {}
  return {
    title: e.title,
    description: e.summary,
  }
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const e = getEvent(slug)
  if (!e) return notFound()

  const pct = Math.round((e.attending / e.capacity) * 100)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section bg-muted border-b border-[var(--border)]">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_0.5fr]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2">
              <Tag tone={e.status === 'upcoming' ? 'blue' : 'neutral'}>{e.kind}</Tag>
              {e.priority && <Tag tone="red">Priority event</Tag>}
              <Tag tone="neutral">{e.status === 'upcoming' ? 'Upcoming' : 'Past'}</Tag>
            </div>
            <h1 className="display text-4xl sm:text-5xl">{e.title}</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">{e.summary}</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-1.5">
                <CalendarDays aria-hidden className="size-4" />
                {e.date} · {e.time}
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin aria-hidden className="size-4" />
                {e.venue}, {e.city}
              </li>
              <li className="flex items-center gap-1.5">
                <Users aria-hidden className="size-4" />
                <strong className="text-foreground">{e.attending}</strong> of {e.capacity} confirmed
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">{e.price}</p>

            {/* Capacity bar */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{pct}% capacity filled</span>
                <span>{e.capacity - e.attending} seats remaining</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${pct}%`, borderRadius: 'inherit' }}
                  role="progressbar"
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>

            {e.status === 'upcoming' && (
              <div className="flex flex-wrap gap-3 pt-1">
                <Cta href="/contact?intent=explorer">Register as an Explorer</Cta>
                <Cta href="/membership" variant="outline">Members attend free</Cta>
              </div>
            )}
          </div>

          {/* Quick stats sidebar */}
          <div className="flex flex-col gap-4">
            <Card className="p-5">
              <p className="eyebrow mb-3 text-primary">Event snapshot</p>
              <dl className="flex flex-col gap-2">
                {[
                  { label: 'Type', value: e.kind },
                  { label: 'Date', value: e.date },
                  { label: 'Time', value: e.time },
                  { label: 'City', value: e.city },
                  { label: 'Venue', value: e.venue },
                  { label: 'Capacity', value: `${e.capacity} total` },
                  { label: 'Price', value: e.price },
                ].map((row) => (
                  <div key={row.label} className="flex gap-2">
                    <dt className="w-20 shrink-0 text-xs text-muted-foreground">{row.label}</dt>
                    <dd className="text-xs text-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section border-b border-[var(--border)]">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-6">
            <h2 className="display text-2xl">About this event</h2>
            {e.body.map((para, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground">{para}</p>
            ))}
          </div>
          {e.speakers.length > 0 && (
            <div className="flex flex-col gap-5">
              <h3 className="display text-2xl">Speakers</h3>
              <ul className="flex flex-col gap-4">
                {e.speakers.map((s) => (
                  <li key={s.name} className="surface flex flex-col gap-0.5 p-4">
                    <p className="font-semibold text-foreground">{s.name}</p>
                    <p className="text-sm text-muted-foreground">{s.role}</p>
                    <p className="text-xs text-muted-foreground">{s.company} · {s.city}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Agenda */}
      {e.agenda.length > 0 && (
        <section className="section border-b border-[var(--border)] bg-muted">
          <div className="shell flex flex-col gap-8">
            <SectionHead eyebrow="Agenda" title={`${e.date} schedule`} />
            <ol className="relative flex flex-col gap-0 border-l-2 border-[var(--border)] pl-8">
              {e.agenda.map((item) => (
                <li key={item.time} className="relative pb-6 last:pb-0">
                  <span className="absolute -left-[2.35rem] flex size-6 items-center justify-center rounded-full bg-background border-2 border-primary" aria-hidden />
                  <p className="eyebrow mb-0.5 text-primary">{item.time}</p>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  {item.detail && (
                    <p className="mt-0.5 text-sm text-muted-foreground">{item.detail}</p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* FAQs */}
      {e.faqs.length > 0 && (
        <section className="section border-b border-[var(--border)]">
          <div className="shell flex flex-col gap-8">
            <SectionHead eyebrow="Questions" title="Event FAQ" />
            <ul className="mx-auto w-full max-w-3xl divide-y divide-[var(--border)]">
              {e.faqs.map((f) => (
                <li key={f.q} className="py-5">
                  <p className="font-medium text-foreground mb-2">{f.q}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      {e.status === 'upcoming' && (
        <section className="section-sm bg-primary text-primary-foreground">
          <div className="shell flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow text-white/70">Saath Chalein.</p>
              <h2 className="display mt-1 text-2xl md:text-3xl">
                {e.capacity - e.attending} seats remaining at {e.title}.
              </h2>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Cta href="/contact?intent=explorer" variant="gold" size="lg">Register now</Cta>
              <Cta href="/events" variant="onDark" size="lg">All events →</Cta>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CalendarDays, MapPin, Users, Clock, ArrowLeft, Share2, ShieldCheck, Ticket } from 'lucide-react'
import { Card, Cta, Tag } from '@/components/site/ui'
import { EVENTS, getEvent, EventRecord } from '@/lib/data/events'

export const dynamic = 'force-dynamic'

async function fetchEventBySlug(slug: string): Promise<EventRecord | null> {
  // 1. First check static catalog
  const staticEv = getEvent(slug)
  if (staticEv) return staticEv

  // 2. Fetch live from internal/backend API
  try {
    const res = await fetch(`https://peersunity.com/api/v1/events/all?status=upcoming`, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
      next: { revalidate: 0 },
    })

    if (res.ok) {
      const json = await res.json()
      const dataObj = json.data || json
      const list = dataObj.upcoming_events || dataObj.events || []

      const matched = list.find((item: any) => {
        const itemTitleSlug = (item.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        const itemSlug = item.slug || (item.event_id ? `${itemTitleSlug}-${item.event_id}` : itemTitleSlug)
        return (
          itemSlug === slug ||
          item.event_id === slug ||
          item.occurrence_id === slug ||
          slug.includes(item.event_id) ||
          itemTitleSlug === slug
        )
      })

      if (matched) {
        const rawDate = matched.start_at || matched.formatted_start_at
        const dateObj = rawDate ? new Date(rawDate) : new Date()
        const isoDate = !isNaN(dateObj.getTime()) ? dateObj.toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
        const formattedDate = !isNaN(dateObj.getTime())
          ? dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
          : (matched.formatted_start_at || 'Upcoming')

        const time = matched.formatted_start_at ? matched.formatted_start_at.split(' ').slice(3).join(' ') : '06:00 AM IST'
        const title = matched.title || 'Peers Global Event'
        const city = matched.location ? matched.location.split(',').slice(-2, -1)[0]?.trim() || matched.location.split(',')[0]?.trim() || 'Ahmedabad' : 'Ahmedabad'
        const venue = matched.location || 'Peers Global House'
        const attending = matched.registered_count || 1
        const capacity = matched.capacity || 100
        const summary = matched.description || `Join fellow promoters and business leaders for ${title} with Peers Global.`
        const imageUrl = matched.image_url || '/images/conclave.png'

        return {
          slug,
          title,
          kind: 'Circle Meeting',
          date: formattedDate,
          isoDate,
          time,
          city,
          venue,
          status: 'upcoming',
          priority: true,
          attending,
          capacity,
          price: 'Included for Members · Registration required',
          summary,
          body: [
            summary,
            `This upcoming circle meeting brings together validated business owners, founders, and CXOs across key sectors to foster structured partnerships, knowledge sharing, and peer-to-peer business collaboration.`,
            `Attendance is strictly reserved for verified members and registered guests.`,
          ],
          agenda: [
            { time: '06:00 AM', title: 'Registration & Welcome Coffee', detail: 'Member check-in and open mingling.' },
            { time: '06:30 AM', title: 'Structured Peer Collaboration & Circle Introduction', detail: 'Focus on strategic partnerships and synergies.' },
            { time: '08:00 AM', title: 'Business Updates & Referral Mandates', detail: 'Actionable business opportunities logged to Unity.' },
            { time: '08:45 AM', title: 'Closing & Networking Breakfast', detail: 'Direct 1-on-1 interaction.' },
          ],
          speakers: [
            { name: 'Dr. Pravin Parmar', role: 'Founder', company: 'Peers Global', city: 'Ahmedabad' },
          ],
          circles: matched.circle_id ? [String(matched.circle_id)] : [],
          faqs: [
            { q: 'Can non-members visit this event?', a: 'Yes, guest passes are permitted upon registration and organizer review.' },
            { q: 'What is the dress code?', a: 'Business formal / sharp business casual.' },
          ],
          image_url: imageUrl,
        }
      }
    }
  } catch (err) {
    console.warn('Error fetching dynamic event:', err)
  }

  return null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const e = await fetchEventBySlug(slug)
  if (!e) return { title: 'Event Not Found' }
  return {
    title: `${e.title} — Peers Global`,
    description: e.summary,
  }
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const e = await fetchEventBySlug(slug)
  if (!e) return notFound()

  const pct = Math.min(100, Math.round((e.attending / e.capacity) * 100))

  return (
    <div className="flex flex-col bg-background text-foreground min-h-screen">
      {/* Back Navigation Bar */}
      <div className="border-b border-[var(--border)] bg-muted/40 py-3">
        <div className="shell flex items-center justify-between">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            Back to Calendar & Events
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-muted-foreground">ID: {e.slug}</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Event Poster */}
      <section className="section bg-card border-b border-[var(--border)] py-10 lg:py-14">
        <div className="shell grid gap-10 lg:grid-cols-[1.3fr_0.9fr] items-start">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2">
              <Tag tone="blue">{e.kind}</Tag>
              {e.priority && <Tag tone="red">Priority Event</Tag>}
              <Tag tone="neutral">{e.status === 'upcoming' ? 'Upcoming' : 'Past'}</Tag>
            </div>

            <h1 className="display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              {e.title}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              {e.summary}
            </p>

            <ul className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-sm text-muted-foreground pt-2">
              <li className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <CalendarDays className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Date & Time</span>
                  <strong className="text-foreground font-semibold">{e.date} · {e.time}</strong>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Location</span>
                  <strong className="text-foreground font-semibold">{e.venue}, {e.city}</strong>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Users className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Confirmed Attendees</span>
                  <strong className="text-foreground font-semibold">{e.attending} of {e.capacity} slots</strong>
                </div>
              </li>
            </ul>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-2 rounded-xl self-start mt-1">
              <ShieldCheck className="size-4" />
              <span>Verified Circle Meeting · Live Synchronized with Unity App</span>
            </div>

            {/* Capacity progress bar */}
            <div className="flex flex-col gap-1.5 pt-2 max-w-lg">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{pct}% capacity booked</span>
                <span>{Math.max(0, e.capacity - e.attending)} seats remaining</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted border border-[var(--border)]">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${pct}%`, borderRadius: 'inherit' }}
                  role="progressbar"
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>

            {e.status === 'upcoming' && (
              <div className="flex flex-wrap gap-3 pt-3">
                <Cta href="/contact?intent=explorer" variant="primary" size="lg">
                  Register to Attend as Guest
                </Cta>
                <Cta href="/membership" variant="outline" size="lg">
                  Explore Membership
                </Cta>
              </div>
            )}
          </div>

          {/* Event Poster Card */}
          <div className="flex flex-col gap-4">
            <Card className="overflow-hidden rounded-3xl border border-[var(--border)] bg-card shadow-xl p-0">
              <div className="relative aspect-[16/10] w-full bg-muted overflow-hidden">
                <Image
                  src={e.image_url || '/images/conclave.png'}
                  alt={e.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                  <span className="bg-primary/90 backdrop-blur-md px-3 py-1 rounded-full">{e.kind}</span>
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">{e.city}</span>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Access Fee</span>
                  <span className="text-sm font-semibold text-primary">{e.price}</span>
                </div>

                <dl className="flex flex-col gap-2.5 text-xs">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Date</dt>
                    <dd className="font-semibold text-foreground text-right">{e.date}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Timing</dt>
                    <dd className="font-semibold text-foreground text-right">{e.time}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Venue</dt>
                    <dd className="font-semibold text-foreground text-right max-w-[200px] truncate">{e.venue}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Host</dt>
                    <dd className="font-semibold text-foreground text-right">Peers Global Network</dd>
                  </div>
                </dl>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Body / Description Section */}
      <section className="section border-b border-[var(--border)] bg-muted/20">
        <div className="shell grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <h2 className="display text-2xl font-bold text-foreground">About This Gathering</h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              {e.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {e.speakers && e.speakers.length > 0 && (
            <div className="flex flex-col gap-5">
              <h3 className="display text-2xl font-bold text-foreground">Featured Leaders & Speakers</h3>
              <ul className="flex flex-col gap-3">
                {e.speakers.map((s) => (
                  <li key={s.name} className="flex flex-col gap-1 p-4 rounded-2xl border border-[var(--border)] bg-card shadow-xs">
                    <p className="font-bold text-foreground">{s.name}</p>
                    <p className="text-xs font-semibold text-primary">{s.role}</p>
                    <p className="text-xs text-muted-foreground">{s.company} · {s.city}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Agenda Section */}
      {e.agenda && e.agenda.length > 0 && (
        <section className="section border-b border-[var(--border)] bg-card">
          <div className="shell flex flex-col gap-8 max-w-4xl">
            <div>
              <p className="eyebrow text-primary">Agenda & Flow</p>
              <h2 className="display text-2xl font-bold mt-1 text-foreground">Schedule for {e.date}</h2>
            </div>
            <ol className="relative flex flex-col gap-0 border-l-2 border-primary/30 pl-8 ml-2">
              {e.agenda.map((item, idx) => (
                <li key={idx} className="relative pb-7 last:pb-0">
                  <span className="absolute -left-[2.55rem] flex size-7 items-center justify-center rounded-full bg-background border-2 border-primary text-[10px] font-bold text-primary" aria-hidden>
                    {idx + 1}
                  </span>
                  <span className="text-xs font-mono font-bold text-primary tracking-wider">{item.time}</span>
                  <h3 className="font-bold text-foreground text-base mt-0.5">{item.title}</h3>
                  {item.detail && (
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* FAQs */}
      {e.faqs && e.faqs.length > 0 && (
        <section className="section border-b border-[var(--border)] bg-muted/30">
          <div className="shell flex flex-col gap-8 max-w-3xl">
            <div>
              <p className="eyebrow text-primary">Frequently Asked</p>
              <h2 className="display text-2xl font-bold mt-1 text-foreground">Event FAQs</h2>
            </div>
            <ul className="flex flex-col gap-4">
              {e.faqs.map((f, idx) => (
                <li key={idx} className="p-5 rounded-2xl border border-[var(--border)] bg-card shadow-xs">
                  <p className="font-bold text-foreground mb-2 text-sm">{f.q}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Bottom Registration CTA Bar */}
      {e.status === 'upcoming' && (
        <section className="section-sm bg-[#0b1b3a] text-white">
          <div className="shell flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">Saath Chalein.</p>
              <h2 className="display mt-1 text-2xl md:text-3xl font-bold text-white">
                Reserve your guest seat at {e.title}.
              </h2>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Cta href="/contact?intent=explorer" variant="gold" size="lg">
                Register as Guest →
              </Cta>
              <Cta href="/events" variant="onDark" size="lg">
                View All Events
              </Cta>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}


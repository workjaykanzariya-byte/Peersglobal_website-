import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CalendarDays, MapPin, Users } from 'lucide-react'
import { Card, Cta, Eyebrow, SectionHead, Tag } from '@/components/site/ui'
import { CIRCLES } from '@/lib/data/circles'
import { MAIN_18_CIRCLES } from '@/lib/data/main-18-circles'
import { CircleMembersModal } from '@/components/circle-members-modal'

export async function generateStaticParams() {
  const allSlugs = [
    ...CIRCLES.map((c) => ({ slug: c.slug })),
    ...MAIN_18_CIRCLES.map((c) => ({ slug: c.slug })),
  ]
  return allSlugs
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const circle = CIRCLES.find((c) => c.slug === slug) || MAIN_18_CIRCLES.find((c) => c.slug === slug)
  if (!circle) return {}
  return {
    title: `${circle.name}`,
    description: 'description' in circle ? circle.description : circle.summary,
  }
}

export default async function CircleDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ city?: string }>
}) {
  const { slug } = await params
  const { city } = await searchParams
  const activeCity = city || 'Ahmedabad'

  let circle = CIRCLES.find((c) => c.slug === slug)

  if (!circle) {
    const mainCat = MAIN_18_CIRCLES.find((c) => c.slug === slug)
    if (mainCat) {
      circle = {
        slug: mainCat.slug,
        name: mainCat.name,
        type: mainCat.type === 'industry' ? 'industry' : 'purpose',
        tagline: mainCat.description,
        summary: mainCat.description,
        body: [mainCat.description, 'One category seat per promoter in your city cohort. Governed monthly LSR agenda with written referral ledgers.'],
        members: 19,
        cities: [activeCity, 'Gandhinagar', 'Surat', 'Mumbai', 'Bengaluru'],
        cadence: 'Third Thursday of every month · 150 minutes',
        nextMeeting: '20 August 2026',
        focus: ['Category Exclusivity', 'Referral Ledger', 'Peer Governance', 'Revenue Scale'],
        eligibility: ['Promoter, Director or Key Partner in target sector'],
        founder: { name: 'Dr. Pravin Parmar', role: 'Circle Founder', company: 'Peers Global', city: activeCity },
        testimonials: [],
        faqs: [],
        seatsOpen: 12,
      }
    }
  }

  if (!circle) return notFound()

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section bg-muted border-b border-[var(--border)]">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_0.4fr]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              <Eyebrow tone={circle.type === 'industry' ? 'blue' : 'red'}>
                {circle.type === 'industry' ? 'Industry Circle' : 'Purpose-led Circle'}
              </Eyebrow>
              <Tag tone="neutral">{activeCity} Cohort</Tag>
            </div>
            <h1 className="display text-4xl sm:text-5xl">{circle.name}</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">{circle.summary}</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-1.5">
                <CalendarDays aria-hidden className="size-4" />
                {circle.cadence}
              </li>
              <li className="flex items-center gap-1.5">
                <Users aria-hidden className="size-4" />
                {circle.members} members
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin aria-hidden className="size-4" />
                {activeCity} Chapter
              </li>
            </ul>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {circle.seatsOpen > 0 ? (
                <Cta href="/membership">Apply for a category seat</Cta>
              ) : (
                <Cta href="/contact?intent=membership">Join the waitlist</Cta>
              )}
              <Cta href="/contact?intent=explorer" variant="outline">Request a guest seat</Cta>
              <CircleMembersModal
                circleName={circle.name}
                cityName={activeCity}
                chairs={circle.chairs}
                peerMembers={circle.peerMembers}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="surface p-5">
              <p className="eyebrow mb-3 text-primary">Seats available</p>
              {circle.seatsOpen > 0 ? (
                <p className="display text-4xl text-primary">{circle.seatsOpen}</p>
              ) : (
                <p className="display text-2xl text-muted-foreground">Waitlist</p>
              )}
              <p className="mt-1 text-xs text-muted-foreground">Category seats in this Circle</p>
            </div>
            <div className="surface p-5">
              <p className="eyebrow mb-2 text-muted-foreground">Next meeting</p>
              <p className="text-sm font-medium text-foreground">{circle.nextMeeting}</p>
              <Cta href="/contact?intent=explorer" variant="quiet" className="mt-2 px-0 text-xs">
                Request a guest seat →
              </Cta>
            </div>
          </div>
        </div>
      </section>

      {/* Body paragraphs */}
      <section className="section border-b border-[var(--border)]">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <h2 className="display text-2xl">About this Circle</h2>
            {circle.body.map((para, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="display mb-4 text-xl">What this Circle focuses on</h3>
              <ul className="flex flex-col gap-2">
                {circle.focus.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="display mb-4 text-xl">Eligibility</h3>
              <ul className="flex flex-col gap-2">
                {circle.eligibility.map((e) => (
                  <li key={e} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-red" aria-hidden />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Circle Governance Leadership Team */}
      <section className="section border-b border-[var(--border)] bg-muted">
        <div className="shell flex flex-col gap-8">
          <SectionHead
            eyebrow="Circle Leadership & Governance"
            title="Who runs this room"
            lede="Every Circle is governed by a named leadership team with written accountability."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Circle Founder */}
            <Card className="flex flex-col gap-3 p-6 border-l-4 border-l-[#D4AF37]">
              <div className="flex items-center justify-between">
                <Tag tone="gold">Circle Founder</Tag>
                <span className="text-[10px] font-bold text-muted-foreground uppercase">Governance</span>
              </div>
              <div>
                <Link href="/peer-dr-pravin-parmar" className="display text-xl hover:text-primary transition-colors">
                  {circle.founder && circle.founder.name ? (circle.founder.name === 'Pravin Parmar' ? 'Dr. Pravin Parmar' : circle.founder.name) : 'Dr. Pravin Parmar'}
                </Link>
                <p className="text-xs font-semibold text-primary">{circle.founder?.company || 'Peers Global'}</p>
                <p className="text-xs text-muted-foreground">{circle.founder?.city || circle.cities[0] || 'Ahmedabad'}, India</p>
              </div>
              <p className="text-xs text-muted-foreground pt-2 border-t border-[var(--border)]">
                Owns Circle charter & cohort seat approvals.
              </p>
            </Card>

            {/* Circle Director */}
            <Card className="flex flex-col gap-3 p-6 border-l-4 border-l-primary">
              <div className="flex items-center justify-between">
                <Tag tone="blue">Circle Director</Tag>
                <span className="text-[10px] font-bold text-muted-foreground uppercase">Operations</span>
              </div>
              <div>
                <Link href={`/peer-${(circle.director ? circle.director.name : 'Dr. Pravin Parmar').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="display text-xl hover:text-primary transition-colors">
                  {circle.director ? circle.director.name : 'Dr. Pravin Parmar'}
                </Link>
                <p className="text-xs font-semibold text-primary">{circle.director ? circle.director.company : 'Peers Global'}</p>
                <p className="text-xs text-muted-foreground">{circle.cities[0] || 'Ahmedabad'}, India</p>
              </div>
              <p className="text-xs text-muted-foreground pt-2 border-t border-[var(--border)]">
                Drives regional expansion & multi-city alignment.
              </p>
            </Card>

            {/* Circle Chair */}
            <Card className="flex flex-col gap-3 p-6 border-l-4 border-l-emerald-500">
              <div className="flex items-center justify-between">
                <Tag tone="blue">Circle Chair</Tag>
                <span className="text-[10px] font-bold text-emerald-600 uppercase">150-Min Facilitator</span>
              </div>
              <div>
                <Link href={`/peer-${(circle.chairs && circle.chairs.length > 0 ? circle.chairs[0].id : 'vishal-parmar')}`} className="display text-xl hover:text-primary transition-colors">
                  {circle.chairs && circle.chairs.length > 0 ? circle.chairs[0].name : 'Vishal Parmar'}
                </Link>
                <p className="text-xs font-semibold text-primary">{circle.chairs && circle.chairs.length > 0 ? circle.chairs[0].company : 'Parmar Electronics'}</p>
                <p className="text-xs text-muted-foreground">{circle.cities[0] || 'Ahmedabad'}, India</p>
              </div>
              <p className="text-xs text-muted-foreground pt-2 border-t border-[var(--border)]">
                Chairs monthly 150-minute 3-Act LSR meetings.
              </p>
            </Card>

            {/* Circle Vice Chair */}
            <Card className="flex flex-col gap-3 p-6 border-l-4 border-l-purple-500">
              <div className="flex items-center justify-between">
                <Tag tone="neutral">Circle Vice Chair</Tag>
                <span className="text-[10px] font-bold text-purple-600 uppercase">Referral Officer</span>
              </div>
              <div>
                <p className="display text-xl">{circle.viceChair ? circle.viceChair.name : 'Open Seat'}</p>
                <p className="text-xs font-semibold text-primary">{circle.viceChair ? circle.viceChair.company : 'Nominations Open'}</p>
                <p className="text-xs text-muted-foreground">{circle.cities[0] || 'Ahmedabad'}, India</p>
              </div>
              <p className="text-xs text-muted-foreground pt-2 border-t border-[var(--border)]">
                Audits written referral commitments in Unity.
              </p>
            </Card>
          </div>
        </div>
      </section>



      {/* Testimonials — named + located (Rendered ONLY if testimonials exist) */}
      {circle.testimonials && circle.testimonials.length > 0 && (
        <section className="section border-b border-[var(--border)]">
          <div className="shell flex flex-col gap-8">
            <SectionHead eyebrow="Member voices" title="What members say" />
            <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {circle.testimonials.map((t) => (
                <Card as="li" key={t.name} className="flex flex-col gap-4 p-7">
                  <p className="text-[0.95rem] leading-relaxed text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-auto border-t border-[var(--border)] pt-4">
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.company} · {t.city}</p>
                  </div>
                </Card>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section border-b border-[var(--border)] bg-muted">
        <div className="shell flex flex-col gap-8">
          <SectionHead eyebrow="Questions" title={`${circle.name} Circle — FAQ`} />
          <ul className="mx-auto w-full max-w-3xl flex flex-col gap-0 divide-y divide-[var(--border)]">
            {circle.faqs.map((faq) => (
              <li key={faq.q} className="py-5">
                <p className="font-medium text-foreground mb-2">{faq.q}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="section-sm bg-primary text-primary-foreground">
        <div className="shell flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-white/70">Saath Chalein.</p>
            <h2 className="display mt-1 text-2xl md:text-3xl">
              {circle.seatsOpen > 0
                ? `${circle.seatsOpen} category seats still open in ${circle.name}.`
                : `The ${circle.name} Circle is at capacity. Join the waitlist.`}
            </h2>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            {circle.seatsOpen > 0 ? (
              <Cta href="/membership" variant="gold" size="lg">Apply for a seat</Cta>
            ) : (
              <Cta href="/contact?intent=membership" variant="gold" size="lg">Join waitlist</Cta>
            )}
            <Cta href="/circles" variant="onDark" size="lg">Browse all Circles</Cta>
          </div>
        </div>
      </section>
    </div>
  )
}

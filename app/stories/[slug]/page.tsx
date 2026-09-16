import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Cta, Eyebrow, SectionHead, Tag } from '@/components/site/ui'
import { STORIES, getStory } from '@/lib/data/stories'

export async function generateStaticParams() {
  return STORIES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = getStory(slug)
  if (!s) return {}
  return { title: s.headline, description: s.pull }
}

export default async function StoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = getStory(slug)
  if (!s) return notFound()

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section bg-muted border-b border-[var(--border)]">
        <div className="shell max-w-3xl flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <Tag tone="blue">{s.circle}</Tag>
            <Tag tone="neutral">{s.city}</Tag>
            {s.tags.slice(0, 3).map((t) => <Tag key={t} tone="neutral">{t}</Tag>)}
          </div>
          <h1 className="display text-3xl sm:text-4xl">{s.headline}</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">{s.pull}</p>
          <div className="flex items-center gap-4">
            <div>
              <p className="font-semibold text-foreground">{s.name}</p>
              <p className="text-sm text-muted-foreground">{s.role} · {s.company} · {s.city}</p>
              <p className="text-xs text-muted-foreground">
                {s.circle} Circle member since {s.memberSince}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hard metric */}
      <section className="section-sm border-b border-[var(--border)]">
        <div className="shell max-w-3xl">
          <div className="surface p-6 flex flex-col gap-1">
            <p className="eyebrow text-primary">The number</p>
            <p className="display text-5xl text-primary">{s.metric.value}</p>
            <p className="text-base text-muted-foreground">{s.metric.label}</p>
            <p className="mt-1 text-xs text-muted-foreground/70">{s.metric.source}</p>
          </div>
        </div>
      </section>

      {/* Story narrative */}
      <section className="section border-b border-[var(--border)]">
        <div className="shell max-w-3xl flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SectionHead eyebrow="The situation" title="Before the Circle" />
            {s.situation.map((para, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground">{para}</p>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <SectionHead eyebrow="What happened" title="What the Circle did" />
            {s.intervention.map((para, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground">{para}</p>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <SectionHead eyebrow="The outcome" title="What changed" />
            {s.outcome.map((para, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Verification note */}
      <section className="section-sm border-b border-[var(--border)] bg-muted">
        <div className="shell max-w-3xl">
          <div className="surface p-5 border border-[var(--border)]">
            <p className="eyebrow mb-2 text-muted-foreground">Verification note</p>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.verifiedNote}</p>
          </div>
        </div>
      </section>

      {/* Browse circle */}
      {s.circleSlug && (
        <section className="section-sm border-b border-[var(--border)]">
          <div className="shell flex items-center justify-between gap-6">
            <div>
              <p className="text-sm text-muted-foreground">This story came from the</p>
              <p className="display text-xl">{s.circle} Circle</p>
            </div>
            <Cta href={`/circles/${s.circleSlug}`} variant="outline">Browse this Circle →</Cta>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-sm bg-primary text-primary-foreground">
        <div className="shell flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-white/70">Saath Chalein.</p>
            <h2 className="display mt-1 text-2xl md:text-3xl">Build your own story.</h2>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Cta href="/membership" variant="gold" size="lg">Apply for membership</Cta>
            <Cta href="/stories" variant="onDark" size="lg">More stories →</Cta>
          </div>
        </div>
      </section>
    </div>
  )
}

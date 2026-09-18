import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, Cta, Eyebrow, SectionHead, ClosingCtaSection } from '@/components/site/ui'
import { ROLES } from '@/lib/data/leadership'

export async function generateStaticParams() {
  return ROLES.map((r) => ({ role: r.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ role: string }>
}): Promise<Metadata> {
  const { role } = await params
  const r = ROLES.find((x) => x.slug === role)
  if (!r) return {}
  return {
    title: r.name,
    description: r.summary,
  }
}

export default async function LeadershipRolePage({
  params,
}: {
  params: Promise<{ role: string }>
}) {
  const { role } = await params
  const r = ROLES.find((x) => x.slug === role)
  if (!r) return notFound()

  // Find next role in pipeline
  const nextRole = ROLES.find((x) => x.stage === r.stage + 1)

  return (
    <div className="flex flex-col">
      {/* Hero — background video */}
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
              <span className="text-xs font-medium text-[#D4AF37]">{r.code} · Stage {r.stage}</span>
            </div>
            <h1 className="display text-4xl text-white sm:text-5xl lg:text-6xl tracking-tight">
              {r.name}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-200 max-w-xl font-light text-center">
              {r.summary}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Cta href="/contact?intent=leadership" variant="gold" size="lg">
                Apply for this role
              </Cta>
              <Cta href="/leadership" variant="onDark" size="lg">
                Back to pipeline
              </Cta>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section border-b border-[var(--border)]">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div className="flex flex-col gap-6">
            <h2 className="display text-2xl">About this role</h2>
            {r.body.map((para, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground">{para}</p>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {/* Seats / availability */}
            <div className="surface p-5">
              <p className="eyebrow mb-1 text-primary">Seats available</p>
              <p className="display text-2xl">{r.seatsOpen}</p>
              <p className="mt-1 text-xs text-muted-foreground">as of July 2026</p>
            </div>
            {/* Time commitment */}
            <div className="surface p-5">
              <p className="eyebrow mb-1 text-muted-foreground">Time commitment</p>
              <p className="text-sm text-foreground">{r.timeCommitment}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What you own / Requirements / Economics */}
      <section className="section border-b border-[var(--border)] bg-muted">
        <div className="shell grid gap-10 lg:grid-cols-3">
          <div>
            <h3 className="display mb-5 text-xl">What you own</h3>
            <ul className="flex flex-col gap-3">
              {r.owns.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="display mb-5 text-xl">Requirements</h3>
            <ul className="flex flex-col gap-3">
              {r.requirements.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-brand-red" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="display mb-5 text-xl">Economics</h3>
            <ul className="flex flex-col gap-4">
              {r.economics.map((e) => (
                <li key={e.label}>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{e.label}</p>
                  <p className="mt-0.5 text-sm text-foreground">{e.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Next step in pipeline */}
      {nextRole && (
        <section className="section border-b border-[var(--border)]">
          <div className="shell flex flex-col gap-6">
            <p className="eyebrow text-muted-foreground">Next rung in the pipeline</p>
            <Card className="flex flex-col gap-3 p-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="eyebrow text-primary">{nextRole.code} · Stage {nextRole.stage}</p>
                <h3 className="display mt-1 text-2xl">{nextRole.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{nextRole.tagline}</p>
              </div>
              <Link
                href={`/leadership/${nextRole.slug}`}
                className="inline-flex items-center gap-1.5 shrink-0 text-sm font-medium text-primary hover:underline"
              >
                See role detail
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </Card>
          </div>
        </section>
      )}

      {/* CTA */}
      <ClosingCtaSection
        eyebrow="Saath Chalein."
        title={`${r.seatsOpen} for ${r.name}.`}
        subtitle=""
        description=""
        primaryButtonText={r.nextStep ? r.nextStep.label : 'Apply for this role'}
        primaryButtonHref={r.nextStep ? r.nextStep.href : '/contact?intent=leadership'}
        secondaryButtonText="Full pipeline →"
        secondaryButtonHref="/leadership"
      />
    </div>
  )
}

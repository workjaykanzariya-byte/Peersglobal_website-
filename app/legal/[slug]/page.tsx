import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ShieldCheck, Clock, FileText } from 'lucide-react'
import { LEGAL_PAGES, type LegalSlug } from '@/lib/data/content'
import { SITE } from '@/lib/data/site'

export async function generateStaticParams() {
  return (Object.keys(LEGAL_PAGES) as LegalSlug[]).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = LEGAL_PAGES[slug as LegalSlug]
  if (!page) return {}
  return {
    title: `${page.title} | Peers Global Governance`,
    description: page.lede,
  }
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = LEGAL_PAGES[slug as LegalSlug]
  if (!page) return notFound()

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* High-Contrast Luxury Hero Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1b3a] via-[#122347] to-[#0b1b3a] text-white pt-16 pb-16 border-b border-[var(--border)] shadow-xl">
        {/* Ambient Blur Accents */}
        <div className="absolute -top-24 -left-24 size-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 size-80 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />

        <div className="shell relative z-10 flex flex-col gap-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-[#0b1b3a] bg-[#D4AF37] self-start shadow-md">
            <ShieldCheck className="size-3.5" />
            GOVERNANCE & LEGAL POLICY
          </div>

          <h1 className="display text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold leading-tight tracking-tight drop-shadow-sm">
            {page.title}
          </h1>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-medium">
            {page.lede}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3 text-xs font-mono text-white font-semibold border-t border-white/20 mt-2">
            <span className="flex items-center gap-1.5 text-[#D4AF37] font-bold">
              <Clock className="size-4 text-[#D4AF37]" /> Last updated: {page.updated}
            </span>
            <span className="text-white/40">•</span>
            <span className="text-white/90">{SITE.legalName}</span>
          </div>
        </div>
      </section>

      {/* Main Policy Content Section */}
      <section className="section py-16 border-b border-[var(--border)]">
        <div className="shell max-w-3xl flex flex-col gap-10">
          {page.sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-4 p-7 rounded-3xl border border-[var(--border)] bg-card shadow-xs">
              <h2 className="display text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2.5" id={section.heading.toLowerCase().replace(/\s+/g, '-')}>
                <FileText className="size-5 text-primary shrink-0" />
                {section.heading}
              </h2>
              <ul className="flex flex-col gap-3 pt-1">
                {section.body.map((para, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>{para}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Questions Footer */}
      <section className="section-sm py-8 border-b border-[var(--border)] bg-muted/40">
        <div className="shell max-w-3xl">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Questions about this policy? Write directly to legal support at{' '}
            <a href={`mailto:${SITE.email}`} className="text-primary font-bold hover:underline">
              {SITE.email}
            </a>
            . For official legal notices, contact {SITE.legalName}, {SITE.city}, India.
          </p>
        </div>
      </section>
    </div>
  )
}

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/site/logo'
import { ctaClass } from '@/components/site/ui'
import { ACTIVE_CITIES, FOOTER_COLUMNS, SITE } from '@/lib/data/site'

export function SiteFooter() {
  return (
    <footer className="bg-panel text-panel-foreground">
      <div className="shell section-sm">
        <div className="flex flex-col gap-6 border-b border-[var(--panel-border)] pb-10 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-xl flex-col gap-3">
            <p className="eyebrow" style={{ color: 'var(--rule-color)' }}>
              {SITE.closing}
            </p>
            <h2 className="display text-2xl text-white md:text-3xl">{SITE.promise}</h2>
            <p className="text-sm leading-relaxed text-[color:var(--panel-muted)]">
              Attend one meeting before you decide anything. Explorer access is free and covers up to
              two open Circle meetings.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/membership" className={ctaClass('primary', 'md')}>
              Apply for membership
            </Link>
            <Link href="/events" className={ctaClass('onDark', 'md')}>
              See upcoming events
            </Link>
          </div>
        </div>

        <div className="grid gap-10 py-10 md:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
          <div className="flex flex-col gap-4">
            <Logo onDark />
            <p className="text-sm leading-relaxed text-[color:var(--panel-muted)]">
              A leadership organisation for Indian business owners, built on governed peer Circles.
            </p>
            <ul className="flex flex-col gap-2 text-sm text-[color:var(--panel-muted)]">
              <li className="flex items-start gap-2">
                <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 opacity-60" />
                {SITE.city}
              </li>
              <li className="flex items-start gap-2">
                <Phone aria-hidden className="mt-0.5 size-4 shrink-0 opacity-60" />
                <span className="flex flex-col">
                  {SITE.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-white">
                      {p}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail aria-hidden className="mt-0.5 size-4 shrink-0 opacity-60" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3">
              <p className="eyebrow text-white/45">{col.title}</p>
              <ul className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-[color:var(--panel-muted)] transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-[var(--panel-border)] pt-8">
          <p className="eyebrow text-white/40">Active cities</p>
          <p className="text-sm leading-relaxed text-[color:var(--panel-muted)]">
            {ACTIVE_CITIES.join(' · ')}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--panel-border)] pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>CIN {SITE.cin}</span>
            <span>GSTIN {SITE.gstin}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Logo } from '@/components/site/logo'
import { ctaClass } from '@/components/site/ui'
import { INDUSTRY_CIRCLES, PURPOSE_CIRCLES } from '@/lib/data/circles'
import { NAV } from '@/lib/data/site'
import { cn } from '@/lib/utils'

function CircleMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-8 p-6 md:grid-cols-[1fr_1fr_0.9fr]">
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-primary">Industry Circles</p>
        <ul className="flex flex-col gap-1.5">
          {INDUSTRY_CIRCLES.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/circles/${c.slug}`}
                onClick={onNavigate}
                className="block text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-brand-red">Purpose-led Circles</p>
        <ul className="flex flex-col gap-1.5">
          {PURPOSE_CIRCLES.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/circles/${c.slug}`}
                onClick={onNavigate}
                className="block text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="flex flex-col gap-3 bg-muted p-5"
        style={{ borderRadius: 'var(--radius-md)' }}
      >
        <p className="display text-lg">19 governed Circles</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          One category seat per member per city cohort. Check which seats are still open in your
          city.
        </p>
        <Link
          href="/circles"
          onClick={onNavigate}
          className={ctaClass('primary', 'md', 'mt-1 w-full')}
          style={{ borderRadius: 'var(--btn-radius)' }}
        >
          Browse all Circles
        </Link>
      </div>
    </div>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState<string | null>(null)
  const [mobile, setMobile] = React.useState(false)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    setOpen(null)
    setMobile(false)
  }, [pathname])

  React.useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobile])

  const enter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(label)
  }
  const leave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(null), 120)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="shell flex h-18 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            const hasPanel = Boolean(item.children || item.mega)
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasPanel && enter(item.label)}
                onMouseLeave={leave}
              >
                <Link
                  href={item.href}
                  aria-expanded={hasPanel ? open === item.label : undefined}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-[0.825rem] font-medium transition-colors',
                    active ? 'text-primary' : 'text-foreground hover:text-primary',
                  )}
                >
                  {item.label}
                  {hasPanel ? (
                    <ChevronDown aria-hidden className="size-3.5 opacity-60" />
                  ) : null}
                </Link>

                {hasPanel && open === item.label ? (
                  <div
                    className={cn(
                      'absolute left-0 top-full pt-2',
                      item.mega ? 'w-[46rem] -translate-x-1/3' : 'w-80',
                    )}
                  >
                    <div className="surface overflow-hidden shadow-lg">
                      {item.mega ? (
                        <CircleMega onNavigate={() => setOpen(null)} />
                      ) : (
                        <ul className="flex flex-col p-2">
                          {item.children?.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setOpen(null)}
                                className="flex flex-col gap-0.5 p-3 transition-colors hover:bg-muted"
                                style={{ borderRadius: 'var(--radius-sm)' }}
                              >
                                <span className="text-sm font-medium text-foreground">
                                  {child.label}
                                </span>
                                <span className="text-xs leading-relaxed text-muted-foreground">
                                  {child.desc}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ) : null}
              </div>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className={ctaClass('outline', 'md', 'hidden sm:inline-flex')}>
            Talk to us
          </Link>
          <Link href="/membership" className={ctaClass('primary', 'md', 'hidden sm:inline-flex')}>
            Apply now
          </Link>
          <button
            type="button"
            onClick={() => setMobile((v) => !v)}
            aria-label={mobile ? 'Close menu' : 'Open menu'}
            aria-expanded={mobile}
            className="flex size-11 items-center justify-center border border-[var(--border)] lg:hidden"
            style={{ borderRadius: 'var(--btn-radius)' }}
          >
            {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobile ? (
        <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-[var(--border)] bg-background lg:hidden">
          <nav aria-label="Mobile" className="shell flex flex-col gap-1 py-5">
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-[var(--border)] py-2 last:border-0">
                <Link
                  href={item.href}
                  className="block py-2 text-[0.95rem] font-medium text-foreground"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="flex flex-col gap-1 pb-2 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-1.5 text-sm text-muted-foreground"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.mega ? (
                  <ul className="flex flex-col gap-1 pb-2 pl-3">
                    {[...INDUSTRY_CIRCLES, ...PURPOSE_CIRCLES].slice(0, 8).map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/circles/${c.slug}`}
                          className="block py-1.5 text-sm text-muted-foreground"
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href="/circles" className="block py-1.5 text-sm font-medium text-primary">
                        All 19 Circles
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </div>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/membership" className={ctaClass('primary', 'lg')}>
                Apply now
              </Link>
              <Link href="/contact" className={ctaClass('outline', 'lg')}>
                Talk to us
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

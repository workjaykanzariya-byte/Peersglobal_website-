import Link from 'next/link'
import type * as React from 'react'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ CTA */

type CtaVariant = 'primary' | 'gold' | 'red' | 'outline' | 'onDark' | 'quiet'
type CtaSize = 'sm' | 'md' | 'lg'

const ctaBase =
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] disabled:opacity-50 active:scale-[0.97] select-none whitespace-nowrap rounded-lg'

const ctaVariants: Record<CtaVariant, string> = {
  primary:
    'bg-[#1E4ED8] text-white shadow-[0_4px_14px_rgba(30,78,216,0.30)] hover:bg-[#1a42c0] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(30,78,216,0.40)]',
  gold:
    'bg-[#D4AF37] text-[#1a1405] shadow-[0_4px_14px_rgba(212,175,55,0.35)] hover:bg-[#e0bc3e] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(212,175,55,0.45)]',
  red:
    'bg-[#d83b01] text-white shadow-[0_4px_14px_rgba(216,59,1,0.30)] hover:bg-[#c43400] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(216,59,1,0.40)]',
  outline:
    'border border-[var(--border)] bg-transparent text-foreground hover:bg-[#1E4ED8] hover:text-white hover:border-[#1E4ED8] hover:-translate-y-[2px] hover:shadow-[0_6px_18px_rgba(30,78,216,0.25)]',
  onDark:
    'border border-white/25 bg-white/[0.07] text-white backdrop-blur-sm hover:bg-white/[0.15] hover:border-white/50 hover:-translate-y-[2px]',
  quiet:
    'bg-muted text-foreground hover:bg-[#1E4ED8] hover:text-white hover:-translate-y-[2px] hover:shadow-[0_6px_18px_rgba(30,78,216,0.25)]',
}

const ctaSizes: Record<CtaSize, string> = {
  sm: 'h-8 px-3.5 text-xs',
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-7 text-[0.95rem]',
}

export function Cta({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: {
  href: string
  children: React.ReactNode
  variant?: CtaVariant
  size?: CtaSize
  className?: string
} & Omit<React.ComponentProps<typeof Link>, 'href' | 'className' | 'children'>) {
  return (
    <Link
      href={href}
      className={cn(ctaBase, ctaVariants[variant], ctaSizes[size], className)}
      {...rest}
    >
      {children}
    </Link>
  )
}

export function ctaClass(variant: CtaVariant = 'primary', size: CtaSize = 'md', className?: string) {
  return cn(ctaBase, ctaVariants[variant], ctaSizes[size], className)
}

/* -------------------------------------------------------------- Eyebrow */

export function Eyebrow({
  children,
  className,
  tone = 'primary',
}: {
  children: React.ReactNode
  className?: string
  tone?: 'primary' | 'blue' | 'red' | 'gold' | 'muted' | 'neutral' | 'onDark'
}) {
  const tones = {
    primary: 'text-primary',
    blue: 'text-primary',
    red: 'text-brand-red',
    gold: 'text-gold',
    muted: 'text-muted-foreground',
    neutral: 'text-muted-foreground',
    onDark: 'text-white/60',
  }
  return (
    <p className={cn('eyebrow flex items-center gap-2.5', tones[tone], className)}>
      <span aria-hidden className="rule inline-block h-px w-6 opacity-70" />
      {children}
    </p>
  )
}

/* ------------------------------------------------------- Section header */

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = 'left',
  tone = 'default',
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  lede?: React.ReactNode
  align?: 'left' | 'center'
  tone?: 'default' | 'onDark'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone === 'onDark' ? 'gold' : 'primary'}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          'font-serif text-pretty text-2xl sm:text-3xl lg:text-[2.5rem] font-normal tracking-tight leading-[1.18]',
          tone === 'onDark' ? 'text-white' : 'text-[var(--ink)]',
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            'max-w-2xl text-pretty leading-relaxed',
            tone === 'onDark' ? 'text-white/70' : 'text-muted-foreground',
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  )
}

/* ----------------------------------------------------------- Page hero */

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  meta,
}: {
  eyebrow: string
  title: React.ReactNode
  lede?: React.ReactNode
  children?: React.ReactNode
  meta?: React.ReactNode
}) {
  return (
    <header className="border-b border-[var(--hero-border)] bg-hero text-hero-foreground">
      <div className="shell section-sm">
        <div className="flex max-w-3xl flex-col gap-5">
          <Eyebrow tone="gold" className="text-[color:var(--rule-color)]">
            {eyebrow}
          </Eyebrow>
          <h1 className="display text-balance text-4xl md:text-5xl lg:text-[3.5rem]">{title}</h1>
          {lede ? (
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-[color:var(--hero-muted)]">
              {lede}
            </p>
          ) : null}
          {children ? <div className="mt-2 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        {meta ? <div className="mt-10">{meta}</div> : null}
      </div>
    </header>
  )
}

/* ------------------------------------------------------------ Surfaces */

export function Panel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn('bg-panel text-panel-foreground', className)}
      style={{ borderRadius: 'var(--radius-lg)' }}
    >
      {children}
    </div>
  )
}

export function Card({
  children,
  className,
  as: Tag = 'div',
  ...rest
}: {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'li' | 'article'
} & React.HTMLAttributes<HTMLElement>) {
  return <Tag className={cn('surface', className)} {...rest}>{children}</Tag>
}

/* ----------------------------------------------------------- Stat cell */

export function Stat({
  value,
  label,
  note,
  tone = 'default',
}: {
  value: string
  label: string
  note?: string
  tone?: 'default' | 'onDark'
}) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className={cn(
          'display text-3xl md:text-4xl',
          tone === 'onDark' ? 'text-white' : 'text-primary',
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          'text-sm font-medium',
          tone === 'onDark' ? 'text-white/80' : 'text-foreground',
        )}
      >
        {label}
      </span>
      {note ? (
        <span
          className={cn('text-xs', tone === 'onDark' ? 'text-white/45' : 'text-muted-foreground')}
        >
          {note}
        </span>
      ) : null}
    </div>
  )
}

/* --------------------------------------------------------------- Badge */

export function Tag({
  children,
  tone = 'neutral',
  className,
}: {
  children: React.ReactNode
  tone?: 'neutral' | 'blue' | 'red' | 'gold' | 'onDark'
  className?: string
}) {
  const tones = {
    neutral: 'bg-muted text-muted-foreground',
    blue: 'bg-primary/10 text-primary',
    red: 'bg-brand-red/10 text-brand-red',
    gold: 'bg-gold/15 text-gold',
    onDark: 'bg-white/10 text-white/80',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold',
        tones[tone],
        className,
      )}
      style={{ borderRadius: 'var(--btn-radius)' }}
    >
      {children}
    </span>
  )
}

/* --------------------------------------------------------------- Prose */

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 text-[0.975rem] leading-relaxed text-muted-foreground [&_h3]:display [&_h3]:mt-4 [&_h3]:text-xl [&_h3]:text-[var(--ink)] [&_strong]:font-semibold [&_strong]:text-[var(--ink)]',
        className,
      )}
    >
      {children}
    </div>
  )
}

export { ClosingCtaSection } from './ClosingCtaSection'

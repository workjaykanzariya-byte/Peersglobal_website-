import Link from 'next/link'
import type * as React from 'react'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ CTA */

type CtaVariant = 'primary' | 'brand-gradient' | 'brand-outline' | 'gold' | 'red' | 'outline' | 'onDark' | 'quiet'
type CtaSize = 'sm' | 'md' | 'lg'

const ctaBase =
  'inline-flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] disabled:opacity-50 active:scale-[0.98] select-none whitespace-nowrap rounded-full cursor-pointer'

const ctaVariants: Record<CtaVariant, string> = {
  'brand-gradient':
    'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-sm hover:shadow-md hover:opacity-95',
  'brand-outline':
    'border border-slate-300 hover:border-[#1D4ED8] bg-white text-slate-900 shadow-none hover:bg-slate-50 hover:text-[#1D4ED8]',
  primary:
    'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-sm hover:shadow-md hover:opacity-95',
  gold:
    'bg-[#D4AF37] text-[#1a1405] shadow-none hover:bg-[#c9a42f]',
  red:
    'bg-[#E11D48] text-white shadow-none hover:bg-[#be123c]',
  outline:
    'border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100 hover:border-slate-400 shadow-none',
  onDark:
    'border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50',
  quiet:
    'bg-slate-100 text-slate-800 hover:bg-slate-200 shadow-none',
}

const ctaSizes: Record<CtaSize, string> = {
  sm: 'h-8 px-3.5 text-xs',
  md: 'h-10 px-5 text-sm',
  lg: 'h-11 px-6 text-sm sm:text-base',
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

export function Eyebrow({
  children,
  className,
  tone = 'primary',
}: {
  children: React.ReactNode
  className?: string
  tone?: 'primary' | 'blue' | 'red' | 'gold' | 'muted' | 'neutral' | 'onDark' | 'gradient'
}) {
  const tones = {
    primary: 'brand-gradient-text font-bold',
    blue: 'text-[#0078D4]',
    red: 'text-[#E11D48]',
    gold: 'text-gold',
    muted: 'text-slate-500',
    neutral: 'brand-gradient-text font-bold',
    onDark: 'text-slate-300 font-bold',
    gradient: 'brand-gradient-text font-bold',
  }
  return (
    <p className={cn('eyebrow flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em]', tones[tone], className)}>
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
        'flex flex-col gap-2.5',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone === 'onDark' ? 'onDark' : 'neutral'}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          'font-sans text-pretty text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold tracking-tight leading-[1.18]',
          tone === 'onDark' ? 'text-white' : 'text-slate-900',
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            'max-w-2xl text-pretty leading-relaxed text-base sm:text-lg font-normal',
            tone === 'onDark' ? 'text-slate-300' : 'text-slate-600',
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
    <header className="border-b border-slate-200 bg-white text-slate-900 py-12 sm:py-16">
      <div className="shell flex flex-col items-start gap-4 max-w-4xl mx-auto px-4 sm:px-6">
        <Eyebrow tone="neutral">{eyebrow}</Eyebrow>
        <h1 className="font-sans text-pretty text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.14]">
          {title}
        </h1>
        {lede ? <p className="max-w-2xl text-base sm:text-lg text-slate-600 font-normal leading-relaxed">{lede}</p> : null}
        {children ? <div className="mt-2 flex flex-wrap gap-3">{children}</div> : null}
        {meta ? <div className="mt-4 border-t border-slate-200 pt-4 text-xs text-slate-500 font-medium">{meta}</div> : null}
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

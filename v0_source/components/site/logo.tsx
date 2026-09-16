import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * PLACEHOLDER EMBLEM.
 * Drop the official Peers Global emblem at /public/brand/emblem.svg and replace
 * the <svg> below with <img src="/brand/emblem.svg" .../>. Geometry here follows
 * the brand kit description only: connected nodes, circular/balanced, no effects.
 */
function Emblem({ className, onDark }: { className?: string; onDark?: boolean }) {
  const blue = onDark ? '#3B82F6' : 'var(--brand-blue)'
  const red = 'var(--brand-red)'
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn('size-9', className)}
      role="img"
      aria-label="Peers Global emblem"
    >
      <circle cx="20" cy="20" r="18.5" fill="none" stroke={blue} strokeWidth="1.5" opacity="0.35" />
      <path
        d="M20 6.5 L31.7 26.8 H8.3 Z"
        fill="none"
        stroke={blue}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="6.5" r="3.4" fill={red} />
      <circle cx="31.7" cy="26.8" r="3.4" fill={blue} />
      <circle cx="8.3" cy="26.8" r="3.4" fill={blue} />
    </svg>
  )
}

export function Logo({
  onDark = false,
  compact = false,
  className,
}: {
  onDark?: boolean
  compact?: boolean
  className?: string
}) {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2.5', className)}
      aria-label="Peers Global — home"
    >
      <Emblem onDark={onDark} className={compact ? 'size-8' : 'size-9'} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'display text-[1.15rem] tracking-tight',
            onDark ? 'text-white' : 'text-[var(--ink)]',
          )}
        >
          Peers<span className="text-primary">Global</span>
        </span>
        {!compact ? (
          <span
            className={cn(
              'mt-1 text-[9px] font-medium uppercase tracking-[0.18em]',
              onDark ? 'text-white/55' : 'text-muted-foreground',
            )}
          >
            Community of Collaboration
          </span>
        ) : null}
      </span>
    </Link>
  )
}

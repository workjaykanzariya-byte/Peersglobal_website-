import type React from 'react'
import { cn } from '@/lib/utils'

export function GrayInfoSection({
  children,
  className,
  title,
  subtitle,
}: {
  children?: React.ReactNode
  className?: string
  title?: string
  subtitle?: string
}) {
  return (
    <section className={cn('section-sm border-b border-[var(--border)] bg-muted/60 py-12', className)}>
      <div className="shell flex flex-col gap-6">
        {(title || subtitle) && (
          <div className="flex flex-col gap-1 max-w-2xl">
            {title && <h3 className="display text-xl font-bold text-foreground">{title}</h3>}
            {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

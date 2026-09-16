'use client'

import { LayoutGrid, List } from 'lucide-react'
import { cn } from '@/lib/utils'

export type ViewMode = 'grid' | 'list'

export function ViewToggle({
  mode,
  onChange,
  className,
}: {
  mode: ViewMode
  onChange: (mode: ViewMode) => void
  className?: string
}) {
  return (
    <div className={cn('inline-flex shrink-0 items-center gap-1 border border-[var(--border)] p-1', className)} style={{ borderRadius: 'var(--btn-radius)' }}>
      {(
        [
          { mode: 'grid' as const, icon: LayoutGrid, label: 'Grid view' },
          { mode: 'list' as const, icon: List, label: 'List view' },
        ]
      ).map(({ mode: m, icon: Icon, label }) => (
        <button
          key={m}
          type="button"
          aria-label={label}
          aria-pressed={mode === m}
          onClick={() => onChange(m)}
          className={cn(
            'flex size-8 items-center justify-center transition-colors',
            mode === m ? 'bg-[#0b1b3a] text-white' : 'text-muted-foreground hover:text-foreground',
          )}
          style={{ borderRadius: 'calc(var(--btn-radius) - 2px)' }}
        >
          <Icon className="size-4" />
        </button>
      ))}
    </div>
  )
}

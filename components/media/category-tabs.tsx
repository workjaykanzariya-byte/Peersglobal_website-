'use client'

import { cn } from '@/lib/utils'

export function CategoryTabs({
  categories,
  active,
  onChange,
  className,
}: {
  categories: string[]
  active: string
  onChange: (category: string) => void
  className?: string
}) {
  return (
    <div className={cn('-mx-1 flex gap-2 overflow-x-auto px-1 pb-1', className)}>
      {categories.map((category) => {
        const isActive = category === active
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={cn(
              'shrink-0 whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]',
              isActive
                ? 'bg-[#0b1b3a] text-white'
                : 'bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground',
            )}
            style={{ borderRadius: 'var(--btn-radius)' }}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

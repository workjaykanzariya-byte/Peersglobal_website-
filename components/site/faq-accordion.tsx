'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { type FaqGroup } from '@/lib/data/faqs'
import { cn } from '@/lib/utils'

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false)
  const id = React.useId()

  return (
    <div className="border-b border-[var(--border)] last:border-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
      >
        <span className="text-[0.95rem] font-medium text-foreground">{q}</span>
        <ChevronDown
          aria-hidden
          className={cn(
            'mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>
      <div
        id={id}
        hidden={!open}
        className={cn(
          'overflow-hidden text-sm leading-relaxed text-muted-foreground',
          open ? 'pb-5' : '',
        )}
      >
        {a}
      </div>
    </div>
  )
}

export function FaqAccordion({ groups }: { groups: FaqGroup[] }) {
  const [activeGroup, setActiveGroup] = React.useState(groups[0]?.group ?? '')

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
      {/* Group nav */}
      <nav aria-label="FAQ categories" className="flex gap-2 overflow-x-auto lg:w-52 lg:flex-col lg:overflow-x-visible">
        {groups.map((g) => (
          <button
            key={g.group}
            type="button"
            onClick={() => setActiveGroup(g.group)}
            className={cn(
              'shrink-0 rounded px-4 py-2.5 text-left text-sm font-medium transition-colors',
              activeGroup === g.group
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground',
            )}
            style={{ borderRadius: 'var(--radius-md)' }}
          >
            {g.group}
          </button>
        ))}
      </nav>

      {/* Questions */}
      <div className="flex-1">
        {groups
          .filter((g) => g.group === activeGroup)
          .map((g) => (
            <div key={g.group}>
              {g.items.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          ))}
      </div>
    </div>
  )
}

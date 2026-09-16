'use client'

import * as React from 'react'
import { ChevronDown, Palette, X } from 'lucide-react'
import { DESIGN_DIRECTIONS, getDirection } from '@/lib/design'
import { useDesign } from './design-provider'

export function DesignSwitcher() {
  const { design, setDesign } = useDesign()
  const [open, setOpen] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)
  const active = getDirection(design)

  if (hidden) {
    return (
      <button
        type="button"
        onClick={() => setHidden(false)}
        className="fixed bottom-4 right-4 z-[60] flex size-11 items-center justify-center rounded-full bg-[#0B1B3A] text-white shadow-lg"
        aria-label="Show design direction switcher"
      >
        <Palette className="size-5" />
      </button>
    )
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex justify-center px-3 pb-3">
      <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-[#0B1B3A]/95 text-white shadow-2xl backdrop-blur-md">
        {open ? (
          <div className="flex items-start justify-between gap-4 border-b border-white/10 px-4 py-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Direction {active.index} — {active.name}
              </p>
              <p className="mt-1 max-w-xl text-xs leading-relaxed text-white/70">
                {active.description}
              </p>
            </div>
            <div className="flex flex-none gap-1">
              {active.swatches.map((s) => (
                <span
                  key={s}
                  className="size-4 rounded-full ring-1 ring-white/25"
                  style={{ backgroundColor: s }}
                />
              ))}
            </div>
          </div>
        ) : null}

        <div className="flex items-center gap-2 px-2 py-2">
          <span className="hidden shrink-0 pl-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50 sm:block">
            Design
          </span>
          <div className="flex flex-1 items-center gap-1 overflow-x-auto">
            {DESIGN_DIRECTIONS.map((d) => {
              const isActive = d.id === design
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDesign(d.id)}
                  aria-pressed={isActive}
                  className={[
                    'flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-colors',
                    isActive ? 'bg-white text-[#0B1B3A]' : 'text-white/70 hover:bg-white/10',
                  ].join(' ')}
                >
                  <span className="flex gap-0.5">
                    {d.swatches.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="size-2 rounded-full ring-1 ring-black/10"
                        style={{ backgroundColor: s }}
                      />
                    ))}
                  </span>
                  <span className="whitespace-nowrap">
                    {d.index}. {d.name}
                  </span>
                </button>
              )
            })}
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-8 shrink-0 items-center justify-center rounded-lg text-white/60 hover:bg-white/10 hover:text-white"
            aria-label={open ? 'Collapse direction notes' : 'Expand direction notes'}
          >
            <ChevronDown className={`size-4 transition-transform ${open ? '' : 'rotate-180'}`} />
          </button>
          <button
            type="button"
            onClick={() => setHidden(true)}
            className="flex size-8 shrink-0 items-center justify-center rounded-lg text-white/60 hover:bg-white/10 hover:text-white"
            aria-label="Hide switcher"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

'use client'

import { Download } from 'lucide-react'

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.print()
        }
      }}
      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all shrink-0 cursor-pointer shadow-2xs"
    >
      <Download className="size-3.5" />
      Print / Save Reference
    </button>
  )
}

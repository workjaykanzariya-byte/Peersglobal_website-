'use client'

import Link from 'next/link'
import { FolderTree, ExternalLink, Sparkles, CheckCircle } from 'lucide-react'

export default function AdminCirclesPage() {
  const circles = [
    { title: 'Founders Circle', slug: 'founders-circle', category: 'Executive' },
    { title: 'Global Trade Circle', slug: 'global-trade-circle', category: 'Commerce' },
    { title: 'Tech & AI Innovators Circle', slug: 'tech-ai-innovators-circle', category: 'Technology' },
    { title: 'Women Leaders Circle', slug: 'women-leaders-circle', category: 'Leadership' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <FolderTree className="w-6 h-6 text-amber-400" />
            Circles & Initiatives Manager
          </h1>
          <p className="text-xs text-slate-400 mt-1">Manage active peer circles, memberships, and category listings.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {circles.map((c, i) => (
          <div key={i} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-semibold border border-amber-500/20">
                {c.category}
              </span>
              <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Active
              </span>
            </div>
            <h3 className="text-base font-bold text-white">{c.title}</h3>
            <div className="flex items-center justify-between pt-2 border-t border-slate-800">
              <span className="text-xs text-slate-400 font-mono">/circles/{c.slug}</span>
              <Link
                href={`/circles/${c.slug}`}
                target="_blank"
                className="text-xs text-amber-400 hover:underline flex items-center gap-1"
              >
                View Live Page <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

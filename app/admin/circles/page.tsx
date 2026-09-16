'use client'

import Link from 'next/link'
import { FolderTree, ExternalLink, Sparkles, CheckCircle, Users, ArrowRight } from 'lucide-react'

export default function AdminCirclesPage() {
  const circles = [
    { title: 'Founders Circle', slug: 'founders-circle', category: 'Executive', members: '140+ Promoters', location: 'Mumbai & Delhi' },
    { title: 'Global Trade & Export Circle', slug: 'global-trade-circle', category: 'Commerce', members: '95+ Exporters', location: 'Ahmedabad & Surat' },
    { title: 'Tech & AI Innovators Circle', slug: 'tech-ai-innovators-circle', category: 'Technology', members: '120+ Founders', location: 'Bengaluru & Hyderabad' },
    { title: 'Women Leaders Circle', slug: 'women-leaders-circle', category: 'Leadership', members: '80+ Executives', location: 'Pan-India' },
    { title: 'Industrial & Manufacturing Circle', slug: 'industrial-manufacturing-circle', category: 'Manufacturing', members: '110+ Promoters', location: 'Pune & Chennai' },
    { title: 'Real Estate & Infrastructure Circle', slug: 'real-estate-infrastructure-circle', category: 'Real Estate', members: '75+ Developers', location: 'NCR & Mumbai' },
  ]

  return (
    <div className="space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/20 flex items-center justify-center">
            <FolderTree className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white font-display">Peer Circles & Initiatives</h1>
            <p className="text-xs text-slate-400 mt-0.5">Manage active governed peer circles, exclusive chapters, and memberships.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {circles.map((c, i) => (
          <div key={i} className="bg-[#0B1220]/80 border border-slate-800/90 hover:border-blue-500/40 rounded-2xl p-5 space-y-3.5 transition group shadow-sm">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-semibold border border-blue-500/20">
                {c.category}
              </span>
              <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <CheckCircle className="w-3 h-3" /> Governed Active
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition font-display">{c.title}</h3>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span>{c.members}</span>
                <span>•</span>
                <span>{c.location}</span>
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
              <span className="text-[11px] text-slate-500 font-mono">/circles/{c.slug}</span>
              <Link
                href={`/circles/${c.slug}`}
                target="_blank"
                className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition"
              >
                <span>Live View</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

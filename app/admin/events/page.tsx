'use client'

import React from 'react'
import { Calendar, Plus, ExternalLink, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function AdminEventsPage() {
  const events = [
    { title: 'Global Founders Conclave 2026', date: 'Oct 14-16, 2026', location: 'Dubai, UAE', status: 'Registration Open' },
    { title: 'Peer Trade & Supply Summit', date: 'Nov 20, 2026', location: 'London, UK', status: 'Upcoming' },
    { title: 'Tech Leadership Roundtable', date: 'Dec 05, 2026', location: 'Virtual', status: 'Planning' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Calendar className="w-6 h-6 text-amber-400" />
            Events & Conclaves Manager
          </h1>
          <p className="text-xs text-slate-400 mt-1">Schedule and manage upcoming conclaves and event recordings.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.map((ev, idx) => (
          <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">
            <span className="px-2 py-1 rounded-full bg-slate-800 text-amber-300 text-[10px] font-semibold border border-slate-700">
              {ev.status}
            </span>
            <h3 className="text-sm font-bold text-white leading-snug">{ev.title}</h3>
            <div className="space-y-1 text-xs text-slate-400">
              <p>📅 {ev.date}</p>
              <p className="flex items-center gap-1"><MapPin className="w-3 h-3 text-amber-400" /> {ev.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

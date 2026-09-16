'use client'

import React from 'react'
import { Calendar, Plus, ExternalLink, MapPin, Sparkles, Clock, Users } from 'lucide-react'
import Link from 'next/link'

export default function AdminEventsPage() {
  const events = [
    {
      title: 'Global Founders Conclave 2026',
      date: 'Oct 14-16, 2026',
      time: '09:00 AM - 06:00 PM IST',
      location: 'Dubai, UAE & Hybrid',
      status: 'Registration Open',
      capacity: '350 Delegates',
      badge: 'Annual Flagship',
    },
    {
      title: 'Peer Trade & Cross-Border Supply Summit',
      date: 'Nov 20, 2026',
      time: '10:00 AM - 05:00 PM GMT',
      location: 'London, UK (The Savoy)',
      status: 'Upcoming',
      capacity: '180 Attendees',
      badge: 'International',
    },
    {
      title: 'Tech Leadership & AI Promoters Roundtable',
      date: 'Dec 05, 2026',
      time: '02:00 PM - 06:00 PM IST',
      location: 'Bengaluru, India',
      status: 'In Planning',
      capacity: '60 Promoters',
      badge: 'Exclusive',
    },
    {
      title: 'National Promoters Assembly 2027',
      date: 'Jan 18, 2027',
      time: 'Full Day Event',
      location: 'Mumbai, India',
      status: 'Scheduled',
      capacity: '500+ Leaders',
      badge: 'National Assembly',
    },
  ]

  return (
    <div className="space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/20 flex items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white font-display">Conclaves & Events Manager</h1>
            <p className="text-xs text-slate-400 mt-0.5">Schedule and oversee flagship conclaves, promoter summits, and circle assemblies.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((ev, idx) => (
          <div key={idx} className="bg-[#0B1220]/80 border border-slate-800/90 hover:border-blue-500/40 rounded-2xl p-5 space-y-3.5 transition group shadow-sm">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-semibold border border-blue-500/20">
                {ev.badge}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
                {ev.status}
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition font-display leading-snug">{ev.title}</h3>
            </div>

            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="flex items-center gap-2 text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="text-white font-medium">{ev.date}</span>
                <span>•</span>
                <span>{ev.time}</span>
              </p>
              <p className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#E53935] shrink-0" />
                <span>{ev.location}</span>
              </p>
              <p className="flex items-center gap-2 text-slate-400">
                <Users className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{ev.capacity}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

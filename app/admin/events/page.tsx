'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ArrowUpRight,
  Sparkles,
  Layers,
  Globe2,
  CheckCircle2,
  CalendarDays,
  Plus,
} from 'lucide-react'

interface EventItem {
  id: string
  title: string
  slug: string
  date: string
  time: string
  location: string
  status: string
  statusColor: {
    bg: string
    text: string
    border: string
  }
  capacity: string
  badge: string
  badgeColor: {
    bg: string
    text: string
    border: string
  }
  iconBg: string
  iconColor: string
}

export default function AdminEventsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const events: EventItem[] = [
    {
      id: 'founders-conclave-2026',
      title: 'Global Founders Conclave 2026',
      slug: 'global-founders-conclave-2026',
      date: 'Oct 14-16, 2026',
      time: '09:00 AM - 06:00 PM IST',
      location: 'Dubai, UAE & Hybrid',
      status: 'Registration Open',
      statusColor: {
        bg: 'bg-emerald-50',
        text: 'text-emerald-600',
        border: 'border-emerald-200/80',
      },
      capacity: '350 Delegates',
      badge: 'Annual Flagship',
      badgeColor: {
        bg: 'bg-blue-50',
        text: 'text-[#1769FF]',
        border: 'border-blue-200/70',
      },
      iconBg: 'bg-blue-50 border border-blue-100/80 shadow-xs',
      iconColor: 'text-[#1769FF]',
    },
    {
      id: 'peer-trade-summit-2026',
      title: 'Peer Trade & Cross-Border Supply Summit',
      slug: 'peer-trade-cross-border-supply-summit',
      date: 'Nov 20, 2026',
      time: '10:00 AM - 05:00 PM GMT',
      location: 'London, UK (The Savoy)',
      status: 'Upcoming',
      statusColor: {
        bg: 'bg-sky-50',
        text: 'text-sky-600',
        border: 'border-sky-200/80',
      },
      capacity: '180 Attendees',
      badge: 'International',
      badgeColor: {
        bg: 'bg-sky-50',
        text: 'text-sky-600',
        border: 'border-sky-200/70',
      },
      iconBg: 'bg-sky-50 border border-sky-100/80 shadow-xs',
      iconColor: 'text-sky-600',
    },
    {
      id: 'tech-leadership-roundtable',
      title: 'Tech Leadership & AI Promoters Roundtable',
      slug: 'tech-leadership-ai-promoters-roundtable',
      date: 'Dec 05, 2026',
      time: '02:00 PM - 06:00 PM IST',
      location: 'Bengaluru, India',
      status: 'In Planning',
      statusColor: {
        bg: 'bg-amber-50',
        text: 'text-amber-700',
        border: 'border-amber-200/80',
      },
      capacity: '60 Promoters',
      badge: 'Exclusive',
      badgeColor: {
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-200/70',
      },
      iconBg: 'bg-purple-50 border border-purple-100/80 shadow-xs',
      iconColor: 'text-purple-600',
    },
    {
      id: 'promoters-assembly-2027',
      title: 'National Promoters Assembly 2027',
      slug: 'national-promoters-assembly-2027',
      date: 'Jan 18, 2027',
      time: 'Full Day Event',
      location: 'Mumbai, India',
      status: 'Scheduled',
      statusColor: {
        bg: 'bg-indigo-50',
        text: 'text-indigo-600',
        border: 'border-indigo-200/80',
      },
      capacity: '500+ Leaders',
      badge: 'National Assembly',
      badgeColor: {
        bg: 'bg-emerald-50',
        text: 'text-emerald-700',
        border: 'border-emerald-200/70',
      },
      iconBg: 'bg-emerald-50 border border-emerald-100/80 shadow-xs',
      iconColor: 'text-emerald-600',
    },
  ]

  const filteredEvents = events.filter(
    (ev) =>
      ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.badge.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 font-sans">
      {/* 1. Header Hero Banner Card */}
      <div className="relative overflow-hidden rounded-3xl bg-white border border-[#E2E8F4] p-6 md:p-8 shadow-sm">
        {/* Colorful gradient aura decoration in top-right */}
        <div className="absolute top-0 right-0 w-80 h-full pointer-events-none opacity-60">
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-gradient-to-br from-purple-300/50 via-cyan-200/60 to-blue-400/40 blur-2xl transform rotate-12" />
          <div className="absolute top-8 right-16 w-44 h-44 rounded-full bg-gradient-to-tr from-pink-200/40 via-blue-200/50 to-indigo-300/40 blur-xl" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start md:items-center gap-4">
            {/* Header Icon Box */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1769FF]/10 via-[#08C7E8]/15 to-purple-500/10 border border-[#1769FF]/20 flex items-center justify-center text-[#1769FF] shadow-inner shrink-0">
              <CalendarDays className="w-7 h-7" />
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#101B35] tracking-tight">
                Conclaves & Events Manager
              </h1>
              <p className="text-sm text-slate-500 mt-1 font-medium">
                Schedule and oversee flagship conclaves, promoter summits, and circle assemblies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEvents.map((ev) => (
          <div
            key={ev.id}
            className="group relative bg-white rounded-3xl border border-[#E2E8F4] p-6 shadow-xs hover:shadow-xl hover:border-blue-300/70 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Top Row: Icon + Badge + Status */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center ${ev.iconBg} ${ev.iconColor}`}
                  >
                    <Calendar className="w-5 h-5" />
                  </div>

                  {/* Type / Badge Pill */}
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${ev.badgeColor.bg} ${ev.badgeColor.text} ${ev.badgeColor.border}`}
                  >
                    {ev.badge}
                  </span>
                </div>

                {/* Status Pill Badge */}
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border ${ev.statusColor.bg} ${ev.statusColor.text} ${ev.statusColor.border}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                  <span>{ev.status}</span>
                </span>
              </div>

              {/* Event Title */}
              <h3 className="text-lg font-bold text-[#101B35] group-hover:text-[#1769FF] transition-colors leading-snug mb-4">
                {ev.title}
              </h3>

              {/* Event Details List */}
              <div className="space-y-2.5 text-xs text-slate-600 mb-6 bg-[#F8FAFD] rounded-2xl p-4 border border-[#EDF2F9]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#1769FF] shrink-0" />
                  <span className="font-semibold text-[#101B35]">{ev.date}</span>
                  <span className="text-slate-300 font-bold">•</span>
                  <span className="text-slate-500">{ev.time}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E53935] shrink-0" />
                  <span className="font-medium text-slate-600">{ev.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-sky-500 shrink-0" />
                  <span className="font-medium text-slate-600">{ev.capacity}</span>
                </div>
              </div>
            </div>

            {/* Bottom Footer Row */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
              <span className="text-xs font-mono text-slate-400 truncate max-w-[200px]">
                /events/{ev.slug}
              </span>

              <Link
                href={`/events/${ev.slug}`}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769FF] hover:text-blue-700 group-hover:underline transition-all"
              >
                <span>Live View</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


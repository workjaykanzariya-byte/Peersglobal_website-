'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Calendar,
  Plus,
  MapPin,
  Sparkles,
  Clock,
  Users,
  Search,
  ArrowRight,
  ArrowUpRight,
  Globe,
  Building2,
  Rocket,
  X,
  CalendarCheck,
  UserCheck,
  ChevronRight,
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
  description: string
  bgImage?: string
}

export default function AdminEventsPage() {
  const [search, setSearch] = useState('')
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)
  const [isNewModalOpen, setIsNewModalOpen] = useState(false)

  const events: EventItem[] = [
    {
      id: 'EV-2026-01',
      title: 'Global Founders Conclave 2026',
      slug: 'global-founders-conclave-2026',
      date: 'Oct 14 – 16, 2026',
      time: '09:00 AM – 06:00 PM IST',
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
        bg: 'bg-indigo-50',
        text: 'text-[#4F46E5]',
        border: 'border-indigo-100',
      },
      bgImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
      description:
        'The premier annual gathering of Indian promoters, global venture capital leads, and cross-border trade syndicates.',
    },
    {
      id: 'EV-2026-02',
      title: 'Peer Trade & Cross-Border Supply Summit',
      slug: 'peer-trade-cross-border-supply-summit',
      date: 'Nov 20, 2026',
      time: '10:00 AM – 05:00 PM GMT',
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
        border: 'border-sky-100',
      },
      bgImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop',
      description:
        'Exclusive roundtables focusing on GCC-UK freight corridors, international capital structuring, and export joint ventures.',
    },
    {
      id: 'EV-2026-03',
      title: 'Tech Leadership & AI Promoters Roundtable',
      slug: 'tech-leadership-ai-promoters-roundtable',
      date: 'Dec 05, 2026',
      time: '02:00 PM – 06:00 PM IST',
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
        border: 'border-purple-100',
      },
      bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      description:
        'Closed-door strategy session for enterprise SaaS founders, cloud infrastructure leaders, and AI patent holders.',
    },
    {
      id: 'EV-2027-01',
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
        border: 'border-emerald-100',
      },
      bgImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200&auto=format&fit=crop',
      description:
        'Annual general assembly reviewing Circle growth milestones, category exclusivity expansion, and national economic impact.',
    },
  ]

  const filtered = events.filter(
    (ev) =>
      ev.title.toLowerCase().includes(search.toLowerCase()) ||
      ev.location.toLowerCase().includes(search.toLowerCase()) ||
      ev.badge.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6 font-sans pb-16">
      {/* 1. Top Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#E8ECF4] shadow-xs">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-[#4F46E5] text-[11px] font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>Events &amp; Conclaves Engine</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B] tracking-tight">
            Conclaves &amp; Events Manager
          </h1>
          <p className="text-xs text-slate-500">
            Schedule and oversee flagship conclaves, promoter summits, and circle assemblies.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => setIsNewModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold shadow-xs transition-all flex items-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>+ Create Event</span>
          </button>
        </div>
      </div>

      {/* 2. KPI Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-[#E8ECF4] rounded-2xl p-4 shadow-xs flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-[#1E293B] font-display">12</h3>
            <p className="text-xs text-slate-500 font-medium">Total Events</p>
          </div>
        </div>

        <div className="bg-white border border-[#E8ECF4] rounded-2xl p-4 shadow-xs flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-[#1E293B] font-display">1,250</h3>
            <p className="text-xs text-slate-500 font-medium">Total Attendees</p>
          </div>
        </div>

        <div className="bg-white border border-[#E8ECF4] rounded-2xl p-4 shadow-xs flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-[#1E293B] font-display">45</h3>
            <p className="text-xs text-slate-500 font-medium">Partner Hubs</p>
          </div>
        </div>

        <div className="bg-white border border-[#E8ECF4] rounded-2xl p-4 shadow-xs flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Rocket className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-[#1E293B] font-display">8</h3>
            <p className="text-xs text-slate-500 font-medium">Upcoming Events</p>
          </div>
        </div>
      </div>

      {/* 3. Section Search Bar */}
      <div className="bg-white border border-[#E8ECF4] rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search events by title, location, or tag..."
            className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl pl-10 pr-4 py-2 text-xs text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:border-[#4F46E5] transition"
          />
        </div>
        <span className="text-xs text-slate-400 font-medium whitespace-nowrap">Showing {filtered.length} Events</span>
      </div>

      {/* 4. Featured Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((ev) => (
          <div
            key={ev.id}
            className="relative overflow-hidden rounded-2xl bg-white border border-[#E8ECF4] p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              {/* Top Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-[#4F46E5] border border-indigo-100">
                  {ev.badge}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${ev.statusColor.bg} ${ev.statusColor.text} ${ev.statusColor.border}`}
                >
                  {ev.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#1E293B] group-hover:text-[#4F46E5] transition leading-snug mb-3">
                {ev.title}
              </h3>

              {/* Info Details */}
              <div className="space-y-2 text-xs text-slate-500 bg-[#F8FAFC] rounded-xl p-3.5 border border-[#E8ECF4] mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#4F46E5] shrink-0" />
                  <span className="font-semibold text-[#1E293B]">{ev.date}</span>
                  <span className="text-slate-300">•</span>
                  <span>{ev.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>{ev.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{ev.capacity}</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">/events/{ev.slug}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedEvent(ev)}
                  className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-[#E8ECF4] transition cursor-pointer"
                >
                  View Details
                </button>
                <Link
                  href={`/events/${ev.slug}`}
                  target="_blank"
                  className="p-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-[#4F46E5] transition"
                  title="Live View"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#E8ECF4] rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-1">
              <span className="px-2 py-0.5 rounded-md bg-[#1E293B] text-white font-mono text-[10px] font-bold">
                {selectedEvent.id}
              </span>
              <h2 className="text-xl font-bold text-[#1E293B] font-display">{selectedEvent.title}</h2>
              <p className="text-xs text-slate-500">{selectedEvent.location}</p>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">{selectedEvent.description}</p>
            <div className="space-y-2 bg-[#F8FAFC] p-4 rounded-xl border border-[#E8ECF4] text-xs">
              <p className="flex justify-between">
                <span className="text-slate-500">Date &amp; Time:</span>
                <span className="font-bold text-[#1E293B]">
                  {selectedEvent.date} ({selectedEvent.time})
                </span>
              </p>
              <p className="flex justify-between">
                <span className="text-slate-500">Capacity:</span>
                <span className="font-bold text-emerald-600">{selectedEvent.capacity}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-slate-500">Status:</span>
                <span className="font-bold text-[#4F46E5]">{selectedEvent.status}</span>
              </p>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-xs shadow-xs transition cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Create Event Modal */}
      {isNewModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#E8ECF4] rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsNewModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-bold text-[#1E293B]">Schedule Flagship Event</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setIsNewModalOpen(false)
                alert('Event scheduled successfully!')
              }}
              className="space-y-3.5 text-xs"
            >
              <div>
                <label className="block font-bold text-slate-700 mb-1">Event Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. National Promoters Summit 2027"
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2 text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Date</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Oct 24, 2026"
                    className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2 text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Location</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dubai, UAE"
                    className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2 text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsNewModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#E8ECF4] text-slate-600 text-xs font-semibold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-xs shadow-xs transition cursor-pointer"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

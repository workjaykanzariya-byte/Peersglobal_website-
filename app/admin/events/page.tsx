'use client'

import React, { useState } from 'react'
import {
  Calendar,
  Plus,
  MapPin,
  Sparkles,
  Clock,
  Users,
  Search,
  ArrowRight,
  Globe,
  Building2,
  Rocket,
  X,
  CalendarCheck,
  UserCheck,
  ChevronRight,
} from 'lucide-react'

export default function AdminEventsPage() {
  const [search, setSearch] = useState('')
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null)
  const [isNewModalOpen, setIsNewModalOpen] = useState(false)

  const events = [
    {
      id: 'EV-2026-01',
      title: 'Global Founders Conclave 2026',
      date: 'Oct 14 – 16, 2026',
      time: '09:00 AM – 06:00 PM IST',
      location: 'Dubai, UAE & Hybrid',
      status: 'Registration Open',
      capacity: '350 Delegates',
      badge: 'Annual Flagship',
      bgImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
      description:
        'The premier annual gathering of Indian promoters, global venture capital leads, and cross-border trade syndicates.',
    },
    {
      id: 'EV-2026-02',
      title: 'Peer Trade & Cross-Border Supply Summit',
      date: 'Nov 20, 2026',
      time: '10:00 AM – 05:00 PM GMT',
      location: 'London, UK (The Savoy)',
      status: 'Upcoming',
      capacity: '180 Attendees',
      badge: 'International',
      bgImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop',
      description:
        'Exclusive roundtables focusing on GCC-UK freight corridors, international capital structuring, and export joint ventures.',
    },
    {
      id: 'EV-2026-03',
      title: 'Tech Leadership & AI Promoters Roundtable',
      date: 'Dec 05, 2026',
      time: '02:00 PM – 06:00 PM IST',
      location: 'Bengaluru, India',
      status: 'In Planning',
      capacity: '60 Promoters',
      badge: 'Exclusive',
      bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      description:
        'Closed-door strategy session for enterprise SaaS founders, cloud infrastructure leaders, and AI patent holders.',
    },
    {
      id: 'EV-2027-01',
      title: 'National Promoters Assembly 2027',
      date: 'Jan 18, 2027',
      time: 'Full Day Event',
      location: 'Mumbai, India',
      status: 'Scheduled',
      capacity: '500+ Leaders',
      badge: 'National Assembly',
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
    <div className="space-y-8 font-sans pb-16 max-w-7xl mx-auto">
      {/* 1. TOP HERO BANNER (MATCHING REFERENCE IMAGE 1 EXPLICITLY) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#C7D9FE] via-[#E2EDFF] to-[#D5E5FF] border border-[#BFD7FE] p-6 sm:p-8 shadow-sm">
        {/* Sky/Atmosphere visual layer elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-400/20 via-sky-300/10 to-transparent pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          {/* Left Title & Action Buttons */}
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#3B82F6] to-[#6366F1] text-white flex items-center justify-center shadow-lg shadow-[#3B82F6]/30 shrink-0">
                <Calendar className="w-7 h-7 stroke-[2.2]" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] tracking-tight font-display">
                  Conclaves & Events Manager
                </h1>
                <p className="text-xs sm:text-sm text-[#475569] font-medium mt-0.5">
                  Schedule and oversee flagship conclaves, promoter summits, and circle assemblies.
                </p>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => setIsNewModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white font-bold text-xs shadow-md shadow-[#4F46E5]/25 transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>+ Create Event</span>
              </button>

              <button
                onClick={() => alert('Opening Events Calendar View')}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#0B1528] border border-slate-200/90 font-bold text-xs shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-[#3B82F6]" />
                <span>View Calendar</span>
              </button>

              <button
                onClick={() => alert('Opening Delegate Registrations Manager')}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#0B1528] border border-slate-200/90 font-bold text-xs shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <UserCheck className="w-4 h-4 text-[#10B981]" />
                <span>Manage Registrations</span>
              </button>
            </div>
          </div>

          {/* Right Banner Visual & Quote (Matching Reference Spec) */}
          <div className="hidden lg:flex items-center gap-4 relative">
            <div className="text-right space-y-1">
              <span className="text-2xl font-serif italic font-bold text-[#3B82F6] block tracking-wide leading-tight">
                Ideas Connections Impact
              </span>
              <p className="text-xs font-semibold text-[#0B1528] italic max-w-xs leading-snug">
                &quot;Bringing global minds together for a better tomorrow.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. KPI STAT CARDS (4 CARDS MATCHING REFERENCE IMAGE 1) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Events */}
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-4 shadow-2xs flex items-center gap-3.5 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-xl bg-[#3B82F6] text-white flex items-center justify-center shadow-md shadow-[#3B82F6]/20 shrink-0">
            <Calendar className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-[#0B1528] font-display">12</h3>
            <p className="text-xs font-semibold text-[#64748B]">Total Events</p>
          </div>
        </div>

        {/* Card 2: Total Attendees */}
        <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-4 shadow-2xs flex items-center gap-3.5 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-xl bg-[#10B981] text-white flex items-center justify-center shadow-md shadow-[#10B981]/20 shrink-0">
            <Users className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-[#0B1528] font-display">1,250</h3>
            <p className="text-xs font-semibold text-[#64748B]">Total Attendees</p>
          </div>
        </div>

        {/* Card 3: Partner Organizations */}
        <div className="bg-[#F3E8FF] border border-[#DDD6FE] rounded-2xl p-4 shadow-2xs flex items-center gap-3.5 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-xl bg-[#8B5CF6] text-white flex items-center justify-center shadow-md shadow-[#8B5CF6]/20 shrink-0">
            <Building2 className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-[#0B1528] font-display">45</h3>
            <p className="text-xs font-semibold text-[#64748B]">Partner Organizations</p>
          </div>
        </div>

        {/* Card 4: Upcoming Events */}
        <div className="bg-[#FFF7ED] border border-[#FFEDD5] rounded-2xl p-4 shadow-2xs flex items-center gap-3.5 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-xl bg-[#F97316] text-white flex items-center justify-center shadow-md shadow-[#F97316]/20 shrink-0">
            <Rocket className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-[#0B1528] font-display">8</h3>
            <p className="text-xs font-semibold text-[#64748B]">Upcoming Events</p>
          </div>
        </div>
      </div>

      {/* 3. SECTION HEADING & SEARCH */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <h2 className="text-xl font-extrabold text-[#0B1528] font-display tracking-tight">
          Upcoming & Featured Events
        </h2>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events..."
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs text-[#0B1528] placeholder:text-slate-400 font-medium focus:outline-none focus:border-[#3B82F6] transition shadow-2xs"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <button
            onClick={() => setSearch('')}
            className="text-xs font-bold text-[#3B82F6] hover:underline whitespace-nowrap flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>View All Events</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 4. FEATURED EVENT CARDS GRID (BACKGROUND IMAGE CARDS MATCHING REFERENCE IMAGE 1) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((ev) => (
          <div
            key={ev.id}
            className="relative overflow-hidden rounded-3xl min-h-[220px] p-6 sm:p-7 flex flex-col justify-between text-white shadow-lg shadow-slate-900/10 border border-slate-700/30 group transition-all duration-300 hover:scale-[1.01]"
          >
            {/* Background Image Layer */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${ev.bgImage})` }}
            />
            {/* Dark Overlay Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/85 to-[#0B1528]/40" />

            {/* Top Badges */}
            <div className="relative z-10 flex items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full bg-[#3B82F6]/90 backdrop-blur-md text-white font-bold text-xs shadow-xs border border-white/20">
                {ev.badge}
              </span>
              <span
                className={`px-3 py-1 rounded-full font-bold text-xs backdrop-blur-md shadow-xs border ${
                  ev.status === 'Registration Open'
                    ? 'bg-emerald-500/90 text-white border-emerald-400/40'
                    : ev.status === 'Upcoming'
                    ? 'bg-amber-500/90 text-white border-amber-400/40'
                    : ev.status === 'In Planning'
                    ? 'bg-blue-500/90 text-white border-blue-400/40'
                    : 'bg-emerald-500/90 text-white border-emerald-400/40'
                }`}
              >
                {ev.status}
              </span>
            </div>

            {/* Card Content */}
            <div className="relative z-10 space-y-3 pt-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-200 transition font-display leading-snug">
                {ev.title}
              </h3>

              <div className="space-y-1.5 text-xs text-slate-200 font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="font-bold text-white">{ev.date}</span>
                  <span className="text-slate-400">|</span>
                  <span>{ev.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>{ev.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{ev.capacity}</span>
                </div>
              </div>

              {/* Action Circle Arrow Button */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedEvent(ev)}
                  className="w-10 h-10 rounded-full bg-white text-[#0B1528] hover:bg-[#3B82F6] hover:text-white flex items-center justify-center transition-all shadow-md group-hover:scale-110 cursor-pointer"
                  title="View Event Details"
                >
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 5. EVENT DETAIL MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-md bg-[#0B1528] text-white font-mono text-[10px] font-bold">
                {selectedEvent.id}
              </span>
              <h2 className="text-xl font-bold text-[#0B1528] font-display">{selectedEvent.title}</h2>
              <p className="text-xs text-[#64748B]">{selectedEvent.location}</p>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">{selectedEvent.description}</p>
            <div className="space-y-2 bg-[#F8FAFC] p-4 rounded-2xl border border-slate-200 text-xs">
              <p className="flex justify-between">
                <span className="text-[#64748B]">Date & Time:</span>
                <span className="font-bold text-[#0B1528]">
                  {selectedEvent.date} ({selectedEvent.time})
                </span>
              </p>
              <p className="flex justify-between">
                <span className="text-[#64748B]">Capacity:</span>
                <span className="font-bold text-[#10B981]">{selectedEvent.capacity}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-[#64748B]">Status:</span>
                <span className="font-bold text-[#3B82F6]">{selectedEvent.status}</span>
              </p>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-5 py-2.5 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold text-xs shadow-md transition cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. CREATE NEW EVENT MODAL */}
      {isNewModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsNewModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold text-[#0B1528] font-display">Schedule Flagship Event</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setIsNewModalOpen(false)
                alert('Event request created successfully!')
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block font-bold text-[#0B1528] mb-1">Event Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. National Promoters Summit 2027"
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-[#0B1528] focus:outline-none focus:border-[#3B82F6]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#0B1528] mb-1">Date</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Oct 24, 2026"
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-[#0B1528] focus:outline-none focus:border-[#3B82F6]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#0B1528] mb-1">Location</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dubai, UAE"
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-[#0B1528] focus:outline-none focus:border-[#3B82F6]"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsNewModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-[#475569] font-bold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold shadow-md transition cursor-pointer"
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

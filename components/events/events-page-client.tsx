'use client'

import React, { useEffect, useState, useMemo } from 'react'
import Image from 'next/image'
import { Calendar, MapPin, Users, Loader2, Video, Clock, Sparkles, LayoutGrid, List, Search, ArrowRight, Share2, Heart, Ticket } from 'lucide-react'
import { Card, Tag } from '@/components/site/ui'
import { fetchAllEvents, PeerEvent } from '@/lib/api/events'
import { formatEventDateTime } from '@/lib/utils/date-format'
import { EventRegistrationModal } from '@/components/events/event-registration-modal'
import { fetchCities } from '@/lib/api/unity'

export function EventsPageClient() {
  const [events, setEvents] = useState<PeerEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedEvent, setSelectedEvent] = useState<PeerEvent | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState<'meetup' | 'grid'>('meetup')
  const [selectedTab, setSelectedTab] = useState<'all' | 'virtual' | 'in_person'>('all')
  const [selectedCity, setSelectedCity] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [cities, setCities] = useState<string[]>([])
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    async function loadEvents() {
      setLoading(true)
      try {
        const [data, cityData] = await Promise.all([
          fetchAllEvents(),
          fetchCities(),
        ])
        setEvents(data)

        if (Array.isArray(cityData) && cityData.length > 0) {
          const names = cityData.map((c: any) => c.name || c.city_name || c).filter(Boolean)
          setCities(names)
        } else {
          setCities(['Ahmedabad', 'Surat', 'Mumbai', 'Bengaluru', 'Delhi-NCR', 'Pune', 'Hyderabad', 'Vadodara', 'Rajkot'])
        }
      } catch (err) {
        console.error('Error fetching calendar events:', err)
      } finally {
        setLoading(false)
      }
    }
    loadEvents()
  }, [])

  const handleRegisterClick = (event: PeerEvent) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  // Filtered Events
  const filteredEvents = useMemo(() => {
    return events.filter((e) => {
      if (selectedTab === 'virtual' && e.mode !== 'virtual') return false
      if (selectedTab === 'in_person' && e.mode === 'virtual') return false

      if (selectedCity !== 'all') {
        const locationMatch = e.location?.toLowerCase().includes(selectedCity.toLowerCase())
        const circleMatch = e.circle?.name?.toLowerCase().includes(selectedCity.toLowerCase())
        if (!locationMatch && !circleMatch) return false
      }

      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase()
        const titleMatch = e.title.toLowerCase().includes(query)
        const locationMatch = e.location?.toLowerCase().includes(query)
        const typeMatch = e.event_type?.toLowerCase().includes(query)
        const circleMatch = e.circle?.name?.toLowerCase().includes(query)
        if (!titleMatch && !locationMatch && !typeMatch && !circleMatch) return false
      }

      return true
    })
  }, [events, selectedTab, selectedCity, searchQuery])

  const priority = filteredEvents[0]
  const restEvents = priority ? filteredEvents.slice(1) : filteredEvents

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pb-20">
      {/* Google Docs Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1b3a] via-[#122347] to-[#0b1b3a] text-white pt-16 pb-16 border-b border-[var(--border)]">
        <div className="shell relative z-10 flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-[#0b1b3a] bg-[#D4AF37]">
            VISIT A MEETING AS A GUEST
          </div>
          <h1 className="display text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-snug">
            Do not take our word for it.<br />
            <span className="text-[#D4AF37]">Take a seat.</span>
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed">
            Visit a Circle meeting as a guest. Watch how it runs, meet the members, and decide afterwards. Real gatherings for entrepreneurs across India.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-white/80 pt-2">
            <span>✓ No membership required</span>
            <span>✓ No cost to visit</span>
            <span>✓ No sales pitch</span>
          </div>
        </div>
      </section>

      {/* Top Filter Bar */}
      <section className="sticky top-0 z-30 border-b border-[var(--border)] bg-background/95 backdrop-blur-md py-3 shadow-xs">
        <div className="shell flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedTab('all')}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all ${
                selectedTab === 'all'
                  ? 'bg-foreground text-background shadow-md'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              All Events ({events.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab('virtual')}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all ${
                selectedTab === 'virtual'
                  ? 'bg-foreground text-background shadow-md'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              Online Events
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab('in_person')}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all ${
                selectedTab === 'in_person'
                  ? 'bg-foreground text-background shadow-md'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              In-Person Meetups
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 sm:w-56">
              <Search className="absolute left-3 top-2.5 size-3.5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-[var(--border)] bg-muted/30 pl-8 pr-4 py-1.5 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="rounded-full border border-[var(--border)] bg-muted/30 px-4 py-1.5 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-bold"
            >
              <option value="all">All Cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <div className="flex items-center rounded-full border border-[var(--border)] bg-muted/40 p-1">
              <button
                type="button"
                onClick={() => setViewMode('meetup')}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === 'meetup' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
                title="Meetup 2-Column View"
              >
                <List className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === 'grid' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
                title="Grid Cards View"
              >
                <LayoutGrid className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Events Body */}
      <section className="section py-8">
        <div className="shell flex flex-col gap-12">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-3 text-muted-foreground">
              <Loader2 className="size-9 text-primary animate-spin" />
              <p className="text-xs font-mono">Syncing live events from Unity App...</p>
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-20 border border-dashed border-[var(--border)] rounded-3xl bg-card p-8">
              <Calendar className="size-14 text-muted-foreground mb-3" />
              <h3 className="display text-2xl font-bold text-foreground">No upcoming events match your filter</h3>
              <p className="text-sm text-muted-foreground mt-1 max-w-md">
                Try switching city or search terms to browse upcoming gatherings across India.
              </p>
            </div>
          ) : (
            <>
              {/* MEETUP.COM FEATURED EVENT LAYOUT */}
              {priority && (
                <div className="flex flex-col gap-8 pb-10 border-b border-[var(--border)]">
                  {/* Meetup Top Header Title */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#0067b8] bg-[#0067b8]/10 border border-[#0067b8]/20">
                        <Sparkles className="size-3.5" />
                        FEATURED EVENT
                      </span>
                      {priority.event_type && <Tag tone="neutral">{priority.event_type}</Tag>}
                    </div>

                    <h1 className="display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--ink)] leading-snug tracking-tight">
                      {priority.title}
                    </h1>

                    <div className="flex items-center gap-3 pt-1">
                      <div className="size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-xs border border-primary/20">
                        PG
                      </div>
                      <div className="flex flex-col text-xs">
                        <span className="text-muted-foreground">Hosted by</span>
                        <span className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">
                          {priority.circle?.name || 'Peers Global Network'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Meetup 2-Column Split Section */}
                  <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] items-start">
                    {/* Left Column: Event Description & Attendees */}
                    <div className="flex flex-col gap-8">
                      <Card className="flex flex-col gap-5 p-8 rounded-3xl border border-[var(--border)] bg-card shadow-sm">
                        <h2 className="display text-xl font-semibold text-[var(--ink)] border-l-2 border-[#0067b8] pl-3 leading-snug">
                          Details & Session Overview
                        </h2>
                        <p className="text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                          {priority.description ||
                            `Join us for an insightful session where we'll explore key industry trends, leadership strategies, and category exclusivity opportunities with verified peers.`}
                        </p>

                        <div className="pt-4 border-t border-[var(--border)] flex flex-col gap-3">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Event Mode & Access
                          </h4>
                          <div className="flex flex-wrap items-center gap-2">
                            <Tag tone={priority.mode === 'virtual' ? 'blue' : 'neutral'}>
                              {priority.mode === 'virtual' ? '🎥 Online Virtual Room' : '📍 In-Person Gathering'}
                            </Tag>
                            {priority.circle?.name && (
                              <Tag tone="gold">{priority.circle.name}</Tag>
                            )}
                          </div>
                        </div>
                      </Card>

                      {/* Registered Peers Attendees Section - HIDE IF NO ATTENDEES */}
                      {priority.registered_count && priority.registered_count > 0 ? (
                        <Card className="flex flex-col gap-4 p-7 rounded-3xl border border-[var(--border)] bg-card shadow-sm">
                          <div className="flex items-center justify-between">
                            <h3 className="display text-xl font-bold text-foreground flex items-center gap-2">
                              <Users className="size-5 text-emerald-500" />
                              Confirmed Attendees ({priority.registered_count})
                            </h3>
                            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                              Live from Unity App
                            </span>
                          </div>

                          <div className="flex items-center gap-4 pt-1">
                            <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 font-extrabold text-sm border border-emerald-500/20 shrink-0">
                              +{priority.registered_count}
                            </div>
                            <div className="flex flex-col text-xs">
                              <span className="font-bold text-foreground">
                                {priority.registered_count} verified {priority.registered_count === 1 ? 'peer' : 'peers'} registered
                              </span>
                              <span className="text-muted-foreground mt-0.5">
                                Confirmed slots in Unity App database
                              </span>
                            </div>
                          </div>
                        </Card>
                      ) : null}
                    </div>

                    {/* Right Column: Meetup Right Sticky Event Card & Poster Banner */}
                    <div className="sticky top-20 flex flex-col gap-6">
                      <Card className="flex flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-card shadow-2xl">
                        {/* Event Poster Banner */}
                        {priority.image_url ? (
                          <div className="relative w-full aspect-[1.91/1] overflow-hidden rounded-t-3xl border-b border-[var(--border)] bg-muted">
                            <Image
                              src={priority.image_url}
                              alt={priority.title}
                              fill
                              sizes="(min-width: 1024px) 35vw, 100vw"
                              className="object-cover w-full h-full"
                              priority
                            />
                            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20 shadow-md">
                              <Share2 className="size-3.5 inline mr-1" /> Share Poster
                            </div>
                          </div>
                        ) : (
                          <div className="relative w-full py-12 px-6 bg-gradient-to-br from-[#0b1b3a] to-primary flex flex-col items-center text-center text-white border-b border-white/10">
                            <Sparkles className="size-8 text-[#D4AF37] mb-2 animate-pulse" />
                            <h3 className="display text-xl font-bold">{priority.title}</h3>
                          </div>
                        )}

                        {/* Event Spec Box (Date, Time, Venue) */}
                        <div className="flex flex-col gap-4 p-6">
                          {/* Date & Time Row */}
                          <div className="flex items-start gap-3.5">
                            <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0 mt-0.5">
                              <Calendar className="size-5" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-foreground">
                                {formatEventDateTime(priority.start_at, priority.end_at).dateStr}
                              </span>
                              <span className="text-xs text-muted-foreground font-mono">
                                {formatEventDateTime(priority.start_at, priority.end_at).timeRangeStr}
                              </span>
                            </div>
                          </div>

                          {/* Location Row */}
                          <div className="flex items-start gap-3.5 pt-2 border-t border-[var(--border)]">
                            <div className="flex size-10 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 shrink-0 mt-0.5">
                              {priority.mode === 'virtual' ? <Video className="size-5 text-blue-500" /> : <MapPin className="size-5" />}
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-sm font-bold text-foreground truncate">
                                {priority.mode === 'virtual' ? 'Online Virtual Event' : (priority.location || 'In-Person Venue')}
                              </span>
                              <span className="text-xs text-muted-foreground truncate">
                                {priority.location || priority.circle?.name || 'Link visible for registered peers'}
                              </span>
                            </div>
                          </div>

                          {/* Action Controls */}
                          <div className="flex flex-col gap-3 pt-4 border-t border-[var(--border)]">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                                FREE ENTRY
                              </span>
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => setIsSaved(!isSaved)}
                                  className={`p-2 rounded-full border border-[var(--border)] transition-colors ${
                                    isSaved ? 'bg-red-500/10 text-red-500 border-red-500/30' : 'hover:bg-muted text-muted-foreground'
                                  }`}
                                  title="Save Event"
                                >
                                  <Heart className={`size-4 ${isSaved ? 'fill-red-500' : ''}`} />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (navigator.share) {
                                      navigator.share({ title: priority.title, url: window.location.href })
                                    }
                                  }}
                                  className="p-2 rounded-full border border-[var(--border)] hover:bg-muted text-muted-foreground transition-colors"
                                  title="Share"
                                >
                                  <Share2 className="size-4" />
                                </button>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleRegisterClick(priority)}
                              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-red-600/30"
                            >
                              <Ticket className="size-4" />
                              {priority.mode === 'virtual' ? 'Attend Online' : 'RSVP / Register Now'}
                            </button>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              )}

              {/* REST OF UPCOMING EVENTS LIST */}
              {restEvents.length > 0 && (
                <div className="flex flex-col gap-6 pt-6">
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                    <h3 className="display text-2xl font-bold text-foreground">
                      More Upcoming Events ({restEvents.length})
                    </h3>
                  </div>

                  {viewMode === 'meetup' ? (
                    <div className="flex flex-col gap-4">
                      {restEvents.map((e) => {
                        const { timeRangeStr } = formatEventDateTime(e.start_at, e.end_at)
                        const dateObj = new Date(e.start_at)
                        const dayOfWeek = isNaN(dateObj.getTime()) ? 'MON' : dateObj.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()
                        const dayNumber = isNaN(dateObj.getTime()) ? '15' : dateObj.getDate()
                        const monthName = isNaN(dateObj.getTime()) ? 'AUG' : dateObj.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()

                        return (
                          <div
                            key={e.event_id}
                            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-5 rounded-3xl border border-[var(--border)] bg-card hover:border-primary/50 hover:shadow-xl transition-all"
                          >
                            <div className="flex items-start sm:items-center gap-5 min-w-0 flex-1">
                              <div className="flex flex-col items-center justify-center size-16 rounded-2xl border border-primary/20 bg-muted/60 text-center shrink-0 shadow-xs group-hover:border-primary/60 group-hover:bg-primary/5 transition-all">
                                <span className="text-[10px] font-mono font-bold text-primary tracking-wider uppercase">
                                  {dayOfWeek}
                                </span>
                                <span className="text-xl font-extrabold text-foreground leading-none">
                                  {dayNumber}
                                </span>
                                <span className="text-[10px] font-mono font-semibold text-muted-foreground tracking-wider uppercase">
                                  {monthName}
                                </span>
                              </div>

                              <div className="flex flex-col gap-1.5 min-w-0 flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold text-primary bg-primary/10 border border-primary/20">
                                    {e.location ? e.location.split(',')[0] : e.circle?.name || 'Ahmedabad'}
                                  </span>
                                  {e.event_type && (
                                    <span className="text-[10px] font-semibold text-muted-foreground uppercase">
                                      • {e.event_type}
                                    </span>
                                  )}
                                </div>

                                <h4
                                  onClick={() => handleRegisterClick(e)}
                                  className="display text-lg font-bold text-foreground hover:text-primary transition-colors cursor-pointer truncate"
                                >
                                  {e.title}
                                </h4>

                                <p className="text-xs text-muted-foreground flex items-center gap-3 font-mono">
                                  <span className="flex items-center gap-1 font-bold text-foreground">
                                    <Clock className="size-3.5 text-primary" />
                                    {timeRangeStr}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <MapPin className="size-3.5 text-red-500 shrink-0" />
                                    <span className="truncate">{e.location || e.circle?.name || 'Online'}</span>
                                  </span>
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-[var(--border)] pt-3 sm:pt-0">
                              {e.registered_count && e.registered_count > 0 ? (
                                <span className="text-xs font-mono text-muted-foreground">
                                  <strong>{e.registered_count}</strong> going
                                </span>
                              ) : null}

                              <button
                                type="button"
                                onClick={() => handleRegisterClick(e)}
                                className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-red-700 active:scale-95 transition-all shadow-md shadow-red-600/20"
                              >
                                {e.mode === 'virtual' ? 'Attend Online' : 'RSVP'}
                                <ArrowRight className="size-3.5" />
                              </button>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {restEvents.map((e) => {
                        const { dateStr, timeRangeStr } = formatEventDateTime(e.start_at, e.end_at)
                        return (
                          <Card as="div" key={e.event_id} className="flex flex-col overflow-hidden border border-[var(--border)] bg-card shadow-md rounded-3xl">
                            {e.image_url && (
                              <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden border-b border-[var(--border)]">
                                <Image
                                  src={e.image_url}
                                  alt={e.title}
                                  fill
                                  sizes="(min-width: 1024px) 33vw, 100vw"
                                  className="object-cover w-full h-full"
                                />
                              </div>
                            )}

                            <div className="flex flex-col gap-3.5 p-6 flex-1">
                              <div className="flex items-center justify-between gap-2">
                                <Tag tone="blue">{e.event_type || 'Event'}</Tag>
                                {e.registered_count && e.registered_count > 0 ? (
                                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
                                    <Users className="size-3.5" />
                                    {e.registered_count} going
                                  </span>
                                ) : null}
                              </div>

                              <div>
                                <h4 className="display text-base font-bold text-foreground hover:text-primary transition-colors line-clamp-1">
                                  {e.title}
                                </h4>
                                {e.description && (
                                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                                    {e.description}
                                  </p>
                                )}
                              </div>

                              <div className="flex flex-col gap-1 text-xs text-muted-foreground pt-3 border-t border-[var(--border)] mt-auto">
                                <span className="flex items-center gap-1.5 font-mono text-primary font-semibold">
                                  <Calendar className="size-3.5 shrink-0" />
                                  {dateStr} · {timeRangeStr}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <MapPin className="size-3.5 text-red-500 shrink-0" />
                                  <span className="truncate">{e.location || e.circle?.name || 'Online / Virtual'}</span>
                                </span>
                              </div>

                              <button
                                type="button"
                                onClick={() => handleRegisterClick(e)}
                                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-red-700 transition-colors shadow-md mt-1"
                              >
                                {e.mode === 'virtual' ? 'Attend Online' : 'Register Now'}
                              </button>
                            </div>
                          </Card>
                        )
                      })}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* MEETUP STICKY BOTTOM RSVP BAR FOR PRIORITY EVENT */}
      {priority && (
        <div className="fixed bottom-0 inset-x-0 z-40 bg-card/95 border-t border-[var(--border)] p-4 shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom duration-300">
          <div className="shell flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <div className="hidden sm:flex size-10 rounded-2xl bg-primary/10 text-primary items-center justify-center font-bold shrink-0">
                <Calendar className="size-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <h4 className="text-sm font-bold text-foreground truncate">{priority.title}</h4>
                <span className="text-xs text-muted-foreground font-mono truncate">
                  {formatEventDateTime(priority.start_at, priority.end_at).dateStr} · {priority.location || 'Online'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden sm:inline-block text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                FREE
              </span>
              <button
                type="button"
                onClick={() => handleRegisterClick(priority)}
                className="rounded-full bg-red-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-red-600/30"
              >
                {priority.mode === 'virtual' ? 'Attend Online' : 'RSVP Now'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      <EventRegistrationModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Calendar, MapPin, Users, Loader2, Video, Sparkles, Clock, ArrowRight, Ticket } from 'lucide-react'
import { Card, Cta, SectionHead, Tag } from '@/components/site/ui'
import { fetchAllEvents, PeerEvent } from '@/lib/api/events'
import { formatEventDateTime } from '@/lib/utils/date-format'
import { EventRegistrationModal } from '@/components/events/event-registration-modal'

export function EventsSection() {
  const [events, setEvents] = useState<PeerEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedEvent, setSelectedEvent] = useState<PeerEvent | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      try {
        const data = await fetchAllEvents()
        setEvents(data)
      } catch (err) {
        console.error('Failed to load events:', err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  const handleRegisterClick = (event: PeerEvent) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const priorityEvent = events[0]
  const restEvents = events.slice(1, 5)

  return (
    <section className="section border-b border-[var(--border)] bg-muted/30 py-16">
      <div className="shell flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHead
            eyebrow="Live Unity Calendar"
            title="Where founders & leaders gather next"
            lede="Real-time live gatherings synced directly from Unity App. Meet verified peers across India."
          />
          <Cta href="/events" variant="outline" className="shrink-0 self-start sm:self-auto font-bold rounded-full">
            Explore All Events →
          </Cta>
        </div>

        {loading ? (
          <div className="flex flex-col gap-6">
            <div className="w-full rounded-3xl border border-[var(--border)] bg-card p-8 animate-pulse h-96 flex flex-col justify-center items-center">
              <Loader2 className="size-8 text-primary animate-spin" />
              <p className="text-xs text-muted-foreground font-mono mt-2">Syncing live events from Unity App...</p>
            </div>
          </div>
        ) : events.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-[var(--border)] rounded-3xl bg-card p-8">
            <Calendar className="size-12 text-muted-foreground mb-3" />
            <h3 className="display text-xl font-bold text-foreground">No upcoming events scheduled right now</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-md">
              Check back soon! New events published in Unity App will automatically appear here.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {/* MEETUP.COM STYLED SPLIT FEATURED CARD */}
            {priorityEvent && (
              <div className="flex flex-col gap-6">
                {/* Header Title */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#0067b8] bg-[#0067b8]/10 border border-[#0067b8]/20">
                      <Sparkles className="size-3.5" />
                      FEATURED EVENT
                    </span>
                    {priorityEvent.event_type && <Tag tone="neutral">{priorityEvent.event_type}</Tag>}
                  </div>

                  <h3 className="display text-2xl sm:text-3xl font-semibold text-[var(--ink)] leading-snug tracking-tight">
                    {priorityEvent.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Hosted by</span>
                    <span className="font-semibold text-foreground">{priorityEvent.circle?.name || 'Peers Global Network'}</span>
                  </div>
                </div>

                {/* 2-Column Split Section */}
                <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] items-start">
                  {/* Left Column: Details */}
                  <Card className="flex flex-col gap-4 p-7 rounded-3xl border border-[var(--border)] bg-card shadow-sm">
                    <h4 className="display text-lg font-semibold text-[var(--ink)] border-l-2 border-[#0067b8] pl-3 leading-snug">Overview & Details</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {priorityEvent.description ||
                        `Join us for an insightful session exploring industry trends, leadership strategies, and category exclusivity opportunities with verified peers.`}
                    </p>

                    <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex size-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 text-xs font-bold">
                          <Users className="size-3.5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-foreground">
                          {priorityEvent.registered_count || 15} Peers Attending
                        </span>
                      </div>
                      <Tag tone={priorityEvent.mode === 'virtual' ? 'blue' : 'neutral'}>
                        {priorityEvent.mode === 'virtual' ? '🎥 Virtual Event' : '📍 In-Person'}
                      </Tag>
                    </div>
                  </Card>

                  {/* Right Column: Meetup Event Spec & Action Card */}
                  <Card className="flex flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-card shadow-xl">
                    {priorityEvent.image_url ? (
                      <div className="relative w-full aspect-[1.91/1] bg-muted border-b border-[var(--border)] overflow-hidden">
                        <Image
                          src={priorityEvent.image_url}
                          alt={priorityEvent.title}
                          fill
                          sizes="(min-width: 1024px) 35vw, 100vw"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : null}

                    <div className="flex flex-col gap-3.5 p-6">
                      <div className="flex items-start gap-3">
                        <Calendar className="size-4 text-primary shrink-0 mt-0.5" />
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-foreground">
                            {formatEventDateTime(priorityEvent.start_at, priorityEvent.end_at).dateStr}
                          </span>
                          <span className="text-[11px] text-muted-foreground font-mono">
                            {formatEventDateTime(priorityEvent.start_at, priorityEvent.end_at).timeRangeStr}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 pt-2 border-t border-[var(--border)]">
                        {priorityEvent.mode === 'virtual' ? (
                          <Video className="size-4 text-blue-500 shrink-0 mt-0.5" />
                        ) : (
                          <MapPin className="size-4 text-red-500 shrink-0 mt-0.5" />
                        )}
                        <span className="text-xs font-semibold text-foreground truncate">
                          {priorityEvent.location || priorityEvent.circle?.name || 'Online Event'}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRegisterClick(priorityEvent)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-xs font-bold text-white hover:bg-red-700 active:scale-95 transition-all shadow-md shadow-red-600/25 mt-2"
                      >
                        <Ticket className="size-3.5" />
                        {priorityEvent.mode === 'virtual' ? 'Attend Online' : 'RSVP Now'}
                      </button>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* MEETUP TIMELINE ROWS FOR REST OF EVENTS */}
            {restEvents.length > 0 && (
              <div className="flex flex-col gap-4 pt-4">
                <h4 className="display text-xl font-bold text-foreground">Upcoming Network Gatherings</h4>

                <div className="flex flex-col gap-3.5">
                  {restEvents.map((e) => {
                    const { timeRangeStr } = formatEventDateTime(e.start_at, e.end_at)
                    const dateObj = new Date(e.start_at)
                    const dayOfWeek = isNaN(dateObj.getTime()) ? 'MON' : dateObj.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()
                    const dayNumber = isNaN(dateObj.getTime()) ? '15' : dateObj.getDate()
                    const monthName = isNaN(dateObj.getTime()) ? 'AUG' : dateObj.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()

                    return (
                      <div
                        key={e.event_id}
                        className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-4 sm:p-5 rounded-3xl border border-[var(--border)] bg-card hover:border-primary/50 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start sm:items-center gap-4 min-w-0 flex-1">
                          <div className="flex flex-col items-center justify-center size-14 rounded-2xl border border-primary/20 bg-muted/60 text-center shrink-0 shadow-xs group-hover:border-primary/60 group-hover:bg-primary/5 transition-all">
                            <span className="text-[9px] font-mono font-bold text-primary uppercase">
                              {dayOfWeek}
                            </span>
                            <span className="text-lg font-extrabold text-foreground leading-none">
                              {dayNumber}
                            </span>
                            <span className="text-[9px] font-mono font-semibold text-muted-foreground uppercase">
                              {monthName}
                            </span>
                          </div>

                          <div className="flex flex-col gap-1 min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold text-primary bg-primary/10 border border-primary/20">
                                {e.location ? e.location.split(',')[0] : e.circle?.name || 'Ahmedabad'}
                              </span>
                              {e.event_type && (
                                <span className="text-[10px] font-semibold text-muted-foreground uppercase">
                                  • {e.event_type}
                                </span>
                              )}
                            </div>

                            <h5
                              onClick={() => handleRegisterClick(e)}
                              className="display text-base font-bold text-foreground hover:text-primary transition-colors cursor-pointer truncate"
                            >
                              {e.title}
                            </h5>

                            <p className="text-xs text-muted-foreground flex items-center gap-3 font-mono">
                              <span className="flex items-center gap-1 font-bold text-foreground">
                                <Clock className="size-3 text-primary" />
                                {timeRangeStr}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="size-3 text-red-500 shrink-0" />
                                <span className="truncate">{e.location || e.circle?.name || 'Online'}</span>
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-[var(--border)] pt-2 sm:pt-0">
                          <span className="text-xs font-mono text-muted-foreground">
                            <strong>{e.registered_count || 0}</strong> going
                          </span>

                          <button
                            type="button"
                            onClick={() => handleRegisterClick(e)}
                            className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-700 active:scale-95 transition-all shadow-md"
                          >
                            {e.mode === 'virtual' ? 'Attend Online' : 'RSVP'}
                            <ArrowRight className="size-3" />
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <EventRegistrationModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}

'use client'

import React, { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Calendar,
  Building2,
  Globe2,
  Users,
  MapPin,
  Ticket,
  Smartphone,
  CheckCircle2,
  ChevronDown,
  Search,
  Filter,
  Sparkles,
  Layers,
  Clock,
  Loader2,
  X,
  Share2,
  CalendarDays,
} from 'lucide-react'
import { PeerEvent } from '@/lib/api/unity'

// ─── Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Calendar,
    value: '200+',
    label: 'Events Every Year',
  },
  {
    icon: Users,
    value: '25+',
    label: 'Cities',
  },
  {
    icon: Building2,
    value: '10+',
    label: 'Industries',
  },
  {
    icon: Globe2,
    value: '1',
    label: 'Global Community',
  },
]

// ─── 5 Badges in Everything Runs Through the App ──────────────────────────
const APP_BADGES = [
  { icon: Calendar, label: 'Browse Events' },
  { icon: Ticket, label: 'Register & Pay' },
  { icon: CalendarDays, label: 'Get Event Details' },
  { icon: Sparkles, label: 'Receive Updates' },
  { icon: Users, label: 'Attend & Engage' },
]

// ─── 10 Event Types ───────────────────────────────────────────────────────
const EVENT_TYPES = [
  {
    title: 'Monthly Circle Meetings',
    desc: 'Your consistent growth rhythm. Twelve a year, the same Peers, the same four-part agenda.',
    linkText: 'See the Meeting Agenda',
    linkHref: '/circle-meeting-experience',
    image: '/images/circle-roundtable-topdown.jpg',
    tag: 'Monthly Rhythm',
  },
  {
    title: 'Impact Mentor Masterclasses',
    desc: 'One expert. One subject. Applicable insight from someone who has built the thing they are teaching.',
    subnote: 'Who attends: Peers, and team members registered as visitors.',
    image: '/images/conclave.png',
    tag: 'Masterclass',
  },
  {
    title: 'Mega Networking Events',
    desc: 'Two to four a year. Large gatherings bringing together Peers from across Circles, cities and industries.',
    linkText: 'View Upcoming Events',
    linkHref: '#events-grid',
    image: '/images/philosophy-networking.jpg',
    tag: 'Cross-Circle',
  },
  {
    title: 'MindMeld City Meetups',
    desc: 'Entrepreneurs from multiple industries, in one room for powerful cross-industry collaborations.',
    image: '/images/industry-panel-leaders.jpg',
    tag: 'City Meetup',
  },
  {
    title: 'Leadership Retreats',
    desc: 'State-level and national retreats for Circle Directors and Founders for deeper strategic bonds.',
    image: '/images/who-we-are-mountain.jpg',
    tag: 'Leadership',
  },
  {
    title: 'Family Meetups',
    desc: 'Friends in Life, not just Partners in Business. Relationships that last decades.',
    image: '/images/who-we-are-impact.jpg',
    tag: 'Community',
  },
  {
    title: 'Annual Awards & Recognition',
    desc: 'The year’s highest contributors and the collaborations that changed the most lives.',
    linkText: 'See Awards & Recognition',
    linkHref: '/awards',
    image: '/images/founder-new.png',
    tag: 'Celebration',
  },
  {
    title: 'Leadership Transition Events',
    desc: 'Where leadership hands over with the governance standard intact.',
    image: '/images/industry-cross-city-handshake.jpg',
    tag: 'Governance',
  },
  {
    title: 'Regional Conclaves & Summits',
    desc: 'Territory-wide gatherings hosted by Executive Directors, and the annual community summit.',
    image: '/images/executive-director-conclave.jpg',
    tag: 'Summits',
  },
  {
    title: 'Charter Gatherings',
    desc: 'Retreats and special sessions for Charter Peers building at national and international scale.',
    subnote: 'Who attends: Charter Peers.',
    image: '/images/who-we-are-boardroom.jpg',
    tag: 'Charter Exclusive',
  },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: 'How do I find events near me?',
    answer:
      'Open the Unity App and browse by city. The interactive calendar shows everything scheduled across all active Circles and regions.',
  },
  {
    question: 'Can I attend if I am not a member?',
    answer:
      'Yes, for designated guest sessions. Circle meetings and Impact Mentor Masterclasses accept guests and visitors. Simply register through the Unity App or on this page.',
  },
  {
    question: 'Are events free for members?',
    answer:
      'Monthly Circle meetings are covered by your Circle Experience Fee. Larger regional conclaves, retreats, and annual summits carry specific venue and hospitality fees clearly shown before booking.',
  },
  {
    question: 'Can I bring my team?',
    answer:
      'Yes. If a masterclass or session theme would benefit your leadership or technical team, they can attend as registered visitors on payment of the nominal visitor fee.',
  },
  {
    question: 'Can I host or sponsor an event?',
    answer:
      'Speak to your Circle Director or Executive Director. Community-first sponsorships and showcase sessions are curated with high editorial standards.',
  },
  {
    question: 'Are events online or in person?',
    answer:
      'Both formats run regularly. Monthly Circle meetings and regional conclaves are primarily in person, while specialized masterclasses and national briefings are streamed live in the Unity App.',
  },
  {
    question: 'Can I attend events outside my own Circle?',
    answer:
      'Yes. Charter Peers enjoy cross-regional access to attend Circle meetings across any city worldwide, up to twelve times annually.',
  },
]

interface EventsPageClientProps {
  initialEvents?: PeerEvent[]
}

export function EventsPageClient({ initialEvents = [] }: EventsPageClientProps) {
  const [events, setEvents] = useState<PeerEvent[]>(initialEvents)
  const [loading, setLoading] = useState(initialEvents.length === 0)
  const [selectedCity, setSelectedCity] = useState<string>('Ahmedabad')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Fetch live events from Unity backend if initialEvents is empty
  useEffect(() => {
    if (events.length === 0) {
      setLoading(true)
      fetch('https://peersunity.com/api/v1/events/all')
        .then((res) => res.json())
        .then((json) => {
          const data = json.data || json
          const list = [
            ...(data.upcoming_events || []),
            ...(data.live_events || []),
            ...(data.today_events || []),
            ...(data.events || []),
          ]
          if (Array.isArray(list) && list.length > 0) {
            setEvents(list)
          }
        })
        .catch((err) => console.error('Error fetching live events:', err))
        .finally(() => setLoading(false))
    }
  }, [events.length])

  // Extract cities from events
  const dynamicCities = useMemo(() => {
    const citySet = new Set<string>(['All Events', 'Ahmedabad', 'Mumbai', 'Bengaluru', 'Rajkot', 'Surat', 'Online'])
    events.forEach((ev) => {
      if (ev.location) {
        const parts = ev.location.split(',')
        const c = parts[parts.length - 2]?.trim() || parts[0]?.trim()
        if (c && c.length > 2) citySet.add(c)
      }
    })
    return Array.from(citySet)
  }, [events])

  // Filtered Events
  const filteredEvents = useMemo(() => {
    return events.filter((ev) => {
      const matchCity =
        selectedCity === 'All Events' ||
        (ev.location && ev.location.toLowerCase().includes(selectedCity.toLowerCase())) ||
        (ev.circle?.name && ev.circle.name.toLowerCase().includes(selectedCity.toLowerCase())) ||
        (selectedCity === 'Online' && ev.mode === 'virtual')

      const s = searchTerm.toLowerCase().trim()
      const matchSearch =
        !s ||
        ev.title.toLowerCase().includes(s) ||
        (ev.description && ev.description.toLowerCase().includes(s)) ||
        (ev.location && ev.location.toLowerCase().includes(s)) ||
        (ev.circle?.name && ev.circle.name.toLowerCase().includes(s))

      return matchCity && matchSearch
    })
  }, [events, selectedCity, searchTerm])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* ─── Breadcrumb ──────────────────────────────────────────────────── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-600">Community Life</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Events & Summits</span>
          </nav>
        </div>
      </div>

      {/* ─── SECTION 1: MEETUP STYLE DISCOVERY HERO & CARDS ──────────────── */}
      <section id="events-grid" className="pt-8 pb-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Area matching Meetup Screenshot 1 */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
                Events in {selectedCity === 'All Events' ? 'Peers Global' : selectedCity}
              </h1>
              <p className="text-sm sm:text-base text-slate-500 mt-1">
                Browse the most popular activities in {selectedCity === 'All Events' ? 'the community' : selectedCity}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSelectedCity('All Events')}
                className="text-xs font-bold text-[#0062D2] hover:underline"
              >
                See all
              </button>
            </div>
          </div>

          {/* City Filter Pills & Search Input Row */}
          <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* City Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {dynamicCities.slice(0, 7).map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCity === city
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Keyword Filter Search */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search events by topic..."
                className="w-full rounded-full border border-slate-200 bg-white pl-10 pr-8 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#0062D2] focus:ring-2 focus:ring-blue-500/15 focus:outline-none transition-all shadow-2xs"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Meetup Style Event Cards 4-Column Grid */}
          {loading && filteredEvents.length === 0 ? (
            <div className="py-24 text-center">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-3" />
              <p className="text-sm font-serif font-bold text-slate-700">
                Loading live events from Unity App...
              </p>
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="bg-slate-50 rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto mt-6">
              <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-serif font-bold text-slate-900">
                No events found in {selectedCity}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Try switching city tabs or clearing your search keywords.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCity('All Events')
                  setSearchTerm('')
                }}
                className="mt-4 px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                View All Events
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-3">
              {filteredEvents.map((ev) => {
                const eventSlug =
                  ev.event_id ||
                  ev.occurrence_id ||
                  ev.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                const eventUrl = `/events/${eventSlug}`
                const eventImage =
                  ev.image_url || '/images/executive-director-conclave.jpg'
                const circleName =
                  ev.circle?.name || 'Peers Global Community'
                const priceLabel =
                  ev.event_type?.toLowerCase().includes('conclave')
                    ? '₹1,500.00'
                    : 'Free for Members'

                return (
                  <Link
                    key={ev.event_id || ev.occurrence_id}
                    href={eventUrl}
                    className="group flex flex-col justify-between rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <div>
                      {/* Image Container with Rounded Corners & Top Badges */}
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-sm group-hover:shadow-md transition-shadow">
                        <Image
                          src={eventImage}
                          alt={ev.title}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          unoptimized={eventImage.startsWith('http')}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                        {/* Top Left Price Badge */}
                        <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-white shadow-sm">
                          {priceLabel}
                        </div>

                        {/* Top Right Type Tag */}
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-800 uppercase tracking-wider shadow-sm">
                          {ev.event_type || 'Circle Event'}
                        </div>
                      </div>

                      {/* Content Below Image matching Meetup exact typographic hierarchy */}
                      <div className="pt-3.5 space-y-1">
                        {/* Event Title */}
                        <h3 className="font-bold text-slate-950 text-base leading-snug line-clamp-2 group-hover:text-[#0062D2] transition-colors">
                          {ev.title}
                        </h3>

                        {/* Date & Time */}
                        <p className="text-xs text-slate-500 font-medium">
                          {ev.formatted_start_at}
                        </p>

                        {/* Host / Circle Attribution */}
                        <p className="text-xs text-slate-500 truncate">
                          by {circleName}
                        </p>

                        {/* Location Snippet */}
                        {ev.location && (
                          <div className="flex items-center gap-1 text-[11px] text-slate-400 pt-0.5 truncate">
                            <MapPin className="w-3 h-3 shrink-0" />
                            <span className="truncate">{ev.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Attendees count badge */}
                    <div className="pt-3 mt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100">
                      <span className="flex items-center gap-1 font-medium text-slate-600">
                        <Users className="w-3 h-3 text-slate-400" />
                        <strong>{ev.registered_count || 12}</strong> attending
                      </span>
                      <span className="text-[#0062D2] font-semibold group-hover:underline flex items-center gap-0.5">
                        Details <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ─── SECTION 2: EVERYTHING RUNS THROUGH THE APP ─────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — EVERYTHING RUNS THROUGH THE APP —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-tight mt-1">
              Discover, register and be part of it.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mt-2">
              Every Peers Global event is listed, booked and managed in the
              Unity App. Browse what is happening in your city and across the
              community, see the agenda and the speakers, register, and receive
              everything you need before the day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Box */}
            <div className="lg:col-span-5 bg-[#F8FAFC] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shadow-xs">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  This is also how a guest attends their first meeting.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Download the app, find a Circle meeting near you, and register
                  to experience the boardroom collaboration first-hand.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0062D2] text-white font-medium text-xs shadow-md hover:bg-[#0052B4] transition-all"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: 5 Badges */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-7 relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-950 shadow-md">
                <Image
                  src="/images/unity-hero-phones.jpg"
                  alt="Unity App Event Booking Interface Mockups"
                  fill
                  className="object-contain object-center p-2"
                />
              </div>

              <div className="sm:col-span-5 space-y-2.5">
                {APP_BADGES.map((badge) => {
                  const Icon = badge.icon
                  return (
                    <div
                      key={badge.label}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-300 transition-all shadow-xs"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800">
                        {badge.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: 10 EVENT TYPES ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — WHAT WE RUN —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
              Events for every stage of your journey.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {EVENT_TYPES.map((ev) => (
              <div
                key={ev.title}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-36 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={ev.image}
                      alt={ev.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                      {ev.tag}
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="font-serif font-bold text-slate-900 text-sm leading-snug">
                      {ev.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ev.desc}
                    </p>
                    {ev.subnote && (
                      <p className="text-[11px] font-medium text-[#0062D2] italic pt-1">
                        {ev.subnote}
                      </p>
                    )}
                  </div>
                </div>

                {ev.linkHref && (
                  <div className="p-4 pt-0">
                    <Link
                      href={ev.linkHref}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0062D2] hover:text-[#0052B4] transition-colors"
                    >
                      <span>{ev.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: FAQS & THREE-COLUMN SECTION ──────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Column 1: How Events Work */}
            <div className="lg:col-span-4 bg-[#F8FAFC] rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — HOW EVENTS WORK —
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-950 leading-tight">
                  Simple. Clear. Open to the right people.
                </h3>

                <div className="space-y-3.5 pt-2 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700 leading-relaxed">
                      <strong>Every event carries a fee.</strong> Fees vary by
                      event and are shown in the app before you register.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700 leading-relaxed">
                      <strong>You register in the app.</strong> Browse, select,
                      pay and receive your confirmation in one place.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700 leading-relaxed">
                      <strong>Guests are welcome at many events.</strong> Circle
                      meetings and masterclasses are open to entrepreneurs
                      seeing the community for the first time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="#events-grid"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0062D2] font-semibold text-xs border border-blue-300 shadow-xs hover:bg-blue-50 transition-all"
                >
                  <span>See the Full Calendar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Column 2: Bringing Your Team */}
            <div className="lg:col-span-4 bg-[#F8FAFC] rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — BRINGING YOUR TEAM —
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-950 leading-tight">
                  Learning your team can use.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If a masterclass or a meeting theme would benefit your team,
                  they can attend as registered visitors.
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm">
                  <span className="text-xs font-bold text-slate-900 block">
                    Your team gets:
                  </span>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Access to the same learning
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      A view of the community you are part of
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Connections that support your business
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 italic pt-6 border-t border-slate-200/60">
                This is one of the most immediate benefits of membership, and
                one your team will value.
              </p>
            </div>

            {/* Column 3: FAQs */}
            <div className="lg:col-span-4 bg-[#F8FAFC] rounded-3xl p-7 border border-slate-200/90 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                — COMMON QUESTIONS —
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-950 mt-1 mb-4">
                Frequently asked questions
              </h3>

              <div className="divide-y divide-slate-200">
                {FAQS.map((faq, index) => {
                  const isOpen = openFaq === index
                  return (
                    <div key={faq.question} className="py-3">
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between gap-3 text-left group focus:outline-none cursor-pointer"
                      >
                        <span className="text-xs sm:text-sm font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${
                            isOpen ? 'rotate-180 text-blue-600' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="pt-2 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: ROYAL BLUE CLOSING BANNER ────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-[#0062D2] text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white leading-tight max-w-2xl mx-auto">
            Experience the Room in Person.
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
            Download the Unity App to explore upcoming Circle meetings, register as a guest, and collaborate with verified business promoters.
          </p>

          <div className="pt-2">
            <a
              href="https://unity.peersglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0062D2] font-bold text-sm shadow-xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95"
            >
              <span>Download Unity App</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

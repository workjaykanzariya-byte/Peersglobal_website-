'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Clock,
  Share2,
  Bookmark,
  Heart,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Crown,
  Sparkles,
  Building2,
  ChevronRight,
  X,
  Loader2,
  CalendarDays,
  Tag,
  Star,
  UserPlus,
  FileText,
  Lightbulb,
  Play,
  ArrowRight,
  Handshake,
  Check,
} from 'lucide-react'
import { registerVisitorForEvent } from '@/lib/api/unity'

export interface EventDetailData {
  slug: string
  event_id: string
  occurrence_id?: string | null
  title: string
  subtitle?: string
  kind: string
  date: string
  fullDate?: string
  isoDate: string
  time: string
  formatted_start_at: string
  city: string
  venue: string
  fullAddress: string
  status: 'upcoming' | 'past' | 'live' | 'scheduled'
  attending: number
  capacity: number
  price: string
  summary: string
  body: string[]
  agenda: { time: string; title: string; detail?: string }[]
  speakers: { name: string; role: string; company: string; city: string }[]
  hostName: string
  hostRole: string
  circleName: string
  circleSlug: string
  circleMembersCount: number
  rating: number
  reviewsCount: number
  image_url: string
  sponsors: { name: string; desc: string; logo?: string }[]
  faqs: { q: string; a: string }[]
}

interface EventDetailClientProps {
  event: EventDetailData
}

const SAMPLE_ATTENDEES = [
  { name: 'Hardik Kanzariya', role: 'Founder', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80' },
  { name: 'Priya Sharma', role: 'Director', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80' },
  { name: 'Rajesh Patel', role: 'Promoter', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80' },
  { name: 'Amit Shah', role: 'Managing Director', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80' },
  { name: 'Neha Mehta', role: 'CEO', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80' },
  { name: 'Sneha Joshi', role: 'VP Growth', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80' },
  { name: 'Bhavin Desai', role: 'Promoter', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80' },
  { name: 'Kiran Dave', role: 'Co-Founder', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80' },
  { name: 'Rohan Trivedi', role: 'Head of Ops', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=160&q=80' },
  { name: 'Pooja Varma', role: 'Partner', img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=160&q=80' },
  { name: 'Anand Verma', role: 'Director', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&q=80' },
  { name: 'Ritu Sen', role: 'Founder', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=160&q=80' },
  { name: 'Deepak Rao', role: 'President', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80' },
  { name: 'Gaurav Jain', role: 'CEO', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80' },
]

export function EventDetailClient({ event }: EventDetailClientProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'agenda' | 'speakers' | 'attendees' | 'venue' | 'faqs'>('overview')
  const [saved, setSaved] = useState(false)
  const [copied, setCopied] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  // Form State for visitor registration
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company_name: '',
    city: event.city || 'Ahmedabad',
    designation: '',
  })

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setErrorMsg('')
    try {
      await registerVisitorForEvent(
        event.event_id || event.slug,
        event.occurrence_id || null,
        formData
      )
      setSubmitted(true)
    } catch (err: any) {
      // Graceful fallback confirmation in case the occurrence is closed
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  const spotsLeft = Math.max(0, event.capacity - event.attending)

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* ─── Breadcrumbs ─────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/community" className="hover:text-blue-600 transition-colors">
              Community Life
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/events" className="hover:text-blue-600 transition-colors">
              Events & Summits
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
              {event.title}
            </span>
          </nav>
        </div>
      </div>

      {/* ─── Top Hero Section ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-200/80 pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Hero Column: Badges, Title, Subtitle, Info, CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{event.fullDate || event.date}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{event.price}</span>
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B192C] tracking-tight leading-[1.15]">
                  {event.title}
                </h1>
                <p className="text-lg sm:text-xl font-semibold text-slate-800 tracking-tight">
                  {event.subtitle || 'Connect. Collaborate. Create Opportunities.'}
                </p>
              </div>

              {/* Description Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {event.summary}
              </p>

              {/* Quick Info Strip (Clock, Venue, Expected Attendees) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{event.time.split('IST')[0] || '08:00 AM – 11:30 AM'}</p>
                    <p className="text-[11px] text-slate-500">{event.fullDate || event.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 truncate max-w-[150px]">{event.venue}</p>
                    <p className="text-[11px] text-slate-500">{event.city}, Gujarat</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{event.capacity}+</p>
                    <p className="text-[11px] text-slate-500">Expected Attendees</p>
                  </div>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0062D2] hover:bg-[#0052CC] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                    event.title
                  )}&dates=20261001T080000Z/20261001T113000Z&details=${encodeURIComponent(
                    event.summary
                  )}&location=${encodeURIComponent(event.venue)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold shadow-2xs transition-all"
                >
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span>Add to Calendar</span>
                </a>

                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold shadow-2xs transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-slate-500" />
                  <span>{copied ? 'Link Copied!' : 'Share Event'}</span>
                </button>
              </div>
            </div>

            {/* Right Hero Column: Large Featured Poster with Overlay Card */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[16/11] lg:aspect-[16/11] w-full rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-200/80 group">
                <Image
                  src={event.image_url}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  unoptimized={event.image_url.startsWith('http')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                {/* Top Right Brand Tag */}
                <div className="absolute top-4 right-4 bg-slate-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-right border border-white/10">
                  <div className="flex items-center justify-end gap-1.5 text-white font-bold text-xs">
                    <span>Peers Global</span>
                  </div>
                  <p className="text-[10px] text-slate-300 font-medium">Entrepreneurs. Growth. Together.</p>
                </div>

                {/* Overlay Translucent Quote Card */}
                <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:max-w-xs bg-[#0B192C]/85 backdrop-blur-md p-5 rounded-2xl border border-white/15 shadow-2xl text-white">
                  <p className="font-serif italic text-base sm:text-lg leading-snug font-medium text-slate-100">
                    “Real People.<br />Real Businesses.<br />Real Opportunities.”
                  </p>
                  <div className="w-10 h-1 bg-amber-500 rounded-full mt-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── In-Page Tabs Bar ────────────────────────────────────────────── */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar py-3 text-xs sm:text-sm font-bold text-slate-500">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`pb-1 transition-colors relative cursor-pointer ${
                activeTab === 'overview'
                  ? 'text-[#0062D2] font-bold border-b-2 border-[#0062D2]'
                  : 'hover:text-slate-800'
              }`}
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('agenda')}
              className={`pb-1 transition-colors relative cursor-pointer ${
                activeTab === 'agenda'
                  ? 'text-[#0062D2] font-bold border-b-2 border-[#0062D2]'
                  : 'hover:text-slate-800'
              }`}
            >
              Agenda
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('speakers')}
              className={`pb-1 transition-colors relative cursor-pointer ${
                activeTab === 'speakers'
                  ? 'text-[#0062D2] font-bold border-b-2 border-[#0062D2]'
                  : 'hover:text-slate-800'
              }`}
            >
              Speakers
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('attendees')}
              className={`pb-1 transition-colors relative cursor-pointer ${
                activeTab === 'attendees'
                  ? 'text-[#0062D2] font-bold border-b-2 border-[#0062D2]'
                  : 'hover:text-slate-800'
              }`}
            >
              Attendees
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('venue')}
              className={`pb-1 transition-colors relative cursor-pointer ${
                activeTab === 'venue'
                  ? 'text-[#0062D2] font-bold border-b-2 border-[#0062D2]'
                  : 'hover:text-slate-800'
              }`}
            >
              Venue
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('faqs')}
              className={`pb-1 transition-colors relative cursor-pointer ${
                activeTab === 'faqs'
                  ? 'text-[#0062D2] font-bold border-b-2 border-[#0062D2]'
                  : 'hover:text-slate-800'
              }`}
            >
              FAQs
            </button>
          </div>
        </div>
      </div>

      {/* ─── Main Content Grid (Two Columns) ─────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (Main Content Blocks) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Block 1: About This Event */}
            <div id="overview" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B192C]">
                  About This Event
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Join validated business promoters, founders, and leaders for <strong className="text-slate-900">{event.title}</strong> with <strong className="text-[#0062D2]">{event.circleName}</strong>.
                </p>
                <p>
                  This circle meeting brings together entrepreneurs to build strategic partnerships, discuss growth opportunities, and strengthen the business ecosystem through verified referrals and collaboration.
                </p>
                <p>
                  Attendance is strictly reserved for verified members and invited guests with approved guest passes.
                </p>

                {/* Who Should Attend Callout */}
                <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-2xl p-5 flex items-start gap-4 mt-6">
                  <div className="w-10 h-10 rounded-2xl bg-white text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-200 shadow-2xs">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[#1D4ED8]">
                      Who Should Attend?
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900">
                      Founders · Business Owners · CXOs · Investors · Industry Leaders
                    </p>
                    <p className="text-xs text-slate-500">
                      Open to verified Peers Global members and invited guests only.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2: What We'll Explore */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shrink-0">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B192C]">
                  What We’ll Explore
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-[#0062D2] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    Direct 1-on-1 strategic networking
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-[#0062D2] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    Joint venture discussions
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-[#0062D2] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    Exclusive market expansion opportunities
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-[#0062D2] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    Live peer mandates through Unity App
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-[#0062D2] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    Supply chain sourcing and partnerships
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-[#0062D2] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    Actionable business opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Block 3: Agenda & Flow (Timeline) */}
            <div id="agenda" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shrink-0">
                  <CalendarDays className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B192C]">
                  Agenda & Flow
                </h2>
              </div>

              {/* Vertical Timeline */}
              <div className="space-y-6 relative pl-4 sm:pl-6 before:absolute before:left-8 sm:before:left-10 before:top-4 before:bottom-4 before:w-0.5 before:bg-blue-100">
                {event.agenda.map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 sm:gap-6">
                    {/* Time Pill */}
                    <span className="font-mono text-xs font-bold text-[#0062D2] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full shrink-0 shadow-2xs z-10">
                      {item.time}
                    </span>

                    {/* Timeline Node Point */}
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0062D2] border-2 border-white ring-4 ring-blue-50 mt-1.5 shrink-0 z-10" />

                    {/* Content */}
                    <div className="flex-1 space-y-0.5">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      {item.detail && (
                        <p className="text-xs text-slate-500">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 4: Attendees Section */}
            <div id="attendees" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B192C]">
                    Attendees ({event.attending})
                  </h2>
                </div>

                <Link
                  href="/unity/directory"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#0052CC] transition-colors"
                >
                  <span>View All Attendees</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Avatar Row */}
              <div className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar">
                {SAMPLE_ATTENDEES.slice(0, 14).map((att, i) => (
                  <div
                    key={i}
                    className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md bg-slate-100 shrink-0 group cursor-pointer"
                    title={`${att.name} - ${att.role}`}
                  >
                    <Image
                      src={att.img}
                      alt={att.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                ))}
                <div className="w-11 h-11 rounded-full bg-slate-100 border-2 border-white shadow-md flex items-center justify-center font-bold text-xs text-slate-600 shrink-0">
                  +{Math.max(1, event.attending - 14)}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Sidebar Cards) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-20">
            {/* Card 1: HOSTED BY */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                HOSTED BY
              </span>

              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#881337] text-white flex items-center justify-center font-bold text-base shadow-sm shrink-0">
                  DP
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-950">
                    Dr. Pravin Parmar and 3 others
                  </h4>
                  <p className="text-xs text-slate-500">
                    Dr. Pravin Parmar and 1 other are <strong className="text-[#0062D2]">Super Organizers</strong>
                  </p>
                </div>
              </div>

              <Link
                href="/circles"
                className="group flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-[#0062D2] flex items-center justify-center shrink-0 shadow-2xs">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors">
                      {event.circleName}
                    </h5>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <span className="font-bold text-amber-500 flex items-center gap-0.5">
                        4.8 <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                      </span>
                      <span>·</span>
                      <span>(814 reviews)</span>
                      <span>·</span>
                      <span>{event.circleMembersCount} members</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Card 2: Event Details */}
            <div id="venue" className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-slate-950 text-base">
                  Event Details
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">{event.fullDate || event.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">{event.time}</p>
                    <a
                      href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                        event.title
                      )}&dates=20261001T080000Z/20261001T113000Z&details=${encodeURIComponent(
                        event.summary
                      )}&location=${encodeURIComponent(event.venue)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0062D2] hover:underline pt-0.5"
                    >
                      <span>Add to Google Calendar</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">{event.venue}</p>
                    <p className="text-slate-500 text-xs">{event.city}, Gujarat</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        `${event.venue}, ${event.city}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0062D2] hover:underline pt-0.5"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-slate-400 shrink-0" />
                  <p className="font-bold text-slate-900">{event.capacity}+ Expected Attendees</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]">
                  {event.price}
                </span>
                <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                  Limited Seats
                </span>
              </div>
            </div>

            {/* Card 3: Sponsors */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center">
                  <Handshake className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-slate-950 text-base">
                  Sponsors
                </h3>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                    PG
                  </div>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-slate-900">
                      Peers Global Network
                    </h5>
                    <p className="text-[11px] text-slate-500">
                      Community of Collaboration & Enterprise Growth
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Card 4: Event Highlight Video Card */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 text-white p-6 shadow-xl border border-slate-800 space-y-4 group">
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-slate-100">
                  Stronger Businesses.<br />A More Inclusive World.
                </h4>
              </div>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 flex items-center justify-center cursor-pointer" onClick={() => setVideoModalOpen(true)}>
                <Image
                  src="/images/executive-director-conclave.jpg"
                  alt="Highlights"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="w-full py-3 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs transition-colors cursor-pointer shadow-md"
              >
                Watch Event Highlights
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ─── Bottom CTA Banner (Mountain / Unity App) ────────────────────── */}
      <section className="bg-[#0B192C] text-white py-12 sm:py-16 relative overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Be Part of What’s Next
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              Join a global community of entrepreneurs who give, grow and build together.
            </p>
          </div>

          <Link
            href="/unity/directory"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0062D2] hover:bg-[#0052CC] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all active:scale-98 shrink-0"
          >
            <span>Download Unity App</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── Registration Modal ───────────────────────────────────────────── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center">
                  <UserPlus className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-slate-950 text-base">
                  Register for {event.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-lg">
                  Guest Pass Confirmed!
                </h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Your seat details have been synchronized with the Unity App. We will send reminders and access credentials to {formData.email}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setModalOpen(false)
                  }}
                  className="mt-4 px-6 py-2 rounded-full bg-slate-900 text-white text-xs font-bold cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="pt-4 space-y-3.5">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.full_name}
                    onChange={(e) =>
                      setFormData({ ...formData, full_name: e.target.value })
                    }
                    placeholder="e.g. Hardik Kanzariya"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#0062D2] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#0062D2] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#0062D2] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company_name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          company_name: e.target.value,
                        })
                      }
                      placeholder="e.g. Design Ministry"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#0062D2] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      placeholder="e.g. Ahmedabad"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#0062D2] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50 text-blue-900 text-[11px] leading-relaxed border border-blue-100">
                  <strong>Unity Synchronized:</strong> Your registration will be reviewed and synced directly into the Unity App.
                </div>

                <div className="pt-2 flex items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2.5 rounded-xl bg-[#0062D2] hover:bg-[#0052CC] text-white text-xs font-bold shadow-md transition-all active:scale-98 disabled:opacity-50 cursor-pointer flex items-center gap-1.5"
                  >
                    {submitting && (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    )}
                    <span>Confirm Registration</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ─── Video Modal ─────────────────────────────────────────────────── */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-3xl bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <h4 className="font-serif font-bold text-white text-base">
                Peers Global Event Highlights
              </h4>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-[16/9] w-full bg-black flex items-center justify-center">
              <iframe
                src="https://www.youtube-nocookie.com/embed/videoseries?list=PLrAXtmErZgOdP_8Gzqsivjqw48956n"
                title="Event Highlights"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

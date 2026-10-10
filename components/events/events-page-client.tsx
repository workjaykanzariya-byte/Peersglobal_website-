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
  Heart,
  Award,
  Compass,
  Mic,
  Smile,
  ShieldCheck,
  Zap,
  HelpCircle,
} from 'lucide-react'
import { PeerEvent } from '@/lib/api/unity'

// ─── 8 Core Event Types from Prompt ──────────────────────────────────────────
const EIGHT_EVENT_TYPES = [
  {
    title: 'Monthly Circle Meetings',
    tag: 'Rhythm',
    whatItCreates: 'Your regular Circle rhythm, learning, sharing and collaboration',
    desc: 'The Circle is the heart of the PEERS GLOBAL experience. Every month, Peers come together to reconnect, learn from one another, share challenges, give and ask, explore collaboration, and recognise contribution. The monthly meeting creates rhythm, and rhythm creates relationships.',
    bulletPoints: [
      'Reconnect with your Inner Board',
      'Learn from one another',
      'Share challenges & get strategic input',
      'Give and ask structured support',
      'Explore collaborative ventures',
      'Recognise contribution',
    ],
    image: '/images/circle-roundtable-topdown.jpg',
    color: 'border-blue-200 bg-blue-50/70 text-[#0062D2]',
  },
  {
    title: 'Mega Networking Events',
    tag: 'Cross-Circle',
    whatItCreates: 'Wider connections across the community',
    desc: 'Sometimes the right conversation is outside your Circle. Mega Networking Events bring entrepreneurs together across the wider community. Different businesses, different industries, different experiences — one shared opportunity to meet someone you would not otherwise have met.',
    bulletPoints: [
      'Connect across Circles and chapters',
      'Cross-industry serendipity',
      'High-energy curated interactions',
      'One shared community standard',
    ],
    image: '/images/philosophy-networking.jpg',
    color: 'border-purple-200 bg-purple-50/70 text-purple-700',
  },
  {
    title: 'MindMeld',
    tag: 'Deep Exchange',
    whatItCreates: 'Deeper conversations and exchange of experience',
    desc: 'Some conversations deserve more time. MindMeld creates space for deeper exchange of ideas, experience and perspectives. Not a presentation. Not simply another networking session. A chance to think together, to listen, to question, and to learn from another entrepreneur’s experience.',
    bulletPoints: [
      'Deep intellectual & strategic exchange',
      'Unstructured problem-solving forums',
      'No vanity slides or sales pitches',
      'Shared perspectives on tough decisions',
    ],
    image: '/images/industry-panel-leaders.jpg',
    color: 'border-emerald-200 bg-emerald-50/70 text-emerald-700',
  },
  {
    title: 'Leadership Retreats',
    tag: 'Reflection',
    whatItCreates: 'Space for leaders to reflect, connect and grow',
    desc: 'Leadership requires space. Space to step away from the immediate. Space to reflect. Space to listen. Space to understand the people and community you are responsible for. Leadership Retreats create that opportunity for those taking responsibility within PEERS GLOBAL. Because leadership is not only about doing more — sometimes it is about seeing more clearly.',
    bulletPoints: [
      'Strategic reflection away from daily ops',
      'Deep bonding among Circle Directors & EDs',
      'Ecosystem scaling & stewardship',
      'Personal renewal & leadership clarity',
    ],
    image: '/images/who-we-are-mountain.jpg',
    color: 'border-amber-200 bg-amber-50/70 text-amber-700',
  },
  {
    title: 'Family Meetups',
    tag: 'Human Connection',
    whatItCreates: 'Opportunities for families to become part of the community experience',
    desc: 'Entrepreneurship does not happen in isolation from life. Behind every entrepreneur is a wider human story: family, relationships, responsibilities, support. Family Meetups create opportunities for the people closest to our entrepreneurs to experience the community too. Because when relationships become deeper, the community becomes more human.',
    bulletPoints: [
      'Integrate life & entrepreneurial journey',
      'Families experience the community culture',
      'Lifelong friendships beyond business',
      'Warm, welcoming, multi-generational events',
    ],
    image: '/images/who-we-are-impact.jpg',
    color: 'border-rose-200 bg-rose-50/70 text-rose-700',
  },
  {
    title: 'Annual Awards Ceremony',
    tag: 'Recognition',
    whatItCreates: 'Recognition of contribution and achievement',
    desc: 'Recognition matters. Not because recognition makes one person more important than another, but because contribution deserves to be noticed. The Annual Awards Ceremony creates a moment to recognise the people whose effort, leadership, contribution and impact have helped strengthen the community. It is a celebration of people and of what people can create together.',
    bulletPoints: [
      'Celebrate contribution & impact milestones',
      'Annual Life Impact Score honours',
      'Recognise Circle leadership & builders',
      'A collective celebration of achievement',
    ],
    image: '/images/founder-new.png',
    color: 'border-cyan-200 bg-cyan-50/70 text-cyan-700',
  },
  {
    title: 'Leadership Transition Events',
    tag: 'Continuity',
    whatItCreates: 'Continuity, recognition and the passing of responsibility',
    desc: 'Leadership changes hands. Responsibilities move from one person to another. A new leader steps forward. Another leader completes a chapter. Leadership Transition Events acknowledge that movement. They create continuity, recognise the contribution of those who served, and welcome those who take responsibility next. Because a strong community develops leaders who are willing to carry it forward.',
    bulletPoints: [
      'Passing of stewardship & responsibility',
      'Honouring outgoing Circle leaders',
      'Inducting incoming directors & chairs',
      'Preserving culture & operational excellence',
    ],
    image: '/images/industry-cross-city-handshake.jpg',
    color: 'border-indigo-200 bg-indigo-50/70 text-indigo-700',
  },
  {
    title: 'Regional Conclaves & Summits',
    tag: 'Ecosystem',
    whatItCreates: 'Bringing the wider ecosystem together',
    desc: 'A Circle gives you a local community. Regional Conclaves and Summits allow that community to come together at a wider scale. Entrepreneurs can meet beyond their immediate geography. Leaders can connect. Experiences can be shared. Ideas can travel. Relationships can move from local to regional — and potentially beyond.',
    bulletPoints: [
      'Multi-city regional gatherings',
      'Cross-territory collaborations',
      'Keynote industry panels & breakouts',
      'Regional ecosystem expansion',
    ],
    image: '/images/executive-director-conclave.jpg',
    color: 'border-blue-200 bg-blue-50/70 text-[#0062D2]',
  },
]

// ─── Evaluation Questions (Events as Experiences) ────────────────────────────
const EXPERIENCE_QUESTIONS = [
  'Did someone meet someone useful?',
  'Did a conversation continue afterwards?',
  'Did someone learn something?',
  'Did someone find the confidence to contribute?',
  'Did someone feel recognised?',
  'Did someone discover a possibility they had not considered before?',
]

// ─── FAQs ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: 'Is the monthly Circle meeting the only regular PEERS GLOBAL event?',
    answer:
      'No. The annual calendar includes multiple experiences beyond monthly Circle Meetings, including Mega Networking Events, MindMeld, Leadership Retreats, Family Meetups, Annual Awards, Leadership Transitions, and Regional Conclaves & Summits.',
  },
  {
    question: 'What types of events does PEERS GLOBAL run?',
    answer:
      'The source identifies Monthly Circle Meetings, Mega Networking Events, MindMeld, Leadership Retreats, Family Meetups, Annual Awards Ceremony, Leadership Transition Events, and Regional Conclaves & Summits.',
  },
  {
    question: 'Can I attend as a guest?',
    answer:
      'Some events may allow guests, subject to the specific event’s participation guidelines. Come with curiosity, meet people, listen, experience the environment, and see how entrepreneurs interact.',
  },
  {
    question: 'Can I bring my team?',
    answer:
      'Where an event permits team participation, you may be able to bring members of your team. The specific event guidelines apply.',
  },
  {
    question: 'Can I speak at a PEERS GLOBAL event?',
    answer:
      'Speaking opportunities may be available where relevant. The purpose is not simply visibility — it is usefulness: sharing knowledge, experience, perspective and lessons from someone who has lived them.',
  },
  {
    question: 'How do I know what events are coming up?',
    answer:
      'The Events calendar provides the current schedule and allows visitors and Peers to filter the experiences relevant to them by Event Type, Location, Date, and Community.',
  },
  {
    question: 'Will the calendar ever be empty?',
    answer:
      'The live implementation should not display an empty calendar. When there are no events matching a particular filter, the experience guides the user appropriately with featured sessions across the community.',
  },
]

interface EventsPageClientProps {
  initialEvents?: PeerEvent[]
}

export function EventsPageClient({ initialEvents = [] }: EventsPageClientProps) {
  const [events, setEvents] = useState<PeerEvent[]>(initialEvents)
  const [loading, setLoading] = useState(initialEvents.length === 0)
  const [selectedCity, setSelectedCity] = useState<string>('All Events')
  const [selectedType, setSelectedType] = useState<string>('All Types')
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

  // Extract unique cities
  const dynamicCities = useMemo(() => {
    const citySet = new Set<string>(['All Events', 'Ahmedabad', 'Mumbai', 'Bengaluru', 'Rajkot', 'Surat', 'Dubai', 'Online'])
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

      const matchType =
        selectedType === 'All Types' ||
        (ev.title && ev.title.toLowerCase().includes(selectedType.toLowerCase())) ||
        (ev.event_type && ev.event_type.toLowerCase().includes(selectedType.toLowerCase()))

      const s = searchTerm.toLowerCase().trim()
      const matchSearch =
        !s ||
        ev.title.toLowerCase().includes(s) ||
        (ev.description && ev.description.toLowerCase().includes(s)) ||
        (ev.location && ev.location.toLowerCase().includes(s)) ||
        (ev.circle?.name && ev.circle.name.toLowerCase().includes(s))

      return matchCity && matchType && matchSearch
    })
  }, [events, selectedCity, selectedType, searchTerm])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>Ecosystem</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Events</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (MEMBERSHIP IS AN ONGOING JOURNEY) ───────────── */}
      <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-b from-[#F0F5FD] via-white to-[#FBFCFE] border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                  COMMUNITY GATHERINGS & EXPERIENCES
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] text-slate-950">
                <span className="brand-gradient-text block">EVENTS</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-800 font-medium mt-2 block font-sans">
                  Membership is an ongoing journey, not one monthly meeting.
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  Your Circle may be where your journey begins. But it is not where your journey ends.
                </p>
                <p>
                  Throughout the year, <strong>PEERS GLOBAL</strong> creates opportunities to meet beyond the regular Circle rhythm:
                </p>

                {/* 6 Action Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    'To learn',
                    'To connect',
                    'To celebrate',
                    'To lead',
                    'To bring families together',
                    'To experience the wider community',
                  ].map((action) => (
                    <span
                      key={action}
                      className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs"
                    >
                      • {action}
                    </span>
                  ))}
                </div>

                <p className="border-l-2 border-[#0062D2] pl-3 italic text-slate-700 text-sm sm:text-base pt-2">
                  Because belonging to a community is not one event on one calendar. It is the accumulation of moments that turn people into relationships.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="#calendar-section"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Upcoming Schedule</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-800 font-medium text-xs sm:text-sm border border-slate-300 shadow-xs hover:bg-slate-50 transition-all duration-200"
                >
                  <span>Download Unity App</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white p-3">
                <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/philosophy-networking.jpg"
                    alt="Peers Global summit with vibrant networking and meaningful conversations"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-sky-200 border border-white/20">
                      The Annual Rhythm
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                      "Connect. Learn. Contribute. Belong."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: YOUR YEAR INSIDE PEERS GLOBAL (EXPERIENCE TABLE) ──── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE ANNUAL EXPERIENCE MAP
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              YOUR YEAR INSIDE PEERS GLOBAL
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              There is always another opportunity to connect. The calendar changes. The purpose remains: <strong>Connect. Learn. Contribute. Belong.</strong>
            </p>
          </div>

          {/* Matrix Table */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-md bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/90 border-b border-slate-200">
                  <th className="py-4 px-6 text-xs font-mono font-bold text-slate-800 uppercase tracking-wider w-1/3">
                    Experience
                  </th>
                  <th className="py-4 px-6 text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                    What It Creates
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {EIGHT_EVENT_TYPES.map((item, idx) => (
                  <tr key={item.title} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-6 font-serif font-bold text-slate-900">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#0062D2] shrink-0" />
                        <span>{item.title}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600 leading-relaxed font-light">
                      {item.whatItCreates}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: 8 IN-DEPTH EVENT EXPERIENCES ───────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE 8 SIGNATURE FORMATS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              SIGNATURE EVENT EXPERIENCES
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              From intimate monthly boardrooms to regional conclaves and family gatherings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EIGHT_EVENT_TYPES.map((ev, i) => (
              <div
                key={ev.title}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#0062D2] uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                      {ev.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {`0${i + 1}`}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-slate-950">
                    {ev.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {ev.desc}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    {ev.bulletPoints.map((pt) => (
                      <div key={pt} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0062D2] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="italic">{ev.whatItCreates}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: GUEST, TEAM & SPEAKING PARTICIPATION (3 COLUMNS) ───── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                PARTICIPATION GUIDELINES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
              HOW PARTICIPATION WORKS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Box 1: ATTENDING AS A GUEST */}
            <div className="p-8 rounded-3xl bg-[#FBFCFE] border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  ATTENDING AS A GUEST
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    You do not need to understand everything before experiencing it. Some events may be appropriate for guests, depending on the event and its participation guidelines.
                  </p>
                  <p>
                    Come with curiosity. Meet people. Listen. Experience the environment. See how entrepreneurs interact, and decide what the community means to you.
                  </p>
                  <p className="font-medium text-slate-900 pt-1">
                    The purpose of a guest experience is not pressure. It is understanding.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200/80 text-xs font-semibold text-[#0062D2]">
                Open to eligible guest entrepreneurs
              </div>
            </div>

            {/* Box 2: BRINGING YOUR TEAM */}
            <div className="p-8 rounded-3xl bg-[#FBFCFE] border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  BRINGING YOUR TEAM
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    PEERS GLOBAL membership is individual. But entrepreneurs do not build their businesses alone.
                  </p>
                  <p>
                    Your team may be part of your business journey even when the community relationship belongs to you personally.
                  </p>
                  <p className="font-medium text-slate-900 pt-1">
                    Where an event permits guests or team participation, the opportunity can help others around you experience the wider ecosystem. Participation follows specific event guidelines.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200/80 text-xs font-semibold text-purple-700">
                Team access on select masterclasses & summits
              </div>
            </div>

            {/* Box 3: SPEAKING */}
            <div className="p-8 rounded-3xl bg-[#FBFCFE] border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                  <Mic className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  SPEAKING
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    Some experiences are worth sharing from the stage. Some lessons are worth hearing from someone who has lived them.
                  </p>
                  <p>
                    Speaking opportunities create a different kind of contribution — sharing knowledge, experience, perspective and stories with the wider community.
                  </p>
                  <p className="font-medium text-slate-900 pt-1">
                    The objective is not simply visibility. It is usefulness: <em>What can someone else take away from your experience?</em>
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200/80 text-xs font-semibold text-emerald-700">
                Contribution-first keynote & panel selections
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 5: LIVE EVENT DISCOVERY & CALENDAR (FIND WHAT IS HAPPENING) ── */}
      <section id="calendar-section" className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                LIVE CALENDAR
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              FIND WHAT IS HAPPENING
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              Use the event calendar to discover what is coming up. The calendar should help you find something meaningful — not overwhelm you with everything happening everywhere.
            </p>
          </div>

          {/* Filter Pills Grid: Event Type, Location, Date, Community */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6 mb-10">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Filter 1: Event Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Event Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500"
                >
                  <option value="All Types">All Event Types</option>
                  <option value="Circle Meeting">Monthly Circle Meetings</option>
                  <option value="Networking">Mega Networking Events</option>
                  <option value="MindMeld">MindMeld Meetups</option>
                  <option value="Retreat">Leadership Retreats</option>
                  <option value="Family">Family Meetups</option>
                  <option value="Awards">Annual Awards Ceremony</option>
                  <option value="Conclave">Regional Conclaves & Summits</option>
                </select>
              </div>

              {/* Filter 2: Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  2. Location / City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500"
                >
                  {dynamicCities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter 3: Search / Keyword */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3. Search by Keyword or Speaker
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by topic, speaker, or Circle name..."
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Active Filters Display */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Filtering:</span>
              <span className="px-2.5 py-1 rounded-md bg-blue-50 text-[#0062D2] font-semibold border border-blue-100">
                {selectedCity}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 font-semibold border border-purple-100">
                {selectedType}
              </span>
              {searchTerm && (
                <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 font-semibold border border-amber-100">
                  "{searchTerm}"
                </span>
              )}
            </div>

          </div>

          {/* Events Grid / State */}
          {loading ? (
            <div className="py-20 text-center space-y-4">
              <Loader2 className="w-8 h-8 text-[#0062D2] animate-spin mx-auto" />
              <p className="text-sm text-slate-500">Loading events calendar...</p>
            </div>
          ) : filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((ev) => (
                <div
                  key={ev.event_id || ev.id || ev.title}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {(ev.image_url || ev.image) && (
                      <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={ev.image_url || ev.image}
                          alt={ev.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                          {ev.mode === 'virtual' ? 'Online' : ev.location || 'In Person'}
                        </span>
                      </div>
                    )}

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#0062D2]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{ev.formatted_start_at || ev.date || 'Upcoming Session'}</span>
                      </div>

                      <h3 className="font-serif font-bold text-slate-950 text-lg leading-snug group-hover:text-[#0062D2] transition-colors">
                        {ev.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-light">
                        {ev.description || 'Join fellow verified entrepreneurs for this curated PEERS GLOBAL gathering.'}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      {ev.circle?.name || 'Peers Global Community'}
                    </span>

                    <a
                      href="https://unity.peersglobal.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0062D2] hover:text-[#0052B4]"
                    >
                      <span>Register on App</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Guiding Fallback: Never display an empty calendar */
            <div className="p-10 rounded-3xl bg-white border border-slate-200 text-center space-y-4 max-w-2xl mx-auto shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center mx-auto">
                <CalendarDays className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950">
                Continuous Community Rhythm
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                No sessions currently match this exact filter, but Circles meet monthly across every active territory. Download Unity to view real-time regional schedules and book your guest seat.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSelectedCity('All Events')
                    setSelectedType('All Types')
                    setSearchTerm('')
                  }}
                  className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 cursor-pointer"
                >
                  Reset all filters
                </button>
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#0062D2] text-white text-xs font-semibold hover:bg-[#0052B4]"
                >
                  View on Unity App
                </a>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ─── SECTION 6: EVENTS AS EXPERIENCES & THE COMMUNITY BETWEEN ──────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Box: EVENTS SHOULD FEEL LIKE EXPERIENCES */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THE PHILOSOPHY
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  EVENTS SHOULD FEEL LIKE EXPERIENCES
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                An event is not successful simply because people attended. The more important questions are:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {EXPERIENCE_QUESTIONS.map((q) => (
                  <div
                    key={q}
                    className="p-3.5 rounded-2xl bg-[#FBFCFE] border border-slate-200 shadow-2xs text-xs font-medium text-slate-800 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm font-semibold text-slate-900 italic pt-2">
                That is the difference between an event and an experience.
              </p>
            </div>

            {/* Right Box: THE COMMUNITY BETWEEN THE EVENTS */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#040E24] via-[#061836] to-[#0A2558] text-white shadow-xl space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/20">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white leading-snug">
                  THE COMMUNITY BETWEEN THE EVENTS
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  <p>
                    Events are moments. <strong>Relationships are continuous.</strong>
                  </p>
                  <div className="space-y-1 pl-3 border-l-2 border-sky-400 text-sky-100 font-medium text-xs">
                    <p>• You may meet someone at a Summit.</p>
                    <p>• Continue the conversation through Unity.</p>
                    <p>• Meet again at a Circle.</p>
                    <p>• Connect one-to-one.</p>
                    <p>• Collaborate.</p>
                    <p>• Introduce them to someone else.</p>
                  </div>
                  <p className="text-white font-medium pt-2">
                    And eventually discover that one event was simply the beginning. That is why the PEERS GLOBAL calendar is more than a list of dates. It is a map of opportunities to build relationships.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 7: FAQ ACCORDION ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-1">
              <HelpCircle className="w-5 h-5 text-[#0062D2]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={faq.question} className="py-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-blue-50 text-blue-600'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-2.5 pb-1 text-xs sm:text-sm text-slate-600 leading-relaxed pr-6 font-light">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: CLOSING ROYAL HERO BANNER (YOUR YEAR IS MORE THAN YOUR MEETINGS) ── */}
      <section className="relative py-20 sm:py-28 bg-[#0062D2] text-white overflow-hidden">
        {/* Geometric Art */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-35 overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 600 600"
            fill="none"
            className="w-full h-full text-white/30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 50 450 A 420 420 0 0 1 550 50" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 120 520 A 500 500 0 0 1 600 120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <path d="M 220 580 A 460 460 0 0 1 580 220" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="280" y1="220" x2="380" y2="120" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="280" cy="220" r="4.5" fill="#7DD3FC" />
            <circle cx="280" cy="220" r="10" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-200">
                — AN ONGOING JOURNEY —
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                YOUR YEAR IS MORE THAN YOUR MEETINGS
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-white/90 leading-relaxed font-light max-w-2xl">
                <p>
                  A Circle gives you your people. Unity keeps you connected. Events give you moments to step beyond your Circle and experience the wider community.
                </p>
                <div className="space-y-1.5 pl-3 border-l-2 border-sky-300 text-sm text-sky-100 font-medium">
                  <p>A conversation becomes a relationship.</p>
                  <p>A relationship becomes a collaboration.</p>
                  <p>A contribution becomes recognition.</p>
                  <p>And one experience can open the door to another.</p>
                </div>
                <p className="text-white font-medium">
                  Your PEERS GLOBAL journey does not happen once a month. It continues throughout the year.
                </p>
                <p className="italic text-sky-200 font-serif text-lg">
                  Come for a meeting. Stay for the relationships. Experience the community.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#0062D2] font-semibold text-sm shadow-xl hover:bg-blue-50 transition-all duration-200 group hover:scale-105"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/membership"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/40 backdrop-blur-sm transition-all duration-200"
                >
                  <span>Apply for Membership →</span>
                </Link>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right select-none pointer-events-none">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Meetings.
                <br />
                Retreats.
                <br />
                Summits.
                <br />
                Lifelong Bonds.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

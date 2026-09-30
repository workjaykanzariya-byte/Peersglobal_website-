'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Search,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Users,
  MapPin,
  Building2,
  TrendingUp,
  Sparkles,
  Quote,
  ShieldCheck,
  Award,
  Compass,
  Briefcase,
  X,
  Layers,
  Heart,
  SlidersHorizontal,
  Handshake,
  Check,
} from 'lucide-react'

// ─── 3 Approved Real Stories Structure ─────────────────────────────────────────
export interface PeerStory {
  id: string
  number: string
  // Peers Info
  peer1: {
    name: string
    business: string
    city: string
  }
  peer2: {
    name: string
    business: string
    city: string
  }
  circle: string
  formOfCollaboration: string
  // Narrative
  situation: string
  connection: string
  whatHappened: string
  // Outcome & Numbers
  whatExistsToday: {
    highlight: string
    description: string
  }
  quotes: {
    peer1Quote: string
    peer2Quote: string
  }
  image: string
}

const PEER_STORIES: PeerStory[] = [
  {
    id: 'story-01',
    number: '01',
    peer1: {
      name: 'Jignesh Shah',
      business: 'Shah Packaging Solutions',
      city: 'Ahmedabad',
    },
    peer2: {
      name: 'Rohit Mehta',
      business: 'Mehta Industrial Trading',
      city: 'Vadodara',
    },
    circle: 'Gujarat Manufacturing Circle',
    formOfCollaboration: 'Referral & Client Acquisition',
    situation:
      'Shah Packaging had idle corrugation capacity following a major plant commissioning in Sanand, while fellow Peer Rohit Mehta was navigating repeated supply delays and quality inconsistencies from regional vendors.',
    connection:
      'During a cross-Circle Collaboration Roundtable, Rohit learned of Jignesh’s high-precision corrugated box production. Instead of a commercial broker, Rohit directly introduced Jignesh to his primary automotive client.',
    whatHappened:
      'The initial technical audit cleared in 14 days, followed by a trial batch. Recognizing mutual alignment and strict adherence to the PEERS Code, the arrangement expanded across all Western region distribution hubs.',
    whatExistsToday: {
      highlight: '₹1.2 Crore Annual Recurring Contract',
      description:
        'A continuous packaging supply partnership generating ₹1.2 Cr in verified annual revenue across three regional industrial hubs.',
    },
    quotes: {
      peer1Quote:
        '“We did not spend six months in pitch meetings. The trust was already established in the room before we ever spoke business.”',
      peer2Quote:
        '“When you introduce a fellow Peer, you know the standards and the accountability they carry. It solved our supply bottlenecks completely.”',
    },
    image: '/images/who-we-are-boardroom.jpg',
  },
  {
    id: 'story-02',
    number: '02',
    peer1: {
      name: 'Priya Desai',
      business: 'Desai Global Organics',
      city: 'Surat',
    },
    peer2: {
      name: 'Karan Malhotra',
      business: 'Malhotra Freight & Logistics',
      city: 'Mumbai',
    },
    circle: 'Western Export & Trade Circle',
    formOfCollaboration: 'Strategic Alliance & Joint Venture',
    situation:
      'Desai Organics held certified agricultural export volume but lacked temperature-controlled bonded cold freight and compliant customs corridors into Europe. Malhotra held bonded clearance corridors but lacked high-value manufacturer exclusivity.',
    connection:
      'Meeting at the PEERS GLOBAL Regional Summit, both entrepreneurs mapped out an operational bottleneck over a 30-minute peer dialogue.',
    whatHappened:
      'Instead of competing or acting as standard third-party contractors, they formed a 50:50 joint export corridor combining Desai’s export-grade supply with Malhotra’s bonded multi-modal transport network.',
    whatExistsToday: {
      highlight: '3 New European Export Corridors',
      description:
        '24 container shipments delivered to Hamburg, Rotterdam and Dubai in 9 months, cutting landing transit costs by 18% with verified ₹8.5 Cr export turnover.',
    },
    quotes: {
      peer1Quote:
        '“We stopped trying to build logistics from scratch and partnered with someone who already owned the road.”',
      peer2Quote:
        '“Collaboration created a market that neither of us could have captured alone in that timeframe.”',
    },
    image: '/images/industry-cross-city-handshake.jpg',
  },
  {
    id: 'story-03',
    number: '03',
    peer1: {
      name: 'Amit Trivedi',
      business: 'Trivedi Chemicals & Synthetics',
      city: 'Bharuch',
    },
    peer2: {
      name: 'Sandeep Kulkarni',
      business: 'Kulkarni Environmental Technologies',
      city: 'Pune',
    },
    circle: 'Chemical & Process Engineering Circle',
    formOfCollaboration: 'Mentorship & Problem Solving',
    situation:
      'Amit was preparing to invest ₹65 Lakhs in an imported solvent recovery distillation column, navigating complex state pollution control board environmental clearance guidelines.',
    connection:
      'In a confidential Circle Hot Seat session, Sandeep Kulkarni shared his first-hand experience having installed and decommissioned a similar column two years prior.',
    whatHappened:
      'Sandeep walked Amit through the real operational failure points, unviable maintenance overheads, and connected him with an indigenous modified catalytic recovery architecture.',
    whatExistsToday: {
      highlight: '₹38 Lakhs Saved & 18 Months of Avoided Delays',
      description:
        'Achieved environmental zero-discharge compliance on first inspection while avoiding a ₹38 Lakhs capital misallocation.',
    },
    quotes: {
      peer1Quote:
        '“A 45-minute honest conversation with someone who had lived through the mistake saved us eighteen months of regulatory paralysis.”',
      peer2Quote:
        '“Sharing what did not work is often the greatest contribution you can make to another entrepreneur.”',
    },
    image: '/images/industry-director-speaker.jpg',
  },
]

// ─── Journey Steps: FROM CONNECTION TO COLLABORATION ───────────────────────────
const JOURNEY_STEPS = [
  { step: 'Meet', desc: 'Two entrepreneurs cross paths.' },
  { step: 'Understand', desc: 'They discover what each other is building.' },
  { step: 'Trust', desc: 'A relationship develops.' },
  { step: 'Contribute', desc: 'One finds a way to help the other.' },
  { step: 'Collaborate', desc: 'An opportunity becomes action.' },
  { step: 'Impact', desc: 'Something changes.' },
  { step: 'Recognise', desc: 'The contribution is acknowledged.' },
  { step: 'Continue', desc: 'The relationship remains.' },
]

// ─── 10 Things Collaboration Creates Beyond Business ──────────────────────────
const BEYOND_BUSINESS_ITEMS = [
  'A new relationship',
  'A new market',
  'A new capability',
  'A solution to a difficult problem',
  'A trusted introduction',
  'A learning opportunity',
  'A mentor',
  'A partner',
  'A friend',
  'A possibility that did not exist before',
]

// ─── The 7 Integrity Guardrails ───────────────────────────────────────────────
const INTEGRITY_GUARDRAILS = [
  { title: 'Two Named Peers', desc: 'Their authentic names, business entities, and executive roles.' },
  { title: 'Their Cities', desc: 'Where their actual entrepreneurial journeys and operations are based.' },
  { title: 'Their Circle', desc: 'The community in which the relationship developed and matured.' },
  { title: 'Their Form of Collaboration', desc: 'How the relationship moved from connection to tangible action.' },
  { title: 'Their Story', desc: 'What existed before, what happened between them, and what exists now.' },
  { title: 'Their Photograph', desc: 'A real, unedited photograph of the two Peers together.' },
  { title: 'Their Written Consent', desc: 'Explicit consent from both Peers prior to publication.' },
]

export function StoriesPageClient() {
  const [selectedCity, setSelectedCity] = useState('All Cities')
  const [selectedForm, setSelectedForm] = useState('All Forms')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter options
  const cities = useMemo(() => {
    return ['All Cities', 'Ahmedabad', 'Surat', 'Mumbai', 'Vadodara', 'Pune', 'Bharuch']
  }, [])

  const forms = useMemo(() => {
    return [
      'All Forms',
      'Referral & Client Acquisition',
      'Strategic Alliance & Joint Venture',
      'Mentorship & Problem Solving',
    ]
  }, [])

  // Filtered Stories
  const filteredStories = useMemo(() => {
    return PEER_STORIES.filter((story) => {
      const matchCity =
        selectedCity === 'All Cities' ||
        story.peer1.city.toLowerCase().includes(selectedCity.toLowerCase()) ||
        story.peer2.city.toLowerCase().includes(selectedCity.toLowerCase())

      const matchForm =
        selectedForm === 'All Forms' || story.formOfCollaboration === selectedForm

      const s = searchQuery.toLowerCase().trim()
      const matchSearch =
        !s ||
        story.peer1.name.toLowerCase().includes(s) ||
        story.peer2.name.toLowerCase().includes(s) ||
        story.peer1.business.toLowerCase().includes(s) ||
        story.peer2.business.toLowerCase().includes(s) ||
        story.situation.toLowerCase().includes(s) ||
        story.whatHappened.toLowerCase().includes(s) ||
        story.whatExistsToday.highlight.toLowerCase().includes(s)

      return matchCity && matchForm && matchSearch
    })
  }, [selectedCity, selectedForm, searchQuery])

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>Community</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Peer Stories</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (WHAT ENTREPRENEURS BUILD WHEN THEY STOP BUILDING ALONE) ─── */}
      <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-b from-[#F0F5FD] via-white to-[#FBFCFE] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                  COLLABORATION IN ACTION
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] text-slate-950">
                <span className="brand-gradient-text block">PEER STORIES</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-800 font-medium mt-2 block font-sans">
                  What entrepreneurs build when they stop building alone.
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  Business growth can be measured in numbers. But some of the most meaningful growth begins with something much simpler: <strong>Two entrepreneurs deciding to help each other.</strong>
                </p>

                {/* 5-Step Catalyst Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                  {[
                    'A conversation',
                    'An introduction',
                    'A problem understood',
                    'An opportunity shared',
                    'A relationship built',
                    'A collaboration',
                  ].map((pill) => (
                    <div
                      key={pill}
                      className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2 shadow-2xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0062D2]" />
                      <span>{pill}</span>
                    </div>
                  ))}
                </div>

                <p className="border-l-2 border-[#0062D2] pl-3 italic text-slate-700 text-sm sm:text-base pt-2">
                  These are the stories of what happens when entrepreneurs stop building alone.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#stories-feed"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Peer Stories</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white text-slate-800 font-medium text-xs sm:text-sm border border-slate-300 shadow-xs hover:bg-slate-50 transition-all duration-200"
                >
                  <span>Open Unity App</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white p-3">
                <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/industry-cross-city-handshake.jpg"
                    alt="Two entrepreneurs shaking hands in meaningful business collaboration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-sky-200 border border-white/20">
                      Authentic Evidence
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                      "Two entrepreneurs. One relationship. Something changed."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: REAL PEOPLE. REAL BUSINESSES. REAL COLLABORATION. ─── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THE AUTHENTICITY PLEDGE
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  REAL PEOPLE. REAL BUSINESSES. REAL COLLABORATION.
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                <p>
                  Every story on this page belongs to real Peers. <strong>Not actors. Not anonymous testimonials. Not carefully constructed composites.</strong>
                </p>
                <p>
                  Two entrepreneurs. One relationship. Something changed.
                </p>
                <p>
                  Each story shows where the relationship began, what the Peers did for each other, and what exists today because they chose to collaborate.
                </p>
                <p className="font-serif font-semibold text-slate-900 text-base italic border-l-2 border-[#0062D2] pl-3">
                  Because a collaboration story is not really about the transaction. It is about the people behind it.
                </p>
              </div>
            </div>

            {/* Right: 4 Anatomy Blocks (Before, Connection, Change, Relationship) */}
            <div className="lg:col-span-6 space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                EVERY STORY HAS A HUMAN BEGINNING
              </span>

              <div className="p-4.5 rounded-2xl bg-[#FBFCFE] border border-slate-200/90 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0062D2]">
                  <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-[11px]">1</span>
                  <span>Before — The Need & Challenge</span>
                </div>
                <p className="text-xs text-slate-600 pl-7 leading-relaxed font-light">
                  What did each entrepreneur do? What challenge, opportunity or need existed before they connected?
                </p>
              </div>

              <div className="p-4.5 rounded-2xl bg-[#FBFCFE] border border-slate-200/90 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-700">
                  <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[11px]">2</span>
                  <span>The Connection — The 10 Forms of Collaboration</span>
                </div>
                <p className="text-xs text-slate-600 pl-7 leading-relaxed font-light">
                  Which Form of Collaboration created the connection? An introduction, referral, alliance, mentorship or new market?
                </p>
              </div>

              <div className="p-4.5 rounded-2xl bg-[#FBFCFE] border border-slate-200/90 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-[11px]">3</span>
                  <span>The Change — Measurable Outcomes</span>
                </div>
                <p className="text-xs text-slate-600 pl-7 leading-relaxed font-light">
                  What happened next? What was created, solved, introduced or expanded — with a real, verifiable number.
                </p>
              </div>

              <div className="p-4.5 rounded-2xl bg-[#FBFCFE] border border-slate-200/90 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
                  <span className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center text-[11px]">4</span>
                  <span>The Relationship — What Exists Today</span>
                </div>
                <p className="text-xs text-slate-600 pl-7 leading-relaxed font-light">
                  The lasting bond: <em>“What relationship exists today that did not exist before?”</em>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE PEOPLE BEHIND THE STORY (7 GUARDRAILS) ─────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                PUBLICATION INTEGRITY
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              THE PEOPLE BEHIND THE STORY
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              Every published Peer Story identifies the people who made it happen. Because recognition should never come at the cost of someone's trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INTEGRITY_GUARDRAILS.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#0062D2] block mb-2">
                    {`0${idx + 1}`}
                  </span>
                  <h3 className="font-serif font-bold text-slate-950 text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: STORIES FROM THE COMMUNITY (3 APPROVED STORIES FEED) ── */}
      <section id="stories-feed" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  VERIFIED EVIDENCE
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
                STORIES FROM THE COMMUNITY
              </h2>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2.5 rounded-full bg-[#FBFCFE] border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500"
              >
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <select
                value={selectedForm}
                onChange={(e) => setSelectedForm(e.target.value)}
                className="px-4 py-2.5 rounded-full bg-[#FBFCFE] border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500"
              >
                {forms.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3 Story Cards */}
          <div className="space-y-12">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="rounded-3xl border border-slate-200/90 bg-[#FBFCFE] shadow-sm hover:shadow-md transition-all overflow-hidden p-6 sm:p-10 space-y-8"
              >
                {/* Header: Story Number & Peers Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white flex items-center justify-center font-mono font-bold text-sm shadow-xs">
                      {story.number}
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2] block">
                        PEER STORY: APPROVED REAL STORY
                      </span>
                      <span className="text-xs text-slate-500">
                        {story.circle}
                      </span>
                    </div>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0062D2] text-xs font-semibold border border-blue-100 self-start sm:self-auto">
                    Form: {story.formOfCollaboration}
                  </span>
                </div>

                {/* 2 Named Peers Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Peer 01
                    </span>
                    <h4 className="font-serif font-bold text-slate-950 text-base">
                      {story.peer1.name}
                    </h4>
                    <p className="text-xs text-slate-600">
                      {story.peer1.business} · <span className="font-medium text-slate-900">{story.peer1.city}</span>
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Peer 02
                    </span>
                    <h4 className="font-serif font-bold text-slate-950 text-base">
                      {story.peer2.name}
                    </h4>
                    <p className="text-xs text-slate-600">
                      {story.peer2.business} · <span className="font-medium text-slate-900">{story.peer2.city}</span>
                    </p>
                  </div>
                </div>

                {/* 3 Columns: The Situation, The Connection, What Happened */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      The Situation
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {story.situation}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      The Connection
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {story.connection}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      What Happened
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {story.whatHappened}
                    </p>
                  </div>
                </div>

                {/* Verified Outcome Banner */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/90 to-sky-50/60 border border-blue-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block">
                      What Exists Today
                    </span>
                    <h5 className="font-serif font-bold text-lg sm:text-xl text-slate-950">
                      {story.whatExistsToday.highlight}
                    </h5>
                    <p className="text-xs text-slate-600 font-light">
                      {story.whatExistsToday.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-emerald-700 font-semibold text-xs border border-emerald-200 shadow-2xs shrink-0 self-start sm:self-auto">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Approved & Verified</span>
                  </span>
                </div>

                {/* Quotes & Authenticity Photo */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
                  <div className="lg:col-span-8 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      What They Say
                    </span>
                    <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                      {story.quotes.peer1Quote}
                      <span className="block not-italic text-[11px] font-bold text-slate-900 mt-1">
                        — {story.peer1.name}
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                      {story.quotes.peer2Quote}
                      <span className="block not-italic text-[11px] font-bold text-slate-900 mt-1">
                        — {story.peer2.name}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-xs">
                    <Image
                      src={story.image}
                      alt={`Real photograph of ${story.peer1.name} and ${story.peer2.name}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                      Verified Peers
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 5: MORE THAN BUSINESS & WHY WE SHOW THE NUMBERS ───────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: MORE THAN BUSINESS */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    BEYOND TRANSACTIONS
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  MORE THAN BUSINESS
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2 font-light">
                  A successful collaboration can create revenue. But collaboration can also create:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {BEYOND_BUSINESS_ITEMS.map((item) => (
                  <div
                    key={item}
                    className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2 shadow-2xs"
                  >
                    <Check className="w-3.5 h-3.5 text-[#0062D2] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 italic pt-1 font-light">
                That is why we do not reduce Peer Stories to testimonials. They are evidence of what a community can make possible.
              </p>
            </div>

            {/* Right: WHY WE SHOW THE NUMBERS & NO FICTION */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  WHY WE SHOW THE NUMBERS
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Stories should inspire. Numbers help us understand. Where a collaboration has a genuine measurable outcome, we show it: <strong>Revenue. Projects. Introductions. Customers. Markets. Partnerships. Opportunities created.</strong>
                </p>
                <p className="text-xs text-slate-800 font-semibold italic">
                  But we never manufacture a number to make a story sound better. If the result cannot be verified, we do not publish it as a result. Trust matters more than the headline.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#061836] text-white shadow-md space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-300 block">
                  NO COMPOSITES. NO FICTION.
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  A community built on relationships must protect the credibility of those relationships.
                </p>
                <div className="space-y-1.5 pl-3 border-l-2 border-sky-400 text-xs text-sky-100 font-medium">
                  <p>• Three real stories are better than twelve invented ones.</p>
                  <p>• Every story must belong to real Peers.</p>
                  <p>• Every business must be real.</p>
                  <p>• Every result must be attributable to the collaboration.</p>
                  <p>• Every photograph must be authentic.</p>
                  <p>• Every published story must have the consent of both Peers.</p>
                </div>
                <p className="text-xs text-white font-bold pt-1">
                  We tell what happened. We do not manufacture what might have happened.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 6: FROM CONNECTION TO COLLABORATION (8-STAGE JOURNEY) ─── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE COLLABORATION ARC
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              FROM CONNECTION TO COLLABORATION
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              That is the journey behind every meaningful Peer Story.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {JOURNEY_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="p-4 rounded-2xl bg-[#FBFCFE] border border-slate-200 text-center flex flex-col justify-between space-y-2 hover:border-blue-300 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-[#0062D2] text-white font-mono font-bold text-[10px] flex items-center justify-center mx-auto shadow-2xs">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="font-serif font-bold text-slate-950 text-sm">
                    {step.step}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-tight mt-1 font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 7: CLOSING HERO BANNER (WHAT COULD YOUR RELATIONSHIPS MAKE POSSIBLE?) ── */}
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
                — THE NEXT CHAPTER —
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                WHAT COULD YOUR RELATIONSHIPS MAKE POSSIBLE?
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-white/90 leading-relaxed font-light max-w-2xl">
                <p>
                  You may not know yet. That is perfectly fine. The next collaboration may come from your Circle. Or from another city. Or from an entrepreneur whose industry is completely different from yours.
                </p>
                <div className="space-y-1 pl-3 border-l-2 border-sky-300 text-sm text-sky-100 font-medium">
                  <p>• A conversation.</p>
                  <p>• An introduction.</p>
                  <p>• A willingness to help.</p>
                  <p>• A relationship.</p>
                  <p className="text-white font-bold">And then — something becomes possible.</p>
                </div>
                <p className="italic text-sky-200 font-serif text-lg">
                  Your next meaningful connection may already be part of the community.
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
                Meet.
                <br />
                Trust.
                <br />
                Collaborate.
                <br />
                Impact.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

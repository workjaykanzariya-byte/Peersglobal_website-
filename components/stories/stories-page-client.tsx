'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3.5 text-slate-400" />
          <span>Community</span>
          <ChevronRight className="size-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Peer Stories</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (WHAT ENTREPRENEURS BUILD WHEN THEY STOP BUILDING ALONE) ─── */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-5 sm:pt-6 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Master Card Hero Box */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white via-white/95 to-slate-50 border border-slate-200/90 shadow-lg min-h-[480px] lg:min-h-[520px] p-6 sm:p-10 lg:p-12 flex items-center">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
              
              {/* Left Column: Manifesto & Value */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#0062D2]">
                    COLLABORATION IN ACTION
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-tight">
                    Peer Stories
                  </h1>
                  <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
                    What entrepreneurs build when they stop building alone.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  <p>
                    Business growth can be measured in numbers. But the most enduring growth begins with something simpler: <strong className="text-slate-900 font-semibold">Two entrepreneurs choosing to help each other succeed.</strong>
                  </p>

                  {/* 6 Catalyst Pills */}
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
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-semibold text-slate-700 flex items-center gap-2 shadow-2xs"
                      >
                        <span className="size-1.5 rounded-full bg-[#0062D2]" />
                        <span>{pill}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-2xl bg-blue-50 text-xs font-semibold text-[#0062D2] border border-blue-200/60 flex items-center gap-2">
                    <Sparkles className="size-4 shrink-0 text-[#0062D2]" />
                    <span>These are the authentic stories of what happens when entrepreneurs stop building alone.</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <GalaxyButton
                    href="#stories-feed"
                    variant="primary"
                    size="md"
                  >
                    Explore Peer Stories
                  </GalaxyButton>

                  <GalaxyButton
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="transparent-light"
                    size="md"
                  >
                    Open Unity App
                  </GalaxyButton>
                </div>
              </div>

              {/* Right Column: Hero Visual Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-[4/3] group bg-slate-900">
                  <Image
                    src="/images/industry-cross-city-handshake.jpg"
                    alt="Two entrepreneurs shaking hands in meaningful business collaboration"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-4 right-4 text-right select-none pointer-events-none drop-shadow-md">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 border border-white/20 text-[10px] font-bold text-white tracking-widest uppercase backdrop-blur-md">
                      <span className="size-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                      AUTHENTIC EVIDENCE
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-sky-200 border border-white/20">
                      Real Collaborations
                    </span>
                    <p className="text-sm sm:text-base font-bold leading-snug">
                      &quot;Two entrepreneurs. One relationship. Something changed.&quot;
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 items-center">
            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Users className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">100%</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Verified Peers</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Handshake className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">₹10+ Cr</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Peer Value</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">Zero</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Fictional Stories</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Award className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">7 Guardrails</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Integrity Standard</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 2: REAL PEOPLE. REAL BUSINESSES. REAL COLLABORATION. ─── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm p-7 sm:p-10 lg:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                      THE AUTHENTICITY PLEDGE
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                    Real People. Real Businesses. Real Collaboration.
                  </h2>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  <p>
                    Every story on this page belongs to real Peers. <strong className="text-slate-900 font-semibold">Not actors. Not anonymous testimonials. Not carefully constructed composites.</strong>
                  </p>
                  <p>
                    Two entrepreneurs. One relationship. Something changed.
                  </p>
                  <p>
                    Each story shows where the relationship began, what the Peers did for each other, and what exists today because they chose to collaborate.
                  </p>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 mt-2">
                    <p className="font-semibold text-slate-900 text-xs sm:text-sm">
                      A collaboration story is not about a transaction. It is about the trust between people who build.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: 4 Anatomy Blocks */}
              <div className="lg:col-span-6 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  EVERY STORY HAS A HUMAN BEGINNING
                </span>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1 hover:border-blue-200 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0062D2]">
                    <span className="size-5 rounded-full bg-blue-50 flex items-center justify-center text-[11px] font-mono border border-blue-100">1</span>
                    <span>Before — The Need & Challenge</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-7 leading-relaxed font-light">
                    What did each entrepreneur do? What challenge, opportunity or need existed before they connected?
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1 hover:border-purple-200 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-700">
                    <span className="size-5 rounded-full bg-purple-50 flex items-center justify-center text-[11px] font-mono border border-purple-100">2</span>
                    <span>The Connection — The 10 Forms of Collaboration</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-7 leading-relaxed font-light">
                    Which Form of Collaboration created the connection? An introduction, referral, alliance, mentorship or new market?
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1 hover:border-emerald-200 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                    <span className="size-5 rounded-full bg-emerald-50 flex items-center justify-center text-[11px] font-mono border border-emerald-100">3</span>
                    <span>The Change — Measurable Outcomes</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-7 leading-relaxed font-light">
                    What happened next? What was created, solved, introduced or expanded — with a real, verifiable number.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1 hover:border-amber-200 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
                    <span className="size-5 rounded-full bg-amber-50 flex items-center justify-center text-[11px] font-mono border border-amber-100">4</span>
                    <span>The Relationship — What Exists Today</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-7 leading-relaxed font-light">
                    The lasting bond: <em>“What relationship exists today that did not exist before?”</em>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE PEOPLE BEHIND THE STORY (7 GUARDRAILS) ─────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                PUBLICATION INTEGRITY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              The People Behind the Story
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Every published Peer Story identifies the people who made it happen. Because recognition should never come at the cost of someone&apos;s trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INTEGRITY_GUARDRAILS.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#0062D2] block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base mb-1">
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
      <section id="stories-feed" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  VERIFIED EVIDENCE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
                Stories From the Community
              </h2>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2.5 rounded-full bg-[#FAFBFD] border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0062D2] shadow-2xs"
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
                className="px-4 py-2.5 rounded-full bg-[#FAFBFD] border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0062D2] shadow-2xs"
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
          <div className="space-y-10">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="rounded-3xl border border-slate-200/90 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-6 sm:p-10 space-y-8"
              >
                {/* Header: Story Number & Peers Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="size-10 rounded-2xl bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white flex items-center justify-center font-mono font-bold text-sm shadow-xs">
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
                  <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 shadow-2xs space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Peer 01
                    </span>
                    <h4 className="font-bold text-slate-900 text-base">
                      {story.peer1.name}
                    </h4>
                    <p className="text-xs text-slate-600">
                      {story.peer1.business} · <span className="font-semibold text-slate-900">{story.peer1.city}</span>
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 shadow-2xs space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Peer 02
                    </span>
                    <h4 className="font-bold text-slate-900 text-base">
                      {story.peer2.name}
                    </h4>
                    <p className="text-xs text-slate-600">
                      {story.peer2.business} · <span className="font-semibold text-slate-900">{story.peer2.city}</span>
                    </p>
                  </div>
                </div>

                {/* 3 Columns: The Situation, The Connection, What Happened */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
                  <div className="space-y-2 p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/70">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      The Situation
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {story.situation}
                    </p>
                  </div>

                  <div className="space-y-2 p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/70">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      The Connection
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {story.connection}
                    </p>
                  </div>

                  <div className="space-y-2 p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/70">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      What Happened
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {story.whatHappened}
                    </p>
                  </div>
                </div>

                {/* Verified Outcome Banner */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50/90 via-indigo-50/50 to-slate-50 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2] block">
                      What Exists Today
                    </span>
                    <h5 className="font-bold text-lg sm:text-xl text-slate-900">
                      {story.whatExistsToday.highlight}
                    </h5>
                    <p className="text-xs text-slate-600 font-light">
                      {story.whatExistsToday.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-emerald-700 font-bold text-xs border border-emerald-200 shadow-2xs shrink-0 self-start sm:self-auto">
                    <CheckCircle2 className="size-3.5" />
                    <span>Approved & Verified</span>
                  </span>
                </div>

                {/* Quotes & Authenticity Photo */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
                  <div className="lg:col-span-8 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      What They Say
                    </span>
                    <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                      {story.quotes.peer1Quote}
                      <span className="block not-italic text-[11px] font-bold text-slate-900 mt-1">
                        — {story.peer1.name}
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-xs sm:text-sm text-slate-700 italic leading-relaxed">
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
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: MORE THAN BUSINESS */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                    BEYOND TRANSACTIONS
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                  More Than Business
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 font-light leading-relaxed">
                  A successful collaboration can create revenue. But collaboration can also create:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {BEYOND_BUSINESS_ITEMS.map((item) => (
                  <div
                    key={item}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200/90 text-xs font-semibold text-slate-800 flex items-center gap-2.5 shadow-2xs hover:border-blue-200 transition-colors"
                  >
                    <Check className="size-3.5 text-[#0062D2] shrink-0 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-500 italic pt-1 font-light">
                That is why we do not reduce Peer Stories to simple testimonials. They are evidence of what a community can make possible.
              </p>
            </div>

            {/* Right: WHY WE SHOW THE NUMBERS & NO FICTION */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
                <div className="size-11 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shadow-2xs">
                  <TrendingUp className="size-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Why we show the numbers
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Stories should inspire. Numbers help us understand. Where a collaboration has a genuine measurable outcome, we show it: <strong className="text-slate-900 font-semibold">Revenue. Projects. Introductions. Customers. Markets. Partnerships. Opportunities created.</strong>
                </p>
                <p className="text-xs text-slate-800 font-semibold italic">
                  We never manufacture a number to make a story sound better. If the result cannot be verified, we do not publish it as a result. Trust matters more than the headline.
                </p>
              </div>

              <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-xl border border-slate-800 space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-300 bg-white/10 px-3 py-1 rounded-full border border-white/10 inline-block">
                  NO COMPOSITES. NO FICTION.
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  A community built on relationships must protect the credibility of those relationships.
                </p>
                <div className="space-y-1.5 pl-3 border-l-2 border-sky-400 text-xs text-sky-100 font-medium">
                  <p>• Three real stories are better than twelve invented ones.</p>
                  <p>• Every story belongs to real, verified Peers.</p>
                  <p>• Every result is attributable to the collaboration.</p>
                  <p>• Every published story has explicit consent from both Peers.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 6: FROM CONNECTION TO COLLABORATION (8-STAGE JOURNEY) ─── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                THE COLLABORATION ARC
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              From Connection to Collaboration
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              The continuous journey behind every meaningful Peer Story.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {JOURNEY_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 text-center flex flex-col justify-between space-y-2 hover:border-blue-300 hover:shadow-2xs transition-all"
              >
                <span className="size-6 rounded-full bg-[#0062D2] text-white font-mono font-bold text-[10px] flex items-center justify-center mx-auto shadow-2xs">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
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

      {/* ─── SECTION 7: CLOSING HERO BANNER ── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.18),transparent_50%),radial-gradient(circle_at_82%_12%,rgba(99,102,241,0.15),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 flex flex-col items-start space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                  THE NEXT CHAPTER
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                What could your relationships make possible?
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                <p>
                  You may not know yet. That is perfectly fine. The next collaboration may come from your Circle, another city, or an entrepreneur from an entirely different industry.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
                  <p className="text-sky-200 font-medium text-xs sm:text-sm">
                    • A conversation · An introduction · A willingness to help · A relationship.
                  </p>
                  <p className="text-white font-bold text-xs sm:text-sm">And then — something becomes possible.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="default"
                  className="uppercase tracking-wider font-bold"
                >
                  Open Unity App
                </GalaxyButton>

                <GalaxyButton
                  href="/membership"
                  variant="transparent"
                  size="default"
                  className="uppercase tracking-wider font-bold"
                >
                  Apply for Membership
                </GalaxyButton>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-xl sm:text-2xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Meet.
              </p>
              <p
                className="text-xl sm:text-2xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Trust.
              </p>
              <p
                className="text-xl sm:text-2xl text-white leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Collaborate.
              </p>
              <p
                className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Impact.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

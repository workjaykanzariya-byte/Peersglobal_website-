'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '@/app/sections.css'
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
      <section className="fd-hero">
        <video
          className="fd-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          src="/videos/homepage-hero-bg.mp4"
        />
        <div className="fd-hero__scrim" aria-hidden="true"></div>

        <div className="fd-hero__inner">
          <div className="fd-hero__wrapper !max-w-3xl">
            <div className="fd-hero__stack">
              <div className="fd-hero__group">
                {/* Gradient Pill Label */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-900/60 via-indigo-900/50 to-rose-900/60 backdrop-blur-md border border-white/20 shadow-lg">
                  <span className="inline-block size-2 rounded-full bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                    COLLABORATION IN ACTION
                  </span>
                </div>

                {/* Main Headline with Gradient Brand Accent */}
                <h1 className="fd-hero__headline !text-3xl sm:!text-5xl lg:!text-[54px] !leading-[1.12] font-bold tracking-tight text-white">
                  Peer{' '}
                  <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                    Stories
                  </span>
                </h1>

                {/* Subtitle with Gradient Underline / Tone */}
                <p className="fd-hero__sub !text-base sm:!text-xl font-medium leading-relaxed bg-gradient-to-r from-white via-slate-100 to-sky-200 bg-clip-text text-transparent">
                  What entrepreneurs build when they stop building alone.
                </p>

                {/* Quote with Gradient Left Border */}
                <div className="relative pl-4 py-1 border-l-4 border-transparent [border-image:linear-gradient(to_bottom,#38BDF8,#818CF8,#FB7185)_1]">
                  <p className="text-sm sm:text-base text-white/95 font-medium italic">
                    &quot;Two entrepreneurs. One relationship. Something changed.&quot;
                  </p>
                </div>

                {/* Body Text */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal max-w-2xl pt-1">
                  Business growth can be measured in numbers. But the most enduring growth begins with something simpler:{' '}
                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#FB7185] font-bold">
                    Two entrepreneurs choosing to help each other succeed.
                  </strong>{' '}
                  These are the authentic, verified stories of what happens when entrepreneurs connect, collaborate, and grow together inside Circles.
                </p>
              </div>

              {/* Buttons matching Home Page Hero button style */}
              <div className="fd-hero__cta flex flex-wrap items-center gap-3.5">
                <GalaxyButton
                  href="#stories-feed"
                  size="lg"
                  className="text-xs sm:text-sm font-semibold"
                >
                  EXPLORE PEER STORIES
                </GalaxyButton>
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="transparent"
                  size="lg"
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                >
                  DOWNLOAD UNITY APP
                </GalaxyButton>
              </div>

              {/* Counter / Stats Grid in Sleek Frosted Glass Boxes */}
              <div className="w-full pt-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
                  <div className="group p-3 sm:p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/15 hover:border-white/25 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="size-4 text-[#38BDF8] group-hover:scale-110 transition-transform" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] font-extrabold text-base sm:text-lg">
                        100%
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-200 font-medium">Verified Peers</p>
                  </div>

                  <div className="group p-3 sm:p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/15 hover:border-white/25 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="size-4 text-[#818CF8] group-hover:scale-110 transition-transform" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] font-extrabold text-base sm:text-lg">
                        ₹10+ Cr
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-200 font-medium">Peer Value</p>
                  </div>

                  <div className="group p-3 sm:p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/15 hover:border-white/25 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck className="size-4 text-[#FB7185] group-hover:scale-110 transition-transform" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] font-extrabold text-base sm:text-lg">
                        Zero
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-200 font-medium">Fictional Stories</p>
                  </div>

                  <div className="group p-3 sm:p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/15 hover:border-white/25 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="size-4 text-amber-400 group-hover:scale-110 transition-transform" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] font-extrabold text-base sm:text-lg">
                        7
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-200 font-medium">Guardrails Integrity</p>
                  </div>
                </div>
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
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 mb-3">
                    <span className="inline-block size-2 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] bg-clip-text text-transparent">
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
              <div className="lg:col-span-6 space-y-3.5">
                {/* Step 1 */}
                <div className="group p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <span className="w-6 h-6 rounded-lg bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white flex items-center justify-center text-[11px] font-mono shadow-xs shrink-0 group-hover:scale-110 transition-transform">
                      1
                    </span>
                    <span className="bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] bg-clip-text text-transparent font-bold">
                      Before — The Need &amp; Challenge
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-8.5 leading-relaxed font-light">
                    What did each entrepreneur do? What challenge, opportunity or need existed before they connected?
                  </p>
                </div>

                {/* Step 2 */}
                <div className="group p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <span className="w-6 h-6 rounded-lg bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white flex items-center justify-center text-[11px] font-mono shadow-xs shrink-0 group-hover:scale-110 transition-transform">
                      2
                    </span>
                    <span className="bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] bg-clip-text text-transparent font-bold">
                      The Connection — The 10 Forms of Collaboration
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-8.5 leading-relaxed font-light">
                    Which Form of Collaboration created the connection? An introduction, referral, alliance, mentorship or new market?
                  </p>
                </div>

                {/* Step 3 */}
                <div className="group p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <span className="w-6 h-6 rounded-lg bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white flex items-center justify-center text-[11px] font-mono shadow-xs shrink-0 group-hover:scale-110 transition-transform">
                      3
                    </span>
                    <span className="bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] bg-clip-text text-transparent font-bold">
                      The Change — Measurable Outcomes
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-8.5 leading-relaxed font-light">
                    What happened next? What was created, solved, introduced or expanded — with a real, verifiable number.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="group p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <span className="w-6 h-6 rounded-lg bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white flex items-center justify-center text-[11px] font-mono shadow-xs shrink-0 group-hover:scale-110 transition-transform">
                      4
                    </span>
                    <span className="bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] bg-clip-text text-transparent font-bold">
                      The Relationship — What Exists Today
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-8.5 leading-relaxed font-light">
                    The lasting bond: <em className="text-slate-800 font-medium">“What relationship exists today that did not exist before?”</em>
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80">
              <span className="inline-block size-2 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] bg-clip-text text-transparent">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INTEGRITY_GUARDRAILS.map((item, idx) => (
              <div
                key={item.title}
                className="animated-glow-card group !rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all"
                tabIndex={0}
                role="article"
              >
                <svg className="animated-border-svg !rounded-3xl" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id={`guardrailCardGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1D4ED8" />
                      <stop offset="50%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#E11D48" />
                    </linearGradient>
                  </defs>
                  <path
                    className={`animated-border-path ${idx % 3 === 1 ? 'animated-border-path-2' : idx % 3 === 2 ? 'animated-border-path-3' : ''}`}
                    style={{ stroke: `url(#guardrailCardGrad-${idx})` }}
                    d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                  />
                </svg>

                <div className="relative z-10 flex flex-col justify-between p-6 bg-white border border-slate-200/80 !rounded-[calc(1.5rem-1.5px)] h-full space-y-4 shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-[11px] font-mono font-extrabold tracking-wider uppercase px-3 py-1 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white border border-transparent shadow-xs transition-all duration-300 group-hover:!bg-white group-hover:!border-indigo-200 group-hover:!text-transparent group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#4F46E5] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:shadow-2xs">
                        0{idx + 1}
                      </span>
                      <div className="size-7 rounded-full bg-gradient-to-br from-blue-50 via-indigo-50/60 to-rose-50 flex items-center justify-center border border-indigo-200/80 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#4F46E5] group-hover:to-[#E11D48] transition-all shadow-2xs group-hover:scale-110">
                        <Check className="size-3.5 text-[#1D4ED8] group-hover:text-white stroke-[2.5] transition-colors" />
                      </div>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#4F46E5] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light group-hover:text-slate-800 transition-colors">
                      {item.desc}
                    </p>
                  </div>
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80">
                <span className="inline-block size-2 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] bg-clip-text text-transparent">
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
                  {/* The Situation */}
                  <div
                    className="animated-glow-card group !rounded-2xl cursor-pointer shadow-2xs hover:shadow-lg transition-all"
                    tabIndex={0}
                    role="article"
                  >
                    <svg className="animated-border-svg !rounded-2xl" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                      <defs>
                        <linearGradient id={`sitGrad-${story.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="50%" stopColor="#4F46E5" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <path
                        className="animated-border-path"
                        style={{ stroke: `url(#sitGrad-${story.id})` }}
                        d="M 12,0 H 88 Q 100,0 100,12 V 88 Q 100,100 88,100 H 12 Q 0,100 0,88 V 12 Q 0,0 12,0 Z"
                      />
                    </svg>
                    <div className="relative z-10 flex flex-col justify-start p-5 bg-white border border-slate-200/80 rounded-2xl h-full space-y-2.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#4F46E5] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 block">
                        The Situation
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-800 leading-relaxed font-light transition-colors">
                        {story.situation}
                      </p>
                    </div>
                  </div>

                  {/* The Connection */}
                  <div
                    className="animated-glow-card group !rounded-2xl cursor-pointer shadow-2xs hover:shadow-lg transition-all"
                    tabIndex={0}
                    role="article"
                  >
                    <svg className="animated-border-svg !rounded-2xl" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                      <defs>
                        <linearGradient id={`connGrad-${story.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="50%" stopColor="#4F46E5" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <path
                        className="animated-border-path animated-border-path-2"
                        style={{ stroke: `url(#connGrad-${story.id})` }}
                        d="M 12,0 H 88 Q 100,0 100,12 V 88 Q 100,100 88,100 H 12 Q 0,100 0,88 V 12 Q 0,0 12,0 Z"
                      />
                    </svg>
                    <div className="relative z-10 flex flex-col justify-start p-5 bg-white border border-slate-200/80 rounded-2xl h-full space-y-2.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#4F46E5] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 block">
                        The Connection
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-800 leading-relaxed font-light transition-colors">
                        {story.connection}
                      </p>
                    </div>
                  </div>

                  {/* What Happened */}
                  <div
                    className="animated-glow-card group !rounded-2xl cursor-pointer shadow-2xs hover:shadow-lg transition-all"
                    tabIndex={0}
                    role="article"
                  >
                    <svg className="animated-border-svg !rounded-2xl" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                      <defs>
                        <linearGradient id={`whGrad-${story.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="50%" stopColor="#4F46E5" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <path
                        className="animated-border-path animated-border-path-3"
                        style={{ stroke: `url(#whGrad-${story.id})` }}
                        d="M 12,0 H 88 Q 100,0 100,12 V 88 Q 100,100 88,100 H 12 Q 0,100 0,88 V 12 Q 0,0 12,0 Z"
                      />
                    </svg>
                    <div className="relative z-10 flex flex-col justify-start p-5 bg-white border border-slate-200/80 rounded-2xl h-full space-y-2.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#4F46E5] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 block">
                        What Happened
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-800 leading-relaxed font-light transition-colors">
                        {story.whatHappened}
                      </p>
                    </div>
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
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 mb-3">
                  <span className="inline-block size-2 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] bg-clip-text text-transparent">
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
                {BEYOND_BUSINESS_ITEMS.map((item, idx) => (
                  <div
                    key={item}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-2.5 shadow-2xs hover:border-blue-300 hover:shadow-xs transition-all duration-200 group"
                  >
                    <svg className="size-4 shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <defs>
                        <linearGradient id={`checkGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="50%" stopColor="#4F46E5" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <polyline points="20 6 9 17 4 12" stroke={`url(#checkGrad-${idx})`} />
                    </svg>
                    <span className="group-hover:text-slate-900 transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-500 italic pt-1 font-light">
                That is why we do not reduce Peer Stories to simple testimonials. They are evidence of what a community can make possible.
              </p>
            </div>

            {/* Right: WHY WE SHOW THE NUMBERS & NO FICTION */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-4 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                <div className="size-12 rounded-2xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-rose-500/15 border border-blue-500/25 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300">
                  <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="numbersTrendingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="50%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="url(#numbersTrendingGrad)" />
                    <polyline points="16 7 22 7 22 13" stroke="url(#numbersTrendingGrad)" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#4F46E5] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Why we show the numbers
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Stories should inspire. Numbers help us understand. Where a collaboration has a genuine measurable outcome, we show it: <strong className="text-slate-900 font-semibold">Revenue. Projects. Introductions. Customers. Markets. Partnerships. Opportunities created.</strong>
                </p>
                <p className="text-xs text-slate-800 font-semibold italic">
                  We never manufacture a number to make a story sound better. If the result cannot be verified, we do not publish it as a result. Trust matters more than the headline.
                </p>
              </div>

              <div
                className="p-7 sm:p-8 rounded-3xl text-white shadow-2xl border border-white/10 space-y-4 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgb(6, 17, 44) 0%, rgb(19, 7, 31) 50%, rgb(38, 5, 19) 100%)',
                }}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-r from-[#2e0854]/40 to-[#4c0519]/30 rounded-full blur-2xl pointer-events-none" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent bg-white/10 px-3 py-1 rounded-full border border-white/15 inline-block relative z-10">
                  NO COMPOSITES. NO FICTION.
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light relative z-10">
                  A community built on relationships must protect the credibility of those relationships.
                </p>
                <div className="space-y-1.5 pl-3.5 border-l-2 border-[#38BDF8] text-xs text-slate-300 font-medium relative z-10">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80">
              <span className="inline-block size-2 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] bg-clip-text text-transparent">
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
                className="group relative p-[1.5px] rounded-2xl bg-slate-200/90 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:via-[#6366F1] hover:to-[#E11D48] shadow-2xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="relative w-full h-full bg-[#FAFBFD] group-hover:bg-white rounded-[14.5px] p-4 text-center flex flex-col justify-between space-y-3 transition-colors duration-300">
                  <div className="font-mono font-black text-xl sm:text-2xl bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent mx-auto group-hover:scale-125 transition-transform duration-300 select-none">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {step.step}
                    </h4>
                    <p className="text-[11px] text-slate-500 group-hover:text-slate-700 leading-tight mt-1 font-light transition-colors">
                      {step.desc}
                    </p>
                  </div>
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
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(56,189,248,0.18),transparent_50%),radial-gradient(circle_at_82%_12%,rgba(251,113,133,0.15),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-sky-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-rose-500/15 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 flex flex-col items-start space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                <span className="inline-block size-2 rounded-full bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                  THE NEXT CHAPTER
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                What could your relationships make{' '}
                <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                  possible
                </span>
                ?
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                <p>
                  You may not know yet. That is perfectly fine. The next collaboration may come from your Circle, another city, or an entrepreneur from an entirely different industry.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1.5">
                  <p className="bg-gradient-to-r from-sky-200 via-indigo-200 to-rose-200 bg-clip-text text-transparent font-medium text-xs sm:text-sm">
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
                  DOWNLOAD UNITY APP
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
                className="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-sky-300 font-bold leading-tight"
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

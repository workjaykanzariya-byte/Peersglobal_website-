'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Mic,
  Play,
  FileText,
  Users,
  Video,
  Globe,
  BookOpen,
  Newspaper,
  Quote,
  Mail,
  Megaphone,
  X,
  Volume2,
  Share2,
  ExternalLink,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

// ─── 4 Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Mic,
    label: 'Real Conversations',
    desc: 'Unscripted & In-Depth',
  },
  {
    icon: Play,
    label: 'Inspiring Stories',
    desc: 'Audio & Video Formats',
  },
  {
    icon: FileText,
    label: 'Practical Insights',
    desc: 'MSME & Promoter Focus',
  },
  {
    icon: Users,
    label: 'Entrepreneurs Everywhere',
    desc: 'Across Bharat & Beyond',
  },
]

// ─── 5 Publishing Format Cards ───────────────────────────────────────────────
const FORMAT_CARDS = [
  {
    id: 'podcast',
    title: 'The Peers Global Podcast',
    icon: Mic,
    iconColor: 'text-[#0062D2]',
    image: '/images/industry-panel-leaders.jpg',
    desc: 'Conversations with entrepreneurs about what actually happened — the decisions, the mistakes and the years nobody talks about.',
    ctaText: 'Listen Now',
    ctaHref: '#channels',
    external: false,
  },
  {
    id: 'tv',
    title: 'Vyapaar Jagat TV',
    icon: Video,
    iconColor: 'text-blue-600',
    image: '/images/conclave.png',
    desc: 'Video features on businesses, founders and the ecosystems they operate in across industrial belts.',
    ctaText: 'Watch Now',
    ctaHref: '#channels',
    external: false,
  },
  {
    id: 'vyapaarjagat',
    title: 'VyapaarJagat.com',
    icon: Globe,
    iconColor: 'text-sky-600',
    image: '/images/culture-hero-desk.jpg',
    desc: 'Written coverage of MSMEs and entrepreneurs across India, celebrating grassroots growth.',
    ctaText: 'Read Articles',
    ctaHref: 'https://vyapaarjagat.com',
    external: true,
  },
  {
    id: 'magazines',
    title: 'Circle Magazines',
    icon: BookOpen,
    iconColor: 'text-indigo-600',
    image: '/images/lexicon-hero-desk.jpg',
    desc: 'Publications produced by Circles — their Peers, their collaborations, their year in review.',
    ctaText: 'Read Magazines',
    ctaHref: '#channels',
    external: false,
  },
  {
    id: 'press',
    title: 'Press & Coverage',
    icon: Newspaper,
    iconColor: 'text-teal-600',
    image: '/images/executive-director-conclave.jpg',
    desc: 'Peers Global in the national media, industry newspapers and television coverage.',
    ctaText: 'View Coverage',
    ctaHref: '#channels',
    external: false,
  },
]

// ─── 4 Featured Episodes Data ───────────────────────────────────────────────
export interface Episode {
  id: string
  title: string
  subtitle: string
  tag: string
  duration: string
  image: string
  guest: {
    name: string
    title: string
    avatar: string
  }
  showNotes: string[]
  spotifyUrl: string
  youtubeUrl: string
}

const EPISODES: Episode[] = [
  {
    id: 'ep-1',
    title: 'From MSME to Global',
    subtitle: 'Lessons in scaling from a manufacturing entrepreneur.',
    tag: 'FROM MSME TO GLOBAL',
    duration: '45:12',
    image: '/images/story-jignesh-rohit.jpg',
    guest: {
      name: 'Rajesh Patel',
      title: 'Founder, Sahyog Industries',
      avatar: '/images/peers-avatars/rajesh-shah.jpg',
    },
    showNotes: [
      'Transitioning from an unorganised job-work unit in Vatva to export-certified supplier.',
      'Navigating capital goods financing without predatory collateral lock-ins.',
      'How joining an Industry Circle helped solve critical quality control benchmarking.',
    ],
    spotifyUrl: 'https://open.spotify.com',
    youtubeUrl: 'https://youtube.com',
  },
  {
    id: 'ep-2',
    title: 'Leadership in Real Business',
    subtitle: 'Building teams that last.',
    tag: 'LEADERSHIP IN REAL BUSINESS',
    duration: '38:26',
    image: '/images/story-neha-simran.jpg',
    guest: {
      name: 'Neha Shah',
      title: 'Founder, Bright HR Solutions',
      avatar: '/images/peers-avatars/neha-kothari.jpg',
    },
    showNotes: [
      'The difference between managing employees and developing autonomous departmental heads.',
      'Structuring retention incentives for mid-tier talent in competitive regional markets.',
      'Why psychological safety in board meetings unlocks genuine operational candor.',
    ],
    spotifyUrl: 'https://open.spotify.com',
    youtubeUrl: 'https://youtube.com',
  },
  {
    id: 'ep-3',
    title: 'The Power of Collaboration',
    subtitle: 'How one introduction changed everything.',
    tag: 'THE POWER OF COLLABORATION',
    duration: '52:18',
    image: '/images/story-amit-sandeep.jpg',
    guest: {
      name: 'Amit Trivedi',
      title: 'Director, Trivedi Chemicals',
      avatar: '/images/peers-avatars/amit-desai.jpg',
    },
    showNotes: [
      'Overcoming the initial fear of sharing supplier contacts with fellow promoters.',
      'The math behind a 50:50 joint export venture that opened 3 Middle-Eastern distribution hubs.',
      'Logging collaboration in Unity to build lasting verified relational standing.',
    ],
    spotifyUrl: 'https://open.spotify.com',
    youtubeUrl: 'https://youtube.com',
  },
  {
    id: 'ep-4',
    title: 'A Stronger Bharat',
    subtitle: 'A conversation with Dr. Pravin Parmar.',
    tag: 'A STRONGER BHARAT THROUGH ENTREPRENEURS',
    duration: '41:03',
    image: '/images/founder-new.png',
    guest: {
      name: 'Dr. Pravin Parmar',
      title: 'Founder, Peers Global',
      avatar: '/images/dr-parmar-avatar.jpg',
    },
    showNotes: [
      'The founding conviction born in a hospital corridor: why entrepreneurs must never build alone.',
      'Why traditional networking failed Indian promoters and why Governed Collaboration succeeds.',
      'The roadmap to impact one million lives across India by 2030.',
    ],
    spotifyUrl: 'https://open.spotify.com',
    youtubeUrl: 'https://youtube.com',
  },
]

export function PodcastMediaClient() {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [nominateOpen, setNominateOpen] = useState(false)

  // Nomination Form State
  const [nomineeName, setNomineeName] = useState('')
  const [nomineeBusiness, setNomineeBusiness] = useState('')
  const [nomineeStory, setNomineeStory] = useState('')
  const [nominationSent, setNominationSent] = useState(false)

  const handleNominateSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setNominationSent(true)
    setTimeout(() => {
      setNominationSent(false)
      setNominateOpen(false)
      setNomineeName('')
      setNomineeBusiness('')
      setNomineeStory('')
    }, 2500)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* ─── Breadcrumb ──────────────────────────────────────────────────── */}
      <div className="border-b border-slate-200/80 bg-white/70 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link
              href="/stories"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Community Life
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Podcast & Media</span>
          </nav>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (STUDIO PODCAST & EDGE FADE) ────────────────── */}
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 z-10">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2] bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/60">
                  — COMMUNITY LIFE —
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.1]">
                Podcast & Media
              </h1>

              <p className="text-2xl sm:text-3xl font-serif text-slate-800 font-medium leading-snug">
                Every honest business story deserves visibility.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                That belief built VyapaarJagat.com, and everything we have published since.
              </p>

              <div className="pt-2">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0062D2] text-white font-medium text-sm shadow-md hover:bg-[#0052B4] hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Hero Visual with Horizontal Left Edge Fade */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/industry-panel-leaders.jpg"
                  alt="Peers Global podcast and media stage with broadcast microphones"
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* Soft horizontal gradient edge fade on the left edge seamlessly blending into page background */}
                <div className="absolute inset-y-0 left-0 w-28 sm:w-40 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none z-10" />

                {/* Ambient Top & Bottom Vignettes */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/20 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none z-10" />

                {/* Podcast Neon Badge Overlay on Upper Left of Visual */}
                <div className="absolute top-6 left-8 sm:left-12 bg-slate-950/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-blue-400/40 text-left z-20 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-400/30">
                    <Mic className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-blue-300 block leading-none">
                      PeersGlobal
                    </span>
                    <span className="text-xs font-bold tracking-tight text-white block leading-tight">
                      PODCAST
                    </span>
                  </div>
                </div>

                {/* Stage Backdrop Brand Overlay on Top Right */}
                <div className="absolute top-6 right-6 bg-slate-950/85 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 text-right z-20 max-w-[220px]">
                  <p className="text-xs font-semibold text-slate-200 leading-tight">
                    Ideas. People.
                  </p>
                  <p className="text-xs font-semibold text-slate-200 leading-tight">
                    Communities.
                  </p>
                  <p className="text-[11px] font-bold text-sky-400 leading-tight mt-0.5">
                    A Stronger Tomorrow.
                  </p>
                </div>

                {/* Cursive overlay text on bottom right */}
                <div className="absolute bottom-6 right-6 text-right z-20 max-w-[240px]">
                  <p
                    className="text-xl sm:text-2xl font-light italic leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Real Stories.
                    <br />
                    Real Entrepreneurs.
                    <br />
                    Real Impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Stat Pillar Bar */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-200/50 border border-slate-200/90">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {STATS.map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className={`flex items-center gap-4 ${
                        i !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-serif font-bold text-slate-950 leading-snug">
                          {stat.label}
                        </div>
                        <div className="text-xs text-slate-500 font-medium mt-0.5">
                          {stat.desc}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: WHY WE BUILT A MEDIA PLATFORM ─────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                — WHY WE BUILT A MEDIA PLATFORM —
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
                More business stories. A stronger Bharat.
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Business media covers startups, funding and unicorns.
                </p>
                <p>
                  The businesses that quietly build families, cities and employment across this country stay largely invisible — not for lack of substance, but because nobody tells their story.
                </p>
                <p className="font-serif italic text-slate-900 text-base sm:text-lg border-l-2 border-[#0062D2] pl-3.5 my-2">
                  “Even if a business shuts down, its story should never die.”
                </p>
                <p>
                  That is why Peers Global has its own media, and why visibility is one of the ten Ways of Collaboration rather than an afterthought.
                </p>
              </div>
            </div>

            {/* Right Split Card: Quote + Mountain Canvas */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 grid grid-cols-1 sm:grid-cols-12 bg-white">
                {/* Left Half: Quote */}
                <div className="sm:col-span-6 p-7 sm:p-8 flex flex-col justify-between bg-slate-50/70 border-b sm:border-b-0 sm:border-r border-slate-200/80">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-4">
                      <Quote className="w-5 h-5 fill-current text-[#0062D2]" />
                    </div>
                    <p className="text-lg sm:text-xl font-serif font-bold text-slate-900 leading-snug">
                      “Behind every business is a person, a family, a team and a story worth telling.”
                    </p>
                  </div>

                  <div className="pt-6">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#0062D2]">
                      PEERS GLOBAL
                    </span>
                  </div>
                </div>

                {/* Right Half: Mountain Landscape with Cursive overlay */}
                <div className="sm:col-span-6 relative h-56 sm:h-auto min-h-[220px]">
                  <Image
                    src="/images/who-we-are-mountain.jpg"
                    alt="Mountain peaks at dawn"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/35 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <p
                      className="text-xl sm:text-2xl font-light italic text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-tight"
                      style={{ fontFamily: 'var(--font-script)' }}
                    >
                      Bigger Stories.
                      <br />
                      Stronger Businesses.
                      <br />
                      A Brighter Bharat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: WHAT WE PUBLISH (5 PUBLISHING FORMATS) ───────────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — WHAT WE PUBLISH —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight mt-1">
              What we publish
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Different formats. One purpose — to give entrepreneurs the visibility they deserve.
            </p>
          </div>

          {/* 5 Format Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {FORMAT_CARDS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Card Image */}
                    <div className="relative h-36 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <h3 className="font-serif font-bold text-slate-950 text-sm leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* CTA Link */}
                  <div className="p-4 pt-0">
                    {item.external ? (
                      <a
                        href={item.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0062D2] hover:text-[#0052B4] transition-colors"
                      >
                        <span>{item.ctaText}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <a
                        href={item.ctaHref}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0062D2] hover:text-[#0052B4] transition-colors group-hover:translate-x-0.5"
                      >
                        <span>{item.ctaText}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: LISTEN AND WATCH (EPISODES GRID) ──────────────────── */}
      <section id="channels" className="py-16 sm:py-20 bg-white border-t border-slate-200/80 scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                — LISTEN AND WATCH —
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1">
                Latest from our channels
              </h2>
            </div>

            <a
              href="https://unity.peersglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#0062D2] hover:text-[#0052B4] transition-colors"
            >
              <span>View All Episodes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 4 Episode Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EPISODES.map((ep) => (
              <div
                key={ep.id}
                onClick={() => {
                  setSelectedEpisode(ep)
                  setIsPlaying(true)
                }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Video Still with Play Overlay & Duration */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                    <Image
                      src={ep.image}
                      alt={ep.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-950/20" />

                    {/* Topic Badge on Top Left */}
                    <div className="absolute top-3 left-3 max-w-[170px]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-slate-950/80 px-2 py-0.5 rounded border border-white/20 line-clamp-1">
                        {ep.tag}
                      </span>
                    </div>

                    {/* Duration Badge on Top Right */}
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-950/80 text-white backdrop-blur-xs">
                      {ep.duration}
                    </span>

                    {/* Big Center Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-white/90 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#0062D2] group-hover:text-white transition-all">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-2">
                    <h3 className="font-serif font-bold text-slate-950 text-base leading-snug group-hover:text-blue-600 transition-colors">
                      {ep.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ep.subtitle}
                    </p>
                  </div>
                </div>

                {/* Guest Footer */}
                <div className="p-5 pt-0 border-t border-slate-100 flex items-center gap-2.5 mt-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                    <Image
                      src={ep.guest.avatar}
                      alt={ep.guest.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="leading-tight">
                    <span className="text-xs font-bold text-slate-900 block">
                      {ep.guest.name}
                    </span>
                    <span className="text-[10px] text-slate-500 block truncate max-w-[150px]">
                      {ep.guest.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: MEDIA ENQUIRIES & NOMINATE A PEER ─────────────────── */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Card: Media Enquiries */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — MEDIA ENQUIRIES —
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  Want to feature a story?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For interviews, coverage, collaborations or any media enquiries, please get in touch with our team.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0062D2] font-semibold text-xs border border-blue-200 shadow-xs hover:bg-blue-50 transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Card: Nominate a Peer */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                    <Megaphone className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-950">
                    Entrepreneurs worth hearing from
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If you know a Peer with a story that should be told, let us know. Visibility creates opportunities — for them and for the community.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setNominateOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0062D2] font-semibold text-xs border border-blue-200 shadow-xs hover:bg-blue-50 transition-all cursor-pointer"
                >
                  <span>Nominate a Peer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: CLOSING ROYAL BLUE BANNER ─────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-[#0062D2] text-white overflow-hidden">
        {/* SVG Orbital Geometric Lines Background */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-35 overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 600 600" fill="none" className="w-full h-full text-white/30" xmlns="http://www.w3.org/2000/svg">
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
            {/* Left Copy */}
            <div className="lg:col-span-8 space-y-5">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                Build Your Business.
                <br />
                Build Your Relationships.
                <br />
                Build Your Circle.
              </h2>

              {/* App Store & Google Play Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-black text-white hover:bg-slate-900 transition-all shadow-md group border border-white/20"
                >
                  <svg
                    className="w-7 h-7 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.05-.51 2.68-1.26z" />
                  </svg>
                  <div className="text-left leading-none">
                    <span className="text-[10px] text-slate-300 block mb-0.5">
                      Download on the
                    </span>
                    <span className="text-base font-semibold tracking-tight text-white block">
                      App Store
                    </span>
                  </div>
                </a>

                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-black text-white hover:bg-slate-900 transition-all shadow-md group border border-white/20"
                >
                  <svg
                    className="w-6 h-6 fill-current text-white"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3.609 1.814L13.793 12 3.61 22.186A1.85 1.85 0 0 1 3 20.875V3.125c0-.495.213-.968.609-1.311zm11.605 11.607l2.259 2.259-11.45 6.505 9.191-8.764zm0-2.842L6.023 1.815l11.45 6.505-2.259 2.259zm1.42 1.421l3.52-2.001c1.077-.612 1.077-1.611 0-2.223l-3.52-2.001-2.128 2.128 2.128 2.097z" />
                  </svg>
                  <div className="text-left leading-none">
                    <span className="text-[10px] text-slate-300 block mb-0.5">
                      GET IT ON
                    </span>
                    <span className="text-base font-semibold tracking-tight text-white block">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Ideas.
                <br />
                People.
                <br />
                Communities.
                <br />
                A Brighter Tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODAL: EPISODE MEDIA PLAYER ─────────────────────────────────── */}
      {selectedEpisode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setSelectedEpisode(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Player Header */}
            <div className="relative h-60 sm:h-72 w-full bg-slate-950">
              <Image
                src={selectedEpisode.image}
                alt={selectedEpisode.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wider inline-block mb-1.5">
                  {selectedEpisode.tag} · {selectedEpisode.duration}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold leading-tight">
                  {selectedEpisode.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  {selectedEpisode.subtitle}
                </p>
              </div>
            </div>

            {/* Audio Control Bar Simulation */}
            <div className="bg-slate-900 p-4 px-6 text-white flex items-center gap-4 border-b border-slate-800">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white flex items-center justify-center shrink-0 transition-colors"
              >
                <Play className={`w-4 h-4 fill-current ${isPlaying ? 'opacity-80' : ''}`} />
              </button>

              <div className="flex-1">
                <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0062D2] w-1/3 rounded-full" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>14:20</span>
                  <span>{selectedEpisode.duration}</span>
                </div>
              </div>

              <Volume2 className="w-4 h-4 text-slate-400" />
            </div>

            {/* Show Notes & Guest Info */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                  <Image
                    src={selectedEpisode.guest.avatar}
                    alt={selectedEpisode.guest.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {selectedEpisode.guest.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {selectedEpisode.guest.title}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Discussion Points
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {selectedEpisode.showNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Streaming Platform CTAs */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href="https://spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium inline-flex items-center gap-1.5"
                  >
                    <span>Spotify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium inline-flex items-center gap-1.5"
                  >
                    <span>YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <button
                  onClick={() => setSelectedEpisode(null)}
                  className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
                >
                  Close Player
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── MODAL: NOMINATE A PEER ───────────────────────────────────────── */}
      {nominateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-7 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setNominateOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                — NOMINATE AN ENTREPRENEUR —
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-950 mt-1">
                Tell us who we should feature
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Nominate a founder or business leader whose story deserves wider visibility.
              </p>
            </div>

            {nominationSent ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900">
                  Nomination Received!
                </h4>
                <p className="text-xs text-slate-600">
                  Thank you. Our editorial team will review and get in touch with the Circle Director.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNominateSubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Entrepreneur Name
                  </label>
                  <input
                    type="text"
                    required
                    value={nomineeName}
                    onChange={(e) => setNomineeName(e.target.value)}
                    placeholder="e.g. Anand Patel"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Business / Enterprise
                  </label>
                  <input
                    type="text"
                    required
                    value={nomineeBusiness}
                    onChange={(e) => setNomineeBusiness(e.target.value)}
                    placeholder="e.g. Sahyog Plastics, Ahmedabad"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    What makes their story remarkable?
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={nomineeStory}
                    onChange={(e) => setNomineeStory(e.target.value)}
                    placeholder="Briefly describe what they built or overcome..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#0062D2] text-white text-xs font-semibold hover:bg-[#0052B4] transition-all cursor-pointer shadow-md"
                  >
                    Submit Nomination
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

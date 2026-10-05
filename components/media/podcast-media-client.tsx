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
  Radio,
  Tv,
  Film,
  Award,
  ShieldCheck,
  Headphones,
} from 'lucide-react'

// ─── 4 Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Mic,
    label: 'Real Conversations',
    desc: 'Unscripted & In-Depth',
    number: '120+ Episodes',
  },
  {
    icon: Play,
    label: 'Inspiring Formats',
    desc: 'Podcasts, TV & Print',
    number: '4 Key Media',
  },
  {
    icon: FileText,
    label: 'Practical Insights',
    desc: 'MSME & Promoter Focus',
    number: '100% Genuine',
  },
  {
    icon: Users,
    label: 'Entrepreneurs Everywhere',
    desc: 'Across Bharat & Beyond',
    number: '1M+ Reach',
  },
]

// ─── 5 Publishing Format Cards ───────────────────────────────────────────────
const FORMAT_CARDS = [
  {
    id: 'podcast',
    title: 'The Peers Global Podcast',
    tag: 'Audio & Video',
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
    tag: 'Broadcast Media',
    icon: Video,
    iconColor: 'text-rose-600',
    image: '/images/section_image/event_awards_stage.jpg',
    desc: 'Video features on businesses, founders and the ecosystems they operate in across industrial belts.',
    ctaText: 'Watch on YouTube',
    ctaHref: 'https://www.youtube.com/@VyapaarJagatTV',
    external: true,
  },
  {
    id: 'vyapaarjagat',
    title: 'VyapaarJagat.com',
    tag: 'Digital Newsroom',
    icon: Globe,
    iconColor: 'text-sky-600',
    image: '/images/section_image/circles-hero-new.jpg',
    desc: 'Written coverage of MSMEs and entrepreneurs across India, celebrating grassroots growth and entrepreneurial milestones.',
    ctaText: 'Read Articles',
    ctaHref: 'https://vyapaarjagat.com',
    external: true,
  },
  {
    id: 'magazines',
    title: 'Circle Magazines',
    tag: 'Print & Digital',
    icon: BookOpen,
    iconColor: 'text-indigo-600',
    image: '/images/section_image/circle-meeting.png',
    desc: 'Publications produced by Circles — their Peers, their collaborations, their year in review and playbooks.',
    ctaText: 'Explore Magazines',
    ctaHref: '#channels',
    external: false,
  },
  {
    id: 'press',
    title: 'Press & Coverage',
    tag: 'National Press',
    icon: Newspaper,
    iconColor: 'text-purple-600',
    image: '/images/section_image/executive-director-conclave.jpg',
    desc: 'National and regional press coverage of Peers Global conclaves, milestone achievements and community initiatives.',
    ctaText: 'View Newsroom',
    ctaHref: '/newsroom',
    external: false,
  },
]

// ─── 4 Featured Episodes ───────────────────────────────────────────────────
interface Episode {
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
    id: 'ep-01',
    title: 'From Near Bankruptcy to 120-Person Precision Engineering',
    subtitle: 'Building through family resistance and industrial downturns.',
    tag: 'MANUFACTURING',
    duration: '48 mins',
    image: '/images/story-jignesh-rohit.jpg',
    guest: {
      name: 'Rajesh Shah',
      title: 'Founder, Apex Precision Engineering, Ahmedabad',
      avatar: '/images/story-jignesh-rohit.jpg',
    },
    showNotes: [
      'How raw materials inflation in 2021 pushed their primary plant to 14 days of remaining liquidity.',
      'Why peer accountability inside Gujarat Manufacturing Circle gave them clarity to renegotiate key client terms.',
      'Transitioning from owner-dependent shopfloor to a professionalized second line of leadership.',
    ],
    spotifyUrl: 'https://open.spotify.com',
    youtubeUrl: 'https://youtube.com',
  },
  {
    id: 'ep-02',
    title: 'How Two Rivals Built a ₹40 Cr Joint Cold Chain Network',
    subtitle: 'The psychology of collaboration over destructive competition.',
    tag: 'LOGISTICS & AGRI',
    duration: '52 mins',
    image: '/images/story-priya-karan.jpg',
    guest: {
      name: 'Priya Sharma & Vikram Malhotra',
      title: 'Zenith Logistics & TechPack Solutions, Mumbai',
      avatar: '/images/story-priya-karan.jpg',
    },
    showNotes: [
      'The initial friction when two regional logistics operators sat at the same Circle roundtable.',
      'Structuring shared warehousing contracts without losing proprietary enterprise accounts.',
      'Why open transparency on excess capacity lowered costs by 34% across 8 Maharashtra hubs.',
    ],
    spotifyUrl: 'https://open.spotify.com',
    youtubeUrl: 'https://youtube.com',
  },
  {
    id: 'ep-03',
    title: 'Scaling an MSME from Surat to 14 Export Markets with Zero Brokers',
    subtitle: 'Overcoming trade barriers through verified peer syndicates.',
    tag: 'GLOBAL TRADE',
    duration: '44 mins',
    image: '/images/story-amit-sandeep.jpg',
    guest: {
      name: 'Harish Mehta',
      title: 'Managing Director, Mehta Global Exim, Surat',
      avatar: '/images/story-amit-sandeep.jpg',
    },
    showNotes: [
      'The harsh realities of international customs compliance for first-generation Indian exporters.',
      'How cross-Circle introductions directly bypassed predatory trade middlemen in Dubai and Rotterdam.',
      'The 7 golden rules for building cross-border relationships that outlast macroeconomic currency shifts.',
    ],
    spotifyUrl: 'https://open.spotify.com',
    youtubeUrl: 'https://youtube.com',
  },
  {
    id: 'ep-04',
    title: 'Building Communities That Last: The Origin Story of Peers Global',
    subtitle: 'Why peer governance is the foundation of genuine entrepreneurial trust.',
    tag: 'COMMUNITY & VISION',
    duration: '58 mins',
    image: '/images/industry-cross-city-handshake.jpg',
    guest: {
      name: 'Dr. Pravin Parmar',
      title: 'Founder & Visionary, Peers Global & Vyapaar Jagat',
      avatar: '/images/who-we-are-inner-board.jpg',
    },
    showNotes: [
      'The founding conviction born in a hospital corridor: why entrepreneurs must never build alone.',
      'Why traditional transactional networking failed Indian promoters and why Governed Collaboration succeeds.',
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
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3.5 text-slate-400" />
          <Link href="/stories" className="hover:text-slate-900 transition-colors">
            Community Life
          </Link>
          <ChevronRight className="size-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Podcast &amp; Media</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (STUDIO PODCAST & MEDIA ECOSYSTEM) ─── */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-5 sm:pt-6 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Master Card Hero Box */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white via-white/95 to-slate-50 border border-slate-200/90 shadow-lg min-h-[480px] lg:min-h-[520px] p-6 sm:p-10 lg:p-12 flex items-center">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
              
              {/* Left Column: Manifesto & Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#0062D2]">
                    COMMUNITY LIFE &amp; MEDIA
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-tight">
                    Podcast &amp; Media
                  </h1>
                  <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
                    Every honest business story deserves visibility.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  <p>
                    Business media often covers only startups, funding, and unicorns. <strong className="text-slate-900 font-semibold">We tell the stories of promoters, manufacturers, and MSMEs who build real employment across Bharat.</strong>
                  </p>

                  {/* 4 Media Feature Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pt-1">
                    {[
                      { text: 'Unscripted Founder Interviews', icon: Mic },
                      { text: 'Vyapaar Jagat TV Broadcasts', icon: Tv },
                      { text: 'Circle Annual Magazines', icon: BookOpen },
                      { text: 'National Press & Newsroom', icon: Newspaper },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-semibold text-slate-700 flex items-center gap-2 shadow-2xs"
                      >
                        <item.icon className="size-4 shrink-0 text-[#0062D2]" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-2xl bg-blue-50 text-xs font-semibold text-[#0062D2] border border-blue-200/60 flex items-center gap-2">
                    <Sparkles className="size-4 shrink-0 text-[#0062D2]" />
                    <span>&ldquo;Even if a business shuts down, its story should never die.&rdquo;</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <a
                    href="#channels"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer uppercase tracking-wider"
                  >
                    <span>Listen &amp; Watch Now</span>
                    <Play className="size-3.5 fill-current transition-transform group-hover:scale-110" />
                  </a>

                  <button
                    onClick={() => setNominateOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-700 font-bold text-xs sm:text-sm border border-slate-300 shadow-2xs hover:bg-slate-50 transition-all uppercase tracking-wider cursor-pointer"
                  >
                    <span>Nominate an Entrepreneur</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Hero Visual Card with Studio Spotlight */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-[4/3] group bg-slate-900 flex flex-col justify-between p-6 sm:p-7">
                  <Image
                    src="/images/industry-panel-leaders.jpg"
                    alt="Peers Global podcast and media stage with broadcast microphones"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/30 pointer-events-none" />

                  {/* Top Neon / Badge Bar */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-blue-400/40 text-[10px] font-bold text-sky-300 tracking-widest uppercase backdrop-blur-md">
                      <span className="size-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                      STUDIO BROADCAST
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/20">
                      AUDIO &amp; VIDEO
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <a
                    href="#channels"
                    className="relative z-10 mx-auto size-14 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer border border-white/30 group/btn"
                  >
                    <Play className="size-6 fill-current ml-0.5" />
                  </a>

                  {/* Bottom Highlight */}
                  <div className="relative z-10 text-white space-y-1">
                    <p className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold">
                      The Peers Global Podcast Series
                    </p>
                    <p className="text-sm sm:text-base font-bold leading-snug">
                      Unscripted conversations with entrepreneurs across India.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 items-center">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                      {stat.number}
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── SECTION 2: WHY WE BUILT A MEDIA PLATFORM (SPLIT CARD) ─── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm p-7 sm:p-10 lg:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Narrative */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                      WHY WE BUILT A MEDIA PLATFORM
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                    More business stories. A stronger Bharat.
                  </h2>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  <p>
                    Mainstream business media obsessively covers funding rounds and speculative valuations.
                  </p>
                  <p>
                    The businesses that quietly build families, regional hubs, and decades of employment across this country stay largely invisible — <strong className="text-slate-900 font-semibold">not for lack of substance, but because nobody told their story.</strong>
                  </p>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                    <p className="italic text-slate-900 text-xs sm:text-sm font-semibold">
                      &ldquo;Even if a business shuts down, its story should never die.&rdquo;
                    </p>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] block">
                      Core Editorial Principle
                    </span>
                  </div>
                  <p>
                    That is why Peers Global operates its own full-scale media network, and why visibility is one of our ten Ways of Collaboration.
                  </p>
                </div>
              </div>

              {/* Right Showcase Card */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 grid grid-cols-1 sm:grid-cols-12 bg-white">
                  {/* Left Half: Quote */}
                  <div className="sm:col-span-6 p-7 sm:p-8 flex flex-col justify-between bg-slate-50/70 border-b sm:border-b-0 sm:border-r border-slate-200/80">
                    <div>
                      <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-4 border border-blue-100">
                        <Quote className="size-5 fill-current text-[#0062D2]" />
                      </div>
                      <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        &ldquo;Behind every business is a person, a family, a team and a story worth telling.&rdquo;
                      </p>
                    </div>

                    <div className="pt-6">
                      <span className="text-[11px] font-bold tracking-widest uppercase text-[#0062D2]">
                        PEERS GLOBAL MEDIA
                      </span>
                    </div>
                  </div>

                  {/* Right Half: Visual Stage with Cursive Overlay */}
                  <div className="sm:col-span-6 relative h-60 sm:h-auto min-h-[220px] bg-slate-900">
                    <Image
                      src="/images/section_image/event_awards_stage.jpg"
                      alt="Peers Global Media Showcase"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />
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
        </div>
      </section>

      {/* ─── SECTION 3: WHAT WE PUBLISH (5 PUBLISHING FORMATS) ─── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  WHAT WE PUBLISH
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                5 Publishing Formats
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Different channels. One purpose: To give Indian entrepreneurs the dignity and visibility they deserve.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-white border border-slate-200/90 text-xs text-slate-700 font-semibold shadow-2xs shrink-0 flex items-center gap-2">
              <Sparkles className="size-4 text-[#0062D2]" />
              <span>Multi-Channel Ecosystem</span>
            </div>
          </div>

          {/* 5 Format Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {FORMAT_CARDS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Card Image */}
                    <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-950/75 backdrop-blur-md text-[10px] font-mono font-bold text-sky-300 border border-white/20">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="size-8 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-110 transition-transform">
                          <Icon className="size-4" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-[#0062D2] transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* CTA Link */}
                  <div className="p-5 pt-0">
                    {item.external ? (
                      <a
                        href={item.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-blue-800 transition-colors uppercase tracking-wider"
                      >
                        <span>{item.ctaText}</span>
                        <ExternalLink className="size-3.5" />
                      </a>
                    ) : (
                      <a
                        href={item.ctaHref}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-blue-800 transition-colors uppercase tracking-wider group-hover:translate-x-0.5"
                      >
                        <span>{item.ctaText}</span>
                        <ArrowRight className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: LISTEN AND WATCH (FEATURED EPISODES) ─── */}
      <section id="channels" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  FEATURED EPISODES
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                Latest from our channels
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Click any episode to stream audio, review discussion notes, or watch full video recordings.
              </p>
            </div>

            <a
              href="https://unity.peersglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>View All on Unity</span>
              <ArrowRight className="size-3.5" />
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
                className="bg-[#FAFBFD] rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20" />

                    {/* Topic Badge on Top Left */}
                    <div className="absolute top-3.5 left-3.5 max-w-[170px]">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-slate-950/80 px-2.5 py-1 rounded-full border border-white/20 line-clamp-1 backdrop-blur-md">
                        {ep.tag}
                      </span>
                    </div>

                    {/* Duration Badge on Top Right */}
                    <span className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-black/60 text-white backdrop-blur-md border border-white/10">
                      {ep.duration}
                    </span>

                    {/* Big Center Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="size-12 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:text-white transition-all">
                        <Play className="size-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-[#0062D2] transition-colors line-clamp-2">
                      {ep.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light line-clamp-2">
                      {ep.subtitle}
                    </p>
                  </div>
                </div>

                {/* Guest Footer */}
                <div className="p-5 pt-0 border-t border-slate-100 flex items-center gap-3 mt-3">
                  <div className="relative size-9 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
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
                    <span className="text-[10px] text-slate-500 block truncate max-w-[170px]">
                      {ep.guest.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 5: MEDIA ENQUIRIES & NOMINATE A PEER ─── */}
      <section className="py-16 sm:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Left Card: Media Enquiries */}
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                    MEDIA &amp; EDITORIAL ENQUIRIES
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  Want to feature a story or interview?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  For press coverage, keynote interviews, joint podcasts, or media collaborations, get in touch directly with our editorial desk.
                </p>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <Mail className="size-4 text-[#0062D2]" />
                  <span>Contact Editorial Team</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Card: Nominate a Peer */}
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                    NOMINATE AN ENTREPRENEUR
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  Entrepreneurs worth hearing from
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  If you know a Peer with a remarkable turnaround, breakthrough collaboration, or leadership story, let our producers know.
                </p>
              </div>

              <div>
                <button
                  onClick={() => setNominateOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Megaphone className="size-4" />
                  <span>Nominate a Peer Story</span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 6: SIGNATURE LUXURY CLOSING HERO BANNER ─── */}
      <section
        id="download-unity"
        className="relative py-20 lg:py-28 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-t border-slate-800"
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* SVG Orbital Geometric Lines Background */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-25 overflow-hidden flex items-center justify-center">
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
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 flex flex-col items-start space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-sky-400 to-rose-400 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                  AMPLIFY YOUR VOICE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                Build Your Business. Build Your Relationships. Build Your Circle.
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                <p>
                  Access our national distribution network, Vyapaar Jagat media channels, and peer podcast broadcasts to share your story with entrepreneurs who understand the climb.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
                  <p className="text-sky-200 font-medium text-xs sm:text-sm">
                    • 120+ Episodes · 5 Publishing Channels · 1M+ Community Reach.
                  </p>
                  <p className="text-white font-bold text-xs sm:text-sm">Join the authentic conversation today.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-105 uppercase tracking-wider group cursor-pointer"
                >
                  <span>Open Unity App</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all"
                >
                  <span>Apply for Membership →</span>
                </Link>
              </div>
            </div>

            {/* Right Cursive Script Highlights */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-xl sm:text-2xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Ideas.
              </p>
              <p
                className="text-xl sm:text-2xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                People.
              </p>
              <p
                className="text-xl sm:text-2xl text-white leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Communities.
              </p>
              <p
                className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                A Brighter Tomorrow.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── MODAL: EPISODE MEDIA PLAYER ─── */}
      {selectedEpisode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setSelectedEpisode(null)}
              className="absolute top-4 right-4 z-10 size-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="size-5" />
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
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-600 text-white uppercase tracking-wider inline-block mb-1.5">
                  {selectedEpisode.tag} · {selectedEpisode.duration}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight">
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
                className="size-10 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white flex items-center justify-center shrink-0 transition-transform hover:scale-105 cursor-pointer"
              >
                <Play className={`size-4 fill-current ${isPlaying ? 'opacity-80' : ''}`} />
              </button>

              <div className="flex-1">
                <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] w-1/3 rounded-full" />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>14:20</span>
                  <span>{selectedEpisode.duration}</span>
                </div>
              </div>

              <Volume2 className="size-4 text-slate-400" />
            </div>

            {/* Show Notes & Guest Info */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="relative size-11 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
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
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-light">
                  {selectedEpisode.showNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-blue-600 shrink-0 mt-0.5" />
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
                    className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Spotify</span>
                    <ExternalLink className="size-3" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>YouTube</span>
                    <ExternalLink className="size-3" />
                  </a>
                </div>

                <button
                  onClick={() => setSelectedEpisode(null)}
                  className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Close Player
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── MODAL: NOMINATE A PEER ─── */}
      {nominateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-7 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setNominateOpen(false)}
              className="absolute top-4 right-4 z-10 size-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="size-4" />
            </button>

            <div className="mb-6 space-y-1">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                NOMINATE AN ENTREPRENEUR
              </span>
              <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                Tell us who we should feature
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Nominate a founder or business leader whose story deserves wider visibility.
              </p>
            </div>

            {nominationSent ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="size-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900">
                  Nomination Received!
                </h4>
                <p className="text-xs text-slate-600 font-light">
                  Thank you. Our editorial team will review and get in touch with the Circle Director.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNominateSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-800 block mb-1">
                    Entrepreneur Name <span className="text-rose-500">*</span>
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
                  <label className="text-xs font-semibold text-slate-800 block mb-1">
                    Business / Enterprise <span className="text-rose-500">*</span>
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
                  <label className="text-xs font-semibold text-slate-800 block mb-1">
                    What makes their story remarkable? <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={nomineeStory}
                    onChange={(e) => setNomineeStory(e.target.value)}
                    placeholder="Briefly describe what they built or overcame..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md hover:shadow-lg"
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

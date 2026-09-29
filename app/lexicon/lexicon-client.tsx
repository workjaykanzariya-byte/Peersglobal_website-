'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Quote,
  Search,
  Users,
  UserCheck,
  Flag,
  Award,
  Building2,
  MapPin,
  Megaphone,
  Globe,
  Target,
  Armchair,
  Gift,
  Share2,
  HeartHandshake,
  ArrowLeftRight,
  Layers,
  Send,
  ShieldCheck,
  TrendingUp,
  Coins,
  ChevronRight,
  Download,
  Printer,
  Sparkles,
  Lock,
  MessageSquare,
  Shield,
  Smartphone,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react'

// =========================================================================
// LEXICON DATABASE / STRUCTURED TERMS
// =========================================================================
export interface LexiconTerm {
  slug: string
  term: string
  category: 'People' | 'Places' | 'Practice' | 'Currency' | 'Culture' | 'Ecosystem'
  shortDefinition: string
  fullDefinition: string
  ownerUrl: string
  ownerLabel: string
  icon: React.ComponentType<{ className?: string }>
  iconColor: string
}

export const LEXICON_TERMS: LexiconTerm[] = [
  // ─── THE PEOPLE ───
  {
    slug: 'peer',
    term: 'Peer',
    category: 'People',
    shortDefinition: 'An equal who chooses to build with you.',
    fullDefinition:
      'An entrepreneur or business leader who believes in building trusted relationships, contributing to others, and growing together. The word describes a relationship, not a rank — a Peer stands beside you, as an equal who has faced the same pressures.',
    ownerUrl: '/the-citizens',
    ownerLabel: 'The Citizens',
    icon: Users,
    iconColor: 'bg-blue-50 text-[#0062D2] border-blue-100',
  },
  {
    slug: 'guest',
    term: 'Guest',
    category: 'People',
    shortDefinition: 'An entrepreneur visiting to see the community.',
    fullDefinition:
      'An entrepreneur visiting a Circle meeting to see the community for themselves. A guest is welcomed and included, never sold to.',
    ownerUrl: '/the-citizens',
    ownerLabel: 'The Citizens',
    icon: UserCheck,
    iconColor: 'bg-purple-50 text-purple-600 border-purple-100',
  },
  {
    slug: 'circle-founder',
    term: 'Circle Founder',
    category: 'People',
    shortDefinition: 'The Peer who starts a Circle where none existed.',
    fullDefinition:
      'The Peer who starts a Circle where none existed, brings together the first group of entrepreneurs, and sets its culture from the first meeting.',
    ownerUrl: '/leadership/circle-founder',
    ownerLabel: 'Circle Founder',
    icon: Flag,
    iconColor: 'bg-pink-50 text-pink-600 border-pink-100',
  },
  {
    slug: 'circle-director',
    term: 'Circle Director',
    category: 'People',
    shortDefinition: 'Holds a Circle’s rhythm and standards.',
    fullDefinition:
      "The Peer who holds a Circle's rhythm and standards — running meetings, welcoming new Peers, and keeping the room healthy.",
    ownerUrl: '/leadership/circle-director',
    ownerLabel: 'Circle Director',
    icon: Award,
    iconColor: 'bg-blue-50 text-[#0062D2] border-blue-100',
  },
  {
    slug: 'industry-director',
    term: 'Industry Director',
    category: 'People',
    shortDefinition: 'Holds one industry across the community.',
    fullDefinition:
      'The Peer who holds one industry across the entire community, connecting Peers in the same sector across different Circles and cities.',
    ownerUrl: '/the-citizens',
    ownerLabel: 'The Citizens',
    icon: Building2,
    iconColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    slug: 'regional-executive-director',
    term: 'Regional Executive Director',
    category: 'People',
    shortDefinition: 'Carries a regional territory.',
    fullDefinition:
      'The Peer who carries a territory — supporting Circles and cities across a region and helping new Circles launch.',
    ownerUrl: '/the-citizens',
    ownerLabel: 'The Citizens',
    icon: MapPin,
    iconColor: 'bg-rose-50 text-rose-600 border-rose-100',
  },
  {
    slug: 'ambassador',
    term: 'Ambassador',
    category: 'People',
    shortDefinition: 'Represents Peers Global in their industry.',
    fullDefinition:
      'A Peer who represents Peers Global in their industry and network, and introduces entrepreneurs who genuinely belong here.',
    ownerUrl: '/the-citizens',
    ownerLabel: 'The Citizens',
    icon: Megaphone,
    iconColor: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    slug: 'global-advisor',
    term: 'Global Advisor',
    category: 'People',
    shortDefinition: 'Senior leader guiding community direction.',
    fullDefinition:
      'A senior entrepreneur who guides the direction of the community itself, bringing experience to decisions about how it grows.',
    ownerUrl: '/the-citizens',
    ownerLabel: 'The Citizens',
    icon: Globe,
    iconColor: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },

  // ─── THE PLACES ───
  {
    slug: 'circle',
    term: 'Circle',
    category: 'Places',
    shortDefinition: 'The basic unit of Peers Global.',
    fullDefinition:
      'The basic unit of Peers Global. A group of the right entrepreneurs, brought together around a common industry, interest, location or opportunity, meeting on a fixed rhythm.',
    ownerUrl: '/circles',
    ownerLabel: 'Circles',
    icon: Users,
    iconColor: 'bg-blue-50 text-[#0062D2] border-blue-100',
  },
  {
    slug: 'industry-circle',
    term: 'Industry Circle',
    category: 'Places',
    shortDefinition: 'Circle composed around a shared sector.',
    fullDefinition:
      'A Circle composed around a shared sector, built for depth of expertise and referral flow within an industry.',
    ownerUrl: '/circles',
    ownerLabel: 'Circles',
    icon: Building2,
    iconColor: 'bg-purple-50 text-purple-600 border-purple-100',
  },
  {
    slug: 'purpose-circle',
    term: 'Purpose Circle',
    category: 'Places',
    shortDefinition: 'Circle composed around a shared goal.',
    fullDefinition:
      'A Circle composed around a shared goal or stage of business rather than a single industry.',
    ownerUrl: '/circles',
    ownerLabel: 'Circles',
    icon: Target,
    iconColor: 'bg-pink-50 text-pink-600 border-pink-100',
  },
  {
    slug: 'seat',
    term: 'Seat',
    category: 'Places',
    shortDefinition: 'One business category per room.',
    fullDefinition:
      'A place in a Circle held by one business from one category. Seats are what make open, honest giving possible — nobody in the room is chasing your customer.',
    ownerUrl: '/the-territory',
    ownerLabel: 'The Territory',
    icon: Armchair,
    iconColor: 'bg-sky-50 text-sky-600 border-sky-100',
  },
  {
    slug: 'city',
    term: 'City',
    category: 'Places',
    shortDefinition: 'All Circles within one city.',
    fullDefinition:
      'All Circles within one city, and the local network they create together.',
    ownerUrl: '/the-territory',
    ownerLabel: 'The Territory',
    icon: Building2,
    iconColor: 'bg-blue-50 text-[#0062D2] border-blue-100',
  },
  {
    slug: 'district',
    term: 'District',
    category: 'Places',
    shortDefinition: 'A group of collaborating cities.',
    fullDefinition:
      'A group of cities that collaborate as one region, so Peers can reach markets, suppliers and talent beyond their own city.',
    ownerUrl: '/the-territory',
    ownerLabel: 'The Territory',
    icon: Gift,
    iconColor: 'bg-purple-50 text-purple-600 border-purple-100',
  },
  {
    slug: 'hub',
    term: 'Hub',
    category: 'Places',
    shortDefinition: 'A city with multiple active Circles.',
    fullDefinition:
      'A city with enough active Circles that Peers regularly collaborate across them.',
    ownerUrl: '/the-territory',
    ownerLabel: 'The Territory',
    icon: Share2,
    iconColor: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },

  // ─── THE PRACTICE ───
  {
    slug: 'give-first',
    term: 'Give-First',
    category: 'Practice',
    shortDefinition: 'Contribution comes before any ask.',
    fullDefinition:
      'The founding rule of this community. You contribute before you ask. Always. It is the mechanism by which trust is manufactured.',
    ownerUrl: '/10-ways-of-collaboration',
    ownerLabel: '10 Ways of Collaboration',
    icon: HeartHandshake,
    iconColor: 'bg-rose-50 text-rose-600 border-rose-100',
  },
  {
    slug: 'the-give-and-the-ask',
    term: 'The Give and the Ask',
    category: 'Practice',
    shortDefinition: 'The core ritual of every meeting.',
    fullDefinition:
      'The ritual in every Circle meeting where each Peer states one thing they can offer and one thing they need.',
    ownerUrl: '/circle-meeting-experience',
    ownerLabel: 'Circle Meeting Experience',
    icon: ArrowLeftRight,
    iconColor: 'bg-blue-50 text-[#0062D2] border-blue-100',
  },
  {
    slug: 'peer-to-peer',
    term: 'Peer-to-Peer',
    category: 'Practice',
    shortDefinition: 'One-to-one between two Peers.',
    fullDefinition:
      "A one-to-one meeting between two Peers, held outside the Circle meeting, to understand each other's business properly. Where most real collaboration begins.",
    ownerUrl: '/10-ways-of-collaboration',
    ownerLabel: '10 Ways of Collaboration',
    icon: Users,
    iconColor: 'bg-sky-50 text-sky-600 border-sky-100',
  },
  {
    slug: '10-ways-of-collaboration',
    term: '10 Ways of Collaboration',
    category: 'Practice',
    shortDefinition: 'How value moves between Peers.',
    fullDefinition:
      'The ten defined forms that giving takes here — Business Referral, Mentorship, Joint Venture, Knowledge Sharing, Problem Solving, Vendor Connect, Funding Access, Visibility & PR, Emotional Support and Execution Support.',
    ownerUrl: '/10-ways-of-collaboration',
    ownerLabel: '10 Ways of Collaboration',
    icon: Layers,
    iconColor: 'bg-purple-50 text-purple-600 border-purple-100',
  },
  {
    slug: 'contribution',
    term: 'Contribution',
    category: 'Practice',
    shortDefinition: 'Any act of value given through the 10 Ways.',
    fullDefinition:
      'Any act of value given by one Peer to another through the 10 Ways. Contribution is what this community runs on.',
    ownerUrl: '/10-ways-of-collaboration',
    ownerLabel: '10 Ways of Collaboration',
    icon: Send,
    iconColor: 'bg-blue-50 text-[#0062D2] border-blue-100',
  },
  {
    slug: 'confirmation',
    term: 'Confirmation',
    category: 'Practice',
    shortDefinition: 'Verification by the person helped.',
    fullDefinition:
      'The step where the Peer who received value verifies it. No contribution counts until the person helped confirms it.',
    ownerUrl: '/the-currency',
    ownerLabel: 'The Currency',
    icon: ShieldCheck,
    iconColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    slug: 'life-impact-score',
    term: 'Life Impact Score',
    category: 'Practice',
    shortDefinition: 'A record of what you have given.',
    fullDefinition:
      'A record of how many lives you have impacted through your confirmed contributions, carried across every Circle, city and country.',
    ownerUrl: '/the-currency',
    ownerLabel: 'The Currency',
    icon: TrendingUp,
    iconColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    slug: 'peers-coin',
    term: 'Peers Coin',
    category: 'Practice',
    shortDefinition: 'Rewards earned by giving.',
    fullDefinition:
      'The reward currency of the community. Earned alongside every confirmed contribution and redeemable in the Peers Global Marketplace.',
    ownerUrl: '/the-currency',
    ownerLabel: 'The Currency',
    icon: Coins,
    iconColor: 'bg-amber-50 text-amber-600 border-amber-100',
  },

  // ─── THE CURRENCY ───
  {
    slug: 'peer-standing',
    term: 'Peer Standing',
    category: 'Currency',
    shortDefinition: 'Recognition earned through contribution.',
    fullDefinition:
      'The recognition and access a Peer earns through sustained contribution. Conferred by other Peers, never purchased.',
    ownerUrl: '/the-currency',
    ownerLabel: 'The Currency',
    icon: Award,
    iconColor: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },
  {
    slug: 'peers-global-marketplace',
    term: 'Peers Global Marketplace',
    category: 'Currency',
    shortDefinition: 'Where Peers Coin is redeemed.',
    fullDefinition:
      'Where Peers Coin is redeemed — entrepreneurial growth tools, learning programmes, business resources, community experiences and official merchandise.',
    ownerUrl: '/the-currency',
    ownerLabel: 'The Currency',
    icon: Gift,
    iconColor: 'bg-teal-50 text-teal-600 border-teal-100',
  },

  // ─── THE CULTURE ───
  {
    slug: 'the-peers-code',
    term: 'The Peers Code',
    category: 'Culture',
    shortDefinition: 'The six foundational commitments.',
    fullDefinition:
      'The six commitments every Peer makes — give first, show up, tell the truth, protect the room, respect every Peer, carry the culture.',
    ownerUrl: '/culture-and-code',
    ownerLabel: 'Culture & Code',
    icon: Shield,
    iconColor: 'bg-blue-50 text-[#0062D2] border-blue-100',
  },
  {
    slug: 'protect-the-room',
    term: 'Protect the Room',
    category: 'Culture',
    shortDefinition: 'The absolute confidentiality pledge.',
    fullDefinition:
      'The confidentiality commitment. What is shared inside a Circle stays inside it, without exception.',
    ownerUrl: '/culture-and-code',
    ownerLabel: 'Culture & Code',
    icon: Lock,
    iconColor: 'bg-rose-50 text-rose-600 border-rose-100',
  },
  {
    slug: 'the-welcome',
    term: 'The Welcome',
    category: 'Culture',
    shortDefinition: 'Guided onboarding for every new Peer.',
    fullDefinition:
      'The ritual by which every new Peer is introduced by name and connected to a Peer who guides them through their early months.',
    ownerUrl: '/culture-and-code',
    ownerLabel: 'Culture & Code',
    icon: UserCheck,
    iconColor: 'bg-purple-50 text-purple-600 border-purple-100',
  },
  {
    slug: 'the-recognition',
    term: 'The Recognition',
    category: 'Culture',
    shortDefinition: 'Acknowledging contribution out loud.',
    fullDefinition:
      'The moment in a Circle meeting when contribution is acknowledged out loud in front of the community.',
    ownerUrl: '/culture-and-code',
    ownerLabel: 'Culture & Code',
    icon: Sparkles,
    iconColor: 'bg-amber-50 text-amber-600 border-amber-100',
  },

  // ─── THE ECOSYSTEM ───
  {
    slug: 'unity',
    term: 'Unity',
    category: 'Ecosystem',
    shortDefinition: 'The community, every day.',
    fullDefinition:
      'The Peers Global app — the digital home of the community, where Peers find each other, book conversations, log contributions and stay connected between meetings.',
    ownerUrl: '/unity',
    ownerLabel: 'Unity App',
    icon: Smartphone,
    iconColor: 'bg-sky-50 text-sky-600 border-sky-100',
  },
  {
    slug: '1-million-mission',
    term: '1 Million Mission',
    category: 'Ecosystem',
    shortDefinition: 'One million lives impacted.',
    fullDefinition:
      'The mission of Peers Global — to impact one million lives through entrepreneurship, collaboration and opportunity by 2030.',
    ownerUrl: '/the-idea',
    ownerLabel: 'The Idea',
    icon: Globe,
    iconColor: 'bg-blue-50 text-[#0062D2] border-blue-100',
  },
  {
    slug: 'community-of-collaboration',
    term: 'Community of Collaboration',
    category: 'Ecosystem',
    shortDefinition: 'Entrepreneurs creating value for each other.',
    fullDefinition:
      'What Peers Global is. A community organised entirely around entrepreneurs creating value for one another.',
    ownerUrl: '/the-idea',
    ownerLabel: 'The Idea',
    icon: HeartHandshake,
    iconColor: 'bg-teal-50 text-teal-600 border-teal-100',
  },
  {
    slug: 'lsr',
    term: 'LSR — Learn, Sales, Resources',
    category: 'Ecosystem',
    shortDefinition: 'The three drivers of business growth.',
    fullDefinition:
      'The three things every business runs on — Learn, Sales, Resources — all made available to an entrepreneur inside Peers Global.',
    ownerUrl: '/the-idea',
    ownerLabel: 'The Idea',
    icon: CheckCircle2,
    iconColor: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },
]

const CATEGORIES = ['All', 'People', 'Places', 'Practice', 'Currency', 'Culture', 'Ecosystem'] as const

export default function LexiconClientPage() {
  const [activeCategory, setActiveCategory] = React.useState<string>('All')
  const [searchQuery, setSearchQuery] = React.useState<string>('')
  const [sortOrder, setSortOrder] = React.useState<'az' | 'za' | 'category'>('az')
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid')

  // Filtered terms
  const filteredTerms = React.useMemo(() => {
    let list = LEXICON_TERMS.filter((term) => {
      const matchesCategory = activeCategory === 'All' || term.category === activeCategory
      const matchesSearch =
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.fullDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.shortDefinition.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })

    if (sortOrder === 'az') {
      list = [...list].sort((a, b) => a.term.localeCompare(b.term))
    } else if (sortOrder === 'za') {
      list = [...list].sort((a, b) => b.term.localeCompare(a.term))
    } else if (sortOrder === 'category') {
      list = [...list].sort((a, b) => a.category.localeCompare(b.category))
    }
    return list
  }, [activeCategory, searchQuery, sortOrder])

  // Split terms by key categories for visual presentation matching screenshot
  const peopleTerms = LEXICON_TERMS.filter((t) => t.category === 'People')
  const placesTerms = LEXICON_TERMS.filter((t) => t.category === 'Places')
  const practiceTerms = LEXICON_TERMS.filter((t) => t.category === 'Practice')

  // Print/Download handler
  const handlePrint = () => {
    window.print()
  }

  // Structured Schema for DefinedTermSet
  const definedTermSetSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'The Peers Lexicon',
    description: 'The canonical vocabulary, concepts, and definitions of Peers Global.',
    hasDefinedTerm: LEXICON_TERMS.map((item) => ({
      '@type': 'DefinedTerm',
      name: item.term,
      description: item.shortDefinition,
      inDefinedTermSet: 'https://peersglobal.com/lexicon',
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a Peer in Peers Global?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Peer is an entrepreneur or business leader who believes in building trusted relationships, contributing to others, and growing together. The word describes an equal relationship, not a rank.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a Circle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Circle is the basic unit of Peers Global. It brings together a curated group of entrepreneurs around a common industry, interest, or opportunity, meeting on a fixed monthly rhythm.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Give-First principle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Give-First is the founding rule of the community: you contribute before you ask. Always. It is the mechanism by which trust is manufactured between entrepreneurs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Life Impact Score?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Life Impact Score is the transparent, verified record of what a Peer has given, built strictly from confirmed contributions across Circles, cities, and countries.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Peers Coin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Peers Coin is the reward currency earned alongside every confirmed contribution, redeemable in the Peers Global Marketplace for entrepreneurial resources, programmes, and experiences.',
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* SEO Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* =========================================================================
          SECTION 1: HERO ("THE PEERS LEXICON")
          Exact Match to Reference Screenshot
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#050C1A] text-white pt-8 pb-16 sm:pb-24 border-b border-slate-800">
        
        {/* Subtle Ambient Radial Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-10 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[130px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium tracking-wide mb-8 sm:mb-12">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-slate-400">Our World</span>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-sky-400 font-semibold">The Peers Lexicon</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-6 h-[1.5px] bg-sky-400" />
                <span>THE LANGUAGE</span>
                <span className="w-6 h-[1.5px] bg-sky-400" />
              </div>

              {/* Title with italic blue accent */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[62px] font-normal text-white tracking-tight leading-[1.08] mb-5">
                The Peers <span className="italic text-[#0062D2]">Lexicon</span>
              </h1>

              {/* Subline */}
              <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-3 max-w-xl">
                Every community that lasts develops a language of its own.
              </p>

              {/* Supporting line */}
              <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
                Here is ours, defined plainly, so that every Peer means the same thing by the same word.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  href="/membership"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Become a Peer</span>
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="/circles"
                  className="rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105"
                >
                  Find Your Circle
                </Link>
              </div>

              {/* 3 Pill Stats matching reference screenshot */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-white/10 w-full max-w-xl text-[10px] sm:text-xs font-bold tracking-wider uppercase text-slate-400">
                <div>
                  <span className="text-white block">SAME WORDS</span>
                  <span className="text-slate-400 font-light">SAME UNDERSTANDING</span>
                </div>
                <div>
                  <span className="text-white block">STRONGER</span>
                  <span className="text-slate-400 font-light">COLLABORATION</span>
                </div>
                <div>
                  <span className="text-white block">A MORE CONNECTED</span>
                  <span className="text-slate-400 font-light">COMMUNITY</span>
                </div>
              </div>

            </div>

            {/* Right Media (6 cols): Black Leather Book with Gold Embossed Title */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] aspect-[16/11] sm:aspect-[16/10] group">
                
                {/* Book Photograph */}
                <Image
                  src="/images/lexicon-hero-desk.jpg"
                  alt="The Peers Lexicon executive leather book on desk"
                  fill
                  priority
                  className="object-cover object-center brightness-[0.92] contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/20 pointer-events-none" />

                {/* Script Typography Overlaid on the Book Cover */}
                <div className="absolute top-[42%] left-[48%] sm:left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-center">
                  <div
                    className="text-amber-200/95 text-lg sm:text-2xl font-bold leading-tight drop-shadow-md"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    <div>People.</div>
                    <div className="mt-0.5">Ideas.</div>
                    <div className="mt-0.5">Opportunities.</div>
                    <div className="mt-0.5 text-amber-300">Impact.</div>
                  </div>
                </div>

                {/* Script Typography on bottom right near mug */}
                <div className="absolute bottom-5 right-6 sm:bottom-7 sm:right-7 pointer-events-none select-none text-right">
                  <div
                    className="text-white/95 text-lg sm:text-xl font-normal leading-tight drop-shadow-lg"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Same Words. <br />
                    <span className="text-sky-300">Greater Possibilities.</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 2: "WHY WE DEFINE OUR WORDS"
          Photo on Left with script overlay, Narrative + Quote on Right
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left 5 cols: Photo with Script Overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[4/3] shadow-xl border border-slate-200 group bg-slate-900">
                <Image
                  src="/images/lexicon-team-understanding.jpg"
                  alt="Peers Global entrepreneurs smiling and collaborating"
                  fill
                  className="object-cover object-center filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Cursive overlay */}
                <div className="absolute bottom-16 left-6 right-6 text-center pointer-events-none select-none">
                  <p
                    className="text-white text-2xl sm:text-3xl font-normal drop-shadow-md leading-tight"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Different cities. <br />
                    Same understanding.
                  </p>
                </div>

                {/* Bottom pill badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-full py-2 px-4 flex items-center justify-center gap-2 shadow-sm">
                  <Users className="size-4 text-[#0062D2] shrink-0" />
                  <span className="text-xs font-semibold text-slate-800 truncate">
                    A shared language builds a stronger community.
                  </span>
                </div>
              </div>
            </div>

            {/* Right 7 cols: Content & Quote */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                <span>WHY WE DEFINE OUR WORDS</span>
              </div>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-6">
                Why we define our words
              </h2>

              {/* Narrative Paragraphs */}
              <div className="space-y-4 text-slate-600 font-light text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
                <p className="text-base sm:text-lg text-slate-700 font-normal">
                  A shared vocabulary does something no rulebook can.
                </p>
                <p>
                  When entrepreneurs across many cities use the same words for the same things, they behave the same way without anyone instructing them. A new Peer walking into a Circle in a city they have never visited recognises immediately what is happening, because the language is identical to their own.
                </p>
                <p>
                  None of these words are decorative. Each one names something that genuinely happens here — in a meeting, in an app, in a conversation between two entrepreneurs.
                </p>
                <p className="text-slate-900 font-medium">
                  Learn the language and you already understand the community.
                </p>
              </div>

              {/* Quote Card */}
              <div className="bg-[#FAFBFD] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] w-full max-w-xl">
                <Quote className="size-8 text-[#0062D2] mb-3 opacity-80" />
                <p className="font-serif italic text-xl sm:text-2xl text-slate-800 font-normal leading-snug mb-3">
                  &ldquo;A shared language turns a group of individuals into a global community.&rdquo;
                </p>
                <div className="text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase">
                  PEERS GLOBAL
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: THE PEOPLE (8 Cards Grid)
          Exact match to Reference Screenshot
          ========================================================================= */}
      <section id="the-people" className="relative py-20 sm:py-28 bg-[#FAFBFD] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-3">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>THE PEOPLE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-snug">
                The People
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-light mt-1">
                The individuals who make Peers Global what it is.
              </p>
            </div>

            <Link
              href="/the-citizens"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0062D2] hover:text-[#0052B4] px-5 py-2.5 rounded-full border border-blue-200 bg-white hover:bg-blue-50 transition-all shadow-xs"
            >
              <span>View all roles</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* 8 Cards Grid (4 cols on desktop, 2 rows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {peopleTerms.map((item) => {
              const IconComp = item.icon
              return (
                <div
                  key={item.slug}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon */}
                    <div className={`size-11 rounded-2xl flex items-center justify-center mb-5 border ${item.iconColor} group-hover:scale-105 transition-transform`}>
                      <IconComp className="size-5" />
                    </div>

                    {/* Term Title */}
                    <h3 className="font-serif text-lg font-bold text-slate-900 mb-2 leading-tight">
                      {item.term}
                    </h3>

                    {/* Definition */}
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4">
                      {item.fullDefinition}
                    </p>
                  </div>

                  {/* Link through to owner page */}
                  <Link
                    href={item.ownerUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0062D2] hover:text-[#0052B4] pt-3 border-t border-slate-100 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>{item.ownerLabel}</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              )
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4: THE PLACES (7 Cards Grid + 1 Graphic Card)
          Exact match to Reference Screenshot
          ========================================================================= */}
      <section id="the-places" className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-3">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>THE PLACES</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-snug">
                The Places
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-light mt-1">
                The structure that connects us across cities, regions and industries.
              </p>
            </div>

            <Link
              href="/the-territory"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0062D2] hover:text-[#0052B4] px-5 py-2.5 rounded-full border border-blue-200 bg-white hover:bg-blue-50 transition-all shadow-xs"
            >
              <span>Explore the Territory</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* 8 Cards Grid (7 terms + 1 callout card) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {placesTerms.map((item) => {
              const IconComp = item.icon
              return (
                <div
                  key={item.slug}
                  className="bg-[#FAFBFD] rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon */}
                    <div className={`size-11 rounded-2xl flex items-center justify-center mb-5 border ${item.iconColor} group-hover:scale-105 transition-transform`}>
                      <IconComp className="size-5" />
                    </div>

                    {/* Term Title */}
                    <h3 className="font-serif text-lg font-bold text-slate-900 mb-2 leading-tight">
                      {item.term}
                    </h3>

                    {/* Definition */}
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4">
                      {item.fullDefinition}
                    </p>
                  </div>

                  {/* Link through to owner page */}
                  <Link
                    href={item.ownerUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0062D2] hover:text-[#0052B4] pt-3 border-t border-slate-200/70 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>{item.ownerLabel}</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              )
            })}

            {/* Card 8: Decorative Callout matching screenshot */}
            <div className="bg-blue-50/70 rounded-3xl p-6 border border-blue-100 flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="size-12 rounded-2xl bg-white text-[#0062D2] flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <MapPin className="size-6" />
              </div>
              <p
                className="text-[#0062D2] text-2xl font-normal leading-tight select-none"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Different cities. <br />
                One community.
              </p>
              <div className="mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                PEERS GLOBAL
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5: THE PRACTICE (8 Cards Grid)
          Exact match to Reference Screenshot
          ========================================================================= */}
      <section id="the-practice" className="relative py-20 sm:py-28 bg-[#FAFBFD] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-3">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>THE PRACTICE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-snug">
                The Practice
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-light mt-1">
                The habits, principles and processes that turn intention into impact.
              </p>
            </div>

            <Link
              href="/10-ways-of-collaboration"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0062D2] hover:text-[#0052B4] px-5 py-2.5 rounded-full border border-blue-200 bg-white hover:bg-blue-50 transition-all shadow-xs"
            >
              <span>Explore Collaboration</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {practiceTerms.map((item) => {
              const IconComp = item.icon
              return (
                <div
                  key={item.slug}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon */}
                    <div className={`size-11 rounded-2xl flex items-center justify-center mb-5 border ${item.iconColor} group-hover:scale-105 transition-transform`}>
                      <IconComp className="size-5" />
                    </div>

                    {/* Term Title */}
                    <h3 className="font-serif text-lg font-bold text-slate-900 mb-2 leading-tight">
                      {item.term}
                    </h3>

                    {/* Definition */}
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4">
                      {item.fullDefinition}
                    </p>
                  </div>

                  {/* Link through to owner page */}
                  <Link
                    href={item.ownerUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0062D2] hover:text-[#0052B4] pt-3 border-t border-slate-100 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>{item.ownerLabel}</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              )
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6: SEARCHABLE REFERENCE DIRECTORY (REDESIGNED EXACT MATCH)
          Features:
          - Left sweeping curve with handwritten script "People Create Impact"
          - Right standing open book with "Same Words. Greater Possibilities." + category index
          - Rounded capsule search bar with integrated blue [Search →] button
          - Category pills with icons (All, People, Places, Practice, Currency, Culture, Ecosystem)
          - Sub-bar with "Showing X of Y terms", Sort by [A - Z ⌄], and List/Grid view switch
          - High-contrast cards with top icon, category pill, bold title, blue subline, body & CTA
          ========================================================================= */}
      <section id="directory" className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-sky-50/25 to-white text-slate-900 border-b border-slate-200/80 overflow-hidden">
        
        {/* Left Decorative Art: Sweeping curved arc and script text */}
        <div className="hidden xl:block absolute -left-6 top-16 w-80 h-80 pointer-events-none select-none z-10">
          <svg viewBox="0 0 300 300" fill="none" className="w-full h-full text-sky-200/70">
            <path
              d="M-20 40 C 80 40, 180 120, 200 280"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M-20 80 C 70 80, 160 150, 170 300"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.6"
            />
          </svg>
          <div className="absolute top-20 left-12 -rotate-[16deg] text-center">
            <p
              className="text-[#0062D2] text-3xl font-normal drop-shadow-xs leading-none"
              style={{ fontFamily: 'var(--font-script)' }}
            >
              People <br />
              Create <br />
              Impact
            </p>
            <div className="mt-1 flex justify-center gap-1 opacity-70">
              <span className="w-8 h-[1.5px] bg-[#0062D2]" />
              <span className="w-4 h-[1.5px] bg-[#0062D2]" />
            </div>
          </div>
        </div>

        {/* Right Decorative Art: Leaning Open Book + Category Column */}
        <div className="hidden xl:flex absolute right-4 top-12 items-center gap-6 pointer-events-none select-none z-10">
          {/* Standing Open Book Card */}
          <div className="relative w-52 h-44 rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
            <Image
              src="/images/lexicon-open-book.jpg"
              alt="Open book"
              fill
              className="object-cover object-center filter brightness-[0.97]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-white/40" />
            
            {/* Script Text on Right Page */}
            <div className="absolute top-8 right-4 w-28 text-center">
              <p
                className="text-[#0062D2] text-lg font-normal leading-tight drop-shadow-xs"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Same <br />
                Words. <br />
                <span className="text-slate-800">Greater</span> <br />
                Possibilities.
              </p>
            </div>
          </div>

          {/* Category Vertical Nav */}
          <div className="pointer-events-auto flex flex-col space-y-2 text-xs font-semibold text-slate-500 pr-4">
            {['People', 'Places', 'Practice', 'Currency', 'Culture', 'Ecosystem'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-left hover:text-[#0062D2] transition-colors py-0.5 ${
                  activeCategory === cat ? 'text-[#0062D2] font-bold' : 'text-slate-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>SEARCHABLE REFERENCE DIRECTORY</span>
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-4">
              Find Any Term in the Lexicon
            </h2>

            <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed">
              Filter by category or search in real time across all definitions in the community.
            </p>
          </div>

          {/* Capsule Search Bar with Integrated Search Button */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative bg-white border border-slate-200/90 rounded-full pl-5 pr-2 py-1.5 shadow-[0_12px_35px_rgba(0,98,210,0.08)] flex items-center gap-3 transition-all focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
              <Search className="size-5 text-slate-400 shrink-0 ml-1" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any word, concept or definition (e.g. Peer, Give-First, Circle)..."
                className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-400 hover:text-slate-600 px-2"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                className="bg-[#0062D2] hover:bg-[#0052B4] text-white px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-md shadow-blue-600/30 transition-all hover:scale-105 shrink-0"
              >
                <span>Search</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Category Filter Pills with Matching Icons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-4xl mx-auto">
            {[
              { label: 'All', icon: Layers },
              { label: 'People', icon: Users },
              { label: 'Places', icon: MapPin },
              { label: 'Practice', icon: Sparkles },
              { label: 'Currency', icon: Coins },
              { label: 'Culture', icon: HeartHandshake },
              { label: 'Ecosystem', icon: Share2 },
            ].map((catItem) => {
              const CatIcon = catItem.icon
              const isActive = activeCategory === catItem.label
              return (
                <button
                  key={catItem.label}
                  onClick={() => setActiveCategory(catItem.label)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#0062D2] text-white shadow-lg shadow-blue-600/30 border border-[#0062D2] scale-105'
                      : 'bg-white text-slate-700 border border-slate-200/90 hover:border-blue-200 hover:bg-blue-50/50 shadow-xs'
                  }`}
                >
                  <CatIcon className={`size-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{catItem.label}</span>
                </button>
              )
            })}
          </div>

          {/* Sub-bar: Showing Counter, Sort by Dropdown, and List/Grid View Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pt-4 border-t border-slate-200/70 text-xs text-slate-500">
            <div className="font-medium text-slate-600">
              Showing {filteredTerms.length} of {LEXICON_TERMS.length} terms
            </div>

            <div className="flex items-center gap-4 self-end sm:self-auto">
              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span>Sort by</span>
                <div className="relative inline-block">
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as 'az' | 'za' | 'category')}
                    aria-label="Sort lexicon terms"
                    className="appearance-none bg-white border border-slate-200/90 rounded-xl px-3.5 py-1.5 pr-8 text-xs font-semibold text-slate-700 shadow-xs focus:outline-hidden focus:border-blue-500 cursor-pointer"
                  >
                    <option value="az">A – Z</option>
                    <option value="za">Z – A</option>
                    <option value="category">Category</option>
                  </select>
                  <ChevronDown className="size-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* View Switcher Toggle */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/80">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === 'list'
                      ? 'bg-white text-[#0062D2] shadow-xs'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                  title="List view"
                >
                  <MessageSquare className="size-4" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === 'grid'
                      ? 'bg-[#0062D2] text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                  title="Grid view"
                >
                  <Layers className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Cards Display (Grid View or List View) */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredTerms.map((item) => {
                const IconComp = item.icon
                
                // Color mapping matching screenshot
                const badgeColor =
                  item.category === 'Ecosystem'
                    ? 'bg-purple-50 text-purple-700 border-purple-100'
                    : item.category === 'People'
                    ? 'bg-amber-50 text-amber-700 border-amber-100'
                    : item.category === 'Places'
                    ? 'bg-rose-50 text-rose-700 border-rose-100'
                    : item.category === 'Practice'
                    ? 'bg-blue-50 text-[#0062D2] border-blue-100'
                    : item.category === 'Currency'
                    ? 'bg-teal-50 text-teal-700 border-teal-100'
                    : 'bg-indigo-50 text-indigo-700 border-indigo-100'

                const iconBoxColor =
                  item.category === 'Ecosystem'
                    ? 'bg-sky-50 text-sky-600 border-sky-100'
                    : item.category === 'People'
                    ? 'bg-amber-50 text-amber-600 border-amber-100'
                    : item.category === 'Places'
                    ? 'bg-rose-50 text-rose-600 border-rose-100'
                    : item.category === 'Practice'
                    ? 'bg-blue-50 text-[#0062D2] border-blue-100'
                    : item.category === 'Currency'
                    ? 'bg-teal-50 text-teal-600 border-teal-100'
                    : 'bg-indigo-50 text-indigo-600 border-indigo-100'

                return (
                  <div
                    key={item.slug}
                    id={item.slug}
                    className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between group scroll-mt-24"
                  >
                    <div>
                      {/* Top Row: Icon on left, Category badge on right */}
                      <div className="flex items-center justify-between mb-5">
                        <div className={`size-12 rounded-2xl flex items-center justify-center border ${iconBoxColor} group-hover:scale-105 transition-transform shadow-2xs`}>
                          <IconComp className="size-5" />
                        </div>
                        <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${badgeColor}`}>
                          {item.category}
                        </span>
                      </div>

                      {/* Term Title */}
                      <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1 leading-tight">
                        {item.term}
                      </h3>

                      {/* Subtitle in bright blue */}
                      <p className="text-sm font-semibold text-[#0062D2] mb-3">
                        {item.shortDefinition}
                      </p>

                      {/* Full description */}
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                        {item.fullDefinition}
                      </p>
                    </div>

                    {/* Footer Row: #hashtag on left, Link on right */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-400 font-medium">#{item.slug}</span>
                      <Link
                        href={item.ownerUrl}
                        className="text-[#0062D2] hover:text-[#0052B4] font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        <span>{item.category === 'People' || item.category === 'Places' ? 'View Details' : `Explore on ${item.ownerLabel}`}</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            /* List View */
            <div className="space-y-4 mb-16">
              {filteredTerms.map((item) => {
                const IconComp = item.icon
                return (
                  <div
                    key={item.slug}
                    id={item.slug}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group scroll-mt-24"
                  >
                    <div className="flex items-start gap-4">
                      <div className="size-11 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                        <IconComp className="size-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-serif text-xl font-bold text-slate-900">
                            {item.term}
                          </h3>
                          <span className="text-[10px] font-mono uppercase bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-[#0062D2] mb-1">
                          {item.shortDefinition}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 font-light max-w-2xl">
                          {item.fullDefinition}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                      <span className="font-mono text-xs text-slate-400">#{item.slug}</span>
                      <Link
                        href={item.ownerUrl}
                        className="text-xs font-semibold text-[#0062D2] hover:text-[#0052B4] inline-flex items-center gap-1"
                      >
                        <span>Explore</span>
                        <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Quick Reference Table with Print / Download */}
          <div className="bg-[#FAFBFD] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200/80 gap-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">
                  Quick Reference Table
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light">
                  A one-page reference summary of essential community terms.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-50 transition-all shadow-xs cursor-pointer"
                >
                  <Printer className="size-3.5 text-slate-500" />
                  <span>Print Reference</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#0062D2] hover:bg-[#0052B4] px-4 py-2 rounded-full shadow-xs transition-all cursor-pointer"
                >
                  <Download className="size-3.5" />
                  <span>Download Card</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4">Word</th>
                    <th className="py-3 px-4">Core Meaning</th>
                    <th className="py-3 px-4 hidden md:table-cell">Category</th>
                    <th className="py-3 px-4 text-right">Deep Dive</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {LEXICON_TERMS.slice(0, 14).map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/80 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-serif">
                        {item.term}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 font-light">
                        {item.shortDefinition}
                      </td>
                      <td className="py-3.5 px-4 text-slate-400 text-xs hidden md:table-cell">
                        {item.category}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <Link
                          href={item.ownerUrl}
                          className="text-[#0062D2] hover:underline font-semibold text-xs"
                        >
                          {item.ownerLabel} →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7: A NOTE ON THE WORD "PEER"
          Full-width Editorial Block (The only prose block on page)
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#FAFBFD] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            <span>LINGUISTIC PRECISION</span>
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-8">
            A note on the word &ldquo;Peer&rdquo;
          </h2>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-[0_6px_30px_rgba(0,0,0,0.03)] space-y-6 text-left sm:text-center">
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              In parts of India, the word <em className="italic text-slate-800">peer</em> also names a spiritual guide. We use it in its English sense, and we use it precisely.
            </p>

            <div className="py-4 border-y border-slate-100">
              <p
                className="text-3xl sm:text-4xl text-[#0062D2] font-normal leading-snug"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                &ldquo;A Peer is an equal.&rdquo;
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-800 font-normal leading-relaxed">
              Not above you as an authority. Not below you as a service provider. Beside you, as someone whose respect has to be earned and can be lost.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              We also never use the word <em className="italic">peerage</em>. Peerage means inherited aristocracy — rank by birth, closed doors, status nobody earned. Nothing here is inherited. Every position in this community is reached through contribution, and it is open to every entrepreneur who joins.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 8: CLOSING BANNER
          Dark Executive Cinematic Banner matching reference screenshot
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#030B1C] text-white overflow-hidden">
        
        {/* Background Looping Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="size-full object-cover object-center filter brightness-[0.7] contrast-[1.1]"
          >
            <source src="/videos/homepage-hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Ambient Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030B1C] via-[#030B1C]/80 to-transparent z-[1]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl">
            
            {/* Top Eyebrow */}
            <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-6">
              <span className="w-5 h-[1.5px] bg-sky-400" />
              <span>THE LANGUAGE BUILDS THE FUTURE</span>
              <span className="w-5 h-[1.5px] bg-sky-400" />
            </div>

            {/* Script Text top right on desktop */}
            <div className="hidden sm:block absolute right-8 top-0 pointer-events-none select-none text-right">
              <p
                className="text-white/80 text-xl sm:text-2xl font-normal drop-shadow-md leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Real People. <br />
                Real Impact. <br />
                <span className="text-sky-400">A Stronger Tomorrow.</span>
              </p>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.18] mb-6">
              Learn the language, and you already understand the community.
            </h2>

            {/* Italic Belief Subline */}
            <p className="font-serif italic text-lg sm:text-xl text-slate-300 mb-10">
              Build Your Business. Build Your Relationships. Build Your Circle.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/membership"
                className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-xl shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Become a Peer</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/circles"
                className="rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 text-sm font-semibold transition-all hover:scale-105"
              >
                Find Your Circle
              </Link>
            </div>

          </div>

          {/* Sub-bar Copyright / Mottos */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              Peers Global — World&apos;s First Community of Collaboration
            </div>
            <div className="italic text-slate-300">
              &ldquo;Peers are Partners in Business and Friends in Life.&rdquo;
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

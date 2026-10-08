'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  Factory,
  Building2,
  Laptop,
  ShieldPlus,
  GraduationCap,
  Palette,
  HeartHandshake,
  Layers,
  Leaf,
  Truck,
  Rocket,
  TrendingUp,
  Wallet,
  Globe,
  Store,
  Users,
  Lightbulb,
  Award,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Filter,
  Search,
  ChevronRight,
  Sparkles,
  Shield,
  Clock,
  Calendar,
  Lock,
  ChevronDown,
  Check,
  X,
  PhoneCall,
  UserCheck,
  Building,
  Target,
  Share2,
  Compass,
  MessageSquare,
  Heart,
  FileText,
  Megaphone,
  BarChart3,
  Star,
  Repeat,
  Briefcase,
  Shapes,
} from 'lucide-react'
import {
  INDUSTRY_18_CIRCLES,
  INTEREST_18_CIRCLES,
  MAIN_18_CIRCLES,
  STATE_CITIES_MAP,
  CircleCategory,
} from '@/lib/data/main-18-circles'
import { CIRCLES, Circle } from '@/lib/data/circles'
import { ACTIVE_CITIES } from '@/lib/data/site'
import { CircleMembersModal } from '@/components/circle-members-modal'

export function CirclesPageClient({ dynamicCities }: { dynamicCities: string[] }) {
  const cityList = dynamicCities.length > 0 ? dynamicCities : ACTIVE_CITIES

  // Live Database Circles State
  const [allCirclesData, setAllCirclesData] = useState<Circle[]>(CIRCLES)
  const [isLoadingCircles, setIsLoadingCircles] = useState<boolean>(false)

  // Fetch live circles from PostgreSQL database / API on mount
  React.useEffect(() => {
    let isMounted = true
    const fetchLiveCircles = async () => {
      try {
        setIsLoadingCircles(true)
        const res = await fetch('/api/web-circles')
        if (res.ok) {
          const json = await res.json()
          if (json.success && Array.isArray(json.circles) && json.circles.length > 0 && isMounted) {
            setAllCirclesData(json.circles)
          }
        }
      } catch (err) {
        console.warn('Failed to load live database circles, using baseline:', err)
      } finally {
        if (isMounted) setIsLoadingCircles(false)
      }
    }
    fetchLiveCircles()
    return () => {
      isMounted = false
    }
  }, [])

  // Search and filter states for The 18 Circles section
  const [activeCategoryTab, setActiveCategoryTab] = useState<'all' | 'industry' | 'purpose'>('all')
  const [selectedMainCity, setSelectedMainCity] = useState<string>('All Cities')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // State & City Modal Popup for 18 Categories
  const [selectedCategoryForModal, setSelectedCategoryForModal] = useState<CircleCategory | null>(null)
  const [modalState, setModalState] = useState<string>('Gujarat')
  const [modalCity, setModalCity] = useState<string>('Ahmedabad')
  const [interestForm, setInterestForm] = useState({ name: '', phone: '', email: '', company: '' })
  const [interestSubmitted, setInterestSubmitted] = useState(false)

  // Guest Pass Modal State
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
  const [guestSubmitted, setGuestSubmitted] = useState(false)
  const [guestForm, setGuestForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: 'Ahmedabad',
    circleType: 'Industry Circle',
  })

  // Live Scarcity Calculations
  const totalCircles = allCirclesData.length
  const totalCities = cityList.length
  const totalSeatsOpen = useMemo(() => {
    return allCirclesData.reduce((acc, c) => acc + (c.seatsOpen || 0), 0)
  }, [allCirclesData])

  // Filter 18 Categories based on search query & selected city
  const filteredIndustryCategories = useMemo(() => {
    let list = INDUSTRY_18_CIRCLES
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.tagline.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.activeCities.some((ci) => ci.toLowerCase().includes(q)) ||
          isCategoryActiveInCity(c, q)
      )
    }
    return list
  }, [searchQuery, allCirclesData])

  const filteredInterestCategories = useMemo(() => {
    let list = INTEREST_18_CIRCLES
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.tagline.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.activeCities.some((ci) => ci.toLowerCase().includes(q)) ||
          isCategoryActiveInCity(c, q)
      )
    }
    return list
  }, [searchQuery, allCirclesData])

  // Get all active database circles for a specific city
  const getCirclesForCity = (cityName: string): Circle[] => {
    if (!cityName || cityName === 'All Cities') return allCirclesData
    const q = cityName.toLowerCase().trim()
    return allCirclesData.filter(
      (c) =>
        c.cities.some((ci) => ci.toLowerCase().trim() === q || ci.toLowerCase().includes(q)) ||
        c.name.toLowerCase().includes(q)
    )
  }

  // All active circles in the currently selected modal city
  const modalCityCircles = useMemo(() => {
    return getCirclesForCity(modalCity)
  }, [modalCity, allCirclesData])

  // Check if a category is active in a city
  const isCategoryActiveInCity = (category: CircleCategory, cityName: string): boolean => {
    if (category.activeCities.some((c) => c.toLowerCase() === cityName.toLowerCase())) {
      return true
    }
    const cityCircles = getCirclesForCity(cityName)
    const catWords = category.name.toLowerCase().split(/[\s,&]+/).filter((w) => w.length > 3 && w !== 'circle' && w !== 'circles')
    return cityCircles.some((c) => {
      const circleText = (c.name + ' ' + c.focus.join(' ') + ' ' + c.summary).toLowerCase()
      return catWords.some((w) => circleText.includes(w))
    })
  }

  // Find direct category match in city
  const findMatchingCategoryCircleInCity = (category: CircleCategory, cityName: string): Circle | null => {
    const cityCircles = getCirclesForCity(cityName)
    if (cityCircles.length === 0) return null

    // 1. Direct slug match
    const slugMatch = cityCircles.find((c) => c.slug === category.activeSlug)
    if (slugMatch) return slugMatch

    // 2. Keyword match
    const catWords = category.name.toLowerCase().split(/[\s,&]+/).filter((w) => w.length > 3 && w !== 'circle' && w !== 'circles')
    const keywordMatch = cityCircles.find((c) => {
      const circleText = (c.name + ' ' + c.focus.join(' ') + ' ' + c.summary).toLowerCase()
      return catWords.some((w) => circleText.includes(w))
    })
    if (keywordMatch) return keywordMatch

    // 3. First circle in city as fallback
    return cityCircles[0] || null
  }

  // Handle opening modal for a category
  const handleOpenCategoryModal = (cat: CircleCategory) => {
    setSelectedCategoryForModal(cat)
    setInterestSubmitted(false)
    setInterestForm({ name: '', phone: '', email: '', company: '' })

    // If main city is selected and active in this category, use it
    if (selectedMainCity !== 'All Cities' && isCategoryActiveInCity(cat, selectedMainCity)) {
      setModalCity(selectedMainCity)
      // Find state for this city
      for (const [st, cities] of Object.entries(STATE_CITIES_MAP)) {
        if (cities.includes(selectedMainCity)) {
          setModalState(st)
          break
        }
      }
      return
    }

    // Otherwise find first active city in Gujarat or elsewhere
    const gujaratCities = STATE_CITIES_MAP['Gujarat'] || []
    const activeInGujarat = cat.activeCities.find((c) => gujaratCities.includes(c))
    if (activeInGujarat) {
      setModalState('Gujarat')
      setModalCity(activeInGujarat)
    } else if (cat.activeCities.length > 0) {
      for (const [stateName, cities] of Object.entries(STATE_CITIES_MAP)) {
        if (cities.includes(cat.activeCities[0])) {
          setModalState(stateName)
          setModalCity(cat.activeCities[0])
          break
        }
      }
    }
  }

  const handleModalStateChange = (newState: string) => {
    setModalState(newState)
    const cities = STATE_CITIES_MAP[newState] || []
    if (cities.length > 0) {
      if (selectedCategoryForModal) {
        const activeInState = selectedCategoryForModal.activeCities.find((c) => cities.includes(c))
        setModalCity(activeInState || cities[0])
      } else {
        setModalCity(cities[0])
      }
    }
  }

  const handleInterestSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setInterestSubmitted(true)
  }

  // Smooth scroll helper
  const scrollToExplore = (tab?: 'industry' | 'purpose') => {
    if (tab) {
      setActiveCategoryTab(tab)
    }
    const el = document.getElementById('the-18-circles')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleGuestSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setGuestSubmitted(true)
    setTimeout(() => {
      setGuestSubmitted(false)
      setIsGuestModalOpen(false)
    }, 2200)
  }

  // Helper to render colored circle icon badges
  const renderCategoryIcon = (iconName: string, className = 'size-7 sm:size-8 text-white') => {
    switch (iconName) {
      case 'Factory':
        return <Factory className={className} />
      case 'Building2':
        return <Building2 className={className} />
      case 'Laptop':
        return <Laptop className={className} />
      case 'ShieldPlus':
        return <ShieldPlus className={className} />
      case 'GraduationCap':
        return <GraduationCap className={className} />
      case 'Palette':
        return <Palette className={className} />
      case 'HeartHandshake':
        return <HeartHandshake className={className} />
      case 'Layers':
        return <Layers className={className} />
      case 'Leaf':
        return <Leaf className={className} />
      case 'Truck':
        return <Truck className={className} />
      case 'Rocket':
        return <Rocket className={className} />
      case 'TrendingUp':
        return <TrendingUp className={className} />
      case 'Wallet':
        return <Wallet className={className} />
      case 'Globe':
        return <Globe className={className} />
      case 'Store':
        return <Store className={className} />
      case 'Users':
        return <Users className={className} />
      case 'Lightbulb':
        return <Lightbulb className={className} />
      case 'Award':
        return <Award className={className} />
      default:
        return <Layers className={className} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans">
      {/* =========================================================================
          SECTION 1: HERO (Master Full Page Dark Video Banner)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Full Bleed Hero Video Background */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            poster="/images/circles-hero-new.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <Link href="/circles" className="hover:text-white transition-colors">
              Circles
            </Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-white font-semibold">All Circles</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Hero Content */}
            <div className="lg:col-span-8 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>CIRCLES &amp; MASTERMINDS</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  Your Circle.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Your Inner Board.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  A structured Circle of 20–40 curated entrepreneurs. 18 Industry &amp; Goal Circles. A room where introductions become conversations, and conversations become collaboration.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  onClick={() => scrollToExplore()}
                  size="default"
                  className="font-semibold"
                >
                  Find a Circle Near You
                </GalaxyButton>

                <GalaxyButton
                  onClick={() => setIsGuestModalOpen(true)}
                  variant="transparent"
                  size="default"
                  className="font-medium"
                >
                  Visit as a Guest
                </GalaxyButton>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg pt-6 border-t border-white/15">
                {[
                  { icon: Building2, value: totalCircles > 18 ? `${totalCircles}+` : '250+', label: 'Live Circles' },
                  { icon: MapPin, value: totalCities > 12 ? `${totalCities}+` : '45+', label: 'Active Cities' },
                  { icon: Users, value: `${totalSeatsOpen > 0 ? totalSeatsOpen : '350+'}`, label: 'Seats Open' },
                ].map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.label} className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
                      <div className="size-9 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sky-300 shrink-0">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <div className="font-bold text-base sm:text-lg text-white leading-none">{s.value}</div>
                        <div className="text-[10px] text-slate-300 font-medium mt-1 leading-tight">{s.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Cursive Script Highlights */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-2xl sm:text-3xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Different Industries
              </p>
              <p
                className="text-3xl sm:text-4xl text-white leading-tight font-bold"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Same Purpose
              </p>
              <p
                className="text-3xl sm:text-4xl text-sky-400 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Greater Impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: YOUR CIRCLE. YOUR INNER BOARD.
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">YOUR INNER BOARD</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-950 tracking-tight leading-tight">
                Your Circle. Your Inner Board.
              </h2>

              <p className="text-base sm:text-lg font-bold text-[#0062D2] leading-snug">
                Four parts. One purpose. Every Circle, every city, every month.
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                A Circle is not simply a group of entrepreneurs who meet once a month. It is a structured space where entrepreneurs come together to learn, share, build relationships and create collaboration.
              </p>

              <p className="text-base text-slate-700 font-medium leading-relaxed">
                The meeting gives that relationship a rhythm. It gives every Peer:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE] text-center">
                  <span className="text-xs font-bold text-[#0062D2] block">A place to speak</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE] text-center">
                  <span className="text-xs font-bold text-[#0062D2] block">A place to listen</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE] text-center">
                  <span className="text-xs font-bold text-[#0062D2] block">A place to ask</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE] text-center">
                  <span className="text-xs font-bold text-[#0062D2] block">A place to contribute</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE] text-center col-span-2 sm:col-span-2">
                  <span className="text-xs font-bold text-[#0062D2] block">A place to move something forward</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-[#F0F7FF] border border-[#DCEBFE] text-slate-900 shadow-sm overflow-hidden">
                <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-36 h-36 rounded-full border border-dashed border-[#0062D2]/30 pointer-events-none" />
                <div className="absolute top-6 right-6 size-2.5 rounded-full bg-[#0062D2]/40 pointer-events-none" />
                <div className="absolute bottom-6 left-6 size-2 rounded-full bg-[#0062D2]/40 pointer-events-none" />

                <div className="relative z-10">
                  <span className="font-serif text-5xl sm:text-6xl text-[#0062D2] leading-none block mb-2">
                    “
                  </span>
                  <p className="font-serif text-xl sm:text-2xl text-[#0F172A] font-bold leading-snug mb-4">
                    Imagine having a room of entrepreneurs who understand what you are building, what you are struggling with, and what you are trying to achieve.
                  </p>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    Not a collection of contacts. Not a list of names. A group of people who can become part of your entrepreneurial journey.
                  </p>
                  <Link
                    href="/the-idea"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#0052B4] tracking-wider uppercase"
                  >
                    <span>EXPLORE THE IDEA</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              THE MEETING HAS A RHYTHM — 4 PART STRUCTURE
              ========================================================================= */}
          <div className="pt-10 border-t border-slate-100">
            <div className="text-left max-w-3xl mb-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">THE 4-PART EXPERIENCE</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-slate-950 mb-3">
                The meeting has a rhythm
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Every Circle follows a structured four-part experience. The structure creates consistency without taking away the human element. Because when entrepreneurs know that there is a meaningful space for them every month, relationships have the opportunity to deepen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Part 1 */}
              <div className="p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <span className="inline-block text-[11px] font-bold text-[#0062D2] bg-blue-50 px-3 py-1 rounded-full mb-4">
                    PART 01
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    The Circle
                  </h4>
                  <p className="text-xs font-semibold text-[#0062D2] mb-3">
                    Start with the people.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed space-y-2">
                    The meeting begins with the Circle itself. Peers come together, reconnect and share what is happening in their entrepreneurial journey.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    This is not a stage where one person speaks and everyone else watches. It is a room where every Peer matters.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-semibold text-slate-700">
                    Connection comes before collaboration.
                  </span>
                </div>
              </div>

              {/* Part 2 */}
              <div className="p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-4">
                    PART 02
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    Learning
                  </h4>
                  <p className="text-xs font-semibold text-emerald-700 mb-3">
                    Learn from experience, not just information.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every entrepreneur carries experience—from success, difficult decisions, mistakes, and problems that took years to solve. The Circle creates space for that experience to be shared.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    Experiential learning brings real-world perspectives into the room.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-semibold text-slate-700">
                    A good lesson can save years of trial and error.
                  </span>
                </div>
              </div>

              {/* Part 3 */}
              <div className="p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <span className="inline-block text-[11px] font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full mb-4">
                    PART 03
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    Sharing &amp; Collaboration
                  </h4>
                  <p className="text-xs font-semibold text-purple-700 mb-3">
                    Turn relationships into possibilities.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    This is where the Circle moves beyond networking. Peers share what they need, offer what they know, make introductions, explore opportunities, and solve problems together.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    The objective is not to force a transaction—it is to create conditions where collaboration happens naturally.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-semibold text-slate-700">
                    What one needs is what another can provide.
                  </span>
                </div>
              </div>

              {/* Part 4 */}
              <div className="p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <span className="inline-block text-[11px] font-bold text-pink-700 bg-pink-50 px-3 py-1 rounded-full mb-4">
                    PART 04
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    Impact &amp; Recognition
                  </h4>
                  <p className="text-xs font-semibold text-pink-700 mb-3">
                    End by recognising what matters.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Entrepreneurship is not only about what we build for ourselves—it is also about the value we create for others.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    The Circle creates space to recognise contribution, collaboration and impact. When contribution is noticed, people understand that what they give matters.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-semibold text-slate-700">
                    What gets recognised gets remembered.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              THE CIRCLE MINI-CONFERENCE CALLOUT
              ========================================================================= */}
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#061836] text-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-4xl space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
                DEEPER LEARNING FORMAT
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                The Circle Mini-Conference
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                A Circle meeting can also become a deeper learning and collaboration experience through a Circle Mini-Conference.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-xs font-medium text-slate-300">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  • Bring meaningful subjects
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  • Bring relevant experience
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  • Bring entrepreneurs together
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  • Space beyond routine exchange
                </div>
              </div>
              <p className="text-xs text-sky-200 pt-2">
                The Mini-Conference allows the Circle to explore a subject with greater depth while keeping the experience connected to the real challenges entrepreneurs face.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CATEGORY EXCLUSIVITY
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow: — TRUSTED & FOCUSED — */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">TRUSTED & FOCUSED</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-950 tracking-tight leading-tight mb-2">
            Why category exclusivity matters
          </h2>

          <p className="text-lg font-bold text-[#0062D2] mb-3">
            A Circle is designed around meaningful participation.
          </p>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed mb-10">
            When your category is represented by one entrepreneur, three things become possible: you can speak openly, your expertise has a clear place and collaboration becomes more intentional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-start">
              <div className="size-11 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center mb-5">
                <MessageSquare className="size-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                1. You can speak openly about your business.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You are not entering every conversation wondering whether the room contains a direct competitor. You can explain your challenges, ambitions and opportunities with greater confidence.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-start">
              <div className="size-11 rounded-full bg-[#ECFDF5] text-emerald-600 flex items-center justify-center mb-5">
                <Users className="size-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                2. Your expertise has a clear place.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When someone in the Circle needs your category, they know whom to approach. Your presence becomes easier to understand. Your experience becomes easier to remember.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-start">
              <div className="size-11 rounded-full bg-[#FDF2F8] text-pink-600 flex items-center justify-center mb-5">
                <Heart className="size-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                3. Collaboration becomes more intentional.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Instead of competing for the same space inside the room, entrepreneurs can explore how different capabilities can work together. The purpose is not to create separation—it is to create enough trust and clarity for collaboration to happen.
              </p>
            </div>
          </div>

          {/* Full-width Capsule Banner */}
          <div className="p-4 sm:p-5 rounded-2xl sm:rounded-full bg-white border border-[#DCEBFE] shadow-2xs flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="size-10 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center shrink-0">
              <Users className="size-5" />
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              At <strong>20–40 curated entrepreneurs</strong>, a Circle covers a wide spectrum of capabilities — creating enough intimacy for trust and enough breadth for collaboration.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: TWO KINDS OF CIRCLE
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">FIND THE RIGHT FIT</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-950 tracking-tight leading-tight">
                Two ways to find your Circle
              </h2>
            </div>

            <div className="text-right">
              <div
                className="text-[#0062D2] text-2xl sm:text-3xl font-normal leading-tight select-none pointer-events-none"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Different Circles. <br />
                Bigger Possibilities
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F0F7FF] border border-[#DCEBFE] flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="size-12 rounded-full bg-white text-[#0062D2] flex items-center justify-center shadow-2xs mb-6">
                  <Layers className="size-6" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">
                  Industry Circles
                </h3>

                <p className="text-sm font-bold text-[#0062D2] mb-4">
                  A room where nobody needs your business explained to them.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
                  Industry Circles bring entrepreneurs together around shared sector understanding. The structure includes: Manufacturing & Engineering, Real Estate, Technology & IT, Healthcare & Wellness, Education & Skill, Events & Lifestyle, CSR & Impact, Franchise & Licensing, and Sustainable & ESG Business.
                </p>
              </div>

              <button
                onClick={() => scrollToExplore('industry')}
                className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3 text-xs sm:text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 cursor-pointer w-fit shadow-sm"
              >
                <span>Browse Industry Circles</span>
                <ArrowRight className="size-4" />
              </button>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#F0F7FF] border border-[#DCEBFE] flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="size-12 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-2xs mb-6">
                  <Target className="size-6" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">
                  Purpose & Goal Circles
                </h3>

                <p className="text-sm font-bold text-[#0F172A] mb-4">
                  A room connected by ambition rather than industry.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
                  Purpose & Goal Circles bring together entrepreneurs who may come from different sectors but share a meaningful ambition: Global Trade, Startup Founders, SME IPO, Investors, Global Expansion, MSME, Family Business, Young Entrepreneurs, Leadership & Transformation, and Sustainable & ESG Goal.
                </p>
              </div>

              <button
                onClick={() => scrollToExplore('purpose')}
                className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3 text-xs sm:text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 cursor-pointer w-fit shadow-sm"
              >
                <span>Browse Purpose Circles</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Centered Small Capsule */}
          <div className="text-center">
            <div className="inline-block px-5 py-2 rounded-full bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200">
              Most Peers eventually belong to one of each. One for depth. One for perspective.
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHAT MEMBERS ACTIVELY SHARE & GUEST EXPERIENCE & BOUNDARIES
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Part A: What Members Actively Share */}
          <div>
            <div className="text-left max-w-3xl mb-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">PARTICIPATION & RECIPROCITY</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-slate-950 mb-3">
                What members actively share
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A Circle becomes valuable when its members participate. That participation takes many reciprocal forms:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {/* ASK */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="size-10 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center font-bold text-xs mb-4">
                    ASK
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">Bring a Question</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A challenge you are facing, a key decision you are considering, or a complex problem you have not yet solved.
                  </p>
                </div>
              </div>

              {/* GIVE */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="size-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs mb-4">
                    GIVE
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">Share Experience</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Offer an introduction, recommend a trusted resource, and help another Peer think through a situation.
                  </p>
                </div>
              </div>

              {/* LEARN */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="size-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs mb-4">
                    LEARN
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">Listen to Peers</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Discover a different approach and learn from real-world experience you have not yet lived yourself.
                  </p>
                </div>
              </div>

              {/* CONNECT */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="size-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs mb-4">
                    CONNECT
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">Build Bridges</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Introduce people who should know one another, build relationships beyond meetings, and create collaboration.
                  </p>
                </div>
              </div>

              {/* RECOGNISE */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between sm:col-span-2 lg:col-span-1">
                <div>
                  <div className="size-10 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold text-xs mb-4">
                    RECOGNISE
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">Acknowledge Impact</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Notice another Peer’s contribution and celebrate progress. Community becomes stronger when people feel seen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Part B: Guest Experience vs Boundaries (What is Not Allowed) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: What a Guest Experiences (6 cols) */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">GUEST PROTOCOL</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                  What a guest experiences
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  A guest should not feel that they have entered a room where everyone is waiting to sell something. They should experience the culture first:
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F0F7FF] text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0" />
                    <span>See entrepreneurs talking openly without posturing</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F0F7FF] text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0" />
                    <span>Observe how people listen with genuine intent</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F0F7FF] text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0" />
                    <span>Understand how meaningful collaboration happens</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F0F7FF] text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0" />
                    <span>Sense if this is a community where they can contribute and belong</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-semibold text-[#0062D2] italic">
                  A guest is not simply being shown a product. They are being introduced to a culture. That distinction matters.
                </p>
              </div>
            </div>

            {/* Right: What is Not Allowed (6 cols) */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-rose-50/40 border border-rose-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-rose-700">CIRCLE BOUNDARIES</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                  What is not allowed
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  A trusted Circle needs boundaries. The meeting is therefore not designed for:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-slate-700">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-rose-100">
                    <X className="size-3.5 text-rose-500 shrink-0" />
                    <span>Aggressive selling</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-rose-100">
                    <X className="size-3.5 text-rose-500 shrink-0" />
                    <span>Pressure solicitation</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-rose-100">
                    <X className="size-3.5 text-rose-500 shrink-0" />
                    <span>Disrespectful behaviour</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-rose-100">
                    <X className="size-3.5 text-rose-500 shrink-0" />
                    <span>Breaking confidentiality</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-rose-100">
                    <X className="size-3.5 text-rose-500 shrink-0" />
                    <span>Using relationships carelessly</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-rose-100">
                    <X className="size-3.5 text-rose-500 shrink-0" />
                    <span>Treating peers merely as prospects</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-rose-100 sm:col-span-2">
                    <X className="size-3.5 text-rose-500 shrink-0" />
                    <span>Creating an environment where people feel uncomfortable saying no</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-rose-200/60">
                <p className="text-xs font-semibold text-rose-800">
                  The purpose of the Circle is not to extract value from relationships. It is to build relationships that create value.
                </p>
              </div>
            </div>
          </div>

          {/* Part C: The Meeting is Not the Whole Experience */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 space-y-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">CONTINUOUS ENGAGEMENT</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                The meeting is not the whole experience
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The monthly meeting creates the rhythm. But relationships do not stop when the meeting ends. Between meetings, the Circle continues through:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 space-y-2">
                <div className="size-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                  <Lock className="size-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Confidential Forum</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A trusted space for conversations that require discretion, vulnerability and maturity.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 space-y-2">
                <div className="size-9 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-3">
                  <Users className="size-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">One-to-One Connections</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Because some of the most meaningful conversations happen when two entrepreneurs sit together and talk.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 space-y-2">
                <div className="size-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <Laptop className="size-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Unity App</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The digital environment that helps the community remain connected beyond the physical meeting.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 space-y-2">
                <div className="size-9 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-3">
                  <HeartHandshake className="size-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Collaboration</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The real test: when an intro becomes a conversation, an opportunity, and creates enduring value.
                </p>
              </div>
            </div>

            {/* Step Ladder: Meeting -> Relationship -> Trust -> Collaboration -> Contribution -> Impact */}
            <div className="p-6 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-3">
                FROM A MEETING TO A RELATIONSHIP
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
                <div className="p-3 bg-white rounded-xl border border-blue-100">
                  <span className="text-[11px] font-bold text-slate-700 block">Meeting</span>
                  <span className="text-[10px] text-slate-500">Introduces you</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-blue-100">
                  <span className="text-[11px] font-bold text-slate-700 block">Relationship</span>
                  <span className="text-[10px] text-slate-500">Helps understand</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-blue-100">
                  <span className="text-[11px] font-bold text-slate-700 block">Trust</span>
                  <span className="text-[10px] text-slate-500">Allows depend on</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-blue-100">
                  <span className="text-[11px] font-bold text-slate-700 block">Collaboration</span>
                  <span className="text-[10px] text-slate-500">Gives purpose</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-blue-100">
                  <span className="text-[11px] font-bold text-slate-700 block">Contribution</span>
                  <span className="text-[10px] text-slate-500">Gives meaning</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-blue-100">
                  <span className="text-[11px] font-bold text-[#0062D2] block">Impact</span>
                  <span className="text-[10px] text-slate-500">Reason to continue</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-blue-200/50 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-700 gap-2">
                <span>We do not simply ask: <em>&ldquo;Did you attend the meeting?&rdquo;</em></span>
                <span className="font-bold text-[#0062D2]">The deeper question is: &ldquo;What happened because we came together?&rdquo;</span>
              </div>
            </div>
          </div>

          {/* Part D: Every Month, A New Opportunity to Contribute */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0062D2]/10 via-purple-500/10 to-rose-500/10 border border-slate-200/80">
            <div className="max-w-4xl space-y-3">
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Every Month, A New Opportunity to Contribute
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                You may arrive one month needing an answer. The next month, you may have the answer for someone else. One month you may make an introduction. Another month someone may introduce you to the person you needed to meet. One month you may learn. Another month you may teach.
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#0062D2] pt-1">
                That is how community becomes reciprocal: You receive. You contribute. You grow.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6: THE 18 CIRCLES (18 Main Categories Matching Images 2 & 3)
          Part 1: Industry-Specific Circles (9 Categories)
          Part 2: Interest-Specific Circles (9 Categories)
          Clicking any category card opens the Location Selector & Chapter Details Modal!
          ========================================================================= */}
      <section id="the-18-circles" className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="text-left max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">EXPLORE CIRCLES</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-2 text-slate-950">
                The 18 Circles
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Find the Circle where your business belongs. Select any city or category to explore live chapters and seats across India.
              </p>
            </div>

            {/* Filter Controls: Search Box */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              {/* Live Search Box */}
              <div className="relative w-full sm:w-72">
                <Search className="size-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search 18 Circles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 text-xs rounded-full border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0062D2] focus:bg-white transition-all shadow-2xs"
                />
              </div>
            </div>
          </div>

          {/* City Active Indicator Banner if filtered */}
          {selectedMainCity !== 'All Cities' && (
            <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/90 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-full bg-[#0062D2] text-white flex items-center justify-center shadow-2xs shrink-0">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Showing Chapters for {selectedMainCity}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {getCirclesForCity(selectedMainCity).length > 0
                      ? `${getCirclesForCity(selectedMainCity).length} active circle chapter${getCirclesForCity(selectedMainCity).length > 1 ? 's' : ''} established in ${selectedMainCity}.`
                      : `Cohorts currently forming in ${selectedMainCity}. Register interest to be a founding member.`}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMainCity('All Cities')}
                className="text-xs font-semibold text-[#0062D2] hover:underline shrink-0"
              >
                Clear City Filter
              </button>
            </div>
          )}

          {/* Category Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-100">
            <button
              onClick={() => setActiveCategoryTab('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategoryTab === 'all'
                  ? 'bg-[#0062D2] text-white shadow-md shadow-blue-600/20'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              All (18 Circles)
            </button>
            <button
              onClick={() => setActiveCategoryTab('industry')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategoryTab === 'industry'
                  ? 'bg-[#0062D2] text-white shadow-md shadow-blue-600/20'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              Industry-Specific Circles (9)
            </button>
            <button
              onClick={() => setActiveCategoryTab('purpose')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategoryTab === 'purpose'
                  ? 'bg-[#0062D2] text-white shadow-md shadow-blue-600/20'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              Interest-Specific Circles (9)
            </button>
          </div>

          {/* =========================================================================
              PART 1: INDUSTRY-SPECIFIC CIRCLES (Exactly Matching Image 2)
              ========================================================================= */}
          {(activeCategoryTab === 'all' || activeCategoryTab === 'industry') && (
            <div className="mb-14">
              {/* Category Subheader */}
              <div className="flex items-center gap-3 mb-6">
                <div className="size-9 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shadow-2xs">
                  <Briefcase className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Industry-Specific Circles
                  </h3>
                  <p className="text-xs text-slate-500">
                    Depth in your sector. 9 curated industry cohorts for promoters and leaders.
                  </p>
                </div>
              </div>

              {/* 3x3 Grid of Industry Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {filteredIndustryCategories.map((category) => {
                  const isActiveInSelectedCity =
                    selectedMainCity !== 'All Cities' ? isCategoryActiveInCity(category, selectedMainCity) : true

                  return (
                    <div
                      key={category.slug}
                      onClick={() => handleOpenCategoryModal(category)}
                      className="group relative bg-white border border-slate-200/90 hover:border-[#0062D2]/50 rounded-[28px] p-6 sm:p-7 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer min-h-[190px] sm:min-h-[210px]"
                    >
                      {/* Selected City Status Badge on top */}
                      {selectedMainCity !== 'All Cities' && (
                        <span
                          className={`absolute top-4 right-4 text-[10px] font-bold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 ${
                            isActiveInSelectedCity
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}
                        >
                          <span className={`size-1.5 rounded-full ${isActiveInSelectedCity ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`} />
                          {isActiveInSelectedCity ? 'Active' : 'Coming Soon'}
                        </span>
                      )}

                      {/* Centered Circular Icon Badge */}
                      <div
                        className={`size-16 sm:size-18 rounded-full ${category.bgColor} text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {renderCategoryIcon(category.iconName, 'size-8 sm:size-9 text-white')}
                      </div>

                      {/* Category Title */}
                      <h4 className="font-bold text-sm sm:text-base text-slate-800 leading-snug tracking-tight px-1 group-hover:text-[#0062D2] transition-colors">
                        {category.name}
                      </h4>

                      {/* Hover Pill Cue */}
                      <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-[#0062D2] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Select State & City</span>
                        <ArrowRight className="size-3" />
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* =========================================================================
              PART 2: INTEREST-SPECIFIC CIRCLES (Exactly Matching Image 3)
              ========================================================================= */}
          {(activeCategoryTab === 'all' || activeCategoryTab === 'purpose') && (
            <div>
              {/* Category Subheader */}
              <div className="flex items-center gap-3 mb-6">
                <div className="size-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-2xs">
                  <Shapes className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Interest-Specific Circles
                  </h3>
                  <p className="text-xs text-slate-500">
                    Breadth & perspective. 9 growth-stage and purpose-driven cohorts across industries.
                  </p>
                </div>
              </div>

              {/* 3x3 Grid of Interest Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {filteredInterestCategories.map((category) => {
                  const isActiveInSelectedCity =
                    selectedMainCity !== 'All Cities' ? isCategoryActiveInCity(category, selectedMainCity) : true

                  return (
                    <div
                      key={category.slug}
                      onClick={() => handleOpenCategoryModal(category)}
                      className="group relative bg-white border border-slate-200/90 hover:border-[#0062D2]/50 rounded-[28px] p-6 sm:p-7 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer min-h-[190px] sm:min-h-[210px]"
                    >
                      {/* Selected City Status Badge on top */}
                      {selectedMainCity !== 'All Cities' && (
                        <span
                          className={`absolute top-4 right-4 text-[10px] font-bold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 ${
                            isActiveInSelectedCity
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}
                        >
                          <span className={`size-1.5 rounded-full ${isActiveInSelectedCity ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`} />
                          {isActiveInSelectedCity ? 'Active' : 'Coming Soon'}
                        </span>
                      )}

                      {/* Centered Circular Icon Badge */}
                      <div
                        className={`size-16 sm:size-18 rounded-full ${category.bgColor} text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {renderCategoryIcon(category.iconName, 'size-8 sm:size-9 text-white')}
                      </div>

                      {/* Category Title */}
                      <h4 className="font-bold text-sm sm:text-base text-slate-800 leading-snug tracking-tight px-1 group-hover:text-[#0062D2] transition-colors">
                        {category.name}
                      </h4>

                      {/* Hover Pill Cue */}
                      <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-[#0062D2] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Select State & City</span>
                        <ArrowRight className="size-3" />
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: WHAT MAKES A CIRCLE DIFFERENT
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">WHAT MAKES A CIRCLE DIFFERENT</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-slate-950">
              More than meetings. A movement.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-start">
              <div className="size-11 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center mb-5">
                <GraduationCap className="size-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                Monthly Circle Mini-Conferences
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Knowledge sessions, industry panels, case studies and collaboration discussions. Not routine meets.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-start">
              <div className="size-11 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center mb-5">
                <HeartHandshake className="size-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                Trusted Collaborations
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Members actively share requirements, partnerships, opportunities and resources.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-start">
              <div className="size-11 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center mb-5">
                <Users className="size-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                Diverse Perspectives
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Different industries, experiences and markets in one room.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-start">
              <div className="size-11 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center mb-5">
                <Star className="size-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                Real-World Impact
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Businesses grow, markets open, problems get solved, and lives are changed.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CLOSING BANNER
          ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-[#040F24] py-16 sm:py-20 lg:py-24 text-white">
        {/* Deep celestial radial gradients & luminous aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/15 blur-3xl"
        />

        {/* Subtle geometric orbital line art */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35">
          <svg
            viewBox="0 0 760 520"
            fill="none"
            className="h-full w-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-300/30"
            />
            <path
              d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5 8"
              className="text-sky-200/25"
            />
            <path
              d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-200/20"
            />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  YOUR NEXT CIRCLE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.18] tracking-tight text-white">
                <span className="brand-gradient-text">Find your people. Find your next opportunity.</span>
              </h2>

              <p className="text-base sm:text-lg font-medium text-slate-200 max-w-xl">
                Where could the right relationships help you grow—and where could your experience help someone else grow? That is where your Circle begins.
              </p>

              <div className="text-xs text-sky-300 tracking-wider font-semibold">
                20–40 curated entrepreneurs • 18 Industry &amp; Goal Circles • Built around LSR
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <GalaxyButton
                  onClick={() => scrollToExplore()}
                  size="default"
                  className="uppercase tracking-wider font-bold"
                >
                  Find Your Circle
                </GalaxyButton>

                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  variant="transparent"
                  size="default"
                  className="uppercase tracking-wider font-bold"
                >
                  Download the Unity App
                </GalaxyButton>
              </div>

              <div className="pt-2 text-xs text-slate-400">
                Peers are Partners in Business and Friends in Life. Designed in Bharat. Built for the World.
              </div>
            </div>

            {/* Right Script (4 cols) */}
            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-sm"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Circles <br />
                Create <br />
                <span className="text-[#7DD3FC]">Impact</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE LOCATION SELECTOR MODAL (State & City Selection for 18 Categories)
          Displays ALL active circle chapters for the selected city!
          ========================================================================= */}
      {selectedCategoryForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 bg-white text-slate-900 p-6 sm:p-8 shadow-2xl flex flex-col gap-6">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedCategoryForModal(null)}
              className="absolute top-5 right-5 size-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="size-4" />
            </button>

            {/* Header: Category Badge + Title */}
            <div className="flex items-start gap-4 pr-8">
              <div
                className={`size-14 sm:size-16 rounded-2xl ${selectedCategoryForModal.bgColor} text-white flex items-center justify-center shadow-md shrink-0`}
              >
                {renderCategoryIcon(selectedCategoryForModal.iconName, 'size-7 sm:size-8 text-white')}
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#0062D2] mb-1">
                  {selectedCategoryForModal.type === 'industry' ? 'Industry-Specific Circle' : 'Interest-Specific Circle'}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                  {selectedCategoryForModal.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {selectedCategoryForModal.tagline}
                </p>
              </div>
            </div>

            {/* State & City Interactive Selector */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="size-3.5 text-[#0062D2]" />
                <span>Select Your State & City</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* 1. State Selector */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    State
                  </label>
                  <select
                    value={modalState}
                    onChange={(e) => handleModalStateChange(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0062D2] cursor-pointer"
                  >
                    {Object.keys(STATE_CITIES_MAP).map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. City Selector */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    City / Chapter
                  </label>
                  <select
                    value={modalCity}
                    onChange={(e) => setModalCity(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0062D2] cursor-pointer"
                  >
                    {(() => {
                      const cities = STATE_CITIES_MAP[modalState] || []
                      const sorted = [...cities].sort((a, b) => {
                        const countA = getCirclesForCity(a).length
                        const countB = getCirclesForCity(b).length
                        return countB - countA
                      })

                      return sorted.map((ct) => {
                        const count = getCirclesForCity(ct).length
                        const label = count > 0 ? `${ct} (${count} Circle${count > 1 ? 's' : ''})` : `${ct} (Upcoming)`
                        return (
                          <option key={ct} value={ct}>
                            {label}
                          </option>
                        )
                      })
                    })()}
                  </select>
                </div>
              </div>
            </div>

            {/* Dynamic Status Section: ALL ACTIVE CHAPTERS IN CITY vs COMING SOON */}
            {modalCityCircles.length > 0 ? (
              /* Case A: ACTIVE CHAPTERS EXIST IN SELECTED CITY */
              <div className="space-y-4 animate-in fade-in">
                {/* Status Bar */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-emerald-800">
                      {modalCityCircles.length} Active Circle Chapter{modalCityCircles.length > 1 ? 's' : ''} in {modalCity}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-white px-2.5 py-0.5 rounded-full border border-emerald-200 shadow-2xs">
                    Category Exclusivity Applied
                  </span>
                </div>

                {/* Scrollable Container of All Circles for this City */}
                <div className="space-y-3.5 max-h-[380px] overflow-y-auto pr-1">
                  {modalCityCircles.map((circle, idx) => {
                    const isDirectMatch =
                      circle.slug === selectedCategoryForModal.activeSlug ||
                      circle.name.toLowerCase().includes(selectedCategoryForModal.name.toLowerCase().split(' ')[0])

                    return (
                      <div
                        key={circle.slug + idx}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                          isDirectMatch
                            ? 'bg-emerald-50/50 border-emerald-300 ring-1 ring-emerald-400/50 shadow-sm'
                            : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div>
                            {isDirectMatch && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md mb-1.5">
                                ⭐ Primary Category Chapter
                              </span>
                            )}
                            <h4 className="text-base font-bold text-slate-900 leading-snug">
                              {circle.name}
                            </h4>
                          </div>
                          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                            {circle.seatsOpen || 30} Seats Open
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                          {circle.summary || circle.tagline}
                        </p>

                        {/* Details Pills */}
                        <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-700 mb-3.5">
                          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-1.5">
                            <Calendar className="size-3.5 text-[#0062D2] shrink-0" />
                            <span className="truncate">{circle.cadence || 'Monthly · In-person'}</span>
                          </div>
                          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-1.5">
                            <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">1 Seat per Business Category</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2.5">
                          <Link
                            href={`/circles/${circle.slug}?city=${encodeURIComponent(modalCity)}`}
                            className="flex-1 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-4 py-2 text-xs font-bold shadow-2xs transition-all text-center inline-flex items-center justify-center gap-1.5"
                          >
                            <span>View Chapter Details & Apply</span>
                            <ArrowRight className="size-3" />
                          </Link>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedCategoryForModal(null)
                              setIsGuestModalOpen(true)
                            }}
                            className="rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-700 px-4 py-2 text-xs font-bold transition-all shadow-2xs"
                          >
                            Guest Pass
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ) : (
              /* Case B: NO CIRCLES YET IN THIS CITY (COMING SOON) */
              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex flex-col gap-4 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-amber-800 bg-amber-100 border border-amber-300">
                    <Sparkles className="size-3.5 text-amber-600" />
                    Chapter Coming Soon in {modalCity}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-800">
                    Cohort Forming
                  </span>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    Be a Founding Member in {modalCity}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Peers Global is establishing the <strong>{selectedCategoryForModal.name}</strong> cohort in <strong>{modalCity}</strong>. Register your expression of interest below to receive priority founder clearance.
                  </p>
                </div>

                {interestSubmitted ? (
                  <div className="p-4 rounded-xl bg-white border border-amber-300 text-center space-y-1.5">
                    <CheckCircle2 className="size-8 text-emerald-600 mx-auto" />
                    <h5 className="text-sm font-bold text-slate-900">Interest Registered!</h5>
                    <p className="text-xs text-slate-600">
                      Our District Chapter Director for {modalCity} will contact you as the founding cohort convenes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInterestSubmit} className="space-y-3 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={interestForm.name}
                        onChange={(e) => setInterestForm({ ...interestForm, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-amber-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0062D2]"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp"
                        value={interestForm.phone}
                        onChange={(e) => setInterestForm({ ...interestForm, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-amber-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0062D2]"
                      />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Company Name & Your Category (e.g. Apex Engineering)"
                      value={interestForm.company}
                      onChange={(e) => setInterestForm({ ...interestForm, company: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-amber-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0062D2]"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-5 py-2.5 font-bold shadow-sm transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="size-3.5" />
                      <span>Notify Me When {modalCity} Chapter Launches</span>
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Modal Bottom Footer */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Peers Global Governed Circles</span>
              <button
                type="button"
                onClick={() => setSelectedCategoryForModal(null)}
                className="font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* =========================================================================
          INTERACTIVE GUEST PASS MODAL ("Visit as a Guest")
          ========================================================================= */}
      {isGuestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-700 bg-[#050C1A] text-white p-8 shadow-2xl flex flex-col gap-6">
            <button
              onClick={() => setIsGuestModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors"
            >
              <X className="size-5" />
            </button>

            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold text-sky-400 bg-sky-400/10 border border-sky-400/20 w-fit">
                <Users className="size-3.5" />
                GUEST INVITATION PASS
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Visit a Circle Meeting as a Guest
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Experience the 150-minute structured agenda, non-competing promoter roundtable, and category exclusivity firsthand.
              </p>
            </div>

            {guestSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-2">
                <CheckCircle2 className="size-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Guest Request Received!</h4>
                <p className="text-xs text-emerald-200">
                  A Circle Director will contact you within 24 hours to confirm category exclusivity clearance and meeting venue details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleGuestSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Shah"
                    value={guestForm.name}
                    onChange={(e) => setGuestForm({ ...guestForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Business / Company
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Engineering Ltd"
                      value={guestForm.company}
                      onChange={(e) => setGuestForm({ ...guestForm, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98250 XXXXX"
                      value={guestForm.phone}
                      onChange={(e) => setGuestForm({ ...guestForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Target City
                    </label>
                    <select
                      value={guestForm.city}
                      onChange={(e) => setGuestForm({ ...guestForm, city: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-[#0062D2] cursor-pointer"
                    >
                      {cityList.map((c) => (
                        <option key={c} value={c}>
                          {c} Chapter
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Circle Type
                    </label>
                    <select
                      value={guestForm.circleType}
                      onChange={(e) => setGuestForm({ ...guestForm, circleType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-[#0062D2] cursor-pointer"
                    >
                      <option value="Industry Circle">Industry Circle (Depth)</option>
                      <option value="Purpose Circle">Purpose Circle (Breadth)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsGuestModalOpen(false)}
                    className="px-4 py-2 rounded-full text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-6 py-2.5 font-bold shadow-lg shadow-blue-600/30 transition-all inline-flex items-center gap-1.5"
                  >
                    <span>Request Guest Seat</span>
                    <ArrowRight className="size-3.5" />
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

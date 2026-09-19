'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
          SECTION 1: HERO (Signature Fade Video Background Banner)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <Link href="/circles" className="text-slate-600 hover:text-slate-900 transition-colors">
              Circles
            </Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-[#0062D2] font-semibold">All Circles</span>
          </div>

          {/* Top Hero Banner with Smooth Left-Fading Video */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[500px] lg:min-h-[560px] flex items-center">
            
            {/* Media Background Layer (Right ~60% fading into white on the left) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
            >
              {/* Active Video */}
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/circles-hero-new.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover object-center"
              />

              {/* Seamless gradient overlays for the signature misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  Different Industries
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Same Purpose
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Greater Impact
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    PEOPLE • IDEAS • OPPORTUNITIES
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    IMPACT IN EVERY ROOM
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl lg:max-w-2xl flex flex-col items-start">
                
                {/* Eyebrow with blue bar */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-6 bg-[#0062D2]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                    CIRCLES
                  </span>
                </div>

                {/* H1: Circles */}
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  Circles
                </h1>

                {/* Subline */}
                <p className="text-xl sm:text-2xl text-slate-800 font-bold leading-snug mb-3">
                  The room where your business finds the right people.
                </p>

                {/* Supporting Line */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8 max-w-lg">
                  Every Peer belongs to a Circle. It is where relationships begin and where collaboration actually happens.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <button
                    onClick={() => scrollToExplore()}
                    className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Find a Circle Near You</span>
                    <ArrowRight className="size-4" />
                  </button>

                  <button
                    onClick={() => setIsGuestModalOpen(true)}
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white/90 backdrop-blur-sm text-slate-800 px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105 cursor-pointer shadow-2xs"
                  >
                    Visit as a Guest
                  </button>
                </div>

                {/* Live Stat Cards Band (3 Cards Side-by-Side) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg">
                  {/* Stat 1 */}
                  <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                    <div className="size-9 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                      <Building2 className="size-4" />
                    </div>
                    <div>
                      <div className="font-bold text-base sm:text-lg text-[#0F172A] leading-none">
                        {totalCircles > 18 ? `${totalCircles}+` : '250+'}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium mt-1">
                        Circles
                      </div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                    <div className="size-9 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                      <MapPin className="size-4" />
                    </div>
                    <div>
                      <div className="font-bold text-base sm:text-lg text-[#0F172A] leading-none">
                        {totalCities > 12 ? `${totalCities}+` : '45+'}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium mt-1">
                        Cities
                      </div>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                    <div className="size-9 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                      <Users className="size-4" />
                    </div>
                    <div>
                      <div className="font-bold text-base sm:text-lg text-[#0F172A] leading-none">
                        {totalSeatsOpen > 0 ? `${totalSeatsOpen}+` : '120+'}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium mt-1 truncate">
                        Seats open
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHAT A CIRCLE IS
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow: — ABOUT CIRCLES — */}
          <div className="text-left mb-3">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              — ABOUT CIRCLES —
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                What a Circle is
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                A Circle brings together the right entrepreneurs around a common industry, goal, territory or business need.
              </p>

              <p className="text-base sm:text-lg text-slate-800 font-semibold leading-relaxed mb-4">
                20 to 40 curated entrepreneurs, growing toward a stable 40–50. <span className="font-normal text-slate-600">Large enough that every business category is represented and every meeting has real substance. Small enough that the room genuinely knows your business.</span>
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                It is the basic unit of Peers Global and the place where every Peer belongs.
              </p>
            </div>

            {/* Right Quote Box with decorative subtle lines */}
            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-[#F0F7FF] border border-[#DCEBFE] text-slate-900 shadow-sm overflow-hidden">
                {/* Decorative dots / circle */}
                <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-36 h-36 rounded-full border border-dashed border-[#0062D2]/30 pointer-events-none" />
                <div className="absolute top-6 right-6 size-2.5 rounded-full bg-[#0062D2]/40 pointer-events-none" />
                <div className="absolute bottom-6 left-6 size-2 rounded-full bg-[#0062D2]/40 pointer-events-none" />

                <div className="relative z-10">
                  <span className="font-serif text-5xl sm:text-6xl text-[#0062D2] leading-none block mb-2">
                    “
                  </span>
                  <p className="font-serif text-xl sm:text-2xl text-[#0F172A] font-bold leading-snug mb-6">
                    A Circle turns individual success into collective opportunity.
                  </p>
                  <Link
                    href="/the-idea"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#0052B4] tracking-wider uppercase"
                  >
                    <span>PEERS GLOBAL</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
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
          <div className="text-left mb-2">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              — TRUSTED & FOCUSED —
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-2">
            Category exclusivity
          </h2>

          <p className="text-lg font-bold text-[#0062D2] mb-3">
            No competition inside your Circle.
          </p>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed mb-10">
            Each business category is held by one member. If you hold the seat for industrial packaging, you are the only industrial packaging business in that room.
          </p>

          {/* Three Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1 */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-start">
              <div className="size-11 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center mb-5">
                <MessageSquare className="size-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                You can speak openly.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Nobody is studying your pricing or waiting for you to name a client.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-start">
              <div className="size-11 rounded-full bg-[#ECFDF5] text-emerald-600 flex items-center justify-center mb-5">
                <Users className="size-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                You get the full flow.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every requirement in your category comes to you, because there is no one else to send it to.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-start">
              <div className="size-11 rounded-full bg-[#FDF2F8] text-pink-600 flex items-center justify-center mb-5">
                <Heart className="size-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                Giving costs you nothing.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                With no competitor in the room, helping another Peer is straightforward.
              </p>
            </div>
          </div>

          {/* Full-width Capsule Banner */}
          <div className="p-4 sm:p-5 rounded-2xl sm:rounded-full bg-white border border-[#DCEBFE] shadow-2xs flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="size-10 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center shrink-0">
              <Users className="size-5" />
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              At <strong>40–50 members</strong>, a Circle covers a genuinely wide range of categories — which is what makes it possible for the room to solve almost anything between them.
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
              {/* Eyebrow: — FIND THE RIGHT FIT — */}
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                  — FIND THE RIGHT FIT —
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
                Two kinds of Circle
              </h2>
            </div>

            {/* Handwritten Script Top Right */}
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
            {/* Left Card: Industry Circles */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F0F7FF] border border-[#DCEBFE] flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="size-12 rounded-full bg-white text-[#0062D2] flex items-center justify-center shadow-2xs mb-6">
                  <Layers className="size-6" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">
                  Industry Circles
                </h3>

                <p className="text-sm font-bold text-[#0062D2] mb-4">
                  Built around a shared sector.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
                  Manufacturing, real estate, healthcare, technology, professional services and more. Best for depth. In an Industry Circle, the people around you understand your market, your margins, your regulatory pressure and your customer without needing it explained.
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

            {/* Right Card: Purpose Circles */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F0F7FF] border border-[#DCEBFE] flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="size-12 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-2xs mb-6">
                  <Target className="size-6" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">
                  Purpose Circles
                </h3>

                <p className="text-sm font-bold text-[#0F172A] mb-4">
                  Built around a shared goal or stage of business.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
                  Scaling, exporting, succession, first-generation entrepreneurship, women-led business and more. Best for breadth. In a Purpose Circle, the people around you are solving the same problem from twelve different industries, which produces solutions you would never have reached inside your own sector.
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
          SECTION 5: THE TWO-COLUMN MIDDLE SECTION
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: THE RHYTHM (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="text-left mb-2">
                  <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                    — THE RHYTHM —
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-8">
                  Consistent. Structured. High Value.
                </h2>

                <div className="space-y-6 mb-8">
                  {/* Item 1 */}
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                      <Calendar className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A]">
                        12 monthly meetings a year.
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        The same Peers, a fixed schedule, the same four-part agenda.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A]">
                        60+ Collaboration Roundtables
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">across the year.</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A]">
                        150+ new introductions
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">in a typical year.</p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                      <Repeat className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A]">
                        Unlimited collaboration
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">through the Unity App between meetings.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/circle-meeting-experience"
                className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3 text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 w-fit shadow-sm"
              >
                <span>See the Meeting Agenda</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* RIGHT COLUMN: JOIN MORE + LOCAL TO GLOBAL (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-12">
              
              {/* Top: Join more than one Circle */}
              <div>
                <div className="text-left mb-2">
                  <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                    — EXPAND YOUR NETWORK —
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0F172A] tracking-tight leading-tight mb-3">
                  Join more than one Circle
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  Members can join more than one Circle based on industry, territory, goals and business needs.
                </p>

                {/* Soft blue tip card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE] flex items-start gap-3.5 mb-6">
                  <Lightbulb className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Your first Circle is an Industry Circle</strong> and becomes your primary Circle. Most Peers add a goal or purpose Circle alongside it — depth in their sector, perspective from outside it.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => scrollToExplore('industry')}
                    className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-5 py-2.5 text-xs font-semibold inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>Browse by Industry</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                  <button
                    onClick={() => scrollToExplore('purpose')}
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 px-5 py-2.5 text-xs font-semibold shadow-2xs"
                  >
                    <span>Browse by Purpose</span>
                  </button>
                </div>
              </div>

              {/* Bottom: Connected across the world (Local to Global) */}
              <div className="pt-8 border-t border-slate-200">
                <div className="text-left mb-2">
                  <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                    — LOCAL TO GLOBAL —
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0F172A] tracking-tight leading-tight mb-3">
                  Connected across the world
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      Your Circle connects to your city, your district, your state, your country and the wider community.
                    </p>
                    <p className="text-xs sm:text-sm text-[#0F172A] font-bold leading-relaxed mb-3">
                      Engage with city, state, national and international Circles across countries through the Unity App.
                    </p>
                    <p className="text-xs text-slate-500 italic mb-6">
                      A relationship built in one room can open a door two thousand kilometres away.
                    </p>

                    <Link
                      href="/the-territory"
                      className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-6 py-2.5 text-xs font-semibold inline-flex items-center gap-1.5 shadow-2xs"
                    >
                      <span>See the Territory</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>

                  {/* Dotted Map Graphic on Right */}
                  <div className="md:col-span-5 relative flex items-center justify-center p-4">
                    <div className="relative w-full h-36 opacity-75">
                      {/* Dotted World Grid SVG */}
                      <svg viewBox="0 0 300 150" className="w-full h-full text-slate-300 fill-current">
                        <circle cx="40" cy="40" r="2" />
                        <circle cx="60" cy="40" r="2" />
                        <circle cx="80" cy="45" r="2" />
                        <circle cx="50" cy="60" r="2" />
                        <circle cx="70" cy="60" r="2" />
                        <circle cx="90" cy="70" r="2" />
                        <circle cx="150" cy="35" r="2" />
                        <circle cx="170" cy="35" r="2" />
                        <circle cx="190" cy="40" r="2" />
                        <circle cx="160" cy="55" r="2" />
                        <circle cx="180" cy="55" r="2" />
                        <circle cx="210" cy="65" r="2" />
                        <circle cx="230" cy="75" r="2" />
                        <circle cx="250" cy="85" r="2" />
                      </svg>
                      {/* Interactive Location Pins */}
                      <div className="absolute top-8 left-12">
                        <MapPin className="size-5 text-[#0062D2] drop-shadow-md animate-bounce" />
                      </div>
                      <div className="absolute top-12 left-36">
                        <MapPin className="size-4 text-[#0062D2] drop-shadow-md" />
                      </div>
                      <div className="absolute bottom-6 right-16">
                        <MapPin className="size-5 text-[#0062D2] drop-shadow-md" />
                      </div>
                      <div className="absolute top-4 right-8">
                        <MapPin className="size-4 text-[#0062D2] drop-shadow-md" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
              <div className="mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                  — EXPLORE CIRCLES —
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-2">
                The 18 Circles
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Find the Circle where your business belongs. Select any city or category to explore live chapters and seats across India.
              </p>
            </div>

            {/* Filter Controls: City Selector Dropdown + Search Box */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto">
              {/* City Dropdown */}
              <div className="relative w-full sm:w-56">
                <MapPin className="size-3.5 text-[#0062D2] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <select
                  value={selectedMainCity}
                  onChange={(e) => setSelectedMainCity(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 text-xs font-semibold rounded-full border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0062D2] focus:bg-white transition-all shadow-2xs cursor-pointer appearance-none"
                >
                  <option value="All Cities">All Cities ({totalCities}+)</option>
                  {cityList.map((c) => (
                    <option key={c} value={c}>
                      {c} Chapter
                    </option>
                  ))}
                </select>
                <ChevronDown className="size-3.5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Live Search Box */}
              <div className="relative w-full sm:w-64">
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
            <div className="mb-2">
              <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                — WHAT MAKES A CIRCLE DIFFERENT —
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
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
          Dark Navy Background with Blurred Executives Photo & Script Overlay
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#0062D2] py-16 sm:py-20 lg:py-24 text-white">
        {/* Subtle geometric orbital line art in top-right background */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-35 overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 600 600"
            fill="none"
            className="w-full h-full text-white/30"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Inner orbit arc */}
            <path
              d="M 50 450 A 420 420 0 0 1 550 50"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            {/* Outer orbit arc */}
            <path
              d="M 120 520 A 500 500 0 0 1 600 120"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.6"
            />
            {/* Intersecting secondary arc */}
            <path
              d="M 220 580 A 460 460 0 0 1 580 220"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.5"
            />
            {/* Orbital connection line */}
            <line
              x1="280"
              y1="220"
              x2="380"
              y2="120"
              stroke="currentColor"
              strokeWidth="0.8"
              opacity="0.4"
            />
            {/* Glowing node point on the arc */}
            <circle cx="280" cy="220" r="4.5" fill="#7DD3FC" />
            <circle cx="280" cy="220" r="10" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-[1.5px] w-6 bg-white/70" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                  YOUR NEXT CIRCLE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.18] tracking-tight text-white mb-4">
                Find your people. <br />
                Find your next opportunity.
              </h2>

              <p className="text-base sm:text-lg font-medium text-white/95 mb-8">
                Visit a Circle and experience the power of the room.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToExplore()}
                  className="group inline-flex items-center gap-2.5 rounded-lg bg-white px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-[#0062D2] shadow-md transition-all duration-200 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Find a Circle Near You</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => setIsGuestModalOpen(true)}
                  className="inline-flex items-center gap-2.5 rounded-lg border border-white/50 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:border-white active:scale-[0.98] uppercase cursor-pointer"
                >
                  Visit as a Guest
                </button>
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

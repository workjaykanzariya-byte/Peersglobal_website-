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
} from 'lucide-react'
import {
  INDUSTRY_18_CIRCLES,
  INTEREST_18_CIRCLES,
  MAIN_18_CIRCLES,
  CircleCategory,
} from '@/lib/data/main-18-circles'
import { CIRCLES, Circle } from '@/lib/data/circles'
import { ACTIVE_CITIES } from '@/lib/data/site'
import { CircleMembersModal } from '@/components/circle-members-modal'

export function CirclesPageClient({ dynamicCities }: { dynamicCities: string[] }) {
  const cityList = dynamicCities.length > 0 ? dynamicCities : ACTIVE_CITIES

  // Search and filter states for The 18 Circles section
  const [activeCategoryTab, setActiveCategoryTab] = useState<'all' | 'industry' | 'purpose'>('all')
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All Industries')
  const [selectedCity, setSelectedCity] = useState<string>('All Cities')
  const [selectedFormat, setSelectedFormat] = useState<string>('All Formats')
  const [selectedAvailability, setSelectedAvailability] = useState<string>('All Availability')
  const [searchQuery, setSearchQuery] = useState<string>('')

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
  const totalCircles = CIRCLES.length
  const totalCities = cityList.length
  const totalSeatsOpen = useMemo(() => {
    return CIRCLES.reduce((acc, c) => acc + (c.seatsOpen || 0), 0)
  }, [])

  // Filtered Circles for the Grid
  const filteredCircles = useMemo(() => {
    return CIRCLES.filter((circle) => {
      // 1. Tab Filter
      if (activeCategoryTab !== 'all' && circle.type !== activeCategoryTab) {
        return false
      }

      // 2. Industry dropdown
      if (selectedIndustry !== 'All Industries') {
        const matchesIndustry = circle.name.toLowerCase().includes(selectedIndustry.toLowerCase()) ||
          circle.focus.some(f => f.toLowerCase().includes(selectedIndustry.toLowerCase()))
        if (!matchesIndustry) return false
      }

      // 3. City dropdown
      if (selectedCity !== 'All Cities') {
        const matchesCity = circle.cities.some(
          (c) => c.toLowerCase().trim() === selectedCity.toLowerCase().trim()
        )
        if (!matchesCity) return false
      }

      // 4. Availability
      if (selectedAvailability === 'Open Seats' && circle.seatsOpen <= 0) {
        return false
      }
      if (selectedAvailability === 'Waitlist Only' && circle.seatsOpen > 0) {
        return false
      }

      // 5. Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim()
        const matchName = circle.name.toLowerCase().includes(q)
        const matchSummary = circle.summary.toLowerCase().includes(q)
        const matchFocus = circle.focus.some((f) => f.toLowerCase().includes(q))
        const matchCity = circle.cities.some((c) => c.toLowerCase().includes(q))
        if (!matchName && !matchSummary && !matchFocus && !matchCity) return false
      }

      return true
    })
  }, [activeCategoryTab, selectedIndustry, selectedCity, selectedAvailability, searchQuery])

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
                <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg">
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
          Left text, Right Quote Card with geometry
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
          3 Distinct white pill cards + Full-width bottom banner
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
          Top right script: "Different Circles. Bigger Possibilities"
          Two large pale-blue cards side-by-side
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
          Left: The Rhythm (Consistent. Structured. High Value.)
          Right Top: Join more than one Circle (Expand Your Network)
          Right Bottom: Connected across the world (Local to Global with world map)
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
          SECTION 6: THE 18 CIRCLES (Filterable Grid exactly matching reference)
          Category Pills (All / Industry / Purpose)
          Dropdown filters (Industry, City, Meeting Format, Availability, Search input)
          4 Cards per row
          ========================================================================= */}
      <section id="the-18-circles" className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left mb-6">
            {/* Eyebrow: — EXPLORE CIRCLES — */}
            <div className="mb-2">
              <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                — EXPLORE CIRCLES —
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-2">
              The 18 Circles
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Find the Circle where your business belongs.
            </p>
          </div>

          {/* Top Category Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <button
              onClick={() => setActiveCategoryTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategoryTab === 'all'
                  ? 'bg-[#EFF6FF] text-[#0062D2] border border-[#BFDBFE]'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-transparent'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategoryTab('industry')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategoryTab === 'industry'
                  ? 'bg-[#EFF6FF] text-[#0062D2] border border-[#BFDBFE]'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-transparent'
              }`}
            >
              Industry Circles
            </button>
            <button
              onClick={() => setActiveCategoryTab('purpose')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategoryTab === 'purpose'
                  ? 'bg-[#EFF6FF] text-[#0062D2] border border-[#BFDBFE]'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-transparent'
              }`}
            >
              Purpose Circles
            </button>
          </div>

          {/* Dropdown Filters Bar (Industry, City, Meeting Format, Availability, Search input) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
            {/* 1. Industry */}
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#0062D2] cursor-pointer"
            >
              <option value="All Industries">Industry (All)</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Technology">Technology / IT</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Apparel">Fashion & Textile</option>
              <option value="Export">Import / Export</option>
              <option value="Startup">Startup Founders</option>
              <option value="Investor">Investors</option>
            </select>

            {/* 2. City */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#0062D2] cursor-pointer"
            >
              <option value="All Cities">City (All)</option>
              {cityList.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {/* 3. Meeting Format */}
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#0062D2] cursor-pointer"
            >
              <option value="All Formats">Meeting Format (All)</option>
              <option value="In-person">In-person</option>
              <option value="Hybrid">Hybrid</option>
            </select>

            {/* 4. Availability */}
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#0062D2] cursor-pointer"
            >
              <option value="All Availability">Availability (All)</option>
              <option value="Open Seats">Open Seats Available</option>
              <option value="Waitlist Only">Waitlist Only</option>
            </select>

            {/* 5. Search input */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1 relative">
              <Search className="size-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search circles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0062D2]"
              />
            </div>
          </div>

          {/* Cards Grid: 4 per row */}
          {filteredCircles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {filteredCircles.map((circle, index) => {
                const isIndustry = circle.type === 'industry'
                return (
                  <div
                    key={circle.slug}
                    className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-[#0062D2]/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Icon in colored square */}
                      <div
                        className={`size-11 rounded-2xl flex items-center justify-center mb-4 ${
                          index % 4 === 0
                            ? 'bg-blue-50 text-[#0062D2]'
                            : index % 4 === 1
                            ? 'bg-pink-50 text-pink-600'
                            : index % 4 === 2
                            ? 'bg-emerald-50 text-emerald-600'
                            : 'bg-purple-50 text-purple-600'
                        }`}
                      >
                        {index % 4 === 0 && <FileText className="size-5" />}
                        {index % 4 === 1 && <Megaphone className="size-5" />}
                        {index % 4 === 2 && <Leaf className="size-5" />}
                        {index % 4 === 3 && <BarChart3 className="size-5" />}
                      </div>

                      {/* Circle Name */}
                      <h3 className="font-serif text-lg font-bold text-[#0F172A] leading-snug mb-3 group-hover:text-[#0062D2] transition-colors">
                        {circle.name}
                      </h3>

                      {/* Pills: Type & City */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-4">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-[#0062D2]">
                          {isIndustry ? 'Industry' : 'Purpose'}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600">
                          {circle.cities[0] || 'Ahmedabad'}
                        </span>
                      </div>

                      {/* Cadence Format */}
                      <p className="text-xs text-slate-500 mb-4">
                        Monthly · In-person
                      </p>
                    </div>

                    {/* Footer: Availability indicator + Round arrow button */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-semibold">
                        <span
                          className={`size-2 rounded-full ${
                            circle.seatsOpen > 0 ? 'bg-emerald-500' : 'bg-amber-500'
                          }`}
                        />
                        <span className={circle.seatsOpen > 0 ? 'text-slate-700' : 'text-amber-700'}>
                          {circle.seatsOpen > 0
                            ? `${circle.seatsOpen} seats available`
                            : 'Waitlist open'}
                        </span>
                      </div>

                      <Link
                        href={`/circles/${circle.slug}?city=${encodeURIComponent(
                          selectedCity !== 'All Cities' ? selectedCity : circle.cities[0] || 'Ahmedabad'
                        )}`}
                        className="size-8 rounded-full bg-blue-50 text-[#0062D2] hover:bg-[#0062D2] hover:text-white flex items-center justify-center transition-colors"
                      >
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-200 text-center max-w-xl mx-auto mb-12">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                No matching Circles found in {selectedCity}
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Be the founding member to establish this Circle in your city.
              </p>
              <Link
                href="/start-a-circle"
                className="rounded-full bg-[#0062D2] text-white px-6 py-2.5 text-xs font-bold inline-flex items-center gap-2"
              >
                <span>Start a Circle in {selectedCity}</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          )}

          {/* Centered Button: Find Your Circle → */}
          <div className="text-center">
            <button
              onClick={() => {
                setActiveCategoryTab('all')
                setSelectedCity('All Cities')
                setSelectedIndustry('All Industries')
                setSearchQuery('')
              }}
              className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2 shadow-md shadow-blue-600/20 cursor-pointer"
            >
              <span>Find Your Circle</span>
              <ArrowRight className="size-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: WHAT MAKES A CIRCLE DIFFERENT
          Heading: "More than meetings. A movement."
          4 Horizontal Cards with Icons
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
          Royal Blue Theme with Geometric Orbit Line Art & Script Typography
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

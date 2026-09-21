'use client'

import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  ArrowRight,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  MessageSquare,
  Users,
  Building2,
  Sparkles,
  HelpCircle,
  Briefcase,
  Megaphone,
  TrendingUp,
  LifeBuoy,
  FileText,
  CheckCircle2,
  Landmark,
  Copy,
  Check,
  ExternalLink,
  Shield,
  Headphones,
  User,
  Globe,
} from 'lucide-react'

const MAIN_CATEGORIES = [
  {
    id: 'membership',
    name: 'Membership',
    desc: 'Questions about joining, subscriptions or Circles. Most of this is answered in the app or on the Member FAQ.',
    link: '/faqs',
    linkText: 'See Member FAQ',
    icon: Users,
    routingTarget: 'membership@peersglobal.com',
  },
  {
    id: 'leadership',
    name: 'Leadership',
    desc: 'Founding a Circle, or taking a leadership role as Circle Director, Industry Director or Executive Director.',
    link: '/leadership/apply',
    linkText: 'Apply to Lead',
    icon: Landmark,
    routingTarget: 'leadership@peersglobal.com',
  },
  {
    id: 'partnerships',
    name: 'Partnerships',
    desc: 'Organisations, chambers of commerce, industry bodies and associations wanting to collaborate with Peers Global.',
    link: '#message-form',
    linkText: 'Partner Enquiry',
    icon: Building2,
    routingTarget: 'partners@peersglobal.com',
  },
  {
    id: 'sponsorship',
    name: 'Sponsorship',
    desc: 'Sponsoring upcoming regional conclaves, masterclasses, business awards or the annual flagship summit.',
    link: '#message-form',
    linkText: 'Sponsor Enquiry',
    icon: Sparkles,
    routingTarget: 'sponsorship@peersglobal.com',
  },
  {
    id: 'media',
    name: 'Media',
    desc: 'Interviews with Dr. Pravin Parmar, press releases, media coverage and official press commentary.',
    link: '#message-form',
    linkText: 'Press Office',
    icon: Megaphone,
    routingTarget: 'media@peersglobal.com',
  },
  {
    id: 'investors',
    name: 'Investors',
    desc: 'Institutional, strategic and ecosystem investment discussions for collaborative infrastructure.',
    link: '#message-form',
    linkText: 'Investor Relations',
    icon: TrendingUp,
    routingTarget: 'investors@peersglobal.com',
  },
]

const SUPPORT_CATEGORY = {
  id: 'support',
  name: 'Support',
  desc: 'Technical issues with the Unity App, account verification, billing or subscription enquiries.',
  link: '#message-form',
  linkText: 'Contact Support',
  icon: Headphones,
  routingTarget: 'support@peersglobal.com',
}

const ROUTE_OPTIONS = [
  'Membership',
  'Leadership',
  'Partnership',
  'Sponsorship',
  'Media',
  'Investors',
  'Support',
  'Something else',
]

function ContactPageInner() {
  const searchParams = useSearchParams()
  const [selectedTopic, setSelectedTopic] = useState('Membership')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [heroVideo, setHeroVideo] = useState('/videos/homepage-hero-bg.mp4')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    country: 'India',
    organisation: '',
    message: '',
  })

  useEffect(() => {
    const loadVideo = () => {
      try {
        const saved = localStorage.getItem('peers_admin_page_media')
        if (saved) {
          const items = JSON.parse(saved)
          const target = items.find(
            (i: any) =>
              (i.pageSlug === '/contact' || i.pageId === 'contact' || i.pageName === 'Contact Page' || i.pageSlug === '/' || i.pageName === 'Home Page') &&
              i.isActive &&
              i.mediaUrl
          )
          if (target && target.mediaUrl) {
            setHeroVideo(target.mediaUrl)
          }
        }
      } catch (err) {}
    }
    loadVideo()
    window.addEventListener('storage', loadVideo)
    window.addEventListener('peers_media_updated', loadVideo)
    return () => {
      window.removeEventListener('storage', loadVideo)
      window.removeEventListener('peers_media_updated', loadVideo)
    }
  }, [])

  useEffect(() => {
    const intent = searchParams.get('intent')
    if (intent) {
      const lower = intent.toLowerCase()
      if (lower.includes('member')) setSelectedTopic('Membership')
      else if (lower.includes('lead')) setSelectedTopic('Leadership')
      else if (lower.includes('partner')) setSelectedTopic('Partnership')
      else if (lower.includes('sponsor')) setSelectedTopic('Sponsorship')
      else if (lower.includes('media')) setSelectedTopic('Media')
      else if (lower.includes('invest')) setSelectedTopic('Investors')
      else if (lower.includes('support')) setSelectedTopic('Support')
    }
  }, [searchParams])

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#FDFDFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-[#1E4ED8]">
      {/* ─── Top Breadcrumb Navigation ─── */}
      <div className="border-b border-slate-200/70 bg-white/85 backdrop-blur-md sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#1E4ED8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500">About</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Contact</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-medium text-slate-500">
            <span className="inline-block size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Routing Desks: Active &amp; Monitored</span>
          </div>
        </div>
      </div>

      {/* ─── Hero Section: Homepage-Style Unified Master Banner Card ─── */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-8 sm:gap-10">
          
          {/* Unified Master Hero Card (Matching Home Page Who We Are Hero Card) */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-white border border-slate-200/80 shadow-sm min-h-[480px] lg:min-h-[520px] flex items-center">
            
            {/* Right Media Background Layer (Fading into white on the left with live looping video) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
            >
              {/* High Definition Looping Background Video */}
              <video
                key={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="size-full object-cover object-center"
              >
                <source src={heroVideo} type="video/mp4" />
                <source src="/videos/homepage-hero-bg.mp4" type="video/mp4" />
                <source src="/videos/hero-background.mp4" type="video/mp4" />
              </video>

              {/* Seamless gradient overlays for the signature misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/80 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography with Drop Shadow */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-lg sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  Better Communication
                </p>
                <p className="text-xl sm:text-3xl text-white font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  A Brighter Tomorrow
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    DIRECT DESK ROUTING
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    GUARANTEED 48H SLA
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area (Overlaid on the crisp white side) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col gap-5 sm:gap-6">
                
                {/* Eyebrow */}
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-6 bg-[#1E4ED8]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E4ED8]">
                    OFFICIAL CONTACT &amp; GOVERNANCE
                  </span>
                </div>

                {/* Main Heading & Subheading in exact homepage serif hierarchy */}
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-normal tracking-tight text-slate-900 leading-[1.18]">
                  Contact <span className="italic text-[#1E4ED8]">Us.</span>
                  <span className="text-lg sm:text-xl lg:text-2xl text-slate-700 italic font-normal block mt-1.5 leading-snug">
                    Tell us what you need and it goes to the right person.
                  </span>
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-lg font-normal">
                  We reject the single generic inbox. Every enquiry is routed directly to the appropriate team leader with a guaranteed response within two working days.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-1">
                  {/* Download Unity App with Peers Global Logo Color Matching Glow & Gradient Hover */}
                  <div className="relative group/unity-btn">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#E53935] via-[#3B82F6] to-[#1E4ED8] opacity-0 blur-md transition-all duration-500 group-hover/unity-btn:opacity-80 group-hover/unity-btn:blur-lg" />
                    
                    <Link
                      href="/unity"
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#1E4ED8] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(30,78,216,0.30)] transition-all duration-200 hover:bg-[#1a42c0] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(30,78,216,0.40)] active:scale-[0.97]"
                    >
                      <span>Download Unity App</span>
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                    </Link>
                  </div>

                  <a
                    href="#message-form"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-xs transition-all duration-200 hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-[2px] active:scale-[0.98]"
                  >
                    <Send className="size-4 text-[#1E4ED8]" />
                    <span>Send Direct Message</span>
                  </a>
                </div>

                {/* 3 Highlights matching Homepage style */}
                <div className="mt-2 grid grid-cols-3 gap-4 sm:gap-6 border-t border-slate-200/80 pt-6">
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">&lt; 48h</p>
                    <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">Guaranteed SLA</p>
                    <p className="text-[11px] text-slate-400 font-medium">Direct Routing</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">7</p>
                    <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">Dedicated Desks</p>
                    <p className="text-[11px] text-slate-400 font-medium">Domain Focused</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">100%</p>
                    <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">Human Response</p>
                    <p className="text-[11px] text-slate-400 font-medium">No Generic Bots</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ─── Floating Bottom Banner: Already a Peer? (Exact match to Home & Reference) ─── */}
          <div className="rounded-2xl sm:rounded-[28px] bg-white border border-slate-200/80 shadow-sm p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 transition-all duration-300 hover:shadow-md hover:border-blue-200">
            <div className="flex items-center gap-4 text-left w-full sm:w-auto">
              <div className="size-12 sm:size-14 rounded-2xl bg-blue-50 border border-blue-100/80 flex items-center justify-center text-[#1E4ED8] shrink-0 shadow-2xs">
                <Users className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h2 className="font-serif text-base sm:text-lg font-bold text-[#061836]">
                  Already a Peer?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  Ask inside the Unity App. A real person answers, and it is faster than anything here.
                </p>
              </div>
            </div>

            <Link
              href="/unity"
              className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1E4ED8] text-white text-xs sm:text-sm font-semibold hover:bg-[#1a42c0] transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <span>Open Unity App</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ─── Section 2: Dedicated Desks & Category Routing Grid ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F6FE]/70 via-[#F8FAFD] to-[#FFFFFF] py-16 sm:py-20 lg:py-24 border-b border-slate-200/80">
        {/* Soft Ambient Radial Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-10 -right-20 h-[450px] w-[450px] rounded-full bg-blue-300/15 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-10 -left-20 h-[350px] w-[350px] rounded-full bg-sky-200/20 blur-[100px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="h-0.5 w-6 bg-[#1E4ED8]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E4ED8]">
                DEDICATED DESKS
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#061836] tracking-tight leading-[1.15]">
              What are you contacting us about?
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Select an area below to see FAQs, applications, or click to populate the message router.
            </p>
          </div>

          {/* Cards Grid: 6 Main Cards (3 Columns) + 1 Wide Support Card */}
          <div className="space-y-6 sm:space-y-7">
            
            {/* Top 6 Cards in 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {MAIN_CATEGORIES.map((cat) => {
                const Icon = cat.icon
                const isSelected = selectedTopic === cat.name
                return (
                  <div
                    key={cat.id}
                    onClick={() => {
                      setSelectedTopic(cat.name)
                      const el = document.getElementById('message-form')
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`group relative cursor-pointer p-7 sm:p-8 rounded-2xl sm:rounded-[24px] transition-all duration-300 border flex flex-col justify-between h-full ${
                      isSelected
                        ? 'bg-gradient-to-b from-blue-50/60 to-white border-[#1E4ED8] shadow-[0_12px_32px_rgba(30,78,216,0.14)] ring-2 ring-[#1E4ED8]/30'
                        : 'bg-white border-blue-100/90 shadow-[0_4px_20px_rgba(30,78,216,0.04)] hover:border-blue-300 hover:shadow-[0_14px_34px_rgba(30,78,216,0.10)] hover:-translate-y-1'
                    }`}
                  >
                    <div>
                      {/* Icon Box */}
                      <div className="size-11 sm:size-12 rounded-xl sm:rounded-2xl bg-[#EFF6FF] border border-blue-100/90 flex items-center justify-center text-[#1E4ED8] mb-5 group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#061836] group-hover:text-[#1E4ED8] transition-colors leading-tight">
                        {cat.name}
                      </h3>

                      {/* Direct Route Monospace */}
                      <p className="mt-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#1E4ED8]">
                        DIRECT ROUTE: {cat.routingTarget.toUpperCase()}
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {cat.desc}
                      </p>
                    </div>

                    {/* Bottom CTA Link */}
                    <div className="pt-5 mt-5 border-t border-slate-100/90 flex items-center justify-between">
                      {cat.link.startsWith('/') ? (
                        <Link
                          href={cat.link}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E4ED8] group-hover:text-[#1a42c0] transition-colors"
                        >
                          {cat.linkText} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E4ED8] group-hover:text-[#1a42c0] transition-colors">
                          {cat.linkText} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Bottom 7th Card: Support (Wide Full-Width Card spanning all 3 columns) */}
            <div
              onClick={() => {
                setSelectedTopic(SUPPORT_CATEGORY.name)
                const el = document.getElementById('message-form')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className={`group relative overflow-hidden cursor-pointer p-7 sm:p-8 sm:py-9 rounded-2xl sm:rounded-[24px] transition-all duration-300 border flex flex-col md:flex-row md:items-center md:justify-between gap-6 ${
                selectedTopic === SUPPORT_CATEGORY.name
                  ? 'bg-gradient-to-b from-blue-50/60 to-white border-[#1E4ED8] shadow-[0_12px_32px_rgba(30,78,216,0.14)] ring-2 ring-[#1E4ED8]/30'
                  : 'bg-white border-blue-100/90 shadow-[0_4px_20px_rgba(30,78,216,0.04)] hover:border-blue-300 hover:shadow-[0_14px_34px_rgba(30,78,216,0.10)] hover:-translate-y-0.5'
              }`}
            >
              {/* Left Side Content */}
              <div className="max-w-2xl z-10">
                <div className="size-11 sm:size-12 rounded-xl sm:rounded-2xl bg-[#EFF6FF] border border-blue-100/90 flex items-center justify-center text-[#1E4ED8] mb-4 group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                  <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#061836] group-hover:text-[#1E4ED8] transition-colors leading-tight">
                  {SUPPORT_CATEGORY.name}
                </h3>

                <p className="mt-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#1E4ED8]">
                  DIRECT ROUTE: {SUPPORT_CATEGORY.routingTarget.toUpperCase()}
                </p>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {SUPPORT_CATEGORY.desc}
                </p>

                <div className="pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E4ED8] group-hover:text-[#1a42c0] transition-colors">
                    {SUPPORT_CATEGORY.linkText} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>

              {/* Right Side: Subtle Dotted Globe Graphic & Script Typography matching reference */}
              <div className="relative shrink-0 hidden md:flex flex-col items-end justify-center select-none pointer-events-none pr-4 lg:pr-8">
                {/* Globe Watermark background */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-15 pointer-events-none">
                  <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#1E4ED8]" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    <ellipse cx="100" cy="100" rx="80" ry="35" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
                    <ellipse cx="100" cy="100" rx="40" ry="80" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>

                {/* Script Typography matching reference */}
                <div className="relative z-10 text-right drop-shadow-xs">
                  <p className="text-xl sm:text-2xl text-slate-700 leading-tight font-normal" style={{ fontFamily: 'var(--font-script)' }}>
                    People
                  </p>
                  <p className="text-xl sm:text-2xl text-slate-700 leading-tight font-normal mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                    Ideas
                  </p>
                  <p className="text-xl sm:text-2xl text-slate-700 leading-tight font-normal mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                    Partnerships
                  </p>
                  <p className="text-2xl sm:text-3xl text-[#1E4ED8] leading-tight font-semibold mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                    Impact
                  </p>
                  <div className="w-16 h-0.5 bg-[#1E4ED8] rounded-full ml-auto mt-1" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Section 3: Direct Routing Engine (Homepage-Matching Split Layout) ─── */}
      <section id="message-form" className="relative py-16 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-[#F8FAFD] via-white to-[#F2F6FE]/60 border-b border-slate-200/80">
        {/* Soft Ambient Radial Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[130px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-10 -right-24 h-[450px] w-[450px] rounded-full bg-indigo-300/10 blur-[120px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Direct Routing Authority & SLAs (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
              
              {/* Eyebrow & Main Title */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-6 bg-[#1E4ED8]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E4ED8]">
                    DIRECT ROUTING ENGINE
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#061836] tracking-tight leading-[1.15]">
                  Send Us a <span className="italic text-[#1E4ED8]">Direct Message.</span>
                </h2>
                
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  We reject the single generic inbox. Select your exact domain and your enquiry routes directly to the designated leadership desk with guaranteed acknowledgment.
                </p>
              </div>

              {/* Guaranteed SLA Assurance Card */}
              <div className="rounded-2xl sm:rounded-[24px] border border-blue-100 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30 p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-blue-100/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-[#1E4ED8] text-white flex items-center justify-center shadow-sm">
                      <Clock className="size-5" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase font-bold tracking-wider text-[#1E4ED8]">
                        GUARANTEED SLA
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        Response Within 48 Hours
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold uppercase tracking-wider">
                    Active SLA
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#1E4ED8] shrink-0 mt-0.5" />
                    <span><strong>Direct to Decision Makers:</strong> No generic bot screening or automated email blackholes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#1E4ED8] shrink-0 mt-0.5" />
                    <span><strong>Time-Stamped Routing:</strong> Instant delivery confirmation and ticket reference.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#1E4ED8] shrink-0 mt-0.5" />
                    <span><strong>Executive Oversight:</strong> Monitored directly by the Director of Operations.</span>
                  </li>
                </ul>
              </div>

              {/* Direct Contacts Fast-Box */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-3.5">
                <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                  Immediate Phone Lines
                </p>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-blue-50 text-[#1E4ED8] flex items-center justify-center border border-blue-100 shrink-0">
                    <Phone className="size-4 text-[#1E4ED8]" />
                  </div>
                  <div>
                    <a href="tel:+919227122800" className="text-sm font-bold text-slate-900 hover:text-[#1E4ED8] transition-colors">
                      +91 92271 22800
                    </a>
                    <span className="text-slate-400 mx-1.5">/</span>
                    <a href="tel:+919316120831" className="text-sm font-bold text-slate-900 hover:text-[#1E4ED8] transition-colors">
                      93161 20831
                    </a>
                  </div>
                </div>
              </div>

              {/* Founder Quote Card */}
              <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-slate-900 text-white p-6 shadow-sm">
                <p className="text-xs sm:text-[13px] italic text-slate-200 leading-relaxed font-normal">
                  &ldquo;In collaboration, responsiveness is the first measure of trust. We treat every incoming message as an invitation to create lasting value.&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-between pt-3 border-t border-slate-800 text-xs">
                  <span className="font-bold text-white">Dr. Pravin Parmar</span>
                  <span className="text-cyan-400 font-mono text-[11px]">Founder, Peers Global</span>
                </div>
              </div>

            </div>

            {/* Right Column: Form Container Card (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-7 sm:p-10 lg:p-12 rounded-2xl sm:rounded-[32px] bg-white border border-slate-200/90 shadow-[0_16px_45px_rgba(0,0,0,0.06)]">
                
                {/* Form Header */}
                <div className="border-b border-slate-100 pb-6 mb-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                      Direct Enquiry Form
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                      Choose domain to route to the appropriate leadership desk.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-mono font-bold text-[#1E4ED8]">
                    <span className="size-2 rounded-full bg-[#1E4ED8] animate-pulse" />
                    <span>{selectedTopic} Desk</span>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="p-8 sm:p-12 rounded-3xl bg-blue-50/70 border border-blue-200 text-center space-y-5 animate-in fade-in zoom-in-95 duration-500">
                    <div className="size-16 rounded-full bg-[#1E4ED8] text-white flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#061836]">Message Transmitted</h3>
                    <p className="text-slate-700 max-w-lg mx-auto text-sm sm:text-base leading-relaxed font-normal">
                      Thank you, <strong>{formData.fullName || 'Peer'}</strong>. Your enquiry regarding{' '}
                      <span className="font-bold text-[#1E4ED8]">{selectedTopic}</span> has been routed to our leadership desk.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-2xs text-xs font-mono font-bold text-[#1E4ED8] uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5" />
                      Guaranteed response SLA: Within two working days
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({
                            fullName: '',
                            email: '',
                            phone: '',
                            city: '',
                            country: 'India',
                            organisation: '',
                            message: '',
                          })
                        }}
                        className="px-8 py-3.5 rounded-full bg-[#1E4ED8] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1a42c0] transition-colors shadow-md cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
                    {/* Topic selector pills */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5">
                        Domain / Enquiry Type <span className="text-[#1E4ED8]">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {ROUTE_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setSelectedTopic(opt)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                              selectedTopic === opt
                                ? 'bg-[#1E4ED8] text-white shadow-md shadow-blue-600/25 scale-[1.02]'
                                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Form fields with icons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                          Full Name <span className="text-[#1E4ED8]">*</span>
                        </label>
                        <div className="relative flex items-center">
                          <User className="absolute left-3.5 size-4 text-slate-400 pointer-events-none" />
                          <input
                            type="text"
                            required
                            placeholder="Your full name"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]/20 focus:border-[#1E4ED8] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                          Email Address <span className="text-[#1E4ED8]">*</span>
                        </label>
                        <div className="relative flex items-center">
                          <Mail className="absolute left-3.5 size-4 text-slate-400 pointer-events-none" />
                          <input
                            type="email"
                            required
                            placeholder="your.email@business.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]/20 focus:border-[#1E4ED8] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                          Mobile Number <span className="text-[#1E4ED8]">*</span>
                        </label>
                        <div className="relative flex items-center">
                          <Phone className="absolute left-3.5 size-4 text-slate-400 pointer-events-none" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]/20 focus:border-[#1E4ED8] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                          City <span className="text-[#1E4ED8]">*</span>
                        </label>
                        <div className="relative flex items-center">
                          <MapPin className="absolute left-3.5 size-4 text-slate-400 pointer-events-none" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Ahmedabad, Mumbai, Surat"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]/20 focus:border-[#1E4ED8] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                          Country <span className="text-[#1E4ED8]">*</span>
                        </label>
                        <div className="relative flex items-center">
                          <Globe className="absolute left-3.5 size-4 text-slate-400 pointer-events-none" />
                          <input
                            type="text"
                            required
                            placeholder="India"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]/20 focus:border-[#1E4ED8] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                          Organisation (Optional)
                        </label>
                        <div className="relative flex items-center">
                          <Building2 className="absolute left-3.5 size-4 text-slate-400 pointer-events-none" />
                          <input
                            type="text"
                            placeholder="Company or Enterprise name"
                            value={formData.organisation}
                            onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]/20 focus:border-[#1E4ED8] focus:bg-white transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                        Your Message <span className="text-[#1E4ED8]">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          rows={4}
                          required
                          placeholder="Tell us what you need in detail..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]/20 focus:border-[#1E4ED8] focus:bg-white transition-all resize-none"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                      <div className="relative group/submit-btn w-full sm:w-auto">
                        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#E53935] via-[#3B82F6] to-[#1E4ED8] opacity-0 blur-md transition-all duration-500 group-hover/submit-btn:opacity-80 group-hover/submit-btn:blur-lg" />
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-3.5 rounded-full bg-[#1E4ED8] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1a42c0] transition-all shadow-[0_4px_16px_rgba(30,78,216,0.3)] hover:shadow-[0_8px_24px_rgba(30,78,216,0.4)] disabled:opacity-50 active:scale-[0.98] cursor-pointer"
                        >
                          <span>{isSubmitting ? 'Routing message...' : 'SEND DIRECT MESSAGE'}</span>
                          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                        </button>
                      </div>

                      <p className="text-xs font-semibold text-slate-600 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#1E4ED8]" />
                        Guaranteed response within 48h.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Section 4: Corporate Information & Statutory Details ─── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Entity & Registered Office */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#1E4ED8]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E4ED8]">
                  Corporate Entity
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#061836] tracking-tight leading-[1.18]">
                Peers Global Business Media Private Limited
              </h2>
              
              <div className="space-y-5 text-sm text-slate-700 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <MapPin className="w-5 h-5 text-[#1E4ED8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold mb-1">Registered Office</strong>
                    <p className="text-slate-600 leading-relaxed">
                      405, 4th Floor, Shivalik Shilp, Iscon Cross Road, S.G. Highway, Ahmedabad, Gujarat 380015, India
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <Mail className="w-5 h-5 text-[#1E4ED8] shrink-0" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-slate-500 font-semibold">Corporate Email</span>
                      <a href="mailto:hello@peersglobal.com" className="text-slate-900 font-bold hover:text-[#1E4ED8] transition-colors">
                        hello@peersglobal.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <Phone className="w-5 h-5 text-[#1E4ED8] shrink-0" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-slate-500 font-semibold">Phone Lines</span>
                      <div className="font-bold text-slate-900 text-xs">
                        <a href="tel:+919227122800" className="hover:text-[#1E4ED8] transition-colors">+91 92271 22800</a>
                        <span className="text-slate-400 mx-1">/</span>
                        <a href="tel:+919316120831" className="hover:text-[#1E4ED8] transition-colors">93161 20831</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* GSTIN & CIN Copy Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-between">
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-bold">GST Registration</span>
                      <span className="font-mono text-xs font-bold text-slate-900 mt-0.5 block">24AANCP4546L1ZY</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('24AANCP4546L1ZY', 'gst')}
                      className="p-2 rounded-xl bg-white border border-blue-200 text-[#1E4ED8] hover:bg-blue-50 transition-colors cursor-pointer"
                      title="Copy GSTIN"
                    >
                      {copiedKey === 'gst' ? <Check className="size-4 text-emerald-600" /> : <Copy className="size-4" />}
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-between">
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-bold">Corporate Identity (CIN)</span>
                      <span className="font-mono text-xs font-bold text-slate-900 mt-0.5 block">U22219GJ2022PTC137646</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('U22219GJ2022PTC137646', 'cin')}
                      className="p-2 rounded-xl bg-white border border-blue-200 text-[#1E4ED8] hover:bg-blue-50 transition-colors cursor-pointer"
                      title="Copy CIN"
                    >
                      {copiedKey === 'cin' ? <Check className="size-4 text-emerald-600" /> : <Copy className="size-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Grievance Officer & Official Handles */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Grievance Officer Box */}
              <div className="p-7 rounded-[28px] bg-gradient-to-b from-blue-50/70 to-white border border-blue-200/80 space-y-4 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="size-9 rounded-xl bg-blue-100 text-[#1E4ED8] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#061836]">
                    Grievance Officer (Indian IT Rules)
                  </h3>
                </div>
                
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  In accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the contact details of the Grievance Officer are published below:
                </p>

                <div className="space-y-2 text-xs text-slate-800 bg-white p-4 rounded-2xl border border-blue-100 shadow-2xs">
                  <p><strong>Officer Name:</strong> Dr. Pravin Parmar</p>
                  <p><strong>Designation:</strong> Founder &amp; Grievance Officer</p>
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:grievance@peersglobal.com" className="text-[#1E4ED8] font-semibold underline">
                      grievance@peersglobal.com
                    </a>
                  </p>
                  <p><strong>Address:</strong> 405, Shivalik Shilp, Iscon Cross Road, S.G. Highway, Ahmedabad, Gujarat 380015</p>
                  <p className="text-emerald-700 font-semibold pt-1 border-t border-slate-100">
                    <strong>Resolution SLA:</strong> Acknowledged within 24 hours, resolved within 15 days.
                  </p>
                </div>
              </div>

              {/* Official Social Media Channels */}
              <div className="p-7 rounded-[28px] bg-slate-50 border border-slate-200/80 space-y-4">
                <h3 className="font-serif text-base font-bold text-[#061836]">
                  Follow Official Handles
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'LinkedIn', url: 'https://linkedin.com/company/peersglobal' },
                    { name: 'Instagram', url: 'https://instagram.com/peersglobal' },
                    { name: 'Facebook', url: 'https://facebook.com/peersglobal' },
                    { name: 'YouTube', url: 'https://youtube.com/@peersglobal' },
                    { name: 'X (Twitter)', url: 'https://x.com/peersglobal' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#1E4ED8] hover:border-blue-200 transition-all shadow-2xs"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
                <p className="text-xs text-slate-500 italic">
                  These are our only official accounts. We do not contact entrepreneurs through any other channel.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── Section 5: Closing CTA Banner (Matching Site Shell & Home Hero) ─── */}
      <section className="relative bg-[#0062D2] text-white py-24 md:py-32 overflow-hidden">
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight leading-[1.15]">
              Build Your Business. <br className="hidden sm:inline" />
              Build Your Relationships. <br className="hidden sm:inline" />
              Build Your Circle.
            </h2>
            <p className="text-base sm:text-lg text-white/90 font-normal max-w-xl mx-auto leading-relaxed">
              Ready to meet your peers? Download the Unity App and request your verified membership seat.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0062D2] hover:bg-slate-100 text-sm font-bold transition-all shadow-lg hover:shadow-xl uppercase tracking-wider active:scale-[0.98]"
            >
              <span>Download Unity App</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export function ContactPageClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ContactPageInner />
    </Suspense>
  )
}

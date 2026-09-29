'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  Handshake,
  Building2,
  Building,
  GraduationCap,
  Landmark,
  Globe,
  Briefcase,
  Layers,
  ShieldAlert,
  Send,
  CheckCircle2,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Award,
  ExternalLink,
} from 'lucide-react'

const PARTNER_CATEGORIES = [
  {
    id: '01',
    title: 'Trade Chambers & Industry Bodies',
    desc: 'Joint initiatives, policy delegations, cross-border trade delegations, and SME acceleration forums.',
    tag: 'Policy & Trade Expansion',
    icon: Landmark,
  },
  {
    id: '02',
    title: 'Financial Institutions & Banks',
    desc: 'Structured access to working capital, trade finance, export credits, and institutional advisory for members.',
    tag: 'Capital & Trade Finance',
    icon: Building2,
  },
  {
    id: '03',
    title: 'Enterprise Technology Leaders',
    desc: 'Curated SaaS, ERP, cloud, and digital transformation toolkits built specifically for mid-market business owners.',
    tag: 'Digital Infrastructure',
    icon: Globe,
  },
  {
    id: '04',
    title: 'Academic & Research Institutes',
    desc: 'Executive education, case studies on Indian MSME longevity, and campus founder incubator fellowships.',
    tag: 'Knowledge & Research',
    icon: GraduationCap,
  },
  {
    id: '05',
    title: 'Professional Service Networks',
    desc: 'Specialized legal, tax, M&A, cross-border compliance, and audit advisory networks.',
    tag: 'Governance & M&A',
    icon: Briefcase,
  },
  {
    id: '06',
    title: 'Government & Public Bodies',
    desc: 'State industrial development partnerships, MSME ministry programs, and export promotion councils.',
    tag: 'Public Policy Alliances',
    icon: Layers,
  },
]

const PARTNERSHIP_MODELS = [
  {
    id: '01',
    title: 'Knowledge & Content Alliances',
    desc: 'Co-creating proprietary research reports, masterclasses, and executive briefings on MSME operating challenges.',
    icon: Briefcase,
    highlight: 'Executive Research & Masterclasses',
  },
  {
    id: '02',
    title: 'Ecosystem Access Agreements',
    desc: 'Providing vetted member discounts, dedicated relationship managers, and white-glove onboarding for enterprise tools.',
    icon: Globe,
    highlight: 'Preferred Commercial Access',
  },
  {
    id: '03',
    title: 'Conclave & Event Co-Hosting',
    desc: 'Anchor partners for regional and national Peers Global Conclaves, Roundtables, and Summit stages.',
    icon: Landmark,
    highlight: 'National Stage Presence',
  },
  {
    id: '04',
    title: 'Sponsorship Opportunities',
    desc: 'Access comprehensive sponsorship decks and branded initiatives for our upcoming business conclaves.',
    icon: Sparkles,
    highlight: 'Targeted High-Net-Worth Reach',
  },
]

const PARTNERSHIP_TYPES = [
  'Trade Chamber / Association',
  'Banking & Financial Institution',
  'Enterprise Technology Provider',
  'Academic Institution',
  'Professional Advisory Firm',
  'Conclave / Event Sponsorship',
  'Other Strategic Initiative',
]

const PARTNER_ORGANISATIONS = [
  { name: 'VyapaarJagat Media', domain: 'National Media & Conclave Partner' },
  { name: '1M Forum Foundation', domain: 'Section 8 Non-Profit Co-Builder' },
  { name: 'Greenpreneur Council', domain: 'Circular Economy & ESG Alliance' },
  { name: 'Fempreneur Alliance', domain: 'Women Founders Market Access' },
]

export function PartnerPageClient() {
  const [partnershipType, setPartnershipType] = useState('Trade Chamber / Association')
  const [heroVideo, setHeroVideo] = useState('/videos/homepage-hero-bg.mp4')
  const [formData, setFormData] = useState({
    organisation: '',
    contactName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const loadVideo = () => {
      try {
        const saved = localStorage.getItem('peers_admin_page_media')
        if (saved) {
          const items = JSON.parse(saved)
          const target = items.find(
            (i: any) =>
              (i.pageSlug === '/partner' ||
                i.pageId === 'partner' ||
                i.pageName === 'Partner With Us' ||
                i.pageSlug === '/' ||
                i.pageName === 'Home Page') &&
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
            <span className="text-slate-900 font-bold">Partner With Us</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-medium text-slate-500">
            <span className="inline-block size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Institutional Registry: Monitored &amp; Active</span>
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

              {/* Seamless gradient overlays for signature misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/80 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography with Drop Shadow */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-lg sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  People
                </p>
                <p className="text-lg sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Ideas
                </p>
                <p className="text-lg sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Partnerships
                </p>
                <p className="text-xl sm:text-3xl text-white font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Impact
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    INSTITUTIONAL ALLIANCES
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    STRATEGIC ECOSYSTEM ACCESS
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area (Overlaid on the crisp white side) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col gap-5 sm:gap-6">
                
                {/* Eyebrow */}
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    INSTITUTIONAL ALLIANCES &amp; ECOSYSTEM
                  </span>
                </div>

                {/* Main Heading & Subheading in exact homepage serif hierarchy */}
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-normal tracking-tight text-slate-900 leading-[1.18]">
                  Partner <span className="italic text-[#1E4ED8]">With Us.</span>
                  <span className="text-lg sm:text-xl lg:text-2xl text-slate-700 italic font-normal block mt-1.5 leading-snug">
                    Reach entrepreneurs who are actually building something.
                  </span>
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-lg font-normal">
                  We collaborate with premier chambers, technology leaders, banks, and academic institutions to strengthen the economic fabric of Indian business owners.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-1">
                  {/* Glowing Submit Brief Button */}
                  <div className="relative group/partner-btn">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#E53935] via-[#3B82F6] to-[#1E4ED8] opacity-0 blur-md transition-all duration-500 group-hover/partner-btn:opacity-80 group-hover/partner-btn:blur-lg" />
                    
                    <a
                      href="#enquiry-form"
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(30,78,216,0.30)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(30,78,216,0.40)] active:scale-[0.97]"
                    >
                      <span>Partnership Enquiry</span>
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                    </a>
                  </div>

                  <a
                    href="#collaboration-models"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-xs transition-all duration-200 hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-[2px] active:scale-[0.98]"
                  >
                    <span>View Models</span>
                  </a>
                </div>

                {/* 3 Impact Highlights */}
                <div className="mt-2 grid grid-cols-3 gap-4 sm:gap-6 border-t border-slate-200/80 pt-6">
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">&lt; 48h</p>
                    <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">Brief Review SLA</p>
                    <p className="text-[11px] text-slate-400 font-medium">Council Evaluated</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">6</p>
                    <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">Partner Domains</p>
                    <p className="text-[11px] text-slate-400 font-medium">B2B &amp; Institutional</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">100%</p>
                    <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">Integrity Policy</p>
                    <p className="text-[11px] text-slate-400 font-medium">No Direct Pitching</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ─── Fast-Track Callout Card ─── */}
          <div className="rounded-2xl sm:rounded-[28px] bg-white border border-slate-200/80 shadow-sm p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 transition-all duration-300 hover:shadow-md hover:border-blue-200">
            <div className="flex items-center gap-4 text-left w-full sm:w-auto">
              <div className="size-12 sm:size-14 rounded-2xl bg-blue-50 border border-blue-100/80 flex items-center justify-center text-[#1E4ED8] shrink-0 shadow-2xs">
                <Handshake className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h2 className="font-serif text-base sm:text-lg font-bold text-[#061836]">
                  Institutional Alliances &amp; Joint Conclaves
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  We invite Chambers, Banking institutions, and Tech leaders to co-create high-impact platforms for Indian entrepreneurs.
                </p>
              </div>
            </div>

            <a
              href="#enquiry-form"
              className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1E4ED8] text-white text-xs sm:text-sm font-semibold hover:bg-[#1a42c0] transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <span>Submit Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* ─── Section 2: Who We Partner With (Responsive 3-Column Grid) ─── */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#FFFFFF] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                ECOSYSTEM ENTITIES
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#061836] tracking-tight leading-[1.15]">
              Who We Partner With
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Six institutional categories whose missions align with empowering verified entrepreneurs and Indian MSMEs.
            </p>
          </div>

          {/* Grid: 6 Partner Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {PARTNER_CATEGORIES.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="group relative p-7 sm:p-8 rounded-2xl sm:rounded-[24px] bg-white border border-blue-100/90 shadow-[0_4px_20px_rgba(30,78,216,0.04)] hover:border-blue-300 hover:shadow-[0_14px_34px_rgba(30,78,216,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Icon & Domain Monospace */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="size-11 sm:size-12 rounded-xl sm:rounded-2xl bg-[#EFF6FF] border border-blue-100/90 flex items-center justify-center text-[#1E4ED8] group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        DOMAIN {item.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#061836] group-hover:text-[#1E4ED8] transition-colors leading-tight">
                      {item.title}
                    </h3>

                    {/* Tag badge */}
                    <p className="mt-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#1E4ED8]">
                      {item.tag}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-4 mt-5 border-t border-slate-100/90 flex items-center justify-between">
                    <a
                      href="#enquiry-form"
                      onClick={() => setPartnershipType(item.title.split('&')[0].trim())}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E4ED8] group-hover:text-[#1a42c0] transition-colors"
                    >
                      <span>Propose Alliance</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── Section 3: Collaboration Models ("What Partnership Looks Like") ─── */}
      <section id="collaboration-models" className="py-16 sm:py-24 lg:py-28 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                COLLABORATION MODELS
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#061836] tracking-tight leading-[1.15]">
              What Partnership Looks Like
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Structured models designed to deliver measurable, bilateral value without compromising community exclusivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
            {PARTNERSHIP_MODELS.map((model) => {
              const Icon = model.icon
              return (
                <div
                  key={model.id}
                  className="p-7 sm:p-9 rounded-2xl sm:rounded-[28px] bg-white border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="size-11 rounded-xl bg-blue-50 text-[#1E4ED8] flex items-center justify-center border border-blue-100 shadow-2xs">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1E4ED8] bg-blue-50/70 border border-blue-200/60 px-3 py-1 rounded-full">
                        {model.highlight}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                      {model.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {model.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href="#enquiry-form"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E4ED8] hover:text-[#1a42c0] transition-colors"
                    >
                      <span>Explore this model</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── Section 4: Who We Decline (The Non-Negotiable Policy) ─── */}
      <section className="relative py-20 md:py-28 border-b border-slate-800 bg-[#070D18] text-white overflow-hidden">
        {/* Cinematic Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] text-white shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-sm">
            
            {/* Watermark Icon */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <ShieldAlert className="w-48 h-48 text-cyan-400" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-800/80 text-red-300 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5" />
              Non-Negotiable Integrity Policy
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight">
              Who We <span className="italic text-cyan-300">Decline.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-3xl">
              <p className="text-xl sm:text-2xl font-serif text-amber-300 italic font-normal border-l-2 border-amber-400 pl-4 py-1">
                &ldquo;We do not partner with organisations that want to sell into our Circles.&rdquo;
              </p>
              <p className="text-slate-300 text-sm sm:text-base">
                A Circle meeting is not an audience, and access to Peers is not a commercial product we monetize. Partnerships that treat community members as leads to pitch are strictly declined, however commercially attractive the proposal.
              </p>
              <p className="text-white font-semibold text-sm sm:text-base pt-1">
                That is why a partnership with Peers Global carries verified institutional weight and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 5: Strategic Partner Alliances Wall ─── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-2 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                STRATEGIC CO-BUILDERS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              Our Strategic Partners
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              Trusted by institutions and industry bodies committed to peer-led progress across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNER_ORGANISATIONS.map((partner) => (
              <div
                key={partner.name}
                className="p-7 rounded-2xl sm:rounded-[24px] bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-center items-center text-center space-y-2 h-32"
              >
                <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900">
                  {partner.name}
                </h3>
                <p className="text-xs text-slate-500 font-mono font-medium">
                  {partner.domain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 6: Partnership Enquiry Engine (12-Column Split Layout) ─── */}
      <section id="enquiry-form" className="relative py-16 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-[#F8FAFD] via-white to-[#F2F6FE]/60 border-b border-slate-200/80">
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
            
            {/* Left Column: Institutional Registry Authority (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
              
              {/* Eyebrow & Main Title */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    INSTITUTIONAL REGISTRY
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#061836] tracking-tight leading-[1.15]">
                  Submit a <span className="italic text-[#1E4ED8]">Partnership Brief.</span>
                </h2>
                
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Our Partnerships Council reviews every institutional brief within 2 working days. All collaboration proposals are treated under strict commercial confidentiality.
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
                        COUNCIL EVALUATION SLA
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        Response Within 48 Hours
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold uppercase tracking-wider">
                    Active Desk
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#1E4ED8] shrink-0 mt-0.5" />
                    <span><strong>Executive Oversight:</strong> Reviewed directly by the Institutional Partnerships Council.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#1E4ED8] shrink-0 mt-0.5" />
                    <span><strong>Non-Disclosure Compliance:</strong> Strict governance regarding proprietary data and decks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#1E4ED8] shrink-0 mt-0.5" />
                    <span><strong>Direct Routing:</strong> Goes straight to <code className="text-[#1E4ED8] font-bold">partners@peersglobal.com</code>.</span>
                  </li>
                </ul>
              </div>

              {/* Direct Partnerships Desk Phone */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-3.5">
                <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                  Institutional Secretariat
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

            </div>

            {/* Right Column: Form Container Card (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-7 sm:p-10 lg:p-12 rounded-2xl sm:rounded-[32px] bg-white border border-slate-200/90 shadow-[0_16px_45px_rgba(0,0,0,0.06)]">
                
                {/* Form Header */}
                <div className="border-b border-slate-100 pb-6 mb-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                      Partnership Proposal Brief
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                      Select alliance category and outline your envisioned initiative.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-mono font-bold text-[#1E4ED8]">
                    <span className="size-2 rounded-full bg-[#1E4ED8] animate-pulse" />
                    <span>Institutional Desk</span>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="p-8 sm:p-12 rounded-3xl bg-blue-50/70 border border-blue-200 text-center space-y-5 animate-in fade-in zoom-in-95 duration-500">
                    <div className="size-16 rounded-full bg-[#1E4ED8] text-white flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#061836]">Partnership Brief Submitted</h3>
                    <p className="text-slate-700 max-w-lg mx-auto text-sm sm:text-base leading-relaxed font-normal">
                      Thank you. Your proposal on behalf of{' '}
                      <strong className="text-[#1E4ED8]">{formData.organisation || 'your institution'}</strong> regarding{' '}
                      <span className="font-bold text-[#1E4ED8]">{partnershipType}</span> has been transmitted to our Institutional Partnerships Council.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-2xs text-xs font-mono font-bold text-[#1E4ED8] uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5" />
                      Council SLA: Evaluated within 2 working days
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({
                            organisation: '',
                            contactName: '',
                            email: '',
                            phone: '',
                            message: '',
                          })
                        }}
                        className="px-8 py-3.5 rounded-full bg-[#1E4ED8] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1a42c0] transition-colors shadow-md cursor-pointer"
                      >
                        Submit Another Proposal
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
                    {/* Partnership Type selector pills */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5">
                        Partnership Type <span className="text-[#1E4ED8]">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {PARTNERSHIP_TYPES.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setPartnershipType(type)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                              partnershipType === type
                                ? 'bg-[#1E4ED8] text-white shadow-md shadow-blue-600/25 scale-[1.02]'
                                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Form fields with icons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                          Organisation / Institution Name <span className="text-[#1E4ED8]">*</span>
                        </label>
                        <div className="relative flex items-center">
                          <Building2 className="absolute left-3.5 size-4 text-slate-400 pointer-events-none" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Gujarat Chamber of Commerce"
                            value={formData.organisation}
                            onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]/20 focus:border-[#1E4ED8] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                          Primary Contact Person <span className="text-[#1E4ED8]">*</span>
                        </label>
                        <div className="relative flex items-center">
                          <User className="absolute left-3.5 size-4 text-slate-400 pointer-events-none" />
                          <input
                            type="text"
                            required
                            placeholder="Full name & title"
                            value={formData.contactName}
                            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]/20 focus:border-[#1E4ED8] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                          Official Email Address <span className="text-[#1E4ED8]">*</span>
                        </label>
                        <div className="relative flex items-center">
                          <Mail className="absolute left-3.5 size-4 text-slate-400 pointer-events-none" />
                          <input
                            type="email"
                            required
                            placeholder="contact@organisation.org"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]/20 focus:border-[#1E4ED8] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                          Contact Phone Number <span className="text-[#1E4ED8]">*</span>
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
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                        Proposal Summary / Message <span className="text-[#1E4ED8]">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          rows={4}
                          required
                          placeholder="Describe how your institution envisions partnering with Peers Global..."
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
                          <span>{isSubmitting ? 'Transmitting Proposal...' : 'SUBMIT PARTNERSHIP BRIEF'}</span>
                          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                        </button>
                      </div>

                      <p className="text-xs font-semibold text-slate-600 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#1E4ED8]" />
                        Council evaluation within 48h.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative bg-[#0062D2] text-white py-24 md:py-32 overflow-hidden">
        {/* SVG Orbital Geometric Lines Background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35">
          <svg viewBox="0 0 760 520" fill="none" className="h-full w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520" stroke="currentColor" strokeWidth="1" className="text-blue-300/30" />
            <path d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" className="text-sky-200/25" />
            <path d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520" stroke="currentColor" strokeWidth="1" className="text-blue-200/20" />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight leading-[1.15]">
              Build Long-Term <br className="hidden sm:inline" />
              <span className="italic text-cyan-200">Institutional Value.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/90 font-normal max-w-xl mx-auto leading-relaxed">
              Join forces with India’s most disciplined community of business owners and entrepreneurs.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#enquiry-form"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0062D2] hover:bg-slate-100 text-sm font-bold transition-all shadow-lg hover:shadow-xl uppercase tracking-wider active:scale-[0.98]"
            >
              <span>Partnership Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/unity"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/25 hover:bg-white/20 transition-all uppercase tracking-wider backdrop-blur-sm active:scale-[0.98]"
            >
              <span>Download Unity App</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Building2,
  ShieldCheck,
  Send,
  CheckCircle2,
  Layers,
  Sparkles,
  Award,
  Globe2,
  Lock,
  Phone,
  Mail,
  FileText,
  Clock,
  Briefcase,
  User,
  Check,
  BarChart3,
  Users,
} from 'lucide-react'

const REVENUE_STREAMS = [
  {
    title: 'Subscription Revenue',
    desc: 'Predictable, recurring annual platform subscriptions across Explorer and full Peer membership levels.',
    icon: Layers,
    badge: 'Recurring Annual',
    growth: 'High LTV / Retention',
  },
  {
    title: 'Circle Revenue',
    desc: 'Direct Circle Experience Fees across a growing national network of category-exclusive rooms.',
    icon: Building2,
    badge: 'Operational Hubs',
    growth: '19 Active Rooms',
  },
  {
    title: 'Events & Summits',
    desc: 'High-margin delegate access, regional conclaves, masterclasses, and the annual flagship summit.',
    icon: Sparkles,
    badge: 'Conclaves & Summits',
    growth: 'Flagship Reach',
  },
  {
    title: 'Media & Ecosystem',
    desc: 'Advertising, sponsorships, and digital docuseries across VyapaarJagat.com and Peers TV.',
    icon: Globe2,
    badge: 'Media Infrastructure',
    growth: 'Digital Docuseries',
  },
  {
    title: 'Marketplace Economy',
    desc: 'Transactional infrastructure powering the Peers Coin redemption ecosystem and verified B2B services.',
    icon: Award,
    badge: 'Ecosystem Utility',
    growth: 'Peers Coin System',
  },
]

const VERIFIED_METRICS = [
  { label: 'Active Curated Circles', value: '19', sub: 'Category-exclusive rooms' },
  { label: 'Operating Cities', value: '11', sub: 'Hubs across Bharat' },
  { label: 'Verified Business Promoters', value: '200+', sub: 'MSME & enterprise owners' },
  { label: 'Confirmed Collaborations', value: '1,00,000+', sub: 'Logged on Unity platform' },
  { label: 'Facilitated Value Impact', value: '₹400+ Cr', sub: 'Verified member outcomes' },
]

export function InvestorsPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [heroVideo, setHeroVideo] = useState('/videos/homepage-hero-bg.mp4')
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
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
              (i.pageSlug === '/investors' ||
                i.pageId === 'investors' ||
                i.pageName === 'Investors' ||
                i.pageSlug === '/' ||
                i.pageId === 'home') &&
              i.mediaType === 'video' &&
              i.mediaUrl
          )
          if (target && target.mediaUrl) {
            setHeroVideo(target.mediaUrl)
          }
        }
      } catch {
        // Fallback to default
      }
    }

    loadVideo()
    window.addEventListener('storage', loadVideo)
    return () => window.removeEventListener('storage', loadVideo)
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2] antialiased">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>About</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Investors</span>
        </div>
      </div>

      {/* ─── Master Hero Video Card Banner ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F6F9FD] via-[#FAFBFD] to-white pt-6 sm:pt-8 pb-10 sm:pb-12 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_12px_40px_rgba(0,40,120,0.06)] overflow-hidden min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex items-center">
            {/* Background looping video with mask */}
            <div
              className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] pointer-events-none z-0 overflow-hidden"
              style={{
                maskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
                src={heroVideo}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-white/40 lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/80 hidden lg:block" />
            </div>

            {/* Subtle top right decorative script */}
            <div
              className="absolute top-6 right-8 hidden md:block text-2xl lg:text-3xl text-[#0062D2]/20 select-none pointer-events-none z-10"
              style={{ fontFamily: 'var(--font-script)' }}
            >
              Collaborative Capital &amp; Infrastructure
            </div>

            {/* Left Hero Content */}
            <div className="relative z-10 w-full lg:w-[58%] p-6 sm:p-10 lg:p-14 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0062D2] shadow-xs">
                <TrendingUp className="w-3.5 h-3.5 text-[#0062D2]" />
                Institutional Overview &amp; Thesis
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-bold text-[#061836] tracking-tight leading-[1.08]">
                  Building the Infrastructure of{' '}
                  <span className="italic text-[#1E4ED8]">Collaborative Capital</span>
                </h1>
                <p className="text-lg sm:text-xl font-serif text-slate-800 italic leading-relaxed font-normal">
                  Transforming informal relational goodwill into measurable, scalable collaborative capital across India’s multi-trillion dollar MSME economy.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Peers Global operates a structured, category-exclusive community model, proprietary Unity technology, and media platforms that unlock compounded enterprise value.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#investor-form"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_4px_16px_rgba(0,98,210,0.25)] hover:shadow-[0_6px_22px_rgba(0,98,210,0.35)] transition-all active:scale-[0.98] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Request Data Room Brief
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                </a>

                <a
                  href="#the-model"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold border border-slate-300 shadow-xs hover:border-slate-400 transition-all active:scale-[0.98]"
                >
                  Explore Unit Economics
                </a>
              </div>
            </div>

            {/* Bottom-right Frosted Glass Live Status Card */}
            <div className="hidden sm:flex absolute bottom-5 right-6 z-10 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg text-xs font-semibold text-[#061836]">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Pre-Series A Institutional Enquiries Open</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Fast-Track Data Room Access Bar ─── */}
      <section className="bg-[#FAFBFD] border-b border-slate-200/80 py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-blue-100/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2] shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-serif font-bold text-[#061836]">
                  Confidential Institutional Investor Brief
                </p>
                <p className="text-xs text-slate-500">
                  Comprehensive unit economics, cohort retention, and capitalization tables are shared under standard NDA.
                </p>
              </div>
            </div>
            <a
              href="#investor-form"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              Direct Office Desk <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── The Opportunity (12-Column Split Layout) ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left 5 Cols: Highlight & Authority Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                Macro Thesis
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-[1.12]">
                The Untapped Multi-Trillion Dollar <span className="italic text-[#1E4ED8]">MSME Backbone</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                India runs on MSMEs. They employ crores of people and build employment, families and cities — largely without support systems, visibility or infrastructure.
              </p>

              {/* Highlight callout card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-white border border-blue-100 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0062D2] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  Structural Moat
                </div>
                <p className="text-base font-serif italic text-[#061836] leading-snug">
                  &ldquo;Designed in India, built for a market that exists in every country.&rdquo;
                </p>
                <p className="text-xs text-slate-500">
                  A defensible flywheel combining localized physical intimacy with digital scale and reputational governance.
                </p>
              </div>
            </div>

            {/* Right 7 Cols: Narrative & Four Pillars of Infrastructure */}
            <div className="lg:col-span-7 space-y-6">
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-lg sm:text-xl font-serif text-[#061836] font-semibold leading-relaxed">
                  Peers Global is building that infrastructure. A structured community model, a technology platform, a media ecosystem and a recognition system that makes collaboration measurable.
                </p>
                <p>
                  Traditional business networks rely on transactional referrals that erode over time without governance. Peers Global replaces fragile transactional incentives with structured peer governance, hot-seat accountability, and bilateral reciprocity verified on the Unity platform.
                </p>
              </div>

              {/* 4 Feature Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 shadow-2xs space-y-2 hover:border-blue-200 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#061836]">
                    Curated Circle Model
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Category exclusivity per Circle ensures zero direct conflict, high trust density, and maximum peer collaboration.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 shadow-2xs space-y-2 hover:border-blue-200 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#061836]">
                    Unity Technology OS
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Proprietary bilateral verification, attendance governance, hot-seat logging, and real-time collaboration telemetry.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 shadow-2xs space-y-2 hover:border-blue-200 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#061836]">
                    Media Amplification
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    VyapaarJagat.com, digital docuseries, and national conclaves providing institutional-grade visibility.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 shadow-2xs space-y-2 hover:border-blue-200 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center font-bold text-xs">
                    04
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#061836]">
                    Zero Salary Scale
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Scaling through entrepreneurial Circle Directors and Regional Promoters rather than heavy employee capex.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Model: Unit Economics & Scale ─── */}
      <section id="the-model" className="py-20 md:py-28 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              Unit Economics &amp; Scale
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
              A Diversified, Compounding <span className="italic text-[#1E4ED8]">Revenue Architecture</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              A model that compounds with the number of Circles, and a leadership structure that scales through entrepreneurs rather than employees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVENUE_STREAMS.map((stream, idx) => {
              const Icon = stream.icon
              return (
                <div
                  key={stream.title}
                  className="group relative p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2] transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0062D2] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                        {stream.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-[#061836] group-hover:text-[#0062D2] transition-colors">
                      {stream.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {stream.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Focus Pillar</span>
                    <span className="font-semibold text-slate-800">{stream.growth}</span>
                  </div>
                </div>
              )
            })}

            {/* 6th Card: Scalability Flywheel Summary */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#061836] to-[#0A2558] text-white shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] uppercase font-bold tracking-widest text-sky-300">
                  <BarChart3 className="w-3.5 h-3.5" />
                  Compounding Moat
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  High Operating Leverage
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  As regional Circle clusters reach density, centralized technology and media costs drop while network value increases exponentially.
                </p>
              </div>

              <div className="pt-4 border-t border-white/15">
                <a
                  href="#investor-form"
                  className="inline-flex items-center gap-2 text-xs font-bold text-sky-300 hover:text-white uppercase tracking-wider transition-colors"
                >
                  Request Financial Model <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Where We Are (Verified Metrics - Deep Dark Slate Theme) ─── */}
      <section className="relative py-20 md:py-28 border-b border-slate-800 bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D] text-white overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs uppercase tracking-widest text-cyan-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Verified Operating Telemetry
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Where We Are Today
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Verified operational data across Bharat as of Q3 2026.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
            {VERIFIED_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="group relative p-6 sm:p-7 rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] backdrop-blur-sm shadow-xl text-center space-y-2 hover:border-cyan-400/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-cyan-400 group-hover:scale-105 transition-transform">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-serif font-bold text-white pt-1">
                  {metric.label}
                </div>
                <p className="text-[11px] text-slate-300 font-sans">
                  {metric.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 12-Column Split Layout Direct Investor Enquiry Engine ─── */}
      <section id="investor-form" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 5 Columns: Authority & Governance Desk Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
                  <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                  Institutional Desk
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                  Direct Institutional <span className="italic text-[#1E4ED8]">Engagement</span>
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Detailed materials, capitalization tables, and technology audits are shared following an initial confidential conversation with our Founder and Advisory Council.
                </p>
              </div>

              {/* Protocol Commitments Card */}
              <div className="p-6 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm space-y-4">
                <h3 className="text-sm font-serif font-bold text-[#061836] uppercase tracking-wider">
                  Engagement Protocol &amp; SLAs
                </h3>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span><strong>Founder-Level Sync:</strong> Initial discussions coordinated directly by Dr. Pravin Parmar&apos;s office.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span><strong>48-Hour Response SLA:</strong> Institutional inquiries reviewed within two business days.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span><strong>Strict Confidentiality:</strong> NDA execution prior to sensitive metric or cap-table transmission.</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex flex-col gap-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#0062D2]" />
                    <span>investors@peersglobal.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#0062D2]" />
                    <span>+91 92271 88998</span>
                  </div>
                </div>
              </div>

              {/* Legal Entity & Statutory Assurance */}
              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-slate-600 space-y-1.5">
                <p className="font-bold text-[#061836]">
                  Peers Global Business Media Pvt Ltd
                </p>
                <p>CIN: U22219GJ2022PTC137646 | GSTIN: 24AANCP4546L1ZY</p>
                <p className="text-[11px] text-slate-500">Registered Office: B-1011, The Imperial Heights, 150 Feet Ring Road, Rajkot, Gujarat 360005.</p>
              </div>
            </div>

            {/* Right 7 Columns: Elevated Form Card */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-md space-y-6">
                <div className="border-b border-slate-200/80 pb-4">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#061836]">
                    Transmit Investor Brief
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Please provide your fund/office details for confidential coordination.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-10 rounded-2xl bg-white border border-emerald-200 text-center space-y-4 shadow-sm">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-2xs">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#061836]">
                      Enquiry Logged Successfully
                    </h3>
                    <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                      Thank you, <strong>{formData.name || 'Investor'}</strong>. Your brief has been forwarded directly to the Founder&apos;s office. Our leadership desk will coordinate next steps confidentially.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 rounded-full bg-[#0062D2] text-white text-xs font-bold hover:bg-[#0052B4] transition-colors shadow-sm"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            required
                            placeholder="Full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Fund / Organisation *
                        </label>
                        <div className="relative">
                          <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            required
                            placeholder="Family office / Venture firm"
                            value={formData.organisation}
                            onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Work Email *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="email"
                            required
                            placeholder="investor@fund.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Mobile Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Investment Scope &amp; Interest *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Provide a brief overview of your thesis, ticket size or strategic intent..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white text-xs sm:text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] hover:shadow-lg transition-all disabled:opacity-50 uppercase tracking-wider"
                      >
                        {isSubmitting ? 'Transmitting Brief...' : 'SUBMIT INVESTOR ENQUIRY'}
                        <Send className="w-4 h-4" />
                      </button>

                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-slate-400" /> Strictly Confidential
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            The Infrastructure of Collaboration
          </h2>
          <p className="text-base sm:text-lg text-white/90 font-light max-w-xl mx-auto">
            Participate in India’s most disciplined, governed business community platform.
          </p>

          <div className="pt-4">
            <a
              href="#investor-form"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#0062D2] text-sm font-bold shadow-lg uppercase tracking-wider transition-all"
            >
              Investor Enquiry
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

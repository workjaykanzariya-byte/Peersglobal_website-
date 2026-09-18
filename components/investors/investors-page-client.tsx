'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
} from 'lucide-react'

const REVENUE_STREAMS = [
  {
    title: 'Subscription Revenue',
    desc: 'Predictable, recurring annual platform subscriptions across Explorer and full Peer membership levels.',
    icon: Layers,
  },
  {
    title: 'Circle Revenue',
    desc: 'Direct Circle Experience Fees across a growing national network of category-exclusive rooms.',
    icon: Building2,
  },
  {
    title: 'Events & Summits',
    desc: 'High-margin delegate access, regional conclaves, masterclasses, and the annual flagship summit.',
    icon: Sparkles,
  },
  {
    title: 'Media & Ecosystem',
    desc: 'Advertising, sponsorships, and digital docuseries across VyapaarJagat.com and Peers TV.',
    icon: Globe2,
  },
  {
    title: 'Marketplace Economy',
    desc: 'Transactional infrastructure powering the Peers Coin redemption ecosystem and verified B2B services.',
    icon: Award,
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
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#E8DDD0] selection:text-[#1A1A1A]">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-[#EADFC7]/50 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-neutral-500 font-medium">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span>About</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Investors</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-[#EADFC7]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FAF3E0] border border-[#E8DFC8] text-xs font-semibold uppercase tracking-wider text-[#7C5832] mx-auto">
            <TrendingUp className="w-3.5 h-3.5 text-[#B88746]" />
            Ecosystem Infrastructure
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08]">
            Investors
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-[#5B4834] italic max-w-2xl mx-auto leading-relaxed">
            Building the infrastructure for how entrepreneurs collaborate.
          </p>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            Transforming informal relational goodwill into measurable, scalable collaborative capital across India’s multi-trillion dollar MSME economy.
          </p>

          <div className="pt-2">
            <a
              href="#investor-form"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#1A1A1A] text-white text-sm font-semibold hover:bg-[#333333] transition-all shadow-md"
            >
              Investor Enquiry
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── The Opportunity ─── */}
      <section className="py-20 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
            <span className="w-6 h-[1.5px] bg-[#B88746]" />
            Macro Thesis
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
            The Opportunity
          </h2>
          <div className="prose prose-lg text-[#3D352E] leading-relaxed font-normal space-y-5">
            <p className="text-lg sm:text-xl font-serif text-[#2B231B]">
              India runs on MSMEs. They employ crores of people and build employment, families and cities — largely without support systems, visibility or infrastructure.
            </p>
            <p>
              Peers Global is building that infrastructure. A structured community model, a technology platform, a media ecosystem and a recognition system that makes collaboration measurable.
            </p>
            <p className="text-xl font-serif font-semibold text-[#8A6320]">
              Designed in India, built for a market that exists in every country.
            </p>
          </div>
        </div>
      </section>

      {/* ─── The Model ─── */}
      <section className="py-20 md:py-28 border-b border-[#EADFC7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
              <span className="w-6 h-[1.5px] bg-[#B88746]" />
              Unit Economics &amp; Scale
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              The Model
            </h2>
            <p className="text-base text-neutral-600">
              A model that compounds with the number of Circles, and a leadership structure that scales through entrepreneurs rather than employees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVENUE_STREAMS.map((stream) => {
              const Icon = stream.icon
              return (
                <div
                  key={stream.title}
                  className="p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF4E6] border border-[#EADBBD] flex items-center justify-center text-[#8C6422]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#1A1A1A]">
                    {stream.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {stream.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Where We Are (Verified Metrics) ─── */}
      <section className="py-20 md:py-28 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
              <span className="w-6 h-[1.5px] bg-[#B88746]" />
              Current Footprint
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              Where We Are
            </h2>
            <p className="text-sm text-neutral-600">
              Verified operational data as of Q3 2026.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {VERIFIED_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="p-6 rounded-3xl bg-white border border-[#E5DAC0] shadow-sm text-center space-y-2"
              >
                <div className="text-3xl sm:text-4xl font-mono font-bold text-[#8C6422]">
                  {metric.value}
                </div>
                <div className="text-xs font-serif font-bold text-neutral-900">
                  {metric.label}
                </div>
                <p className="text-[11px] text-neutral-500 font-sans">
                  {metric.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Investor Enquiries Form ─── */}
      <section id="investor-form" className="py-20 md:py-28 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white border border-[#E5DAC0] shadow-md space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
                <span className="w-6 h-[1.5px] bg-[#B88746]" />
                Direct Desk
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
                Investor Enquiries
              </h2>
              <p className="text-sm text-neutral-600">
                Detailed materials are shared following an initial confidential conversation with our leadership.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-10 rounded-2xl bg-[#FAF4E6] border border-[#EADBBD] text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#E5D2A6] text-[#735017] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-[#1A1A1A]">Enquiry Logged</h3>
                <p className="text-neutral-700 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <strong>{formData.name || 'Investor'}</strong>. Your brief has been forwarded directly to the Founder&apos;s office. Our team will coordinate next steps confidentially.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#1A1A1A] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8C7A5] bg-[#FAF8F4] text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C6422] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Fund / Organisation *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Family office / Venture firm"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8C7A5] bg-[#FAF8F4] text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C6422] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="investor@fund.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8C7A5] bg-[#FAF8F4] text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C6422] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8C7A5] bg-[#FAF8F4] text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C6422] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Investment Scope &amp; Interest *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide a brief overview of your thesis or strategic intent..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D8C7A5] bg-[#FAF8F4] text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C6422] transition-all resize-none"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#1A1A1A] text-white text-sm font-semibold hover:bg-[#333333] transition-all shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? 'Transmitting Brief...' : 'INVESTOR ENQUIRY'}
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-neutral-500 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-neutral-400" /> Strictly Confidential
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative bg-[#0D1117] text-white py-24 md:py-32 overflow-hidden border-t border-neutral-800">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/who-we-are-mountain.jpg"
            alt="Mountain ridge horizon"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
            The Infrastructure of Collaboration
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light max-w-xl mx-auto">
            Participate in India’s most disciplined, governed business community platform.
          </p>

          <div className="pt-4">
            <a
              href="#investor-form"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-amber-500 text-neutral-950 text-sm font-bold hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl uppercase tracking-wider"
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

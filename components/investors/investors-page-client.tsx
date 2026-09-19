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
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-slate-900">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>About</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Investors</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#F0F5FD] via-[#FBFCFE] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-xs font-bold uppercase tracking-wider text-[#0062D2] mx-auto">
            <TrendingUp className="w-3.5 h-3.5" />
            Ecosystem Infrastructure
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0D1F47] tracking-tight leading-[1.08]">
            Investors
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-[#1e3a8a] italic max-w-2xl mx-auto leading-relaxed font-normal">
            Building the infrastructure for how entrepreneurs collaborate.
          </p>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Transforming informal relational goodwill into measurable, scalable collaborative capital across India’s multi-trillion dollar MSME economy.
          </p>

          <div className="pt-2">
            <a
              href="#investor-form"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0062D2] hover:bg-[#1a42c0] text-white text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] hover:shadow-lg transition-all"
            >
              Investor Enquiry
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── The Opportunity ─── */}
      <section className="py-20 md:py-24 border-b border-slate-200/80 bg-[#FAF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Macro Thesis
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
            The Opportunity
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5">
            <p className="text-lg sm:text-xl font-serif text-[#0D1F47] font-semibold">
              India runs on MSMEs. They employ crores of people and build employment, families and cities — largely without support systems, visibility or infrastructure.
            </p>
            <p>
              Peers Global is building that infrastructure. A structured community model, a technology platform, a media ecosystem and a recognition system that makes collaboration measurable.
            </p>
            <p className="text-xl font-serif font-bold text-[#0062D2]">
              Designed in India, built for a market that exists in every country.
            </p>
          </div>
        </div>
      </section>

      {/* ─── The Model ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              Unit Economics &amp; Scale
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
              The Model
            </h2>
            <p className="text-base text-slate-600">
              A model that compounds with the number of Circles, and a leadership structure that scales through entrepreneurs rather than employees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVENUE_STREAMS.map((stream) => {
              const Icon = stream.icon
              return (
                <div
                  key={stream.title}
                  className="p-8 rounded-3xl bg-[#FAF7F0] border border-slate-200/90 shadow-sm space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0D1F47]">
                    {stream.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {stream.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Where We Are (Verified Metrics) ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-[#FAF7F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              Current Footprint
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
              Where We Are
            </h2>
            <p className="text-sm text-slate-600">
              Verified operational data as of Q3 2026.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {VERIFIED_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center space-y-2"
              >
                <div className="text-3xl sm:text-4xl font-mono font-bold text-[#0062D2]">
                  {metric.value}
                </div>
                <div className="text-xs font-serif font-bold text-slate-900">
                  {metric.label}
                </div>
                <p className="text-[11px] text-slate-500 font-sans">
                  {metric.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Investor Enquiries Form ─── */}
      <section id="investor-form" className="py-20 md:py-28 border-b border-slate-200/80 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#FAF7F0] border border-slate-200 shadow-md space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                Direct Desk
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
                Investor Enquiries
              </h2>
              <p className="text-sm text-slate-600">
                Detailed materials are shared following an initial confidential conversation with our leadership.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-10 rounded-2xl bg-white border border-emerald-200 text-center space-y-4 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0D1F47]">Enquiry Logged</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <strong>{formData.name || 'Investor'}</strong>. Your brief has been forwarded directly to the Founder&apos;s office. Our team will coordinate next steps confidentially.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#0062D2] text-white text-xs font-semibold hover:bg-[#1a42c0] transition-colors shadow-sm"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Fund / Organisation *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Family office / Venture firm"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="investor@fund.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Investment Scope &amp; Interest *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide a brief overview of your thesis or strategic intent..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all resize-none"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#0062D2] hover:bg-[#1a42c0] text-white text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] hover:shadow-lg transition-all disabled:opacity-50 uppercase tracking-wider"
                  >
                    {isSubmitting ? 'Transmitting Brief...' : 'INVESTOR ENQUIRY'}
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
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative bg-[#0B1220] text-white py-24 md:py-32 overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/who-we-are-mountain.jpg"
            alt="Mountain ridge horizon"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            The Infrastructure of Collaboration
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light max-w-xl mx-auto">
            Participate in India’s most disciplined, governed business community platform.
          </p>

          <div className="pt-4">
            <a
              href="#investor-form"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0062D2] hover:bg-[#1a42c0] text-white text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.35)] hover:shadow-xl uppercase tracking-wider transition-all"
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

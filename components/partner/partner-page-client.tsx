'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Handshake,
  Building,
  GraduationCap,
  Landmark,
  Globe,
  Briefcase,
  Layers,
  ShieldAlert,
  Send,
  CheckCircle2,
} from 'lucide-react'

const PARTNER_CATEGORIES = [
  {
    title: 'Trade Chambers & Industry Bodies',
    desc: 'Joint initiatives, policy delegations, cross-border trade delegations, and SME acceleration forums.',
    icon: Landmark,
  },
  {
    title: 'Financial Institutions & Banks',
    desc: 'Structured access to working capital, trade finance, export credits, and institutional advisory.',
    icon: Building,
  },
  {
    title: 'Enterprise Technology Leaders',
    desc: 'Curated SaaS, ERP, cloud, and digital transformation toolkits built specifically for mid-market business owners.',
    icon: Globe,
  },
  {
    title: 'Academic & Research Institutes',
    desc: 'Executive education, case studies on Indian MSME longevity, and campus founder incubator fellowships.',
    icon: GraduationCap,
  },
  {
    title: 'Professional Service Networks',
    desc: 'Specialized legal, tax, M&A, cross-border compliance, and audit advisory networks.',
    icon: Briefcase,
  },
  {
    title: 'Government & Public Bodies',
    desc: 'State industrial development partnerships, MSME ministry programs, and export promotion councils.',
    icon: Layers,
  },
]

const PARTNERSHIP_MODELS = [
  {
    title: 'Knowledge & Content Alliances',
    desc: 'Co-creating proprietary research reports, masterclasses, and executive briefings on MSME operating challenges.',
  },
  {
    title: 'Ecosystem Access Agreements',
    desc: 'Providing vetted member discounts, dedicated relationship managers, and white-glove onboarding for enterprise tools.',
  },
  {
    title: 'Conclave & Event Co-Hosting',
    desc: 'Anchor partners for regional and national Peers Global Conclaves, Roundtables, and Summit stages.',
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

export function PartnerPageClient() {
  const [partnershipType, setPartnershipType] = useState('Trade Chamber / Association')
  const [formData, setFormData] = useState({
    organisation: '',
    contactName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
          <span className="text-slate-900 font-semibold">Partner With Us</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#F0F5FD] via-[#FBFCFE] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-xs font-bold uppercase tracking-wider text-[#0062D2] mx-auto">
            <Handshake className="w-3.5 h-3.5" />
            Institutional Alliances
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0D1F47] tracking-tight leading-[1.08]">
            Partner With Us
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-[#1e3a8a] italic max-w-2xl mx-auto leading-relaxed font-normal">
            Reach entrepreneurs who are actually building something.
          </p>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            We collaborate with premier chambers, technology leaders, banks, and academic institutions to strengthen the economic fabric of Indian business owners.
          </p>

          <div className="pt-2">
            <a
              href="#enquiry-form"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0062D2] hover:bg-[#1a42c0] text-white text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] hover:shadow-lg transition-all"
            >
              Partnership Enquiry
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Who We Partner With ─── */}
      <section className="py-20 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              Ecosystem Entities
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
              Who we partner with
            </h2>
            <p className="text-base text-slate-600">
              Six institutional categories whose missions align with empowering verified entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNER_CATEGORIES.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="p-8 rounded-3xl bg-[#FAF7F0] border border-slate-200/90 shadow-sm space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0D1F47]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── What Partnership Looks Like ─── */}
      <section className="py-20 md:py-24 border-b border-slate-200/80 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              Collaboration Models
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
              What partnership looks like
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNERSHIP_MODELS.map((model) => (
              <div
                key={model.title}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2"
              >
                <h3 className="text-xl font-serif font-bold text-[#0D1F47]">
                  {model.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {model.desc}
                </p>
              </div>
            ))}
            <div className="p-7 rounded-3xl bg-blue-50/70 border border-blue-200/80 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#0D1F47]">Sponsorship Opportunities</h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">
                  Access comprehensive sponsorship decks for our upcoming national business conclaves.
                </p>
              </div>
              <a
                href="#enquiry-form"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#1a42c0] uppercase tracking-wider"
              >
                See Sponsorship Opportunities <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Who We Decline (CRITICAL INTEGRITY SECTION) ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#0B1220] text-white shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldAlert className="w-40 h-40 text-sky-400" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/80 text-red-300 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5" />
              Non-Negotiable Policy
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Who we decline
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              <p className="text-xl sm:text-2xl font-serif text-amber-300 italic font-normal">
                &ldquo;We do not partner with organisations that want to sell into our Circles.&rdquo;
              </p>
              <p>
                A Circle meeting is not an audience, and access to Peers is not a product we sell. Partnerships that treat it that way are declined, however commercially attractive.
              </p>
              <p className="text-white font-medium">
                That is why a partnership with Peers Global means something.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our Partners Wall ─── */}
      <section className="py-20 md:py-24 border-b border-slate-200/80 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
              Our Partners
            </h2>
            <p className="text-sm text-slate-600">
              Trusted by institutions and industry bodies committed to peer-led progress.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {[
              'VyapaarJagat Media',
              '1M Forum Foundation',
              'Greenpreneur Council',
              'Fempreneur Alliance',
            ].map((partner) => (
              <div
                key={partner}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-center text-sm font-serif font-bold text-slate-800 h-24 hover:border-blue-300 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Partnership Enquiry Form ─── */}
      <section id="enquiry-form" className="py-20 md:py-28 border-b border-slate-200/80 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#FAF7F0] border border-slate-200 shadow-md space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                Institutional Registry
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
                Partnership Enquiry
              </h2>
              <p className="text-sm text-slate-600">
                Submit your institutional proposal. Our Partnerships Council reviews every brief within 2 working days.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-10 rounded-2xl bg-white border border-emerald-200 text-center space-y-4 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0D1F47]">Partnership Brief Submitted</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you. Your enquiry on behalf of{' '}
                  <span className="font-semibold text-[#0062D2]">{formData.organisation || 'your organisation'}</span> has been received by our Institutional Desk.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#0062D2] text-white text-xs font-semibold hover:bg-[#1a42c0] transition-colors shadow-sm"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                    Partnership Type *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PARTNERSHIP_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPartnershipType(type)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${partnershipType === type
                            ? 'bg-[#0062D2] text-white shadow-sm'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                          }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Organisation / Institution Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gujarat Chamber of Commerce"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Primary Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full name & title"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@organisation.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Contact Phone Number *
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
                    Proposal Summary / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe how your institution envisions partnering with Peers Global..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#0062D2] hover:bg-[#1a42c0] text-white text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] hover:shadow-lg transition-all disabled:opacity-50 uppercase tracking-wider"
                  >
                    {isSubmitting ? 'Transmitting Proposal...' : 'PARTNERSHIP ENQUIRY'}
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Build Long-Term Institutional Value
          </h2>
          <p className="text-base sm:text-lg text-white/90 font-light max-w-xl mx-auto">
            Join forces with India’s most disciplined community of business owners.
          </p>

          <div className="pt-4">
            <a
              href="#enquiry-form"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#0062D2] text-sm font-bold shadow-lg uppercase tracking-wider transition-all"
            >
              Partnership Enquiry
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

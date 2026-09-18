'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Handshake,
  Building2,
  Landmark,
  Cpu,
  GraduationCap,
  Scale,
  Award,
  ShieldAlert,
  Send,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from 'lucide-react'

const PARTNER_CATEGORIES = [
  {
    title: 'Institutions and Associations',
    desc: 'Chambers of commerce, industry bodies, export promotion councils and trade federations working with the same ambitious business owners.',
    icon: Landmark,
  },
  {
    title: 'Financial Institutions',
    desc: 'Banks, NBFCs, venture debt funds and institutional investors serving growing MSMEs with structured credit and treasury solutions.',
    icon: Building2,
  },
  {
    title: 'Technology & Service Providers',
    desc: 'Enterprise software, supply chain platforms and cloud providers whose products genuinely reduce operating friction for business owners.',
    icon: Cpu,
  },
  {
    title: 'Educational Institutions',
    desc: 'Top universities and business schools developing entrepreneurship curriculums, student incubators and executive education.',
    icon: GraduationCap,
  },
  {
    title: 'Government & Public Bodies',
    desc: 'MSME development institutes, state industrial development corporations, and skill mission programs driving local employment.',
    icon: Scale,
  },
  {
    title: 'Brands',
    desc: 'Consumer, industrial, and automotive brands wanting authentic, value-aligned connection with high-net-worth business owners.',
    icon: Award,
  },
]

const PARTNERSHIP_MODELS = [
  {
    title: 'Event Partnership',
    desc: 'Co-curate regional conclaves, annual summits, and city gatherings of industry captains.',
  },
  {
    title: 'Knowledge Partnership',
    desc: 'Deliver masterclasses, research whitepapers, and operational frameworks directly to the community.',
  },
  {
    title: 'Ecosystem Partnership',
    desc: 'Co-design national accelerator initiatives, supplier diversity tracks, and sector roadshows.',
  },
  {
    title: 'Media Partnership',
    desc: 'Cross-platform editorial spotlights, video docuseries, and magazine features across VyapaarJagat and Peers TV.',
  },
  {
    title: 'Sponsorship',
    desc: 'Brand visibility at signature physical conclaves, peer recognition galas, and national business award platforms.',
  },
]

const PARTNERSHIP_TYPES = [
  'Event Partnership',
  'Knowledge Partnership',
  'Ecosystem Partnership',
  'Media Partnership',
  'Sponsorship',
  'Institutional Alignment',
]

export function PartnerPageClient() {
  const [partnershipType, setPartnershipType] = useState('Event Partnership')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    organisation: '',
    contactName: '',
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
          <span className="text-neutral-900 font-semibold">Partner With Us</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-[#EADFC7]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FAF3E0] border border-[#E8DFC8] text-xs font-semibold uppercase tracking-wider text-[#7C5832] mx-auto">
            <Handshake className="w-3.5 h-3.5 text-[#B88746]" />
            Institutional Alliances
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08]">
            Partner With Us
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-[#5B4834] italic max-w-2xl mx-auto leading-relaxed">
            Reach entrepreneurs who are actually building something.
          </p>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            We collaborate with premier chambers, technology leaders, banks, and academic institutions to strengthen the economic fabric of Indian business owners.
          </p>

          <div className="pt-2">
            <a
              href="#enquiry-form"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#1A1A1A] text-white text-sm font-semibold hover:bg-[#333333] transition-all shadow-md"
            >
              Partnership Enquiry
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Who We Partner With ─── */}
      <section className="py-20 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
              <span className="w-6 h-[1.5px] bg-[#B88746]" />
              Ecosystem Entities
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              Who we partner with
            </h2>
            <p className="text-base text-neutral-600">
              Six institutional categories whose missions align with empowering verified entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNER_CATEGORIES.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF4E6] border border-[#EADBBD] flex items-center justify-center text-[#8C6422]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── What Partnership Looks Like ─── */}
      <section className="py-20 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
              <span className="w-6 h-[1.5px] bg-[#B88746]" />
              Collaboration Models
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              What partnership looks like
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNERSHIP_MODELS.map((model) => (
              <div
                key={model.title}
                className="p-7 rounded-3xl bg-white border border-[#E5DAC0] shadow-sm space-y-2"
              >
                <h3 className="text-xl font-serif text-[#1A1A1A]">
                  {model.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {model.desc}
                </p>
              </div>
            ))}
            <div className="p-7 rounded-3xl bg-[#FAF3E2] border border-[#E2D5B5] flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-serif text-[#1A1A1A]">Sponsorship Opportunities</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mt-1">
                  Access comprehensive sponsorship decks for our upcoming national business conclaves.
                </p>
              </div>
              <a
                href="#enquiry-form"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C6422] hover:text-[#5E4214] uppercase tracking-wider"
              >
                See Sponsorship Opportunities <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Who We Decline (CRITICAL INTEGRITY SECTION) ─── */}
      <section className="py-20 md:py-28 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#1A1A1A] text-white shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldAlert className="w-40 h-40 text-amber-400" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/80 text-red-300 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5" />
              Non-Negotiable Policy
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
              Who we decline
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
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
      <section className="py-20 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              Our Partners
            </h2>
            <p className="text-sm text-neutral-600">
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
                className="p-6 rounded-2xl bg-white border border-[#E4D7BD] shadow-sm flex items-center justify-center text-center text-sm font-serif font-semibold text-neutral-800 h-24"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Partnership Enquiry Form ─── */}
      <section id="enquiry-form" className="py-20 md:py-28 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white border border-[#E5DAC0] shadow-md space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
                <span className="w-6 h-[1.5px] bg-[#B88746]" />
                Institutional Registry
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
                Partnership Enquiry
              </h2>
              <p className="text-sm text-neutral-600">
                Submit your institutional proposal. Our Partnerships Council reviews every brief within 2 working days.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-10 rounded-2xl bg-[#FAF4E6] border border-[#EADBBD] text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#E5D2A6] text-[#735017] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-[#1A1A1A]">Partnership Brief Submitted</h3>
                <p className="text-neutral-700 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you. Your enquiry on behalf of{' '}
                  <span className="font-semibold text-[#8C6422]">{formData.organisation || 'your organisation'}</span> has been received by our Institutional Desk.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#1A1A1A] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2.5">
                    Partnership Type *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PARTNERSHIP_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPartnershipType(type)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                          partnershipType === type
                            ? 'bg-[#1A1A1A] text-white shadow-sm'
                            : 'bg-[#F4EDE0] text-[#554432] hover:bg-[#EAE0CD] border border-[#DACFBA]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Organisation / Institution Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gujarat Chamber of Commerce"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8C7A5] bg-[#FAF8F4] text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C6422] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Primary Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full name & title"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8C7A5] bg-[#FAF8F4] text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C6422] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@organisation.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8C7A5] bg-[#FAF8F4] text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C6422] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Contact Phone Number *
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
                    Proposal Summary / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe how your institution envisions partnering with Peers Global..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D8C7A5] bg-[#FAF8F4] text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C6422] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#1A1A1A] text-white text-sm font-semibold hover:bg-[#333333] transition-all shadow-md disabled:opacity-50"
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
            Build Long-Term Institutional Value
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light max-w-xl mx-auto">
            Join forces with India’s most disciplined community of business owners.
          </p>

          <div className="pt-4">
            <a
              href="#enquiry-form"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-amber-500 text-neutral-950 text-sm font-bold hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl uppercase tracking-wider"
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

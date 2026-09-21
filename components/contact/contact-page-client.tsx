'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
} from 'lucide-react'

const CATEGORIES = [
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
    icon: Briefcase,
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
  {
    id: 'support',
    name: 'Support',
    desc: 'Technical issues with the Unity App, account verification, billing or subscription enquiries.',
    link: '#message-form',
    linkText: 'Contact Support',
    icon: LifeBuoy,
    routingTarget: 'support@peersglobal.com',
  },
]

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

export function ContactPageClient() {
  const [selectedTopic, setSelectedTopic] = useState('Membership')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    country: 'India',
    organisation: '',
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-30 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>About</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Contact</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border-b border-slate-200/80">
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-blue-200/40 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 shadow-2xs text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2] mx-auto">
            <Mail className="w-3.5 h-3.5 text-[#0062D2]" />
            Official Contact &amp; Governance
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#061836] font-bold tracking-tight leading-[1.08]">
            Contact
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-slate-700 italic max-w-2xl mx-auto leading-relaxed">
            Tell us what you need and it goes to the right person.
          </p>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            We reject the single generic inbox. Every enquiry is routed directly to the appropriate team leader with a guaranteed response within two working days.
          </p>

          <div className="pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0062D2] text-white text-sm font-bold hover:bg-[#0052B4] transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Download Unity App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Fast-Track Banner: Already a Peer? ─── */}
      <section className="py-8 bg-blue-50/70 border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white border border-blue-200/80 shadow-sm">
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="text-lg font-serif font-bold text-[#061836] flex items-center justify-center sm:justify-start gap-2">
                <Sparkles className="w-5 h-5 text-[#0062D2]" />
                Already a Peer?
              </h2>
              <p className="text-sm text-slate-600">
                Ask inside the Unity App. A real person answers, and it is faster than anything here.
              </p>
            </div>
            <Link
              href="/unity"
              className="shrink-0 px-6 py-3 rounded-full bg-[#0062D2] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0052B4] transition-all shadow-sm"
            >
              Open Unity App
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section: What are you contacting us about? (Routing Grid) ─── */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              Dedicated Desks
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836]">
              What are you contacting us about?
            </h2>
            <p className="text-base text-slate-600">
              Select an area below to see FAQs, applications, or click to populate the message router.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => {
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
                  className={`cursor-pointer p-7 rounded-3xl transition-all border ${
                    isSelected
                      ? 'bg-white border-[#0062D2] shadow-md ring-2 ring-[#0062D2]/20'
                      : 'bg-white border-slate-200/80 hover:border-blue-300 hover:shadow-md'
                  } flex flex-col justify-between group`}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-[#061836] font-bold group-hover:text-[#0062D2] transition-colors">
                        {cat.name}
                      </h3>
                      <p className="mt-2 text-xs font-mono text-[#0062D2] uppercase tracking-wider font-semibold">
                        Direct Route: {cat.routingTarget}
                      </p>
                      <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] group-hover:text-[#0052B4]">
                      {cat.linkText} <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Send Us a Message Form Section ─── */}
      <section id="message-form" className="py-20 md:py-28 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                Direct Routing Engine
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836]">
                Send Us a Message
              </h2>
              <p className="text-sm text-slate-600">
                Choose the exact domain so your message goes straight to the responsible director rather than sitting in a queue.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-10 rounded-2xl bg-blue-50/60 border border-blue-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-[#0062D2] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#061836]">Message Transmitted</h3>
                <p className="text-slate-700 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <strong>{formData.fullName || 'Peer'}</strong>. Your enquiry regarding{' '}
                  <span className="font-semibold text-[#0062D2]">{selectedTopic}</span> has been routed to our leadership desk.
                </p>
                <p className="text-xs font-mono uppercase tracking-widest text-[#0062D2] font-semibold">
                  Guaranteed response SLA: Within two working days.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#0062D2] text-white text-xs font-semibold hover:bg-[#0052B4] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Topic selector pills */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                    What is this about? *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {ROUTE_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedTopic(opt)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                          selectedTopic === opt
                            ? 'bg-[#0062D2] text-white shadow-sm'
                            : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@business.com"
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
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmedabad, Mumbai, Surat"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Country *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="India"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Organisation (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Company or Enterprise name"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you need in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2] transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#0062D2] text-white text-sm font-bold hover:bg-[#0052B4] transition-all shadow-md hover:shadow-lg disabled:opacity-50 active:scale-[0.98]"
                  >
                    {isSubmitting ? 'Routing message...' : 'SEND MESSAGE'}
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-xs font-medium text-slate-600 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0062D2]" />
                    We respond within two working days.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── Corporate Information & Statutory Details ─── */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Entity & Registered Office */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                Corporate Entity
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#061836]">
                Peers Global Business Media Private Limited
              </h2>
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0062D2] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Registered Office</strong>
                    <p className="text-slate-600">
                      405, 4th Floor, Shivalik Shilp, Iscon Cross Road, S.G. Highway, Ahmedabad, Gujarat 380015, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#0062D2] shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-semibold mr-2">Email:</strong>
                    <a href="mailto:hello@peersglobal.com" className="text-[#0062D2] hover:underline font-medium">
                      hello@peersglobal.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0062D2] shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-semibold mr-2">Phone:</strong>
                    <a href="tel:+919227122800" className="text-[#0062D2] hover:underline font-medium">
                      +91 92271 22800
                    </a>{' '}
                    <span className="text-slate-400">/</span>{' '}
                    <a href="tel:+919316120831" className="text-[#0062D2] hover:underline font-medium">
                      +91 93161 20831
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-xs uppercase tracking-wider text-slate-500 font-semibold">GST Registration</span>
                    <span className="font-mono text-xs font-bold text-slate-900 mt-1 block">24AANCP4546L1ZY</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-xs uppercase tracking-wider text-slate-500 font-semibold">Corporate Identity (CIN)</span>
                    <span className="font-mono text-xs font-bold text-slate-900 mt-1 block">U22219GJ2022PTC137646</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Grievance Officer (Indian IT Rules) & Official Channels */}
            <div className="space-y-6">
              <div className="p-7 rounded-3xl bg-blue-50/50 border border-blue-200/80 space-y-4 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#0062D2]" />
                  <h3 className="text-lg font-serif font-bold text-[#061836]">
                    Grievance Officer (Indian IT Rules)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  In accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the contact details of the Grievance Officer are published below:
                </p>
                <div className="space-y-2 text-xs text-slate-800 bg-white p-4 rounded-xl border border-blue-100">
                  <p><strong>Officer Name:</strong> Dr. Pravin Parmar</p>
                  <p><strong>Designation:</strong> Founder &amp; Grievance Officer</p>
                  <p><strong>Email:</strong> <a href="mailto:grievance@peersglobal.com" className="text-[#0062D2] underline">grievance@peersglobal.com</a></p>
                  <p><strong>Address:</strong> 405, Shivalik Shilp, Iscon Cross Road, S.G. Highway, Ahmedabad, Gujarat 380015</p>
                  <p><strong>Resolution SLA:</strong> Acknowledged within 24 hours, resolved within 15 days.</p>
                </div>
              </div>

              {/* Official Social Media Channels */}
              <div className="space-y-3">
                <h3 className="text-base font-serif font-bold text-[#061836]">
                  Follow Official Handles
                </h3>
                <div className="flex flex-wrap gap-2.5">
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
                      className="px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#0062D2] hover:border-blue-200 transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
                <p className="text-xs text-slate-500 italic pt-1">
                  These are our only official accounts. We do not contact entrepreneurs through any other channel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-24 md:py-32">
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
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Build Your Business. Build Your Relationships. Build Your Circle.
            </h2>
            <p className="text-base sm:text-lg text-white/90 font-normal max-w-xl mx-auto">
              Ready to meet your peers? Download the Unity App and request your verified membership seat.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0062D2] hover:bg-slate-100 text-sm font-bold transition-all shadow-lg hover:shadow-xl uppercase tracking-wider active:scale-[0.98]"
            >
              Download Unity App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

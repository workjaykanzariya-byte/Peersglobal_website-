'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Users,
  Compass,
  Building2,
  PhoneCall,
  UserPlus,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Globe2,
  Sparkles,
  Smartphone,
} from 'lucide-react'

const FAQS = [
  {
    q: 'Is there a Circle in every city?',
    a: 'Not yet. Peers Global launches city-by-city through dedicated local founders. When 15 or more entrepreneurs in a city register interest or a qualified Founder steps forward, we initiate the launch sequence.',
  },
  {
    q: 'How many people are needed to start a Circle?',
    a: 'A Circle officially launches with a minimum of 25 vetted entrepreneurs representing mutually exclusive business categories. This ensures depth of collaboration from day one.',
  },
  {
    q: 'Do I need to be a member to register interest?',
    a: 'No. Any business owner or leader may register their city. Registrations help our territorial directors gauge regional demand.',
  },
  {
    q: 'What if there is no Circle in my city yet?',
    a: 'Your Peers Global membership and Unity App access work immediately. You can access national directories, attend cross-city conclaves, and participate in digital masterclasses while your local Circle forms.',
  },
  {
    q: 'What support do Founders receive?',
    a: 'Circle Founders receive complete operating playbooks, interview rubrics, software tooling, brand kits, and hands-on guidance from an experienced Executive Director.',
  },
  {
    q: 'Can I suggest multiple cities?',
    a: 'Yes. If your company operates across multiple territories or you have enterprise connections in neighbouring industrial hubs, you can submit separate registrations.',
  },
]

export function BringToMyCityClient() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    city: '',
    country: 'India',
    businessName: '',
    industry: '',
    founderInterest: 'Possibly',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName || !formData.email || !formData.city) return
    setSubmitted(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2] antialiased">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/circles" className="hover:text-slate-900 transition-colors">
            Circles
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Bring Peers Global to Your City</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-slate-950 tracking-tight leading-[1.08]">
                Bring Peers Global to Your City
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-slate-800 italic leading-relaxed">
                Every city in this community began with one entrepreneur who wanted it there.
              </p>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                The entrepreneurs who bring this community to a new city are the ones who shape what it becomes there.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0062D2] text-white text-xs sm:text-sm font-bold hover:bg-[#1a42c0] transition-all shadow-md hover:shadow-lg uppercase tracking-wider"
                >
                  Download Unity App
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#register"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  Register Interest
                </a>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80">
                <div className="space-y-0.5">
                  <span className="text-xl font-serif font-bold text-slate-950">19+</span>
                  <span className="text-[11px] text-slate-500 block">Cities & growing</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-xl font-serif font-bold text-slate-950">Thousands</span>
                  <span className="text-[11px] text-slate-500 block">Entrepreneurs</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-xl font-serif font-bold text-slate-950">One</span>
                  <span className="text-[11px] text-slate-500 block">Across Bharat & beyond</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-xl font-serif font-bold text-[#0062D2]">More Cities</span>
                  <span className="text-[11px] text-slate-500 block">Coming soon</span>
                </div>
              </div>
            </div>

            {/* Right Visual: City Horizon & Calligraphy (Dark Constellation Card) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] text-white p-8 shadow-2xl backdrop-blur-sm">
                <div className="absolute top-4 right-5 text-xs font-serif italic text-cyan-300">
                  New Cities. More Entrepreneurs. A Stronger Bharat.
                </div>
                <div className="pt-8 pb-4 space-y-4">
                  <div className="relative h-60 rounded-2xl overflow-hidden border border-slate-600/60">
                    <Image
                      src="/images/who-we-are-boardroom.jpg"
                      alt="Entrepreneurs convening"
                      fill
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-xs space-y-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-400/30">
                        Launch Threshold
                      </span>
                      <p className="text-sm font-serif font-bold text-white">
                        15 Registered Leaders = City Launch Feasibility
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                  <strong className="text-white block">Local Ownership, National Scale</strong>
                  We do not open cities from a head office. A community of trust needs a local champion.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Map is Not Finished ─── */}
      <section className="py-16 md:py-20 border-b border-slate-200/80 bg-[#FBFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-slate-950">
                  The map is not finished
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                Peers Global operates in a growing number of cities, and there are many more where it does not exist yet.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If yours is one of them, that is not a closed door. It is an opening. The entrepreneurs who bring this community to a new city are the ones who shape what it becomes there — who is in the first room, what standard it holds, and how it grows over the next decade.
              </p>
            </div>

            <div className="lg:col-span-4 p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 flex flex-col justify-center text-center space-y-4">
              <span className="text-4xl text-[#0062D2] font-serif leading-none">&ldquo;</span>
              <p className="text-lg sm:text-xl font-serif italic text-slate-800 leading-relaxed">
                Every city begins with one entrepreneur who decides to make it happen.
              </p>
              <span className="text-xs text-slate-500 font-medium">
                — Peers Global Territory Charter
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What Happens When You Register Interest vs Two Ways ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#FBFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: What happens when you register interest */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6422]">
                  The Process
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A]">
                  What happens when you register interest
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-[#E8DFC9] flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </div>
                  <div className="text-xs text-neutral-700 leading-relaxed">
                    <strong className="block text-neutral-900 font-bold text-sm mb-0.5">We record your city</strong>
                    Every registration is logged, geolocated, and tracked on our central expansion map.
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E8DFC9] flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </div>
                  <div className="text-xs text-neutral-700 leading-relaxed">
                    <strong className="block text-neutral-900 font-bold text-sm mb-0.5">We look at demand</strong>
                    A city with fifteen entrepreneurs asking is a city we can open properly. One with two is not yet.
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E8DFC9] flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    3
                  </div>
                  <div className="text-xs text-neutral-700 leading-relaxed">
                    <strong className="block text-neutral-900 font-bold text-sm mb-0.5">We contact you</strong>
                    With an honest picture — whether it is realistic now, what would need to happen, and when.
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E8DFC9] flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    4
                  </div>
                  <div className="text-xs text-neutral-700 leading-relaxed">
                    <strong className="block text-neutral-900 font-bold text-sm mb-0.5">We look for a Founder</strong>
                    Every new city needs one entrepreneur willing to convene the first room. It could be you.
                  </div>
                </div>
              </div>

              {/* Unity callout */}
              <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-start gap-3.5">
                <Smartphone className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-900 leading-relaxed font-medium">
                  <strong>Your Peers Global subscription works everywhere.</strong> Even before a Circle exists in your city, you have the platform, the directory, and the whole community in the Unity App.
                </p>
              </div>
            </div>

            {/* Right: Two ways to bring it here */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6422]">
                  Your Options
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A]">
                  Two ways to bring it here
                </h2>
              </div>

              <div className="space-y-5">
                <div className="p-6 rounded-2xl bg-white border border-[#E8DFC9] space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#8C6422] flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#1A1A1A]">
                    Register your interest
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Tell us your city. When enough entrepreneurs there have done the same, we open it and notify you first.
                  </p>
                  <a
                    href="#register"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D6EFD] hover:text-blue-700 pt-1"
                  >
                    Register Interest <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#E8DFC9] space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#1A1A1A]">
                    Found the first Circle
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Do not wait for the map to reach you. Convene the room yourself, with the structure, systems, training and support of the wider community behind you. Launches with 25 entrepreneurs.
                  </p>
                  <Link
                    href="/leadership/circle-founder"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 pt-1"
                  >
                    Learn About the Founder Role <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cities Where Present & FAQ ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Active Cities Map Visualization */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6422]">
                  Live Territory
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A]">
                  Cities where we are already present
                </h2>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-[#E8DFC9] space-y-5">
                <div className="flex items-center gap-4 text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-neutral-700">Current Cities</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="text-neutral-700">Upcoming Cities</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="font-bold text-neutral-900 block">Ahmedabad</span>
                    <span className="text-[11px] text-emerald-600 font-semibold">5 Active Circles</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="font-bold text-neutral-900 block">Mumbai</span>
                    <span className="text-[11px] text-emerald-600 font-semibold">4 Active Circles</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="font-bold text-neutral-900 block">Bengaluru</span>
                    <span className="text-[11px] text-emerald-600 font-semibold">3 Active Circles</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="font-bold text-neutral-900 block">Delhi NCR</span>
                    <span className="text-[11px] text-emerald-600 font-semibold">3 Active Circles</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="font-bold text-neutral-900 block">Surat</span>
                    <span className="text-[11px] text-emerald-600 font-semibold">2 Active Circles</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="font-bold text-neutral-900 block">Pune</span>
                    <span className="text-[11px] text-emerald-600 font-semibold">2 Active Circles</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-500 italic text-center">
                  Plus Rajkot, Vadodara, Morbi, Mundra, Indore & more expanding monthly.
                </p>
              </div>
            </div>

            {/* Right: FAQ Accordion */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6422]">
                  Frequently Asked
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A]">
                  Frequently asked questions
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl bg-white border border-[#E8DFC9] overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-neutral-900 hover:text-[#8C6422]"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-neutral-500 transition-transform ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REGISTER INTEREST FORM ─── */}
      <section id="register" className="py-16 md:py-24 border-b border-slate-200/80 bg-[#FBFCFE]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C6422]">
              Expansion Registry
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              Register Interest
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto">
              We will contact you with an honest picture of what is possible, how many peers have registered from your city, and next steps.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-3xl bg-white border border-emerald-300 text-center space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-neutral-900">
                Interest Logged Successfully
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your city (<strong>{formData.city}</strong>) has been recorded in our territorial expansion index. An Executive Director will review your submission shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8DFC9] space-y-5 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-800">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rajesh Shah"
                    className="w-full text-xs rounded-xl border border-[#E8DFC9] p-3 focus:outline-none focus:border-[#8C6422]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-800">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full text-xs rounded-xl border border-[#E8DFC9] p-3 focus:outline-none focus:border-[#8C6422]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-800">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rajesh@enterprise.com"
                    className="w-full text-xs rounded-xl border border-[#E8DFC9] p-3 focus:outline-none focus:border-[#8C6422]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-800">City *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Nagpur"
                    className="w-full text-xs rounded-xl border border-[#E8DFC9] p-3 focus:outline-none focus:border-[#8C6422]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-800">Business Name</label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Apex Engineering Ltd."
                    className="w-full text-xs rounded-xl border border-[#E8DFC9] p-3 focus:outline-none focus:border-[#8C6422]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-800">Your Industry</label>
                  <input
                    type="text"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    placeholder="e.g. Industrial Automation"
                    className="w-full text-xs rounded-xl border border-[#E8DFC9] p-3 focus:outline-none focus:border-[#8C6422]"
                  />
                </div>
              </div>

              {/* The Founder Question */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-neutral-900 block">
                  Would you consider founding the first Circle in your city?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {['Yes', 'Possibly', 'No, but I would join one'].map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-colors ${
                        formData.founderInterest === opt
                          ? 'border-[#8C6422] bg-amber-50 font-semibold text-[#8C6422]'
                          : 'border-[#E8DFC9] bg-white text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="founderInterest"
                        value={opt}
                        checked={formData.founderInterest === opt}
                        onChange={() => setFormData({ ...formData, founderInterest: opt })}
                        className="accent-[#8C6422]"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#1A1A1A] text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  Register Interest
                </button>
                <p className="text-[11px] text-neutral-500 text-center pt-2">
                  No automated spam. Purely for expansion matching.
                </p>
              </div>
            </form>
          )}
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="text-xs uppercase tracking-widest font-semibold text-white/80">
            There is a room your city does not have yet.
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
            Build Your Business. Build Your Relationships. Build Your Circle.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#0062D2] text-sm font-bold shadow-lg shadow-black/10 hover:shadow-xl uppercase tracking-wider transition-all"
            >
              Download Unity App
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#register"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/20 transition-all uppercase tracking-wider backdrop-blur-sm"
            >
              Register Interest
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

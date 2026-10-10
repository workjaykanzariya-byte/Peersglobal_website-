'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import { SITE } from '@/lib/data/site'
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Send,
  CheckCircle2,
  Check,
  ExternalLink,
  Headphones,
  Smartphone,
  Sparkles,
  Users,
  Compass,
  Building2,
  Trophy,
  TrendingUp,
  Mic,
  HelpCircle,
  Mail,
  CheckCircle,
} from 'lucide-react'

const SEVEN_ROUTES = [
  {
    id: '01',
    code: 'membership-circle',
    title: 'Membership & Circle Placement',
    desc: 'Exploring membership, understanding Circle criteria, and finding the right industry group.',
    email: 'membership@peersglobal.com',
    icon: Users,
    tag: 'Ecosystem Entry',
    iconBg: 'bg-blue-50 border-blue-100 text-[#1D4ED8]',
  },
  {
    id: '02',
    code: 'leadership-governance',
    title: 'Leadership & Founding a Circle',
    desc: 'Applying for Circle Founder, Circle Director, or Regional Stewardship positions.',
    email: 'leadership@peersglobal.com',
    icon: Compass,
    tag: 'Executive Governance',
    iconBg: 'bg-purple-50 border-purple-100 text-purple-600',
  },
  {
    id: '03',
    code: 'partnerships-alliances',
    title: 'Institutional Partnerships & Alliances',
    desc: 'Trade chambers, industry bodies, academic institutions, and ecosystem co-creation.',
    email: 'partners@peersglobal.com',
    icon: Building2,
    tag: 'Global Alliances',
    iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
  },
  {
    id: '04',
    code: 'sponsorship-events',
    title: 'Sponsorship & Conclaves',
    desc: 'Underwriting regional conclaves, masterclasses, awards, and community publications.',
    email: 'sponsorship@peersglobal.com',
    icon: Trophy,
    tag: 'Events & Conclaves',
    iconBg: 'bg-amber-50 border-amber-100 text-amber-600',
  },
  {
    id: '05',
    code: 'investors-capital',
    title: 'Investors & Growth Capital',
    desc: 'Accredited investment dialogue, fundraise queries, and infrastructure scaling.',
    email: 'investors@peersglobal.com',
    icon: TrendingUp,
    tag: 'Growth Capital',
    iconBg: 'bg-rose-50 border-rose-100 text-[#E11D48]',
  },
  {
    id: '06',
    code: 'media-press',
    title: 'Media, Press & Speaking Enquiries',
    desc: 'Journalist queries, founder interviews with Dr. Pravin Parmar, and editorial assets.',
    email: 'media@peersglobal.com',
    icon: Mic,
    tag: 'Press & Media',
    iconBg: 'bg-cyan-50 border-cyan-100 text-cyan-600',
  },
  {
    id: '07',
    code: 'general-support',
    title: 'General Inquiries & Community Support',
    desc: 'General curiosity, technical questions, or routing guidance across our ecosystem.',
    email: 'hello@peersglobal.com',
    icon: HelpCircle,
    tag: 'Central Secretariat',
    iconBg: 'bg-slate-100 border-slate-200 text-slate-700',
  }
]

const MEMBER_CONVERSATION_POINTS = [
  'Your Circle',
  'Another Peer',
  'A Peer-to-Peer meeting',
  'Membership',
  'Unity App',
  'Community participation',
  'Circle matters'
]

const GENERAL_ENQUIRY_DOORS = [
  'Exploring PEERS GLOBAL',
  'Looking for a Circle',
  'Interested in collaboration',
  'Considering a partnership',
  'Interested in investment',
  'Looking for media information',
  'Exploring an opportunity to work with us'
]

const OFFICIAL_SOCIALS = [
  {
    name: 'LinkedIn',
    handle: 'PEERS GLOBAL',
    url: 'https://linkedin.com/company/peersglobal',
    category: 'Corporate Network',
    iconColor: 'from-[#0A66C2] to-[#004182]',
    bgLight: 'hover:border-[#0A66C2]/40 hover:shadow-[#0A66C2]/10',
    tag: 'Official Profile'
  },
  {
    name: 'Instagram',
    handle: '@peersglobal',
    url: 'https://instagram.com/peersglobal',
    category: 'Visual & Stories',
    iconColor: 'from-[#E1306C] via-[#FD1D1D] to-[#F77737]',
    bgLight: 'hover:border-[#E1306C]/40 hover:shadow-[#E1306C]/10',
    tag: 'Visual Updates'
  },
  {
    name: 'Facebook',
    handle: 'PEERS GLOBAL Community',
    url: 'https://facebook.com/peersglobal',
    category: 'Regional Community',
    iconColor: 'from-[#1877F2] to-[#0D5EC4]',
    bgLight: 'hover:border-[#1877F2]/40 hover:shadow-[#1877F2]/10',
    tag: 'Community Hub'
  },
  {
    name: 'YouTube',
    handle: 'PEERS GLOBAL Official',
    url: 'https://youtube.com/@peersglobal',
    category: 'Talks & Broadcasts',
    iconColor: 'from-[#FF0000] to-[#C40000]',
    bgLight: 'hover:border-[#FF0000]/40 hover:shadow-[#FF0000]/10',
    tag: 'Video Channel'
  },
  {
    name: 'X (Twitter)',
    handle: '@peersglobal',
    url: 'https://x.com/peersglobal',
    category: 'Public Bulletins',
    iconColor: 'from-[#0F1419] to-[#272C30]',
    bgLight: 'hover:border-slate-800/40 hover:shadow-slate-900/10',
    tag: 'Dispatches'
  }
]

export function ContactPageClient() {
  const [selectedRoute, setSelectedRoute] = useState(SEVEN_ROUTES[0].title)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100 selection:text-[#E11D48]">
      {/* ── Top Navigation Bar ── */}
      <div className="border-b border-slate-200/70 bg-white/90 backdrop-blur-md sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold brand-gradient-text">Contact</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-50/80 to-rose-50/80 border border-slate-200">
              <Headphones className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span className="brand-gradient-text">Direct Human Secretariat</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Signature Hero Section (Home & Circles Master Design Layout) ── */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-0 pb-12 sm:pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Home-style full-bleed hero with video backdrop */}
          <div className="min-h-[520px] lg:min-h-[580px] flex items-center">

            {/* Media Background Layer (Right ~60% fading into white on the left) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
            >
              {/* Active Video Background */}
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/circles-hero-new.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover object-center"
              />

              {/* Dark scrim matching the home hero */}
              <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)] pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="hidden">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  We Are Listening
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Direct Secretariat
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Human Connection
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="hidden">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    DIRECT HUMAN SECRETARIAT
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    CONTACT PEERS GLOBAL
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl lg:max-w-2xl flex flex-col items-start text-left">

                {/* Eyebrow with brand gradient bar */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/90">
                    DIRECT HUMAN SECRETARIAT
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold text-white tracking-tight leading-[1.14] mb-4">
                  We are here <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400">
                    to listen.
                  </span>
                </h1>

                {/* Subtitle & Descriptions */}
                <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed mb-6 max-w-2xl">
                  Whether you are already a Peer, exploring the community, looking to collaborate, interested in partnering, or simply have a question, we want your message to reach the right person.
                </p>

                {/* Featured Highlight Quote Card */}
                <div className="border-l-2 border-[#E11D48] pl-3 py-0.5 mb-8 max-w-xl">
                  <p className="italic text-white/95 text-sm sm:text-base font-medium">
                    &ldquo;Because contact should not feel like entering a system. It should feel like reaching a human being.&rdquo;
                  </p>
                  <p className="text-xs text-slate-300 mt-1 font-medium">
                    Every message is directly routed to dedicated department stewards.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
                  <GalaxyButton
                    href="#send-message"
                    variant="primary"
                    size="md"
                  >
                    Send Us a Message
                  </GalaxyButton>

                  <GalaxyButton
                    href="#how-can-we-help"
                    variant="transparent"
                    size="md"
                    showIcon={false}
                  >
                    The 7 Categories
                  </GalaxyButton>

                  <GalaxyButton
                    href="#already-a-peer"
                    variant="transparent"
                    size="md"
                    showIcon={false}
                  >
                    Already a Peer?
                  </GalaxyButton>
                </div>

                {/* Quick Info Bar */}
                <div className="flex items-center gap-6 text-xs text-slate-300 pt-2 border-t border-white/15 w-full max-w-lg">
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>24–48h Secretariat SLA</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span>Direct Human Handling</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* 4-Item Floating Stats Bar */}
          <div className="relative z-10 mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { val: '7 Direct Routes', label: 'Department Routing', sub: 'Zero spam, straight to steward' },
              { val: '< 24h Response', label: 'Secretariat SLA', sub: 'Human response guarantee' },
              { val: '100% Confidential', label: 'Protected Dialogue', sub: 'Executive discretion' },
              { val: 'Ahmedabad HQ', label: 'Global Headquarters', sub: 'Gujarat, Bharat' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="font-serif text-lg sm:text-xl font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                  {stat.val}
                </div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">{stat.label}</div>
                <div className="text-[11px] text-slate-500 font-normal">{stat.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ALREADY A PEER? (FOR MEMBERS - UNITY APP) ── */}
      <section id="already-a-peer" className="py-14 sm:py-18 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-xl border border-slate-800">
            {/* Subtle radial ambient glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wider text-rose-300">
                  <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                  <span className="uppercase">Already a Peer?</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
                  Your fastest route is inside <span className="bg-gradient-to-r from-blue-400 via-rose-300 to-rose-400 bg-clip-text text-transparent">Unity</span>.
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                  If you are already part of PEERS GLOBAL, the Unity App is the place to begin. It is designed to connect you instantly with the people, conversations and real-time support relevant to your journey.
                </p>

                <div className="pt-2">
                  <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2.5">
                    Direct Community Channels for:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {MEMBER_CONVERSATION_POINTS.map((pt, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-xs text-slate-200 font-medium transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-400 italic pt-1 border-t border-white/10 max-w-xl">
                  Keeping these conversations within your community channel ensures privacy, context, and immediate secretariat support.
                </p>
              </div>

              {/* Right CTA */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-3">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:scale-105 transition-all"
                >
                  <span>Ask in the Unity App</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs text-slate-400 text-center lg:text-right">
                  For membership, Circle matters &amp; 1-to-1 syncs
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW CAN WE HELP? (THE 7 ROUTED CATEGORIES) ── */}
      <section id="how-can-we-help" className="py-20 sm:py-28 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                INTELLIGENT HUMAN ROUTING
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f131a] leading-[1.12]">
              How can we <span className="brand-gradient-text">help you?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              Tell us where your message belongs. Choose the dedicated pathway below to route your enquiry directly to that department steward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEVEN_ROUTES.map((route) => {
              const IconComp = route.icon
              const isSelected = selectedRoute === route.title

              return (
                <div
                  key={route.id}
                  onClick={() => {
                    setSelectedRoute(route.title)
                    const el = document.getElementById('send-message')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`group relative p-6 sm:p-7 rounded-2xl bg-white border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 ${isSelected
                      ? 'border-[#1D4ED8] shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/20 -translate-y-1.5'
                      : 'border-slate-200 shadow-xs hover:border-[#1D4ED8]/60 hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-2'
                    }`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon + Route ID + Tag */}
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-110 group-hover:shadow-md ${route.iconBg}`}>
                        <IconComp className="w-5 h-5 transition-transform duration-300" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80 group-hover:border-slate-300 transition-colors">
                          ROUTE {route.id}
                        </span>
                        <span className="text-[11px] text-slate-600 font-medium bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-200/60 group-hover:bg-blue-50/70 group-hover:text-[#1D4ED8] group-hover:border-blue-200/80 transition-all">
                          {route.tag}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-bold text-[#0f131a] tracking-tight leading-snug group-hover:text-[#1D4ED8] transition-colors">
                        {route.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {route.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-400 font-mono group-hover:text-slate-600 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1D4ED8] transition-colors" />
                      <span className="truncate max-w-[150px] sm:max-w-[170px]">{route.email}</span>
                    </div>

                    <div className={`inline-flex items-center gap-1 font-bold transition-all duration-300 ${isSelected
                        ? 'text-[#1D4ED8]'
                        : 'text-slate-500 group-hover:text-[#1D4ED8]'
                      }`}>
                      <span>{isSelected ? 'Selected' : 'Select Route'}</span>
                      {isSelected ? (
                        <CheckCircle className="w-4 h-4 text-[#1D4ED8]" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SEND US A MESSAGE (FORM) ── */}
      <section id="send-message" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                DIRECT DESK TRANSMISSION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f131a] leading-[1.12]">
              Send us a <span className="brand-gradient-text">message.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
              You do not need to navigate complex departments. Just tell us what you need, and our human secretariat will guide you.
            </p>
          </div>

          <div className="bg-[#FAFBFD] rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 text-[#1D4ED8] rounded-full flex items-center justify-center mx-auto shadow-2xs">
                  <Check className="w-8 h-8 text-[#1D4ED8]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0f131a] tracking-tight">Message Routed Successfully</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Your message has been directly assigned to the <strong className="text-slate-950">{selectedRoute}</strong> desk. A human representative will review and reply within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
                <div className="space-y-2">
                  <label className="font-bold text-[#0f131a] block">
                    YOUR PREFERRED ROUTE (Choose one of the 7 routes) *
                  </label>
                  <select
                    value={selectedRoute}
                    onChange={(e) => setSelectedRoute(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] text-slate-900 shadow-2xs font-medium"
                  >
                    {SEVEN_ROUTES.map((r) => (
                      <option key={r.id} value={r.title}>
                        Route {r.id} — {r.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="space-y-2">
                    <label className="font-bold text-[#0f131a] block">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] text-slate-900 shadow-2xs"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold text-[#0f131a] block">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] text-slate-900 shadow-2xs"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold text-[#0f131a] block">Phone Number *</label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      required
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] text-slate-900 shadow-2xs"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-[#0f131a] block">
                    YOUR MESSAGE (What would you like to talk to us about?) *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe what you are building, exploring, or need assistance with..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] text-slate-900 shadow-2xs"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80">
                  <p className="text-xs text-slate-500 font-medium">
                    Your message will be routed directly to department stewards.
                  </p>
                  <GalaxyButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Routing Message...' : 'Send Message'}
                  </GalaxyButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOR GENERAL ENQUIRIES ── */}
      <section className="py-20 sm:py-28 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    OPEN DOORS
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0f131a] tracking-tight">
                  For General Enquiries
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Not every conversation begins with membership. Whatever brings you here, tell us what you are trying to understand. We will help you find the right door.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {GENERAL_ENQUIRY_DOORS.map((door, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/90 text-xs font-medium text-slate-800 flex items-center gap-2 shadow-2xs hover:border-slate-300 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                    <span>{door}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* COMPANY DETAILS CARD */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider brand-gradient-text">
                  STATUTORY &amp; CORPORATE DETAILS
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0f131a] tracking-tight">
                PEERS GLOBAL BUSINESS MEDIA PRIVATE LIMITED
              </h3>

              <div className="space-y-2 text-xs font-mono text-slate-700 pt-2 border-t border-slate-100">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Corporate Identity (CIN):</span>
                  <span className="text-slate-900 font-bold">U22219GJ2022PTC137646</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">GST Registration:</span>
                  <span className="text-slate-900 font-bold">24AANCP4546L1ZY</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Official Inquiries:</span>
                  <span className="brand-gradient-text font-bold">hello@peersglobal.com</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Headquartered:</span>
                  <span className="text-slate-900 font-medium">Ahmedabad, Gujarat, Bharat</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">Founded by:</span>
                  <span className="text-slate-900 font-bold">Dr. Pravin Parmar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GRIEVANCE REDRESSAL ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 max-w-4xl mx-auto space-y-6 shadow-xs">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  FORMAL GOVERNANCE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f131a] tracking-tight">
                Grievance Redressal
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Some messages require a dedicated formal escalation channel. For official compliance or grievance matters, please use our designated governance desk.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl bg-white border border-slate-200/80 text-xs sm:text-sm text-slate-800 shadow-2xs">
              <div className="space-y-1">
                <span className="text-slate-500 block text-xs font-medium">Designated Officer:</span>
                <span className="text-slate-950 font-bold text-sm">Office of Grievance Redressal</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 block text-xs font-medium">Direct Governance Channel:</span>
                <a href="mailto:grievance@peersglobal.com" className="brand-gradient-text hover:underline font-bold text-sm block">
                  grievance@peersglobal.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR OFFICIAL SOCIAL ACCOUNTS ── */}
      <section className="py-20 sm:py-28 bg-[#F8FAFD] border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle decorative background gradient accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-200/60">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  Verified Digital Presence
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-slate-950 tracking-tight leading-tight">
                Our Official Social Accounts
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Connect with PEERS GLOBAL across our verified communication channels. For your security and authenticity, refer exclusively to the handles listed below.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold shrink-0 self-start md:self-end shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Authenticated Directory</span>
            </div>
          </div>

          {/* Social Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {OFFICIAL_SOCIALS.map((soc, idx) => (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${soc.bgLight}`}
              >
                {/* Top Subtle Gradient Accent Line */}
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${soc.iconColor} opacity-70 group-hover:opacity-100 transition-opacity`} />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-tr ${soc.iconColor}`} />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold px-2 py-0.5 rounded-md bg-slate-50 border border-slate-100">
                      {soc.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-600 transition-colors">
                      {soc.name}
                    </h3>
                    <p className="text-base font-bold text-slate-900 mt-1 tracking-tight group-hover:text-[#1D4ED8] transition-colors break-words">
                      {soc.handle}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 font-medium">
                      {soc.category}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#1D4ED8] transition-colors">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-medium text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-bold">
                    <span>Visit</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Security Notice Pill */}
          <div className="flex items-center justify-center gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 text-center max-w-3xl mx-auto shadow-2xs">
            <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 hidden sm:block" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              <strong className="text-slate-900 font-semibold">Security Advisory:</strong> These are our only official global profiles. If an account is not listed in this authenticated directory, do not assume it represents PEERS GLOBAL.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL HOME-THEMED CLOSING BANNER ── */}
      <section className="relative py-12 sm:py-16 bg-[#040F24] text-white overflow-hidden border-t border-slate-800">
        {/* Deep celestial radial gradients & luminous aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(0,98,210,0.22),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(225,29,72,0.15),transparent_50%),linear-gradient(115deg,#020817_0%,#071a3d_50%,#040f24_100%)]"
        />

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* SVG Orbital Geometric Lines Background */}
        <div className="absolute -right-16 -top-16 bottom-0 pointer-events-none w-[360px] sm:w-[480px] lg:w-[580px] opacity-20 overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 600 600" fill="none" className="w-full h-full text-white/30" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 450 A 420 420 0 0 1 550 50" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 120 520 A 500 500 0 0 1 600 120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <path d="M 220 580 A 460 460 0 0 1 580 220" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="280" y1="220" x2="380" y2="120" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="280" cy="220" r="4.5" fill="#7DD3FC" />
            <circle cx="280" cy="220" r="10" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Column: Heading, Ethos & Punchline */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-3.5">
              <div className="inline-flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400">
                  WE ARE LISTENING
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Every meaningful relationship begins with a <span className="italic text-cyan-200">conversation.</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
                Whether you are exploring, joining, leading or partnering — our desks are open and ready to connect.
              </p>
            </div>

            {/* Right Column: Interactive Quick Actions */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end lg:items-end w-full">
              <GalaxyButton
                href="#send-message"
                variant="primary"
                size="md"
                className="w-full sm:w-auto lg:w-full max-w-xs"
              >
                Start a Conversation
              </GalaxyButton>

              <GalaxyButton
                href="/our-story"
                variant="transparent"
                size="md"
                className="w-full sm:w-auto lg:w-full max-w-xs"
              >
                Read Our Story
              </GalaxyButton>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

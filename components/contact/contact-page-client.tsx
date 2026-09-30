'use client'

import React, { useState } from 'react'
import Link from 'next/link'
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
} from 'lucide-react'

const SEVEN_ROUTES = [
  {
    id: '01',
    code: 'membership-circle',
    title: 'Membership & Circle Placement',
    desc: 'Exploring membership, understanding Circle criteria, and finding the right industry group.',
    email: 'membership@peersglobal.com'
  },
  {
    id: '02',
    code: 'leadership-governance',
    title: 'Leadership & Founding a Circle',
    desc: 'Applying for Circle Founder, Circle Director, or Regional Stewardship positions.',
    email: 'leadership@peersglobal.com'
  },
  {
    id: '03',
    code: 'partnerships-alliances',
    title: 'Institutional Partnerships & Alliances',
    desc: 'Trade chambers, industry bodies, academic institutions, and ecosystem co-creation.',
    email: 'partners@peersglobal.com'
  },
  {
    id: '04',
    code: 'sponsorship-events',
    title: 'Sponsorship & Conclaves',
    desc: 'Underwriting regional conclaves, masterclasses, awards, and community publications.',
    email: 'sponsorship@peersglobal.com'
  },
  {
    id: '05',
    code: 'investors-capital',
    title: 'Investors & Growth Capital',
    desc: 'Accredited investment dialogue, fundraise queries, and infrastructure scaling.',
    email: 'investors@peersglobal.com'
  },
  {
    id: '06',
    code: 'media-press',
    title: 'Media, Press & Speaking Enquiries',
    desc: 'Journalist queries, founder interviews with Dr. Pravin Parmar, and editorial assets.',
    email: 'media@peersglobal.com'
  },
  {
    id: '07',
    code: 'general-support',
    title: 'General Inquiries & Community Support',
    desc: 'General curiosity, technical questions, or routing guidance across our ecosystem.',
    email: 'hello@peersglobal.com'
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
    name: 'LINKEDIN',
    handle: 'PEERS GLOBAL',
    url: 'https://linkedin.com/company/peersglobal',
    status: 'Official Community Channel'
  },
  {
    name: 'INSTAGRAM',
    handle: '@peersglobal',
    url: 'https://instagram.com/peersglobal',
    status: 'Official Visual Stories'
  },
  {
    name: 'FACEBOOK',
    handle: 'PEERS GLOBAL Community',
    url: 'https://facebook.com/peersglobal',
    status: 'Official Regional Updates'
  },
  {
    name: 'YOUTUBE',
    handle: 'PEERS GLOBAL Official',
    url: 'https://youtube.com/@peersglobal',
    status: 'Official Video Broadcasts & Talks'
  },
  {
    name: 'X (TWITTER)',
    handle: '@peersglobal',
    url: 'https://x.com/peersglobal',
    status: 'Official Public Announcements'
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
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Hero Banner with Smooth Left-Fading Media/Video Backdrop */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] flex items-center">
            
            {/* Media Background Layer (Right ~60% fading into white on the left) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
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

              {/* Seamless gradient overlays for misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
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
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none hidden sm:block">
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
                  <span className="h-0.5 w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    DIRECT HUMAN SECRETARIAT
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-slate-950 tracking-tight leading-[1.12] mb-4">
                  We are here <br />
                  <span className="italic bg-gradient-to-r from-[#1D4ED8] via-[#8B5CF6] to-[#E11D48] bg-clip-text text-transparent font-medium">
                    to listen.
                  </span>
                </h1>

                {/* Subtitle & Descriptions */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6 max-w-lg">
                  Whether you are already a Peer, exploring the community, looking to collaborate, interested in partnering, or simply have a question, we want your message to reach the right person.
                </p>

                {/* Featured Highlight Quote Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-rose-50/50 border border-blue-100/80 mb-8 max-w-lg">
                  <p className="font-serif italic text-slate-900 text-sm sm:text-base font-medium">
                    “Because contact should not feel like entering a system. It should feel like reaching a human being.”
                  </p>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Every message is directly routed to dedicated department stewards.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
                  <a
                    href="#send-message"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider shadow-lg shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2 uppercase"
                  >
                    <span>Send Us a Message</span>
                    <ArrowRight className="size-4" />
                  </a>

                  <a
                    href="#already-a-peer"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider transition-all hover:scale-105 hover:bg-slate-50 shadow-2xs inline-flex items-center gap-2 uppercase"
                  >
                    <span>Already a Peer?</span>
                  </a>

                  <a
                    href="#how-can-we-help"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-700 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider transition-all hover:scale-105 hover:bg-slate-50 shadow-2xs inline-flex items-center gap-2 uppercase"
                  >
                    <span>The 7 Categories</span>
                  </a>
                </div>

                {/* Quick Info Bar */}
                <div className="flex items-center gap-6 text-xs text-slate-500 pt-2 border-t border-slate-200/80 w-full max-w-lg">
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>24–48h Secretariat SLA</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-4 h-4 text-[#1D4ED8]" />
                    <span>Direct Human Handling</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── ALREADY A PEER? (FOR MEMBERS) ── */}
      <section id="already-a-peer" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-50/60 via-white to-rose-50/40 border border-slate-200 space-y-6 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs">
                  <Smartphone className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  <span className="brand-gradient-text font-bold">ALREADY A PEER?</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                  Your fastest route is inside Unity.
                </h2>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  If you are already part of PEERS GLOBAL, the Unity App is the place to begin. It is designed to connect you with the people, conversations and support relevant to your journey.
                </p>

                <div className="pt-2">
                  <p className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-2">
                    Your community conversations belong inside the community. If your question relates to:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {MEMBER_CONVERSATION_POINTS.map((pt, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 font-medium shadow-2xs"
                      >
                        ● {pt}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic pt-1">
                  Keeping these conversations within the appropriate community channel helps protect context, relationships and privacy.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-end justify-center space-y-2">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  ASK IN THE UNITY APP <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs text-slate-500 text-center lg:text-right">
                  For membership, Circle matters &amp; 1-to-1 syncs
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW CAN WE HELP? (THE 7 ROUTED CATEGORIES) ── */}
      <section id="how-can-we-help" className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Intelligent Human Routing
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              HOW CAN WE HELP?
            </h2>
            <p className="text-slate-700 text-base sm:text-lg">
              Tell us where your message belongs. To help us respond meaningfully, choose the category that best describes why you are reaching out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEVEN_ROUTES.map((route) => (
              <div
                key={route.id}
                onClick={() => {
                  setSelectedRoute(route.title)
                  const el = document.getElementById('send-message')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`p-7 rounded-2xl bg-white border transition-all cursor-pointer flex flex-col justify-between group shadow-xs ${
                  selectedRoute === route.title
                    ? 'border-slate-900 shadow-md ring-2 ring-rose-500/20'
                    : 'border-slate-200 hover:border-slate-400'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-900 bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 px-2.5 py-1 rounded-lg">
                      ROUTE {route.id}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{route.email}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-slate-950 group-hover:text-[#1D4ED8] transition-colors">
                    {route.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{route.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Select Route</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1D4ED8] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEND US A MESSAGE (FORM) ── */}
      <section id="send-message" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Direct Desk Transmission
              </span>
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              SEND US A MESSAGE
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              You do not need to know who to contact. Just tell us what you need.
            </p>
          </div>

          <div className="bg-[#FAFBFD] rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 text-[#1D4ED8] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">Message Routed Successfully</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Your message has been directly assigned to the <strong className="text-slate-950">{selectedRoute}</strong> desk. A human representative will review and reply within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-800">
                    YOUR PREFERRED ROUTE (Choose one of the 7 routes) *
                  </label>
                  <select
                    value={selectedRoute}
                    onChange={(e) => setSelectedRoute(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                  >
                    {SEVEN_ROUTES.map((r) => (
                      <option key={r.id} value={r.title}>
                        Route {r.id} — {r.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-800">
                    YOUR MESSAGE (What would you like to talk to us about?) *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe what you are building, exploring, or need assistance with..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500">
                    Your message will be routed to the appropriate team rather than placed into a generic inbox.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-full font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:from-[#1E40AF] hover:to-[#BE123C] text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider shrink-0 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      'Routing Message...'
                    ) : (
                      <>
                        SEND MESSAGE <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOR GENERAL ENQUIRIES ── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Open Doors
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mb-3">
                  FOR GENERAL ENQUIRIES
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Not every conversation begins with membership. Whatever brings you here, tell us what you are trying to understand. We will help you find the right door.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {GENERAL_ENQUIRY_DOORS.map((door, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                    <span>{door}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* COMPANY DETAILS CARD */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-4 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider brand-gradient-text">
                  STATUTORY &amp; CORPORATE DETAILS
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950">
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
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200 max-w-4xl mx-auto space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#1D4ED8]" />
                <span className="brand-gradient-text">FORMAL GOVERNANCE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                GRIEVANCE REDRESSAL
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                Some messages require a different route. For a formal grievance, please use the designated grievance redressal process.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-800 font-mono">
              <div>
                <span className="text-slate-500 block mb-1">Designated Officer:</span>
                <span className="text-slate-950 font-bold">Office of Grievance Redressal</span>
              </div>
              <div>
                <span className="text-slate-500 block mb-1">Direct Governance Channel:</span>
                <a href="mailto:grievance@peersglobal.com" className="brand-gradient-text hover:underline font-bold">
                  grievance@peersglobal.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR OFFICIAL SOCIAL ACCOUNTS ── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Verified Channels
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              OUR OFFICIAL SOCIAL ACCOUNTS
            </h2>
            <p className="text-slate-700 text-sm sm:text-base">
              You will find PEERS GLOBAL in several places online. For your security, please use only the accounts officially listed by us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {OFFICIAL_SOCIALS.map((soc, idx) => (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between group space-y-4"
              >
                <div>
                  <span className="text-xs font-mono font-bold brand-gradient-text block mb-1">
                    {soc.name}
                  </span>
                  <div className="text-sm font-bold text-slate-950 group-hover:text-[#1D4ED8] transition-colors">
                    {soc.handle}
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Verified</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1D4ED8]" />
                </div>
              </a>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 text-center max-w-2xl mx-auto text-xs text-slate-500 font-medium">
            These are our only official accounts. If an account is not listed here, do not assume it represents PEERS GLOBAL.
          </div>
        </div>
      </section>

      {/* ── FINAL HOME-THEMED CLOSING BANNER ── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-20 md:py-28">
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

        {/* Subtle geometric orbital line art */}
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
          <div className="flex items-center justify-center gap-2.5">
            <span className="h-[1.5px] w-6 bg-white/70" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              WE ARE LISTENING
            </span>
            <span className="h-[1.5px] w-6 bg-white/70" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
            EVERY MEANINGFUL RELATIONSHIP BEGINS WITH A CONVERSATION
          </h2>

          <p className="text-lg sm:text-xl text-cyan-200 font-serif italic max-w-xl mx-auto">
            Whether you are exploring, joining, leading or partnering — we are here.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <a
              href="#send-message"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-[0_4px_20px_rgba(225,29,72,0.40)] hover:from-[#1E40AF] hover:to-[#BE123C] hover:shadow-[0_8px_28px_rgba(225,29,72,0.60)] transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Start a Conversation →
            </a>
            <Link
              href="/our-story"
              className="px-6 py-3.5 rounded-full bg-white/[0.08] text-white border border-white/40 hover:bg-white/15 hover:border-white/70 transition-all backdrop-blur-sm"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

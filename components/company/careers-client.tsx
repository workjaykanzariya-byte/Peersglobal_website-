'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Briefcase,
  ChevronRight,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Users,
  Code,
  Video,
  Palette,
  HeartHandshake,
  Headphones,
  Send,
  Building2,
  Sparkles,
} from 'lucide-react'

const OPEN_ROLES = [
  {
    title: 'City Community Operations Lead',
    department: 'Community Operations',
    location: 'Ahmedabad / On-site',
    type: 'Full-time',
    desc: 'Orchestrate monthly Circle meetings, train committee leaders, and maintain high cultural consistency across urban chapters.',
  },
  {
    title: 'Senior Mobile Engineer (Flutter / React Native)',
    department: 'Technology',
    location: 'Ahmedabad / Hybrid',
    type: 'Full-time',
    desc: 'Architect and scale the Unity App ledger, real-time collaboration chats, and cross-border founder discovery engines.',
  },
  {
    title: 'Producer & Video Editor — Vyapaar Jagat TV',
    department: 'Media & Content',
    location: 'Ahmedabad / On-site',
    type: 'Full-time',
    desc: 'Direct, shoot, and edit compelling episodic stories on Indian MSME founders, industrial manufacturing, and grassroots innovators.',
  },
  {
    title: 'Senior Brand & Visual Designer',
    department: 'Design',
    location: 'Ahmedabad / Hybrid',
    type: 'Full-time',
    desc: 'Elevate Peers Global aesthetic across editorial magazines, coffee table books, conclave stages, and digital product touchpoints.',
  },
]

export function CareersClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roleInterest: '',
    portfolioOrLinkedin: '',
    note: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2] antialiased">
      {/* ─── Breadcrumb ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-slate-600">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/about" className="hover:text-slate-900 transition-colors">
            About
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Careers</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-200/80 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                <Briefcase className="w-3.5 h-3.5 text-[#0062D2]" />
                JOIN THE MISSION
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-slate-950 tracking-tight leading-[1.08] font-bold">
                Careers
              </h1>

              <p className="text-xl sm:text-2xl font-serif text-slate-800 font-medium leading-snug">
                Building the infrastructure for how entrepreneurs collaborate.
              </p>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                We are engineering a community platform, a mobile product, a national media ecosystem, and urban operations reaching 1M+ entrepreneurs by 2030.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#open-roles"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0062D2] text-white text-sm font-bold hover:bg-[#1a42c0] transition-all shadow-md shadow-blue-500/20 uppercase tracking-wider"
                >
                  View Open Roles
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Visual: Climbers Team Mission */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group h-72 sm:h-80">
                <Image
                  src="/images/climbers-clean.jpg"
                  alt="Peers Global Team Climbers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-mono uppercase text-amber-300 font-semibold tracking-wider block mb-1">
                    Headquartered in Ahmedabad, Gujarat
                  </span>
                  <p className="font-serif italic text-lg text-white/95 leading-snug">
                    “People who take ownership. Who finish things. Who treat founders as equals.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Who We Hire & What We Are Building ─── */}
      <section className="py-14 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-950">
                Who we hire
              </h2>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                People who take ownership. Who finish things. Who can work with a community rather than at it.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our members are business owners with high standards and little patience for being handled. Everyone here has to be able to talk to them as an equal.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-950">
                What we are building
              </h2>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                A community platform, a mobile product, a media ecosystem and a national operation — reaching 1M+ entrepreneurs by 2030.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#0062D2]" /> Community Ops
                </span>
                <span className="flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-[#0062D2]" /> Technology
                </span>
                <span className="flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-[#0062D2]" /> Media &amp; Content
                </span>
                <span className="flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#0062D2]" /> Product Design
                </span>
                <span className="flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#0062D2]" /> Partnerships
                </span>
                <span className="flex items-center gap-1.5">
                  <Headphones className="w-3.5 h-3.5 text-[#0062D2]" /> Member Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Open Roles (Dark Constellation Theme) ─── */}
      <section id="open-roles" className="relative py-20 md:py-24 border-b border-slate-800 bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D] text-white overflow-hidden">
        {/* Constellation blur orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Current Openings
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Open Roles
              </h2>
              <p className="text-sm text-slate-300">
                Join our full-time core team at our Ahmedabad headquarters.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
              <MapPin className="w-4 h-4 text-cyan-400" />
              Ahmedabad, Gujarat
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {OPEN_ROLES.map((role, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] backdrop-blur-sm shadow-xl hover:border-cyan-500/40 transition-colors space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded-md border border-cyan-800/80">
                      {role.department}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {role.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-white leading-snug">
                    {role.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {role.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{role.location}</span>
                  <a
                    href="#general-application"
                    className="text-cyan-400 font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── General Application Form ─── */}
      <section id="general-application" className="py-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
              General Application
            </h2>
            <p className="text-sm text-slate-600">
              Don&apos;t see your specific role listed today? Send us your background and what you are uniquely built to solve. We review every thoughtful submission.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  Application Logged
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for your interest in building with Peers Global. We will review your profile and reach out if there is mutual alignment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aditi Shah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. aditi@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Area of Interest *</label>
                    <select
                      value={formData.roleInterest}
                      onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
                    >
                      <option value="">Select a department</option>
                      <option value="Community Operations">Community Operations</option>
                      <option value="Technology & Engineering">Technology &amp; Engineering</option>
                      <option value="Media & Content">Media &amp; Content (Vyapaar Jagat)</option>
                      <option value="Design & Creative">Design &amp; Creative</option>
                      <option value="Partnerships & Institutional">Partnerships &amp; Institutional</option>
                      <option value="Member Experience">Member Experience &amp; Support</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Portfolio, GitHub or LinkedIn URL *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://linkedin.com/in/..."
                    value={formData.portfolioOrLinkedin}
                    onChange={(e) => setFormData({ ...formData, portfolioOrLinkedin: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">What have you finished and built? *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about a tough project you saw through from zero to finish, and what you learned."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#0062D2] text-white text-xs sm:text-sm font-bold hover:bg-[#1a42c0] transition-all uppercase tracking-wider shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
                  >
                    Submit Application
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

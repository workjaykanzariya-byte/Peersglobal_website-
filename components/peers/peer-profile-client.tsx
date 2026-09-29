'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Building2,
  MapPin,
  Briefcase,
  Copy,
  Check,
  Calendar,
  Users2,
  Crown,
  Share2,
  User,
  Link2,
  CheckCircle2,
  Mail,
  Sparkles,
  ExternalLink,
  Apple,
  Smartphone,
  X,
  MessageSquare,
} from 'lucide-react'
import { PeerMemberProfile } from '@/lib/api/members'

interface PeerProfileClientProps {
  profile: PeerMemberProfile
  username: string
}

export function PeerProfileClient({ profile, username }: PeerProfileClientProps) {
  const [copied, setCopied] = useState(false)
  const [meetingModalOpen, setMeetingModalOpen] = useState(false)
  const [meetingSent, setMeetingSent] = useState(false)
  const [emailInput, setEmailInput] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  // Profile data extraction with sensible fallbacks
  const name = profile.name || 'Peers Global Genie'
  const photo =
    profile.photo ||
    profile.profile_photo_url ||
    profile.profile_image_url ||
    '/images/floating-trigger-emblem.png'
  const designation = profile.designation || 'Verified Peer Member'
  const company = profile.company || profile.company_name || 'Peers Global Member Company'
  const city = profile.city || profile.city_name || 'Ahmedabad, India'
  const activeCircleName =
    profile.active_circle_name || profile.active_circle?.name || 'Peers Global Circle'
  const membershipTier =
    profile.membership_status_label || profile.membership_status || 'Free Trial Peer'
  const publicSlug = profile.public_profile_slug || profile.slug || username || 'peers'

  // Dynamic Rich Bio
  const bio =
    profile.bio ||
    profile.business_description ||
    (profile as any).experience_summary ||
    `${name} is the ${designation} at ${company} based in ${city}. Active verified ${membershipTier} holding a governed category seat in ${activeCircleName}.`

  const shareUrl = `https://peersglobal.com/[${publicSlug}]`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailInput || !emailInput.includes('@')) return
    setSubscribed(true)
  }

  const handleMeetingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMeetingSent(true)
    setTimeout(() => {
      setMeetingSent(false)
      setMeetingModalOpen(false)
    }, 2200)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans antialiased">
      {/* ─── 1. BREADCRUMB BAR ────────────────────────────────────────── */}
      <div className="border-b border-slate-200/80 bg-white sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/unity" className="hover:text-[#0062D2] transition-colors">
              Unity
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/unity/directory" className="hover:text-[#0062D2] transition-colors">
              Peer Directory
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px]">
              {name}
            </span>
          </nav>
        </div>
      </div>

      {/* ─── 2. HERO SHOWCASE BANNER ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-white via-slate-50 to-[#0A192F] border-b border-slate-200/90 py-10 sm:py-14">
        {/* Background Network Overlay Graphic on Right */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 pointer-events-none overflow-hidden opacity-95">
          <Image
            src="/images/navbar-earth-bg.jpg"
            alt="Global Network Connections"
            fill
            className="object-cover object-right"
            priority
          />
          {/* Subtle blend gradient from left to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 lg:via-white/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Avatar + Identification */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Profile Avatar Card with Verified Badge */}
              <div className="relative size-32 sm:size-36 rounded-3xl overflow-hidden bg-white p-2.5 border-2 border-slate-200 shadow-xl shrink-0 flex items-center justify-center">
                <div className="relative size-full rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center">
                  <Image
                    src={photo}
                    alt={name}
                    fill
                    className="object-contain p-1"
                    priority
                  />
                </div>
                {/* Green Verified Shield Badge */}
                <div
                  className="absolute bottom-2 right-2 bg-emerald-500 text-white rounded-full p-1 shadow-md border-2 border-white"
                  title="Verified Unity App Member"
                >
                  <ShieldCheck className="size-4" />
                </div>
              </div>

              {/* Identity & Badges */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  {/* Amber Membership Tier Badge */}
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-amber-900 bg-amber-100/90 border border-amber-300 shadow-2xs">
                    <Crown className="size-3 text-amber-700" />
                    <span>{membershipTier}</span>
                  </span>

                  {/* Blue Active Circle Badge */}
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-[#0062D2] bg-blue-50 border border-blue-200 shadow-2xs">
                    <span className="size-1.5 rounded-full bg-[#0062D2]" />
                    <span>{activeCircleName}</span>
                  </span>
                </div>

                {/* H1 Name in Crisp Serif Typography */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
                  {name}
                </h1>

                {/* Subtitle Designation & Company */}
                <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-700">
                  <Briefcase className="size-4 text-amber-600 shrink-0" />
                  <span>
                    {designation} —{' '}
                    <span className="text-slate-900 font-bold">{company}</span>
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 font-medium">
                  <MapPin className="size-3.5 text-slate-400 shrink-0" />
                  <span>{city}</span>
                </div>
              </div>
            </div>

            {/* Right: Vision Script + Action Buttons */}
            <div className="lg:col-span-5 flex flex-col lg:items-end justify-between gap-6">
              {/* Script Quote & Tagline */}
              <div className="text-left lg:text-right space-y-1">
                <p
                  className="text-2xl sm:text-3xl font-light italic text-slate-900 lg:text-white drop-shadow-sm"
                  style={{ fontFamily: 'var(--font-script, Georgia, cursive)' }}
                >
                  “Real People.
                  <br />
                  Real Businesses.
                  <br />
                  Real Opportunities.”
                </p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-600 lg:text-amber-300 pt-1">
                  A STRONGER MORE INCLUSIVE ENTREPRENEURIAL WORLD.
                </p>
              </div>

              {/* Action CTA Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto lg:w-72 shrink-0">
                {/* Primary Amber/Gold CTA: Connect on Unity App */}
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#E5A93C] hover:bg-[#D99A2D] text-slate-950 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Users2 className="size-4 text-slate-950" />
                  <span>Connect on Unity App</span>
                  <ArrowRight className="size-4 text-slate-950 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                {/* Secondary Glass / Translucent Pill: Request 1-to-1 Meeting */}
                <button
                  type="button"
                  onClick={() => setMeetingModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md px-6 py-3 text-xs sm:text-sm font-semibold transition-all duration-300 hover:border-white/40 active:scale-[0.98] cursor-pointer shadow-md"
                >
                  <Calendar className="size-4 text-slate-300 group-hover:text-white transition-colors" />
                  <span>Request 1-to-1 Meeting</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. MAIN PROFILE CONTENT GRID ────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ─── LEFT COLUMN (2fr equivalent: 8 cols) ─── */}
            <div className="lg:col-span-8 space-y-8">
              {/* Card 1: About & Executive Bio */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="size-10 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shrink-0">
                    <User className="size-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                    About & Executive Bio
                  </h2>
                </div>

                <div className="pt-5 text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
                  <p className="whitespace-pre-line">{bio}</p>
                </div>
              </div>

              {/* Card 2: Governed Seat Details */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shrink-0">
                      <Building2 className="size-5" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                      Governed Seat Details
                    </h2>
                  </div>
                  <span className="text-[11px] font-bold text-[#0062D2] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    1 Category / Seat
                  </span>
                </div>

                {/* 2x2 Grid with Clean Modern Pill Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                  {/* Box 1: City / Location */}
                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex flex-col justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      CITY / LOCATION
                    </span>
                    <span className="text-lg font-bold text-[#0062D2]">
                      {city}
                    </span>
                  </div>

                  {/* Box 2: Active Circle */}
                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex flex-col justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      ACTIVE CIRCLE
                    </span>
                    <span className="text-lg font-bold text-slate-900">
                      {activeCircleName}
                    </span>
                  </div>

                  {/* Box 3: Membership Tier */}
                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex flex-col justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      MEMBERSHIP TIER
                    </span>
                    <span className="text-base font-bold text-[#0062D2]">
                      {membershipTier}
                    </span>
                  </div>

                  {/* Box 4: Governance Status */}
                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex flex-col justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      GOVERNANCE STATUS
                    </span>
                    <span className="text-sm font-bold text-emerald-600 flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                      Verified Active Member
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── RIGHT COLUMN (1fr equivalent: 4 cols) ─── */}
            <div className="lg:col-span-4 space-y-6">
              {/* Card 1: Public Profile Link */}
              <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="size-8 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                    <Link2 className="size-4" />
                  </div>
                  <h3 className="font-serif font-bold text-slate-950 text-lg">
                    Public Profile Link
                  </h3>
                </div>

                <p className="text-xs text-slate-500 font-medium">
                  Shareable public web profile URL:
                </p>

                {/* Copy Input Field with Clipboard Icon */}
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-[#0062D2]">
                  <span className="truncate">{shareUrl}</span>
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#0062D2] hover:border-blue-300 transition-all shrink-0 cursor-pointer"
                    title="Copy Profile Link"
                  >
                    {copied ? (
                      <Check className="size-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="size-3.5" />
                    )}
                  </button>
                </div>

                {/* Primary Action Button: Join Circle with Peers */}
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#0062D2] hover:bg-[#0052B4] text-white font-bold text-sm shadow-md transition-all duration-200 active:scale-98"
                >
                  <Users2 className="size-4" />
                  <span>Join Circle with {name.split(' ')[0]}</span>
                  <ArrowRight className="size-4 ml-0.5" />
                </a>
              </div>

              {/* Card 2: Verified Leadership Standards */}
              <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="size-8 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                    <ShieldCheck className="size-4 text-[#0062D2]" />
                  </div>
                  <h3 className="font-serif font-bold text-slate-950 text-base">
                    Verified Leadership Standards
                  </h3>
                </div>

                <ul className="space-y-3 pt-1 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Category Exclusivity seat holder in {city}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Zero open sales pitch policy inside Circle room</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Synchronized real-time with Unity App backend</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. REQUEST 1-TO-1 MEETING MODAL ─────────────────────────── */}
      {meetingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center">
                  <Calendar className="size-4" />
                </div>
                <h3 className="font-serif font-bold text-slate-950 text-base">
                  Request 1-to-1 with {name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setMeetingModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            {meetingSent ? (
              <div className="py-8 text-center space-y-3">
                <div className="size-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="size-6" />
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-lg">
                  Meeting Request Submitted!
                </h4>
                <p className="text-xs text-slate-500">
                  {name} has received your request. Scheduling will be confirmed via the Unity App.
                </p>
              </div>
            ) : (
              <form onSubmit={handleMeetingSubmit} className="pt-4 space-y-4">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="relative size-11 rounded-full overflow-hidden bg-white border border-slate-200 shrink-0">
                    <Image src={photo} alt={name} fill className="object-contain" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-950 text-sm">{name}</h4>
                    <p className="text-xs text-slate-500">{designation} · {company}</p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#0062D2] focus:ring-2 focus:ring-blue-500/15 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Agenda / Topic of Collaboration *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly state the context or business opportunity you'd like to discuss..."
                    className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#0062D2] focus:ring-2 focus:ring-blue-500/15 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setMeetingModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#0062D2] hover:bg-[#0052B4] text-white text-xs font-bold shadow-md active:scale-98"
                  >
                    Send Meeting Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

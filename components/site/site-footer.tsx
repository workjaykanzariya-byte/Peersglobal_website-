'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Globe,
  ArrowUp,
  Apple,
  Smartphone,
  Mail,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
} from 'lucide-react'
import { SITE, FOOTER_BANDS, ACTIVE_CITIES } from '@/lib/data/site'

export function SiteFooter() {
  const [emailInput, setEmailInput] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<Record<string, boolean>>({})

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleAccordion = (title: string) => {
    setOpenAccordion((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailInput || !emailInput.includes('@')) return
    setSubscribed(true)
  }

  // 6 Main Columns organized cleanly in Microsoft corporate style
  const MICROSOFT_STYLE_COLUMNS = [
    {
      title: 'Our World',
      links: [
        { label: 'The Idea', href: '/the-idea' },
        { label: '10 Forms of Collaboration', href: '/10-forms-of-collaboration' },
        { label: 'The Territory', href: '/the-territory' },
        { label: 'The Citizens', href: '/the-citizens' },
        { label: 'The Currency', href: '/the-currency' },
        { label: 'The Language', href: '/the-language' },
        { label: 'Our Culture & Code', href: '/culture-and-code' },
        { label: 'The 1 Million Mission', href: '/1-million-mission' },
        { label: 'The Give-First Principle', href: '/give-first' },
        { label: 'Life Impact Score', href: '/life-impact-score' },
      ],
    },
    {
      title: 'Circles & Unity',
      links: [
        { label: 'All Circles', href: '/circles' },
        { label: 'Browse by Industry', href: '/circles/industry' },
        { label: 'Browse by Purpose', href: '/circles/purpose' },
        { label: 'Find Your Circle', href: '/circles/find' },
        { label: 'Circle Meeting Experience', href: '/circle-meeting-experience' },
        { label: 'Start a Circle', href: '/start-a-circle' },
        { label: 'Circle Map — Cities', href: '/map' },
        { label: 'Unity Overview', href: '/unity' },
        { label: 'Peer Directory', href: '/unity/directory' },
        { label: 'Circle Magazines', href: '/circle-magazines' },
      ],
    },
    {
      title: 'Membership',
      links: [
        { label: 'Why Join', href: '/membership' },
        { label: 'Who Belongs Here', href: '/who-belongs-here' },
        { label: 'Compare Tiers & Pricing', href: '/membership/tiers' },
        { label: 'What You Get', href: '/membership/benefits' },
        { label: 'Criteria & Process', href: '/membership/criteria' },
        { label: 'Member FAQ', href: '/membership/faq' },
        { label: 'Membership Terms', href: '/membership-terms' },
        { label: 'Join Peers Global', href: '/apply' },
        { label: 'Peer Standing', href: '/peer-standing' },
        { label: 'Peers Coin', href: '/peers-coin' },
      ],
    },
    {
      title: 'Leadership',
      links: [
        { label: 'The Leadership Ladder', href: '/leadership' },
        { label: 'Circle Founder', href: '/leadership/circle-founder' },
        { label: 'Circle Director', href: '/leadership/circle-director' },
        { label: 'Industry Director', href: '/leadership/industry-director' },
        { label: 'Executive Director', href: '/leadership/executive-director' },
        { label: 'Ambassadors', href: '/leadership/ambassadors' },
        { label: 'Global Advisory Board', href: '/leadership/global-advisors' },
        { label: 'Impact Income', href: '/leadership/impact-income' },
        { label: 'Apply to Lead', href: '/leadership/apply' },
        { label: 'Circle Roles', href: '/circle-roles' },
      ],
    },
    {
      title: 'Community Life',
      links: [
        { label: 'Events & Summits', href: '/events' },
        { label: 'Peer Stories', href: '/stories' },
        { label: 'Collaboration Wins', href: '/stories/wins' },
        { label: 'Awards & Recognition', href: '/awards' },
        { label: 'Podcast & Media', href: '/media' },
        { label: 'Vyapaar Jagat TV', href: '/media/vyapaar-jagat-tv' },
        { label: 'VyapaarJagat.com', href: 'https://vyapaarjagat.com', external: true },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Blog & Insights', href: '/insights' },
        { label: 'Masterclasses', href: '/masterclasses' },
      ],
    },
    {
      title: 'Company & Impact',
      links: [
        { label: 'About Peers Global', href: '/about' },
        { label: 'Our Story', href: '/our-story' },
        { label: 'Dr. Pravin Parmar', href: '/founder' },
        { label: 'Our Initiatives', href: '/initiatives' },
        { label: 'Social Impact', href: '/social-impact' },
        { label: 'The Foundation', href: '/foundation' },
        { label: 'Newsroom & Media Kit', href: '/newsroom' },
        { label: 'Partner With Us', href: '/partner' },
        { label: 'Investors', href: '/investors' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
  ]

  return (
    <div className="w-full font-sans antialiased">
      {/* ========================================================================= */}
      {/* 1. THRESHOLD BAND & APP DOWNLOAD                                          */}
      {/* ========================================================================= */}
      <section className="w-full bg-white border-t border-slate-100 py-12 sm:py-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left: Statement + App Badges */}
          <div className="flex flex-col gap-3.5 max-w-2xl text-left items-start">
            {/* Eyebrow with blue dash */}
            <div className="flex items-center gap-2.5">
              <span className="h-[1.5px] w-6 bg-[#0062D2]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                The Core Conviction
              </span>
            </div>

            {/* Heading with italic blue "build alone." */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-slate-900 tracking-tight leading-tight">
              You were never meant to{' '}
              <em
                className="not-italic text-[#0062D2]"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)', fontStyle: 'italic' }}
              >
                build alone.
              </em>
            </h2>

            <p className="text-sm text-slate-500 leading-relaxed">
              The right circle can change your life faster than the right idea.
            </p>

            {/* App Store Badges + Divider + Unity Platform */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={SITE.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-black hover:bg-neutral-800 text-white px-3.5 py-2 transition-colors shadow-xs"
              >
                <Apple className="size-5 fill-white" />
                <div className="text-left leading-none">
                  <span className="block text-[8px] text-gray-300 font-normal">Download on the</span>
                  <span className="block text-xs font-semibold tracking-tight mt-0.5">App Store</span>
                </div>
              </a>

              <a
                href={SITE.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-black hover:bg-neutral-800 text-white px-3.5 py-2 transition-colors shadow-xs"
              >
                <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M3.6 2.4C3.4 2.6 3.2 2.9 3.2 3.4V20.6C3.2 21.1 3.4 21.4 3.6 21.6L12.7 12L3.6 2.4Z" fill="#2196F3" />
                  <path d="M16.3 8.4L13.8 10.9L12.7 12L13.8 13.1L16.3 15.6L20.4 13.3C21.6 12.6 21.6 11.4 20.4 10.7L16.3 8.4Z" fill="#FFC107" />
                  <path d="M12.7 12L3.6 21.6C3.9 21.8 4.3 21.8 4.8 21.5L16.3 15.6L12.7 12Z" fill="#4CAF50" />
                  <path d="M12.7 12L16.3 8.4L4.8 2.5C4.3 2.2 3.9 2.2 3.6 2.4L12.7 12Z" fill="#F44336" />
                </svg>
                <div className="text-left leading-none">
                  <span className="block text-[8px] text-gray-300 uppercase font-semibold">GET IT ON</span>
                  <span className="block text-xs font-semibold tracking-tight mt-0.5">Google Play</span>
                </div>
              </a>

              {/* Vertical divider */}
              <div className="hidden sm:block h-6 w-[1px] bg-slate-200 mx-1.5" />

              <span className="text-xs text-slate-400 font-medium">
                Unity Platform · iOS & Android
              </span>
            </div>
          </div>

          {/* Right: Modern Newsletter Card */}
          <div className="w-full lg:w-auto min-w-[320px] sm:min-w-[420px] lg:min-w-[460px] flex flex-col gap-3 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="size-11 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                <Mail className="size-5 text-[#0062D2]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  Get the Weekly Collaboration Brief
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Real collaboration stories, verified wins, and practical playbooks from MSME owners.
                </p>
              </div>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 p-3 rounded-lg border border-emerald-200 mt-1">
                <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
                <span>Subscribed successfully. You will receive the next Brief.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 mt-1">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your business email"
                  className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0062D2] focus:ring-2 focus:ring-blue-500/15 transition-all"
                />
                <button
                  type="submit"
                  className="whitespace-nowrap rounded-lg bg-[#0062D2] hover:bg-blue-700 text-white px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all shrink-0 shadow-xs active:scale-[0.98]"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-[11px] text-slate-400">
              No spam. Just opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SOCIAL BAR: "Follow Peers Global" (Exact Microsoft Style)              */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-6 border-t border-[#e6e6e6]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center gap-3">
          <span className="text-sm font-semibold text-[#242424]">
            Follow Peers Global
          </span>
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a
              href="https://facebook.com/peersglobal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Peers Global on Facebook"
              className="flex size-9 items-center justify-center rounded-full bg-[#f2f2f2] hover:bg-[#e6e6e6] text-[#1877f2] transition-colors shadow-2xs"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/peersglobal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Peers Global on X"
              className="flex size-9 items-center justify-center rounded-full bg-[#f2f2f2] hover:bg-[#e6e6e6] text-[#111111] transition-colors shadow-2xs"
            >
              <svg className="size-3.5 fill-current" viewBox="0 0 24 24" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@peersglobal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe to Peers Global on YouTube"
              className="flex size-9 items-center justify-center rounded-full bg-[#f2f2f2] hover:bg-[#e6e6e6] text-[#ff0000] transition-colors shadow-2xs"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/peersglobal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Peers Global on LinkedIn"
              className="flex size-9 items-center justify-center rounded-full bg-[#f2f2f2] hover:bg-[#e6e6e6] text-[#0a66c2] transition-colors shadow-2xs"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/peersglobal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Peers Global on Instagram"
              className="flex size-9 items-center justify-center rounded-full bg-[#f2f2f2] hover:bg-[#e6e6e6] text-[#e4405f] transition-colors shadow-2xs"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          <p className="text-[11px] text-[#737373] italic">
            These are our only official accounts.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MAIN FOOTER (Exact Microsoft Clean Light Gray Grid)                    */}
      {/* ========================================================================= */}
      <footer className="w-full bg-[#f2f2f2] text-[#242424] pt-9 pb-8">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* 6 Clean Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-6 sm:gap-y-8">
            {MICROSOFT_STYLE_COLUMNS.map((col) => {
              const isOpen = Boolean(openAccordion[col.title])
              return (
                <div key={col.title} className="flex flex-col border-b border-[#e6e6e6] sm:border-0 pb-3 sm:pb-0 gap-3">
                  {/* Mobile Clickable Header / Desktop Static Header */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(col.title)}
                    className="flex items-center justify-between w-full text-left sm:cursor-auto focus:outline-none"
                  >
                    <h3 className="text-[#404040] font-semibold text-[13px] leading-tight tracking-tight hover:underline">
                      {col.title}
                    </h3>
                    <ChevronDown
                      className={`size-4 text-[#616161] transition-transform duration-200 sm:hidden ${isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                    />
                  </button>

                  {/* Links List */}
                  <ul className={`flex flex-col gap-2.5 ${isOpen ? 'block pt-1' : 'hidden sm:flex'}`}>
                    {col.links.map((link) => {
                      const isExternal = link.external || link.href.startsWith('http')
                      return (
                        <li key={link.label}>
                          {isExternal ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#616161] hover:text-[#111111] hover:underline text-[12px] sm:text-[11px] leading-[1.5] block transition-colors"
                            >
                              {link.label}
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              className="text-[#616161] hover:text-[#111111] hover:underline text-[12px] sm:text-[11px] leading-[1.5] block transition-colors"
                            >
                              {link.label}
                            </Link>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Active Cities Chapter Footnote */}
          <div className="mt-8 pt-5 border-t border-[#e6e6e6] flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] text-[#616161]">
            <span className="font-semibold text-[#404040]">Active Chapters:</span>
            {ACTIVE_CITIES.map((city, idx) => (
              <span key={city} className="flex items-center gap-2">
                <Link href={`/circles?city=${encodeURIComponent(city)}`} className="hover:text-[#0067b8] hover:underline">
                  {city}
                </Link>
                {idx < ACTIVE_CITIES.length - 1 ? <span className="text-[#cccccc]">·</span> : null}
              </span>
            ))}
          </div>

          {/* ======================================================================= */}
          {/* 4. BOTTOM BAR (Exact Microsoft Layout)                                 */}
          {/* ======================================================================= */}
          <div className="mt-6 pt-5 border-t border-[#e6e6e6] flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-[11px] text-[#616161]">
            {/* Left: Language & Region + Privacy Icon */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 shrink-0">
              <div className="inline-flex items-center gap-2 text-[#616161]">
                <Globe className="size-4 text-[#616161]" />
                <span>English (India)</span>
              </div>

              <Link
                href="/legal/privacy-policy"
                className="inline-flex items-center gap-1.5 text-[#616161] hover:text-[#111111] hover:underline"
              >
                <svg className="size-3.5 fill-[#0067b8]" viewBox="0 0 16 16" aria-hidden>
                  <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z" />
                  <path d="M7 4.5h2v7H7z" />
                </svg>
                <span>Your Privacy Choices</span>
              </Link>

              <span className="text-[#737373] hidden sm:inline">
                Designed in Bharat. Built for the World.
              </span>
            </div>

            {/* Right: Legal Links + Copyright */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px]">
              <Link href="/contact" className="hover:text-[#111111] hover:underline">
                Contact Peers Global
              </Link>
              <Link href="/privacy-policy" className="hover:text-[#111111] hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="hover:text-[#111111] hover:underline">
                Terms of Use
              </Link>
              <Link href="/community-guidelines" className="hover:text-[#111111] hover:underline">
                Community Guidelines
              </Link>
              <Link href="/refund-policy" className="hover:text-[#111111] hover:underline">
                Refund Policy
              </Link>
              <Link href="/disclaimer" className="hover:text-[#111111] hover:underline">
                Disclaimer
              </Link>
              <span className="hidden sm:inline text-[#cccccc]">|</span>
              <span className="text-[#737373] block w-full sm:w-auto">
                CIN: {SITE.cin} · GST: {SITE.gstin}
              </span>
              <span className="text-[#737373] block w-full sm:w-auto">
                © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 5. BACK TO TOP BUTTON (Exact Microsoft Black Pill on Bottom Right)         */}
      {/* ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-1.5 rounded-full bg-[#111111] hover:bg-[#2e2e2e] text-white px-4 py-2 text-xs font-semibold shadow-lg transition-all active:scale-95"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="size-3.5" />
        </button>
      </div>
    </div>
  )
}

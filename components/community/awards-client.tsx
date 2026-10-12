'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Award,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Trophy,
  Medal,
  Users,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building2,
  MapPin,
  Flame,
  Star,
  Layers,
  HeartHandshake,
  TrendingUp,
  Handshake,
  FileCheck,
  Check,
} from 'lucide-react'
import { GalaxyButton } from '@/components/ui/galaxy-button'

interface Winner {
  year: string
  name: string
  business: string
  city: string
  circle: string
  award: string
  contribution: string
  image: string
}

const AWARD_CATEGORIES = [
  {
    title: 'Life Impactor of the Year',
    desc: 'The Peer with the highest confirmed impact across the community.',
    icon: Trophy,
    color: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  {
    title: 'Top Impact Creators',
    desc: "The community's highest contributors, recognised annually for sustained giving.",
    icon: Flame,
    color: 'text-rose-600 bg-rose-50 border-rose-200',
  },
  {
    title: 'Collaboration of the Year',
    desc: 'The single collaboration that produced the most, between two Peers who met in a Circle.',
    icon: HeartHandshake,
    color: 'text-sky-600 bg-sky-50 border-sky-200',
  },
  {
    title: 'Circle of the Year',
    desc: 'The room that gave the most, grew the strongest and changed the most lives.',
    icon: Users,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    title: 'Circle Director of the Year',
    desc: 'The Director who built the strongest room and fostered exceptional peer culture.',
    icon: Medal,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
  },
  {
    title: 'Circle Founder of the Year',
    desc: 'The entrepreneur who convened a community where none existed from Day 1.',
    icon: Star,
    color: 'text-purple-600 bg-purple-50 border-purple-200',
  },
  {
    title: 'Industry Director of the Year',
    desc: 'The strongest sector built across the community through cross-city alignment.',
    icon: Building2,
    color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
  },
  {
    title: 'Executive Director of the Year',
    desc: 'The territory that grew the furthest and sustained highest member retention.',
    icon: TrendingUp,
    color: 'text-teal-600 bg-teal-50 border-teal-200',
  },
  {
    title: 'Powerhouse Member of the Year',
    desc: 'The committee role held best with tireless execution and accountability.',
    icon: Sparkles,
    color: 'text-blue-600 bg-blue-50 border-blue-200',
  },
]

const PAST_WINNERS: Winner[] = [
  {
    year: '2025',
    name: 'Rajesh Shah',
    business: 'Apex Precision Engineering',
    city: 'Ahmedabad',
    circle: 'Manufacturing Circle 01',
    award: 'Life Impactor of the Year',
    contribution: '84 confirmed introductions, ₹14 Cr vendor pipeline unlocked for 12 MSME peers.',
    image: '/images/story-jignesh-rohit.jpg',
  },
  {
    year: '2025',
    name: 'Priya Sharma & Vikram Malhotra',
    business: 'Zenith Logistics & TechPack Solutions',
    city: 'Mumbai',
    circle: 'Logistics & Supply Chain Circle',
    award: 'Collaboration of the Year',
    contribution: 'Joint pan-India warehousing network cutting delivery turnaround times by 40%.',
    image: '/images/story-priya-karan.jpg',
  },
  {
    year: '2025',
    name: 'Ahmedabad MSME Circle 02',
    business: 'Led by Circle Director Samir Patel',
    city: 'Ahmedabad',
    circle: 'MSME Circle 02',
    award: 'Circle of the Year',
    contribution: '98% retention, 420 lives impacted, 28 masterclasses and playbooks published.',
    image: '/images/section_image/event_awards_stage.jpg',
  },
  {
    year: '2024',
    name: 'Ananya Verma',
    business: 'GreenCore Bio-Packaging',
    city: 'Bengaluru',
    circle: 'Fempreneur Circle 01',
    award: 'Circle Founder of the Year',
    contribution: 'Founded Bengaluru Fempreneur from scratch; scaled to 36 active founders in 8 months.',
    image: '/images/story-neha-simran.jpg',
  },
  {
    year: '2024',
    name: 'Harish Mehta',
    business: 'Mehta Global Exim',
    city: 'Surat',
    circle: 'Global Trade Circle',
    award: 'Industry Director of the Year',
    contribution: 'Connected 45 Indian MSME exporters directly with verified buyers across 6 nations.',
    image: '/images/story-amit-sandeep.jpg',
  },
]

export function AwardsClient() {
  const [selectedYear, setSelectedYear] = useState<string>('all')

  const filteredWinners =
    selectedYear === 'all'
      ? PAST_WINNERS
      : PAST_WINNERS.filter((w) => w.year === selectedYear)

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3.5 text-slate-400" />
          <Link href="/events" className="hover:text-slate-900 transition-colors">
            Community Life
          </Link>
          <ChevronRight className="size-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Awards &amp; Recognition</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (HONOURING CONTRIBUTION) ─── */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-0 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Home-style looping video backdrop with dark scrim */}
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          src="/videos/homepage-hero-bg.mp4"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)] pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Home-style full-bleed hero */}
          <div className="min-h-[480px] lg:min-h-[520px] py-10 sm:py-14 flex items-center">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
              
              {/* Left Column: Manifesto & Details */}
              <div className="lg:col-span-12 max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-900/60 via-indigo-900/50 to-rose-900/60 backdrop-blur-md border border-white/20 shadow-lg">
                  <span className="inline-block size-2 rounded-full bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                    HONOURING CONTRIBUTION
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.14]">
                    Awards &amp;{' '}
                    <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                      Recognition
                    </span>
                  </h1>
                  <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed">
                    We do not recognise the largest business in the room. We recognise who did the most for everyone else.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  <p>
                    Recognition at Peers Global is earned in public and verified transparently.{' '}
                    <strong className="text-white font-semibold">
                      Every action is recorded in the Unity App and confirmed directly by the Peer who received it.
                    </strong>
                  </p>

                  {/* 4 Pillar Badges with Gradient Icons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {/* 1. ShieldCheck */}
                    <div className="group p-3 rounded-2xl bg-white/10 border border-white/15 text-xs font-semibold text-white flex items-center gap-2.5 backdrop-blur-md hover:bg-white/15 hover:border-white/25 transition-all duration-300">
                      <svg className="size-4.5 shrink-0 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <defs>
                          <linearGradient id="pillarShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#38BDF8" />
                            <stop offset="50%" stopColor="#818CF8" />
                            <stop offset="100%" stopColor="#FB7185" />
                          </linearGradient>
                        </defs>
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" stroke="url(#pillarShieldGrad)" />
                        <path d="m9 12 2 2 4-4" stroke="url(#pillarShieldGrad)" />
                      </svg>
                      <span className="text-slate-200 group-hover:text-white transition-colors">1 Action = 1 Life Impacted</span>
                    </div>

                    {/* 2. Confirmed by Receiver */}
                    <div className="group p-3 rounded-2xl bg-white/10 border border-white/15 text-xs font-semibold text-white flex items-center gap-2.5 backdrop-blur-md hover:bg-white/15 hover:border-white/25 transition-all duration-300">
                      <svg className="size-4.5 shrink-0 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <defs>
                          <linearGradient id="pillarCheckGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#38BDF8" />
                            <stop offset="50%" stopColor="#818CF8" />
                            <stop offset="100%" stopColor="#FB7185" />
                          </linearGradient>
                        </defs>
                        <circle cx="12" cy="12" r="10" stroke="url(#pillarCheckGrad)" />
                        <path d="m9 12 2 2 4-4" stroke="url(#pillarCheckGrad)" />
                      </svg>
                      <span className="text-slate-200 group-hover:text-white transition-colors">Confirmed by the Receiver</span>
                    </div>

                    {/* 3. Zero Lobbying or Self-Praise */}
                    <div className="group p-3 rounded-2xl bg-white/10 border border-white/15 text-xs font-semibold text-white flex items-center gap-2.5 backdrop-blur-md hover:bg-white/15 hover:border-white/25 transition-all duration-300">
                      <svg className="size-4.5 shrink-0 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <defs>
                          <linearGradient id="pillarFileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#38BDF8" />
                            <stop offset="50%" stopColor="#818CF8" />
                            <stop offset="100%" stopColor="#FB7185" />
                          </linearGradient>
                        </defs>
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" stroke="url(#pillarFileGrad)" />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" stroke="url(#pillarFileGrad)" />
                        <path d="m9 15 2 2 4-4" stroke="url(#pillarFileGrad)" />
                      </svg>
                      <span className="text-slate-200 group-hover:text-white transition-colors">Zero Lobbying or Self-Praise</span>
                    </div>

                    {/* 4. Ledger-Verified */}
                    <div className="group p-3 rounded-2xl bg-white/10 border border-white/15 text-xs font-semibold text-white flex items-center gap-2.5 backdrop-blur-md hover:bg-white/15 hover:border-white/25 transition-all duration-300">
                      <svg className="size-4.5 shrink-0 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <defs>
                          <linearGradient id="pillarSparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#38BDF8" />
                            <stop offset="50%" stopColor="#818CF8" />
                            <stop offset="100%" stopColor="#FB7185" />
                          </linearGradient>
                        </defs>
                        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" stroke="url(#pillarSparkleGrad)" />
                      </svg>
                      <span className="text-slate-200 group-hover:text-white transition-colors">Ledger-Verified on Unity App</span>
                    </div>
                  </div>

                  <div className="relative pl-4 py-1 border-l-4 border-transparent [border-image:linear-gradient(to_bottom,#38BDF8,#818CF8,#FB7185)_1] text-xs sm:text-sm font-medium text-white/95 italic flex items-center gap-2">
                    <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <defs>
                        <linearGradient id="trophyPillarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38BDF8" />
                          <stop offset="50%" stopColor="#818CF8" />
                          <stop offset="100%" stopColor="#FB7185" />
                        </linearGradient>
                      </defs>
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" stroke="url(#trophyPillarGrad)" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke="url(#trophyPillarGrad)" />
                      <path d="M4 22h16" stroke="url(#trophyPillarGrad)" />
                      <path d="M10 14.66V17c0 .55-.45.98-.97 1.21C7.85 18.75 7 20.24 7 22" stroke="url(#trophyPillarGrad)" />
                      <path d="M14 14.66V17c0 .55.45.98.97 1.21C16.15 18.75 17 20.24 17 22" stroke="url(#trophyPillarGrad)" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" stroke="url(#trophyPillarGrad)" />
                    </svg>
                    <span>Annual trophies celebrate transformative givers across our national and global community.</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <GalaxyButton
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                  >
                    Download Unity App
                  </GalaxyButton>

                  <GalaxyButton
                    href="#categories"
                    variant="transparent"
                    size="lg"
                    className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                  >
                    View Categories
                  </GalaxyButton>
                </div>
              </div>


            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="relative z-10 mt-5 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 items-center">
            {/* 1. Trophy */}
            <div className="group rounded-2xl bg-white border border-slate-200/90 p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300">
              <svg className="size-5 shrink-0 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="trophyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                </defs>
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" stroke="url(#trophyGrad)" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke="url(#trophyGrad)" />
                <path d="M4 22h16" stroke="url(#trophyGrad)" />
                <path d="M10 14.66V17c0 .55-.45.98-.97 1.21C7.85 18.75 7 20.24 7 22" stroke="url(#trophyGrad)" />
                <path d="M14 14.66V17c0 .55.45.98.97 1.21C16.15 18.75 17 20.24 17 22" stroke="url(#trophyGrad)" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" stroke="url(#trophyGrad)" />
              </svg>
              <div>
                <div className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  9 Official
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 group-hover:text-slate-700 transition-colors">
                  Award Categories
                </div>
              </div>
            </div>

            {/* 2. ShieldCheck */}
            <div className="group rounded-2xl bg-white border border-slate-200/90 p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300">
              <svg className="size-5 shrink-0 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                </defs>
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" stroke="url(#shieldGrad)" />
                <path d="m9 12 2 2 4-4" stroke="url(#shieldGrad)" />
              </svg>
              <div>
                <div className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  100% Confirmed
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 group-hover:text-slate-700 transition-colors">
                  Peer Receiver Verified
                </div>
              </div>
            </div>

            {/* 3. Calendar */}
            <div className="group rounded-2xl bg-white border border-slate-200/90 p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300">
              <svg className="size-5 shrink-0 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="calGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                </defs>
                <path d="M8 2v4" stroke="url(#calGrad)" />
                <path d="M16 2v4" stroke="url(#calGrad)" />
                <rect width="18" height="18" x="3" y="4" rx="2" stroke="url(#calGrad)" />
                <path d="M3 10h18" stroke="url(#calGrad)" />
                <path d="M8 14h.01" stroke="url(#calGrad)" strokeWidth="3" />
                <path d="M12 14h.01" stroke="url(#calGrad)" strokeWidth="3" />
                <path d="M16 14h.01" stroke="url(#calGrad)" strokeWidth="3" />
                <path d="M8 18h.01" stroke="url(#calGrad)" strokeWidth="3" />
                <path d="M12 18h.01" stroke="url(#calGrad)" strokeWidth="3" />
                <path d="M16 18h.01" stroke="url(#calGrad)" strokeWidth="3" />
              </svg>
              <div>
                <div className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  4 Stages
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 group-hover:text-slate-700 transition-colors">
                  Year-Round System
                </div>
              </div>
            </div>

            {/* 4. Flame */}
            <div className="group rounded-2xl bg-white border border-slate-200/90 p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300">
              <svg className="size-5 shrink-0 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="flameGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                </defs>
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" stroke="url(#flameGrad)" />
              </svg>
              <div>
                <div className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Zero
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 group-hover:text-slate-700 transition-colors">
                  Self-Nomination / Bias
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 2: RECOGNITION HAPPENS ALL YEAR (4-STAGE SYSTEM) ─── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                  YEAR-ROUND SYSTEM
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                Recognition happens all year
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Awards are annual. Recognition is continuous and verified across four distinct stages of community life.
              </p>
            </div>

            <div className="p-2.5 px-3.5 rounded-2xl bg-white border border-slate-200/90 text-xs font-bold shadow-2xs shrink-0 flex items-center gap-2">
              <Sparkles className="size-4 text-blue-600" />
              <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">Continuous Peer Affirmation</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: '01',
                title: 'In your Circle, every month',
                desc: 'The meeting opens with the Gratitude & Life Impact Round, where each Peer declares their received impact out loud.',
                tag: 'Monthly Routine',
                svgPath: (
                  <>
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                    <path d="M8 14h.01" strokeWidth="2.5" />
                    <path d="M12 14h.01" strokeWidth="2.5" />
                    <path d="M16 14h.01" strokeWidth="2.5" />
                    <path d="M8 18h.01" strokeWidth="2.5" />
                    <path d="M12 18h.01" strokeWidth="2.5" />
                    <path d="M16 18h.01" strokeWidth="2.5" />
                  </>
                ),
              },
              {
                step: '02',
                title: 'In the app, continuously',
                desc: 'Milestone badges as your contribution reaches each tier. Transparent national rankings across the entire community.',
                tag: 'Real-Time Ledger',
                svgPath: (
                  <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
                ),
              },
              {
                step: '03',
                title: 'At city & regional events',
                desc: 'MindMeld conclaves publicly name top givers and key industry connectors in front of regional peer chapters.',
                tag: 'Regional Conclaves',
                svgPath: (
                  <>
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </>
                ),
              },
              {
                step: '04',
                title: 'At the Annual Ceremony',
                desc: 'Once a year, the whole national and global community gathers to celebrate the most transformative contributors.',
                tag: 'Grand Gala',
                svgPath: (
                  <>
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.45.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.45.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="animated-glow-card group !rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all"
                tabIndex={0}
                role="article"
              >
                <svg className="animated-border-svg !rounded-3xl" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id={`stageCardGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1D4ED8" />
                      <stop offset="100%" stopColor="#E11D48" />
                    </linearGradient>
                  </defs>
                  <path
                    className={`animated-border-path ${idx % 3 === 1 ? 'animated-border-path-2' : idx % 3 === 2 ? 'animated-border-path-3' : ''}`}
                    style={{ stroke: `url(#stageCardGrad-${idx})` }}
                    d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                  />
                </svg>

                <div className="relative z-10 flex flex-col justify-between p-6 sm:p-7 bg-white border border-slate-200/80 rounded-3xl h-full space-y-4 shadow-2xs">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      {/* Normal compact size gradient icon */}
                      <svg
                        className="size-5 shrink-0 group-hover:scale-110 transition-transform duration-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke={`url(#stageCardGrad-${idx})`}
                      >
                        {item.svgPath}
                      </svg>

                      <span className="text-[11px] font-mono font-extrabold tracking-wider uppercase px-3 py-1 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white border border-transparent shadow-xs transition-all duration-300 group-hover:!bg-white group-hover:!border-indigo-200 group-hover:!text-transparent group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:shadow-2xs">
                        STAGE {item.step}
                      </span>
                    </div>

                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-bold text-slate-600 uppercase tracking-wider group-hover:border-blue-200 group-hover:text-blue-700 transition-colors">
                      {item.tag}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light group-hover:text-slate-800 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: THE AWARD CATEGORIES ─── */}
      <section id="categories" className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                  OFFICIAL HONOURS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                The Award Categories
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Measured strictly on verified peer collaboration, growth, retention, and confirmed lives impacted.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-white border border-slate-200/90 text-xs text-slate-700 font-semibold shadow-2xs shrink-0 flex items-center gap-2">
              <ShieldCheck className="size-4 text-[#0062D2]" />
              <span>Verified from Unity App Ledger</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AWARD_CATEGORIES.map((cat, idx) => {
              const IconComponent = cat.icon
              return (
                <div
                  key={idx}
                  className="animated-glow-card group !rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all"
                  tabIndex={0}
                  role="article"
                >
                  <svg className="animated-border-svg !rounded-3xl" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id={`awardCatGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path
                      className={`animated-border-path ${idx % 3 === 1 ? 'animated-border-path-2' : idx % 3 === 2 ? 'animated-border-path-3' : ''}`}
                      style={{ stroke: `url(#awardCatGrad-${idx})` }}
                      d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                    />
                  </svg>

                  <div className="relative z-10 flex flex-col justify-between p-6 sm:p-7 bg-white border border-slate-200/80 !rounded-[calc(1.5rem-1.5px)] h-full space-y-4 shadow-2xs">
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        {/* Normal compact size icon with linear gradient stroke and no box */}
                        <div className="relative flex items-center justify-center">
                          <svg className="size-0 absolute" aria-hidden="true">
                            <defs>
                              <linearGradient id={`catIconGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#1D4ED8" />
                                <stop offset="100%" stopColor="#E11D48" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <IconComponent
                            className="size-5 shrink-0 group-hover:scale-110 transition-transform duration-300"
                            style={{ stroke: `url(#catIconGrad-${idx})` }}
                            strokeWidth={2}
                          />
                        </div>

                        <span className="text-[11px] font-mono font-extrabold tracking-wider uppercase px-3 py-1 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white border border-transparent shadow-xs transition-all duration-300 group-hover:!bg-white group-hover:!border-indigo-200 group-hover:!text-transparent group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:shadow-2xs">
                          Category #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {cat.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light group-hover:text-slate-800 transition-colors">
                        {cat.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                      <span className="uppercase tracking-wider">Annual Award</span>
                      <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent font-bold">
                        Unity Ledger
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: THE RECOGNITION WALL & PAST WINNERS ─── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                  ROLL OF HONOUR
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                The Recognition Wall &amp; Past Winners
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Recognition here is earned in public and celebrated transparently across our network.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-2xs">
              {(['all', '2025', '2024'] as const).map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedYear === yr
                      ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {yr === 'all' ? 'All Years' : yr}
                </button>
              ))}
            </div>
          </div>

          {/* Winners Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWinners.map((winner, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={winner.image}
                      alt={winner.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                    
                    <div className="absolute top-3.5 right-3.5">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-[11px] font-mono font-bold text-white shadow-md">
                        {winner.year}
                      </span>
                    </div>

                    <div className="absolute bottom-3.5 left-4 right-4 text-white">
                      <span className="text-[10px] font-mono uppercase tracking-widest font-extrabold block mb-0.5 bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                        {winner.award}
                      </span>
                      <h4 className="text-lg font-bold text-white leading-tight">
                        {winner.name}
                      </h4>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 text-xs">
                    <div className="space-y-1.5">
                      <p className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {winner.business}
                      </p>
                      <p className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                        <svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <defs>
                            <linearGradient id={`mapPinGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#1D4ED8" />
                              <stop offset="100%" stopColor="#E11D48" />
                            </linearGradient>
                          </defs>
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" stroke={`url(#mapPinGrad-${idx})`} />
                          <circle cx="12" cy="10" r="3" stroke={`url(#mapPinGrad-${idx})`} />
                        </svg>
                        <span>{winner.city} · {winner.circle}</span>
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 text-slate-700 leading-relaxed shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider">
                        <svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <defs>
                            <linearGradient id={`heartGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#1D4ED8" />
                              <stop offset="100%" stopColor="#E11D48" />
                            </linearGradient>
                          </defs>
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" stroke={`url(#heartGrad-${idx})`} />
                          <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" stroke={`url(#heartGrad-${idx})`} />
                          <path d="m18 15-2-2" stroke={`url(#heartGrad-${idx})`} />
                          <path d="m15 18-2-2" stroke={`url(#heartGrad-${idx})`} />
                        </svg>
                        <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                          What they gave:
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-light leading-relaxed">
                        {winner.contribution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 5: SIGNATURE LUXURY CLOSING HERO BANNER ─── */}
      <section
        id="download-unity"
        className="relative py-20 lg:py-28 text-white overflow-hidden border-t border-slate-800"
        style={{
          background: 'linear-gradient(135deg, rgb(6, 17, 44) 0%, rgb(19, 7, 31) 50%, rgb(38, 5, 19) 100%)',
        }}
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* SVG Orbital Geometric Lines Background */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-25 overflow-hidden flex items-center justify-center">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 flex flex-col items-start space-y-5">
              <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent block">
                THE PEERS GLOBAL STANDARD
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                “Success is not just what you earn. It is how many lives you impact.”
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                <p>
                  Start logging your real contributions, introductions, and collaborations in the Unity App. Every act of generous leadership builds compounding respect across our network.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
                  <p className="text-sky-200 font-medium text-xs sm:text-sm">
                    • 1 Action = 1 Life Impacted · Transparent Community Ledger · Zero Self-Praise.
                  </p>
                  <p className="text-white font-bold text-xs sm:text-sm">Earn recognition through authentic giving.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                >
                  Download Unity App
                </GalaxyButton>

                <GalaxyButton
                  href="/membership"
                  variant="transparent"
                  size="lg"
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                >
                  Apply for Membership →
                </GalaxyButton>
              </div>
            </div>

            {/* Right Cursive Script Highlights */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-xl sm:text-2xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Give first.
              </p>
              <p
                className="text-xl sm:text-2xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Log impact.
              </p>
              <p
                className="text-xl sm:text-2xl text-white leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Earn respect.
              </p>
              <p
                className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Lead.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

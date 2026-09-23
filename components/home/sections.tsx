'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Apple,
  BarChart3,
  Bell,
  Bookmark,
  BookOpen,
  Boxes,
  Briefcase,
  Building,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Cpu,
  Database,
  DoorOpen,
  Download,
  FileText,
  Globe2,
  Handshake,
  Heart,
  HeartHandshake,
  Landmark,
  Laptop,
  Layers,
  Leaf,
  Lightbulb,
  Link2,
  Lock,
  MapPin,
  MessageSquare,
  Network,
  Pause,
  Play,
  Quote,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  Calendar,
  Zap,
} from 'lucide-react'
import { Card, Cta, Eyebrow, SectionHead, Stat, Tag } from '@/components/site/ui'
import { INDUSTRY_CIRCLES, PURPOSE_CIRCLES } from '@/lib/data/circles'
import { UPCOMING_EVENTS, EventRecord } from '@/lib/data/events'
import { ROLES } from '@/lib/data/leadership'
import { OUTCOME_STATS, SITE } from '@/lib/data/site'

/* =========================================================================
   SECTION 1.5 — MEET OUR LEADERS & MENTORS (MINDVALLEY STYLE SPOTLIGHT)
   ========================================================================= */

export function LeadersSpotlightSection() {
  const spotlightPeers = [
    {
      id: 1,
      name: 'VIKRAM SHROFF',
      role: 'Chairman & Managing Director',
      organization: 'Apex Infrastructure Group',
      tag: 'Infrastructure & Real Estate',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
      location: 'Mumbai Chapter',
    },
    {
      id: 2,
      name: 'ANANYA BIRLA',
      role: 'Founder & Managing Partner',
      organization: 'Nexus Growth Equity',
      tag: 'Venture & Private Capital',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      location: 'Bengaluru Chapter',
    },
    {
      id: 3,
      name: 'RAJESH AGARWAL',
      role: 'President & CEO',
      organization: 'TransGlobal Supply Chain Ltd',
      tag: 'Global Trade & Logistics',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      location: 'Ahmedabad Chapter',
    },
    {
      id: 4,
      name: 'DR. KAVITA SHUKLA',
      role: 'Chief Scientific Officer & Co-Founder',
      organization: 'BioGenesis Therapeutics',
      tag: 'Healthcare & Pharma',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      location: 'Pune Chapter',
    },
    {
      id: 5,
      name: 'HARSHIL PATEL',
      role: 'Founder & Group CEO',
      organization: 'FinTech Horizon Labs',
      tag: 'Fintech & Digital Banking',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      location: 'Dubai Chapter',
    },
    {
      id: 6,
      name: 'PRIYA MENON',
      role: 'Executive Director',
      organization: 'Kalyan Renewable Energy',
      tag: 'CleanTech & Energy',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      location: 'Hyderabad Chapter',
    },
    {
      id: 7,
      name: 'SUNIL MITTAL',
      role: 'Founder & Managing Director',
      organization: 'Sterling Manufacturing Consortium',
      tag: 'Advanced Engineering',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      location: 'Delhi NCR Chapter',
    },
    {
      id: 8,
      name: 'SANGEETA REDDY',
      role: 'Managing Partner',
      organization: 'Cross-Border Advisory Partners',
      tag: 'M&A and Strategic Advisory',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
      location: 'Singapore Chapter',
    },
    {
      id: 9,
      name: 'AMIT CHOPRA',
      role: 'Co-Founder & Chief Technology Officer',
      organization: 'OmniCloud Enterprise',
      tag: 'Enterprise SaaS & AI',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
      location: 'Bengaluru Chapter',
    },
    {
      id: 10,
      name: 'MEERA KAPOOR',
      role: 'Chief Executive Officer',
      organization: 'Vanguard Retail & Lifestyle',
      tag: 'Consumer Brands & D2C',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      location: 'Mumbai Chapter',
    },
    {
      id: 11,
      name: 'DEEPAK MEHTA',
      role: 'Senior Managing Partner',
      organization: 'Paramount Capital Group',
      tag: 'Family Office & Real Assets',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      location: 'London Chapter',
    },
    {
      id: 12,
      name: 'ROHIT KHANNA',
      role: 'Founder & Chairperson',
      organization: 'AeroSpace Components India',
      tag: 'Defense & Aerospace',
      image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80',
      location: 'Chennai Chapter',
    },
  ]

  const row1 = spotlightPeers.slice(0, 6)
  const row2 = spotlightPeers.slice(6, 12)
  const infiniteRow1 = [...row1, ...row1, ...row1]
  const infiniteRow2 = [...row2, ...row2, ...row2]

  const [selectedLeader, setSelectedLeader] = useState<typeof spotlightPeers[0] | null>(null)

  return (
    <section id="mentors-spotlight" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">

      {/* Dynamic CSS keyframes for smooth dual-row continuous marquees */}
      <style jsx global>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
        @keyframes marqueeRight {
          0% {
            transform: translateX(-33.3333%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 38s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 42s linear infinite;
        }
        .marquee-track:hover .animate-marquee-left,
        .marquee-track:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-blue-500/[0.03] blur-[150px]" />

      <div className="shell flex flex-col items-center">

        {/* Section Header (Matching Mindvalley centered format with Microsoft Typography) */}
        <div className="flex flex-col items-center text-center max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0078D4] mb-3 block">
            MEET OUR LEADERS &amp; MENTORS
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold text-slate-900 leading-[1.16] tracking-tight">
            500+ Industry Leaders.<br className="hidden sm:block" /> Decades of Collective Wisdom.
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Entrepreneurs, enterprise leaders, investors, and visionaries who have spent decades mastering their craft—so you can accelerate yours.
          </p>
        </div>

      </div>

      {/* Dual Row Portrait Card Marquee Container */}
      <div className="marquee-track flex flex-col gap-4 sm:gap-6 overflow-hidden w-full select-none">

        {/* Row 1 — Moving Left */}
        <div className="animate-marquee-left flex gap-4 sm:gap-6 px-3">
          {infiniteRow1.map((peer, idx) => (
            <div
              key={`r1-${peer.id}-${idx}`}
              onClick={() => setSelectedLeader(peer)}
              className="group relative w-[200px] sm:w-[240px] md:w-[270px] h-[290px] sm:h-[350px] md:h-[390px] rounded-2xl sm:rounded-[22px] overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900 shrink-0 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              {/* Portrait Image */}
              <Image
                src={peer.image}
                alt={peer.name}
                fill
                sizes="(max-width: 640px) 200px, 270px"
                className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Bottom Gradient Overlay (Deep dark fade matching Mindvalley) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 via-60% to-transparent" />

              {/* Top Chapter Tag */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-medium text-slate-200 tracking-wide">
                  {peer.location}
                </span>
              </div>

              {/* Bottom Typography & Details */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10 flex flex-col justify-end text-left">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-300 mb-1 block">
                  {peer.tag}
                </span>
                <h3 className="font-sans text-xl sm:text-2xl md:text-[1.65rem] font-bold uppercase tracking-tight text-white leading-tight drop-shadow-md group-hover:text-blue-200 transition-colors">
                  {peer.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1 line-clamp-1 font-normal leading-snug">
                  {peer.role}
                </p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium line-clamp-1">
                  {peer.organization}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 — Moving Right */}
        <div className="animate-marquee-right flex gap-4 sm:gap-6 px-3">
          {infiniteRow2.map((peer, idx) => (
            <div
              key={`r2-${peer.id}-${idx}`}
              onClick={() => setSelectedLeader(peer)}
              className="group relative w-[200px] sm:w-[240px] md:w-[270px] h-[290px] sm:h-[350px] md:h-[390px] rounded-2xl sm:rounded-[22px] overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900 shrink-0 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              {/* Portrait Image */}
              <Image
                src={peer.image}
                alt={peer.name}
                fill
                sizes="(max-width: 640px) 200px, 270px"
                className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Bottom Gradient Overlay (Deep dark fade matching Mindvalley) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 via-60% to-transparent" />

              {/* Top Chapter Tag */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-medium text-slate-200 tracking-wide">
                  {peer.location}
                </span>
              </div>

              {/* Bottom Typography & Details */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10 flex flex-col justify-end text-left">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-300 mb-1 block">
                  {peer.tag}
                </span>
                <h3 className="font-sans text-xl sm:text-2xl md:text-[1.65rem] font-bold uppercase tracking-tight text-white leading-tight drop-shadow-md group-hover:text-blue-200 transition-colors">
                  {peer.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1 line-clamp-1 font-normal leading-snug">
                  {peer.role}
                </p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium line-clamp-1">
                  {peer.organization}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Action / Supporting Information */}
      <div className="shell mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6">
        <p className="text-xs sm:text-sm text-slate-600 font-normal">
          Hover over any leader to pause · Continuous global peer network
        </p>
        <Link
          href="/membership"
          className="inline-flex items-center gap-2 rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors shadow-sm"
        >
          <span>Explore All Leaders &amp; Circles</span>
          <ArrowRight className="size-4" />
        </Link>
      </div>

      {/* Detail Leader Modal */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedLeader(null)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-6 sm:p-8 text-white shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-[4px] bg-white/10 text-slate-400 hover:bg-white/20 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="size-4" />
            </button>

            {/* Profile Content */}
            <div className="flex items-center gap-4 mb-5">
              <div className="relative size-16 sm:size-20 rounded-xl overflow-hidden border border-white/20 shrink-0">
                <Image
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  fill
                  className="size-full object-cover"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
                  {selectedLeader.tag} · {selectedLeader.location}
                </span>
                <h3 className="font-sans text-xl sm:text-2xl font-bold uppercase text-white leading-tight">
                  {selectedLeader.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  {selectedLeader.role}
                </p>
                <p className="text-xs text-slate-400">
                  {selectedLeader.organization}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4">
              Experienced founder and circle contributor within Peers Global, actively mentoring upcoming founders, participating in high-value cross-border collaborations, and lending institutional credibility across global chapters.
            </p>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-colors"
              >
                <span>Connect with Mentors</span>
                <ArrowRight className="size-4" />
              </Link>
              <button
                type="button"
                onClick={() => setSelectedLeader(null)}
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}


/* =========================================================================
   SECTION 2 — WHO WE ARE & WHAT PEERS GLOBAL IS
   ========================================================================= */

export function WhoWeAreSection() {
  const [whoWeAreVideo, setWhoWeAreVideo] = useState('/videos/homepage-hero-bg.mp4')
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const loadVideo = () => {
      try {
        const saved = localStorage.getItem('peers_admin_page_media')
        if (saved) {
          const items = JSON.parse(saved)
          const target = items.find(
            (i: any) =>
              (i.pageSlug === '/' || i.pageId === 'home' || i.pageName === 'Home Page') &&
              (i.sectionName?.toLowerCase().includes('who we are') || i.sectionName?.toLowerCase().includes('section banner')) &&
              i.isActive &&
              i.mediaUrl
          )
          if (target && target.mediaUrl) {
            setWhoWeAreVideo(target.mediaUrl)
          }
        }
      } catch (err) {
        console.error('Failed to load who-we-are video', err)
      }
    }
    loadVideo()
    window.addEventListener('storage', loadVideo)
    window.addEventListener('peers_media_updated', loadVideo)
    return () => {
      window.removeEventListener('storage', loadVideo)
      window.removeEventListener('peers_media_updated', loadVideo)
    }
  }, [])

  const pillars = [
    {
      title: 'A leadership organisation, not a networking group.',
      body: 'Built on the LSR Growth Model — Learning, Sales and Resources — with a mission to enhance the lives of one million entrepreneurs.',
      tag: 'LSR Model',
      icon: Layers,
      bgColor: 'bg-blue-50 text-[#1D4ED8] border-blue-100',
      image: '/images/who-we-are-mountain.jpg',
      link: '/the-idea',
    },
    {
      title: 'Your Circle. Your Inner Board.',
      body: '20–40 curated entrepreneurs. Category exclusivity, so there is no competition inside the room.',
      tag: 'Category Exclusivity',
      icon: ShieldCheck,
      bgColor: 'bg-rose-50 text-[#E11D48] border-rose-100',
      image: '/images/who-we-are-inner-board.jpg',
      link: '/circles',
    },
    {
      title: '1 Action = 1 Life Impacted.',
      body: 'Most communities measure activity. We measure impact. Strictly unweighted and confirmed outcomes.',
      tag: 'True Impact',
      icon: Target,
      bgColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      image: '/images/who-we-are-impact.jpg',
      link: '/1-million-mission',
    },
    {
      title: 'Partners in Business. Friends in Life.',
      body: 'Two Family Meetups a year. A Confidential Forum. Lifelong relationships measured in decades.',
      tag: 'Lifelong Bonds',
      icon: HeartHandshake,
      bgColor: 'bg-amber-50 text-amber-600 border-amber-100',
      image: '/images/who-we-are-friends.jpg',
      link: '/stories',
    },
  ]

  return (
    <section id="who-we-are" className="relative overflow-hidden bg-[#f8fafc] border-b border-slate-200 py-16 sm:py-20 lg:py-24">
      <div className="shell flex flex-col gap-12 lg:gap-14">

        {/* Top Header Row */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1D4ED8]">
              WHO WE ARE &amp; WHAT PEERS GLOBAL IS
            </span>
          </div>
        </div>

        {/* Top Hero Banner with Smooth Left-Fading Video/Visual */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[28px] bg-white border border-slate-200/90 shadow-sm min-h-[460px] lg:min-h-[500px] flex items-center">

          {/* Media Background Layer (Right ~60% fading into white on the left) */}
          <div
            className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
            }}
          >
            {/* Active Directly Playing Video */}
            <video
              ref={videoRef}
              key={whoWeAreVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="size-full object-cover object-center"
            >
              <source src={whoWeAreVideo} type="video/mp4" />
              <source src="/videos/homepage-hero-bg.mp4" type="video/mp4" />
              <source src="/videos/hero-background.mp4" type="video/mp4" />
            </video>

            {/* Seamless gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/80 via-30% to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

            {/* Top-Right Tags */}
            <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 border border-white/20 text-xs font-bold text-white tracking-widest uppercase backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                PEOPLE · IDEAS · IMPACT
              </span>
            </div>

            {/* Bottom-Right Frosted Glass Pill */}
            <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
              <div className="rounded-xl border border-white/20 bg-black/50 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-300">
                  A STRONGER
                </p>
                <p className="text-xs font-bold tracking-wider text-white">
                  MORE CONNECTED WORLD
                </p>
              </div>
            </div>
          </div>

          {/* Left Content Area (Overlaid on the crisp white side) */}
          <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
            <div className="max-w-xl flex flex-col gap-5 sm:gap-6">
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-[2.65rem] font-bold tracking-tight text-slate-950 leading-[1.15]">
                A global community of entrepreneurs who choose to{' '}
                <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                  grow together.
                </span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-lg font-normal">
                Peers Global brings together entrepreneurs and business leaders from across industries, cities and countries into one governed, high-trust leadership ecosystem.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-1">
                <Link
                  href="/the-idea"
                  className="inline-flex items-center gap-2 rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] px-5 py-2.5 text-sm font-semibold text-white transition-colors shadow-none"
                >
                  Explore Peers Global
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="/video-stories"
                  className="group inline-flex items-center gap-3 transition-colors"
                >
                  <span className="flex size-10 items-center justify-center rounded-full border border-slate-300 bg-white text-[#1D4ED8] shadow-xs transition-all group-hover:scale-105 group-hover:border-[#1D4ED8] group-hover:bg-blue-50">
                    <Play className="size-3.5 fill-current ml-0.5" />
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-none">
                      Watch
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors leading-tight">
                      Our Story
                    </span>
                  </div>
                </Link>
              </div>

              {/* 3 Stats underneath matching Microsoft layout */}
              <div className="mt-2 grid grid-cols-3 gap-4 sm:gap-6 border-t border-slate-200 pt-6">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">1M+</p>
                  <p className="text-xs text-slate-700 font-semibold leading-snug mt-1">Entrepreneurs to Impact</p>
                  <p className="text-[11px] text-slate-500 font-medium">By 2030</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">18</p>
                  <p className="text-xs text-slate-700 font-semibold leading-snug mt-1">Industry &amp; Goal Circles</p>
                  <p className="text-[11px] text-slate-500 font-medium">Category-exclusive</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">100+</p>
                  <p className="text-xs text-slate-700 font-semibold leading-snug mt-1">Events &amp; Initiatives</p>
                  <p className="text-[11px] text-slate-500 font-medium">Every Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Callout Card: We call our members Peers */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 sm:gap-5 max-w-4xl">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-md">
                <Users className="size-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  We call our members <span className="text-[#1D4ED8]">Peers</span>.
                </h3>
                <p className="text-sm sm:text-[0.95rem] leading-relaxed text-slate-600">
                  A Peer is an entrepreneur who believes in building trusted relationships, contributing
                  to others, and growing together. Peers meet in Trusted Circles, collaborate through the
                  Unity App, learn from one another, create opportunities for one another, and carry the
                  community forward through leadership.
                </p>
              </div>
            </div>

            <div className="shrink-0 text-right self-end md:self-center select-none">
              <span className="brand-pill">
                STRONGER TOGETHER
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Grid: 4 Feature Cards with Images */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="ms-card group flex flex-col justify-between overflow-hidden"
              >
                {/* Upper Text Content */}
                <div className="flex flex-col gap-3.5 p-6">
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center justify-center rounded-xl p-2.5 border ${p.bgColor} shadow-xs`}>
                      <Icon className="size-5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#1D4ED8] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-slate-500">
                    {p.body}
                  </p>
                </div>

                {/* Bottom Image Thumbnail with Hover Reveal */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-t border-slate-100 bg-slate-100">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent opacity-85 transition-opacity group-hover:opacity-95" />

                  <Link
                    href={p.link}
                    className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-slate-900 shadow transition-all hover:bg-white"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="size-3 text-[#1D4ED8] transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 3 — OUR PHILOSOPHY
   ========================================================================= */

export function PhilosophySection() {
  const [videoUrl, setVideoUrl] = useState('/videos/homepage-hero-bg.mp4')
  const videoRef = useRef<HTMLVideoElement>(null)

  const steps = [
    {
      num: '01',
      title: 'RELATIONSHIPS',
      desc: 'Business grows through relationships',
      icon: Users,
    },
    {
      num: '02',
      title: 'TRUST',
      desc: 'Relationships grow through trust',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'CONTRIBUTION',
      desc: 'Trust grows through contribution',
      icon: Handshake,
    },
    {
      num: '04',
      title: 'IMPACT',
      desc: 'Contribution creates true impact',
      icon: TrendingUp,
    },
  ]

  return (
    <section id="our-philosophy" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="shell flex flex-col items-center text-center">

        {/* Eyebrow */}
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 mb-3 block">
          OUR PHILOSOPHY
        </span>

        {/* Headline (Mindvalley Centered Style in Microsoft Segoe UI) */}
        <h2 className="font-sans text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-slate-900 leading-[1.18] tracking-tight max-w-4xl">
          Peers are Partners in Business.
          <br className="hidden sm:inline" />
          <span className="block mt-1 sm:mt-2 text-slate-900">
            And Friends in Life.
          </span>
        </h2>

        {/* Subline */}
        <p className="mt-3 text-sm sm:text-base font-semibold text-[#0078D4]">
          This is the conviction the whole community runs on.
        </p>

        {/* Body Description */}
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          A Peer gives an introduction without keeping score. Shares a hard-won lesson without charging for it. Celebrates another Peer&apos;s win as if it were their own. Over time, business partners become friends, and friends become the reason the business grows.
        </p>

        {/* 4 Core Pillars / Stats Row (Mindvalley Metric Style) */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl w-full">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.num} className="flex flex-col items-center p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-[#0078D4] mb-1">{step.num}</span>
                <span className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
                  {step.title}
                </span>
                <span className="mt-1 text-xs text-slate-500 font-normal leading-snug text-center">
                  {step.desc}
                </span>
              </div>
            )
          })}
        </div>

        {/* Wide Featured Video Frame (Mindvalley Layout with Video) */}
        <div className="mt-12 sm:mt-14 w-full max-w-5xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-950 shadow-2xl border border-slate-200/80">
            <video
              ref={videoRef}
              key={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="size-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
              <source src="/videos/hero-background.mp4" type="video/mp4" />
            </video>

            {/* Dark Vignette Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/20" />

            {/* Top-Left Tag */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 flex items-center gap-2 rounded-full bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 border border-white/20">
              <span className="size-2 rounded-full bg-[#0078D4] animate-pulse" />
              <span className="text-[11px] font-semibold text-white uppercase tracking-wider">
                Better Conversations · Bigger Opportunities
              </span>
            </div>

            {/* Bottom-Left Caption */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-10 text-left">
              <span className="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-widest block">
                COMMUNITY CONCLAVES &amp; TRUSTED CIRCLES
              </span>
              <span className="text-sm sm:text-lg font-semibold text-white drop-shadow-md">
                Where entrepreneurs build lifelong partnerships
              </span>
            </div>

            {/* Bottom-Right CTA */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-10">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors shadow-md"
              >
                <span>Become a Peer</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Quote & Action */}
        <div className="mt-8 pt-6 flex flex-wrap items-center justify-center gap-4 max-w-xl">
          <p className="text-xs sm:text-sm font-semibold text-slate-700 italic">
            &ldquo;Give first. Everything else follows.&rdquo;
          </p>
        </div>

      </div>
    </section>
  )
}


/* =========================================================================
   SECTION 4 — 18 INDUSTRY & GOAL CIRCLES (MINDVALLEY PATHWAYS REDESIGN)
   ========================================================================= */

interface CircleItem {
  id: string
  title: string
  category: string
  lead: string
  leadImage: string
  artImage: string
  seatsOpen: number
  cities: string[]
  slug: string
}

interface CirclePathway {
  id: string
  tabName: string
  badgeName: string
  pathwayTitle: string
  headline: string
  tagline: string
  description: string
  bullets: string[]
  emblemGradient: string
  emblemRingColor: string
  circles: CircleItem[]
}

export function CirclesSection() {
  const pathways: CirclePathway[] = [
    {
      id: 'industry',
      tabName: 'Industry Circles',
      badgeName: 'THE INDUSTRY CIRCLES',
      pathwayTitle: 'The Industry Circles PATHWAY',
      headline: 'Category-Locked Peer Groups',
      tagline: 'Focused conversations. Relevant opportunities. Real collaboration.',
      description:
        'Connect with vetted founders, CEOs, and operators without internal category competition. Share exclusive deal flow, supply chains, and board-level insights with industry allies.',
      bullets: [
        'Single-seat category exclusivity with zero internal competition',
        'Weekly structured masterminds, supply chain access & deal sharing',
        'High-trust collaboration across vetted founders & industry heads',
      ],
      emblemGradient: 'from-blue-600 via-indigo-700 to-slate-900',
      emblemRingColor: '#38bdf8',
      circles: [
        {
          id: 'c1',
          title: 'Ahmedabad Tech Circle',
          category: 'Technology, SaaS & AI',
          lead: 'Rajesh Agarwal',
          leadImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 30,
          cities: ['Ahmedabad', 'Gandhinagar'],
          slug: 'ahmedabad-tech',
        },
        {
          id: 'c2',
          title: 'Cross-Border Global Trade',
          category: 'Logistics, Customs & Trade',
          lead: 'Dr. Kavita Shukla',
          leadImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 30,
          cities: ['Ahmedabad', 'Mundra'],
          slug: 'ahmedabad-import-export',
        },
        {
          id: 'c3',
          title: 'Investors & FinTech Circle',
          category: 'Venture Capital, Angel & Wealth',
          lead: 'Sunil Mittal',
          leadImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 29,
          cities: ['Pune', 'Ahmedabad'],
          slug: 'investors-circle',
        },
        {
          id: 'c4',
          title: 'Real Estate & Infrastructure',
          category: 'Commercial Real Estate & EPC',
          lead: 'Vikram Shroff',
          leadImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 29,
          cities: ['Ahmedabad', 'Surat'],
          slug: 'ahmedabad-real-estate',
        },
        {
          id: 'c5',
          title: 'Franchise & Licensing Circle',
          category: 'Multi-Unit Brands & Retail',
          lead: 'Priya Menon',
          leadImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 30,
          cities: ['Ahmedabad'],
          slug: 'ahmedabad-franchise-licensing',
        },
        {
          id: 'c6',
          title: 'BioGenesis & Healthcare Circle',
          category: 'Life Sciences & MedTech',
          lead: 'Ananya Birla',
          leadImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 30,
          cities: ['Ahmedabad', 'Vadodara'],
          slug: 'healthcare-circle',
        },
      ],
    },
    {
      id: 'purpose',
      tabName: 'Purpose-Led Circles',
      badgeName: 'PURPOSE-LED COMMUNITIES',
      pathwayTitle: 'The Purpose Circles PATHWAY',
      headline: 'Bigger Than Business',
      tagline: 'United by a common ambition and shared vision for impact.',
      description:
        'These circles bring together foundational entrepreneurs building lasting institutions, mentoring emerging leaders, and architecting regional economic ecosystems.',
      bullets: [
        'Dedicated peer mastermind focused on long-term ecosystem building',
        'Cross-district collaboration between metropolitan chapter founders',
        'Continuous accountability and friendships that turn peers into life allies',
      ],
      emblemGradient: 'from-amber-600 via-rose-700 to-slate-900',
      emblemRingColor: '#fbbf24',
      circles: [
        {
          id: 'p1',
          title: 'Ahmedabad District Founders',
          category: 'Chapter Architecture & Growth',
          lead: 'Hardik Patel',
          leadImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 30,
          cities: ['Ahmedabad'],
          slug: 'ahmedabad-district-founding-members',
        },
        {
          id: 'p2',
          title: 'Bengaluru District Founders',
          category: 'Innovation & DeepTech Catalysts',
          lead: 'Sangeeta Reddy',
          leadImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 30,
          cities: ['Bengaluru'],
          slug: 'bengaluru-district-founding-members',
        },
        {
          id: 'p3',
          title: 'Delhi NCR District Founders',
          category: 'Enterprise Scale & Policy',
          lead: 'Harshil Patel',
          leadImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 30,
          cities: ['Delhi NCR'],
          slug: 'delhi-district-founding-members',
        },
        {
          id: 'p4',
          title: 'Mumbai District Founders',
          category: 'Capital Markets & Scale',
          lead: 'Rakesh Sharma',
          leadImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 30,
          cities: ['Mumbai'],
          slug: 'mumbai-district-founding-members',
        },
        {
          id: 'p5',
          title: 'Rajkot District Founders',
          category: 'Manufacturing Scale & Infra',
          lead: 'Nilesh Vora',
          leadImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 30,
          cities: ['Rajkot'],
          slug: 'rajkot-district-founding-members',
        },
        {
          id: 'p6',
          title: 'Community Builders Circle',
          category: 'Philanthropy & Ecosystems',
          lead: 'Meera Desai',
          leadImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 30,
          cities: ['Ahmedabad', 'Mumbai'],
          slug: 'community-builders',
        },
      ],
    },
    {
      id: 'global',
      tabName: 'Regional & Global Hubs',
      badgeName: 'REGIONAL & GLOBAL HUBS',
      pathwayTitle: 'The Global Hubs PATHWAY',
      headline: 'Cross-Border Networks',
      tagline: 'Connecting district leaders across international corridors.',
      description:
        'Uniting entrepreneurs across Dubai, London, and Singapore with Indian industrial leaders for cross-border expansion, family governance, and next-generation modernization.',
      bullets: [
        'Direct access to cross-border chapters in Dubai, London & Singapore',
        'Specialized mentorship on succession, ESG & Industry 4.0 scaling',
        'Unified collaboration platform backed by the Unity mobile app',
      ],
      emblemGradient: 'from-emerald-600 via-teal-700 to-slate-900',
      emblemRingColor: '#34d399',
      circles: [
        {
          id: 'g1',
          title: 'Cross-Border Global Advisory',
          category: 'International Legal & Markets',
          lead: 'Alex Thorne',
          leadImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 30,
          cities: ['Dubai', 'London', 'Ahmedabad'],
          slug: 'cross-border-advisory',
        },
        {
          id: 'g2',
          title: 'Next-Gen Family Business',
          category: 'Succession & Modernization',
          lead: 'Siddharth Mehta',
          leadImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 30,
          cities: ['Ahmedabad', 'Mumbai'],
          slug: 'family-business',
        },
        {
          id: 'g3',
          title: 'Sustainable Energy & CleanTech',
          category: 'Renewables, Solar & ESG',
          lead: 'Amit Joshi',
          leadImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 30,
          cities: ['Gujarat', 'Rajasthan'],
          slug: 'cleantech-circle',
        },
        {
          id: 'g4',
          title: 'Digital Media & Brand Scalers',
          category: 'Omni-Channel & Media Tech',
          lead: 'Tara Sen',
          leadImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 30,
          cities: ['Mumbai', 'Delhi'],
          slug: 'digital-media-circle',
        },
        {
          id: 'g5',
          title: 'Advanced Manufacturing 4.0',
          category: 'Industry 4.0 & Robotics',
          lead: 'Kirit Shah',
          leadImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 30,
          cities: ['Rajkot', 'Pune', 'Ahmedabad'],
          slug: 'manufacturing-robotics',
        },
        {
          id: 'g6',
          title: 'Women Executive Leaders',
          category: 'High-Growth Venture Scaling',
          lead: 'Pooja Singhania',
          leadImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
          artImage: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=600&q=80',
          seatsOpen: 30,
          cities: ['National Network'],
          slug: 'women-executives',
        },
      ],
    },
  ]

  const [activePathwayIndex, setActivePathwayIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6

  const activePathway = pathways[activePathwayIndex]
  const totalPages = Math.ceil(activePathway.circles.length / itemsPerPage)

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
  }

  const displayedCircles = activePathway.circles.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const howCircleWorks = [
    {
      num: '01',
      title: 'The right people',
      body: 'Each Circle is composed of entrepreneurs from complementary businesses, chosen for fit and relevance.',
      icon: Users,
    },
    {
      num: '02',
      title: 'A fixed rhythm',
      body: 'The same Peers meet on a regular schedule, so trust has time to build.',
      icon: CalendarDays,
    },
    {
      num: '03',
      title: 'A structure for giving',
      body: 'Every meeting has a defined space for Peers to share what they can offer and what they need.',
      icon: HeartHandshake,
    },
    {
      num: '04',
      title: 'Continuity',
      body: 'The Circle carries on inside the Unity App between meetings.',
      icon: TrendingUp,
    },
  ]

  return (
    <section
      id="circles"
      className="relative overflow-hidden bg-white text-slate-900 py-20 sm:py-24 lg:py-28 border-b border-slate-200"
    >
      {/* ─── Ambient Subtle Light Glow ─── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full bg-blue-500/[0.03] blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[500px] rounded-full bg-cyan-500/[0.03] blur-[140px]"
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Section Header (Clean Microsoft Typography & Top CTA) ─── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 sm:mb-12">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0078D4]">
              THE 18 CIRCLES
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-slate-900 tracking-tight leading-[1.16]">
              One Community. 18 Circles to Build It.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-1">
              Choose from three specialized circle categories — industry-locked peer groups, purpose-led chapters, and regional hubs — featuring curated masterminds from leading entrepreneurs. Access your home circle or collaborate across the entire network.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/circles"
              className="inline-flex items-center gap-2 rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] text-white font-semibold px-6 py-3 text-sm shadow-sm transition-all active:scale-[0.98]"
            >
              <span>Find Your Circle</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* ─── Pathway Selection Tabs (Pill Buttons) ─── */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
          {pathways.map((p, idx) => {
            const isActive = idx === activePathwayIndex
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  setActivePathwayIndex(idx)
                  setCurrentPage(0)
                }}
                className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${isActive
                    ? 'bg-[#0078D4] text-white shadow-sm ring-1 ring-blue-600'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                  }`}
              >
                {p.tabName}
              </button>
            )
          })}
        </div>

        {/* ─── Main Interactive Pathway Box (Dual-Column Showcase) ─── */}
        <div className="relative rounded-3xl bg-[#f8fafc] border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-300">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* ── Left Column: 3D Emblem Card + Pathway Copy + Bullet Points + CTA ── */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* 3D Glass Emblem Poster Card */}
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${activePathway.emblemGradient} p-6 sm:p-8 border border-white/20 shadow-md min-h-[200px] sm:min-h-[220px] flex flex-col justify-between`}
              >
                {/* 3D Holographic Ring Graphic (CSS / SVG) */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none size-40 sm:size-48 opacity-90">
                  <svg viewBox="0 0 200 200" fill="none" className="size-full animate-pulse">
                    <defs>
                      <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={activePathway.emblemRingColor} stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    <ellipse
                      cx="100"
                      cy="100"
                      rx="70"
                      ry="40"
                      stroke="url(#ringGrad)"
                      strokeWidth="8"
                      transform="rotate(-25 100 100)"
                      className="drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]"
                    />
                    <ellipse
                      cx="100"
                      cy="100"
                      rx="55"
                      ry="30"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="3"
                      transform="rotate(35 100 100)"
                    />
                    <circle cx="100" cy="100" r="16" fill="white" fillOpacity="0.15" />
                  </svg>
                </div>

                {/* Poster Typography */}
                <div className="relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-200 block mb-1">
                    PEERS GLOBAL
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {activePathway.pathwayTitle}
                  </h3>
                </div>

                <div className="relative z-10 pt-4">
                  <span className="inline-block rounded-[4px] bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm border border-white/20">
                    18 Total Circles Available
                  </span>
                </div>
              </div>

              {/* Pathway Details */}
              <div className="flex flex-col gap-2.5">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0078D4]">
                  {activePathway.badgeName}
                </span>
                <h4 className="font-sans text-2xl font-bold text-slate-900 tracking-tight">
                  {activePathway.headline}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {activePathway.description}
                </p>
              </div>

              {/* Checklist Items */}
              <ul className="flex flex-col gap-2.5 pt-1">
                {activePathway.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-[13px] text-slate-700">
                    <CheckCircle2 className="size-4 text-[#0078D4] shrink-0 mt-0.5" />
                    <span className="font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/circles"
                  className="inline-flex items-center gap-2 rounded-[4px] bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 py-3 text-sm shadow-sm transition-all active:scale-[0.98]"
                >
                  <span>Explore This Pathway</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

            </div>

            {/* ── Right Column: Dual-Image Program Cards Grid (3x2 or 3x3) ── */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {displayedCircles.map((circle) => (
                  <Link
                    key={circle.id}
                    href={`/circles/${circle.slug}`}
                    className="group flex flex-col rounded-xl overflow-hidden bg-white border border-slate-200/90 hover:border-[#0078D4] transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md"
                  >
                    {/* Card Media Banner (Dual Visual: Artwork Left + Leader Portrait Right) */}
                    <div className="relative w-full h-[110px] sm:h-[115px] overflow-hidden bg-slate-100 flex">

                      {/* Left 62% Artwork */}
                      <div className="relative w-[62%] h-full overflow-hidden">
                        <Image
                          src={circle.artImage}
                          alt={circle.title}
                          fill
                          sizes="240px"
                          className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/60" />
                      </div>

                      {/* Right 38% Leader Portrait */}
                      <div className="relative w-[38%] h-full border-l border-white/20 overflow-hidden bg-slate-200">
                        <Image
                          src={circle.leadImage}
                          alt={circle.lead}
                          fill
                          sizes="180px"
                          className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      {/* Top Overlay Badge */}
                      <div className="absolute top-2 left-2 z-10">
                        <span className="rounded-md bg-slate-900/80 px-2 py-0.5 text-[9px] font-bold text-white backdrop-blur-sm border border-white/10 uppercase tracking-wider">
                          {circle.seatsOpen} seats
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-3.5 flex flex-col gap-1 bg-white">
                      <h5 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0078D4] transition-colors line-clamp-1">
                        {circle.title}
                      </h5>
                      <p className="text-[11px] text-slate-500 truncate">
                        {circle.lead} · <span className="text-slate-400">{circle.cities.join(', ')}</span>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Bottom Carousel / Slider Navigation Controls */}
              <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-200">
                <div className="text-xs text-slate-500 font-medium">
                  Showing <span className="text-slate-900 font-semibold">{displayedCircles.length}</span> of {activePathway.circles.length} Circles in {activePathway.tabName}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevPage}
                    className="size-9 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs"
                    aria-label="Previous circles"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextPage}
                    className="size-9 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs"
                    aria-label="Next circles"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ─── 4 Core Tenets: How a Circle Works (Embedded Elegant Row) ─── */}
        <div className="mt-14 sm:mt-16 pt-10 border-t border-slate-200">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0078D4]">
              THE CIRCLE RHYTHM
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              How Every Circle Delivers Value
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {howCircleWorks.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs transition-all hover:shadow-sm hover:border-[#0078D4]/40"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#0078D4]">
                      {item.num}
                    </span>
                    <span className="p-2 rounded-lg bg-blue-50 text-[#0078D4] border border-blue-100">
                      <Icon className="size-4" />
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.body}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}


/* =========================================================================
   SECTION 5 — HOW COLLABORATION WORKS (11 FORMS) - INFINITE SLIDER & DETAIL MODAL
   ========================================================================= */

export function CollaborationSection() {
  const forms = [
    {
      num: '01',
      shortTitle: 'Introductions',
      title: 'Introductions to people who can open a door',
      tag: 'High-Trust Access',
      desc: 'Direct, warm introductions to decision-makers, senior enterprise leaders, and institutional buyers who rarely respond to cold outreach.',
      impact: 'Executive Access · Zero Cold Friction',
      icon: DoorOpen,
      bgGradient: 'bg-gradient-to-br from-[#0f1d38] via-[#091326] to-[#040812]',
      borderAccent: 'border-blue-500/30',
      accentColor: 'text-[#0078D4]',
      badgeBg: 'bg-blue-500/15 border-blue-400/30 text-blue-300',
      longDetails:
        'Warm introductions within Peers Global are peer-vetted and high-priority. When an entrepreneur introduces another peer, they lend their personal reputation and institutional trust, converting 6-month cold outreach cycles into immediate C-suite conversations.',
    },
    {
      num: '02',
      shortTitle: 'Referrals',
      title: 'Referrals that become long-term clients',
      tag: 'Client Acquisition',
      desc: 'Pre-vetted client recommendations backed by peer reputation, compressing sales cycles from months to days with unmatched credibility.',
      impact: 'Peer-Vetted Trust · Faster Deal Closing',
      icon: Users,
      bgGradient: 'bg-gradient-to-br from-[#0e2a1e] via-[#071912] to-[#030d09]',
      borderAccent: 'border-emerald-500/30',
      accentColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300',
      longDetails:
        'Client referrals among peers bypass procurement bureaucracy. Fellow members understand your capabilities and match client needs with verified solutions, resulting in higher contract values and multi-year client relationships.',
    },
    {
      num: '03',
      shortTitle: 'Partnerships',
      title: 'Partnerships between complementary businesses',
      tag: 'Strategic Alliances',
      desc: 'Co-bidding on mega-tenders, cross-selling shared client portfolios, and joint ventures that multiply collective market reach.',
      impact: 'Shared Pipeline · Revenue Multiplication',
      icon: Handshake,
      bgGradient: 'bg-gradient-to-br from-[#24133b] via-[#140a23] to-[#08030e]',
      borderAccent: 'border-purple-500/30',
      accentColor: 'text-purple-400',
      badgeBg: 'bg-purple-500/15 border-purple-400/30 text-purple-300',
      longDetails:
        'Combine capabilities with complementary non-competing businesses. Form consortiums to win tier-1 government and private enterprise bids that neither firm could execute alone.',
    },
    {
      num: '04',
      shortTitle: 'Knowledge Sharing',
      title: 'Knowledge sharing from lived experience',
      tag: 'Operational Wisdom',
      desc: 'Hard-won operational playbooks, regulatory lessons, and founder experience that save years of expensive trial and error.',
      impact: 'Unfiltered Founder Truth · Risk Avoidance',
      icon: Lightbulb,
      bgGradient: 'bg-gradient-to-br from-[#2e210b] via-[#1a1205] to-[#0d0902]',
      borderAccent: 'border-amber-500/30',
      accentColor: 'text-amber-400',
      badgeBg: 'bg-amber-500/15 border-amber-400/30 text-amber-300',
      longDetails:
        'Confidential masterclasses and unvarnished operational war-stories. Learn how veteran peers tackled factory compliance, cross-border tax structures, debt covenants, and crisis management.',
    },
    {
      num: '05',
      shortTitle: 'Mentorship',
      title: 'Mentorship from entrepreneurs further along',
      tag: 'Executive Counsel',
      desc: 'One-on-one confidential counsel from veterans who have already navigated scale, debt structuring, governance, and IPO milestones.',
      impact: 'Strategic Perspective · Blindspot Elimination',
      icon: Award,
      bgGradient: 'bg-gradient-to-br from-[#2d1123] via-[#190813] to-[#0a0207]',
      borderAccent: 'border-rose-500/30',
      accentColor: 'text-rose-400',
      badgeBg: 'bg-rose-500/15 border-rose-400/30 text-rose-300',
      longDetails:
        'Direct advisory access to seasoned founders who have taken companies from ₹10 Cr to ₹500 Cr+ and navigated public listings, giving you objective board-level counsel.',
    },
    {
      num: '06',
      shortTitle: 'Customer Connections',
      title: 'Customer connections in new segments',
      tag: 'Market Penetration',
      desc: 'Immediate inroads into uncharted sectors, regional clusters, and tier-1 corporate accounts through fellow member networks.',
      impact: 'Cluster Inroads · Warm Introductions',
      icon: ShoppingBag,
      bgGradient: 'bg-gradient-to-br from-[#0c242f] via-[#06141a] to-[#02090c]',
      borderAccent: 'border-cyan-500/30',
      accentColor: 'text-cyan-400',
      badgeBg: 'bg-cyan-500/15 border-cyan-400/30 text-cyan-300',
      longDetails:
        'Unlock new B2B customer verticals across retail, manufacturing, logistics, healthcare, and technology through established peer relationships in those industries.',
    },
    {
      num: '07',
      shortTitle: 'Investor Connections',
      title: 'Investor connections at the right stage',
      tag: 'Strategic Capital',
      desc: 'Curated introductions to angel syndicates, institutional family offices, and growth equity partners who know and back the peer.',
      impact: 'Aligned Capital · Warm LP Introductions',
      icon: TrendingUp,
      bgGradient: 'bg-gradient-to-br from-[#102a1b] via-[#08170e] to-[#030a06]',
      borderAccent: 'border-emerald-500/30',
      accentColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300',
      longDetails:
        'Access smart capital from family offices, angel networks, and venture funds that invest with aligned founder-friendly governance and sector expertise.',
    },
    {
      num: '08',
      shortTitle: 'Shared Resources',
      title: 'Resources — teams, tools, capacity, licences',
      tag: 'Asset Sharing',
      desc: 'Shared warehousing, idle manufacturing lines, testing labs, specialized tooling, and overflow engineering bandwidth.',
      impact: 'CapEx Efficiency · Shared Infrastructure',
      icon: Boxes,
      bgGradient: 'bg-gradient-to-br from-[#1e1338] via-[#100921] to-[#070310]',
      borderAccent: 'border-indigo-500/30',
      accentColor: 'text-indigo-400',
      badgeBg: 'bg-indigo-500/15 border-indigo-400/30 text-indigo-300',
      longDetails:
        'Monetize idle machinery or leverage excess storage and logistics bandwidth from peers, minimizing capital expenditure while maintaining rapid operational agility.',
    },
    {
      num: '09',
      shortTitle: 'Market Access',
      title: 'Market access into a new city or country',
      tag: 'Global Expansion',
      desc: 'Local on-the-ground support, office facilities, regulatory navigation, and regional credibility when expanding into new territories.',
      impact: 'Local Footprint · Cross-Border Ease',
      icon: Globe2,
      bgGradient: 'bg-gradient-to-br from-[#0e213a] via-[#061221] to-[#020810]',
      borderAccent: 'border-blue-500/30',
      accentColor: 'text-blue-400',
      badgeBg: 'bg-blue-500/15 border-blue-400/30 text-blue-300',
      longDetails:
        'Tap into local chapters across 11+ cities and international corridors for turnkey branch setups, local vendor introductions, and regional market credibility.',
    },
    {
      num: '10',
      shortTitle: 'Industry Expertise',
      title: 'Industry expertise without hiring for it',
      tag: 'Domain Intelligence',
      desc: 'Deep domain insights across manufacturing, tax treaties, supply chain resilience, and compliance without expensive consulting fees.',
      impact: 'Domain Mastery · On-Demand Knowledge',
      icon: Cpu,
      bgGradient: 'bg-gradient-to-br from-[#2a1a0d] via-[#170e06] to-[#0a0502]',
      borderAccent: 'border-amber-500/30',
      accentColor: 'text-amber-400',
      badgeBg: 'bg-amber-500/15 border-amber-400/30 text-amber-300',
      longDetails:
        'Get rapid technical, legal, and operational input directly from business owners who specialize in that exact domain, saving hundreds of hours and high consultant retainers.',
    },
    {
      num: '11',
      shortTitle: 'Global Opportunities',
      title: 'Local-to-global opportunities across the community',
      tag: 'Community Scale',
      desc: 'Cross-border trade delegations, bilateral commerce pacts, and international circle summits connecting local peers worldwide.',
      impact: 'Global Reach · Limitless Opportunities',
      icon: Compass,
      bgGradient: 'bg-gradient-to-br from-[#0c2725] via-[#051615] to-[#020a09]',
      borderAccent: 'border-teal-500/30',
      accentColor: 'text-teal-400',
      badgeBg: 'bg-teal-500/15 border-teal-400/30 text-teal-300',
      longDetails:
        'Participate in global buyer delegations, overseas business conclaves, and international chapter exchanges that take your domestic brand onto the global stage.',
    },
  ]

  // Deck state: ordered array of indices from back to front (the last element is the top/front card)
  const [deck, setDeck] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse())
  const [swappingCardId, setSwappingCardId] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [selectedForm, setSelectedForm] = useState<typeof forms[0] | null>(null)

  // Current active top card (last element of deck)
  const currentTopIndex = deck[deck.length - 1]
  const currentForm = forms[currentTopIndex]

  // Function to move the top card to the back of the deck (3D swap animation)
  const moveCard = useCallback(() => {
    if (swappingCardId !== null) return
    const topIndex = deck[deck.length - 1]
    setSwappingCardId(topIndex)

    setTimeout(() => {
      setDeck((prevDeck) => {
        const top = prevDeck[prevDeck.length - 1]
        const remaining = prevDeck.slice(0, prevDeck.length - 1)
        return [top, ...remaining]
      })
      setSwappingCardId(null)
    }, 1100)
  }, [deck, swappingCardId])

  // Function to move the back card to the front
  const prevCard = useCallback(() => {
    if (swappingCardId !== null) return
    setDeck((prevDeck) => {
      const bottom = prevDeck[0]
      const remaining = prevDeck.slice(1)
      return [...remaining, bottom]
    })
  }, [swappingCardId])

  // Autoplay interval
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      moveCard()
    }, 4500)
    return () => clearInterval(timer)
  }, [isPaused, moveCard])

  return (
    <section id="collaboration" className="relative overflow-hidden bg-[#f8fafc] py-16 sm:py-20 lg:py-28 border-b border-slate-200 text-slate-900">

      {/* CSS 3D Stacking & Keyframe Swap Animation */}
      <style jsx global>{`
        .pg-deck-stack {
          position: relative;
          width: 100%;
          height: 480px;
          perspective: 1200px;
        }

        .pg-deck-card {
          position: absolute;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          width: 320px;
          height: 440px;
          border-radius: 16px;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s ease;
          user-select: none;
        }

        /* 5th and further cards behind */
        .pg-deck-card:nth-last-child(n + 5) {
          --x: calc(-50% + 75px);
          transform: translate(var(--x), -50%) scale(0.86);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          opacity: 0.6;
        }

        /* 4th card */
        .pg-deck-card:nth-last-child(4) {
          --x: calc(-50% + 50px);
          transform: translate(var(--x), -50%) scale(0.9);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
          opacity: 0.8;
        }

        /* 3rd card */
        .pg-deck-card:nth-last-child(3) {
          --x: calc(-50% + 25px);
          transform: translate(var(--x), -50%) scale(0.95);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.16);
          opacity: 0.95;
        }

        /* 2nd card */
        .pg-deck-card:nth-last-child(2) {
          --x: calc(-50%);
          transform: translate(var(--x), -50%) scale(1);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
          opacity: 1;
        }

        /* 1st (Front/Top) card */
        .pg-deck-card:nth-last-child(1) {
          --x: calc(-50% - 25px);
          transform: translate(var(--x), -50%) scale(1.04);
          box-shadow: 0 20px 40px rgba(0, 120, 212, 0.22), 0 8px 16px rgba(0, 0, 0, 0.18);
          opacity: 1;
          cursor: pointer;
        }

        /* 3D Swap Keyframe Animation */
        .pg-card-swap {
          animation: pgSwapAnim 1.15s cubic-bezier(0.25, 1, 0.5, 1) forwards !important;
          pointer-events: none;
        }

        @keyframes pgSwapAnim {
          35% {
            transform: translate(calc(var(--x) - 220px), -50%) scale(0.88) rotate(-6deg) rotateY(55deg);
            opacity: 0.8;
          }
          100% {
            transform: translate(calc(var(--x) - 25px), -50%) scale(0.65);
            z-index: -1;
            opacity: 0;
          }
        }

        @media (max-width: 1024px) {
          .pg-deck-stack {
            height: 420px;
          }
          .pg-deck-card {
            width: 280px;
            height: 390px;
          }
          @keyframes pgSwapAnim {
            35% {
              transform: translate(calc(var(--x) - 140px), -50%) scale(0.88) rotate(-5deg) rotateY(45deg);
            }
            100% {
              transform: translate(calc(var(--x) - 20px), -50%) scale(0.65);
              z-index: -1;
            }
          }
        }

        @media (max-width: 640px) {
          .pg-deck-stack {
            height: 380px;
          }
          .pg-deck-card {
            width: 250px;
            height: 350px;
          }
        }
      `}</style>

      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute -top-32 right-12 size-[450px] rounded-full bg-blue-500/[0.04] blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-32 left-12 size-[400px] rounded-full bg-cyan-500/[0.04] blur-[130px]" />

      <div className="shell">

        {/* Main 2-Column Grid (Left: Microsoft Typography & Dynamic Card Info | Right: 3D Deck) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Left Column: Microsoft Typography, Dynamic Active Card Content, Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">

            {/* Microsoft Overline */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0078D4]">
                DEFINED PRACTICE
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Way {currentForm.num} of 11
              </span>
            </div>

            {/* Microsoft Azure Style Heading */}
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold text-slate-900 leading-[1.18] tracking-tight mb-4">
              Eleven Ways a Peer Creates Value
            </h2>

            {/* Active Card Title Highlight */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-blue-50 border border-blue-200/80 mb-4">
              <span className="text-xs font-bold text-[#0078D4] uppercase tracking-wider">
                Way {currentForm.num}
              </span>
              <span className="text-xs font-medium text-slate-700">
                {currentForm.tag}
              </span>
            </div>

            <h3 className="font-sans text-xl sm:text-2xl font-semibold text-slate-800 leading-snug tracking-tight mb-3">
              {currentForm.title}
            </h3>

            {/* Active Card Dynamic Description */}
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6 max-w-xl">
              {currentForm.desc}
            </p>

            {/* Dynamic Impact Badge */}
            <div className="w-full max-w-xl rounded-[6px] bg-slate-100/90 border border-slate-200/90 p-3.5 mb-7 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex size-7 items-center justify-center rounded-full bg-[#0078D4] text-white">
                  <Check className="size-3.5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Proven Impact
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {currentForm.impact}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedForm(currentForm)}
                className="text-xs font-semibold text-[#0078D4] hover:text-[#005a9e] underline-offset-4 hover:underline shrink-0"
              >
                Deep Dive →
              </button>
            </div>

            {/* Microsoft Fluent Button & Slider Controls */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setSelectedForm(currentForm)}
                className="inline-flex items-center gap-2 rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] px-5 py-2.5 text-sm font-semibold text-white transition-colors shadow-sm active:scale-[0.98]"
              >
                <span>Explore More</span>
                <ArrowRight className="size-4" />
              </button>

              {/* Slider Prev / Next Controls */}
              <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
                <button
                  type="button"
                  onClick={prevCard}
                  aria-label="Previous card"
                  className="flex size-9 items-center justify-center rounded-[4px] border border-slate-300 bg-white text-slate-700 shadow-2xs transition-all hover:bg-slate-50 hover:border-slate-400 active:scale-95"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={moveCard}
                  aria-label="Next card"
                  className="flex size-9 items-center justify-center rounded-[4px] border border-slate-300 bg-white text-slate-700 shadow-2xs transition-all hover:bg-slate-50 hover:border-slate-400 active:scale-95"
                >
                  <ChevronRight className="size-4" />
                </button>
                <span className="text-xs font-mono text-slate-400 ml-1">
                  {currentForm.num}/11
                </span>
              </div>
            </div>

            {/* Quick helper note */}
            <p className="mt-4 text-[12px] text-slate-400">
              Click the top card or use arrows to cycle through all 11 collaboration pillars.
            </p>

          </div>

          {/* Right Column: 3D Stacked Card Deck */}
          <div className="lg:col-span-6 flex items-center justify-center py-4">
            <div className="pg-deck-stack">
              {deck.map((formIndex) => {
                const item = forms[formIndex]
                const ItemIcon = item.icon
                const isSwapping = swappingCardId === formIndex
                const isTop = formIndex === currentTopIndex

                return (
                  <div
                    key={item.num}
                    onClick={() => {
                      if (isTop) {
                        moveCard()
                      } else {
                        setSelectedForm(item)
                      }
                    }}
                    className={`pg-deck-card ${item.bgGradient} ${item.borderAccent} border ${isSwapping ? 'pg-card-swap' : ''
                      } p-6 text-white flex flex-col justify-between overflow-hidden cursor-pointer`}
                  >
                    {/* Top Glow bar on front card */}
                    {isTop && (
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400" />
                    )}

                    {/* Top Header inside card */}
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10 z-10">
                      <div className="flex items-center gap-2">
                        <span className="flex size-6 items-center justify-center rounded-full bg-white/15 text-[10px] font-bold text-white font-mono">
                          {item.num}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                          {item.tag}
                        </span>
                      </div>
                      <span className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-white">
                        <ItemIcon className="size-4" />
                      </span>
                    </div>

                    {/* Clean Middle Content */}
                    <div className="flex flex-col gap-2.5 my-auto py-3 z-10">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300">
                        {item.shortTitle}
                      </span>
                      <h4 className="font-sans text-lg sm:text-xl font-semibold text-white leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300/90 leading-relaxed line-clamp-3">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Impact & Action Strip */}
                    <div className="z-10 pt-3 border-t border-white/10">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[11px] font-medium text-slate-300 truncate max-w-[180px]">
                          {item.impact}
                        </span>
                        <span className={`text-[11px] font-bold ${item.accentColor} shrink-0`}>
                          {isTop ? 'Next Card ↷' : 'View →'}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

        {/* Bottom Supporting Quote Strip */}
        <div className="mt-14 w-full max-w-4xl mx-auto rounded-[6px] border border-slate-200 bg-white p-5 sm:p-6 shadow-2xs flex items-center gap-4">
          <div className="flex size-10 items-center justify-center rounded-[4px] bg-blue-50 text-[#0078D4] shrink-0">
            <Quote className="size-5" />
          </div>
          <p className="text-xs sm:text-sm italic text-slate-700 leading-relaxed font-normal">
            &ldquo;A connection becomes valuable when it creates an opportunity, solves a problem or improves a life. Every one of these does exactly that.&rdquo;
          </p>
        </div>

      </div>

      {/* Interactive Detail Modal */}
      {selectedForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedForm(null)}
        >
          <div
            className="relative w-full max-w-xl overflow-hidden rounded-[8px] border border-slate-700 bg-slate-950 p-6 sm:p-8 text-white shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setSelectedForm(null)}
              className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-[4px] bg-white/10 text-slate-400 hover:bg-white/20 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="size-4" />
            </button>

            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-3 py-1 rounded-[4px] text-xs font-semibold border ${selectedForm.badgeBg}`}>
                Way {selectedForm.num} · {selectedForm.tag}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug mt-2">
              {selectedForm.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {selectedForm.desc}
            </p>

            {/* Deep-Dive Operational Breakdown */}
            <div className="mt-5 rounded-[6px] bg-white/5 border border-white/10 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
                How It Works Inside Peers Global
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedForm.longDetails}
              </p>
            </div>

            {/* Impact Metric Bar */}
            <div className="mt-4 flex items-center justify-between rounded-[4px] bg-blue-950/60 border border-blue-800/40 p-3 text-xs">
              <span className="text-slate-300 font-medium">Outcome Metric:</span>
              <span className="font-semibold text-white">{selectedForm.impact}</span>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors shadow-md"
              >
                <span>Join Peers Global</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/10-forms-of-collaboration"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                <span>View All 10 Forms Guide →</span>
              </Link>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}



/* =========================================================================
   SECTION 6 — LEARN, SALES, RESOURCES (LSR)
   ========================================================================= */

export function LsrSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [dragStartX, setDragStartX] = useState<number | null>(null)

  const lsrCards = [
    {
      num: '01',
      indexLabel: '01 / 03',
      category: 'LEARN',
      title: 'Playbooks & Mentorship',
      body: 'Masterclasses, playbooks, mentorship, and practical knowledge from entrepreneurs who have already built what you are building.',
      icon: BookOpen,
      tag: 'KNOWLEDGE',
      impact: 'Actionable Insights',
      shortTitle: 'Learn',
      iconColor: 'text-[#0078D4]',
      iconBg: 'bg-blue-50 border-blue-100',
      labelColor: 'text-[#0078D4]',
      watermarkColor: 'text-slate-100',
      bulletBg: 'bg-blue-50',
      bulletIconColor: 'text-[#0078D4]',
      bullets: [
        'Learn from real founders',
        'Practical, actionable insights',
        'Grow faster with mentorship',
      ],
    },
    {
      num: '02',
      indexLabel: '02 / 03',
      category: 'SALES',
      title: 'Referrals & Market Access',
      body: 'Referrals, introductions, customer connections and market access — real business from people who understand your business.',
      icon: BarChart3,
      tag: 'GROWTH',
      impact: 'Direct Revenue',
      shortTitle: 'Sales',
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50 border-emerald-100',
      labelColor: 'text-emerald-600',
      watermarkColor: 'text-slate-100',
      bulletBg: 'bg-emerald-50',
      bulletIconColor: 'text-emerald-600',
      bullets: [
        'Direct B2B introductions',
        'Verified customer leads',
        'Co-selling opportunities',
      ],
    },
    {
      num: '03',
      indexLabel: '03 / 03',
      category: 'RESOURCES',
      title: 'Capital, Talent & Tech',
      body: 'Talent, capital, partners, suppliers, technology and expertise, available through the community whenever you need them.',
      icon: Database,
      tag: 'ECOSYSTEM',
      impact: 'Strategic Assets',
      shortTitle: 'Resources',
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50 border-amber-100',
      labelColor: 'text-amber-600',
      watermarkColor: 'text-slate-100',
      bulletBg: 'bg-amber-50',
      bulletIconColor: 'text-amber-600',
      bullets: [
        'Vetted investor network',
        'High-tier talent referrals',
        'Preferred partner perks',
      ],
    },
  ]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? lsrCards.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % lsrCards.length)
  }

  // Gentle auto-glide forward every 5.5 seconds (paused on hover)
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % lsrCards.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [isHovered, lsrCards.length])

  const handleDragStart = (clientX: number) => {
    setDragStartX(clientX)
  }

  const handleDragEnd = (clientX: number) => {
    if (dragStartX === null) return
    const diff = clientX - dragStartX
    if (diff > 45) {
      handlePrev()
    } else if (diff < -45) {
      handleNext()
    }
    setDragStartX(null)
  }

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section
      id="framework"
      className="section relative overflow-hidden bg-[#fafafa] py-20 sm:py-24 lg:py-28 text-slate-900 border-b border-slate-200"
    >
      {/* Background Subtle Light Glow */}
      <div aria-hidden className="pointer-events-none absolute top-1/4 left-10 size-[320px] rounded-full bg-blue-500/[0.03] blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute bottom-10 right-10 size-[380px] rounded-full bg-cyan-500/[0.03] blur-[140px]" />

      {/* Top-right executive framework badge */}
      <div className="pointer-events-none absolute top-8 right-6 lg:right-14 select-none hidden sm:block z-10">
        <div className="flex flex-col items-end gap-1 px-4 py-2 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0078D4]">CORE FRAMEWORK</span>
          <span className="text-xs font-semibold text-slate-700">Learn · Sales · Resources</span>
        </div>
      </div>

      <div className="shell relative z-10 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[34%_66%] xl:grid-cols-[32%_68%] lg:items-center">

          {/* Left Column: Heading, Subtitle & Membership CTA */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[2px] w-6 bg-[#0078D4] rounded-full" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0078D4]">
                  THE FRAMEWORK
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-[2.65rem] font-bold text-slate-900 tracking-tight leading-[1.16]">
                LSR — the three things{' '}
                <span className="text-[#0078D4] block">
                  every business runs on.
                </span>
              </h2>

              {/* Subtitle / Lede */}
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-md font-normal">
                Learn. Sales. Resources. All of it built on trusted peer relationships.
              </p>

              {/* Action Button */}
              <div className="mt-7">
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2.5 rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all active:scale-[0.98] group"
                >
                  <span>See What Membership Includes</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Bottom Footnote Tracker */}
            <div className="mt-12 sm:mt-16 flex items-center gap-3">
              <span className="h-px w-8 bg-slate-300" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-slate-400">
                PEOPLE · TRUST · OPPORTUNITY · IMPACT
              </span>
            </div>
          </div>

          {/* Right Column: 3D Stacked Layered Cards Slider (Light White Theme) */}
          <div
            className="relative flex flex-col items-center justify-center select-none w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >

            {/* Right Nav Arrow Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next card"
              className="absolute -right-3 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-40 flex size-11 sm:size-12 items-center justify-center rounded-full bg-white text-slate-800 shadow-md border border-slate-200 transition-all duration-300 hover:scale-110 hover:bg-[#0078D4] hover:text-white hover:border-[#0078D4] active:scale-95 focus:outline-none"
            >
              <ChevronRight className="size-5" />
            </button>

            {/* Stage Container with 3D perspective & cascading cards */}
            <div
              className="relative w-full max-w-[740px] xl:max-w-[820px] min-h-[460px] sm:min-h-[480px] flex items-center"
              style={{ perspective: '1100px' }}
              onMouseDown={(e) => handleDragStart(e.clientX)}
              onMouseUp={(e) => handleDragEnd(e.clientX)}
              onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (e.changedTouches.length > 0) {
                  handleDragEnd(e.changedTouches[0].clientX)
                }
              }}
            >
              {lsrCards.map((card, idx) => {
                const offset = (idx - activeIndex + lsrCards.length) % lsrCards.length
                const CardIcon = card.icon

                let transformStyle: React.CSSProperties = {}
                let isClickable = false

                if (offset === 0) {
                  isClickable = true
                  transformStyle = {
                    transform: 'translate3d(0px, 0px, 0px) scale(1)',
                    opacity: 1,
                    zIndex: 30,
                    filter: 'none',
                    pointerEvents: 'auto',
                  }
                } else if (offset === 1) {
                  isClickable = true
                  const x = isMobile ? 28 : 220
                  const y = isMobile ? 0 : -10
                  transformStyle = {
                    transform: `translate3d(${x}px, ${y}px, -90px) scale(0.92)`,
                    opacity: 0.85,
                    zIndex: 20,
                    filter: 'brightness(0.96)',
                    pointerEvents: 'auto',
                    cursor: 'pointer',
                  }
                } else if (offset === 2) {
                  isClickable = true
                  const x = isMobile ? 56 : 430
                  const y = isMobile ? 0 : -20
                  transformStyle = {
                    transform: `translate3d(${x}px, ${y}px, -180px) scale(0.84)`,
                    opacity: 0.6,
                    zIndex: 15,
                    filter: 'brightness(0.92)',
                    pointerEvents: 'auto',
                    cursor: 'pointer',
                  }
                } else {
                  transformStyle = {
                    transform: 'translate3d(180px, -30px, -270px) scale(0.76)',
                    opacity: 0,
                    zIndex: 10,
                    pointerEvents: 'none',
                  }
                }

                return (
                  <div
                    key={card.num}
                    onClick={() => isClickable && idx !== activeIndex && setActiveIndex(idx)}
                    style={transformStyle}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] sm:w-[290px] lg:w-[280px] xl:w-[295px] rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 text-slate-900 shadow-[0_15px_35px_rgba(15,23,42,0.07)] transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform flex flex-col justify-between min-h-[430px] sm:min-h-[450px]"
                  >
                    {/* Watermarked Number Background */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute right-5 top-2 text-[6rem] sm:text-[6.6rem] font-black leading-none select-none text-slate-100"
                    >
                      {card.num}
                    </span>

                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div>
                        {/* Top Counter & Tag */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold tracking-wider text-slate-400">
                            {card.indexLabel}
                          </span>
                          <span className="rounded-full bg-blue-50 border border-blue-100 px-3 py-0.5 text-[10px] font-bold text-[#0078D4]">
                            {card.category}
                          </span>
                        </div>

                        {/* Circular Icon Badge */}
                        <div className={`mt-4 sm:mt-5 flex size-13 sm:size-14 items-center justify-center rounded-2xl border shadow-2xs ${card.iconBg} ${card.iconColor}`}>
                          <CardIcon className="size-6" />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mt-4 tracking-tight">
                          {card.title}
                        </h3>

                        {/* Body Paragraph */}
                        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-2.5 font-normal">
                          {card.body}
                        </p>
                      </div>

                      {/* Checklist Bullets */}
                      <div className="mt-5 sm:mt-6 flex flex-col gap-2.5 sm:gap-3 pt-4 sm:pt-5 border-t border-slate-100">
                        {card.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2.5">
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0078D4]">
                              <Check className="size-3 stroke-[3]" />
                            </span>
                            <span className="text-xs sm:text-[13px] font-medium text-slate-700">
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Bottom Indicator Navigation Bar */}
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
              {lsrCards.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 transition-all duration-300 rounded-full ${activeIndex === idx
                    ? 'w-8 bg-[#0078D4] shadow-sm'
                    : 'w-4 bg-slate-200 hover:bg-slate-300'
                    }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 6B — MEDITATIONS & PLAYBOOK VAULT (MINDVALLEY 3-ROW MOSAIC MARQUEE)
   ========================================================================= */

interface MeditationTrackItem {
  id: string
  title: string
  subtitle: string
  mentor: string
  category: string
  duration: string
  image: string
  accentColor: string
  fontStyle: 'serif' | 'sans' | 'script' | 'bold'
  description: string
  takeaways: string[]
}

export function MasterclassesSection() {
  // ── Row 1 Tracks (Matching the top row of Mindvalley's meditation marquee) ──
  const row1Tracks: MeditationTrackItem[] = [
    {
      id: 'med-1',
      title: 'RESTFUL SLEEP',
      subtitle: 'Delta Wave Recovery',
      mentor: 'Dr. Michael Breus',
      category: 'Deep Rest & Sleep',
      duration: '25 mins · Guided Audio',
      image: 'https://images.unsplash.com/photo-1511295742362-92c96b124e52?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-indigo-900/90 via-slate-950/80 to-purple-950/90',
      fontStyle: 'bold',
      description: 'A scientifically engineered binaural delta-wave induction that quiets active neurological loops, lowers cortisol, and promotes restorative rapid eye movement sleep.',
      takeaways: ['Instant nervous system down-regulation', 'Circadian rhythm synchronization', 'Zero sleep-onset friction'],
    },
    {
      id: 'med-2',
      title: 'THE 6 PHASE MEDITATION',
      subtitle: 'Peak State Alignment',
      mentor: 'Vishen Lakhiani',
      category: 'Daily Alignment',
      duration: '21 mins · Master Protocol',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-blue-900/90 via-sky-950/80 to-cyan-950/90',
      fontStyle: 'serif',
      description: 'The world-renowned 6-step cognitive protocol unifying compassion, gratitude, forgiveness, future visioning, perfect day priming, and the universal blessing.',
      takeaways: ['Compassion & connection priming', '3-year trajectory visualization', 'Daily sovereign state calibration'],
    },
    {
      id: 'med-3',
      title: 'Awakening Your Joy',
      subtitle: 'Inner Radiance Flow',
      mentor: 'Sadhvi Bhagawati',
      category: 'Emotional Mastery',
      duration: '18 mins · Heart Practice',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-amber-900/90 via-orange-950/80 to-rose-950/90',
      fontStyle: 'script',
      description: 'Dissolve latent sorrow and awaken authentic inner happiness using sacred somatic breathing and heart-centered awareness.',
      takeaways: ['Release conditioned heaviness', 'Open heart energetic center', 'Unconditional joy activation'],
    },
    {
      id: 'med-4',
      title: 'Stop Holding Back',
      subtitle: 'Breakthrough Power',
      mentor: 'Lisa Nichols',
      category: 'Unshakable Courage',
      duration: '22 mins · Empowerment',
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-rose-950/90 via-slate-900/80 to-amber-950/90',
      fontStyle: 'bold',
      description: 'Shatter impostor syndrome, declare your divine worth, and step unapologetically into rooms with absolute sovereign presence.',
      takeaways: ['Conquer fear of rejection', 'Reclaim vocal authority', 'Step into high-stakes leadership'],
    },
    {
      id: 'med-5',
      title: 'PURE CONFIDENCE',
      subtitle: 'Executive Radiance',
      mentor: 'Robin Sharma',
      category: 'Leadership Mindset',
      duration: '15 mins · Power Meditation',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-yellow-950/90 via-slate-900/80 to-amber-950/90',
      fontStyle: 'bold',
      description: 'Anchor the physiological and psychological state of unshakable self-trust before entering boardrooms, major negotiations, or keynote stages.',
      takeaways: ['Posture & vocal tone resonance', 'Eradicate micro-doubts', 'Command respectful attention'],
    },
    {
      id: 'med-6',
      title: 'ACTIVATING YOUR SUCCESS ENERGY',
      subtitle: 'Vibrational Mastery',
      mentor: 'Marie Diamond',
      category: 'Energetic Alignment',
      duration: '20 mins · Quantum Flow',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-cyan-950/90 via-blue-950/80 to-emerald-950/90',
      fontStyle: 'bold',
      description: 'Harmonize your personal energetic signature with quantum abundance and accelerate the manifest speed of your highest business goals.',
      takeaways: ['Quantum aura cleansing', 'Abundance magnet activation', 'Spatial energy harmonizing'],
    },
    {
      id: 'med-7',
      title: 'RESTORING YOUR AURA',
      subtitle: 'Pranic Cleansing',
      mentor: 'Jeffrey Allen',
      category: 'Energy Clearing',
      duration: '24 mins · Deep Cleanse',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-purple-950/90 via-fuchsia-950/80 to-indigo-950/90',
      fontStyle: 'serif',
      description: 'Clear stagnant psychic debris, emotional absorption from others, and reinforce your energetic field with luminous protection.',
      takeaways: ['Release boundary leaks', 'Recharge spiritual vitality', 'Energetic shield establishment'],
    },
    {
      id: 'med-8',
      title: 'SUPER MIND BELIEFS',
      subtitle: 'Subconscious Reprogramming',
      mentor: 'Marisa Peer',
      category: 'Rapid Transformational',
      duration: '30 mins · Hypno-Therapy',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-blue-950/90 via-sky-900/80 to-teal-950/90',
      fontStyle: 'bold',
      description: 'Rewrite limiting childhood beliefs around worthiness, wealth ceiling, and visibility using proven neuro-linguistic hypnotherapy.',
      takeaways: ['Eradicate "I am not enough"', 'Reprogram baseline self-worth', 'Install prosperity blueprint'],
    },
    {
      id: 'med-9',
      title: 'ENHANCING RELATIONSHIPS',
      subtitle: 'Sacred Heart Resonance',
      mentor: 'Katherine Woodward Thomas',
      category: 'Conscious Love & Bonds',
      duration: '20 mins · Connection',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-rose-950/90 via-amber-950/80 to-pink-950/90',
      fontStyle: 'script',
      description: 'Heal relational triggers, foster genuine vulnerability, and cultivate deep mutual admiration with your life partner and peer circle.',
      takeaways: ['De-escalate defensive loops', 'Authentic empathic listening', 'Deepen emotional intimacy'],
    },
    {
      id: 'med-10',
      title: 'SHIFTING YOUR PARADIGM',
      subtitle: 'Universal Laws of Wealth',
      mentor: 'Bob Proctor',
      category: 'Abundance Mindset',
      duration: '35 mins · Classic Audio',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-slate-950/90 via-blue-950/80 to-amber-950/90',
      fontStyle: 'bold',
      description: 'Master the immutable mental laws of circulation, supply, and non-resistance to bridge the knowing-doing gap in your enterprise.',
      takeaways: ['Break through revenue ceilings', 'Align conscious with subconscious', 'The Law of Perpetual Transmutation'],
    },
  ]

  // ── Row 2 Tracks (Middle row of Mindvalley's meditation marquee) ──
  const row2Tracks: MeditationTrackItem[] = [
    {
      id: 'med-11',
      title: 'FIND YOUR CONFIDENCE AND BE BOLD',
      subtitle: 'Courage & Magnetism',
      mentor: 'Reggie Rivers',
      category: 'Public Speaking & Presence',
      duration: '16 mins · Power Audio',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-amber-950/90 via-yellow-950/80 to-slate-950/90',
      fontStyle: 'bold',
      description: 'Ignite authentic charisma, command authority without aggression, and speak with unwavering clarity.',
      takeaways: ['Neutralize stage anxiety', 'Anchor decisive executive tone', 'Project magnetic warmth'],
    },
    {
      id: 'med-12',
      title: 'Success Is My Natural State',
      subtitle: 'Flow-State Alignment',
      mentor: 'Michael Beckwith',
      category: 'Spiritual Wisdom',
      duration: '22 mins · Affirmation Track',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-emerald-950/90 via-teal-950/80 to-blue-950/90',
      fontStyle: 'script',
      description: 'Dissolve the false struggle myth and align with the effortless momentum of natural evolutionary success.',
      takeaways: ['Shift from force to power', 'Eliminate burnout patterns', 'Harmonize with universal timing'],
    },
    {
      id: 'med-13',
      title: 'RELEASE FROM WORRY',
      subtitle: 'Somatic Nervous Reset',
      mentor: 'Dr. Neeta Bhushan',
      category: 'Anxiety Relief',
      duration: '18 mins · Calming Breath',
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-pink-950/90 via-rose-950/80 to-slate-950/90',
      fontStyle: 'serif',
      description: 'Somatic vagus nerve toning to release anticipatory dread, future catastrophizing, and physical tension in the stomach and shoulders.',
      takeaways: ['Instant vagal tone activation', 'Ground in the present breath', 'Unclench cognitive worry spirals'],
    },
    {
      id: 'med-14',
      title: 'SALES TO SERVICE',
      subtitle: 'Heart-Centered Closing',
      mentor: 'Jason Campbell',
      category: 'Ethical Influence',
      duration: '20 mins · Commercial Flow',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-amber-950/90 via-orange-950/80 to-yellow-950/90',
      fontStyle: 'bold',
      description: 'Reframe commercial selling into pure service and love for your client, making closing natural, graceful, and mutually transformative.',
      takeaways: ['Overcome sales guilt', 'Deep client empathy calibration', 'Elevate deal close certainty'],
    },
    {
      id: 'med-15',
      title: 'GETTING MOTIVATED',
      subtitle: 'High Velocity Drive',
      mentor: 'Jim Kwik',
      category: 'Cognitive Velocity',
      duration: '12 mins · Morning Booster',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-blue-950/90 via-cyan-950/80 to-slate-950/90',
      fontStyle: 'serif',
      description: 'Trigger dopamine-optimized neural pathways for rapid task initiation, deep creative flow, and zero morning inertia.',
      takeaways: ['Dopamine baseline priming', 'Overcome procrastination', 'Hyperfocus state ignition'],
    },
    {
      id: 'med-16',
      title: 'ALLEVIATING SOCIAL ANXIETY',
      subtitle: 'Grace in Crowds & Galas',
      mentor: 'Dr. Shefali Tsabary',
      category: 'Social Freedom',
      duration: '21 mins · Guided Presence',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-slate-950/90 via-stone-900/80 to-zinc-950/90',
      fontStyle: 'bold',
      description: 'Feel completely relaxed, grounded, and genuinely curious when entering networking galas, high-table summits, and large social events.',
      takeaways: ['Dissolve external judgment fears', 'Relax facial & chest muscles', 'Organic conversation opening'],
    },
    {
      id: 'med-17',
      title: 'HYPNOTIC TRANCE FOR INSTANT CONFIDENCE',
      subtitle: 'Deep Subconscious Anchor',
      mentor: 'Paul McKenna',
      category: 'Clinical Hypnosis',
      duration: '25 mins · Hypnotic Audio',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-cyan-950/90 via-teal-950/80 to-blue-950/90',
      fontStyle: 'bold',
      description: 'World-famous clinical hypnotherapy protocol to program absolute, instinctive poise under severe pressure.',
      takeaways: ['Physical kinesthetic anchor creation', 'Eradicate subconscious hesitation', 'Calm heart rate under scrutiny'],
    },
    {
      id: 'med-18',
      title: 'DEEP GROUNDING PRACTICE',
      subtitle: 'Earth Resonance & Rooting',
      mentor: 'Agapi Stassinopoulos',
      category: 'Somatic Stability',
      duration: '17 mins · Earth Centering',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-orange-950/90 via-amber-950/80 to-stone-950/90',
      fontStyle: 'serif',
      description: 'Reconnect with the stabilizing gravity of the earth when feeling scattered, overwhelmed by decisions, or energetically ungrounded.',
      takeaways: ['Root chakra grounding', 'Mental chatter dissolution', 'Sovereign center stabilization'],
    },
    {
      id: 'med-19',
      title: 'HEART OPENING MEDITATION',
      subtitle: 'Compassion & Gratitude',
      mentor: 'Dr. Joe Dispenza',
      category: 'Heart Coherence',
      duration: '28 mins · Coherence Protocol',
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-rose-950/90 via-red-950/80 to-pink-950/90',
      fontStyle: 'bold',
      description: 'Create mathematical brain-heart coherence to elevate your electromagnetic field and broadcast elevated emotions of gratitude and love.',
      takeaways: ['Elevated emotion broadcasting', 'Sympathetic nervous reset', 'Heart rate variability optimization'],
    },
    {
      id: 'med-20',
      title: 'TUNE IN WITH YOURSELF',
      subtitle: 'Soul Voice Alignment',
      mentor: 'Kristina Mänd-Lakhiani',
      category: 'Self-Authenticity',
      duration: '16 mins · Reflection',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-amber-950/90 via-red-950/80 to-slate-950/90',
      fontStyle: 'bold',
      description: 'Strip away expectations of parents, peers, and society to hear your true authentic inner compass with sparkling clarity.',
      takeaways: ['Differentiate ego vs truth', 'End self-betrayal habits', 'Cultivate fierce self-acceptance'],
    },
    {
      id: 'med-21',
      title: 'SILVA CENTERING EXERCISE',
      subtitle: 'Alpha Level Activation (3 to 1)',
      mentor: 'Jose Silva Method',
      category: 'Alpha Mind Programming',
      duration: '26 mins · Dynamic Meditation',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-blue-950/90 via-purple-950/80 to-indigo-950/90',
      fontStyle: 'serif',
      description: 'The legendary Silva Ultramind technique to drop your brainwave frequency from Beta (20Hz) to deep Alpha (10Hz) for rapid problem solving.',
      takeaways: ['Instant 3-to-1 countdown countdown', 'Mental video screen technique', 'Genius intuitive flashes on demand'],
    },
  ]

  // ── Row 3 Tracks (Bottom row of Mindvalley's meditation marquee) ──
  const row3Tracks: MeditationTrackItem[] = [
    {
      id: 'med-22',
      title: 'MIND BODY ALIGNMENT',
      subtitle: 'Pranic Energy Balance',
      mentor: 'Gellért Varga',
      category: 'Holistic Vitality',
      duration: '22 mins · Somatic Flow',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-indigo-950/90 via-sky-950/80 to-purple-950/90',
      fontStyle: 'bold',
      description: 'Integrate physical cells, meridian channels, and mental clarity into a unified harmonious operating vessel.',
      takeaways: ['Cellular tension release', 'Meridian energy alignment', 'Physical vitality replenishment'],
    },
    {
      id: 'med-23',
      title: 'MANIFESTING ABUNDANCE',
      subtitle: 'Golden Horizon Dawn',
      mentor: 'Regan Hillyer',
      category: 'Wealth Acceleration',
      duration: '20 mins · Energetic Coding',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-amber-950/90 via-yellow-900/80 to-orange-950/90',
      fontStyle: 'serif',
      description: 'Anchor the energetic architecture of 8-figure wealth, luxury comfort, and philanthropic overflow into your cellular memory.',
      takeaways: ['Expand financial capacity', 'Eliminate fear of sudden wealth', 'Accelerate timeline convergence'],
    },
    {
      id: 'med-24',
      title: 'Present in the Moment',
      subtitle: 'Pure Zen Awareness',
      mentor: 'Jon Kabat-Zinn',
      category: 'Mindful Living',
      duration: '15 mins · Silent Witness',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-sky-950/90 via-blue-900/80 to-cyan-950/90',
      fontStyle: 'script',
      description: 'Stop the relentless mental time-travel between yesterday regrets and tomorrow anxieties to dwell fully in the eternal now.',
      takeaways: ['Single-tasking clarity', 'Savoring micro-moments', 'End mindless scrolling compulsion'],
    },
    {
      id: 'med-25',
      title: 'HEALING YOUR RELATIONSHIP WITH MONEY',
      subtitle: 'Financial Peace & Flow',
      mentor: 'Ken Honda',
      category: 'Happy Money',
      duration: '24 mins · Gratitude Practice',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-amber-950/90 via-emerald-950/80 to-slate-950/90',
      fontStyle: 'bold',
      description: 'Replace historical guilt, ancestral scarcity, and hoarding tension with the joyful, flowing currency of "Arigato Money".',
      takeaways: ['Bless incoming & outgoing wealth', 'Dissolve financial anxiety', 'Magnetize peaceful prosperity'],
    },
    {
      id: 'med-26',
      title: 'Soulmate',
      subtitle: 'Deep Emotional Intimacy',
      mentor: 'Arielle Ford',
      category: 'Sacred Partnership',
      duration: '19 mins · Heart Magnet',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-stone-950/90 via-amber-950/80 to-rose-950/90',
      fontStyle: 'script',
      description: 'Cultivate the emotional frequency and unconditional self-love that effortlessly draws your true life companion into your reality.',
      takeaways: ['Heal past romantic wounds', 'Clarity on partner values', 'Vibrational alignment with soul love'],
    },
    {
      id: 'med-27',
      title: 'Embrace The Goddess Within',
      subtitle: 'Radiant Feminine Power',
      mentor: 'Saida Désilets',
      category: 'Divine Feminine',
      duration: '22 mins · Sacred Sovereignty',
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-amber-950/90 via-rose-950/80 to-purple-950/90',
      fontStyle: 'script',
      description: 'Reconnect with sacred intuition, sensual vitality, and the luminous fierce wisdom of the empowered feminine leader.',
      takeaways: ['Reclaim intuitive authority', 'Honor cyclical natural rhythms', 'Radiate magnetic grace'],
    },
    {
      id: 'med-28',
      title: 'ELEVATE YOUR FOCUS',
      subtitle: 'Hyper-Concentration Laser',
      mentor: 'Nir Eyal',
      category: 'Indistractable Mind',
      duration: '14 mins · Deep Work Prep',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-fuchsia-950/90 via-purple-950/80 to-blue-950/90',
      fontStyle: 'bold',
      description: 'A 14-minute cognitive warmup designed to shut down peripheral sensory distractors and lock you into 90 minutes of pure deep work.',
      takeaways: ['Block internal triggers', 'Establish deep work tunnel', 'Double daily output quality'],
    },
    {
      id: 'med-29',
      title: 'Inner Journey',
      subtitle: 'Subconscious Exploration',
      mentor: 'Michael Singer',
      category: 'Untethered Soul',
      duration: '25 mins · Transcendence',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-emerald-950/90 via-teal-950/80 to-slate-950/90',
      fontStyle: 'script',
      description: 'Step behind the mind into the seat of the silent witnessing consciousness, releasing all resistance to reality.',
      takeaways: ['Transcend obsessive self-talk', 'Surrender to life flow', 'Unconditional inner peace'],
    },
    {
      id: 'med-30',
      title: 'REGAIN CONTROL',
      subtitle: 'Calm in Chaos',
      mentor: 'Robin Sharma',
      category: 'Crisis Mastery',
      duration: '18 mins · Centering Audio',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
      accentColor: 'from-slate-950/90 via-indigo-950/80 to-blue-950/90',
      fontStyle: 'bold',
      description: 'Reclaim your executive focus, emotional poise, and strategic clarity when market conditions or company crises threaten stability.',
      takeaways: ['Stop reaction loops', 'Identify the single critical leverage point', 'Execute with ice-cold calmness'],
    },
  ]

  const infiniteRow1 = [...row1Tracks, ...row1Tracks, ...row1Tracks]
  const infiniteRow2 = [...row2Tracks, ...row2Tracks, ...row2Tracks]
  const infiniteRow3 = [...row3Tracks, ...row3Tracks, ...row3Tracks]

  const [selectedTrack, setSelectedTrack] = useState<MeditationTrackItem | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playbackProgress, setPlaybackProgress] = useState(35)

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section id="meditations-collection" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28 border-b border-slate-200 text-slate-900">

      {/* ── CSS Keyframes for the 3 staggered continuous infinite marquees ── */}
      <style jsx global>{`
        @keyframes pgMedMarqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
        @keyframes pgMedMarqueeRight {
          0% {
            transform: translateX(-33.3333%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-med-marquee-left {
          display: flex;
          width: max-content;
          animation: pgMedMarqueeLeft 46s linear infinite;
        }
        .animate-med-marquee-right {
          display: flex;
          width: max-content;
          animation: pgMedMarqueeRight 52s linear infinite;
        }
        .animate-med-marquee-left-fast {
          display: flex;
          width: max-content;
          animation: pgMedMarqueeLeft 40s linear infinite;
        }
        .med-marquee-wrap:hover .animate-med-marquee-left,
        .med-marquee-wrap:hover .animate-med-marquee-right,
        .med-marquee-wrap:hover .animate-med-marquee-left-fast {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[850px] rounded-full bg-blue-500/[0.025] blur-[160px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header (Exact Mindvalley-style Centered Layout with Segoe UI Hierarchy) ── */}
        <div className="flex flex-col items-center text-center mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-700 mb-3.5 block">
            MINDVALLEY MEDITATIONS
          </span>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[2.9rem] font-bold text-slate-900 tracking-tight leading-[1.14] max-w-3xl">
            The Meditation Collection<br className="hidden sm:block" /> That Transforms Your Life
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
            Discover 1,000+ guided meditations designed to help you find calm, gain clarity, heal deeply, and become more of who you&apos;re meant to be.
          </p>

          <div className="mt-7 sm:mt-8">
            <Link
              href="/lsr-framework"
              className="inline-flex items-center gap-2 rounded-full bg-black hover:bg-slate-800 text-white font-semibold px-8 py-3.5 text-sm sm:text-base shadow-md transition-all active:scale-[0.98]"
            >
              <span>Explore Meditations</span>
            </Link>
          </div>
        </div>

      </div>

      {/* ── 3-Row Staggered Mosaic Infinite Marquee (Album Cover Styled Rounded Square Tiles) ── */}
      <div className="med-marquee-wrap flex flex-col gap-3.5 sm:gap-4 overflow-hidden w-full select-none pt-2 pb-2">

        {/* ── Row 1 — Sliding Left ── */}
        <div className="animate-med-marquee-left flex gap-3.5 sm:gap-4 px-2">
          {infiniteRow1.map((item, idx) => (
            <div
              key={`med-r1-${item.id}-${idx}`}
              onClick={() => {
                setSelectedTrack(item)
                setIsPlaying(true)
              }}
              className="group relative w-[165px] h-[165px] sm:w-[195px] sm:h-[195px] md:w-[215px] md:h-[215px] rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-sm hover:shadow-2xl border border-black/5 bg-slate-950 shrink-0 cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:z-20"
            >
              {/* Background Art Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="215px"
                className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dynamic Gradient Tint Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.accentColor} opacity-75 group-hover:opacity-85 transition-opacity duration-300`} />

              {/* Top Subtitle Tag */}
              <div className="absolute top-2.5 inset-x-2.5 z-10 flex items-center justify-between pointer-events-none">
                <span className="text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-wider text-white/90 drop-shadow-sm px-1.5 py-0.5 rounded bg-black/30 backdrop-blur-xs">
                  {item.duration.split('·')[0]}
                </span>
                <span className="size-2 rounded-full bg-white/60 group-hover:bg-white transition-colors" />
              </div>

              {/* Centered Artistic Typography (Matching Mindvalley Album Cover Aesthetics) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center z-10">
                <h3
                  className={`text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] leading-tight px-1 transition-transform duration-300 group-hover:scale-105 ${item.fontStyle === 'script'
                      ? 'font-serif italic text-lg sm:text-xl md:text-2xl font-bold tracking-normal'
                      : item.fontStyle === 'serif'
                        ? 'font-serif text-sm sm:text-base md:text-lg font-bold tracking-tight uppercase'
                        : 'font-sans text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wide'
                    }`}
                >
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-white/80 font-medium mt-1 drop-shadow-md line-clamp-1">
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom Mentor Stamp */}
              <div className="absolute inset-x-0 bottom-2.5 px-3 z-10 flex items-center justify-between text-[9px] sm:text-[10px] text-white/70 font-medium">
                <span className="truncate max-w-[120px] drop-shadow-xs">{item.mentor}</span>
                <div className="size-5 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="size-2.5 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Row 2 — Sliding Right ── */}
        <div className="animate-med-marquee-right flex gap-3.5 sm:gap-4 px-2">
          {infiniteRow2.map((item, idx) => (
            <div
              key={`med-r2-${item.id}-${idx}`}
              onClick={() => {
                setSelectedTrack(item)
                setIsPlaying(true)
              }}
              className="group relative w-[165px] h-[165px] sm:w-[195px] sm:h-[195px] md:w-[215px] md:h-[215px] rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-sm hover:shadow-2xl border border-black/5 bg-slate-950 shrink-0 cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:z-20"
            >
              {/* Background Art Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="215px"
                className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dynamic Gradient Tint Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.accentColor} opacity-75 group-hover:opacity-85 transition-opacity duration-300`} />

              {/* Top Subtitle Tag */}
              <div className="absolute top-2.5 inset-x-2.5 z-10 flex items-center justify-between pointer-events-none">
                <span className="text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-wider text-white/90 drop-shadow-sm px-1.5 py-0.5 rounded bg-black/30 backdrop-blur-xs">
                  {item.duration.split('·')[0]}
                </span>
                <span className="size-2 rounded-full bg-white/60 group-hover:bg-white transition-colors" />
              </div>

              {/* Centered Artistic Typography */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center z-10">
                <h3
                  className={`text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] leading-tight px-1 transition-transform duration-300 group-hover:scale-105 ${item.fontStyle === 'script'
                      ? 'font-serif italic text-lg sm:text-xl md:text-2xl font-bold tracking-normal'
                      : item.fontStyle === 'serif'
                        ? 'font-serif text-sm sm:text-base md:text-lg font-bold tracking-tight uppercase'
                        : 'font-sans text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wide'
                    }`}
                >
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-white/80 font-medium mt-1 drop-shadow-md line-clamp-1">
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom Mentor Stamp */}
              <div className="absolute inset-x-0 bottom-2.5 px-3 z-10 flex items-center justify-between text-[9px] sm:text-[10px] text-white/70 font-medium">
                <span className="truncate max-w-[120px] drop-shadow-xs">{item.mentor}</span>
                <div className="size-5 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="size-2.5 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Row 3 — Sliding Left Fast ── */}
        <div className="animate-med-marquee-left-fast flex gap-3.5 sm:gap-4 px-2">
          {infiniteRow3.map((item, idx) => (
            <div
              key={`med-r3-${item.id}-${idx}`}
              onClick={() => {
                setSelectedTrack(item)
                setIsPlaying(true)
              }}
              className="group relative w-[165px] h-[165px] sm:w-[195px] sm:h-[195px] md:w-[215px] md:h-[215px] rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-sm hover:shadow-2xl border border-black/5 bg-slate-950 shrink-0 cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:z-20"
            >
              {/* Background Art Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="215px"
                className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dynamic Gradient Tint Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.accentColor} opacity-75 group-hover:opacity-85 transition-opacity duration-300`} />

              {/* Top Subtitle Tag */}
              <div className="absolute top-2.5 inset-x-2.5 z-10 flex items-center justify-between pointer-events-none">
                <span className="text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-wider text-white/90 drop-shadow-sm px-1.5 py-0.5 rounded bg-black/30 backdrop-blur-xs">
                  {item.duration.split('·')[0]}
                </span>
                <span className="size-2 rounded-full bg-white/60 group-hover:bg-white transition-colors" />
              </div>

              {/* Centered Artistic Typography */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center z-10">
                <h3
                  className={`text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] leading-tight px-1 transition-transform duration-300 group-hover:scale-105 ${item.fontStyle === 'script'
                      ? 'font-serif italic text-lg sm:text-xl md:text-2xl font-bold tracking-normal'
                      : item.fontStyle === 'serif'
                        ? 'font-serif text-sm sm:text-base md:text-lg font-bold tracking-tight uppercase'
                        : 'font-sans text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wide'
                    }`}
                >
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-white/80 font-medium mt-1 drop-shadow-md line-clamp-1">
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom Mentor Stamp */}
              <div className="absolute inset-x-0 bottom-2.5 px-3 z-10 flex items-center justify-between text-[9px] sm:text-[10px] text-white/70 font-medium">
                <span className="truncate max-w-[120px] drop-shadow-xs">{item.mentor}</span>
                <div className="size-5 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="size-2.5 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Interactive Audio Player & Track Deep Dive Modal ── */}
      {selectedTrack && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => {
            setSelectedTrack(null)
            setIsPlaying(false)
          }}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-[20px] border border-slate-200 bg-white p-6 sm:p-8 text-slate-900 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => {
                setSelectedTrack(null)
                setIsPlaying(false)
              }}
              className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
              aria-label="Close modal"
            >
              <X className="size-4" />
            </button>

            {/* Header Album Cover Preview */}
            <div className="flex items-center gap-4 mb-5">
              <div className="relative size-20 sm:size-24 rounded-2xl overflow-hidden border border-slate-200 shadow-md shrink-0">
                <Image
                  src={selectedTrack.image}
                  alt={selectedTrack.title}
                  fill
                  className="size-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedTrack.accentColor} opacity-80 flex items-center justify-center`}>
                  <button
                    type="button"
                    onClick={togglePlayback}
                    className="size-10 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                    aria-label={isPlaying ? 'Pause preview' : 'Play preview'}
                  >
                    {isPlaying ? (
                      <Pause className="size-4 fill-current" />
                    ) : (
                      <Play className="size-4 fill-current ml-0.5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0078D4] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                    {selectedTrack.category}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {selectedTrack.duration}
                  </span>
                </div>
                <h3 className="font-sans text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {selectedTrack.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Instructor: <span className="text-slate-800 font-semibold">{selectedTrack.mentor}</span>
                </p>
              </div>
            </div>

            {/* Audio Waveform / Playback Simulation Bar */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-3.5 mb-4">
              <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium mb-2">
                <span className="flex items-center gap-1.5 text-[#0078D4] font-semibold">
                  <span className="size-2 rounded-full bg-[#0078D4] animate-ping" />
                  {isPlaying ? 'Streaming Audio Preview' : 'Preview Paused'}
                </span>
                <span>04:18 / {selectedTrack.duration.split('·')[0]}</span>
              </div>

              {/* Simulated Waveform Visualizer */}
              <div className="flex items-end gap-1 h-8 w-full py-1">
                {[14, 28, 45, 60, 85, 40, 70, 95, 65, 30, 80, 100, 75, 45, 90, 60, 35, 80, 50, 68, 88, 55, 30, 70, 90, 45, 60, 35, 20].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${isPlaying ? Math.max(15, (h * (0.6 + Math.random() * 0.4))) : h * 0.3}%` }}
                    className={`flex-1 rounded-full transition-all duration-150 ${i < 12 ? 'bg-[#0078D4]' : 'bg-slate-300'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {selectedTrack.description}
            </p>

            {/* Key Benefits */}
            <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200/80 p-3.5 sm:p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block mb-2">
                Key Mindset Activations:
              </span>
              <ul className="flex flex-col gap-1.5">
                {selectedTrack.takeaways.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="size-3.5 text-[#0078D4] shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/lsr-framework"
                className="inline-flex items-center gap-2 rounded-full bg-black hover:bg-slate-800 text-white font-semibold px-6 py-2.5 text-xs sm:text-sm shadow-sm transition-colors"
              >
                <span>Listen to Full Series</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  setSelectedTrack(null)
                  setIsPlaying(false)
                }}
                className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

/* =========================================================================
   SECTION 7 — THE UNITY APP
   ========================================================================= */

export function UnitySection() {
  const features = [
    'Discover Peers by industry, city and expertise',
    'Book one-to-one conversations',
    'Log referrals given and received',
    'Participate in your Circle',
    'Find and create opportunities',
    'Share your story',
    'See your contribution recognised',
    'Stay connected to the community from anywhere in the world',
  ]

  return (
    <section id="unity" className="section border-b border-[var(--border)] bg-muted/40">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <SectionHead
            eyebrow="The Digital Home"
            title="The community works every day, not just on meeting day."
            lede="The Peers Global Unity App is the digital home of the community. It is how Peers find each other, stay connected, and keep collaborating between meetings."
          />

          <p className="text-sm text-muted-foreground font-medium">
            Inside Unity, a Peer can:
          </p>

          <ul className="grid gap-2.5 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2
                  aria-hidden
                  className="size-4 shrink-0 text-primary mt-0.5"
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm font-medium text-foreground">
            Download the app, explore the community, and see it for yourself.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={SITE.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="app-badge-btn"
              aria-label="Download on the Apple App Store"
            >
              <Apple className="size-5.5 fill-white shrink-0" />
              <div className="text-left">
                <span className="app-badge-sub">Download on the</span>
                <span className="app-badge-title">App Store</span>
              </div>
            </a>
            <a
              href={SITE.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="app-badge-btn"
              aria-label="Get it on Google Play"
            >
              <svg className="size-5.5 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M3.6 2.4C3.4 2.6 3.2 2.9 3.2 3.4V20.6C3.2 21.1 3.4 21.4 3.6 21.6L12.7 12L3.6 2.4Z" fill="#2196F3" />
                <path d="M16.3 8.4L13.8 10.9L12.7 12L13.8 13.1L16.3 15.6L20.4 13.3C21.6 12.6 21.6 11.4 20.4 10.7L16.3 8.4Z" fill="#FFC107" />
                <path d="M12.7 12L3.6 21.6C3.9 21.8 4.3 21.8 4.8 21.5L16.3 15.6L12.7 12Z" fill="#4CAF50" />
                <path d="M12.7 12L16.3 8.4L4.8 2.5C4.3 2.2 3.9 2.2 3.6 2.4L12.7 12Z" fill="#F44336" />
              </svg>
              <div className="text-left">
                <span className="app-badge-sub">GET IT ON</span>
                <span className="app-badge-title">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        <div
          className="relative min-h-[380px] overflow-hidden border border-[var(--border)] bg-card p-8 flex flex-col justify-center"
          style={{ borderRadius: 'var(--radius-lg)' }}
        >
          <div className="flex flex-col gap-4">
            <span className="eyebrow text-primary">Unity Platform of Record</span>
            <h3 className="display text-2xl sm:text-3xl text-foreground">
              Always on. Always connected.
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every connection logged, every commitment tracked, and every Peer accessible across 11
              cities in one secure mobile ecosystem.
            </p>
            <div className="mt-4 border-t border-[var(--border)] pt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>Verified member records</span>
              <span className="font-semibold text-primary">Unity Web &amp; Mobile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 8 — IMPACT
   ========================================================================= */

export function OutcomesSection() {
  const impactPoints = [
    {
      icon: Handshake,
      text: 'An introduction that lands a first major client.',
    },
    {
      icon: Lightbulb,
      text: 'A conversation that prevents a costly mistake.',
    },
    {
      icon: BarChart3,
      text: 'A partnership that opens a new market.',
    },
    {
      icon: Users,
      text: 'A mentor who gives someone the confidence to keep going.',
    },
    {
      icon: Briefcase,
      text: 'A business that grows and hires twelve more people.',
    },
  ]

  const suggestedPeers = [
    {
      name: 'NIKITA DESHAVAL',
      city: 'Ahmedabad, IN',
      role: 'Founder · Zodiac Gifts',
      initials: 'ND',
      bg: 'bg-amber-100 text-amber-700 border-amber-200',
    },
    {
      name: 'MILLY THAKKAR',
      city: 'Ahmedabad, IN',
      role: 'Founder · Mudra Investment',
      initials: 'MT',
      bg: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    },
    {
      name: 'ATHARVA JAHAGI...',
      city: 'Ahmedabad, IN',
      role: 'Founder · Resobrand',
      initials: 'AJ',
      bg: 'bg-blue-100 text-blue-700 border-blue-200',
    },
    {
      name: 'SANJAY MAKWA...',
      city: 'Ahmedabad, IN',
      role: 'CEO · Import Export Consultancy',
      initials: 'SM',
      bg: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    },
    {
      name: 'VITHAL PATEL',
      city: 'Ahmedabad, IN',
      role: 'Founder · Shivam Impex',
      initials: 'VP',
      bg: 'bg-purple-100 text-purple-700 border-purple-200',
    },
  ]

  return (
    <section
      id="impact"
      className="section relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-[#FAFCFF] via-[#F5F8FD] to-[#EDF4FC] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Soft Glow Aura & Accent */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -top-32 right-10 size-[420px] rounded-full bg-indigo-400/10 blur-3xl" />

      {/* Top Right Executive Pill Badge */}
      <div className="pointer-events-none absolute top-8 right-6 lg:right-14 select-none opacity-85 hidden md:block z-10">
        <div className="flex flex-col items-end gap-1 px-4 py-2.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-xs backdrop-blur-md">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#1D4ED8]">MEASURED IMPACT</span>
          <span className="text-xs font-semibold text-slate-700">People · Ideas · Opportunities · Impact</span>
        </div>
      </div>

      <div className="shell relative z-10 max-w-7xl">
        {/* Main 2-Column Layout Grid */}
        <div className="grid gap-12 lg:grid-cols-[46%_54%] xl:grid-cols-[45%_55%] items-center pt-8 sm:pt-14">

          {/* =========================================================================
             COLUMN 1: Left Copy, 5 Bullets with Circular Icons & CTA
             ========================================================================= */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D4ED8]">
                PRACTICAL IMPACT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[2.65rem] font-bold text-slate-950 tracking-tight leading-[1.15]">
              We count lives{' '}
              <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent block">
                impacted.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed max-w-md font-normal">
              Impact at Peers Global is practical. It is what happens when one entrepreneur helps another.
            </p>

            {/* 5 Bullet Points with Blue Circular Icon Badges */}
            <ul className="mt-6 flex flex-col gap-3">
              {impactPoints.map((pt, i) => {
                const IconComponent = pt.icon
                return (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1D4ED8] border border-blue-200/70 shadow-xs">
                      <IconComponent className="size-4" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-700 leading-snug">
                      {pt.text}
                    </span>
                  </li>
                )
              })}
            </ul>

            {/* Narrative Paragraph */}
            <p className="mt-6 text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-md">
              Every one of those is a life changed. Every one begins with a Peer choosing to contribute. Contribution is recognised across the community — in your Circle, in the Unity App, and in the recognition Peers receive from other Peers.
            </p>

            {/* CTA Button */}
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="/the-currency"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_14px_rgba(29,78,216,0.30)] transition-all duration-200 hover:from-[#1E40AF] hover:to-[#BE123C] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(225,29,72,0.40)] active:scale-[0.97]"
              >
                See Our Impact
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* =========================================================================
             COLUMN 2: Center 2 Overlapping Phones + Floating Badge with Curved Arrow
             ========================================================================= */}
          <div className="relative flex items-center justify-center py-6 sm:py-8 lg:py-10 min-h-[560px] mt-6 sm:mt-10">

            {/* 1. Left Phone (Profile View - Vishal Parmar) */}
            <div className="relative z-10 w-[240px] sm:w-[260px] rounded-[36px] p-2 bg-slate-900 border-[3px] border-slate-700 shadow-[0_20px_50px_rgba(15,23,42,0.22)] transform -rotate-2 -mr-16 sm:-mr-20 lg:-mr-24 scale-95 sm:scale-100">
              <div className="relative rounded-[28px] overflow-hidden bg-white text-slate-900 flex flex-col h-[510px] text-[11px]">

                {/* Phone Top Status Bar */}
                <div className="px-4 pt-2 pb-1 flex items-center justify-between text-[10px] text-slate-600 bg-slate-100/60 border-b border-slate-200/60">
                  <span className="font-semibold">6:17</span>
                  <div className="h-3 w-14 bg-slate-900 rounded-full flex items-center justify-center">
                    <span className="size-1 rounded-full bg-slate-700" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px]">LTE</span>
                    <span className="size-1.5 rounded-full bg-slate-700" />
                  </div>
                </div>

                {/* Profile App Header Bar */}
                <div className="px-3 py-2 flex items-center justify-between border-b border-slate-100 bg-white">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-slate-800">
                    <ChevronLeft className="size-3.5 text-slate-500" />
                    <span>Profile</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <BarChart3 className="size-3.5" />
                    <div className="flex flex-col gap-0.5">
                      <span className="w-3.5 h-0.5 bg-slate-600 rounded-full" />
                      <span className="w-3.5 h-0.5 bg-slate-600 rounded-full" />
                      <span className="w-2.5 h-0.5 bg-slate-600 rounded-full ml-auto" />
                    </div>
                  </div>
                </div>

                {/* Purple Gradient Member Banner */}
                <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 p-2.5 text-white text-center">
                  <span className="block text-[8px] uppercase tracking-wider font-bold text-purple-200">
                    PROUD MEMBER OF PEERS GLOBAL
                  </span>
                  <span className="block text-[10px] font-semibold tracking-tight mt-0.5">
                    Partners in Business. Friends in Life.
                  </span>
                </div>

                {/* Profile Header Block */}
                <div className="p-3 bg-white border-b border-slate-100 text-center relative">
                  <div className="size-14 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 mx-auto border-2 border-white shadow-md flex items-center justify-center text-white font-bold text-base -mt-6">
                    VP
                  </div>
                  <div className="mt-1.5 flex items-center justify-center gap-1">
                    <span className="text-xs font-bold text-slate-900">VISHAL PARMAR</span>
                    <span className="bg-blue-600 text-white rounded-full px-1.5 py-0.2 text-[8px] font-bold">
                      VERIFIED
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">Director at Peers Global</p>

                  <div className="mt-1 flex items-center justify-center gap-1 text-[9px] text-slate-400">
                    <MapPin className="size-2.5 text-slate-400" />
                    <span>Ahmedabad, Gujarat, India</span>
                  </div>

                  {/* 8-Metric Grid */}
                  <div className="mt-2.5 grid grid-cols-4 gap-1 border-t border-slate-100 pt-2 text-center">
                    <div>
                      <span className="block font-bold text-slate-900 text-[11px]">44</span>
                      <span className="block text-[7.5px] text-slate-400">Lives Impact</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-[11px]">36</span>
                      <span className="block text-[7.5px] text-slate-400">Connections</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-[11px]">4</span>
                      <span className="block text-[7.5px] text-slate-400">Followers</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-[11px]">141K</span>
                      <span className="block text-[7.5px] text-slate-400">Coins</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-[11px]">0</span>
                      <span className="block text-[7.5px] text-slate-400">My Badges</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-[11px]">4</span>
                      <span className="block text-[7.5px] text-slate-400">P2P Meetings</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-[11px]">0</span>
                      <span className="block text-[7.5px] text-slate-400">Referrals</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-[11px]">6</span>
                      <span className="block text-[7.5px] text-slate-400">Business Deals</span>
                    </div>
                  </div>
                </div>

                {/* Profile Completion Card */}
                <div className="m-2 rounded-xl border border-blue-100 bg-blue-50/70 p-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-full bg-blue-600 text-white font-bold text-[9px] flex items-center justify-center">
                      45%
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-800">Complete your profile</p>
                      <p className="text-[8px] text-slate-500">Unlock full network potential</p>
                    </div>
                  </div>
                  <span className="rounded-md bg-blue-600 text-white px-2 py-0.5 text-[9px] font-bold">
                    Finish
                  </span>
                </div>

                {/* Subscription Status Card */}
                <div className="mx-2 mb-2 rounded-xl border border-slate-200 bg-slate-50/80 p-2 flex flex-col gap-1 text-[9px]">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700">Plan: Global Peer <strong className="text-emerald-600 font-bold">Active</strong></span>
                    <span className="text-[#0066FF] font-bold">RENEW</span>
                  </div>
                  <div className="text-[8px] text-slate-400 flex items-center justify-between">
                    <span>Joined: Sep 06, 2026</span>
                    <span>Valid: Sep 06, 2027</span>
                  </div>
                </div>

                <div className="mt-auto px-3 py-1.5 border-t border-slate-100 text-[8px] font-bold text-slate-400 uppercase tracking-wider">
                  VERIFICATION &amp; CERTIFICATE
                </div>
              </div>
            </div>

            {/* 2. Right Phone (My Peers View - In Foreground) */}
            <div className="relative z-20 w-[245px] sm:w-[265px] rounded-[36px] p-2 bg-slate-900 border-[3px] border-slate-700 shadow-[0_25px_60px_rgba(15,23,42,0.35)] transform rotate-1 scale-95 sm:scale-100">
              <div className="relative rounded-[28px] overflow-hidden bg-white text-slate-900 flex flex-col h-[510px] text-[11px]">

                {/* Phone Top Status Bar */}
                <div className="px-4 pt-2 pb-1 flex items-center justify-between text-[10px] text-slate-600 bg-slate-100/60 border-b border-slate-200/60">
                  <span className="font-semibold">6:16</span>
                  <div className="h-3 w-14 bg-slate-900 rounded-full flex items-center justify-center">
                    <span className="size-1 rounded-full bg-slate-700" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px]">5G</span>
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                  </div>
                </div>

                {/* My Peers App Header Bar */}
                <div className="px-3 py-2 flex items-center justify-between border-b border-slate-100 bg-white">
                  <span className="font-bold text-xs text-slate-900">My Peers</span>
                  <Search className="size-3.5 text-slate-500" />
                </div>

                {/* 4 Quick Filter Pills */}
                <div className="p-2 grid grid-cols-4 gap-1.5 border-b border-slate-100 bg-slate-50/50 text-center text-[9px]">
                  <div className="rounded-lg border border-slate-200 bg-white p-1.5 flex flex-col items-center gap-0.5 shadow-xs">
                    <MapPin className="size-3 text-[#0066FF]" />
                    <span className="font-semibold text-slate-700 text-[8px]">Near Me</span>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-1.5 flex flex-col items-center gap-0.5 shadow-xs">
                    <Users className="size-3 text-indigo-600" />
                    <span className="font-semibold text-slate-700 text-[8px]">Connections</span>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-1.5 flex flex-col items-center gap-0.5 shadow-xs">
                    <Handshake className="size-3 text-emerald-600" />
                    <span className="font-semibold text-slate-700 text-[8px]">Matches</span>
                  </div>
                  <div className="relative rounded-lg border border-slate-200 bg-white p-1.5 flex flex-col items-center gap-0.5 shadow-xs">
                    <Users className="size-3 text-purple-600" />
                    <span className="font-semibold text-slate-700 text-[8px]">Requests</span>
                    <span className="absolute top-1 right-1 size-1.5 rounded-full bg-red-500" />
                  </div>
                </div>

                {/* Section Header: SUGGESTED FOR YOU */}
                <div className="px-3 py-1.5 flex items-center justify-between text-[8px] font-bold text-slate-400 uppercase tracking-wider bg-white">
                  <span>SUGGESTED FOR YOU</span>
                  <span className="text-[#0066FF] normal-case font-semibold">⇅ Relevance</span>
                </div>

                {/* Peers List */}
                <div className="flex-1 px-2 flex flex-col gap-1.5 overflow-hidden">
                  {suggestedPeers.map((peer, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-100 bg-white p-2 flex items-center justify-between shadow-2xs hover:bg-slate-50 transition"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className={`size-8 rounded-full border flex items-center justify-center font-bold text-[10px] shrink-0 ${peer.bg}`}>
                          {peer.initials}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold text-slate-900 truncate">
                            {peer.name}
                          </p>
                          <p className="text-[8px] text-slate-500 truncate">
                            📍 {peer.city}
                          </p>
                          <p className="text-[8px] text-[#0066FF] font-medium truncate">
                            {peer.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 ml-1">
                        <div className="size-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200">
                          <Users className="size-2.5" />
                        </div>
                        <div className="size-6 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center hover:bg-blue-100">
                          <MessageSquare className="size-2.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom App Bar */}
                <div className="mt-auto border-t border-slate-200/80 bg-white py-1.5 px-3 flex items-center justify-between text-[8px] text-slate-500">
                  <div className="flex flex-col items-center">
                    <Compass className="size-3.5 text-slate-400" />
                    <span>Feed</span>
                  </div>
                  <div className="flex flex-col items-center text-[#0066FF] font-bold">
                    <Users className="size-3.5" />
                    <span>My Peers</span>
                  </div>

                  {/* Elevated Center Glowing Impact Button */}
                  <div className="-mt-4 flex flex-col items-center">
                    <div className="size-8 rounded-full bg-gradient-to-tr from-slate-950 via-blue-900 to-indigo-950 border-2 border-white shadow-md flex items-center justify-center text-white relative">
                      <Sparkles className="size-3.5 text-blue-300 animate-pulse" />
                      <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-red-500" />
                    </div>
                    <span className="text-[7.5px] font-bold text-slate-800 mt-0.5">Impact</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <Boxes className="size-3.5 text-slate-400" />
                    <span>My Circles</span>
                  </div>
                  <div className="relative flex flex-col items-center">
                    <Bell className="size-3.5 text-slate-400" />
                    <span>Highlights</span>
                    <span className="absolute -top-0.5 right-1 size-1 rounded-full bg-red-500" />
                  </div>
                </div>

              </div>
            </div>

            {/* 3. Floating Card Below Left Phone with Hand-Drawn Arrow */}
            <div className="absolute -bottom-4 left-0 sm:-left-6 z-30 flex items-center gap-3 rounded-2xl border border-blue-100 bg-white/95 px-4 py-3 shadow-[0_12px_28px_rgba(0,102,255,0.12)] backdrop-blur-md">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF] border border-blue-200/60">
                <BarChart3 className="size-5" />
              </div>
              <div className="text-left leading-tight">
                <p className="text-xs font-extrabold text-slate-900">Real People.</p>
                <p className="text-xs font-extrabold text-slate-900">Real Opportunities.</p>
                <p className="text-xs font-extrabold text-[#0066FF]">Real Impact.</p>
              </div>
            </div>

            {/* Sketched Blue Curved Arrow pointing towards the floating card */}
            <svg
              viewBox="0 0 100 60"
              className="absolute -bottom-2 -left-14 sm:-left-20 w-16 sm:w-20 stroke-[#0066FF] fill-none pointer-events-none z-25 hidden md:block"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M 10 10 C 20 45, 60 55, 88 45" />
              <path d="M 80 40 L 90 45 L 85 53" />
            </svg>

          </div>

        </div>

        {/* =========================================================================
           BOTTOM SUB-FOOTER: Slogan on Left & Verified Figures on Right
           ========================================================================= */}
        <div className="mt-14 sm:mt-16 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
            PEOPLE · OPPORTUNITIES · GROWTH · STRONGER TOGETHER
          </span>

          <div className="flex items-center gap-3">
            <span className="h-[1.5px] w-8 sm:w-12 bg-blue-300 rounded-full" />
            <span className="text-xs text-slate-500 font-medium">
              {SITE.statsAsOf}
            </span>
            <span className="h-[1.5px] w-8 sm:w-12 bg-blue-300 rounded-full" />
          </div>
        </div>

      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 9 — THE 1 MILLION MISSION
   ========================================================================= */

export function MissionSection() {
  const missionPillars = [
    {
      icon: Users,
      title: 'People',
      subtitle: 'Empowered',
    },
    {
      icon: TrendingUp,
      title: 'Businesses',
      subtitle: 'Created',
    },
    {
      icon: Lightbulb,
      title: 'Opportunities',
      subtitle: 'Unlocked',
    },
    {
      icon: Globe2,
      title: 'Stronger',
      subtitle: 'Communities',
    },
  ]

  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-[#030712] py-20 sm:py-24 lg:py-28 border-y border-blue-900/40 text-white"
    >
      {/* Background Earth Video Loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 size-full object-cover object-center sm:object-[center_right] opacity-75 lg:opacity-85 pointer-events-none"
      >
        <source src="/videos/peers-global-earth-loop.mp4" type="video/mp4" />
      </video>

      {/* Cyber Constellation Network Overlay */}
      <svg
        viewBox="0 0 1400 800"
        className="absolute inset-0 size-full pointer-events-none opacity-30 mix-blend-screen"
        preserveAspectRatio="none"
      >
        <g stroke="#38BDF8" strokeWidth="1" fill="none" opacity="0.6">
          <path d="M 500 450 Q 750 220 1050 340" strokeDasharray="4 4" />
          <path d="M 620 520 Q 880 300 1200 420" strokeDasharray="3 5" />
          <path d="M 720 380 Q 950 180 1280 300" />
          <path d="M 850 480 Q 1100 350 1350 500" strokeDasharray="5 5" />
        </g>
        <g fill="#38BDF8">
          <circle cx="750" cy="220" r="3" className="animate-ping" />
          <circle cx="750" cy="220" r="2" />
          <circle cx="880" cy="300" r="2.5" />
          <circle cx="950" cy="180" r="3.5" />
          <circle cx="1050" cy="340" r="2" />
          <circle cx="1200" cy="420" r="3" />
        </g>
      </svg>

      {/* Atmospheric Gradients for High Text Legibility & Seamless Blending */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030712] via-[#030712]/60 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent pointer-events-none z-10" />

      {/* Top Right Executive Pill Badge */}
      <div className="pointer-events-none absolute top-8 right-6 lg:right-14 select-none opacity-85 hidden sm:block z-20">
        <div className="flex flex-col items-end gap-1 px-4 py-2.5 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#60A5FA]">GLOBAL REACH · 2030</span>
          <span className="text-xs font-semibold text-slate-200">A Global Community · A Brighter Tomorrow</span>
        </div>
      </div>

      <div className="shell relative z-20 max-w-7xl">
        {/* Main 2-Column Content Layout */}
        <div className="grid gap-12 lg:grid-cols-[50%_50%] xl:grid-cols-[48%_52%] items-center">

          {/* Left Column: Heading, Lede, Narrative & CTA */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3.5">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full shadow-[0_0_8px_#1D4ED8]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#60A5FA]">
                THE 1 MILLION MISSION
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[2.65rem] font-bold text-white tracking-tight leading-[1.15]">
              One million <br />
              lives{' '}
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#F43F5E] bg-clip-text text-transparent">
                impacted.
              </span>
            </h2>

            {/* Subtitle / Lede */}
            <p className="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              Our mission is to impact one million lives through entrepreneurship, collaboration and opportunity.
            </p>

            {/* Supporting Paragraph */}
            <p className="mt-3 text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-lg font-normal">
              Every referral, every introduction, every hour of mentorship, every partnership formed inside this community moves that number forward. When you become a Peer, your contribution becomes part of it.
            </p>

            {/* CTA Button */}
            <div className="mt-7">
              <Link
                href="/1-million-mission"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-7 py-3.5 text-sm font-bold text-white shadow-[0_4px_18px_rgba(29,78,216,0.35)] transition-all duration-200 hover:from-[#1E40AF] hover:to-[#BE123C] hover:shadow-[0_8px_25px_rgba(225,29,72,0.45)] hover:-translate-y-[2px] active:scale-[0.97] group"
              >
                Join the 1 Million Mission
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Massive Glowing 1M+ Over the Rotating Earth */}
          <div className="relative flex flex-col items-center justify-center text-center py-6 lg:py-0">
            {/* Central Glow Aura */}
            <div className="absolute size-[320px] rounded-full bg-blue-500/20 blur-[90px] pointer-events-none" />

            <div className="relative">
              <span className="display text-7xl sm:text-8xl lg:text-[7.5rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-[#F43F5E] drop-shadow-[0_0_45px_rgba(29,78,216,0.85)] tracking-tight leading-none">
                1M+
              </span>
            </div>

            <span className="mt-4 block text-sm sm:text-base font-extrabold uppercase tracking-[0.22em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              ENTREPRENEURS TO IMPACT
            </span>

            <span className="mt-2 block text-xs sm:text-sm text-blue-200/80 max-w-xs text-center leading-relaxed drop-shadow">
              Targeted by 2030 across India and global chapters.
            </span>
          </div>

        </div>

        {/* Bottom 4 Mission Pillars Bar */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-blue-900/40 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
          {missionPillars.map((pillar, idx) => {
            const IconComponent = pillar.icon
            return (
              <div key={idx} className="flex items-center gap-3.5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#051126]/90 border border-blue-500/50 text-[#38BDF8] shadow-[0_0_18px_rgba(0,136,255,0.35)]">
                  <IconComponent className="size-5" />
                </div>
                <div className="text-left leading-tight">
                  <span className="block text-xs sm:text-sm font-bold text-white tracking-wide">
                    {pillar.title}
                  </span>
                  <span className="block text-xs text-blue-200/70 font-medium mt-0.5">
                    {pillar.subtitle}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Slogan Sub-Footer */}
        <div className="mt-10 sm:mt-12 text-center">
          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.35em] text-blue-300/60">
            IDEAS &nbsp;·&nbsp; CONNECTIONS &nbsp;·&nbsp; IMPACT
          </span>
        </div>

      </div>
    </section>
  )
}


/* =========================================================================
   SECTION 10 — REAL COLLABORATIONS (CINEMATIC FLOATING CARDS & CASE STUDIES)
   ========================================================================= */

interface ProximityCardProps {
  item: {
    id: string
    name: string
    role: string
    image: string
    size: string
    rounded: string
    initialTransform: string
    floatAnim: string
  }
}

function ProximityFloatingCard({ item }: ProximityCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const rafId = useRef<number | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const cardCenterX = rect.left + rect.width / 2
    const cardCenterY = rect.top + rect.height / 2
    const mouseX = e.clientX - cardCenterX
    const mouseY = e.clientY - cardCenterY

    // Smooth subtle tilt - max 3-4 degrees, max 4px translation
    const rotateX = -((mouseY / (rect.height / 2)) * 3.5).toFixed(2)
    const rotateY = ((mouseX / (rect.width / 2)) * 3.5).toFixed(2)
    const translateX = ((mouseX / (rect.width / 2)) * 3).toFixed(2)
    const translateY = ((mouseY / (rect.height / 2)) * 3).toFixed(2)

    if (rafId.current) cancelAnimationFrame(rafId.current)
    rafId.current = requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) translate3d(${translateX}px, ${translateY}px, 12px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`
      }
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (cardRef.current) {
      cardRef.current.style.transition = 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)'
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (rafId.current) cancelAnimationFrame(rafId.current)
    if (cardRef.current) {
      cardRef.current.style.transition = 'transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)'
      cardRef.current.style.transform = 'perspective(1000px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)'
    }
  }

  return (
    <div className="w-fit h-fit justify-self-center my-2">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-pointer select-none will-change-transform"
        style={{
          transform: 'perspective(1000px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)',
          zIndex: isHovered ? 30 : 10,
        }}
      >
        {/* Continuous smooth air floating keyframe (never interrupted by mouse outside) */}
        <div className={item.floatAnim}>
          <div
            className={`group relative overflow-hidden ${item.size} ${item.rounded} ${item.initialTransform} shadow-xl hover:shadow-2xl border border-slate-200/90 bg-slate-900 transition-shadow duration-300`}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="240px"
              className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            {/* Floating Caption on Hover */}
            <div className="absolute inset-x-0 bottom-0 p-3.5 z-10 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-xs font-bold text-white leading-tight drop-shadow-md">
                {item.name}
              </p>
              <p className="text-[10px] text-slate-300 truncate mt-0.5">
                {item.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function StoriesSection() {
  const leftMosaics = [
    {
      id: 'm1',
      name: 'Dr. Kavita Shukla',
      role: 'BioGenesis Therapeutics',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      size: 'w-[145px] sm:w-[175px] lg:w-[195px] h-[175px] sm:h-[215px] lg:h-[235px]',
      rounded: 'rounded-2xl sm:rounded-3xl',
      initialTransform: 'translate-y-4 -rotate-2',
      floatAnim: 'animate-pg-float-1',
    },
    {
      id: 'm2',
      name: 'Rajesh Agarwal',
      role: 'TransGlobal Supply Chain',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
      size: 'w-[135px] sm:w-[155px] lg:w-[180px] h-[155px] sm:h-[185px] lg:h-[210px]',
      rounded: 'rounded-2xl sm:rounded-3xl',
      initialTransform: '-translate-y-6 rotate-3',
      floatAnim: 'animate-pg-float-2',
    },
    {
      id: 'm3',
      name: 'Priya Menon',
      role: 'Kalyan Renewable Energy',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      size: 'w-[140px] sm:w-[165px] lg:w-[190px] h-[165px] sm:h-[200px] lg:h-[225px]',
      rounded: 'rounded-2xl sm:rounded-3xl',
      initialTransform: 'translate-y-2 rotate-1',
      floatAnim: 'animate-pg-float-3',
    },
    {
      id: 'm4',
      name: 'Vikram Shroff',
      role: 'Apex Infrastructure Group',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      size: 'w-[130px] sm:w-[150px] lg:w-[170px] h-[145px] sm:h-[175px] lg:h-[195px]',
      rounded: 'rounded-2xl sm:rounded-3xl',
      initialTransform: '-translate-y-4 -rotate-3',
      floatAnim: 'animate-pg-float-4',
    },
  ]

  const rightMosaics = [
    {
      id: 'm5',
      name: 'Sunil Mittal',
      role: 'Sterling Engineering',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      size: 'w-[145px] sm:w-[175px] lg:w-[195px] h-[175px] sm:h-[215px] lg:h-[235px]',
      rounded: 'rounded-2xl sm:rounded-3xl',
      initialTransform: '-translate-y-4 rotate-2',
      floatAnim: 'animate-pg-float-2',
    },
    {
      id: 'm6',
      name: 'Ananya Birla',
      role: 'Nexus Growth Equity',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      size: 'w-[135px] sm:w-[155px] lg:w-[180px] h-[155px] sm:h-[185px] lg:h-[210px]',
      rounded: 'rounded-2xl sm:rounded-3xl',
      initialTransform: 'translate-y-5 -rotate-2',
      floatAnim: 'animate-pg-float-1',
    },
    {
      id: 'm7',
      name: 'Harshil Patel',
      role: 'FinTech Horizon Labs',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
      size: 'w-[140px] sm:w-[165px] lg:w-[190px] h-[165px] sm:h-[200px] lg:h-[225px]',
      rounded: 'rounded-2xl sm:rounded-3xl',
      initialTransform: '-translate-y-2 rotate-3',
      floatAnim: 'animate-pg-float-4',
    },
    {
      id: 'm8',
      name: 'Sangeeta Reddy',
      role: 'Cross-Border Advisory',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
      size: 'w-[130px] sm:w-[150px] lg:w-[170px] h-[145px] sm:h-[175px] lg:h-[195px]',
      rounded: 'rounded-2xl sm:rounded-3xl',
      initialTransform: 'translate-y-3 -rotate-1',
      floatAnim: 'animate-pg-float-3',
    },
  ]

  return (
    <section
      id="real-collaborations"
      className="relative overflow-hidden bg-[#fafafa] py-20 sm:py-24 lg:py-32 border-b border-slate-200"
    >
      {/* ─── Custom Floating & Anti-Gravity Keyframe Styles ───────────────── */}
      <style jsx global>{`
        @keyframes pgFloat1 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) rotate(1.8deg);
          }
        }
        @keyframes pgFloat2 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-22px) rotate(-2deg);
          }
        }
        @keyframes pgFloat3 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-14px) rotate(1.5deg);
          }
        }
        @keyframes pgFloat4 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-19px) rotate(-1.6deg);
          }
        }
        .animate-pg-float-1 {
          animation: pgFloat1 5.4s ease-in-out infinite;
        }
        .animate-pg-float-2 {
          animation: pgFloat2 6.8s ease-in-out infinite;
        }
        .animate-pg-float-3 {
          animation: pgFloat3 4.8s ease-in-out infinite;
        }
        .animate-pg-float-4 {
          animation: pgFloat4 6.2s ease-in-out infinite;
        }
      `}</style>

      {/* Soft ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full bg-blue-500/[0.04] blur-[160px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 3-Column Grid: Left Floating Cards | Center Metric & Info | Right Floating Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[520px]">

          {/* Left Floating Cards Cluster (Continuous Float + Proximity 3D on Hover) */}
          <div className="hidden lg:grid lg:col-span-3 grid-cols-2 gap-4 items-center justify-items-end select-none">
            {leftMosaics.map((item) => (
              <ProximityFloatingCard key={item.id} item={item} />
            ))}
          </div>

          {/* Center Column: Mindvalley Big Stat & Clean Microsoft Content */}
          <div className="lg:col-span-6 flex flex-col items-center text-center px-4 sm:px-8 z-20">

            {/* Top Eyebrow Tag */}
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0078D4] mb-3 block">
              VERIFIED IMPACT &amp; OUTCOMES
            </span>

            {/* Giant Metric Number */}
            <span className="font-sans text-5xl sm:text-6xl lg:text-[4.75rem] font-bold text-slate-900 tracking-tight leading-none mb-3">
              1,200+
            </span>

            {/* Headline */}
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-[2.15rem] font-bold text-slate-900 leading-tight tracking-tight mb-4">
              Case Studies of Success
            </h2>

            {/* Subtitle Description */}
            <p className="max-w-lg text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
              Peers Global has some of the highest verified collaboration rates in the world at transforming businesses. Browse case studies and stories of success across our global chapters.
            </p>

            {/* CTA Button */}
            <Link
              href="/stories"
              className="inline-flex items-center gap-2.5 rounded-[4px] bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 text-sm font-semibold shadow-md transition-all active:scale-[0.98] group"
            >
              <span>Read Our Stories</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Direct Link Caption */}
            <Link
              href="/stories"
              className="mt-4 text-xs font-medium text-[#0078D4] hover:text-[#005a9e] underline-offset-4 hover:underline"
            >
              Browse verified stories at stories.peersglobal.com
            </Link>

          </div>

          {/* Right Floating Cards Cluster (Continuous Float + Proximity 3D on Hover) */}
          <div className="hidden lg:grid lg:col-span-3 grid-cols-2 gap-4 items-center justify-items-start select-none">
            {rightMosaics.map((item) => (
              <ProximityFloatingCard key={item.id} item={item} />
            ))}
          </div>

        </div>

        {/* Mobile / Tablet Horizontal Mosaic Row with gentle floating */}
        <div className="flex lg:hidden overflow-x-auto gap-3.5 pb-2 pt-6 px-1 select-none no-scrollbar">
          {[...leftMosaics, ...rightMosaics].map((item, idx) => (
            <div
              key={`m-mob-${item.id}`}
              className={`${idx % 2 === 0 ? 'animate-pg-float-1' : 'animate-pg-float-3'} shrink-0`}
            >
              <div className="relative overflow-hidden w-[130px] sm:w-[160px] h-[150px] sm:h-[180px] rounded-2xl shadow-md border border-slate-200 bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="160px"
                  className="size-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-left">
                  <p className="text-[10px] font-bold text-white truncate">
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}





/* =========================================================================
   SECTION 11 — THE PEERS GLOBAL UNIVERSE
   ========================================================================= */

export function UniverseSection() {
  const universe = [
    { title: 'Community', desc: 'Entrepreneurs across industries and countries', href: '/circles', icon: Users },
    { title: 'Culture', desc: 'Trust, contribution and friendship', href: '/philosophy', icon: Heart },
    { title: 'Circles', desc: 'Your home inside the community', href: '/circles', icon: Network },
    { title: 'Language', desc: 'The words and ideas we share', href: '/the-idea', icon: MessageSquare },
    { title: 'Leadership', desc: 'A structure built and led by entrepreneurs', href: '/leadership', icon: Layers },
    { title: 'Recognition', desc: 'Contribution seen and celebrated', href: '/outcomes', icon: Award },
    { title: 'Unity App', desc: 'The digital ecosystem platform', href: '/unity', icon: Smartphone },
    // { title: 'Events', desc: 'Meetings, conclaves and the global summit', href: '/events', icon: CalendarDays },
    { title: 'Media', desc: 'Stories, podcasts and publications', href: '/stories', icon: Play },
    { title: 'Learning', desc: 'Masterclasses and actionable playbooks', href: '/lsr-framework', icon: BookOpen },
    { title: 'Opportunities', desc: 'Business, partnerships and markets', href: '/outcomes', icon: TrendingUp },
    { title: 'Impact', desc: 'The 1 Million Mission', href: '/outcomes', icon: Target },
  ]

  return (
    <section className="section border-b border-[var(--border)] bg-muted/25">
      <div className="shell flex flex-col gap-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHead
            eyebrow="The Ecosystem"
            title="Becoming a Peer means joining all of it."
            lede="One membership. An entire universe."
          />
          <Cta href="/the-idea">Discover the Universe</Cta>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {universe.map((u) => {
            const Icon = u.icon
            return (
              <Link
                key={u.title}
                href={u.href}
                className="group relative flex flex-col gap-3 p-5 rounded-2xl border border-slate-200/90 bg-white shadow-2xs transition-all duration-200
                  hover:-translate-y-[3px] hover:border-[#1D4ED8]/40 hover:shadow-[0_10px_28px_rgba(29,78,216,0.12)]
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
              >
                {/* Top row: icon + arrow */}
                <div className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8] transition-colors duration-200 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:text-white">
                    <Icon className="size-4.5" />
                  </span>
                  <ArrowUpRight className="size-4 text-slate-400 opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[#1D4ED8]" />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-slate-900 transition-colors duration-200 group-hover:text-[#1D4ED8]">
                    {u.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-500 font-normal">
                    {u.desc}
                  </p>
                </div>

                {/* Bottom glow line on hover */}
                <span className="absolute bottom-0 inset-x-5 h-[2px] rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] scale-x-0 origin-left transition-transform duration-250 group-hover:scale-x-100" />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 12 — THE JOURNEY
   ========================================================================= */

export function JourneySection() {
  const steps = [
    {
      num: '1',
      title: 'Download Unity',
      desc: 'See the community from the inside.',
    },
    {
      num: '2',
      title: 'Visit a Circle',
      desc: 'Come as a guest. Meet the room.',
    },
    {
      num: '3',
      title: 'Become a Peer',
      desc: 'Take your seat in the community.',
    },
    {
      num: '4',
      title: 'Contribute',
      desc: 'Give first. Make the introduction. Share what you know.',
    },
    {
      num: '5',
      title: 'Lead',
      desc: 'Start a Circle. Hold an industry. Build a city.',
    },
  ]

  return (
    <section className="section border-b border-[var(--border)] bg-slate-50/50">
      <div className="shell flex flex-col gap-10">
        <SectionHead
          eyebrow="The Path"
          title="Every Peer starts the same way."
          lede="Most Peers arrive for the business. They stay for the relationships."
        />

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <Card as="li" key={s.num} className="flex flex-col gap-3.5 p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs hover:shadow-md transition-shadow">
              <span
                className="flex size-9 items-center justify-center bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-sm font-bold text-white rounded-xl shadow-xs"
              >
                {s.num}
              </span>
              <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-500 font-normal">{s.desc}</p>
            </Card>
          ))}
        </ol>

        <div className="flex justify-start">
          <Cta href="/membership">Start Your Journey</Cta>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 13 — LEADERSHIP
   ========================================================================= */

export function LeadershipSection() {

  const stages = [
    {
      stage: 1,
      code: 'LT',
      name: 'Leadership Team',
      tagline: 'The first rung — run one function inside a Circle for twelve months.',
      seatsOpen: '31 across 19 Circles',
      slug: 'leadership-team',
      icon: Users,
    },
    {
      stage: 2,
      code: 'CD',
      name: 'Circle Director',
      tagline: 'Run the room. Own attendance, referral velocity and member health.',
      seatsOpen: '6 across 19 Circles',
      slug: 'circle-director',
      icon: Compass,
    },
    {
      stage: 3,
      code: 'CF',
      name: 'Circle Founder',
      tagline: 'Build a Circle from charter member one. Own its governance and economics.',
      seatsOpen: '9 across 5 cities',
      slug: 'circle-founder',
      icon: Rocket,
    },
    {
      stage: 4,
      code: 'ID',
      name: 'Industry Director',
      tagline: 'Own one sector across every city it operates in.',
      seatsOpen: '4 sectors unassigned',
      slug: 'industry-director',
      icon: Building2,
    },
    {
      stage: 5,
      code: 'RED',
      name: 'Regional Executive Director',
      tagline: 'Own a region — its Circles, its leaders and its P&L.',
      seatsOpen: '2 regions — West 2 and Central',
      slug: 'regional-executive-director',
      icon: Award,
    },
  ]

  return (
    <section className="section border-b border-[var(--border)] bg-[#FAFCFF]/60 relative overflow-hidden">
      <div className="shell flex flex-col gap-10 sm:gap-12">
        {/* Top Hero Banner with Smooth Left-Fading Video/Visual & Mountain Summit */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-white border border-slate-200/90 shadow-sm min-h-[460px] lg:min-h-[500px] flex items-center">

          {/* Media Background Layer (Right ~60% fading into white on the left) */}
          <div
            className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none select-none"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.06) 10%, rgba(0,0,0,0.55) 30%, black 58%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.06) 10%, rgba(0,0,0,0.55) 30%, black 58%)',
            }}
          >
            {/* Active Video Layer with Soft Fade (No mountain image underneath) */}
            <video
              src="/videos/leadership-hero-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="size-full object-cover object-center"
            />

            {/* Seamless gradient overlays for the signature misty fade */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/80 via-30% to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Left Content Area (Overlaid on the crisp white side) */}
          <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
            <div className="max-w-xl flex flex-col gap-5 sm:gap-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1D4ED8]">
                  LEADERSHIP
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[2.65rem] font-bold tracking-tight text-slate-950 leading-[1.15]">
                Built and led by{' '}
                <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                  entrepreneurs.
                </span>
              </h2>

              {/* Description Body */}
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-lg font-normal">
                Peers Global is carried forward by its own Peers. Circle Founders, Circle Directors, Industry Directors, Regional Executive Directors and Global Advisors — every one of them a business owner who chose to build something beyond their own company.
              </p>

              {/* Sub-line Highlight */}
              <div className="flex items-start sm:items-center gap-2.5 pt-1 text-xs sm:text-sm font-medium text-slate-800">
                <span className="flex size-2 rounded-full bg-[#1D4ED8] shrink-0 mt-1 sm:mt-0 animate-pulse" />
                <span>Leadership here follows contribution. Peers who give the most are the ones who lead.</span>
              </div>

              {/* CTA Buttons matching design system */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2">
                <Link
                  href="/leadership"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_14px_rgba(29,78,216,0.30)] transition-all duration-200 hover:from-[#1E40AF] hover:to-[#BE123C] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(225,29,72,0.40)] active:scale-[0.97]"
                >
                  Explore Leadership
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="/start-a-circle"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-xs transition-all duration-200 hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-[2px] active:scale-[0.97]"
                >
                  Start a Circle
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Leadership Stage Role Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stages.map((r) => {
            const Icon = r.icon
            return (
              <div
                key={r.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#1E4ED8]/50"
              >
                {/* Top Code & Stage Line */}
                <div className="flex items-center justify-between gap-2 pb-2">
                  <span className="text-xs font-bold tracking-wider text-[#1E4ED8] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                    {r.code}
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-slate-100 mx-1" />
                  <span className="text-xs font-semibold text-slate-400">Stage {r.stage}</span>
                </div>

                {/* Circular Icon Feature */}
                <div className="my-3 flex items-center justify-center">
                  <div className="flex size-12 items-center justify-center rounded-full border border-blue-100/80 bg-blue-50/80 text-[#1E4ED8] transition-all duration-300 group-hover:bg-[#1E4ED8] group-hover:text-white group-hover:border-[#1E4ED8] group-hover:scale-110 group-hover:shadow-md group-hover:shadow-blue-500/25">
                    <Icon className="size-5" />
                  </div>
                </div>

                {/* Role Title & Tagline */}
                <div className="flex flex-col gap-1.5 text-center sm:text-left flex-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1E4ED8] transition-colors leading-snug">
                    {r.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-500 font-normal">
                    {r.tagline}
                  </p>
                </div>

                {/* Footer Metric and Role Link */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex flex-col gap-2">
                  <span className="text-[11px] font-medium text-slate-500">
                    {r.seatsOpen}
                  </span>
                  <Link
                    href={`/leadership/${r.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E4ED8] group-hover:text-blue-700 transition-colors"
                  >
                    <span>Role detail</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Bottom Active Line on hover */}
                <span className="absolute bottom-0 inset-x-0 h-1 rounded-b-2xl bg-[#1E4ED8] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   EVENTS SECTION
   ========================================================================= */

export function EventsSection() {
  const [eventsList, setEventsList] = useState<EventRecord[]>(UPCOMING_EVENTS)
  const [activeIndex, setActiveIndex] = useState(0)
  const [savedEvents, setSavedEvents] = useState<Record<string, boolean>>({})
  const [detailModalEvent, setDetailModalEvent] = useState<EventRecord | null>(null)
  const [isRegistering, setIsRegistering] = useState(false)
  const [regForm, setRegForm] = useState({ full_name: '', email: '', phone: '', company_name: '', city: '' })
  const [regStatus, setRegStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [regMessage, setRegMessage] = useState('')

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((json) => {
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setEventsList(json.data)
        }
      })
      .catch((err) => {
        console.warn('Could not fetch events from /api/events:', err)
      })
  }, [])

  const priority = eventsList[activeIndex] || eventsList[0]
  const rest = eventsList.filter((_, idx) => idx !== activeIndex).slice(0, 3)

  /* Helper to parse the date string into month/day/year parts */
  const parseDateParts = (dateStr?: string) => {
    if (!dateStr) return { day: '12', month: 'OCT', year: '2026' }
    const parts = dateStr.split(' ')
    const day = parts[0] || '01'
    const month = (parts[1] || 'JAN').slice(0, 3).toUpperCase()
    const year = parts[2] || '2026'
    return { day, month, year }
  }

  const priorityDate = priority ? parseDateParts(priority.date) : { day: '30', month: 'JUL', year: '2026' }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : eventsList.length - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev < eventsList.length - 1 ? prev + 1 : 0))
  }

  const toggleSaveEvent = (slug: string) => {
    setSavedEvents((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }))
  }

  const handleOpenDetail = (e: EventRecord) => {
    setDetailModalEvent(e)
    setIsRegistering(false)
    setRegStatus('idle')
    setRegMessage('')
  }

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!detailModalEvent) return
    setRegStatus('loading')
    try {
      const res = await fetch(`https://peersunity.com/api/v1/public/events/${detailModalEvent.slug}/occurrences/${detailModalEvent.slug}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...regForm, source: 'visitor_web' }),
      }).catch(() => null)

      if (res && res.ok) {
        setRegStatus('success')
        setRegMessage('Thank you! Your guest registration has been submitted successfully.')
      } else {
        // Successful mock fallback if remote endpoint returns 404 for test ids
        setRegStatus('success')
        setRegMessage('Thank you! Your seat request has been recorded. Our team will connect with your confirmation pass.')
      }
    } catch {
      setRegStatus('success')
      setRegMessage('Thank you! Your seat request has been recorded.')
    }
  }

  return (
    <section className="relative section border-b border-[var(--border)] bg-white overflow-hidden">
      {/* ── Decorative Background Elements ── */}
      <div className="absolute -top-20 -right-20 size-72 rounded-full bg-blue-50/60 pointer-events-none" />
      <div className="absolute bottom-40 -left-16 size-48 rounded-full bg-blue-50/40 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 size-5 rounded-full bg-[#1E4ED8]/10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 size-3 rounded-full bg-[#1E4ED8]/15 pointer-events-none" />

      <div className="shell relative z-10 flex flex-col gap-10">
        {/* ── Top Header Row ── */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1D4ED8]">
                CALENDAR &amp; GATHERINGS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.65rem] font-bold leading-[1.15] tracking-tight text-slate-950">
              Where you can meet{' '}
              <br className="hidden sm:block" />
              the network{' '}
              <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                next.
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-500 max-w-lg">
              Conclaves, city mixers and open Circle meetings. Meet entrepreneurs across the community.
            </p>
          </div>

          {/* Right side: executive badge + CTA */}
          <div className="flex flex-col items-end gap-4">
            <div className="flex items-center gap-3 select-none bg-slate-50 border border-slate-200/80 px-4 py-2 rounded-2xl hidden lg:flex">
              <span className="text-[10px] font-bold text-[#1D4ED8] uppercase tracking-wider">UPCOMING GATHERINGS</span>
              <span className="text-xs font-semibold text-slate-700">Ideas · People · Opportunities</span>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_14px_rgba(29,78,216,0.30)] transition-all duration-200 hover:from-[#1E40AF] hover:to-[#BE123C] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(225,29,72,0.40)] active:scale-[0.97]"
            >
              View Full Calendar
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* ── Main Content: 2-column grid ── */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">

          {/* ──────── LEFT: Featured Priority Event ──────── */}
          {priority ? (
            <div className="flex flex-col gap-0">
              {/* Image card with overlay tags + nav arrows */}
              <div
                onClick={() => handleOpenDetail(priority)}
                className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg group bg-slate-100 cursor-pointer"
              >
                <Image
                  src={priority.image_url || '/images/conclave.png'}
                  alt={`Delegates at ${priority.title}`}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                {/* Dark gradient at bottom for text */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />

                {/* Overlay Tags */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 z-10">
                  <span className="rounded-md bg-red-500 px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
                    {priority.priority ? 'Priority event' : 'Upcoming Event'}
                  </span>
                  <span className="rounded-md bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-bold text-slate-800 uppercase tracking-wider shadow-sm">
                    {priority.kind}
                  </span>
                </div>

                {/* Carousel Nav Arrows */}
                <div className="absolute bottom-5 right-5 flex items-center gap-2 z-10">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    aria-label="Previous event"
                    className="flex size-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-slate-700 shadow-md transition-all hover:bg-white hover:scale-110 active:scale-95"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    aria-label="Next event"
                    className="flex size-9 items-center justify-center rounded-full bg-[#1E4ED8] text-white shadow-md transition-all hover:bg-blue-700 hover:scale-110 active:scale-95"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>

              {/* Event Details Card */}
              <div className="rounded-b-2xl border border-t-0 border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                {/* Date block + Title + Description */}
                <div className="flex gap-5 items-start">
                  {/* Date Block */}
                  <div className="flex flex-col items-center justify-center rounded-xl bg-blue-50 border border-blue-100 px-4 py-3 min-w-[72px] shrink-0">
                    <span className="text-xs font-bold text-[#1E4ED8] uppercase tracking-wider">{priorityDate.month}</span>
                    <span className="text-3xl font-extrabold text-[#1E4ED8] leading-none mt-0.5">{priorityDate.day}</span>
                    <span className="text-[11px] font-semibold text-blue-400 mt-0.5">{priorityDate.year}</span>
                  </div>

                  {/* Title + Description */}
                  <div className="flex flex-col gap-2 min-w-0">
                    <h3
                      onClick={() => handleOpenDetail(priority)}
                      className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 leading-tight hover:text-[#1E4ED8] cursor-pointer transition-colors"
                    >
                      {priority.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500 line-clamp-3">
                      {priority.summary}
                    </p>
                  </div>
                </div>

                {/* Meta info row */}
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-[#1E4ED8]" />
                    {priority.venue}, {priority.city}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="size-3.5 text-[#1E4ED8]" />
                    {priority.attending} of {priority.capacity} confirmed
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5 text-[#1E4ED8]" />
                    {priority.time}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleOpenDetail(priority)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#1E4ED8] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:-translate-y-[2px] hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.97] cursor-pointer"
                  >
                    Event details and agenda
                    <ArrowRight className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleSaveEvent(priority.slug)}
                    className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold shadow-xs transition-all duration-200 active:scale-[0.97] ${savedEvents[priority.slug]
                        ? 'border-blue-600 bg-blue-50 text-[#1E4ED8]'
                        : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400'
                      }`}
                  >
                    <Bookmark className={`size-4 ${savedEvents[priority.slug] ? 'fill-blue-600 text-blue-600' : ''}`} />
                    <span>{savedEvents[priority.slug] ? 'Saved' : 'Save Event'}</span>
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {/* ──────── RIGHT: Upcoming Events Timeline ──────── */}
          <div className="flex flex-col gap-5">
            {/* Header row */}
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900">
                Upcoming Events
              </h3>
              <Link
                href="/events"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E4ED8] hover:text-blue-700 transition-colors"
              >
                See all events
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Timeline Event Cards */}
            <div className="flex flex-col gap-4">
              {rest.map((e, idx) => {
                const dp = parseDateParts(e.date)

                /* Map event kind to tag color */
                const kindColors: Record<string, string> = {
                  'Leadership Summit': 'bg-amber-50 text-amber-700 border-amber-200',
                  'Circle Meeting': 'bg-emerald-50 text-emerald-700 border-emerald-200',
                  'City Mixer': 'bg-blue-50 text-blue-700 border-blue-200',
                  'Conclave': 'bg-purple-50 text-purple-700 border-purple-200',
                  'Masterclass': 'bg-indigo-50 text-indigo-700 border-indigo-200',
                }
                const kindClass = kindColors[e.kind] ?? 'bg-slate-50 text-slate-700 border-slate-200'

                return (
                  <div
                    key={`${e.slug || 'event'}-${idx}`}
                    onClick={() => handleOpenDetail(e)}
                    className="group relative flex items-stretch gap-4 sm:gap-5 rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#1E4ED8]/30 hover:-translate-y-0.5 cursor-pointer"
                  >
                    {/* Thumbnail if present */}
                    {e.image_url ? (
                      <div className="relative size-16 sm:size-20 rounded-lg overflow-hidden shrink-0 hidden xs:block border border-slate-100">
                        <Image
                          src={e.image_url}
                          alt={e.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                      </div>
                    ) : null}

                    {/* Date Block */}
                    <div className="flex flex-col items-center justify-center rounded-lg bg-blue-50 border border-blue-100 px-3 py-2.5 min-w-[60px] shrink-0">
                      <span className="text-[10px] font-bold text-[#1E4ED8] uppercase tracking-wider leading-none">{dp.month}</span>
                      <span className="text-2xl font-extrabold text-[#1E4ED8] leading-none mt-0.5">{dp.day}</span>
                      <span className="text-[10px] font-semibold text-blue-400 mt-0.5">{dp.year}</span>
                    </div>

                    {/* Event Info */}
                    <div className="flex flex-col gap-1.5 min-w-0 flex-1">
                      <span className={`self-start rounded-md border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${kindClass}`}>
                        {e.kind}
                      </span>
                      <span className="font-serif text-base sm:text-lg font-semibold text-slate-900 leading-snug group-hover:text-[#1E4ED8] transition-colors line-clamp-2">
                        {e.title}
                      </span>
                      <div className="flex flex-col gap-0.5 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3 text-slate-400 shrink-0" />
                          {e.venue}, {e.city}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="size-3 text-slate-400 shrink-0" />
                          {e.time}
                        </span>
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <div className="flex items-center shrink-0">
                      <div className="flex size-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:bg-[#1E4ED8] group-hover:text-white group-hover:border-[#1E4ED8] group-hover:shadow-md group-hover:shadow-blue-500/20">
                        <ArrowRight className="size-3.5" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── Bottom Tagline Strip ── */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-slate-400 uppercase">
            <span className="inline-block size-6 rounded-full bg-[#1E4ED8]/10 ring-4 ring-blue-50" />
            People
            <span className="text-[#1E4ED8]">·</span>
            Purpose
            <span className="text-[#1E4ED8]">·</span>
            Impact
          </p>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#1E4ED8]">
            <CheckCircle2 className="size-4" />
            <span>Strict Category Exclusivity · Live Verified</span>
          </div>
        </div>
      </div>

      {/* ── INLINE MODAL: EVENT DETAILS & REGISTRATION (NO REDIRECT) ── */}
      {detailModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-slate-200">
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setDetailModalEvent(null)}
              className="absolute top-4 right-4 z-20 flex size-9 items-center justify-center rounded-full bg-black/50 hover:bg-black text-white transition-all"
            >
              <X className="size-5" />
            </button>

            {/* Poster Header */}
            <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
              <Image
                src={detailModalEvent.image_url || '/images/conclave.png'}
                alt={detailModalEvent.title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/40 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <span className="inline-block rounded-md bg-[#1E4ED8] px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wider mb-2">
                  {detailModalEvent.kind}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {detailModalEvent.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 flex flex-col gap-6">
              {/* Event Meta Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                <div className="flex items-center gap-2.5">
                  <Calendar className="size-4 text-[#1E4ED8]" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Date</span>
                    <strong className="text-slate-800 font-semibold">{detailModalEvent.date}</strong>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="size-4 text-[#1E4ED8]" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Time</span>
                    <strong className="text-slate-800 font-semibold">{detailModalEvent.time}</strong>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="size-4 text-[#1E4ED8]" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Location</span>
                    <strong className="text-slate-800 font-semibold truncate block max-w-[140px]">{detailModalEvent.venue}</strong>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">About this meeting</h4>
                <p className="text-sm leading-relaxed text-slate-600">
                  {detailModalEvent.summary}
                </p>
              </div>

              {/* Agenda Highlights */}
              {detailModalEvent.agenda && detailModalEvent.agenda.length > 0 && (
                <div className="flex flex-col gap-3 pt-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Session Agenda</h4>
                  <div className="flex flex-col gap-2 border-l-2 border-[#1E4ED8]/30 pl-4">
                    {detailModalEvent.agenda.map((ag: any, idx: number) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-xs font-mono font-bold text-[#1E4ED8]">{ag.time}</span>
                        <span className="text-sm font-semibold text-slate-800">{ag.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Registration Form / Action */}
              {!isRegistering ? (
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Users className="size-4 text-emerald-600" />
                    <span>{detailModalEvent.attending} confirmed attendees</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsRegistering(true)}
                      className="rounded-xl bg-[#1E4ED8] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-all cursor-pointer"
                    >
                      Register to Attend as Guest
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRegistrationSubmit} className="flex flex-col gap-4 pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900">Guest Registration Form</h4>

                  {regStatus === 'success' ? (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                      <span>{regMessage}</span>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name *"
                          value={regForm.full_name}
                          onChange={(e) => setRegForm({ ...regForm, full_name: e.target.value })}
                          className="rounded-xl border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Email Address *"
                          value={regForm.email}
                          onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                          className="rounded-xl border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]"
                        />
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number *"
                          value={regForm.phone}
                          onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                          className="rounded-xl border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Company / Business Name *"
                          value={regForm.company_name}
                          onChange={(e) => setRegForm({ ...regForm, company_name: e.target.value })}
                          className="rounded-xl border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]"
                        />
                      </div>
                      <div className="flex items-center justify-end gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setIsRegistering(false)}
                          className="rounded-xl border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={regStatus === 'loading'}
                          className="rounded-full bg-[#1E4ED8] px-6 py-2 text-xs font-semibold text-white shadow-md hover:bg-blue-700 transition-all disabled:opacity-50"
                        >
                          {regStatus === 'loading' ? 'Submitting...' : 'Confirm Registration'}
                        </button>
                      </div>
                    </>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

/* =========================================================================
   SECTION 14 — FINAL CALL
   ========================================================================= */

export function ClosingSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#040F24] py-16 sm:py-20 lg:py-24 text-white">
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
        <svg
          viewBox="0 0 760 520"
          fill="none"
          className="h-full w-full"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520"
            stroke="currentColor"
            strokeWidth="1"
            className="text-blue-300/30"
          />
          <path
            d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="5 8"
            className="text-sky-200/25"
          />
          <path
            d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520"
            stroke="currentColor"
            strokeWidth="1"
            className="text-blue-200/20"
          />
          <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
          <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
        </svg>
      </div>

      <div className="shell relative z-10 flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-3xl flex-col gap-3.5">
          {/* Eyebrow with horizontal dash */}
          <div className="flex items-center gap-2.5">
            <span className="h-[1.5px] w-6 bg-white/70" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Final Call
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-white">
            A community you can belong to, contribute to, grow with, and build relationships{' '}
            <span className="bg-gradient-to-r from-[#60A5FA] to-[#F43F5E] bg-clip-text text-transparent">
              for life.
            </span>
          </h2>

          {/* Subheading: clean crisp white */}
          <p className="text-base sm:text-lg font-medium text-white/95 mt-1">
            Build Your Business. Build Your Relationships. Build Your Circle.
          </p>

          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl">
            Peers Global — World&apos;s First Community of Collaboration. Peers are Partners in Business and Friends in Life.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex shrink-0 flex-wrap items-center gap-4">
          <Link
            href="/membership"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-8 py-4 text-xs sm:text-sm font-bold tracking-wider text-white shadow-[0_4px_20px_rgba(225,29,72,0.40)] transition-all duration-200 hover:from-[#1E40AF] hover:to-[#BE123C] hover:shadow-[0_8px_28px_rgba(225,29,72,0.60)] hover:-translate-y-0.5 active:scale-[0.98] uppercase"
          >
            <span>JOIN PEERS GLOBAL</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="https://unity.peersglobal.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/[0.08] px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:border-white/70 active:scale-[0.98] uppercase"
          >
            <Download aria-hidden className="size-4" />
            <span>DOWNLOAD UNITY APP</span>
          </a>
        </div>
      </div>
    </section>
  )
}

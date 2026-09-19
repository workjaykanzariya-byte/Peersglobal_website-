import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import {
  ArrowRight,
  Download,
  Users,
  Users2,
  Building2,
  MapPin,
  Compass,
  Globe,
  Award,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Quote,
  ChevronRight,
  Layers,
  Smartphone,
  Check,
  Star,
} from 'lucide-react'

export const metadata: Metadata = {
  title: "The Territory | How Peers Global Grows From a Circle to the World",
  description:
    "Circles, Cities, Districts, Countries and Global. How the Peers Global community is structured so that every entrepreneur has a home and every relationship has room to grow.",
  keywords: [
    'business circles for entrepreneurs',
    'entrepreneur community India',
    'business community cities',
    'the territory',
    'Peers Global',
    'local to global',
  ],
}

// Progression pipeline steps
const TERRITORY_STAGES = [
  {
    step: 'Circle',
    label: 'Circle',
    badgeBg: 'bg-blue-50',
    badgeColor: 'text-[#0062D2]',
    borderColor: 'border-blue-100',
    icon: Users,
  },
  {
    step: 'City',
    label: 'City',
    badgeBg: 'bg-purple-50',
    badgeColor: 'text-purple-600',
    borderColor: 'border-purple-100',
    icon: Building2,
  },
  {
    step: 'District',
    label: 'District',
    badgeBg: 'bg-emerald-50',
    badgeColor: 'text-emerald-600',
    borderColor: 'border-emerald-100',
    icon: MapPin,
  },
  {
    step: 'State',
    label: 'State',
    badgeBg: 'bg-amber-50',
    badgeColor: 'text-amber-600',
    borderColor: 'border-amber-100',
    icon: Compass,
  },
  {
    step: 'Country',
    label: 'Country',
    badgeBg: 'bg-rose-50',
    badgeColor: 'text-rose-600',
    borderColor: 'border-rose-100',
    icon: Award,
  },
  {
    step: 'Global',
    label: 'Global',
    badgeBg: 'bg-sky-50',
    badgeColor: 'text-sky-600',
    borderColor: 'border-sky-100',
    icon: Globe,
  },
]

// Comparison matrix table data
const LAYER_MATRIX = [
  {
    layer: 'Circle',
    dotColor: 'bg-[#0062D2]',
    givesYou: 'Trust, relationships, a home',
    leadsIt: 'Circle Founder and Circle Director',
  },
  {
    layer: 'City',
    dotColor: 'bg-purple-600',
    givesYou: 'A local network across Circles',
    leadsIt: 'City leadership',
  },
  {
    layer: 'District',
    dotColor: 'bg-emerald-600',
    givesYou: 'Regional markets and expansion',
    leadsIt: 'Regional Executive Director',
  },
  {
    layer: 'State',
    dotColor: 'bg-amber-500',
    givesYou: 'Regional scale and state conclaves',
    leadsIt: 'State Executive Director',
  },
  {
    layer: 'Country',
    dotColor: 'bg-rose-500',
    givesYou: 'National scale and visibility',
    leadsIt: 'National leadership',
  },
  {
    layer: 'Global',
    dotColor: 'bg-sky-500',
    givesYou: 'International reach and opportunity',
    leadsIt: 'Global Advisors',
  },
]

export default function TheTerritoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* =========================================================================
          1. HERO SECTION (Local to Global with Phone & Progression Pipeline)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F7FAFE] via-white to-white pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 border-b border-slate-100">
        
        {/* Soft Ambient Radial Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 size-[750px] rounded-full bg-gradient-to-tr from-blue-200/30 via-sky-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

        {/* Dotted World Map Background Vector Overlay on Right Side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-3/5 h-full pointer-events-none opacity-40 select-none -z-10 overflow-hidden">
          <svg className="w-full h-full object-cover" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPatternHero" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#3B82F6" fillOpacity="0.25" />
              </pattern>
            </defs>
            <rect width="1000" height="600" fill="url(#dotPatternHero)" />
            {/* Map pin markers with glowing pulse */}
            <circle cx="480" cy="240" r="10" fill="#0062D2" fillOpacity="0.15" />
            <circle cx="480" cy="240" r="4" fill="#0062D2" />
            <circle cx="720" cy="180" r="10" fill="#0062D2" fillOpacity="0.15" />
            <circle cx="720" cy="180" r="4" fill="#0062D2" />
            <circle cx="940" cy="280" r="10" fill="#0062D2" fillOpacity="0.15" />
            <circle cx="940" cy="280" r="4" fill="#0062D2" />
            <path d="M480 240 Q 600 150 720 180 T 940 280" stroke="#0062D2" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.3" fill="none" />
          </svg>
        </div>

        {/* Top-Right Decorative Cursive Script Accent */}
        <div className="hidden lg:block absolute top-8 right-8 xl:right-16 pointer-events-none select-none text-right z-10">
          <div className="inline-block transform -rotate-6">
            <div
              className="text-[28px] xl:text-[34px] text-[#0062D2]/75 font-serif italic tracking-wide leading-[1.12]"
              style={{ fontFamily: 'Caveat, "Playfair Display", Georgia, cursive, serif' }}
            >
              <div>People</div>
              <div>Ideas</div>
              <div>Opportunities</div>
              <div>Together</div>
            </div>
            <svg className="w-40 h-7 ml-auto -mt-1 text-[#0062D2]/60 overflow-visible" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M125 5C85 22 35 22 8 16C2 15 1 20 7 21C42 27 100 22 135 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            
            {/* Left Column: Headline, Pipeline, Buttons, Stats, Quote */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0062D2] mb-6 shadow-xs self-start">
                <span className="size-2 rounded-full bg-[#0062D2]" />
                PILLAR: THE TERRITORY
              </div>

              {/* H1 */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[66px] font-bold tracking-tight text-[#0B1A38] leading-[1.08] mb-4">
                Local to{' '}
                <span className="relative inline-block text-[#0062D2]">
                  Global
                  <svg
                    className="absolute -bottom-2 sm:-bottom-3 left-0 w-full overflow-visible"
                    height="12"
                    viewBox="0 0 160 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8.5C45 2.5 115 2.5 157 8.5"
                      stroke="#0062D2"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Subline */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal mb-8 max-w-xl leading-relaxed">
                Every Peer has a room. Every room connects to the world.
              </p>

              {/* Clean Horizontal Pipeline Ribbon (Matching Mockup) */}
              <div className="mb-8 flex items-center justify-between sm:justify-start gap-1.5 sm:gap-3.5 flex-wrap">
                {[
                  { label: 'Circle', icon: Users, color: 'text-[#0062D2]', bg: 'bg-blue-50/80', border: 'border-blue-200' },
                  { label: 'City', icon: Building2, color: 'text-purple-600', bg: 'bg-purple-50/80', border: 'border-purple-200' },
                  { label: 'District', icon: MapPin, color: 'text-emerald-600', bg: 'bg-emerald-50/80', border: 'border-emerald-200' },
                  { label: 'State', icon: Compass, color: 'text-amber-600', bg: 'bg-amber-50/80', border: 'border-amber-200' },
                  { label: 'Country', icon: Award, color: 'text-rose-600', bg: 'bg-rose-50/80', border: 'border-rose-200' },
                  { label: 'Global', icon: Globe, color: 'text-sky-600', bg: 'bg-sky-50/80', border: 'border-sky-200' },
                ].map((item, idx, arr) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-center gap-1.5 sm:gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`size-11 sm:size-13 rounded-2xl ${item.bg} ${item.color} border ${item.border} flex items-center justify-center shadow-xs transition-transform hover:scale-105 mb-1.5`}>
                          <Icon className="size-5 sm:size-6" />
                        </div>
                        <span className="text-[11px] sm:text-xs font-semibold text-slate-700">
                          {item.label}
                        </span>
                      </div>
                      {idx < arr.length - 1 && (
                        <ArrowRight className="size-3.5 sm:size-4 text-slate-300 font-bold -mt-4" />
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Action Buttons with Arrows */}
              <div className="flex flex-wrap items-center gap-3 mb-9">
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0062D2] hover:bg-[#0052B4] px-5 sm:px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:scale-105"
                >
                  <Smartphone className="size-4" />
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/circles"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-5 sm:px-6 py-3 text-sm font-semibold text-[#0062D2] shadow-xs transition-all hover:border-slate-300"
                >
                  <span>Find Your Circle</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-5 sm:px-6 py-3 text-sm font-semibold text-[#0062D2] shadow-xs transition-all hover:border-slate-300"
                >
                  <span>Start a Circle</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* 3 Metrics Strip (Matching Mockup) */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 max-w-lg mb-8">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                    <Users2 className="size-5" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">100K+</div>
                    <div className="text-[11px] text-slate-500 font-medium leading-tight">Entrepreneurs Together</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Building2 className="size-5" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">500+</div>
                    <div className="text-[11px] text-slate-500 font-medium leading-tight">Cities in Progress</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Globe className="size-5" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">Global</div>
                    <div className="text-[11px] text-slate-500 font-medium leading-tight">Expanding Worldwide</div>
                  </div>
                </div>
              </div>

              {/* Quote Block from Mockup */}
              <div className="border-l-2 border-[#0062D2] pl-4 py-1 max-w-md">
                <p className="font-serif italic text-base sm:text-lg text-slate-800 leading-snug">
                  “Local connections create global opportunities.”
                </p>
                <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mt-1">
                  — Peers Global
                </div>
              </div>

              {/* Designed in Bharat signature flourish */}
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-0.5 bg-[#0062D2]" />
                <div className="font-serif italic text-xs text-[#0062D2]/80">
                  Designed in Bharat. Built for the world.
                </div>
              </div>

            </div>

            {/* Right Column: Dual Phone App Showcase (From user mockup) */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              {/* Soft Aura Glow */}
              <div className="absolute size-[420px] sm:size-[520px] rounded-full bg-gradient-to-tr from-[#3B82F6]/20 via-[#60A5FA]/15 to-transparent blur-3xl pointer-events-none -z-10" />

              <div className="relative w-full max-w-[540px] xl:max-w-[620px] drop-shadow-[0_25px_50px_rgba(0,98,210,0.18)] transition-transform duration-500 hover:scale-[1.01]">
                <Image
                  src="/images/territory/hero-phones.png"
                  alt="Peers Global Unity Mobile App - Community Feed & Peer Profile"
                  width={1100}
                  height={733}
                  priority
                  className="w-full h-auto object-contain"
                />

                {/* Floating Bottom Badge */}
                <div className="absolute -bottom-2 right-2 sm:right-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 p-3 shadow-xl flex items-center gap-3 z-10">
                  <div className="size-8 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center font-bold text-xs">
                    🌐
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-snug">
                      A Stronger Tomorrow
                    </div>
                    <div className="text-[10px] font-semibold text-[#0062D2]">
                      Together across 6 layers
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. WHY STRUCTURE MATTERS (Split Layout with Mountain Climbers Visual)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
        {/* Soft atmospheric ambient light glows */}
        <div className="absolute top-1/3 left-0 -translate-x-1/4 size-[600px] rounded-full bg-gradient-to-tr from-blue-100/50 via-sky-50/40 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/3 size-[500px] rounded-full bg-gradient-to-tr from-sky-100/40 via-blue-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

        {/* Decorative Dotted Grid on Bottom-Left */}
        <div className="absolute bottom-10 left-10 pointer-events-none opacity-40 select-none -z-10">
          <div className="grid grid-cols-6 gap-3">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="size-1 rounded-full bg-[#0062D2]/40" />
            ))}
          </div>
        </div>

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Visual: Video Container with Badges, Cursive Text, and Dark Stats Pill */}
            <div className="lg:col-span-6 relative pb-10">
              
              {/* Main Video Frame with Smooth Rounded Corners and Soft Glow */}
              <div className="relative aspect-[16/11] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-slate-100/80 bg-slate-950">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover object-center"
                >
                  <source src="/videos/leadership-hero-bg.mp4" type="video/mp4" />
                </video>

                {/* Top-Left Floating Cursive Accent */}
                <div className="absolute top-6 left-7 z-10 select-none pointer-events-none transform -rotate-6">
                  <div
                    className="text-[26px] sm:text-[32px] text-white/95 leading-[1.08] font-serif italic drop-shadow-md"
                    style={{ fontFamily: 'Caveat, "Playfair Display", Georgia, cursive, serif' }}
                  >
                    <div>Stronger</div>
                    <div>Tomorrow</div>
                    <div>Together</div>
                  </div>
                  <svg className="w-28 h-5 text-white/80 overflow-visible mt-0.5" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 14C35 4 80 4 115 15" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
                  </svg>
                </div>

                {/* Top-Right Spaced Brand Pillar Words */}
                <div className="absolute top-6 right-7 z-10 select-none pointer-events-none text-right">
                  <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-white/80 space-y-1 drop-shadow-xs">
                    <div>PEOPLE</div>
                    <div>IDEAS</div>
                    <div>OPPORTUNITIES</div>
                    <div>TOGETHER</div>
                  </div>
                </div>

                {/* Atmospheric gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Dark Gradient Floating Stats Strip (Overlapping Bottom Edge) */}
              <div className="absolute -bottom-2 left-4 sm:left-6 right-4 sm:right-6 z-20 rounded-2xl bg-[#091B33]/95 backdrop-blur-md p-4 sm:p-5 shadow-2xl border border-white/10 text-white">
                <div className="grid grid-cols-4 gap-2 sm:gap-3 items-center text-left">
                  {/* 100K+ */}
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="size-8 sm:size-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-blue-300">
                      <Users className="size-4 sm:size-4.5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-white leading-tight">100K+</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-300 font-normal leading-tight mt-0.5">Entrepreneurs Together</div>
                    </div>
                  </div>

                  {/* 500+ */}
                  <div className="flex items-center gap-2.5 sm:gap-3 border-l border-white/10 pl-2 sm:pl-3">
                    <div className="size-8 sm:size-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-blue-300">
                      <Building2 className="size-4 sm:size-4.5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-white leading-tight">500+</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-300 font-normal leading-tight mt-0.5">Cities in Progress</div>
                    </div>
                  </div>

                  {/* 28+ Countries */}
                  <div className="flex items-center gap-2.5 sm:gap-3 border-l border-white/10 pl-2 sm:pl-3">
                    <div className="size-8 sm:size-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-blue-300">
                      <Globe className="size-4 sm:size-4.5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-white leading-tight">28+</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-300 font-normal leading-tight mt-0.5">Countries</div>
                    </div>
                  </div>

                  {/* Bigger Opportunities */}
                  <div className="flex items-center gap-2.5 sm:gap-3 border-l border-white/10 pl-2 sm:pl-3">
                    <div className="size-8 sm:size-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-blue-300">
                      <TrendingUp className="size-4 sm:size-4.5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-white leading-tight">Bigger</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-300 font-normal leading-tight mt-0.5">Opportunities Ahead</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Narrative & Clean Pill Feature Cards */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Eyebrow with Dash */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-[2px] w-8 bg-[#0062D2]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                  Why Structure Matters
                </span>
              </div>

              {/* H2 Title with Underline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B1A38] tracking-tight leading-[1.14] mb-3">
                A community without structure becomes a crowd.
              </h2>
              
              {/* Short Blue Accent Underline */}
              <div className="w-12 h-1 bg-[#0062D2] rounded-full mb-6" />

              <div className="space-y-4 text-slate-600 font-normal text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  People meet, exchange pleasantries, and never see each other again. Nothing compounds.
                </p>
                <p className="font-semibold text-slate-900">
                  Peers Global is built the opposite way. Every Peer has a fixed home, and from that home can reach the entire community.
                </p>
                <p>
                  The structure is what makes both true at once: deep, intimate relationships inside your Circle, coupled with immediate national and global scale whenever your business needs it.
                </p>
              </div>

              {/* 3 Large White Feature Cards (Matching Mockup) */}
              <div className="grid grid-cols-3 gap-3.5 mb-8">
                {/* Fixed Home */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-200 transition-all">
                  <div className="size-9 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-3">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">Fixed Home</div>
                  <div className="text-[11px] text-slate-500 mt-1">Where you live.</div>
                </div>

                {/* Giving Rhythm */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-purple-200 transition-all">
                  <div className="size-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                      <line x1="16" x2="16" y1="2" y2="6"/>
                      <line x1="8" x2="8" y1="2" y2="6"/>
                      <line x1="3" x2="21" y1="10" y2="10"/>
                      <path d="m9 16 2 2 4-4"/>
                    </svg>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">Giving Rhythm</div>
                  <div className="text-[11px] text-slate-500 mt-1">Structured give-first.</div>
                </div>

                {/* Open Scale */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-200 transition-all">
                  <div className="size-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 3 21 3 21 9"/>
                      <polyline points="9 21 3 21 3 15"/>
                      <line x1="21" x2="14" y1="3" y2="10"/>
                      <line x1="3" x2="10" y1="21" y2="14"/>
                    </svg>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">Open Scale</div>
                  <div className="text-[11px] text-slate-500 mt-1">Local to global.</div>
                </div>
              </div>

              {/* Bottom CTA Link & Handwritten Cursive Flourish */}
              <div className="flex items-center justify-between pt-2">
                <Link
                  href="/why-peers-global"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0062D2] hover:text-[#0052B4] transition-colors group"
                >
                  <span>Learn More About Our Structure</span>
                  <div className="size-7 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="size-3.5" />
                  </div>
                </Link>

                {/* Right handwritten cursive text from mockup */}
                <div className="select-none pointer-events-none transform -rotate-6 text-right hidden sm:block">
                  <div
                    className="text-[20px] xl:text-[24px] text-[#0062D2]/75 leading-none font-serif italic"
                    style={{ fontFamily: 'Caveat, "Playfair Display", Georgia, cursive, serif' }}
                  >
                    <div>Same People.</div>
                    <div>Bigger Possibilities.</div>
                  </div>
                  <svg className="w-24 h-3 ml-auto text-[#0062D2]/50 overflow-visible mt-0.5" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 8C30 2 65 2 95 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. 01 THE CIRCLE (Your Home in the Community) - Midnight Premium Theme
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#061224] text-white border-b border-white/10 relative overflow-hidden">
        {/* Deep ambient glow effects */}
        <div className="absolute top-1/4 left-1/4 size-[650px] rounded-full bg-gradient-to-tr from-[#0062D2]/25 via-sky-500/10 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 size-[500px] rounded-full bg-gradient-to-tr from-blue-600/15 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* ──────── COLUMN 1: Headline, Narrative, CTAs & Quote Card (lg:col-span-4) ──────── */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              {/* Badge 01 THE CIRCLE */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-5 self-start backdrop-blur-md">
                <span className="size-5 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-[10px]">
                  01
                </span>
                <span>THE CIRCLE</span>
              </div>

              {/* H2 Title with Neon Blue Gradient Accent */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.12] mb-5">
                Your home in the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2987F8] via-[#4CA5FD] to-[#38BDF8]">
                  community
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-7">
                The Circle is the heart of Peers Global. It is where a Peer actually lives. A Circle brings together the right entrepreneurs around a common industry, interest, location or business opportunity. It is composed deliberately, not filled randomly. Every seat is considered.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <Link
                  href="/circles"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0062D2] to-[#0B7DFE] hover:from-[#0054B8] hover:to-[#006CDD] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
                >
                  <span>Explore All Circles</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/circle-meeting-experience"
                  className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/30"
                >
                  How a Circle Meeting Works
                </Link>
              </div>

              {/* Quote Glass Card */}
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 backdrop-blur-md relative">
                <div className="text-3xl text-blue-400 font-serif font-bold leading-none mb-1">“</div>
                <p className="font-serif italic text-sm sm:text-base text-slate-200 leading-snug">
                  We put the right people in the room — complementary businesses, never competing ones.
                </p>
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mt-3 text-right">
                  — PEERS GLOBAL
                </div>
              </div>

              {/* 4 Stats Metrics Strip (Matching Mockup) */}
              <div className="grid grid-cols-4 gap-2 pt-8 mt-4 border-t border-white/10 items-center">
                {/* 100K+ */}
                <div className="flex items-center gap-2">
                  <div className="size-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Users className="size-3.5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-tight">100K+</div>
                    <div className="text-[8px] text-slate-400 font-medium leading-tight mt-0.5">Entrepreneurs Together</div>
                  </div>
                </div>

                {/* 500+ */}
                <div className="flex items-center gap-2 border-l border-white/10 pl-2">
                  <div className="size-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Building2 className="size-3.5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-tight">500+</div>
                    <div className="text-[8px] text-slate-400 font-medium leading-tight mt-0.5">Cities in Progress</div>
                  </div>
                </div>

                {/* 28+ */}
                <div className="flex items-center gap-2 border-l border-white/10 pl-2">
                  <div className="size-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Globe className="size-3.5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-tight">28+</div>
                    <div className="text-[8px] text-slate-400 font-medium leading-tight mt-0.5">Countries</div>
                  </div>
                </div>

                {/* Bigger */}
                <div className="flex items-center gap-2 border-l border-white/10 pl-2">
                  <div className="size-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <TrendingUp className="size-3.5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-tight">Bigger</div>
                    <div className="text-[8px] text-slate-400 font-medium leading-tight mt-0.5">Opportunities Ahead</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ──────── COLUMN 2: Central Video Showcase (lg:col-span-4) ──────── */}
            <div className="lg:col-span-4 relative flex items-center justify-center py-4">
              
              {/* Outer frame container matching user reference */}
              <div className="relative aspect-[3/4] w-full max-w-[420px] rounded-[36px] overflow-hidden border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.5)] bg-slate-900">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover object-center"
                >
                  <source src="/videos/leadership-hero-bg.mp4" type="video/mp4" />
                </video>

                {/* Subtle top/bottom dark gradients for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

                {/* Top-Left Spaced Text: STRONGER TOMORROW TOGETHER */}
                <div className="absolute top-6 left-6 z-10 select-none pointer-events-none">
                  <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/80 space-y-0.5 drop-shadow-sm">
                    <div>STRONGER</div>
                    <div>TOMORROW</div>
                    <div>TOGETHER</div>
                  </div>
                </div>

                {/* Top-Right Spaced Words: PEOPLE / IDEAS / OPPORTUNITIES / TOGETHER */}
                <div className="absolute top-6 right-6 z-10 select-none pointer-events-none text-right">
                  <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/80 space-y-0.5 drop-shadow-sm">
                    <div>PEOPLE</div>
                    <div>IDEAS</div>
                    <div>OPPORTUNITIES</div>
                    <div>TOGETHER</div>
                  </div>
                </div>

                {/* Floating Bottom Badge: Real Conversations. Real Opportunities. */}
                <div className="absolute bottom-6 left-6 right-6 z-20 rounded-2xl bg-black/75 backdrop-blur-md p-3.5 border border-white/15 flex items-center justify-between shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                      <Users className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">
                        Real Conversations.
                      </div>
                      <div className="text-[10px] text-slate-300 font-medium">
                        Real Opportunities.
                      </div>
                    </div>
                  </div>
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              {/* Handwritten Cursive Flourish on Bottom-Right of Video */}
              <div className="absolute -bottom-6 right-0 z-20 select-none pointer-events-none transform -rotate-6 hidden sm:block">
                <div
                  className="text-[26px] text-white/90 leading-none font-serif italic drop-shadow-md"
                  style={{ fontFamily: 'Caveat, "Playfair Display", Georgia, cursive, serif' }}
                >
                  More Than Meetings
                </div>
                <svg className="w-28 h-3 text-blue-400/80 overflow-visible mt-0.5" viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 8C35 2 85 2 115 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* ──────── COLUMN 3: 5 Dark Feature Cards with Hover Effects (lg:col-span-4) ──────── */}
            <div className="lg:col-span-4 flex flex-col gap-3 relative">
              
              {/* Curve line connector decorative element */}
              <div className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-full pointer-events-none opacity-20">
                <svg className="h-full w-6" viewBox="0 0 24 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 200 C15 200, 24 150, 24 50" stroke="#0062D2" strokeWidth="1.5" />
                  <path d="M0 200 C15 200, 24 250, 24 350" stroke="#0062D2" strokeWidth="1.5" />
                </svg>
              </div>

              {/* 1. The Right People */}
              <div className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-blue-500/40 transition-all flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3.5">
                  <div className="size-11 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Users2 className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      The Right People
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                      Complementary businesses, never competing ones.
                    </div>
                  </div>
                </div>
                <ChevronRight className="size-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </div>

              {/* 2. A Fixed Rhythm */}
              <div className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-500/40 transition-all flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3.5">
                  <div className="size-11 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                      <line x1="16" x2="16" y1="2" y2="6"/>
                      <line x1="8" x2="8" y1="2" y2="6"/>
                      <line x1="3" x2="21" y1="10" y2="10"/>
                      <path d="m9 16 2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                      A Fixed Rhythm
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                      The same Peers meet on a regular schedule.
                    </div>
                  </div>
                </div>
                <ChevronRight className="size-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </div>

              {/* 3. A Structure for Giving */}
              <div className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/40 transition-all flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3.5">
                  <div className="size-11 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      A Structure for Giving
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                      A defined space to share what you can offer and need.
                    </div>
                  </div>
                </div>
                <ChevronRight className="size-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </div>

              {/* 4. Continuity Inside the Unity App */}
              <div className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3.5">
                  <div className="size-11 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Smartphone className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      Continuity Inside the Unity App
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                      Book 1-to-1s, log referrals, stay aligned all month.
                    </div>
                  </div>
                </div>
                <ChevronRight className="size-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </div>

              {/* 5. Leadership from Within */}
              <div className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-500/40 transition-all flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3.5">
                  <div className="size-11 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      Leadership from Within
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                      Founded and led by its own Peers.
                    </div>
                  </div>
                </div>
                <ChevronRight className="size-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </div>

              {/* Bottom Right World Vector & Tag (From Mockup) */}
              <div className="mt-4 flex items-center justify-end gap-3 text-right">
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  <div>LOCAL CONNECTIONS</div>
                  <div className="text-blue-400">GLOBAL IMPACT</div>
                </div>
                <div className="size-10 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Globe className="size-5" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. 02 THE CITY (Where your Circle becomes a network) - Full Width Panoramic Fade
          ========================================================================= */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100 py-16 sm:py-24 lg:py-28">
        
        {/* Right Half: Video with Seamless Horizontal White Gradient Fade */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-3/5 h-full z-0 overflow-hidden pointer-events-none select-none">
          {/* Background Video directly without poster banner */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
          >
            <source src="/videos/stories-hero-bg.mp4" type="video/mp4" />
          </video>

          {/* Reduced Intensity White Gradient Fade to the Left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 via-20% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent lg:hidden" />

          {/* Top-Right Handwritten Script: Stronger Cities Together */}
          <div className="hidden lg:block absolute top-8 right-10 xl:right-16 z-10 select-none text-right transform -rotate-6">
            <div
              className="text-[30px] xl:text-[36px] text-white font-serif italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] tracking-wide"
              style={{ fontFamily: 'Caveat, "Playfair Display", Georgia, cursive, serif' }}
            >
              <div>Stronger</div>
              <div>Cities</div>
              <div>Together</div>
            </div>
            <svg className="w-36 h-5 ml-auto text-blue-500/90 overflow-visible mt-0.5 drop-shadow-sm" viewBox="0 0 140 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 14C45 4 95 4 135 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Right Pillar Capital Words: PEOPLE / IDEAS / OPPORTUNITIES / GROWTH */}
          <div className="hidden lg:block absolute top-36 right-10 xl:right-16 z-10 select-none text-right">
            <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-white/90 space-y-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              <div>PEOPLE</div>
              <div>IDEAS</div>
              <div>OPPORTUNITIES</div>
              <div>GROWTH</div>
            </div>
          </div>

          {/* Floating Ahmedabad City Badge on Right */}
          <div className="hidden md:flex absolute bottom-28 right-8 xl:right-16 z-10 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-2xl border border-slate-100 items-center gap-3.5 max-w-[270px] pointer-events-auto hover:scale-105 transition-transform">
            <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
              <MapPin className="size-5" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-slate-900 leading-snug">
                Ahmedabad
              </div>
              <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                A growing network of entrepreneurs
              </div>
            </div>
            <ArrowRight className="size-4 text-slate-400" />
          </div>

          {/* Bottom Right Handwritten Script: SAME CITY. BIGGER POSSIBILITIES. */}
          <div className="hidden lg:block absolute bottom-12 right-12 xl:right-20 z-10 select-none text-right">
            <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              SAME CITY.
            </div>
            <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] mt-0.5">
              BIGGER POSSIBILITIES.
            </div>
            <div className="w-12 h-0.5 bg-white/90 ml-auto mt-1" />
          </div>
        </div>

        {/* Content Container (Foreground Left Side) */}
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            
            {/* Badge 02 THE CITY */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0062D2] mb-5 shadow-2xs">
              <span className="size-5 rounded-full bg-blue-100 text-[#0062D2] flex items-center justify-center font-bold text-[10px]">
                02
              </span>
              <span>THE CITY</span>
            </div>

            {/* Headline with Blue Gradient Accent on 'network.' */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[56px] font-bold text-[#0B1A38] tracking-tight leading-[1.1] mb-5">
              Where your Circle becomes a{' '}
              <span className="text-[#0062D2]">
                network.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              One Circle gives you a room. A City gives you a network. As Circles grow within a city, Peers gain access far beyond their own meeting. A manufacturer in one Circle can reach a logistics Peer in another. A Peer entering a new segment can find someone across town who already serves it.
            </p>

            {/* 2-Column Grid of 5 Features (Matching Mockup) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9 max-w-xl">
              
              {/* Feature 1: Access to Peers across every Circle */}
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 shadow-2xs">
                  <Users2 className="size-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    Access to Peers across every Circle
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Connect with entrepreneurs in your city
                  </div>
                </div>
              </div>

              {/* Feature 2: Cross-Circle introductions */}
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    Cross-Circle introductions
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Collaborations and opportunities
                  </div>
                </div>
              </div>

              {/* Feature 3: City-level meetings and events */}
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                    <line x1="16" x2="16" y1="2" y2="6"/>
                    <line x1="8" x2="8" y1="2" y2="6"/>
                    <line x1="3" x2="21" y1="10" y2="10"/>
                    <path d="m9 16 2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    City-level meetings and events
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Learning sessions and celebrations
                  </div>
                </div>
              </div>

              {/* Feature 4: Local leadership */}
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    Local leadership
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Peers who know your market
                  </div>
                </div>
              </div>

              {/* Feature 5: A route into a new Circle */}
              <div className="flex items-start gap-3 sm:col-span-2">
                <div className="size-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    A route into a new Circle
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    As your business changes
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons: See Cities + Watch City Stories */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/circles"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0062D2] hover:bg-[#0052B4] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:scale-105"
              >
                <span>See Cities</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/video-stories"
                className="inline-flex items-center gap-3 px-4 py-2 text-slate-700 hover:text-[#0062D2] transition-colors group"
              >
                <div className="size-10 rounded-full border border-blue-200 bg-blue-50/80 text-[#0062D2] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0062D2] group-hover:text-white transition-all shadow-xs">
                  <svg className="size-4 ml-0.5 fill-current" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    WATCH
                  </div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#0062D2]">
                    City Stories
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. 3-TIER EXPANSION GRID (03 District, 04 State, 05 Country)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F7FAFE] border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 03: THE DISTRICT */}
            <div className="rounded-3xl bg-white p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="size-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                      03
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                      THE DISTRICT
                    </span>
                  </div>
                  <div className="size-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <MapPin className="size-4" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
                  Cities that grow together.
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                  Business does not respect city limits. A Peer sells into three cities, sources from a fourth and hires from a fifth. The District exists so the community works the way business already does.
                </p>

                <div className="rounded-xl bg-emerald-50/60 border border-emerald-100/70 p-3 mb-6">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                    District Leadership
                  </div>
                  <div className="text-[11px] text-emerald-900 mt-0.5 leading-snug">
                    Led by a District Executive Director, with multiple Area Executive Directors beneath them.
                  </div>
                </div>
              </div>

              <Link
                href="/circles"
                className="inline-flex items-center justify-between w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Explore Districts</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Card 04: THE STATE */}
            <div className="rounded-3xl bg-white p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="size-6 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
                      04
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                      THE STATE
                    </span>
                  </div>
                  <div className="size-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Compass className="size-4" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
                  Regional scale.
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                  State-level retreats, conclaves and gatherings. Access to Peers across every district and city in the state. Expand distribution and unlock statewide cross-industry collaboration.
                </p>

                <div className="rounded-xl bg-amber-50/60 border border-amber-100/70 p-3 mb-6">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                    State Leadership
                  </div>
                  <div className="text-[11px] text-amber-900 mt-0.5 leading-snug">
                    Led by a State Executive Director driving regional alliances.
                  </div>
                </div>
              </div>

              <Link
                href="/circles"
                className="inline-flex items-center justify-between w-full rounded-xl bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Explore States</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Card 05: THE COUNTRY */}
            <div className="rounded-3xl bg-white p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="size-6 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">
                      05
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600">
                      THE COUNTRY
                    </span>
                  </div>
                  <div className="size-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                    <Award className="size-4" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
                  A national community
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                  At the country level, Peers Global becomes a national movement. A Country brings together every District, every City and every Circle within one nation. Where scale creates opportunities no single Circle could produce.
                </p>

                <div className="rounded-xl bg-rose-50/60 border border-rose-100/70 p-3 mb-6">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-rose-800">
                    National Leadership
                  </div>
                  <div className="text-[11px] text-rose-900 mt-0.5 leading-snug">
                    National leadership that represents the community and protects its culture.
                  </div>
                </div>
              </div>

              <Link
                href="/circles"
                className="inline-flex items-center justify-between w-full rounded-xl bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Peers Global India</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. 06 GLOBAL (Local roots. Global reach.) - Deep Cosmic Theme
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#020B1C] text-white py-20 sm:py-28 border-b border-white/10">
        
        {/* Deep ambient galaxy radial light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[900px] rounded-full bg-gradient-to-tr from-[#0062D2]/20 via-[#0B7DFE]/10 to-transparent blur-3xl pointer-events-none -z-10" />

        {/* Right Half: Earth Globe Visual Container with Connected Network Lines */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-3/5 h-full z-0 overflow-hidden pointer-events-none select-none">
          <div className="relative w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-center"
            >
              <source src="/videos/global-earth-hd.mp4" type="video/mp4" />
            </video>
            {/* Seamless dark cosmic gradient fade to the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#020B1C] via-[#020B1C]/75 via-25% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020B1C]/60 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Top-Right Handwritten Script: People Ideas Opportunities Together */}
          <div className="hidden lg:block absolute top-8 right-10 xl:right-16 z-10 select-none text-right transform -rotate-6">
            <div
              className="text-[28px] xl:text-[34px] text-white/90 font-serif italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] tracking-wide"
              style={{ fontFamily: 'Caveat, "Playfair Display", Georgia, cursive, serif' }}
            >
              <div>People</div>
              <div>Ideas</div>
              <div>Opportunities</div>
              <div>Together</div>
            </div>
            <svg className="w-36 h-5 ml-auto text-blue-400/90 overflow-visible mt-0.5 drop-shadow-sm" viewBox="0 0 140 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 14C45 4 95 4 135 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>



          {/* Bottom Right Handwritten Script: SAME COMMUNITY. BIGGER POSSIBILITIES. */}
          <div className="hidden lg:block absolute bottom-12 right-12 xl:right-16 z-10 select-none text-right">
            <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              SAME COMMUNITY.
            </div>
            <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] mt-0.5">
              BIGGER POSSIBILITIES.
            </div>
            <div className="w-12 h-0.5 bg-white/70 ml-auto mt-1" />
          </div>
        </div>

        {/* Foreground Content (Left Column) */}
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            
            {/* Badge 06 GLOBAL */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-5 backdrop-blur-md shadow-2xs">
              <span className="size-5 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-[10px]">
                06
              </span>
              <span>GLOBAL</span>
            </div>

            {/* Headline with Blue Gradient Accent on 'Global' */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[58px] font-bold text-white tracking-tight leading-[1.08] mb-5">
              Local roots.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2987F8] via-[#4CA5FD] to-[#38BDF8]">
                Global
              </span>{' '}
              reach.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-9 max-w-xl">
              The final layer connects every country into one community. Peers Global is designed from the start to cross borders, because the entrepreneurs inside it do. A Peer looking to export, source, expand or partner internationally can find someone on the other side who already understands the market.
            </p>

            {/* 2-Column Grid of 6 Circular Icon Feature Items (Matching Mockup) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-10 max-w-xl">
              
              {/* Item 1: Access to Peers across countries */}
              <div className="flex items-center gap-3.5">
                <div className="size-11 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 shadow-xs">
                  <Globe className="size-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                    Access to Peers across
                  </div>
                  <div className="text-[11px] text-slate-400">
                    countries and continents
                  </div>
                </div>
              </div>

              {/* Item 2: Global events and summit */}
              <div className="flex items-center gap-3.5">
                <div className="size-11 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                    <line x1="16" x2="16" y1="2" y2="6"/>
                    <line x1="8" x2="8" y1="2" y2="6"/>
                    <line x1="3" x2="21" y1="10" y2="10"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                    Global events
                  </div>
                  <div className="text-[11px] text-slate-400">
                    and the annual summit
                  </div>
                </div>
              </div>

              {/* Item 3: International market entry */}
              <div className="flex items-center gap-3.5">
                <div className="size-11 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 shadow-xs">
                  <Users2 className="size-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                    International market entry
                  </div>
                  <div className="text-[11px] text-slate-400">
                    through people, not agencies
                  </div>
                </div>
              </div>

              {/* Item 4: Worldwide standard */}
              <div className="flex items-center gap-3.5">
                <div className="size-11 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 shadow-xs">
                  <Star className="size-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                    A worldwide standard
                  </div>
                  <div className="text-[11px] text-slate-400">
                    of culture, structure and recognition
                  </div>
                </div>
              </div>

              {/* Item 5: Cross-border partnerships */}
              <div className="flex items-center gap-3.5">
                <div className="size-11 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                    Cross-border partnerships,
                  </div>
                  <div className="text-[11px] text-slate-400">
                    sourcing and distribution
                  </div>
                </div>
              </div>

              {/* Item 6: Local-to-global opportunity */}
              <div className="flex items-center gap-3.5">
                <div className="size-11 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 shadow-xs">
                  <TrendingUp className="size-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                    Local-to-global opportunity
                  </div>
                  <div className="text-[11px] text-slate-400">
                    for every Peer, in every Circle
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons: Explore Global Community + Watch Our Global Story */}
            <div className="flex items-center gap-4 flex-wrap mb-10">
              <Link
                href="/circles"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0062D2] to-[#0B7DFE] hover:from-[#0054B8] hover:to-[#006CDD] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
              >
                <span>Explore Global Community</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/video-stories"
                className="inline-flex items-center gap-3 px-4 py-2 text-slate-200 hover:text-white transition-colors group"
              >
                <div className="size-10 rounded-full border border-blue-400/40 bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0062D2] group-hover:text-white transition-all shadow-xs">
                  <svg className="size-4 ml-0.5 fill-current" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    WATCH
                  </div>
                  <div className="text-xs font-bold text-white group-hover:text-blue-400">
                    Our Global Story
                  </div>
                </div>
              </Link>
            </div>

            {/* Bottom Bar: CONNECTING ENTREPRENEURS WITHOUT BORDERS */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/10 max-w-lg">
              <div className="w-10 h-0.5 bg-blue-500" />
              <div className="text-[10px] uppercase font-bold tracking-[0.25em] text-slate-400">
                CONNECTING ENTREPRENEURS WITHOUT BORDERS
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* =========================================================================
          8. GROWING THE TERRITORY (Be the reason your city is next)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFCFF]/60 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Card Container */}
          <div className="rounded-[32px] sm:rounded-[40px] bg-white border border-slate-200/80 p-8 sm:p-12 lg:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.03)] relative overflow-hidden">
            
            {/* Top Row: Narrative, Watermark, and Quote */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative mb-14 lg:mb-16">
              
              {/* Left Column (Cols 1-6): Narrative & CTAs */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <span className="h-[2px] w-7 bg-[#0062D2]" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                      Growing the Territory
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0B1A38] tracking-tight leading-[1.12] mb-5">
                    Be the reason<br />
                    your city is{' '}
                    <span className="relative inline-block text-[#0062D2] italic font-normal">
                      next.
                      <svg className="absolute -bottom-1.5 left-0 w-full h-3 text-[#0062D2] overflow-visible" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8C30 3 70 3 98 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-4 max-w-xl">
                    Every Circle that exists today began because one entrepreneur decided to start it. Every city in the community began the same way. That is how Peers Global grows — not by opening branches, but by entrepreneurs choosing to build a room where none existed.
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
                    If there is no Circle near you, start one. We provide the structure, the systems, the training, the technology and the support of the wider community. You provide the leadership and the first group of the right people.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/membership"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0062D2] hover:bg-[#0052B4] px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:scale-105"
                  >
                    <span>Start a Circle</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs transition-all hover:border-slate-300"
                  >
                    Bring Peers Global to My City
                  </Link>
                </div>
              </div>

              {/* Center Column (Cols 7-9): Giant Watermark Typography */}
              <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center select-none pointer-events-none self-center">
                <div className="font-serif text-6xl xl:text-[76px] font-light text-blue-400/20 tracking-[0.14em] leading-[0.95] text-center">
                  <div>CITY</div>
                  <div>BY</div>
                  <div>CITY</div>
                </div>
              </div>

              {/* Right Column (Cols 10-12): Quote & Tagline */}
              <div className="lg:col-span-3 flex flex-col justify-between h-full pt-1">
                {/* Top Corner 4-Line Label with Blue Left Bar */}
                <div className="flex items-stretch gap-2.5 lg:justify-end mb-8">
                  <div className="w-[1.5px] bg-[#0062D2] shrink-0" />
                  <div className="text-[9px] uppercase font-bold tracking-[0.22em] text-slate-400 leading-tight">
                    <div>PEOPLE</div>
                    <div>IDEAS</div>
                    <div>OPPORTUNITIES</div>
                    <div>TOGETHER</div>
                  </div>
                </div>

                {/* Quote Block */}
                <div>
                  <div className="text-3xl font-serif text-[#0062D2] font-bold leading-none mb-2">“</div>
                  <p className="font-serif italic text-xl sm:text-2xl font-medium text-[#0B1A38] leading-[1.25] mb-5">
                    The map is not finished. It is being built by Peers, city by city.”
                  </p>
                  
                  <div className="w-10 h-[2px] bg-[#0062D2] mb-5" />

                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500 leading-relaxed">
                    NEW CITIES.<br />
                    STRONGER INDIA.<br />
                    BIGGER WORLD.
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom 4-Step Process (01, 02, 03, 04) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-10 border-t border-slate-100">
              
              {/* Step 01 */}
              <div className="relative flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-serif text-4xl sm:text-5xl font-light text-blue-200/90 leading-none">
                    01
                  </div>
                  <div className="h-px w-10 bg-slate-200 hidden lg:block mr-2" />
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                  Start the room
                </div>
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  It begins with one entrepreneur who decides to bring people together.
                </p>
              </div>

              {/* Step 02 */}
              <div className="relative flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-serif text-4xl sm:text-5xl font-light text-blue-200/90 leading-none">
                    02
                  </div>
                  <div className="h-px w-10 bg-slate-200 hidden lg:block mr-2" />
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                  Gather the right people
                </div>
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  Invite entrepreneurs who share the intent to grow, collaborate and create impact.
                </p>
              </div>

              {/* Step 03 */}
              <div className="relative flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-serif text-4xl sm:text-5xl font-light text-blue-200/90 leading-none">
                    03
                  </div>
                  <div className="h-px w-10 bg-slate-200 hidden lg:block mr-2" />
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                  Build the rhythm
                </div>
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  With regular meetings, meaningful interactions and local initiatives.
                </p>
              </div>

              {/* Step 04 */}
              <div className="relative flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-serif text-4xl sm:text-5xl font-light text-blue-200/90 leading-none">
                    04
                  </div>
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                  Grow the city
                </div>
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  A stronger network, more opportunities and a bigger impact for the region.
                </p>
              </div>

            </div>

            {/* Bottom Edge Footer Bar */}
            <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              <div className="flex items-center gap-2.5">
                <span className="h-[1.5px] w-6 bg-[#0062D2]" />
                <span>ONE COMMUNITY, MANY OPPORTUNITIES.</span>
              </div>
              <div>
                <span>FROM YOUR CITY TO A BRIGHTER TOMORROW.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          9. CLOSING HERO (Every Peer has a home. Every home connects to the world.)
          ========================================================================= */}
      <ClosingCtaSection
        eyebrow="THE TERRITORY"
        title={
          <>
            Every Peer has a home.{' '}
            <span className="block sm:inline">Every home connects to the world.</span>
          </>
        }
        subtitle="Build Your Business. Build Your Relationships. Build Your Circle."
        description="Peers Global — World's First Community of Collaboration. Peers are Partners in Business and Friends in Life."
        primaryButtonText="FIND YOUR CIRCLE"
        primaryButtonHref="/circles"
        secondaryButtonText="JOIN PEERS GLOBAL"
        secondaryButtonHref="/membership"
      />

    </div>
  )
}

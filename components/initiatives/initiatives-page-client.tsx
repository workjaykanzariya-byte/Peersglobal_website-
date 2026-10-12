'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  ArrowRight,
  ChevronRight,
  Globe2,
  Users,
  Sparkles,
  HeartHandshake,
  Leaf,
  Award,
  ExternalLink,
  Target,
  ShieldCheck,
  Building2,
  Zap,
  CheckCircle2,
  Compass,
  ShoppingBag,
  Heart,
  Briefcase,
  Layers,
  ArrowUpRight,
  Check,
} from 'lucide-react'

// ─── The 6 Ecosystem Initiatives ───────────────────────────────────────────
const INITIATIVES_DATA = [
  {
    id: '01',
    name: 'PEERS GLOBAL',
    tagline: 'The community of collaboration.',
    desc: 'PEERS GLOBAL is the community at the centre of the ecosystem. It is built around entrepreneurs coming together not merely to network, but to build trusted relationships and create meaningful collaboration.',
    structure: [
      'Circles & Inner Boards',
      'Peer-to-Peer relationships',
      'Learning & masterclasses',
      'Resources & playbooks',
      'Leadership opportunities',
      'Recognition & Life Impact',
    ],
    philosophy: 'Connection is the beginning. Collaboration is what comes next.',
    ctaText: 'Explore PEERS GLOBAL',
    ctaLink: '/circles',
    isExternal: false,
    icon: Users,
    color: 'text-[#0062D2] bg-blue-50 border-blue-200',
  },
  {
    id: '02',
    name: 'VYAPAARJAGAT',
    tagline: 'Every business story deserves to be seen.',
    desc: 'VyapaarJagat emerged from a personal realisation: Every story is important. Every story is unique. Every story matters. Born from trying to get a first-generation entrepreneur’s own story recognised — and discovering that many MSME journeys were never being told.',
    structure: [
      'MSME & startup features',
      'VyapaarJagat Growth Show',
      'Vyapaaratna National Awards',
      'Entrepreneur video series',
      'Greenpreneur recognitions',
      'National MSME Conclaves',
    ],
    philosophy: 'Recognition is not vanity. Recognition tells someone: your journey matters.',
    ctaText: 'Explore VyapaarJagat',
    ctaLink: 'https://vyapaarjagat.com',
    isExternal: true,
    icon: Globe2,
    color: 'text-sky-700 bg-sky-50 border-sky-200',
  },
  {
    id: '03',
    name: 'FEMPRENEUR',
    tagline: 'A space for women in entrepreneurship.',
    desc: 'FEMPRENEUR is dedicated to creating a space where women entrepreneurs can be recognised, connected and supported — addressing growth capital, scale barriers, family-enterprise balance, and institutional access.',
    structure: [
      'Women founder circles',
      'Capital & scale forums',
      'Mentorship & leadership tracks',
      'Peer advisory tables',
      'National visibility summits',
      'Verified impact cohorts',
    ],
    philosophy: 'Create a space where women entrepreneurs can be recognised, connected and supported.',
    ctaText: 'Explore FEMPRENEUR',
    ctaLink: '/circles',
    isExternal: false,
    icon: Sparkles,
    color: 'text-purple-700 bg-purple-50 border-purple-200',
  },
  {
    id: '04',
    name: 'GREENPRENEUR',
    tagline: 'Entrepreneurship with a responsibility to the future.',
    desc: 'GREENPRENEUR brings sustainability into the entrepreneurial conversation. Building a business is not only about what can be created today, but about what kind of world that creation leaves behind: People, Planet, Purpose, and Long-term value.',
    structure: [
      'Circular economy alliances',
      'ESG compliance roundtables',
      'Clean-tech founder networks',
      'Green procurement linkages',
      'Sustainability masterclasses',
      'Impact measurement rubrics',
    ],
    philosophy: 'Growth and responsibility do not have to be opposites.',
    ctaText: 'Explore GREENPRENEUR',
    ctaLink: '/circles',
    isExternal: false,
    icon: Leaf,
    color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  },
  {
    id: '05',
    name: '1 MILLION ENTREPRENEURS INTERNATIONAL FORUM',
    tagline: 'One entrepreneur can impact another.',
    desc: 'The 1 Million Entrepreneurs International Forum (1MEIF) represents the larger institutional impact ambition: 1 Million+ entrepreneurs to impact by 2030. Impact travels through a product, service, job, relationship, recommendation, collaboration, or helping hand.',
    structure: [
      'Section 8 non-profit foundation',
      'Grassroots entrepreneur mentorship',
      'Tier-2 and Tier-3 founder fellowships',
      'Student builder incubation',
      '1 Action = 1 Life Impacted model',
      'Global social impact reports',
    ],
    philosophy: 'Impact multiplies through people. The Forum is the institutional expression of that belief.',
    ctaText: 'Explore 1MEIF',
    ctaLink: '/1-million-mission',
    isExternal: false,
    icon: Award,
    color: 'text-amber-800 bg-amber-50 border-amber-200',
  },
  {
    id: '06',
    name: 'PEERS GLOBAL STORE',
    tagline: 'A place for the ecosystem to experience what it creates.',
    desc: 'The PEERS GLOBAL STORE is part of the wider ecosystem — an extension of the community where official merchandise, lapel pins, leather folios, playbooks, and verified community offerings are accessible through Peers Coin and community channels.',
    structure: [
      'Official Heritage Lapel Pins',
      'Monogrammed leather folios',
      'Commemorative citizen coins',
      'Founder growth toolkits',
      'Summit & conclave delegate items',
      'Peers Coin redemptions',
    ],
    philosophy: 'What the ecosystem creates should have a place within the ecosystem.',
    ctaText: 'Visit the PEERS GLOBAL Store',
    ctaLink: '/marketplace',
    isExternal: false,
    icon: ShoppingBag,
    color: 'text-rose-700 bg-rose-50 border-rose-200',
  },
]

export function InitiativesPageClient() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>About</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Our Initiatives</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (OUR INITIATIVES — DIFFERENT PLATFORMS. ONE BELIEF.) ─── */}
      <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-b from-[#F0F5FD] via-white to-[#FBFCFE] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                  THE ECOSYSTEM
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] text-slate-950">
                <span className="brand-gradient-text block">OUR INITIATIVES</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-800 font-medium mt-2 block font-sans">
                  Different platforms. One belief.
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <p className="font-serif font-bold text-slate-950 text-lg sm:text-xl">
                  PEERS GLOBAL began with a simple belief: Entrepreneurs should not have to build alone.
                </p>
                <p>
                  But entrepreneurship does not exist in one room. It exists across industries, across generations, across communities, across business stages, and across the many ways an entrepreneur can create value.
                </p>
                <div className="p-4 rounded-2xl bg-white border border-blue-200 shadow-2xs space-y-1 text-xs sm:text-sm text-slate-800 font-medium">
                  <p>That is why the PEERS GLOBAL ecosystem extends beyond one platform.</p>
                  <p className="text-[#0062D2] font-semibold">
                    Each initiative has its own purpose. Together, they form a larger movement around entrepreneurship, recognition, sustainability, community and impact.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="#ecosystem"
                  variant="primary"
                  size="md"
                >
                  Explore The 6 Initiatives
                </GalaxyButton>

                <GalaxyButton
                  href="/unity"
                  variant="transparent-light"
                  size="md"
                >
                  Download Unity App
                </GalaxyButton>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white p-3">
                <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/who-we-are-boardroom.jpg"
                    alt="Peers Global unified ecosystem initiatives"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-5 right-5">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 backdrop-blur-md text-[11px] font-mono font-bold uppercase tracking-wider">
                      6 Unified Initiatives
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-sky-200 border border-white/20">
                      Unified Movement
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                      &ldquo;Create value. Connect people. Recognise contribution. Build impact.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: THE PEERS GLOBAL ECOSYSTEM (6 INITIATIVES CARDS) ───── */}
      <section id="ecosystem" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE 6 PLATFORMS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              THE PEERS GLOBAL ECOSYSTEM
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              Six initiatives. Different expressions. One larger idea: Create value. Connect people. Recognise contribution. Build impact.
            </p>
          </div>

          <div className="space-y-8">
            {INITIATIVES_DATA.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="p-8 sm:p-10 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-8"
                >
                  {/* Left content */}
                  <div className="space-y-4 max-w-3xl">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-[#0062D2]">
                        {item.id}
                      </span>
                      <div className={`p-2 rounded-xl border ${item.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-[#0062D2]">
                          {item.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {item.desc}
                    </p>

                    {/* Structure Tags */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                      {item.structure.map((feat) => (
                        <div
                          key={feat}
                          className="p-2 rounded-xl bg-white border border-slate-200 text-[11px] font-medium text-slate-700 flex items-center gap-1.5"
                        >
                          <Check className="w-3.5 h-3.5 text-[#0062D2] shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs font-serif italic text-slate-800 border-l-2 border-[#0062D2] pl-3 pt-1">
                      {item.philosophy}
                    </p>
                  </div>

                  {/* Right CTA */}
                  <div className="shrink-0 pt-2 lg:pt-0">
                    {item.isExternal ? (
                      <a
                        href={item.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#061836] text-white text-xs font-semibold hover:bg-[#0062D2] transition-all shadow-sm"
                      >
                        <span>{item.ctaText}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        href={item.ctaLink}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0062D2] text-white text-xs font-semibold hover:bg-[#0052B4] transition-all shadow-sm"
                      >
                        <span>{item.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: ONE ECOSYSTEM. MANY EXPRESSIONS. & FROM BUSINESS TO MOVEMENT ─── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Left: ONE ECOSYSTEM. MANY EXPRESSIONS. */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  ONE ECOSYSTEM. MANY EXPRESSIONS.
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    These initiatives are different. They should not be made to look identical. Because each exists for a different reason:
                  </p>
                  <div className="space-y-1.5 pl-3 border-l-2 border-blue-400 text-xs text-slate-800 font-medium">
                    <p>• One builds community.</p>
                    <p>• One gives business stories visibility.</p>
                    <p>• One creates a dedicated entrepreneurial space for women.</p>
                    <p>• One brings sustainability into entrepreneurship.</p>
                    <p>• One carries the larger impact ambition.</p>
                    <p>• One creates a place for ecosystem experiences and offerings.</p>
                  </div>
                  <div className="pt-2 text-xs font-bold text-slate-900">
                    Common thread: People matter. Stories matter. Contribution matters. Impact matters.
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-[#0062D2]">
                Distinct purposes • Shared founding core
              </div>
            </div>

            {/* Right: FROM BUSINESS TO MOVEMENT */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  FROM BUSINESS TO MOVEMENT
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <div className="space-y-1 pl-3 border-l-2 border-purple-400 text-xs text-slate-800 font-medium">
                    <p>A business can create value.</p>
                    <p>A community can multiply it.</p>
                    <p>A story can inspire it.</p>
                    <p>Recognition can strengthen it.</p>
                    <p>Collaboration can accelerate it.</p>
                    <p className="font-bold text-purple-900">And impact can carry it forward.</p>
                  </div>
                  <p className="pt-1">
                    That is the larger ecosystem PEERS GLOBAL is building. Not six disconnected initiatives. One ecosystem of possibility.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-purple-700">
                Compounding value at national scale
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 4: DESIGNED FOR DIFFERENT JOURNEYS & THE INVITATION ───── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: DESIGNED FOR DIFFERENT JOURNEYS */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    EVERY BUILDER BELONGS
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  DESIGNED FOR DIFFERENT JOURNEYS
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                <p className="text-slate-600 font-light">You may come here because you are:</p>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">• Building a business.</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">• Looking for your people.</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">• Looking for recognition.</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">• Building something for women entrepreneurs.</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">• Working toward a more sustainable future.</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">• Looking for ways to create social impact.</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">• Looking for an ecosystem that helps your contribution travel further.</div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-blue-950 font-semibold leading-relaxed">
                Wherever your journey begins, there may be a place for you somewhere within this ecosystem.
              </div>
            </div>

            {/* Right: THE INVITATION */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#040E24] via-[#061836] to-[#0A2558] text-white shadow-xl space-y-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/20">
                  <Compass className="w-5 h-5" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                  THE INVITATION
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  You do not have to enter everything. Start with what speaks to the entrepreneur you are today:
                </p>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/20 space-y-1.5 text-xs text-white">
                  <p>• Explore.</p>
                  <p>• Understand.</p>
                  <p>• Meet the people.</p>
                  <p>• Discover the work.</p>
                  <p className="text-sky-200 font-bold">• And decide where you can contribute.</p>
                </div>

                <p className="text-xs font-serif italic text-slate-300 pt-1">
                  Because an ecosystem becomes meaningful when you can see your place in it.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 5: CLOSING ROYAL HERO BANNER (YOU WERE NEVER MEANT TO BUILD ALONE) ── */}
      <section className="relative py-20 sm:py-28 bg-[#0062D2] text-white overflow-hidden">
        {/* Geometric Art */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-35 overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 600 600"
            fill="none"
            className="w-full h-full text-white/30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="300" cy="300" r="230" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="300" cy="300" r="170" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <circle cx="300" cy="300" r="110" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="120" y1="180" x2="480" y2="420" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="300" cy="300" r="6" fill="#7DD3FC" />
            <circle cx="300" cy="300" r="15" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-200">
                — EXPLORE THE ECOSYSTEM —
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                YOU WERE NEVER MEANT TO BUILD ALONE.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-white/90 leading-relaxed font-light max-w-2xl">
                <p>
                  Connect across our six platforms and discover where your contribution can create the greatest impact.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-sky-100 font-medium">
                  <Link href="/circles" className="hover:underline">Explore PEERS GLOBAL →</Link>
                  <a href="https://vyapaarjagat.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Explore VyapaarJagat →</a>
                  <Link href="/circles" className="hover:underline">Explore FEMPRENEUR →</Link>
                  <Link href="/circles" className="hover:underline">Explore GREENPRENEUR →</Link>
                  <Link href="/1-million-mission" className="hover:underline">Explore 1MEIF →</Link>
                  <Link href="/marketplace" className="hover:underline">Explore PEERS Store →</Link>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <GalaxyButton
                  href="/circles"
                  variant="primary"
                  size="md"
                >
                  Explore PEERS GLOBAL
                </GalaxyButton>

                <GalaxyButton
                  href="/unity"
                  variant="transparent"
                  size="md"
                >
                  Download Unity App
                </GalaxyButton>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right select-none pointer-events-none">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Community.
                <br />
                Stories.
                <br />
                Purpose.
                <br />
                Impact.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

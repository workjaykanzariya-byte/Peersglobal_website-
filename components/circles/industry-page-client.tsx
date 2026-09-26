'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import {
  Factory,
  Building2,
  Laptop,
  ShieldPlus,
  GraduationCap,
  Palette,
  HeartHandshake,
  Layers,
  Leaf,
  ArrowRight,
  ChevronRight,
  Users,
  MapPin,
  CheckCircle2,
  Lightbulb,
  Lock,
  Star,
  TrendingUp,
  MessageCircle,
  Globe,
  Target,
} from 'lucide-react'

// ─── Nine Industry Circle Categories ────────────────────────────────────────
const INDUSTRY_CIRCLES = [
  {
    slug: 'manufacturing-engineering',
    name: 'Manufacturing & Engineering',
    shortName: 'Manufacturing',
    icon: Factory,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    accent: '#EA580C',
    description:
      'Industrial promoters, OEM suppliers, plant owners, machinery manufacturers, and engineering firm founders.',
    who: 'Plant owners, OEM suppliers, industrial promoters, engineering firm founders.',
    why: 'Your pricing, your margins, your compliance cycles — the room already understands them. No translation needed.',
    tags: ['OEM', 'Plant owners', 'Engineering firms', 'Industrial'],
  },
  {
    slug: 'real-estate-construction',
    name: 'Real Estate, Construction & Infrastructure',
    shortName: 'Real Estate',
    icon: Building2,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    accent: '#0284C7',
    description:
      'Real estate developers, civil contractors, structural engineers, architects, and building material suppliers.',
    who: 'Developers, civil contractors, architects, structural engineers, material suppliers.',
    why: 'Project cycles, land acquisition, contractor networks — your peers carry identical pressures and solve them together.',
    tags: ['Developers', 'Contractors', 'Architects', 'Infrastructure'],
  },
  {
    slug: 'technology-it-digital',
    name: 'Technology, IT & Digital Services',
    shortName: 'Technology',
    icon: Laptop,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    accent: '#7C3AED',
    description:
      'SaaS founders, IT export company owners, AI developers, cybersecurity heads, and digital agencies.',
    who: 'SaaS founders, IT exporters, AI builders, cybersecurity heads, digital agencies.',
    why: 'Talent acquisition, product-market fit, global client acquisition — conversations that require no preamble.',
    tags: ['SaaS', 'AI', 'IT Export', 'Cybersecurity'],
  },
  {
    slug: 'healthcare-wellness-life-sciences',
    name: 'Healthcare, Wellness & Life Sciences',
    shortName: 'Healthcare',
    icon: ShieldPlus,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    accent: '#059669',
    description:
      'Hospital owners, pharma exporters, medical device makers, diagnostic founders, and wellness promoters.',
    who: 'Hospital owners, pharma exporters, medical device makers, diagnostics founders.',
    why: 'Regulatory hurdles, distribution networks, patient trust — shared vocabulary, faster solutions.',
    tags: ['Hospitals', 'Pharma', 'Medical Devices', 'Diagnostics'],
  },
  {
    slug: 'education-training-skill-development',
    name: 'Education, Training & Skill Development',
    shortName: 'Education',
    icon: GraduationCap,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    accent: '#D97706',
    description:
      'EdTech founders, private institute owners, skill development promoters, and corporate trainers.',
    who: 'EdTech founders, institute owners, skill development leaders, corporate trainers.',
    why: 'Curriculum gaps, accreditation hurdles, student acquisition — a room that runs on outcomes.',
    tags: ['EdTech', 'Institutes', 'Skill Dev', 'Trainers'],
  },
  {
    slug: 'lifestyle-fashion-events',
    name: 'Events, Fashion, Apparel & Lifestyle',
    shortName: 'Lifestyle',
    icon: Palette,
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    accent: '#DB2777',
    description:
      'Textile manufacturers, fashion brand owners, event management promoters, and lifestyle retail heads.',
    who: 'Textile manufacturers, fashion brand owners, event management founders, lifestyle retail heads.',
    why: 'Trend cycles, vendor trust, retail expansion — peers who understand seasonality and speed.',
    tags: ['Fashion', 'Textiles', 'Events', 'Lifestyle Retail'],
  },
  {
    slug: 'csr-ngos-impact',
    name: 'CSR, NGOs, Impact & Nation-Building',
    shortName: 'CSR & Impact',
    icon: HeartHandshake,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    accent: '#E11D48',
    description:
      'CSR directors, non-profit founders, social impact pioneers, and public sector development partners.',
    who: 'CSR directors, NGO founders, social impact leaders, government development partners.',
    why: 'Grant sourcing, impact measurement, policy linkage — a room built around purpose, not just profit.',
    tags: ['CSR', 'NGOs', 'Social Impact', 'Nation Building'],
  },
  {
    slug: 'franchise-licensing',
    name: 'Franchise & Licensing',
    shortName: 'Franchise',
    icon: Layers,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    accent: '#4F46E5',
    description:
      'Franchise brand owners, master licensees, multi-unit retail operators, and brand licensing strategists.',
    who: 'Franchise brand owners, master licensees, multi-unit operators, licensing strategists.',
    why: 'Territory conflicts, franchise agreements, unit economics — dealt with by people who have already solved them.',
    tags: ['Franchise', 'Licensing', 'Multi-unit', 'Retail'],
  },
  {
    slug: 'sustainable-esg',
    name: 'Sustainable & ESG Business',
    shortName: 'ESG & Green',
    icon: Leaf,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    accent: '#0D9488',
    description:
      'Renewable energy founders, EV ecosystem leaders, waste management promoters, and ESG compliance heads.',
    who: 'Renewable energy founders, EV ecosystem leaders, waste management heads, ESG compliance officers.',
    why: "Carbon credit markets, ESG reporting mandates, green financing — a forward room solving tomorrow's problems.",
    tags: ['Renewable', 'EV', 'ESG', 'Sustainability'],
  },
]

// ─── Why Sector Matters ───────────────────────────────────────────────────
const SECTOR_REASONS = [
  {
    icon: MessageCircle,
    color: 'text-[#0062D2]',
    bg: 'bg-[#EFF6FF]',
    title: 'You can speak the full sentence.',
    body: "In a mixed room, you spend half your time explaining context. In a sector room, you don't. You say what matters and the room responds to it.",
  },
  {
    icon: TrendingUp,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    title: 'Shared problems get real answers.',
    body: 'When five people in the room are fighting the same regulatory change, you solve it together — not alone. Depth of industry creates depth of solution.',
  },
  {
    icon: Globe,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    title: 'Your credibility precedes you.',
    body: 'When your Circle peers introduce you to their network, your sector expertise introduces itself. No pitch needed.',
  },
]

const WHAT_HAPPENS = [
  'Sector-specific business presentations',
  'Industry regulation and policy conversations',
  'Warm introductions within and across sectors',
  'Collaborative problem-solving on shared challenges',
  'Strategic roundtables on sector growth',
  'Access to the global Peers network through Unity',
]

export function IndustryPageClient() {
  const [activeCircle, setActiveCircle] = useState<string | null>(null)

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans">
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <Link href="/circles" className="hover:text-slate-900 transition-colors">Circles</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-[#0062D2] font-semibold">Industry Circles</span>
          </div>

          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[500px] lg:min-h-[560px] flex items-center">
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
            >
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/circles-hero-new.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover object-center"
              />
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  Different Industries
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Same Purpose
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Greater Impact
                </p>
              </div>

              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    9 SECTORS • CATEGORY EXCLUSIVE
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    YOUR INDUSTRY. YOUR ROOM.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl lg:max-w-2xl flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    INDUSTRY CIRCLES
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  Industry Circles
                </h1>

                <p className="text-xl sm:text-2xl text-slate-800 font-bold leading-snug mb-3">
                  A room where nobody needs your business explained to them.
                </p>

                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8 max-w-lg">
                  Your industry shapes your challenges, your opportunities, your language—and often the kind of experience that can help you move forward. An Industry Circle brings entrepreneurs together around that shared context.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Link
                    href="/circles/find"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>Find a Circle Near You</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/circles"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white/90 backdrop-blur-sm text-slate-800 px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105 shadow-2xs"
                  >
                    Visit as a Guest
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg">
                  <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                    <div className="size-9 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                      <Factory className="size-4" />
                    </div>
                    <div>
                      <div className="font-bold text-base sm:text-lg text-[#0F172A] leading-none">9</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-1">Industry circles</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                    <div className="size-9 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                      <Lock className="size-4" />
                    </div>
                    <div>
                      <div className="font-bold text-base sm:text-lg text-[#0F172A] leading-none">1</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-1">Per category</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                    <div className="size-9 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                      <MapPin className="size-4" />
                    </div>
                    <div>
                      <div className="font-bold text-base sm:text-lg text-[#0F172A] leading-none">45+</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-1">Cities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-3">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— WHY SECTOR MATTERS —</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                Why sector matters
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                Every entrepreneur is different. But entrepreneurs working within the same sector often understand something immediately: the context behind the problem.
              </p>
              <p className="text-base sm:text-lg text-slate-800 font-semibold leading-relaxed mb-4">
                The market may be different. The business may be different. The scale may be different. But the questions can sound remarkably familiar.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                What is changing in your industry? Where are customers moving? What challenges are becoming common? Which opportunities are emerging? What has worked for someone who has already faced something similar? An Industry Circle creates a room where these conversations can happen with greater relevance.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-[#F0F7FF] border border-[#DCEBFE] text-slate-900 shadow-sm overflow-hidden">
                <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-36 h-36 rounded-full border border-dashed border-[#0062D2]/30 pointer-events-none" />
                <div className="absolute top-6 right-6 size-2.5 rounded-full bg-[#0062D2]/40 pointer-events-none" />
                <div className="absolute bottom-6 left-6 size-2 rounded-full bg-[#0062D2]/40 pointer-events-none" />
                <div className="relative z-10">
                  <span className="font-serif text-5xl sm:text-6xl text-[#0062D2] leading-none block mb-2">“</span>
                  <p className="font-serif text-xl sm:text-2xl text-[#0F172A] font-bold leading-snug mb-6">
                    You spend less time explaining what your business is—and more time discussing what you can do next.
                  </p>
                  <Link href="/the-idea" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#0052B4] tracking-wider uppercase">
                    <span>THE PEERS IDEA</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— NINE INDUSTRY CIRCLES —</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
                PEERS GLOBAL brings entrepreneurs together through nine Industry Circles.
              </h2>
            </div>
            <div className="text-right">
              <div className="text-[#0062D2] text-2xl sm:text-3xl font-normal leading-tight select-none pointer-events-none" style={{ fontFamily: 'var(--font-script)' }}>
                Shared context.<br />
                Deeper relationships.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              ['01 — MANUFACTURING & ENGINEERING', 'Build with people who understand the world you operate in. Manufacturing and engineering businesses often involve complex operations, specialised capabilities and long-term relationships. This Circle creates a space for entrepreneurs who understand that world to exchange experience, explore possibilities and discover where one another’s capabilities may connect. The conversation can move beyond introductions—to understanding.'],
              ['02 — REAL ESTATE, CONSTRUCTION & INFRASTRUCTURE', 'Where projects, relationships and experience meet. Real estate, construction and infrastructure are relationship-driven businesses with their own challenges, cycles and opportunities. An Industry Circle brings relevant entrepreneurs into the same room—creating opportunities to share experience, understand changing realities and discover connections that may support future work.'],
              ['03 — TECHNOLOGY, IT & DIGITAL SERVICES', 'Build the future with people building it too. Technology businesses move quickly. New platforms emerge. Customer expectations change. Business models evolve. An Industry Circle creates a space where entrepreneurs working in technology, IT and digital services can exchange perspectives, understand emerging opportunities and learn from people navigating similar environments.'],
              ['04 — HEALTHCARE, WELLNESS & LIFE SCIENCES', 'Conversations shaped by an industry where trust matters. Healthcare, wellness and life sciences bring together businesses serving deeply human needs. The sector carries its own language, challenges, responsibilities and opportunities. This Circle creates a relevant environment for entrepreneurs to share experience, build relationships and explore meaningful possibilities together.'],
              ['05 — EDUCATION, TRAINING & SKILL DEVELOPMENT', 'Learn from people helping others learn. Education and skill development are ultimately about creating capability—in people, organisations and society. Entrepreneurs in this space face distinctive questions around learners, institutions, technology, changing skills and evolving expectations.'],
              ['06 — EVENTS, FASHION, APPAREL & LIFESTYLE', 'Where creativity meets business. Events, fashion, apparel and lifestyle businesses combine creativity with execution, relationships and constantly changing customer expectations. This Circle brings relevant entrepreneurs together to share experience, explore collaborations and discover opportunities across complementary capabilities.'],
              ['07 — CSR, NGO, IMPACT & NATION-BUILDING', 'Business can create value beyond the balance sheet. Some entrepreneurs build businesses. Some build organisations around social impact. Some work to create change in communities and contribute to nation-building. This Circle creates space for people working across these dimensions to exchange experience, build relationships and explore possibilities for meaningful contribution.'],
              ['08 — FRANCHISE & LICENSING', 'Grow through models, markets and relationships. Franchise and licensing businesses operate through models that can extend beyond a single location or market. That creates distinctive opportunities—and distinctive challenges. This Circle creates a relevant environment for entrepreneurs to share what they are learning, understand different perspectives and discover where relationships can support expansion and collaboration.'],
              ['09 — SUSTAINABLE & ESG BUSINESS', 'Build businesses that think beyond today. Sustainable and ESG-focused businesses are part of a changing conversation about how organisations create value and operate responsibly. This Circle brings together entrepreneurs who share that broad direction, creating a space to exchange perspectives, experiences and possibilities.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xs">
                <p className="text-base font-bold text-[#0F172A]">{title}</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-left">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— WHAT AN INDUSTRY CIRCLE GIVES YOU —</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-10">
            What an Industry Circle gives you
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              ['Relevant Conversations', 'Talk about challenges with people who understand the environment in which they occur.'],
              ['Experience You Can Use', 'Learn from entrepreneurs who have already encountered situations that may be familiar—or completely new—to you.'],
              ['Meaningful Introductions', 'Meet people whose capabilities, relationships or experience may become relevant to your journey.'],
              ['Potential Collaboration', 'Explore the possibility of referrals, partnerships, joint ventures, knowledge sharing and other forms of collaboration.'],
              ['A Place to Ask', 'Sometimes the most valuable question is simply: “Has anyone here dealt with this before?”'],
              ['A Place to Give', 'Your own experience may be exactly what another entrepreneur needs. That is the deeper purpose of an Industry Circle.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-6 shadow-2xs">
                <h3 className="text-base font-bold text-[#0F172A]">{title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— ONE SEAT PER CATEGORY —</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                One seat per category
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                The principle is simple: your expertise should have a place in the room. It reduces unnecessary direct competition within the Circle and makes it easier for entrepreneurs to understand who brings what capability.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                But the real value goes beyond exclusivity. It creates clarity. Who can I learn from? Who can I introduce? Who can I collaborate with? Who might need what I know?
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xs">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2] mb-4">Why it matters</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-slate-700"><CheckCircle2 className="size-4 text-[#0062D2] mt-0.5" />Your category is respected in the room.</li>
                  <li className="flex items-start gap-3 text-sm text-slate-700"><CheckCircle2 className="size-4 text-[#0062D2] mt-0.5" />Your expertise is easier to remember.</li>
                  <li className="flex items-start gap-3 text-sm text-slate-700"><CheckCircle2 className="size-4 text-[#0062D2] mt-0.5" />Collaboration becomes intentional rather than accidental.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-left">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— THE INDUSTRY CIRCLE GRID —</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-8">
            Find the environment closest to the business you are building.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {[
              ['Manufacturing & Engineering', 'Products, processes, engineering and industrial businesses'],
              ['Real Estate, Construction & Infrastructure', 'Property, projects, construction and infrastructure'],
              ['Technology, IT & Digital Services', 'Technology, IT, software and digital businesses'],
              ['Healthcare, Wellness & Life Sciences', 'Healthcare, wellness and life-science businesses'],
              ['Education, Training & Skill Development', 'Education, learning, training and skill development'],
              ['Events, Fashion, Apparel & Lifestyle', 'Creative, lifestyle, apparel and experience-led businesses'],
              ['CSR, NGO, Impact & Nation-Building', 'Social impact, community and nation-building initiatives'],
              ['Franchise & Licensing', 'Franchise, licensing and scalable business models'],
              ['Sustainable & ESG Business', 'Sustainability and ESG-oriented businesses'],
            ].map(([title, subtitle]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-5 shadow-2xs">
                <p className="text-sm font-bold text-[#0F172A]">{title}</p>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-left">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— WHO JOINS AN INDUSTRY CIRCLE —</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-8">
            Who joins an Industry Circle?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              'Building your first venture',
              'Growing an established business',
              'Leading a family enterprise',
              'Expanding into new markets',
              'Looking for relevant business relationships',
              'Seeking experience from people who have been there before',
              'Able to contribute expertise to other entrepreneurs',
              'Exploring collaboration beyond your immediate network',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                <CheckCircle2 className="mt-0.5 size-4 text-[#0062D2] shrink-0" />
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-left">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— WHAT HAPPENS INSIDE —</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-10">
            What happens inside?
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            Your industry is only the starting point. Once relationships develop, conversations can move naturally into the wider PEERS GLOBAL experience.
          </p>
          <div className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-8">
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-800">
              {['Learning', 'Sharing', 'Relationships', 'Collaboration', 'Contribution', 'Impact'].map((item, index, arr) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="rounded-full bg-[#EFF6FF] px-3 py-1.5 text-[#0062D2]">{item}</span>
                  {index < arr.length - 1 && <ArrowRight className="size-4 text-slate-400" />}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-bold text-[#0F172A]">A manufacturing entrepreneur</p>
              <p className="mt-2 text-xs text-slate-600">may discover a technology capability.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-bold text-[#0F172A]">A technology entrepreneur</p>
              <p className="mt-2 text-xs text-slate-600">may find an implementation partner.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-bold text-[#0F172A]">A healthcare entrepreneur</p>
              <p className="mt-2 text-xs text-slate-600">may discover a relevant service provider.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-bold text-[#0F172A]">A family business</p>
              <p className="mt-2 text-xs text-slate-600">may find a mentor.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— STARTING POINT NOT LIMIT —</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                Your industry is your starting point—not your limit.
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                The reason for an Industry Circle is not to keep you inside your industry. It is to give you a place where your professional identity is understood from the beginning.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                From there, relationships can extend across: Industry → Purpose → City → Region → Country → Global. Because business rarely grows inside one box.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#061836] p-8 text-white shadow-xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300 mb-4">The next opportunity</p>
                <p className="font-serif text-2xl leading-snug text-white">
                  The right relationship may come from your industry. The next opportunity may come from somewhere completely different.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-left">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— IF YOUR INDUSTRY HAS NO CIRCLE —</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
            If your industry has no Circle
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            Not every entrepreneurial journey fits neatly into a category. And your business may sit between sectors—or belong to an emerging space. That does not mean you do not belong.
          </p>
          <div className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-7">
            <p className="text-sm text-slate-700 leading-relaxed">
              Tell us about what you build, where you operate, what industry you belong to and what kind of entrepreneurs you would like to meet. Your need may help us understand where a future Circle could emerge. Sometimes the Circle you are looking for begins because you were willing to ask for it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-left">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— FREQUENTLY ASKED QUESTIONS —</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              ['Why should I choose an Industry Circle?', 'Because shared industry context can make conversations more relevant from the beginning. You are surrounded by entrepreneurs who have a better chance of understanding the environment in which your business operates.'],
              ['Is an Industry Circle only for referrals?', 'No. Referrals may become one outcome of relationships, but the Circle is designed around a broader culture of Learning, Sharing and Relationships.'],
              ['Can I talk openly about my business?', 'The Circle is designed to create a trusted environment for meaningful conversations. Confidentiality and respect are fundamental to the community culture.'],
              ['Is there a competitor in my Circle?', 'The one-seat-per-category principle is designed to reduce unnecessary direct competition within the Circle and give each category a clear place.'],
              ['Can I belong to a Purpose Circle as well?', 'An entrepreneur can be more than one thing. Your Industry Circle reflects what you do. A Purpose Circle can reflect what you are trying to achieve.'],
              ['What if my business belongs to more than one industry?', 'Begin with the context that best describes your primary business identity. The important thing is not finding a perfect label—it is finding the environment where relevant relationships can begin.'],
              ['What if there is no Circle for my industry?', 'Tell us what you build, where you are based and the kind of entrepreneurs you would like to meet. Your requirement can help identify the possibility of a future Circle.'],
            ].map(([question, answer]) => (
              <div key={question} className="rounded-2xl border border-slate-200 bg-[#FAFBFD] p-5">
                <p className="text-sm font-bold text-[#0F172A]">{question}</p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCtaSection
        eyebrow="FIND YOUR CIRCLE"
        title="You know your industry. You know the journey you are building."
        subtitle="Discover the people who may understand it—and the people you may be able to help along the way."
        description="Peers are Partners in Business and Friends in Life."
        primaryButtonText="FIND YOUR CIRCLE"
        primaryButtonHref="/circles/find"
        secondaryButtonText="DOWNLOAD THE UNITY APP"
        secondaryButtonHref="/unity"
      />
    </div>
  )
}

'use client'

import React from 'react'
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
  CheckCircle2,
  Lock,
  Globe,
  HelpCircle,
  Users,
  Compass,
} from 'lucide-react'

// ─── Nine Industry Circle Definitions with Full Narrative ───────────────────
const NINE_INDUSTRY_CIRCLES = [
  {
    num: '01',
    name: 'MANUFACTURING & ENGINEERING',
    tagline: 'Build with people who understand the world you operate in.',
    description:
      'Manufacturing and engineering businesses often involve complex operations, specialised capabilities and long-term relationships. This Circle creates a space for entrepreneurs who understand that world to exchange experience, explore possibilities and discover where one another’s capabilities may connect. The conversation can move beyond introductions—to understanding.',
    icon: Factory,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    context: 'Products, processes, engineering and industrial businesses',
    slug: 'manufacturing-engineering',
  },
  {
    num: '02',
    name: 'REAL ESTATE, CONSTRUCTION & INFRASTRUCTURE',
    tagline: 'Where projects, relationships and experience meet.',
    description:
      'Real estate, construction and infrastructure are relationship-driven businesses with their own challenges, cycles and opportunities. An Industry Circle brings relevant entrepreneurs into the same room—creating opportunities to share experience, understand changing realities and discover connections that may support future work. Because in a relationship-led industry, the right relationship can begin with the right conversation.',
    icon: Building2,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    context: 'Property, projects, construction and infrastructure',
    slug: 'real-estate-construction',
  },
  {
    num: '03',
    name: 'TECHNOLOGY, IT & DIGITAL SERVICES',
    tagline: 'Build the future with people building it too.',
    description:
      'Technology businesses move quickly. New platforms emerge. Customer expectations change. Business models evolve. An Industry Circle creates a space where entrepreneurs working in technology, IT and digital services can exchange perspectives, understand emerging opportunities and learn from people navigating similar environments. You do not have to explain why technology changes fast.',
    icon: Laptop,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    context: 'Technology, IT, software and digital businesses',
    slug: 'technology-it-digital',
  },
  {
    num: '04',
    name: 'HEALTHCARE, WELLNESS & LIFE SCIENCES',
    tagline: 'Conversations shaped by an industry where trust matters.',
    description:
      'Healthcare, wellness and life sciences bring together businesses serving deeply human needs. The sector carries its own language, challenges, responsibilities and opportunities. This Circle creates a relevant environment for entrepreneurs to share experience, build relationships and explore meaningful possibilities together. Shared context can create a deeper starting point for trust.',
    icon: ShieldPlus,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    context: 'Healthcare, wellness and life-science businesses',
    slug: 'healthcare-wellness-life-sciences',
  },
  {
    num: '05',
    name: 'EDUCATION, TRAINING & SKILL DEVELOPMENT',
    tagline: 'Learn from people helping others learn.',
    description:
      'Education and skill development are ultimately about creating capability—in people, organisations and society. Entrepreneurs in this space face distinctive questions around learners, institutions, technology, changing skills and evolving expectations. The Circle creates a place to exchange experience, ideas and opportunities with people who understand that journey. Sometimes the person who understands your challenge is already building alongside you.',
    icon: GraduationCap,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    context: 'Education, learning, training and skill development',
    slug: 'education-training-skill-development',
  },
  {
    num: '06',
    name: 'EVENTS, FASHION, APPAREL & LIFESTYLE',
    tagline: 'Where creativity meets business.',
    description:
      'Events, fashion, apparel and lifestyle businesses combine creativity with execution, relationships and constantly changing customer expectations. This Circle brings relevant entrepreneurs together to share experience, explore collaborations and discover opportunities across complementary capabilities. Different businesses can create something together when the right people meet.',
    icon: Palette,
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
    context: 'Creative, lifestyle, apparel and experience-led businesses',
    slug: 'events-fashion-lifestyle',
  },
  {
    num: '07',
    name: 'CSR, NGO, IMPACT & NATION-BUILDING',
    tagline: 'Business can create value beyond the balance sheet.',
    description:
      'Some entrepreneurs build businesses. Some build organisations around social impact. Some work to create change in communities and contribute to nation-building. This Circle creates space for people working across these dimensions to exchange experience, build relationships and explore possibilities for meaningful contribution. Because impact can grow when experience, intention and action come together.',
    icon: HeartHandshake,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    context: 'Social impact, community and nation-building initiatives',
    slug: 'csr-ngo-impact-nation-building',
  },
  {
    num: '08',
    name: 'FRANCHISE & LICENSING',
    tagline: 'Grow through models, markets and relationships.',
    description:
      'Franchise and licensing businesses operate through models that can extend beyond a single location or market. That creates distinctive opportunities—and distinctive challenges. This Circle creates a relevant environment for entrepreneurs to share what they are learning, understand different perspectives and discover where relationships can support expansion and collaboration. Growth becomes more interesting when experience travels with it.',
    icon: Layers,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    context: 'Franchise, licensing and scalable business models',
    slug: 'franchise-licensing',
  },
  {
    num: '09',
    name: 'SUSTAINABLE & ESG BUSINESS',
    tagline: 'Build businesses that think beyond today.',
    description:
      'Sustainable and ESG-focused businesses are part of a changing conversation about how organisations create value and operate responsibly. This Circle brings together entrepreneurs who share that broad direction, creating a space to exchange perspectives, experiences and possibilities. Because the future is easier to build when people building toward it can learn from one another.',
    icon: Leaf,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    context: 'Sustainability and ESG-oriented businesses',
    slug: 'sustainable-esg-business',
  },
]

// ─── What an Industry Circle Gives You ──────────────────────────────────────
const WHAT_IT_GIVES_YOU = [
  {
    title: 'Relevant Conversations',
    body: 'Talk about challenges with people who understand the environment in which they occur.',
  },
  {
    title: 'Experience You Can Use',
    body: 'Learn from entrepreneurs who have already encountered situations that may be familiar—or completely new—to you.',
  },
  {
    title: 'Meaningful Introductions',
    body: 'Meet people whose capabilities, relationships or experience may become relevant to your journey.',
  },
  {
    title: 'Potential Collaboration',
    body: 'Explore the possibility of referrals, partnerships, joint ventures, knowledge sharing and other forms of collaboration.',
  },
  {
    title: 'A Place to Ask',
    body: 'Sometimes the most valuable question is simply: “Has anyone here dealt with this before?”',
  },
  {
    title: 'A Place to Give',
    body: 'Your own experience may be exactly what another entrepreneur needs. That is the deeper purpose of an Industry Circle.',
  },
]

// ─── Who Joins Points ───────────────────────────────────────────────────────
const WHO_JOINS_LIST = [
  'Building your first venture',
  'Growing an established business',
  'Leading a family enterprise',
  'Expanding into new markets',
  'Looking for relevant business relationships',
  'Seeking experience from people who have been there before',
  'Able to contribute expertise to other entrepreneurs',
  'Exploring collaboration beyond your immediate network',
]

// ─── FAQs ───────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'Why should I choose an Industry Circle?',
    a: 'Because shared industry context can make conversations more relevant from the beginning. You are surrounded by entrepreneurs who have a better chance of understanding the environment in which your business operates.',
  },
  {
    q: 'Is an Industry Circle only for referrals?',
    a: 'No. Referrals may become one outcome of relationships, but the Circle is designed around a broader culture of Learning, Sharing and Relationships.',
  },
  {
    q: 'Can I talk openly about my business?',
    a: 'The Circle is designed to create a trusted environment for meaningful conversations. Confidentiality and respect are fundamental to the community culture.',
  },
  {
    q: 'Is there a competitor in my Circle?',
    a: 'The one-seat-per-category principle is designed to reduce unnecessary direct competition within the Circle and give each category a clear place.',
  },
  {
    q: 'Can I belong to a Purpose Circle as well?',
    a: 'An entrepreneur can be more than one thing. Your Industry Circle reflects what you do. A Purpose Circle can reflect what you are trying to achieve.',
  },
  {
    q: 'What if my business belongs to more than one industry?',
    a: 'Begin with the context that best describes your primary business identity. The important thing is not finding a perfect label—it is finding the environment where relevant relationships can begin.',
  },
  {
    q: 'What if there is no Circle for my industry?',
    a: 'Tell us what you build, where you are based and the kind of entrepreneurs you would like to meet. Your requirement can help identify the possibility of a future Circle.',
  },
]

export function IndustryPageClient() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans">
      
      {/* =========================================================================
          SECTION 1: HERO
          ========================================================================= */}
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
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script, cursive)' }}>
                  Different Industries
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script, cursive)' }}>
                  Same Purpose
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script, cursive)' }}>
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
                    BROWSE BY INDUSTRY
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  Industry Circles
                </h1>

                <p className="text-xl sm:text-2xl text-slate-800 font-bold leading-snug mb-3">
                  A room where nobody needs your business explained to them.
                </p>

                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8 max-w-lg">
                  Your industry shapes your challenges, your opportunities, your language—and often the kind of experience that can help you move forward. An Industry Circle brings entrepreneurs together around that shared context. Because sometimes the most valuable conversation begins when you do not have to explain the basics.
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
                    Explore All Circles
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
                      <Users className="size-4" />
                    </div>
                    <div>
                      <div className="font-bold text-base sm:text-lg text-[#0F172A] leading-none">20–40</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-1">Curated Peers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHY SECTOR MATTERS
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-3">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— WHY SECTOR MATTERS —</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
                Why sector matters
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Every entrepreneur is different. But entrepreneurs working within the same sector often understand something immediately: <strong className="text-slate-900">the context behind the problem</strong>.
              </p>
              <p className="text-base sm:text-lg text-slate-800 font-semibold leading-relaxed">
                The market may be different. The business may be different. The scale may be different. But the questions can sound remarkably familiar:
              </p>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-slate-700 py-1">
                <div>• What is changing in your industry?</div>
                <div>• Where are customers moving?</div>
                <div>• What challenges are becoming common?</div>
                <div>• Which opportunities are emerging?</div>
                <div className="sm:col-span-2 font-medium text-slate-900">• What has worked for someone who has already faced something similar?</div>
              </div>
              <p className="text-base text-slate-600 leading-relaxed pt-2">
                An Industry Circle creates a room where these conversations can happen with greater relevance.
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

      {/* =========================================================================
          SECTION 3: NINE INDUSTRY CIRCLES (DETAILED DESCRIPTIONS)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— NINE INDUSTRY CIRCLES —</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
                PEERS GLOBAL brings entrepreneurs together through nine Industry Circles.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Each Circle creates an environment where sector understanding becomes the starting point for deeper relationships, meaningful conversations and potential collaboration.
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="text-[#0062D2] text-2xl sm:text-3xl font-normal leading-tight select-none pointer-events-none" style={{ fontFamily: 'var(--font-script, cursive)' }}>
                Shared context.<br />
                Deeper relationships.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {NINE_INDUSTRY_CIRCLES.map((circle) => {
              const IconComp = circle.icon
              return (
                <div
                  key={circle.slug}
                  className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#0062D2] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                        {circle.num}
                      </span>
                      <div className={`size-11 rounded-2xl ${circle.bg} ${circle.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComp className="size-5" />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                      {circle.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-[#0062D2]">
                      {circle.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {circle.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-medium truncate max-w-[170px]">
                      {circle.context}
                    </span>
                    <Link
                      href={`/circles/find?type=industry&circle=${circle.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:text-[#0052B4]"
                    >
                      <span>Find Circle</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHAT AN INDUSTRY CIRCLE GIVES YOU
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left space-y-3">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— WHAT AN INDUSTRY CIRCLE GIVES YOU —</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
              An Industry Circle is not simply a list of entrepreneurs from the same sector. It is a relationship environment built around shared context.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_IT_GIVES_YOU.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-7 shadow-2xs space-y-2">
                <h3 className="text-base font-bold text-[#0F172A]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-[#061836] text-white space-y-2">
            <h4 className="font-serif text-xl sm:text-2xl text-sky-300">That is the deeper purpose of an Industry Circle.</h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              You do not enter only to receive value. You enter with the possibility of creating value for someone else.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ONE SEAT PER CATEGORY
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-left">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— ONE SEAT PER CATEGORY —</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
                One seat per category
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                A Circle becomes more useful when every entrepreneur has room to contribute. That is why PEERS GLOBAL follows a one-seat-per-category approach within the Circle.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                The principle is simple: <strong className="text-slate-900">Your expertise should have a place in the room.</strong> It reduces unnecessary direct competition within the Circle and makes it easier for entrepreneurs to understand who brings what capability.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                But the real value goes beyond exclusivity. It creates clarity: <em>Who can I learn from? Who can I introduce? Who can I collaborate with? Who might need what I know?</em> Every Peer has a distinct place to contribute.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">Clarity &amp; Value</p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle2 className="size-4 text-[#0062D2] mt-0.5 shrink-0" />Your category is respected and protected in the room.</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="size-4 text-[#0062D2] mt-0.5 shrink-0" />Your expertise becomes memorable and identifiable.</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="size-4 text-[#0062D2] mt-0.5 shrink-0" />Collaboration becomes intentional rather than competitive.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: THE INDUSTRY CIRCLE GRID TABLE
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-left space-y-3">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— THE INDUSTRY CIRCLE GRID —</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
              Find the environment closest to the business you are building.
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-[#FAFBFD] shadow-xs">
            <table className="min-w-full text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-slate-200 text-slate-900 bg-slate-50 font-bold uppercase tracking-wider text-xs">
                  <th className="py-4 px-6 w-1/2">Industry Circle</th>
                  <th className="py-4 px-6">Shared Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {NINE_INDUSTRY_CIRCLES.map((c) => (
                  <tr key={c.slug} className="hover:bg-white transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      {c.name}
                    </td>
                    <td className="py-4 px-6 text-slate-600 text-xs sm:text-sm">
                      {c.context}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-600 italic">
            Your industry may define where you begin. It does not define how far your relationships can take you.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: WHO JOINS & WHAT HAPPENS INSIDE
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Who Joins */}
          <div className="space-y-8">
            <div className="text-left space-y-3">
              <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— WHO JOINS AN INDUSTRY CIRCLE —</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A]">
                Who joins an Industry Circle?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Industry Circles are for entrepreneurs who want more than simply being in a room with people. They want to know the people in that room.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {WHO_JOINS_LIST.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4.5">
                  <CheckCircle2 className="mt-0.5 size-4 text-[#0062D2] shrink-0" />
                  <p className="text-sm text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600">
              You do not need to arrive with a perfect plan. You need to arrive willing to learn, share, build relationships and contribute. Because a Circle becomes valuable not merely through who joins it—but through how its people show up for one another.
            </p>
          </div>

          {/* What happens inside */}
          <div className="space-y-8 pt-8 border-t border-slate-200">
            <div className="text-left space-y-3">
              <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— WHAT HAPPENS INSIDE —</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-slate-900">
                Your industry is only the starting point.
              </h3>
              <p className="text-slate-700 text-sm sm:text-base">
                Once relationships develop, conversations move naturally into the wider PEERS GLOBAL experience:
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                {['Learning', 'Sharing', 'Relationships', 'Collaboration', 'Contribution', 'Impact'].map((step, idx, arr) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-full bg-[#EFF6FF] px-4 py-2 text-[#0062D2]">{step}</span>
                    {idx < arr.length - 1 && <ArrowRight className="size-4 text-slate-400" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <p className="text-sm font-bold text-[#0F172A]">A manufacturing entrepreneur</p>
                <p className="text-xs text-slate-600 leading-relaxed">may discover a technology capability.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <p className="text-sm font-bold text-[#0F172A]">A technology entrepreneur</p>
                <p className="text-xs text-slate-600 leading-relaxed">may find an implementation partner.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <p className="text-sm font-bold text-[#0F172A]">A healthcare entrepreneur</p>
                <p className="text-xs text-slate-600 leading-relaxed">may discover a relevant supplier.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <p className="text-sm font-bold text-[#0F172A]">A family business</p>
                <p className="text-xs text-slate-600 leading-relaxed">may find a mentor who navigated succession.</p>
              </div>
            </div>
          </div>

          {/* Your industry is your starting point—not your limit */}
          <div className="rounded-3xl border border-slate-800 bg-[#050C1A] p-8 sm:p-12 text-white space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
              STARTING POINT NOT LIMIT
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-white">
              Your industry is your starting point—not your limit.
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              The reason for an Industry Circle is not to keep you inside your industry. It is to give you a place where your professional identity is understood from the beginning. From there, relationships extend across:
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-sky-300 text-xs sm:text-sm font-mono">
              Industry → Purpose → City → Region → Country → Global
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Because business rarely grows inside one box. The right relationship may come from your industry; the next opportunity may come from somewhere completely different.
            </p>
          </div>

          {/* If your industry has no circle */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
              EMERGING SECTORS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900">
              If your industry has no Circle
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Not every entrepreneurial journey fits neatly into a category. And your business may sit between sectors—or belong to an emerging space. That does not mean you do not belong.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Tell us about what you build, where you operate, what industry you belong to and what kind of entrepreneurs you would like to meet. Your requirement helps us understand where a future Circle could emerge: <em>&ldquo;Sometimes the Circle you are looking for begins because you were willing to ask for it.&rdquo;</em>
            </p>
            <Link
              href="/circles/bring-to-my-city"
              className="inline-flex items-center gap-2 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-6 py-2.5 text-xs font-semibold"
            >
              <span>Tell Us What You Build</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FAQS
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-left space-y-3">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— FREQUENTLY ASKED QUESTIONS —</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-200 bg-[#FAFBFD] p-6 space-y-2">
                <p className="text-base font-bold text-[#0F172A]">{faq.q}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: THE REAL VALUE OF AN INDUSTRY CIRCLE
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">THE REAL VALUE</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">
            The most important thing an Industry Circle gives you may not be a referral.
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-slate-800 text-sm font-semibold pt-2">
            <div className="p-4 rounded-2xl bg-white border border-slate-200">“I understand.”</div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200">“We faced something similar.”</div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200">“Let me introduce you to someone.”</div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200">“How can I help?”</div>
          </div>
          <p className="text-slate-600 text-sm sm:text-base pt-2">
            That is where a professional network begins to become a community. And that is where a Peer relationship begins to become meaningful.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: CLOSING CTA SECTION
          ========================================================================= */}
      <ClosingCtaSection
        eyebrow="FIND YOUR CIRCLE"
        title="You know your industry. You know the journey you are building."
        subtitle="Now discover the people who understand it—and the people you may be able to help along the way."
        description="Your industry gives you a context. Your Circle gives you relationships. Your contribution gives those relationships meaning. Peers are Partners in Business and Friends in Life."
        primaryButtonText="FIND YOUR CIRCLE"
        primaryButtonHref="/circles/find"
        secondaryButtonText="DOWNLOAD THE UNITY APP"
        secondaryButtonHref="https://unity.peersglobal.com"
      />

    </div>
  )
}

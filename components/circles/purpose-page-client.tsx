'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import {
  Truck,
  Rocket,
  TrendingUp,
  Wallet,
  Globe,
  Store,
  Users,
  Lightbulb,
  Award,
  Leaf,
  ArrowRight,
  ChevronRight,
  MapPin,
  CheckCircle2,
  Lock,
  Star,
  Target,
  Layers,
  MessageCircle,
  Sparkles,
  BarChart3,
  ChevronDown,
  HeartHandshake,
  GraduationCap,
  Compass,
  Building2,
  ShieldCheck,
  Zap,
  HelpCircle,
} from 'lucide-react'

// ─── Ten Purpose & Goal Circles ───────────────────────────────────────────
const PURPOSE_CIRCLES = [
  {
    num: '01',
    slug: 'import-export-global-trade',
    name: 'Import, Export & Global Trade',
    headline: 'When the ambition is to build beyond one market.',
    icon: Truck,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    accent: '#2563EB',
    description:
      'International business creates opportunities to reach new markets, build new relationships and expand the possibilities around an existing business. This Circle brings together entrepreneurs connected by an ambition toward import, export and global trade.',
    questions: [
      'What have you learned?',
      'What markets are you exploring?',
      'What relationships matter?',
      'What could another entrepreneur already know that may help you think differently?',
    ],
    sharedDirection: 'Different products. Different industries. One shared direction: global trade.',
    tags: ['Global Trade', 'Import & Export', 'Cross-Border', 'New Markets'],
  },
  {
    num: '02',
    slug: 'startup-founders',
    name: 'Startup Founders',
    headline: 'When you are building something that did not exist before.',
    icon: Rocket,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    accent: '#7C3AED',
    description:
      'Starting a business is a different journey from running an established one. The questions can be different. The uncertainty can be different. The decisions can feel different. This Circle creates a space for startup founders to share the realities of building, learning, experimenting and growing.',
    quote: '“We faced that too.”',
    quoteNote: 'You may discover that the most valuable contribution is not an answer. Sometimes it is hearing: “We faced that too.”',
    tags: ['Early Stage', 'Venture Building', 'Validation', 'Product-Market Fit'],
  },
  {
    num: '03',
    slug: 'sme-ipo-goal',
    name: 'SME IPO Goal',
    headline: 'When the ambition is to take the business to the next level.',
    icon: TrendingUp,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    accent: '#059669',
    description:
      'An IPO goal represents a significant business ambition. It requires entrepreneurs to think about the organisation they are building—not simply the business they are running today. This Circle brings together entrepreneurs who share the aspiration of pursuing an SME IPO.',
    keyTakeaway: 'The conversations revolve around the journey, preparation, learning and experiences that become relevant when a business begins thinking seriously about that goal. A shared destination creates a powerful reason to learn together.',
    tags: ['SME IPO', 'Governance', 'Listing Preparation', 'Scale'],
  },
  {
    num: '04',
    slug: 'investors',
    name: 'Investors',
    headline: 'When capital is part of the conversation.',
    icon: Wallet,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    accent: '#D97706',
    description:
      'Entrepreneurship and investment meet in many different ways. This Circle creates a purpose-led environment for people whose entrepreneurial journey includes investment as a significant part of their interests or objectives.',
    keyTakeaway: 'The opportunity is not simply to exchange capital-related conversations. It is to understand businesses, people, opportunities and possibilities through relationships. Because meaningful investment conversations begin with understanding.',
    tags: ['Angel Capital', 'Family Office', 'Strategic Investing', 'Deal Understanding'],
  },
  {
    num: '05',
    slug: 'global-expansion',
    name: 'Global Expansion (Cross-Border)',
    headline: 'When your next opportunity lies beyond your current geography.',
    icon: Globe,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    accent: '#0284C7',
    description:
      'Global expansion is more than entering another market. It can mean understanding a new environment, building new relationships and learning how business works beyond familiar boundaries. This Circle brings together entrepreneurs who share that ambition.',
    keyTakeaway: 'The experience of one entrepreneur in one market may become a valuable perspective for another entrepreneur considering a different market. You do not have to enter a new world without people who have already explored one.',
    tags: ['Cross-Border', 'Market Entry', 'Global Footprint', 'Partnerships'],
  },
  {
    num: '06',
    slug: 'msme-entrepreneurs',
    name: 'MSME Entrepreneurs',
    headline: 'When the ambition is to grow a business that already carries responsibility.',
    icon: Store,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    accent: '#EA580C',
    description:
      'MSMEs form a significant part of the entrepreneurial landscape. Their journeys can involve growth, people, customers, resources, resilience and constant adaptation.',
    keyTakeaway: 'This Circle creates a purpose-led environment for MSME entrepreneurs to learn from one another and share the experiences that come with building and growing. Growth becomes more meaningful when experience is shared.',
    tags: ['MSME Growth', 'Operations', 'Resilience', 'Adaptation'],
  },
  {
    num: '07',
    slug: 'family-business',
    name: 'Family Business',
    headline: 'When the business carries generations of meaning.',
    icon: HeartHandshake,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    accent: '#E11D48',
    description:
      'A family business is more than an organisation. It can carry history, relationships, responsibility and the expectations of generations. The questions around growth may therefore be accompanied by questions around continuity, leadership, transition and the future.',
    keyTakeaway: 'This Circle creates a space for family-business entrepreneurs to connect with others who understand that dimension of entrepreneurship. Because sometimes the challenge is not simply building the next chapter—but building it together.',
    tags: ['Succession', 'Family Governance', 'Next Gen', 'Continuity'],
  },
  {
    num: '08',
    slug: 'young-entrepreneurs',
    name: 'Young Entrepreneurs (Below 35)',
    headline: 'When your journey is beginning—and your ambition is already moving.',
    icon: GraduationCap,
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    accent: '#DB2777',
    description:
      'Young entrepreneurs bring a particular combination of energy, possibility and questions about the future. This Circle creates a shared environment for entrepreneurs below 35 who are building their businesses and learning through the experience of doing so.',
    keyTakeaway: 'The Circle also creates an opportunity for perspectives to move between generations. Young ambition can grow faster when it has access to experienced relationships.',
    tags: ['Under 35', 'Next-Gen Leaders', 'Rapid Growth', 'Mentorship'],
  },
  {
    num: '09',
    slug: 'leadership-transformation',
    name: 'Leadership & Transformation',
    headline: 'When the next stage requires you to grow as a leader.',
    icon: Award,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    accent: '#4F46E5',
    description:
      'Businesses evolve. And when they do, the entrepreneur often has to evolve with them. Leadership & Transformation brings together entrepreneurs who are thinking about how they lead, how they change, how they build organisations and how they prepare themselves for what comes next.',
    keyTakeaway: 'The Circle becomes a place for reflection, experience-sharing and meaningful conversations around leadership. Sometimes the next transformation in the business begins with the entrepreneur.',
    tags: ['Leadership', 'Org Transformation', 'Operator to Leader', 'Culture'],
  },
  {
    num: '10',
    slug: 'sustainable-esg-goal',
    name: 'Sustainable & ESG Goal',
    headline: 'When growth must also consider what it leaves behind.',
    icon: Leaf,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    accent: '#0D9488',
    description:
      'Sustainability and ESG represent an ambition to think beyond immediate business outcomes. Entrepreneurs pursuing this direction may come from very different industries. What connects them is the goal.',
    keyTakeaway: 'This Circle creates a cross-industry environment for entrepreneurs who share a sustainable and ESG-oriented ambition to exchange perspectives, experience and possibilities. Different businesses can move in the same direction.',
    tags: ['ESG Readiness', 'Sustainability', 'Green Transformation', 'Impact'],
  },
]

// ─── What a Purpose Circle Gives You ─────────────────────────────────────
const PURPOSE_BENEFITS = [
  {
    title: 'Shared Ambition',
    body: 'You meet people who understand the goal you are pursuing.',
    icon: Target,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    title: 'Different Industries',
    body: 'Your Circle can bring perspectives from outside your own sector.',
    icon: Building2,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    title: 'Experience',
    body: 'You may encounter someone who has already faced a question you are beginning to ask.',
    icon: Sparkles,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    title: 'Perspective',
    body: 'Different industries can see the same challenge differently.',
    icon: Compass,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    title: 'Collaboration',
    body: 'Shared ambition can reveal opportunities for collaboration that industry boundaries might never reveal.',
    icon: HeartHandshake,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    title: 'Accountability',
    body: 'A goal becomes more tangible when you can discuss progress with people who understand why it matters.',
    icon: ShieldCheck,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    title: 'Contribution',
    body: 'Your own experience may become valuable to someone pursuing the same ambition.',
    icon: Users,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
]

// ─── Purpose & Goal Grid (Lookup) ────────────────────────────────────────
const PURPOSE_GRID = [
  { circle: 'Import, Export & Global Trade', ambition: 'Build opportunities through international trade' },
  { circle: 'Startup Founders', ambition: 'Build and grow a new venture' },
  { circle: 'SME IPO Goal', ambition: 'Work toward an SME IPO ambition' },
  { circle: 'Investors', ambition: 'Explore investment-oriented relationships and opportunities' },
  { circle: 'Global Expansion (Cross-Border)', ambition: 'Expand beyond existing markets and geographies' },
  { circle: 'MSME Entrepreneurs', ambition: 'Grow and strengthen an MSME journey' },
  { circle: 'Family Business', ambition: 'Build continuity, growth and the next chapter' },
  { circle: 'Young Entrepreneurs (Below 35)', ambition: 'Grow through an early-stage entrepreneurial journey' },
  { circle: 'Leadership & Transformation', ambition: 'Develop leadership and organisational transformation' },
  { circle: 'Sustainable & ESG Goal', ambition: 'Build toward sustainability and ESG-oriented goals' },
]

// ─── Comparison Matrix ───────────────────────────────────────────────────
const COMPARISON_ROWS = [
  {
    feature: 'What question does it answer?',
    industry: 'What do you do?',
    purpose: 'What are you trying to achieve?',
  },
  {
    feature: 'Shared foundation',
    industry: 'Shared sector context',
    purpose: 'Shared ambition',
  },
  {
    feature: 'Environment',
    industry: 'Similar business environment',
    purpose: 'Similar journey or goal',
  },
  {
    feature: 'Type of experience',
    industry: 'Industry-specific experience',
    purpose: 'Cross-industry experience',
  },
  {
    feature: 'Network dynamics',
    industry: 'Relevant sector relationships',
    purpose: 'Relevant purpose-driven relationships',
  },
  {
    feature: 'The Peer sentiment',
    industry: '“You understand my business.”',
    purpose: '“You understand where I am trying to go.”',
  },
]

// ─── Who Belongs In A Purpose Circle ─────────────────────────────────────
const WHO_BELONGS_POINTS = [
  'Exploring a new ambition',
  'Already working toward a defined goal',
  'Looking for people with similar aspirations',
  'Seeking experience from entrepreneurs further along the journey',
  'Able to contribute your own experience',
  'Interested in perspectives beyond your industry',
  'Ready to learn, share and build relationships',
]

// ─── FAQ items ────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'What is the difference between an Industry Circle and a Purpose Circle?',
    a: 'An Industry Circle connects entrepreneurs through the sector in which they operate. A Purpose Circle connects entrepreneurs through a shared ambition, goal or stage of their journey.',
  },
  {
    q: 'Do I need to belong to the same industry as everyone in my Purpose Circle?',
    a: 'No. The purpose of the Circle is precisely to create a cross-industry environment around a shared ambition.',
  },
  {
    q: 'Can I belong to both?',
    a: 'An entrepreneur can have both an industry identity and a purpose. Your Industry Circle reflects your business context. Your Purpose Circle reflects what you are trying to achieve.',
  },
  {
    q: 'Is a Purpose Circle only for entrepreneurs who have already achieved their goal?',
    a: 'No. The shared purpose can be the ambition you are working toward. You do not have to arrive with the destination already reached.',
  },
  {
    q: 'What if my goal changes?',
    a: 'Entrepreneurial journeys evolve. The purpose that matters to you today may not be the purpose that defines your next chapter. What matters is finding the environment that is relevant to your journey.',
  },
  {
    q: 'Is a Purpose Circle about networking?',
    a: 'The deeper intention is broader than networking. It is about Learning, Sharing and Relationships—and allowing those relationships to create possibilities for collaboration and contribution.',
  },
]

export function PurposePageClient() {
  const [activeCircle, setActiveCircle] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans">

      {/* =================================================================
          SECTION 1: HERO — Purpose & Goal Circles
          ================================================================= */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Full Bleed Hero Video Background */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            poster="/images/circles-hero-new.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <Link href="/circles" className="hover:text-white transition-colors">Circles</Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-white font-semibold">Purpose & Goal Circles</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Hero Content */}
            <div className="lg:col-span-8 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>PURPOSE &amp; GOAL CIRCLES</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  What Are You Trying To Build?{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Purpose Defines Where You Go.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Your industry tells us what you do. Your purpose tells us where you want to go. Connect with entrepreneurs across industries pursuing the exact same ambition.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#circles-list"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:opacity-95 transition-all duration-300 group cursor-pointer"
                >
                  <span>Explore 10 Purpose Circles</span>
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-sm transition-all duration-300"
                >
                  <span>Download Unity App</span>
                </a>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg pt-6 border-t border-white/15">
                {[
                  { icon: Target, value: '10', label: 'Purpose Pathways' },
                  { icon: Compass, value: '100%', label: 'Cross-Industry' },
                  { icon: Users, value: '500+', label: 'Active Founders' },
                ].map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.label} className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
                      <div className="size-9 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sky-300 shrink-0">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <div className="font-bold text-base sm:text-lg text-white leading-none">{s.value}</div>
                        <div className="text-[10px] text-slate-300 font-medium mt-1 leading-tight">{s.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Cursive Script Highlights */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-2xl sm:text-3xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Your Industry Tells What You Do
              </p>
              <p
                className="text-3xl sm:text-4xl text-sky-400 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Your Purpose Tells Where You Go
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 2: SUPPORTING NARRATIVE — PURPOSE BRINGS INDUSTRIES TOGETHER
          ================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                  PERSPECTIVE BEYOND YOUR SECTOR
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-snug">
                Purpose brings different industries into the same conversation.
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Sometimes the most valuable people around your table are not from your industry at all. They are people pursuing a similar ambition:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-slate-200/80 flex items-start gap-3">
                  <div className="size-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">A founder preparing for an IPO</strong> may learn from someone who has already built for scale.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-slate-200/80 flex items-start gap-3">
                  <div className="size-2 rounded-full bg-violet-600 mt-2 shrink-0" />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">An entrepreneur expanding internationally</strong> may benefit from someone who has already crossed borders.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-slate-200/80 flex items-start gap-3">
                  <div className="size-2 rounded-full bg-rose-600 mt-2 shrink-0" />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">A family-business leader</strong> may find perspective from another entrepreneur navigating succession and transformation.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-slate-200/80 flex items-start gap-3">
                  <div className="size-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">A young entrepreneur</strong> may need experience that has taken decades to develop.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: The Ambition You Share */}
            <div className="lg:col-span-5">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <span className="text-[11px] uppercase tracking-widest text-amber-300 font-bold block mb-2">
                    THE AMBITION YOU SHARE
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug mb-4">
                    You are more than what you sell today.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    Entrepreneurs do not only identify themselves by their businesses. They also identify themselves by what they are trying to achieve. You may be building for:
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs mb-6 font-medium">
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="size-1.5 rounded-full bg-blue-400" />
                      Global expansion
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="size-1.5 rounded-full bg-violet-400" />
                      A new venture
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                      An IPO
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="size-1.5 rounded-full bg-amber-400" />
                      Investment & Scale
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="size-1.5 rounded-full bg-indigo-400" />
                      Leadership transformation
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="size-1.5 rounded-full bg-rose-400" />
                      Family-business continuity
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="size-1.5 rounded-full bg-orange-400" />
                      A stronger MSME
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="size-1.5 rounded-full bg-teal-400" />
                      A sustainable future
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 italic border-t border-slate-700/80 pt-4 leading-relaxed">
                    “And sometimes the person who can help you most is not the person who does what you do. It is the person who is trying to achieve something similar.”
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 3: TEN PURPOSE & GOAL CIRCLES (Detailed Showcase)
          ================================================================= */}
      <section id="circles-list" className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                TEN PURPOSE &amp; GOAL CIRCLES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-4">
              The common thread is not the industry. It is the journey.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Each Purpose Circle brings together entrepreneurs around a shared ambition, goal or stage of growth.
            </p>
          </div>

          {/* 10 Circles Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {PURPOSE_CIRCLES.map((circle) => {
              const Icon = circle.icon
              const isSelected = activeCircle === circle.slug
              return (
                <div
                  key={circle.slug}
                  onClick={() => setActiveCircle(isSelected ? null : circle.slug)}
                  className={`group p-6 sm:p-8 rounded-3xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#0062D2] shadow-xl ring-2 ring-[#0062D2]/20'
                      : 'bg-white border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300'
                  }`}
                >
                  <div>
                    {/* Header: Num + Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`size-11 rounded-2xl flex items-center justify-center ${circle.bg} ${circle.color}`}>
                          <Icon className="size-5" />
                        </div>
                        <span className="text-xs font-mono font-bold tracking-widest text-slate-400">
                          {circle.num}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {circle.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Title & Headline */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A] mb-1.5">
                      {circle.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#0062D2] mb-3">
                      {circle.headline}
                    </p>

                    {/* Main Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {circle.description}
                    </p>

                    {/* Specific highlights */}
                    {circle.questions && (
                      <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100/80 mb-4 space-y-1">
                        <p className="text-[11px] font-bold text-blue-900 mb-1">The value begins with shared experience:</p>
                        {circle.questions.map((q, i) => (
                          <p key={i} className="text-[11px] text-blue-800 flex items-center gap-1.5">
                            <span className="size-1 rounded-full bg-blue-600" />
                            {q}
                          </p>
                        ))}
                      </div>
                    )}

                    {circle.quote && (
                      <div className="p-4 rounded-2xl bg-violet-50/70 border border-violet-100 mb-4">
                        <p className="font-serif text-lg text-violet-900 font-bold mb-1">{circle.quote}</p>
                        <p className="text-[11px] text-violet-700 leading-relaxed">{circle.quoteNote}</p>
                      </div>
                    )}

                    {circle.keyTakeaway && (
                      <p className="text-xs text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-200/70 mb-4 leading-relaxed">
                        {circle.keyTakeaway}
                      </p>
                    )}

                    {circle.sharedDirection && (
                      <p className="text-xs text-slate-800 font-semibold italic mb-3">
                        {circle.sharedDirection}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-[11px] font-semibold text-slate-400">
                      Cross-Industry Circle
                    </span>
                    <a
                      href="https://unity.peersglobal.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-[#0062D2] hover:text-[#0052B4] inline-flex items-center gap-1"
                    >
                      <span>Join in Unity App</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 4: WHAT A PURPOSE CIRCLE GIVES YOU
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#0062D2]" />
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                  WHAT A PURPOSE CIRCLE GIVES YOU
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-3">
                A Purpose Circle begins with a question:
              </h2>
              <p className="text-xl sm:text-2xl text-[#0062D2] font-semibold">
                “What are you trying to achieve?”
              </p>
              <p className="text-sm text-slate-600 mt-2">
                From there, relationships can become more intentional.
              </p>
            </div>
            <div className="text-right shrink-0">
              <div
                className="text-[#0062D2] text-2xl sm:text-3xl font-normal leading-tight select-none pointer-events-none"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Intentional<br />Relationships
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {PURPOSE_BENEFITS.slice(0, 4).map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="p-6 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow">
                  <div className={`size-10 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {PURPOSE_BENEFITS.slice(4).map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="p-6 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow">
                  <div className={`size-10 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              )
            })}
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              The purpose of the Circle is not to make everyone the same. <br className="hidden sm:block" />
              <strong className="text-slate-900">It is to bring people together around something they genuinely share.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 5: PURPOSE CAN CROSS INDUSTRY (Thought Experiment)
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FAFBFD] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Visual Box */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 h-32 w-32 bg-blue-50 rounded-full blur-2xl pointer-events-none" />

                <span className="text-[10px] uppercase font-bold tracking-widest text-[#0062D2] block mb-3">
                  THOUGHT EXPERIMENT
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-normal leading-tight mb-4">
                  Imagine a room containing:
                </h3>

                <div className="space-y-2 mb-6">
                  {['A technology entrepreneur', 'A manufacturing entrepreneur', 'A healthcare entrepreneur', 'A real-estate entrepreneur', 'A professional-services entrepreneur'].map((person, i) => (
                    <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-medium text-slate-700">
                      <span className="size-2 rounded-full bg-blue-600 shrink-0" />
                      {person}
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
                  <p className="text-xs text-blue-100 uppercase tracking-wider font-semibold mb-1">Then someone asks:</p>
                  <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                    “Who here is planning to expand internationally?”
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative text */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#0062D2]" />
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.2em] uppercase">
                  PURPOSE CAN CROSS INDUSTRY
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-snug">
                Suddenly, the room changes.
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                They may have almost nothing in common at first glance. But the moment shared ambition is spoken aloud, the room shifts.
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200/80">
                <p className="text-base sm:text-lg font-serif text-blue-950 leading-relaxed">
                  The industry differences remain. <br />
                  <strong className="text-blue-700">But a shared purpose has appeared.</strong>
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                That is the power of a Purpose Circle.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex-1">
                  <p className="text-[11px] uppercase font-bold text-slate-400">Industry</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">Creates relevance</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex-1">
                  <p className="text-[11px] uppercase font-bold text-[#0062D2]">Purpose</p>
                  <p className="text-sm font-bold text-[#0062D2] mt-0.5">Creates alignment</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 6: INDUSTRY OR PURPOSE? (Comparison & You Are More)
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-0.5 w-6 bg-[#0062D2]" />
              <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                INDUSTRY OR PURPOSE?
              </span>
              <span className="h-0.5 w-6 bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-4">
              You do not always have to choose between the two ways of belonging.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              They answer different questions. Your industry gives you context; your purpose gives you direction.
            </p>
          </div>

          {/* Side-by-side Table */}
          <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200 overflow-hidden shadow-sm mb-12">
            <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 p-4 sm:p-5 font-bold text-xs uppercase tracking-wider text-slate-500">
              <div className="col-span-4 sm:col-span-4">Dimension</div>
              <div className="col-span-4 sm:col-span-4 text-[#0062D2]">Industry Circle</div>
              <div className="col-span-4 sm:col-span-4 text-emerald-700">Purpose & Goal Circle</div>
            </div>

            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={row.feature}
                className={`grid grid-cols-12 p-4 sm:p-5 border-b border-slate-100 last:border-b-0 items-center text-xs sm:text-sm ${
                  idx % 2 === 1 ? 'bg-[#FAFBFD]' : 'bg-white'
                }`}
              >
                <div className="col-span-4 sm:col-span-4 font-semibold text-slate-600 pr-2">
                  {row.feature}
                </div>
                <div className="col-span-4 sm:col-span-4 text-slate-800 pr-2 font-medium">
                  {row.industry}
                </div>
                <div className="col-span-4 sm:col-span-4 text-[#0F172A] font-bold">
                  {row.purpose}
                </div>
              </div>
            ))}
          </div>

          {/* "You Are More Than Your Industry" Callout */}
          <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-[#F0F7FF] border border-[#DCEBFE]">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#0062D2] block mb-2">
              EXPAND YOUR PERSPECTIVE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-normal leading-snug mb-4">
              You are more than your industry.
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
              An entrepreneur can be a <strong>technology founder</strong> and a <strong>startup founder</strong>. A <strong>manufacturing entrepreneur</strong> and an <strong>investor</strong>. A <strong>family-business leader</strong> and someone pursuing <strong>global expansion</strong>. An <strong>MSME entrepreneur</strong> and a leader focused on <strong>transformation</strong>.
            </p>
            <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed mb-6">
              Your business identity is only one part of your entrepreneurial identity. Your ambition is another. That is why PEERS GLOBAL creates both Industry and Purpose pathways.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/circles"
                className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-6 py-2.5 text-xs font-semibold shadow-sm inline-flex items-center gap-2"
              >
                <span>Browse All Circles</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/circles/industry"
                className="rounded-full border border-slate-300 bg-white hover:border-slate-400 text-slate-700 px-6 py-2.5 text-xs font-semibold inline-flex items-center gap-2"
              >
                Browse Industry Circles
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 7: THE PURPOSE & GOAL GRID
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-0.5 w-6 bg-[#0062D2]" />
              <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                THE PURPOSE & GOAL GRID
              </span>
              <span className="h-0.5 w-6 bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-3">
              Find the ambition that feels closest to your journey.
            </h2>
            <p className="text-sm text-slate-600">
              A quick reference to the shared ambition of each Purpose & Goal Circle.
            </p>
          </div>

          {/* Grid Table */}
          <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 p-4 sm:p-5 font-bold text-xs uppercase tracking-wider text-slate-500">
              <div className="col-span-5 sm:col-span-5 text-[#0062D2]">Purpose & Goal Circle</div>
              <div className="col-span-7 sm:col-span-7">Shared Ambition</div>
            </div>

            {PURPOSE_GRID.map((item, idx) => (
              <div
                key={item.circle}
                className={`grid grid-cols-12 p-4 sm:p-5 border-b border-slate-100 last:border-b-0 items-center text-xs sm:text-sm ${
                  idx % 2 === 1 ? 'bg-[#FAFBFD]' : 'bg-white'
                }`}
              >
                <div className="col-span-5 sm:col-span-5 font-bold text-slate-900 pr-3">
                  {item.circle}
                </div>
                <div className="col-span-7 sm:col-span-7 text-slate-700 leading-relaxed">
                  {item.ambition}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 8: WHO BELONGS & PURPOSE CREATES NEW CONVERSATIONS
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Who Belongs In A Purpose Circle? */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                  WHO BELONGS IN A PURPOSE CIRCLE?
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-snug">
                You do not need to belong to a particular industry.
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                You need a <strong className="text-slate-900">genuine connection with the purpose</strong>. You may be:
              </p>

              <div className="space-y-2.5">
                {WHO_BELONGS_POINTS.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAFBFD] border border-slate-200/80">
                    <CheckCircle2 className="size-4 text-[#0062D2] mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-950 text-xs sm:text-sm">
                <p className="font-bold mb-1">The important question is not:</p>
                <p className="italic text-amber-800 line-through mb-1">“What do you sell?”</p>
                <p className="font-bold text-amber-900">It is: “What are you trying to build?”</p>
              </div>
            </div>

            {/* Right: Purpose Creates New Conversations */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                  PURPOSE CREATES NEW CONVERSATIONS
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-snug">
                From business categories to deeper conversations.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-100/80 border border-slate-200">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Industry Circle starts with</p>
                  <p className="font-serif text-base font-semibold text-slate-800">“Tell me about your business.”</p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-blue-700 mb-1">Purpose Circle starts with</p>
                  <p className="font-serif text-base font-semibold text-blue-900">“Tell me about the goal you are pursuing.”</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                That difference matters. Because when people talk about their ambition, they often reveal something deeper than their business category. They reveal:
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                {['What they are working toward', 'What they are learning', 'Where they are uncertain', 'Where they need help', 'Where they can contribute', 'Why the journey matters to them'].map((item, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-700 flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue-600 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {/* If Your Purpose is Not Listed */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-[#0F172A] text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 block mb-1">
                  IF YOUR PURPOSE IS NOT LISTED
                </span>
                <h4 className="font-serif text-lg font-normal mb-2">
                  Every Circle begins with people who have something meaningful in common.
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Not every entrepreneurial ambition fits neatly into ten categories. Tell us what you are trying to build, what you are trying to achieve, and what kind of entrepreneurs you would like to meet. A future Circle may begin with a purpose you are already carrying.
                </p>
                <Link
                  href="/start-a-circle"
                  className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-colors"
                >
                  Propose or Start a Circle
                  <ArrowRight className="size-3" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 9: FREQUENTLY ASKED QUESTIONS
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight">
              Common questions about Purpose Circles
            </h2>
          </div>

          <div className="space-y-3 mb-10">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all ${
                    isOpen ? 'border-[#DCEBFE] bg-[#F0F7FF]' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4 cursor-pointer"
                  >
                    <span className={`text-sm sm:text-base font-semibold leading-snug ${isOpen ? 'text-[#0062D2]' : 'text-[#0F172A]'}`}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`size-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0062D2]' : 'text-slate-400'}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-blue-100/60">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 10: THE QUESTION THAT MATTERS (Pre-closing reflective card)
          ================================================================= */}
      {/* =================================================================
          SECTION 10: THE QUESTION THAT MATTERS (Executive Reflective Showcase)
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[36px] bg-white border border-slate-200/90 shadow-sm p-8 sm:p-12 lg:p-16">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading, Context & Ambition Tags */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                      THE QUESTION THAT MATTERS
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.15]">
                    You know what you do. <br />
                    <span className="brand-gradient-text">What are you trying to build?</span>
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                    Whatever your ambition, you do not have to pursue it alone. Purpose Circles unite entrepreneurs striving toward the same inflection point.
                  </p>
                </div>

                {/* Ambitions Interactive Badges */}
                <div className="space-y-2.5 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Select your focus area</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'A larger business?',
                      'A new venture?',
                      'A global presence?',
                      'A stronger family enterprise?',
                      'A leadership transformation?',
                      'An IPO journey?',
                      'A sustainable future?',
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-700 hover:border-blue-400 hover:bg-blue-50 hover:text-[#0062D2] transition-all cursor-default shadow-2xs"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white px-8 py-3.5 text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>Download Unity App & Find Your Circle</span>
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Key Philosophy Quote Card */}
              <div className="lg:col-span-5">
                <div className="relative p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#061836] to-[#0D244D] text-white shadow-xl space-y-6 overflow-hidden border border-blue-900/40">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
                  
                  <span className="font-serif text-5xl sm:text-6xl text-sky-400/50 leading-none block -mb-4">“</span>
                  
                  <p className="text-lg sm:text-xl font-medium leading-snug text-slate-100">
                    Sometimes the right people are not the people doing what you do. They are the people going where you are trying to go.
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-sky-300">The Peers Principle</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Shared destination over shared title</p>
                    </div>
                    <div className="size-8 rounded-full bg-white/10 flex items-center justify-center text-sky-300">
                      <Compass className="size-4" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 11: CLOSING CTA SECTION
          ================================================================= */}
      <ClosingCtaSection
        eyebrow="FIND YOUR PURPOSE CIRCLE"
        title="Your industry tells your story today. Your purpose speaks about the future you are building."
        subtitle="Find the people who understand both."
        description="Peers are Partners in Business and Friends in Life. Circles, not crowds. Trust, not transactions. Peers, not gurus. Designed in Bharat. Built for the World."
        primaryButtonText="Download Unity App"
        primaryButtonHref="https://unity.peersglobal.com"
        secondaryButtonText="Explore All Circles"
        secondaryButtonHref="/circles"
        secondaryButtonIcon={<ChevronRight className="size-4" />}
      />

    </div>
  )
}

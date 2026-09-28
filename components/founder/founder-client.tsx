'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Quote,
  Sparkles,
  HeartHandshake,
  Users,
  Compass,
  TrendingUp,
  ShieldCheck,
  Calendar,
  Layers,
  Sprout,
  BookOpen,
  Lightbulb,
  Zap,
  Lock,
  Eye,
  MessageSquare,
  Coffee,
  UserPlus,
  CheckCircle2,
  Share2,
  Award,
  Globe2,
  Building2,
  HelpCircle,
  Heart,
  Target,
  ArrowUpRight,
} from 'lucide-react'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'

// Canonical 6 approved Peers Code commitments
const APPROVED_PEERS_CODE_COMMITMENTS = [
  {
    num: '01',
    title: 'Give first.',
    essence: 'Contribution comes before any ask.',
    description:
      'We help before we are asked, and without calculating the return. Everything else in this community rests on this single commitment.',
    icon: HeartHandshake,
  },
  {
    num: '02',
    title: 'Show up.',
    essence: 'Presence is not a formality here. It is the mechanism.',
    description:
      'Trust is built by the same people meeting the same people, consistently, over time. Presence is not a formality here. It is the mechanism.',
    icon: Calendar,
  },
  {
    num: '03',
    title: 'Tell the truth.',
    essence: 'Especially when it is uncomfortable.',
    description:
      'A Peer who only agrees with you is of no use to your business. We say the difficult thing, kindly, because that is what a friend does.',
    icon: ShieldCheck,
  },
  {
    num: '04',
    title: 'Protect the room.',
    essence: 'What is shared inside a Circle stays inside it.',
    description:
      'Entrepreneurs will only speak honestly about pressure, uncertainty and failure when they know it will never leave the room.',
    icon: Lock,
  },
  {
    num: '05',
    title: 'Respect every Peer.',
    essence: 'Nobody here is measured by their revenue.',
    description:
      'Regardless of the size of their business, the length of their membership or the language they speak. Everyone here started somewhere, and nobody is measured by their revenue.',
    icon: Eye,
  },
  {
    num: '06',
    title: 'Carry the culture.',
    essence: 'Culture is held by everyone in the room.',
    description:
      'Every Peer is responsible for the experience of every other Peer. Culture is held by everyone in the room, not by whoever is leading it.',
    icon: Sparkles,
  },
]

// The 10 Forms of Collaboration
const FORMS_OF_COLLABORATION = [
  {
    num: 1,
    form: 'Business Referral',
    meaning: 'Connecting the right opportunity to the right Peer',
  },
  {
    num: 2,
    form: 'Mentorship',
    meaning: 'Sharing experience to help another entrepreneur navigate a challenge',
  },
  {
    num: 3,
    form: 'Joint Venture',
    meaning: 'Building something together that neither could build as effectively alone',
  },
  {
    num: 4,
    form: 'Knowledge Sharing',
    meaning: 'Making expertise available to others',
  },
  {
    num: 5,
    form: 'Problem Solving',
    meaning: 'Bringing experience and perspective to a real business challenge',
  },
  {
    num: 6,
    form: 'Vendor Connect',
    meaning: 'Helping a Peer discover a relevant supplier or service provider',
  },
  {
    num: 7,
    form: 'Funding Access',
    meaning: 'Connecting entrepreneurs with relevant funding relationships or opportunities',
  },
  {
    num: 8,
    form: 'Visibility & PR',
    meaning: 'Helping a Peer gain appropriate visibility for their work',
  },
  {
    num: 9,
    form: 'Emotional Support',
    meaning: 'Being present when entrepreneurship becomes personally difficult',
  },
  {
    num: 10,
    form: 'Execution Support',
    meaning: 'Helping turn an idea or requirement into action',
  },
]

// The Peers Global Reference Table
const REFERENCE_TABLE_TERMS = [
  {
    word: 'Peer',
    meaning: 'A relationship built through trust, contribution and shared entrepreneurial experience',
  },
  {
    word: 'Member',
    meaning: 'The formal membership status within PEERS GLOBAL',
  },
  {
    word: 'Circle',
    meaning: 'A structured community of entrepreneurs and an Inner Board',
  },
  {
    word: 'Powerhouse',
    meaning: 'A Peer who takes responsibility for contributing to the community',
  },
  {
    word: 'Give-First',
    meaning: 'Beginning relationships with a willingness to contribute value',
  },
  {
    word: 'Life Impactor',
    meaning: 'A person whose action creates a positive difference for another',
  },
  {
    word: 'LSR',
    meaning: 'Learning, Sharing and Relationships',
  },
  {
    word: 'Unity',
    meaning: 'The digital community connecting Peers beyond physical meetings',
  },
  {
    word: 'MindMeld',
    meaning: 'A cross-community environment for exchanging perspectives and possibilities',
  },
  {
    word: 'Confidential Forum',
    meaning: 'A trusted space for sensitive entrepreneurial conversations',
  },
  {
    word: '10 Forms of Collaboration',
    meaning: 'The principal ways Peers can create value for one another',
  },
]

export function FounderClient() {
  const [activeSection, setActiveSection] = useState<'journey' | 'language' | 'culture'>('journey')

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2] antialiased">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span>Founder</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Dr. Pravin Parmar</span>
          </div>

          {/* Quick Jump Pills */}
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold">
            <a
              href="#journey"
              className="px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-[#0062D2] text-slate-700 transition-colors"
            >
              The Journey
            </a>
            <a
              href="#language"
              className="px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-[#0062D2] text-slate-700 transition-colors"
            >
              The Language
            </a>
            <a
              href="#culture-and-code"
              className="px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-[#0062D2] text-slate-700 transition-colors"
            >
              Our Culture &amp; Code
            </a>
          </div>
        </div>
      </div>

      {/* ─── Master Hero Card Banner ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F6F9FD] via-[#FAFBFD] to-white pt-6 sm:pt-8 pb-10 sm:pb-12 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_12px_40px_rgba(0,40,120,0.06)] overflow-hidden min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] flex items-center">
            {/* Background Dr. Pravin Parmar Executive Portrait with Mist Mask */}
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[48%] pointer-events-none z-0 overflow-hidden bg-gradient-to-tr from-[#061836] via-[#0B2558] to-[#040E24]">
              <div
                className="relative w-full h-full"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 6%, rgba(0,0,0,0.6) 20%, black 40%)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 6%, rgba(0,0,0,0.6) 20%, black 40%)',
                }}
              >
                <Image
                  src="/images/founder-new.png"
                  alt="Dr. Pravin Parmar — Founder of Peers Global"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-top sm:object-[center_12%]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040E24]/90 via-transparent to-transparent hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent lg:hidden" />
              </div>
            </div>

            {/* Subtle top right decorative script */}
            <div
              className="absolute top-6 right-8 hidden md:block text-2xl lg:text-3xl text-white/50 select-none pointer-events-none z-10 drop-shadow-sm"
              style={{ fontFamily: 'var(--font-script)' }}
            >
              From Farmer to Founder
            </div>

            {/* Left Hero Content */}
            <div className="relative z-10 w-full lg:w-[58%] p-6 sm:p-10 lg:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0062D2] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0062D2]" />
                Founder, PEERS GLOBAL
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-bold text-[#061836] tracking-tight leading-[1.08]">
                  DR. PRAVIN PARMAR
                </h1>
                <p className="text-xl sm:text-2xl font-serif text-slate-800 italic leading-relaxed font-normal">
                  Founder, PEERS GLOBAL · From Farmer to Founder
                </p>
              </div>

              {/* Core Quote Card */}
              <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-white border border-blue-100 shadow-2xs border-l-4 border-l-[#0062D2]">
                <Quote className="w-7 h-7 text-blue-400/25 absolute top-4 right-4" />
                <p className="text-base sm:text-lg font-serif italic text-[#061836] leading-relaxed pr-6">
                  &ldquo;Some journeys begin with a clear destination. Others begin with a decision to take the next step. Dr. Pravin Parmar&apos;s journey belongs to the second kind.&rdquo;
                </p>
                <p className="mt-2.5 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                  — DR. PRAVIN PARMAR
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_4px_16px_rgba(0,98,210,0.25)] hover:shadow-[0_6px_22px_rgba(0,98,210,0.35)] transition-all active:scale-[0.98] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Download the Unity App
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>

                <a
                  href="#language"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold border border-slate-300 shadow-xs hover:border-slate-400 transition-all active:scale-[0.98]"
                >
                  Explore The Language
                </a>
              </div>
            </div>

            {/* Bottom-right Frosted Glass Live Badge */}
            <div className="hidden sm:flex absolute bottom-5 right-6 z-10 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg text-xs font-semibold text-[#061836]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0062D2] animate-pulse" />
              <span>Farmer · Learner · Entrepreneur · Founder</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Fast Overview Navigation Banner ─── */}
      <section className="bg-[#FAFBFD] border-b border-slate-200/80 py-5 sticky top-12 z-20 backdrop-blur-md bg-white/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <a
              href="#journey"
              className="p-3.5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-xs transition-all group flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] block">
                  PART 01
                </span>
                <span className="text-sm font-serif font-bold text-[#061836] group-hover:text-[#0062D2] transition-colors">
                  From Farmer to Founder
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#language"
              className="p-3.5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-xs transition-all group flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] block">
                  PART 02
                </span>
                <span className="text-sm font-serif font-bold text-[#061836] group-hover:text-[#0062D2] transition-colors">
                  The Language of Peers
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#culture-and-code"
              className="p-3.5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-xs transition-all group flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] block">
                  PART 03
                </span>
                <span className="text-sm font-serif font-bold text-[#061836] group-hover:text-[#0062D2] transition-colors">
                  Our Culture &amp; Code
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PART 1: FROM FARMER TO FOUNDER (DR. PRAVIN PARMAR)
          ========================================================================= */}
      <div id="journey" className="scroll-mt-24">
        {/* Intro */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              DR. PRAVIN PARMAR · FOUNDER, PEERS GLOBAL
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
              From Farmer to Founder
            </h2>
            <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
              <p className="text-lg sm:text-xl font-serif text-[#061836] font-medium leading-relaxed">
                Some journeys begin with a clear destination. Others begin with a decision to take the next step. Dr. Pravin Parmar&apos;s journey belongs to the second kind.
              </p>
              <p>
                He comes from a farmer family. He grew up with the experience of a farming life, studied in a government school, moved towards higher education, entered technology, became an entrepreneur—and eventually began building something that went beyond his own businesses.
              </p>
              <p>
                Today, he is the Founder of PEERS GLOBAL. But that title tells only one part of his story. To understand what he is building, it helps to understand the journey that brought him here.
              </p>
            </div>
          </div>
        </section>

        {/* The Farmer */}
        <section className="py-14 sm:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              THE FARMER
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
              The Farmer
            </h2>
            <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
              <p>
                Even today, Dr. Pravin describes himself as a farmer. It is not simply a description of where he came from. It is part of how he sees life.
              </p>
              <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-2xs space-y-3 border-l-4 border-l-[#0062D2]">
                <p className="text-base sm:text-lg text-[#061836] italic font-serif leading-relaxed">
                  A farmer understands that what you invest today may not produce its result immediately. You prepare. You learn. You work. You wait. You adapt. And you continue.
                </p>
              </div>
              <p>
                That way of thinking has remained with him through every stage of his entrepreneurial journey.
              </p>
              <p>
                He has also described himself as a lifelong student. Because for him, learning does not stop when education ends. It continues through experience. Through people. Through mistakes. Through markets. Through challenges. And through the process of building something that has never existed before.
              </p>
            </div>
          </div>
        </section>

        {/* The Decision That Set The Direction */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              THE DECISION THAT SET THE DIRECTION
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
              The Decision That Set the Direction
            </h2>
            <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
              <p>
                One of the earliest turning points came during his school years. He was studying in a government school where English was not compulsory in the way he believed it would need to be for his higher studies.
              </p>
              <p>
                He had a choice. Stay with what was familiar. Or prepare himself for what he wanted to pursue later.
              </p>
              <p>
                He chose the second. He spoke with the principal and others, accepted the additional effort required, completed his 10th examination in English and subsequently moved into English-medium education for the next stage.
              </p>
              <p>
                He performed strongly. But the marks were not the most important part of that story. The important part was the decision. He had identified a future he wanted to prepare for—and changed his present accordingly. That became one of the early mindset shifts in his life.
              </p>
            </div>
          </div>
        </section>

        {/* From Education to Technology & The Entrepreneur */}
        <section className="py-14 sm:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                FROM EDUCATION TO TECHNOLOGY
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                From Education to Technology
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  His academic journey took him from his early schooling to higher education in Ahmedabad and then to an MCA.
                </p>
                <p>
                  His professional career began in the technology ecosystem. He worked with Microsoft as an education evangelist and technofunctional consultant with a Microsoft Gold Partner company. Later came ERP implementation and a deeper understanding of enterprises and how businesses operate.
                </p>
                <p>
                  Technology taught him systems. Business taught him complexity. Experience taught him that knowing something and building something are two very different things.
                </p>
                <p>
                  Eventually, he wanted to build for himself.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                THE ENTREPRENEUR
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                The Entrepreneur
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  Around 2011, Dr. Pravin started his own venture in information technology. It was the beginning of a new chapter. And, as he later reflected, the entrepreneurial ecosystem was very different at that time.
                </p>
                <p>
                  For a first-generation entrepreneur, many things were unfamiliar. Compliance. Processes. Structures. The startup ecosystem itself.
                </p>
                <p>
                  He entered anyway. Because sometimes entrepreneurship begins before you have all the answers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Building, Struggling, Learning & The Story He Wanted to Tell */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                BUILDING, STRUGGLING, LEARNING
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                Building, Struggling, Learning
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  One of the ventures he built involved a cloud-based, mobile-based HRMS product. It was an early period for cloud technology, and there were uncertainties around the model and the technology.
                </p>
                <p>
                  There were struggles. There were experiments. There were lessons. The product was also designed with Africa in mind.
                </p>
                <p>
                  Eventually, Dr. Pravin came to another decision. The venture was sold to another company. He took an exit.
                </p>
                <p className="font-serif italic text-lg text-[#061836]">
                  That could have been the point at which the story ended. Instead, it created the next question: What next?
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                THE STORY HE WANTED TO TELL
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                The Story He Wanted to Tell
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  After the exit, he wanted to share his story as a first-generation entrepreneur. He approached media platforms, including Times of India and Inc42. He sent his story. But it was not published.
                </p>
                <p>
                  That experience stayed with him. Because he began to look at the situation differently.
                </p>
                <p>
                  Perhaps the problem was not a shortage of entrepreneurial stories. Perhaps there were simply many stories that were never being heard.
                </p>
                <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-200 text-center space-y-2">
                  <p className="text-xs uppercase tracking-widest font-bold text-[#0062D2]">
                    And that led to a larger belief
                  </p>
                  <p className="text-xl sm:text-2xl font-serif font-bold text-[#061836]">
                    Every story is important. Every story is unique. Every story matters.
                  </p>
                </div>
                <p>
                  That belief became part of the foundation for his work in entrepreneurial recognition and later contributed to the thinking behind PEERS GLOBAL.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition is Human & The Entrepreneur as a Learner */}
        <section className="py-14 sm:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                RECOGNITION IS HUMAN
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                Recognition is Human
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  For Dr. Pravin, recognition is not merely a ceremony. It is about what recognition can do to a person.
                </p>
                <p>
                  He recalls a moment from a VyapaarJagat Growth Show in Ahmedabad in 2020. A participant named Krina received recognition on stage. The recognition had an effect beyond the event. It changed how she was perceived within her family and social environment. She cried on the stage.
                </p>
                <p>
                  For Dr. Pravin, moments like that demonstrated something important: People want to know that their journey matters. Not everyone needs publicity. But everyone can value being seen.
                </p>
                <p>
                  And that distinction became increasingly important in his thinking.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                THE ENTREPRENEUR AS A LEARNER
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                The Entrepreneur as a Learner
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  There is another characteristic Dr. Pravin repeatedly returns to: learning.
                </p>
                <p>
                  He does not present entrepreneurship as a state in which someone eventually becomes complete. Instead, he describes entrepreneurship as a continuing process.
                </p>
                <p>
                  The market changes. People change. Businesses change. Technology changes. And the entrepreneur has to keep learning.
                </p>
                <p>
                  He has spoken about the need for regular homework, planning and study—even after achieving milestones. Success does not remove the need to learn. It increases the responsibility to keep learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reconstructing Yourself & From Entrepreneurship to Community */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                RECONSTRUCTING YOURSELF
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                Reconstructing Yourself
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  One of the ideas that emerges strongly from his journey is that people reconstruct themselves continuously.
                </p>
                <p>
                  The person who starts something is not necessarily the same person who understands it five years later.
                </p>
                <p>
                  Experience changes perspective. Markets change understanding. Challenges change priorities. People change. And therefore, the entrepreneur changes.
                </p>
                <p>
                  For Dr. Pravin, this is not a weakness in the journey. It is part of the journey.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800">
                  You learn. You understand. You adapt. You reconstruct. You continue.
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                FROM ENTREPRENEURSHIP TO COMMUNITY
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                From Entrepreneurship to Community
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  The next stage of the journey required a different kind of learning. Before creating PEERS GLOBAL, Dr. Pravin studied and experienced different communities and models, including TiE, BNI, Rotary, Lions, EO, YPO, Vistage and Round Tables.
                </p>
                <p>
                  The objective was to understand what already existed—and where something was still missing.
                </p>
                <p>
                  The conclusion was not that existing communities were wrong. It was that there was an opportunity to build something with a different centre of gravity.
                </p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                    <CheckCircle2 className="w-5 h-5 text-[#0062D2] shrink-0" />
                    <span><strong>Not simply networking:</strong> Collaboration.</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                    <CheckCircle2 className="w-5 h-5 text-[#0062D2] shrink-0" />
                    <span><strong>Not merely connecting people:</strong> Building trusted relationships.</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                    <CheckCircle2 className="w-5 h-5 text-[#0062D2] shrink-0" />
                    <span><strong>Not only business growth:</strong> Learning, Sharing and Relationships.</span>
                  </li>
                </ul>
                <p>
                  That became LSR. And LSR became one of the foundations of PEERS GLOBAL.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Peers Global & The Founder's Belief */}
        <section className="py-14 sm:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                WHY PEERS GLOBAL
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                Why PEERS GLOBAL
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  The organisation that emerged from this thinking was not intended to be simply another networking platform.
                </p>
                <p>
                  It was designed as a community of collaboration.
                </p>
                <p>
                  A place where entrepreneurs could meet people from relevant industries and purposes. A place where experience could be shared. A place where relationships could deepen. A place where collaboration could become a natural outcome of trust. And a place where an entrepreneur could gradually become more than a participant. A Peer.
                </p>
                <p>
                  This is why the founder&apos;s own journey matters to the organisation. PEERS GLOBAL did not emerge from a theoretical model alone. It emerged from years of experiencing entrepreneurship from the inside.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                THE FOUNDER&apos;S BELIEF
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                The Founder&apos;s Belief
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  At the centre of Dr. Pravin&apos;s philosophy is a simple understanding of entrepreneurship:
                </p>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <p className="text-xl font-serif font-bold text-[#061836]">
                    An entrepreneur is not simply someone who owns a business.
                  </p>
                  <p className="text-base text-slate-700">
                    Entrepreneurship is a mindset. It is about identifying a problem, developing a solution and creating value for people and society.
                  </p>
                </div>
                <p>
                  That belief changes the meaning of community. Because if entrepreneurship is about creating value, then an entrepreneurial community should also create value for its people.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What He Is Trying To Build & A Message That Is Personal */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                WHAT HE IS TRYING TO BUILD
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                What He Is Trying to Build
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  The ambition today is much larger than one organisation. PEERS GLOBAL has a stated mission to impact 1M+ entrepreneurs by 2030.
                </p>
                <p>
                  But the purpose behind the number is more important than the number itself.
                </p>
                <p>
                  The intention is to create a platform through which learning can move. Experience can move. Relationships can grow. Collaboration can happen. And one entrepreneur&apos;s progress can contribute to another entrepreneur&apos;s progress.
                </p>
                <p className="font-serif italic text-lg text-[#061836]">
                  That is the compounding effect Dr. Pravin wants to build.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                A MESSAGE THAT IS PERSONAL
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                A Message That Is Personal
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  When Dr. Pravin speaks about entrepreneurship, his message is not that every person should have an easy journey. His own journey does not support that idea.
                </p>
                <p>
                  Instead, his message is about accepting the reality of the journey and continuing to grow.
                </p>
                <p>
                  He often brings this back to three simple principles:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#061836] to-[#0A2E70] text-white text-center font-bold">
                    Never complain.
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#061836] to-[#0A2E70] text-white text-center font-bold">
                    Never make excuses.
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#061836] to-[#0A2E70] text-white text-center font-bold">
                    Never criticise.
                  </div>
                </div>
                <p>
                  For him, these are not merely motivational statements. They reflect a mindset of accepting responsibility for one&apos;s own growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Person Behind The Founder & What He Wants to Leave Behind */}
        <section className="py-14 sm:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                THE PERSON BEHIND THE FOUNDER
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                The Person Behind the Founder
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  Beyond the title, there is a person who still identifies with the values that shaped his beginning.
                </p>
                <p className="font-semibold text-slate-900">
                  A farmer. A learner. An entrepreneur. A student of experience. A believer in recognition. A builder of communities. And someone who continues to learn.
                </p>
                <p>
                  Perhaps that is why the story is more useful than the title. Because the title tells you what he is. The journey tells you why he is building what he is building.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                WHAT HE WANTS TO LEAVE BEHIND
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                What He Wants to Leave Behind
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  The question eventually becomes bigger than: &ldquo;What business did I build?&rdquo;
                </p>
                <p className="text-xl font-serif font-bold text-[#061836]">
                  It becomes: &ldquo;What became possible for other people because I built it?&rdquo;
                </p>
                <p>
                  That is the direction in which Dr. Pravin&apos;s journey has evolved:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[#0062D2] font-bold block mb-1">From building technology</span>
                    <span className="text-slate-700">To building entrepreneurial platforms.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[#0062D2] font-bold block mb-1">From telling stories</span>
                    <span className="text-slate-700">To creating recognition.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[#0062D2] font-bold block mb-1">From connecting entrepreneurs</span>
                    <span className="text-slate-700">To creating collaboration.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[#0062D2] font-bold block mb-1">From creating a community</span>
                    <span className="text-slate-700">To creating an ecosystem designed around learning, sharing and relationships.</span>
                  </div>
                </div>
                <p>
                  The ambition is no longer only personal. It is collective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Journey Continues & Farmer. Learner. Entrepreneur. Founder. */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                THE JOURNEY CONTINUES
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                The Journey Continues
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  There is no claim here that the journey is finished. Quite the opposite. The founder continues to describe himself as a learner.
                </p>
                <p>
                  And perhaps that is one of the most important things to understand about PEERS GLOBAL. It is being built by someone who does not believe the entrepreneur ever stops becoming.
                </p>
                <p>
                  There is always something more to learn. Someone else to understand. A problem to solve. A relationship to build. A person to help. A better version of the idea to discover.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                FARMER. LEARNER. ENTREPRENEUR. FOUNDER.
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                FARMER. LEARNER. ENTREPRENEUR. FOUNDER.
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  The journey from farmer to founder was not a journey away from where Dr. Pravin began. It was a journey that carried those beginnings forward.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
                    The patience of a farmer.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
                    The curiosity of a learner.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
                    The courage to experiment.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
                    The resilience to continue.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
                    The humility to learn again.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
                    Growth that helps others grow too.
                  </div>
                </div>
                <p>
                  That is the person behind PEERS GLOBAL. And that is the journey behind the founder.
                </p>
              </div>
            </div>

            {/* The Founder's Question */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#061836] via-[#0B2558] to-[#040E24] text-white shadow-xl space-y-5 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
                THE FOUNDER&apos;S QUESTION
              </span>
              <p className="text-sm text-slate-300 max-w-2xl mx-auto">
                Perhaps the most meaningful way to understand Dr. Pravin Parmar is not through a list of achievements. It is through the question that continues to sit behind the work:
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white max-w-2xl mx-auto leading-snug">
                &ldquo;What can become possible when entrepreneurs stop building alone?&rdquo;
              </h3>
              <p className="text-base text-blue-200 font-serif italic">
                PEERS GLOBAL is his answer in progress. And the journey continues.
              </p>
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs tracking-wider uppercase text-slate-300">
                <span>Discover the world he is building.</span>
                <span className="hidden sm:inline">·</span>
                <span className="text-white font-bold">Peers are Partners in Business and Friends in Life.</span>
                <span className="hidden sm:inline">·</span>
                <span>Designed in Bharat. Built for the World.</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* =========================================================================
          PART 2: THE LANGUAGE
          ========================================================================= */}
      <div id="language" className="scroll-mt-24">
        {/* Intro */}
        <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              THE LANGUAGE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
              The Language
            </h2>
            <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
              <p className="text-lg sm:text-xl font-serif text-[#061836] font-medium leading-relaxed">
                Every community that lasts builds a language of its own.
              </p>
              <p>
                A community becomes more than a collection of people when its members begin to share something deeper than a place or a purpose.
              </p>
              <p>
                They share a way of seeing. A way of speaking. A way of recognising one another. And, over time, a language of their own.
              </p>
              <p>
                At PEERS GLOBAL, our language is not created to make us sound different. It exists to help us express something different.
              </p>
              <p>
                Because when we use the word Peer, we mean more than a member. When we say Circle, we mean more than a meeting. When we say Give-First, we mean more than generosity. And when we say Life Impactor, we mean more than someone who has achieved something for themselves.
              </p>
              <p className="font-serif italic text-lg text-[#061836]">
                These words describe the culture we are trying to build together.
              </p>
            </div>
          </div>
        </section>

        {/* 01 Peer & 02 Circle */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* 01 Peer */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                01 — PEER
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                01 — PEER
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-lg font-serif font-medium text-[#061836]">
                  A Peer is not simply someone who belongs.
                </p>
                <p>
                  A Member has a status. A Peer has a relationship. That distinction matters.
                </p>
                <p>
                  You become a Member by joining PEERS GLOBAL. You become a Peer through the relationships you build, the trust you develop, the experience you share and the contribution you make.
                </p>
                <p>
                  A Peer may introduce you to someone. Challenge your thinking. Share something they learned the hard way. Open a door. Listen when business becomes difficult. Celebrate when something goes right. Or simply understand what it means to carry the responsibility of building something of your own.
                </p>
                <p>
                  Membership gives you access. Peer relationships create belonging.
                </p>
                <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 text-center font-serif text-lg font-bold text-[#061836]">
                  &ldquo;Membership is what you buy. Peer is what you become.&rdquo;
                </div>
              </div>
            </div>

            {/* 02 Circle */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                02 — CIRCLE
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                02 — CIRCLE
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-lg font-serif font-medium text-[#061836]">
                  Your Circle. Your Inner Board.
                </p>
                <p>
                  A Circle is where the idea of PEERS GLOBAL becomes personal. It is a structured community of entrepreneurs who meet regularly, build relationships and create opportunities for one another.
                </p>
                <p>
                  But a Circle is not simply a room full of business owners. It is designed to become something closer to an Inner Board.
                </p>
                <p>
                  A group of people whose experience you can draw upon. People you can ask. People you can help. People who may see something in your business that you cannot see from inside it. And people who can stand beside you when the decision in front of you is bigger than the business problem itself.
                </p>
                <p>
                  The value of a Circle is therefore not measured only by the number of people in the room. It is measured by the quality of what people are willing to bring into that room.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-900 text-center">
                  Circles create the environment. Relationships create the value.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 Powerhouse & 04 Give-First */}
        <section className="py-14 sm:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* 03 Powerhouse */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                03 — POWERHOUSE
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                03 — POWERHOUSE
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-lg font-serif font-medium text-[#061836]">
                  Contribution needs people who are willing to step forward.
                </p>
                <p>
                  A Powerhouse is a Peer who takes responsibility for helping the community move forward. It represents contribution in action.
                </p>
                <p>
                  A Powerhouse may help organise, support, connect, coordinate, facilitate or strengthen the experience of others.
                </p>
                <p>
                  The title itself is less important than the behaviour behind it. Because leadership inside PEERS GLOBAL is not intended to be a position of distance. It is a responsibility to serve the people around you.
                </p>
                <p>
                  The strongest communities are not built by the people who ask, &ldquo;What do I get?&rdquo; They are strengthened by people who also ask: &ldquo;What can I contribute?&rdquo;
                </p>
              </div>
            </div>

            {/* 04 Give-First */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                04 — GIVE-FIRST
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                04 — GIVE-FIRST
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-lg font-serif font-medium text-[#061836]">
                  Before asking what the community can do for you, ask what you can do for someone in it.
                </p>
                <p>
                  Give-First is one of the most important ideas in the PEERS GLOBAL language. It does not mean giving without boundaries. It does not mean ignoring your own goals. And it does not mean that contribution should become a transaction in disguise.
                </p>
                <p>
                  It means beginning with a different mindset. Instead of entering every relationship with: &ldquo;What can I get?&rdquo; you begin with: &ldquo;How can I help?&rdquo;
                </p>
                <p>
                  Perhaps you know someone who can solve a problem. Perhaps you have already made the mistake another entrepreneur is about to make. Perhaps you can share an introduction. Perhaps you can teach something. Perhaps you can simply listen.
                </p>
                <p>
                  A small act of contribution can create a relationship. A relationship can create trust. Trust can create collaboration. And collaboration can create impact.
                </p>
                <p>
                  That is why Give-First is not merely a behaviour inside PEERS GLOBAL. It is a way of thinking about community.
                </p>
                <div className="p-4 rounded-xl bg-white border border-blue-200 font-semibold text-[#0062D2] text-center">
                  Give first. Build trust. Create value. Let relationships grow.
                </div>
                <p>
                  The return may not always come from the person you helped. It may come months later. From another Peer. Through another relationship. In another form. That is how a community begins to compound.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 05 Life Impactor & 06 LSR */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* 05 Life Impactor */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                05 — LIFE IMPACTOR
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                05 — LIFE IMPACTOR
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-lg font-serif font-medium text-[#061836]">
                  Success becomes more meaningful when it changes something for someone else.
                </p>
                <p>
                  A Life Impactor is a Peer whose actions create a positive difference in another person&apos;s journey.
                </p>
                <div className="p-6 rounded-2xl bg-slate-900 text-white text-center space-y-2">
                  <p className="text-xs uppercase tracking-widest text-blue-300 font-bold">
                    At PEERS GLOBAL, impact is intentionally made simple:
                  </p>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">
                    1 Action = 1 Life Impacted
                  </p>
                </div>
                <p>
                  The principle is not that every action has the same commercial value. It is that every genuine contribution matters.
                </p>
                <p>
                  An introduction matters. Teaching matters. Mentoring matters. Helping solve a problem matters. Leadership matters. Connecting the right people matters.
                </p>
                <p>
                  The purpose of recognising impact is not to turn relationships into competition. It is to make contribution visible.
                </p>
                <p>
                  Because what gets recognised gets remembered. And what gets remembered is more likely to be repeated.
                </p>
                <p>
                  Over time, repeated contribution can become culture. And culture can become impact at scale.
                </p>
                <p>
                  A Life Impactor is not defined only by what they achieve. They are also recognised by what becomes possible for others because they acted.
                </p>
              </div>
            </div>

            {/* 06 LSR */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                06 — LSR
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                06 — LSR
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-lg font-serif font-medium text-[#061836]">
                  Learning. Sharing. Relationships.
                </p>
                <p>
                  Three words sit at the heart of the PEERS GLOBAL model:
                </p>
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <h3 className="font-bold text-[#061836] text-base uppercase tracking-wider">
                      LEARNING
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Because entrepreneurs never stop learning. Markets change. Technology changes. Customers change. People change. And the entrepreneur must keep changing too. Learning is not confined to a classroom. It can come from another entrepreneur&apos;s experience, a difficult conversation, a mistake, a success, a mentor, a Peer or a problem you have never faced before.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <h3 className="font-bold text-[#061836] text-base uppercase tracking-wider">
                      SHARING
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Knowledge becomes more valuable when it moves. The lesson you learned last year may save another entrepreneur six months. The connection you have built may solve someone else&apos;s problem. The mistake you survived may become someone else&apos;s shortcut. Sharing turns individual experience into collective strength.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <h3 className="font-bold text-[#061836] text-base uppercase tracking-wider">
                      RELATIONSHIPS
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Business is built by people. Trust takes time. Relationships take attention. And meaningful collaboration rarely begins with a transaction.
                    </p>
                  </div>
                </div>
                <p>
                  LSR therefore is not a formula to memorise. It is a way of understanding entrepreneurial growth:
                </p>
                <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 font-semibold text-[#0062D2] text-center">
                  Learn from people. Share what you know. Build relationships that matter.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07 Unity, 08 MindMeld & 09 Confidential Forum */}
        <section className="py-14 sm:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* 07 Unity */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                07 — UNITY
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                07 — UNITY
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-lg font-serif font-medium text-[#061836]">
                  The community does not disappear when the meeting ends.
                </p>
                <p>
                  Unity is the digital home of the PEERS GLOBAL community. It brings the everyday experience of the community into one place.
                </p>
                <p>
                  Your Circle. Your Peers. Your conversations. Your collaborations. Your contributions. Your events. Your impact. And the relationships that continue between physical meetings.
                </p>
                <p>
                  Because community should not exist only for the few hours when people sit together.
                </p>
                <p>
                  An entrepreneur&apos;s questions do not wait for the next monthly meeting. Neither do opportunities. Neither does the need for support.
                </p>
                <p>
                  Unity helps keep the community connected between the meetings that bring people together physically.
                </p>
                <p className="font-serif italic text-lg font-bold text-[#061836]">
                  The meeting is an event. The relationship is the experience.
                </p>
              </div>
            </div>

            {/* 08 MindMeld */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                08 — MINDMELD
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                08 — MINDMELD
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-lg font-serif font-medium text-[#061836]">
                  When different entrepreneurs sit together, new possibilities can emerge.
                </p>
                <p>
                  A MindMeld brings entrepreneurs together beyond the boundaries of their individual Circle.
                </p>
                <p>
                  Different businesses. Different industries. Different experiences. Different perspectives. One shared environment.
                </p>
                <p>
                  The value is not simply in meeting more people. It is in encountering ideas you may not have encountered inside your own business world.
                </p>
                <p>
                  A question from one entrepreneur can challenge another&apos;s assumption. An experience from one industry can solve a problem in another. A conversation can reveal a possibility that neither person had considered before.
                </p>
                <p>
                  That is the purpose of MindMeld: to create space for minds, experiences and possibilities to meet.
                </p>
              </div>
            </div>

            {/* 09 Confidential Forum */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                09 — CONFIDENTIAL FORUM
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                09 — CONFIDENTIAL FORUM
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-lg font-serif font-medium text-[#061836]">
                  Some conversations need trust before they need answers.
                </p>
                <p>
                  Entrepreneurship comes with questions that are not always easy to ask publicly.
                </p>
                <p>
                  A difficult employee decision. A partnership concern. A financial challenge. A succession question. A leadership dilemma. A personal situation affecting the business.
                </p>
                <p>
                  In those moments, entrepreneurs may not need an audience. They may need people they trust.
                </p>
                <p>
                  The Confidential Forum exists for conversations that require discretion, respect and maturity.
                </p>
                <p>
                  Its value is not in how much is said. It is in knowing that certain things can be said safely.
                </p>
                <p>
                  Because meaningful relationships are built not only through celebration. They are also built through the moments when someone is willing to say: &ldquo;I need help.&rdquo; And someone else is willing to listen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10 The 10 Forms of Collaboration */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                10 — THE 10 FORMS OF COLLABORATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                10 — THE 10 FORMS OF COLLABORATION
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Collaboration can take many forms. At PEERS GLOBAL, collaboration is not limited to business referrals. It can happen wherever one entrepreneur&apos;s experience, relationship, resource or capability can help another move forward.
              </p>
              <p className="text-sm font-semibold text-slate-800">
                The ten forms are:
              </p>
            </div>

            {/* Responsive Table of 10 Forms */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700">
                    <th className="py-3.5 px-4 w-12 text-center">#</th>
                    <th className="py-3.5 px-4 w-1/3">Form of Collaboration</th>
                    <th className="py-3.5 px-4">What it can mean</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {FORMS_OF_COLLABORATION.map((item) => (
                    <tr key={item.num} className="hover:bg-blue-50/40 transition-colors">
                      <td className="py-3.5 px-4 text-center font-bold text-[#0062D2]">{item.num}</td>
                      <td className="py-3.5 px-4 font-semibold text-[#061836]">{item.form}</td>
                      <td className="py-3.5 px-4 text-slate-600">{item.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-slate-700 leading-relaxed pt-2">
              Every form is different. The principle behind them is the same: One entrepreneur chooses to help another. That is where collaboration begins.
            </p>
          </div>
        </section>

        {/* The Peers Global Reference Table */}
        <section className="py-14 sm:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                THE PEERS GLOBAL REFERENCE TABLE
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                The PEERS GLOBAL Reference Table
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700">
                    <th className="py-3.5 px-4 w-1/3">PEERS GLOBAL WORD</th>
                    <th className="py-3.5 px-4">WHAT IT MEANS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {REFERENCE_TABLE_TERMS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-[#061836]">{item.word}</td>
                      <td className="py-3.5 px-4 text-slate-600">{item.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Words Matter & A Language Becomes Culture */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Why Words Matter */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                WHY WORDS MATTER
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                Why Words Matter
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  Words shape behaviour. If we call someone a customer, we naturally think about transactions. If we call someone a lead, we naturally think about conversion. If we call someone a member, we recognise belonging—but perhaps only formally.
                </p>
                <p>
                  But when we call someone a Peer, something changes. The word suggests relationship. Respect. Reciprocity. Experience. Human equality.
                </p>
                <p>
                  That is why language matters so much to PEERS GLOBAL. We are not trying to create terminology for the sake of branding. We are trying to create words that remind us how we are expected to treat one another.
                </p>
                <p>
                  The language should guide the behaviour. And the behaviour should make the language real.
                </p>
              </div>
            </div>

            {/* A Language Becomes Culture When People Live It */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                A LANGUAGE BECOMES CULTURE WHEN PEOPLE LIVE IT
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                A Language Becomes Culture When People Live It
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  You can read the words on a page. But that alone does not make them meaningful.
                </p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                    <strong>Give-First</strong> becomes real when someone helps without being asked.
                  </li>
                  <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                    <strong>Peer</strong> becomes real when trust is built.
                  </li>
                  <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                    <strong>Circle</strong> becomes real when people show up for one another.
                  </li>
                  <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                    <strong>Confidential Forum</strong> becomes real when sensitive conversations remain respected.
                  </li>
                  <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                    <strong>Life Impactor</strong> becomes real when someone&apos;s action changes another person&apos;s journey.
                  </li>
                  <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                    <strong>LSR</strong> becomes real when learning is shared and relationships deepen.
                  </li>
                  <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                    <strong>Unity</strong> becomes real when the community remains present between meetings.
                  </li>
                </ul>
                <p>
                  That is when language stops being vocabulary. It becomes culture.
                </p>
              </div>
            </div>

            {/* The Peers Global Language in One Line */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                THE PEERS GLOBAL LANGUAGE IN ONE LINE
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                The PEERS GLOBAL Language in One Line
              </h2>
              <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/80 border border-blue-200 text-center space-y-3">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#061836]">
                  Circles, not crowds. Trust, not transactions. Peers, not gurus.
                </p>
                <p className="text-slate-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                  Because the ambition is not simply to create a larger network. It is to create a community in which entrepreneurs can learn from one another, contribute to one another, collaborate with one another—and grow without having to build alone.
                </p>
              </div>
            </div>

            {/* Your Next Word Could Be Peer */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                YOUR NEXT WORD COULD BE PEER
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                Your Next Word Could Be Peer
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  Perhaps you came looking for a business community. Perhaps you were looking for relationships. Perhaps you were looking for experience. Perhaps you were looking for people who understand what entrepreneurship really feels like.
                </p>
                <p>
                  You may discover that what you were looking for was not another network. It was the right environment.
                </p>
                <p>
                  A place where you can learn. A place where you can contribute. A place where you can ask. A place where you can help. A place where relationships can become meaningful.
                </p>
                <p>
                  And perhaps, over time, a place where you are no longer simply a Member. You become a Peer.
                </p>
                <div className="p-6 rounded-2xl bg-[#061836] text-white space-y-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-serif font-bold">Discover PEERS GLOBAL.</p>
                      <p className="text-xs text-blue-200">Peers are Partners in Business and Friends in Life. Designed in Bharat. Built for the World.</p>
                    </div>
                    <a
                      href="https://unity.peersglobal.com"
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-2.5 rounded-full bg-white text-[#061836] text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors shrink-0"
                    >
                      Download the Unity App
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* =========================================================================
          PART 3: OUR CULTURE & CODE
          ========================================================================= */}
      <div id="culture-and-code" className="scroll-mt-24">
        {/* Intro */}
        <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              OUR CULTURE &amp; CODE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
              Our Culture &amp; Code
            </h2>
            <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
              <p className="text-lg sm:text-xl font-serif text-[#061836] font-medium leading-relaxed">
                Culture is what a community does, repeatedly, until it becomes who they are.
              </p>
              <p>
                A community can have a powerful idea. It can have a beautiful vision. It can have an impressive structure. But none of these, by themselves, create culture.
              </p>
              <p>
                Culture is created by what people do when nobody is watching. How they speak to one another. How they respond when someone asks for help. How they treat confidential information. How they welcome someone new. How they recognise contribution. How they handle disagreement. And how they behave when there is nothing to gain immediately.
              </p>
              <p>
                At PEERS GLOBAL, culture is therefore not decoration around the business. It is part of the architecture.
              </p>
              <p>
                Our language tells us what we mean. Our Code tells us how we behave. Our rituals give us opportunities to practise that behaviour. Together, they create the environment in which relationships can become trust.
              </p>
            </div>
          </div>
        </section>

        {/* Why A Written Code? & The Peers Code */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Why A Written Code? */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                WHY A WRITTEN CODE?
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                Why a Written Code?
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-lg font-serif font-medium text-[#061836]">
                  Because good intentions are not enough.
                </p>
                <p>
                  Most people want to behave well. But communities become complicated as they grow.
                </p>
                <p>
                  Different businesses. Different personalities. Different cultures. Different expectations. Different experiences.
                </p>
                <p>
                  What feels obvious to one person may not be obvious to another.
                </p>
                <p>
                  A written Code creates a shared understanding. It tells every Peer: This is how we treat one another here.
                </p>
                <p>
                  Not because people need to be controlled. But because people deserve to know the standard of the community they have chosen to enter.
                </p>
                <p>
                  The Code protects the quality of the environment. It protects trust. It protects relationships. And ultimately, it protects the person who walks into a Circle expecting to be treated with dignity.
                </p>
              </div>
            </div>

            {/* The Peers Code */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                THE PEERS CODE
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                The Peers Code
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-lg font-serif font-medium text-[#061836]">
                  Six commitments that define how we belong.
                </p>
                <p>
                  The Peers Code is the behavioural foundation of PEERS GLOBAL. It applies not only when everything is going well. It matters even more when there is disagreement, disappointment, competition or pressure.
                </p>
              </div>

              {/* The Six Approved Commitments Cards */}
              <div className="pt-2">
                <div className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-4">
                  [THE SIX APPROVED PEERS CODE COMMITMENTS]
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {APPROVED_PEERS_CODE_COMMITMENTS.map((item) => {
                    const IconComp = item.icon
                    return (
                      <div
                        key={item.num}
                        className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-300 hover:shadow-xs transition-all space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-3xl font-bold text-amber-500">
                            {item.num}.
                          </span>
                          <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center">
                            <IconComp className="size-5" />
                          </div>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-[#061836]">
                          {item.title}
                        </h3>
                        <p className="text-xs uppercase font-bold tracking-wide text-[#0062D2]">
                          {item.essence}
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <p className="font-bold text-slate-800">
                  The exact six commitments from the approved Peers Code should be reproduced here without editorial alteration.
                </p>
                <p>
                  Editorial principle: This section should remain legally and organisationally identical to the approved Peers Code. The website copy around it may be humanised; the Code itself should not be paraphrased.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed">
                The Code is not intended to make everyone identical. It exists so that people with different businesses, personalities and perspectives can still share the same standard of respect.
              </p>
            </div>
          </div>
        </section>

        {/* What the Code Asks of Us & Confidentiality is the Foundation */}
        <section className="py-14 sm:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* What the Code Asks of Us */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                WHAT THE CODE ASKS OF US
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                What the Code Asks of Us
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-lg font-serif font-medium text-[#061836]">
                  Be the kind of Peer you would want beside you.
                </p>
                <p>
                  The Code becomes meaningful through everyday behaviour. That means remembering that the person across the table is not a lead. Not a prospect. Not a source of business. Not a number. They are a person who has chosen to spend part of their entrepreneurial journey in this community.
                </p>
                <p>
                  So we listen. We respect. We contribute. We keep our word. We honour confidentiality. We disagree without diminishing the person. We celebrate contribution without making recognition a competition. And when someone needs help, we remember that asking for help is not weakness. It is part of being human.
                </p>
              </div>
            </div>

            {/* Confidentiality is the Foundation */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                CONFIDENTIALITY IS THE FOUNDATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                Confidentiality is the Foundation
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-lg font-serif font-medium text-[#061836]">
                  Trust cannot exist where people are afraid to speak.
                </p>
                <p>
                  Entrepreneurs sometimes carry questions they cannot discuss openly elsewhere.
                </p>
                <p>
                  A difficult business decision. A partnership concern. A people issue. A financial challenge. A leadership dilemma. A personal situation affecting the business.
                </p>
                <p>
                  The value of a trusted community is that people can sometimes say: &ldquo;I don&apos;t know.&rdquo; Or: &ldquo;I made a mistake.&rdquo; Or simply: &ldquo;I need help.&rdquo;
                </p>
                <p>
                  That possibility exists only when people believe their words will be respected.
                </p>
                <p>
                  Confidentiality is therefore not a courtesy. It is foundational to trust.
                </p>
                <p>
                  What is shared in a confidential setting must be treated with the seriousness that the person sharing it deserves. The objective is not merely to protect information. It is to protect the courage required to share it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Respect is not Optional & Give-First is a Cultural Practice */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Respect is not Optional */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                RESPECT IS NOT OPTIONAL
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                Respect is Not Optional
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-lg font-serif font-medium text-[#061836]">
                  Every Peer deserves to feel respected and honoured.
                </p>
                <p>
                  A community can be selective without becoming elitist. It can have standards without making people feel small. It can disagree without becoming disrespectful. And it can recognise achievement without creating hierarchy between human beings.
                </p>
                <p>
                  At PEERS GLOBAL, the standard should be simple: People should feel respected and honoured.
                </p>
                <p>
                  That includes the entrepreneur who has built a large organisation. And the entrepreneur who is still building the first one. The experienced founder. The first-generation entrepreneur. The person asking for help. The person offering it. The person leading the room. And the person quietly listening from the corner.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center font-bold text-slate-900">
                  Status may differ. Experience may differ. Business size may differ. Human dignity does not.
                </div>
              </div>
            </div>

            {/* Give-First is a Cultural Practice */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                GIVE-FIRST IS A CULTURAL PRACTICE
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                Give-First is a Cultural Practice
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  The language of PEERS GLOBAL introduces Give-First. The culture gives it a place to live.
                </p>
                <p>
                  Give-First means entering relationships with the willingness to contribute. Sometimes that contribution is visible. Sometimes it is not.
                </p>
                <p>
                  An introduction. An idea. An experience. A recommendation. A lesson learned the hard way. A listening ear. A connection. A few minutes of attention.
                </p>
                <p>
                  The important question is not: &ldquo;Was this valuable enough?&rdquo; The question is: &ldquo;Did I genuinely try to help?&rdquo;
                </p>
                <p>
                  A culture of contribution becomes powerful when people stop waiting for someone else to create value first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Rituals */}
        <section className="py-14 sm:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                THE RITUALS
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                The Rituals
              </h2>
              <p className="text-lg font-serif font-medium text-[#061836]">
                Culture becomes real through repeated moments.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The PEERS GLOBAL rituals give the community recurring opportunities to practise its values. They are not formalities to be completed. They are moments that remind people what the community is for.
              </p>
            </div>

            <div className="space-y-6">
              {/* 01 Give and Ask */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl font-bold text-[#0062D2]">01 —</span>
                  <h3 className="font-serif text-2xl font-bold text-[#061836]">GIVE AND ASK</h3>
                </div>
                <p className="text-base font-semibold text-slate-800">
                  Begin with contribution. Then ask for what you need.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The Give and Ask ritual creates space for both sides of entrepreneurial relationships.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs sm:text-sm">
                    <strong className="text-[#0062D2] block mb-1">Give</strong>
                    <span>What can I contribute to someone here?</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs sm:text-sm">
                    <strong className="text-[#0062D2] block mb-1">Ask</strong>
                    <span>What help, experience, connection or perspective do I need?</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  This matters because a healthy community must make room for both generosity and vulnerability. Giving says: &ldquo;I have something to contribute.&rdquo; Asking says: &ldquo;I trust this community enough to say that I need something.&rdquo; Both are important.
                </p>
              </div>

              {/* 02 Peer-to-Peer */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl font-bold text-[#0062D2]">02 —</span>
                  <h3 className="font-serif text-2xl font-bold text-[#061836]">PEER-TO-PEER</h3>
                </div>
                <p className="text-base font-semibold text-slate-800">
                  One relationship at a time.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A Circle can introduce many people. But meaningful relationships are often built one conversation at a time.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Peer-to-Peer creates space for entrepreneurs to move beyond introductions and actually understand one another.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The business. The journey. The experience. The challenge. The ambition. The person behind the business.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                  Because collaboration rarely begins with a transaction. It begins with understanding.
                </p>
              </div>

              {/* 03 Welcome */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl font-bold text-[#0062D2]">03 —</span>
                  <h3 className="font-serif text-2xl font-bold text-[#061836]">WELCOME</h3>
                </div>
                <p className="text-base font-semibold text-slate-800">
                  Every new person deserves to feel that they belong.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The first experience of a community matters. A new Peer should not have to fight their way into the room.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Someone should introduce them. Someone should make space for them. Someone should help them understand how things work. And someone should make the first interaction feel human.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Welcome is therefore more than hospitality. It is a statement: &ldquo;We are glad you are here.&rdquo;
                </p>
              </div>

              {/* 04 Recognition */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl font-bold text-[#0062D2]">04 —</span>
                  <h3 className="font-serif text-2xl font-bold text-[#061836]">RECOGNITION</h3>
                </div>
                <p className="text-base font-semibold text-slate-800">
                  Notice the contribution.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  People do not contribute only for recognition. But recognition tells people that their contribution was seen.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A thoughtful introduction. A meaningful collaboration. A helpful conversation. A leadership contribution. A difficult problem solved. A Peer who showed up when someone needed support.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Recognition makes contribution visible. And visible contribution can encourage more contribution.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The purpose is not applause for its own sake. It is appreciation. People deserve to know that what they gave mattered.
                </p>
              </div>

              {/* 05 Closing */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl font-bold text-[#0062D2]">05 —</span>
                  <h3 className="font-serif text-2xl font-bold text-[#061836]">CLOSING</h3>
                </div>
                <p className="text-base font-semibold text-slate-800">
                  Leave the room with gratitude and possibility.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every gathering eventually ends. But the relationship should continue.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The Closing ritual creates a moment to reflect: What did I learn? Who did I meet? Who helped me? Whom can I help next? What should I carry forward?
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A good meeting should not end simply because the agenda is complete. It should end with people knowing what they will do differently because they were there.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Standards Are Upheld & What This Culture Protects */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* How Standards Are Upheld */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                HOW STANDARDS ARE UPHELD
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                How Standards Are Upheld
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-lg font-serif font-medium text-[#061836]">
                  A Code has meaning only when it is respected.
                </p>
                <p>
                  A written Code is not useful if it exists only as a page on a website.
                </p>
                <p>
                  PEERS GLOBAL therefore treats standards as part of the community experience.
                </p>
                <p>
                  Concerns about conduct should be taken seriously. People should have a clear understanding of what behaviour is expected. And where behaviour falls outside the community&apos;s standards, it should be addressed through the appropriate organisational process.
                </p>
                <p>
                  The purpose is not punishment for its own sake. The purpose is protection. Protection of trust. Protection of people. Protection of the Circle. Protection of the culture that every Peer has entered in good faith.
                </p>
              </div>
            </div>

            {/* What This Culture Protects */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                WHAT THIS CULTURE PROTECTS
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                What This Culture Protects
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  Culture is often described by what it creates. But strong culture is also defined by what it refuses to allow to disappear.
                </p>
                <p className="font-semibold text-slate-900">
                  Our culture protects:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-[#0062D2] block mb-1 uppercase tracking-wider text-xs">TRUST</strong>
                    <span className="text-xs text-slate-600">Because meaningful relationships cannot be built without it.</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-[#0062D2] block mb-1 uppercase tracking-wider text-xs">CONFIDENTIALITY</strong>
                    <span className="text-xs text-slate-600">Because entrepreneurs need places where they can speak honestly.</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-[#0062D2] block mb-1 uppercase tracking-wider text-xs">RESPECT</strong>
                    <span className="text-xs text-slate-600">Because no achievement gives one person permission to diminish another.</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-[#0062D2] block mb-1 uppercase tracking-wider text-xs">CONTRIBUTION</strong>
                    <span className="text-xs text-slate-600">Because communities become stronger when people give, not only take.</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-[#0062D2] block mb-1 uppercase tracking-wider text-xs">BELONGING</strong>
                    <span className="text-xs text-slate-600">Because nobody should have to earn basic human dignity.</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-[#0062D2] block mb-1 uppercase tracking-wider text-xs">COLLABORATION</strong>
                    <span className="text-xs text-slate-600">Because the purpose is not simply to know more people. It is to create something valuable together.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture is Everyday, The Code and The Language Work Together & The Culture Test */}
        <section className="py-14 sm:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Culture is Everyday */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                CULTURE IS EVERYDAY
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                Culture is Everyday
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  Culture is not created at an annual summit. It is created in the small moments.
                </p>
                <p>
                  When someone makes an introduction. When someone shares a difficult lesson. When someone listens without interrupting. When a new Peer is welcomed. When confidential information remains confidential. When someone says: &ldquo;I can help.&rdquo; And when someone else feels safe enough to say: &ldquo;I need help.&rdquo;
                </p>
                <p className="font-semibold text-slate-900">
                  That is culture. Repeated. Practised. Experienced. Remembered. And eventually, owned by the people inside the community.
                </p>
              </div>
            </div>

            {/* The Code and the Language Work Together */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                THE CODE AND THE LANGUAGE WORK TOGETHER
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                The Code and the Language Work Together
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  Our previous page introduced the words: Peer. Circle. Powerhouse. Give-First. Life Impactor. LSR. Unity. MindMeld. Confidential Forum. Collaboration.
                </p>
                <p>
                  This page gives those words a behavioural foundation.
                </p>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 text-sm text-slate-800">
                  <p><strong>Peer</strong> is how we relate.</p>
                  <p><strong>Circle</strong> is where we belong.</p>
                  <p><strong>Give-First</strong> is how we contribute.</p>
                  <p><strong>LSR</strong> is how we grow.</p>
                  <p><strong>Confidentiality</strong> is how we build trust.</p>
                  <p><strong>Recognition</strong> is how we appreciate contribution.</p>
                  <p><strong>Life Impact</strong> is how we understand the difference our actions can make.</p>
                  <p className="pt-2 border-t border-slate-100 font-bold text-[#0062D2]">
                    And the Code is the standard that holds them together.
                  </p>
                </div>
              </div>
            </div>

            {/* The Culture Test */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                THE CULTURE TEST
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                The Culture Test
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  Before asking what PEERS GLOBAL can do for us, perhaps we should ask a different question:
                </p>
                <p className="text-xl font-serif font-bold text-[#061836]">
                  What kind of person am I becoming inside this community?
                </p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#0062D2] shrink-0" />
                    <span>Am I learning?</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#0062D2] shrink-0" />
                    <span>Am I sharing?</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#0062D2] shrink-0" />
                    <span>Am I building relationships?</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#0062D2] shrink-0" />
                    <span>Am I contributing?</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#0062D2] shrink-0" />
                    <span>Am I keeping trust?</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#0062D2] shrink-0" />
                    <span>Am I making someone else&apos;s journey easier?</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#0062D2] shrink-0" />
                    <span>Am I helping create the environment I would want to experience myself?</span>
                  </li>
                </ul>
                <p>
                  Because ultimately, culture is not something the organisation gives its members. Culture is something its people create together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* This is the Standard & Culture is not What We Write */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* This is the Standard */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                THIS IS THE STANDARD
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                This Is the Standard
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  We want PEERS GLOBAL to be a place where ambition and humility can exist together.
                </p>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-slate-800 text-sm leading-relaxed">
                  <p>Where experienced entrepreneurs can remain learners.</p>
                  <p>Where asking for help is respected.</p>
                  <p>Where contribution matters.</p>
                  <p>Where confidentiality is taken seriously.</p>
                  <p>Where recognition is genuine.</p>
                  <p>Where leadership means responsibility.</p>
                  <p>Where standards create trust rather than fear.</p>
                </div>
                <p>
                  And where every person who enters the community can feel:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm font-serif italic text-[#061836]">
                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 font-semibold">
                    &ldquo;I am respected here.&rdquo;
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 font-semibold">
                    &ldquo;My journey matters here.&rdquo;
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 font-semibold">
                    &ldquo;I can contribute here.&rdquo;
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 font-semibold">
                    &ldquo;I can grow here.&rdquo;
                  </div>
                </div>
              </div>
            </div>

            {/* Culture is not What We Write */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                CULTURE IS NOT WHAT WE WRITE
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                Culture is Not What We Write
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p className="text-xl font-serif font-medium text-[#061836]">
                  It is what we repeat.
                </p>
                <p>
                  It is how we welcome. How we listen. How we help. How we disagree. How we keep confidence. How we recognise. How we lead. How we behave when nobody is watching.
                </p>
                <p className="font-bold text-[#0062D2]">
                  That is when the Code becomes culture.
                </p>
                <p className="font-bold text-[#061836]">
                  And that is when culture becomes the character of the community.
                </p>
              </div>
            </div>

            {/* Come Experience the Culture */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                COME EXPERIENCE THE CULTURE
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] leading-tight">
                Come Experience the Culture
              </h2>
              <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
                <p>
                  You can read about a community. You can understand its structure. You can learn its language. But culture is ultimately experienced through people.
                </p>
                <p>
                  Meet the people. Enter the Circle. Listen to the conversations. Experience the relationships. And decide what this environment could mean for your own entrepreneurial journey.
                </p>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-[#061836] via-[#0B2558] to-[#040E24] text-white shadow-xl space-y-6 text-center">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold">
                    Peers are Partners in Business and Friends in Life.
                  </h3>
                  <p className="text-amber-300 font-semibold tracking-wide text-sm sm:text-base">
                    Circles, not crowds. Trust, not transactions. Peers, not gurus.
                  </p>
                  <p className="text-xs uppercase tracking-widest text-blue-200">
                    Designed in Bharat. Built for the World.
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://unity.peersglobal.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
                    >
                      Download the Unity App
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ─── Closing Banner ─── */}
      <ClosingCtaSection
        eyebrow="DR. PRAVIN PARMAR · FOUNDER, PEERS GLOBAL"
        title="Discover the world he is building."
        subtitle="Peers are Partners in Business and Friends in Life."
        description="Designed in Bharat. Built for the World. Download the Unity App and discover your Circle."
        primaryButtonText="DOWNLOAD THE UNITY APP"
        primaryButtonHref="https://unity.peersglobal.com"
        secondaryButtonText="EXPLORE OUR STORY"
        secondaryButtonHref="/our-story"
        secondaryButtonIcon={<ChevronRight className="size-4" />}
      />
    </div>
  )
}

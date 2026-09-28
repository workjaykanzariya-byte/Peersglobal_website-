'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Quote,
  Sparkles,
  HeartHandshake,
  Building2,
  Globe2,
  Award,
  CheckCircle2,
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
} from 'lucide-react'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'

export function FounderClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2] antialiased">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>About</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Dr. Pravin Parmar</span>
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
                {/* Cinematic subtle vignette gradients */}
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
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0062D2] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0062D2]" />
                Founder, Peers Global
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-bold text-[#061836] tracking-tight leading-[1.08]">
                  Dr. Pravin <span className="italic text-[#1E4ED8]">Parmar</span>
                </h1>
                <p className="text-lg sm:text-xl font-serif text-slate-800 italic leading-relaxed font-normal">
                  Founder, PEERS GLOBAL · From Farmer to Founder
                </p>
              </div>

              {/* Core Quote Card */}
              <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-white border border-blue-100 shadow-2xs border-l-4 border-l-[#0062D2]">
                <Quote className="w-7 h-7 text-blue-400/25 absolute top-4 right-4" />
                <p className="text-base sm:text-lg font-serif italic text-[#061836] leading-relaxed pr-6">
                  &ldquo;Some journeys begin with a clear destination. Others begin with a decision to take the next step. My journey belongs to the second kind.&rdquo;
                </p>
                <p className="mt-2.5 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                  — Dr. Pravin Parmar
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_4px_16px_rgba(0,98,210,0.25)] hover:shadow-[0_6px_22px_rgba(0,98,210,0.35)] transition-all active:scale-[0.98] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Download Unity App
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>

                <Link
                  href="/our-story"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold border border-slate-300 shadow-xs hover:border-slate-400 transition-all active:scale-[0.98]"
                >
                  Read Our Story
                </Link>
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

      {/* ─── Fast-Track Editorial Overview Bar ─── */}
      <section className="bg-[#FAFBFD] border-b border-slate-200/80 py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] block">Identity</span>
              <span className="text-sm font-serif font-bold text-[#061836]">Farmer &amp; Lifelong Student</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] block">Turning Point</span>
              <span className="text-sm font-serif font-bold text-[#061836]">Government School to Tech</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] block">Core Philosophy</span>
              <span className="text-sm font-serif font-bold text-[#061836]">LSR Growth Model</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] block">Mission 2030</span>
              <span className="text-sm font-serif font-bold text-[#061836]">1M+ Lives Impacted</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Chapter 1: The Farmer & Lifelong Student ─── */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            THE FARMER
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

            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-3">
              <h3 className="text-lg font-bold text-blue-950 font-serif">The Mindset of a Farmer</h3>
              <p className="text-sm sm:text-base text-blue-900 leading-relaxed">
                Even today, Dr. Pravin describes himself as a farmer. It is not simply a description of where he came from. It is part of how he sees life.
              </p>
              <p className="text-sm text-blue-800 italic">
                A farmer understands that what you invest today may not produce its result immediately. You prepare. You learn. You work. You wait. You adapt. And you continue.
              </p>
            </div>

            <p>
              That way of thinking has remained with him through every stage of his entrepreneurial journey. He has also described himself as a <strong>lifelong student</strong>. Because for him, learning does not stop when education ends. It continues through experience, through people, through mistakes, through markets, through challenges, and through the process of building something that has never existed before.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 2: The Decision That Set the Direction ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            THE TURNING POINT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            The decision that set the direction
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p>
              One of the earliest turning points came during his school years. He was studying in a government school where English was not compulsory in the way he believed it would need to be for his higher studies.
            </p>
            <p>
              He had a choice: stay with what was familiar, or prepare himself for what he wanted to pursue later.
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

      {/* ─── Chapter 3: From Education to Technology ─── */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            ACADEMIC &amp; PROFESSIONAL ROOTS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            From education to technology
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p>
              His academic journey took him from his early schooling to higher education in Ahmedabad and then to an MCA.
            </p>
            <p>
              His professional career began in the technology ecosystem. He worked with Microsoft as an education evangelist and technofunctional consultant with a Microsoft Gold Partner company. Later came ERP implementation and a deeper understanding of enterprises and how businesses operate.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-[#0062D2] uppercase block mb-1">Technology</span>
                <p className="text-xs text-slate-600">Taught him scalable systems and structure.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-violet-600 uppercase block mb-1">Business</span>
                <p className="text-xs text-slate-600">Taught him operational complexity and human dynamics.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-emerald-600 uppercase block mb-1">Experience</span>
                <p className="text-xs text-slate-600">Taught him that knowing and building are two different things.</p>
              </div>
            </div>
            <p>
              Eventually, he wanted to build for himself.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 4: Building, Struggling, Learning & The Unpublished Story ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            THE ENTREPRENEURIAL EDUCATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            Building, struggling, learning
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p>
              Around 2011, Dr. Pravin started his own venture in information technology. It was the beginning of a new chapter. For a first-generation entrepreneur, many things were unfamiliar: compliance, processes, structures, and the startup ecosystem itself. He entered anyway—because sometimes entrepreneurship begins before you have all the answers.
            </p>
            <p>
              One of the ventures he built involved a cloud-based, mobile-based HRMS product. It was an early period for cloud technology, with uncertainties around the model. The product was also designed with Africa in mind. There were struggles, experiments, and hard lessons. Eventually, the venture was sold, and he took an exit.
            </p>
            <p className="text-lg font-serif italic text-slate-900 font-semibold">
              That could have been the point at which the story ended. Instead, it created the next question: What next?
            </p>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <h3 className="font-serif text-xl font-bold text-slate-900">The Story He Wanted to Tell</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                After the exit, he wanted to share his story as a first-generation entrepreneur. He approached media platforms, including Times of India and Inc42, but the story was not published.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                That experience stayed with him. Perhaps the problem was not a shortage of entrepreneurial stories. Perhaps there were simply many stories that were never being heard. And that led to a larger belief:
              </p>
              <div className="p-3.5 rounded-xl bg-blue-50 text-[#0062D2] font-bold text-sm text-center">
                Every story is important. Every story is unique. Every story matters.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Chapter 5: Recognition is Human & Reconstructing Yourself ─── */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            HUMAN DIMENSION &amp; SELF-RECONSTRUCTION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            Recognition is human
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p>
              For Dr. Pravin, recognition is not merely a ceremony. It is about what recognition can do to a person. He recalls a moment from a VyapaarJagat Growth Show in Ahmedabad in 2020. A participant named Krina received recognition on stage. The recognition had an effect beyond the event—it changed how she was perceived within her family and social environment. She cried on stage.
            </p>
            <p className="text-base sm:text-lg font-serif italic text-slate-900 font-medium">
              “People want to know that their journey matters. Not everyone needs publicity. But everyone can value being seen.”
            </p>

            <h3 className="text-2xl font-serif font-bold text-slate-900 pt-4">
              Reconstructing Yourself Continuously
            </h3>
            <p>
              There is another characteristic Dr. Pravin repeatedly returns to: <strong>learning and self-reconstruction</strong>. He does not present entrepreneurship as a state in which someone eventually becomes complete. Instead, he describes entrepreneurship as a continuing process.
            </p>
            <p>
              The market changes. People change. Businesses change. Technology changes. And the entrepreneur has to keep learning. He speaks about the need for regular homework, planning, and study—even after achieving milestones. Success does not remove the need to learn; it increases the responsibility to keep learning.
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
              The person who starts something is not necessarily the same person who understands it five years later. You learn. You understand. You adapt. You reconstruct. You continue.
            </div>
          </div>
        </div>
      </section>

      {/* ─── Chapter 6: From Entrepreneurship to Community & Why Peers Global ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            FROM ENTREPRENEURSHIP TO COMMUNITY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            Why PEERS GLOBAL
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p>
              Before creating PEERS GLOBAL, Dr. Pravin studied and experienced different communities and models, including TiE, BNI, Rotary, Lions, EO, YPO, Vistage, and Round Tables.
            </p>
            <p>
              The conclusion was not that existing communities were wrong. It was that there was an opportunity to build something with a different centre of gravity:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold text-slate-400 block mb-1">NOT NETWORKING</span>
                <p className="text-sm font-bold text-[#0062D2]">Collaboration</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold text-slate-400 block mb-1">NOT CASUAL CONTACTS</span>
                <p className="text-sm font-bold text-violet-600">Trusted Relationships</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold text-slate-400 block mb-1">NOT JUST BUSINESS</span>
                <p className="text-sm font-bold text-emerald-600">Learning, Sharing &amp; Relationships</p>
              </div>
            </div>

            <p>
              PEERS GLOBAL did not emerge from a theoretical model alone. It emerged from years of experiencing entrepreneurship from the inside.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 7: The Founder's Belief & What He is Building ─── */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            THE FOUNDER&apos;S BELIEF &amp; 3 PRINCIPLES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            What he is trying to build
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p>
              At the centre of Dr. Pravin&apos;s philosophy is a simple understanding: <strong>An entrepreneur is not simply someone who owns a business. Entrepreneurship is a mindset.</strong> It is about identifying a problem, developing a solution, and creating value for people and society.
            </p>
            <p>
              The ambition today is much larger than one organisation. PEERS GLOBAL has a stated mission to impact 1M+ entrepreneurs by 2030. The intention is to create a compounding platform where learning moves, experience moves, relationships grow, and one entrepreneur&apos;s progress contributes to another.
            </p>

            {/* 3 Principles Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#061836] to-[#0A2E70] text-white space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block">
                3 NON-NEGOTIABLE OPERATING PRINCIPLES
              </span>
              <p className="text-xs text-slate-300">
                When Dr. Pravin speaks about entrepreneurship, his message is about accepting responsibility for one&apos;s own growth:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-bold text-sm">
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-center">
                  1. Never complain.
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-center">
                  2. Never make excuses.
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-center">
                  3. Never criticise.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Chapter 8: What He Wants to Leave Behind & The Founder's Question ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            LEGACY &amp; THE ESSENTIAL QUESTION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            Farmer. Learner. Entrepreneur. Founder.
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p>
              The question eventually becomes bigger than: <em>“What business did I build?”</em> <br />
              It becomes: <strong>“What became possible for other people because I built it?”</strong>
            </p>
            <p>
              The journey from farmer to founder was not a journey away from where Dr. Pravin began. It was a journey that carried those beginnings forward:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
              <span className="p-2.5 rounded-xl bg-white border border-slate-200">The patience of a farmer</span>
              <span className="p-2.5 rounded-xl bg-white border border-slate-200">The curiosity of a learner</span>
              <span className="p-2.5 rounded-xl bg-white border border-slate-200">The courage to experiment</span>
              <span className="p-2.5 rounded-xl bg-white border border-slate-200">The resilience to continue</span>
              <span className="p-2.5 rounded-xl bg-white border border-slate-200">The humility to learn again</span>
              <span className="p-2.5 rounded-xl bg-white border border-slate-200">Growth that helps others grow</span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm mt-6 text-center space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0062D2]">
                THE FOUNDER&apos;S QUESTION
              </span>
              <p className="font-serif text-2xl sm:text-3xl text-slate-900 font-normal leading-snug">
                “What can become possible when entrepreneurs stop building alone?”
              </p>
              <p className="text-xs text-slate-500 italic">
                PEERS GLOBAL is his answer in progress. And the journey continues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <ClosingCtaSection
        eyebrow="DR. PRAVIN PARMAR"
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

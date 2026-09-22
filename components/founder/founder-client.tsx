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
  Mic2,
  CheckCircle2,
  Users,
  Compass,
  TrendingUp,
  ShieldCheck,
  Calendar,
  Layers,
} from 'lucide-react'

export function FounderClient() {
  const [heroVideo, setHeroVideo] = useState('/videos/homepage-hero-bg.mp4')

  useEffect(() => {
    const loadVideo = () => {
      try {
        const saved = localStorage.getItem('peers_admin_page_media')
        if (saved) {
          const items = JSON.parse(saved)
          const target = items.find(
            (i: any) =>
              (i.pageSlug === '/founder' ||
                i.pageId === 'founder' ||
                i.pageName === 'Dr. Pravin Parmar' ||
                i.pageSlug === '/' ||
                i.pageId === 'home') &&
              i.mediaType === 'video' &&
              i.mediaUrl
          )
          if (target && target.mediaUrl) {
            setHeroVideo(target.mediaUrl)
          }
        }
      } catch {
        // Fallback
      }
    }

    loadVideo()
    window.addEventListener('storage', loadVideo)
    return () => window.removeEventListener('storage', loadVideo)
  }, [])

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
              People, Ideas, Partnerships, Impact
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
                  Founder, Peers Global &amp; 1 Million Entrepreneurs International Forum
                </p>
              </div>

              {/* Core Quote Card */}
              <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-white border border-blue-100 shadow-2xs border-l-4 border-l-[#0062D2]">
                <Quote className="w-7 h-7 text-blue-400/25 absolute top-4 right-4" />
                <p className="text-base sm:text-lg font-serif italic text-[#061836] leading-relaxed pr-6">
                  &ldquo;I come from a very poor farmer family. But I do not come from a weak mindset. That difference has shaped everything.&rdquo;
                </p>
                <p className="mt-2.5 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
                  — Dr. Pravin Parmar
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/unity"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_4px_16px_rgba(0,98,210,0.25)] hover:shadow-[0_6px_22px_rgba(0,98,210,0.35)] transition-all active:scale-[0.98] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Download Unity App
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                </Link>

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
              <span>Visionary &amp; Community Architect</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Fast-Track Editorial Overview Bar ─── */}
      <section className="bg-[#FAFBFD] border-b border-slate-200/80 py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] block">Origin</span>
              <span className="text-sm font-serif font-bold text-[#061836]">Botad, Gujarat</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] block">Media Platform</span>
              <span className="text-sm font-serif font-bold text-[#061836]">VyapaarJagat.com</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] block">Philanthropy</span>
              <span className="text-sm font-serif font-bold text-[#061836]">1M Forum Foundation</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] block">Ecosystem</span>
              <span className="text-sm font-serif font-bold text-[#061836]">Peers Global &amp; Unity</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Chapter 1: Botad (The Roots) ─── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Chapter 01 &mdash; The Roots
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            Botad
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p className="text-lg sm:text-xl font-serif text-[#061836] font-medium leading-relaxed">
              He grew up in a farmer family in Botad, watching life closely — hard work, uncertainty, seasons deciding whether there would be income that year, and dignity without money.
            </p>
            <p>
              When you grow up like that, you do not dream of shortcuts. You dream of stability, respect, and building something that lasts. There was no formal higher education in the household, but there was an unshakeable bedrock of moral character and perseverance.
            </p>
            <p>
              He also watched a village carry its own people through a failed season. When the monsoon faltered or drought threatened the harvest, nobody faced catastrophe alone. Neighbors divided grain, elders shared wells, and people carried each other through the winter. In Botad that was ordinary. It took him thirty years to see how rare it was elsewhere.
            </p>
          </div>
        </div>

        {/* Full-width editorial quote card */}
        <div className="mt-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-50/90 via-sky-50/40 to-white border-l-4 border-[#0062D2] border border-blue-100/80 shadow-2xs">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#061836] leading-snug">
              &ldquo;When a season failed in Botad, nobody faced it alone. People carried each other. In that village it was ordinary. In the business world, it turned out to be almost non-existent.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 2: The Decision That Set The Direction ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Chapter 02 &mdash; Self-Determination
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            The decision that set the direction
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p className="text-lg sm:text-xl font-serif text-[#061836] font-medium leading-relaxed">
              He could not speak English. Government school background. When he decided he needed to learn, the teachers and the principal said no.
            </p>
            <p className="text-xl font-semibold text-[#061836]">
              He stood up anyway.
            </p>
            <p>
              It was never really about English. It was about deciding that his background would not determine his ceiling. Authority may control the rules, but he controls his direction.
            </p>
            <p>
              He paid his own fees by teaching other students while still studying. The day you earn for yourself, life becomes very real. When you pay your own fees, excuses die quietly. That discipline forged an instinct that never left him: if a door does not open, you do not beg outside it; you build a room of your own.
            </p>
          </div>
        </div>

        {/* Full-width editorial quote */}
        <div className="mt-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 border-l-4 border-l-[#0062D2] shadow-sm">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#061836] leading-snug">
              &ldquo;Authority may control the rules, but you control your direction. When you pay your own fees, excuses die quietly.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 3: Building, and Stopping ─── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Chapter 03 &mdash; Hard Truths
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            Building, and stopping
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p className="text-lg sm:text-xl font-serif text-[#061836] font-medium leading-relaxed">
              He built his own company. He was right about the product and early to the market. Payments did not come, growth stayed limited.
            </p>
            <p>
              One day he admitted something honest to himself: this business can run my present, but it cannot build my future.
            </p>
            <p>
              Stopping was painful. It was also clear.
            </p>
            <p className="text-xl font-serif font-semibold text-[#061836]">
              Failure is not when a business ends. Failure is dragging something that no longer belongs in your future because your ego will not let it go.
            </p>
            <p>
              He closed it cleanly, honored his obligations, and took with him the unvarnished education of what commercial struggle in India really looks like.
            </p>
          </div>
        </div>

        {/* Section image showcase: Conclave / Stage */}
        <div className="mt-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-[#040E24]">
            <Image
              src="/images/executive-director-conclave.jpg"
              alt="Dr. Pravin Parmar addressing entrepreneurs at Peers Global Conclave"
              fill
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040e24]/85 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm font-bold text-sky-400 uppercase tracking-wider">
                The Real Education
              </p>
              <p className="text-lg sm:text-xl font-serif mt-1">
                &ldquo;Every honest business struggle carries a lesson that no textbook can teach.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Chapter 4: The Hospital Corridor ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Chapter 04 &mdash; The Awakening
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            The hospital
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p className="text-lg sm:text-xl font-serif text-[#061836] font-medium leading-relaxed">
              A family crisis, a hospital corridor, and every illusion stripped away.
            </p>
            <p>
              Standing there, looking through the glass, he understood that skills mean very little without the right people around you. So does intelligence. So does hard work.
            </p>
            <p className="text-xl font-serif font-bold text-[#061836]">
              What matters in those moments is who you can call.
            </p>
            <p>
              He had built capability for years. He had never built a circle. And looking around at the entrepreneurs he knew — the factory owners, the traders, the agency founders — almost none of them had one either. They were fighting brutal battles in isolation, carrying payroll, bad debts, and operational burnout completely on their own shoulders.
            </p>
            <p className="text-xl font-serif font-bold text-[#0062D2]">
              That was the moment Peers Global became inevitable.
            </p>
          </div>
        </div>

        {/* Full-width editorial quote */}
        <div className="mt-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 border-l-4 border-l-[#0062D2] shadow-sm">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#061836] leading-snug">
              &ldquo;Skills mean very little without the right people around you. So does intelligence. So does hard work. What matters in those moments is who you can call.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 5: What He Built (The Ecosystem) ─── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              Chapter 05 &mdash; The Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
              What he built
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Each of them began with the same observation: entrepreneurs should not have to build alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Peers Global */}
            <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2] transition-transform duration-300 group-hover:scale-110">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#061836] group-hover:text-[#0062D2] transition-colors">
                Peers Global
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                The world&apos;s first community of collaboration, and the community this website belongs to. Curated Circles of entrepreneurs across industries, cities and countries, built on trust and mutual contribution.
              </p>
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0062D2] hover:text-[#0052B4] pt-2 transition-colors"
              >
                Read community story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: VyapaarJagat.com */}
            <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 transition-transform duration-300 group-hover:scale-110">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#061836] group-hover:text-[#0062D2] transition-colors">
                VyapaarJagat.com
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                A dedicated business media platform for the MSMEs mainstream media ignores. Founded on the conviction that every honest business story deserves respect, dignity and visibility. Even if a business shuts down, its story should never die.
              </p>
              <a
                href="https://vyapaarjagat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0062D2] hover:text-[#0052B4] pt-2 transition-colors"
              >
                Visit VyapaarJagat.com <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 3: 1 Million Forum */}
            <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#061836] group-hover:text-[#0062D2] transition-colors">
                1 Million Entrepreneurs Forum
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                A Section 8 not-for-profit working toward one million lives impacted through entrepreneurship, collaboration and opportunity. Extending mentorship and support to entrepreneurs who cannot yet afford a commercial seat.
              </p>
              <Link
                href="/1-million-mission"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0062D2] hover:text-[#0052B4] pt-2 transition-colors"
              >
                See the mission <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 4: Fempreneur & Greenpreneur */}
            <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 transition-transform duration-300 group-hover:scale-110">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#061836] group-hover:text-[#0062D2] transition-colors">
                Fempreneur &amp; Greenpreneur
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Dedicated national communities for women-led enterprise and sustainability-focused businesses. Creating spaces where unique regulatory, market, and social hurdles are solved collectively.
              </p>
              <Link
                href="/initiatives"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0062D2] hover:text-[#0052B4] pt-2 transition-colors"
              >
                Explore initiatives <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Chapter 6: What He Is Trying To Leave Behind (The Legacy) ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Chapter 06 &mdash; The Legacy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            What he is trying to leave behind
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-[#061836]">
              Not a company.
            </p>
            <p className="text-lg sm:text-xl font-serif text-[#061836] font-medium leading-relaxed">
              A community that keeps working after him — where an entrepreneur in a city he has never visited walks into a room, finds people who understand them, and stops carrying their business alone.
            </p>
            <p>
              Impact is not money. Impact is confidence, visibility and support.
            </p>
            <p>
              If one entrepreneur feels less alone. If one business finds clarity. If one founder finds the right peer. Impact has begun.
            </p>
            <p className="text-xl font-serif font-bold text-[#0062D2]">
              Numbers are milestones. Lives are the real metric.
            </p>
          </div>
        </div>

        {/* Full-width editorial quote */}
        <div className="mt-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 border-l-4 border-l-[#0062D2] shadow-sm">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#061836] leading-snug">
              &ldquo;If one entrepreneur feels less alone. If one business finds clarity. If one founder finds the right peer. Impact has begun.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 7: Speaking & Media Engagements ─── */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-[#0062D2] mx-auto shadow-2xs">
            <Mic2 className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              Chapter 07 &mdash; Public Forum
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836]">
              Speaking &amp; Media
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Dr. Parmar speaks on entrepreneurship, community building, collaboration, and the MSME ecosystem at business summits, university forums, and corporate leadership offsites.
          </p>
          <div className="pt-4">
            <Link
              href="/contact?topic=media"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white text-sm font-bold shadow-[0_4px_16px_rgba(0,98,210,0.25)] hover:shadow-lg transition-all active:scale-[0.98] uppercase tracking-wider"
            >
              Media &amp; Speaking Enquiries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-24 md:py-32">
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

        {/* SVG Orbital Geometric Lines Background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35">
          <svg viewBox="0 0 760 520" fill="none" className="h-full w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520" stroke="currentColor" strokeWidth="1" className="text-blue-300/30" />
            <path d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" className="text-sky-200/25" />
            <path d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520" stroke="currentColor" strokeWidth="1" className="text-blue-200/20" />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white leading-snug max-w-3xl mx-auto">
            &ldquo;The right circle can change your life faster than the right idea.&rdquo;
          </p>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Build Your Business. Build Your Relationships. Build Your Circle.
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-normal max-w-xl mx-auto">
              Join thousands of verified entrepreneurs building together on the Unity App.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#061836] hover:bg-slate-100 text-sm font-bold transition-all shadow-lg hover:shadow-xl active:scale-[0.98] uppercase tracking-wider"
            >
              Download Unity App
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/our-story"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all active:scale-[0.98]"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

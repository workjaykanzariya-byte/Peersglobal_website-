'use client'

import React from 'react'
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
} from 'lucide-react'

export function FounderClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-30 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>About</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Dr. Pravin Parmar</span>
        </div>
      </div>

      {/* ─── Hero Section (Long-Form Editorial) ─── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border-b border-slate-200/80">
        {/* Soft luminous ambient glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-blue-200/40 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Biography Opening */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 shadow-2xs text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                <Sparkles className="w-3.5 h-3.5 text-[#0062D2]" />
                Founder, Peers Global
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#061836] font-bold tracking-tight leading-[1.08]">
                Dr. Pravin Parmar
              </h1>

              <p className="text-lg sm:text-xl font-serif text-slate-700 italic leading-relaxed">
                Founder, Peers Global &amp; 1 Million Entrepreneurs International Forum
              </p>

              {/* Core Hero Quote Card */}
              <div className="relative p-6 sm:p-7 rounded-2xl bg-white border border-blue-100 shadow-sm border-l-4 border-l-[#0062D2]">
                <Quote className="w-8 h-8 text-blue-400/25 absolute top-4 right-4" />
                <p className="text-base sm:text-lg font-serif italic text-[#061836] leading-relaxed pr-6">
                  &ldquo;I come from a very poor farmer family. But I do not come from a weak mindset. That difference has shaped everything.&rdquo;
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-slate-500 font-semibold">
                  — Dr. Pravin Parmar
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/unity"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0062D2] text-white text-sm font-bold hover:bg-[#0052B4] transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  Download Unity App
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/our-story"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-800 text-sm font-semibold border border-slate-300 shadow-2xs hover:bg-slate-50 hover:border-slate-400 transition-all active:scale-[0.98]"
                >
                  Read Our Story
                </Link>
              </div>
            </div>

            {/* Right: Editorial Portrait of Dr. Parmar */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Visual Backdrop Frame */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-blue-100 to-sky-50 -rotate-1 blur-sm opacity-70 border border-blue-200/50" />
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-[#040E24]">
                  <Image
                    src="/images/founder-new.png"
                    alt="Dr. Pravin Parmar — Founder of Peers Global"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top"
                    priority
                  />
                  {/* Subtle bottom gradient to blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040e24]/90 via-[#040e24]/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs uppercase tracking-widest font-semibold text-sky-400">
                      Visionary &amp; Community Architect
                    </p>
                    <p className="text-base font-serif font-medium mt-0.5">
                      Dr. Pravin Parmar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Chapter 1: Botad ─── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              The Roots
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
        </div>

        {/* Full-width editorial quote */}
        <div className="mt-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-50/90 via-sky-50/40 to-transparent border-l-4 border-[#0062D2] shadow-2xs">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#061836] leading-snug">
              &ldquo;When a season failed in Botad, nobody faced it alone. People carried each other. In that village it was ordinary. In the business world, it turned out to be almost non-existent.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 2: The decision that set the direction ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Self-Determination
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

      {/* ─── Chapter 3: Building, and stopping ─── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Hard Truths
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

      {/* ─── Chapter 4: The hospital ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            The Awakening
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

      {/* ─── Chapter 5: What he built ─── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              The Ecosystem
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
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 space-y-4 group">
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
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 space-y-4 group">
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
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 space-y-4 group">
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
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 space-y-4 group">
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

      {/* ─── Chapter 6: What he is trying to leave behind ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            The Legacy
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

      {/* ─── Chapter 7: Speaking and Media ─── */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-[#0062D2] mx-auto shadow-2xs">
            <Mic2 className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836]">
            Speaking &amp; Media
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Dr. Parmar speaks on entrepreneurship, community building, collaboration, and the MSME ecosystem at business summits, university forums, and corporate leadership offsites.
          </p>
          <div className="pt-4">
            <Link
              href="/contact?topic=media"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0062D2] text-white text-sm font-bold hover:bg-[#0052B4] transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Media &amp; Speaking Enquiries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Royal Blue Closing Banner ─── */}
      <section className="relative bg-[#0062D2] text-white py-24 md:py-32 overflow-hidden">
        {/* SVG Orbital Geometric Lines Background */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-35 overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 600 600" fill="none" className="w-full h-full text-white/30" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 450 A 420 420 0 0 1 550 50" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 120 520 A 500 500 0 0 1 600 120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <path d="M 220 580 A 460 460 0 0 1 580 220" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="280" y1="220" x2="380" y2="120" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="280" cy="220" r="4.5" fill="#7DD3FC" />
            <circle cx="280" cy="220" r="10" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
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
            <p className="text-base sm:text-lg text-white/90 font-normal max-w-xl mx-auto">
              Join thousands of verified entrepreneurs building together on the Unity App.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0062D2] hover:bg-slate-100 text-sm font-bold transition-all shadow-lg hover:shadow-xl active:scale-[0.98] uppercase tracking-wider"
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

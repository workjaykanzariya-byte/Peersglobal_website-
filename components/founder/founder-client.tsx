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
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#E8DDD0] selection:text-[#1A1A1A]">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-[#EADFC7]/50 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-neutral-500 font-medium">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span>About</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Dr. Pravin Parmar</span>
        </div>
      </div>

      {/* ─── Hero Section (Long-Form Editorial) ─── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-[#EADFC7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Biography Opening */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FAF3E0] border border-[#E8DFC8] text-xs font-semibold uppercase tracking-wider text-[#7C5832]">
                <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
                Founder, Peers Global
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08]">
                Dr. Pravin Parmar
              </h1>

              <p className="text-lg sm:text-xl font-serif text-[#6B5744] italic leading-relaxed">
                Founder, Peers Global &amp; 1 Million Entrepreneurs International Forum
              </p>

              {/* Core Hero Quote Card */}
              <div className="relative p-6 sm:p-7 rounded-2xl bg-[#FAF6EE] border border-[#E6DCBF] shadow-sm">
                <Quote className="w-8 h-8 text-[#C29B38]/40 absolute top-4 right-4" />
                <p className="text-base sm:text-lg font-serif italic text-[#2C241B] leading-relaxed pr-6">
                  &ldquo;I come from a very poor farmer family. But I do not come from a weak mindset. That difference has shaped everything.&rdquo;
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[#8A755E] font-semibold">
                  — Dr. Pravin Parmar
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/unity"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1A1A1A] text-white text-sm font-semibold hover:bg-[#333333] transition-all shadow-md hover:shadow-lg"
                >
                  Download Unity App
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/our-story"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F4EDE0] text-[#4A3B2C] text-sm font-semibold border border-[#DACFBA] hover:bg-[#EAE0CD] transition-all"
                >
                  Read Our Story
                </Link>
              </div>
            </div>

            {/* Right: Editorial Portrait of Dr. Parmar */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Visual Backdrop Frame */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#E6D8BA] to-[#F7F2E7] -rotate-1 blur-sm opacity-70" />
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border-2 border-[#D8C7A5] shadow-2xl bg-[#E8DDD0]">
                  <Image
                    src="/images/founder-new.png"
                    alt="Dr. Pravin Parmar — Founder of Peers Global"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top"
                    priority
                  />
                  {/* Subtle bottom gradient to blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs uppercase tracking-widest font-semibold text-amber-200">
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
      <section className="py-20 md:py-28 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
              <span className="w-6 h-[1.5px] bg-[#B88746]" />
              The Roots
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight">
              Botad
            </h2>
            <div className="prose prose-lg text-[#3D352E] leading-relaxed font-normal space-y-5 max-w-none">
              <p className="text-lg sm:text-xl font-serif text-[#2B231B] leading-relaxed">
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
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F5EFE4] border-l-4 border-[#B88746] shadow-sm">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#1F1912] leading-snug">
              &ldquo;When a season failed in Botad, nobody faced it alone. People carried each other. In that village it was ordinary. In the business world, it turned out to be almost non-existent.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 2: The decision that set the direction ─── */}
      <section className="py-20 md:py-28 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
            <span className="w-6 h-[1.5px] bg-[#B88746]" />
            Self-Determination
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight">
            The decision that set the direction
          </h2>
          <div className="prose prose-lg text-[#3D352E] leading-relaxed font-normal space-y-5 max-w-none">
            <p className="text-lg sm:text-xl font-serif text-[#2B231B] leading-relaxed">
              He could not speak English. Government school background. When he decided he needed to learn, the teachers and the principal said no.
            </p>
            <p className="text-xl font-semibold text-[#1A1A1A]">
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
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E3D7BC] shadow-sm">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#1F1912] leading-snug">
              &ldquo;Authority may control the rules, but you control your direction. When you pay your own fees, excuses die quietly.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 3: Building, and stopping ─── */}
      <section className="py-20 md:py-28 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
            <span className="w-6 h-[1.5px] bg-[#B88746]" />
            Hard Truths
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight">
            Building, and stopping
          </h2>
          <div className="prose prose-lg text-[#3D352E] leading-relaxed font-normal space-y-5 max-w-none">
            <p className="text-lg sm:text-xl font-serif text-[#2B231B] leading-relaxed">
              He built his own company. He was right about the product and early to the market. Payments did not come, growth stayed limited.
            </p>
            <p>
              One day he admitted something honest to himself: this business can run my present, but it cannot build my future.
            </p>
            <p>
              Stopping was painful. It was also clear.
            </p>
            <p className="text-xl font-serif font-medium text-[#1A1A1A]">
              Failure is not when a business ends. Failure is dragging something that no longer belongs in your future because your ego will not let it go.
            </p>
            <p>
              He closed it cleanly, honored his obligations, and took with him the unvarnished education of what commercial struggle in India really looks like.
            </p>
          </div>
        </div>

        {/* Section image showcase: Conclave / Stage */}
        <div className="mt-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-[#DACBAF] shadow-xl">
            <Image
              src="/images/executive-director-conclave.jpg"
              alt="Dr. Pravin Parmar addressing entrepreneurs at Peers Global Conclave"
              fill
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm font-medium text-amber-200">
                The Real Education
              </p>
              <p className="text-lg sm:text-xl font-serif">
                &ldquo;Every honest business struggle carries a lesson that no textbook can teach.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Chapter 4: The hospital ─── */}
      <section className="py-20 md:py-28 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
            <span className="w-6 h-[1.5px] bg-[#B88746]" />
            The Awakening
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight">
            The hospital
          </h2>
          <div className="prose prose-lg text-[#3D352E] leading-relaxed font-normal space-y-5 max-w-none">
            <p className="text-lg sm:text-xl font-serif text-[#2B231B] leading-relaxed">
              A family crisis, a hospital corridor, and every illusion stripped away.
            </p>
            <p>
              Standing there, looking through the glass, he understood that skills mean very little without the right people around you. So does intelligence. So does hard work.
            </p>
            <p className="text-xl font-serif font-bold text-[#1A1A1A]">
              What matters in those moments is who you can call.
            </p>
            <p>
              He had built capability for years. He had never built a circle. And looking around at the entrepreneurs he knew — the factory owners, the traders, the agency founders — almost none of them had one either. They were fighting brutal battles in isolation, carrying payroll, bad debts, and operational burnout completely on their own shoulders.
            </p>
            <p className="text-lg font-serif italic text-[#8A6320]">
              That was the moment Peers Global became inevitable.
            </p>
          </div>
        </div>

        {/* Full-width editorial quote */}
        <div className="mt-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F4EDE0] border-l-4 border-[#B88746] shadow-sm">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#1F1912] leading-snug">
              &ldquo;Skills mean very little without the right people around you. So does intelligence. So does hard work. What matters in those moments is who you can call.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 5: What he built ─── */}
      <section className="py-20 md:py-28 border-b border-[#EADFC7]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
              <span className="w-6 h-[1.5px] bg-[#B88746]" />
              The Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight">
              What he built
            </h2>
            <p className="text-lg font-serif text-[#665340] italic">
              Each of them began with the same observation: entrepreneurs should not have to build alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Peers Global */}
            <div className="p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F7F2E4] border border-[#E3D5B6] flex items-center justify-center text-[#8C6422]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-[#1A1A1A]">Peers Global</h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                The world&apos;s first community of collaboration, and the community this website belongs to. Curated Circles of entrepreneurs across industries, cities and countries, built on trust and mutual contribution.
              </p>
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#8C6422] hover:text-[#5E4214] pt-2"
              >
                Read community story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: VyapaarJagat.com */}
            <div className="p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F7F2E4] border border-[#E3D5B6] flex items-center justify-center text-[#8C6422]">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-[#1A1A1A]">VyapaarJagat.com</h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                A dedicated business media platform for the MSMEs mainstream media ignores. Founded on the conviction that every honest business story deserves respect, dignity and visibility. Even if a business shuts down, its story should never die.
              </p>
              <a
                href="https://vyapaarjagat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#8C6422] hover:text-[#5E4214] pt-2"
              >
                Visit VyapaarJagat.com <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 3: 1 Million Forum */}
            <div className="p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F7F2E4] border border-[#E3D5B6] flex items-center justify-center text-[#8C6422]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-[#1A1A1A]">1 Million Entrepreneurs Forum</h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                A Section 8 not-for-profit working toward one million lives impacted through entrepreneurship, collaboration and opportunity. Extending mentorship and support to entrepreneurs who cannot yet afford a commercial seat.
              </p>
              <Link
                href="/1-million-mission"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#8C6422] hover:text-[#5E4214] pt-2"
              >
                See the mission <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 4: Fempreneur & Greenpreneur */}
            <div className="p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F7F2E4] border border-[#E3D5B6] flex items-center justify-center text-[#8C6422]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-[#1A1A1A]">Fempreneur &amp; Greenpreneur</h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Dedicated national communities for women-led enterprise and sustainability-focused businesses. Creating spaces where unique regulatory, market, and social hurdles are solved collectively.
              </p>
              <Link
                href="/initiatives"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#8C6422] hover:text-[#5E4214] pt-2"
              >
                Explore initiatives <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Chapter 6: What he is trying to leave behind ─── */}
      <section className="py-20 md:py-28 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
            <span className="w-6 h-[1.5px] bg-[#B88746]" />
            The Legacy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight">
            What he is trying to leave behind
          </h2>
          <div className="prose prose-lg text-[#3D352E] leading-relaxed font-normal space-y-5 max-w-none">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A]">
              Not a company.
            </p>
            <p className="text-lg sm:text-xl font-serif text-[#2B231B] leading-relaxed">
              A community that keeps working after him — where an entrepreneur in a city he has never visited walks into a room, finds people who understand them, and stops carrying their business alone.
            </p>
            <p>
              Impact is not money. Impact is confidence, visibility and support.
            </p>
            <p>
              If one entrepreneur feels less alone. If one business finds clarity. If one founder finds the right peer. Impact has begun.
            </p>
            <p className="text-xl font-serif font-semibold text-[#8A6320]">
              Numbers are milestones. Lives are the real metric.
            </p>
          </div>
        </div>

        {/* Full-width editorial quote */}
        <div className="mt-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F5EFE4] border-l-4 border-[#B88746] shadow-sm">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#1F1912] leading-snug">
              &ldquo;If one entrepreneur feels less alone. If one business finds clarity. If one founder finds the right peer. Impact has begun.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 7: Speaking and Media ─── */}
      <section className="py-20 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FAF2DE] border border-[#E7DCBF] text-[#8C6422] mx-auto">
            <Mic2 className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
            Speaking &amp; Media
          </h2>
          <p className="text-lg sm:text-xl text-[#524436] max-w-2xl mx-auto leading-relaxed">
            Dr. Parmar speaks on entrepreneurship, community building, collaboration, and the MSME ecosystem at business summits, university forums, and corporate leadership offsites.
          </p>
          <div className="pt-4">
            <Link
              href="/contact?topic=media"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#1A1A1A] text-white text-sm font-semibold hover:bg-[#333333] transition-all shadow-md"
            >
              Media &amp; Speaking Enquiries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Dark Mountain Closing Banner ─── */}
      <section className="relative bg-[#0D1117] text-white py-24 md:py-32 overflow-hidden border-t border-neutral-800">
        {/* Mountain visual backdrop */}
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/who-we-are-mountain.jpg"
            alt="Mountain ridge horizon"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-amber-200/90 leading-snug max-w-3xl mx-auto">
            &ldquo;The right circle can change your life faster than the right idea.&rdquo;
          </p>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
              Build Your Business. Build Your Relationships. Build Your Circle.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-light max-w-xl mx-auto">
              Join thousands of verified entrepreneurs building together on the Unity App.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-amber-500 text-neutral-950 text-sm font-bold hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl uppercase tracking-wider"
            >
              Download Unity App
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/our-story"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/20 hover:bg-white/15 transition-all uppercase tracking-wider"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

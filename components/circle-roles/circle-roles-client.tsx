'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Crown,
  UserCheck,
  Users,
  Briefcase,
  Megaphone,
  Globe2,
  HeartHandshake,
  Award,
  Sparkles,
  Calendar,
  GraduationCap,
  Building2,
  TrendingUp,
  MapPin,
  Cpu,
  Scale,
  Landmark,
  Lightbulb,
  CheckCircle2,
  Layers,
} from 'lucide-react'

const PROJECT_CHAIRS = [
  { name: 'City Expansion Chair', icon: MapPin },
  { name: 'Industry Connect Chair', icon: Layers },
  { name: 'Government Liaison Chair', icon: Landmark },
  { name: 'Funding & Investor Connect Chair', icon: TrendingUp },
  { name: 'Social Impact Chair', icon: HeartHandshake },
  { name: 'Research & Insights Chair', icon: Sparkles },
  { name: 'Digital & Tech Chair', icon: Cpu },
  { name: 'Global Engagement Chair', icon: Globe2 },
  { name: 'Alumni & Legacy Chair', icon: Award },
]

export function CircleRolesClient() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-slate-900">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>How We Collaborate</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Roles Inside a Circle</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#F0F5FD] via-[#FBFCFE] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                <Crown className="w-3.5 h-3.5" />
                Governed Leadership Structure
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0D1F47] tracking-tight leading-[1.08]">
                Roles Inside a Circle
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-[#1e3a8a] italic leading-relaxed font-normal">
                A Circle is not run by one person.
              </p>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Nineteen roles, three committees, and a room held together by the entrepreneurs inside it.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0062D2] hover:bg-[#1a42c0] text-white text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] hover:shadow-lg transition-all"
                >
                  Apply for a Role
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-all shadow-xs"
                >
                  Download Unity App
                </Link>
              </div>
            </div>

            {/* Right Presenter Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-100">
                <Image
                  src="/images/executive-director-conclave.jpg"
                  alt="Presenter addressing a room of business leaders"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right font-serif italic text-white/95 text-base sm:text-lg drop-shadow-md font-bold">
                  Different Roles.<br />A Stronger Circle.
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] uppercase tracking-widest font-mono text-amber-200 border border-white/30">
                    PEOPLE • PURPOSE • COLLABORATION • GROWTH
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Banner: Every Role Held by Working Business Owner ─── */}
      <section className="py-8 bg-blue-50/60 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-blue-100 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-4xl">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2] shrink-0 mt-1">
                <Users className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0D1F47]">
                  Every role is held by a working business owner
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Nobody here is staff. The people who run a Circle run their own companies. They took the role because leading a room of accomplished entrepreneurs develops something no course teaches, and because they wanted to build something beyond their own business. That is why the standard holds. It is being held by people who chose to hold it. Almost every Circle Director served on a committee first.
                </p>
              </div>
            </div>

            <div className="shrink-0 font-serif italic text-right text-base text-[#0062D2] font-bold hidden lg:block border-l border-blue-100 pl-6">
              Entrepreneurs<br />Leading<br />Entrepreneurs
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Circle Leadership (Founder & Director) ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#FBFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold mb-2">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              Executive Stewardship
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
              The Circle Leadership
            </h2>
            <p className="text-sm text-slate-600 mt-1 font-serif italic">
              Two roles. One foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Circle Founder Card */}
            <div className="p-8 rounded-3xl bg-[#FBFCFE] border border-slate-200/90 shadow-sm flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                <Image
                  src="/images/leadership-circle-founder.jpg"
                  alt="Circle Founder"
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                  <Crown className="w-4 h-4" /> Circle Founder
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0D1F47]">
                  Convened the room.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Brought the first entrepreneurs together, defined what the Circle is for, and set its culture from the first meeting. Carries the first year, then remains Founder while a Director takes on the day-to-day.
                </p>
                <div className="pt-2">
                  <Link
                    href="/leadership/circle-founder"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#1a42c0]"
                  >
                    Read the Circle Founder Role <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Circle Director Card */}
            <div className="p-8 rounded-3xl bg-[#FBFCFE] border border-slate-200/90 shadow-sm flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                <Image
                  src="/images/circle-director-hero.jpg"
                  alt="Circle Director"
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0062D2] uppercase tracking-wider">
                  <UserCheck className="w-4 h-4" /> Circle Director
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0D1F47]">
                  Holds the Circle.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Culture, rhythm, standards, growth and the health of the room. Chairs the meetings, mentors the three Chairs, and is responsible for what the Circle becomes.
                </p>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-serif italic text-[#0062D2]">
                  &ldquo;A Circle becomes what its Director makes it.&rdquo;
                </div>
                <div className="pt-1">
                  <Link
                    href="/leadership/circle-director"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#1a42c0]"
                  >
                    Read the Circle Director Role <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Three Committees ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#FBFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold mb-2">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              Operational Engine
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
              The Three Committees
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Each committee is led by a Chair and three Leaders. Together they run the working life of the Circle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Committee 1: Business Growth */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-slate-900">
                      Business Growth Committee
                    </h3>
                    <p className="text-xs text-slate-500">Responsible for what the Circle produces.</p>
                  </div>
                </div>

                <div className="space-y-3.5 pt-2 text-xs text-slate-600 divide-y divide-slate-100">
                  <div className="pt-2">
                    <strong className="block text-slate-900 font-bold mb-0.5">
                      Chair, Business Growth Committee
                    </strong>
                    Leads the committee and is accountable for the collaboration the Circle generates.
                  </div>
                  <div className="pt-3">
                    <strong className="block text-slate-900 font-bold mb-0.5">
                      Business Growth Leader
                    </strong>
                    Drives referrals, introductions and business flow between Peers, ensuring Collaboration Roundtables produce named outcomes.
                  </div>
                  <div className="pt-3">
                    <strong className="block text-slate-900 font-bold mb-0.5">
                      Recognition &amp; PR Leader
                    </strong>
                    Ensures contribution is recognised in the room, across the community and in the media via VyapaarJagat.
                  </div>
                  <div className="pt-3">
                    <strong className="block text-slate-900 font-bold mb-0.5">
                      Cross-Border Collaborations Leader (Unity)
                    </strong>
                    Connects the Circle beyond its city. Opens collaboration across other regions and countries through the Unity App.
                  </div>
                </div>
              </div>
            </div>

            {/* Committee 2: Membership Experience */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-slate-900">
                      Membership Experience Committee
                    </h3>
                    <p className="text-xs text-slate-500">Responsible for who is in the room.</p>
                  </div>
                </div>

                <div className="space-y-3.5 pt-2 text-xs text-slate-600 divide-y divide-slate-100">
                  <div className="pt-2">
                    <strong className="block text-slate-900 font-bold mb-0.5">
                      Chair, Membership Experience Committee
                    </strong>
                    Leads the committee and reviews every seat request, assessing fit and category availability.
                  </div>
                  <div className="pt-3">
                    <strong className="block text-slate-900 font-bold mb-0.5">
                      Member Success Leader
                    </strong>
                    Looks after every Peer&apos;s experience — welcoming new Peers, supporting quiet members, and checking in on those facing tough quarters.
                  </div>
                  <div className="pt-3">
                    <strong className="block text-slate-900 font-bold mb-0.5">
                      Peers Board of Advisory Leader
                    </strong>
                    Connects Peers to senior advisors and mentors available across the national community.
                  </div>
                  <div className="pt-3">
                    <strong className="block text-slate-900 font-bold mb-0.5">
                      Peers Brand Showcase Leader
                    </strong>
                    Runs the Brand Showcase rotation, ensuring each Peer&apos;s 4 minutes produce real actions rather than just impressions.
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0062D2] hover:text-[#1a42c0]"
                >
                  See Criteria &amp; Process <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Committee 3: Events & Impact */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-slate-900">
                      Events &amp; Impact Committee
                    </h3>
                    <p className="text-xs text-slate-500">Responsible for what the Circle does beyond meetings.</p>
                  </div>
                </div>

                <div className="space-y-3.5 pt-2 text-xs text-slate-600 divide-y divide-slate-100">
                  <div className="pt-2">
                    <strong className="block text-slate-900 font-bold mb-0.5">
                      Chair, Events &amp; Impact Committee
                    </strong>
                    Accountable for the Circle&apos;s external conclaves, masterclasses and civic impact.
                  </div>
                  <div className="pt-3">
                    <strong className="block text-slate-900 font-bold mb-0.5">
                      Events &amp; Experience Leader
                    </strong>
                    Runs the physical meetings — venue, audio-visuals, pacing and hospitality.
                  </div>
                  <div className="pt-3">
                    <strong className="block text-slate-900 font-bold mb-0.5">
                      Skill Development Leader
                    </strong>
                    Programmes the Impact Mentor Masterclasses, curating top external practitioners.
                  </div>
                  <div className="pt-3">
                    <strong className="block text-slate-900 font-bold mb-0.5">
                      Partnership &amp; Visitor Leader
                    </strong>
                    Welcomes guest entrepreneurs, prospective members and institutional visitors.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Project Chairs (Nine Roles) ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#FBFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold mb-2">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              Special Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
              Project Chairs
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Beyond the three standing committees, a Circle Director can appoint Project Chairs for specific initiatives. Nine Project Chair roles are available for work that sits outside the regular rhythm.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4">
            {PROJECT_CHAIRS.map((pc) => {
              const Icon = pc.icon
              return (
                <div
                  key={pc.name}
                  className="p-5 rounded-2xl bg-[#FBFCFE] border border-slate-200 shadow-xs text-center space-y-2.5 flex flex-col items-center justify-center hover:border-blue-300 transition-all hover:bg-blue-50/50"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-serif font-bold text-slate-900 leading-tight">
                    {pc.name}
                  </h3>
                </div>
              )
            })}
          </div>

          {/* Lightbulb Box: Why they exist */}
          <div className="p-6 sm:p-7 rounded-3xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-4 shadow-xs">
            <Lightbulb className="w-6 h-6 text-[#0062D2] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="block text-slate-900 font-bold">Why they exist:</strong>
              A Circle that only does its twelve meetings carries momentum for a year. A Circle that takes on projects creates a legacy. Project Chairs give the room a way to do the bigger things it is capable of, without overloading the standing committees.
            </div>
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              The strength of a Circle is in the people who hold it.
            </h2>
            <p className="text-base sm:text-lg text-white/90 font-light max-w-xl mx-auto">
              Fourteen entrepreneurs hold every Circle together. One of those roles is available in yours.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#0062D2] text-sm font-bold shadow-lg shadow-black/10 hover:shadow-xl uppercase tracking-wider transition-all"
            >
              Apply for Circle Role
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/unity"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/20 hover:bg-white/15 transition-all uppercase tracking-wider backdrop-blur-sm"
            >
              Download Unity App
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

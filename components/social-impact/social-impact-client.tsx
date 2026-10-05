'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  HeartHandshake,
  Users,
  Target,
  Sparkles,
  TrendingUp,
  Award,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Globe2,
  Zap,
  Layers,
  Compass,
  Briefcase,
  ExternalLink,
  Clock,
  Landmark,
  ArrowUpRight,
  BookOpen,
  FileText,
  HelpCircle,
  Heart,
  Check,
  HeartCrack,
  Flame,
} from 'lucide-react'

// ─── 3 Evidenced SDGs ────────────────────────────────────────────────────────
const EVIDENCED_SDGS = [
  {
    num: '08',
    title: 'Decent Work & Economic Growth',
    whyItMatters:
      'Sustaining and scaling MSMEs directly protects formal livelihoods and prevents business mortality.',
    whatWeDo:
      'Providing governed peer advisory, cross-border commercial connections, and conflict resolution that keeps enterprise balance sheets resilient.',
    evidence:
      'Tracked bilateral collaboration outcomes, reduced capex failure rates, and job preservation reported across member enterprises.',
    badge: 'Employment & MSME Growth',
  },
  {
    num: '05',
    title: 'Gender Equality & Women in Leadership',
    whyItMatters:
      'Women founders face severe structural gaps in venture capital allocation and institutional market access.',
    whatWeDo:
      'Dedicated Fempreneur Circles, category-exclusive advisory rooms, capital readiness coaching, and commercial supply chain linkages.',
    evidence:
      'Targeted fellowship seats and active women-led enterprise growth cohorts documented inside the community.',
    badge: 'Fempreneur Circles',
  },
  {
    num: '09',
    title: 'Industry, Innovation & Infrastructure',
    whyItMatters:
      'Small and medium enterprises need integration into national and international supply chain infrastructure.',
    whatWeDo:
      'Fostering joint ventures, technology transfers, clean-tech adoption through Greenpreneur, and domestic value-chain matchmaking.',
    evidence:
      'Verified cross-city and cross-industry JVs executed and logged inside the Unity App.',
    badge: 'MSME Infrastructure',
  },
]

// ─── The 8-Stage Impact Journey Pipeline ─────────────────────────────────────
const IMPACT_JOURNEY_STAGES = [
  { stage: 'SEE', desc: 'Recognise a need in your peer or region.' },
  { stage: 'CARE', desc: 'Decide that the challenge matters.' },
  { stage: 'CONTRIBUTE', desc: 'Give something you can genuinely offer.' },
  { stage: 'CONNECT', desc: 'Bring the right people and resources together.' },
  { stage: 'ACT', desc: 'Turn intention into an executed initiative.' },
  { stage: 'MEASURE', desc: 'Track what changed on the Unity App ledger.' },
  { stage: 'SHARE', desc: 'Let the playbook travel across circles.' },
  { stage: 'MULTIPLY', desc: 'Enable the next entrepreneur to lead.' },
]

export function SocialImpactClient() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3.5 text-slate-400" />
          <span>About</span>
          <ChevronRight className="size-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Foundation &amp; Social Impact</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (EVIDENCED SOCIAL IMPACT) ─── */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-5 sm:pt-6 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Master Card Hero Box */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white via-white/95 to-slate-50 border border-slate-200/90 shadow-lg min-h-[480px] lg:min-h-[520px] p-6 sm:p-10 lg:p-12 flex items-center">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
              
              {/* Left Column: Manifesto & Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#0062D2]">
                    EVIDENCED SOCIAL IMPACT &amp; FOUNDATION
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-tight">
                    Foundation &amp; Social Impact
                  </h1>
                  <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
                    Impact is not what we say. It is what changes because we acted together.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  <p>
                    Entrepreneurship creates economic value, but that value multiplies when directed back into communities. <strong className="text-slate-900 font-semibold">One action, logged transparently on our ledger, can protect livelihoods, preserve businesses, and change families.</strong>
                  </p>

                  {/* 4 Impact Focus Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pt-1">
                    {[
                      { text: '1 Action = 1 Life Impacted', icon: HeartHandshake },
                      { text: 'Section 8 Registered Foundation', icon: Landmark },
                      { text: 'Preserving MSME Employment', icon: Building2 },
                      { text: 'UN Sustainable Goals Aligned', icon: Globe2 },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-semibold text-slate-700 flex items-center gap-2 shadow-2xs"
                      >
                        <item.icon className="size-4 shrink-0 text-[#0062D2]" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-2xl bg-blue-50 text-xs font-semibold text-[#0062D2] border border-blue-200/60 flex items-center gap-2">
                    <Sparkles className="size-4 shrink-0 text-[#0062D2]" />
                    <span>Every contribution is affirmed directly by the receiver on the Unity App.</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/1-million-mission"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer uppercase tracking-wider"
                  >
                    <span>Explore 1M Mission</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="#sdgs"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-700 font-bold text-xs sm:text-sm border border-slate-300 shadow-2xs hover:bg-slate-50 transition-all uppercase tracking-wider"
                  >
                    <span>Evidenced SDGs</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visual Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-[4/3] group bg-slate-900 flex flex-col justify-between p-6 sm:p-7">
                  <Image
                    src="/images/who-we-are-impact.jpg"
                    alt="Peers Global foundation and social impact in action"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/30 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-blue-400/40 text-[10px] font-bold text-sky-300 tracking-widest uppercase backdrop-blur-md">
                      <span className="size-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                      SECTION 8 FOUNDATION
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/20">
                      100% EVIDENCE-BASED
                    </span>
                  </div>

                  {/* Bottom Highlight */}
                  <div className="relative z-10 text-white space-y-1">
                    <p className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold">
                      1 Action = 1 Life Impacted
                    </p>
                    <p className="text-sm sm:text-base font-bold leading-snug">
                      Evidence first. Real work. Measurable human outcomes across Bharat.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 items-center">
            {[
              { icon: Target, value: '1M Target', label: 'Entrepreneurs by 2030' },
              { icon: HeartHandshake, value: '100% Confirmed', label: 'Peer Receiver Verified' },
              { icon: Globe2, value: '3 Priority SDGs', label: 'Decent Work, Equality, Infra' },
              { icon: Building2, value: '10,000+ Jobs', label: 'Protected & Preserved' },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── SECTION 2: 3 EVIDENCED SDGs ─── */}
      <section id="sdgs" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  GLOBAL STANDARDS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                Our 3 Priority Sustainable Development Goals
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                We do not claim vague impact. We align strictly with measurable United Nations SDGs where peer collaboration delivers verifiable proof.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-[#0062D2] font-semibold shrink-0">
              UN SDG Framework Aligned
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVIDENCED_SDGS.map((sdg) => (
              <div
                key={sdg.num}
                className="p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center font-mono font-bold text-lg group-hover:scale-110 transition-transform shadow-2xs">
                      {sdg.num}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                      {sdg.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0062D2] transition-colors">
                    {sdg.title}
                  </h3>

                  <div className="space-y-2 text-xs">
                    <div>
                      <strong className="text-slate-800 font-bold block mb-0.5">Why it matters:</strong>
                      <p className="text-slate-600 font-light leading-relaxed">{sdg.whyItMatters}</p>
                    </div>
                    <div>
                      <strong className="text-slate-800 font-bold block mb-0.5">What we do:</strong>
                      <p className="text-slate-600 font-light leading-relaxed">{sdg.whatWeDo}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 text-[11px] font-semibold text-[#0062D2]">
                  <span>Evidence: {sdg.evidence}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: THE 8-STAGE IMPACT JOURNEY PIPELINE ─── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                SYSTEMIC PIPELINE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
              The 8-Stage Impact Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              How intention transforms into verified, compounding community impact.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {IMPACT_JOURNEY_STAGES.map((st, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all space-y-2 text-center flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#0062D2] block">
                    STEP #{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1">
                    {st.stage}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-500 font-light leading-snug">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: SIGNATURE LUXURY CLOSING HERO BANNER ─── */}
      <section
        id="download-unity"
        className="relative py-20 lg:py-28 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-t border-slate-800"
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* SVG Orbital Geometric Lines Background */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-25 overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 600 600" fill="none" className="w-full h-full text-white/30" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 450 A 420 420 0 0 1 550 50" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 120 520 A 500 500 0 0 1 600 120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <path d="M 220 580 A 460 460 0 0 1 580 220" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="280" y1="220" x2="380" y2="120" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="280" cy="220" r="4.5" fill="#7DD3FC" />
            <circle cx="280" cy="220" r="10" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 flex flex-col items-start space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-sky-400 to-rose-400 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                  THE SOCIAL IMPACT MISSION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                One entrepreneur can impact another. When it multiplies, it changes a nation.
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                <p>
                  Join the foundation initiatives, mentor first-generation founders, and record verified acts of support on the Unity App.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
                  <p className="text-sky-200 font-medium text-xs sm:text-sm">
                    • 1 Action = 1 Life Impacted · 3 UN SDGs · 1 Million Mission by 2030.
                  </p>
                  <p className="text-white font-bold text-xs sm:text-sm">Lead through authentic giving.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-105 uppercase tracking-wider group cursor-pointer"
                >
                  <span>Apply for Membership</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/1-million-mission"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all"
                >
                  <span>Explore 1M Mission →</span>
                </Link>
              </div>
            </div>

            {/* Right Cursive Script Highlights */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-xl sm:text-2xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                See.
              </p>
              <p
                className="text-xl sm:text-2xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Care.
              </p>
              <p
                className="text-xl sm:text-2xl text-white leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Act.
              </p>
              <p
                className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Impact.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

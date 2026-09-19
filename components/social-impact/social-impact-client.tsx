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
} from 'lucide-react'

const FOCUS_AREAS = [
  {
    title: 'MSME Strength',
    desc: 'The businesses that build employment across this country, supported with the visibility, knowledge and connections they are usually denied.',
    highlight: 'Over 63 million MSMEs form the backbone of India’s economy.',
    icon: Building2,
  },
  {
    title: 'Women-Led Enterprise',
    desc: 'Empowering women founders through Fempreneur to overcome financing gaps, scale barriers, and institutional prejudice.',
    highlight: 'Direct peer mentorship and market access for women founders.',
    icon: Sparkles,
  },
  {
    title: 'Sustainable Business',
    desc: 'Accelerating circular-economy and ESG-forward initiatives through Greenpreneur and dedicated green industry Circles.',
    highlight: 'Helping sustainable enterprises find capital and pilot corporate clients.',
    icon: Globe2,
  },
  {
    title: 'First-Generation Entrepreneurs',
    desc: 'Supporting founders building without a family business template, an inherited network, or safety net capital behind them.',
    highlight: 'Replacing missing family mentorship with a trusted peer circle.',
    icon: Users,
  },
  {
    title: 'Young Entrepreneurs',
    desc: 'Supporting founders under 30 who are building early, scaling high-velocity products, and leading teams older than themselves.',
    highlight: 'Accelerated board-level problem solving and maturity coaching.',
    icon: Zap,
  },
]

const SDGS = [
  {
    number: '08',
    title: 'Decent Work & Economic Growth',
    target: 'SDG 8.3 & 8.5',
    evidence:
      'By helping MSME founders avoid catastrophic capex mistakes and secure reliable B2B collaborations, member firms retain and expand formal employment across Tier 1, 2, and 3 cities.',
  },
  {
    number: '05',
    title: 'Gender Equality & Women’s Leadership',
    target: 'SDG 5.5',
    evidence:
      'Through the Fempreneur initiative, female business owners secure equal access to procurement supply chains, peer advisory, and institutional collaboration rooms.',
  },
  {
    number: '09',
    title: 'Industry, Innovation & Infrastructure',
    target: 'SDG 9.3',
    evidence:
      'Integrating small-scale industrial enterprises into national value chains and enabling access to modern financial services, technology platforms, and market networks.',
  },
]

export function SocialImpactClient() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-slate-900">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>About</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Foundation &amp; Social Impact</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#F0F5FD] via-[#FBFCFE] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-xs font-bold uppercase tracking-wider text-[#0062D2] mx-auto">
            <HeartHandshake className="w-3.5 h-3.5" />
            Social Architecture
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0D1F47] tracking-tight leading-[1.08]">
            Social Impact
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-[#1e3a8a] italic max-w-3xl mx-auto leading-relaxed font-normal">
            The most effective social work we do is helping one entrepreneur help another.
          </p>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Impact is not an afterthought or corporate CSR program. It is the systemic multiplier produced when business builders stop struggling in isolation.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0062D2] hover:bg-[#1a42c0] text-white text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] hover:shadow-lg transition-all"
              >
                Join the Mission
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
      </section>

      {/* ─── How Impact Actually Works Here ─── */}
      <section className="py-20 md:py-24 border-b border-slate-200/80 bg-[#FAF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              The Multiplier Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
              How impact actually works here
            </h2>
            <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5">
              <p className="text-lg sm:text-xl font-serif text-[#0D1F47] font-semibold">
                Impact at Peers Global is not charity, and it is not separate from the business of the community.
              </p>
              <p>
                A business that grows employs more people. Those people support families. Those families spend in their local economy. An entrepreneur who avoids a costly mistake keeps a team employed that would otherwise have been let go.
              </p>
              <p className="text-xl font-serif font-bold text-[#0062D2]">
                One introduction reaches far more than one person, and it keeps reaching for years.
              </p>
              <p>
                That is why the number we track is lives impacted rather than businesses grown.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/1-million-mission"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0062D2] hover:text-[#1a42c0]"
              >
                See the 1 Million Mission <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
      </section>

      {/* ─── Where We Focus ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                Targeted Interventions
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
                Where we focus
              </h2>
              <p className="text-base text-slate-600">
                <p className="text-base text-slate-600">
                  Concentrating relational power where it creates the greatest generational stability.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FOCUS_AREAS.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="p-8 rounded-3xl bg-[#FAF7F0] border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-[#0D1F47]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-slate-200 text-xs font-bold text-[#0062D2]">
                      {item.highlight}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
      </section>

      {/* ─── The 1 Million Entrepreneurs International Forum ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
                <Award className="w-4 h-4 text-[#0062D2]" />
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
                  <Award className="w-4 h-4 text-[#0062D2]" />
                  Section 8 Not-For-Profit Entity
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
                  The 1 Million Entrepreneurs International Forum
                </h2>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-serif italic">
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-serif italic">
                    Carrying the work that sits outside a commercial community — mentorship programmes, skill development, and support for entrepreneurs who cannot yet afford a seat in a room.
                  </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-slate-200 space-y-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900">Grassroots Mentorship</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Connecting seasoned industrialists with micro-enterprise founders in tier 2 and tier 3 towns.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-slate-200 space-y-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900">Capacity Building</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Workshops on GST, statutory compliance, cash-flow discipline, and modern sales architecture.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-slate-200 space-y-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900">Sponsored Seats</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fully funded 12-month community fellowships for high-potential, underserved entrepreneurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* ─── The SDGs We Contribute To (3 Evidenced) ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                Substantive Alignment
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
                The SDGs we contribute to
              </h2>
              <p className="text-base text-slate-600">
                <p className="text-base text-slate-600">
                  We resist listing all seventeen goals to tick boxes. We focus on three where our operational data proves clear, measurable economic impact.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SDGS.map((sdg) => (
                <div
                  key={sdg.number}
                  className="p-8 rounded-3xl bg-[#FAF7F0] border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl font-mono font-bold text-[#0062D2]">
                    <div className="text-4xl font-mono font-bold text-[#0062D2]">
                      {sdg.number}
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest font-mono text-slate-400">
                        <span className="text-xs uppercase tracking-widest font-mono text-slate-400">
                          {sdg.target}
                        </span>
                        <h3 className="text-xl font-serif font-bold text-[#0D1F47] mt-1">
                          {sdg.title}
                        </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                      {sdg.evidence}
                    </p>
                  </div>
            ))}
                </div>
        </div>
          </section>

          {/* ─── Get Involved ─── */}
          <section className="py-20 md:py-24 border-b border-slate-200/80 bg-[#FAF7F0]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
                  <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                  Community Participation
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
                  Get involved
                </h2>
                <p className="text-base text-slate-600 max-w-xl mx-auto">
                  <p className="text-base text-slate-600 max-w-xl mx-auto">
                    Choose how you want to contribute to the collective economic empowerment of entrepreneurs.
                  </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs hover:border-blue-300 transition-colors">
                  <h3 className="text-lg font-serif font-bold text-slate-900">Mentor an entrepreneur</h3>
                  <p className="text-xs text-slate-600">
                    Share your battle-tested industry expertise with a young or first-generation founder.
                  </p>
                  <Link
                    href="/contact?topic=mentorship"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#1a42c0]"
                  >
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs hover:border-blue-300 transition-colors">
                  <h3 className="text-lg font-serif font-bold text-slate-900">Volunteer</h3>
                  <p className="text-xs text-slate-600">
                    Contribute time or technical skills to Foundation educational summits and masterclasses.
                  </p>
                  <Link
                    href="/contact?topic=volunteer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#1a42c0]"
                  >
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs hover:border-blue-300 transition-colors">
                  <h3 className="text-lg font-serif font-bold text-slate-900">Partner with Foundation</h3>
                  <p className="text-xs text-slate-600">
                    Institutional partnerships with CSR bodies, industry associations, and academic institutes.
                  </p>
                  <Link
                    href="/contact?topic=partnership"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#1a42c0]"
                  >
                    Contact desk <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ─── Closing Banner ─── */}
          <section className="relative bg-[#0B1220] text-white py-24 md:py-32 overflow-hidden border-t border-slate-800">
            <div className="absolute inset-0 z-0 opacity-25">
              <Image
                src="/images/who-we-are-mountain.jpg"
                alt="Mountain ridge horizon"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
                    Numbers are milestones. Lives are the real metric.
                  </h2>
                  <p className="text-base sm:text-lg text-slate-300 font-light max-w-xl mx-auto">
                    Join the community helping India’s business owners create generational dignity.
                  </p>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0062D2] hover:bg-[#1a42c0] text-white text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.35)] hover:shadow-xl uppercase tracking-wider transition-all"
                >
                  Apply to Join
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

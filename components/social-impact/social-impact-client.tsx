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
          <span className="text-neutral-900 font-semibold">Foundation &amp; Social Impact</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-[#EADFC7]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FAF3E0] border border-[#E8DFC8] text-xs font-semibold uppercase tracking-wider text-[#7C5832] mx-auto">
            <HeartHandshake className="w-3.5 h-3.5 text-[#B88746]" />
            Social Architecture
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08]">
            Social Impact
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-[#5B4834] italic max-w-3xl mx-auto leading-relaxed">
            The most effective social work we do is helping one entrepreneur help another.
          </p>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            Impact is not an afterthought or corporate CSR program. It is the systemic multiplier produced when business builders stop struggling in isolation.
          </p>

          <div className="pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#1A1A1A] text-white text-sm font-semibold hover:bg-[#333333] transition-all shadow-md"
            >
              Download Unity App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── How Impact Actually Works Here ─── */}
      <section className="py-20 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
            <span className="w-6 h-[1.5px] bg-[#B88746]" />
            The Multiplier Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
            How impact actually works here
          </h2>
          <div className="prose prose-lg text-[#3D352E] leading-relaxed font-normal space-y-5">
            <p className="text-lg sm:text-xl font-serif text-[#2B231B]">
              Impact at Peers Global is not charity, and it is not separate from the business of the community.
            </p>
            <p>
              A business that grows employs more people. Those people support families. Those families spend in their local economy. An entrepreneur who avoids a costly mistake keeps a team employed that would otherwise have been let go.
            </p>
            <p className="text-xl font-serif font-bold text-[#1A1A1A]">
              One introduction reaches far more than one person, and it keeps reaching for years.
            </p>
            <p>
              That is why the number we track is lives impacted rather than businesses grown.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/1-million-mission"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#8C6422] hover:text-[#5E4214]"
            >
              See the 1 Million Mission <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Where We Focus ─── */}
      <section className="py-20 md:py-28 border-b border-[#EADFC7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
              <span className="w-6 h-[1.5px] bg-[#B88746]" />
              Targeted Interventions
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              Where we focus
            </h2>
            <p className="text-base text-neutral-600">
              Concentrating relational power where it creates the greatest generational stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOCUS_AREAS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF4E6] border border-[#EADBBD] flex items-center justify-center text-[#8C6422]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-serif text-[#1A1A1A]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#F0E6D2] text-xs font-semibold text-[#8C6422]">
                    {item.highlight}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── The 1 Million Entrepreneurs International Forum ─── */}
      <section className="py-20 md:py-28 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white border border-[#E5DAC0] shadow-sm space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
                <Award className="w-4 h-4 text-[#B88746]" />
                Section 8 Not-For-Profit Entity
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
                The 1 Million Entrepreneurs International Forum
              </h2>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-serif italic">
                Carrying the work that sits outside a commercial community — mentorship programmes, skill development, and support for entrepreneurs who cannot yet afford a seat in a room.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#E9DCBF] space-y-2">
                <h3 className="font-serif font-bold text-lg text-neutral-900">Grassroots Mentorship</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Connecting seasoned industrialists with micro-enterprise founders in tier 2 and tier 3 towns.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#E9DCBF] space-y-2">
                <h3 className="font-serif font-bold text-lg text-neutral-900">Capacity Building</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Workshops on GST, statutory compliance, cash-flow discipline, and modern sales architecture.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#E9DCBF] space-y-2">
                <h3 className="font-serif font-bold text-lg text-neutral-900">Sponsored Seats</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Fully funded 12-month community fellowships for high-potential, underserved entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The SDGs We Contribute To (3 Evidenced) ─── */}
      <section className="py-20 md:py-28 border-b border-[#EADFC7]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
              <span className="w-6 h-[1.5px] bg-[#B88746]" />
              Substantive Alignment
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              The SDGs we contribute to
            </h2>
            <p className="text-base text-neutral-600">
              We resist listing all seventeen goals to tick boxes. We focus on three where our operational data proves clear, measurable economic impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SDGS.map((sdg) => (
              <div
                key={sdg.number}
                className="p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-4"
              >
                <div className="text-4xl font-mono font-bold text-[#B88746]">
                  {sdg.number}
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest font-mono text-neutral-400">
                    {sdg.target}
                  </span>
                  <h3 className="text-xl font-serif text-[#1A1A1A] mt-1">
                    {sdg.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-2 border-t border-[#F0E6D2]">
                  {sdg.evidence}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Get Involved ─── */}
      <section className="py-20 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              Get involved
            </h2>
            <p className="text-base text-neutral-600 max-w-xl mx-auto">
              Choose how you want to contribute to the collective economic empowerment of entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-6 rounded-2xl bg-white border border-[#E4D7BD] space-y-3">
              <h3 className="text-lg font-serif font-bold text-neutral-900">Mentor an entrepreneur</h3>
              <p className="text-xs text-neutral-600">
                Share your battle-tested industry expertise with a young or first-generation founder.
              </p>
              <Link
                href="/contact?topic=mentorship"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C6422] hover:text-[#5E4214]"
              >
                Learn more <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E4D7BD] space-y-3">
              <h3 className="text-lg font-serif font-bold text-neutral-900">Volunteer</h3>
              <p className="text-xs text-neutral-600">
                Contribute time or technical skills to Foundation educational summits and masterclasses.
              </p>
              <Link
                href="/contact?topic=volunteer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C6422] hover:text-[#5E4214]"
              >
                Learn more <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E4D7BD] space-y-3">
              <h3 className="text-lg font-serif font-bold text-neutral-900">Partner with Foundation</h3>
              <p className="text-xs text-neutral-600">
                Institutional partnerships with CSR bodies, industry associations, and academic institutes.
              </p>
              <Link
                href="/contact?topic=partnership"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C6422] hover:text-[#5E4214]"
              >
                Contact desk <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative bg-[#0D1117] text-white py-24 md:py-32 overflow-hidden border-t border-neutral-800">
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
              Numbers are milestones. Lives are the real metric.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-light max-w-xl mx-auto">
              Join the community helping India’s business owners create generational dignity.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-amber-500 text-neutral-950 text-sm font-bold hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl uppercase tracking-wider"
            >
              Download Unity App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

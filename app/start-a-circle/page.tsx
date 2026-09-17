import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Users,
  ShieldCheck,
  ChevronRight,
  Building2,
  Sparkles,
  Award,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Start a Circle | Bring Peers Global to Your City',
  description:
    'Found a Circle in your city or industry. We provide the systems, training, technology and community backing. You bring the leadership.',
}

export default function StartACirclePage() {
  const pillars = [
    {
      title: 'Full Operational Playbook',
      desc: 'Tested governance manuals, meeting scripts, and category exclusivity registries ready out of the box.',
    },
    {
      title: 'Unity Technology Stack',
      desc: 'Mobile ledger app, digital attendance tracking, dual-confirmed referral counting, and member directory.',
    },
    {
      title: 'Founder Training & Coaching',
      desc: 'Direct mentorship from national circle chairs and veteran directors on curation and culture preservation.',
    },
    {
      title: 'Cross-City Inflow',
      desc: 'Immediate linkage to 18 national circles and international chapters for bilateral business exchange.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFBFD] text-slate-900">
      {/* Hero */}
      <section className="relative bg-[#050C1A] text-white pt-10 pb-20 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <Link href="/circles" className="text-slate-400 hover:text-white transition-colors">
              Circles
            </Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-sky-400 font-semibold">Start a Circle</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <Compass className="size-4" />
              <span>THE FOUNDER INITIATIVE</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight mb-6">
              Start a Circle in Your City
            </h1>
            <p className="text-xl text-slate-300 font-medium leading-relaxed mb-4">
              The map is not finished. It is being built by entrepreneurs, one city at a time.
            </p>
            <p className="text-base text-slate-400 font-light leading-relaxed mb-8">
              Every Circle that exists today began because one person decided to start it. If there is no Circle in your city, or none in your industry, that is an opening rather than a closed door.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/membership"
                className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all inline-flex items-center gap-2"
              >
                <span>Apply as Circle Founder</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-7 py-3.5 text-sm font-semibold transition-all"
              >
                Schedule Founder Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 mb-3">
              What We Provide, What You Bring
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We provide the structure, the systems, the training, the technology and the support of the wider community. You bring the leadership and the first group of the right people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#0062D2]/40 hover:shadow-md transition-all"
              >
                <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-bold shadow-md inline-flex items-center gap-2"
            >
              <span>Talk to Expansion Team</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

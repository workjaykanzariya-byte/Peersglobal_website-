import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Clock,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Users,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  FileText,
  HeartHandshake,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Circle Meeting Experience | Peers Global',
  description:
    'The four-part, 150-minute structured agenda practiced across every Peers Global Circle in every city.',
}

export default function CircleMeetingExperiencePage() {
  const agendaParts = [
    {
      part: 'Part 01',
      title: 'The Ledger & Impact Review',
      time: '30 Minutes',
      description:
        'Every Peer confirms collaboration received and given over the past month. Referrals, intros, and peer reviews are verified in real time on the Unity ledger.',
    },
    {
      part: 'Part 02',
      title: 'Knowledge Spotlight & Mini-Conference',
      time: '40 Minutes',
      description:
        'A deep-dive knowledge session or industry panel led by a member promoter on supply-chain bottlenecks, regulatory changes, or market expansion tactics.',
    },
    {
      part: 'Part 03',
      title: 'The Confidential Problem-Solving Forum',
      time: '50 Minutes',
      description:
        'One or two members present a high-stakes business challenge. Non-competing promoters apply their collective experience to dismantle bottlenecks.',
    },
    {
      part: 'Part 04',
      title: 'Structured Asks & Collaboration Commitments',
      time: '30 Minutes',
      description:
        'Each member states their precise target introduction or vendor requirement for the coming month. Specific commitments are recorded in Unity.',
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
            <span className="text-sky-400 font-semibold">Circle Meeting Experience</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <Clock className="size-4" />
              <span>THE 150-MINUTE GOVERNED RHYTHM</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight mb-6">
              The Circle Meeting Experience
            </h1>
            <p className="text-xl text-slate-300 font-medium leading-relaxed mb-4">
              The same Peers, a fixed schedule, the same four-part agenda in every Circle in every city.
            </p>
            <p className="text-base text-slate-400 font-light leading-relaxed mb-8">
              No casual rambling. No pitches. A disciplined, high-value workspace built for promoters who value their time and honor their commitments.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/circles"
                className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all inline-flex items-center gap-2"
              >
                <span>Find Your Circle</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/membership"
                className="rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-7 py-3.5 text-sm font-semibold transition-all"
              >
                Explore Membership
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Part Agenda Details */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 mb-3">
              The Four-Part Agenda
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Practiced monthly across India to guarantee high-density collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agendaParts.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#0062D2]/40 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#0062D2] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    {item.part}
                  </span>
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <Clock className="size-3.5" />
                    {item.time}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/circles#find-your-circle"
              className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-bold shadow-md inline-flex items-center gap-2"
            >
              <span>View Active Circles</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import React from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  ChevronRight,
  HeartHandshake,
  Clock,
  MessageSquare,
  Lock,
  Users,
  Sparkles,
  ArrowRight,
  Scale,
} from 'lucide-react'

const COMMITMENTS = [
  {
    num: '01',
    title: 'Give first',
    desc: 'Contribution comes before any ask. We help before we are asked, and without calculating the return. An introduction, a piece of hard-won knowledge, an honest assessment — given freely to the room.',
    icon: HeartHandshake,
  },
  {
    num: '02',
    title: 'Show up',
    desc: 'Trust is built by the same people meeting the same people, consistently, over time. Empty chairs do not collaborate. You honour the room by being in it every month.',
    icon: Clock,
  },
  {
    num: '03',
    title: 'Tell the truth',
    desc: 'Especially when it is uncomfortable. A Peer who only agrees with you is of no use to your business. We offer candid, respectful, and actionable truth in every interaction.',
    icon: MessageSquare,
  },
  {
    num: '04',
    title: 'Protect the room',
    desc: 'What is shared inside a Circle stays inside it. Commercial vulnerabilities, financial realities, and private struggles disclosed in confidence must remain confidential forever.',
    icon: Lock,
  },
  {
    num: '05',
    title: 'Respect every Peer',
    desc: 'Regardless of the size of their business, the length of their membership, or the language they speak. The founder doing ₹2 Cr turnover receives the exact same dignity as the founder doing ₹200 Cr.',
    icon: Users,
  },
  {
    num: '06',
    title: 'Carry the culture',
    desc: 'Every Peer is responsible for the experience of every other Peer. Culture is not maintained by rules alone — it is maintained by how we welcome newcomers, listen to seniors, and handle disagreements.',
    icon: Sparkles,
  },
]

export function PeersCodeClient() {
  return (
    <div className="homepage-sections-root min-h-screen bg-white text-[#0f131a] antialiased">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/culture-and-code" className="hover:text-slate-900 transition-colors">
            Governance
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">The Peers Code</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 border-b border-slate-200/80 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
              CONSTITUTIONAL COVENANT
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f131a] leading-tight">
            <span>The</span> <span className="brand-gradient-text">Peers Code</span>
          </h1>

          <p className="text-xl sm:text-2xl italic text-slate-800 font-medium leading-relaxed">
            Six commitments. Every Peer makes them. Every leader upholds them.
          </p>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
            The Peers Code forms an integral part of the Membership Terms and is binding upon all inducted members, Circle Directors, and institutional office holders.
          </p>
        </div>
      </section>

      {/* Six Commitments */}
      <section className="py-16 md:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMMITMENTS.map((item) => (
              <div
                key={item.num}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      Commitment {item.num}
                    </span>
                    <item.icon className="w-5 h-5 text-[#E11D48]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f131a] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Legal status of the Code */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 text-sm text-slate-700">
            <h4 className="font-bold text-[#0f131a] text-base">
              Status of the Code
            </h4>
            <p className="leading-relaxed text-slate-600">
              The Peers Code is not aspirational marketing. It is a formal condition of membership. Chronic absence, transactional exploitation, confidentiality breach, or conduct unbecoming of a Peer results in category revocation by the Membership Experience Committee.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-[#1D4ED8]">
              <Link href="/membership-terms" className="hover:text-[#E11D48] transition-colors inline-flex items-center gap-1">
                Read Membership Terms <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/community-guidelines" className="hover:text-[#E11D48] transition-colors inline-flex items-center gap-1">
                View Community Guidelines <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


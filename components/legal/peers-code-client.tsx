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
    <div className="min-h-screen bg-[#FBFCFE] text-[#1A1A1A] antialiased">
      {/* Breadcrumb */}
      <div className="border-b border-[#EADFC7]/60 bg-[#FAF6EE]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-neutral-600">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <Link href="/culture-and-code" className="hover:text-neutral-900 transition-colors">
            Governance
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">The Peers Code</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-14 border-b border-[#EADFC7]/60 overflow-hidden bg-[#FAF7F0]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E8] border border-[#E8DFC9] text-xs font-bold uppercase tracking-wider text-[#8C6422]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8C6422]" />
            CONSTITUTIONAL COVENANT
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#162039] tracking-tight leading-tight font-bold">
            The Peers Code
          </h1>

          <p className="text-lg sm:text-xl font-serif italic text-[#394B6E] font-medium leading-relaxed">
            Six commitments. Every Peer makes them. Every leader upholds them.
          </p>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl">
            The Peers Code forms an integral part of the Membership Terms and is binding upon all inducted members, Circle Directors, and institutional office holders.
          </p>
        </div>
      </section>

      {/* Six Commitments */}
      <section className="py-14 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMMITMENTS.map((item) => (
              <div
                key={item.num}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#8C6422] bg-[#FAF4E8] px-2.5 py-0.5 rounded-md border border-[#E8DFC9]">
                      Commitment {item.num}
                    </span>
                    <item.icon className="w-5 h-5 text-[#0D6EFD]" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#142038]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Legal status of the Code */}
          <div className="p-6 rounded-2xl bg-[#FAF4E8] border border-[#E8DFC9] space-y-3 text-xs sm:text-sm text-neutral-700">
            <h4 className="font-serif font-bold text-[#142038] text-base">
              Status of the Code
            </h4>
            <p className="leading-relaxed">
              The Peers Code is not aspirational marketing. It is a formal condition of membership. Chronic absence, transactional exploitation, confidentiality breach, or conduct unbecoming of a Peer results in category revocation by the Membership Experience Committee.
            </p>
            <div className="pt-1 flex flex-wrap gap-4 text-xs font-semibold text-[#0D6EFD]">
              <Link href="/membership-terms" className="hover:underline inline-flex items-center gap-1">
                Read Membership Terms <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/community-guidelines" className="hover:underline inline-flex items-center gap-1">
                View Community Guidelines <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

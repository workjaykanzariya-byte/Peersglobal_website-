'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Users,
  Globe2,
  Cpu,
  Sparkles,
  Factory,
  Building,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  ExternalLink,
  Layers,
  Search,
  Filter,
} from 'lucide-react'

interface CircleItem {
  id: string
  title: string
  slug: string
  category: string
  categoryColor: {
    bg: string
    text: string
    border: string
  }
  icon: React.ComponentType<{ className?: string }>
  iconBg: string
  iconColor: string
  members: string
  location: string
  status: string
}

export default function AdminCirclesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const circles: CircleItem[] = [
    {
      id: 'founders',
      title: 'Founders Circle',
      slug: 'founders-circle',
      category: 'Executive',
      categoryColor: {
        bg: 'bg-blue-50',
        text: 'text-[#1769FF]',
        border: 'border-blue-200/70',
      },
      icon: Users,
      iconBg: 'bg-indigo-50 border border-indigo-100/80 shadow-xs',
      iconColor: 'text-indigo-600',
      members: '140+ Promoters',
      location: 'Mumbai & Delhi',
      status: 'Governed Active',
    },
    {
      id: 'trade',
      title: 'Global Trade & Export Circle',
      slug: 'global-trade-circle',
      category: 'Commerce',
      categoryColor: {
        bg: 'bg-sky-50',
        text: 'text-sky-600',
        border: 'border-sky-200/70',
      },
      icon: Globe2,
      iconBg: 'bg-blue-50 border border-blue-100/80 shadow-xs',
      iconColor: 'text-[#1769FF]',
      members: '95+ Exporters',
      location: 'Ahmedabad & Surat',
      status: 'Governed Active',
    },
    {
      id: 'tech',
      title: 'Tech & AI Innovators Circle',
      slug: 'tech-ai-innovators-circle',
      category: 'Technology',
      categoryColor: {
        bg: 'bg-emerald-50',
        text: 'text-emerald-700',
        border: 'border-emerald-200/70',
      },
      icon: Cpu,
      iconBg: 'bg-emerald-50 border border-emerald-100/80 shadow-xs',
      iconColor: 'text-emerald-600',
      members: '120+ Founders',
      location: 'Bengaluru & Hyderabad',
      status: 'Governed Active',
    },
    {
      id: 'women',
      title: 'Women Leaders Circle',
      slug: 'women-leaders-circle',
      category: 'Leadership',
      categoryColor: {
        bg: 'bg-fuchsia-50',
        text: 'text-fuchsia-600',
        border: 'border-fuchsia-200/70',
      },
      icon: Sparkles,
      iconBg: 'bg-pink-50 border border-pink-100/80 shadow-xs',
      iconColor: 'text-pink-600',
      members: '80+ Executives',
      location: 'Pune & Chennai',
      status: 'Governed Active',
    },
    {
      id: 'industrial',
      title: 'Industrial & Manufacturing',
      slug: 'industrial-manufacturing-circle',
      category: 'Manufacturing',
      categoryColor: {
        bg: 'bg-amber-50',
        text: 'text-amber-700',
        border: 'border-amber-200/70',
      },
      icon: Factory,
      iconBg: 'bg-amber-50 border border-amber-100/80 shadow-xs',
      iconColor: 'text-amber-600',
      members: '110+ Developers',
      location: 'NCR & Mumbai',
      status: 'Governed Active',
    },
    {
      id: 'real-estate',
      title: 'Real Estate & Infrastructure Circle',
      slug: 'real-estate-infrastructure-circle',
      category: 'Real Estate',
      categoryColor: {
        bg: 'bg-violet-50',
        text: 'text-violet-600',
        border: 'border-violet-200/70',
      },
      icon: Building,
      iconBg: 'bg-sky-50 border border-sky-100/80 shadow-xs',
      iconColor: 'text-sky-600',
      members: '75+ Developers',
      location: 'NCR & Mumbai',
      status: 'Governed Active',
    },
  ]

  const filteredCircles = circles.filter(
    (c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      {/* 1. Header Hero Banner Card */}
      <div className="relative overflow-hidden rounded-3xl bg-white border border-[#E2E8F4] p-6 md:p-8 shadow-sm">
        {/* Colorful gradient aura decoration in top-right */}
        <div className="absolute top-0 right-0 w-80 h-full pointer-events-none opacity-60">
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-gradient-to-br from-purple-300/50 via-cyan-200/60 to-blue-400/40 blur-2xl transform rotate-12" />
          <div className="absolute top-8 right-16 w-44 h-44 rounded-full bg-gradient-to-tr from-pink-200/40 via-blue-200/50 to-indigo-300/40 blur-xl" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start md:items-center gap-4">
            {/* Header Icon Box */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1769FF]/10 via-[#08C7E8]/15 to-purple-500/10 border border-[#1769FF]/20 flex items-center justify-center text-[#1769FF] shadow-inner shrink-0">
              <Layers className="w-7 h-7" />
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#101B35] tracking-tight">
                Peer Circles & Initiatives
              </h1>
              <p className="text-sm text-slate-500 mt-1 font-medium">
                Manage active governed peer circles, exclusive chapters, and memberships.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Circles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCircles.map((circle) => {
          const IconComponent = circle.icon
          return (
            <div
              key={circle.id}
              className="group relative bg-white rounded-3xl border border-[#E2E8F4] p-6 shadow-xs hover:shadow-xl hover:border-blue-300/70 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon + Category Badge + Governed Active Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex items-center gap-2.5">
                    {/* Circle Specific Icon */}
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center ${circle.iconBg} ${circle.iconColor}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Category Pill */}
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${circle.categoryColor.bg} ${circle.categoryColor.text} ${circle.categoryColor.border}`}
                    >
                      {circle.category}
                    </span>
                  </div>

                  {/* Governed Active Pill Badge */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{circle.status}</span>
                  </span>
                </div>

                {/* Circle Title */}
                <h3 className="text-lg font-bold text-[#101B35] group-hover:text-[#1769FF] transition-colors leading-snug line-clamp-1 mb-2.5">
                  {circle.title}
                </h3>

                {/* Members & Location Line */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>{circle.members}</span>
                  </span>
                  <span className="text-slate-300 font-bold">•</span>
                  <span className="flex items-center gap-1.5 truncate">
                    <span>{circle.location}</span>
                  </span>
                </div>
              </div>

              {/* Bottom Footer Row */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <span className="text-xs font-mono text-slate-400 truncate max-w-[150px]">
                  /circles/{circle.slug}
                </span>

                <Link
                  href={`/circles/${circle.slug}`}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769FF] hover:text-blue-700 group-hover:underline transition-all"
                >
                  <span>Live View</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


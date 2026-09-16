'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Users,
  Handshake,
  Compass,
  Building2,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  ArrowRight,
  MoreVertical,
  Filter,
  CheckCircle2,
  Clock,
  XCircle,
  ChevronRight,
  Eye,
  FileCheck2,
  Globe2,
  ExternalLink,
} from 'lucide-react'
import { useAdminAuth } from '@/components/admin/admin-auth-context'

export default function NextGenAdminDashboard() {
  const { user } = useAdminAuth()
  const [activeGrowthTime, setActiveGrowthTime] = useState('Last 6 Months')

  // 4. KPI CARDS DATA
  const kpiCards = [
    {
      title: 'Total Partners',
      value: '1,248',
      change: '+12%',
      isPositive: true,
      desc: 'from last month',
      icon: Users,
      color: 'from-[#1769FF] to-[#08C7E8]',
      sparkline: 'M0,25 Q20,5 40,18 T80,8 T120,20 T160,4',
      bgGlow: 'bg-[#1769FF]/5 border-[#1769FF]/20',
    },
    {
      title: 'Active Partnerships',
      value: '86',
      change: '+18%',
      isPositive: true,
      desc: 'cross-border deals',
      icon: Handshake,
      color: 'from-[#08C7E8] to-[#00A3C4]',
      sparkline: 'M0,22 Q30,28 60,12 T100,16 T140,5 T160,2',
      bgGlow: 'bg-[#08C7E8]/5 border-[#08C7E8]/20',
    },
    {
      title: 'Opportunities',
      value: '342',
      change: '+24%',
      isPositive: true,
      desc: 'active ventures open',
      icon: Compass,
      color: 'from-[#1769FF] to-[#4F46E5]',
      sparkline: 'M0,28 Q25,20 50,22 T90,10 T130,8 T160,3',
      bgGlow: 'bg-indigo-50/50 border-indigo-200/60',
    },
    {
      title: 'Total Companies',
      value: '276',
      change: '+15%',
      isPositive: true,
      desc: 'verified enterprises',
      icon: Building2,
      color: 'from-[#059669] to-[#10B981]',
      sparkline: 'M0,24 Q30,16 60,18 T110,8 T140,12 T160,4',
      bgGlow: 'bg-emerald-50/50 border-emerald-200/60',
    },
  ]

  // 6. RECENT ACTIVITY DATA
  const recentActivities = [
    {
      id: 1,
      title: 'New partnership request submitted',
      company: 'Zen Cloud Solutions → Apex Logistics',
      time: '12 mins ago',
      type: 'request',
      color: 'bg-[#1769FF]',
    },
    {
      id: 2,
      title: 'New partner joined network',
      company: 'FinEdge Advisory Group (Mumbai Chapter)',
      time: '45 mins ago',
      type: 'partner',
      color: 'bg-[#08C7E8]',
    },
    {
      id: 3,
      title: 'New opportunity created',
      company: '₹3.5 Cr Cross-Border SaaS Supply Contract',
      time: '2 hours ago',
      type: 'opportunity',
      color: 'bg-indigo-500',
    },
    {
      id: 4,
      title: 'Partnership agreement approved',
      company: 'EcoPower Tech & Horizon Polymers',
      time: '4 hours ago',
      type: 'approved',
      color: 'bg-emerald-500',
    },
    {
      id: 5,
      title: 'New enterprise registered',
      company: 'Vanguard Aerospace Components',
      time: '6 hours ago',
      type: 'company',
      color: 'bg-[#07152E]',
    },
  ]

  // 7. TOP PERFORMING PARTNERS
  const topPartners = [
    { rank: 1, name: 'Apex Logistics', sector: 'Supply Chain & Freight', deals: 28, growth: '+34%', revenue: '₹4.2 Cr' },
    { rank: 2, name: 'EcoPower Technologies', sector: 'CleanTech & Energy', deals: 22, growth: '+28%', revenue: '₹3.1 Cr' },
    { rank: 3, name: 'Zen Cloud Solutions', sector: 'Enterprise AI & SaaS', deals: 19, growth: '+22%', revenue: '₹2.8 Cr' },
    { rank: 4, name: 'Horizon Polymers', sector: 'Advanced Manufacturing', deals: 15, growth: '+19%', revenue: '₹1.9 Cr' },
    { rank: 5, name: 'FinEdge Advisory', sector: 'Strategic M&A Finance', deals: 12, growth: '+15%', revenue: '₹1.5 Cr' },
  ]

  // 8. PARTNERSHIP REQUEST TABLE DATA
  const partnershipRequests = [
    {
      id: 'PR-8921',
      company: 'Apex Logistics',
      partnerWith: 'Zen Cloud Solutions',
      category: 'Tech Integration',
      status: 'Pending',
      date: 'Sep 16, 2026',
      statusClass: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      id: 'PR-8920',
      company: 'EcoPower Tech',
      partnerWith: 'Horizon Polymers',
      category: 'Sustainable Materials',
      status: 'Active',
      date: 'Sep 15, 2026',
      statusClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 'PR-8919',
      company: 'FinEdge Advisory',
      partnerWith: 'Vanguard Components',
      category: 'Capital Synergies',
      status: 'Completed',
      date: 'Sep 14, 2026',
      statusClass: 'bg-blue-50 text-[#1769FF] border-blue-200',
    },
    {
      id: 'PR-8918',
      company: 'Nexus Health Biotech',
      partnerWith: 'AeroGlobal Logistics',
      category: 'Cold-Chain Supply',
      status: 'Pending',
      date: 'Sep 12, 2026',
      statusClass: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      id: 'PR-8917',
      company: 'Synthex AI Labs',
      partnerWith: 'Urban Infra Group',
      category: 'Smart Cities API',
      status: 'Rejected',
      date: 'Sep 10, 2026',
      statusClass: 'bg-red-50 text-red-600 border-red-200',
    },
  ]

  return (
    <div className="space-y-8 font-sans pb-12">
      {/* 3. WELCOME HERO WITH GLOWING GLOBE NETWORK */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#07152E] via-[#0C224A] to-[#07152E] text-white p-8 lg:p-10 shadow-xl shadow-[#07152E]/10 border border-[#0E2854]">
        {/* Subtle glowing ambient lights */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1769FF]/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#08C7E8]/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#08C7E8] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>World&apos;s First Collaboration Platform</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              Good Morning, {user?.name || 'Admin'} 👋
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Here&apos;s what&apos;s happening across your global collaboration network today. You have{' '}
              <span className="text-[#08C7E8] font-bold">14 new partnership requests</span> requiring your review.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1769FF] to-[#08C7E8] hover:from-[#1357D6] hover:to-[#06ACC8] text-white font-bold text-xs shadow-lg shadow-[#1769FF]/30 transition-all flex items-center gap-2 cursor-pointer">
                <span>Explore Opportunities</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/"
                target="_blank"
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md text-white border border-white/20 font-semibold text-xs transition flex items-center gap-2"
              >
                <span>Live Network View</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#08C7E8]" />
              </Link>
            </div>
          </div>

          {/* Glowing 3D Globe Network Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
              {/* Pulsing Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-[#1769FF]/30 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-dashed border-[#08C7E8]/40" />
              <div className="absolute inset-10 rounded-full border border-[#1769FF]/20" />

              {/* Central Glowing Globe */}
              <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-[#1769FF] via-[#08C7E8] to-[#07152E] flex items-center justify-center shadow-2xl shadow-[#1769FF]/50 ring-4 ring-[#08C7E8]/20 relative">
                <Globe2 className="w-20 h-20 text-white/90 stroke-[1.2]" />

                {/* Animated Connection Nodes */}
                <div className="absolute -top-2 left-6 px-2 py-0.5 rounded-full bg-[#08C7E8] text-[#07152E] font-bold text-[9px] shadow-lg animate-bounce">
                  Mumbai ↔ London
                </div>
                <div className="absolute -bottom-2 right-4 px-2 py-0.5 rounded-full bg-[#1769FF] text-white font-bold text-[9px] shadow-lg">
                  Dubai Hub
                </div>
                <div className="absolute top-1/2 -right-6 px-2 py-0.5 rounded-full bg-emerald-400 text-slate-950 font-bold text-[9px] shadow-lg">
                  1,248 Nodes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {kpiCards.map((kpi, idx) => {
          const Icon = kpi.icon
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-[#E2E8F4] p-5 shadow-sm hover:shadow-md hover:border-[#1769FF]/40 transition-all duration-200 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${kpi.color} text-white shadow-md shadow-[#1769FF]/15 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <TrendingUp className="w-3 h-3" />
                  {kpi.change}
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500">{kpi.title}</p>
                <div className="flex items-baseline justify-between mt-1">
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-[#101B35] tracking-tight font-display">
                    {kpi.value}
                  </h3>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">{kpi.desc}</p>
              </div>

              {/* Sparkline Visual */}
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-mono">30D TREND</span>
                <svg className="w-24 h-6 overflow-visible" viewBox="0 0 160 30">
                  <path
                    d={kpi.sparkline}
                    fill="none"
                    stroke={idx === 0 ? '#1769FF' : idx === 1 ? '#08C7E8' : idx === 2 ? '#4F46E5' : '#10B981'}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          )
        })}
      </div>

      {/* 5. ANALYTICS SECTION: PARTNERSHIP GROWTH (AREA) & PARTNERSHIP STATUS (DONUT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Large Partnership Growth Area Chart */}
        <div className="lg:col-span-8 bg-white border border-[#E2E8F4] rounded-3xl p-6 lg:p-7 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-[#101B35] font-display">Partnership Growth</h2>
              <p className="text-xs text-slate-500">Monthly cross-border collaborative venture volume</p>
            </div>

            <div className="inline-flex items-center p-1 rounded-xl bg-[#F6F9FF] border border-[#E2E8F4] text-xs">
              {['Last 6 Months', 'Year 2026', 'All Time'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveGrowthTime(tab)}
                  className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
                    activeGrowthTime === tab
                      ? 'bg-white text-[#1769FF] font-bold shadow-xs'
                      : 'text-slate-500 hover:text-[#101B35]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Area Chart Representation */}
          <div className="relative pt-4">
            <div className="h-64 w-full relative">
              {/* Grid Horizontal Guidelines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] text-slate-300 font-mono">
                <div className="border-b border-dashed border-slate-100 pb-1 flex justify-between">
                  <span>200 Deals</span>
                </div>
                <div className="border-b border-dashed border-slate-100 pb-1 flex justify-between">
                  <span>150 Deals</span>
                </div>
                <div className="border-b border-dashed border-slate-100 pb-1 flex justify-between">
                  <span>100 Deals</span>
                </div>
                <div className="border-b border-dashed border-slate-100 pb-1 flex justify-between">
                  <span>50 Deals</span>
                </div>
                <div className="border-b border-slate-200 pb-1 flex justify-between">
                  <span>0 Deals</span>
                </div>
              </div>

              {/* Curved SVG Area Chart */}
              <svg className="w-full h-full relative z-10" viewBox="0 0 600 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1769FF" stopOpacity="0.45" />
                    <stop offset="60%" stopColor="#08C7E8" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#08C7E8" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Gradient Fill Area */}
                <path
                  d="M0,170 C100,140 150,150 200,90 C250,30 300,110 380,60 C460,10 520,70 600,20 L600,200 L0,200 Z"
                  fill="url(#areaGradient)"
                />
                {/* Stroke Line */}
                <path
                  d="M0,170 C100,140 150,150 200,90 C250,30 300,110 380,60 C460,10 520,70 600,20"
                  fill="none"
                  stroke="#1769FF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Highlight Points */}
                <circle cx="200" cy="90" r="5" fill="#1769FF" className="ring-4 ring-[#1769FF]/20" />
                <circle cx="380" cy="60" r="5" fill="#08C7E8" className="ring-4 ring-[#08C7E8]/20" />
                <circle cx="600" cy="20" r="6" fill="#1769FF" />
              </svg>
            </div>

            {/* X-Axis Labels */}
            <div className="flex justify-between text-xs font-semibold text-slate-500 pt-3 px-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>
        </div>

        {/* Partnership Status Donut Chart */}
        <div className="lg:col-span-4 bg-white border border-[#E2E8F4] rounded-3xl p-6 lg:p-7 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-[#101B35] font-display">Partnership Status</h2>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mb-6">Distribution across 86 active collaboration pipelines</p>

            {/* Donut Graphic Representation */}
            <div className="relative w-44 h-44 mx-auto flex items-center justify-center my-2">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                {/* Background circle */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#F1F5F9"
                  strokeWidth="4"
                />
                {/* Active: 58% (#1769FF) */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#1769FF"
                  strokeWidth="4.2"
                  strokeDasharray="58, 100"
                  strokeLinecap="round"
                />
                {/* Completed: 24% (#08C7E8) */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#08C7E8"
                  strokeWidth="4.2"
                  strokeDasharray="24, 100"
                  strokeDashoffset="-59"
                  strokeLinecap="round"
                />
                {/* Pending: 12% (#F59E0B) */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="4.2"
                  strokeDasharray="12, 100"
                  strokeDashoffset="-84"
                  strokeLinecap="round"
                />
                {/* Cancelled: 6% (#EF4444) */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="4.2"
                  strokeDasharray="6, 100"
                  strokeDashoffset="-97"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-black text-[#101B35] font-display">86</span>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Total Deals</span>
              </div>
            </div>
          </div>

          {/* Donut Legend */}
          <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1769FF]" />
              <span className="text-slate-600 font-medium">Active (58%)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#08C7E8]" />
              <span className="text-slate-600 font-medium">Completed (24%)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              <span className="text-slate-600 font-medium">Pending (12%)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
              <span className="text-slate-600 font-medium">Cancelled (6%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 6. RECENT ACTIVITY & 7. TOP PERFORMING PARTNERS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 6. RECENT ACTIVITY TIMELINE */}
        <div className="lg:col-span-6 bg-white border border-[#E2E8F4] rounded-3xl p-6 lg:p-7 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-base font-bold text-[#101B35] font-display">Recent Activity</h2>
              <p className="text-xs text-slate-500">Live timeline across collaboration nodes</p>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Live Stream
            </span>
          </div>

          <div className="relative pl-6 space-y-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {recentActivities.map((item) => (
              <div key={item.id} className="relative group">
                {/* Glowing Circular Node */}
                <div
                  className={`absolute -left-6 top-1 w-4 h-4 rounded-full ${item.color} ring-4 ring-white shadow-xs group-hover:scale-125 transition-transform`}
                />
                <div>
                  <p className="text-xs font-bold text-[#101B35] group-hover:text-[#1769FF] transition">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{item.company}</p>
                  <span className="text-[10px] text-slate-400 font-medium">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. TOP PERFORMING PARTNERS RANKED LIST */}
        <div className="lg:col-span-6 bg-white border border-[#E2E8F4] rounded-3xl p-6 lg:p-7 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-base font-bold text-[#101B35] font-display">Top Performing Partners</h2>
              <p className="text-xs text-slate-500">Ranked by collaborative deal volume & growth</p>
            </div>
            <Link
              href="/admin/partnerships"
              className="text-xs text-[#1769FF] hover:underline font-bold flex items-center gap-1"
            >
              <span>View All</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-2.5">
            {topPartners.map((partner) => (
              <div
                key={partner.rank}
                className="flex items-center justify-between p-3 rounded-2xl bg-[#F6F9FF] hover:bg-[#EEF4FF] border border-[#E2E8F4] transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 ${
                      partner.rank === 1
                        ? 'bg-gradient-to-tr from-[#1769FF] to-[#08C7E8] text-white shadow-sm'
                        : partner.rank === 2
                        ? 'bg-[#101B35] text-white'
                        : 'bg-white text-slate-600 border border-slate-200'
                    }`}
                  >
                    {partner.rank}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#101B35] group-hover:text-[#1769FF] transition">
                      {partner.name}
                    </h4>
                    <p className="text-[11px] text-slate-500">{partner.sector}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-extrabold text-[#101B35]">{partner.deals} Deals</span>
                  <div className="text-[11px] text-emerald-600 font-bold">{partner.growth}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 8. PARTNERSHIP REQUEST TABLE */}
      <div className="bg-white border border-[#E2E8F4] rounded-3xl p-6 lg:p-7 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-base font-bold text-[#101B35] font-display">Partnership Requests</h2>
            <p className="text-xs text-slate-500">Manage incoming promoter collaborations and alliances</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-xl bg-[#F6F9FF] border border-[#E2E8F4] text-xs text-slate-600 hover:text-[#101B35] flex items-center gap-1.5 font-medium transition cursor-pointer">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span>Filter Requests</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#101B35]">
            <thead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
              <tr>
                <th className="py-3 px-4">Company</th>
                <th className="py-3 px-4">Partner With</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {partnershipRequests.map((req) => (
                <tr key={req.id} className="hover:bg-[#F6F9FF] transition group">
                  <td className="py-3.5 px-4 font-bold text-[#101B35]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-[#1769FF]/10 text-[#1769FF] font-bold flex items-center justify-center text-[10px]">
                        {req.company.slice(0, 1)}
                      </div>
                      <span>{req.company}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 font-medium">{req.partnerWith}</td>
                  <td className="py-3.5 px-4 text-slate-500">{req.category}</td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${req.statusClass}`}
                    >
                      {req.status === 'Active' && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                      {req.status === 'Pending' && <Clock className="w-3 h-3 text-amber-600" />}
                      {req.status === 'Rejected' && <XCircle className="w-3 h-3 text-red-500" />}
                      {req.status === 'Completed' && <FileCheck2 className="w-3 h-3 text-[#1769FF]" />}
                      <span>{req.status}</span>
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400 font-medium">{req.date}</td>
                  <td className="py-3.5 px-4 text-right space-x-1.5">
                    <button
                      className="px-2.5 py-1 rounded-lg bg-[#1769FF] hover:bg-[#1357D6] text-white font-bold text-[11px] shadow-xs transition cursor-pointer"
                    >
                      Review
                    </button>
                    <button
                      className="px-2.5 py-1 rounded-lg bg-[#F6F9FF] hover:bg-slate-100 text-slate-600 border border-slate-200 font-semibold text-[11px] transition cursor-pointer"
                    >
                      View
                    </button>
                    <button
                      className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
                    >
                      <MoreVertical className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

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
  FolderTree,
  FileText,
  Image as ImageIcon,
  MonitorPlay,
} from 'lucide-react'
import { useAdminAuth } from '@/components/admin/admin-auth-context'

export default function NextGenAdminDashboard() {
  const { user } = useAdminAuth()
  const [activeGrowthTime, setActiveGrowthTime] = useState('Last 6 Months')

  // Quick Action Hub Items (Strictly matching Platform Menu Items)
  const quickNavs = [
    { label: 'Partnerships', href: '/admin/partnerships', icon: Handshake, color: 'text-blue-500 bg-blue-50 hover:bg-blue-100/80' },
    { label: 'Opportunities', href: '/admin/opportunities', icon: Compass, color: 'text-emerald-500 bg-emerald-50 hover:bg-emerald-100/80' },
    { label: 'Companies', href: '/admin/companies', icon: Building2, color: 'text-amber-500 bg-amber-50 hover:bg-amber-100/80' },
    { label: 'Publications', href: '/admin/blogs', icon: FileText, color: 'text-rose-500 bg-rose-50 hover:bg-rose-100/80' },
    { label: 'Media Library', href: '/admin/media', icon: ImageIcon, color: 'text-cyan-500 bg-cyan-50 hover:bg-cyan-100/80' },
    { label: 'Page Medias', href: '/admin/page-media', icon: MonitorPlay, color: 'text-purple-500 bg-purple-50 hover:bg-purple-100/80' },
  ]

  // 4. KPI CARDS DATA
  const kpiCards = [
    {
      title: 'TOTAL PEERS',
      value: '1,248',
      change: '+12%',
      isPositive: true,
      desc: 'Registered directory',
      icon: Users,
      iconColor: 'bg-blue-50 text-blue-500',
      badgeClass: 'bg-blue-50 text-blue-600',
      sparkColor: '#3B82F6',
      accentLine: 'from-blue-500 to-indigo-500',
      sparkline: 'M0,25 Q20,5 40,18 T80,8 T120,20 T160,4',
    },
    {
      title: 'ACTIVE CIRCLES',
      value: '86',
      change: '● Healthy',
      isPositive: true,
      desc: 'Operational hubs',
      icon: Handshake,
      iconColor: 'bg-emerald-50 text-emerald-500',
      badgeClass: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
      sparkColor: '#10B981',
      accentLine: 'from-emerald-500 to-teal-500',
      sparkline: 'M0,22 Q30,28 60,12 T100,16 T140,5 T160,2',
    },
    {
      title: 'AWAITING REVIEW',
      value: '342',
      change: '● Pending',
      isPositive: true,
      desc: 'Circles awaiting action',
      icon: Compass,
      iconColor: 'bg-amber-50 text-amber-500',
      badgeClass: 'bg-amber-50 text-amber-600 border border-amber-100',
      sparkColor: '#F59E0B',
      accentLine: 'from-amber-500 to-orange-500',
      sparkline: 'M0,28 Q25,20 50,22 T90,10 T130,8 T160,3',
    },
    {
      title: 'NEW SIGNUPS',
      value: '276',
      change: '⚡ Active',
      isPositive: true,
      desc: 'Registered today',
      icon: Building2,
      iconColor: 'bg-purple-50 text-purple-500',
      badgeClass: 'bg-purple-50 text-purple-600 border border-purple-100',
      sparkColor: '#8B5CF6',
      accentLine: 'from-purple-500 to-pink-500',
      sparkline: 'M0,24 Q30,16 60,18 T110,8 T140,12 T160,4',
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
      color: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'New partner joined network',
      company: 'FinEdge Advisory Group (Mumbai Chapter)',
      time: '45 mins ago',
      type: 'partner',
      color: 'bg-cyan-500',
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
      color: 'bg-slate-700',
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
      statusClass: 'bg-blue-50 text-blue-700 border-blue-200',
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
    <div className="space-y-6 font-sans pb-12">
      {/* 1. HEADER TITLE BAR (PEERS UNITY STYLE) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-5 rounded-2xl border border-[#E8ECF4] shadow-xs">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B] tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Today is Thursday, Sep 17, 2026
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-[#E2E8F0] text-slate-700 text-xs font-semibold shadow-xs transition cursor-pointer"
          >
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* 2. QUICK ACCESS CARDS ROW (IMAGE 2 STYLE) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {quickNavs.map((item, idx) => {
          const Icon = item.icon
          return (
            <Link
              key={idx}
              href={item.href}
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-[#E8ECF4] shadow-xs hover:shadow-md hover:border-slate-300 transition-all text-center group"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-transform group-hover:scale-110 ${item.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#1E293B] group-hover:text-[#4F46E5] transition">
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>

      {/* 3. KPI STAT CARDS WITH ACCENT LINE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((kpi, idx) => {
          const Icon = kpi.icon
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-[#E8ECF4] p-5 shadow-xs hover:shadow-md transition-all duration-200 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{kpi.title}</span>
                  <div className={`p-2 rounded-xl ${kpi.iconColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-1">
                  <h3 className="text-3xl font-extrabold text-[#1E293B] tracking-tight font-display">
                    {kpi.value}
                  </h3>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">{kpi.desc}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${kpi.badgeClass}`}>
                  {kpi.change}
                </span>
              </div>

              {/* Bottom Gradient Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${kpi.accentLine}`} />
            </div>
          )
        })}
      </div>

      {/* 4. ANALYTICS: PARTNERSHIP GROWTH & STATUS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Large Partnership Growth Area Chart */}
        <div className="lg:col-span-8 bg-white border border-[#E8ECF4] rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-[#1E293B]">Partnership Growth</h2>
              <p className="text-xs text-slate-500">Monthly cross-border collaborative venture volume</p>
            </div>

            <div className="inline-flex items-center p-1 rounded-xl bg-[#F4F6FB] border border-[#E8ECF4] text-xs">
              {['Last 6 Months', 'Year 2026', 'All Time'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveGrowthTime(tab)}
                  className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
                    activeGrowthTime === tab
                      ? 'bg-white text-[#4F46E5] font-bold shadow-xs'
                      : 'text-slate-500 hover:text-[#1E293B]'
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
                    <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.35" />
                    <stop offset="60%" stopColor="#818CF8" stopOpacity="0.10" />
                    <stop offset="100%" stopColor="#818CF8" stopOpacity="0.0" />
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
                  stroke="#4F46E5"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Highlight Points */}
                <circle cx="200" cy="90" r="4.5" fill="#4F46E5" className="ring-4 ring-[#4F46E5]/20" />
                <circle cx="380" cy="60" r="4.5" fill="#818CF8" className="ring-4 ring-[#818CF8]/20" />
                <circle cx="600" cy="20" r="5" fill="#4F46E5" />
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
        <div className="lg:col-span-4 bg-white border border-[#E8ECF4] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-[#1E293B]">Partnership Status</h2>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mb-6">Distribution across 86 active collaboration pipelines</p>

            {/* Donut Graphic Representation */}
            <div className="relative w-44 h-44 mx-auto flex items-center justify-center my-2">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#F1F5F9"
                  strokeWidth="4"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="4.2"
                  strokeDasharray="58, 100"
                  strokeLinecap="round"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="4.2"
                  strokeDasharray="24, 100"
                  strokeDashoffset="-59"
                  strokeLinecap="round"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="4.2"
                  strokeDasharray="12, 100"
                  strokeDashoffset="-84"
                  strokeLinecap="round"
                />
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
                <span className="text-2xl font-black text-[#1E293B] font-display">86</span>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Total Deals</span>
              </div>
            </div>
          </div>

          {/* Donut Legend */}
          <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4F46E5]" />
              <span className="text-slate-600 font-medium">Active (58%)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]" />
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

      {/* 5. RECENT ACTIVITY & TOP PERFORMING PARTNERS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* RECENT ACTIVITY TIMELINE */}
        <div className="lg:col-span-6 bg-white border border-[#E8ECF4] rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-base font-bold text-[#1E293B]">Recent Activity</h2>
              <p className="text-xs text-slate-500">Live timeline across collaboration nodes</p>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Live Stream
            </span>
          </div>

          <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {recentActivities.map((item) => (
              <div key={item.id} className="relative group">
                <div
                  className={`absolute -left-6 top-1 w-3.5 h-3.5 rounded-full ${item.color} ring-4 ring-white shadow-xs group-hover:scale-125 transition-transform`}
                />
                <div>
                  <p className="text-xs font-bold text-[#1E293B] group-hover:text-[#4F46E5] transition">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{item.company}</p>
                  <span className="text-[10px] text-slate-400 font-medium">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TOP PERFORMING PARTNERS RANKED LIST */}
        <div className="lg:col-span-6 bg-white border border-[#E8ECF4] rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-base font-bold text-[#1E293B]">Top Performing Partners</h2>
              <p className="text-xs text-slate-500">Ranked by collaborative deal volume & growth</p>
            </div>
            <Link
              href="/admin/partnerships"
              className="text-xs text-[#4F46E5] hover:underline font-bold flex items-center gap-1"
            >
              <span>View All</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-2">
            {topPartners.map((partner) => (
              <div
                key={partner.rank}
                className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] hover:bg-slate-100/80 border border-[#E8ECF4] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-extrabold text-xs shrink-0 ${
                      partner.rank === 1
                        ? 'bg-[#4F46E5] text-white shadow-xs'
                        : partner.rank === 2
                        ? 'bg-[#1E293B] text-white'
                        : 'bg-white text-slate-600 border border-slate-200'
                    }`}
                  >
                    {partner.rank}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1E293B] group-hover:text-[#4F46E5] transition">
                      {partner.name}
                    </h4>
                    <p className="text-[11px] text-slate-500">{partner.sector}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-extrabold text-[#1E293B]">{partner.deals} Deals</span>
                  <div className="text-[11px] text-emerald-600 font-bold">{partner.growth}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. PARTNERSHIP REQUEST TABLE */}
      <div className="bg-white border border-[#E8ECF4] rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-base font-bold text-[#1E293B]">Partnership Requests</h2>
            <p className="text-xs text-slate-500">Manage incoming promoter collaborations and alliances</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E8ECF4] text-xs text-slate-600 hover:text-[#1E293B] flex items-center gap-1.5 font-medium transition cursor-pointer">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span>Filter Requests</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#1E293B]">
            <thead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-[#F8FAFC] border-b border-slate-100">
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
                <tr key={req.id} className="hover:bg-[#F8FAFC] transition group">
                  <td className="py-3 px-4 font-bold text-[#1E293B]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-indigo-50 text-[#4F46E5] font-bold flex items-center justify-center text-[10px]">
                        {req.company.slice(0, 1)}
                      </div>
                      <span>{req.company}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-600 font-medium">{req.partnerWith}</td>
                  <td className="py-3 px-4 text-slate-500">{req.category}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${req.statusClass}`}
                    >
                      {req.status === 'Active' && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                      {req.status === 'Pending' && <Clock className="w-3 h-3 text-amber-600" />}
                      {req.status === 'Rejected' && <XCircle className="w-3 h-3 text-red-500" />}
                      {req.status === 'Completed' && <FileCheck2 className="w-3 h-3 text-blue-600" />}
                      <span>{req.status}</span>
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-400 font-medium">{req.date}</td>
                  <td className="py-3 px-4 text-right space-x-1.5">
                    <button
                      className="px-2.5 py-1 rounded-lg bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-[11px] shadow-xs transition cursor-pointer"
                    >
                      Review
                    </button>
                    <button
                      className="px-2.5 py-1 rounded-lg bg-[#F8FAFC] hover:bg-slate-100 text-slate-600 border border-slate-200 font-semibold text-[11px] transition cursor-pointer"
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

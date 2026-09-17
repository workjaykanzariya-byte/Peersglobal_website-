'use client'

import React, { useState } from 'react'
import {
  Handshake,
  Search,
  Plus,
  TrendingUp,
  Building2,
  CheckCircle2,
  Clock,
  ExternalLink,
  MoreVertical,
  Sparkles,
  Zap,
  Globe,
  MapPin,
  ChevronRight,
  Coins,
  X,
  ArrowRightLeft,
  Share2,
  ShieldCheck,
  Activity,
  Layers,
} from 'lucide-react'

interface PartnershipItem {
  id: string
  title: string
  companyA: string
  companyB: string
  companyAInitials: string
  companyBInitials: string
  sector: string
  value: string
  status: 'Active' | 'Under Review' | 'Completed' | 'Negotiation'
  date: string
  city: string
  progress: number
  description: string
  leadContact: string
}

export default function AdminPartnershipsPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedDeal, setSelectedDeal] = useState<PartnershipItem | null>(null)
  const [isNewModalOpen, setIsNewModalOpen] = useState(false)

  const partnerships: PartnershipItem[] = [
    {
      id: 'P-101',
      title: 'Cross-Border Supply Chain AI Integration',
      companyA: 'Apex Logistics',
      companyB: 'Zen Cloud Solutions',
      companyAInitials: 'AL',
      companyBInitials: 'ZC',
      sector: 'Supply & Logistics Tech',
      value: '₹4.2 Cr',
      status: 'Active',
      date: 'Aug 2026',
      city: 'Mumbai ↔ Bengaluru',
      progress: 85,
      description: 'End-to-end autonomous dispatch and real-time route optimization using multi-tenant cloud orchestration across South Asian freight corridors.',
      leadContact: 'Rajesh Sharma (VP Alliances)',
    },
    {
      id: 'P-102',
      title: 'Solar & Renewable Power Infrastructure',
      companyA: 'EcoPower Tech',
      companyB: 'Horizon Polymers',
      companyAInitials: 'EP',
      companyBInitials: 'HP',
      sector: 'CleanTech & Manufacturing',
      value: '₹3.1 Cr',
      status: 'Active',
      date: 'Jul 2026',
      city: 'Ahmedabad ↔ Pune',
      progress: 92,
      description: 'Co-development of next-generation photovoltaic polymer grid connectors and decentralized industrial storage hubs.',
      leadContact: 'Ananya Roy (Head of ESG Ventures)',
    },
    {
      id: 'P-103',
      title: 'Strategic Cross-Border Export Syndicate',
      companyA: 'FinEdge Advisory',
      companyB: 'Vanguard Aerospace',
      companyAInitials: 'FE',
      companyBInitials: 'VA',
      sector: 'Capital & Aerospace',
      value: '₹8.5 Cr',
      status: 'Under Review',
      date: 'Sep 2026',
      city: 'Delhi NCR ↔ London',
      progress: 45,
      description: 'Cross-border trade credit facility and structured asset liquidity pool for defense component exports.',
      leadContact: 'Vikram Malhotra (Global Finance Lead)',
    },
    {
      id: 'P-104',
      title: 'Cold-Chain Pharma Logistics Network',
      companyA: 'Nexus Health Biotech',
      companyB: 'AeroGlobal Cargo',
      companyAInitials: 'NH',
      companyBInitials: 'AG',
      sector: 'Healthcare Logistics',
      value: '₹2.8 Cr',
      status: 'Negotiation',
      date: 'Sep 2026',
      city: 'Hyderabad ↔ Dubai',
      progress: 60,
      description: 'Ultra-low temperature biologics transport corridor connecting GCC distribution centers with Indian manufacturing hubs.',
      leadContact: 'Dr. S. Kulkarni (Chief Supply Officer)',
    },
    {
      id: 'P-105',
      title: 'Commercial Real Estate PropTech Hub',
      companyA: 'Urban Infra Group',
      companyB: 'Synthex AI Labs',
      companyAInitials: 'UI',
      companyBInitials: 'SY',
      sector: 'Real Estate & IoT',
      value: '₹5.6 Cr',
      status: 'Completed',
      date: 'Jun 2026',
      city: 'Bengaluru ↔ Singapore',
      progress: 100,
      description: 'Smart building management ecosystem integrating IoT sensors, predictive HVAC maintenance, and automated lease smart contracts.',
      leadContact: 'Meera Nair (PropTech Director)',
    },
  ]

  const statusCounts = {
    all: partnerships.length,
    active: partnerships.filter((p) => p.status === 'Active').length,
    'under review': partnerships.filter((p) => p.status === 'Under Review').length,
    negotiation: partnerships.filter((p) => p.status === 'Negotiation').length,
    completed: partnerships.filter((p) => p.status === 'Completed').length,
  }

  const filtered = partnerships.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.companyA.toLowerCase().includes(search.toLowerCase()) ||
      p.companyB.toLowerCase().includes(search.toLowerCase()) ||
      p.sector.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === 'all' || p.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-8 font-sans pb-16 max-w-7xl mx-auto">
      {/* 1. TOP HEADER BANNER (WITH PLAYFAIR DISPLAY SERIF TYPOGRAPHY MATCHING REFERENCE IMAGE 2) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#EBF3FE] via-[#F1F6FE] to-[#DCEBFE] border border-[#D5E5FC] p-6 sm:p-8 md:p-9 shadow-sm">
        {/* Sky/Atmosphere visual layer elements matching reference image */}
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          {/* Left Title Area */}
          <div className="space-y-2.5 max-w-xl">
            <div className="text-xs font-mono font-bold tracking-widest text-[#3B82F6] uppercase flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#3B82F6] rounded-full inline-block" />
              <span>PARTNERSHIP & ALLIANCE ENGINE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#0B1528] leading-tight">
              Partnerships & <span className="text-[#3B82F6] italic font-serif">Alliances</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#475569] font-sans font-medium leading-relaxed">
              Oversee collaborative promoter deals, cross-border joint ventures, and alliance pipelines with real-time deal metrics.
            </p>
          </div>

          {/* Right Speech Bubble Quote Card (Matching Reference Font & Style) */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="bg-white/90 backdrop-blur-md border border-white/90 rounded-3xl p-5 shadow-sm max-w-xs flex items-center gap-3.5 relative">
              <span className="text-3xl text-[#3B82F6] font-serif leading-none font-black shrink-0">“</span>
              <p className="text-xs sm:text-sm font-sans font-medium text-[#0B1528] leading-snug">
                <span className="font-serif italic font-bold text-[#3B82F6]">Collaboration</span> at Peers Global is a defined practice.
              </p>
              <span className="text-3xl text-[#3B82F6] font-serif leading-none font-black shrink-0 self-end -mb-1">”</span>
            </div>

            <button
              onClick={() => setIsNewModalOpen(true)}
              className="hidden sm:flex px-5 py-3 rounded-2xl bg-[#3B82F6] hover:bg-[#2563EB] text-white font-extrabold text-xs tracking-wide shadow-lg shadow-[#3B82F6]/25 transition-all hover:scale-[1.02] items-center gap-2 cursor-pointer shrink-0 border border-white/20"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>+ NEW PARTNERSHIP</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. SUMMARY KPI STAT CARDS (EXACT MATCH TO REFERENCE) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* KPI Card 1: Active Alliances */}
        <div className="bg-white border border-[#E5EDF9] rounded-3xl p-5 shadow-2xs hover:shadow-md hover:border-[#3B82F6]/30 transition-all duration-300 flex items-center gap-4">
          <div className="w-13 h-13 rounded-full bg-[#E6FAF0] flex items-center justify-center text-[#10B981] shrink-0 shadow-inner">
            <Activity className="w-6 h-6 stroke-[2.2]" />
          </div>

          <div className="flex-1 space-y-0.5">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[#0B1528] tracking-tight">
              86
            </h3>
            <p className="text-xs font-sans font-semibold text-[#64748B]">Active Alliances</p>
            <div className="flex items-center gap-1 text-[11px] font-bold text-[#10B981] pt-0.5">
              <TrendingUp className="w-3 h-3" />
              <span>+ 18%</span>
            </div>
          </div>
        </div>

        {/* KPI Card 2: Collaboration Value */}
        <div className="bg-white border border-[#E5EDF9] rounded-3xl p-5 shadow-2xs hover:shadow-md hover:border-[#3B82F6]/30 transition-all duration-300 flex items-center gap-4">
          <div className="w-13 h-13 rounded-full bg-[#EEF4FF] flex items-center justify-center text-[#3B82F6] shrink-0 shadow-inner">
            <Building2 className="w-6 h-6 stroke-[2.2]" />
          </div>

          <div className="flex-1 space-y-0.5">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[#0B1528] tracking-tight">
              ₹242.8 Cr
            </h3>
            <p className="text-xs font-sans font-semibold text-[#64748B]">Collaboration Value</p>
            <div className="flex items-center gap-1 text-[11px] font-bold text-[#10B981] pt-0.5">
              <TrendingUp className="w-3 h-3" />
              <span>+ 12%</span>
            </div>
          </div>
        </div>

        {/* KPI Card 3: Avg. Deal Velocity */}
        <div className="bg-white border border-[#E5EDF9] rounded-3xl p-5 shadow-2xs hover:shadow-md hover:border-[#3B82F6]/30 transition-all duration-300 flex items-center gap-4">
          <div className="w-13 h-13 rounded-full bg-[#FFF5EA] flex items-center justify-center text-[#F59E0B] shrink-0 shadow-inner">
            <Clock className="w-6 h-6 stroke-[2.2]" />
          </div>

          <div className="flex-1 space-y-0.5">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[#0B1528] tracking-tight">
              28 Days
            </h3>
            <p className="text-xs font-sans font-semibold text-[#64748B]">Avg. Deal Velocity</p>
            <div className="flex items-center gap-1 text-[11px] font-bold text-[#10B981] pt-0.5">
              <TrendingUp className="w-3 h-3" />
              <span>+ 6%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SEARCH BAR & FILTERS (EXACT MATCH TO IMAGE 2) */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 bg-white border border-[#E5EDF9] rounded-3xl p-3.5 shadow-2xs">
        {/* Search Input */}
        <div className="relative w-full lg:w-96">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search alliances, promoters, sectors, or IDs..."
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-full pl-11 pr-10 py-2.5 text-xs text-[#0B1528] placeholder:text-slate-400 font-medium focus:outline-none focus:border-[#3B82F6] focus:bg-white transition"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Pills with Counts (Matching Image 2) */}
        <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0">
          {(
            [
              { key: 'all', label: 'All (86)' },
              { key: 'active', label: 'Active (71)' },
              { key: 'under review', label: 'Under Review (7)' },
              { key: 'negotiation', label: 'Negotiation (4)' },
              { key: 'completed', label: 'Completed (4)' },
            ] as const
          ).map((tab) => {
            const isActive = statusFilter === tab.key
            return (
              <button
                key={tab.key}
                onClick={() => setStatusFilter(tab.key)}
                className={`px-4.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#3B82F6] text-white border-transparent shadow-md shadow-[#3B82F6]/25'
                    : 'bg-white text-[#64748B] hover:bg-slate-50 hover:text-[#0B1528] border-[#E2E8F0]'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* 4. PARTNERSHIP DEALS CARDS LIST (WITH PLAYFAIR SERIF TITLES MATCHING REFERENCE IMAGE 2) */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="bg-white border border-[#E5EDF9] rounded-3xl p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0B1528]">No Partnerships Found</h3>
            <p className="text-xs text-[#475569] max-w-sm mx-auto">
              We couldn&apos;t find any alliances matching &quot;{search}&quot;. Try adjusting your search term or clear filters.
            </p>
            <button
              onClick={() => {
                setSearch('')
                setStatusFilter('all')
              }}
              className="px-4 py-2 rounded-xl bg-[#3B82F6] text-white text-xs font-bold transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E5EDF9] hover:border-[#3B82F6]/40 rounded-3xl p-6 lg:p-7 shadow-2xs hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left Deal Info */}
                <div className="space-y-3 flex-1">
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-[#0B1528] text-white font-mono font-bold text-[10px]">
                      {item.id}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#EBF3FE] text-[#3B82F6] font-bold text-xs border border-[#CCE0FE]">
                      {item.sector}
                    </span>
                    <span className="flex items-center gap-1.5 text-[#64748B] text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 inline-block" />
                      <span>{item.city}</span>
                    </span>
                  </div>

                  {/* Title (Editorial Serif font matching Reference Image 2) */}
                  <h3
                    onClick={() => setSelectedDeal(item)}
                    className="text-lg lg:text-xl font-serif font-bold text-[#0B1528] group-hover:text-[#3B82F6] transition cursor-pointer flex items-center gap-2"
                  >
                    <span>{item.title}</span>
                  </h3>

                  {/* Promoters Pair */}
                  <div className="flex items-center gap-3 w-fit">
                    <div className="flex items-center gap-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-3.5 py-2">
                      <div className="w-6 h-6 rounded-md bg-[#3B82F6] text-white font-black text-[10px] flex items-center justify-center">
                        {item.companyAInitials}
                      </div>
                      <span className="font-bold text-xs text-[#0B1528]">{item.companyA}</span>
                    </div>

                    <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold shrink-0">
                      <ArrowRightLeft className="w-3 h-3 text-[#3B82F6]" />
                    </div>

                    <div className="flex items-center gap-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-3.5 py-2">
                      <div className="w-6 h-6 rounded-md bg-[#0B1528] text-white font-black text-[10px] flex items-center justify-center">
                        {item.companyBInitials}
                      </div>
                      <span className="font-bold text-xs text-[#0B1528]">{item.companyB}</span>
                    </div>
                  </div>
                </div>

                {/* Right Value, Status & Actions */}
                <div className="flex flex-wrap lg:flex-nowrap items-center justify-between lg:justify-end gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                  {/* Deal Value */}
                  <div className="text-left lg:text-right">
                    <p className="text-[10px] uppercase font-extrabold text-[#64748B] tracking-wider">DEAL VALUE</p>
                    <p className="text-xl font-serif font-bold text-[#0B1528] tracking-tight">
                      {item.value.split(' ')[0]} <span className="text-[#3B82F6]">{item.value.split(' ')[1]}</span>
                    </p>
                  </div>

                  {/* Status Pill (Matching Image 2 Spec) */}
                  <div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold border shadow-2xs ${
                        item.status === 'Active'
                          ? 'bg-[#E6FAF0] text-[#10B981] border-[#A7F3D0]'
                          : item.status === 'Under Review'
                          ? 'bg-[#FFF5EA] text-[#F59E0B] border-[#FDE68A]'
                          : item.status === 'Negotiation'
                          ? 'bg-[#F3E8FF] text-[#7C3AED] border-[#DDD6FE]'
                          : 'bg-[#EBF3FE] text-[#3B82F6] border-[#CCE0FE]'
                      }`}
                    >
                      {item.status === 'Active' && <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />}
                      {item.status === 'Under Review' && <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />}
                      {item.status === 'Negotiation' && <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />}
                      {item.status === 'Completed' && <ShieldCheck className="w-3.5 h-3.5 text-[#3B82F6]" />}
                      <span>{item.status}</span>
                    </span>
                  </div>

                  {/* Manage Button (Light Blue Color Update) */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedDeal(item)}
                      className="px-5 py-2.5 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-bold transition-all shadow-md shadow-[#3B82F6]/20 cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Manage</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 5. DEAL DETAIL MODAL */}
      {selectedDeal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 lg:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedDeal(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-lg bg-[#101B35] text-white font-mono text-xs font-bold">
                  {selectedDeal.id}
                </span>
                <span className="px-2.5 py-0.5 rounded-lg bg-[#EFF6FF] text-[#2563EB] text-xs font-bold border border-[#BFDBFE]">
                  {selectedDeal.sector}
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-[#101B35] font-display">{selectedDeal.title}</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-[#F8FAFC] p-4 rounded-2xl border border-slate-200">
              <div>
                <p className="text-[10px] uppercase font-bold text-[#64748B]">Total Deal Value</p>
                <p className="text-xl font-black text-[#101B35] font-display">{selectedDeal.value}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-[#64748B]">Current Status</p>
                <p className="text-sm font-extrabold text-[#2563EB] mt-1">{selectedDeal.status}</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Alliance Overview</h4>
              <p className="text-sm text-[#475569] leading-relaxed">{selectedDeal.description}</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-[#101B35]">
                <span>Execution Milestone Progress</span>
                <span>{selectedDeal.progress}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#2563EB]"
                  style={{ width: `${selectedDeal.progress}%` }}
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="text-xs text-[#475569]">
                <span className="font-semibold text-[#101B35]">Lead Contact:</span> {selectedDeal.leadContact}
              </div>
              <button
                onClick={() => setSelectedDeal(null)}
                className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs transition cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. NEW PARTNERSHIP CREATION MODAL */}
      {isNewModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-6 lg:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsNewModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#EFF6FF] text-[#2563EB]">
                <Handshake className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-[#101B35] font-display">Initiate New Partnership</h2>
                <p className="text-xs text-[#475569]">Add a new cross-border joint venture or alliance deal to the pipeline.</p>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                setIsNewModalOpen(false)
                alert('New partnership request logged successfully!')
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block font-bold text-[#101B35] mb-1">Partnership Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cross-Border FinTech Synergy"
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-[#101B35] focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#101B35] mb-1">Company A (Initiator)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Logistics"
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-[#101B35] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#101B35] mb-1">Company B (Partner)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zen Cloud Solutions"
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-[#101B35] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#101B35] mb-1">Sector</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CleanTech & Energy"
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-[#101B35] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#101B35] mb-1">Estimated Deal Value</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ₹5.0 Cr"
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-[#101B35] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsNewModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-[#475569] font-bold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold transition cursor-pointer shadow-md shadow-[#2563EB]/20"
                >
                  Create Alliance Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

'use client'

import React, { useState } from 'react'
import {
  Handshake,
  Search,
  Filter,
  Plus,
  ArrowUpRight,
  TrendingUp,
  Building2,
  CheckCircle2,
  Clock,
  ExternalLink,
  MoreVertical,
  Calendar,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'

interface PartnershipItem {
  id: string
  title: string
  companyA: string
  companyB: string
  sector: string
  value: string
  status: 'Active' | 'Under Review' | 'Completed' | 'Negotiation'
  date: string
  city: string
}

export default function AdminPartnershipsPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const partnerships: PartnershipItem[] = [
    {
      id: 'P-101',
      title: 'Cross-Border Supply Chain AI Integration',
      companyA: 'Apex Logistics',
      companyB: 'Zen Cloud Solutions',
      sector: 'Supply & Logistics Tech',
      value: '₹4.2 Cr',
      status: 'Active',
      date: 'Aug 2026',
      city: 'Mumbai ↔ Bengaluru',
    },
    {
      id: 'P-102',
      title: 'Solar & Renewable Power Infrastructure',
      companyA: 'EcoPower Tech',
      companyB: 'Horizon Polymers',
      sector: 'CleanTech & Manufacturing',
      value: '₹3.1 Cr',
      status: 'Active',
      date: 'Jul 2026',
      city: 'Ahmedabad ↔ Pune',
    },
    {
      id: 'P-103',
      title: 'Strategic Cross-Border Export Syndicate',
      companyA: 'FinEdge Advisory',
      companyB: 'Vanguard Aerospace',
      sector: 'Capital & Aerospace',
      value: '₹8.5 Cr',
      status: 'Under Review',
      date: 'Sep 2026',
      city: 'Delhi NCR ↔ London',
    },
    {
      id: 'P-104',
      title: 'Cold-Chain Pharma Logistics Network',
      companyA: 'Nexus Health Biotech',
      companyB: 'AeroGlobal Cargo',
      sector: 'Healthcare Logistics',
      value: '₹2.8 Cr',
      status: 'Negotiation',
      date: 'Sep 2026',
      city: 'Hyderabad ↔ Dubai',
    },
    {
      id: 'P-105',
      title: 'Commercial Real Estate PropTech Hub',
      companyA: 'Urban Infra Group',
      companyB: 'Synthex AI Labs',
      sector: 'Real Estate & IoT',
      value: '₹5.6 Cr',
      status: 'Completed',
      date: 'Jun 2026',
      city: 'Bengaluru',
    },
  ]

  const filtered = partnerships.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.companyA.toLowerCase().includes(search.toLowerCase()) ||
      p.companyB.toLowerCase().includes(search.toLowerCase()) ||
      p.sector.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === 'all' || p.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-8 font-sans pb-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-[#1769FF] to-[#08C7E8] text-white flex items-center justify-center shadow-md shadow-[#1769FF]/20">
              <Handshake className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101B35] font-display">
                Partnerships & Alliances
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Oversee collaborative promoter deals, cross-border joint ventures, and alliance pipelines.
              </p>
            </div>
          </div>
        </div>

        <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1769FF] to-[#08C7E8] hover:from-[#1357D6] hover:to-[#06ACC8] text-white text-xs font-bold shadow-md shadow-[#1769FF]/20 transition flex items-center gap-2 cursor-pointer w-fit">
          <Plus className="w-4 h-4" />
          <span>New Partnership</span>
        </button>
      </div>

      {/* Summary KPI Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white border border-[#E2E8F4] rounded-2xl p-5 shadow-xs">
          <p className="text-xs font-semibold text-slate-500">Total Active Alliances</p>
          <h3 className="text-2xl font-extrabold text-[#101B35] mt-1 font-display">86 Deals</h3>
          <p className="text-[11px] text-emerald-600 font-bold mt-1">+18% growth this quarter</p>
        </div>
        <div className="bg-white border border-[#E2E8F4] rounded-2xl p-5 shadow-xs">
          <p className="text-xs font-semibold text-slate-500">Total Collaboration Value</p>
          <h3 className="text-2xl font-extrabold text-[#101B35] mt-1 font-display">₹242.8 Cr</h3>
          <p className="text-[11px] text-[#1769FF] font-bold mt-1">Across 11 major hubs</p>
        </div>
        <div className="bg-white border border-[#E2E8F4] rounded-2xl p-5 shadow-xs">
          <p className="text-xs font-semibold text-slate-500">Average Deal Velocity</p>
          <h3 className="text-2xl font-extrabold text-[#101B35] mt-1 font-display">28 Days</h3>
          <p className="text-[11px] text-slate-400 font-medium mt-1">Introduction to signed MOU</p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white border border-[#E2E8F4] rounded-2xl p-4 shadow-xs">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search alliances, promoters, sectors..."
            className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl pl-10 pr-4 py-2 text-xs text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:border-[#1769FF]"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {['all', 'active', 'under review', 'negotiation', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setStatusFilter(tab)}
              className={`px-3 py-1.5 rounded-xl text-xs capitalize font-semibold transition cursor-pointer whitespace-nowrap ${
                statusFilter === tab
                  ? 'bg-[#1769FF] text-white shadow-xs'
                  : 'bg-[#F6F9FF] text-slate-600 hover:text-[#101B35] border border-[#E2E8F4]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Partnerships List */}
      <div className="grid grid-cols-1 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[#E2E8F4] hover:border-[#1769FF]/40 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 font-mono">{item.id}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span className="text-xs font-semibold text-[#1769FF]">{item.sector}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span className="text-xs text-slate-400">{item.city}</span>
                </div>
                <h3 className="text-base font-bold text-[#101B35] group-hover:text-[#1769FF] transition font-display">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="font-bold text-[#101B35]">{item.companyA}</span>
                  <span className="text-[#08C7E8]">🤝</span>
                  <span className="font-bold text-[#101B35]">{item.companyB}</span>
                </div>
              </div>

              <div className="flex items-center gap-6 self-end md:self-center">
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Deal Value</p>
                  <p className="text-lg font-extrabold text-[#101B35] font-display">{item.value}</p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    item.status === 'Active'
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : item.status === 'Under Review'
                      ? 'bg-amber-50 text-amber-700 border-amber-200'
                      : item.status === 'Negotiation'
                      ? 'bg-purple-50 text-purple-700 border-purple-200'
                      : 'bg-blue-50 text-[#1769FF] border-blue-200'
                  }`}
                >
                  {item.status}
                </span>

                <button className="px-3 py-1.5 rounded-xl bg-[#F6F9FF] hover:bg-[#EEF4FF] border border-[#E2E8F4] text-xs font-bold text-[#1769FF] transition cursor-pointer">
                  Manage
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

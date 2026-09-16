'use client'

import React, { useState } from 'react'
import {
  Compass,
  Search,
  Plus,
  TrendingUp,
  MapPin,
  Calendar,
  Building,
  CheckCircle,
  Tag,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

export default function AdminOpportunitiesPage() {
  const [search, setSearch] = useState('')

  const opportunities = [
    {
      id: 'OPP-501',
      title: 'Solar Inverter Direct Component Supply & Assembly',
      promoter: 'EcoPower Tech Hub',
      location: 'Pune, Maharashtra',
      category: 'Renewable CleanTech',
      capitalRequired: '₹5.5 Cr',
      returnMetric: '22% Target IRR',
      status: 'Open for Syndication',
      deadline: 'Nov 30, 2026',
    },
    {
      id: 'OPP-502',
      title: 'Global Cold-Chain Warehouse Facility JV',
      promoter: 'Apex Logistics & Freight',
      location: 'JNPT Port, Navi Mumbai',
      category: 'Infrastructure & Port Logistics',
      capitalRequired: '₹12.0 Cr',
      returnMetric: '18% Projected Yield',
      status: 'Shortlisting Partners',
      deadline: 'Oct 15, 2026',
    },
    {
      id: 'OPP-503',
      title: 'Cross-Border AI Compliance Engine for Tier-1 Banks',
      promoter: 'Zen Cloud Solutions',
      location: 'Bengaluru & London',
      category: 'Enterprise Fintech & AI',
      capitalRequired: '₹8.0 Cr',
      returnMetric: 'Strategic Client Introduction',
      status: 'Active Deal Flow',
      deadline: 'Dec 10, 2026',
    },
    {
      id: 'OPP-504',
      title: 'Specialty Polymer Manufacturing Expansion Unit',
      promoter: 'Horizon Polymers Limited',
      location: 'Dahej Industrial Zone, Gujarat',
      category: 'Advanced Materials',
      capitalRequired: '₹15.0 Cr',
      returnMetric: '24% Asset-Backed Return',
      status: 'Open for Syndication',
      deadline: 'Jan 20, 2027',
    },
  ]

  return (
    <div className="space-y-8 font-sans pb-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-[#1769FF] to-[#08C7E8] text-white flex items-center justify-center shadow-md shadow-[#1769FF]/20">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101B35] font-display">
              Opportunities & Ventures
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Curate exclusive cross-promoter deal flows, syndications, and joint venture briefs.
            </p>
          </div>
        </div>

        <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1769FF] to-[#08C7E8] hover:from-[#1357D6] hover:to-[#06ACC8] text-white text-xs font-bold shadow-md shadow-[#1769FF]/20 transition flex items-center gap-2 cursor-pointer w-fit">
          <Plus className="w-4 h-4" />
          <span>Publish Opportunity</span>
        </button>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {opportunities.map((opp) => (
          <div
            key={opp.id}
            className="bg-white border border-[#E2E8F4] hover:border-[#1769FF]/40 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all space-y-4 group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1769FF]/10 text-[#1769FF] font-bold text-[10px] border border-[#1769FF]/20">
                  {opp.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                  {opp.status}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#101B35] group-hover:text-[#1769FF] transition font-display leading-snug">
                {opp.title}
              </h3>

              <div className="space-y-1.5 text-xs text-slate-500">
                <p className="flex items-center gap-2">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-semibold text-slate-700">{opp.promoter}</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{opp.location}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Deadline: {opp.deadline}</span>
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Deal Size</p>
                <p className="text-base font-extrabold text-[#101B35] font-display">{opp.capitalRequired}</p>
              </div>
              <button className="px-4 py-2 rounded-xl bg-[#F6F9FF] hover:bg-[#EEF4FF] border border-[#E2E8F4] text-xs font-bold text-[#1769FF] transition flex items-center gap-1.5 cursor-pointer">
                <span>View Deal Sheet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

'use client'

import React from 'react'
import {
  TrendingUp,
  BarChart3,
  Globe2,
  Users,
  Handshake,
  Download,
  Calendar,
  Layers,
  Sparkles,
} from 'lucide-react'

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-8 font-sans pb-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-[#1769FF] to-[#08C7E8] text-white flex items-center justify-center shadow-md shadow-[#1769FF]/20">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101B35] font-display">
              Network Analytics & Reports
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Deep insights on collaboration density, chapter velocity, and cross-border trade pipelines.
            </p>
          </div>
        </div>

        <button className="px-4 py-2 rounded-xl bg-white border border-[#E2E8F4] hover:border-[#1769FF]/40 text-xs font-bold text-slate-700 hover:text-[#1769FF] transition flex items-center gap-2 shadow-xs cursor-pointer">
          <Download className="w-4 h-4 text-[#1769FF]" />
          <span>Export Analytics PDF</span>
        </button>
      </div>

      {/* 4 Analytics Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white border border-[#E2E8F4] rounded-2xl p-5 shadow-xs">
          <p className="text-xs font-semibold text-slate-500">Promoter Active Ratio</p>
          <h3 className="text-2xl font-extrabold text-[#101B35] mt-1 font-display">94.2%</h3>
          <p className="text-[11px] text-emerald-600 font-bold mt-1">High participation</p>
        </div>
        <div className="bg-white border border-[#E2E8F4] rounded-2xl p-5 shadow-xs">
          <p className="text-xs font-semibold text-slate-500">Avg Syndicate Multiplier</p>
          <h3 className="text-2xl font-extrabold text-[#101B35] mt-1 font-display">3.4x</h3>
          <p className="text-[11px] text-[#1769FF] font-bold mt-1">Capital syndication</p>
        </div>
        <div className="bg-white border border-[#E2E8F4] rounded-2xl p-5 shadow-xs">
          <p className="text-xs font-semibold text-slate-500">Cross-City Transactions</p>
          <h3 className="text-2xl font-extrabold text-[#101B35] mt-1 font-display">68%</h3>
          <p className="text-[11px] text-emerald-600 font-bold mt-1">+12% vs last month</p>
        </div>
        <div className="bg-white border border-[#E2E8F4] rounded-2xl p-5 shadow-xs">
          <p className="text-xs font-semibold text-slate-500">MOU Retention Rate</p>
          <h3 className="text-2xl font-extrabold text-[#101B35] mt-1 font-display">98.5%</h3>
          <p className="text-[11px] text-purple-600 font-bold mt-1">LSR Model Governance</p>
        </div>
      </div>

      {/* Regional Activity Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white border border-[#E2E8F4] rounded-3xl p-6 lg:p-8 shadow-sm space-y-5">
          <h2 className="text-base font-bold text-[#101B35] font-display">Hub & Chapter Deal Volume</h2>
          <div className="space-y-4 pt-2">
            {[
              { city: 'Mumbai Hub', deals: '₹94 Cr', pct: 85, color: 'bg-[#1769FF]' },
              { city: 'Bengaluru AI Hub', deals: '₹68 Cr', pct: 70, color: 'bg-[#08C7E8]' },
              { city: 'Delhi NCR Chapter', deals: '₹46 Cr', pct: 55, color: 'bg-indigo-500' },
              { city: 'Pune & Dahej Cluster', deals: '₹34 Cr', pct: 42, color: 'bg-emerald-500' },
            ].map((item) => (
              <div key={item.city} className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-[#101B35]">
                  <span>{item.city}</span>
                  <span>{item.deals}</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-[#E2E8F4] rounded-3xl p-6 lg:p-8 shadow-sm space-y-4 flex flex-col justify-between">
          <h2 className="text-base font-bold text-[#101B35] font-display">Executive Governance Health</h2>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#07152E] to-[#0C224A] text-white space-y-3">
            <div className="flex items-center gap-2 text-[#08C7E8] text-xs font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Category Exclusivity Verified</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              100% of the 19 active circles are operating under strict single-category exclusivity rules with zero conflicts.
            </p>
          </div>
          <p className="text-xs text-slate-400">Audited bi-weekly by the Peers Global Steering Board.</p>
        </div>
      </div>
    </div>
  )
}

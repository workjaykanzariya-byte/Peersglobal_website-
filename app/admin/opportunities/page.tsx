'use client'

import React, { useState } from 'react'
import {
  Compass,
  Search,
  Plus,
  MapPin,
  Calendar,
  Building2,
  ArrowRight,
  Filter,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  QrCode,
  Bookmark,
  Bell,
  ChevronDown,
  X,
  TrendingUp,
  FileText,
  DollarSign,
  Briefcase,
  Layers,
  Zap,
} from 'lucide-react'

export default function AdminOpportunitiesPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedOpportunity, setSelectedOpportunity] = useState<any | null>(null)
  const [publishModalOpen, setPublishModalOpen] = useState(false)

  const opportunities = [
    {
      id: 'OPP-501',
      title: 'Solar Inverter Direct Component Supply & Assembly',
      promoter: 'EcoPower Tech Hub',
      location: 'Pune, Maharashtra',
      category: 'Renewable CleanTech',
      capitalRequired: '₹ 55. Cr',
      returnMetric: '22% Target IRR',
      status: 'Open for Syndication',
      deadline: 'Nov 30, 2026',
      tags: ['Solar PV', 'OEM Assembly', 'Make In India'],
      description: 'Full-scale EPC component syndication project for Tier-1 solar inverter manufacturing with long-term offtake agreements already secured across Maharashtra and Gujarat solar parks.',
      highlights: ['8 Year Government Power Purchase Agreement (PPA)', 'Pre-cleared environmental & MIDC factory zoning', 'Existing distribution network with 2,400+ dealers'],
    },
    {
      id: 'OPP-502',
      title: 'Global Cold-Chain Warehouse Facility JV',
      promoter: 'Apex Logistics & Freight',
      location: 'JNPT Port, Navi Mumbai',
      category: 'Infrastructure & Port Logistics',
      capitalRequired: '₹ 12.0 Cr',
      returnMetric: '18% Projected Yield',
      status: 'Shortlisting Partners',
      deadline: 'Oct 15, 2026',
      tags: ['Cold Chain', 'JNPT Port', 'Pharma Export'],
      description: 'Joint Venture opportunity to build a multi-temperature cold storage facility at JNPT dedicated to pharmaceutical shipments, seafood exports, and perishable agro-commodities.',
      highlights: ['Direct freight corridor access to JNPT terminal', 'Temperature controlled (-25°C to +15°C) zones', 'Anchor tenant LOI signed for 45% capacity'],
    },
    {
      id: 'OPP-503',
      title: 'Cross-Border AI Compliance Engine for Tier-1 Banks',
      promoter: 'Zen Cloud Solutions',
      location: 'Bengaluru & London',
      category: 'Enterprise Fintech & AI',
      capitalRequired: '₹ 8.0 Cr',
      returnMetric: 'Strategic Client Introduction',
      status: 'Active Deal Flow',
      deadline: 'Dec 10, 2026',
      tags: ['RegTech', 'AML / KYC', 'UK-India Corridor'],
      description: 'Proprietary enterprise AI model for automated regulatory reporting and real-time AML surveillance across SEBI, RBI, and UK FCA guidelines for international banks.',
      highlights: ['2 Enterprise POCs with Top 5 Indian Private Banks', 'SOC2 Type II & ISO 27001 Certified stack', 'High gross margin SaaS licensing model (84%)'],
    },
    {
      id: 'OPP-504',
      title: 'Specialty Polymer Manufacturing Expansion Unit',
      promoter: 'Horizon Polymers Limited',
      location: 'Dahej Industrial Zone, Gujarat',
      category: 'Advanced Materials',
      capitalRequired: '₹ 15.5 Cr',
      returnMetric: '24% Asset-Backed Return',
      status: 'Open for Syndication',
      deadline: 'Jan 20, 2027',
      tags: ['Specialty Chemicals', 'PCPIR Dahej', 'Export Heavy'],
      description: 'Capacity expansion of high-grade engineering polymers and biocompatible resins to substitute critical aerospace and medical device imports.',
      highlights: ['Dahej PCPIR land allocated with pipeline utilities', '54% pre-booked production export quotas to Europe', 'Eligible for State PLI capital subsidy of ₹3.2 Cr'],
    },
  ]

  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesSearch =
      opp.title.toLowerCase().includes(search.toLowerCase()) ||
      opp.promoter.toLowerCase().includes(search.toLowerCase()) ||
      opp.location.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || opp.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="relative min-h-screen font-sans -m-6 lg:-m-8 p-6 lg:p-10 bg-[#F6F9FF] overflow-hidden">
      
      {/* Background Ambient Glowing Ribbon Swooshes (Top Right & Bottom Left) */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full bg-gradient-to-bl from-[#1769FF]/20 via-[#08C7E8]/15 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#1769FF]/10 to-transparent blur-2xl" />
      
      {/* Micro dot grid pattern */}
      <div 
        className="pointer-events-none absolute top-12 left-6 w-44 h-44 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#1769FF 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        
        {/* ========================================================================= */}
        {/* 1. TOP HEADER WITH CALLIGRAPHY CALLOUT & PUBLISH BUTTON                   */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left Title Group */}
          <div className="space-y-2">
            {/* Outlined Eyebrow Pill */}
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#1769FF]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1769FF]">
                Opportunities & Ventures
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0B1A3A] tracking-tight leading-tight">
              Opportunities &<br className="hidden sm:inline" /> Ventures
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed">
              Curate exclusive cross-promoter deal flows, syndications, and joint venture briefs.
            </p>
          </div>

          {/* Right: Handwritten Callout + Publish Opportunity CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:gap-8">
            {/* Blue Handwritten Callout */}
            <div className="relative flex flex-col items-center select-none">
              <span
                className="text-xl sm:text-2xl text-[#1769FF] font-serif italic whitespace-nowrap font-normal leading-tight"
                style={{ fontFamily: "'Playfair Display', 'Brush Script MT', Georgia, cursive" }}
              >
                Better Partnerships<br />
                <span className="ml-4">Bigger Impact</span>
              </span>
              {/* Brush Underline Swoosh */}
              <svg className="w-36 h-4 text-[#1769FF] opacity-85 -mt-0.5 ml-4" viewBox="0 0 160 14" fill="none">
                <path d="M2 10 C45 3, 115 3, 158 10 C110 5.5, 50 5.5, 2 10 Z" fill="currentColor" />
              </svg>
            </div>

            {/* Publish Opportunity Button */}
            <button
              type="button"
              onClick={() => setPublishModalOpen(true)}
              className="px-5 py-3 rounded-xl bg-[#1769FF] hover:bg-blue-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/25 transition-all flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <Plus className="size-4" />
              <span>Publish Opportunity</span>
            </button>
          </div>
        </div>



        {/* ========================================================================= */}
        {/* 3. OPPORTUNITIES 2x2 GRID (Matching Exact Visual Cards)                   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredOpportunities.map((opp) => (
            <div
              key={opp.id}
              className="relative bg-white border border-[#E2E8F4] hover:border-blue-400 rounded-[24px] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Badges */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="px-3 py-1 rounded-full bg-[#EBF4FF] text-[#1769FF] font-bold text-[11px] border border-blue-200/80">
                    {opp.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#ECFDF5] text-[#059669] font-bold text-[11px] border border-emerald-200/80">
                    {opp.status}
                  </span>
                </div>

                {/* Opportunity Title */}
                <h3 className="text-base sm:text-lg font-extrabold text-[#0B1A3A] group-hover:text-[#1769FF] transition-colors leading-snug mb-3">
                  {opp.title}
                </h3>

                {/* Company & Details */}
                <div className="space-y-1.5 text-xs text-slate-500 mb-6">
                  <p className="flex items-center gap-2">
                    <Building2 className="size-4 text-slate-400 shrink-0" />
                    <span className="font-semibold text-slate-700">{opp.promoter}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="size-4 text-slate-400 shrink-0" />
                    <span>{opp.location}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="size-4 text-slate-400 shrink-0" />
                    <span>Deadline: {opp.deadline}</span>
                  </p>
                </div>
              </div>

              {/* Bottom Row: Deal Size + Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    DEAL SIZE
                  </p>
                  <p className="text-lg font-extrabold text-[#0B1A3A] mt-0.5">
                    {opp.capitalRequired}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedOpportunity(opp)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F6F9FF] hover:bg-[#EBF4FF] border border-[#E2E8F4] text-xs font-bold text-[#1769FF] transition active:scale-98 cursor-pointer"
                >
                  <span>View Deal Sheet</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. SLIDE-OVER DEAL SHEET MODAL DRAWER                                      */}
      {/* ========================================================================= */}
      {selectedOpportunity && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs">
          <div className="w-full max-w-xl bg-white h-full shadow-2xl p-6 sm:p-8 overflow-y-auto flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-200">
            <div className="space-y-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1769FF] font-bold text-xs">
                    {selectedOpportunity.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs">
                    {selectedOpportunity.status}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedOpportunity(null)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Title & Promoter */}
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#0B1A3A] leading-tight">
                  {selectedOpportunity.title}
                </h2>
                <p className="text-sm font-semibold text-[#1769FF] mt-1 flex items-center gap-1.5">
                  <Building2 className="size-4" />
                  <span>{selectedOpportunity.promoter} · {selectedOpportunity.location}</span>
                </p>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#F6F9FF] border border-blue-100">
                <div>
                  <span className="text-[11px] text-slate-400 font-bold uppercase">Syndication Size</span>
                  <div className="text-lg font-black text-[#0B1A3A] mt-0.5">{selectedOpportunity.capitalRequired}</div>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-bold uppercase">Target Return / Yield</span>
                  <div className="text-lg font-black text-emerald-600 mt-0.5">{selectedOpportunity.returnMetric}</div>
                </div>
              </div>

              {/* Executive Brief */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Executive Brief</h4>
                <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {selectedOpportunity.description}
                </p>
              </div>

              {/* Key Due Diligence Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Deal Highlights</h4>
                <ul className="space-y-2">
                  {selectedOpportunity.highlights.map((h: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedOpportunity.tags.map((t: string) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-medium">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  alert('Expression of Interest logged. Our syndicate manager will connect you.')
                  setSelectedOpportunity(null)
                }}
                className="flex-1 py-3 rounded-xl bg-[#1769FF] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md transition text-center"
              >
                Express Syndicate Interest
              </button>
              <button
                type="button"
                onClick={() => setSelectedOpportunity(null)}
                className="px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. PUBLISH OPPORTUNITY MODAL                                              */}
      {/* ========================================================================= */}
      {publishModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-xl bg-blue-50 text-[#1769FF] flex items-center justify-center">
                  <Plus className="size-4" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1A3A]">Publish New Opportunity</h3>
              </div>
              <button
                type="button"
                onClick={() => setPublishModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
              >
                <X className="size-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Opportunity submitted for Syndicate Review!')
                setPublishModalOpen(false)
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block font-bold text-slate-700 mb-1">Opportunity Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. EV Battery Swapping Station Infrastructure"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#1769FF]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Promoter / Entity</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. VoltEnergy Labs"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#1769FF]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category</label>
                  <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#1769FF]">
                    <option>Renewable CleanTech</option>
                    <option>Infrastructure & Port Logistics</option>
                    <option>Enterprise Fintech & AI</option>
                    <option>Advanced Materials</option>
                    <option>Healthcare & Pharma</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Deal Size (₹)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ₹ 20.0 Cr"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#1769FF]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Syndication Deadline</label>
                  <input
                    type="date"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#1769FF]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Brief Description</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Outline the collaboration synergy, market size, and required capital deployment..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#1769FF]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setPublishModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#1769FF] hover:bg-blue-600 text-white font-bold transition shadow-md"
                >
                  Submit for Approval
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}

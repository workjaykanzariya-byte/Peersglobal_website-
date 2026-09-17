'use client'

import React, { useState } from 'react'
import {
  Building2,
  Search,
  Filter,
  ArrowRight,
  ChevronDown,
  MapPin,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Plus,
  Globe2,
  Users,
  Briefcase,
  ExternalLink,
  CheckCircle,
} from 'lucide-react'

interface EnterpriseCard {
  id: string
  code: string
  codeBg: string
  name: string
  promoter: string
  promoterRole: string
  sector: string
  location: string
  employees: string
  turnover: string
  turnoverGrowth: string
  circle: string
  verified: boolean
  dealStatus: 'Syndication Open' | 'Active Deal Flow' | 'Strategic Partner'
  dealStatusColor: 'green' | 'blue' | 'purple'
  tags: string[]
}

export default function AdminCompaniesPage() {
  const [search, setSearch] = useState('')
  const [sectorFilter, setSectorFilter] = useState('All Sectors')
  const [circleFilter, setCircleFilter] = useState('All Circles')
  const [currentPage, setCurrentPage] = useState(1)

  const companies: EnterpriseCard[] = [
    {
      id: 'C-01',
      code: 'AP',
      codeBg: 'from-[#1E4ED8] to-[#08C7E8]',
      name: 'Apex Logistics & Cold Storage',
      promoter: 'Vikram Singhania',
      promoterRole: 'Managing Director & Founder',
      sector: 'Logistics & Supply Chain',
      location: 'Mumbai, Maharashtra',
      employees: '1,200+',
      turnover: '₹ 420 Cr',
      turnoverGrowth: '+24% YoY',
      circle: 'Founders Circle',
      verified: true,
      dealStatus: 'Syndication Open',
      dealStatusColor: 'green',
      tags: ['Cold Storage', 'JNPT Port JV', 'Export Hub'],
    },
    {
      id: 'C-02',
      code: 'EC',
      codeBg: 'from-[#10B981] to-[#059669]',
      name: 'EcoPower Renewable Systems',
      promoter: 'Rohan Deshmukh',
      promoterRole: 'Chief Executive Officer',
      sector: 'CleanTech & Solar Energy',
      location: 'Pune, Maharashtra',
      employees: '650+',
      turnover: '₹ 280 Cr',
      turnoverGrowth: '+38% YoY',
      circle: 'Industrial & Mfg Circle',
      verified: true,
      dealStatus: 'Syndication Open',
      dealStatusColor: 'green',
      tags: ['Solar Inverters', 'EPC Projects', 'Green Hydrogen'],
    },
    {
      id: 'C-03',
      code: 'ZE',
      codeBg: 'from-[#6366F1] to-[#8B5CF6]',
      name: 'Zenith Cognitive AI Software Labs',
      promoter: 'Ananya Sharma',
      promoterRole: 'Founder & Head of AI',
      sector: 'Enterprise AI & SaaS',
      location: 'Bengaluru, Karnataka',
      employees: '420+',
      turnover: '₹ 190 Cr',
      turnoverGrowth: '+62% YoY',
      circle: 'Tech & AI Innovators Circle',
      verified: true,
      dealStatus: 'Active Deal Flow',
      dealStatusColor: 'blue',
      tags: ['Banking LLM', 'Cross-Border', 'Series B'],
    },
    {
      id: 'C-04',
      code: 'HO',
      codeBg: 'from-[#EA580C] to-[#F97316]',
      name: 'Horizon Advanced Polymers Corp',
      promoter: 'Harish Mehta',
      promoterRole: 'Chairman & Promoter',
      sector: 'Specialty Chemicals & Polymers',
      location: 'Dahej PCPIR, Gujarat',
      employees: '1,800+',
      turnover: '₹ 510 Cr',
      turnoverGrowth: '+18% YoY',
      circle: 'Global Trade & Export Circle',
      verified: true,
      dealStatus: 'Syndication Open',
      dealStatusColor: 'green',
      tags: ['Dahej Plant', 'Govt Subsidized', 'Debt/Equity'],
    },
    {
      id: 'C-05',
      code: 'FI',
      codeBg: 'from-[#1E4ED8] to-[#1D4ED8]',
      name: 'FinEdge Strategic M&A Advisory',
      promoter: 'Kavita Menon',
      promoterRole: 'Managing Partner',
      sector: 'Investment Banking & Capital',
      location: 'Delhi NCR & Mumbai',
      employees: '110+',
      turnover: '₹ 95 Cr',
      turnoverGrowth: '+15% YoY',
      circle: 'Women Leaders Circle',
      verified: true,
      dealStatus: 'Active Deal Flow',
      dealStatusColor: 'blue',
      tags: ['Cross-Border M&A', 'Due Diligence', 'PE Syndication'],
    },
    {
      id: 'C-06',
      code: 'PR',
      codeBg: 'from-[#0D9488] to-[#14B8A6]',
      name: 'Prime Consumer Distribution Net',
      promoter: 'Sanjay Agarwal',
      promoterRole: 'Executive Chairman',
      sector: 'FMCG & Retail Infrastructure',
      location: 'Hyderabad & Pune Hubs',
      employees: '890+',
      turnover: '₹ 340 Cr',
      turnoverGrowth: '+21% YoY',
      circle: 'Founders Circle',
      verified: true,
      dealStatus: 'Strategic Partner',
      dealStatusColor: 'purple',
      tags: ['OmniChannel', 'Warehousing', 'Tier-2 Reach'],
    },
  ]

  const filtered = companies.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.promoter.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase()) ||
      c.sector.toLowerCase().includes(search.toLowerCase())
    const matchesSector = sectorFilter === 'All Sectors' || c.sector.includes(sectorFilter)
    const matchesCircle = circleFilter === 'All Circles' || c.circle.includes(circleFilter)
    return matchesSearch && matchesSector && matchesCircle
  })

  return (
    <div className="space-y-6 pb-16 font-sans">
      {/* Top Header Card with Editorial Playfair Display & Bold Typography */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F4] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-5 relative overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#1E4ED8] to-[#08C7E8] flex items-center justify-center text-white shadow-md shadow-[#1E4ED8]/20 shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#101B35] tracking-tight">
                Enterprise Directory &amp; <span className="italic text-[#1E4ED8] font-serif">Companies</span>
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1E4ED8] border border-blue-200 text-[11px] font-bold font-sans">
                {companies.length} Active
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal leading-relaxed">
              Verified corporate member profiles, promoter entities, and category-exclusive chapter associations.
            </p>
          </div>
        </div>

        <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1E4ED8] to-[#08C7E8] hover:from-[#1744bd] hover:to-[#06ACC8] text-white text-xs font-semibold shadow-md shadow-[#1E4ED8]/20 transition flex items-center gap-2 cursor-pointer w-fit self-start sm:self-auto font-sans">
          <Plus className="w-4 h-4" />
          <span>Add Enterprise</span>
        </button>
      </div>

      {/* Modern Filter Toolbar */}
      <div className="bg-white rounded-2xl p-3.5 border border-[#E2E8F4] shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by company name, promoter, city, or sector..."
            className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl pl-9 pr-3.5 py-2 text-xs text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:border-[#1E4ED8] transition font-sans"
          />
        </div>

        <div className="flex items-center flex-wrap gap-2.5">
          {/* Sector Filter */}
          <div className="relative">
            <select
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value)}
              className="appearance-none bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3.5 py-2 pr-8 text-xs font-medium text-slate-700 focus:outline-none focus:border-[#1E4ED8] cursor-pointer font-sans"
            >
              <option>All Sectors</option>
              <option value="Logistics">Logistics</option>
              <option value="CleanTech">CleanTech</option>
              <option value="AI">Tech &amp; AI</option>
              <option value="Chemicals">Chemicals</option>
              <option value="Banking">Investment Banking</option>
              <option value="FMCG">FMCG</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          {/* Circle Filter */}
          <div className="relative">
            <select
              value={circleFilter}
              onChange={(e) => setCircleFilter(e.target.value)}
              className="appearance-none bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3.5 py-2 pr-8 text-xs font-medium text-slate-700 focus:outline-none focus:border-[#1E4ED8] cursor-pointer font-sans"
            >
              <option>All Circles</option>
              <option value="Founders">Founders Circle</option>
              <option value="Industrial">Industrial &amp; Mfg</option>
              <option value="Tech">Tech &amp; AI</option>
              <option value="Global Trade">Global Trade</option>
              <option value="Women Leaders">Women Leaders</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          <button className="flex items-center gap-1.5 px-3.5 py-2 bg-[#F6F9FF] hover:bg-[#EEF4FF] border border-[#E2E8F4] rounded-xl text-xs font-semibold text-slate-700 hover:text-[#1E4ED8] transition cursor-pointer font-sans">
            <Filter className="w-3.5 h-3.5 text-[#1E4ED8]" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Grid Cards with Playfair Display Serif Titles & Italic Accents */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((comp) => (
          <div
            key={comp.id}
            className="bg-white rounded-3xl p-6 border border-[#E2E8F4] hover:border-[#1E4ED8]/60 hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-xs flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Accent Gradient Line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${comp.codeBg}`} />

            {/* Top Row: Avatar + Verified Badge + Status Tag */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${comp.codeBg} text-white font-bold text-sm flex items-center justify-center shadow-sm shrink-0 font-display`}
                  >
                    {comp.code}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-medium text-slate-400">
                        {comp.id}
                      </span>
                      {comp.verified && (
                        <span className="flex items-center gap-0.5 px-1.5 py-0.2 text-[9px] font-bold text-emerald-600 bg-emerald-50 rounded-full border border-emerald-200 font-sans">
                          <CheckCircle className="w-2.5 h-2.5" /> Verified
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-semibold text-[#1E4ED8] block font-sans">
                      {comp.circle}
                    </span>
                  </div>
                </div>

                {/* Deal Status Pill */}
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border whitespace-nowrap font-sans ${
                    comp.dealStatusColor === 'green'
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : comp.dealStatusColor === 'blue'
                      ? 'bg-blue-50 text-blue-700 border-blue-200'
                      : 'bg-purple-50 text-purple-700 border-purple-200'
                  }`}
                >
                  {comp.dealStatus}
                </span>
              </div>

              {/* Company Title (Playfair Display Serif) & Sector */}
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-semibold text-[#101B35] group-hover:text-[#1E4ED8] transition leading-snug line-clamp-1">
                  {comp.name}
                </h3>
                <p className="text-xs text-slate-500 font-normal line-clamp-1 font-sans">
                  {comp.sector}
                </p>
              </div>

              {/* Promoter & Location Meta */}
              <div className="p-3.5 rounded-2xl bg-[#F6F9FF] border border-[#E2E8F4]/80 space-y-2 font-sans">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-normal">Promoter:</span>
                  <span className="font-semibold text-[#101B35]">{comp.promoter}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-normal">Location:</span>
                  <span className="font-normal text-slate-700 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#1E4ED8]" />
                    {comp.location}
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 font-sans">
                {comp.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-lg bg-slate-50 text-slate-600 border border-slate-200/80 text-[10px] font-normal"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Card Footer: Turnover + Action Button */}
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between font-sans">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-medium block tracking-wider">
                  Annual Turnover
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-base font-bold text-[#101B35]">
                    {comp.turnover}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-600 font-mono">
                    {comp.turnoverGrowth}
                  </span>
                </div>
              </div>

              <button className="px-3.5 py-2 rounded-xl bg-[#F6F9FF] group-hover:bg-[#1E4ED8] group-hover:text-white border border-[#E2E8F4] group-hover:border-[#1E4ED8] text-xs font-semibold text-slate-700 transition flex items-center gap-1.5 cursor-pointer shadow-2xs">
                <span>View Profile</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination & Counter Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 text-xs text-slate-500 border-t border-slate-200/60 font-sans">
        <p>Showing 1-6 of {companies.length} verified enterprises</p>
        <div className="flex items-center gap-1.5 self-end sm:self-auto">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="p-1.5 rounded-lg bg-white border border-[#E2E8F4] text-slate-500 hover:text-[#1E4ED8] hover:bg-[#F6F9FF] transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          {[1, 2, 3, 4].map((p) => (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              className={`w-7 h-7 rounded-lg text-xs font-bold transition cursor-pointer ${
                currentPage === p
                  ? 'bg-[#1E4ED8] text-white shadow-xs'
                  : 'bg-white border border-[#E2E8F4] text-slate-700 hover:bg-[#F6F9FF]'
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(Math.min(4, currentPage + 1))}
            className="p-1.5 rounded-lg bg-white border border-[#E2E8F4] text-slate-500 hover:text-[#1E4ED8] hover:bg-[#F6F9FF] transition cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

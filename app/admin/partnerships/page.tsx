'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Handshake,
  Search,
  Plus,
  Building2,
  CheckCircle2,
  Clock,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Users,
  Coins,
  Zap,
  Briefcase,
  ChevronDown,
  Layers,
  Leaf,
  Factory,
  Cpu,
  Truck,
  Grid,
  List,
  MessageSquare,
  FileText,
  BookOpen,
  ArrowUp,
  Globe2,
  Filter,
  X,
  Share2,
  Download,
  Check,
  AlertCircle,
  MoreVertical,
  ShieldCheck,
  Calendar,
  MapPin,
  Flame,
  ArrowRight,
  SlidersHorizontal,
} from 'lucide-react'

interface PartnershipItem {
  id: string
  code: string
  title: string
  companyA: string
  companyB: string
  sector: string
  route: string
  value: string
  numericValue: number
  status: 'Active' | 'Under Review' | 'Negotiation' | 'Completed' | 'Pending Due Diligence'
  stage: 'Initiation' | 'Due Diligence' | 'MOU Drafting' | 'Active Execution' | 'Completed'
  progressPercent: number
  avatarA: string
  avatarB: string
  avatarBgA: string
  avatarBgB: string
  signedDate: string
  description: string
  synergies: string[]
  leadManager: string
}

export default function AdminPartnershipsPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [sectorFilter, setSectorFilter] = useState('All')
  const [sortBy, setSortBy] = useState<'newest' | 'value-high' | 'progress'>('newest')
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid')

  // Modals state
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [selectedPartnership, setSelectedPartnership] = useState<PartnershipItem | null>(null)
  const [isDetailDrawerOpen, setIsDetailDrawerOpen] = useState(false)

  // Form State for new partnership
  const [formData, setFormData] = useState({
    title: '',
    companyA: '',
    companyB: '',
    sector: 'Supply & Logistics Tech',
    route: 'Mumbai ↔ Bengaluru',
    value: '₹ 5.0 Cr',
    status: 'Under Review' as PartnershipItem['status'],
    stage: 'Initiation' as PartnershipItem['stage'],
    description: '',
    leadManager: 'Dipak K. (Peers Director)',
  })

  // Initial rich partnership dataset
  const [partnerships, setPartnerships] = useState<PartnershipItem[]>([
    {
      id: '1',
      code: 'PTS-101',
      title: 'Cross-Border Supply Chain AI & Freight Integration',
      companyA: 'Apex Logistics',
      companyB: 'Zen Cloud Solutions',
      sector: 'Supply & Logistics Tech',
      route: 'Mumbai ↔ Bengaluru',
      value: '₹ 4.2 Cr',
      numericValue: 4.2,
      status: 'Active',
      stage: 'Active Execution',
      progressPercent: 90,
      avatarA: 'AL',
      avatarB: 'ZC',
      avatarBgA: 'from-[#1769FF] to-[#08C7E8]',
      avatarBgB: 'from-[#6366F1] to-[#8B5CF6]',
      signedDate: 'Aug 14, 2026',
      description:
        'Unified automated warehouse manifest dispatch with live customs clearance synchronization across West and South India trade hubs.',
      synergies: [
        '99.4% SLA Automated Dispatch',
        'Zero-latency customs broker API',
        '140+ Fleet integrations',
      ],
      leadManager: 'Vikram Singhania',
    },
    {
      id: '2',
      code: 'PTS-102',
      title: 'Solar & Renewable Micro-Grid Infrastructure JV',
      companyA: 'EcoPower Tech Hub',
      companyB: 'Horizon Polymers Ltd',
      sector: 'Clean Energy & Materials',
      route: 'Ahmedabad ↔ Pune',
      value: '₹ 12.8 Cr',
      numericValue: 12.8,
      status: 'Active',
      stage: 'Active Execution',
      progressPercent: 85,
      avatarA: 'EP',
      avatarB: 'HP',
      avatarBgA: 'from-emerald-500 to-teal-400',
      avatarBgB: 'from-amber-500 to-orange-400',
      signedDate: 'Jul 28, 2026',
      description:
        'Joint development of captive rooftop solar installations and recycled composite battery enclosures for Tier-2 industrial estates.',
      synergies: [
        '28 MW Clean energy generation',
        'State PLI capital subsidy qualified',
        'Direct EPC syndication',
      ],
      leadManager: 'Ananya Sharma',
    },
    {
      id: '3',
      code: 'PTS-103',
      title: 'HealthTech Diagnostic & Genomics Clinical Trials',
      companyA: 'MedNext Diagnostics',
      companyB: 'BioGen Singapore Labs',
      sector: 'Healthcare & Biotech',
      route: 'Delhi ↔ Singapore',
      value: '₹ 8.5 Cr',
      numericValue: 8.5,
      status: 'Under Review',
      stage: 'Due Diligence',
      progressPercent: 45,
      avatarA: 'MN',
      avatarB: 'BG',
      avatarBgA: 'from-rose-500 to-pink-400',
      avatarBgB: 'from-cyan-500 to-blue-500',
      signedDate: 'Pending Review',
      description:
        'Cross-border clinical validation pipeline and automated pathology sample analytics with Singapore genomic research institutions.',
      synergies: [
        'HIPAA & CDSCO Compliant',
        'AI-assisted oncological screening',
        'Multi-country cohort study',
      ],
      leadManager: 'Dr. Sameer Roy',
    },
    {
      id: '4',
      code: 'PTS-104',
      title: 'Smart Cities Digital Freight & Transit Grid',
      companyA: 'UrbanTech Systems',
      companyB: 'Global Infra Gulf Partners',
      sector: 'Digital Infrastructure',
      route: 'Mumbai ↔ Dubai',
      value: '₹ 26.0 Cr',
      numericValue: 26.0,
      status: 'Negotiation',
      stage: 'MOU Drafting',
      progressPercent: 65,
      avatarA: 'UT',
      avatarB: 'GI',
      avatarBgA: 'from-indigo-600 to-blue-500',
      avatarBgB: 'from-sky-500 to-cyan-400',
      signedDate: 'Target: Oct 2026',
      description:
        'Turnkey IoT telemetry deployment for maritime port containers, multimodal trucks, and customs transit corridors.',
      synergies: [
        'Middle East trade corridor expansion',
        'Bilateral tariff reduction facilitation',
        'Anchor enterprise contract',
      ],
      leadManager: 'Dipak K.',
    },
    {
      id: '5',
      code: 'PTS-105',
      title: 'Green Hydrogen Electrolyzer Supply Consortium',
      companyA: 'GreenNext CleanPower',
      companyB: 'Tokyo Advanced Power Co',
      sector: 'Clean Energy & Materials',
      route: 'Bengaluru ↔ Tokyo',
      value: '₹ 38.5 Cr',
      numericValue: 38.5,
      status: 'Completed',
      stage: 'Completed',
      progressPercent: 100,
      avatarA: 'GN',
      avatarB: 'TP',
      avatarBgA: 'from-teal-600 to-emerald-400',
      avatarBgB: 'from-red-500 to-rose-400',
      signedDate: 'May 10, 2026',
      description:
        'Long-term technology licensing and manufacturing consortium for proton exchange membrane (PEM) hydrogen electrolyzers in Karnataka.',
      synergies: [
        '100% Green energy certification',
        'Japan-India Clean Energy Pact',
        'Export to ASEAN markets',
      ],
      leadManager: 'Rohan Deshmukh',
    },
    {
      id: '6',
      code: 'PTS-106',
      title: 'Aerospace Specialty Alloys & Precision CNC Supply',
      companyA: 'Vanguard AeroTech',
      companyB: 'Precision Dynamics UK',
      sector: 'Advanced Manufacturing',
      route: 'Hyderabad ↔ London',
      value: '₹ 19.4 Cr',
      numericValue: 19.4,
      status: 'Negotiation',
      stage: 'MOU Drafting',
      progressPercent: 55,
      avatarA: 'VA',
      avatarB: 'PD',
      avatarBgA: 'from-violet-600 to-purple-400',
      avatarBgB: 'from-blue-600 to-indigo-400',
      signedDate: 'Target: Nov 2026',
      description:
        'Bilateral OEM supply agreement for titanium aerospace brackets and turbine casing sub-assemblies conforming to AS9100D.',
      synergies: [
        'Direct Tier-1 Boeing & Airbus supply chain',
        'Customs bonded SEZ manufacturing',
        '8-Year offtake contract',
      ],
      leadManager: 'Dipak K.',
    },
  ])

  // Sector list for filtering
  const allSectors = [
    'All',
    'Supply & Logistics Tech',
    'Clean Energy & Materials',
    'Healthcare & Biotech',
    'Digital Infrastructure',
    'Advanced Manufacturing',
  ]

  // Filter & Sort Logic
  const filtered = partnerships
    .filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.companyA.toLowerCase().includes(search.toLowerCase()) ||
        p.companyB.toLowerCase().includes(search.toLowerCase()) ||
        p.sector.toLowerCase().includes(search.toLowerCase()) ||
        p.code.toLowerCase().includes(search.toLowerCase()) ||
        p.route.toLowerCase().includes(search.toLowerCase()) ||
        p.leadManager.toLowerCase().includes(search.toLowerCase())

      const matchesStatus =
        statusFilter === 'All' || p.status.toLowerCase() === statusFilter.toLowerCase()

      const matchesSector =
        sectorFilter === 'All' || p.sector.toLowerCase() === sectorFilter.toLowerCase()

      return matchesSearch && matchesStatus && matchesSector
    })
    .sort((a, b) => {
      if (sortBy === 'value-high') return b.numericValue - a.numericValue
      if (sortBy === 'progress') return b.progressPercent - a.progressPercent
      return Number(b.id) - Number(a.id)
    })

  // Export JSON
  const handleExportData = () => {
    const jsonStr = JSON.stringify(partnerships, null, 2)
    const blob = new Blob([jsonStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `Peers_Partnerships_Export_${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Handle New Partnership Creation
  const handleCreatePartnership = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.title || !formData.companyA || !formData.companyB) {
      alert('Please fill out all required partnership information.')
      return
    }

    const newId = (partnerships.length + 1).toString()
    const rawVal = parseFloat(formData.value.replace(/[^0-9.]/g, '')) || 5.0

    const newItem: PartnershipItem = {
      id: newId,
      code: `PTS-10${newId}`,
      title: formData.title,
      companyA: formData.companyA,
      companyB: formData.companyB,
      sector: formData.sector,
      route: formData.route,
      value: formData.value.startsWith('₹') ? formData.value : `₹ ${formData.value}`,
      numericValue: rawVal,
      status: formData.status,
      stage: formData.stage,
      progressPercent:
        formData.stage === 'Initiation'
          ? 25
          : formData.stage === 'Due Diligence'
          ? 45
          : formData.stage === 'MOU Drafting'
          ? 65
          : formData.stage === 'Active Execution'
          ? 85
          : 100,
      avatarA: formData.companyA.slice(0, 2).toUpperCase(),
      avatarB: formData.companyB.slice(0, 2).toUpperCase(),
      avatarBgA: 'from-[#1769FF] to-[#08C7E8]',
      avatarBgB: 'from-[#6366F1] to-[#EC4899]',
      signedDate: 'Just Added',
      description:
        formData.description ||
        'Strategic collaboration established through Peers Global network syndicate.',
      synergies: ['Custom strategic syndicate', 'Cross-border clearance', 'Peers Verified MOU'],
      leadManager: formData.leadManager,
    }

    setPartnerships([newItem, ...partnerships])
    setIsCreateModalOpen(false)
    setFormData({
      title: '',
      companyA: '',
      companyB: '',
      sector: 'Supply & Logistics Tech',
      route: 'Mumbai ↔ Bengaluru',
      value: '₹ 5.0 Cr',
      status: 'Under Review',
      stage: 'Initiation',
      description: '',
      leadManager: 'Dipak K. (Peers Director)',
    })
  }

  // Quick Status Update
  const handleUpdateStatus = (id: string, newStatus: PartnershipItem['status']) => {
    setPartnerships((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: newStatus,
              progressPercent:
                newStatus === 'Completed'
                  ? 100
                  : newStatus === 'Active'
                  ? 90
                  : newStatus === 'Negotiation'
                  ? 65
                  : 45,
            }
          : item
      )
    )
    if (selectedPartnership && selectedPartnership.id === id) {
      setSelectedPartnership((prev) => (prev ? { ...prev, status: newStatus } : null))
    }
  }

  return (
    <div className="relative min-h-screen font-sans -m-6 lg:-m-8 p-6 lg:p-10 bg-[#F6F9FF] text-[#101B35] overflow-hidden">
      {/* Background Aesthetic Glow Orbs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-[#1769FF]/15 via-[#08C7E8]/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-[#6366F1]/10 via-[#3B82F6]/5 to-transparent blur-3xl" />
      <div
        className="pointer-events-none absolute top-10 left-8 w-60 h-60 opacity-15"
        style={{
          backgroundImage: 'radial-gradient(#1769FF 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto space-y-8">
        {/* ========================================================================= */}
        {/* 1. TOP HEADER & EXECUTIVE ACTION BAR                                      */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white/80 backdrop-blur-xl border border-[#E2E8F4] p-6 sm:p-8 rounded-[28px] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-full pointer-events-none opacity-40 bg-gradient-to-l from-[#1769FF]/10 to-transparent" />

          {/* Left Title & Status Pill */}
          <div className="space-y-2 relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#1769FF]/10 text-[#1769FF] border border-[#1769FF]/20">
                <span className="size-2 rounded-full bg-[#1769FF] animate-pulse" />
                Global Syndication Hub
              </span>
              <span className="hidden sm:inline text-xs text-slate-400 font-medium">•</span>
              <span className="hidden sm:inline text-xs text-slate-500 font-medium">
                Live Bilateral Network
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-[#0B1A3A] tracking-tight leading-tight flex items-center gap-3">
              Partnerships & Alliances
            </h1>

            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed font-normal">
              Oversee high-stakes corporate joint ventures, cross-border commercial alliances, and
              multi-promoter syndication pipelines.
            </p>
          </div>

          {/* Right Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 relative z-10">
            <button
              onClick={handleExportData}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-[#E2E8F4] hover:bg-slate-50 hover:border-slate-300 text-slate-700 text-xs font-bold transition shadow-xs cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-500" />
              <span>Export Dossier</span>
            </button>

            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#1769FF] via-[#5046E5] to-[#08C7E8] text-white text-xs font-bold shadow-md shadow-[#1769FF]/25 hover:shadow-lg hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>Propose Alliance</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. FOUR PERFORMANCE KPI CARDS                                             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Active Partnerships */}
          <div className="group relative bg-white/90 backdrop-blur-md border border-[#E2E8F4] rounded-[24px] p-5 shadow-xs hover:shadow-md hover:border-[#1769FF]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#1769FF]/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1769FF]/10 to-[#08C7E8]/20 border border-[#1769FF]/20 flex items-center justify-center text-[#1769FF] shrink-0 shadow-inner">
                <Handshake className="w-6 h-6" />
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                <ArrowUp className="w-3 h-3 stroke-[2.5]" /> +18.4%
              </span>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Total Alliances
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                <h3 className="text-3xl font-black text-[#0B1A3A] tracking-tight">
                  {partnerships.length * 14 + 2}
                </h3>
                <span className="text-xs text-slate-400 font-medium">active JVs</span>
              </div>
            </div>


          </div>

          {/* Card 2: Cumulative Pipeline Value */}
          <div className="group relative bg-white/90 backdrop-blur-md border border-[#E2E8F4] rounded-[24px] p-5 shadow-xs hover:shadow-md hover:border-emerald-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
                <Coins className="w-6 h-6" />
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                <ArrowUp className="w-3 h-3 stroke-[2.5]" /> +24.0%
              </span>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Syndicated Deal Value
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                <h3 className="text-3xl font-black text-[#0B1A3A] tracking-tight">₹ 348.5 Cr</h3>
              </div>
            </div>


          </div>

          {/* Card 3: Avg Deal Velocity */}
          <div className="group relative bg-white/90 backdrop-blur-md border border-[#E2E8F4] rounded-[24px] p-5 shadow-xs hover:shadow-md hover:border-purple-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-600 shrink-0 shadow-inner">
                <Zap className="w-6 h-6" />
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-600 bg-purple-50 border border-purple-200/60 px-2.5 py-0.5 rounded-full">
                -4 Days Faster
              </span>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Avg. MOU Velocity
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                <h3 className="text-3xl font-black text-[#0B1A3A] tracking-tight">22 Days</h3>
                <span className="text-xs text-slate-400 font-medium">intro to signed</span>
              </div>
            </div>


          </div>

          {/* Card 4: Global Corridors */}
          <div className="group relative bg-white/90 backdrop-blur-md border border-[#E2E8F4] rounded-[24px] p-5 shadow-xs hover:shadow-md hover:border-sky-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sky-500/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-600 shrink-0 shadow-inner">
                <Globe2 className="w-6 h-6" />
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-600 bg-sky-50 border border-sky-200/60 px-2.5 py-0.5 rounded-full">
                14 Corridors
              </span>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Cross-Border Hubs
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                <h3 className="text-3xl font-black text-[#0B1A3A] tracking-tight">6 Countries</h3>
                <span className="text-xs text-slate-400 font-medium">syndicated</span>
              </div>
            </div>


          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. FILTER & VIEW CONTROL TOOLBAR                                          */}
        {/* ========================================================================= */}
        <div className="bg-white border border-[#E2E8F4] rounded-[24px] p-4.5 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left: Search Bar */}
          <div className="relative w-full lg:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search alliances, companies, routes, or lead..."
              className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl pl-10 pr-9 py-2.5 text-xs text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:border-[#1769FF] focus:bg-white transition"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Center & Right Filters */}
          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-3 w-full lg:w-auto">
            {/* Status Pills */}
            <div className="flex items-center gap-1 overflow-x-auto p-1 bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl">
              {['All', 'Active', 'Under Review', 'Negotiation', 'Completed'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setStatusFilter(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                    statusFilter === tab
                      ? 'bg-[#1769FF] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#1769FF] hover:bg-white/70'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Sector Selector */}
            <select
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value)}
              className="bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#1769FF] cursor-pointer"
            >
              {allSectors.map((sec) => (
                <option key={sec} value={sec}>
                  Sector: {sec}
                </option>
              ))}
            </select>

            {/* Sort Selector */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#1769FF] cursor-pointer"
            >
              <option value="newest">Sort: Newest First</option>
              <option value="value-high">Sort: Highest Deal Value</option>
              <option value="progress">Sort: Pipeline Progress</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#1769FF] shadow-xs'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg transition cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-white text-[#1769FF] shadow-xs'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
                title="Table View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. MAIN FULL-WIDTH ALLIANCE PIPELINE (GRID OR TABLE)                      */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          {/* Results Count & Quick Bar */}
          <div className="flex items-center justify-between px-1">
            <p className="text-xs font-bold text-slate-500">
              Showing <span className="text-[#0B1A3A] font-extrabold">{filtered.length}</span> of{' '}
              {partnerships.length} Alliance Agreements
            </p>
            <span className="text-[11px] text-slate-400 font-medium">
              Peers Global Syndication Engine v2.4
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="bg-white border border-[#E2E8F4] rounded-[28px] p-12 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
                <Search className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0B1A3A]">
                  No Alliances Match Your Criteria
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Try adjusting your search query, sector filters, or status tabs to view available
                  partnerships.
                </p>
              </div>
              <button
                onClick={() => {
                  setSearch('')
                  setStatusFilter('All')
                  setSectorFilter('All')
                }}
                className="px-4 py-2 rounded-xl bg-[#1769FF] text-white text-xs font-bold hover:opacity-90 cursor-pointer transition"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            /* FULL-WIDTH GRID / PIPELINE CARD VIEW (3 Columns on Large Displays) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white hover:bg-[#FCFDFF] border border-[#E2E8F4] hover:border-[#1769FF]/50 rounded-[26px] p-5.5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Top Header Row */}
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-mono text-[11px] font-bold text-[#1769FF] bg-[#1769FF]/10 px-2.5 py-0.5 rounded-lg">
                        {item.code}
                      </span>

                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${
                          item.status === 'Active'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : item.status === 'Under Review'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : item.status === 'Negotiation'
                            ? 'bg-amber-50 text-amber-700 border-amber-200'
                            : 'bg-purple-50 text-purple-700 border-purple-200'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* Alliance Title */}
                    <h3 className="text-sm font-black text-[#0B1A3A] group-hover:text-[#1769FF] transition-colors line-clamp-2 mt-3 leading-snug">
                      {item.title}
                    </h3>

                    {/* Dual Companies Pill */}
                    <div className="flex items-center gap-2 mt-3.5 p-2.5 rounded-xl bg-[#F6F9FF] border border-[#E2E8F4]">
                      <div className="flex items-center gap-1.5 min-w-0 flex-1">
                        <div
                          className={`size-6 rounded-lg bg-gradient-to-tr ${item.avatarBgA} text-white font-bold text-[9px] flex items-center justify-center shrink-0 shadow-2xs`}
                        >
                          {item.avatarA}
                        </div>
                        <span className="text-xs font-bold text-[#101B35] truncate">
                          {item.companyA}
                        </span>
                      </div>

                      <div className="size-5 rounded-full bg-white border border-[#E2E8F4] flex items-center justify-center text-[10px] font-black text-[#1769FF] shrink-0 shadow-2xs">
                        ⚡
                      </div>

                      <div className="flex items-center gap-1.5 min-w-0 flex-1 justify-end">
                        <span className="text-xs font-bold text-[#101B35] truncate text-right">
                          {item.companyB}
                        </span>
                        <div
                          className={`size-6 rounded-lg bg-gradient-to-tr ${item.avatarBgB} text-white font-bold text-[9px] flex items-center justify-center shrink-0 shadow-2xs`}
                        >
                          {item.avatarB}
                        </div>
                      </div>
                    </div>

                    {/* Sector & Route Tags */}
                    <div className="flex flex-wrap items-center gap-2 mt-3 text-[11px] text-slate-500 font-medium">
                      <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-semibold text-[10px]">
                        <Layers className="w-3 h-3 text-slate-400" />
                        {item.sector}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-500">
                        <Globe2 className="w-3 h-3 text-slate-400" />
                        {item.route}
                      </span>
                    </div>

                    {/* Description Excerpt */}
                    <p className="text-xs text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Metadata, Progress & Action */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-3">
                    {/* Deal Value & Milestone Progress */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Deal Value
                        </p>
                        <p className="text-sm font-black text-[#0B1A3A]">{item.value}</p>
                      </div>

                      <div className="text-right">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Stage: <span className="text-slate-700 font-extrabold">{item.stage}</span>
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-20 bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-[#1769FF] to-[#08C7E8] h-full rounded-full transition-all"
                              style={{ width: `${item.progressPercent}%` }}
                            />
                          </div>
                          <span className="text-[11px] font-bold text-slate-700">
                            {item.progressPercent}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => {
                          setSelectedPartnership(item)
                          setIsDetailDrawerOpen(true)
                        }}
                        className="flex-1 py-2 rounded-xl bg-[#F6F9FF] hover:bg-[#EEF4FF] border border-[#E2E8F4] hover:border-blue-200 text-[#1769FF] text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Manage Alliance</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => {
                          const nextStatus =
                            item.status === 'Under Review'
                              ? 'Negotiation'
                              : item.status === 'Negotiation'
                              ? 'Active'
                              : 'Completed'
                          handleUpdateStatus(item.id, nextStatus)
                        }}
                        className="p-2 rounded-xl bg-[#F6F9FF] hover:bg-slate-100 border border-[#E2E8F4] text-slate-600 hover:text-emerald-600 text-xs font-bold transition cursor-pointer"
                        title="Advance Status"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* DETAILED TABLE VIEW */
            <div className="bg-white border border-[#E2E8F4] rounded-[24px] overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F8FAFC] border-b border-[#E2E8F4] text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                    <tr>
                      <th className="py-3.5 px-4">Code & Alliance</th>
                      <th className="py-3.5 px-4">Companies Involved</th>
                      <th className="py-3.5 px-4">Sector & Route</th>
                      <th className="py-3.5 px-4">Deal Value</th>
                      <th className="py-3.5 px-4">Lead Director</th>
                      <th className="py-3.5 px-4">Progress</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filtered.map((item) => (
                      <tr key={item.id} className="hover:bg-[#F9FBFF] transition group">
                        <td className="py-3.5 px-4 min-w-[220px]">
                          <span className="font-mono font-bold text-[#1769FF] text-[10px] block">
                            {item.code}
                          </span>
                          <span className="font-bold text-[#0B1A3A] group-hover:text-[#1769FF] transition line-clamp-1">
                            {item.title}
                          </span>
                        </td>

                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1.5 font-bold text-slate-700">
                            <span>{item.companyA}</span>
                            <span className="text-[#1769FF] font-black">⚡</span>
                            <span>{item.companyB}</span>
                          </div>
                        </td>

                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span className="text-slate-800 font-semibold block">{item.sector}</span>
                          <span className="text-[10px] text-slate-400">{item.route}</span>
                        </td>

                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span className="font-black text-[#0B1A3A]">{item.value}</span>
                        </td>

                        <td className="py-3.5 px-4 whitespace-nowrap text-slate-600 font-medium">
                          {item.leadManager}
                        </td>

                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                              <div
                                className="bg-[#1769FF] h-full rounded-full"
                                style={{ width: `${item.progressPercent}%` }}
                              />
                            </div>
                            <span className="text-[10px] font-bold text-slate-600">
                              {item.progressPercent}%
                            </span>
                          </div>
                        </td>

                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ${
                              item.status === 'Active'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : item.status === 'Under Review'
                                ? 'bg-blue-50 text-blue-700 border-blue-200'
                                : item.status === 'Negotiation'
                                ? 'bg-amber-50 text-amber-700 border-amber-200'
                                : 'bg-purple-50 text-purple-700 border-purple-200'
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>

                        <td className="py-3.5 px-4 whitespace-nowrap text-right">
                          <button
                            onClick={() => {
                              setSelectedPartnership(item)
                              setIsDetailDrawerOpen(true)
                            }}
                            className="px-3 py-1.5 rounded-xl bg-[#F6F9FF] hover:bg-[#EEF4FF] text-[#1769FF] font-bold text-xs border border-[#E2E8F4] transition cursor-pointer"
                          >
                            Manage
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. CREATE NEW ALLIANCE MODAL                                              */}
      {/* ========================================================================= */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07152E]/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[28px] border border-[#E2E8F4] w-full max-w-xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#1769FF] to-[#08C7E8] text-white flex items-center justify-center">
                  <Handshake className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-[#0B1A3A]">Propose New Alliance</h2>
                  <p className="text-xs text-slate-500">Initiate a joint venture or syndicated collaboration</p>
                </div>
              </div>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="size-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleCreatePartnership} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Partnership / Alliance Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Next-Gen EV Battery Recycling & Supply Consortium"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3.5 py-2.5 text-xs text-[#101B35] focus:outline-none focus:border-[#1769FF] focus:bg-white transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Company A (Lead) *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Logistics"
                    value={formData.companyA}
                    onChange={(e) => setFormData({ ...formData, companyA: e.target.value })}
                    className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3.5 py-2.5 text-xs text-[#101B35] focus:outline-none focus:border-[#1769FF] focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Company B (Partner) *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Horizon Energy Ltd"
                    value={formData.companyB}
                    onChange={(e) => setFormData({ ...formData, companyB: e.target.value })}
                    className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3.5 py-2.5 text-xs text-[#101B35] focus:outline-none focus:border-[#1769FF] focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Industry Sector</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3 py-2.5 text-xs text-[#101B35] focus:outline-none focus:border-[#1769FF] cursor-pointer"
                  >
                    <option value="Supply & Logistics Tech">Supply & Logistics Tech</option>
                    <option value="Clean Energy & Materials">Clean Energy & Materials</option>
                    <option value="Healthcare & Biotech">Healthcare & Biotech</option>
                    <option value="Digital Infrastructure">Digital Infrastructure</option>
                    <option value="Advanced Manufacturing">Advanced Manufacturing</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Trade Corridor / Route</label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai ↔ Singapore"
                    value={formData.route}
                    onChange={(e) => setFormData({ ...formData, route: e.target.value })}
                    className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3.5 py-2.5 text-xs text-[#101B35] focus:outline-none focus:border-[#1769FF] focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Estimated Deal Capital</label>
                  <input
                    type="text"
                    placeholder="e.g. ₹ 8.5 Cr"
                    value={formData.value}
                    onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                    className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3.5 py-2.5 text-xs text-[#101B35] focus:outline-none focus:border-[#1769FF] focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Pipeline Stage</label>
                  <select
                    value={formData.stage}
                    onChange={(e) =>
                      setFormData({ ...formData, stage: e.target.value as any })
                    }
                    className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3 py-2.5 text-xs text-[#101B35] focus:outline-none focus:border-[#1769FF] cursor-pointer"
                  >
                    <option value="Initiation">Initiation (25%)</option>
                    <option value="Due Diligence">Due Diligence (45%)</option>
                    <option value="MOU Drafting">MOU Drafting (65%)</option>
                    <option value="Active Execution">Active Execution (85%)</option>
                    <option value="Completed">Completed (100%)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Synergies & Strategic Scope
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline key terms, commercial goals, resource pooling, and bilateral deliverables..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl p-3 text-xs text-[#101B35] focus:outline-none focus:border-[#1769FF] focus:bg-white transition"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#1769FF] to-[#08C7E8] text-white text-xs font-bold shadow-md shadow-[#1769FF]/25 hover:opacity-95 cursor-pointer transition"
                >
                  Create Alliance Dossier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. PARTNERSHIP DETAILS & MANAGEMENT DRAWER                                 */}
      {/* ========================================================================= */}
      {isDetailDrawerOpen && selectedPartnership && (
        <div className="fixed inset-0 z-50 flex justify-end bg-[#07152E]/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-xl h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            {/* Drawer Top Header */}
            <div className="space-y-6">
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="font-mono text-xs font-bold text-[#1769FF] bg-[#1769FF]/10 px-2.5 py-1 rounded-lg">
                    {selectedPartnership.code}
                  </span>
                  <h2 className="text-xl font-black text-[#0B1A3A] mt-2 leading-tight">
                    {selectedPartnership.title}
                  </h2>
                </div>
                <button
                  onClick={() => setIsDetailDrawerOpen(false)}
                  className="size-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Status & Velocity Stepper */}
              <div className="p-4 rounded-2xl bg-[#F6F9FF] border border-[#E2E8F4] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-500">Pipeline Stage:</span>
                  <span className="font-extrabold text-[#1769FF]">{selectedPartnership.stage}</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#1769FF] to-[#08C7E8] h-full rounded-full transition-all"
                    style={{ width: `${selectedPartnership.progressPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-semibold pt-1">
                  <span>Initiation (25%)</span>
                  <span>Due Diligence (45%)</span>
                  <span>MOU Signed (65%)</span>
                  <span>Execution (90%)</span>
                </div>
              </div>

              {/* Partners Involved */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F4] shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Lead Enterprise
                  </span>
                  <p className="font-black text-[#0B1A3A] text-sm">{selectedPartnership.companyA}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F4] shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Syndicate Partner
                  </span>
                  <p className="font-black text-[#0B1A3A] text-sm">{selectedPartnership.companyB}</p>
                </div>
              </div>

              {/* Details Key Value Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">
                    Deal Capital
                  </span>
                  <span className="font-black text-[#0B1A3A] text-base">
                    {selectedPartnership.value}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">
                    Corridor
                  </span>
                  <span className="font-bold text-slate-800">{selectedPartnership.route}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">
                    Peers Director Lead
                  </span>
                  <span className="font-bold text-slate-800">
                    {selectedPartnership.leadManager}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">
                    Signed Date
                  </span>
                  <span className="font-bold text-slate-800">{selectedPartnership.signedDate}</span>
                </div>
              </div>

              {/* Strategic Scope */}
              <div className="space-y-2 text-xs">
                <h4 className="font-bold text-[#0B1A3A]">Syndication Scope & Overview</h4>
                <p className="text-slate-600 leading-relaxed bg-[#F8FAFC] border border-[#E2E8F4] p-3.5 rounded-2xl">
                  {selectedPartnership.description}
                </p>
              </div>

              {/* Key Deliverables / Synergies */}
              <div className="space-y-2 text-xs">
                <h4 className="font-bold text-[#0B1A3A]">Key Deliverables & Verified Metrics</h4>
                <div className="space-y-1.5">
                  {selectedPartnership.synergies.map((syn, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-emerald-800 font-semibold"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{syn}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
              <button
                onClick={() => {
                  const newStatus =
                    selectedPartnership.status === 'Active'
                      ? 'Completed'
                      : selectedPartnership.status === 'Under Review'
                      ? 'Negotiation'
                      : 'Active'
                  handleUpdateStatus(selectedPartnership.id, newStatus)
                }}
                className="flex-1 py-3 rounded-2xl bg-[#1769FF] text-white text-xs font-bold hover:bg-[#1255d4] transition shadow-md shadow-[#1769FF]/20 cursor-pointer"
              >
                Advance Status (Current: {selectedPartnership.status})
              </button>

              <button
                onClick={() => setIsDetailDrawerOpen(false)}
                className="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

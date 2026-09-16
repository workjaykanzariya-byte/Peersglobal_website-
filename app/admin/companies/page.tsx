'use client'

import React, { useState } from 'react'
import {
  Building2,
  Search,
  Plus,
  MapPin,
  Users,
  ShieldCheck,
  TrendingUp,
  Globe,
  ExternalLink,
} from 'lucide-react'

export default function AdminCompaniesPage() {
  const [search, setSearch] = useState('')

  const companies = [
    {
      id: 'C-01',
      name: 'Apex Logistics & Supply Chain',
      promoter: 'Vikram Singhania',
      city: 'Mumbai',
      sector: 'Freight & Supply Tech',
      turnover: '₹420 Cr',
      employees: '1,200+',
      circle: 'Founders Circle',
      verified: true,
    },
    {
      id: 'C-02',
      name: 'EcoPower Renewable Systems',
      promoter: 'Rohan Deshmukh',
      city: 'Pune',
      sector: 'Solar & Clean Energy',
      turnover: '₹280 Cr',
      employees: '650+',
      circle: 'Industrial & Manufacturing Circle',
      verified: true,
    },
    {
      id: 'C-03',
      name: 'Zen Cloud Software Labs',
      promoter: 'Ananya Sharma',
      city: 'Bengaluru',
      sector: 'Enterprise AI & SaaS',
      turnover: '₹190 Cr',
      employees: '420+',
      circle: 'Tech & AI Innovators Circle',
      verified: true,
    },
    {
      id: 'C-04',
      name: 'Horizon Advanced Polymers',
      promoter: 'Harish Mehta',
      city: 'Surat',
      sector: 'Specialty Chemical & Polymers',
      turnover: '₹510 Cr',
      employees: '1,800+',
      circle: 'Global Trade & Export Circle',
      verified: true,
    },
    {
      id: 'C-05',
      name: 'FinEdge Strategic M&A Advisory',
      promoter: 'Kavita Menon',
      city: 'Delhi NCR',
      sector: 'Investment Banking & Capital',
      turnover: '₹95 Cr',
      employees: '110+',
      circle: 'Women Leaders Circle',
      verified: true,
    },
  ]

  const filtered = companies.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.promoter.toLowerCase().includes(search.toLowerCase()) ||
      c.city.toLowerCase().includes(search.toLowerCase()) ||
      c.sector.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-8 font-sans pb-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-[#1769FF] to-[#08C7E8] text-white flex items-center justify-center shadow-md shadow-[#1769FF]/20">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101B35] font-display">
              Enterprise Directory & Companies
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Verified corporate member profiles, promoter entities, and chapter associations.
            </p>
          </div>
        </div>

        <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1769FF] to-[#08C7E8] hover:from-[#1357D6] hover:to-[#06ACC8] text-white text-xs font-bold shadow-md shadow-[#1769FF]/20 transition flex items-center gap-2 cursor-pointer w-fit">
          <Plus className="w-4 h-4" />
          <span>Add Enterprise</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="bg-white border border-[#E2E8F4] rounded-2xl p-4 shadow-xs">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search enterprises by name, promoter, city, or sector..."
            className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl pl-10 pr-4 py-2 text-xs text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:border-[#1769FF]"
          />
        </div>
      </div>

      {/* Companies Table Card */}
      <div className="bg-white border border-[#E2E8F4] rounded-3xl p-6 lg:p-8 shadow-sm space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#101B35]">
            <thead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
              <tr>
                <th className="py-3 px-4">Company Entity</th>
                <th className="py-3 px-4">Promoter / Leader</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Circle Chapter</th>
                <th className="py-3 px-4">Annual Turnover</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((comp) => (
                <tr key={comp.id} className="hover:bg-[#F6F9FF] transition group">
                  <td className="py-3.5 px-4 font-bold text-[#101B35]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#1769FF]/10 text-[#1769FF] font-bold flex items-center justify-center text-xs">
                        {comp.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-[#101B35] group-hover:text-[#1769FF] transition">{comp.name}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{comp.sector}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 font-medium">{comp.promoter}</td>
                  <td className="py-3.5 px-4 text-slate-500">{comp.city}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1769FF] text-[10px] font-bold border border-blue-200">
                      {comp.circle}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-[#101B35] font-display">{comp.turnover}</td>
                  <td className="py-3.5 px-4 text-right">
                    <button className="px-3 py-1.5 rounded-xl bg-[#F6F9FF] hover:bg-[#EEF4FF] border border-[#E2E8F4] text-xs font-bold text-[#1769FF] transition cursor-pointer">
                      View Profile
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

'use client'

import React from 'react'
import Link from 'next/link'
import {
  Scale,
  ChevronRight,
  ShieldCheck,
  Mail,
  MapPin,
  Clock,
  Phone,
  Building,
  FileCheck,
  ArrowRight,
} from 'lucide-react'

export function GrievanceClient() {
  return (
    <div className="homepage-sections-root min-h-screen bg-white text-[#0f131a] antialiased">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Grievance Redressal</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 border-b border-slate-200/80 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
              STATUTORY COMPLIANCE &amp; REDRESSAL
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f131a] leading-tight">
            <span>Grievance</span> <span className="brand-gradient-text">Redressal</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            In accordance with the Information Technology Act, 2000 and the Intermediary Guidelines and Digital Media Ethics Code Rules, 2021.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Officer Details Box */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f131a] tracking-tight">
              Designated Grievance Officer
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              If you have any grievances or concerns regarding platform content, member conduct, copyright violations, or data privacy, you may write directly to our designated Grievance Redressal Officer:
            </p>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2 text-sm text-slate-700">
              <p><strong className="text-slate-900">Name:</strong> Mr. Nilesh Trivedi</p>
              <p><strong className="text-slate-900">Designation:</strong> Head of Compliance &amp; Grievance Redressal</p>
              <p><strong className="text-slate-900">Company:</strong> Peers Global Business Media Private Limited</p>
              <p><strong className="text-slate-900">CIN:</strong> U22219GJ2022PTC137646</p>
              <p><strong className="text-slate-900">Address:</strong> B-Block, Titanium Square, Thaltej Cross Roads, SG Highway, Ahmedabad, Gujarat 380054, India.</p>
              <p><strong className="text-slate-900">Email:</strong> <a href="mailto:grievance@peersglobal.com" className="text-[#1D4ED8] font-bold hover:underline">grievance@peersglobal.com</a></p>
            </div>
          </div>

          {/* Timelines and Process */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f131a] tracking-tight">
              Process &amp; Resolution Timelines
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                <span className="text-xs font-mono font-bold text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Step 1 · 24 Hours</span>
                <h3 className="font-bold text-[#0f131a] text-base pt-2">Formal Acknowledgment</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Every grievance submitted with ticket reference details is acknowledged within 24 hours of receipt.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                <span className="text-xs font-mono font-bold text-[#E11D48] bg-rose-50 px-3 py-1 rounded-full border border-rose-100">Step 2 · 15 Days</span>
                <h3 className="font-bold text-[#0f131a] text-base pt-2">Statutory Resolution</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  The committee investigates facts, gathers statements, and issues a formal written resolution within 15 calendar days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


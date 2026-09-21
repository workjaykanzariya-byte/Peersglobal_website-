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
} from 'lucide-react'

export function GrievanceClient() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-[#1A1A1A] antialiased">
      {/* Breadcrumb */}
      <div className="border-b border-[#EADFC7]/60 bg-[#FAF6EE]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-neutral-600">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Grievance Redressal</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-14 border-b border-[#EADFC7]/60 overflow-hidden bg-[#FAF7F0]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E8] border border-[#E8DFC9] text-xs font-bold uppercase tracking-wider text-[#8C6422]">
            <Scale className="w-3.5 h-3.5 text-[#8C6422]" />
            STATUTORY COMPLIANCE
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#162039] tracking-tight leading-tight font-bold">
            Grievance Redressal
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
            In accordance with the Information Technology Act, 2000 and the Intermediary Guidelines and Digital Media Ethics Code Rules, 2021.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Officer Details Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#142038]">
              Designated Grievance Officer
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              If you have any grievances or concerns regarding platform content, member conduct, copyright violations, or data privacy, you may write directly to our designated Grievance Redressal Officer:
            </p>

            <div className="p-5 rounded-xl bg-[#FAF4E8] border border-[#E8DFC9] space-y-2 text-xs sm:text-sm text-neutral-800">
              <p><strong>Name:</strong> Mr. Nilesh Trivedi</p>
              <p><strong>Designation:</strong> Head of Compliance &amp; Grievance Redressal</p>
              <p><strong>Company:</strong> Peers Global Business Media Private Limited</p>
              <p><strong>CIN:</strong> U22219GJ2022PTC137646</p>
              <p><strong>Address:</strong> B-Block, Titanium Square, Thaltej Cross Roads, SG Highway, Ahmedabad, Gujarat 380054, India.</p>
              <p><strong>Email:</strong> <a href="mailto:grievance@peersglobal.com" className="text-[#0D6EFD] font-bold hover:underline">grievance@peersglobal.com</a></p>
            </div>
          </div>

          {/* Timelines and Process */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#142038]">
              Process &amp; Resolution Timelines
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E8DFC9] space-y-1">
                <span className="text-xs font-mono font-bold text-[#8C6422]">Step 1 · 24 Hours</span>
                <h3 className="font-serif font-bold text-neutral-900 text-sm">Formal Acknowledgment</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Every grievance submitted with ticket reference details is acknowledged within 24 hours of receipt.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E8DFC9] space-y-1">
                <span className="text-xs font-mono font-bold text-[#8C6422]">Step 2 · 15 Days</span>
                <h3 className="font-serif font-bold text-neutral-900 text-sm">Statutory Resolution</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
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

'use client'

import React from 'react'
import { HelpCircle, Mail, Phone, ExternalLink, ShieldCheck, FileText, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function AdminHelpPage() {
  return (
    <div className="space-y-8 font-sans pb-12 max-w-5xl mx-auto">
      <div className="flex items-center gap-2.5">
        <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-[#1769FF] to-[#08C7E8] text-white flex items-center justify-center shadow-md shadow-[#1769FF]/20">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101B35] font-display">
            Admin Support & Documentation
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Guidance for managing circle exclusivity, syndicate workflows, and administrative operations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white border border-[#E2E8F4] rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-blue-50 text-[#1769FF]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#101B35] font-display">LSR Model Playbook</h3>
              <p className="text-xs text-slate-500">Promoter Governance Framework</p>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Detailed operational guide on Category Exclusivity, Circles leadership rotation, and conflict resolution mechanisms.
          </p>
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769FF] hover:underline"
          >
            <span>Read Guidelines</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white border border-[#E2E8F4] rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-cyan-50 text-[#08C7E8]">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#101B35] font-display">Steering Desk Support</h3>
              <p className="text-xs text-slate-500">Direct Executive Line</p>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Need urgent assistance with membership transfers or syndicate agreements? Contact the central steering team.
          </p>
          <p className="text-xs font-bold text-[#101B35]">support@peersglobal.com</p>
        </div>
      </div>
    </div>
  )
}

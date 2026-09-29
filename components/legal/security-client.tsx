'use client'

import React from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  ChevronRight,
  Lock,
  Key,
  Server,
  EyeOff,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export function SecurityClient() {
  return (
    <div className="homepage-sections-root min-h-screen bg-white text-[#0f131a] antialiased">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Security &amp; Data</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 border-b border-slate-200/80 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
              INFRASTRUCTURE &amp; TRUST ARCHITECTURE
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f131a] leading-tight">
            <span>Security &amp; Data</span> <span className="brand-gradient-text">Protection</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            How we protect founder credentials, commercial ledgers, and communication privacy across the Peers Global platform.
          </p>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="py-16 md:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#1D4ED8] flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#0f131a] text-lg">Encryption in Transit</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                All traffic between your browser, mobile devices, and our servers is forced over TLS 1.3 with HSTS enabled.
              </p>
            </div>

            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 text-[#E11D48] flex items-center justify-center">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#0f131a] text-lg">Encryption at Rest</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Databases, transaction ledgers, and sensitive profile credentials are encrypted using industry-standard AES-256 keys.
              </p>
            </div>

            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#0f131a] text-lg">Indian Data Residency</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Our primary cloud infrastructure and storage buckets reside in Tier-IV data centers located within India.
              </p>
            </div>
          </div>

          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f131a] tracking-tight">
              Vulnerability Disclosure Program
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              If you believe you have discovered a security vulnerability or bug in the Peers Global web or mobile infrastructure, we invite you to report it responsibly to our engineering team at <strong className="text-slate-900 font-semibold">security@peersglobal.com</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


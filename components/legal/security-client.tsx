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
} from 'lucide-react'

export function SecurityClient() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-[#1A1A1A] antialiased">
      {/* Breadcrumb */}
      <div className="border-b border-[#EADFC7]/60 bg-[#FAF6EE]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-neutral-600">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Security &amp; Data</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-14 border-b border-[#EADFC7]/60 overflow-hidden bg-[#FAF7F0]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E8] border border-[#E8DFC9] text-xs font-bold uppercase tracking-wider text-[#8C6422]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8C6422]" />
            INFRASTRUCTURE &amp; TRUST
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#162039] tracking-tight leading-tight font-bold">
            Security &amp; Data Protection
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
            How we protect founder credentials, commercial ledgers, and communication privacy across the Peers Global platform.
          </p>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="py-14 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-2">
              <Lock className="w-6 h-6 text-[#0D6EFD]" />
              <h3 className="font-serif font-bold text-neutral-900 text-base">Encryption in Transit</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                All traffic between your browser, mobile devices, and our servers is forced over TLS 1.3 with HSTS enabled.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-2">
              <Key className="w-6 h-6 text-[#8C6422]" />
              <h3 className="font-serif font-bold text-neutral-900 text-base">Encryption at Rest</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Databases, transaction ledgers, and sensitive profile credentials are encrypted using industry-standard AES-256 keys.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-2">
              <Server className="w-6 h-6 text-emerald-600" />
              <h3 className="font-serif font-bold text-neutral-900 text-base">Indian Data Residency</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Our primary cloud infrastructure and storage buckets reside in Tier-IV data centers located within India.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#142038]">
              Vulnerability Disclosure Program
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              If you believe you have discovered a security vulnerability or bug in the Peers Global web or mobile infrastructure, we invite you to report it responsibly to our engineering team at <strong>security@peersglobal.com</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

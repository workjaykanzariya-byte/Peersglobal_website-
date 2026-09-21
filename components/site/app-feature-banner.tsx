'use client'

import React from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight, Smartphone, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

export function AppFeatureBanner({
  title = 'Run your Circle & Referrals on Unity App',
  description = 'Access verified member directory, real-time referral ledger, meeting attendance logs, and 1-to-1 pairing directly from your mobile device.',
  className,
}: {
  title?: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn('relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b1b3a] via-[#122347] to-[#1e3a8a] text-white p-8 sm:p-10 shadow-2xl border border-blue-900/50', className)}>
      {/* Glow Effects */}
      <div className="absolute -top-24 -right-24 size-80 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-[#D4AF37]/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="size-3.5 text-[#D4AF37]" />
            UNITY PLATFORM ENGINE
          </div>
          <h3 className="display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-medium">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-white/70 font-semibold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-emerald-400" /> Governed Integrity
            </span>
            <span className="flex items-center gap-1.5">
              <Smartphone className="size-4 text-blue-400" /> iOS & Android Ready
            </span>
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <Link
            href="/unity"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] text-[#0b1b3a] px-6 py-3.5 text-sm font-extrabold hover:bg-amber-400 active:scale-95 transition-all shadow-lg shadow-[#D4AF37]/25"
          >
            Explore Unity App
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

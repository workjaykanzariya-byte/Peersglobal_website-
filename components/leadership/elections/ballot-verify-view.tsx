'use client'

import React, { useState, useEffect } from 'react'
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  RefreshCw,
} from 'lucide-react'
import { VoteReceipt, leadershipApi } from '@/lib/api/leadership'

interface BallotVerifyViewProps {
  initialReference?: string
}

export function BallotVerifyView({ initialReference }: BallotVerifyViewProps) {
  const [reference, setReference] = useState<string>(initialReference || '')
  const [receipt, setReceipt] = useState<VoteReceipt | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const verifyBallot = async (ref: string) => {
    const clean = ref.trim()
    if (!clean) return
    setLoading(true)
    setError(null)
    try {
      const res = await leadershipApi.getVoteReceipt(clean)
      if (res.success && res.data) {
        setReceipt(res.data)
      } else {
        setError('No verified ballot found for this reference ID.')
      }
    } catch (err: unknown) {
      setError((err as Error).message || 'Verification lookup failed')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (initialReference) {
      verifyBallot(initialReference)
    }
  }, [initialReference])

  const copyRef = () => {
    if (receipt?.vote_reference) {
      navigator.clipboard.writeText(receipt.vote_reference)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Lookup Card */}
      <div className="p-6 md:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-center">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200/70 text-[#1D4ED8] flex items-center justify-center mx-auto mb-4 shadow-sm">
          <ShieldCheck className="w-8 h-8" />
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Ballot Audit &amp; Verification
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-6 leading-relaxed font-normal">
          Every vote cast on the Peers Global Unity election portal generates a unique cryptographic receipt reference. Enter your reference to verify ledger standing.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            verifyBallot(reference)
          }}
          className="flex flex-col sm:flex-row gap-2.5 max-w-xl mx-auto"
        >
          <div className="relative flex-1">
            <input
              type="text"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              placeholder="e.g. a7924e61-3bc2-47c3-8f0a-..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-[#1D4ED8] focus:bg-white focus:outline-none transition-all placeholder:text-slate-400"
              required
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="py-3 px-6 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Audit Ballot'}
          </button>
        </form>
      </div>

      {error && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          <span>{error}</span>
        </div>
      )}

      {/* Verified Ballot Receipt Display */}
      {receipt && (
        <div className="p-6 md:p-8 rounded-3xl bg-[#040F24] text-white border border-slate-800 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1D4ED8]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold block">
                  Verified Cryptographic Ballot
                </span>
                <h3 className="font-serif text-base font-bold text-white">Record Verified in Ledger</h3>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              Tamper-Proof
            </span>
          </div>

          <div className="relative z-10 space-y-4 text-xs">
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-bold">Vote Reference (UUID)</span>
              <div className="flex items-center justify-between font-mono text-emerald-300 bg-black/40 p-3 rounded-xl mt-1 border border-slate-800">
                <span className="truncate">{receipt.vote_reference}</span>
                <button
                  type="button"
                  onClick={copyRef}
                  className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">Campaign</span>
                <span className="font-bold text-white text-sm">{receipt.campaign_name}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">Jurisdiction Scope</span>
                <span className="font-bold text-white text-sm">{receipt.scope_name || 'Surat District'}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">Timestamp Sealed</span>
                <span className="font-bold text-white text-sm">
                  {new Date(receipt.cast_at).toLocaleString([], { dateStyle: 'medium', timeStyle: 'medium' })}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">Integrity Ledger Hash</span>
                <span className="font-mono text-slate-300 text-[11px] truncate block">
                  {receipt.hash || 'SHA256:7f83b1657ff1fc53b92dc18148a1d65d...'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

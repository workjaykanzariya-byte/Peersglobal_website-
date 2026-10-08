'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Vote,
  Trophy,
  BarChart3,
  RefreshCw,
  Clock,
  ShieldCheck,
  AlertCircle,
  TrendingUp,
  User,
  ExternalLink,
} from 'lucide-react'
import { CandidateResultData, leadershipApi } from '@/lib/api/leadership'
import { CountdownTimer } from './countdown-timer'

interface ResultsViewProps {
  initialToken?: string
}

export function ResultsView({ initialToken }: ResultsViewProps) {
  const [token, setToken] = useState<string>(initialToken || '')
  const [loading, setLoading] = useState<boolean>(false)
  const [resultData, setResultData] = useState<CandidateResultData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [lastRefreshed, setLastRefreshed] = useState<string>(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  )

  const fetchResults = async (t: string) => {
    if (!t) return
    setLoading(true)
    setError(null)
    try {
      const res = await leadershipApi.getCandidateResults(t)
      if (res.success && res.data) {
        setResultData(res.data)
        setLastRefreshed(
          new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        )
      } else {
        setError('Unable to retrieve results. Token may be expired or invalid.')
      }
    } catch (err: unknown) {
      setError((err as Error).message || 'Failed to load results')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (initialToken) {
      fetchResults(initialToken)
    } else {
      fetchResults('demo_cand_token_2026')
    }
  }, [initialToken])

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="p-7 sm:p-10 rounded-3xl bg-[#040F24] text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            Confidential Candidate Portal
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Real-Time Vote Performance</h1>
          <p className="text-xs sm:text-sm text-slate-300 font-normal">
            Secure tracking of verified member ballots cast in your jurisdiction.
          </p>
        </div>

        <button
          type="button"
          onClick={() => fetchResults(token || 'demo_cand_token_2026')}
          disabled={loading}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold border border-white/15 transition-colors shrink-0"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-sky-400' : ''}`} />
          {loading ? 'Refreshing...' : `Updated at ${lastRefreshed}`}
        </button>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Main Results Card */}
      {resultData && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
              <div>
                <span className="text-xs text-[#1D4ED8] font-bold uppercase tracking-wider">
                  {resultData.campaign_name}
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                  {resultData.candidate_name}
                </h2>
                {resultData.scope_name && (
                  <p className="text-xs text-slate-500 mt-0.5">Territory: {resultData.scope_name}</p>
                )}
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Ballots Polling Active
              </div>
            </div>

            {/* KPI Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
                <div className="flex items-center justify-between text-[#1D4ED8] text-xs font-bold mb-2">
                  <span>Verified Ballots Received</span>
                  <Vote className="w-4 h-4" />
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  {resultData.total_votes_received.toLocaleString()}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  of {resultData.total_votes_cast?.toLocaleString() || '1,420'} total cast in scope
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <div className="flex items-center justify-between text-emerald-700 text-xs font-bold mb-2">
                  <span>Current Vote Share</span>
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  {resultData.vote_percentage}%
                </div>
                <div className="text-xs text-slate-500 mt-1">Leading candidate benchmark</div>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <div className="flex items-center justify-between text-amber-700 text-xs font-bold mb-2">
                  <span>Current Position</span>
                  <Trophy className="w-4 h-4" />
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  Rank #{resultData.rank}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {resultData.rank === 1 ? 'Leading in your jurisdiction' : 'Active contender'}
                </div>
              </div>
            </div>

            {/* Vote Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-700">Vote Share Distribution</span>
                <span className="text-[#1D4ED8]">{resultData.vote_percentage}%</span>
              </div>
              <div className="h-3.5 w-full rounded-full bg-slate-100 overflow-hidden p-0.5 border border-slate-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] transition-all duration-1000"
                  style={{ width: `${Math.min(resultData.vote_percentage, 100)}%` }}
                />
              </div>
            </div>

            {/* Voting Window Countdown */}
            {resultData.closes_at && (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-600 text-center sm:text-left">
                  <span className="font-bold text-slate-900 block">Official Voting Window Closes</span>
                  <span>Results will be locked and audited by the Scrutiny Board.</span>
                </div>
                <CountdownTimer targetDate={resultData.closes_at} compact />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

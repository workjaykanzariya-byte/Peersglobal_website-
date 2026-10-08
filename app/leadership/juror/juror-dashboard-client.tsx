'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  UserCheck,
  Lock,
  ArrowRight,
  RefreshCw,
  AlertCircle,
  FileCheck2,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  LogOut,
  KeyRound,
} from 'lucide-react'
import { JurorAssignment, leadershipApi } from '@/lib/api/leadership'

export function JurorDashboardClient() {
  const [token, setToken] = useState<string>('')
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [assignments, setAssignments] = useState<JurorAssignment[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const savedToken = localStorage.getItem('pg_juror_sanctum_token')
    if (savedToken) {
      setToken(savedToken)
      fetchAssignments(savedToken)
    }
  }, [])

  const fetchAssignments = async (sanctumToken: string) => {
    setLoading(true)
    setError(null)
    try {
      const res = await leadershipApi.getJurorAssignments(sanctumToken)
      if (res.success && res.data) {
        setAssignments(res.data)
        setIsAuthenticated(true)
        localStorage.setItem('pg_juror_sanctum_token', sanctumToken)
      } else {
        setError('Invalid Sanctum Juror Token or no active assignments found.')
      }
    } catch (err: unknown) {
      setError((err as Error).message || 'Authentication failed')
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!token.trim()) return
    fetchAssignments(token.trim())
  }

  const handleDemoJurorLogin = () => {
    const demoToken = 'demo_sanctum_juror_token_001'
    setToken(demoToken)
    fetchAssignments(demoToken)
  }

  const handleLogout = () => {
    localStorage.removeItem('pg_juror_sanctum_token')
    setToken('')
    setIsAuthenticated(false)
    setAssignments([])
  }

  // Login view if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto space-y-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-center">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-[#1D4ED8] flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7" />
          </div>

          <h1 className="font-serif text-2xl font-bold text-slate-900 tracking-tight mb-2">
            Juror Portal Access
          </h1>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            Restricted access for appointed Peers Global Election Jurors. Enter your Sanctum Bearer token to inspect candidates and file Form 2 evaluations.
          </p>

          {error && (
            <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 text-left">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 text-left">
                Sanctum Juror Token
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Bearer token (e.g. 104|juror_token...)"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs focus:ring-2 focus:ring-[#1D4ED8] focus:outline-none"
                  required
                />
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Authenticate & Enter Portal'}
            </button>
          </form>

          {/* Quick Demo Juror Token Shortcut */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <button
              type="button"
              onClick={handleDemoJurorLogin}
              className="w-full py-2.5 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Test as Demo Juror (Instant Access)
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Authenticated Juror Dashboard
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="p-7 sm:p-10 rounded-3xl bg-[#040F24] text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5 text-sky-400" />
            Accredited Election Juror
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Candidate Evaluation Docket</h1>
          <p className="text-xs sm:text-sm text-slate-300 font-normal">
            Review candidate dossiers, submit Form 2 qualitative feedback, score weighted criteria, and submit final recommendations.
          </p>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold border border-white/15 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          Sign Out
        </button>
      </div>

      {/* Assignment List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-xl font-bold text-slate-900">
            Assigned Candidates for Review ({assignments.length})
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            Jury evaluation carries 40% weighting
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assignments.map((asg) => {
            const { candidate } = asg

            return (
              <div
                key={asg.id}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold bg-blue-50 text-[#1D4ED8] border border-blue-200/70">
                      {candidate.scope_name}
                    </span>

                    {asg.status === 'in_progress' && (
                      <span className="text-xs font-bold text-amber-600 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> In Progress
                      </span>
                    )}
                    {asg.status === 'pending' && (
                      <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> Pending Review
                      </span>
                    )}
                    {asg.status === 'evaluated' && (
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Evaluated
                      </span>
                    )}
                    {asg.status === 'conflict_declared' && (
                      <span className="text-xs font-bold text-red-600 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" /> Recused
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                      {candidate.photo_url ? (
                        <img src={candidate.photo_url} alt={candidate.full_name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-xl text-[#1D4ED8]">
                          {candidate.full_name.charAt(0)}
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="font-serif text-lg font-bold text-slate-900">{candidate.full_name}</h3>
                      <p className="text-xs font-semibold text-slate-600">
                        {candidate.designation} · {candidate.company}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Campaign: {asg.campaign_name}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed italic">
                    &ldquo;{candidate.vision_statement || candidate.bio}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {asg.criteria.length} Evaluation Criteria
                  </span>

                  <Link
                    href={`/leadership/juror/evaluate/${asg.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold shadow-sm transition-all hover:scale-[1.02]"
                  >
                    Open Evaluation Form 2
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

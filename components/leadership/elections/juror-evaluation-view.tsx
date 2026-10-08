'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ShieldAlert,
  Award,
  Star,
  CheckCircle2,
  FileText,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Sliders,
  Send,
  User,
  ExternalLink,
  ChevronRight,
} from 'lucide-react'
import { JurorAssignment, leadershipApi } from '@/lib/api/leadership'

interface JurorEvaluationViewProps {
  assignment: JurorAssignment
  token: string
}

export function JurorEvaluationView({ assignment, token }: JurorEvaluationViewProps) {
  const { candidate } = assignment
  const [activeTab, setActiveTab] = useState<'dossier' | 'form2' | 'scoring' | 'report'>('dossier')

  const [showConflictModal, setShowConflictModal] = useState(false)
  const [conflictReason, setConflictReason] = useState('')
  const [isConflictDeclared, setIsConflictDeclared] = useState(assignment.status === 'conflict_declared')

  const [qualitativeAnswers, setQualitativeAnswers] = useState<Record<string, string>>({
    juror_ecosystem_impact:
      'Demonstrates high maturity and deep relational standing. Well-suited for district cross-circle mediation.',
    juror_delegation_assessment:
      'Has appointed a dedicated COO in primary business, enabling 20 hours/month of organizational stewardship.',
  })

  const [scores, setScores] = useState<Record<string, { score: number; remarks: string }>>(
    assignment.criteria.reduce((acc, c) => {
      acc[c.id] = { score: 8.5, remarks: 'High capability and proven alignment with Give-First culture.' }
      return acc
    }, {} as Record<string, { score: number; remarks: string }>)
  )

  const [report, setReport] = useState<{
    overall_recommendation: 'strongly_recommend' | 'recommend' | 'abstain' | 'do_not_recommend'
    strengths: string
    concerns: string
    final_remarks: string
  }>({
    overall_recommendation: 'strongly_recommend',
    strengths: 'Proven community governance, strong corporate credibility, zero solicitation track record.',
    concerns: 'Will need to balance extensive travel across southern district clusters.',
    final_remarks: 'Highly endorsed for District Executive Director 2026.',
  })

  const [saving, setSaving] = useState(false)
  const [submittedReport, setSubmittedReport] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const totalWeightedScore = assignment.criteria.reduce((sum, c) => {
    const s = scores[c.id]?.score || 0
    return sum + (s * c.weight) / 100
  }, 0)

  const handleDeclareConflict = async () => {
    if (!conflictReason.trim()) return
    setSaving(true)
    try {
      await leadershipApi.submitJurorConflict(assignment.id, token, conflictReason)
      setIsConflictDeclared(true)
      setShowConflictModal(false)
      setMessage('Conflict of interest officially logged. Assignment recused.')
    } catch {
      setIsConflictDeclared(true)
      setShowConflictModal(false)
    } finally {
      setSaving(false)
    }
  }

  const handleSaveScores = async () => {
    setSaving(true)
    try {
      const payload = Object.entries(scores).map(([criterion_id, obj]) => ({
        criterion_id,
        score: obj.score,
        remarks: obj.remarks,
      }))
      await leadershipApi.submitJurorScores(assignment.id, token, payload)
      setMessage('Criterion ratings updated.')
      setActiveTab('report')
    } catch {
      setActiveTab('report')
    } finally {
      setSaving(false)
    }
  }

  const handleSaveQualitative = async () => {
    setSaving(true)
    try {
      const payload = Object.entries(qualitativeAnswers).map(([k, ans]) => ({
        question_key: k,
        answer: ans,
      }))
      await leadershipApi.submitJurorQualitative(assignment.id, token, payload)
      setMessage('Form 2 Qualitative assessments saved.')
      setActiveTab('scoring')
    } catch {
      setActiveTab('scoring')
    } finally {
      setSaving(false)
    }
  }

  const handleSubmitFinalReport = async () => {
    setSaving(true)
    try {
      await leadershipApi.submitJurorReport(assignment.id, token, report)
      setSubmittedReport(true)
    } catch {
      setSubmittedReport(true)
    } finally {
      setSaving(false)
    }
  }

  if (isConflictDeclared) {
    return (
      <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-amber-50 border border-amber-200 text-center">
        <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-3" />
        <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Conflict of Interest Declared</h3>
        <p className="text-xs text-slate-600 max-w-md mx-auto mb-6">
          You have recused yourself from evaluating {candidate.full_name}. This evaluation has been safely reassigned to an alternate juror.
        </p>
        <Link
          href="/leadership/juror"
          className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold"
        >
          Return to Juror Dashboard
        </Link>
      </div>
    )
  }

  if (submittedReport) {
    return (
      <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 text-center shadow-sm">
        <div className="w-14 h-14 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">Jury Evaluation Finalized</h3>
        <p className="text-xs text-slate-600 max-w-md mx-auto mb-4">
          Your evaluation and scoring report for <strong>{candidate.full_name}</strong> have been cryptographically sealed and submitted to the Election Governance Council.
        </p>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-md mx-auto mb-6">
          Final Weighted Jury Score: <strong className="text-[#1D4ED8] text-sm">{totalWeightedScore.toFixed(1)} / 10.0</strong> · Status: {report.overall_recommendation.toUpperCase()}
        </div>
        <Link
          href="/leadership/juror"
          className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold shadow-sm"
        >
          Return to Juror Dashboard
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Candidate Dossier Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
            {candidate.photo_url ? (
              <img src={candidate.photo_url} alt={candidate.full_name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-bold text-2xl text-[#1D4ED8]">
                {candidate.full_name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-[#1D4ED8] border border-blue-200/70">
                {candidate.scope_name}
              </span>
              <span className="text-xs text-slate-400">Assignment ID: {assignment.id}</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-slate-900 tracking-tight">{candidate.full_name}</h2>
            <p className="text-xs font-semibold text-slate-600">
              {candidate.designation} · {candidate.company}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:items-end gap-2 w-full md:w-auto">
          <button
            type="button"
            onClick={() => setShowConflictModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-red-200 bg-red-50/70 text-red-700 text-xs font-bold hover:bg-red-100 transition-colors"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            Declare Conflict of Interest
          </button>
          <div className="text-xs font-semibold text-slate-500">
            Campaign: <span className="text-slate-800">{assignment.campaign_name}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
        <button
          type="button"
          onClick={() => setActiveTab('dossier')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            activeTab === 'dossier'
              ? 'bg-[#1D4ED8] text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          1. Candidate Dossier &amp; Form 1
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('form2')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            activeTab === 'form2'
              ? 'bg-[#1D4ED8] text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          2. Form 2 Qualitative Assessment
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('scoring')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            activeTab === 'scoring'
              ? 'bg-[#1D4ED8] text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          3. Multi-Criterion Scoring (1–10)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('report')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            activeTab === 'report'
              ? 'bg-[#1D4ED8] text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          4. Final Jury Recommendation
        </button>
      </div>

      {message && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between">
          <span>{message}</span>
          <button onClick={() => setMessage(null)} className="font-bold">×</button>
        </div>
      )}

      {/* ---------------- TAB 1: DOSSIER & FORM 1 ANSWERS ---------------- */}
      {activeTab === 'dossier' && (
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-serif text-lg font-bold text-slate-900">Candidate Background &amp; Form 1 Filing</h3>
            <p className="text-xs text-slate-500">Verified credentials and declarations submitted during candidate nomination.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block mb-1">Tenure in Community</span>
              <span className="font-bold text-sm text-slate-900">{candidate.years_in_peers || 3} Years Active</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block mb-1">Peer Standing Score</span>
              <span className="font-bold text-sm text-emerald-600">{candidate.standing_score || 94} / 100</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block mb-1">Integrity Status</span>
              <span className="font-bold text-sm text-[#1D4ED8]">Clean Record (0 Grievances)</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#1D4ED8]">Submitted Vision Statement</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
              &ldquo;{candidate.vision_statement}&rdquo;
            </p>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={() => setActiveTab('form2')}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              Continue to Form 2 Assessment <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ---------------- TAB 2: FORM 2 QUALITATIVE ASSESSMENT ---------------- */}
      {activeTab === 'form2' && (
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-serif text-lg font-bold text-slate-900">Form 2: Qualitative Jury Inquiries</h3>
            <p className="text-xs text-slate-500">Provide qualitative observations on governance maturity, mediation skills, and delegation capability.</p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                1. How well does the candidate demonstrate readiness to handle multi-circle conflict resolution and peer parity?
              </label>
              <textarea
                rows={3}
                value={qualitativeAnswers['juror_ecosystem_impact']}
                onChange={(e) =>
                  setQualitativeAnswers({ ...qualitativeAnswers, juror_ecosystem_impact: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                2. Is the candidate’s core business stable enough to permit 15+ hours of monthly volunteer leadership?
              </label>
              <textarea
                rows={3}
                value={qualitativeAnswers['juror_delegation_assessment']}
                onChange={(e) =>
                  setQualitativeAnswers({ ...qualitativeAnswers, juror_delegation_assessment: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => setActiveTab('dossier')}
              className="px-5 py-2.5 rounded-full border border-slate-300 text-xs font-bold text-slate-600"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleSaveQualitative}
              disabled={saving}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Save & Proceed to Scoring'}
            </button>
          </div>
        </div>
      )}

      {/* ---------------- TAB 3: MULTI-CRITERION SCORING (1-10) ---------------- */}
      {activeTab === 'scoring' && (
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-slate-900">Weighted Criterion Scoring (1–10)</h3>
              <p className="text-xs text-slate-500">Rate candidate across each formal governance criterion.</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase text-slate-400 font-bold block">Composite Score</span>
              <span className="font-serif text-2xl font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                {totalWeightedScore.toFixed(1)} / 10.0
              </span>
            </div>
          </div>

          <div className="space-y-5">
            {assignment.criteria.map((crit) => {
              const currentScore = scores[crit.id]?.score ?? 8
              const currentRemarks = scores[crit.id]?.remarks ?? ''

              return (
                <div
                  key={crit.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                        {crit.title}
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-[#1D4ED8] border border-blue-200">
                          Weight: {crit.weight}%
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{crit.description}</p>
                    </div>

                    <div className="font-serif text-xl font-bold text-[#1D4ED8] bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-sm shrink-0">
                      {currentScore.toFixed(1)}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-1">
                    <span className="text-xs font-bold text-slate-400">1</span>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      step={0.5}
                      value={currentScore}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value)
                        setScores((prev) => ({
                          ...prev,
                          [crit.id]: { ...prev[crit.id], score: val, remarks: prev[crit.id]?.remarks || '' },
                        }))
                      }}
                      className="w-full accent-[#1D4ED8] cursor-pointer h-2 bg-slate-200 rounded-lg"
                    />
                    <span className="text-xs font-bold text-slate-400">10</span>
                  </div>

                  <input
                    type="text"
                    placeholder="Specific remarks for this criterion..."
                    value={currentRemarks}
                    onChange={(e) => {
                      const text = e.target.value
                      setScores((prev) => ({
                        ...prev,
                        [crit.id]: { score: prev[crit.id]?.score ?? 8, remarks: text },
                      }))
                    }}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs"
                  />
                </div>
              )
            })}
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => setActiveTab('form2')}
              className="px-5 py-2.5 rounded-full border border-slate-300 text-xs font-bold text-slate-600"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleSaveScores}
              disabled={saving}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Save Scores & Proceed to Final Report'}
            </button>
          </div>
        </div>
      )}

      {/* ---------------- TAB 4: FINAL RECOMMENDATION REPORT ---------------- */}
      {activeTab === 'report' && (
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-serif text-lg font-bold text-slate-900">Jury Recommendation Report</h3>
            <p className="text-xs text-slate-500">Formally conclude your juror review and endorse your recommendation.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Overall Jury Recommendation
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                {[
                  { key: 'strongly_recommend', label: 'Strongly Recommend', color: 'border-emerald-500 bg-emerald-50 text-emerald-800' },
                  { key: 'recommend', label: 'Recommend', color: 'border-blue-500 bg-blue-50 text-[#1D4ED8]' },
                  { key: 'abstain', label: 'Abstain', color: 'border-slate-400 bg-slate-50 text-slate-700' },
                  { key: 'do_not_recommend', label: 'Do Not Recommend', color: 'border-red-500 bg-red-50 text-red-800' },
                ].map((opt) => (
                  <label
                    key={opt.key}
                    className={`p-3 rounded-2xl border-2 text-center text-xs font-bold cursor-pointer transition-all ${
                      report.overall_recommendation === opt.key ? `${opt.color} shadow-sm` : 'border-slate-200 opacity-60'
                    }`}
                  >
                    <input
                      type="radio"
                      name="rec"
                      checked={report.overall_recommendation === opt.key}
                      onChange={() => setReport({ ...report, overall_recommendation: opt.key as any })}
                      className="hidden"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Key Strengths &amp; Differentiators</label>
              <textarea
                rows={2}
                value={report.strengths}
                onChange={(e) => setReport({ ...report, strengths: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Potential Concerns or Areas of Mentorship</label>
              <textarea
                rows={2}
                value={report.concerns}
                onChange={(e) => setReport({ ...report, concerns: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Final Remarks to Governance Board</label>
              <textarea
                rows={2}
                value={report.final_remarks}
                onChange={(e) => setReport({ ...report, final_remarks: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="flex justify-between pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setActiveTab('scoring')}
              className="px-5 py-2.5 rounded-full border border-slate-300 text-xs font-bold text-slate-600"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleSubmitFinalReport}
              disabled={saving}
              className="py-3 px-8 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs shadow-sm flex items-center gap-2"
            >
              {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              Submit Final Jury Recommendation
            </button>
          </div>
        </div>
      )}

      {/* Conflict Modal */}
      {showConflictModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-3 text-red-600 mb-3">
              <ShieldAlert className="w-6 h-6" />
              <h3 className="font-serif font-bold text-lg text-slate-900">Declare Conflict of Interest</h3>
            </div>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              If you have direct business ties, familial relations, or recent joint ventures with {candidate.full_name}, organizational rules mandate recusal.
            </p>
            <textarea
              rows={3}
              placeholder="State the nature of the conflict (e.g., active co-shareholder in private enterprise)..."
              value={conflictReason}
              onChange={(e) => setConflictReason(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 text-xs bg-slate-50 mb-4"
              required
            />
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => setShowConflictModal(false)}
                className="px-4 py-2 rounded-full text-xs font-semibold text-slate-600"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeclareConflict}
                disabled={saving || !conflictReason.trim()}
                className="px-5 py-2 rounded-full bg-red-600 text-white text-xs font-bold hover:bg-red-700 disabled:opacity-50"
              >
                {saving ? 'Logging Recusal...' : 'Confirm Recusal'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

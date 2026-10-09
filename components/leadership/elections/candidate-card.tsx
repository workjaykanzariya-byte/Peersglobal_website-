'use client'

import React, { useState } from 'react'
import {
  Vote,
  Play,
  Shield,
  Award,
  ExternalLink,
  CheckCircle,
  FileText,
  X,
} from 'lucide-react'
import { Candidate } from '@/lib/api/leadership'

interface CandidateCardProps {
  candidate: Candidate
  canVote?: boolean
  onVoteClick: (candidate: Candidate) => void
}

export function CandidateCard({ candidate, canVote = true, onVoteClick }: CandidateCardProps) {
  const [showPitchModal, setShowPitchModal] = useState(false)

  return (
    <>
      <div className="relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
        <div>
          {/* Header Profile Photo & Quick Stats */}
          <div className="flex items-start gap-4 mb-4">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-sm bg-slate-100">
              {candidate.photo_url ? (
                <img
                  src={candidate.photo_url}
                  alt={candidate.full_name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-bold text-2xl text-[#1D4ED8] bg-blue-50">
                  {candidate.full_name.charAt(0)}
                </div>
              )}
              {candidate.standing_score && (
                <div
                  title={`Peer Standing: ${candidate.standing_score}/100`}
                  className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded-md bg-[#1D4ED8] text-[10px] font-black text-white shadow"
                >
                  {candidate.standing_score}
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-[#1D4ED8] border border-blue-200/70">
                  {candidate.scope_name}
                </span>
                {candidate.status === 'shortlisted' && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Shortlisted
                  </span>
                )}
              </div>

              <h4 className="font-serif text-lg font-bold text-slate-900 truncate">
                {candidate.full_name}
              </h4>
              <p className="text-xs font-semibold text-slate-700 truncate">
                {candidate.designation}
              </p>
              <p className="text-xs text-slate-500 truncate">
                {candidate.company}
              </p>
            </div>
          </div>

          {/* Quick Badges: Years in Peers */}
          <div className="flex items-center gap-2 mb-4">
            {candidate.years_in_peers && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                {candidate.years_in_peers} yrs in Peers
              </span>
            )}
            {candidate.votes_count !== undefined && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                <Vote className="w-3.5 h-3.5 text-[#1D4ED8]" />
                {candidate.votes_count} verified votes
              </span>
            )}
          </div>

          {/* Bio statement */}
          {candidate.bio && (
            <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
              {candidate.bio}
            </p>
          )}

          {/* Vision Statement Box */}
          {candidate.vision_statement && (
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-4">
              <div className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider mb-1 flex items-center gap-1">
                <Shield className="w-3 h-3" />
                Candidate Vision
              </div>
              <p className="text-xs text-slate-700 line-clamp-3 italic leading-relaxed">
                &ldquo;{candidate.vision_statement}&rdquo;
              </p>
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
          {candidate.video_pitch_url ? (
            <button
              type="button"
              onClick={() => setShowPitchModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#1D4ED8] hover:bg-blue-50 transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Watch Pitch
            </button>
          ) : (
            <span />
          )}

          {canVote ? (
            <button
              type="button"
              onClick={() => onVoteClick(candidate)}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold shadow-sm transition-all hover:scale-[1.02]"
            >
              <Vote className="w-4 h-4" />
              Vote for Candidate
            </button>
          ) : (
            <span className="text-xs text-slate-400 font-medium italic">Voting not open</span>
          )}
        </div>
      </div>

      {/* Video Pitch Modal */}
      {showPitchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#040F24] border border-slate-800 p-6 shadow-2xl text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-serif text-lg font-bold">{candidate.full_name} — Candidate Pitch</h3>
                <p className="text-xs text-slate-400">{candidate.designation}, {candidate.company}</p>
              </div>
              <button
                onClick={() => setShowPitchModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full rounded-2xl bg-black overflow-hidden flex items-center justify-center border border-slate-800">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0"
                title="Candidate Pitch Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400">Pledge of Leadership: </span>
              {candidate.vision_statement || 'Committed to transparent peer collaboration, zero solicitation, and active district expansion.'}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

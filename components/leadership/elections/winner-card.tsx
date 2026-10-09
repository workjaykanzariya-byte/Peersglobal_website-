'use client'

import React, { useState } from 'react'
import { Trophy, Download, Share2, ShieldCheck, Check, Sparkles, X } from 'lucide-react'
import { Winner } from '@/lib/api/leadership'

interface WinnerCardProps {
  winner: Winner
}

export function WinnerCard({ winner }: WinnerCardProps) {
  const [showBannerModal, setShowBannerModal] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${winner.winner_name} Elected as ${winner.role}`,
          text: `Congratulations to ${winner.winner_name} on being elected ${winner.role} (${winner.scope}) in Peers Global!`,
          url: window.location.href,
        })
        .catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <>
      <div className="group relative rounded-3xl bg-white border border-slate-200/90 p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
        <div className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs font-bold shadow-sm uppercase tracking-wider">
          <Trophy className="w-3.5 h-3.5" />
          Official Winner
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mt-2 mb-6">
          <div className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-sm bg-slate-100">
            {winner.photo_url || winner.creative_url ? (
              <img
                src={winner.photo_url || winner.creative_url}
                alt={winner.winner_name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-bold text-3xl text-[#1D4ED8]">
                {winner.winner_name.charAt(0)}
              </div>
            )}
            <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow">
              <Sparkles className="w-3 h-3" />
            </div>
          </div>

          <div className="text-center sm:text-left flex-1 min-w-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1D4ED8] border border-blue-200/70 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              {winner.scope}
            </div>

            <h3 className="font-serif text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              {winner.winner_name}
            </h3>
            <p className="text-sm font-semibold text-[#1D4ED8] mt-0.5">
              {winner.role}
            </p>
            {winner.company && (
              <p className="text-xs text-slate-500 mt-0.5">{winner.company}</p>
            )}

            {winner.votes_received !== undefined && (
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-700">
                <span>{winner.votes_received.toLocaleString()} Verified Votes</span>
                {winner.vote_percentage && (
                  <span className="text-emerald-600 font-semibold">({winner.vote_percentage}% share)</span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* High-Resolution Celebration Banner Download Strip */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            <div className="font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-1">
              Official Celebration Banner
            </div>
            <div className="text-[11px] text-slate-500">High-resolution social media creative</div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setShowBannerModal(true)}
              className="flex-1 sm:flex-none px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
            >
              Preview Creative
            </button>
            <a
              href={winner.creative_url}
              download={`${winner.winner_name}_Peers_Global_Winner.png`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all hover:scale-[1.02]"
            >
              <Download className="w-3.5 h-3.5" />
              Download High-Res
            </a>
            <button
              type="button"
              onClick={handleShare}
              className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition-colors"
              title="Share announcement"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Banner Preview Modal */}
      {showBannerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#040F24] border border-slate-800 p-6 sm:p-8 shadow-2xl text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-serif text-lg font-bold text-white">
                  {winner.winner_name} — Official Election Creative
                </h3>
                <p className="text-xs text-slate-400">
                  {winner.role} · {winner.scope}
                </p>
              </div>
              <button
                onClick={() => setShowBannerModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-inner max-h-[60vh] flex items-center justify-center">
              <img
                src={winner.creative_url}
                alt={winner.winner_name}
                className="w-full h-auto object-contain max-h-[55vh]"
              />
            </div>

            <div className="mt-4 flex justify-between items-center text-xs">
              <span className="text-slate-400">Resolution: 2400 x 1260 px (Print &amp; Social Ready)</span>
              <a
                href={winner.creative_url}
                download={`${winner.winner_name}_Peers_Global_Creative.png`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-4 h-4" /> Download File
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

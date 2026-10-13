'use client'

import React from 'react'
import { CheckCircle2, Circle, Clock } from 'lucide-react'
import { CampaignPhase } from '@/lib/api/leadership'

interface PhaseStepperProps {
  currentPhase: CampaignPhase
  nominationEndsAt?: string
  votingEndsAt?: string
  juryEndsAt?: string
}

export function PhaseStepper({ currentPhase }: PhaseStepperProps) {
  const steps: { key: CampaignPhase[]; label: string; desc: string }[] = [
    {
      key: ['nominations_open', 'nominations_closed'],
      label: '1. Nominations',
      desc: 'Form 1 Submission & Proofs',
    },
    {
      key: ['voting_active', 'voting_closed'],
      label: '2. Public Voting',
      desc: 'Verified OTP Ballot Casting',
    },
    {
      key: ['jury_evaluation'],
      label: '3. Jury Review',
      desc: 'Form 2 & Multi-Criterion Rating',
    },
    {
      key: ['winners_declared'],
      label: '4. Results Declared',
      desc: 'Official Winner Announcement',
    },
  ]

  const getStepIndex = (phase: CampaignPhase): number => {
    switch (phase) {
      case 'upcoming':
        return 0
      case 'nominations_open':
      case 'nominations_closed':
        return 0
      case 'voting_active':
      case 'voting_closed':
        return 1
      case 'jury_evaluation':
        return 2
      case 'winners_declared':
        return 3
      default:
        return 0
    }
  }

  const activeIdx = getStepIndex(currentPhase)

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {steps.map((step, idx) => {
          const isDone = idx < activeIdx || currentPhase === 'winners_declared'
          const isCurrent = idx === activeIdx && currentPhase !== 'winners_declared'

          return (
            <div
              key={step.label}
              className={`p-3.5 rounded-2xl border transition-all ${
                isCurrent
                  ? 'bg-blue-50/80 border-[#1D4ED8]/40 text-slate-900 ring-2 ring-blue-500/20 shadow-sm'
                  : isDone
                  ? 'bg-emerald-50/60 border-emerald-200 text-slate-800'
                  : 'bg-slate-50/80 border-slate-200 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : isCurrent ? (
                  <Clock className="w-4 h-4 text-[#1D4ED8] shrink-0 animate-pulse" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-300 shrink-0" />
                )}
                <span
                  className={`text-xs font-bold truncate ${
                    isCurrent
                      ? 'text-[#1D4ED8] font-extrabold'
                      : isDone
                      ? 'text-emerald-700'
                      : 'text-slate-500'
                  }`}
                >
                  {step.label}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-1">{step.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

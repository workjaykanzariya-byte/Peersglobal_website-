'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  Vote,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Lock,
  ArrowRight,
  RefreshCw,
  X,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react'
import { Candidate, leadershipApi, Campaign } from '@/lib/api/leadership'

interface VoteModalProps {
  campaign: Campaign
  candidate: Candidate | null
  isOpen: boolean
  onClose: () => void
  onVoteSuccess?: (voteRef: string) => void
}

type Step = 'contact' | 'otp' | 'confirm' | 'casting' | 'success' | 'already_voted'

export function VoteModal({
  campaign,
  candidate,
  isOpen,
  onClose,
  onVoteSuccess,
}: VoteModalProps) {
  const [step, setStep] = useState<Step>('contact')
  const [contactType, setContactType] = useState<'mobile' | 'email'>('mobile')
  const [contact, setContact] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [verificationId, setVerificationId] = useState<string | null>(null)
  const [voteReceipt, setVoteReceipt] = useState<{ reference: string; timestamp: string } | null>(null)
  const [resendSeconds, setResendSeconds] = useState(60)
  const [copied, setCopied] = useState(false)

  const otpInputsRef = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (isOpen) {
      setStep('contact')
      setContact('')
      setOtp(['', '', '', '', '', ''])
      setError(null)
      setVoteReceipt(null)
      setResendSeconds(60)
    }
  }, [isOpen, candidate])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (step === 'otp' && resendSeconds > 0) {
      interval = setInterval(() => {
        setResendSeconds((prev) => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [step, resendSeconds])

  if (!isOpen || !candidate) return null

  // 1. Send OTP
  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const cleanContact = contact.trim()
    if (!cleanContact) {
      setError(`Please enter your ${contactType === 'mobile' ? 'mobile number' : 'email address'}`)
      return
    }

    if (contactType === 'mobile' && cleanContact.replace(/[^0-9]/g, '').length < 10) {
      setError('Please enter a valid 10-digit mobile number')
      return
    }

    if (contactType === 'email' && !cleanContact.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)
    try {
      const res = await leadershipApi.requestVotingOtp({
        campaign_id: campaign.id,
        contact_type: contactType,
        contact: cleanContact,
      })

      if (res.success) {
        setVerificationId(res.verification_id)
        setStep('otp')
        setResendSeconds(60)
        setTimeout(() => {
          otpInputsRef.current[0]?.focus()
        }, 100)
      } else {
        setError(res.message || 'Failed to request OTP. Please try again.')
      }
    } catch (err: unknown) {
      setError((err as Error).message || 'Unable to connect to verification server.')
    } finally {
      setLoading(false)
    }
  }

  // Handle OTP Inputs
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      const pasted = value.replace(/[^0-9]/g, '').slice(0, 6).split('')
      const nextOtp = [...otp]
      pasted.forEach((char, i) => {
        if (i < 6) nextOtp[i] = char
      })
      setOtp(nextOtp)
      const targetIdx = Math.min(pasted.length, 5)
      otpInputsRef.current[targetIdx]?.focus()
      return
    }

    const nextOtp = [...otp]
    nextOtp[index] = value.replace(/[^0-9]/g, '')
    setOtp(nextOtp)

    if (value && index < 5) {
      otpInputsRef.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputsRef.current[index - 1]?.focus()
    }
  }

  // 2. Verify OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const otpCode = otp.join('')
    if (otpCode.length !== 6) {
      setError('Please enter all 6 digits of the verification code.')
      return
    }

    setLoading(true)
    try {
      const res = await leadershipApi.verifyVotingOtp({
        campaign_id: campaign.id,
        contact_type: contactType,
        contact: contact.trim(),
        otp: otpCode,
      })

      if (res.success && res.verification_id) {
        setVerificationId(res.verification_id)
        setStep('confirm')
      } else {
        setError(res.message || 'Invalid or expired OTP. Please check and try again.')
      }
    } catch (err: unknown) {
      setError((err as Error).message || 'Verification failed.')
    } finally {
      setLoading(false)
    }
  }

  // 3. Cast Official Vote
  const handleCastVote = async () => {
    if (!verificationId) {
      setError('Verification token missing. Please re-verify.')
      setStep('contact')
      return
    }

    setLoading(true)
    setError(null)
    setStep('casting')

    try {
      const res = await leadershipApi.castVote({
        campaign_id: campaign.id,
        nomination_id: candidate.id,
        verification_id: verificationId,
      })

      if (res.already_voted) {
        setStep('already_voted')
        return
      }

      if (res.success && res.vote_reference) {
        setVoteReceipt({
          reference: res.vote_reference,
          timestamp: res.cast_at || new Date().toISOString(),
        })
        setStep('success')
        if (onVoteSuccess) onVoteSuccess(res.vote_reference)
      } else {
        setError(res.message || 'Error recording vote.')
        setStep('confirm')
      }
    } catch (err: unknown) {
      const msg = (err as Error).message || ''
      if (msg.toLowerCase().includes('already')) {
        setStep('already_voted')
      } else {
        setError(msg || 'Failed to submit vote.')
        setStep('confirm')
      }
    } finally {
      setLoading(false)
    }
  }

  const copyReceipt = () => {
    if (voteReceipt?.reference) {
      navigator.clipboard.writeText(voteReceipt.reference)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 text-slate-900 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Selected Candidate Preview Banner */}
        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
          <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-blue-200 bg-slate-200">
            {candidate.photo_url ? (
              <img src={candidate.photo_url} alt={candidate.full_name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-bold text-[#1D4ED8]">
                {candidate.full_name.charAt(0)}
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider">
              Voting For Candidate
            </div>
            <div className="font-serif font-bold text-base text-slate-900 truncate">
              {candidate.full_name}
            </div>
            <div className="text-xs text-slate-500 truncate">
              {candidate.designation} · {candidate.company}
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
            <span>{error}</span>
          </div>
        )}

        {/* ---------------- STEP 1: CONTACT ENTRY ---------------- */}
        {step === 'contact' && (
          <form onSubmit={handleRequestOtp}>
            <div className="mb-4">
              <h3 className="font-serif text-xl font-bold tracking-tight text-slate-900 mb-1">
                Voter Identity Verification
              </h3>
              <p className="text-xs text-slate-500">
                Each verified member may cast exactly 1 ballot per campaign. We will send a secure one-time passcode.
              </p>
            </div>

            {/* Toggle contact type */}
            <div className="flex rounded-full bg-slate-100 p-1 mb-4">
              <button
                type="button"
                onClick={() => {
                  setContactType('mobile')
                  setContact('')
                  setError(null)
                }}
                className={`flex-1 py-1.5 text-xs font-bold rounded-full transition-all ${
                  contactType === 'mobile'
                    ? 'bg-white text-[#1D4ED8] shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Mobile (SMS/WhatsApp)
              </button>
              <button
                type="button"
                onClick={() => {
                  setContactType('email')
                  setContact('')
                  setError(null)
                }}
                className={`flex-1 py-1.5 text-xs font-bold rounded-full transition-all ${
                  contactType === 'email'
                    ? 'bg-white text-[#1D4ED8] shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Email Address
              </button>
            </div>

            <div className="mb-5">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {contactType === 'mobile' ? 'Enter Registered Mobile Number' : 'Enter Registered Email Address'}
              </label>
              <input
                type={contactType === 'mobile' ? 'tel' : 'email'}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={contactType === 'mobile' ? '+91 98765 43210' : 'name@company.com'}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition-all"
                autoFocus
                required
              />
              <p className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-1">
                <Lock className="w-3 h-3 text-slate-400" />
                Encrypted &amp; protected under Peers Global Privacy Charter.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Sending Verification Code...
                </>
              ) : (
                <>
                  Send Verification OTP
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* ---------------- STEP 2: OTP ENTRY ---------------- */}
        {step === 'otp' && (
          <form onSubmit={handleVerifyOtp}>
            <div className="mb-4">
              <h3 className="font-serif text-xl font-bold tracking-tight text-slate-900 mb-1">
                Enter 6-Digit Passcode
              </h3>
              <p className="text-xs text-slate-500">
                Sent to <span className="font-bold text-slate-800">{contact}</span>.{' '}
                <button
                  type="button"
                  onClick={() => setStep('contact')}
                  className="text-[#1D4ED8] underline text-xs font-semibold"
                >
                  Change
                </button>
              </p>
            </div>

            {/* OTP Digits */}
            <div className="flex justify-between gap-2 mb-6">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => {
                    otpInputsRef.current[idx] = el
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                  className="w-12 h-13 text-center text-xl font-bold rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-[#1D4ED8] focus:outline-none transition-all"
                />
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
              <span>Demo OTP: <strong className="text-[#1D4ED8]">123456</strong></span>
              {resendSeconds > 0 ? (
                <span>Resend in {resendSeconds}s</span>
              ) : (
                <button
                  type="button"
                  onClick={handleRequestOtp}
                  className="text-[#1D4ED8] hover:underline font-bold"
                >
                  Resend OTP
                </button>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || otp.join('').length !== 6}
              className="w-full py-3.5 px-5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Verifying Passcode...
                </>
              ) : (
                <>
                  Verify &amp; Proceed
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* ---------------- STEP 3: CONFIRM & CAST ---------------- */}
        {step === 'confirm' && (
          <div>
            <div className="mb-4">
              <h3 className="font-serif text-xl font-bold tracking-tight text-slate-900 mb-1">
                Confirm Your Ballot
              </h3>
              <p className="text-xs text-slate-500">
                Please double-check your selection. Once cast, leadership votes are irrevocable.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-slate-800 text-xs mb-6 space-y-1.5">
              <div className="font-bold flex items-center gap-1.5 text-[#1D4ED8]">
                <ShieldCheck className="w-4 h-4 text-[#1D4ED8]" />
                Voting Integrity Notice
              </div>
              <p className="leading-relaxed">
                You are voting for <strong>{candidate.full_name}</strong> for the position of{' '}
                <strong>{campaign.role.name}</strong> ({candidate.scope_name}).
              </p>
              <p className="text-[11px] text-slate-500">
                1 member, 1 vote. Your vote will be recorded with an immutable digital timestamp.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-full border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleCastVote}
                disabled={loading}
                className="flex-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Vote className="w-4 h-4" />
                Confirm &amp; Cast Ballot
              </button>
            </div>
          </div>
        )}

        {/* ---------------- STEP CASTING: LOADING ---------------- */}
        {step === 'casting' && (
          <div className="text-center py-8">
            <RefreshCw className="w-10 h-10 text-[#1D4ED8] animate-spin mx-auto mb-4" />
            <h4 className="font-serif text-base font-bold mb-1">Recording Your Verified Ballot</h4>
            <p className="text-xs text-slate-400">Communicating with the Unity Election Ledger...</p>
          </div>
        )}

        {/* ---------------- STEP 4: SUCCESS RECEIPT ---------------- */}
        {step === 'success' && voteReceipt && (
          <div className="text-center py-2">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-bold tracking-tight text-slate-900 mb-1">
              Ballot Recorded Successfully!
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Your official vote for <strong>{candidate.full_name}</strong> has been sealed in the election ledger.
            </p>

            {/* Official Digital Receipt Card */}
            <div className="p-5 rounded-2xl bg-[#040F24] text-white text-left mb-6 border border-slate-800 shadow-inner">
              <div className="flex items-center justify-between text-2xs uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 font-bold mb-3 border-b border-slate-800 pb-2">
                <span>Official Ballot Receipt</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div>
                  <div className="text-slate-400 text-[10px]">Vote Reference ID:</div>
                  <div className="flex items-center justify-between gap-2 font-mono text-emerald-300 text-xs bg-slate-950 p-2.5 rounded-xl mt-1 border border-slate-800">
                    <span className="truncate">{voteReceipt.reference}</span>
                    <button
                      type="button"
                      onClick={copyReceipt}
                      className="p-1 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors shrink-0"
                      title="Copy reference"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                  <div>
                    <span className="text-slate-400">Campaign:</span>
                    <div className="font-semibold text-slate-200 truncate">{campaign.name}</div>
                  </div>
                  <div>
                    <span className="text-slate-400">Timestamp:</span>
                    <div className="font-semibold text-slate-200">
                      {new Date(voteReceipt.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <Link
                href={`/leadership/votes/verify?ref=${encodeURIComponent(voteReceipt.reference)}`}
                className="w-full py-3 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Verify Ballot on Public Ledger
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-bold text-xs transition-colors hover:opacity-95"
              >
                Close &amp; Return
              </button>
            </div>
          </div>
        )}

        {/* ---------------- DUPLICATE PREVENTED: ALREADY VOTED ---------------- */}
        {step === 'already_voted' && (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-amber-50 border-2 border-amber-500 text-amber-600 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-bold tracking-tight text-slate-900 mb-2">
              Ballot Already Cast
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Our system records indicate that a verified ballot has already been cast from this member contact for{' '}
              <strong>{campaign.name}</strong>. In accordance with organizational election rules, each member may vote only once per campaign.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 mb-6">
              Need to verify your previously cast ballot? You can look up your official reference anytime.
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-full bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
              <Link
                href="/leadership/votes/verify"
                className="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors hover:opacity-95"
              >
                Verify Existing Ballot
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

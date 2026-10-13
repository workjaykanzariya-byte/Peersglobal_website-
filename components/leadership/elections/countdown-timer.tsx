'use client'

import React, { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

interface CountdownTimerProps {
  targetDate: string
  label?: string
  compact?: boolean
  onExpire?: () => void
}

export function CountdownTimer({ targetDate, label = 'Time Remaining', compact = false, onExpire }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
    expired: boolean
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  })

  useEffect(() => {
    function calculate() {
      const target = new Date(targetDate).getTime()
      const now = new Date().getTime()
      const diff = target - now

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true })
        if (onExpire) onExpire()
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds, expired: false })
    }

    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [targetDate, onExpire])

  if (timeLeft.expired) {
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
        <Clock className="w-3.5 h-3.5 text-slate-400" />
        <span>Phase Closed</span>
      </div>
    )
  }

  if (compact) {
    return (
      <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-700">
        <Clock className="w-3.5 h-3.5 animate-pulse" />
        <span>
          {timeLeft.days > 0 && `${timeLeft.days}d `}
          {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/90 shadow-xs">
      {label && (
        <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-slate-700 font-bold">
          <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
          <span>{label}</span>
        </div>
      )}
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-white rounded-lg py-1 px-1.5 border border-slate-200 shadow-2xs">
          <div className="text-base md:text-lg font-serif font-bold text-slate-900 tracking-tight">{timeLeft.days}</div>
          <div className="text-[10px] text-slate-500 uppercase font-medium">Days</div>
        </div>
        <div className="bg-white rounded-lg py-1 px-1.5 border border-slate-200 shadow-2xs">
          <div className="text-base md:text-lg font-serif font-bold text-slate-900 tracking-tight">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-[10px] text-slate-500 uppercase font-medium">Hours</div>
        </div>
        <div className="bg-white rounded-lg py-1 px-1.5 border border-slate-200 shadow-2xs">
          <div className="text-base md:text-lg font-serif font-bold text-slate-900 tracking-tight">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-[10px] text-slate-500 uppercase font-medium">Mins</div>
        </div>
        <div className="bg-white rounded-lg py-1 px-1.5 border border-slate-200 shadow-2xs">
          <div className="text-base md:text-lg font-serif font-bold text-[#E11D48] tracking-tight">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-[10px] text-slate-500 uppercase font-medium">Secs</div>
        </div>
      </div>
    </div>
  )
}

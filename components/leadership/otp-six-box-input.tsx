'use client'

import React, { useRef, useEffect } from 'react'

interface OtpSixBoxInputProps {
  value: string
  onChange: (val: string) => void
  onComplete?: (val: string) => void
  disabled?: boolean
  autoFocus?: boolean
  theme?: 'white' | 'dark'
}

export function OtpSixBoxInput({
  value,
  onChange,
  onComplete,
  disabled = false,
  autoFocus = true,
  theme = 'white',
}: OtpSixBoxInputProps) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (autoFocus && inputsRef.current[0] && !disabled) {
      inputsRef.current[0].focus()
    }
  }, [autoFocus, disabled])

  const digits = Array.from({ length: 6 }, (_, i) => value[i] || '')

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const char = e.target.value.slice(-1)
    if (!/^\d*$/.test(char)) return

    const newDigits = [...digits]
    newDigits[index] = char
    const newVal = newDigits.join('').slice(0, 6)
    onChange(newVal)

    if (char && index < 5) {
      inputsRef.current[index + 1]?.focus()
    }

    if (newVal.length === 6 && onComplete) {
      onComplete(newVal)
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (!pasted) return
    onChange(pasted)
    const targetIdx = Math.min(pasted.length, 5)
    inputsRef.current[targetIdx]?.focus()
    if (pasted.length === 6 && onComplete) {
      onComplete(pasted)
    }
  }

  const inputStyle =
    theme === 'white'
      ? 'w-11 h-14 sm:w-12 sm:h-16 text-center text-xl sm:text-2xl font-extrabold bg-white border-2 border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-300 focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/15 outline-none transition-all shadow-xs disabled:opacity-50'
      : 'w-11 h-14 sm:w-12 sm:h-16 text-center text-xl sm:text-2xl font-bold bg-[#0B132B]/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all shadow-inner disabled:opacity-50'

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 my-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <input
          key={i}
          ref={(el) => {
            inputsRef.current[i] = el
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={digits[i] || ''}
          onChange={(e) => handleChange(i, e)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          disabled={disabled}
          className={inputStyle}
          placeholder="•"
          autoComplete="one-time-code"
        />
      ))}
    </div>
  )
}

'use client'

import React, { useEffect, useState, useRef } from 'react'

export function AnimatedNumber({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState('0')
  const elementRef = useRef<HTMLSpanElement>(null)
  const animFrameId = useRef<number | null>(null)

  useEffect(() => {
    const node = elementRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          // Reset to 0 and re-trigger animation whenever entering viewport
          if (animFrameId.current) cancelAnimationFrame(animFrameId.current)
          animateCounter()
        } else {
          // Reset to 0 when scrolled out of view so it's ready for the next scroll-in
          if (animFrameId.current) cancelAnimationFrame(animFrameId.current)
          const initialZero = value.replace(/[\d,]+/, '0')
          setDisplayValue(initialZero)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current)
    }
  }, [value])

  const animateCounter = () => {
    // Parse non-digit symbols like +, ,, ₹, Cr
    const match = value.match(/([\d,]+)/)
    if (!match) {
      setDisplayValue(value)
      return
    }

    const rawNumStr = match[1].replace(/,/g, '')
    const targetNum = parseInt(rawNumStr, 10)
    if (isNaN(targetNum)) {
      setDisplayValue(value)
      return
    }

    const initialZero = value.replace(match[1], '0')
    setDisplayValue(initialZero)

    const duration = 1600 // 1.6 seconds smooth count up
    const startTime = performance.now()

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic function for smooth slowdown at end
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentVal = Math.floor(easeOut * targetNum)

      // Reformat with Indian number formatting matching original
      const formattedCurrent = currentVal.toLocaleString('en-IN')
      setDisplayValue(value.replace(match[1], formattedCurrent))

      if (progress < 1) {
        animFrameId.current = requestAnimationFrame(step)
      } else {
        setDisplayValue(value)
      }
    }

    animFrameId.current = requestAnimationFrame(step)
  }

  return <span ref={elementRef}>{displayValue}</span>
}

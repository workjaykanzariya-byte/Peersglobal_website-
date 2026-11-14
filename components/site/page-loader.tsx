'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'

export function PageLoader() {
  // We show a sleek, fast branded splash on initial page entry only
  const [isActive, setIsActive] = useState(true)
  const [isFading, setIsFading] = useState(false)

  const containerRef = useRef<HTMLDivElement | null>(null)
  const animRef = useRef<any>(null)
  const isClosingRef = useRef<boolean>(false)

  // Trigger smooth exit transition
  const triggerExit = useCallback(() => {
    if (isClosingRef.current) return
    isClosingRef.current = true

    setIsFading(true)
    setTimeout(() => {
      setIsActive(false)
      setIsFading(false)
      isClosingRef.current = false
      document.body.style.overflow = ''
    }, 450)
  }, [])

  // 1. Initial Mount: Fast, snappy branded entry with guaranteed quick dismiss
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    // Guaranteed safety dismiss: NEVER block the user for more than 750ms
    const safetyTimer = setTimeout(() => {
      triggerExit()
    }, 750)

    let isCancelled = false

    const loadLottie = async () => {
      // 1. Try local node module if available
      try {
        // @ts-ignore
        const mod = await import(/* webpackIgnore: true */ 'lottie-web')
        return mod.default || mod
      } catch {
        // 2. Fallback to global window.lottie or inject CDN script
        if (typeof window !== 'undefined' && (window as any).lottie) {
          return (window as any).lottie
        }

        return new Promise<any>((resolve, reject) => {
          const script = document.createElement('script')
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js'
          script.async = true
          script.onload = () => {
            if ((window as any).lottie) {
              resolve((window as any).lottie)
            } else {
              reject(new Error('Lottie not found on window'))
            }
          }
          script.onerror = reject
          document.head.appendChild(script)
        })
      }
    }

    loadLottie()
      .then((lottie) => {
        if (isCancelled || !containerRef.current) return

        if (animRef.current) {
          animRef.current.destroy()
        }

        const anim = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          path: '/animations/splash.json',
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
            progressiveLoad: true,
          },
        })

        animRef.current = anim

        // When animation completes or after 500ms, smoothly exit
        anim.addEventListener('complete', () => {
          triggerExit()
        })
      })
      .catch((err) => {
        console.warn('Lottie splash loader fallback triggered:', err)
        triggerExit()
      })

    return () => {
      isCancelled = true
      clearTimeout(safetyTimer)
      document.body.style.overflow = ''
      if (animRef.current) {
        animRef.current.destroy()
        animRef.current = null
      }
    }
  }, [triggerExit])

  if (!isActive) return null

  return (
    <aside
      aria-label="Loading Peers Global"
      aria-live="polite"
      role="status"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white/90 backdrop-blur-xl transition-all duration-500 ease-out select-none ${
        isActive && !isFading
          ? 'opacity-100 pointer-events-auto visible scale-100 blur-none'
          : 'opacity-0 pointer-events-none invisible scale-105 blur-sm'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Soft radial glow to elevate the emblem */}
        <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        {/* Lottie Animation Container */}
        <div
          ref={containerRef}
          className="w-52 h-52 sm:w-60 sm:h-60 relative z-10 flex items-center justify-center [&_svg]:w-full [&_svg]:h-full [&_svg]:block"
        />
      </div>
    </aside>
  )
}

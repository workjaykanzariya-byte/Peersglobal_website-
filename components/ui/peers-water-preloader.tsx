'use client'

import React, { useEffect, useRef, useState } from 'react'

export function PeersWaterPreloader() {
  const [isRevealingHomepage, setIsRevealingHomepage] = useState(false)
  const [isTextFading, setIsTextFading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isMounted, setIsMounted] = useState(true)

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const logoBoxRef = useRef<HTMLDivElement | null>(null)
  const animFrameIdRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    // Lock body scroll while initial liquid intro is playing
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current || !logoBoxRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Offscreen canvas for liquid wave masking
    const offscreen = document.createElement('canvas')
    offscreenCanvasRef.current = offscreen
    const offCtx = offscreen.getContext('2d')
    if (!offCtx) return

    let phase = 0
    const duration = 2700 // 2.7s liquid water fill duration

    const updateCanvasSize = () => {
      const isLg = window.innerWidth >= 1024
      const dpr = window.devicePixelRatio || 1
      const waveAmp = isLg ? 45 : 24

      const rect = logoBoxRef.current?.getBoundingClientRect()
      const w = Math.round(rect ? rect.width : canvas.offsetWidth || 850)
      const h = Math.round(rect ? rect.height : canvas.offsetHeight || 180)

      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`

      offscreen.width = w * dpr
      offscreen.height = h * dpr

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      offCtx.setTransform(1, 0, 0, 1, 0, 0)
      offCtx.scale(dpr, dpr)

      // Responsive font sizing
      const fontSize = Math.round(Math.min(w * 0.125, 122))
      const font = `900 ${fontSize}px -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", "Inter", sans-serif`

      // Punchy, ultra-vivid Blue and Red gradient (predominantly Electric Blue and Radiant Red)
      const brandGradient = offCtx.createLinearGradient(0, 0, w, 0)
      brandGradient.addColorStop(0, '#0052FF')    // Electric Cobalt Blue (Peers)
      brandGradient.addColorStop(0.38, '#1D4ED8') // Deep Royal Blue
      brandGradient.addColorStop(0.55, '#DC2626') // Vivid Crimson
      brandGradient.addColorStop(0.78, '#E11D48') // Vibrant Rose Red
      brandGradient.addColorStop(1, '#FF1E4D')    // Radiant Scarlet Red (Global)

      return { w, h, waveAmp, font, brandGradient }
    }

    let { w, h, waveAmp, font, brandGradient } = updateCanvasSize()

    const handleResize = () => {
      const res = updateCanvasSize()
      w = res.w
      h = res.h
      waveAmp = res.waveAmp
      font = res.font
      brandGradient = res.brandGradient
    }

    window.addEventListener('resize', handleResize)

    if (document.fonts) {
      document.fonts.ready.then(() => {
        const res = updateCanvasSize()
        font = res.font
        brandGradient = res.brandGradient
      })
    }

    const render = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const rawProgress = Math.min(1, elapsed / duration)

      const currentVal = Math.round(rawProgress * 100)
      setProgress(currentVal)

      // progressRatio: 1.0 (empty) -> 0.0 (full)
      const progressRatio = 1 - rawProgress
      const textY = h * 0.52

      // 1. Draw the liquid wave with vivid Blue & Red gradient
      offCtx.clearRect(0, 0, w, h)
      offCtx.beginPath()
      offCtx.fillStyle = brandGradient
      offCtx.moveTo(0, h)

      for (let x = 0; x <= w; x += 3) {
        // Multi-frequency organic liquid wave formula
        const waveY =
          h * progressRatio -
          Math.sin(0.02 * x + phase) *
            Math.sin(0.01 * x + phase) *
            Math.sin(0.05 * x + phase) *
            waveAmp
        offCtx.lineTo(x, waveY)
      }

      offCtx.lineTo(w, h)
      offCtx.lineTo(0, h)
      offCtx.closePath()
      offCtx.fill()

      // 2. Clip the gradient wave to the text "Peers Global"
      offCtx.globalCompositeOperation = 'destination-in'
      offCtx.font = font
      offCtx.textAlign = 'center'
      offCtx.textBaseline = 'middle'
      offCtx.letterSpacing = '4px'
      offCtx.fillText('Peers Global', w / 2, textY)
      offCtx.globalCompositeOperation = 'source-over'

      // 3. Clear main canvas
      ctx.clearRect(0, 0, w, h)

      // 4. Draw faint silhouette on the white blur background (subtle slate outline)
      ctx.font = font
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.letterSpacing = '4px'
      ctx.fillStyle = 'rgba(15, 23, 42, 0.12)'
      ctx.fillText('Peers Global', w / 2, textY)

      // 5. Draw the vivid Blue & Red water-filled letters
      ctx.drawImage(offscreen, 0, 0, w, h)

      phase += 0.035

      if (rawProgress < 1) {
        animFrameIdRef.current = requestAnimationFrame(render)
      } else {
        // Water is 100% full: draw complete solid vivid brand gradient
        ctx.fillStyle = brandGradient
        ctx.fillText('Peers Global', w / 2, textY)

        // 1. Brief pause to appreciate the full water fill
        setTimeout(() => {
          // 2. Reveal the actual homepage screen (white blur fades away, video emerges)
          setIsRevealingHomepage(true)
          document.body.style.overflow = ''

          // 3. Simultaneously start the slow, elegant fade-out of the "Peers Global" text over the video
          setIsTextFading(true)

          // 4. Clean up after the slow fade duration (~2 seconds)
          setTimeout(() => {
            setIsMounted(false)
          }, 2100)
        }, 180)
      }
    }

    animFrameIdRef.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current)
    }
  }, [])

  if (!isMounted) return null

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Peers Global"
      className="fixed inset-0 z-[99999] select-none pointer-events-none"
    >
      {/* LAYER 1: White Blurred Background (Fades out smoothly to reveal actual homepage video) */}
      <div
        className={`fixed inset-0 z-10 bg-white/80 backdrop-blur-2xl transition-opacity duration-800 ease-out ${
          isRevealingHomepage ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Subtle Ambient Radial Highlight */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,82,255,0.06),rgba(255,30,77,0.05)_60%,transparent_80%)] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* LAYER 2: "Peers Global" Text Layer (Remains visible over the revealed homepage, then slowly fades out over ~2 seconds) */}
      <div className="fixed inset-0 z-20 flex items-center justify-center p-4">
        <div className="relative w-full max-w-[90%] md:max-w-[80%] lg:max-w-[850px] xl:max-w-[1040px]">
          {/* Animated Water-Filled Text Box with Slow Fade Transition */}
          <div
            ref={logoBoxRef}
            className={`relative aspect-[1050/200] w-full transition-all ${
              isTextFading
                ? 'duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 scale-[1.06] blur-[6px]'
                : 'duration-300 opacity-100 scale-100 blur-none'
            }`}
            style={{
              transformOrigin: 'center center',
            }}
          >
            <canvas ref={canvasRef} className="size-full block drop-shadow-sm" />
          </div>

          {/* Loading Counter (Fades out as soon as water reaches 100%) */}
          <div
            className={`absolute right-4 top-full mt-2 sm:mt-3 flex items-center gap-1 font-mono text-[11px] sm:text-xs tracking-wider text-slate-500 bg-white/70 px-2.5 py-1 rounded-full border border-slate-200/60 shadow-xs backdrop-blur-sm transition-opacity duration-300 ${
              isRevealingHomepage || progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <span className="text-slate-400">loading...</span>
            <span className="font-bold text-slate-800 min-w-[28px] text-right">{progress}</span>
            <span className="text-slate-400">%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

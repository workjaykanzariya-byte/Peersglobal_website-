'use client'

import * as React from 'react'
import { DEFAULT_DESIGN, DESIGN_STORAGE_KEY, type DesignId } from '@/lib/design'

type DesignContextValue = {
  design: DesignId
  setDesign: (id: DesignId) => void
}

const DesignContext = React.createContext<DesignContextValue>({
  design: DEFAULT_DESIGN,
  setDesign: () => {},
})

export function DesignProvider({ children }: { children: React.ReactNode }) {
  const [design, setDesignState] = React.useState<DesignId>('d1')

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(DESIGN_STORAGE_KEY) as DesignId | null
      if (stored && /^d[1-5]$/.test(stored)) {
        setDesignState(stored)
        document.documentElement.setAttribute('data-design', stored)
      }
    } catch (e) {
      // ignore
    }
  }, [])

  const setDesign = React.useCallback((next: DesignId) => {
    setDesignState(next)
    try {
      localStorage.setItem(DESIGN_STORAGE_KEY, next)
    } catch (e) {
      // ignore
    }
  }, [])

  React.useEffect(() => {
    document.documentElement.setAttribute('data-design', design)
  }, [design])

  // Automatically calculate and adapt animated card border length to each card's dimensions
  React.useEffect(() => {
    if (typeof window === 'undefined') return

    const updateCard = (card: HTMLElement) => {
      const w = card.offsetWidth
      const h = card.offsetHeight
      if (!w || !h) return
      // Exact rounded rectangle perimeter for 24px (1.5rem) border radius:
      // P = 2*(w + h) - (8 - 2*Math.PI)*24 ≈ 2*(w + h) - 41.2
      const p = Math.round(2 * (w + h) - 41.2)
      const dash = Math.round(p * 0.28)
      const gap = p - dash
      card.style.setProperty('--card-p', `${p}px`)
      card.style.setProperty('--card-dash', `${dash}px`)
      card.style.setProperty('--card-gap', `${gap}px`)
    }

    const updateAll = () => {
      document.querySelectorAll<HTMLElement>('.animated-glow-card').forEach(updateCard)
    }

    updateAll()
    const rId = requestAnimationFrame(updateAll)

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const card = target?.closest?.('.animated-glow-card') as HTMLElement | null
      if (card) updateCard(card)
    }

    window.addEventListener('resize', updateAll, { passive: true })
    document.addEventListener('pointerenter', handlePointerOver, { capture: true, passive: true })

    return () => {
      cancelAnimationFrame(rId)
      window.removeEventListener('resize', updateAll)
      document.removeEventListener('pointerenter', handlePointerOver, { capture: true })
    }
  }, [])

  return (
    <DesignContext.Provider value={{ design, setDesign }}>{children}</DesignContext.Provider>
  )
}

export function useDesign() {
  return React.useContext(DesignContext)
}

/** Legacy placeholder - safely returns null to eliminate React script tag warning */
export function DesignScript() {
  return null
}

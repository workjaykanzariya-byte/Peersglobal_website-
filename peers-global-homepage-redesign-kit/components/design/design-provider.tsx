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

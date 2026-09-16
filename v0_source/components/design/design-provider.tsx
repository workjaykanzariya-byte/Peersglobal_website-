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
  const [design, setDesignState] = React.useState<DesignId>(DEFAULT_DESIGN)

  React.useEffect(() => {
    const stored = window.localStorage.getItem(DESIGN_STORAGE_KEY) as DesignId | null
    if (stored && /^d[1-5]$/.test(stored)) setDesignState(stored)
  }, [])

  const setDesign = React.useCallback((id: DesignId) => {
    setDesignState(id)
    window.localStorage.setItem(DESIGN_STORAGE_KEY, id)
    document.documentElement.setAttribute('data-design', id)
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

/** Runs before paint so the stored direction never flashes the default. */
export function DesignScript() {
  const code = `try{var d=localStorage.getItem('${DESIGN_STORAGE_KEY}');if(d&&/^d[1-5]$/.test(d)){document.documentElement.setAttribute('data-design',d)}}catch(e){}`
  return <script dangerouslySetInnerHTML={{ __html: code }} />
}

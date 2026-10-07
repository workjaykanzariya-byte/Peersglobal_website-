'use client'

import React, { createContext, useContext } from 'react'

interface LogoLoaderContextType {
  isLoading: boolean
  message?: string | null
  showLoader: (message?: string) => void
  hideLoader: () => void
  triggerAction: <T>(action: () => Promise<T>, message?: string) => Promise<T>
}

const LogoLoaderContext = createContext<LogoLoaderContextType>({
  isLoading: false,
  message: null,
  showLoader: () => {},
  hideLoader: () => {},
  triggerAction: async (action) => action(),
})

export function useLogoLoader() {
  return useContext(LogoLoaderContext)
}

export function LogoLoaderProvider({ children }: { children: React.ReactNode }) {
  return (
    <LogoLoaderContext.Provider
      value={{
        isLoading: false,
        message: null,
        showLoader: () => {},
        hideLoader: () => {},
        triggerAction: async (action) => action(),
      }}
    >
      {children}
    </LogoLoaderContext.Provider>
  )
}

'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { FloatingWhatsApp } from '@/components/site/FloatingWhatsApp'

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isCandidatePortal = pathname?.startsWith('/candidate/votes') || pathname?.startsWith('/candidate/results')

  if (isCandidatePortal) {
    return (
      <main id="main" className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </main>
    )
  }

  return (
    <>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  )
}

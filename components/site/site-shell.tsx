'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { GlobalFloatingTrigger } from '@/components/site/global-floating-trigger'

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')

  if (isAdmin) {
    return <main id="main">{children}</main>
  }

  return (
    <>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <GlobalFloatingTrigger />
    </>
  )
}

'use client'

import React from 'react'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { FloatingWhatsApp } from '@/components/site/FloatingWhatsApp'

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  )
}

import type { Metadata } from 'next'
import { JuryPortalClient } from '@/components/leadership/jury/jury-portal-client'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Juror Authentication | Peers Global Leadership',
  description: 'Official Juror authentication interface with email & OTP.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

export default function JurorLoginPage() {
  return <JuryPortalClient initialView="login" />
}

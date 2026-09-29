import { Metadata } from 'next'
import { GrievanceClient } from '@/components/legal/grievance-client'

export const metadata: Metadata = {
  title: 'Grievance Redressal | Peers Global',
  description:
    'Statutory grievance officer details, escalation matrix, and resolution timelines under IT Rules 2021.',
  keywords: [
    'grievance redressal peers global',
    'grievance officer Ahmedabad',
    'IT rules 2021 compliance',
    'compliance contact peers global',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/grievance',
  },
  openGraph: {
    title: 'Grievance Redressal | Peers Global',
    description:
      'Statutory grievance officer details and complaint resolution procedures for Peers Global.',
    url: 'https://peersglobal.com/grievance',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function GrievancePage() {
  return <GrievanceClient />
}

import type { Metadata } from 'next'
import React from 'react'
import { MembershipPageClient } from '@/components/membership/membership-page-client'

export const metadata: Metadata = {
  title: {
    absolute: 'Join Peers Global | Membership for Entrepreneurs',
  },
  description:
    'Explore the community before you commit. Choose from Explorer (Free for 90 Days), Global Membership, or claim a governed seat with category exclusivity as a Circle Member.',
  keywords: [
    'entrepreneur membership India',
    'business community membership',
    'join business community',
    'entrepreneur network India',
    'peers global',
    'why join peers global',
  ],
  openGraph: {
    title: 'Join Peers Global | Membership for Entrepreneurs',
    description:
      'Explore the community before you commit. Choose from Explorer (Free for 90 Days), Global Membership, or claim a governed seat with category exclusivity as a Circle Member.',
    type: 'website',
    url: 'https://peersglobal.com/membership',
  },
}

// Schema: HowTo — Onboarding process
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Join Peers Global',
  description: 'The three-step governance journey from exploring the community to claiming your seat in a governed Circle.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Category Availability Audit',
      text: 'We audit whether your specific business category seat is open in your target city cohort.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Business Stage Fit',
      text: 'Evaluates whether your operational scale matches the room.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Contribution Intent Review',
      text: 'A 1-to-1 interview with the Circle Founder to confirm that you are joining to give referrals.',
    },
  ],
}

export default function MembershipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <MembershipPageClient />
    </>
  )
}

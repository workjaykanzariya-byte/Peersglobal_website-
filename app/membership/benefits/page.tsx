import type { Metadata } from 'next'
import { BenefitsClient } from '@/components/membership/benefits-client'

export const metadata: Metadata = {
  title: {
    absolute: 'What Your Peers Global Membership Includes',
  },
  description:
    'Twelve monthly meetings, 60+ collaboration roundtables, media coverage, the Unity App, recognition and a global network. Everything included in Peers Global membership.',
  keywords: [
    'business community membership benefits',
    'entrepreneur membership inclusions',
    'business network benefits India',
    'peers global what you get',
    'circle membership benefits',
  ],
  openGraph: {
    title: 'What Your Peers Global Membership Includes',
    description:
      'Twelve monthly meetings, 60+ collaboration roundtables, media coverage, the Unity App, recognition and a global network. Everything included in Peers Global membership.',
    type: 'website',
    url: 'https://peersglobal.com/membership/benefits',
  },
}

// Schema: ItemList — Everything included at a glance
const inclusionsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Peers Global Membership Inclusions',
  description: 'Everything included in the Peers Global annual membership and Circle seat.',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Twelve monthly business growth meetings' },
    { '@type': 'ListItem', position: 2, name: '60+ structured collaboration roundtables' },
    { '@type': 'ListItem', position: 3, name: '150+ new introductions a year' },
    { '@type': 'ListItem', position: 4, name: 'Expert learning sessions and masterclasses' },
    { '@type': 'ListItem', position: 5, name: 'VyapaarJagat.com and media opportunities' },
    { '@type': 'ListItem', position: 6, name: 'Family meetups and leadership retreats' },
    { '@type': 'ListItem', position: 7, name: 'Confidential forum and MindMeld meetups' },
    { '@type': 'ListItem', position: 8, name: 'Join multiple Circles across cities and countries' },
    { '@type': 'ListItem', position: 9, name: 'Unity App and digital ecosystem' },
    { '@type': 'ListItem', position: 10, name: 'Leadership roles and recognition' },
    { '@type': 'ListItem', position: 11, name: 'Year-round community support' },
    { '@type': 'ListItem', position: 12, name: 'Be part of 1M+ entrepreneurs to impact by 2030' },
  ],
}

export default function MembershipBenefitsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(inclusionsSchema) }}
      />
      <BenefitsClient />
    </>
  )
}

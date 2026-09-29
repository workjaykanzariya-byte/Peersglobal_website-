import type { Metadata } from 'next'
import { WhoBelongsClient } from '@/components/membership/who-belongs-client'

export const metadata: Metadata = {
  title: {
    absolute: 'Who Belongs at Peers Global | Is This Community Right for You',
  },
  description:
    'Peers Global is built for entrepreneurs who give first, show up consistently and think in decades. Find out whether this community is right for you.',
  keywords: [
    'who can join business community',
    'entrepreneur community eligibility',
    'business community for founders',
    'right business network for me',
    'peers global eligibility',
    'who belongs here',
  ],
  openGraph: {
    title: 'Who Belongs at Peers Global | Is This Community Right for You',
    description:
      'Peers Global is built for entrepreneurs who give first, show up consistently and think in decades. Find out whether this community is right for you.',
    type: 'website',
    url: 'https://peersglobal.com/who-belongs-here',
  },
}

// Schema: ItemList — Six qualities we look for
const qualitiesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Six Qualities of Entrepreneurs Who Belong at Peers Global',
  description: 'The core traits and character qualifications for joining a Peers Global Circle.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'You already give without being asked',
      description: 'Giving is your default operating model without calculating immediate transactional return.',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'You can be corrected by an equal',
      description: 'You are willing to receive honest critique and mentorship from fellow business owners.',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'You are willing to be honest about the hard parts',
      description: 'You speak truthfully about challenges and bottlenecks rather than just presenting polished highlights.',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'You think in decades, not quarters',
      description: 'You understand that high-trust business relationships compound over long horizons.',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'You take responsibility for outcomes',
      description: 'You focus on what you can change and build rather than making excuses about markets.',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'You want to build something beyond your own business',
      description: 'You are committed to collective economic impact, community growth, and legacy.',
    },
  ],
}

export default function WhoBelongsHerePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qualitiesSchema) }}
      />
      <WhoBelongsClient />
    </>
  )
}

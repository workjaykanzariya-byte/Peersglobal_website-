import type { Metadata } from 'next'
import { WhyJoinClient } from '@/components/membership/why-join-client'

export const metadata: Metadata = {
  title: {
    absolute: 'Join Peers Global | Membership for Entrepreneurs',
  },
  description:
    'Why entrepreneurs join Peers Global — a global community of business owners, the Unity App, the recognition system, and Circles where real collaboration happens.',
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
      'Why entrepreneurs join Peers Global — a global community of business owners, the Unity App, the recognition system, and Circles where real collaboration happens.',
    type: 'website',
    url: 'https://peersglobal.com/membership',
  },
}

// Schema: HowTo — Onboarding process
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Join Peers Global',
  description: 'The six-step journey from exploring the community to claiming your seat in a governed Circle.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Download the Unity App',
      text: 'Download the Peers Global Unity App to access the platform and ecosystem.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Explore the community',
      text: 'Browse the directory of entrepreneurs, events, and collaboration opportunities.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Subscribe',
      text: 'Activate your global platform subscription.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Attend a Circle meeting',
      text: 'Experience the structured four-part monthly meeting as a visiting guest.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Request your Circle',
      text: 'Apply for category exclusivity in an Industry or Purpose Circle.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Take your seat',
      text: 'Join your Inner Board with one seat per category.',
    },
  ],
}

// Schema: ItemList — Eight Reasons to Join
const eightReasonsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Eight Reasons to Join Peers Global',
  description: 'Why entrepreneurs choose Peers Global as their long-term peer community.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'End entrepreneurial isolation',
      description: 'Join a tribe of committed entrepreneurs who understand your journey. You will never feel alone in business again.',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Grow your business through trust',
      description: 'Category exclusivity in each Circle means no competition inside. Warm referrals and real business deals happen naturally.',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Learn from real experience',
      description: 'Monthly masterclasses, peer-to-peer learning and structured interactions with industry experts.',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Build a lifelong support system',
      description: 'Peers are Partners in Business and Friends in Life. Two Family Meetups a year and a Confidential Forum.',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Become a better leader',
      description: 'Leadership development embedded in everything — from committee roles to mentoring fellow members.',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Create real impact',
      description: 'Every referral, connection and guidance counts as one life impacted via the Life Impact System.',
    },
    {
      '@type': 'ListItem',
      position: 7,
      name: 'Access resources you cannot build alone',
      description: 'Partners, tools, vendors, media visibility, branding, mentorship and capital access.',
    },
    {
      '@type': 'ListItem',
      position: 8,
      name: 'Get national and global reach',
      description: 'Collaborate across cities, industries and countries through the Peers Global Unity App.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eightReasonsSchema) }}
      />
      <WhyJoinClient />
    </>
  )
}

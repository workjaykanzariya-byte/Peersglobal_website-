import type { Metadata } from 'next'
import { MeetingExperienceClient } from '@/components/circles/meeting-experience-client'

export const metadata: Metadata = {
  title: {
    absolute: 'Inside a Circle Meeting | The Peers Global Agenda',
  },
  description:
    'The four-part Peers Global Circle meeting agenda — Gratitude & Life Impact Round, Brand Showcase, Impact Mentor Masterclass and Collaboration Roundtables.',
  keywords: [
    'business circle meeting agenda',
    'business networking meeting format',
    'entrepreneur group meeting structure',
    'what happens in a business circle',
    'peers global meeting',
    'circle meeting experience',
  ],
  openGraph: {
    title: 'Inside a Circle Meeting | The Peers Global Agenda',
    description:
      'The four-part Peers Global Circle meeting agenda — Gratitude & Life Impact Round, Brand Showcase, Impact Mentor Masterclass and Collaboration Roundtables.',
    type: 'website',
    url: 'https://peersglobal.com/circle-meeting-experience',
  },
}

// Schema: HowTo — the four-part agenda
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'The Peers Global Circle Meeting Agenda',
  description:
    'The four-part structured agenda followed by every Peers Global Circle meeting in every city.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Gratitude & Life Impact Round',
      text: 'Every Peer declares their impact since the last meeting. Contributions are logged in the Unity App. The meeting opens with giving, not asking.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Brand Showcase',
      text: 'One Peer presents their business in four structured minutes — what they do, who they serve, what they are building, and specifically what they need from the room.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Impact Mentor Masterclass',
      text: 'A senior Peer or invited expert teaches one subject in twenty minutes with enough depth that Peers can act on it the same week.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Collaboration Roundtables',
      text: 'Peers break into focused roundtables for referrals, introductions, requirements matching, partnerships and problem-solving. Peers leave with named actions and scheduled follow-ups.',
    },
  ],
}

// Schema: FAQPage
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long is a Circle meeting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Long enough for all four segments to run properly, and short enough that busy business owners attend consistently. Your Circle Director will confirm the exact timing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often does a Circle meet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On a fixed monthly rhythm, so Peers can plan around it well in advance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I have nothing to declare in the Impact Round?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Say so honestly. Some months you give more, some months less. Over a year it balances, and the room knows the difference between an honest quiet month and someone who never gives.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does every Peer get a Brand Showcase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, on rotation, so every Peer gets the room\'s full attention on a scheduled basis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I deliver a Masterclass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Teaching something you know well is one of the highest forms of contribution here, and it earns Life Impact.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are meetings online or in person?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both formats exist across the community. Your Circle Director will confirm the format for your Circle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I bring a guest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Bringing the right entrepreneur into your Circle is itself a contribution.',
      },
    },
  ],
}

export default function CircleMeetingExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MeetingExperienceClient />
    </>
  )
}

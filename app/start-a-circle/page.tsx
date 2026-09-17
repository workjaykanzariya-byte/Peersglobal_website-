import type { Metadata } from 'next'
import { StartCircleClient } from '@/components/circles/start-circle-client'

export const metadata: Metadata = {
  title: {
    absolute: 'Start a Circle | Build a Community of Entrepreneurs | Peers Global',
  },
  description:
    'Start a Peers Global Circle in your city or industry. Build the room your business ecosystem is missing, with the structure, systems and support of the wider community.',
  keywords: [
    'start a business circle',
    'build entrepreneur community',
    'start business group India',
    'become a circle founder',
    'peers global',
    'found a circle',
  ],
  openGraph: {
    title: 'Start a Circle | Build a Community of Entrepreneurs | Peers Global',
    description:
      'Start a Peers Global Circle in your city or industry. Build the room your business ecosystem is missing, with the structure, systems and support of the wider community.',
    type: 'website',
    url: 'https://peersglobal.com/start-a-circle',
  },
}

// Schema: HowTo — the 5-step founder journey
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Start a Peers Global Circle',
  description:
    'The five-step journey to founding and launching a Peers Global Circle in your city or industry.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'You apply',
      text: 'Tell us about your business, your city or industry, and why you want to build this room.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'We talk properly',
      text: 'A conversation with a Regional Executive Director about the opportunity, what founding involves, and whether it fits.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'You are inducted',
      text: 'Founder training covering the model, systems, agenda, and how to build the founding group.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'You build the founding Peers',
      text: 'With support, guidance, and Unity app access from day one.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Your Circle launches',
      text: 'First meeting, first Give and Ask, first impact declared. A room exists that did not exist before you.',
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
      name: 'Do I need to be a Peer already?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. Many Founders join Peers Global specifically to build a Circle. What matters is standing in your city or industry and the ability to bring the right entrepreneurs together.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many Peers do I need to launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enough that every meeting has depth and the room feels complete. Your Regional Executive Director will guide you on the founding group for your specific Circle.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take from application to first meeting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That depends mostly on how quickly you can bring the founding group together. Some Founders launch in weeks, others take a few months to compose the room properly. The careful ones build stronger Circles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I start a Circle in an industry that already exists elsewhere?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. An Industry Circle in one city is entirely separate from the same industry in another.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I want to start a Circle for a purpose that does not exist yet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is exactly how new Purpose Circles begin. If enough entrepreneurs share the ambition, it is worth building.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I found a Circle alongside running my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — every Circle Founder is a working business owner. The role is designed around that reality.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after the first year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Circle Director typically takes on the day-to-day rhythm while you continue as Founder. Many Founders go on to build a second Circle or move into wider leadership.',
      },
    },
  ],
}

export default function StartACirclePage() {
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
      <StartCircleClient />
    </>
  )
}

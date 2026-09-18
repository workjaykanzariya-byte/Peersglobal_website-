import { Metadata } from 'next'
import { FounderClient } from '@/components/founder/founder-client'

export const metadata: Metadata = {
  title: 'Dr. Pravin Parmar | Founder, Peers Global',
  description:
    'Founder of Peers Global and the 1 Million Entrepreneurs International Forum. From a farmer family in Botad to building a global community of collaboration.',
  keywords: [
    'Dr Pravin Parmar',
    'peers global founder',
    'entrepreneur community founder India',
    'Botad to Peers Global',
    '1 Million Entrepreneurs International Forum founder',
    'VyapaarJagat founder',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/founder',
  },
  openGraph: {
    title: 'Dr. Pravin Parmar | Founder, Peers Global',
    description:
      'Founder of Peers Global and the 1 Million Entrepreneurs International Forum. From a farmer family in Botad to building a global community of collaboration.',
    url: 'https://peersglobal.com/founder',
    siteName: 'Peers Global',
    type: 'profile',
    images: [
      {
        url: '/images/founder-new.png',
        width: 800,
        height: 1000,
        alt: 'Dr. Pravin Parmar - Founder, Peers Global',
      },
    ],
  },
}

export default function FounderPage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Pravin Parmar',
    jobTitle: 'Founder & Visionary Architect',
    worksFor: {
      '@type': 'Organization',
      name: 'Peers Global',
      url: 'https://peersglobal.com',
    },
    alumniOf: 'Botad High School',
    description:
      'Founder of Peers Global and the 1 Million Entrepreneurs International Forum. Pioneer of governed peer circles and collaborative ecosystem architecture in India.',
    url: 'https://peersglobal.com/founder',
    image: 'https://peersglobal.com/images/founder-new.png',
    sameAs: [
      'https://www.linkedin.com/in/drpravinparmar/',
      'https://vyapaarjagat.com',
      'https://twitter.com/drpravinparmar',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <FounderClient />
    </>
  )
}

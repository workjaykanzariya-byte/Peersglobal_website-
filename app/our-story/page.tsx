import { Metadata } from 'next'
import { OurStoryClient } from '@/components/our-story/our-story-client'

export const metadata: Metadata = {
  title: 'Our Story | Peers Global',
  description:
    'How Peers Global began, what it has become, and where it is going. The story of a community built so entrepreneurs would not have to build alone.',
  keywords: [
    'peers global story',
    'entrepreneur community India history',
    'business community founded',
    'Dr Pravin Parmar story',
    'collaboration community history',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/our-story',
  },
  openGraph: {
    title: 'Our Story | Peers Global',
    description:
      'How Peers Global began, what it has become, and where it is going. The story of a community built so entrepreneurs would not have to build alone.',
    url: 'https://peersglobal.com/our-story',
    siteName: 'Peers Global',
    type: 'website',
    images: [
      {
        url: '/images/who-we-are-mountain.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Story - Peers Global',
      },
    ],
  },
}

export default function OurStoryPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Peers Global',
    alternateName: 'Peers Global Business Media Private Limited',
    url: 'https://peersglobal.com',
    logo: 'https://peersglobal.com/images/peers-logo.png',
    foundingDate: '2022',
    founder: {
      '@type': 'Person',
      name: 'Dr. Pravin Parmar',
      jobTitle: 'Founder',
      url: 'https://peersglobal.com/founder',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    description:
      'Peers Global is the world’s first community of collaboration — a global community of entrepreneurs and business leaders who grow by helping each other grow.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <OurStoryClient />
    </>
  )
}

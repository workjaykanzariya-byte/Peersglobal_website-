import type { Metadata } from 'next'
import { EventsPageClient } from '@/components/events/events-page-client'

export const metadata: Metadata = {
  title: 'Events & Summits | Peers Global',
  description:
    'Circle meetings, masterclasses, conclaves and the annual summit. See what is happening across the Peers Global community and register in the Unity App.',
  keywords: [
    'entrepreneur events India',
    'business networking events',
    'business summit India',
    'entrepreneur conclave',
    'circle meetings',
    'Peers Global summits',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/events',
  },
  openGraph: {
    title: 'Events & Summits | Peers Global',
    description:
      'Circle meetings, masterclasses, conclaves and the annual summit. See what is happening across the Peers Global community and register in the Unity App.',
    url: 'https://peersglobal.com/events',
    siteName: 'Peers Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events & Summits | Peers Global',
    description:
      'Circle meetings, masterclasses, conclaves and the annual summit. See what is happening across the Peers Global community and register in the Unity App.',
  },
}

export default function EventsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I find events near me?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Open the Unity App and browse by city. The calendar shows everything happening across the community.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I attend if I am not a member?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, a few events. Circle meetings and masterclasses accept guests. Register through the app.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are events free for members?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Every event carries a fee, for Peers and Charter Peers alike. Fees are shown before you register.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I bring my team?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, as registered visitors on payment of the visitor fee. Speak to your Circle Director.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I host or sponsor an event?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Speak to your Circle Director or Executive Director.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are events included in my membership?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Circle meetings are covered by your Circle Experience Fee. Other events carry their own fees, shown before you register.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are events online or in person?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Both formats run. Each listing states its format.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I attend events outside my own Circle?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Charter Peers can attend Circle meetings in any city, up to twelve cross-region meetings a year.',
            },
          },
        ],
      },
      {
        '@type': 'Event',
        name: 'Business Conclave 2026: Building for Bharat',
        startDate: '2026-10-12T10:00:00+05:30',
        endDate: '2026-10-12T16:00:00+05:30',
        eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: {
          '@type': 'Place',
          name: 'Grand Hyatt, Ahmedabad',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Ahmedabad',
            addressRegion: 'Gujarat',
            addressCountry: 'IN',
          },
        },
        organizer: {
          '@type': 'Organization',
          name: 'Peers Global',
          url: 'https://peersglobal.com',
        },
        offers: {
          '@type': 'Offer',
          url: 'https://unity.peersglobal.com',
          price: '1500',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EventsPageClient />
    </>
  )
}


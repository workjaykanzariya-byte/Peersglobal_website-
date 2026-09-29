import type { Metadata } from 'next'
import { Suspense } from 'react'
import { CirclesPageClient } from '@/components/circles/circles-page-client'
import { ACTIVE_CITIES } from '@/lib/data/site'
import { fetchCities } from '@/lib/api/unity'
import { CIRCLES } from '@/lib/data/circles'

export const metadata: Metadata = {
  title: {
    absolute: 'Business Circles for Entrepreneurs | Peers Global',
  },
  description:
    'A Peers Global Circle brings together the right entrepreneurs around a shared industry, purpose or city. Find the Circle where your business belongs.',
  keywords: [
    'business circles for entrepreneurs',
    'entrepreneur groups India',
    'business networking circle',
    'industry business group',
    'peers global circles',
    'category exclusivity networking',
    'business collaboration circles',
  ],
  openGraph: {
    title: 'Business Circles for Entrepreneurs | Peers Global',
    description:
      'A Peers Global Circle brings together the right entrepreneurs around a shared industry, purpose or city. Find the Circle where your business belongs.',
    type: 'website',
    url: 'https://peersglobal.com/circles',
  },
}

export const dynamic = 'force-dynamic'

export default async function CirclesPage() {
  let cityList: string[] = ACTIVE_CITIES

  try {
    const dynamicCities: any = await Promise.race([
      fetchCities(),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 1200)),
    ])

    if (Array.isArray(dynamicCities) && dynamicCities.length > 0) {
      cityList = dynamicCities.map((c: any) => c.name || c.city_name || c).filter(Boolean)
    }
  } catch {
    cityList = ACTIVE_CITIES
  }

  // Schema 1: FAQPage Schema for the 6 Common Questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How many Peers are in a Circle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enough that every business category is represented, and few enough that everyone genuinely knows everyone. A Circle is built for depth of relationship, not size.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often does a Circle meet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On a fixed rhythm set by the Circle, so that Peers can plan around it and attendance stays consistent.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I join more than one Circle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Many Peers hold a seat in an Industry Circle and a Purpose Circle.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if my category is already taken?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You may join a different Circle in your city, join the waiting list for that seat, or start a new Circle. A Circle Director will tell you honestly which is realistic.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I have to bring referrals every meeting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contribution takes ten forms, and referrals are only one of them. Knowledge, introductions, problem solving and support all count.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does it cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Membership details are on the Membership page, with tiers and inclusions published openly.',
        },
      },
    ],
  }

  // Schema 2: ItemList Schema for Circles Grid
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Business Circles for Entrepreneurs',
    description: 'A Peers Global Circle brings together the right entrepreneurs around a shared industry, purpose or city. Find the Circle where your business belongs.',
    itemListElement: CIRCLES.map((c, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Organization',
        name: c.name,
        description: c.summary,
        url: `https://peersglobal.com/circles/${c.slug}`,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <CirclesPageClient dynamicCities={cityList} />
    </>
  )
}

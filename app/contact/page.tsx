import { Metadata } from 'next'
import { ContactPageClient } from '@/components/contact/contact-page-client'

export const metadata: Metadata = {
  title: 'Contact Peers Global',
  description:
    'Get in touch with Peers Global — membership, leadership, partnerships, media, sponsorship and support.',
  keywords: [
    'contact peers global',
    'peers global office',
    'peers global email',
    'entrepreneur community contact India',
    'peers global grievance officer',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/contact',
  },
  openGraph: {
    title: 'Contact Peers Global',
    description:
      'Get in touch with Peers Global — membership, leadership, partnerships, media, sponsorship and support.',
    url: 'https://peersglobal.com/contact',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Peers Global',
    description:
      'Official contact desks, leadership applications, partnerships, and statutory governance for Peers Global.',
    url: 'https://peersglobal.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Peers Global Business Media Private Limited',
      telephone: '+91-92271-22800',
      email: 'hello@peersglobal.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '405, 4th Floor, Shivalik Shilp, Iscon Cross Road, S.G. Highway',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        postalCode: '380015',
        addressCountry: 'IN',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactPageClient />
    </>
  )
}

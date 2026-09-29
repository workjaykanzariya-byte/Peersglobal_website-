import type { Metadata } from 'next'
import LexiconClientPage from './lexicon-client'

export const metadata: Metadata = {
  title: 'The Peers Lexicon | The Language of Peers Global',
  description:
    'Every word used inside Peers Global and what it means — Peer, Circle, Give-First, Unity, Life Impact Score, Peers Coin, Peer Standing and more.',
  keywords: [
    'peers global lexicon',
    'what is a peer',
    'what is a business circle',
    'give first principle',
    'life impact score meaning',
    'peers coin',
    'peer standing',
    'peers code',
    'community of collaboration',
  ],
  openGraph: {
    title: 'The Peers Lexicon | The Language of Peers Global',
    description:
      'Every word used inside Peers Global and what it means — Peer, Circle, Give-First, Unity, Life Impact Score, Peers Coin, Peer Standing and more.',
    type: 'website',
    url: 'https://peersglobal.com/lexicon',
  },
}

export default function LexiconPage() {
  return <LexiconClientPage />
}

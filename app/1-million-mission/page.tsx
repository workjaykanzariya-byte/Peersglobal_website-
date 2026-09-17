import type { Metadata } from 'next'
import LexiconClientPage from '@/app/lexicon/lexicon-client'

export const metadata: Metadata = {
  title: 'The Peers Lexicon | The Language of Peers Global',
  description:
    'Every word used inside Peers Global and what it means — Peer, Circle, Give-First, Unity, Life Impact Score, Peers Coin, Peer Standing and more.',
  keywords: [
    '1 million mission',
    'peers global lexicon',
    'what is a peer',
    'what is a business circle',
    'give first principle',
    'life impact score meaning',
    'peers coin',
  ],
}

export default function OneMillionMissionLexiconPage() {
  return <LexiconClientPage />
}

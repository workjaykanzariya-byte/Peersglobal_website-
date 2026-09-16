import type { VideoItem } from '@/components/media/types'

/**
 * Video counterpart to the written member stories in lib/data/stories.ts.
 * Reuses the same people, companies, and pull-quotes so the two surfaces
 * never contradict each other — swap `source` for real footage per
 * member as it's filmed; thumbnails/clips below are placeholders drawn
 * from existing site assets.
 */
export const VIDEO_TESTIMONIALS: VideoItem[] = [
  {
    id: 'testimonial-mehta',
    title: 'Dr. Hetal Mehta on the ₹4.2 crore decision the Circle changed',
    thumbnail: '/images/story-hero.jpg',
    source: { kind: 'file', src: '/videos/journey-bg.mp4' },
    duration: '2:48',
    category: 'Healthcare Circle',
    meta: 'Managing Director, Mehta Multispeciality Hospital · Ahmedabad',
    description:
      'I came in for referrals. The most valuable thing I got was a room willing to tell me my plan was wrong.',
  },
  {
    id: 'testimonial-solanki',
    title: 'Hardik Solanki on opening two export markets through the Circle',
    thumbnail: '/images/outcomes-peers-group.png',
    source: { kind: 'file', src: '/videos/leadership-hero-bg.mp4' },
    duration: '3:05',
    category: 'Export & Global Trade',
    meta: 'Founder, Solanki Ceramics Export · Morbi',
    description:
      'The useful part was not the introduction. It was the member who told me exactly how he lost money in Kenya first.',
  },
  {
    id: 'testimonial-shah',
    title: 'Priyanka Shah on fixing the cap table before the raise',
    thumbnail: '/images/mission-2030.jpg',
    source: { kind: 'file', src: '/videos/stories-hero-bg.mp4' },
    duration: '2:21',
    category: 'Women Founders',
    meta: 'Co-founder, Shah Nutraceuticals · Ahmedabad',
    description: 'Everyone advises you after the term sheet. This room made me fix the cap table before there was one.',
  },
  {
    id: 'testimonial-thakkar',
    title: 'Bhavesh Thakkar on the peer audit that moved his delivery timelines',
    thumbnail: '/images/circle-founder-hero.jpg',
    source: { kind: 'file', src: '/videos/hero-bg.mp4' },
    duration: '3:32',
    category: 'Manufacturing',
    meta: 'Managing Partner, Thakkar Precision · Rajkot',
    description: 'Four promoters walked my floor and told me what they saw. No invoice, no slide deck.',
  },
  {
    id: 'testimonial-trivedi',
    title: 'Parth Trivedi on why his company stopped quoting hours',
    thumbnail: '/images/story-hero.jpg',
    source: { kind: 'file', src: '/videos/homepage-hero-bg.mp4' },
    duration: '2:10',
    category: 'IT & Technology',
    meta: 'Founder, Northbridge Systems · Ahmedabad',
    description: 'The room refused to let me present a rate card twice. That was the whole intervention.',
  },
  {
    id: 'testimonial-doshi',
    title: 'Aarav Doshi on the succession conversation his family finally had',
    thumbnail: '/images/outcomes-peers-group.png',
    source: { kind: 'file', src: '/videos/journey-bg.mp4' },
    duration: '4:02',
    category: 'Next Gen Entrepreneurs',
    meta: 'Next-gen promoter, Doshi Labs · Ahmedabad',
    description: 'My father and I could not have this conversation at home. We could have it in front of eleven other families.',
  },
]

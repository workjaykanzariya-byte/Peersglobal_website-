export type MediaCoverage = {
  outlet: string
  headline: string
  date: string
  url: string
}

export type MagazineIssue = {
  issue: number
  title: string
  date: string
  coverImage?: string
  downloadUrl?: string
}

export type VideoItem = {
  id: string
  title: string
  duration: string
  category: string
  thumbnail?: string
}

export type PodcastEpisode = {
  id: string
  episode: number
  title: string
  guest: string
  date: string
  duration: string
}

export const PRESS_COVERAGE: MediaCoverage[] = [
  {
    outlet: 'The Economic Times',
    headline: "Peers Global: Building India's first governed peer-circle ecosystem for SMEs",
    date: 'March 2026',
    url: '#',
  },
  {
    outlet: 'VyapaarJagat',
    headline: 'Dr. Pravin Parmar on the LSR model and why networking alone never scales businesses',
    date: 'February 2026',
    url: '#',
  },
  {
    outlet: 'Entrepreneur India',
    headline: '19 circles, 11 cities: How Peers Global is rewriting the rules of business communities',
    date: 'January 2026',
    url: '#',
  },
  {
    outlet: 'YourStory',
    headline: "From VyapaarJagat to Peers Global — Dr. Pravin Parmar's evolution as a community architect",
    date: 'December 2025',
    url: '#',
  },
  {
    outlet: 'Financial Express',
    headline: '₹412 Cr in referred business value — the Peers Global economy in numbers',
    date: 'November 2025',
    url: '#',
  },
  {
    outlet: 'Times of India (Ahmedabad)',
    headline: "Ahmedabad's fastest-growing business community expands to 11 Indian cities",
    date: 'October 2025',
    url: '#',
  },
]

export const MAGAZINE_ISSUES: MagazineIssue[] = [
  { issue: 12, title: 'The Leadership Issue', date: 'July 2026' },
  { issue: 11, title: 'Scaling Playbooks 2026', date: 'June 2026' },
  { issue: 10, title: 'Women Who Build', date: 'May 2026' },
  { issue: 9, title: 'The Capital Cycle', date: 'April 2026' },
  { issue: 8, title: 'Healthcare India 2026', date: 'March 2026' },
  { issue: 7, title: 'Manufacturing Renaissance', date: 'February 2026' },
]

export const VIDEOS: VideoItem[] = [
  { id: 'v1', title: 'What is a Governed Circle?', duration: '8:42', category: 'Explainer' },
  { id: 'v2', title: 'The LSR Model — How 150 Minutes Can Change a Business', duration: '12:15', category: 'Explainer' },
  { id: 'v3', title: 'Category Exclusivity — Why It Works', duration: '6:30', category: 'Explainer' },
  { id: 'v4', title: 'How a Hot Seat Works', duration: '9:10', category: 'Explainer' },
  { id: 'v5', title: 'Becoming a Circle Founder — The Economics', duration: '14:22', category: 'Leadership' },
  { id: 'v6', title: 'Unity App Walkthrough', duration: '7:55', category: 'Product' },
  { id: 'v7', title: 'Healthcare One 2026 Highlights', duration: '4:18', category: 'Events' },
  { id: 'v8', title: 'Member Story: ₹3.2 Cr in 6 Months (Priya Nair, Tech Circle)', duration: '11:40', category: 'Stories' },
]

export const PODCAST_EPISODES: PodcastEpisode[] = [
  { id: 'pe1', episode: 24, title: 'Building for Depth, Not Scale', guest: 'Dr. Pravin Parmar', date: 'July 2026', duration: '48 min' },
  { id: 'pe2', episode: 23, title: 'Why Healthcare Entrepreneurs Need Peer Accountability', guest: 'Dr. Hetal Mehta', date: 'June 2026', duration: '41 min' },
  { id: 'pe3', episode: 22, title: 'The Circle Founder Playbook', guest: 'Rohit Shah', date: 'May 2026', duration: '55 min' },
  { id: 'pe4', episode: 21, title: 'From ₹0 to ₹412 Cr in Referred Business Value', guest: 'Dr. Pravin Parmar', date: 'April 2026', duration: '62 min' },
  { id: 'pe5', episode: 20, title: 'Succession Planning in Family Business', guest: 'Amit Rawal', date: 'March 2026', duration: '44 min' },
  { id: 'pe6', episode: 19, title: 'Women in Business: Owning the Room', guest: 'Sonal Patel', date: 'February 2026', duration: '38 min' },
]

export const MEDIA_STATS = {
  magazineIssues: 12,
  videos: 25,
  podcastEpisodes: 24,
}

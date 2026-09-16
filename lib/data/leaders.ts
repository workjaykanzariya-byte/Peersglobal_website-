export type Leader = {
  id: string
  name: string
  role: string
  roleCode: 'CF' | 'CD' | 'ID' | 'RED' | 'LT'
  circle?: string
  circleSlug?: string
  city: string
  company: string
  bio: string
  photo?: string
}

// All member and leadership data is dynamically fetched from Unity App PostgreSQL Backend API
export const LEADERS: Leader[] = []

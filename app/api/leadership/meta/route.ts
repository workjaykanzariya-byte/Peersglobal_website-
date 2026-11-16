import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

interface LeadershipRoleMeta {
  key: string
  name: string
  short_name: string
  category: string
  belonging_type: 'district' | 'ecosystem' | 'industry' | 'circle' | 'committee'
  description: string
}

const ALLOWED_ROLES: LeadershipRoleMeta[] = [
  {
    key: 'ded',
    name: 'District Executive Director (DED)',
    short_name: 'DED',
    category: 'District Governance',
    belonging_type: 'district',
    description: 'Lead executive governance, chapter health, and strategic ecosystem expansion across the District.',
  },
  {
    key: 'eed',
    name: 'Ecosystem Executive Director (EED)',
    short_name: 'EED',
    category: 'Ecosystem Governance',
    belonging_type: 'ecosystem',
    description: 'Oversee multi-district ecosystem operations, national trade corridors, and leadership standards.',
  },
  {
    key: 'industry_director',
    name: 'Industry Director',
    short_name: 'Industry Director',
    category: 'Industry Governance',
    belonging_type: 'industry',
    description: 'Lead sectoral trade corridors, cross-border industry councils, and vertical masterminds.',
  },
  {
    key: 'circle_director',
    name: 'Circle Director',
    short_name: 'Circle Director',
    category: 'Circle Governance',
    belonging_type: 'circle',
    description: 'Direct strategic circle operations, steward chapter health, and nurture high peer engagement.',
  },
  {
    key: 'chair',
    name: 'Circle Chair',
    short_name: 'Circle Chair',
    category: 'Circle Leadership',
    belonging_type: 'circle',
    description: 'Preside over chapter meetings, uphold community values, and lead member onboarding.',
  },
  {
    key: 'vice_chair',
    name: 'Circle Vice Chair',
    short_name: 'Vice Chair',
    category: 'Circle Leadership',
    belonging_type: 'circle',
    description: 'Partner with the Chair in chapter administration, attendance discipline, and peer retention.',
  },
  {
    key: 'circle_leader',
    name: 'Circle Leader',
    short_name: 'Circle Leader',
    category: 'Circle Leadership',
    belonging_type: 'circle',
    description: 'Champion peer growth, active collaborations, and high-impact chapter agendas.',
  },
  {
    key: 'circle_founder',
    name: 'Circle Founder',
    short_name: 'Circle Founder',
    category: 'Circle Leadership',
    belonging_type: 'circle',
    description: 'Convene, incubate, and launch a new Peers Global Circle chapter in your region.',
  },
  {
    key: 'secretary',
    name: 'Circle Secretary',
    short_name: 'Secretary',
    category: 'Circle Administration',
    belonging_type: 'circle',
    description: 'Maintain official meeting minutes, chapter compliance records, and member communications.',
  },
  {
    key: 'committee_leader',
    name: 'Committee Leader',
    short_name: 'Committee Leader',
    category: 'Committee Leadership',
    belonging_type: 'committee',
    description: 'Direct specialized committees for business growth, impacts, ethics, or memberships.',
  },
]

const COMMITTEES = [
  { id: 'business-growth', name: 'Business Growth Committee', description: 'Driving bilateral member transactions and venture partnerships' },
  { id: 'membership-growth', name: 'Membership Growth Committee', description: 'Screening and curating high-trust new member applications' },
  { id: 'events-impacts', name: 'Events & Impacts Committee', description: 'Curating district summits, masterminds, and social impact drives' },
  { id: 'ethics-governance', name: 'Ethics & Governance Committee', description: 'Upholding peer standards and dispute mediation' },
]

const DEFAULT_CIRCLES = [
  { id: 'afbe25b4-90da-4580-b1af-0a2098e7a2b6', name: 'ChangeMakers ONE', slug: 'changemakers-one', city: 'Ahmedabad' },
  { id: 'circle-surat-alpha', name: 'Surat Alpha Circle', slug: 'surat-alpha-circle', city: 'Surat' },
  { id: 'circle-surat-titans', name: 'Surat Titans Circle', slug: 'surat-titans-circle', city: 'Surat' },
  { id: 'circle-ahmedabad-pioneers', name: 'Ahmedabad Pioneers Circle', slug: 'ahmedabad-pioneers-circle', city: 'Ahmedabad' },
  { id: 'circle-mumbai-elite', name: 'Mumbai Financial Core Circle', slug: 'mumbai-financial-core-circle', city: 'Mumbai' },
  { id: 'circle-delhi-ncr-champions', name: 'Delhi NCR Champions Circle', slug: 'delhi-ncr-champions-circle', city: 'Delhi' },
  { id: 'circle-bengaluru-tech', name: 'Bengaluru Tech & Venture Circle', slug: 'bengaluru-tech-venture-circle', city: 'Bengaluru' },
  { id: 'circle-pune-innovators', name: 'Pune Innovators Circle', slug: 'pune-innovators-circle', city: 'Pune' },
  { id: 'circle-vadodara-industrial', name: 'Vadodara Industrial Circle', slug: 'vadodara-industrial-circle', city: 'Vadodara' },
  { id: 'circle-rajkot-enterprise', name: 'Rajkot Enterprise Circle', slug: 'rajkot-enterprise-circle', city: 'Rajkot' },
]

const DEFAULT_INDUSTRIES = [
  { id: 'ind-1', name: 'Manufacturing & Engineering', slug: 'manufacturing-engineering' },
  { id: 'ind-2', name: 'Information Technology & Software', slug: 'information-technology-software' },
  { id: 'ind-3', name: 'Textiles, Apparel & Fashion', slug: 'textiles-apparel-fashion' },
  { id: 'ind-4', name: 'Real Estate, Construction & Infrastructure', slug: 'real-estate-construction-infrastructure' },
  { id: 'ind-5', name: 'Chemicals, Petrochemicals & Polymers', slug: 'chemicals-petrochemicals-polymers' },
  { id: 'ind-6', name: 'Gems, Jewellery & Luxury', slug: 'gems-jewellery-luxury' },
  { id: 'ind-7', name: 'Healthcare, Pharma & Medical Devices', slug: 'healthcare-pharma-medical-devices' },
  { id: 'ind-8', name: 'Financial Services, Banking & Fintech', slug: 'financial-services-banking-fintech' },
  { id: 'ind-9', name: 'Food, FMCG & Agri-Business', slug: 'food-fmcg-agri-business' },
  { id: 'ind-10', name: 'Logistics, Supply Chain & Warehousing', slug: 'logistics-supply-chain-warehousing' },
  { id: 'ind-11', name: 'Renewable Energy & Environmental Tech', slug: 'renewable-energy-environmental-tech' },
  { id: 'ind-12', name: 'Automotive & Electric Mobility', slug: 'automotive-electric-mobility' },
  { id: 'ind-13', name: 'Retail, E-Commerce & Consumer Brands', slug: 'retail-e-commerce-consumer-brands' },
  { id: 'ind-14', name: 'Professional Services, Legal & Consulting', slug: 'professional-services-legal-consulting' },
  { id: 'ind-15', name: 'Education, EdTech & Skilling', slug: 'education-edtech-skilling' },
  { id: 'ind-16', name: 'Media, Advertising & Entertainment', slug: 'media-advertising-entertainment' },
  { id: 'ind-17', name: 'Hospitality, Tourism & Travel', slug: 'hospitality-tourism-travel' },
  { id: 'ind-18', name: 'International Trade, Import & Export', slug: 'international-trade-import-export' },
]

export async function GET() {
  let circles = DEFAULT_CIRCLES
  let industries = DEFAULT_INDUSTRIES

  // 1. Fetch live circles from production
  try {
    const res = await fetch('https://peersunity.com/api/v1/leadership/public/circles', {
      headers: { Accept: 'application/json' },
      next: { revalidate: 3600 },
    })
    if (res.ok) {
      const json = await res.json()
      const list = json?.data || json
      if (Array.isArray(list) && list.length > 0) {
        circles = list.map((c: any) => ({
          id: String(c.id),
          name: c.name,
          slug: c.slug || c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          city: c.city || 'National',
        }))
      }
    }
  } catch (err) {
    console.warn('Error fetching live circles:', err)
  }

  // 2. Fetch live industries from production
  try {
    const res = await fetch('https://peersunity.com/api/v1/industries/tree', {
      headers: { Accept: 'application/json' },
      next: { revalidate: 3600 },
    })
    if (res.ok) {
      const json = await res.json()
      const list = json?.data || json
      if (Array.isArray(list) && list.length > 0) {
        industries = list.map((i: any) => ({
          id: String(i.id),
          name: i.name,
          slug: i.slug || i.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        }))
      }
    }
  } catch (err) {
    console.warn('Error fetching live industries:', err)
  }

  return NextResponse.json({
    success: true,
    campaign_id: '23ba107a-f314-4cd9-b04a-7af04951f95c',
    campaign_name: 'National Circle Chair & Vice Chair Selection 2026',
    roles: ALLOWED_ROLES,
    circles,
    industries,
    committees: COMMITTEES,
  })
}

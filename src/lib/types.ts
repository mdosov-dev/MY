export interface Story {
  id: string
  title: string
  excerpt: string
  body: string
  category: string
  author: string | null
  location: string | null
  image_url: string | null
  published_at: string
  created_at: string
}

export interface ContactSubmission {
  name: string
  email: string
  country?: string
  church_or_organization?: string
  message: string
}

export const STORY_CATEGORIES = [
  'Ministry Updates',
  'Testimonies',
  'Camp Reports',
  'School of Leadership Updates',
  'Social Outreach Stories',
  'Prayer Requests',
  'Partner Stories',
  'Mission Center Updates',
] as const

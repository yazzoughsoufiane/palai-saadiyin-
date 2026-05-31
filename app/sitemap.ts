import { MetadataRoute } from 'next'
import { rugs } from '@/data/rugs'
import { journal } from '@/data/journal'

const BASE = 'https://cosyrac.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/collection`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/origins`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/maison`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/journal`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/visit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...rugs.map((r) => ({
      url: `${BASE}/collection/${r.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...journal.map((e) => ({
      url: `${BASE}/journal/${e.slug}`,
      lastModified: new Date(e.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rootit.fi'

  const articles = [
    'wordpress-ei-toimi',
    'sivun-nopeus',
    'domain-ja-dns',
    'verkkosivujen-tietoturva',
    'sivu-ei-tuo-yhteydenottoja',
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/artikkelit`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...articles.map((slug) => ({
      url: `${baseUrl}/artikkelit/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/tietosuoja`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ] 
}

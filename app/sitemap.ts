import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://startupeco.com'
  
  const staticPages = [
    '',
    '/about',
    '/events',
    '/startups',
    '/community',
    '/initiatives',
    '/gallery',
    '/contact',
    '/onboarding',
    '/help',
    '/privacy',
    '/terms',
    '/cookies',
    '/signin'
  ]

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1 : route === '/about' ? 0.9 : 0.8,
  }))

  // In a real app, you'd fetch dynamic routes from your database
  const dynamicRoutes = [
    // Example dynamic routes - replace with actual data
    {
      url: `${baseUrl}/events/startup-pitch-night`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/startups/ecotech-solutions`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ]

  return [...staticRoutes, ...dynamicRoutes]
}
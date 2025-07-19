import { MetadataRoute } from 'next';

export const revalidate = 60; // Regenerate every 60 seconds

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'http://localhost:3001';

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
    '/signin',
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1 : route === '/about' ? 0.9 : 0.8,
  }));

  const dynamicRoutes = [
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
  ];

  return [...staticRoutes, ...dynamicRoutes];
}
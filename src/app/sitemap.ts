import { MetadataRoute } from 'next';
import { blogData } from '@/data/siteData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webgrowtech.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/case-studies',
    '/careers',
    '/blog',
    '/pricing',
    '/resources',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const blogRoutes = blogData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}

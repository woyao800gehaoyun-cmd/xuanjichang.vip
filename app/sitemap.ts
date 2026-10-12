import type { MetadataRoute } from 'next';
import { getAllReviews } from '@/lib/posts';
import { sections } from '@/lib/site-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xuanjichang.vip';
  const sectionPages = sections.map((section) => ({
    url: `${baseUrl}/${section.slug}/`,
    lastModified: new Date('2026-10-12'),
    changeFrequency: 'monthly' as const,
    priority: section.slug === 'recommendations' ? 0.9 : 0.7,
  }));
  const reviewPages = getAllReviews().map((review) => ({
    url: `${baseUrl}/reviews/${review.slug}/`,
    lastModified: new Date(review.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  return [
    { url: baseUrl, lastModified: new Date('2026-10-12'), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/reviews/`, lastModified: new Date('2026-10-12'), changeFrequency: 'weekly', priority: 0.9 },
    ...sectionPages,
    ...reviewPages,
  ];
}

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://xuanjichang.vip/sitemap.xml',
    host: 'https://xuanjichang.vip',
  };
}

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { ReviewFrontmatter, ReviewPost } from '@/types/review';

const reviewsDirectory = path.join(process.cwd(), 'content', 'reviews');

function normalizeFrontmatter(data: Record<string, unknown>): ReviewFrontmatter {
  return {
    title: String(data.title ?? ''),
    description: String(data.description ?? ''),
    brandName: String(data.brandName ?? ''),
    overallScore: Number(data.overallScore ?? 0),
    protocols: Array.isArray(data.protocols) ? data.protocols.map(String) : [],
    transitType: String(data.transitType ?? ''),
    pricing: String(data.pricing ?? ''),
    affiliateUrl: String(data.affiliateUrl ?? '#'),
    pros: Array.isArray(data.pros) ? data.pros.map(String) : [],
    cons: Array.isArray(data.cons) ? data.cons.map(String) : [],
    date: String(data.date ?? ''),
    entryLocation: data.entryLocation ? String(data.entryLocation) : undefined,
    clients: data.clients ? String(data.clients) : undefined,
    latency: typeof data.latency === 'object' && data.latency !== null
      ? Object.fromEntries(Object.entries(data.latency).map(([key, value]) => [key, Number(value)]))
      : undefined,
    streaming: data.streaming ? String(data.streaming) : undefined,
    tagline: data.tagline ? String(data.tagline) : undefined,
    couponCode: data.couponCode ? String(data.couponCode) : undefined,
    editorPick: Boolean(data.editorPick),
  };
}

export function getReviewSlugs(): string[] {
  if (!fs.existsSync(reviewsDirectory)) return [];
  return fs.readdirSync(reviewsDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export function getReviewBySlug(slug: string): ReviewPost | null {
  const filePath = path.join(reviewsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(source);
  return { slug, content: parsed.content, ...normalizeFrontmatter(parsed.data) };
}

export function getAllReviews(): ReviewPost[] {
  return getReviewSlugs()
    .map((slug) => getReviewBySlug(slug))
    .filter((review): review is ReviewPost => Boolean(review))
    .sort((a, b) => Number(Boolean(b.editorPick)) - Number(Boolean(a.editorPick)) || new Date(b.date).getTime() - new Date(a.date).getTime());
}

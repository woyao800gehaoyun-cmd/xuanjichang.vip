import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, ExternalLink, MapPin, Monitor, Network, X } from 'lucide-react';
import { remark } from 'remark';
import html from 'remark-html';
import { getAllReviews, getReviewBySlug } from '@/lib/posts';

type ReviewPageProps = { params: { slug: string } };

export function generateStaticParams() {
  return getAllReviews().map((review) => ({ slug: review.slug }));
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const review = getReviewBySlug(params.slug);
  if (!review) return { title: '评测不存在' };
  const description = review.description.slice(0, 150);
  return {
    title: review.title,
    description,
    openGraph: { title: review.title, description, type: 'article', publishedTime: review.date, url: `/reviews/${review.slug}/` },
    twitter: { card: 'summary_large_image', title: review.title, description },
  };
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const review = getReviewBySlug(params.slug);
  if (!review) notFound();
  const rendered = await remark().use(html).process(review.content);
  const articleHtml = rendered.toString();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: review.title,
    datePublished: review.date,
    author: { '@type': 'Organization', name: '线路观测站编辑部' },
    reviewBody: review.description,
    reviewRating: { '@type': 'Rating', ratingValue: review.overallScore, bestRating: 10, worstRating: 0 },
    positiveNotes: review.pros,
    negativeNotes: review.cons,
    itemReviewed: {
      '@type': 'Product',
      name: review.brandName,
      brand: { '@type': 'Brand', name: review.brandName },
      offers: { '@type': 'Offer', price: review.pricing, url: review.affiliateUrl },
    },
  };

  return <><Script id="review-jsonld" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(jsonLd)}</Script><main className="min-h-screen bg-canvas"><div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14"><Link href="/" className="mb-10 inline-flex items-center gap-2 text-xs text-slate-500 transition hover:text-accent"><ArrowLeft size={14} />返回评测索引</Link><div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start"><article><header className="border-b border-slate-800 pb-8"><div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-500"><span className="border border-accent/30 bg-accent/10 px-2.5 py-1 text-accent">深度实测</span><span>{review.date}</span><span>·</span><span>{review.transitType}</span></div><h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-50 sm:text-5xl">{review.title}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">{review.description}</p></header><div className="mt-8 grid gap-4 sm:grid-cols-2"><div className="border border-status/30 bg-status/5 p-5"><div className="text-[10px] uppercase tracking-[0.18em] text-status">综合得分</div><div className="mt-2 flex items-baseline gap-2"><span className="text-4xl font-semibold text-slate-50">{review.overallScore.toFixed(1)}</span><span className="text-xs text-slate-500">/ 10</span></div></div><a href={review.affiliateUrl} rel="nofollow sponsored" className="flex items-center justify-between border border-accent/30 bg-accent/10 p-5 text-accent transition hover:bg-accent/15"><div><div className="text-[10px] uppercase tracking-[0.18em]">官方直达</div><div className="mt-2 text-sm font-medium">查看当前套餐与返利</div></div><ExternalLink size={18} /></a></div><div className="mt-8 grid gap-px border border-slate-800 bg-slate-800 sm:grid-cols-2"><InfoCell icon={<span className="text-warning">¥</span>} label="起步套餐" value={review.pricing} /><InfoCell icon={<Network size={15} />} label="专线拓扑" value={review.transitType} /><InfoCell icon={<MapPin size={15} />} label="入口机房" value={review.entryLocation ?? '待补充'} /><InfoCell icon={<Monitor size={15} />} label="支持客户端" value={review.clients ?? '主流平台'} /></div><div className="prose prose-invert max-w-none prose-headings:font-semibold prose-a:text-accent mt-12" dangerouslySetInnerHTML={{ __html: articleHtml }} /></article><aside className="space-y-4 lg:sticky lg:top-24"><div className="border border-slate-800 bg-card p-5"><h2 className="text-sm font-medium text-slate-100">优势</h2><ul className="mt-4 space-y-3">{review.pros.map((item) => <li key={item} className="flex gap-2 text-xs leading-5 text-slate-300"><Check size={15} className="mt-0.5 shrink-0 text-status" />{item}</li>)}</ul></div><div className="border border-slate-800 bg-card p-5"><h2 className="text-sm font-medium text-slate-100">不足</h2><ul className="mt-4 space-y-3">{review.cons.map((item) => <li key={item} className="flex gap-2 text-xs leading-5 text-slate-300"><X size={15} className="mt-0.5 shrink-0 text-red-400" />{item}</li>)}</ul></div><div className="border border-slate-800 bg-card p-5"><h2 className="text-sm font-medium text-slate-100">支持协议</h2><div className="mt-3 flex flex-wrap gap-2">{review.protocols.map((protocol) => <span key={protocol} className="border border-slate-700 px-2 py-1 text-[10px] text-slate-400">{protocol}</span>)}</div></div></aside></div></div></main></>;
}

function InfoCell({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className="bg-card p-5"><div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-slate-500">{icon}{label}</div><div className="mt-2 text-sm text-slate-200">{value}</div></div>;
}

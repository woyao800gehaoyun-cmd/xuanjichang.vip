import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CircleGauge,
  ExternalLink,
  Gauge,
  MapPin,
  Monitor,
  Network,
  ShieldCheck,
  X,
} from 'lucide-react';
import { remark } from 'remark';
import html from 'remark-html';
import { getAllReviews, getReviewBySlug } from '@/lib/posts';

type ReviewPageProps = { params: { slug: string } };

export const dynamicParams = false;

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
    alternates: { canonical: `/reviews/${review.slug}/` },
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
    author: { '@type': 'Organization', name: '选梯子编辑部', url: 'https://xuanjichang.vip' },
    reviewBody: review.description,
    reviewRating: { '@type': 'Rating', ratingValue: review.overallScore, bestRating: 10, worstRating: 0 },
    positiveNotes: { '@type': 'ItemList', itemListElement: review.pros.map((name, index) => ({ '@type': 'ListItem', position: index + 1, name })) },
    negativeNotes: { '@type': 'ItemList', itemListElement: review.cons.map((name, index) => ({ '@type': 'ListItem', position: index + 1, name })) },
    itemReviewed: {
      '@type': 'Product',
      name: review.brandName,
      brand: { '@type': 'Brand', name: review.brandName },
      category: '网络专线与节点服务',
      offers: { '@type': 'Offer', description: review.pricing, url: review.affiliateUrl },
    },
  };

  return (
    <>
      <Script id="review-jsonld" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(jsonLd)}</Script>
      <main className="min-h-screen bg-paper">
        <section className="border-b border-line bg-ink text-white">
          <div className="mx-auto max-w-[1440px] px-5 py-10 lg:px-8 lg:py-16">
            <Link href="/reviews/" className="inline-flex items-center gap-2 text-xs font-bold text-white/50 transition hover:text-white"><ArrowLeft size={14} />返回评测索引</Link>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_260px] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-white/45"><span className="rounded-full bg-brand px-3 py-1.5 text-white">{review.editorPick ? '编辑主推' : '深度实测'}</span><span>{review.date}</span><span>·</span><span>{review.transitType}</span></div>
                <h1 className="text-balance mt-6 max-w-5xl text-4xl font-black leading-[1.06] tracking-[-0.055em] sm:text-6xl">{review.title}</h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-white/60">{review.description}</p>
              </div>
              <div className="rounded-3xl bg-sun p-6 text-ink">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-ink/50">Overall score</p>
                <div className="mt-3 flex items-end"><span className="text-7xl font-black tracking-[-0.08em]">{review.overallScore.toFixed(1)}</span><span className="mb-2 ml-2 text-sm font-bold text-ink/50">/ 10</span></div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-ink/15"><div className="h-full rounded-full bg-ink" style={{ width: `${review.overallScore * 10}%` }} /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:grid-cols-4 lg:px-8">
            <InfoCell icon={<span className="font-black text-coral">¥</span>} label="起步套餐" value={review.pricing} />
            <InfoCell icon={<Network size={16} />} label="专线拓扑" value={review.transitType} />
            <InfoCell icon={<MapPin size={16} />} label="入口机房" value={review.entryLocation ?? '待补充'} />
            <InfoCell icon={<Monitor size={16} />} label="支持客户端" value={review.clients ?? '主流平台'} />
          </div>
        </section>

        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8 lg:py-16">
          <article>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#BFE2D5] bg-[#EAF7F2] p-6">
                <div className="flex items-center gap-2 font-black text-mint"><Check size={18} />优势</div>
                <ul className="mt-5 space-y-3">{review.pros.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-ink"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />{item}</li>)}</ul>
              </div>
              <div className="rounded-3xl border border-[#F0C8BE] bg-[#FFF0EC] p-6">
                <div className="flex items-center gap-2 font-black text-coral"><X size={18} />不足</div>
                <ul className="mt-5 space-y-3">{review.cons.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-ink"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />{item}</li>)}</ul>
              </div>
            </div>

            <div className="editorial-rule mt-12 h-px" />
            <div className="prose prose-lg mt-10 max-w-none prose-headings:font-black prose-headings:tracking-[-0.035em] prose-h2:mt-14 prose-h2:text-3xl prose-p:leading-8 prose-a:font-bold" dangerouslySetInnerHTML={{ __html: articleHtml }} />

            <div className="mt-14 rounded-3xl border border-line bg-cream p-6 text-sm leading-7 text-muted">
              <strong className="text-ink">结论边界：</strong> 网络质量、出口 IP 和平台策略都会变化。本文仅代表标注测试周期，不构成永久可用承诺。购买前应优先选择支持月付和合理退款窗口的方案。
            </div>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <a href={review.affiliateUrl} rel="nofollow sponsored" className="group block rounded-3xl bg-brand p-6 text-white shadow-lift transition hover:bg-brand-dark">
              <div className="flex items-start justify-between"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-white/55">Official link</p><h2 className="mt-2 text-xl font-black">查看官方套餐</h2></div><ExternalLink size={20} /></div>
              <p className="mt-5 text-sm leading-6 text-white/65">通过官方页面核对最新价格、流量与退款规则。</p>
              <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4 text-sm font-bold"><span>官方直达 / 可能含返利</span><ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
            </a>

            {review.couponCode && <div className="rounded-3xl border border-[#F1D38A] bg-[#FFF8DF] p-6 text-ink"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#9B6A00]">优惠码</p><div className="mt-3 flex items-center justify-between gap-3"><code className="rounded-xl bg-white px-3 py-2 text-lg font-black tracking-[0.08em] text-ink">{review.couponCode}</code><span className="text-xs font-bold text-[#9B6A00]">结算时填写</span></div><p className="mt-3 text-xs leading-5 text-muted">优惠有效期与适用套餐以服务商页面为准，本站不保证优惠长期有效。</p></div>}

            <div className="rounded-3xl border border-line bg-white p-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-brand">Protocols</p>
              <h2 className="mt-2 text-lg font-black text-ink">支持协议</h2>
              <div className="mt-4 flex flex-wrap gap-2">{review.protocols.map((protocol) => <span key={protocol} className="rounded-full bg-paper px-3 py-1.5 text-xs font-bold text-muted">{protocol}</span>)}</div>
            </div>

            <div className="rounded-3xl bg-ink p-6 text-white">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-sun">Testing focus</p>
              <div className="mt-5 space-y-4"><SideMetric icon={Gauge} label="晚高峰吞吐" /><SideMetric icon={CircleGauge} label="持续丢包与抖动" /><SideMetric icon={ShieldCheck} label="流媒体 / AI 风控" /></div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

function InfoCell({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className="border-r border-line px-3 py-6 last:border-r-0 sm:px-6"><div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.13em] text-muted">{icon}{label}</div><div className="mt-2 text-sm font-bold leading-5 text-ink">{value}</div></div>;
}

function SideMetric({ icon: Icon, label }: { icon: typeof Gauge; label: string }) {
  return <div className="flex items-center gap-3 text-sm font-semibold text-white/70"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sun"><Icon size={17} /></span>{label}</div>;
}

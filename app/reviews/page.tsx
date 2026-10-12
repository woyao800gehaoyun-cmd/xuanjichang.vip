import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, FlaskConical, Gauge, Route, ShieldCheck } from 'lucide-react';
import { getAllReviews } from '@/lib/posts';

export const metadata: Metadata = {
  title: '梯子评测',
  description: '网络专线与节点服务的深度梯子评测索引，记录晚高峰吞吐、丢包、线路结构、协议兼容和平台解锁结果。',
  alternates: { canonical: '/reviews/' },
};

export default function ReviewsIndexPage() {
  const reviews = getAllReviews();
  return (
    <main className="min-h-screen bg-paper">
      <section className="border-b border-line bg-ink py-14 text-white lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div><p className="text-xs font-black uppercase tracking-[0.2em] text-sun">INDEPENDENT REVIEWS</p><h1 className="text-balance mt-5 text-5xl font-black tracking-[-0.065em] sm:text-7xl">梯子评测<br /><span className="text-white/35">数据比口号重要。</span></h1><p className="mt-6 max-w-2xl text-base leading-8 text-white/60">每篇评测都标注测试时间、入口网络和判断边界。线路状态可能变化，因此旧数据不会被包装成永久承诺。</p></div>
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-3xl bg-white/10"><IndexMetric icon={Gauge} value="晚高峰" label="固定窗口" /><IndexMetric icon={Route} value="多节点" label="延迟与丢包" /><IndexMetric icon={ShieldCheck} value="实测" label="解锁与风控" /></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
          <div className="flex items-end justify-between border-b border-line pb-5"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-brand">REVIEW ARCHIVE</p><h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-ink">全部实测记录</h2></div><span className="text-xs font-semibold text-muted">共 {reviews.length} 篇</span></div>
          <div className="mt-8 grid gap-5">
            {reviews.map((review, index) => (
              <Link key={review.slug} href={`/reviews/${review.slug}/`} className="group grid gap-6 rounded-3xl border border-line bg-paper p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-card md:grid-cols-[80px_1fr_auto] md:items-center md:p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-2xl font-black text-sun">{String(index + 1).padStart(2, '0')}</div>
                <div><div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-muted"><span className="rounded-full bg-white px-3 py-1 text-brand">{review.transitType}</span><span>{review.date}</span></div><h3 className="mt-3 text-2xl font-black tracking-[-0.035em] text-ink transition group-hover:text-brand sm:text-3xl">{review.title}</h3><p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{review.description}</p><div className="mt-4 flex flex-wrap gap-2">{review.protocols.map((protocol) => <span key={protocol} className="text-[11px] font-semibold text-muted">#{protocol}</span>)}</div></div>
                <div className="flex items-center justify-between gap-8 border-t border-line pt-4 md:block md:border-l md:border-t-0 md:pl-8 md:pt-0"><div><span className="text-4xl font-black text-brand">{review.overallScore.toFixed(1)}</span><span className="text-xs text-muted">/10</span></div><ArrowUpRight className="mt-3 text-coral transition group-hover:translate-x-1 group-hover:-translate-y-1" size={20} /></div>
              </Link>
            ))}
            {!reviews.length && <div className="rounded-3xl border border-dashed border-line bg-paper p-10 text-center"><FlaskConical size={30} className="mx-auto text-brand" /><h3 className="mt-4 text-xl font-black text-ink">评测正在整理</h3><p className="mt-2 text-sm text-muted">新的测试记录会在完成多网络交叉验证后发布。</p></div>}
          </div>
          <div className="mt-10 text-right"><Link href="/recommendations/" className="inline-flex items-center gap-2 text-sm font-black text-brand">按场景查看推荐 <ArrowRight size={16} /></Link></div>
        </div>
      </section>
    </main>
  );
}

function IndexMetric({ icon: Icon, value, label }: { icon: typeof Gauge; value: string; label: string }) {
  return <div className="bg-white/5 p-4 sm:p-5"><Icon size={18} className="text-sun" /><div className="mt-5 text-sm font-black">{value}</div><div className="mt-1 text-[10px] text-white/45">{label}</div></div>;
}

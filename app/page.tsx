import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, ChevronRight, Gauge, Globe2, LockKeyhole, Radar, Signal, Zap } from 'lucide-react';
import { getAllReviews } from '@/lib/posts';

const fallbackReview = {
  slug: 'jisu-zhuanxian',
  title: '极速专线 2026 深度评测',
  description: '双程 IPLC 架构在晚高峰仍保持稳定吞吐，适合对跨境办公和流媒体稳定性有要求的用户。',
  brandName: '极速专线',
  overallScore: 9.1,
  protocols: ['Shadowsocks', 'Trojan', 'Hysteria 2'],
  transitType: '双程 IPLC 专线',
  pricing: '¥20/月起',
  affiliateUrl: 'https://example.com',
  pros: ['晚高峰吞吐稳定', 'ChatGPT / Claude 可用', '入口节点覆盖清晰'],
  cons: ['不支持按量付费', '客服仅限工单'],
  date: '2026-10-10',
  entryLocation: '上海 BGP 入口',
  clients: 'Windows / macOS / iOS / Android',
  latency: { 香港: 38, 日本: 62, 新加坡: 86, 美国: 158 },
  streaming: 'Netflix 4K · ChatGPT · Claude 全解锁',
  tagline: '晚高峰仍有余量的双程专线',
  content: '',
};

export default function HomePage() {
  const reviews = getAllReviews();
  const champion = reviews[0] ?? fallbackReview;
  const reviewList = reviews.length > 0 ? reviews : [fallbackReview];
  const latency = champion.latency ?? fallbackReview.latency!;

  return (
    <main className="grid-noise min-h-screen">
      <section className="mx-auto max-w-7xl px-5 pb-14 pt-14 lg:px-8 lg:pt-20">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-accent"><span className="h-px w-8 bg-accent" />Independent route intelligence</div>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">把线路参数，变成可复核的实测结论。</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">聚焦 IPLC、IEPL 与跨境节点服务的晚高峰吞吐、物理时延、协议兼容性和平台风控表现。</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2" id="monitor">
          <article className="relative overflow-hidden border border-slate-800 bg-card p-6 shadow-glow lg:col-span-2 lg:row-span-2 lg:p-8">
            <div className="absolute right-0 top-0 h-48 w-48 bg-accent/5 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-10">
              <div>
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-3 py-1.5 text-[11px] font-medium tracking-[0.12em] text-accent"><Zap size={13} />编辑推荐 · 2026</span>
                  <span className="text-xs text-slate-500">更新于 {champion.date}</span>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500">年度冠军 / {champion.transitType}</p>
                    <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">{champion.brandName}</h2>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">{champion.tagline ?? champion.description}</p>
                  </div>
                  <div className="hidden shrink-0 text-right sm:block"><div className="text-4xl font-semibold text-accent">{champion.overallScore.toFixed(1)}</div><div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-500">/ 10 overall</div></div>
                </div>
              </div>
              <div>
                <div className="mb-6 grid gap-3 sm:grid-cols-3">
                  <div className="border border-slate-800 bg-slate-950/30 p-4"><div className="mb-2 flex items-center gap-2 text-xs text-slate-500"><Gauge size={14} className="text-status" />晚高峰吞吐</div><div className="text-lg font-semibold text-slate-100">1000+ <span className="text-xs font-normal text-slate-500">Mbps</span></div></div>
                  <div className="border border-slate-800 bg-slate-950/30 p-4"><div className="mb-2 flex items-center gap-2 text-xs text-slate-500"><LockKeyhole size={14} className="text-status" />平台解锁</div><div className="text-sm font-medium text-status">{champion.streaming ?? 'Netflix / AI 全解锁'}</div></div>
                  <div className="border border-slate-800 bg-slate-950/30 p-4"><div className="mb-2 flex items-center gap-2 text-xs text-slate-500"><Signal size={14} className="text-accent" />协议栈</div><div className="flex flex-wrap gap-1.5">{champion.protocols.map((protocol) => <span key={protocol} className="text-xs text-slate-300">{protocol}</span>)}</div></div>
                </div>
                <Link href={`/reviews/${champion.slug}`} className="group inline-flex items-center gap-2 bg-accent px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-cyan-200">查看深度实测 <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
              </div>
            </div>
          </article>

          <article className="border border-slate-800 bg-card p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Live telemetry</p><h2 className="mt-1 text-base font-medium text-slate-100">延迟监控</h2></div><Radar size={18} className="text-status" /></div>
            <div className="space-y-4">{Object.entries(latency).map(([location, value]) => <div key={location} className="flex items-center justify-between text-sm"><div className="flex items-center gap-2 text-slate-300"><span className="h-2 w-2 rounded-full bg-status shadow-[0_0_8px_#10B981]" />{location}</div><span className="font-mono text-xs text-slate-400">{value} ms</span></div>)}</div>
            <div className="mt-5 border-t border-slate-800 pt-4 text-[11px] text-slate-500">过去 24 小时 · ICMP P50</div>
          </article>

          <article className="border border-slate-800 bg-card p-5 sm:p-6"><div className="mb-5 flex items-start justify-between"><div><p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Value index</p><h2 className="mt-1 text-base font-medium text-slate-100">性价比评分</h2></div><Globe2 size={18} className="text-warning" /></div><div className="flex items-center gap-5"><div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full" style={{ background: 'conic-gradient(#00F0FF 0 82%, #263247 82% 100%)' }}><div className="flex h-20 w-20 items-center justify-center rounded-full bg-card text-2xl font-semibold text-slate-50">8.2</div></div><div><p className="text-xs leading-5 text-slate-400">同价位中，晚高峰可用带宽和平台解锁覆盖更完整。</p><p className="mt-3 text-xs text-slate-500">起步价 <span className="font-medium text-warning">{champion.pricing}</span></p></div></div></article>
        </div>
      </section>

      <section className="border-t border-slate-800/80 bg-canvas/70">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8"><div className="mb-7 flex items-end justify-between"><div><p className="text-[10px] uppercase tracking-[0.22em] text-accent">Field notes / 评测流</p><h2 className="mt-2 text-2xl font-semibold text-slate-50">最近更新</h2></div><span className="text-xs text-slate-500">{reviewList.length} 篇记录</span></div><div className="grid gap-3">{reviewList.map((review) => <Link key={review.slug} href={`/reviews/${review.slug}`} className="group grid gap-4 border border-slate-800 bg-card p-5 transition hover:border-accent/50 sm:grid-cols-[1.2fr_0.7fr_1.2fr_auto] sm:items-center"><div><div className="mb-1 text-xs text-slate-500">{review.date} · {review.transitType}</div><h3 className="font-medium text-slate-100 group-hover:text-accent">{review.brandName}</h3></div><div className="flex items-baseline gap-2"><span className="text-2xl font-semibold text-accent">{review.overallScore.toFixed(1)}</span><span className="text-[10px] uppercase text-slate-500">/ 10</span></div><div><div className="mb-2 flex flex-wrap gap-1.5">{review.protocols.map((protocol) => <span key={protocol} className="border border-slate-700 px-2 py-1 text-[10px] text-slate-400">{protocol}</span>)}</div><p className="line-clamp-1 text-xs text-slate-500">{review.description}</p></div><ChevronRight size={18} className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-accent" /></Link>)}</div></div>
      </section>
    </main>
  );
}

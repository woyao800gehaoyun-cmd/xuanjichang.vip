import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Bot,
  Check,
  ChevronRight,
  CircleGauge,
  Clock3,
  Download,
  Film,
  Gauge,
  Laptop,
  MapPin,
  Network,
  Route,
  ShieldCheck,
  Sparkles,
  Wifi,
} from 'lucide-react';
import { getAllReviews } from '@/lib/posts';

const fallbackReview = {
  slug: 'jisu-zhuanxian',
  brandName: '极速专线',
  title: '极速专线 2026 深度评测',
  description: '双程 IPLC 架构在晚高峰仍保持稳定吞吐，适合对跨境办公和流媒体稳定性有要求的用户。',
  overallScore: 9.1,
  transitType: '双程 IPLC 专线',
  pricing: '20 元/月起',
  protocols: ['Shadowsocks', 'Trojan', 'Hysteria 2'],
  date: '2026-10-10',
};

const topicCards = [
  { href: '/tutorials/', icon: Laptop, label: '客户端教程', title: '从下载安装到订阅导入', text: 'Windows、macOS、iOS 与 Android 分步配置。', color: 'bg-[#DDE5FF] text-brand' },
  { href: '/downloads/', icon: Download, label: '安全下载', title: '常用客户端版本指南', text: '区分官方项目、商店版本和不可信修改版。', color: 'bg-[#FFE1D8] text-coral' },
  { href: '/ai-tools/', icon: Bot, label: 'AI 工具', title: '地区可用性与账号风控', text: 'ChatGPT、Claude、Gemini 使用环境说明。', color: 'bg-[#FFF0BE] text-[#956500]' },
  { href: '/streaming-tools/', icon: Film, label: '流媒体', title: '解锁检测不等于长期可用', text: '理解出口 IP、片库地区和 4K 播放条件。', color: 'bg-[#D8F1E8] text-mint' },
];

const methodology = [
  { icon: Clock3, title: '固定晚高峰窗口', text: '20:00–22:30 持续采样，避免用凌晨峰值代替日常体验。' },
  { icon: Network, title: '多运营商交叉测试', text: '同一节点在联通、移动、电信入口的表现可能完全不同。' },
  { icon: ShieldCheck, title: '解锁与风控分开记录', text: '能打开页面不等于账号稳定，测试结果会注明时间和地区。' },
];

export default function HomePage() {
  const reviews = getAllReviews();
  const champion = reviews[0] ?? fallbackReview;
  const reviewList = reviews.length ? reviews : [fallbackReview];

  return (
    <main>
      <section className="relative overflow-hidden border-b border-line bg-paper">
        <div className="absolute inset-y-0 right-0 hidden w-[36%] dot-field opacity-50 lg:block" />
        <div className="absolute -right-32 top-24 h-80 w-80 rounded-full bg-sun/40 blur-3xl" />
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="relative z-10 flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-brand">
              <span className="h-2.5 w-2.5 rounded-full bg-coral" />
              独立线路评测与使用指南
            </div>
            <h1 className="text-balance max-w-3xl text-[clamp(3rem,7vw,6.6rem)] font-black leading-[0.93] tracking-[-0.075em] text-ink">
              选线路，<br />先看<span className="relative text-brand">实测<span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-sun/70" /></span>。
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-muted sm:text-lg">不照搬宣传参数。我们记录晚高峰速度、物理时延、协议兼容和出口质量，把复杂网络指标翻译成清楚的购买建议。</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/recommendations/" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand hover:shadow-lift">查看机场推荐 <ArrowRight size={17} /></Link>
              <Link href="/about/" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-sm font-bold text-ink transition hover:border-ink">我们的测试方法</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-line pt-5 text-xs font-semibold text-muted">
              <span className="flex items-center gap-2"><Check size={14} className="text-mint" />晚高峰采样</span>
              <span className="flex items-center gap-2"><Check size={14} className="text-mint" />多网络对照</span>
              <span className="flex items-center gap-2"><Check size={14} className="text-mint" />利益关系披露</span>
            </div>
          </div>

          <div className="relative z-10 lg:pl-6">
            <article className="relative overflow-hidden rounded-4xl bg-brand p-6 text-white shadow-lift sm:p-8">
              <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full border-[32px] border-white/10" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-black text-brand"><BadgeCheck size={14} /> 本期编辑推荐</span>
                  <span className="text-xs text-white/65">更新 {champion.date}</span>
                </div>
                <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-white/60">Featured review / {champion.transitType}</p>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">{champion.brandName}</h2>
                  <div className="shrink-0 text-right"><span className="text-5xl font-black text-sun">{champion.overallScore.toFixed(1)}</span><span className="ml-1 text-sm text-white/60">/10</span></div>
                </div>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">{champion.description}</p>

                <div className="mt-8 grid grid-cols-3 gap-2">
                  <Metric icon={Gauge} value="850" unit="Mbps" label="联通晚高峰" />
                  <Metric icon={Route} value="38" unit="ms" label="香港 P50" />
                  <Metric icon={CircleGauge} value="0.2" unit="%" label="最低丢包" />
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div><div className="text-xs text-white/55">参考起步价</div><div className="mt-1 text-lg font-bold">{champion.pricing}</div></div>
                  <Link href={`/reviews/${champion.slug}/`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-brand transition hover:bg-sun hover:text-ink">阅读完整评测 <ArrowUpRight size={16} /></Link>
                </div>
              </div>
            </article>
            <div className="mx-5 flex items-center justify-between rounded-b-3xl border border-t-0 border-line bg-white px-5 py-4 text-xs text-muted sm:mx-8">
              <span className="flex items-center gap-2"><MapPin size={14} className="text-coral" />上海 BGP 测试入口</span>
              <span className="font-bold text-ink">20:00–22:30</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-[1440px] gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {topicCards.map(({ href, icon: Icon, label, title, text, color }) => (
            <Link key={href} href={href} className="group bg-ink px-5 py-8 transition hover:bg-[#202B43] lg:px-8">
              <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${color}`}><Icon size={20} /></span>
              <div className="mt-6 flex items-center justify-between"><span className="text-[11px] font-black uppercase tracking-[0.16em] text-white/45">{label}</span><ChevronRight size={16} className="text-white/35 transition group-hover:translate-x-1 group-hover:text-sun" /></div>
              <h2 className="mt-2 text-lg font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
          <SectionHeading eyebrow="LATEST FIELD NOTES" title="最近评测" description="只展示已记录测试环境和时间的内容。" href="/reviews/" linkLabel="全部评测" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {reviewList.map((review, index) => (
              <Link key={review.slug} href={`/reviews/${review.slug}/`} className={`group relative overflow-hidden rounded-3xl border border-line p-6 transition hover:-translate-y-1 hover:shadow-card ${index === 0 ? 'bg-paper lg:col-span-2 lg:grid lg:grid-cols-[1fr_auto] lg:gap-10 lg:p-9' : 'bg-white'}`}>
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-muted"><span className="rounded-full bg-cream px-2.5 py-1 text-ink">{review.transitType}</span><span>{review.date}</span></div>
                  <h3 className={`${index === 0 ? 'mt-6 text-3xl sm:text-4xl' : 'mt-5 text-2xl'} font-black tracking-[-0.04em] text-ink transition group-hover:text-brand`}>{review.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{review.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{review.protocols.map((protocol) => <span key={protocol} className="rounded-full border border-line bg-white px-3 py-1 text-[11px] font-semibold text-muted">{protocol}</span>)}</div>
                </div>
                <div className={`${index === 0 ? 'mt-7 flex items-end justify-between border-t border-line pt-5 lg:mt-0 lg:flex-col lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0' : 'mt-7 flex items-end justify-between border-t border-line pt-5'}`}>
                  <div><span className="text-4xl font-black text-brand">{review.overallScore.toFixed(1)}</span><span className="text-xs text-muted"> / 10</span></div>
                  <ArrowUpRight size={20} className="text-coral transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            ))}
            {reviewList.length < 2 && (
              <Link href="/recommendations/" className="group rounded-3xl bg-coral p-7 text-white transition hover:-translate-y-1 hover:shadow-card">
                <Sparkles size={26} />
                <p className="mt-10 text-xs font-black uppercase tracking-[0.16em] text-white/65">Buying guide</p>
                <h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">不知道怎么选？<br />先按场景筛选。</h3>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold">打开推荐指南 <ArrowRight size={16} className="transition group-hover:translate-x-1" /></div>
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="paper-grid border-y border-line bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-coral">HOW WE TEST</span>
              <h2 className="mt-4 text-balance text-4xl font-black leading-tight tracking-[-0.055em] text-ink sm:text-5xl">结论可以变化，<br />测试方法不能含糊。</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted">线路会扩容、拥塞，出口也会被平台重新标记。我们保留测试日期与环境，让读者知道每个结论适用于什么条件。</p>
              <Link href="/about/" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-brand">查看完整评测规范 <ArrowRight size={16} /></Link>
            </div>
            <div className="space-y-4">
              {methodology.map(({ icon: Icon, title, text }, index) => (
                <div key={title} className="grid grid-cols-[auto_1fr] gap-5 rounded-3xl border border-line bg-white p-6 shadow-card sm:grid-cols-[70px_1fr_auto] sm:items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-sun"><Icon size={24} /></div>
                  <div><div className="text-xs font-black text-brand">0{index + 1}</div><h3 className="mt-1 text-xl font-black tracking-[-0.025em] text-ink">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></div>
                  <BookOpen size={20} className="hidden text-line sm:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sun py-14">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div><p className="text-xs font-black uppercase tracking-[0.18em] text-ink/55">START HERE</p><h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-ink">先了解风险，再决定购买。</h2></div>
          <div className="flex flex-wrap gap-3"><Link href="/free-nodes/" className="rounded-full border border-ink px-5 py-3 text-sm font-bold text-ink">免费节点风险</Link><Link href="/contact/" className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-white">提交评测线索</Link></div>
        </div>
      </section>
    </main>
  );
}

function Metric({ icon: Icon, value, unit, label }: { icon: typeof Wifi; value: string; unit: string; label: string }) {
  return <div className="rounded-2xl bg-white/10 p-3 sm:p-4"><Icon size={16} className="text-sun" /><div className="mt-3 text-xl font-black sm:text-2xl">{value}<span className="ml-1 text-[10px] font-semibold text-white/50">{unit}</span></div><div className="mt-1 text-[10px] text-white/55">{label}</div></div>;
}

function SectionHeading({ eyebrow, title, description, href, linkLabel }: { eyebrow: string; title: string; description: string; href: string; linkLabel: string }) {
  return <div className="flex flex-col gap-5 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-brand">{eyebrow}</p><h2 className="mt-2 text-4xl font-black tracking-[-0.055em] text-ink">{title}</h2><p className="mt-2 text-sm text-muted">{description}</p></div><Link href={href} className="inline-flex shrink-0 items-center gap-2 text-sm font-black text-ink">{linkLabel} <ArrowRight size={16} /></Link></div>;
}

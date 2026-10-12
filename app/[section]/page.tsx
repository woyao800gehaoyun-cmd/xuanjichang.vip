import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, CircleAlert, FileText } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getSection, sections } from '@/lib/site-content';

type SectionPageProps = { params: { section: string } };

const accentStyles = {
  blue: { badge: 'bg-[#DDE5FF] text-brand', block: 'bg-brand', text: 'text-brand' },
  coral: { badge: 'bg-[#FFE1D8] text-coral', block: 'bg-coral', text: 'text-coral' },
  mint: { badge: 'bg-[#D8F1E8] text-mint', block: 'bg-mint', text: 'text-mint' },
  sun: { badge: 'bg-[#FFF0BE] text-[#8A6100]', block: 'bg-sun', text: 'text-[#8A6100]' },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return sections.map((section) => ({ section: section.slug }));
}

export function generateMetadata({ params }: SectionPageProps): Metadata {
  const section = getSection(params.section);
  if (!section) return { title: '页面不存在' };
  return {
    title: section.navLabel,
    description: section.description.slice(0, 150),
    alternates: { canonical: `/${section.slug}/` },
    openGraph: { title: `${section.navLabel}｜选梯子`, description: section.description, url: `/${section.slug}/`, type: 'website' },
  };
}

export default function SectionPage({ params }: SectionPageProps) {
  const section = getSection(params.section);
  if (!section) notFound();
  const styles = accentStyles[section.accent];

  return (
    <main className="min-h-screen bg-paper">
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-y-0 right-0 w-1/3 dot-field opacity-35" />
        <div className="mx-auto max-w-[1440px] px-5 py-12 lg:px-8 lg:py-20">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-muted transition hover:text-ink"><ArrowLeft size={14} />返回首页</Link>
          <div className="relative mt-10 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <span className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] ${styles.badge}`}>{section.eyebrow}</span>
              <h1 className="text-balance mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl">{section.title}</h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-muted sm:text-lg">{section.description}</p>
            </div>
            <div className={`rounded-3xl p-6 text-white shadow-card ${styles.block} ${section.accent === 'sun' ? '!text-ink' : ''}`}>
              <p className="text-xs font-black uppercase tracking-[0.16em] opacity-65">栏目概览</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {section.highlights.map((item) => <div key={item.label}><div className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">{item.value}</div><div className="mt-1 text-[10px] font-semibold opacity-60">{item.label}</div></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
          {section.notice && <div className="mb-8 flex gap-3 rounded-2xl border border-sun/70 bg-[#FFF8DF] p-4 text-sm leading-6 text-ink"><CircleAlert size={19} className="mt-0.5 shrink-0 text-[#9B6A00]" /><span>{section.notice}</span></div>}
          <div className="flex items-end justify-between border-b border-line pb-5"><div><p className={`text-xs font-black uppercase tracking-[0.18em] ${styles.text}`}>GUIDES & NOTES</p><h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-ink">栏目内容</h2></div><span className="text-xs font-semibold text-muted">{section.cards.length} 个主题</span></div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {section.cards.map((card, index) => (
              <article key={card.title} className="group rounded-3xl border border-line bg-paper p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-card sm:p-7">
                <div className="flex items-center justify-between"><span className={`rounded-full px-3 py-1 text-[11px] font-black ${styles.badge}`}>{card.tag}</span><span className="text-xs font-black text-line">0{index + 1}</span></div>
                <h3 className="mt-7 text-2xl font-black tracking-[-0.035em] text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
                <div className="mt-7 flex items-center justify-between border-t border-line pt-4"><span className="text-xs font-semibold text-muted">{card.meta}</span><FileText size={17} className={`${styles.text} transition group-hover:translate-x-1`} /></div>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-5 rounded-4xl bg-ink p-7 text-white sm:grid-cols-[1fr_auto] sm:items-center sm:p-10">
            <div><p className="text-xs font-black uppercase tracking-[0.18em] text-sun">NEED MORE?</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">没有找到你需要的信息？</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">提交具体场景、设备和网络环境，我们会把高频问题整理进后续内容。</p></div>
            <Link href={section.slug === 'contact' ? 'mailto:hello@xuanjichang.vip' : '/contact/'} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-ink">联系我们 <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream py-8">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 text-sm lg:px-8"><span className="text-muted">继续浏览完整评测与测试数据</span><Link href="/#articles" className="inline-flex items-center gap-2 font-black text-brand">梯子评测 <ArrowRight size={15} /></Link></div>
      </section>
    </main>
  );
}

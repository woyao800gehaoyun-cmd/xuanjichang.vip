import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { keywordCount, keywordGroups } from '@/lib/keyword-library';

export const metadata: Metadata = {
  title: '梯子关键词导航',
  description: '梯子推荐、订阅、节点、线路、协议、客户端、地区和故障排查主题导航。',
  alternates: { canonical: '/keyword-library/' },
};

export default function KeywordLibraryPage() {
  return (
    <main className="min-h-screen bg-paper">
      <section className="border-b border-line bg-ink py-14 text-white lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-white/55 hover:text-white"><ArrowLeft size={14} />返回首页</Link>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-sun">TOPIC INDEX</p><h1 className="mt-5 text-5xl font-black tracking-[-0.065em] sm:text-7xl">梯子关键词导航</h1><p className="mt-6 max-w-2xl text-base leading-8 text-white/60">把零散搜索词整理成可读的内容目录。每个词都应该对应一篇解决具体问题的文章，而不是堆在页面底部。</p></div><div className="rounded-3xl bg-brand p-6"><Search size={24} className="text-sun" /><div className="mt-5 text-4xl font-black">{keywordCount}+</div><div className="mt-1 text-xs text-white/60">已整理主题词</div></div></div>
        </div>
      </section>
      <section className="bg-white py-14 lg:py-20"><div className="mx-auto max-w-[1440px] px-5 lg:px-8"><div className="grid gap-5 md:grid-cols-2">{keywordGroups.map((group) => <section key={group.title} className="rounded-3xl border border-line bg-paper p-6 sm:p-7"><div className="flex items-center justify-between"><h2 className="text-xl font-black tracking-[-0.03em] text-ink">{group.title}</h2><span className="text-xs font-bold text-brand">{group.keywords.length} 个</span></div><p className="mt-2 text-sm leading-6 text-muted">{group.description}</p><div className="mt-6 flex flex-wrap gap-2">{group.keywords.map((keyword) => <span key={keyword} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink/75">{keyword}</span>)}</div></section>)}</div><div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-cream p-6"><p className="text-sm leading-6 text-muted">关键词不是广告承诺，线路质量仍应以带测试时间和环境的文章为准。</p><Link href="/#articles" className="inline-flex items-center gap-2 text-sm font-black text-brand">阅读最新文章 <ArrowRight size={16} /></Link></div></div></section>
    </main>
  );
}

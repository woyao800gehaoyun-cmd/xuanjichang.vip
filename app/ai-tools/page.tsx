import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  AudioLines,
  Bot,
  Code2,
  FileText,
  Image as ImageIcon,
  Search,
  ShieldCheck,
  Sparkles,
  Video,
  Workflow,
} from 'lucide-react';
import { aiToolCategories, aiToolCount, type AiToolCategory } from '@/lib/ai-tools';

export const metadata: Metadata = {
  title: 'AI 工具导航',
  description: '精选通用对话、AI 搜索、编程、办公、图片、视频、音频和自动化工具，提供可直接打开的官方入口。',
  alternates: { canonical: '/ai-tools/' },
  openGraph: {
    title: 'AI 工具导航｜选梯子',
    description: '按使用场景整理 AI 工具官方入口，点击即可打开。',
    url: '/ai-tools/',
    type: 'website',
  },
};

const iconMap: Record<AiToolCategory['icon'], typeof Bot> = {
  chat: Bot,
  search: Search,
  code: Code2,
  office: FileText,
  image: ImageIcon,
  video: Video,
  audio: AudioLines,
  workflow: Workflow,
};

const colorMap: Record<AiToolCategory['icon'], string> = {
  chat: 'bg-brand text-white',
  search: 'bg-mint text-white',
  code: 'bg-ink text-sun',
  office: 'bg-coral text-white',
  image: 'bg-[#8B5CF6] text-white',
  video: 'bg-[#DB2777] text-white',
  audio: 'bg-[#0F766E] text-white',
  workflow: 'bg-[#D97706] text-white',
};

export default function AiToolsPage() {
  return (
    <main className="min-h-screen bg-paper">
      <section className="relative overflow-hidden border-b border-line bg-ink text-white">
        <div className="absolute inset-y-0 right-0 w-[40%] dot-field opacity-20" />
        <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-brand/35 blur-3xl" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-14 lg:px-8 lg:py-20">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-white/55 transition hover:text-white"><ArrowLeft size={14} />返回首页</Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-sun"><Sparkles size={16} />AI TOOLS DIRECTORY</div>
              <h1 className="text-balance mt-5 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.065em] sm:text-7xl">常用 AI 工具，<br /><span className="text-white/35">点开就能用。</span></h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-white/60">按实际用途整理通用助手、搜索研究、编程建站、办公写作、图片、视频、音频和自动化工具。所有卡片直接跳转到对应平台官网。</p>
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10">
              <div className="bg-white/5 p-6"><div className="text-4xl font-black text-sun">{aiToolCount}</div><div className="mt-2 text-xs text-white/50">个工具入口</div></div>
              <div className="bg-white/5 p-6"><div className="text-4xl font-black text-sun">{aiToolCategories.length}</div><div className="mt-2 text-xs text-white/50">个使用分类</div></div>
            </div>
          </div>
        </div>
      </section>

      <nav className="sticky top-[74px] z-30 overflow-x-auto border-b border-line bg-paper/95 backdrop-blur-xl" aria-label="AI 工具分类">
        <div className="mx-auto flex max-w-[1440px] gap-2 px-5 py-3 lg:px-8">
          {aiToolCategories.map((category) => <a key={category.id} href={`#${category.id}`} className="shrink-0 rounded-full border border-line bg-white px-4 py-2 text-xs font-bold text-ink transition hover:border-brand hover:text-brand">{category.title}</a>)}
        </div>
      </nav>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] space-y-16 px-5 lg:px-8">
          {aiToolCategories.map((category, categoryIndex) => {
            const Icon = iconMap[category.icon];
            return (
              <section key={category.id} id={category.id} className="scroll-mt-40">
                <div className="flex flex-col gap-5 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${colorMap[category.icon]}`}><Icon size={23} /></span>
                    <div><div className="text-[11px] font-black uppercase tracking-[0.18em] text-muted">CATEGORY {String(categoryIndex + 1).padStart(2, '0')}</div><h2 className="mt-1 text-3xl font-black tracking-[-0.045em] text-ink">{category.title}</h2><p className="mt-2 text-sm text-muted">{category.subtitle}</p></div>
                  </div>
                  <span className="text-xs font-bold text-muted">{category.tools.length} 个工具</span>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {category.tools.map((tool) => (
                    <a key={tool.name} href={tool.url} target="_blank" rel="nofollow noopener noreferrer" className="group flex min-h-48 flex-col rounded-3xl border border-line bg-paper p-5 transition hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-card">
                      <div className="flex items-start justify-between gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-lg font-black text-brand shadow-sm">{tool.name.slice(0, 1).toUpperCase()}</span>
                        <div className="flex items-center gap-2">{tool.tag && <span className="rounded-full bg-[#FFF0BE] px-2 py-1 text-[10px] font-black text-[#8A6100]">{tool.tag}</span>}<ArrowUpRight size={17} className="text-muted transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand" /></div>
                      </div>
                      <h3 className="mt-5 text-lg font-black tracking-[-0.025em] text-ink group-hover:text-brand">{tool.name}</h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-muted">{tool.description}</p>
                      <div className="mt-5 border-t border-line pt-3 text-[11px] font-bold text-muted">打开官网</div>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line bg-cream py-12">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-5 sm:grid-cols-[auto_1fr] sm:items-center lg:px-8">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-sun"><ShieldCheck size={25} /></span>
          <div><h2 className="text-xl font-black text-ink">使用外部 AI 工具前，请先检查隐私和地区规则</h2><p className="mt-2 text-sm leading-7 text-muted">不要上传密码、密钥、身份证明、未公开商业资料或他人的隐私信息。定价、可用地区和功能可能随时变化，请以工具官网为准。</p></div>
        </div>
      </section>
    </main>
  );
}

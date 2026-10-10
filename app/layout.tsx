import type { Metadata } from 'next';
import Link from 'next/link';
import { Activity, RadioTower } from 'lucide-react';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '线路观测站｜网络专线与节点服务评测',
    template: '%s｜线路观测站',
  },
  description: '面向技术用户的网络专线、IPLC/IEPL 与节点服务实测数据库。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="dark">
      <body>
        <header className="sticky top-0 z-50 border-b border-slate-800/90 bg-canvas/95 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
            <Link href="/" className="flex items-center gap-3" aria-label="线路观测站首页">
              <span className="flex h-9 w-9 items-center justify-center border border-accent/50 bg-accent/10 text-accent shadow-glow-sm">
                <RadioTower size={19} strokeWidth={1.8} />
              </span>
              <span>
                <span className="block text-sm font-semibold tracking-[0.18em] text-slate-100">线路观测站</span>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-slate-500">Network route lab</span>
              </span>
            </Link>
            <nav className="flex items-center gap-5 text-xs text-slate-400" aria-label="主导航">
              <Link href="/" className="transition hover:text-accent">全部评测</Link>
              <Link href="/#monitor" className="flex items-center gap-1.5 transition hover:text-accent"><Activity size={14} />实时观测</Link>
              <span className="hidden border-l border-slate-800 pl-5 text-[11px] text-slate-500 sm:inline">数据更新：2026.10</span>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-slate-800/80 bg-canvas">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <span>线路观测站 · 独立实测记录</span>
            <span>指标口径：晚高峰 20:00–22:30，结果仅代表测试周期。</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { navigation } from '@/lib/site-content';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '选梯子｜网络专线、梯子评测与客户端指南',
    template: '%s｜选梯子',
  },
  description: '提供梯子推荐、网络专线实测、客户端下载、AI 与流媒体工具指南。用可复核的数据帮助你判断线路质量。',
  keywords: ['梯子推荐', '梯子评测', '网络专线', 'IPLC', 'IEPL', '客户端下载', '免费节点'],
  metadataBase: new URL('https://xuanjichang.vip'),
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteHeader />
        {children}
        <footer className="border-t border-line bg-cream">
          <div className="mx-auto max-w-[1440px] px-5 py-12 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
              <div>
                <Link href="/" className="text-2xl font-black tracking-[-0.05em] text-ink">选梯子<span className="text-coral">.</span></Link>
                <p className="mt-3 max-w-sm text-sm leading-7 text-muted">用真实测试拆解线路质量、客户端配置和网络工具。数据会变化，方法必须透明。</p>
                <Link href="/about/" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand">了解评测方法 <ArrowUpRight size={14} /></Link>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-5">
                {navigation.map((item) => <Link key={item.href} href={item.href} className="text-sm text-ink/70 transition hover:text-brand">{item.label}</Link>)}
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
              <span>© 2026 xuanjichang.vip · 独立内容站</span>
              <span>测速结果只代表记录周期，不构成永久服务承诺。</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

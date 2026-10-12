import Link from 'next/link';
import { ArrowUpRight, Menu, Radar } from 'lucide-react';
import { navigation } from '@/lib/site-content';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/90 bg-paper/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="选梯子首页">
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-ink text-paper">
            <Radar size={20} strokeWidth={2.2} />
            <span className="absolute -bottom-2 -right-2 h-5 w-5 rounded-full bg-coral transition-transform group-hover:scale-150" />
          </span>
          <span>
            <span className="block text-lg font-black tracking-[-0.04em] text-ink">选梯子</span>
            <span className="block text-[9px] font-bold uppercase tracking-[0.24em] text-muted">Route Review</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="主导航">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap text-[13px] font-semibold text-ink/75 transition hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex xl:hidden">
          <Link href="/reviews/" className="text-sm font-semibold text-ink">评测索引</Link>
        </div>

        <details className="group relative xl:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-line bg-white text-ink" aria-label="打开导航">
            <Menu size={19} />
          </summary>
          <div className="absolute right-0 top-14 w-[min(88vw,360px)] rounded-3xl border border-line bg-white p-3 shadow-card">
            <nav className="grid grid-cols-2 gap-1" aria-label="移动端导航">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-semibold text-ink transition hover:bg-cream hover:text-brand">
                  {item.label}<ArrowUpRight size={13} className="text-muted" />
                </Link>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

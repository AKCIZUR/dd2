import Link from 'next/link';
import { ArrowRight, Sparkles, BookOpen, FileText, Layers3, Wand2 } from 'lucide-react';
import { blogPosts } from '@/lib/blog';

const metrics = [
  { label: 'Landing pages', value: '01' },
  { label: 'Blog stories', value: '04' },
  { label: 'Motion layers', value: '08' },
];

const features = [
  {
    icon: Sparkles,
    title: 'Silný vizuální úvod',
    text: 'Hero sekce, CTA a jemné glow vrstvy, které působí moderně a pořád zůstávají jednoduché.',
  },
  {
    icon: BookOpen,
    title: 'Blog jako obsahový hub',
    text: 'Přehled článků, rychlé prokliknutí a rozumné vizuální členění bez chaosu.',
  },
  {
    icon: Layers3,
    title: 'Lehké motion vrstvy',
    text: 'Float, fade-up a hover přechody pro lepší feeling bez agresivních animací.',
  },
  {
    icon: Wand2,
    title: 'Skeleton loading',
    text: 'Stránky působí připraveně ještě před načtením obsahu díky shimmer placeholderům.',
  },
];

export default function HomePage() {
  const featured = blogPosts.filter((post) => post.featured).slice(0, 2);

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="animate-float-slow absolute left-[-5rem] top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="animate-float-slow absolute right-[-4rem] top-40 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl [animation-delay:1.5s]" />
      </div>

      <section className="relative mx-auto flex min-h-[calc(100vh-1px)] max-w-7xl flex-col justify-center px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur animate-fade-up">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Homepage + blog + motion + skeleton loading
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl animate-fade-up [animation-delay:80ms]">
                Dokonalý start pro docs web s lehkým pohybem
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg animate-fade-up [animation-delay:160ms]">
                Úvodní stránka vede na dokumentaci i blog, drží jednoduchý dark styl a přidává
                čisté animace, které působí moderně bez rušivého efektu.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 animate-fade-up [animation-delay:240ms]">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Otevřít dokumentaci
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
              >
                Přejít na blog
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 animate-fade-up [animation-delay:320ms]">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:180ms]">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-500/15 via-transparent to-indigo-500/15 blur-2xl" />
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">Live preview</p>
                  <h2 className="text-xl font-semibold text-white">Rychlé přehledy obsahu</h2>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  Ready
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {featured.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                      <span>{post.category}</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{post.description}</p>
                    <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
                      <span>{post.date}</span>
                      <span className="inline-flex items-center gap-1 text-cyan-300">
                        Číst dál
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="animate-fade-up rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                style={{ animationDelay: `${120 + index * 90}ms` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{feature.text}</p>
              </article>
            );
          })}
        </section>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-6 backdrop-blur md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Next step</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Blog rozdělený do jasných bloků</h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                Každý článek dostane vlastní kartu, šetrný hover efekt a skeleton loading, aby
                stránka působila rychle a připraveně.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Zobrazit blog
                <FileText className="h-4 w-4" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
              >
                Přejít do docs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

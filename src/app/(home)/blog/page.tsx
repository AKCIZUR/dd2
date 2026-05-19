import Link from 'next/link';
import { ArrowRight, Clock3, Sparkles } from 'lucide-react';
import { blogHighlights, blogPosts } from '@/lib/blog';

export default function BlogPage() {
  return (
    <main className="relative overflow-hidden px-6 py-16 lg:px-10">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="animate-float-slow absolute right-[-6rem] top-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="animate-float-slow absolute left-[-7rem] bottom-10 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl [animation-delay:1.8s]" />
      </div>

      <section className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur animate-fade-up">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Blog page s motion stylingem
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl animate-fade-up [animation-delay:100ms]">
              Články, které vypadají čistě a načítají se rychle
            </h1>
            <p className="max-w-xl text-base leading-8 text-slate-300 md:text-lg animate-fade-up [animation-delay:180ms]">
              Stránka drží jednoduchou strukturu, přehledné karty a jemný motion efekt, aby obsah
              působil moderně bez přehnané vizuální zátěže.
            </p>
          </div>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
          >
            Zpět do dokumentace
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur animate-fade-up [animation-delay:240ms]">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Rychlé body</p>
            <ul className="mt-5 space-y-3">
              {blogHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-200"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <p className="text-sm text-slate-400">Doporučené tempo</p>
              <div className="mt-3 text-3xl font-semibold text-white">04 min</div>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Krátké články, silná pointa a čisté ukončení s odkazem na další sekci.
              </p>
            </div>
          </aside>

          <div className="grid gap-4 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${120 + index * 80}ms` }}
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-slate-500">
                  <span>{post.category}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="h-3.5 w-3.5" />
                    {post.readingTime}
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-semibold text-white">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{post.description}</p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-slate-400">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-1 text-cyan-300">
                    Otevřít
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

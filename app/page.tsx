import Link from 'next/link';

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-16 text-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-[-5rem] top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-4rem] top-40 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />
      </div>

      <section className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-5xl flex-col justify-center gap-8">
        <p className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
          Homepage připravena pro docs + blog
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
          Moderní docs web s blogem, motion efekty a skeleton loadingem.
        </h1>

        <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          Jasná homepage, přehledný blog a lehké animace dávají aplikaci čistý, profesionální feeling.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition-transform hover:-translate-y-0.5"
          >
            Otevřít docs
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Otevřít blog
          </Link>
        </div>
      </section>
    </main>
  );
}

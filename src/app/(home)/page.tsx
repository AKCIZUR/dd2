import Link from 'next/link';

export default function HomePage() {
  const features = [
    {
      title: 'Rychlé hledání',
      description: 'Okamžitý přístup k dokumentaci, stránkám a ukázkám.'
    },
    {
      title: 'MDX obsah',
      description: 'Psaní dokumentace jako kód, s komponentami a bloky.'
    },
    {
      title: 'GitHub Pages ready',
      description: 'Jednoduchý static export a čistý deploy bez komplikací.'
    },
    {
      title: 'Moderní UI',
      description: 'Čistý docs-first vzhled inspirovaný Fumadocs.'
    }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] text-white antialiased">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-white" />
            <span className="text-sm font-medium uppercase tracking-[0.24em] text-white/75">
              AKCIZUR DOCS
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/55 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <Link href="/docs" className="transition hover:text-white">
              Docs
            </Link>
            <a
              href="https://github.com/AKCIZUR/docs"
              className="transition hover:text-white"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <section className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-24">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-[#111113] px-4 py-2 text-sm text-white/70">
            Minimal developer documentation
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Modern documentation
            <br />
            for developers.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
            Clean homepage inspired by modern docs systems like Fumadocs,
            Vercel and shadcn/ui.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/docs"
              className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:opacity-90"
            >
              Open Docs
            </Link>

            <a
              href="https://github.com/AKCIZUR/docs"
              className="rounded-2xl border border-white/10 bg-[#111113] px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-[#111113] p-6">
            <div className="mb-5 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0d0d10] p-6 font-mono text-sm leading-7 text-white/75">
              <div>
                <span className="text-white">$</span> npm run build
              </div>
              <div>✓ Static export ready</div>
              <div>✓ MDX pages loaded</div>
              <div>✓ GitHub Pages deploy ok</div>
            </div>
          </div>

          <div className="grid gap-4">
            {['MDX', 'Search', 'GitHub Pages', 'Dark UI'].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#111113] p-5 text-sm text-white/70"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Built for developer workflows
          </h2>
          <p className="mt-4 text-white/50">
            Minimal structure, readable content and clean navigation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-[#111113] p-7 transition hover:border-white/20"
            >
              <div className="mb-6 h-12 w-12 rounded-2xl bg-white/10" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

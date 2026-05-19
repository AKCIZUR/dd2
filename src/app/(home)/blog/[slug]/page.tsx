import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarDays, Clock3, Sparkles } from 'lucide-react';
import { getBlogPost, blogPosts } from '@/lib/blog';

type Props = PageProps<'/blog/[slug]'>;

export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden px-6 py-16 lg:px-10">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="animate-float-slow absolute left-[-5rem] top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="animate-float-slow absolute right-[-4rem] top-20 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl [animation-delay:1.4s]" />
      </div>

      <article className="relative mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10 animate-fade-up"
        >
          <ArrowLeft className="h-4 w-4" />
          Zpět na blog
        </Link>

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8 animate-fade-up [animation-delay:100ms]">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-slate-500">
            <span>{post.category}</span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock3 className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">{post.description}</p>

          <div className="mt-8 h-px bg-white/10" />

          <div className="mt-8 space-y-6 text-slate-200">
            {post.content.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/70 p-5">
            <div className="inline-flex items-center gap-2 text-sm text-cyan-300">
              <Sparkles className="h-4 w-4" />
              Praktický závěr
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Dobré články na blogu překlenují mezeru mezi dokumentací a UX rozhodnutími. Právě to
              pomáhá udržet web čitelný, důvěryhodný a snadno rozšiřitelný.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.description,
  };
}

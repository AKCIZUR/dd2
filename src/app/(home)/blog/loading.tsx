export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="space-y-6">
        <div className="skeleton h-6 w-56 rounded-full" />
        <div className="skeleton h-16 w-full rounded-3xl" />
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="skeleton h-5 w-32 rounded-full" />
            <div className="mt-5 space-y-3">
              <div className="skeleton h-12 w-full rounded-2xl" />
              <div className="skeleton h-12 w-full rounded-2xl" />
              <div className="skeleton h-12 w-full rounded-2xl" />
            </div>
          </aside>
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div className="skeleton h-4 w-28 rounded-full" />
                <div className="skeleton mt-4 h-8 w-5/6 rounded-3xl" />
                <div className="skeleton mt-3 h-16 w-full rounded-3xl" />
                <div className="skeleton mt-6 h-4 w-40 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

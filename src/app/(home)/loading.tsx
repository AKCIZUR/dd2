export default function Loading() {
  return (
    <main className="mx-auto min-h-[calc(100vh-1px)] max-w-7xl px-6 py-16 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <div className="skeleton h-10 w-64 rounded-full" />
          <div className="space-y-3">
            <div className="skeleton h-16 w-full rounded-3xl" />
            <div className="skeleton h-16 w-5/6 rounded-3xl" />
            <div className="skeleton h-6 w-4/5 rounded-3xl" />
          </div>
          <div className="flex gap-3">
            <div className="skeleton h-11 w-40 rounded-full" />
            <div className="skeleton h-11 w-28 rounded-full" />
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div className="skeleton h-7 w-48 rounded-full" />
          <div className="mt-6 space-y-4">
            <div className="skeleton h-32 w-full rounded-3xl" />
            <div className="skeleton h-32 w-full rounded-3xl" />
          </div>
        </div>
      </div>
    </main>
  );
}

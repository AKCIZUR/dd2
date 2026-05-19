export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="h-6 w-56 rounded-full bg-white/10" />
        <div className="h-16 w-full rounded-3xl bg-white/10" />
        <div className="h-16 w-5/6 rounded-3xl bg-white/10" />
        <div className="flex gap-3">
          <div className="h-11 w-36 rounded-full bg-white/10" />
          <div className="h-11 w-28 rounded-full bg-white/10" />
        </div>
      </div>
    </main>
  );
}

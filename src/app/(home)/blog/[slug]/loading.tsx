export default function Loading() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
      <div className="skeleton h-10 w-40 rounded-full" />
      <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
        <div className="skeleton h-4 w-56 rounded-full" />
        <div className="skeleton mt-4 h-12 w-full rounded-3xl" />
        <div className="skeleton mt-4 h-6 w-5/6 rounded-3xl" />
        <div className="mt-8 space-y-4">
          <div className="skeleton h-5 w-full rounded-3xl" />
          <div className="skeleton h-5 w-11/12 rounded-3xl" />
          <div className="skeleton h-5 w-10/12 rounded-3xl" />
        </div>
      </div>
    </main>
  );
}

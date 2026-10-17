import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-28 text-center">
      <h1 className="text-5xl font-extrabold text-spruce-900">This road ends here</h1>
      <p className="mt-4 text-lg text-ink-soft">We could not find that page. Head back home or plan a new trip.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="rounded-full bg-spruce-900 px-6 py-3 font-semibold text-white">Home</Link>
        <Link href="/trip-designer" className="rounded-full bg-apricot-400 px-6 py-3 font-semibold text-spruce-950">Plan my trip</Link>
      </div>
    </div>
  );
}

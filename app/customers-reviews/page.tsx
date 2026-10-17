import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { reviews } from "@/lib/data";

export const metadata: Metadata = {
  title: "Customer reviews",
  description: "What travellers say about trips planned with Porter Pakistan.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero seed="reviews" kind="valley" title="What our customers say" text="Real words from travellers who planned their trips with us." />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <ul className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {reviews.map((r) => (
            <li key={r.name} className="mb-5 break-inside-avoid">
              <figure className="rounded-3xl bg-white p-7 ring-1 ring-glacier-200">
                <blockquote className="text-lg leading-relaxed">{r.text}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-apricot-400 font-bold text-spruce-950">{r.name[0]}</span>
                  <span className="font-semibold text-spruce-900">{r.name}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About us",
  description: "Porter Pakistan organizes travel and tourism services all over Pakistan.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        seed="about"
        kind="mountain"
        title="Pakistan's first one stop solution for travel"
        text="We specialize in organizing travel and tourism services all over Pakistan."
      />
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <p className="text-xl leading-relaxed">
          Travel comfortably while encountering new people and places. Our friendly team is always there to answer any information you need. Join us and discover the beauty of Pakistan.
        </p>
        <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l-4 border-apricot-400 pl-4">
              <dd className="font-display text-4xl font-extrabold text-spruce-900">{s.value}</dd>
              <dt className="text-ink-soft">{s.label}</dt>
            </div>
          ))}
        </dl>
        <div className="mt-14 rounded-3xl bg-glacier-100 p-8">
          <h2 className="text-2xl font-bold text-spruce-900">Funded at Shark Tank Pakistan</h2>
          <p className="mt-2 text-ink-soft">Trip Designer is the first and only travel solution funded at Shark Tank Pakistan.</p>
          <a href={site.sharkTank} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-full bg-spruce-900 px-6 py-3 font-semibold text-white hover:bg-spruce-800">
            Watch the pitch
          </a>
        </div>
        <p className="mt-12">
          Ready to go?{" "}
          <Link href="/trip-designer" className="font-semibold text-porter-700 underline underline-offset-4">Design your trip</Link>{" "}
          or{" "}
          <Link href="/contact-us" className="font-semibold text-porter-700 underline underline-offset-4">talk to our team</Link>.
        </p>
      </div>
    </>
  );
}

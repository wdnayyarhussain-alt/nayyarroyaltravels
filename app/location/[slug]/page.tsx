import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LandscapeArt } from "@/components/LandscapeArt";
import { PageHero } from "@/components/PageHero";
import { destinations, getDestination, gridDestinations, hotels, pkr } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return gridDestinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return {};
  return { title: d.name, description: `${d.name}: ${d.blurb}. Plan your trip with Porter Pakistan.` };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d || d.designerOnly) notFound();

  const stays = hotels.filter((h) => h.destinationSlug === d.slug);
  const related = destinations.filter((x) => x.region === d.region && x.slug !== d.slug && !x.designerOnly).slice(0, 4);

  return (
    <>
      <PageHero seed={d.slug} kind={d.kind} title={d.name} text={d.blurb}>
        <div className="flex flex-wrap items-center gap-4">
          <Link href={`/trip-designer?destination=${d.slug}`} className="rounded-full bg-apricot-400 px-7 py-3.5 font-semibold text-spruce-950 hover:bg-apricot-300">
            Plan a trip to {d.name}
          </Link>
          <p className="text-glacier-100">{d.from ? `Trips start from ${pkr(d.from)} per person` : "Custom quote on request"}</p>
        </div>
      </PageHero>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        {stays.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-spruce-900">Where to stay</h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {stays.map((h) => (
                <li key={h.slug} className="rounded-3xl bg-white p-6 ring-1 ring-glacier-200">
                  <h3 className="text-lg font-bold text-spruce-900">{h.name}</h3>
                  <p className="text-ink-soft">{h.city}, rated {h.score}</p>
                  <p className="mt-3 font-semibold">{pkr(h.perNight)} <span className="font-normal text-ink-soft">per night</span></p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className={stays.length ? "mt-16" : ""}>
          <h2 className="text-3xl font-bold text-spruce-900">More in {d.region}</h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((x) => (
              <li key={x.slug}>
                <Link href={`/location/${x.slug}`} className="group relative block h-56 overflow-hidden rounded-3xl bg-spruce-900">
                  <LandscapeArt seed={x.slug} kind={x.kind} className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-spruce-950/90 to-transparent p-5 pt-12 text-white">
                    <h3 className="text-lg font-bold">{x.name}</h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

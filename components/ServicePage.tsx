import Link from "next/link";
import { EnquiryForm } from "./EnquiryForm";
import { LandscapeArt } from "./LandscapeArt";
import { PageHero } from "./PageHero";
import type { StayService } from "@/lib/data";

export function ServicePage({ s }: { s: StayService }) {
  return (
    <>
      <PageHero seed={s.slug} kind={s.kind} title={s.title} text={s.intro} />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <ul className="grid gap-5 md:grid-cols-3">
          {s.options.map((o) => (
            <li key={o.name} className="overflow-hidden rounded-3xl bg-white ring-1 ring-glacier-200">
              <div className="relative h-40">
                <LandscapeArt seed={`${s.slug}-${o.name}`} kind={s.kind} className="absolute inset-0 h-full w-full" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-spruce-900">{o.name}</h2>
                <p className="mt-2 leading-relaxed text-ink-soft">{o.note}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold text-spruce-900">How it works</h2>
            <ol className="mt-8 grid gap-6">
              {s.steps.map((st, i) => (
                <li key={st.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-spruce-900 font-bold text-white">{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-bold text-spruce-900">{st.title}</h3>
                    <p className="text-ink-soft">{st.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-ink-soft">
              Want the whole trip handled? Try the <Link href="/trip-designer" className="font-semibold text-porter-700 underline underline-offset-4">Trip Designer</Link>.
            </p>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold text-spruce-900">{s.cta}</h2>
            <EnquiryForm service={s.label} placeLabel={s.notePlaceLabel} placePlaceholder={s.notePlacePlaceholder} />
          </div>
        </div>
      </div>
    </>
  );
}

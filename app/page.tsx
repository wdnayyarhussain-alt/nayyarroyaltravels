import Link from "next/link";
import { HeroRidges } from "@/components/HeroRidges";
import { HeroSearch } from "@/components/HeroSearch";
import { DestinationExplorer } from "@/components/DestinationExplorer";
import { LandscapeArt } from "@/components/LandscapeArt";
import { SectionHead } from "@/components/SectionHead";
import { articles, hotels, packages, pkr, reviews, site, stats } from "@/lib/data";

const container = "mx-auto max-w-7xl px-5 sm:px-8";

export default function Home() {
  const topHotels = [...hotels].sort((a, b) => b.score - a.score).slice(0, 6);
  const featured = reviews[1];
  const others = [reviews[0], reviews[5], reviews[4], reviews[6]];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0a2e2d_0%,#134b48_42%,#2a7d78_68%,#f4a259_100%)] text-white">
        <div
          aria-hidden="true"
          className="sun-glow absolute -right-6 bottom-[12%] h-32 w-32 rounded-full bg-apricot-400 opacity-95 sm:bottom-[18%] sm:right-[10%] sm:h-60 sm:w-60"
          style={{ boxShadow: "0 0 120px 40px rgba(244,162,89,0.45)" }}
        />
        <div className={`${container} relative z-10 pb-64 pt-20 sm:pb-80 sm:pt-28`}>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.98] sm:text-7xl lg:text-[5.5rem]">
            Travel with freedom.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-glacier-100 sm:text-xl">
            Design your perfect trip within a minute with Trip Designer, the first travel solution funded at Shark Tank Pakistan.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/trip-designer"
              className="rounded-full bg-apricot-400 px-7 py-4 font-semibold text-spruce-950 transition-colors hover:bg-apricot-300"
            >
              Start designing your trip
            </Link>
            <Link
              href="/hotels"
              className="rounded-full border border-white/40 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Browse verified hotels
            </Link>
          </div>
        </div>
        <HeroRidges />
      </section>

      {/* Search + stats */}
      <section className={`${container} relative z-20 -mt-14 sm:-mt-16`}>
        <HeroSearch />
        <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l-4 border-apricot-400 pl-4">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-4xl font-extrabold text-spruce-900">{s.value}</dd>
              <dd className="text-ink-soft">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Shark Tank */}
      <section className={`${container} mt-20`}>
        <a
          href={site.sharkTank}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-spruce-900 px-7 py-6 text-white transition-colors hover:bg-spruce-800 sm:px-10"
        >
          <p className="font-display text-xl font-semibold sm:text-2xl">Funded at Shark Tank Pakistan. Watch our pitch.</p>
          <span className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold group-hover:bg-white/20">Watch on YouTube</span>
        </a>
      </section>

      {/* Services */}
      <section className={`${container} mt-28`}>
        <SectionHead
          title="Explore our services"
          text="From physically verified accommodations to authentic local experiences, discover everything Pakistan has to offer."
        />
        <div className="mt-10 grid auto-rows-[15rem] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: "/hotels", title: "Hotels", text: "From city stays in Lahore to boutique hotels in Hunza Valley, discover comfort at every destination.", cta: "Explore hotels", kind: "lake" as const, cls: "lg:col-span-2 lg:row-span-2" },
            { href: "/car-rentals", title: "Car Rental", text: "Explore Pakistan with flexible and affordable rentals. Drive through scenic routes with comfort.", cta: "Rent a car", kind: "mountain" as const, cls: "lg:col-span-2" },
            { href: "/beach-huts", title: "Beach Huts", text: "Relax by the Arabian Sea with cozy huts in Karachi and Gwadar.", cta: "Book beach stay", kind: "beach" as const, cls: "" },
            { href: "/farmhouses", title: "Farmhouses", text: "Unwind in green escapes across Punjab and Sindh.", cta: "Find farmhouses", kind: "farm" as const, cls: "" },
          ].map((s) => (
            <Link key={s.href} href={s.href} className={`group relative overflow-hidden rounded-3xl bg-spruce-900 ${s.cls}`}>
              <LandscapeArt seed={s.title} kind={s.kind} className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-spruce-950/90 via-spruce-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="mt-1.5 max-w-md text-[0.95rem] leading-snug text-glacier-100">{s.text}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-apricot-300 underline-offset-4 group-hover:underline">{s.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className={`${container} mt-28`} id="destinations">
        <SectionHead title="Top destinations" text="Discover Pakistan's most breathtaking locations." />
        <div className="mt-10">
          <DestinationExplorer />
        </div>
      </section>

      {/* Packages */}
      <section className="mt-28 bg-glacier-100 py-24">
        <div className={container}>
          <SectionHead
            title="Popular tour packages"
            text="Curated experiences that showcase the best of Pakistan's diverse landscapes and rich culture."
            action={
              <Link href="/trip-designer" className="rounded-full border border-spruce-900 px-6 py-3 font-semibold text-spruce-900 transition-colors hover:bg-spruce-900 hover:text-white">
                Customize your tour
              </Link>
            }
          />
          <ul className="mt-10 grid gap-6 lg:grid-cols-2">
            {packages.map((p) => (
              <li key={p.id} className="grid overflow-hidden rounded-3xl bg-white ring-1 ring-glacier-200 sm:grid-cols-[220px_1fr]">
                <div className="relative h-48 sm:h-auto">
                  <LandscapeArt seed={p.id} kind={p.kind} className="absolute inset-0 h-full w-full" />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-bold text-spruce-900">{p.days} days</span>
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-2xl font-bold text-spruce-900">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{p.blurb}</p>
                  <ul className="mt-4 grid gap-1.5 text-sm">
                    {p.inclusions.map((i) => (
                      <li key={i} className="flex gap-2">
                        <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#147a5f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 8.500 3.200 3L13 4.500" /></svg>
                        {i}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                    <p className="whitespace-nowrap">
                      <span className="text-sm text-ink-soft">From </span>
                      <span className="text-xl font-bold text-spruce-900">{pkr(p.from)}</span>
                      <span className="text-sm text-ink-soft"> per person</span>
                    </p>
                    <Link
                      href={`/trip-designer?destination=${p.destinationSlug}&nights=${p.days - 1}&style=economy`}
                      className="shrink-0 rounded-full bg-apricot-400 px-5 py-2.5 text-sm font-semibold text-spruce-950 transition-colors hover:bg-apricot-500"
                    >
                      Book now
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hotels */}
      <section className={`${container} mt-28`}>
        <SectionHead
          title="Most popular stays"
          text="Handpicked stays across Pakistan's most loved destinations."
          action={<Link href="/hotels" className="font-semibold text-porter-700 underline underline-offset-4">See all hotels</Link>}
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topHotels.map((h) => (
            <li key={h.slug}>
              <Link href={`/hotels?city=${encodeURIComponent(h.city)}`} className="group block overflow-hidden rounded-3xl bg-white ring-1 ring-glacier-200 transition-shadow hover:shadow-lg hover:shadow-spruce-900/10">
                <div className="relative h-40">
                  <LandscapeArt seed={h.slug} kind={h.kind} className="absolute inset-0 h-full w-full" />
                  <span className="absolute right-3 top-3 rounded-full bg-porter-700 px-3 py-1 text-sm font-bold text-white">{h.score}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-spruce-900">{h.name}</h3>
                  <p className="text-ink-soft">{h.city}</p>
                  <p className="mt-3 font-semibold">{pkr(h.perNight)} <span className="font-normal text-ink-soft">per night</span></p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Reviews */}
      <section className={`${container} mt-28`}>
        <SectionHead
          title="What our customers say"
          action={<Link href="/customers-reviews" className="font-semibold text-porter-700 underline underline-offset-4">Read all reviews</Link>}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          <figure className="flex flex-col justify-between rounded-3xl bg-spruce-900 p-8 text-white sm:p-10">
            <blockquote className="font-display text-2xl font-semibold leading-snug sm:text-3xl">{featured.text}</blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-apricot-400 font-bold text-spruce-950">{featured.name[0]}</span>
              <span className="font-semibold">{featured.name}</span>
            </figcaption>
          </figure>
          <div className="grid gap-5 sm:grid-cols-2">
            {others.map((r) => (
              <figure key={r.name} className="rounded-3xl bg-white p-6 ring-1 ring-glacier-200">
                <blockquote className="leading-relaxed text-ink">{r.text}</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-ink-soft">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Ideas */}
      <section className={`${container} mt-28`}>
        <SectionHead title="Need some ideas for your next trip?" text="Mouth-watering food, authentic Pakistan experience, unforgettable locations." />
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {articles.map((a) => (
            <li key={a.href}>
              <a href={a.href} target="_blank" rel="noopener noreferrer" className="group relative block h-64 overflow-hidden rounded-3xl bg-spruce-900">
                <LandscapeArt seed={a.title} kind={a.kind} className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-spruce-950/90 via-spruce-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-sm backdrop-blur">{a.tag}</span>
                  <h3 className="mt-3 text-2xl font-bold">{a.title}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* App + community */}
      <section className={`${container} mt-28`}>
        <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-porter-700 to-spruce-900 p-8 text-white sm:p-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold sm:text-5xl">Get the app</h2>
            <p className="mt-4 max-w-md text-lg text-glacier-100">Everything you need for your trips in your pocket.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.apps.ios} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-6 py-3.5 font-semibold text-spruce-950 hover:bg-glacier-100">Download on iOS</a>
              <a href={site.apps.android} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-6 py-3.5 font-semibold text-spruce-950 hover:bg-glacier-100">Get it on Android</a>
            </div>
          </div>
          <div className="mx-auto w-52 rounded-[2rem] border-[6px] border-spruce-950 bg-spruce-950 shadow-2xl lg:translate-y-14" aria-hidden="true">
            <div className="relative h-80 overflow-hidden rounded-[1.5rem]">
              <LandscapeArt seed="app-screen" kind="lake" className="absolute inset-0 h-full w-full" />
              <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white p-3 text-spruce-900">
                <p className="text-sm font-bold">Hunza, 6 days</p>
                <p className="text-xs text-ink-soft">From {pkr(51500)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <a href={site.socials[0].href} target="_blank" rel="noopener noreferrer" className="rounded-3xl bg-white p-7 ring-1 ring-glacier-200 transition-shadow hover:shadow-lg hover:shadow-spruce-900/10">
            <h3 className="text-xl font-bold text-spruce-900">Facebook fans page</h3>
            <p className="mt-1 text-ink-soft">17,388 travelers</p>
          </a>
          <a href={site.socials[1].href} target="_blank" rel="noopener noreferrer" className="rounded-3xl bg-white p-7 ring-1 ring-glacier-200 transition-shadow hover:shadow-lg hover:shadow-spruce-900/10">
            <h3 className="text-xl font-bold text-spruce-900">Instagram page</h3>
            <p className="mt-1 text-ink-soft">5,909 travelers</p>
          </a>
        </div>
        <p className="mt-6 max-w-2xl text-ink-soft">
          Connect with fellow travelers, share your experience, and get both travel advice and inspiration in our travel communities.
        </p>
      </section>
    </>
  );
}

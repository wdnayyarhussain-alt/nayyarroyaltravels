import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/data";

const services = [
  { href: "/trip-designer", label: "Trip Designer" },
  { href: "/hotels", label: "Hotels" },
  { href: "/car-rentals", label: "Car Rental" },
  { href: "/beach-huts", label: "Beach Huts" },
  { href: "/farmhouses", label: "Farmhouses" },
];
const quick = [
  { href: "/about-us", label: "About us" },
  { href: "/contact-us", label: "Contact us" },
  { href: "/customers-reviews", label: "Customer reviews" },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-spruce-950 text-glacier-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm leading-relaxed text-glacier-300">
            We specialize in organizing travel and tourism services all over Pakistan. Our friendly team is always there to answer any question you have.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-spruce-700 px-3.5 py-1.5 text-sm text-glacier-100 transition-colors hover:bg-spruce-800"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-white">Services</h2>
          <ul className="mt-4 grid gap-2.5">
            {services.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-white">Company</h2>
          <ul className="mt-4 grid gap-2.5">
            {quick.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-white">Contact</h2>
          <ul className="mt-4 grid gap-2.5">
            {site.phones.map((p, i) => (
              <li key={p}>
                <a href={`tel:${site.phoneLinks[i]}`} className="hover:text-white">{p}</a>
                {i === 1 && <span className="text-glacier-300"> (WhatsApp only)</span>}
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-spruce-800">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-sm text-glacier-300 sm:px-8">
          <p>Porter Pakistan, copyright 2019 to 2026.</p>
          <p>
            Get the app on{" "}
            <a href={site.apps.ios} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">iOS</a>{" "}
            and{" "}
            <a href={site.apps.android} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">Android</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}

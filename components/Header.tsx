"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/trip-designer", label: "Trip Designer" },
  { href: "/hotels", label: "Hotels" },
  { href: "/car-rentals", label: "Car Rental" },
  { href: "/beach-huts", label: "Beach Huts" },
  { href: "/farmhouses", label: "Farmhouses" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-glacier-200/70 bg-glacier-50/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Porter Pakistan home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-[0.95rem] font-medium transition-colors ${
                  active
                    ? "bg-spruce-900 text-white"
                    : "text-ink-soft hover:bg-glacier-100 hover:text-spruce-900"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/trip-designer"
            className="hidden rounded-full bg-apricot-400 px-5 py-2.5 text-sm font-semibold text-spruce-950 transition-colors hover:bg-apricot-500 sm:inline-block"
          >
            Plan my trip
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-glacier-300 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M4 4l12 12M16 4 4 16" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-glacier-200 bg-glacier-50 px-5 pb-5 pt-3 lg:hidden">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium hover:bg-glacier-100"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/trip-designer"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-apricot-400 px-5 py-3 text-center font-semibold text-spruce-950"
          >
            Plan my trip
          </Link>
        </nav>
      )}
    </header>
  );
}

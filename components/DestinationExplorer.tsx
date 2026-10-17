"use client";

import Link from "next/link";
import { useState } from "react";
import { gridDestinations, pkr, regions, type Region } from "@/lib/data";
import { LandscapeArt } from "./LandscapeArt";

export function DestinationExplorer() {
  const [region, setRegion] = useState<Region | "All">("All");
  const [showAll, setShowAll] = useState(false);
  const filtered = region === "All" ? gridDestinations : gridDestinations.filter((d) => d.region === region);
  const collapsed = region === "All" && !showAll;
  const list = collapsed ? filtered.slice(0, 8) : filtered;

  return (
    <div>
      <div role="group" aria-label="Filter destinations by region" className="flex flex-wrap gap-2">
        {(["All", ...regions] as const).map((r) => (
          <button
            key={r}
            type="button"
            aria-pressed={region === r}
            onClick={() => setRegion(r)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              region === r
                ? "border-spruce-900 bg-spruce-900 text-white"
                : "border-glacier-300 bg-white text-ink-soft hover:border-spruce-700"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((d, i) => (
          <li key={d.slug} className={i === 0 && region !== "All" ? "sm:col-span-2 lg:col-span-2" : ""}>
            <Link
              href={`/location/${d.slug}`}
              className="group relative block h-72 overflow-hidden rounded-3xl bg-spruce-900 ring-1 ring-glacier-200"
            >
              <LandscapeArt seed={d.slug} kind={d.kind} className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-spruce-950/90 via-spruce-950/55 to-transparent p-5 pt-16 text-white">
                <h3 className="text-xl font-bold">{d.name}</h3>
                <p className="mt-1 text-sm leading-snug text-glacier-100">{d.blurb}</p>
                <p className="mt-2 text-sm font-semibold text-apricot-300">
                  {d.from ? `From ${pkr(d.from)}` : "Custom quote"}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {region === "All" && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="rounded-full border border-spruce-900 px-7 py-3 font-semibold text-spruce-900 transition-colors hover:bg-spruce-900 hover:text-white"
          >
            {showAll ? "Show fewer destinations" : `Show all ${filtered.length} destinations`}
          </button>
        </div>
      )}
    </div>
  );
}

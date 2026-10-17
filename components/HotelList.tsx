"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { hotelCities, hotels, pkr, waLink } from "@/lib/data";
import { LandscapeArt } from "./LandscapeArt";

function label(score: number) {
  return score >= 9 ? "Excellent" : "Very good";
}

export function HotelList() {
  const params = useSearchParams();
  const initial = params.get("city") ?? "All";
  const checkin = params.get("checkin") ?? "";
  const [city, setCity] = useState<string>(hotelCities.includes(initial) ? initial : "All");
  const [sort, setSort] = useState<"rating" | "low" | "high">("rating");

  const list = hotels
    .filter((h) => city === "All" || h.city === city)
    .sort((a, b) =>
      sort === "rating" ? b.score - a.score : sort === "low" ? a.perNight - b.perNight : b.perNight - a.perNight,
    );

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div role="group" aria-label="Filter hotels by destination" className="flex flex-wrap gap-2">
          {["All", ...hotelCities].map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={city === c}
              onClick={() => setCity(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                city === c ? "border-spruce-900 bg-spruce-900 text-white" : "border-glacier-300 bg-white text-ink-soft hover:border-spruce-700"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div>
          <label htmlFor="sort" className="label">Sort by</label>
          <select id="sort" className="field !w-auto" value={sort} onChange={(e) => setSort(e.target.value as typeof sort)}>
            <option value="rating">Top rated</option>
            <option value="low">Price, low to high</option>
            <option value="high">Price, high to low</option>
          </select>
        </div>
      </div>

      <ul className="mt-8 grid gap-5">
        {list.map((h) => (
          <li key={h.slug} className="grid overflow-hidden rounded-3xl bg-white ring-1 ring-glacier-200 sm:grid-cols-[260px_1fr_auto]">
            <div className="relative h-44 sm:h-auto">
              <LandscapeArt seed={h.slug} kind={h.kind} className="absolute inset-0 h-full w-full" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-spruce-900">{h.name}</h3>
              <p className="mt-1 text-ink-soft">{h.city}</p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-glacier-100 py-1 pl-1 pr-3 text-sm font-medium">
                <span className="rounded-full bg-porter-700 px-2.5 py-1 font-bold text-white">{h.score}</span>
                {label(h.score)}
              </p>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 border-t border-glacier-100 p-6 sm:flex-col sm:items-end sm:justify-center sm:border-l sm:border-t-0">
              <p className="text-right">
                <span className="block text-xl font-bold text-spruce-900">{pkr(h.perNight)}</span>
                <span className="text-sm text-ink-soft">per night</span>
              </p>
              <a
                href={waLink(
                  `Hi Porter Pakistan, is ${h.name} (${h.city}) available${checkin ? ` from ${checkin}` : ""}?`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-apricot-400 px-5 py-2.5 text-sm font-semibold text-spruce-950 transition-colors hover:bg-apricot-500"
              >
                Check availability
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { hotelCities } from "@/lib/data";

export function HeroSearch() {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const q = new URLSearchParams();
    if (city) q.set("city", city);
    if (date) q.set("checkin", date);
    router.push(`/hotels${q.toString() ? `?${q}` : ""}`);
  }

  return (
    <form
      onSubmit={submit}
      className="grid gap-4 rounded-3xl bg-white p-5 shadow-xl shadow-spruce-900/10 ring-1 ring-glacier-200 sm:grid-cols-[1.2fr_1fr_auto] sm:items-end sm:p-6"
      aria-label="Search hotels"
    >
      <div>
        <label htmlFor="hs-city" className="label">Hotels in</label>
        <select id="hs-city" className="field" value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Choose a destination</option>
          {hotelCities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="hs-date" className="label">Check-in date</label>
        <input id="hs-date" type="date" className="field" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button
        type="submit"
        className="h-12 rounded-xl bg-spruce-900 px-7 font-semibold text-white transition-colors hover:bg-spruce-800"
      >
        Find hotels
      </button>
    </form>
  );
}

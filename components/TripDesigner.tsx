"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { destinations, getDestination, pkr, waLink } from "@/lib/data";

const startCities = ["Islamabad", "Lahore", "Karachi", "Peshawar", "Rawalpindi"];

const styles = {
  economy: { label: "Economy", note: "Clean, simple stays and a reliable vehicle.", factor: 1 },
  comfort: { label: "Comfort", note: "Better-located hotels and more room in the car.", factor: 1.3 },
  luxury: { label: "Luxury", note: "Top verified resorts and a premium vehicle.", factor: 1.8 },
} as const;
type StyleKey = keyof typeof styles;

const vehicles = [
  { id: "corolla", label: "Sedan (Corolla)" },
  { id: "hiace", label: "Group van (Hiace)" },
  { id: "prado", label: "4x4 (Prado)" },
];

const includes = [
  "Hotel stay with breakfast",
  "Vehicle with driver for the whole trip",
  "Fuel, toll taxes and parking fee",
  "Driver's allowance",
];

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function TripDesigner() {
  const params = useSearchParams();
  const paramDest = params.get("destination") ?? "";
  const paramStyle = params.get("style") ?? "";
  const paramNights = Number(params.get("nights"));

  const [from, setFrom] = useState(startCities.includes(params.get("from") ?? "") ? (params.get("from") as string) : "Islamabad");
  const [dest, setDest] = useState(getDestination(paramDest) ? paramDest : "hunza");
  const [nights, setNights] = useState(Number.isFinite(paramNights) && paramNights > 0 ? clamp(paramNights, 1, 14) : 5);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [style, setStyle] = useState<StyleKey>(paramStyle in styles ? (paramStyle as StyleKey) : "economy");
  const [vehicle, setVehicle] = useState("corolla");
  const [date, setDate] = useState("");

  const d = getDestination(dest)!;
  const perPerson = d.from ? Math.round((d.from * styles[style].factor) / 500) * 500 : null;
  const travellers = adults + children;
  const vehicleLabel = vehicles.find((v) => v.id === vehicle)?.label ?? "";

  const message = [
    "Hi Porter Pakistan, please quote this trip:",
    `Route: ${from} to ${d.name}`,
    `Length: ${nights + 1} days / ${nights} nights`,
    date && `Start date: ${date}`,
    `Travellers: ${adults} adult${adults > 1 ? "s" : ""}${children ? `, ${children} child${children > 1 ? "ren" : ""}` : ""}`,
    `Style: ${styles[style].label}`,
    `Vehicle: ${vehicleLabel}`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">
      <form onSubmit={(e) => e.preventDefault()} className="grid gap-8 rounded-3xl bg-white p-6 ring-1 ring-glacier-200 sm:p-8" aria-label="Trip designer">
        <fieldset className="grid gap-4 sm:grid-cols-2">
          <legend className="mb-3 font-display text-xl font-bold text-spruce-900">Where to?</legend>
          <div>
            <label htmlFor="td-from" className="label">Starting from</label>
            <select id="td-from" className="field" value={from} onChange={(e) => setFrom(e.target.value)}>
              {startCities.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="td-dest" className="label">Destination</label>
            <select id="td-dest" className="field" value={dest} onChange={(e) => setDest(e.target.value)}>
              {destinations.map((x) => <option key={x.slug} value={x.slug}>{x.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="td-date" className="label">Start date</label>
            <input id="td-date" type="date" className="field" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <label htmlFor="td-nights" className="label">Nights: {nights}</label>
            <input
              id="td-nights"
              type="range"
              min={1}
              max={14}
              value={nights}
              onChange={(e) => setNights(Number(e.target.value))}
              className="mt-2 w-full accent-[var(--color-porter-600)]"
            />
          </div>
        </fieldset>

        <fieldset className="grid gap-4 sm:grid-cols-2">
          <legend className="mb-3 font-display text-xl font-bold text-spruce-900">Who is travelling?</legend>
          {[
            { id: "adults", label: "Adults", value: adults, set: setAdults, min: 1 },
            { id: "children", label: "Children", value: children, set: setChildren, min: 0 },
          ].map((s) => (
            <div key={s.id}>
              <span className="label" id={`${s.id}-l`}>{s.label}</span>
              <div className="flex items-center gap-3" role="group" aria-labelledby={`${s.id}-l`}>
                <button type="button" aria-label={`Fewer ${s.label.toLowerCase()}`} onClick={() => s.set(Math.max(s.min, s.value - 1))} className="h-11 w-11 rounded-full border border-glacier-300 text-xl hover:bg-glacier-100">−</button>
                <output className="w-8 text-center text-lg font-bold" aria-live="polite">{s.value}</output>
                <button type="button" aria-label={`More ${s.label.toLowerCase()}`} onClick={() => s.set(Math.min(20, s.value + 1))} className="h-11 w-11 rounded-full border border-glacier-300 text-xl hover:bg-glacier-100">+</button>
              </div>
            </div>
          ))}
        </fieldset>

        <fieldset>
          <legend className="mb-3 font-display text-xl font-bold text-spruce-900">Trip style</legend>
          <div className="grid gap-3 sm:grid-cols-3">
            {(Object.keys(styles) as StyleKey[]).map((k) => (
              <label
                key={k}
                className={`cursor-pointer rounded-2xl border p-4 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-apricot-500 ${
                  style === k ? "border-porter-600 bg-glacier-100" : "border-glacier-300 hover:border-spruce-700"
                }`}
              >
                <input type="radio" name="style" value={k} checked={style === k} onChange={() => setStyle(k)} className="sr-only" />
                <span className="block font-bold text-spruce-900">{styles[k].label}</span>
                <span className="mt-1 block text-sm leading-snug text-ink-soft">{styles[k].note}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-3 font-display text-xl font-bold text-spruce-900">Vehicle</legend>
          <div className="flex flex-wrap gap-2">
            {vehicles.map((v) => (
              <label
                key={v.id}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-apricot-500 ${
                  vehicle === v.id ? "border-spruce-900 bg-spruce-900 text-white" : "border-glacier-300 bg-white text-ink-soft hover:border-spruce-700"
                }`}
              >
                <input type="radio" name="vehicle" value={v.id} checked={vehicle === v.id} onChange={() => setVehicle(v.id)} className="sr-only" />
                {v.label}
              </label>
            ))}
          </div>
        </fieldset>
      </form>

      <aside className="rounded-3xl bg-spruce-900 p-7 text-white lg:sticky lg:top-24" aria-label="Your trip summary">
        <h2 className="font-display text-2xl font-bold">Your trip</h2>
        <p className="mt-3 text-lg text-glacier-100">
          {from} to {d.name}
        </p>
        <p className="text-glacier-300">
          {nights + 1} days, {nights} nights, {travellers} traveller{travellers > 1 ? "s" : ""}
        </p>

        <div className="mt-6 rounded-2xl bg-spruce-800 p-5">
          {perPerson ? (
            <>
              <p className="text-sm text-glacier-300">Starting from</p>
              <p className="font-display text-4xl font-extrabold text-apricot-300">{pkr(perPerson)}</p>
              <p className="text-sm text-glacier-300">per person, {styles[style].label.toLowerCase()} style</p>
              <p className="mt-3 text-sm text-glacier-100">About {pkr(perPerson * travellers)} for {travellers}.</p>
            </>
          ) : (
            <>
              <p className="font-display text-2xl font-bold text-apricot-300">Custom quote</p>
              <p className="mt-1 text-sm text-glacier-300">We price this route after hearing your dates and group size.</p>
            </>
          )}
        </div>

        <ul className="mt-6 grid gap-2.5 text-[0.95rem]">
          {includes.map((i) => (
            <li key={i} className="flex gap-2.5">
              <svg className="mt-1 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#F9C48E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 8.500 3.200 3L13 4.500" /></svg>
              {i}
            </li>
          ))}
        </ul>

        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 block rounded-full bg-apricot-400 px-6 py-3.5 text-center font-semibold text-spruce-950 transition-colors hover:bg-apricot-500"
        >
          Get my exact quote on WhatsApp
        </a>
        <p className="mt-3 text-xs leading-relaxed text-glacier-300">
          The price shown is a starting estimate. Final cost depends on your dates, hotels and group size, and our team confirms it on WhatsApp.
        </p>
      </aside>
    </div>
  );
}

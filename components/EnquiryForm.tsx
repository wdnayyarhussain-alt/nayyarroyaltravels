"use client";

import { useState } from "react";
import { waLink } from "@/lib/data";

export function EnquiryForm({
  service,
  placeLabel = "Destination",
  placePlaceholder = "Hunza, Skardu, Swat...",
  cta = "Send on WhatsApp",
}: {
  service: string;
  placeLabel?: string;
  placePlaceholder?: string;
  cta?: string;
}) {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [notes, setNotes] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `Hi Porter Pakistan, I'd like to enquire about: ${service}.`,
      name && `Name: ${name}`,
      place && `${placeLabel}: ${place}`,
      date && `Date: ${date}`,
      guests && `Guests: ${guests}`,
      notes && `Notes: ${notes}`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-3xl bg-white p-6 ring-1 ring-glacier-200 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="eq-name" className="label">Your name</label>
          <input id="eq-name" className="field" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="eq-place" className="label">{placeLabel}</label>
          <input id="eq-place" className="field" value={place} placeholder={placePlaceholder} onChange={(e) => setPlace(e.target.value)} />
        </div>
        <div>
          <label htmlFor="eq-date" className="label">Date</label>
          <input id="eq-date" type="date" className="field" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="eq-guests" className="label">Guests</label>
          <input id="eq-guests" type="number" min={1} max={60} className="field" value={guests} onChange={(e) => setGuests(e.target.value)} />
        </div>
      </div>
      <div>
        <label htmlFor="eq-notes" className="label">Anything else we should know?</label>
        <textarea id="eq-notes" rows={3} className="field" value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>
      <button type="submit" className="justify-self-start rounded-full bg-porter-700 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-porter-600">
        {cta}
      </button>
      <p className="text-sm text-ink-soft">This opens WhatsApp with your details filled in. Nothing is stored on this website.</p>
    </form>
  );
}

import type { Metadata } from "next";
import { Suspense } from "react";
import { HotelList } from "@/components/HotelList";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Hotels",
  description: "Physically verified hotels and resorts across Pakistan's most loved destinations.",
};

export default function HotelsPage() {
  return (
    <>
      <PageHero
        seed="hotels"
        kind="valley"
        title="Verified hotels across Pakistan"
        text="From city stays in Lahore to boutique hotels in Hunza Valley, every property is checked in person before it joins our list."
      />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <Suspense fallback={<div className="h-96 animate-pulse rounded-3xl bg-glacier-100" />}>
          <HotelList />
        </Suspense>
      </div>
    </>
  );
}

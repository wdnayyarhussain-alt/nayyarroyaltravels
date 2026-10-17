import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { TripDesigner } from "@/components/TripDesigner";

export const metadata: Metadata = {
  title: "Trip Designer",
  description: "Design your perfect trip within a minute: pick a destination, dates, travellers and style.",
};

export default function TripDesignerPage() {
  return (
    <>
      <PageHero
        seed="trip-designer"
        kind="lake"
        title="Design your perfect trip in a minute"
        text="Pick where you are going, who is coming and how you like to travel. We turn it into a quote on WhatsApp."
      />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <Suspense fallback={<div className="h-96 animate-pulse rounded-3xl bg-glacier-100" />}>
          <TripDesigner />
        </Suspense>
      </div>
    </>
  );
}

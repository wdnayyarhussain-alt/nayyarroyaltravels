import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { stayServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Flexible and affordable car rentals across Pakistan, with or without a driver.",
};

export default function Page() {
  return <ServicePage s={stayServices["car-rentals"]} />;
}

import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { stayServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Beach Huts",
  description: "Cozy beach huts in Karachi and Gwadar.",
};

export default function Page() {
  return <ServicePage s={stayServices["beach-huts"]} />;
}

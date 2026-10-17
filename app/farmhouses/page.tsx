import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { stayServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Farmhouses",
  description: "Farmhouse stays across Punjab and Sindh.",
};

export default function Page() {
  return <ServicePage s={stayServices["farmhouses"]} />;
}

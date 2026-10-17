import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Call, email or WhatsApp the Porter Pakistan team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero seed="contact" kind="lake" title="Talk to our team" text="Tell us where you want to go and we will take it from there." />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 className="text-2xl font-bold text-spruce-900">Reach us directly</h2>
          <ul className="mt-6 grid gap-5 text-lg">
            {site.phones.map((p, i) => (
              <li key={p}>
                <a href={`tel:${site.phoneLinks[i]}`} className="font-semibold text-spruce-900 hover:underline">{p}</a>
                {i === 1 && <span className="text-ink-soft"> (WhatsApp chat only)</span>}
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="font-semibold text-spruce-900 hover:underline">{site.email}</a>
            </li>
          </ul>
          <ul className="mt-8 flex flex-wrap gap-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-glacier-300 px-4 py-2 text-sm font-medium hover:bg-glacier-100">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <EnquiryForm service="General enquiry" />
      </div>
    </>
  );
}

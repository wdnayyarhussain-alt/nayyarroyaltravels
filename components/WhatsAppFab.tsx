import { waLink } from "@/lib/data";

export function WhatsAppFab() {
  return (
    <a
      href={waLink("Hi Porter Pakistan, I'd like help planning a trip.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Porter Pakistan on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-porter-600 text-white shadow-lg shadow-spruce-900/25 transition-transform hover:scale-105"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.500l1.700-5.400A8.400 8.400 0 1 1 21 11.500Z" />
        <path d="M9 9.500c.3 2 2.500 4.200 4.500 4.500l1.300-1.200-1.800-1-.8.700c-.8-.4-1.500-1.100-1.900-1.900l.7-.8-1-1.800Z" fill="currentColor" stroke="none" />
      </svg>
    </a>
  );
}

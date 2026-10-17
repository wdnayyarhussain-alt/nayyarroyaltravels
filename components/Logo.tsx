export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <rect width="34" height="34" rx="10" fill="#199171" />
        <path d="M5 26 13 12l5 8 3-4 8 10z" fill="#fff" />
        <circle cx="25" cy="10" r="3" fill="#F4A259" />
      </svg>
      <span
        className={`font-display text-xl font-bold tracking-tight ${light ? "text-white" : "text-spruce-900"}`}
      >
        Porter Pakistan
      </span>
    </span>
  );
}

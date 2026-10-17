import { LandscapeArt } from "./LandscapeArt";
import type { ArtKind } from "@/lib/data";

export function PageHero({
  title,
  text,
  kind = "mountain",
  seed,
  children,
}: {
  title: string;
  text?: string;
  kind?: ArtKind;
  seed: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-spruce-900 text-white">
      <LandscapeArt seed={seed} kind={kind} className="absolute inset-0 h-full w-full opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-spruce-950/90 via-spruce-950/60 to-spruce-950/10" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-glacier-100 sm:text-xl">{text}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

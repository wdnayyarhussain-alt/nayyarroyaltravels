export function SectionHead({
  title,
  text,
  action,
}: {
  title: string;
  text?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-spruce-900 sm:text-4xl">{title}</h2>
        {text && <p className="mt-3 text-lg leading-relaxed text-ink-soft">{text}</p>}
      </div>
      {action}
    </div>
  );
}

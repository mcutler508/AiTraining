export function SectionKicker({
  number,
  label,
  className = "",
}: {
  number: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`kicker flex items-center gap-3 ${className}`}>
      <span className="text-[var(--color-ink)]">{number}</span>
      <span aria-hidden className="text-[var(--color-ink-faint)]">·</span>
      <span>{label}</span>
    </div>
  );
}

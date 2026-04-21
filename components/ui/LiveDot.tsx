export function LiveDot() {
  return (
    <span
      aria-hidden
      className="inline-block w-[6px] h-[6px] rounded-full bg-[var(--color-accent)]"
      style={{
        boxShadow: "0 0 0 0 rgba(216, 255, 60, 0.4)",
        animation: "livedot 2.4s ease-out infinite",
      }}
    >
      <style>{`
        @keyframes livedot {
          0% { box-shadow: 0 0 0 0 rgba(216, 255, 60, 0.5); }
          70% { box-shadow: 0 0 0 8px rgba(216, 255, 60, 0); }
          100% { box-shadow: 0 0 0 0 rgba(216, 255, 60, 0); }
        }
      `}</style>
    </span>
  );
}

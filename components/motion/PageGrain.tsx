/**
 * Very faint fixed fractal-noise overlay covering the whole viewport. Adds a
 * paper-grain texture that makes large flat areas of canvas feel considered
 * instead of plastic. ~4% opacity, mix-blend-screen so it only lightens.
 *
 * Mount once in app/layout.tsx inside <body>. Must sit below modal/menu layers
 * (z-[5]) but above the base canvas.
 */
export function PageGrain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] opacity-[0.04] mix-blend-screen"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

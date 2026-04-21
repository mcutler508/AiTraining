"use client";

import { motion } from "framer-motion";
import { SectionKicker } from "@/components/ui/SectionKicker";

type Tile = {
  num: string;
  title: string;
  outcome: string;
  glyph: "grid" | "wave" | "orbit" | "stack" | "beam" | "mesh";
  accent?: boolean;
};

const TILES: Tile[] = [
  { num: "A01", title: "Personal tracker", outcome: "Ideated Friday · deployed Sunday", glyph: "grid", accent: true },
  { num: "A02", title: "Ops dashboard", outcome: "Replaced a weekly spreadsheet", glyph: "wave" },
  { num: "A03", title: "Generative planner", outcome: "From prompt to production in a weekend", glyph: "orbit" },
  { num: "A04", title: "Internal tool", outcome: "Shipped to a 12-person team", glyph: "stack" },
  { num: "A05", title: "Matching utility", outcome: "Built, tested, deployed, iterated", glyph: "beam", accent: true },
  { num: "A06", title: "Content studio", outcome: "Idea to live URL, one sitting", glyph: "mesh" },
];

function Glyph({ type, accent }: { type: Tile["glyph"]; accent?: boolean }) {
  const stroke = accent ? "var(--color-accent)" : "var(--color-ink-muted)";
  const faint = "var(--color-hairline-hot)";

  const common = {
    width: "100%",
    height: "100%",
    viewBox: "0 0 120 120",
    fill: "none",
    preserveAspectRatio: "xMidYMid meet" as const,
  };

  if (type === "grid") {
    return (
      <svg {...common}>
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 5 }).map((__, c) => {
            const on = (r + c) % 3 === 0;
            return (
              <rect
                key={`${r}-${c}`}
                x={20 + c * 16}
                y={20 + r * 16}
                width={6}
                height={6}
                fill={on ? stroke : faint}
              />
            );
          })
        )}
      </svg>
    );
  }
  if (type === "wave") {
    return (
      <svg {...common}>
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M 10 ${40 + i * 12} Q 40 ${20 + i * 12}, 60 ${40 + i * 12} T 110 ${40 + i * 12}`}
            stroke={i === 1 ? stroke : faint}
            strokeWidth={1}
          />
        ))}
      </svg>
    );
  }
  if (type === "orbit") {
    return (
      <svg {...common}>
        <circle cx={60} cy={60} r={10} fill={stroke} />
        <circle cx={60} cy={60} r={28} stroke={faint} strokeWidth={1} />
        <circle cx={60} cy={60} r={44} stroke={faint} strokeWidth={1} />
        <circle cx={88} cy={60} r={3} fill={stroke} />
        <circle cx={28} cy={76} r={2} fill={stroke} />
      </svg>
    );
  }
  if (type === "stack") {
    return (
      <svg {...common}>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={20 + i * 4}
            y={20 + i * 14}
            width={80 - i * 8}
            height={10}
            fill={i === 2 ? stroke : faint}
          />
        ))}
      </svg>
    );
  }
  if (type === "beam") {
    return (
      <svg {...common}>
        <line x1={20} y1={60} x2={100} y2={60} stroke={faint} strokeWidth={1} />
        <line x1={30} y1={40} x2={90} y2={80} stroke={faint} strokeWidth={1} />
        <line x1={30} y1={80} x2={90} y2={40} stroke={stroke} strokeWidth={1.5} />
        <circle cx={60} cy={60} r={4} fill={stroke} />
      </svg>
    );
  }
  // mesh
  return (
    <svg {...common}>
      {Array.from({ length: 4 }).map((_, i) =>
        Array.from({ length: 4 }).map((__, j) => (
          <circle
            key={`${i}-${j}`}
            cx={22 + i * 24}
            cy={22 + j * 24}
            r={1.5}
            fill={(i + j) % 2 === 0 ? stroke : faint}
          />
        ))
      )}
      <line x1={22} y1={22} x2={94} y2={94} stroke={stroke} strokeWidth={0.5} />
    </svg>
  );
}

export function Proof() {
  return (
    <section className="py-24 md:py-36 border-t border-[var(--color-hairline)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[1120px]">
          <SectionKicker number="06" label="EVIDENCE" className="mb-10 md:mb-14" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 mb-14 md:mb-20">
            <div className="md:col-span-7">
              <h2 className="font-display text-[40px] md:text-[64px] leading-[1.0] tracking-[-0.02em] text-[var(--color-ink)]">
                Built this way.<br />
                <span className="italic text-[var(--color-accent)]">Already live.</span>
              </h2>
            </div>
            <div className="md:col-span-5 md:pt-4">
              <p className="text-[17px] md:text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
                A sample of apps that came out of the mechanism. Details held back on purpose — the interesting part isn&apos;t the screenshot. It&apos;s the weekend.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {TILES.map((t, i) => (
              <motion.article
                key={t.num}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px 0px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group border border-[var(--color-hairline-hot)] bg-[var(--color-canvas)] hover:border-[var(--color-ink-faint)] transition-colors"
              >
                <div className="aspect-[4/3] border-b border-[var(--color-hairline)] p-8 md:p-10 flex items-center justify-center bg-[#0C0C0E]">
                  <Glyph type={t.glyph} accent={t.accent} />
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="kicker text-[var(--color-ink-faint)]">{t.num}</p>
                    <p className="kicker text-[var(--color-ink-faint)] opacity-0 group-hover:opacity-100 transition-opacity">
                      case held
                    </p>
                  </div>
                  <p className="font-display text-[22px] leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)] mb-2">
                    {t.title}
                  </p>
                  <p className="text-[14px] leading-[1.5] text-[var(--color-ink-muted)]">
                    {t.outcome}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="kicker text-[var(--color-ink-faint)] mt-10 text-center leading-[1.5]">
            Full walkthroughs shared inside the cohort · Not online
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { EXAMPLES, transform, type Peek } from "@/lib/transformer";

function RedactedLine({ width, delay }: { width: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ width: `${width}%`, transformOrigin: "left" }}
      className="h-[6px] bg-[var(--color-hairline-hot)] rounded-[1px]"
    />
  );
}

function RedactedPRD({ peek }: { peek: Peek }) {
  return (
    <div className="relative border border-[var(--color-hairline-hot)] bg-[var(--color-canvas)]">
      {/* file chrome */}
      <div className="flex items-center justify-between border-b border-[var(--color-hairline)] px-5 py-3">
        <div className="flex items-center gap-2 kicker">
          <span className="text-[var(--color-ink-faint)]">file</span>
          <span className="text-[var(--color-ink)]">PRD.md</span>
        </div>
        <span className="kicker text-[var(--color-ink-faint)]">redacted preview</span>
      </div>

      <div className="p-6 md:p-8 space-y-7">
        {/* Title */}
        <div>
          <p className="kicker text-[var(--color-ink-faint)] mb-2">Title</p>
          <p className="font-display text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.02em] text-[var(--color-ink)]">
            {peek.codename}
          </p>
          <p className="mt-1 text-[14px] text-[var(--color-ink-muted)] italic">{peek.tagline}</p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {peek.prdSections.map((section, i) => (
            <motion.div
              key={section.heading + i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            >
              <p className="kicker text-[var(--color-ink-muted)] mb-3">
                <span className="text-[var(--color-ink-faint)] mr-2">§ {String(i + 1).padStart(2, "0")}</span>
                {section.heading}
              </p>
              <div className="space-y-1.5">
                {Array.from({ length: section.lines }).map((_, li) => {
                  const widths = [92, 78, 88, 64, 82, 71];
                  const w = widths[(i * 7 + li) % widths.length];
                  return (
                    <RedactedLine
                      key={li}
                      width={w}
                      delay={0.2 + i * 0.08 + li * 0.04}
                    />
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <p
          className="font-display italic text-[var(--color-ink-faint)] opacity-[0.08] select-none"
          style={{ fontSize: "clamp(72px, 14vw, 180px)", letterSpacing: "-0.04em" }}
        >
          redacted
        </p>
      </div>
    </div>
  );
}

function StackFingerprint({ hints }: { hints: string[] }) {
  return (
    <div className="border border-[var(--color-hairline-hot)] p-6 md:p-8">
      <p className="kicker text-[var(--color-ink-faint)] mb-4">Stack fingerprint</p>
      <ul className="space-y-3">
        {hints.map((h, i) => (
          <motion.li
            key={h}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            className="flex items-center gap-3"
          >
            <span
              aria-hidden
              className="w-2 h-2 bg-[var(--color-accent)] rounded-full shrink-0"
            />
            <span className="text-[15px] text-[var(--color-ink)]">{h}</span>
            <span className="kicker text-[var(--color-ink-faint)] ml-auto">•••</span>
          </motion.li>
        ))}
      </ul>
      <p className="kicker text-[var(--color-ink-faint)] mt-6 leading-[1.5]">
        Specific picks revealed in-session.
      </p>
    </div>
  );
}

function DeployLog({ stub }: { stub: string }) {
  const lines = [
    "→ initializing project…",
    "→ committing first push",
    "→ handing off to deploy target",
    "→ resolving build graph",
    "→ streaming assets",
    "→ provisioning live URL",
    `✓ live at ${stub}-•••.••••.app`,
  ];
  const [shown, setShown] = useState(0);

  useEffect(() => {
    setShown(0);
    const id = setInterval(() => {
      setShown((s) => (s < lines.length ? s + 1 : s));
    }, 380);
    return () => clearInterval(id);
  }, [stub]);

  return (
    <div className="border border-[var(--color-hairline-hot)] bg-[#07070A]">
      <div className="flex items-center gap-2 border-b border-[var(--color-hairline)] px-5 py-3">
        <span className="w-2 h-2 rounded-full bg-[var(--color-ink-faint)]" />
        <span className="w-2 h-2 rounded-full bg-[var(--color-ink-faint)]" />
        <span className="w-2 h-2 rounded-full bg-[var(--color-ink-faint)]" />
        <span className="kicker ml-3 text-[var(--color-ink-faint)]">deploy · terminal</span>
      </div>
      <div className="p-5 md:p-6 font-mono text-[13px] leading-[1.8] text-[var(--color-ink-muted)] min-h-[220px]">
        {lines.slice(0, shown).map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={i === lines.length - 1 ? "text-[var(--color-accent)]" : ""}
          >
            {l}
          </motion.div>
        ))}
        {shown < lines.length && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block w-[7px] h-[14px] bg-[var(--color-ink-muted)] align-middle"
          />
        )}
      </div>
    </div>
  );
}

export function Artifact() {
  const [idea, setIdea] = useState("");
  const [peek, setPeek] = useState<Peek | null>(null);
  const [activeExample, setActiveExample] = useState<string | null>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const run = (input: string) => {
    if (!input.trim()) return;
    setPeek(transform(input));
    setTimeout(() => {
      outputRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleExample = (id: string, p: string) => {
    setIdea(p);
    setActiveExample(id);
    run(p);
  };

  const reset = () => {
    setPeek(null);
    setActiveExample(null);
    setIdea("");
  };

  return (
    <section className="py-24 md:py-36 border-t border-[var(--color-hairline)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[1120px]">
          <SectionKicker number="04" label="ARTIFACT · A PEEK" className="mb-10 md:mb-14" />

          <h2 className="font-display text-[40px] md:text-[64px] leading-[1.0] tracking-[-0.02em] text-[var(--color-ink)] mb-6 md:mb-8 max-w-[900px]">
            Type an app idea.<br />
            Glimpse what comes back.
          </h2>

          <p className="text-[17px] md:text-[19px] leading-[1.55] text-[var(--color-ink-muted)] mb-10 md:mb-14 max-w-[640px]">
            This is a preview of the opening move — a document, a direction, a deploy. The full method is what we do together.
          </p>

          {/* Input */}
          <div className="border border-[var(--color-hairline-hot)] bg-[var(--color-canvas)]">
            <div className="p-6 md:p-10">
              <p className="kicker mb-4">The idea</p>
              <textarea
                value={idea}
                onChange={(e) => {
                  setIdea(e.target.value);
                  setActiveExample(null);
                }}
                placeholder="An app that tracks my gym workouts, remembers my last weight for each lift, and suggests the next set."
                rows={4}
                className="w-full bg-transparent text-[17px] md:text-[18px] leading-[1.55] text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] resize-none focus:outline-none font-sans"
                style={{ fontFamily: "var(--font-sans), sans-serif" }}
              />

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => run(idea)}
                  disabled={!idea.trim()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium bg-[var(--color-accent)] text-[var(--color-accent-ink)] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--color-accent)]/90 transition-opacity"
                >
                  Reveal the peek →
                </button>
                {peek && (
                  <button
                    onClick={reset}
                    className="kicker px-3 py-2 hover:text-[var(--color-ink)] transition-colors"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            <div className="border-t border-[var(--color-hairline)] px-6 md:px-10 py-5">
              <p className="kicker mb-3 text-[var(--color-ink-faint)]">Or try an example</p>
              <div className="flex flex-wrap gap-2">
                {EXAMPLES.map((ex) => (
                  <button
                    key={ex.id}
                    onClick={() => handleExample(ex.id, ex.prompt)}
                    className={`text-[13px] px-3 py-1.5 border transition-colors ${
                      activeExample === ex.id
                        ? "border-[var(--color-accent)] text-[var(--color-accent)]"
                        : "border-[var(--color-hairline-hot)] text-[var(--color-ink-muted)] hover:border-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {ex.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Output */}
          <AnimatePresence mode="wait">
            {peek && (
              <motion.div
                ref={outputRef}
                key={peek.sourceIdea}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-12 md:mt-16"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
                  <div className="md:col-span-7">
                    <RedactedPRD peek={peek} />
                  </div>
                  <div className="md:col-span-5 flex flex-col gap-5 md:gap-6">
                    <StackFingerprint hints={peek.stackHints} />
                    <DeployLog stub={peek.deployUrlStub} />
                  </div>
                </div>

                <p className="kicker mt-10 text-[var(--color-ink-faint)] max-w-[640px] leading-[1.5]">
                  The contents stay blurred on purpose. The full document — and the choices behind every line of it — is what we build together in the cohort.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

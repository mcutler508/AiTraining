import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/ui/SectionKicker";

export const metadata: Metadata = {
  title: "Stack · FLOW→BUILD",
  description:
    "The technical shape of what you build in a session. Frontend, local dev, data, auth, deploy.",
};

type Pillar = {
  num: string;
  kicker: string;
  heading: string;
  intro: string;
  bullets: { label: string; body: string }[];
  outcome: string;
};

const PILLARS: Pillar[] = [
  {
    num: "01",
    kicker: "FRONTEND & FRAMEWORKS",
    heading: "A real React app, on a framework engineers actually use.",
    intro:
      "We work in a type-safe React framework with file-based routing, server components where they earn their keep, and a clean separation between layout, data, and interaction. Nothing is hidden behind a builder UI you can't escape.",
    bullets: [
      {
        label: "Type-safe by default",
        body: "End-to-end TypeScript. The compiler catches the class of bugs that used to require a senior reviewer. Refactors are cheap.",
      },
      {
        label: "Component primitives",
        body: "Accessible building blocks (forms, dialogs, menus, tables) wired to a shared design-token layer. You don't reinvent a button on day one.",
      },
      {
        label: "Server vs client, on purpose",
        body: "Heavy data lives on the server. Interactive bits ship to the client. The split is explicit, not magical, and reviewable in the diff.",
      },
      {
        label: "Streaming and partial rendering",
        body: "Pages stream as data resolves. The user sees a usable interface in the first hundred milliseconds, not a spinner.",
      },
    ],
    outcome:
      "You leave with a codebase a real engineer can extend — not a no-code export that nobody else can read.",
  },
  {
    num: "02",
    kicker: "LOCAL DEV & TESTING",
    heading: "A workspace where the loop is fast and the failures are honest.",
    intro:
      "The reason most beginners stall isn't the language — it's the environment. Things don't reload. Errors are cryptic. The same code works on Tuesday and breaks on Wednesday. We close that gap on day one.",
    bullets: [
      {
        label: "Sub-second feedback loop",
        body: "Hot module replacement, in-editor type errors, and a dev server that doesn't lie. Save a file, see the result, keep moving.",
      },
      {
        label: "A scripted local stack",
        body: "Database, auth emulator, file storage, and the app itself all start with one command. No 'works on my machine' mysteries.",
      },
      {
        label: "Tests wired to the build",
        body: "Unit tests for the logic that matters, component tests for the parts users touch, and a smoke test that proves the deploy didn't lie. The green check is meaningful.",
      },
      {
        label: "Preview environments per branch",
        body: "Every push to a branch produces a live URL on a copy of production. You can show the work, not just describe it.",
      },
    ],
    outcome:
      "You stop debugging your toolchain and start debugging your product. The difference is enormous.",
  },
  {
    num: "03",
    kicker: "DATA LAYER",
    heading: "Postgres, treated like the long-lived asset it is.",
    intro:
      "Your data outlives your UI. We store it in managed Postgres with sane defaults — row-level security on by default, schema in version control, queries that are typed end-to-end. The database is something you can read, not a black box behind an ORM.",
    bullets: [
      {
        label: "Schema as code",
        body: "Migrations are checked into the repo. The schema in production is the schema in your editor. Rolling back is a git revert.",
      },
      {
        label: "Row-level security from day one",
        body: "Auth and data access live in the same place. A user can only see their own rows because the database enforces it, not because we remembered to add a WHERE clause.",
      },
      {
        label: "Typed query path",
        body: "The shape of a row is inferred from the schema and flows through the app. Rename a column, the compiler tells you everywhere it broke.",
      },
      {
        label: "Edge-cached reads where it matters",
        body: "Hot reads get cached at the edge with explicit invalidation. The page is fast everywhere, and you can explain why.",
      },
    ],
    outcome:
      "A data layer you can debug with a SQL prompt and a clear head — not a tangle of REST endpoints with no source of truth.",
  },
  {
    num: "04",
    kicker: "AUTH & DEPLOYMENT",
    heading: "Identity, sessions, and shipping — all things you don't roll yourself.",
    intro:
      "Authentication and deployment are the two places where amateur stacks tend to bleed. We use battle-tested managed services for both, configured carefully, so you can ship a real product without a security review or a 3am pager.",
    bullets: [
      {
        label: "Managed identity",
        body: "Email, OAuth (Google, GitHub, etc.), and passwordless flows handled by a provider whose entire job is to get this right. Sessions, refresh tokens, and revocation come for free.",
      },
      {
        label: "Authorization at the edge",
        body: "Protected routes are enforced before the page renders. Unauthenticated traffic never reaches your application code, never mind your database.",
      },
      {
        label: "Push to deploy",
        body: "A merge to the main branch deploys to production on infrastructure built for it (Vercel-class hosting). Each PR gets its own preview URL. Each deploy is reversible in one click.",
      },
      {
        label: "Observability you can act on",
        body: "Logs, runtime errors, and basic performance metrics ship with the box. When something breaks, you find out before your users tell you.",
      },
    ],
    outcome:
      "A production setup an engineer would respect — without a six-week DevOps detour.",
  },
];

export default function StackPage() {
  return (
    <main>
      {/* Header / Hero */}
      <section className="pt-24 md:pt-28 pb-14 md:pb-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="mb-10 md:mb-12">
            <Link
              href="/"
              className="kicker inline-flex items-center gap-2 text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
            >
              <span aria-hidden>←</span>
              <span>Back to FLOW→BUILD</span>
            </Link>
          </div>

          <SectionKicker number="00" label="THE STACK · TECHNICAL DETAIL" className="mb-8 md:mb-10" />

          <h1 className="font-display text-[44px] md:text-[88px] leading-[0.98] tracking-[-0.03em] text-[var(--color-ink)] max-w-[1040px]">
            Real software, on{" "}
            <span className="italic text-[var(--color-accent)]">grown-up</span>{" "}
            infrastructure.
          </h1>

          <p className="mt-7 md:mt-9 max-w-[720px] text-[18px] md:text-[20px] leading-[1.55] text-[var(--color-ink-muted)]">
            This page is for the engineers, architects, and technically curious
            buyers who want to know what their non-developer teammate (or
            themselves) is actually building. The short answer: a production
            React app on a stack you&apos;d recognize.
          </p>

          <p className="mt-5 md:mt-6 max-w-[720px] text-[15px] md:text-[16px] leading-[1.55] text-[var(--color-ink-faint)]">
            What we deliberately don&apos;t describe here: the AI workflow
            itself — the prompting patterns, the agent orchestration, the
            review loops. Those are the part that took a year to figure out
            and they&apos;re what the sessions are for.
          </p>
        </div>
      </section>

      {/* Pillars */}
      {PILLARS.map((p) => (
        <section
          key={p.num}
          className="py-16 md:py-24 border-t border-[var(--color-hairline)]"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="max-w-[1120px]">
              <SectionKicker number={p.num} label={p.kicker} className="mb-10 md:mb-12" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 mb-12 md:mb-14">
                <div className="md:col-span-7">
                  <h2 className="font-display text-[34px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
                    {p.heading}
                  </h2>
                </div>
                <div className="md:col-span-5 md:pt-3">
                  <p className="text-[17px] md:text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
                    {p.intro}
                  </p>
                </div>
              </div>

              {/* Bullets — two-column on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-hairline)] border border-[var(--color-hairline)]">
                {p.bullets.map((b) => (
                  <div
                    key={b.label}
                    className="bg-[var(--color-canvas)] p-6 md:p-8"
                  >
                    <p className="kicker text-[var(--color-accent)] mb-3">
                      {b.label}
                    </p>
                    <p className="text-[15px] md:text-[16px] leading-[1.6] text-[var(--color-ink)]">
                      {b.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 md:mt-12 max-w-[820px] border-l-2 border-[var(--color-accent)] pl-5 md:pl-6">
                <p className="kicker text-[var(--color-ink-faint)] mb-2">Why it matters</p>
                <p className="font-display text-[20px] md:text-[26px] leading-[1.35] tracking-[-0.01em] text-[var(--color-ink)]">
                  {p.outcome}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* What we don't show on this page */}
      <section className="py-16 md:py-24 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="max-w-[820px]">
            <SectionKicker number="—" label="WHAT'S NOT ON THIS PAGE" className="mb-10 md:mb-12" />

            <h2 className="font-display text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)] mb-6 md:mb-8">
              The interesting part isn&apos;t the stack.
            </h2>

            <div className="font-display text-[20px] md:text-[24px] leading-[1.45] tracking-[-0.01em] text-[var(--color-ink-muted)] space-y-5">
              <p>
                React, Postgres, managed auth, push-to-deploy hosting — none of
                that is novel. An engineer with three years of experience could
                describe most of it from memory. That&apos;s the point.{" "}
                <span className="italic text-[var(--color-ink)]">
                  Boring infrastructure is what frees you to do the interesting work.
                </span>
              </p>
              <p>
                The actual hard problem — the one that took the last year to
                figure out — is the loop between a non-developer and the AI.
                When to trust a suggestion, when to push back, what order to
                ask for things, how to keep a project on rails for ten weeks
                without it turning into a tangle.
              </p>
              <p className="text-[var(--color-ink)]">
                That part lives in the sessions, not on this page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-24 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="max-w-[820px]">
            <SectionKicker number="→" label="NEXT" className="mb-10 md:mb-12" />

            <h2 className="font-display text-[40px] md:text-[64px] leading-[1.0] tracking-[-0.02em] text-[var(--color-ink)] mb-6 md:mb-8">
              Want to see it{" "}
              <span className="italic text-[var(--color-accent)]">in motion</span>?
            </h2>

            <p className="text-[18px] md:text-[20px] leading-[1.5] text-[var(--color-ink-muted)] max-w-[640px] mb-10 md:mb-12">
              The home page walks through how the work runs week-to-week and
              what you actually do in a session. If the stack made sense, the
              method probably will too.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#ask"
                className="bg-[var(--color-accent)] text-[var(--color-accent-ink)] px-6 py-3 text-[15px] font-medium hover:bg-[var(--color-accent)]/90 transition-opacity"
              >
                Save a seat
              </Link>
              <Link
                href="/#method"
                className="px-6 py-3 text-[15px] text-[var(--color-ink)] border border-[var(--color-hairline-hot)] hover:border-[var(--color-ink-muted)] transition-colors"
              >
                See how it runs ↓
              </Link>
              <Link
                href="/"
                className="kicker text-[var(--color-ink-faint)] hover:text-[var(--color-ink)] transition-colors"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

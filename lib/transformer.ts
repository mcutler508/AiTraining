export type PeekSection = {
  heading: string;
  lines: number;
};

export type Peek = {
  sourceIdea: string;
  codename: string;
  kind: string;
  tagline: string;
  prdSections: PeekSection[];
  stackHints: string[];
  deployUrlStub: string;
};

export type Example = {
  id: string;
  label: string;
  prompt: string;
};

export const EXAMPLES: Example[] = [
  {
    id: "gym",
    label: "A personal gym tracker",
    prompt:
      "An app that tracks my gym workouts, remembers my last weight for each lift, and suggests the next set.",
  },
  {
    id: "meal",
    label: "A meal planner from my fridge",
    prompt:
      "A meal planner where I type what's in my fridge and it returns three recipes and a shopping list for what's missing.",
  },
  {
    id: "expenses",
    label: "A household expense dashboard",
    prompt:
      "A dashboard that imports my bank CSV and shows where my household is over-spending month over month.",
  },
];

const KIND_TABLE: { keywords: string[]; kind: string; tagline: string; stack: string[] }[] = [
  {
    keywords: ["track", "log", "record", "journal", "history"],
    kind: "A personal tracker",
    tagline: "Captures inputs over time, remembers what matters, nudges the next move.",
    stack: ["Typed frontend", "Persistent store", "Auth per user"],
  },
  {
    keywords: ["dashboard", "chart", "report", "spend", "budget", "metric"],
    kind: "A live dashboard",
    tagline: "Ingests raw data, distills it into shapes the eye can read.",
    stack: ["Typed frontend", "Data import", "Chart layer"],
  },
  {
    keywords: ["plan", "schedule", "suggest", "recipe", "recommend", "generate"],
    kind: "A generative planner",
    tagline: "Turns loose inputs into a structured, streamed plan you can act on.",
    stack: ["Typed frontend", "Model layer", "Streaming response"],
  },
  {
    keywords: ["match", "find", "search", "discover"],
    kind: "A matching tool",
    tagline: "Takes intent on one side and surfaces the right thing on the other.",
    stack: ["Typed frontend", "Indexed store", "Relevance layer"],
  },
];

const DEFAULT_KIND = {
  kind: "A focused tool",
  tagline: "One page, one job, done clean.",
  stack: ["Typed frontend", "Edge function", "Hosted deploy"],
};

function detect(idea: string) {
  const lower = idea.toLowerCase();
  for (const row of KIND_TABLE) {
    if (row.keywords.some((k) => lower.includes(k))) return row;
  }
  return DEFAULT_KIND;
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 28)
    .replace(/-$/g, "");
}

function codename(idea: string): string {
  const words = idea
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 3 && !/^(that|which|with|from|into|your|this|them|their|what|when|where|would|could|should|about|track|tracks|build|make|makes|app|tool|dashboard|planner|the|and|for)$/i.test(w));
  const pick = words[0] || "idea";
  const cap = pick.charAt(0).toUpperCase() + pick.slice(1).toLowerCase();
  return `PROJECT · ${cap.slice(0, 16)}`;
}

export function transform(idea: string): Peek {
  const clean = idea.trim().replace(/\s+/g, " ");
  const detected = detect(clean);
  const stub = slugify(clean) || "new-project";

  return {
    sourceIdea: clean,
    codename: codename(clean),
    kind: detected.kind,
    tagline: detected.tagline,
    prdSections: [
      { heading: "Overview", lines: 3 },
      { heading: "The user & the job", lines: 4 },
      { heading: "Core loop", lines: 5 },
      { heading: "Day-one surface", lines: 4 },
      { heading: "Out of scope", lines: 2 },
    ],
    stackHints: detected.stack,
    deployUrlStub: stub,
  };
}

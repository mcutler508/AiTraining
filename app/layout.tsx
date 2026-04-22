import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReadingProgress } from "@/components/motion/ReadingProgress";
import { PageGrain } from "@/components/motion/PageGrain";
import { SectionIndicator } from "@/components/motion/SectionIndicator";

const SECTIONS = [
  { id: "top",       num: "01", label: "The sessions" },
  { id: "tension",   num: "02", label: "Why this exists" },
  { id: "method",    num: "03", label: "How it runs" },
  { id: "phases",    num: "04", label: "What you do" },
  { id: "position",  num: "05", label: "Who it's for" },
  { id: "manifesto", num: "06", label: "About me" },
  { id: "ask",       num: "07", label: "Apply" },
];

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FLOW→BUILD · Build the app you've been meaning to build.",
  description:
    "Training for non-developers. You bring an idea. You leave with a working app, and the skill to build the next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <ReadingProgress />
        <PageGrain />
        <SectionIndicator sections={SECTIONS} />
        {children}
      </body>
    </html>
  );
}

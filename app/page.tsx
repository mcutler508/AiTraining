import { Marquee } from "@/components/sections/Marquee";
import { Statement } from "@/components/sections/Statement";
import { Tension } from "@/components/sections/Tension";
import { Pipeline } from "@/components/sections/Pipeline";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Position } from "@/components/sections/Position";
import { Manifesto } from "@/components/sections/Manifesto";
import { Ask } from "@/components/sections/Ask";
import { FineFooter } from "@/components/sections/FineFooter";
import { Ticker } from "@/components/motion/Ticker";

export default function Home() {
  return (
    <>
      <Marquee />
      <main className="pt-12">
        <Statement />
        <Tension />
        <Pipeline />
        <HowItWorks />
        <Position />
        <Manifesto />
        <Ticker
          items={[
            "Build real things",
            "Ship them",
            "Build the next one",
            "That's the whole thing",
          ]}
          speed={22}
          variant="canvas"
        />
        <Ask />
      </main>
      <FineFooter />
    </>
  );
}

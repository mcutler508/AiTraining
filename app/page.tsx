import { Marquee } from "@/components/sections/Marquee";
import { Statement } from "@/components/sections/Statement";
import { Tension } from "@/components/sections/Tension";
import { Pipeline } from "@/components/sections/Pipeline";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Proof } from "@/components/sections/Proof";
import { Position } from "@/components/sections/Position";
import { Manifesto } from "@/components/sections/Manifesto";
import { Ask } from "@/components/sections/Ask";
import { FineFooter } from "@/components/sections/FineFooter";

export default function Home() {
  return (
    <>
      <Marquee />
      <main className="pt-12">
        <Statement />
        <Tension />
        <Pipeline />
        <HowItWorks />
        <Proof />
        <Position />
        <Manifesto />
        <Ask />
      </main>
      <FineFooter />
    </>
  );
}

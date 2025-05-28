import { CircleDollarSign, Shield, SignalHigh } from "lucide-react";
import BenefitsCard from "./benefits-card";

export default function Benefits() {
  return (
    <section className="flex flex-col items-center gap-12 py-8 md:px-16">
      <header className="text-pwr-primary text-center text-3xl font-bold">Need A Better Way To...</header>
      <div className="grid grid-rows-3 gap-8 md:grid-cols-3 md:grid-rows-1">
        <BenefitsCard
          icon={Shield}
          header="Protect YOUR Data"
          text="We implement robust cybersecurity measures, backup solutions, and secure access controls to safeguard your data from threats, ensuring business continuity and compliance."
        />
        <BenefitsCard
          icon={CircleDollarSign}
          header="Get IT On A Budget"
          text="We deliver cost-effective IT solutions tailored to your needs—offering scalable services, efficient infrastructure, and expert support without compromising quality or reliability."
        />
        <BenefitsCard
          icon={SignalHigh}
          header="Eliminate Slow Internet"
          text="We optimize network performance by designing and installing high-speed, reliable wired and wireless systems that eliminate bottlenecks and keep your operations running smoothly."
        />
      </div>
      {/* TODO: What does the button do? */}
      <button className="border-pwr-primary text-pwr-primary hover:bg-pwr-primary hover:text-pwr-primary-foreground rounded-md border-2 px-4 py-2 text-sm font-semibold transition duration-150 hover:cursor-pointer">
        FREE CONSULTATION
      </button>
    </section>
  );
}

import { CircleDollarSign, Shield, SignalHigh } from "lucide-react";
import BenefitsCard from "./benefits-card";
import CustomButton from "../general/button";

export default function Benefits() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-10 py-8 lg:px-16 lg:py-12">
      <header className="text-pwr-primary text-center text-3xl font-extrabold">
        Need A Better Way To...
      </header>
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
      <CustomButton isPrimary>FREE CONSULTATION</CustomButton>
    </section>
  );
}

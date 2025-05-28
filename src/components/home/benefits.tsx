import { CircleDollarSign, Shield, SignalHigh } from "lucide-react";
import BenefitsCard from "./benefits-card";

export default function Benefits() {
  return (
    <section className="flex flex-col items-center gap-12 px-16">
      <header className="text-pwr-primary text-center text-3xl font-bold">Need A Better Way To...</header>
      <div className="flex gap-12">
        <BenefitsCard icon={Shield} header="Protect YOUR Data" text="" />
        <BenefitsCard icon={CircleDollarSign} header="Get IT On A Budget" text="" />
        <BenefitsCard icon={SignalHigh} header="Eliminate Slow Internet" text="" />
      </div>
      <button className="border-pwr-primary text-pwr-primary hover:bg-pwr-primary hover:text-pwr-primary-foreground rounded-md border-2 px-4 py-2 text-sm font-semibold hover:cursor-pointer">
        FREE CONSULTATION
      </button>
    </section>
  );
}

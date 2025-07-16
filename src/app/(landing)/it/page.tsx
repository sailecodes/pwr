import LandingITBenefits from "@/components/landing/it/landing-it-benefits";
import LandingITClients from "@/components/landing/it/landing-it-clients";
import LandingITHero from "@/components/landing/it/landing-it-hero";

export default function LandingIT() {
  return (
    <section className="space-y-16">
      <LandingITHero />
      <LandingITBenefits />
      <LandingITClients />
    </section>
  );
}

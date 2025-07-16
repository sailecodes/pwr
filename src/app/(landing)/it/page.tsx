import LandingITBenefits from "@/components/landing/it/landing-it-benefits";
import LandingITBest from "@/components/landing/it/landing-it-best";
import LandingITClients from "@/components/landing/it/landing-it-clients";
import LandingITFaq from "@/components/landing/it/landing-it-faq";
import LandingITHero from "@/components/landing/it/landing-it-hero";
import LandingITWhy from "@/components/landing/it/landing-it-why";

export default function LandingIT() {
  return (
    <section className="min-h-dvh space-y-16">
      <LandingITHero />
      <LandingITWhy />
      <LandingITClients />
      {/* Brands */}
      <LandingITBenefits />
      <LandingITBest />
      <LandingITFaq />
    </section>
  );
}

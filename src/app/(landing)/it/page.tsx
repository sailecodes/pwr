import LandingITBenefits from "@/components/landing/it/landing-it-benefits";
import LandingITBest from "@/components/landing/it/landing-it-best";
import LandingITBrands from "@/components/landing/it/landing-it-brands";
import LandingITClients from "@/components/landing/it/landing-it-clients";
import LandingITCta from "@/components/landing/it/landing-it-cta";
import LandingITFaq from "@/components/landing/it/landing-it-faq";
import LandingITHero from "@/components/landing/it/landing-it-hero";
import LandingITWhy from "@/components/landing/it/landing-it-why";

export default function LandingIT() {
  return (
    <section className="min-h-dvh w-dvw space-y-16">
      <LandingITHero />
      <LandingITWhy />
      <LandingITClients />
      <LandingITBrands />
      <LandingITBenefits />
      <LandingITBest />
      <LandingITFaq />
      <LandingITCta />
    </section>
  );
}

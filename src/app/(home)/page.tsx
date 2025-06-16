import ContactUs from "@/components/app-layout/contact-us";
import Stats from "@/components/general/stats";
import HomeAssociatedCompanies from "@/components/home/home-associated-companies";
import HomeGuarantees from "@/components/home/home-guarantees";
import HomeHero from "@/components/home/home-hero";
import Specialties from "@/components/home/specialties";
import Testimonies from "@/components/home/testimonies";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <div className="relative -top-[85.75px] space-y-8">
        <HomeAssociatedCompanies />
        <HomeGuarantees />
        <Testimonies />
        <Specialties />
        <Stats />
        <ContactUs />
      </div>
    </main>
  );
}

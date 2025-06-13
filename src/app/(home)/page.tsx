import ContactUs from "@/components/app-layout/contact-us";
import Stats from "@/components/general/stats";
import HomeAssociatedCompanies from "@/components/home/home-associated-companies";
import HomeGuarantees from "@/components/home/home-guarantees";
import HomeHero from "@/components/home/home-hero";
import Specialties from "@/components/home/specialties";
import Testimonies from "@/components/home/testimonies";

export default function Home() {
  return (
    <main className="space-y-12">
      <HomeHero />
      <HomeAssociatedCompanies />
      <HomeGuarantees />
      <Testimonies />
      <Specialties />
      <Stats />
      {/* <Process /> */}
      {/* <Videos /> */}
      <ContactUs />
    </main>
  );
}

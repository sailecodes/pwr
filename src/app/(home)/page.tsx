import ContactUs from "@/components/app-layout/contact-us-alt";
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
      </div>
      <div className="mb-[85.75px] px-10">
        <div className="mx-auto max-w-4xl rounded-lg px-10 py-8 shadow-[0_0_50px_rgba(0,0,0,0.20)] lg:py-16">
          <ContactUs classNames={{ form: "sm:grid-cols-2" }} />
        </div>
      </div>
    </main>
  );
}

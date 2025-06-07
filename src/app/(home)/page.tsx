import ContactUs from "@/components/app-layout/contact-us";
import Stats from "@/components/general/stats";
import AssociatedCompanies from "@/components/home/associated-companies";
import Hero from "@/components/home/hero";
import Specialties from "@/components/home/specialties";
import Testimonies from "@/components/home/testimonies";

export default function Home() {
  return (
    <main className="space-y-12">
      <Hero />
      <AssociatedCompanies />
      {/* <Guarantees /> */}
      <Testimonies />
      <Specialties />
      <Stats />
      {/* <Process /> */}
      {/* <Videos /> */}
      <ContactUs />
    </main>
  );
}

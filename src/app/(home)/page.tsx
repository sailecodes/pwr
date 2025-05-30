import AssociatedCompanies from "@/components/home/associated-companies";
import Guarantees from "@/components/home/guarantees";
import Hero from "@/components/home/hero";
import Specialties from "@/components/home/specialties";
import Stats from "@/components/home/stats";
import Testimonies from "@/components/home/testimonies";

export default function Home() {
  return (
    <main className="space-y-12">
      <Hero />
      <AssociatedCompanies />
      <Guarantees />
      <Testimonies />
      <Specialties />
      <Stats />
      {/* <Process /> */}
      {/* <Videos /> */}
    </main>
  );
}

import Benefits from "@/components/home/benefits";
import Hero from "@/components/home/hero";
import Specialties from "@/components/home/specialties";
import Stats from "@/components/home/stats";
import Testimonies from "@/components/home/testimonies";

export default function Home() {
  return (
    <main className="space-y-12 px-6">
      <Hero />
      {/* <Companies /> */}
      <Benefits />
      <Testimonies />
      <Specialties />
      <Stats />
      {/* <Process /> */}
      {/* <Videos /> */}
    </main>
  );
}

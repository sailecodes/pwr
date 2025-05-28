import Benefits from "@/components/home/benefits";
import Hero from "@/components/home/hero";
import Specialties from "@/components/home/specialties";
import Testimonies from "@/components/home/testimonies";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Companies /> */}
      <Benefits />
      <Testimonies />
      <Specialties />
      {/* <Stats /> */}
      {/* <Process /> */}
      {/* <Videos /> */}
    </main>
  );
}

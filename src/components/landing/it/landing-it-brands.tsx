import Marquee from "react-fast-marquee";
import { homeAssociatedCompanies } from "@/lib/data";

export default function LandingITBrands() {
  return (
    <section className="mb-10 space-y-6 overflow-hidden">
      <header className="text-bg-muted-foreground text-center font-bold sm:text-lg">Brands We&apos;ve Helped</header>
      <Marquee speed={40}>
        {homeAssociatedCompanies.map((src, ind) => (
          <img
            key={`${src}-${ind}`}
            src={src}
            alt="Company Logo"
            width={150}
            height={150}
            className="mx-12"
          />
        ))}
      </Marquee>
    </section>
  );
}

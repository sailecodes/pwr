import Marquee from "react-fast-marquee";
import { homeAssociatedCompanies } from "@/lib/data";

export default function AssociatedCompanies() {
  return (
    <section className="overflow-hidden py-8 lg:py-12">
      <Marquee speed={40}>
        {homeAssociatedCompanies.map((src, ind) => (
          <img
            key={`${src}-${ind}-company-logo`}
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

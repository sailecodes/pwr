import Marquee from "react-fast-marquee";
import { homeAssociatedCompanies } from "@/lib/data";

export default function HomeAssociatedCompanies() {
  return (
    <section className="overflow-hidden py-6">
      <Marquee speed={40}>
        {homeAssociatedCompanies.map((src, ind) => (
          <img
            key={`${src}-${ind}`}
            src={src}
            alt="Company Logo"
            width={125}
            height={125}
            className="mx-12"
          />
        ))}
      </Marquee>
    </section>
  );
}

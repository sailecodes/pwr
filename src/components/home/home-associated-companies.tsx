import Marquee from "react-fast-marquee";
import { homeAssociatedCompanies } from "@/lib/data";

export default function HomeAssociatedCompanies() {
  return (
    <section className="overflow-hidden bg-[#e7eaeb] py-12">
      <Marquee speed={40}>
        {homeAssociatedCompanies.map((src, ind) => (
          <img
            key={`${src}-${ind}`}
            src={src}
            alt="Company Logo"
            width={100}
            height={100}
            className="mx-12"
          />
        ))}
      </Marquee>
    </section>
  );
}

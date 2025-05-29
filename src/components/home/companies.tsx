import { homeAssociatedCompanies } from "@/lib/data";
import Marquee from "react-fast-marquee";

export default function Companies() {
  return (
    <section className="overflow-hidden py-12">
      <Marquee gradient={false} speed={40} pauseOnHover>
        {homeAssociatedCompanies.map((company, index) => (
          <div key={index} className="mx-12 text-2xl font-bold">
            {company}
          </div>
        ))}
      </Marquee>
    </section>
  );
}

import { homeGuarantees } from "@/lib/data";
import CustomButton from "../general/custom-button";
import GuaranteesCard from "./guarantees-card";

export default function Benefits() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-10 py-8 lg:px-16 lg:py-12">
      <header className="text-pwr-primary text-center text-3xl font-extrabold">
        Our Guarantees
      </header>
      <div className="grid grid-rows-3 gap-8 md:grid-cols-3 md:grid-rows-1">
        {homeGuarantees.map((guarantee, ind) => (
          <GuaranteesCard
            key={`${guarantee.header}-${ind}-guarantee`}
            icon={guarantee.icon}
            header={guarantee.header}
          />
        ))}
      </div>
      <CustomButton isPrimary>FREE QUOTE</CustomButton>
    </section>
  );
}

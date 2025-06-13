import { ElementType } from "react";
import { homeGuarantees } from "@/lib/data";
import CustomButton from "../general/custom-button";

function HomeGuaranteesCard({ icon: Icon, header }: { icon: ElementType; header: string }) {
  return (
    <div className="text-pwr-primary flex items-center gap-4">
      <Icon className="shrink-0" />
      <header className="text-lg leading-6 font-bold">{header}</header>
    </div>
  );
}

export default function HomeGuarantees() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-10 py-8 lg:px-16 lg:py-12">
      <header className="text-pwr-primary text-center text-3xl font-extrabold">
        Our Guarantees
      </header>
      <div className="grid grid-rows-3 gap-8 md:grid-cols-3 md:grid-rows-1">
        {homeGuarantees.map((guarantee, ind) => (
          <HomeGuaranteesCard
            key={`${guarantee.header}-${ind}-guarantee`}
            icon={guarantee.icon}
            header={guarantee.header}
          />
        ))}
      </div>
      <CustomButton isPrimary>FREE CONSULTATION</CustomButton>
    </section>
  );
}

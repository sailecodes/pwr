import { ElementType } from "react";
import { homeSpecialties } from "@/lib/data";

function SpecialtiesCard({
  icon: Icon,
  header,
  text,
}: {
  icon: ElementType;
  header: string;
  text: string;
}) {
  return (
    <div className="flex gap-2 rounded-md px-8 py-6 hover:bg-gray-100 hover:shadow-md">
      <Icon className="shrink-0" />
      <div className="space-y-1">
        <header className="text-lg leading-6 font-bold">{header}</header>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}

export default function Specialties() {
  return (
    <section className="text-pwr-primary mx-auto max-w-7xl space-y-8 px-10 py-8 lg:px-16 lg:py-12">
      <header className="text-3xl font-extrabold">Our Specialties</header>
      <div className="grid gap-4 md:grid-cols-2">
        {homeSpecialties.map((specialty, ind) => (
          <SpecialtiesCard
            key={`${specialty.header}-${specialty.text}-${ind}`}
            icon={specialty.icon}
            header={specialty.header}
            text={specialty.text}
          />
        ))}
      </div>
    </section>
  );
}

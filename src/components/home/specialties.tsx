import { homeSpecialties } from '@/lib/data';
import SpecialtiesCard from './specialties-card';

export default function Specialties() {
  return (
    <section className="mx-auto max-w-7xl space-y-8 px-10 py-8 lg:px-16 lg:py-12">
      <header className="text-pwr-primary text-3xl font-extrabold">Our Specialties</header>
      <div className="grid gap-4 md:grid-cols-2">
        {homeSpecialties.map((val, ind) => (
          <SpecialtiesCard
            key={`${val.header}-${val.text}-${ind}-specialty`}
            icon={val.icon}
            header={val.header}
            text={val.text}
          />
        ))}
      </div>
    </section>
  );
}

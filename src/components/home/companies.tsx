import Marquee from 'react-fast-marquee';
import { homeAssociatedCompanies } from '@/lib/data';

export default function Companies() {
  return (
    <section className="overflow-hidden py-12">
      <Marquee speed={40}>
        {homeAssociatedCompanies.map((company, index) => (
          <div key={index} className="mx-12 text-2xl font-bold">
            {company}
          </div>
        ))}
      </Marquee>
    </section>
  );
}

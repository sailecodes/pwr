import Marquee from 'react-fast-marquee';
import { associatedCompanies } from '@/lib/data';

export default function Companies() {
  return (
    <section className="overflow-hidden py-8 lg:py-12">
      <Marquee speed={40}>
        {associatedCompanies.map((src, ind) => (
          <img
            key={`${src}-${ind}-company-logo`}
            src={src}
            alt="Company Logo"
            width={75}
            height={75}
            className="mx-12"
          />
        ))}
      </Marquee>
    </section>
  );
}

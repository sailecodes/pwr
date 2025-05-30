import { homeTestimonies } from '@/lib/data';
import TestimoniesCard from './testimonies-card';

export default function Testimonies() {
  return (
    <section className="bg-pwr-primary">
      <div className="mx-auto max-w-7xl space-y-12 px-10 py-12 lg:px-16 lg:py-14">
        <header>
          <p className="text-pwr-primary-foreground mb-1 text-3xl font-extrabold">Why Choose Us?</p>
          <p className="text-pwr-primary-muted-foreground text-xl font-semibold">
            See What Our Customers Are Saying
          </p>
        </header>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {homeTestimonies.map((val, ind) => (
            <TestimoniesCard
              key={`${val.company}-${val.name}-review-${ind}`}
              company={val.company}
              name={val.name}
              review={val.review}
              rating={val.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

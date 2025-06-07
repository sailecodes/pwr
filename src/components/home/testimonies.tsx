import { Star, StarHalf } from "lucide-react";
import { homeTestimonies } from "@/lib/data";

function TestimoniesCard({
  company,
  name,
  review,
  rating,
}: {
  company: string;
  name: string;
  review: string;
  rating: number;
}) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="space-y-2">
      <header className="flex items-center gap-2">
        <div className="size-12 shrink-0 rounded-full bg-white" />
        <div>
          <p className="font-bold">{company}</p>
          <p className="text-sm">{name}</p>
        </div>
      </header>
      <p className="text-sm">{review}</p>
      <div className="flex gap-1">
        {Array.from({ length: fullStars }, (_, ind) => (
          <Star
            key={`${company}-${name}-star-full-${ind}`}
            color="yellow"
            fill="yellow"
            className="size-4"
          />
        ))}
        {hasHalfStar && (
          <StarHalf
            key={`${company}-${name}-star-half`}
            color="yellow"
            fill="yellow"
            className="size-4"
          />
        )}
      </div>
    </div>
  );
}

export default function Testimonies() {
  return (
    <section className="bg-pwr-primary text-pwr-primary-foreground">
      <div className="mx-auto max-w-7xl space-y-8 px-10 py-14 lg:p-16">
        <header className="space-y-1">
          <p className="text-3xl font-extrabold">Why POWERCOM?</p>
          <p className="text-pwr-primary-muted-foreground text-lg font-bold">
            Don't Just Take Our Word For It...
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

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
        <div>
          <p className="font-bold">{company}</p>
          <p className="text-sm">{name}</p>
        </div>
      </header>
      <p className="line-clamp-4 text-sm">{review}</p>
      <div className="flex gap-1">
        {Array.from({ length: fullStars }, (_, ind) => (
          <Star
            key={`${company}-${name}-${ind}`}
            color="yellow"
            fill="yellow"
            className="size-4"
          />
        ))}
        {hasHalfStar && (
          <StarHalf
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
      <div className="mx-auto max-w-7xl space-y-8 px-10 py-8 lg:py-16">
        <header className="space-y-1">
          <p className="text-3xl font-extrabold">Why POWERCOM?</p>
          <p className="text-pwr-primary-muted-foreground text-lg font-bold">Don&apos;t Just Take Our Word For It...</p>
        </header>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {homeTestimonies.map(({ company, review, rating, name }, ind) => (
            <TestimoniesCard
              key={`${company}-${name}-review-${ind}`}
              company={company}
              name={name}
              review={review}
              rating={rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

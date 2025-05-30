import { Star, StarHalf } from "lucide-react";

export interface TestimoniesCardProps {
  company: string;
  name: string;
  review: string;
  rating: number;
}

export default function TestimoniesCard({ company, name, review, rating }: TestimoniesCardProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="text-pwr-primary-foreground space-y-2">
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

import { Star } from "lucide-react";

export default function TestimoniesCard({
  company,
  name,
  review,
  rating,
}: {
  company: String;
  name: String;
  review: String;
  rating: number;
}) {
  return (
    <div className="text-pwr-primary-foreground space-y-2">
      <header className="flex items-center gap-2">
        <div className="size-12 shrink-0 rounded-full bg-white" />
        <div>
          <p className="font-semibold">{company}</p>
          <p className="text-sm">{name}</p>
        </div>
      </header>
      <p className="text-sm">{review}</p>
      <div className="flex gap-1">
        {new Array(rating).fill(0).map((_, ind) => (
          <Star key={ind.toString() + company + name} color="yellow" fill="yellow" className="size-4" />
        ))}
      </div>
    </div>
  );
}

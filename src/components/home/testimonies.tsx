import { Star, StarHalf } from "lucide-react";

export const homeTestimoniesData = [
  {
    href: "/imgs/testimonies-james-pfp.jpg",
    company: "Wallaby Medical",
    name: "James T., Facilities Manager",
    review:
      "Their cabling work was flawless—clean, efficient, and future-proof. The fiber optic installation boosted our speed dramatically. Our office now runs smoother than ever, and the team made the entire process painless.",
    rating: 5,
  },
  {
    href: "/imgs/testimonies-linda-pfp.jpg",
    company: "Innova Vascular",
    name: "Linda M., Business Owner",
    review:
      "As a small business, we needed reliable IT support without breaking the bank. This company delivered a custom solution that covered everything from network setup to data protection. They've been responsive, professional, and surprisingly affordable.",
    rating: 5,
  },
  {
    href: "/imgs/testimonies-carlos-pfp.jpg",
    company: "Crypto.com",
    name: "Carlos R., IT Director",
    review:
      "We struggled with poor cell reception throughout our facility until this team came in. Their DAS solution completely transformed our connectivity. Calls and data are seamless now, even in previously dead zones.",
    rating: 5,
  },
  {
    href: "/imgs/testimonies-angela-pfp.jpg",
    company: "Marriott",
    name: "Angela D., Manager",
    review:
      "From the initial consultation to final installation, they were extremely thorough and professional. Our new security system, complete with access control and HD surveillance, gives us real peace of mind. A job well done!",
    rating: 5,
  },
];

function TestimoniesCard({
  href,
  company,
  name,
  review,
  rating,
}: {
  href: string;
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
        {/* <img
          src={href}
          alt={name}
          className="h-[50px] w-[50px] rounded-full object-cover object-center"
        /> */}
        <div>
          <p className="text-sm font-bold">{company}</p>
          {/* <p className="text-sm">{name}</p> */}
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
      <div className="mx-auto max-w-7xl space-y-12 px-10 py-12">
        <header className="space-y-1">
          <p className="text-3xl font-extrabold">Why POWERCOM?</p>
          <p className="text-pwr-primary-muted-foreground text-lg font-bold">Don&apos;t Just Take Our Word For It...</p>
        </header>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {homeTestimoniesData.map(({ href, company, review, rating, name }, ind) => (
            <TestimoniesCard
              key={`${company}-${name}-${review}-${ind}`}
              href={href}
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

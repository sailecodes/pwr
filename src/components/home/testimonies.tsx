import TestimoniesCard from "./testimonies-card";

export default function Testimonies() {
  return (
    // <section className="bg-pwr-primary space-y-8 rounded-md px-16 py-12">
    <section className="bg-pwr-primary space-y-12 rounded-md px-10 py-8 lg:px-16 lg:py-12">
      <header className="text-pwr-primary-foreground">
        <p className="mb-1 text-3xl font-bold">Why us?</p>
        <p className="text-pwr-primary-muted-foreground text-xl font-semibold">Don't Just Take Our Word For It...</p>
      </header>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <TestimoniesCard
          company="AT&T"
          name="James T., Facilities Manager"
          review="We struggled with poor cell reception throughout our facility until this team came in. Their DAS solution completely transformed our connectivity. Calls and data are seamless now, even in previously dead zones."
          rating={5}
        />
        <TestimoniesCard
          company="TikTok"
          name="Linda M., Small Business Owner"
          review="As a small business, we needed reliable IT support without breaking the bank. This company delivered a custom solution that covered everything from network setup to data protection. They’ve been responsive, professional, and surprisingly affordable."
          rating={5}
        />
        <TestimoniesCard
          company="Tesla"
          name="Carlos R., IT Director"
          review="Their cabling work was flawless—clean, efficient, and future-proof. The fiber optic installation boosted our speed dramatically. Our office now runs smoother than ever, and the team made the entire process painless."
          rating={4}
        />
        <TestimoniesCard
          company="OC Grace"
          name="Angela D., Operations Manager"
          review="From the initial consultation to final installation, they were extremely thorough and professional. Our new security system, complete with access control and HD surveillance, gives us real peace of mind. A job well done!"
          rating={5}
        />
      </div>
    </section>
  );
}

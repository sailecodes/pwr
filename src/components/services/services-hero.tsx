import ContactUs from "../app-layout/contact-us-alt";

export default function ServicesHero({
  category,
  service,
  serviceMainPoints,
}: {
  category: string;
  service: string;
  serviceMainPoints: string[];
}) {
  return (
    <section className="relative min-h-[700px]">
      {/* ABSOLUTES */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover"
      >
        <source
          src="/bgs/services-hero-2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="bg-pwr-primary/65 absolute inset-0" />
      {/* RELATIVES */}
      <div className="relative z-10 mx-auto flex w-fit max-w-7xl flex-col items-center px-10 py-8 sm:flex-row sm:gap-22 lg:px-16 lg:py-12">
        <div className="text-pwr-primary-foreground mt-8 space-y-6 sm:mt-0">
          <header>
            <p className="text-lg font-bold">{category}</p>
            <p className="text-3xl font-extrabold md:text-4xl">{service}</p>
          </header>
          <ul className="space-y-4 sm:space-y-2">
            {serviceMainPoints.map((point, ind) => (
              <li
                key={`${point}-${ind}`}
                className="flex text-base font-medium md:text-lg"
              >
                <span className="text-pwr-primary-foreground mt-[2px] mr-2 flex-shrink-0">•</span>
                <span className="flex-1">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-pwr-primary relative top-[65px] z-10 w-full rounded-md px-10 py-8 shadow-[0_0_50px_rgba(0,0,0,0.35)] sm:top-[90px] sm:w-fit lg:px-16 lg:py-12">
          <ContactUs
            isPrimaryForeground
            classNames={{ form: "hero-contact:grid-cols-2" }}
          />
        </div>
      </div>
    </section>
  );
}

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
    <section
      className="relative -mt-[93.63px] grid min-h-[675px] place-items-center px-10 pb-4"
      style={{
        backgroundImage: "url('/bgs/service.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-pwr-primary/50 absolute inset-0" />
      <div className="bg-pwr-primary/90 text-pwr-primary-foreground relative z-10 mx-auto mt-16 flex h-fit max-w-[500px] flex-col gap-6 rounded-md p-8 md:px-16 md:py-12">
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
    </section>
  );
}

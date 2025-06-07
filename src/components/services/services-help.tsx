function ServicesHelpSection({ header, description }: { header: string; description: string }) {
  return (
    <div className="space-y-2">
      <header className="text-lg leading-tight font-bold">{header}</header>
      <p className="text-sm leading-relaxed text-balance">{description}</p>
    </div>
  );
}

export default function ServicesHelp({
  service,
  data,
}: {
  service: string;
  data: { header: string; description: string }[];
}) {
  return (
    <section className="text-pwr-primary mx-auto max-w-7xl space-y-6 px-10 py-8 lg:px-16 lg:py-12">
      <header className="text-3xl leading-8 font-extrabold">How Will {service} Help You?</header>
      <div className="grid gap-6 md:grid-cols-3 md:gap-12">
        {data.map((help, ind) => (
          <ServicesHelpSection
            key={`${help.header}-${help.description}-${ind}`}
            header={help.header}
            description={help.description}
          />
        ))}
      </div>
    </section>
  );
}

import ServiceGuaranteesCard from "./service-benefits-card";

export interface ServiceBenefitsProps {
  service: string;
}

export default function ServiceBenefits({ service }: ServiceBenefitsProps) {
  return (
    <section className="bg-pwr-primary text-pwr-primary-foreground md:py- space-y-8 rounded-lg px-10 py-8 md:px-12">
      <header className="text-3xl font-extrabold">
        How Will {service.charAt(0).toUpperCase() + service.slice(1)} Help You?
      </header>
      <div className="grid gap-12 md:grid-cols-3">
        <ServiceGuaranteesCard
          header="Header"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore neque quae, omnis aspernatur mollitia inventore praesentium recusandae totam sed modi molestiae, optio aperiam atque. Accusantium quod officiis consectetur magnam excepturi?"
        />
        <ServiceGuaranteesCard
          header="Header"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore neque quae, omnis aspernatur mollitia inventore praesentium recusandae totam sed modi molestiae, optio aperiam atque. Accusantium quod officiis consectetur magnam excepturi?"
        />
        <ServiceGuaranteesCard
          header="Header"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore neque quae, omnis aspernatur mollitia inventore praesentium recusandae totam sed modi molestiae, optio aperiam atque. Accusantium quod officiis consectetur magnam excepturi?"
        />
      </div>
    </section>
  );
}

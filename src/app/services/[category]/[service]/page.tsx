import { notFound } from "next/navigation";
import ContactUs from "@/components/app-layout/contact-us";
import Stats from "@/components/general/stats";
import ServicesBest from "@/components/services/services-best";
import ServicesFAQ from "@/components/services/services-faq";
import ServicesHelp from "@/components/services/services-help";
import ServicesHero from "@/components/services/services-hero";
import ServicesSummary from "@/components/services/services-summary";
import { findServiceByCategoryAndName, getUrlString, isValidPair } from "@/lib/utils";

export default async function Service({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}) {
  let { category, service } = await params;

  category = getUrlString(category);
  service = getUrlString(service);

  // FIXME: Create Not Found page
  if (!isValidPair(category, service)) return notFound();

  const serviceData = findServiceByCategoryAndName(category, service)!;

  return (
    <main className="space-y-12">
      <ServicesHero
        category={category}
        service={service}
        serviceMainPoints={serviceData.mainPoints}
      />
      <ServicesSummary summary={serviceData.summary} />
      <Stats />
      <ServicesHelp
        service={serviceData.service}
        data={serviceData.help}
      />
      <ServicesBest description={serviceData.best} />
      <ServicesFAQ faqData={serviceData.faq} />
      <ContactUs />
    </main>
  );
}

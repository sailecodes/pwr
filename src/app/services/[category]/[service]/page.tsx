import { notFound } from "next/navigation";
import ContactUs from "@/components/app-layout/contact-us";
import Stats from "@/components/general/stats";
import ServiceBenefits from "@/components/services/service-benefits";
import ServiceStats from "@/components/services/service-stats";
import ServicesBest from "@/components/services/services-best";
import ServicesFAQ from "@/components/services/services-faq";
import ServicesHelp from "@/components/services/services-help";
import ServicesHero from "@/components/services/services-hero";
import ServicesSummary from "@/components/services/services-summary";
import { services2 } from "@/lib/data";

function getUrlString(str: string): string {
  const words = str.split("-");

  const formattedWords = words.map((word) => {
    if (word.toLowerCase() === "it") return "IT";
    if (word.toLowerCase() === "voip") return "VoIP";
    if (word.toLowerCase() === "ip") return "IP";

    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return formattedWords.join(" ");
}

function isValidPair(category: string, service: string) {
  return services2.some(
    (e) => e.category === category && !!e.services.find((e2) => e2.service === service),
  );
}

function findServiceByCategoryAndName(category: string, service: string) {
  const matchingCategory = services2.find((e) => e.category === category);
  const matchingService = matchingCategory?.services.find((e) => e.service === service);

  return matchingService;
}

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

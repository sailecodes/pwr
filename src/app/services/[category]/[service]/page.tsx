import { notFound } from "next/navigation";
import Stats from "@/components/general/stats";
import ServiceBenefits from "@/components/services/service-benefits";
import ServiceStats from "@/components/services/service-stats";
import ServicesHelp from "@/components/services/services-help";
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
    <div className="space-y-12">
      {/* <ServiceHero /> */}
      <ServicesSummary summary={serviceData.summary} />
      <Stats />
      <ServicesHelp
        service={serviceData.service}
        data={serviceData.help}
      />
      {/* <ServiceBenefits service={data.service} /> */}
      {/* <ServiceBest /> */}
      {/* <ServiceBlogs /> */}
      {/* <ServiceFAQ faqs={faqs} /> */}
    </div>
  );
}

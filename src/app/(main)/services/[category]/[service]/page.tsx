import { notFound } from "next/navigation";
import ContactUs from "@/components/app-layout/contact-us-alt";
import Stats from "@/components/general/stats";
import ServicesBest from "@/components/services/services-best";
import ServicesFAQ from "@/components/services/services-faq";
import ServicesHelp from "@/components/services/services-help";
import ServicesHero from "@/components/services/services-hero";
import ServicesSummary from "@/components/services/services-summary";
import { findServiceByCategoryAndName, getUrlString, isValidPair } from "@/lib/utils";

export default async function Service({ params }: { params: Promise<{ category: string; service: string }> }) {
  let { category, service } = await params;

  category = getUrlString(category);
  service = getUrlString(service);

  // FIXME: Create Not Found page
  if (!isValidPair(category, service)) return notFound();

  const serviceData = findServiceByCategoryAndName(category, service)!;

  return (
    <main>
      <ServicesHero
        category={category}
        service={service}
        serviceMainPoints={serviceData.mainPoints}
      />
      <div className="relative -top-[85.75px] space-y-8">
        <ServicesSummary summary={serviceData.summary} />
        <Stats />
        <ServicesHelp
          service={serviceData.service}
          data={serviceData.help}
        />
        <ServicesBest description={serviceData.best} />
        <ServicesFAQ faqData={serviceData.faq} />
      </div>
      <div className="mb-[85.75px] px-10">
        <div className="mx-auto max-w-4xl rounded-lg px-10 py-8 shadow-[0_0_50px_rgba(0,0,0,0.20)]">
          <ContactUs classNames={{ form: "sm:grid-cols-2" }} />
        </div>
      </div>
    </main>
  );
}

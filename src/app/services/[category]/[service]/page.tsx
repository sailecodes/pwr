import ServiceStats from "@/components/services/service-stats";
import ServiceSummary from "@/components/services/service-summary";

export default async function Service({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}) {
  const { category, service } = await params;

  return (
    <main className="min-h-screen max-w-7xl space-y-12 px-4 md:px-8">
      {/* <ServiceHero /> */}
      <ServiceSummary summary="" />
      <ServiceStats />
      {/* <ServiceBenefits /> */}
      {/* <ServiceBest /> */}
      {/* <ServiceFAQ */}
    </main>
  );
}

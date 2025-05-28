import ServiceBenefits from "@/components/services/service-benefits";
import ServiceBest from "@/components/services/service-best";
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
      <ServiceSummary
        summary="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque temporibus dolor pariatur
        exercitationem error rerum assumenda similique obcaecati, mollitia optio totam ea
        perspiciatis, veritatis architecto porro delectus, deleniti beatae nostrum. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Atque temporibus dolor pariatur exercitationem
        error rerum assumenda similique obcaecati, mollitia optio totam ea perspiciatis, veritatis
        architecto porro delectus, deleniti beatae nostrum."
      />
      <ServiceStats />
      <ServiceBenefits service={service} />
      <ServiceBest />
      {/* <ServiceFAQ */}
    </main>
  );
}

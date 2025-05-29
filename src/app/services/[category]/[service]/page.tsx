import ServiceBenefits from "@/components/services/service-benefits";
import ServiceStats from "@/components/services/service-stats";
import ServiceSummary from "@/components/services/service-summary";
import { services } from "@/lib/data";

// const faqs = [
//   {
//     question: "Question 1",
//     answer: "Answer 1",
//   },
//   {
//     question: "Question 2",
//     answer: "Answer 2",
//   },
//   {
//     question: "Question 3",
//     answer: "Answer 3",
//   },
//   {
//     question: "Question 4",
//     answer: "Answer 4",
//   },
// ];

export default async function Service({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}) {
  const { category, service } = await params;
  const data = services[0];
  console.log(category, service);

  return (
    <div className="space-y-12 px-4 md:px-8">
      {/* <ServiceHero /> */}
      <ServiceSummary summary={data.serviceSummary} />
      <ServiceStats />
      <ServiceBenefits service={data.service} />
      {/* <ServiceBest /> */}
      {/* <ServiceBlogs /> */}
      {/* <ServiceFAQ faqs={faqs} /> */}
    </div>
  );
}

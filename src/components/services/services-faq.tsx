import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function ServicesFAQItem({ value, question, answer }: { value: string; question: string; answer: string }) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger
        className="text-lg font-bold"
        withIcon>
        {question}
      </AccordionTrigger>
      <AccordionContent className="leading-relaxed">{answer}</AccordionContent>
    </AccordionItem>
  );
}

export default function ServicesFAQ({ faqData }: { faqData: { question: string; answer: string }[] }) {
  return (
    <section className="text-pwr-primary mx-auto max-w-7xl space-y-8 px-10 pt-4">
      <header className="text-3xl leading-8 font-extrabold">FAQ</header>
      <Accordion
        type="single"
        collapsible>
        {faqData.map((faq, ind) => (
          <ServicesFAQItem
            key={`${faq.question}-${faq.answer}-${ind}`}
            value={`item-${ind}`}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </Accordion>
    </section>
  );
}

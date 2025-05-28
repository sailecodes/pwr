import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export interface ServiceFAQProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  return (
    <section className="space-y-8">
      <header className="text-pwr-primary text-3xl font-extrabold">FAQ</header>
      <Accordion type="single" collapsible>
        {faqs.map((val, ind) => (
          <AccordionItem value={val.question} key={ind}>
            <AccordionTrigger>{val.question}</AccordionTrigger>
            <AccordionContent>{val.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

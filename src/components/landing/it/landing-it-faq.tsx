import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const data = [
  {
    trigger: "Question 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minus nam tempore similique veniam officiis voluptatibus debitis quis. Quae quasi et illum saepe dolorem corporis atque dignissimos sequi facere dolore?",
  },
  {
    trigger: "Question 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minus nam tempore similique veniam officiis voluptatibus debitis quis. Quae quasi et illum saepe dolorem corporis atque dignissimos sequi facere dolore?",
  },
  {
    trigger: "Question 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minus nam tempore similique veniam officiis voluptatibus debitis quis. Quae quasi et illum saepe dolorem corporis atque dignissimos sequi facere dolore?",
  },
];

function LandingITFaqItem({ value, trigger, text }: { value: string; trigger: string; text: string }) {
  return (
    <AccordionItem
      value={value}
      className="border-b-0">
      <div className="bg-pwr-primary-muted-foreground/60 rounded-t-3xl">
        <AccordionTrigger
          withIcon
          iconLeft
          className="bg-pwr-primary justify-center rounded-3xl px-5 text-base text-white hover:cursor-pointer hover:no-underline sm:text-lg">
          {trigger}
        </AccordionTrigger>
      </div>
      <AccordionContent className="bg-pwr-primary-muted-foreground/60 text-pwr-primary rounded-b-3xl p-5 text-sm">
        {text}
      </AccordionContent>
    </AccordionItem>
  );
}

export default function LandingITFaq() {
  return (
    <section>
      <div className="relative mx-auto flex max-w-6xl min-w-[325px] flex-col space-y-7 px-5 sm:flex-row sm:gap-10">
        <div className="mx-auto shrink-0 space-y-7 max-[768px]:w-[335px] min-[1120px]:min-w-[700px] sm:mx-0 md:w-[500px]">
          <header className="text-pwr-primary text-center text-lg font-bold sm:text-left sm:text-3xl">
            Common IT Concerns
          </header>
          <Accordion
            type="single"
            collapsible
            className="space-y-2">
            {data.map((item, ind) => (
              <LandingITFaqItem
                key={`${item.trigger}-${ind}`}
                value={`item-${ind}`}
                trigger={item.trigger}
                text={item.text}
              />
            ))}
          </Accordion>
        </div>
        <div className="flex flex-col gap-5">
          <img
            src="/landing/landing-faq-img.jpg"
            className="hidden rounded-3xl object-cover object-center sm:block"
          />
          <button className="bg-pwr-primary border-pwr-primary text-bg mx-auto rounded-lg border-[2px] px-4 py-2 font-bold uppercase transition-all duration-200 hover:-translate-y-[1px] hover:cursor-pointer hover:shadow-lg">
            Get a quote
          </button>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { siInstagram } from "simple-icons/icons";
import { services } from "@/lib/data";
import { formatToUrlString } from "@/lib/utils";
import SVGIconLink from "../general/svg-icon-link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

function FooterNoncollapsibleSection({
  header,
  content,
}: {
  header: string;
  content: { subheader: string; href: string }[];
}) {
  return (
    <div>
      <header className="mb-4 text-2xl font-extrabold">{header}</header>
      <ul>
        {content.map((item, ind) => (
          <li
            key={`${header}-${item.subheader}-${ind}`}
            className="py-[6px]"
          >
            <Link
              href={item.href}
              className="text-sm font-medium hover:text-[#ddd]"
            >
              {item.subheader}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterCollapsibleSection({
  header,
  content,
}: {
  header: string;
  content: { category: string; services: string[] }[];
}) {
  return (
    <div className="w-[325px]">
      <header className="mb-4 text-2xl font-extrabold">{header}</header>
      <Accordion
        type="single"
        collapsible
      >
        {content.map((item, ind) => (
          <AccordionItem
            key={`${item.category}-${ind}`}
            value={`item-${ind}`}
            className="border-none"
          >
            <AccordionTrigger className="py-2 hover:cursor-pointer hover:text-[#ddd] hover:no-underline">
              {item.category}
            </AccordionTrigger>
            <AccordionContent className="pb-2">
              <ul className="text-pwr-primary-muted-foreground space-y-1">
                {item.services.map((service, ind2) => (
                  <li
                    key={`${service}-${ind2}`}
                    className="text-sm font-medium hover:cursor-pointer hover:text-gray-500"
                  >
                    <Link
                      href={`/services/${formatToUrlString(item.category)}/${formatToUrlString(service)}`}
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="bg-pwr-primary text-pwr-primary-foreground mt-12">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-22 px-10 py-8 md:flex-row md:justify-between lg:px-16 lg:py-12">
          <header className="space-y-1">
            <img
              src={"/branding/pwrcom-white.png"}
              alt="Company Logo"
              width={140}
              className="relative right-[7px]"
            />
            <p className="mb-5 text-xs font-bold tracking-wide">
              We bring technical solutions to you.
            </p>
            <div className="flex items-center gap-4">
              <SVGIconLink
                href="https://www.instagram.com/power_communications/"
                d={siInstagram.path}
              />
            </div>
          </header>
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <Link
              className="h-fit text-2xl font-extrabold hover:text-[#ddd]"
              href="/"
            >
              Home
            </Link>
            <FooterNoncollapsibleSection
              header="Company"
              content={[{ subheader: "Contact Us", href: "/contact-us" }]}
            />
            <FooterCollapsibleSection
              header="Services"
              content={services}
            />
          </div>
        </div>
      </footer>
      <div className="p-4 text-center text-xs">
        &copy; 2025 Power Communications LLC. All rights reserved.
      </div>
    </>
  );
}

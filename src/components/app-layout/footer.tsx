import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siInstagram } from "simple-icons/icons";
import { services } from "@/lib/data";
import { formatToUrlString } from "@/lib/utils";
import CustomLink from "../general/custom-link";
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
          <li key={`${header}-${item.subheader}-${ind}`} className="py-[6px]">
            <Link href={item.href} className="text-sm font-medium hover:text-[#ddd]">
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
      <Accordion type="single" collapsible>
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
    <footer className="bg-pwr-primary text-pwr-primary-foreground text-sm">
      <div className="grid items-center gap-16 px-10 py-8 md:grid-cols-3 md:gap-24 lg:gap-36 lg:px-20 lg:py-16">
        {/* HEADER */}
        <header className="flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <div>
              <img
                src={"/branding/pwrcom-white.png"}
                alt="Company Logo"
                width={140}
                className="relative right-[7px]"
              />
              <p className="text-xs font-medium tracking-wide">
                We bring technical solutions to you.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <SVGIconLink
                href="https://www.instagram.com/power_communications/"
                d={siInstagram.path}
                fill="#b8c0c3"
                className="size-4"
              />
            </div>
          </div>
          <p className="text-pwr-primary-muted-foreground text-xs">
            &copy; 2025 Power Communications LLC. All rights reserved.
          </p>
        </header>
        {/* MIDDLE */}
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <header className="font-semibold">Find Us</header>
            <div className="flex items-center gap-2">
              <MapPin className="stroke-pwr-primary-muted-foreground size-4 shrink-0" />
              <p className="text-pwr-primary-muted-foreground">
                10842 Noel Street #109, Cypress, CA
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <header className="font-semibold">Contact</header>
            <div className="space-y-1">
              <a
                href="tel:+19498008953"
                className="text-pwr-primary-muted-foreground flex items-center gap-2"
                aria-label="Call us at (949) 800-8953"
              >
                <PhoneCall className="size-4 shrink-0" aria-hidden="true" />
                <span className="text-sm underline underline-offset-2">(949) 800-8953</span>
              </a>
              <a
                href="mailto:criz@powercoms.com"
                className="text-pwr-primary-muted-foreground flex items-center gap-2"
                aria-label="Email us at criz@powercoms.com"
              >
                <Mail
                  className="stroke-pwr-primary-muted-foreground size-4 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-pwr-primary-muted-foreground underline underline-offset-2">
                  criz@powercoms.com
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* LAST */}
        <div className="space-y-1">
          <Image src="/imgs/google-reviews.png" alt="Google Reviews" height={150} width={150} />
          <div className="space-y-2">
            <header className="font-semibold">Lorem ipsum dolor sit!</header>
            <p className="text-pwr-primary-muted-foreground text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos corrupti at distinctio
              quae beatae..
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

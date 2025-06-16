"use client";

import Link from "next/link";
import { services } from "@/lib/data";
import { formatToUrlString } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export function NavNonMobileMenuItemStack({
  trigger,
  data,
}: {
  trigger: string;
  data: { category: string; services: string[] }[];
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className='data-[state=open]:text-pwr-primary-foreground focus-visible:ring-ring/50 hover:text-pwr-primary-foreground focus:text-pwr-primary-foreground data-[state=open]:focus:bg-transparent" bg-transparent outline-none hover:bg-transparent focus:bg-transparent active:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent'>
        {trigger}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <Accordion type="single" collapsible className="w-[300px] space-y-3 px-4 py-3">
          {data.map(({ category, services }, ind) => (
            <AccordionItem
              key={`${category}-${ind}`}
              value={`${category}-${ind}`}
              className="border-none"
            >
              <AccordionTrigger className="p-0 font-medium hover:cursor-pointer">
                {category}
              </AccordionTrigger>
              <AccordionContent className="text-pwr-primary-muted-foreground flex flex-col gap-2 py-2">
                {services.map((service, ind2) => (
                  <Link
                    key={`${category}-${service}-${ind2}`}
                    href={`/services/${formatToUrlString(category)}/${formatToUrlString(service)}`}
                    className="hover:underline"
                  >
                    {service}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function NavNonMobileMenuItemSingle({ href, trigger }: { href: string; trigger: string }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="hover:text-pwr-primary-foreground focus:text-pwr-primary-foreground underline-offset-2 hover:bg-transparent hover:underline focus:bg-transparent active:bg-transparent"
        >
          {trigger}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export default function NavNonMobileMenu() {
  return (
    <NavigationMenu className="text-pwr-primary-foreground flex items-center gap-8 font-medium">
      <NavigationMenuList>
        <NavNonMobileMenuItemSingle href="/" trigger="Home" />
        <NavNonMobileMenuItemStack trigger="Services" data={services} />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

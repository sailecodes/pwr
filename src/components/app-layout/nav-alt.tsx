"use client";

import { Menu, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { services } from "@/lib/data";
import CustomLink from "../general/custom-link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import NavLinks from "./nav-links";

export function formatToUrlString(str: string) {
  return str.toLowerCase().replaceAll(" ", "-");
}

function NavAltMobileLinkSection({
  value,
  header,
  services,
  setIsMenuOpen,
}: {
  value: string;
  header: string;
  services: { category: string; services: string[] }[];
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <AccordionItem
      className="space-y-2"
      value={value}
    >
      <AccordionTrigger className="text-2xl font-extrabold">{header}</AccordionTrigger>
      <AccordionContent>
        <ul className="space-y-6">
          {services.map((item, ind) => (
            <li
              key={`${item.category}-${ind}`}
              className="space-y-3"
            >
              <header className="text-lg font-bold">{item.category}</header>
              <ul className="text-pwr-primary-muted-foreground space-y-2">
                {item.services.map((service, ind) => (
                  <li
                    key={`${item.category}-${service}-${ind}`}
                    className="font-medium hover:cursor-pointer hover:text-gray-500"
                  >
                    <Link
                      href={`/services/${formatToUrlString(item.category)}/${formatToUrlString(service)}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

function NavAltMobile({
  setIsMenuOpen,
  isMenuOpen,
}: {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
}) {
  return (
    <div className="text-pwr-primary-foreground flex items-center justify-between px-8">
      <img
        src={"/branding/pwrcom-white.png"}
        alt="Company Logo"
        width={160}
      />
      <button
        className="hover:cursor-pointer"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <Menu className="size-8" />
      </button>
      <div
        className={`absolute inset-0 top-[100%] z-35 h-[calc(100vh-100%)] w-screen ${isMenuOpen ? "" : "hidden"}`}
      >
        <div
          className={`bg-pwr-primary ml-auto h-full overflow-y-auto p-10 ${isMenuOpen ? "" : "hidden"}`}
        >
          <Accordion
            type="single"
            collapsible
          >
            <NavAltMobileLinkSection
              value="item-0"
              header="IT Services"
              services={services}
              setIsMenuOpen={setIsMenuOpen}
            />
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default function NavAlt() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMenuOpen && isMobile) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen, isMobile]);

  return (
    <nav
      className={`bg-pwr-primary/95 sticky top-0 z-50 gap-4 py-4 shadow-sm backdrop-blur-md ${isMenuOpen ? "bg-pwr-primary/90" : ""}`}
    >
      {isMobile ? (
        <NavAltMobile
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
      ) : (
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-10">
          <Link href="/">
            <img
              src={"/branding/pwrcom-white.png"}
              alt="Company Logo"
              width={180}
            />
          </Link>
          <NavLinks />
          <CustomLink href="/contact-us">FREE QUOTE</CustomLink>
          <div className="text-pwr-primary-foreground ml-auto flex items-center gap-2">
            <PhoneCall />
            <span>555-666-1234</span>
          </div>
        </div>
      )}
    </nav>
  );
}

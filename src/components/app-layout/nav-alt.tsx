"use client";

import { Menu, PhoneCall } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { services } from "@/lib/data";
import { formatToUrlString } from "@/lib/utils";
import CustomLink from "../general/custom-link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import NavLinks from "./nav-links";

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
    <AccordionItem className="space-y-2" value={value}>
      <AccordionTrigger className="text-2xl font-extrabold">{header}</AccordionTrigger>
      <AccordionContent>
        <ul className="space-y-6">
          {services.map((item, ind) => (
            <li key={`${item.category}-${ind}`} className="space-y-3">
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
      <Link href="/">
        <Image
          src="/branding/pwrcom-white.png"
          alt="Power Communications Logo"
          width={160}
          height={40}
          priority
        />
      </Link>
      <button className="hover:cursor-pointer" onClick={() => setIsMenuOpen((prev) => !prev)}>
        <Menu className="size-8" />
      </button>
      <div
        className={`absolute inset-0 top-[100%] z-35 h-[calc(100vh-100%)] w-screen ${isMenuOpen ? "" : "hidden"}`}
      >
        <div
          className={`bg-pwr-primary ml-auto h-full overflow-y-auto p-10 ${isMenuOpen ? "" : "hidden"}`}
        >
          <Accordion type="single" collapsible>
            <NavAltMobileLinkSection
              value="item-0"
              header="Services"
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

  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 25, 50, 75, 100],
    [
      "transparent",
      "rgba(19, 45, 56, 0.3)",
      "rgba(19, 45, 56, 0.6)",
      "rgba(19, 45, 56, 0.9)",
      "rgba(19, 45, 56, 0.97)",
    ],
  );
  const borderColor = useTransform(
    scrollY,
    [0, 25, 50, 75, 100],
    [
      "transparent",
      "rgba(19, 45, 56, 0.3)",
      "rgba(19, 45, 56, 0.6)",
      "rgba(19, 45, 56, 0.9)",
      "rgba(19, 45, 56, 0.97)",
    ],
  );
  const backdropFilter = useTransform(scrollY, [0, 25], ["blur(0px)", "blur(14px)"]);

  useEffect(() => {
    if (isMenuOpen && isMobile) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen, isMobile]);

  return (
    <motion.nav
      // style={{
      //   backgroundColor,
      //   borderColor,
      //   backdropFilter,
      // }}
      className={`bg-pwr-primary sticky top-0 z-50 gap-4 py-4 ${isMenuOpen ? "bg-red-500" : ""}`}
    >
      {isMobile ? (
        <NavAltMobile setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      ) : (
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-10 lg:px-16">
          <Link href="/" className="shrink-0">
            <Image
              src="/branding/pwrcom-white.png"
              alt="Power Communications Logo"
              width={160}
              height={1}
              priority
            />
          </Link>
          <NavLinks />
          <CustomLink href="/contact-us">FREE CONSULTATION</CustomLink>
          <a
            href="tel:+19498008953"
            className="text-pwr-primary-foreground hover:text-pwr-primary-foreground/80 ml-auto flex items-center gap-2 transition-colors"
            aria-label="Call us at (949) 800-8953"
          >
            <PhoneCall className="size-4" aria-hidden="true" />
            <span className="text-sm">(949) 800-8953</span>
          </a>
        </div>
      )}
    </motion.nav>
  );
}

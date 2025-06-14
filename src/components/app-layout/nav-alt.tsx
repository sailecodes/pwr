"use client";

import { Menu, PhoneCall, X } from "lucide-react";
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

function NavAltMobileCategorySection({
  value,
  header,
  data,
  setIsMobileMenuOpen,
}: {
  value: string;
  header: string;
  data: { category: string; services: string[] }[];
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <AccordionItem
      className="space-y-2"
      value={value}
    >
      <AccordionTrigger className="pb-0 text-2xl font-extrabold hover:cursor-pointer">{header}</AccordionTrigger>
      <AccordionContent>
        <Accordion
          type="single"
          collapsible
        >
          {data.map(({ category, services }, ind) => (
            <AccordionItem
              value={`${category}-${ind}`}
              key={`${category}-${ind}`}
            >
              <AccordionTrigger className="pt-3 pb-0 text-lg font-bold hover:cursor-pointer">
                {category}
              </AccordionTrigger>
              <AccordionContent className="text-pwr-primary-muted-foreground flex flex-col space-y-2 pt-2 pb-3 text-base">
                {services.map((service, ind2) => (
                  <Link
                    key={`${category}-${service}-${ind2}`}
                    href={`/services/${formatToUrlString(category)}/${formatToUrlString(service)}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-medium hover:cursor-pointer hover:underline"
                  >
                    {service}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AccordionContent>
    </AccordionItem>
  );
}

function NavAltMobile({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
}: {
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
}) {
  return (
    <>
      <div className="flex items-center justify-center gap-2 bg-[#e7eaeb] py-2 md:hidden">
        <PhoneCall className="size-4" />
        <span className="text-xs font-medium">(949) 800-8953</span>
      </div>
      <div className="text-pwr-primary-foreground flex items-center justify-between px-8 py-4">
        <Link href="/">
          <Image
            src="/branding/pwrcom-white.png"
            alt="Power Communications Logo"
            width={160}
            height={40}
            priority
          />
        </Link>
        {/* Hamburger Icon */}
        <button
          className="hover:cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <Menu className="size-8" />
        </button>
        {/* Menu Items */}
        <div
          className={`bg-pwr-primary-foreground text-pwr-primary absolute inset-0 z-35 h-dvh w-dvw overflow-y-auto px-10 py-4 ${isMobileMenuOpen ? "" : "hidden"}`}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-[36px] right-[40px] hover:cursor-pointer"
          >
            <X />
          </button>
          <Accordion
            type="single"
            collapsible
          >
            <NavAltMobileCategorySection
              value="item-0"
              header="Services"
              data={services}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default function NavAlt() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const isMobile = useIsMobile();

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 25, 50, 75, 100],
    ["transparent", "rgba(19, 45, 56, 0.3)", "rgba(19, 45, 56, 0.6)", "rgba(19, 45, 56, 0.7)", "rgba(19, 45, 56, 0.8)"],
  );
  const borderColor = useTransform(
    scrollY,
    [0, 25, 50, 75, 100],
    ["transparent", "rgba(19, 45, 56, 0.3)", "rgba(19, 45, 56, 0.6)", "rgba(19, 45, 56, 0.9)", "rgba(19, 45, 56, 1)"],
  );
  const boxShadow = useTransform(scrollY, [0, 50], ["0 0 0 transparent", "0 4px 20px rgba(0, 0, 0, 0.1)"]);
  const backdropFilter = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(14px)"]);

  useEffect(() => {
    if (isMobileMenuOpen && isMobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen, isMobile]);

  return (
    <motion.nav
      style={{
        backgroundColor,
        borderColor,
        backdropFilter,
        boxShadow,
      }}
      className="sticky top-0 z-50"
    >
      {isMobile ? (
        <NavAltMobile
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      ) : (
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-10 py-4 lg:px-16">
          <Link
            href="/"
            className="shrink-0"
          >
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
            <PhoneCall
              className="size-4 shrink-0"
              aria-hidden="true"
            />
            <span className="text-sm">(949) 800-8953</span>
          </a>
        </div>
      )}
    </motion.nav>
  );
}

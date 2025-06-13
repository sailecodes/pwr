"use client";

import { Menu, PhoneCall } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import CustomButton from "../general/custom-button";
import CustomLink from "../general/custom-link";
import { Separator } from "../ui/separator";
import NavLinks from "./nav-links";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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

  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMenuOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <motion.nav
      style={{
        backgroundColor,
        borderColor,
        backdropFilter,
      }}
      className={`sticky top-0 z-50 gap-4 border-b py-4 ${isMenuOpen ? "bg-pwr-primary/90" : ""}`}
    >
      {isMobile ? (
        <div className="text-pwr-primary-foreground flex items-center justify-between p-4">
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
            className={`absolute inset-0 top-[100%] z-35 h-[calc(100vh-100%)] w-screen ${isMenuOpen ? "bg-pwr-primary/90" : "hidden"}`}
          >
            <div
              className={`bg-pwr-primary ml-auto h-full w-[320px] sm:w-3/5 ${isMenuOpen ? "" : "hidden"}`}
            >
              <ul className="space-y-6 p-8">
                <li className="space-y-3">
                  <header className="text-lg font-bold">Managed IT</header>
                  <ul className="text-pwr-primary-muted-foreground space-y-2">
                    <li className="font-medium hover:cursor-pointer hover:text-gray-500">
                      Service 1
                    </li>
                    <li className="font-medium hover:cursor-pointer hover:text-gray-500">
                      Service 2
                    </li>
                  </ul>
                </li>
                <li className="space-y-3">
                  <header className="text-lg font-bold">Network Infrastructure</header>
                  <ul className="text-pwr-primary-muted-foreground space-y-2">
                    <li className="font-medium hover:cursor-pointer hover:text-gray-500">
                      Service 1
                    </li>
                    <li className="font-medium hover:cursor-pointer hover:text-gray-500">
                      Service 2
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-16">
          <img
            src={"/branding/pwrcom-white.png"}
            alt="Company Logo"
            width={180}
          />
          <NavLinks />
          <CustomLink href="/contact-us">FREE CONSULTATION</CustomLink>
          <div className="text-pwr-primary-foreground ml-auto flex items-center gap-2">
            <PhoneCall />
            <span>555-666-1234</span>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

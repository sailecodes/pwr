"use client";

import { PhoneCall } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import CustomButton from "../general/button";
import NavLinks from "./nav-links";

export default function Nav() {
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
      "#132d38",
    ],
  );

  const backdropFilter = useTransform(scrollY, [0, 25], ["blur(0px)", "blur(12px)"]);

  return (
    <motion.nav
      style={{
        backgroundColor,
        borderColor,
        backdropFilter,
      }}
      className="sticky top-0 z-50 gap-4 border-b py-4"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-16">
        <img src={"/branding/pwrcoms-white.png"} alt="Company Logo" width={180} />
        <NavLinks />
        <CustomButton>FREE QUOTE</CustomButton>
        <div className="text-pwr-primary-foreground ml-auto flex items-center gap-2">
          <PhoneCall />
          <span>555-666-1234</span>
        </div>
      </div>
    </motion.nav>
  );
}

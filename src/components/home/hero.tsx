"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { homeHeroPhrases } from "@/lib/data";
import CustomButton from "../general/custom-button";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % homeHeroPhrases.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative grid h-[675px] place-items-center px-10 pb-4"
      style={{
        backgroundImage: "url('/bgs/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-pwr-primary/50 absolute inset-0" />
      <div className="text-pwr-primary-foreground relative z-10 flex flex-col items-center gap-12">
        <div className="space-y-3 text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={homeHeroPhrases[index]}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold"
            >
              {homeHeroPhrases[index]}
            </motion.p>
          </AnimatePresence>
          <p className="text-xl font-medium">We Got You Covered.</p>
        </div>
        <CustomButton>FREE QUOTE</CustomButton>
      </div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import CustomButton from "../general/button";
import { homeHeroPhrases } from "@/lib/data";

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
      className="text-pwr-primary-foreground -mt-[68px] flex h-[600px] flex-col items-center justify-center gap-12"
      style={{ backgroundImage: "url('/imgs/hero-bg.jpg')" }}
    >
      <div className="text-center text-lg leading-15 font-medium">
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
        We Got You Covered.
      </div>
      <CustomButton>FREE QUOTE</CustomButton>
    </section>
  );
}

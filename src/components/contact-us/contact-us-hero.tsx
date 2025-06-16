import { Mail, MapPin, PhoneCall } from "lucide-react";
import React from "react";
import ContactUs from "../app-layout/contact-us-alt";

export default function ContactUsHero() {
  return (
    <section className="relative -top-[85.75px] grid min-h-dvh place-items-center px-10 pt-[110.75px] pb-24">
      {/* ABSOLUTES */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover">
        <source
          src="/bgs/services-hero-2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="bg-pwr-primary/65 absolute inset-0" />
      <div className="relative z-10 mx-auto w-fit max-w-7xl">
        <div className="bg-pwr-primary flex w-full flex-col items-center gap-24 rounded-md p-8 shadow-[0_0_50px_rgba(0,0,0,0.35)] lg:px-14 lg:py-16">
          <ContactUs
            isPrimaryForeground
            classNames={{ form: "md:grid-cols-2" }}
          />
          <div className="text-pwr-primary-foreground grid max-w-[375px] place-items-center gap-2 gap-y-4 text-sm md:grid-cols-2">
            <a
              href="tel:+19498008953"
              className="hover:text-pwr-primary-foreground/80 flex items-center gap-2 transition-colors"
              aria-label="Call us at (949) 800-8953">
              <PhoneCall className="size-4 shrink-0" />
              <span className="underline underline-offset-2">(949) 800-8953</span>
            </a>
            <a
              href="mailto:criz@powercoms.com"
              className="hover:text-pwr-primary-foreground/80 flex items-center gap-2"
              aria-label="Email us at criz@powercoms.com">
              <Mail className="size-4 shrink-0" />
              <p className="underline underline-offset-2">cp@powercoms.net</p>
            </a>
            <div className="col-span-full flex items-center gap-2">
              <MapPin className="size-4 shrink-0" />
              <p>10842 Noel Street #109, Cypress, CA 90720</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

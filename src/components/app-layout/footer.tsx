import { Instagram, Mail, MapPin, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pwr-primary text-pwr-primary-foreground text-sm">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-10 py-8 md:grid-cols-3 md:gap-24 lg:gap-36 lg:py-16">
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
              <p className="text-xs font-medium tracking-wide">Where Technology and Reliability Meet.</p>
            </div>
            <div className="flex items-center gap-4">
              {/* TODO: Use alternative library for social icons */}
              <a
                href="https://www.instagram.com/power_communications/"
                target="_blank"
                rel="noopener noreferrer">
                <Instagram className="text-pwr-primary-muted-foreground hover:text-pwr-primary-muted-foreground/80" />
              </a>
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
              <p className="text-pwr-primary-muted-foreground">10842 Noel Street #109, Cypress, CA 90720</p>
            </div>
          </div>
          <div className="space-y-2">
            <header className="font-semibold">Contact</header>
            <div className="space-y-1">
              <a
                href="tel:+19498008953"
                className="text-pwr-primary-muted-foreground hover:text-pwr-primary-muted-foreground/80 flex items-center gap-2"
                aria-label="Call us at (949) 800-8953">
                <PhoneCall
                  className="size-4 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm underline underline-offset-2">(949) 800-8953</span>
              </a>
              <a
                href="mailto:criz@powercoms.com"
                className="text-pwr-primary-muted-foreground flex items-center gap-2"
                aria-label="Email us at criz@powercoms.com">
                <Mail
                  className="stroke-pwr-primary-muted-foreground size-4 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-pwr-primary-muted-foreground hover:text-pwr-primary-muted-foreground/80 underline underline-offset-2">
                  cp@powercoms.net
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* LAST */}
        <div className="space-y-1">
          <img
            src="/imgs/google-reviews.png"
            alt="Google Reviews"
            width={150}
          />
          <div className="space-y-2">
            <header className="font-semibold">We&apos;re highly rated!</header>
            <p className="text-pwr-primary-muted-foreground text-xs">
              Power Communications is proud to be a 5-star rated company on Google — thanks to the trust of our
              incredible clients.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

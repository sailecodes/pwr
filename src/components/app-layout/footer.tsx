import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import { siInstagram } from "simple-icons/icons";
import SVGIconLink from "../general/svg-icon-link";

export default function Footer() {
  return (
    <footer className="bg-pwr-primary text-pwr-primary-foreground text-sm">
      <div className="grid items-center gap-16 px-10 py-8 md:grid-cols-3 md:gap-24 lg:gap-36 lg:px-20 lg:py-16">
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
              <p className="text-xs font-medium tracking-wide">
                We bring technical solutions to you.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <SVGIconLink
                href="https://www.instagram.com/power_communications/"
                d={siInstagram.path}
                fill="#b8c0c3"
                className="size-4"
              />
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
              <p className="text-pwr-primary-muted-foreground">
                10842 Noel Street #109, Cypress, CA 90720
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <header className="font-semibold">Contact</header>
            <div className="space-y-1">
              <a
                href="tel:+19498008953"
                className="text-pwr-primary-muted-foreground flex items-center gap-2"
                aria-label="Call us at (949) 800-8953"
              >
                <PhoneCall className="size-4 shrink-0" aria-hidden="true" />
                <span className="text-sm underline underline-offset-2">(949) 800-8953</span>
              </a>
              <a
                href="mailto:criz@powercoms.com"
                className="text-pwr-primary-muted-foreground flex items-center gap-2"
                aria-label="Email us at criz@powercoms.com"
              >
                <Mail
                  className="stroke-pwr-primary-muted-foreground size-4 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-pwr-primary-muted-foreground underline underline-offset-2">
                  cp@powercoms.net
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* LAST */}
        <div className="space-y-1">
          <Image src="/imgs/google-reviews.png" alt="Google Reviews" height={150} width={150} />
          <div className="space-y-2">
            <header className="font-semibold">Lorem ipsum dolor sit!</header>
            <p className="text-pwr-primary-muted-foreground text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos corrupti at distinctio
              quae beatae..
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

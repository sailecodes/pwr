import { Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import ContactUs from "@/components/app-layout/contact-us-alt";
import CustomButton from "@/components/general/custom-button";
import AssociatedCompanies from "@/components/home/home-associated-companies";

export default function Contact() {
  return (
    <main>
      <section className="relative -top-[85.75px] flex h-dvh items-center justify-center pt-[85.75px]">
        {/* ABSOLUTES */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 h-full w-full object-cover"
        >
          <source src="/bgs/services-hero-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="bg-pwr-primary/65 absolute inset-0" />
        <div className="relative z-10 mx-auto w-fit max-w-7xl px-6 py-8 lg:px-16 lg:py-12">
          <div className="bg-pwr-primary flex w-full flex-col items-center gap-12 rounded-md px-8 py-8 shadow-[0_0_50px_rgba(0,0,0,0.35)] sm:w-fit sm:flex-row lg:px-14 lg:py-10">
            <ContactUs isPrimaryForeground classNames={{ form: "md:grid-cols-2" }} />
            <span className="text-pwr-primary-foreground text-center font-bold">OR</span>
            <div className="text-pwr-primary-foreground flex flex-col gap-2 text-sm">
              <a
                href="tel:+19498008953"
                className="text-pwr-primary-foreground hover:text-pwr-primary-foreground/80 flex items-center gap-2 transition-colors"
                aria-label="Call us at (949) 800-8953"
              >
                <PhoneCall className="size-4" aria-hidden="true" />
                <span className="text-sm">(949) 800-8953</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail />
                <p>cp@powercoms.net</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin />
                <p>???</p>
              </div>
              <CustomButton className="mx-auto mt-4 w-fit">JUST CALL US</CustomButton>
            </div>
          </div>
        </div>
      </section>
      <AssociatedCompanies />
    </main>
  );
}

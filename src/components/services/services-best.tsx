import Link from "next/link";
import CustomLink from "../general/custom-link";

export default function ServicesBest({ description }: { description: string }) {
  return (
    <section className="text-pwr-primary-foreground bg-pwr-primary">
      <div className="mx-auto max-w-7xl space-y-8 px-10 py-8 lg:px-16 lg:py-12">
        <header className="text-3xl font-extrabold">How We Do It BEST</header>
        <p className="text-sm leading-relaxed">{description}</p>
        <CustomLink href="/contact-us">FREE QUOTE</CustomLink>
      </div>
    </section>
  );
}

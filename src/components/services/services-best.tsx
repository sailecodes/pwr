import CustomLink from "../general/custom-link";

export default function ServicesBest({ description }: { description: string }) {
  return (
    <section className="text-pwr-primary-foreground bg-pwr-primary">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 p-10 lg:px-16 lg:py-14">
        <header className="text-3xl leading-8 font-extrabold">How We Do It BEST</header>
        <p className="text-sm leading-relaxed">{description}</p>
        <CustomLink
          href="/contact-us"
          className="mx-auto w-fit"
        >
          FREE CONSULTATION
        </CustomLink>
      </div>
    </section>
  );
}

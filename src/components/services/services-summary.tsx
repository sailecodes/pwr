import CustomLink from "../general/custom-link";

export interface ServicesSummaryProps {
  summary: string;
}

export default function ServicesSummary({ summary }: ServicesSummaryProps) {
  return (
    <section className="text-pwr-primary mx-auto flex max-w-7xl flex-col gap-12 px-10 pt-12 pb-4">
      <header className="text-3xl leading-8 font-extrabold">Service Summary</header>
      <p className="text-sm leading-relaxed">{summary}</p>
      <CustomLink
        isPrimary
        href="/contact-us"
        className="mx-auto w-fit">
        FREE CONSULTATION
      </CustomLink>
    </section>
  );
}

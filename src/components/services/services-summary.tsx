import CustomButton from "../general/button";

export interface ServicesSummaryProps {
  summary: string;
}

export default function ServicesSummary({ summary }: ServicesSummaryProps) {
  return (
    <section className="text-pwr-primary flex max-w-7xl flex-col space-y-6 px-10 py-8 lg:px-16 lg:py-12">
      <header className="text-3xl font-extrabold">Service Summary</header>
      <p className="text-sm">{summary}</p>
      <CustomButton isPrimary className="mx-auto w-fit">
        FREE CONSULTATION
      </CustomButton>
    </section>
  );
}

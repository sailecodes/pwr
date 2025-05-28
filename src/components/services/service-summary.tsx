export interface ServiceSummaryProps {
  summary: string;
}

export default function ServiceSummary({ summary }: ServiceSummaryProps) {
  return (
    <section className="text-pwr-primary flex flex-col space-y-6">
      <header className="text-3xl font-extrabold">Service Summary</header>
      <p className="text-sm">{summary}</p>
      <button className="border-pwr-primary hover:bg-pwr-primary hover:text-pwr-primary-foreground place-self-center rounded-lg border px-4 py-2 font-bold transition hover:cursor-pointer">
        FREE CONSULTATION
      </button>
    </section>
  );
}

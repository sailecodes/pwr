import StatsCard from "./stats-card";

export default function Stats() {
  return (
    <section className="bg-pwr-primary text-pwr-primary-foreground flex flex-col gap-8 px-10 py-8 md:flex-row md:justify-center md:gap-32 md:px-16 md:py-12">
      <StatsCard stat={20} text="Businesses Count On Us" />
      <StatsCard stat={10} text="Years Delivering IT Excellence" />
      <StatsCard stat={137} text="Happy Clients" />
    </section>
  );
}

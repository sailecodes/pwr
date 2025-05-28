import StatsCard from "./stats-card";

export default function Stats() {
  return (
    <section className="bg-pwr-primary text-pwr-primary-foreground grid justify-items-center gap-8 rounded-md px-10 py-8 md:grid-cols-3 md:justify-between md:gap-4 lg:px-16 lg:py-12">
      <StatsCard stat={20} text="Businesses Count On Us" />
      <StatsCard stat={10} text="Years Delivering IT Excellence" />
      <StatsCard stat={137} text="Happy Clients" />
    </section>
  );
}

import StatsCard from "./stats-card";

export default function Stats() {
  return (
    <section className="bg-pwr-primary text-pwr-primary-foreground flex justify-between rounded-md px-16 py-8">
      <StatsCard stat={20} text="Businesses Count On Us" />
      <StatsCard stat={10} text="Years Delivering IT Excellence" />
      <StatsCard stat={137} text="Happy Clients" />
    </section>
  );
}

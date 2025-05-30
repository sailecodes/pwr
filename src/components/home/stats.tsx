import { homeStats } from "@/lib/data";
import StatsCard from "./stats-card";

export default function Stats() {
  return (
    <section
      className="bg-pwr-primary text-pwr-primary-foreground relative px-10 py-14 lg:px-16 lg:py-24"
      style={{
        backgroundImage: "url('/bgs/stats-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-pwr-primary/85 absolute inset-0" />
      <div className="relative z-10 flex flex-col gap-12 md:flex-row md:justify-center md:gap-32">
        {homeStats.map((stat, ind) => (
          <StatsCard
            key={`${stat.stat}-${stat.text}-${ind}-stat`}
            stat={stat.stat}
            text={stat.text}
            statType={stat.statType}
          />
        ))}
      </div>
    </section>
  );
}

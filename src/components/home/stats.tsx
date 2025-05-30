import { EStatType } from '@/lib/enums';
import StatsCard from './stats-card';

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
        <StatsCard stat={20} text="Businesses Count On Us" statType={EStatType.NONE} />
        <StatsCard stat={10} text="Years Delivering IT Excellence" statType={EStatType.PLUS} />
        <StatsCard stat={137} text="Happy Clients" statType={EStatType.NONE} />
      </div>
    </section>
  );
}

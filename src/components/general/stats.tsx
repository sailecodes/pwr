"use client";

import CountUp from "react-countup";
import { homeStats } from "@/lib/data";
import { EStatType } from "@/lib/enums";

function StatsCard({ stat, text, statType }: { stat: number; text: string; statType: EStatType }) {
  return (
    <div className="flex flex-col text-center">
      <span className="text-3xl font-extrabold">
        <CountUp
          start={0}
          end={stat}
          decimals={stat % 1 > 0 ? 1 : 0}
          enableScrollSpy
          scrollSpyOnce
          scrollSpyDelay={100}
          useEasing={false}
          suffix={statType === EStatType.PERCENTAGE ? "%" : statType === EStatType.PLUS ? "+" : ""}
        />
      </span>
      <p className="text-lg font-bold">{text}</p>
    </div>
  );
}

export default function Stats({
  stats,
}: {
  stats?: {
    stat: number;
    text: string;
    statType: EStatType;
  }[];
}) {
  return (
    <section
      className="bg-pwr-primary text-pwr-primary-foreground relative"
      style={{
        backgroundImage: "url('/bgs/stats-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-pwr-primary/85 absolute inset-0" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-10 py-14 md:grid-cols-3 md:gap-24 lg:px-16 lg:py-24">
        {homeStats.map((stat, ind) => (
          <StatsCard
            key={`${stat.stat}-${stat.text}-${ind}`}
            stat={stat.stat}
            text={stat.text}
            statType={stat.statType}
          />
        ))}
      </div>
    </section>
  );
}

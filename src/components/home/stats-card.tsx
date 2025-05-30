"use client";

import CountUp from "react-countup";
import { EStatType } from "@/lib/enums";

export interface StatsCardProps {
  stat: number;
  text: string;
  statType: EStatType;
}

export default function StatsCard({ stat, text, statType }: StatsCardProps) {
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

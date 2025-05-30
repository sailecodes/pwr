"use client";

import CountUp from 'react-countup';
import { EStatType } from '@/lib/enums';

export interface ServiceStatsCardProps {
  stat: number;
  text: string;
  statType: EStatType;
}

export default function ServiceStatsCard({ stat, text, statType }: ServiceStatsCardProps) {
  return (
    <div className="text-pwr-primary-foreground flex flex-col text-center text-lg font-semibold">
      <CountUp
        className="text-3xl font-extrabold"
        start={0}
        end={stat}
        enableScrollSpy
        scrollSpyOnce
        scrollSpyDelay={100}
        useEasing={false}
        suffix={statType === EStatType.PERCENTAGE ? "%" : statType === EStatType.PLUS ? "+" : ""}
      />
      {text}
    </div>
  );
}

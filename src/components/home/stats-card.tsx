"use client";

import CountUp from "react-countup";

export default function StatsCard({ stat, text }: { stat: number; text: string }) {
  return (
    <div className="flex flex-col text-center text-lg font-semibold">
      <CountUp className="text-3xl font-bold" end={stat} enableScrollSpy scrollSpyOnce scrollSpyDelay={100} useEasing={false} />
      {text}
    </div>
  );
}

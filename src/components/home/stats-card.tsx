"use client";

import CountUp from "react-countup";

export default function StatsCard({ stat, text }: { stat: number; text: string }) {
  return (
    <div className="flex flex-col text-lg font-semibold">
      <CountUp className="text-center text-3xl font-bold" end={stat} enableScrollSpy scrollSpyOnce />
      {text}
    </div>
  );
}

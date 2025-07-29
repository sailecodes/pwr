"use client";

import { PhoneCall } from "lucide-react";
import Countdown from "react-countdown";

export default function Reserve() {
  return (
    <section className="text-pwr-primary mx-auto max-w-6xl px-5">
      <Countdown
        date={Date.now() + 5 * 60 * 1000}
        renderer={({ minutes, seconds, completed }) => {
          if (completed) {
            return <span>0:00</span>;
          }

          const formattedMinutes = minutes.toString().padStart(1, "0");
          const formattedSeconds = seconds.toString().padStart(2, "0");

          return (
            <span className="text-4xl font-medium">
              Act Fast - You Have{" "}
              <span className="text-5xl font-bold">
                {formattedMinutes}:{formattedSeconds}
              </span>{" "}
              Left!
            </span>
          );
        }}
      />
      <p>
        Call now and get an instant 5% discount off your total project cost. This limited-time offer expires when the
        timer hits zero.
      </p>
      <div>
        <header>Call Now to Lock In Your Discount:</header>
        <a
          href="tel:+19498008953"
          className="flex items-center gap-2"
          aria-label="Call us at (949) 800-8953">
          <PhoneCall
            className="size-4 shrink-0"
            aria-hidden="true"
          />
          <span className="">(949) 800-8953</span>
        </a>
        <p>Our specialists are ready to help!</p>
      </div>
    </section>
  );
}

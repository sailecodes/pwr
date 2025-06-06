import { EStatType } from "@/lib/enums";
import ServiceStatsCard from "./service-stats-card";

export default function ServiceStats() {
  return (
    <section className="bg-pwr-primary relative mx-auto grid max-w-[900px] gap-4 rounded-lg p-6 md:grid-cols-3">
      <ServiceStatsCard stat={150} text="Companies Impacted" statType={EStatType.PLUS} />
      <ServiceStatsCard stat={95} text="Returning Customers" statType={EStatType.PERCENTAGE} />
      <ServiceStatsCard stat={92} text="Satisfied Clients" statType={EStatType.NONE} />
    </section>
  );
}

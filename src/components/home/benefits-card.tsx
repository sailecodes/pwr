import { BenefitsCardProps } from "@/lib/interfaces";

export default function BenefitsCard({ icon: Icon, header, text }: BenefitsCardProps) {
  return (
    <div className="text-pwr-primary flex gap-2">
      <Icon className="shrink-0" />
      <div className="space-y-1">
        <header className="text-lg leading-6 font-semibold">{header}</header>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}

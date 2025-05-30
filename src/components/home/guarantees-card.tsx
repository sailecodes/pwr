import { GuaranteesCardProps } from "@/lib/interfaces";

export default function GuaranteesCard({ icon: Icon, header }: GuaranteesCardProps) {
  return (
    <div className="text-pwr-primary flex gap-2">
      <Icon className="shrink-0" />
      <header className="text-xl leading-6 font-bold">{header}</header>
    </div>
  );
}

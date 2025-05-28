export interface ServiceBenefitsCardProps {
  header: string;
  text: string;
}

export default function ServiceBenefitsCard({ header, text }: ServiceBenefitsCardProps) {
  return (
    <div className="space-y-1">
      <header className="text-2xl font-semibold">{header}</header>
      <p className="text-sm">{text}</p>
    </div>
  );
}

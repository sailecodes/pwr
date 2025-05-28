import { ElementType } from "react";

export default function SpecialtiesCard({ icon: Icon, header, text }: { icon: ElementType; header: string; text: string }) {
  return (
    <div className="text-pwr-primary flex gap-2 rounded-md px-8 py-6 hover:bg-gray-100 hover:shadow-md">
      <Icon className="shrink-0" />
      <div className="space-y-1">
        <header className="text-lg leading-6 font-semibold">{header}</header>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}

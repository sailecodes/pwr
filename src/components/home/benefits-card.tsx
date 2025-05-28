import { ElementType } from "react";

export default function BenefitsCard({ icon: Icon, header, text }: { icon: ElementType; header: string; text: string }) {
  return (
    <div className="text-pwr-primary flex gap-2">
      <Icon className="shrink-0" />
      <div className="space-y-1">
        <header className="text-lg leading-6 font-semibold">{header}</header>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam nobis magnam quod quos inventore dolores deserunt
          expedita voluptate eligendi, beatae esse accusamus voluptas, laudantium laborum aperiam similique sapiente libero. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}

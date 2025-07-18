import { DollarSign, Handshake, Plug } from "lucide-react";
import { ElementType } from "react";

function LandingITWhyListItem({ icon: Icon, header, text }: { icon: ElementType; header: string; text: string }) {
  return (
    <li className="space-y-2">
      <header className="flex items-center gap-1">
        <Icon />
        <p className="font-medium sm:text-lg">{header}</p>
      </header>
      <p className="text-sm leading-6">{text}</p>
    </li>
  );
}

export default function LandingITWhy() {
  return (
    <section className="px-4">
      <div
        className="relative mx-auto max-w-7xl min-w-[325px] text-white sm:flex sm:justify-between sm:rounded-r-3xl"
        style={{
          backgroundImage: "url(landing/landing-why-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <header className="p-5 text-lg leading-6 font-bold text-shadow-lg sm:text-3xl/9">
          Expert IT Services <br /> That Nail Every Step
        </header>
        <ul className="bg-pwr-primary relative -bottom-5 w-full space-y-6 rounded-3xl p-8 shadow-xl/30 sm:-bottom-0 sm:w-fit">
          <LandingITWhyListItem
            icon={Plug}
            header="Professional IT"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati officiis doloremque delectus
              iure veniam aliquid."
          />
          <LandingITWhyListItem
            icon={DollarSign}
            header="Lower Costs"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati officiis doloremque delectus
              iure veniam aliquid."
          />
          <LandingITWhyListItem
            icon={Handshake}
            header="Quality Service"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati officiis doloremque delectus
              iure veniam aliquid."
          />
        </ul>
      </div>
    </section>
  );
}

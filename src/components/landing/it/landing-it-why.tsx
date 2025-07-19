import { DollarSign, Handshake, Plug } from "lucide-react";
import { ElementType } from "react";

function LandingITWhyListItem({ icon: Icon, header, text }: { icon: ElementType; header: string; text: string }) {
  return (
    <li className="space-y-2">
      <header className="flex items-center gap-1">
        <Icon />
        <p className="font-medium sm:text-lg lg:text-2xl">{header}</p>
      </header>
      <p className="text-sm leading-6">{text}</p>
    </li>
  );
}

export default function LandingITWhy() {
  return (
    <section className="mb-12 px-5">
      <div
        className="relative mx-auto max-w-6xl min-w-[325px] text-white sm:flex sm:justify-between sm:rounded-r-3xl"
        style={{
          backgroundImage: "url(landing/landing-why-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <header className="relative z-2 p-5 text-lg/6 font-bold text-shadow-lg sm:p-6 sm:text-3xl/9 md:p-8 lg:text-4xl/10">
          Expert IT Services <br /> That Nail Every Step
        </header>
        <ul className="bg-pwr-primary relative -bottom-5 z-2 w-full space-y-6 rounded-3xl p-5 shadow-xl/40 sm:-bottom-0 sm:w-fit sm:p-6 md:p-8">
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
              iure veniam aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati officiis doloremque delectus
              iure veniam aliquid."
          />
          <LandingITWhyListItem
            icon={Handshake}
            header="Quality Service"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati officiis doloremque delectus
              iure veniam aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </ul>
        <div className="bg-pwr-primary/50 absolute inset-0 sm:rounded-r-3xl" />
      </div>
    </section>
  );
}

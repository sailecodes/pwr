import { CheckCircle2 } from "lucide-react";

export default function LandingITBenefits() {
  return (
    <section>
      <div className="relative mx-auto max-w-7xl min-w-[325px] space-y-4 p-5 sm:flex sm:flex-row-reverse">
        <img
          src="landing/landing-benefits-cover.jpg"
          alt="Benefits of Professional IT"
          className="mx-auto rounded-3xl object-cover object-center"
        />
        <div className="flex shrink-0 flex-col space-y-4">
          <div className="space-y-2">
            <header className="text-lg font-bold">Benefits of Professional IT</header>
            <ul className="text-sm">
              <li className="flex items-center gap-1">
                <CheckCircle2 className="shrink-0 self-start" />
                <span className="relative top-[2px]">Lorem ipsum dolor sit, amet consectetur adipisicing.</span>
              </li>
              <li className="flex items-center gap-1">
                <CheckCircle2 className="shrink-0 self-start" />
                <span className="relative top-[2px]">Lorem ipsum dolor sit, amet consectetur adipisicing.</span>
              </li>
              <li className="flex items-center gap-1">
                <CheckCircle2 className="shrink-0 self-start" />
                <span className="relative top-[2px]">Lorem ipsum dolor sit, amet consectetur adipisicing.</span>
              </li>
            </ul>
          </div>
          <button className="bg-pwr-primary text-bg mx-auto rounded-lg px-4 py-2 font-bold uppercase hover:cursor-pointer">
            Get a quote
          </button>
        </div>
      </div>
    </section>
  );
}

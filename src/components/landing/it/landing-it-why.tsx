import { DollarSign, Handshake, Plug } from "lucide-react";

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
        <header className="p-5 text-lg leading-6 font-bold text-shadow-md sm:text-2xl/7">
          Expert IT Services <br /> That Nail Every Step
        </header>
        <div className="bg-pwr-primary relative -bottom-5 w-full space-y-6 rounded-3xl p-8 shadow-xl/30 sm:-bottom-0 sm:w-fit">
          <div className="space-y-2">
            <header className="flex items-center gap-1">
              <Plug />
              <p className="font-medium sm:text-xl">Professional IT</p>
            </header>
            <p className="text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati officiis doloremque delectus
              iure veniam aliquid.
            </p>
          </div>
          <div className="space-y-2">
            <header className="flex items-center gap-1">
              <DollarSign />
              <p className="font-medium sm:text-xl">Lower Costs</p>
            </header>
            <p className="text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati officiis doloremque delectus
              iure veniam aliquid.
            </p>
          </div>
          <div className="space-y-2">
            <header className="flex items-center gap-1">
              <Handshake />
              <p className="font-medium sm:text-xl">Quality Service</p>
            </header>
            <p className="text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati officiis doloremque delectus
              iure veniam aliquid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

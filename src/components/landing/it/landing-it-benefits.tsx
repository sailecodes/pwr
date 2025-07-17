import { CheckCircle2 } from "lucide-react";

const data = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam reprehenderit vel aut officia officiis dolores sapiente ad at perspiciatis.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, accusantium delectus excepturi ut, incidunt ex sunt.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rerum necessitatibus impedit maxime distinctio exercitationem consectetur.",
];

function LandingITBenefitsListItem({ benefit }: { benefit: string }) {
  return (
    <li className="flex items-center gap-1">
      <CheckCircle2 className="shrink-0 self-start" />
      <span className="relative top-[2px]">{benefit}</span>
    </li>
  );
}

export default function LandingITBenefits() {
  return (
    <section>
      <div className="mx-auto max-w-7xl min-w-[325px] p-5 lg:flex lg:flex-row-reverse lg:justify-end lg:gap-10">
        <div className="mb-4 sm:mb-7">
          <img
            src="landing/landing-benefits-cover.jpg"
            alt="Benefits of Professional IT"
            className="mx-auto rounded-3xl object-cover object-center"
          />
        </div>
        <div className="mx-auto flex shrink-0 flex-col gap-4 sm:max-w-[650px] sm:gap-6 lg:mx-0 lg:max-w-[400px]">
          <div className="space-y-3 sm:space-y-5">
            <header className="text-center text-lg font-bold sm:text-3xl">Benefits of Professional IT</header>
            <ul className="space-y-2 text-sm sm:space-y-4">
              {data.map((benefit, ind) => (
                <LandingITBenefitsListItem
                  key={`${benefit}-${ind}`}
                  benefit={benefit}
                />
              ))}
            </ul>
          </div>
          <button className="hover:bg-pwr-primary/90 bg-pwr-primary text-bg mx-auto rounded-lg px-4 py-2 font-bold uppercase transition-transform hover:scale-[101%] hover:cursor-pointer">
            Get a quote
          </button>
        </div>
      </div>
    </section>
  );
}

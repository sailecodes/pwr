export default function LandingITBest() {
  return (
    <section className="bg-pwr-primary/30 mb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 p-5 sm:h-[275px] sm:flex-row sm:justify-between sm:gap-10">
        <div className="text-pwr-primary space-y-2 sm:max-w-[450px] lg:max-w-[550px]">
          <header className="text-center text-lg/6 font-bold sm:text-left sm:text-3xl/9 lg:text-4xl/10">
            We Install Only The Best
          </header>
          <p className="text-sm/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explica, quibusdam magnam eos dolores doloribus
            officia provident voluptatum. Distinctio fuga ducimus perferendis, deserunt dolore mollitia reiciendis ipsa
            harum eum labore.
          </p>
        </div>
        <div className="bg-pwr-primary grid max-w-[600px] grid-cols-2 gap-2 rounded-lg p-5">
          <div className="flex flex-col gap-2">
            <div className="grid flex-1/2 place-items-center overflow-hidden rounded-lg bg-white p-2">
              <img
                src="brands/Spectrum-logo.png"
                alt="Spectrum"
                className="max-h-[50px]"
              />
            </div>
            <div className="grid flex-1/2 place-items-center overflow-hidden rounded-lg bg-white p-2">
              <img
                src="brands/T-Mobile_US_Logo_2022_RGB_Magenta_on_Transparent.svg.png"
                alt="T-Mobile"
                className="max-h-[50px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="grid flex-1/2 place-items-center overflow-hidden rounded-lg bg-white p-2">
              <img
                src="brands/att-logo_brandlogos.net_g9nxm.png"
                alt="AT&T"
                className="max-h-[50px]"
              />
            </div>
            <div className="grid flex-1/2 place-items-center overflow-hidden rounded-lg bg-white p-2">
              <img
                src="brands/21180970-cox-logo-2084x692.png"
                alt="Crypto.com"
                className="max-h-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

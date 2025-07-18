function LandingITHeroStatItem({ stat, text }: { stat: string; text: string }) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-medium sm:text-lg">{stat}</p>
      <p className="text-sm">{text}</p>
    </div>
  );
}

export default function LandingITHero() {
  return (
    <section className="rounded-3xl px-4">
      <div
        className="relative mx-auto h-[350px] max-w-7xl min-w-[325px] space-y-5 rounded-3xl p-5 text-white sm:space-y-6 sm:p-6"
        style={{
          backgroundImage: "url(landing/landing-hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="relative z-2 space-y-1 sm:space-y-2">
          <header className="text-lg leading-6 font-bold text-shadow-lg sm:text-3xl/9">
            Focus on Your Business. <br /> We&apos;ll Handle Your Technology.
          </header>
          <p className="text-sm font-medium text-shadow-md sm:text-lg">Trusted For Top-Notch Quotes Tailored To You.</p>
        </div>
        <button className="bg-pwr-primary border-pwr-primary text-bg relative z-2 rounded-lg border-[2px] px-4 py-2 font-bold uppercase transition-all duration-200 hover:-translate-y-[1px] hover:cursor-pointer hover:shadow-lg">
          Get a quote
        </button>
        <div className="bg-pwr-primary absolute -right-2 -bottom-5 z-2 mb-0 flex gap-6 rounded-2xl px-6 py-4 shadow-xl/30 lg:flex lg:h-[90px] lg:w-[300px] lg:items-center lg:justify-center">
          <LandingITHeroStatItem
            stat="5,000+"
            text="5-Star Reviews"
          />
          <LandingITHeroStatItem
            stat="1,000+"
            text="Completed Jobs"
          />
        </div>
        <div className="bg-pwr-primary/30 absolute inset-0 rounded-3xl" />
      </div>
    </section>
  );
}

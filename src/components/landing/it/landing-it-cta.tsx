export default function LandingITCta() {
  return (
    <section
      className="relative grid h-[400px] place-items-center p-5 text-white"
      style={{
        backgroundImage: "url('landing/landing-cta-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="relative z-2 mx-auto w-full max-w-3xl space-y-8 sm:flex sm:justify-between">
        <div className="space-y-1">
          <p className="text-lg/6 font-bold sm:text-3xl/9 lg:text-4xl/10">Ready To Level Up?</p>
          <p className="text-sm font-medium sm:text-lg lg:text-2xl">Get Started Today</p>
        </div>
        <div className="space-x-2">
          <button className="bg-bg border-bg text-pwr-primary mt-4 rounded-lg border-[2px] px-4 py-2 font-bold uppercase transition-all duration-200 hover:-translate-y-[1px] hover:cursor-pointer hover:shadow-lg">
            Get a quote
          </button>
          <button className="border-bg text-bg mt-4 rounded-lg border-[2px] px-4 py-2 font-bold uppercase transition-all duration-200 hover:-translate-y-[1px] hover:cursor-pointer hover:shadow-lg">
            <a href="tel:+19498008953">(949) 800-8953</a>
          </button>
        </div>
      </div>
      <div className="bg-pwr-primary/50 absolute inset-0" />
    </section>
  );
}

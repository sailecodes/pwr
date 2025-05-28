export default function ServiceHero() {
  return (
    <section className="bg-pwr-primary relative z-10 -mt-[68px] h-[500px] px-8 pt-[100px]">
      <div className="text-primary-foreground flex w-fit flex-col space-y-6 border border-white px-10 py-8">
        <header className="text-3xl font-bold">Service</header>
        <div className="space-y-4">
          <p>&gt; Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>&gt; Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>&gt; Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <button className="border-pwr-primary-foreground text-pwr-primary-foreground hover:text-pwr-primary hover:bg-pwr-primary-foreground place-self-center rounded-lg border px-4 py-2 font-bold transition hover:cursor-pointer">
          FREE CONSULTATION
        </button>
      </div>
    </section>
  );
}

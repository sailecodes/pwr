import LandingITFooter from "@/components/landing/it/landing-it-footer";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-dvh w-dvw pt-5">
      <nav className="mx-auto mb-5 flex max-w-6xl items-center justify-between">
        <img
          src="branding/pwrcoms black.png"
          alt="Power Communications"
          className="h-[50px]"
        />
        <button className="border-pwr-primary text-pwr-primary grid place-items-center rounded-lg border-[2px] px-4 py-2 font-bold uppercase transition-all duration-200 hover:-translate-y-[1px] hover:cursor-pointer hover:shadow-lg">
          <a href="tel:+19498008953">(949) 800-8953</a>
        </button>
      </nav>
      {children}
      <LandingITFooter />
    </main>
  );
}

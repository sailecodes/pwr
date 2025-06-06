export default function Footer() {
  return (
    <footer className="bg-pwr-primary text-pwr-primary-foreground">
      <div className="relative mx-auto max-w-7xl px-10 py-8 lg:px-16 lg:py-12">
        <header className="space-y-1">
          <img
            src={"/branding/pwrcom-white.png"}
            alt="Company Logo"
            width={140}
            className="relative right-[7px]"
          />
          <p className="text-xs font-bold tracking-wide">We bring technical solutions to you.</p>
        </header>
      </div>
    </footer>
  );
}

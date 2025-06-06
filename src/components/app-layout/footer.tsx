import { services } from "@/lib/data";

function FooterSection({
  header,
  content,
}: {
  header: string;
  content: { category: string; services: string[] }[];
}) {
  return (
    <div className="space-y-4">
      <header className="text-2xl font-extrabold">{header}</header>
      <ul className="space-y-6">
        {content.map((item, ind) => (
          <li
            key={`${item.category}-${ind}`}
            className="space-y-3"
          >
            <header className="font-bold">{item.category}</header>
            <ul className="text-pwr-primary-muted-foreground space-y-2">
              {item.services.map((service, ind2) => (
                <li
                  key={`${service}-${ind2}`}
                  className="text-sm font-medium hover:cursor-pointer hover:text-gray-500"
                >
                  {service}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-pwr-primary text-pwr-primary-foreground mt-12">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 space-y-8 px-10 py-8 md:flex-row md:justify-between lg:px-16 lg:py-12">
        <header className="space-y-1">
          <img
            src={"/branding/pwrcom-white.png"}
            alt="Company Logo"
            width={140}
            className="relative right-[7px]"
          />
          <p className="text-xs font-bold tracking-wide">We bring technical solutions to you.</p>
        </header>
        <div>
          <FooterSection
            header="Services"
            content={services}
          />
        </div>
      </div>
    </footer>
  );
}
